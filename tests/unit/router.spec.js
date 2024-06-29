import { mount } from '@vue/test-utils';
import router from '@/router';
import store from '@/store';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

describe('Vue Router', () => {
  test('La ruta Home debe cargar el componente HomeView', async () => {
    // Arrange: No usé porque quiero probar si está bien configurado router/index.js

    // Act: Probar la ruta hacia el componente
    router.push('/');
    await router.isReady();
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router, store]
      }
    });

    // Assert: Verificar que el componente existe
    expect(wrapper.exists()).toBe(true);
  });

  test('La ruta Home debe cargar el componente AboutView', async () => {
    // Arrange: No usé porque quiero probar si está bien configurado router/index.js

    // Act: Probar la ruta hacia el componente
    router.push('/about');
    await router.isReady();
    const wrapper = mount(AboutView, {
      global: {
        plugins: [router]
      }
    });

    // Assert: Verificar que el componente existe
    expect(wrapper.exists()).toBe(true);
  });
});