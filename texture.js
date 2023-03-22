AFRAME.registerComponent('mydrone', { // CUSTOM COMPONENT UNTUK TEXTURE
  init: function () {
    let el = this.el;
    el.addEventListener('model-loaded', (e) => {
      let tree3D = el.getObject3D('mesh');
      if (!tree3D) {
        return;
      }
      tree3D.traverse(function (node) {
        if (node.isMesh) {
          if (node.material.name === 'mat_01') {
            node.material.metalnessMap = new THREE.TextureLoader().load(
              '/asset/textures/mat_01_metallicRoughness.png'
            );
            node.material.roughnessMap = new THREE.TextureLoader().load(
              '/asset/textures/mat_01_metallicRoughness.png'
            );
            node.material.normalMap = new THREE.TextureLoader().load(
              '/asset/textures/mat_01_normal.png'
            );
          }
          if (node.material.name === 'TT_checker_4096x4096_UV_GRID') {
            node.material.metalnessMap = new THREE.TextureLoader().load(
              '/asset/textures/TT_checker_4096x4096_UV_GRID_metallicRoughness.png'
            );
            node.material.roughnessMap = new THREE.TextureLoader().load(
              '/asset/textures/TT_checker_4096x4096_UV_GRID_metallicRoughness.png'
            );
            node.material.normalMap = new THREE.TextureLoader().load(
              '/asset/textures/TT_checker_4096x4096_UV_GRID_normal.png'
            );
          }
        }
      });
    });
  },
});