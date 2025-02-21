---
title: "CookieStore: delete() Methode"
short-title: delete()
slug: Web/API/CookieStore/delete
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`delete()`**-Methode des [`CookieStore`](/de/docs/Web/API/CookieStore)-Interfaces löscht ein Cookie mit dem angegebenen `name` oder `options`-Objekt. Die `delete()`-Methode lässt das Cookie ablaufen, indem das Datum in die Vergangenheit gesetzt wird.

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

  - : Ein Objekt, das enthält:

    - `name`
      - : Ein String mit dem Namen eines Cookies.
    - `domain` {{Optional_Inline}}
      - : Ein String mit der Domain eines Cookies. Standardmäßig `null`.
    - `path` {{Optional_Inline}}
      - : Ein String, der einen Pfad enthält. Standardmäßig `/`.
    - `partitioned` {{Optional_Inline}}
      - : Ein Boolean-Wert, der standardmäßig `false` ist. Wenn er auf `true` gesetzt wird, wird angegeben, dass das zu löschende Cookie ein partitioniertes Cookie sein wird. Weitere Informationen finden Sie unter [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit {{jsxref("undefined")}} erfüllt wird, wenn das Löschen abgeschlossen ist.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht zu einer URL {{Glossary("Serialization", "serisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Löschen des Cookies, das durch den angegebenen `name` oder `options` dargestellt wird, fehlschlägt.

## Beispiele

In diesem Beispiel wird ein Cookie gelöscht, indem der Name an die `delete()`-Methode übergeben wird.

```js
const result = await cookieStore.delete("cookie1");

console.log(result);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
