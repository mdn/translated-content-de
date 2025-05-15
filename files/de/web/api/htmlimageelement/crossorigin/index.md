---
title: "HTMLImageElement: crossOrigin-Eigenschaft"
short-title: crossOrigin
slug: Web/API/HTMLImageElement/crossOrigin
l10n:
  sourceCommit: c05ef6211441aedb359d4020518ac152aa92db9e
---

{{APIRef("HTML DOM")}}

Das [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
Interface besitzt das Attribut **`crossOrigin`**, ein Zeichenfolgenattribut, das die Cross-Origin Resource Sharing ({{Glossary("CORS", "CORS")}}) Einstellung angibt, die beim Abrufen des Bildes genutzt werden soll.

## Wert

Eine Zeichenfolge eines Schlüsselworts, das den CORS-Modus angibt, der beim Abrufen der Bildressource verwendet werden soll. Wenn Sie `crossOrigin` nicht angeben, wird das Bild ohne CORS abgerufen (der `no-cors` Modus des Fetches).

Erlaubte Werte sind:

- `anonymous`
  - : Anfragen des {{HTMLElement("img")}}-Elements haben ihren [`mode`](/de/docs/Web/API/Request/mode) auf `cors` gesetzt und ihren [`credentials`](/de/docs/Web/API/Request/credentials) Modus auf `same-origin`. Das bedeutet, dass CORS aktiviert ist und Anmeldedaten _gesendet_ werden, wenn das Bild von der gleichen Herkunft abgerufen wird, von der das Dokument geladen wurde.
- `use-credentials`
  - : Anfragen des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) verwenden den `cors`-Modus und den `include`-Anmeldemodus; alle Bildanforderungen des Elements verwenden CORS, unabhängig von der Domain, von der der Abruf erfolgt.

Wenn `crossOrigin` eine leere Zeichenfolge (`""`) ist, wird der `anonymous`-Modus ausgewählt.

## Beispiele

In diesem Beispiel wird ein neues {{HTMLElement("img")}}-Element erstellt und dem Dokument hinzugefügt. Das Bild wird im anonymen Zustand geladen; das Bild wird unter Verwendung von CORS geladen, und Anmeldedaten werden für alle Cross-Origin-Ladevorgänge verwendet.

### JavaScript

Der untenstehende Code zeigt, wie die `crossOrigin`-Eigenschaft auf einem `<img>`-Element gesetzt wird, um den CORS-Zugriff für das Abrufen eines neu erstellten Bildes zu konfigurieren.

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
