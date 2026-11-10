---
title: "Document: URL-Eigenschaft"
short-title: URL
slug: Web/API/Document/URL
l10n:
  sourceCommit: b9569fcd65bb09ea7e032ef0938185eccdc2d9c4
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`URL`** der Schnittstelle [`Document`](/de/docs/Web/API/Document) gibt die Adresse des Dokuments als Zeichenfolge zurück.

## Wert

Eine Zeichenfolge, die die URL des Dokuments enthält.

## Beispiele

### HTML

```html
<p id="urlText">
  URL:<br />
  <span id="url">URL goes here</span>
</p>
```

### JavaScript

```js
document.getElementById("url").textContent = document.URL;
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Eigenschaft [`document.documentURI`](/de/docs/Web/API/Document/documentURI), die denselben Wert zurückgibt.
