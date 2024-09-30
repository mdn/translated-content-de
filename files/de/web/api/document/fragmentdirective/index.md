---
title: "Document: fragmentDirective-Eigenschaft"
short-title: fragmentDirective
slug: Web/API/Document/fragmentDirective
l10n:
  sourceCommit: f7e5cd5c99785abe0408d9db6c427212c37b02e7
---

{{APIRef("URL Fragment Text Directives")}}

Die schreibgeschützte **`fragmentDirective`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt die [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) für das aktuelle Dokument zurück.

## Wert

Ein [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Objekt.

## Beispiele

### Überprüfen, ob Textfragmente unterstützt werden

Der folgende Code gibt aus, ob Textfragmente in Ihrem Browser unterstützt werden, indem das Vorhandensein des Objekts überprüft wird. Beachten Sie, dass das Objekt leer ist und derzeit hauptsächlich für die Feature-Erkennung gedacht ist. In Zukunft könnten weitere Informationen enthalten sein.

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
