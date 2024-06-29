import { mount } from '@vue/test-utils';
import ParentComponent from '@/components/ParentComponent.vue';

describe('Comunicación entre ParentComponent y su ChildComponent', () => {
  test('El componente ChildComponent debe enviar el texto a ParentComponent', async () => {
    // Arrange: Montar el componente ParentComponent
    // Se usa mount en vez de shallowMount para incluir a a sus componentes hijos
    const wrapper = mount(ParentComponent);

    // Act: Encontrar el input y botón. Simular un texto y hacer click.
    const input = wrapper.find('input');
    const button = wrapper.find('button');
    await input.setValue('Texto de prueba');
    await button.trigger('click');

    // Assert: Verificar que en ParentComponent se muestre el texto
    expect(wrapper.html()).toContain('Texto: Texto de prueba');
  });
});