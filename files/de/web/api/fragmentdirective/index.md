---
title: FragmentDirective
slug: Web/API/FragmentDirective
l10n:
  sourceCommit: 32801b32fceabe1876e405970469f5de76eaf6c0
---

{{APIRef("URL Fragment Text Directives")}}

Das **`FragmentDirective`** Interface ist ein Objekt, das bereitgestellt wird, um es Code zu ermöglichen, zu überprüfen, ob ein Browser [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments) unterstützt.

Es wird über die [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) Eigenschaft aufgerufen.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

Keine.

## Beispiele

### Überprüfen, ob Textfragmente unterstützt werden

Der untenstehende Code protokolliert, ob Textfragmente in Ihrem Browser unterstützt werden, indem geprüft wird, ob [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) definiert ist.
Beachten Sie, dass das Objekt leer ist und derzeit hauptsächlich zur Feature-Erkennung gedacht ist.
In Zukunft könnte es weitere Informationen enthalten.

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

- {{cssxref("::target-text")}}
