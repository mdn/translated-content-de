---
title: "HTMLImageElement: crossOrigin-Eigenschaft"
short-title: crossOrigin
slug: Web/API/HTMLImageElement/crossOrigin
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die **`crossOrigin`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces ist ein String, der die Einstellung für Cross-Origin Resource Sharing ({{Glossary("CORS", "CORS")}}) angibt, die beim Abrufen des Bildes verwendet wird. Sie spiegelt das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin)-Inhaltsattribut des `<img>`-Elements wider.

## Wert

Ein String, dessen Wert entweder `anonymous` oder `use-credentials` ist. Für die Bedeutungen siehe das HTML-Attributsreferenz [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

## Beispiele

### Das crossorigin-Attribut setzen

In diesem Beispiel wird ein neues {{HTMLElement("img")}}-Element erstellt und dem Dokument hinzugefügt, wobei das Bild im anonymen Zustand geladen wird; das Bild wird unter Verwendung von CORS geladen und Anmeldedaten werden für alle Cross-Origin-Ladungen verwendet.

#### JavaScript

Der folgende Code demonstriert das Setzen der `crossOrigin`-Eigenschaft eines `<img>`-Elements, um CORS-Zugriff für das Abrufen eines neu erstellten Bildes zu konfigurieren.

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

loadImage("/shared-assets/images/examples/balloon.jpg");
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

{{EmbedLiveSample("Setting the crossorigin attribute", 600, 260)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.crossOrigin`](/de/docs/Web/API/HTMLLinkElement/crossOrigin)
- [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin)
- [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin)
