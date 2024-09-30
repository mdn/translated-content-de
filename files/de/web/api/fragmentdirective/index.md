---
title: FragmentDirective
slug: Web/API/FragmentDirective
l10n:
  sourceCommit: f7e5cd5c99785abe0408d9db6c427212c37b02e7
---

{{APIRef("URL Fragment Text Directives")}}

Die **`FragmentDirective`**-Schnittstelle ist ein Objekt, das es ermöglicht, zu überprüfen, ob ein Browser Textfragmente unterstützt.

Sie wird über die [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)-Eigenschaft aufgerufen.

## Instanzeigenschaften

Keine.

## Instanzmethoden

Keine.

## Beispiele

### Überprüfen, ob Textfragmente unterstützt werden

Der untenstehende Code protokolliert, ob Textfragmente in Ihrem Browser unterstützt werden, indem überprüft wird, ob [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) definiert ist.
Beachten Sie, dass das Objekt leer ist und derzeit hauptsächlich zur Feature-Erkennung gedacht ist.
In der Zukunft könnten weitere Informationen hinzugefügt werden.

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

{{EmbedLiveSample("Überprüfen, ob Textfragmente unterstützt werden","100%","30px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments)
- {{cssxref("::target-text")}}
