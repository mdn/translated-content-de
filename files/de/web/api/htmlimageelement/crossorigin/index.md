---
title: "HTMLImageElement: crossOrigin-Eigenschaft"
short-title: crossOrigin
slug: Web/API/HTMLImageElement/crossOrigin
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("HTML DOM")}}

Das [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
Interface besitzt das Attribut **`crossOrigin`**, das als Zeichenkette anzugeben ist und die Cross-Origin Resource Sharing ([CORS](/de/docs/Glossary/CORS)) Einstellung spezifiziert, die beim Abrufen des Bildes verwendet werden soll.

## Wert

Eine Zeichenkette eines Schlüsselworts, das den zu verwendenden CORS-Modus beim Abrufen der Bildressource angibt. Wenn `crossOrigin` nicht spezifiziert wird, wird das Bild ohne CORS abgerufen (der Abruf-Modus `no-cors`).

Erlaubte Werte sind:

- `anonymous`
  - : Die Anfragen durch das {{HTMLElement("img")}}-Element haben ihren
    [`mode`](/de/docs/Web/API/Request/mode) auf `cors` gesetzt und ihren [`credentials`](/de/docs/Web/API/Request/credentials)
    Modus auf `same-origin`. Das bedeutet, dass CORS aktiviert ist und Anmeldeinformationen _gesendet_ werden, wenn das Bild von der gleichen Herkunft abgerufen wird, von der das Dokument geladen wurde.
- `use-credentials`
  - : Anfragen durch das [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) verwenden den `cors` Modus und den `include` Credentials-Modus; alle Bildanfragen durch das Element werden CORS verwenden, unabhängig davon, von welcher Domain der Abruf stammt.

Wenn `crossOrigin` eine leere Zeichenkette (`""`) ist,
wird der `anonymous` Modus ausgewählt.

## Beispiele

In diesem Beispiel wird ein neues {{HTMLElement("img")}}-Element erstellt und dem
Dokument hinzugefügt, wobei das Bild im anonymen Zustand geladen wird; das Bild wird unter Verwendung von CORS geladen, und Anmeldeinformationen werden für alle cross-origin Ladevorgänge verwendet.

### JavaScript

Der unten stehende Code demonstriert das Setzen der `crossOrigin`-Eigenschaft auf einem
`<img>`-Element, um den CORS-Zugriff für den Abruf eines neu erstellten Bildes zu konfigurieren.

```js
const imageUrl = "clock-demo-400px.png";
const container = document.querySelector(".container");

function loadImage(url) {
  const image = new Image(200, 200);
  image.addEventListener("load", () => container.prepend(image));

  image.addEventListener("error", () => {
    const errMsg = document.createElement("output");
    errMsg.value = `Error loading image at ${url}`;
    container.append(errMsg);
  });

  image.crossOrigin = "anonymous";
  image.alt = "";
  image.src = url;
}

loadImage(imageUrl);
```

### HTML

```html
<div class="container">
  <p>
    Here's a paragraph. It's a very interesting paragraph. You are captivated by
    this paragraph. Keep reading this paragraph. Okay, now you can stop reading
    this paragraph. Thanks for reading me.
  </p>
</div>
```

### CSS

```css
body {
  font:
    1.125rem/1.5,
    Helvetica,
    sans-serif;
}

.container {
  display: flow-root;
  width: 37.5em;
  border: 1px solid #d2d2d2;
}

img {
  float: left;
  padding-right: 1.5em;
}

output {
  background: rgb(100 100 100 / 100%);
  font-family: Courier, monospace;
  width: 95%;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 600, 260)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.crossOrigin`](/de/docs/Web/API/HTMLLinkElement/crossOrigin)
- [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin)
- [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin)
