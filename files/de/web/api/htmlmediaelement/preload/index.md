---
title: "HTMLMediaElement: preload-Eigenschaft"
short-title: preload
slug: Web/API/HTMLMediaElement/preload
l10n:
  sourceCommit: 81e8c2870cff074b1daa7685788c51f5cac4e75c
---

{{APIRef("HTML DOM")}}

Die **`preload`**-Eigenschaft des {{domxref("HTMLMediaElement")}} Interfaces ist ein String, der dem Browser einen Hinweis darauf gibt, was der Autor für die beste Benutzererfahrung hält.

Sie spiegelt das `preload` Attribut des {{HTMLElement("audio")}}-Elements und des {{HTMLElement("video")}}-Elements wider.

## Wert

Ein String. Mögliche Werte sind wie folgt:

- `none`
  - : Gibt an, dass das Medium nicht vorgeladen werden soll.
- `metadata`
  - : Gibt an, dass nur Mediendaten (z. B. Länge) geholt werden.
- `auto`
  - : Gibt an, dass die gesamte Mediendatei heruntergeladen werden kann, auch wenn nicht erwartet wird, dass der Benutzer sie verwendet.
- _leerer String_
  - : Ein Synonym für den `auto` Wert.

## Beispiele

```html
<video
  id="el"
  controls
  src="https://example.com/media.mp4"
  poster="https://example.com/media.jpg"
  width="800"
  height="600"
  preload="metadata">
  Sorry, your browser doesn't support embedded videos, but don't worry, you can
  <a href="https://example.com/media.mp4" download="media.mp4">download it</a>
  and watch it with your favorite video player!
</video>
```

```js
const el = document.getElementById("el");
console.log(el.preload); // Output: "metadata"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
