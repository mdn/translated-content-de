---
title: "ShadowRoot: pictureInPictureElement-Eigenschaft"
short-title: pictureInPictureElement
slug: Web/API/ShadowRoot/pictureInPictureElement
l10n:
  sourceCommit: bb4d21e3c6e71db4e0ba983a450d6ed628e82670
---

{{APIRef("Picture-in-Picture API")}}

Die schreibgeschützte **`pictureInPictureElement`**-Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces gibt das [`Element`](/de/docs/Web/API/Element) zurück, das aktuell im Bild-in-Bild-Modus in diesem Shadow-Tree dargestellt wird, oder `null`, wenn der Bild-in-Bild-Modus derzeit nicht verwendet wird.

## Wert

Eine Referenz auf das [`Element`](/de/docs/Web/API/Element)-Objekt, das sich aktuell im Bild-in-Bild-Modus befindet.

Gibt `null` zurück, wenn der Shadow-Tree kein zugeordnetes Element im Bild-in-Bild-Modus hat. Beispielsweise, wenn es kein Bild-in-Bild-Element gibt oder das Element nicht im Shadow-Tree ist.

## Beispiele

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;
let pipElem = shadow.pictureInPictureElement;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement)
