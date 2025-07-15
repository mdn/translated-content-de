---
title: Verwenden der Geräteausrichtung mit 3D-Transformationen
slug: Web/API/Device_orientation_events/Using_device_orientation_with_3D_transforms
l10n:
  sourceCommit: 0d0ccc861fa024fa10836fbf0cc2c3813cd74745
---

{{DefaultAPISidebar("Device Orientation Events")}}

Dieser Artikel bietet Tipps zur Verwendung von Geräteausrichtungsinformationen in Kombination mit CSS 3D-Transformationen.

## Verwendung der Ausrichtung zur Drehung eines Elements

Der einfachste Weg, um [Ausrichtungsdaten](/de/docs/Web/API/Window/deviceorientation_event) in eine [3D-Transformation](/de/docs/Web/CSS/transform) umzuwandeln, besteht im Grunde darin, die Werte `alpha`, `gamma` und `beta` als `rotateZ`, `rotateX` und `rotateY` zu verwenden.

Es ist jedoch wichtig zu beachten, dass das [Koordinatensystem der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) sich vom [CSS-Koordinatensystem](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems) unterscheidet. Ersteres ist nämlich ein [rechtshändiges System](https://en.wikipedia.org/wiki/Right-hand_rule) und seine Y-Achse ist positiv aufwärts, während letzteres ein linkshändiges Koordinatensystem ist, dessen Y-Achse positiv nach unten verläuft. Zudem sollten die Drehwinkel der Geräteausrichtung immer in der Reihenfolge Z - X' - Y'' erfolgen, was nicht mit der Reihenfolge einiger [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) übereinstimmt. Dies sind einige der praktischen Konsequenzen dieser Unterschiede:

- Die Reihenfolge der Winkeldrehungen ist wichtig, daher stellen Sie sicher, dass die alpha-, beta- und gamma-Drehungen in dieser Reihenfolge angewendet werden.
- Die CSS-Transformation [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d) und die Funktionen [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate) und [`DOMMatrix.rotateSelf()`](/de/docs/Web/API/DOMMatrix/rotateSelf) wenden Winkeldrehungen in der Reihenfolge Z - Y' - X'' an, daher ist es nicht möglich, die alpha-, beta- und gamma-Drehungen in der richtigen Reihenfolge mit einem einzigen Aufruf einer dieser Funktionen anzuwenden. Stattdessen sollten Sie jede Achse einzeln in der korrekten Reihenfolge drehen.
- Aufgrund der oben beschriebenen Unterschiede in den Koordinatensystemen werden Drehungen um den Ursprung im CSS im Uhrzeigersinn und in der Gerätenausschreibung gegen den Uhrzeigersinn vorgenommen. Dies bedeutet, dass alpha und beta invertiert werden müssen (die Drehungen um Z und X), da sie in den beiden Koordinatensystemen in unterschiedliche Richtungen weisen. Gamma (die Drehung um Y) sollte jedoch unverändert bleiben.

  Hier ist ein Codeausschnitt, um es zusammenzufassen:

  ```js
  const elem = document.getElementById("view3d");

  window.addEventListener("deviceorientation", (e) => {
    elem.style.transform = `rotateZ(${-e.alpha}deg) rotateX(${-e.beta}deg) rotateY(${
      e.gamma
    }deg)`;
  });
  ```

## Konvertieren von `rotate3d()`-Winkeln in `deviceorientation`-Winkel

Falls Sie jemals einen `rotate3d` Achs-Winkel in [Eulerschwinkel](https://en.wikipedia.org/wiki/Euler_angles) umwandeln müssen, die von `deviceorientation` verwendet werden, können Sie den folgenden Algorithmus verwenden:

```js
// convert a rotate3d axis-angle to deviceorientation angles
function orient(aa) {
  const x = aa.x,
    y = aa.y,
    z = aa.z,
    a = aa.a,
    c = Math.cos(aa.a),
    s = Math.sin(aa.a),
    t = 1 - c,
    // axis-angle to rotation matrix
    rm00 = c + x * x * t,
    rm10 = z * s + y * x * t,
    rm20 = -y * s + z * x * t,
    rm01 = -z * s + x * y * t,
    rm11 = c + y * y * t,
    rm21 = x * s + z * y * t,
    rm02 = y * s + x * z * t,
    rm12 = -x * s + y * z * t,
    rm22 = c + z * z * t,
    TO_DEG = 180 / Math.PI,
    ea = [],
    n = Math.hypot(rm22, rm20);

  // rotation matrix to Euler angles
  ea[1] = Math.atan2(-rm21, n);

  if (n > 0.001) {
    ea[0] = Math.atan2(rm01, rm11);
    ea[2] = Math.atan2(rm20, rm22);
  } else {
    ea[0] = 0;
    ea[2] = (rm21 > 0 ? 1 : -1) * Math.atan2(-rm10, rm00);
  }

  return {
    alpha: -ea[0] * TO_DEG - 180,
    beta: -ea[1] * TO_DEG,
    gamma: ea[2] * TO_DEG,
  };
}
```

## Siehe auch

- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
