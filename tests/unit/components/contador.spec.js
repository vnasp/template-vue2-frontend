import { shallowMount } from '@vue/test-utils';
import ContadorComponent from '@/components/ContadorComponent.vue';
import store from '@/store';

describe('ContadorComponent.vue', () => {
  test('El contador debe iniciar en cero', () => {
    // Arrange: Montar el componente con Vuex.
    // Uso de shallowMount porque no tiene hijos
    const wrapper = shallowMount(ContadorComponent, {
      global: {
        plugins: [store],
      },
    });

    // Act: Obtener el texto del contador
    const counterText = wrapper.find('#textoContador').text();

    // Assert: Verificar que el contador inicial es 0
    expect(counterText).toContain('0');
  });

  test('El botón aumentar debe incrementar el contador', async () => {
    // Arrange: Estado inicial en cero
    store.state.contador = 0;
    const wrapper = shallowMount(ContadorComponent, {
      global: {
        plugins: [store],
      },
    });

    // Act: Encontrar el botón de aumentar y simular un click
    const increaseButton = wrapper.find('#botonAumentar');
    await increaseButton.trigger('click');

    // Assert: Verificar que el contador ha aumentado en 1
    const counterText = wrapper.find('#textoContador').text();
    expect(counterText).toContain('1');
  });

  test('El botón disminuir debe decrementar el contador', async () => {
    // Arrange: Estado inicial en uno
    store.state.contador = 1;
    const wrapper = shallowMount(ContadorComponent, {
      global: {
        plugins: [store],
      },
    });

    // Act: Encontrar el botón de disminuir y simular un click
    const decreaseButton = wrapper.find('#botonDisminuir');
    await decreaseButton.trigger('click');

    // Assert: Verificar que el contador ha disminuido en 1
    const counterText = wrapper.find('#textoContador').text();
    expect(counterText).toContain('0');
  });
});
