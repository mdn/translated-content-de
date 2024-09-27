---
title: "Document: fragmentDirective Eigenschaft"
short-title: fragmentDirective
slug: Web/API/Document/fragmentDirective
l10n:
  sourceCommit: f7e5cd5c99785abe0408d9db6c427212c37b02e7
---

{{APIRef("URL Fragment Text Directives")}}

Die **`fragmentDirective`** schreibgeschützte Eigenschaft der [`Document`](/de/docs/Web/API/Document) Schnittstelle gibt die [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) für das aktuelle Dokument zurück.

## Wert

Ein [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) Objekt.

## Beispiele

### Überprüfen, ob Textfragmente unterstützt werden

Der untenstehende Code protokolliert, ob Textfragmente in Ihrem Browser unterstützt werden, indem er das Vorhandensein des Objekts überprüft.
Beachten Sie, dass das Objekt leer ist und derzeit hauptsächlich zur Funktionsdetektion gedacht ist.
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

- [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments)
- {{cssxref("::target-text")}}
