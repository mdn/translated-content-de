---
title: "CookieStore: delete()-Methode"
short-title: delete()
slug: Web/API/CookieStore/delete
l10n:
  sourceCommit: 01e7af5aeee7833c129ddfa41eb719b123a8cdcc
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`delete()`**-Methode der {{domxref("CookieStore")}} Schnittstelle löscht ein Cookie mit dem angegebenen `name` oder `options`-Objekt. Die `delete()`-Methode lässt das Cookie ablaufen, indem sie das Datum auf ein Datum in der Vergangenheit ändert.

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
      - : Ein String mit der Domäne eines Cookies. Standardwert ist `null`.
    - `path` {{Optional_Inline}}
      - : Ein String, der einen Pfad enthält. Standardwert ist `/`.
    - `partitioned` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist. Wird er auf `true` gesetzt, wird angegeben, dass das zu löschende Cookie ein partitioniertes Cookie sein wird. Weitere Informationen finden Sie unter [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird, wenn die Löschung abgeschlossen ist.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Wird geworfen, wenn der Ursprung nicht in eine URL {{glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn das Löschen des Cookies, das durch den angegebenen `name` oder `options` repräsentiert wird, fehlschlägt.

## Beispiele

In diesem Beispiel wird ein Cookie durch Übergabe des Namens an die `delete()`-Methode gelöscht.

```js
const result = cookieStore.delete("cookie1");

console.log(result);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
