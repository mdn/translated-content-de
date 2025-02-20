---
title: "Document: fragmentDirective-Eigenschaft"
short-title: fragmentDirective
slug: Web/API/Document/fragmentDirective
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{APIRef("URL Fragment Text Directives")}}

Die **`fragmentDirective`**-Schreibgeschützte Eigenschaft der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt die [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) für das aktuelle Dokument zurück.

## Wert

Ein [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Objekt.

## Beispiele

### Überprüfen, ob Textfragmente unterstützt werden

Der folgende Code protokolliert, ob Textfragmente in Ihrem Browser unterstützt werden, indem die Existenz des Objekts überprüft wird.
Beachten Sie, dass das Objekt leer ist und derzeit hauptsächlich für die Funktionsprüfung vorgesehen ist.
In Zukunft könnte es zusätzliche Informationen enthalten.

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

{{EmbedLiveSample("Überprüfen, ob Textfragmente unterstützt werden", "100%", "30px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
- {{cssxref("::target-text")}}
