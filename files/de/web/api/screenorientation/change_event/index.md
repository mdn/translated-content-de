---
title: "ScreenOrientation: change Ereignis"
short-title: change
slug: Web/API/ScreenOrientation/change_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Screen Orientation API")}}

Das **`change`** Ereignis der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)-Schnittstelle wird ausgelöst, wenn sich die Ausrichtung des Bildschirms geändert hat, zum Beispiel wenn ein Benutzer sein Mobiltelefon dreht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Im folgenden Beispiel gibt der `change`-Callback den neuen [Screen Orientation Type](/de/docs/Web/API/ScreenOrientation/type) und den [Winkel](/de/docs/Web/API/ScreenOrientation/angle) aus.

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
