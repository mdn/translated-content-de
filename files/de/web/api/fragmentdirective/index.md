---
title: FragmentDirective
slug: Web/API/FragmentDirective
l10n:
  sourceCommit: f7e5cd5c99785abe0408d9db6c427212c37b02e7
---

{{APIRef("URL Fragment Text Directives")}}

Die **`FragmentDirective`**-Schnittstelle ist ein Objekt, das bereitgestellt wird, damit der Code überprüfen kann, ob ein Browser Textfragmente unterstützt.

Es wird über die Eigenschaft {{domxref("Document.fragmentDirective")}} aufgerufen.

## Instanzeigenschaften

Keine.

## Instanzmethoden

Keine.

## Beispiele

### Überprüfen, ob Textfragmente unterstützt werden

Der folgende Code protokolliert, ob Textfragmente in Ihrem Browser unterstützt werden, indem überprüft wird, ob {{domxref("Document.fragmentDirective")}} definiert ist.
Beachten Sie, dass das Objekt leer ist und derzeit hauptsächlich für die Feature-Erkennung verwendet wird.
In Zukunft könnten weitere Informationen enthalten sein.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

```css hidden
#log {
  height: 20px;
}
```

```js
if (document.fragmentDirective) {
  log("Your browser supports text fragments.");
} else {
  log("Text fragments are not supported in your browser.");
}
```

{{EmbedLiveSample("Checking if text fragments are supported","100%","30px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments)
- {{cssxref("::target-text")}}
