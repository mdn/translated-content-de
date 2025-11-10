---
title: Verwenden von Geräteorientierung mit 3D-Transformationen
slug: Web/API/Device_orientation_events/Using_device_orientation_with_3D_transforms
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("Device Orientation Events")}}

Dieser Artikel bietet Tipps zur Nutzung von Geräteorientierungsinformationen in Verbindung mit CSS 3D-Transformationen.

## Verwendung der Orientierung zur Rotation eines Elements

Der einfachste Weg, [Orientierungsdaten](/de/docs/Web/API/Window/deviceorientation_event) in eine [3D-Transformation](/de/docs/Web/CSS/Reference/Properties/transform) zu konvertieren, besteht darin, die Werte `alpha`, `gamma` und `beta` als `rotateZ`, `rotateX` und `rotateY` Werte zu nutzen.

Es ist jedoch wichtig zu bedenken, dass das [Koordinatensystem der Geräteorientierung](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) sich vom [CSS-Koordinatensystem](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems) unterscheidet. Ersteres ist [rechtshändig](https://en.wikipedia.org/wiki/Right-hand_rule) und seine Y-Achse ist positiv nach oben, während letzteres ein linkshändiges Koordinatensystem ist, dessen Y-Achse positiv nach unten verläuft. Zudem sollten die Winkelrotationen der Geräteorientierung immer in einer Z - X' - Y'' Reihenfolge erfolgen, die nicht der Reihenfolge einiger [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) entspricht. Hier sind einige der praktischen Konsequenzen dieser Unterschiede:

- Die Reihenfolge der Winkelrotationen ist von Bedeutung, stellen Sie daher sicher, dass die Rotationen `alpha`, `beta` und `gamma` in dieser Reihenfolge angewendet werden.
- Die CSS-Transformation [`rotate3d()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotate3d) und die Funktionen [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate) und [`DOMMatrix.rotateSelf()`](/de/docs/Web/API/DOMMatrix/rotateSelf) wenden Winkelrotationen in einer Z - Y' - X'' Reihenfolge an, sodass es nicht möglich ist, die Rotationen `alpha`, `beta` und `gamma` in der richtigen Reihenfolge mit einem einzigen Aufruf einer dieser Funktionen anzuwenden. Stattdessen sollten Sie jede Achse einzeln in der korrekten Reihenfolge drehen.
- Aufgrund der oben genannten Unterschiede in den Koordinatensystemen, werden, wenn man auf den Ursprung schaut, die Rotationen im CSS im Uhrzeigersinn und in der Geräteorientierungsspezifikation gegen den Uhrzeigersinn angewendet. Dies bedeutet, dass `alpha` und `beta` umgekehrt werden müssen (die Rotationen um Z und X), da sie in den beiden Koordinatensystemen in unterschiedliche Richtungen weisen. Jedoch sollte `gamma` (die Rotation um Y) unverändert bleiben.

  Hier ist ein Code-Snippet zur Zusammenfassung:

  ```js
  const elem = document.getElementById("view3d");

  window.addEventListener("deviceorientation", (e) => {
    elem.style.transform = `rotateZ(${-e.alpha}deg) rotateX(${-e.beta}deg) rotateY(${
      e.gamma
    }deg)`;
  });
  ```

## Konvertierung von `rotate3d()`-Winkeln in `deviceorientation`-Winkel

Falls Sie jemals eine `rotate3d`-Achsen-Winkel in Orientierungs-[Euler-Winkel](https://en.wikipedia.org/wiki/Euler_angles) konvertieren müssen, die von `deviceorientation` verwendet werden, können Sie den folgenden Algorithmus verwenden:

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
- [Geräteorientierung erkennen](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
