---
title: "Document: documentURI-Eigenschaft"
short-title: documentURI
slug: Web/API/Document/documentURI
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}

Die schreibgeschützte **`documentURI`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt den Speicherort des Dokuments als Zeichenfolge zurück.

## Wert

Eine Zeichenfolge.

## Beispiele

### JavaScript

```js
document.getElementById("url").textContent = document.documentURI;
```

### HTML

```html
<p id="urlText">
  URL:<br />
  <span id="url">URL goes here</span>
</p>
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`document.URL`](/de/docs/Web/API/Document/URL)-Eigenschaft, die denselben Wert zurückgibt.
