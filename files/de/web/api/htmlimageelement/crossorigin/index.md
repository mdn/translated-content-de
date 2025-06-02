---
title: "HTMLImageElement: crossOrigin-Eigenschaft"
short-title: crossOrigin
slug: Web/API/HTMLImageElement/crossOrigin
l10n:
  sourceCommit: 0145c6497d2f2206dca1326593fe308f7b771a08
---

{{APIRef("HTML DOM")}}

Das [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interface verfügt über das Attribut **`crossOrigin`**, das als Zeichenkette die Cross-Origin Resource Sharing ({{Glossary("CORS", "CORS")}})-Einstellung angibt, die beim Abrufen des Bildes verwendet werden soll.

## Wert

Eine Zeichenkette mit einem Schlüsselwort, das den CORS-Modus angibt, der beim Abrufen der Bildressource verwendet werden soll. Wenn Sie `crossOrigin` nicht angeben, wird das Bild ohne CORS abgerufen (der Abrufmodus `no-cors`).

Erlaubte Werte sind:

- `anonymous`
  - : Anfragen des {{HTMLElement("img")}}-Elements haben ihren [`mode`](/de/docs/Web/API/Request/mode) auf `cors` gesetzt und ihren [`credentials`](/de/docs/Web/API/Request/credentials)-Modus auf `same-origin`. Das bedeutet, dass CORS aktiviert ist und Anmeldeinformationen gesendet werden, _wenn_ das Bild von derselben Herkunft abgerufen wird, von der das Dokument geladen wurde.
- `use-credentials`
  - : Anfragen des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) verwenden den `cors`-Modus und den `include` credentials-Modus; alle Bildanfragen des Elements verwenden CORS, unabhängig davon, von welcher Domain der Abruf stammt.

Wenn `crossOrigin` eine leere Zeichenkette (`""`) ist, wird der `anonymous`-Modus ausgewählt.

## Beispiele

In diesem Beispiel wird ein neues {{HTMLElement("img")}}-Element erstellt und dem Dokument hinzugefügt, wobei das Bild im anonymen Zustand geladen wird; das Bild wird unter Verwendung von CORS geladen und Anmeldeinformationen werden für alle Cross-Origin-Ladevorgänge verwendet.

### JavaScript

Der folgende Code zeigt das Setzen der `crossOrigin`-Eigenschaft auf einem `<img>`-Element zur Konfiguration des CORS-Zugriffs für den Abruf eines neu erstellten Bildes.

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
    1.125rem/1.5 Helvetica,
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
