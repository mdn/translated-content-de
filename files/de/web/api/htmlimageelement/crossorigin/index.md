---
title: "HTMLImageElement: crossOrigin-Eigenschaft"
short-title: crossOrigin
slug: Web/API/HTMLImageElement/crossOrigin
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("HTML DOM")}}

Das **`crossOrigin`**-Attribut des {{domxref("HTMLImageElement")}}
Interfaces ist ein Zeichenfolgenwert, der festlegt, welche Cross-Origin Resource Sharing ({{Glossary("CORS")}}) Einstellung beim Abrufen des Bildes verwendet werden soll.

## Wert

Ein Schlüsselwort als Zeichenfolge, das den CORS-Modus angibt, der beim Abrufen der Bildressource verwendet werden soll. Wenn Sie `crossOrigin` nicht angeben, wird das Bild ohne CORS abgerufen (der Abrufmodus `no-cors`).

Erlaubte Werte sind:

- `anonymous`
  - : Anfragen des {{HTMLElement("img")}} Elements haben ihren
    {{domxref("Request.mode", "mode")}} auf `cors` gesetzt und ihre {{domxref("Request.credentials", "credentials")}}
    Modus auf `same-origin`. Das bedeutet, dass CORS aktiviert ist
    und Anmeldeinformationen gesendet werden, _wenn_ das Bild von demselben Ursprung abgerufen wird, von dem das Dokument geladen wurde.
- `use-credentials`
  - : Anfragen des {{domxref("HTMLImageElement")}} verwenden den `cors`-Modus
    und den `include` Anmeldeinformationen-Modus; alle Bildanfragen durch das Element verwenden
    CORS, unabhängig davon, von welcher Domain der Abruf erfolgt.

Wenn `crossOrigin` eine leere Zeichenkette (`""`) ist,
wird der `anonymous` Modus ausgewählt.

## Beispiele

In diesem Beispiel wird ein neues {{HTMLElement("img")}} Element erstellt und dem
Dokument hinzugefügt, wobei das Bild im Anonymous-Zustand geladen wird; das Bild wird mit
CORS geladen und Anmeldeinformationen werden für alle Cross-Origin-Ladevorgänge verwendet.

### JavaScript

Der folgende Code demonstriert das Setzen der `crossOrigin` Eigenschaft an einem
`<img>` Element, um den CORS-Zugriff für den Abruf eines
neu erstellten Bildes zu konfigurieren.

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

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("HTMLLinkElement.crossOrigin")}}
- {{domxref("HTMLMediaElement.crossOrigin")}}
- {{domxref("HTMLScriptElement.crossOrigin")}}
