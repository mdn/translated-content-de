---
title: "HTMLImageElement: crossOrigin-Eigenschaft"
short-title: crossOrigin
slug: Web/API/HTMLImageElement/crossOrigin
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

{{APIRef("HTML DOM")}}

Das [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
Interface hat ein **`crossOrigin`**-Attribut, das ein String ist und die Cross-Origin Resource Sharing ({{Glossary("CORS", "CORS")}})-Einstellungen angibt, die beim Abrufen des Bildes verwendet werden sollen.

## Wert

Ein String eines Schlüsselworts, das den CORS-Modus festlegt, der beim Abrufen der Bildressource verwendet werden soll. Wenn Sie `crossOrigin` nicht angeben, wird das Bild ohne CORS abgerufen (der Abruf im `no-cors`-Modus).

Zugelassene Werte sind:

- `anonymous`
  - : Anfragen vom {{HTMLElement("img")}}-Element haben ihren
    [`mode`](/de/docs/Web/API/Request/mode) auf `cors` gesetzt und ihren [`credentials`](/de/docs/Web/API/Request/credentials)
    Modus auf `same-origin`. Das bedeutet, dass CORS aktiviert ist
    und Anmeldeinformationen gesendet werden _wenn_ das Bild von derselben Herkunft abgerufen wird,
    von der das Dokument geladen wurde.
- `use-credentials`
  - : Anfragen vom [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) verwenden den `cors`-Modus
    und den `include`-Anmeldeinformationen-Modus; alle Bildanfragen des Elements verwenden
    CORS, unabhängig davon, von welcher Domain der Abruf stammt.

Wenn `crossOrigin` ein leerer String (`""`) ist,
wird der `anonymous`-Modus ausgewählt.

## Beispiele

In diesem Beispiel wird ein neues {{HTMLElement("img")}}-Element erstellt und dem
Dokument hinzugefügt, wobei das Bild im anonymen Zustand geladen wird; das Bild wird mit
CORS geladen und Anmeldeinformationen werden für alle abgerufenen geladenen Ursprünge verwendet.

### JavaScript

Der folgende Code demonstriert das Setzen der `crossOrigin`-Eigenschaft auf einem
`<img>`-Element, um den CORS-Zugriff für den Abruf eines
neu erstellten Bildes zu konfigurieren.

```js
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

loadImage("clock-demo-400px.png");
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
    1.125rem/1.5 "Helvetica",
    "Arial",
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
  font-family: "Courier New", monospace;
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
