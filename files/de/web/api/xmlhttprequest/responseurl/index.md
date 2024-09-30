---
title: "XMLHttpRequest: responseURL-Eigenschaft"
short-title: responseURL
slug: Web/API/XMLHttpRequest/responseURL
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die schreibgeschützte Eigenschaft **`XMLHttpRequest.responseURL`** gibt die serialisierte URL der Antwort oder einen leeren String zurück, wenn die URL `null` ist. Falls die URL zurückgegeben wird, wird jegliches URL-Fragment entfernt. Der Wert von `responseURL` wird die endgültige URL sein, die nach allen Weiterleitungen erlangt wird.

## Beispiel

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/test", true);
xhr.onload = () => {
  console.log(xhr.responseURL); // http://example.com/test
};
xhr.send(null);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
