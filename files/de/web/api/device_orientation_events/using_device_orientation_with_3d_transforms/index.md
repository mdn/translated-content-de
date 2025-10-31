---
title: Verwendung der Geräteorientierung mit 3D-Transformationen
slug: Web/API/Device_orientation_events/Using_device_orientation_with_3D_transforms
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{DefaultAPISidebar("Device Orientation Events")}}

Dieser Artikel bietet Tipps zur Nutzung von Geräteorientierungsinformationen in Verbindung mit CSS 3D-Transformationen.

## Verwendung der Orientierung, um ein Element zu drehen

Der einfachste Weg, [Orientierungsdaten](/de/docs/Web/API/Window/deviceorientation_event) in eine [3D-Transformation](/de/docs/Web/CSS/Reference/Properties/transform) umzuwandeln, besteht grundsätzlich darin, die Werte `alpha`, `gamma` und `beta` als `rotateZ`, `rotateX` und `rotateY` Werte zu verwenden.

Es ist jedoch wichtig zu beachten, dass das [Geräteorientierung-Koordinatensystem](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) sich vom [CSS-Koordinatensystem](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems) unterscheidet. Erstere ist ein [Rechtshändiges Koordinatensystem](https://en.wikipedia.org/wiki/Right-hand_rule) und seine Y-Achse ist positiv nach oben, während letzteres ein linkshändiges Koordinatensystem ist, dessen Y-Achse positiv nach unten verläuft. Außerdem sollten die Rotationen der Geräteorientierungswinkel immer in der Reihenfolge Z - X' - Y'' durchgeführt werden, was nicht der Reihenfolge einiger [CSS Transformationen](/de/docs/Web/CSS/CSS_transforms) entspricht. Dies sind einige der praktischen Konsequenzen dieser Unterschiede:

- Die Reihenfolge der Winkelrotationen ist wichtig, stellen Sie also sicher, dass die alpha-, beta- und gamma-Rotationen in dieser Reihenfolge angewendet werden.
- Die [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d) CSS-Transformation sowie die Funktionen [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate) und [`DOMMatrix.rotateSelf()`](/de/docs/Web/API/DOMMatrix/rotateSelf) wenden Winkelrotationen in der Reihenfolge Z - Y' - X'' an. Es ist daher nicht möglich, die alpha-, beta- und gamma-Rotationen in der richtigen Reihenfolge mit einem einzigen Aufruf anzuwenden. Stattdessen sollten Sie jede Achse einzeln in der richtigen Reihenfolge drehen.
- Aufgrund der oben beschriebenen Unterschiede in den Koordinatensystemen werden Rotationen, wenn man auf den Ursprung blickt, im CSS im Uhrzeigersinn und in der Geräteorientierungs-Spezifikation gegen den Uhrzeigersinn angewendet. Das bedeutet, dass alpha und beta (die Rotationen um Z und X) invertiert werden müssen, da sie in den beiden Koordinatensystemen in unterschiedliche Richtungen zeigen. Gamma (die Rotation um Y) sollte hingegen unverändert bleiben.

  Hier ist ein Code-Snippet, das dies zusammenfasst:

  ```js
  const elem = document.getElementById("view3d");

  window.addEventListener("deviceorientation", (e) => {
    elem.style.transform = `rotateZ(${-e.alpha}deg) rotateX(${-e.beta}deg) rotateY(${
      e.gamma
    }deg)`;
  });
  ```

## Umwandlung von `rotate3d()`-Winkeln in `deviceorientation`-Winkel

Falls Sie jemals eine Rotationsachse von `rotate3d` in Orientierungs-[Eulerwinkel](https://en.wikipedia.org/wiki/Euler_angles) umwandeln müssen, die von `deviceorientation` verwendet werden, können Sie den folgenden Algorithmus verwenden:

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
- [Erkennung der Geräteorientierung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
