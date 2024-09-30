---
title: "Document: URL-Eigenschaft"
short-title: URL
slug: Web/API/Document/URL
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`URL`**-Eigenschaft der [`Document`](/de/docs/Web/API/Document)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die den Dokumentenstandort als Zeichenkette zurückgibt.

## Wert

Eine Zeichenkette, die die URL des Dokuments enthält.

## Beispiele

### JavaScript

```js
document.getElementById("url").textContent = document.URL;
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

- Die [`document.documentURI`](/de/docs/Web/API/Document/documentURI)-Eigenschaft, die denselben Wert zurückgibt.
