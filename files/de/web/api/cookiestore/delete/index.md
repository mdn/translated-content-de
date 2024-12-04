---
title: "CookieStore: `delete()` Methode"
short-title: delete()
slug: Web/API/CookieStore/delete
l10n:
  sourceCommit: 7b339282a09f50081547b57d833047aa669a62c2
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`delete()`** Methode des [`CookieStore`](/de/docs/Web/API/CookieStore) Interfaces löscht ein Cookie mit dem angegebenen `name` oder `options` Objekt. Die `delete()` Methode lässt das Cookie verfallen, indem das Datum auf eines in der Vergangenheit geändert wird.

## Syntax

```js-nolint
delete(name)
delete(options)
```

### Parameter

Diese Methode erfordert eines der folgenden:

- `name` {{optional_inline}}
  - : Ein String mit dem Namen eines Cookies.

Oder

- `options` {{optional_inline}}

  - : Ein Objekt, das Folgendes enthält:

    - `name`
      - : Ein String mit dem Namen eines Cookies.
    - `domain` {{Optional_Inline}}
      - : Ein String mit der Domain eines Cookies. Standardmäßig `null`.
    - `path` {{Optional_Inline}}
      - : Ein String, der einen Pfad enthält. Standardmäßig `/`.
    - `partitioned` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist. Wenn er auf `true` gesetzt wird, wird angegeben, dass das zu löschende Cookie ein partitioniertes Cookie ist. Weitere Informationen finden Sie unter [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird, wenn das Löschen abgeschlossen ist.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht zu einer URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Löschen des Cookies, das durch den angegebenen `name` oder `options` dargestellt wird, fehlschlägt.

## Beispiele

In diesem Beispiel wird ein Cookie gelöscht, indem der Name an die `delete()` Methode übergeben wird.

```js
const result = await cookieStore.delete("cookie1");

console.log(result);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
