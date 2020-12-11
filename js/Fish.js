AFRAME.registerComponent("fish-genrator", {
  init: function() {
    const numberOfFishes = 10;
    for (var i = 1; i <= numberOfFishes; i++) {
      const id = `fish${i}`;
      const posX = Math.floor(Math.random() * -100 + 50);
      const posY = Math.floor(Math.random() * -10 + 10);
      const posZ = Math.floor(Math.random() * 0 + -20);
      const randomScale = Math.random() * 0.01 + 0.008;
      const scale = { x: randomScale, y: randomScale, z: randomScale };
      const position = { x: posX, y: posY, z: posZ };
      this.genrateFish(id, position, scale);
    }
  },
  genrateFish: function(id, position, scale) {
    const fishContainerEle = document.querySelector("#fishContainer");
    var fishEl = document.createElement("a-entity");
    const rotationProp = { x: 0, y: -90, z: -40 };
    // Do `.setAttribute()`s to initialize the entity.
    fishEl.setAttribute("id", id);
    fishEl.setAttribute("material", "color", "#ff9100");
    fishEl.setAttribute("position", position);
    fishEl.setAttribute("rotation", rotationProp);
    fishEl.setAttribute("gltf-model", "../assets/trout/scene.gltf");
    fishEl.setAttribute("scale", scale);
    fishEl.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 2
    });

    fishContainerEle.appendChild(fishEl);
  }
});
