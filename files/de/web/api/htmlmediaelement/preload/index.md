---
title: "HTMLMediaElement: preload-Eigenschaft"
short-title: preload
slug: Web/API/HTMLMediaElement/preload
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("HTML DOM")}}

Die **`preload`**-Eigenschaft des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Interface ist ein String, der dem Browser einen Hinweis darauf gibt, was der Autor für die beste Benutzererfahrung hält.

Sie spiegelt das `preload`-Attribut des {{HTMLElement("audio")}}-Elements und des {{HTMLElement("video")}}-Elements wider.

## Wert

Ein String. Mögliche Werte sind wie folgt:

- `none`
  - : Gibt an, dass die Medien nicht vorgeladen werden sollen.
- `metadata`
  - : Gibt an, dass nur Medienmetadaten (z. B. Länge) abgerufen werden.
- `auto`
  - : Gibt an, dass die gesamte Mediendatei heruntergeladen werden kann, auch wenn nicht erwartet wird, dass der Benutzer sie nutzt.
- _leerer String_
  - : Ein Synonym für den Wert `auto`.

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
