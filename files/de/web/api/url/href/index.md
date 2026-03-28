---
title: "URL: href-Eigenschaft"
short-title: href
slug: Web/API/URL/href
l10n:
  sourceCommit: 55ed83b5960e15ae039e4ffefd35c006585c6f13
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`href`**-Eigenschaft des [`URL`](/de/docs/Web/API/URL)-Interfaces ist
ein String, der die gesamte URL enthält.

## Wert

Ein String.

## Beispiele

### Vollständige URL mit Pfad

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/href",
);
console.log(url.href); // https://developer.mozilla.org/en-US/docs/Web/API/URL/href
```

### Nur Ursprungs-URL

Bei [hierarchischen Schemata](https://www.rfc-editor.org/rfc/rfc3986#section-1.2.3) wie `https:` muss der Pfadname immer nicht leer sein. Wenn die URL keinen Pfad hat (zum Beispiel nur einen Ursprung), setzt der URL-Parser den Pfadnamen auf `"/"`, sodass `href` einen Schrägstrich am Ende enthält. Weitere Details finden Sie in der [`pathname`](/de/docs/Web/API/URL/pathname)-Eigenschaft.

```js
const url = new URL("https://developer.mozilla.org");
console.log(url.href); // https://developer.mozilla.org/
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`URL`](/de/docs/Web/API/URL)-Interface, zu dem es gehört.
- [`URL.pathname`](/de/docs/Web/API/URL/pathname)
