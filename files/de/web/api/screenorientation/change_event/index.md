---
title: "ScreenOrientation: change-Ereignis"
short-title: change
slug: Web/API/ScreenOrientation/change_event
l10n:
  sourceCommit: 0f1d3cbc434dd6a8f4886826ac142a32a65e0208
---

{{APIRef("Screen Orientation API")}}

Das **`change`**-Ereignis der {{domxref("ScreenOrientation")}}-Schnittstelle tritt auf, wenn sich die Ausrichtung des Bildschirms geändert hat, beispielsweise wenn ein Benutzer sein Mobiltelefon dreht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiel

Im folgenden Beispiel gibt der `change`-Callback den neuen {{DOMxRef("ScreenOrientation.type", "Bildschirm-Ausrichtungstyp", "", "nocode")}} und den {{DOMxRef("ScreenOrientation.angle", "Winkel", "", "nocode")}} aus.

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
