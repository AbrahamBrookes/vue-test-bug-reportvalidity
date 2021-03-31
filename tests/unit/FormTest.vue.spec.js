import {shallowMount, createLocalVue} from '@vue/test-utils'
import {BootstrapVue} from 'bootstrap-vue'
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(BootstrapVue)
localVue.use(Vuex)

import TestForm from './../../src/components/TestForm.vue'

const actions = {
    store: jest.fn().mockName('store')
}
const store = new Vuex.Store({
    modules: {
        Test: {
            namespaced: true,
            actions
        }
    },
});

const wrapper = shallowMount(TestForm, {
    localVue,
    store
})

// test values
const validName = "Test"

// elements
let form = () => wrapper.find('[data-testid="form"]')
let nameInp = () => wrapper.find('[data-testid="name-input"]')

beforeEach(() => {
    jest.clearAllMocks()
})

test('it contains the correct fields', () => {
    expect(nameInp().exists()).toBe(true)
})

test('it does not save when setting an empty value on the input', () => {

    nameInp().value = ''
    form().trigger('submit')

    expect(actions.store).not.toHaveBeenCalled()
})

test('it does not save when setting an empty value on the v-model property', () => {

    wrapper.vm.$data.name = ''
    form().trigger('submit')

    expect(actions.store).not.toHaveBeenCalled()
})

test('it saves when setting a valid value on the v-model property', () => {

    wrapper.vm.$data.name = validName
    form().trigger('submit')

    expect(actions.store).toHaveBeenCalled()
})

test('it saves when setting a valid value on the input', () => {

    nameInp().value = validName
    form().trigger('submit')

    expect(actions.store).toHaveBeenCalled()
})

