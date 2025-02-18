---
title: FragmentDirective
slug: Web/API/FragmentDirective
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{APIRef("URL Fragment Text Directives")}}

Die **`FragmentDirective`**-Schnittstelle ist ein Objekt, das es ermöglicht, zu überprüfen, ob ein Browser [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) unterstützt.

Auf sie wird über die [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)-Eigenschaft zugegriffen.

## Instanzeigenschaften

Keine.

## Instanzmethoden

Keine.

## Beispiele

### Überprüfen, ob Textfragmente unterstützt werden

Der folgende Code protokolliert, ob Textfragmente in Ihrem Browser unterstützt werden, indem er überprüft, ob [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) definiert ist.
Beachten Sie, dass das Objekt leer ist und derzeit hauptsächlich für die Prüfung der Verfügbarkeit einer Funktion gedacht ist. In Zukunft könnten zusätzliche Informationen enthalten sein.

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

- {{cssxref("::target-text")}}
