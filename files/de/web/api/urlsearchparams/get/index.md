---
title: "URLSearchParams: get()-Methode"
short-title: get()
slug: Web/API/URLSearchParams/get
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`get()`**-Methode des {{domxref("URLSearchParams")}}
Interfaces gibt den ersten Wert zurück, der mit dem angegebenen Suchparameter assoziiert ist.

## Syntax

```js-nolint
get(name)
```

### Parameter

- `name`
  - : Der Name des Parameters, der zurückgegeben werden soll.

### Rückgabewert

Ein String, wenn der angegebene Suchparameter gefunden wird; andernfalls **`null`**.

## Beispiele

Wenn die URL Ihrer Seite `https://example.com/?name=Jonathan&age=18` ist, könnten Sie die Parameter 'name' und 'age' wie folgt auslesen:

```js
let params = new URLSearchParams(document.location.search);
let name = params.get("name"); // ist der String "Jonathan"
let age = parseInt(params.get("age"), 10); // ist die Nummer 18
```

Das Anfordern eines Parameters, der nicht in der Abfragezeichenfolge vorhanden ist, gibt **`null`** zurück:

```js
let address = params.get("address"); // null
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}