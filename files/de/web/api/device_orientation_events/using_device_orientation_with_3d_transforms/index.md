---
title: Verwendung von Geräteorientierung mit 3D-Transformationen
slug: Web/API/Device_orientation_events/Using_device_orientation_with_3D_transforms
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{DefaultAPISidebar("Device Orientation Events")}}

Dieser Artikel bietet Tipps, wie Sie Geräteorientierungsinformationen zusammen mit CSS-3D-Transformationen verwenden können.

## Verwendung der Orientierung zur Drehung eines Elements

Der einfachste Weg, um [Orientierungsdaten](/de/docs/Web/API/Window/deviceorientation_event) in eine [3D-Transformation](/de/docs/Web/CSS/Reference/Properties/transform) zu konvertieren, besteht darin, die Werte `alpha`, `gamma` und `beta` als `rotateZ`, `rotateX` und `rotateY` zu verwenden.

Es ist jedoch wichtig zu beachten, dass das [Koordinatensystem der Geräteorientierung](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) sich vom [CSS-Koordinatensystem](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems) unterscheidet. Ersteres ist [rechtshändig](https://en.wikipedia.org/wiki/Right-hand_rule) und seine Y-Achse ist nach oben positiv, während letzteres ein linkshändiges Koordinatensystem ist, bei dem die Y-Achse nach unten positiv ist. Darüber hinaus sollten die Drehwinkel der Geräteorientierung immer in einer Z - X' - Y'' Reihenfolge ausgeführt werden, die nicht der Reihenfolge einiger [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) entspricht. Dies sind einige der praktischen Konsequenzen dieser Unterschiede:

- Die Reihenfolge der Winkeldrehungen ist wichtig, daher sollten die Alpha-, Beta- und Gamma-Drehungen in dieser Reihenfolge angewendet werden.
- Die {{cssxref("transform-function/rotate3d", "rotate3d()")}} CSS-Transformation und die Funktionen [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate) und [`DOMMatrix.rotateSelf()`](/de/docs/Web/API/DOMMatrix/rotateSelf) wenden Winkeldrehungen in einer Z - Y' - X'' Reihenfolge an, sodass es nicht möglich ist, die Alpha-, Beta- und Gamma-Drehungen in der richtigen Reihenfolge mit einem einzigen Aufruf von einem von ihnen anzuwenden. Stattdessen sollten Sie jede Achse einzeln in der korrekten Reihenfolge drehen.
- Aufgrund der oben genannten Unterschiede in den Koordinatensystemen, wenn die Blickrichtung zum Ursprung gerichtet ist, werden die Drehungen im CSS im Uhrzeigersinn und in der Geräteorientierungsspezifikation gegen den Uhrzeigersinn angewendet. Das bedeutet, dass Alpha und Beta invertiert werden müssen (die Drehungen um Z und X), da sie in den beiden Koordinatensystemen in verschiedene Richtungen zeigen. Gamma (die Drehung um Y) sollte jedoch unverändert bleiben.

  Hier ist ein Code-Snippet, um es zusammenzufassen:

  ```js
  const elem = document.getElementById("view3d");

  window.addEventListener("deviceorientation", (e) => {
    elem.style.transform = `rotateZ(${-e.alpha}deg) rotateX(${-e.beta}deg) rotateY(${
      e.gamma
    }deg)`;
  });
  ```

## Konvertieren von `rotate3d()` Winkeln zu `deviceorientation` Winkeln

Sollten Sie jemals eine Drehachse `rotate3d` in Orientierungs-[Euler-Winkel](https://en.wikipedia.org/wiki/Euler_angles), die von `deviceorientation` verwendet werden, umwandeln müssen, können Sie den folgenden Algorithmus verwenden:

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

- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using)
- [Erkennung der Geräteorientierung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
