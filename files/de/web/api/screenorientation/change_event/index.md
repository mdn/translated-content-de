---
title: "ScreenOrientation: change-Ereignis"
short-title: change
slug: Web/API/ScreenOrientation/change_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Screen Orientation API")}}

Das **`change`**-Ereignis der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)-Schnittstelle wird ausgelöst, wenn sich die Ausrichtung des Bildschirms geändert hat, beispielsweise wenn eine Person ihr Mobiltelefon dreht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("change", (event) => { })
```

Alternativ können Sie ihn der [Ereignisbehandlungs-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Im folgenden Beispiel gibt der `change`-Callback den neuen [Bildschirmausrichtungstyp](/de/docs/Web/API/ScreenOrientation/type) und den neuen [Winkel](/de/docs/Web/API/ScreenOrientation/angle) aus.

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
