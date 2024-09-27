---
title: "ShadowRoot: pictureInPictureElement-Eigenschaft"
short-title: pictureInPictureElement
slug: Web/API/ShadowRoot/pictureInPictureElement
l10n:
  sourceCommit: bb4d21e3c6e71db4e0ba983a450d6ed628e82670
---

{{APIRef("Picture-in-Picture API")}}

Die schreibgeschützte **`pictureInPictureElement`**-Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces gibt das [`Element`](/de/docs/Web/API/Element) zurück, das derzeit in diesem `shadow tree` im Bild-im-Bild-Modus dargestellt wird, oder `null`, wenn der Bild-im-Bild-Modus derzeit nicht verwendet wird.

## Wert

Ein Verweis auf das [`Element`](/de/docs/Web/API/Element)-Objekt, das sich derzeit im Bild-im-Bild-Modus befindet.

Es wird `null` zurückgegeben, wenn der `shadow tree` kein zugeordnetes Element im Bild-im-Bild-Modus hat. Zum Beispiel gibt es kein Bild-im-Bild-Element, oder das Element befindet sich nicht im `shadow tree`.

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
