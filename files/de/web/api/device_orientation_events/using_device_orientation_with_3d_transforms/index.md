---
title: Verwendung der Geräteausrichtung mit 3D-Transformationen
slug: Web/API/Device_orientation_events/Using_device_orientation_with_3D_transforms
l10n:
  sourceCommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{DefaultAPISidebar("Device Orientation Events")}}{{securecontext_header}}

Dieser Artikel bietet Tipps zur Nutzung von Geräteausrichtungsinformationen in Kombination mit CSS 3D-Transformationen.

## Verwendung der Ausrichtung zur Drehung eines Elements

Der einfachste Weg, um [Ausrichtungsdaten](/de/docs/Web/API/Window/deviceorientation_event) in eine [3D-Transformation](/de/docs/Web/CSS/transform) umzuwandeln, besteht darin, die Werte `alpha`, `gamma` und `beta` als `rotateZ`, `rotateX` und `rotateY` Werte zu verwenden.

Es ist jedoch wichtig zu beachten, dass das [Koordinatensystem der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) sich vom [CSS-Koordinatensystem](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems) unterscheidet. Erstere ist [rechtshändig](https://en.wikipedia.org/wiki/Right-hand_rule) und die Y-Achse verläuft positiv nach oben, während letzteres ein linkshändiges Koordinatensystem ist, dessen Y-Achse positiv nach unten verläuft. Zudem sollten die Drehwinkel der Geräteausrichtung immer in der Reihenfolge Z - X' - Y'' angewendet werden, was nicht mit der Reihenfolge einiger [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) übereinstimmt. Dies sind einige der praktischen Konsequenzen dieser Unterschiede:

- Die Reihenfolge der Winkeldrehungen ist wichtig, daher stellen Sie sicher, dass die Alphadrehung, Betadrehung und Gammadrehung in dieser Reihenfolge angewendet werden.
- Die CSS-Transformation [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d) sowie die Funktionen [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate) und [`DOMMatrix.rotateSelf()`](/de/docs/Web/API/DOMMatrix/rotateSelf) wenden Winkeldrehungen in der Reihenfolge Z - Y' - X'' an, sodass es nicht möglich ist, die Alphadrehung, Betadrehung und Gammadrehung in der richtigen Reihenfolge mit einem einzigen Aufruf einer dieser Funktionen anzuwenden. Stattdessen sollten Sie jede Achse einzeln in der korrekten Reihenfolge rotieren.
- Aufgrund der oben aufgezeigten Unterschiede in den Koordinatensystemen werden Drehungen beim Blick auf den Ursprung im CSS im Uhrzeigersinn und in der Geräteausrichtungs-Spezifikation gegen den Uhrzeigersinn angewendet. Dies bedeutet, dass Alpha und Beta invertiert werden müssen (die Drehungen um Z und X), da sie in den beiden Koordinatensystemen in verschiedene Richtungen zeigen. Gamma (die Drehung um Y) sollte jedoch unverändert bleiben.

  Hier ist ein Codebeispiel, das dies zusammenfasst:

  ```js
  const elem = document.getElementById("view3d");

  window.addEventListener("deviceorientation", (e) => {
    elem.style.transform = `rotateZ(${-e.alpha}deg) rotateX(${-e.beta}deg) rotateY(${
      e.gamma
    }deg)`;
  });
  ```

## Umwandlung von `rotate3d()` Winkeln in `deviceorientation` Winkel

Falls Sie jemals einen Rotate3D-Achsenwinkel in die von `deviceorientation` verwendeten [Euler-Winkel](https://en.wikipedia.org/wiki/Euler_angles) umwandeln müssen, können Sie den folgenden Algorithmus verwenden:

```js
// konvertiert einen Rotate3D-Achsenwinkel in Geräteausrichtungs-Winkel
function orient(aa) {
  const x = aa.x,
    y = aa.y,
    z = aa.z,
    a = aa.a,
    c = Math.cos(aa.a),
    s = Math.sin(aa.a),
    t = 1 - c,
    // Achsenwinkel in Rotationsmatrix
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

  // Rotationsmatrix in Euler-Winkel
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
- [Geräteausrichtung erkennen](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
