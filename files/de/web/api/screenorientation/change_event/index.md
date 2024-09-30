---
title: "ScreenOrientation: change-Ereignis"
short-title: change
slug: Web/API/ScreenOrientation/change_event
l10n:
  sourceCommit: 0f1d3cbc434dd6a8f4886826ac142a32a65e0208
---

{{APIRef("Screen Orientation API")}}

Das **`change`**-Ereignis des [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)-Interfaces tritt auf, wenn sich die Ausrichtung des Bildschirms ändert, z. B. wenn ein Benutzer sein Mobiltelefon dreht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Im folgenden Beispiel gibt der `change`-Callback den neuen [Bildschirmausrichtungstyp](/de/docs/Web/API/ScreenOrientation/type) und den [Winkel](/de/docs/Web/API/ScreenOrientation/angle) aus.

```js
screen.orientation.addEventListener("change", (event) => {
  const type = event.target.type;
  const angle = event.target.angle;
  console.log(`ScreenOrientation change: ${type}, ${angle} degrees.`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
