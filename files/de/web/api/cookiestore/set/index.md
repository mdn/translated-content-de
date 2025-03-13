---
title: "CookieStore: set()-Methode"
short-title: set()
slug: Web/API/CookieStore/set
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`set()`**-Methode des [`CookieStore`](/de/docs/Web/API/CookieStore)-Interfaces setzt ein Cookie mit dem angegebenen `name` und `value` oder einem `options`-Objekt.

## Syntax

```js-nolint
set(name, value)
set(options)
```

### Parameter

Diese Methode erfordert eines der folgenden:

- `name` {{optional_inline}}
  - : Ein String mit dem Namen des Cookies.
- `value` {{optional_inline}}
  - : Ein String mit dem Wert des Cookies.

Oder

- `options` {{optional_inline}}

  - : Ein Objekt, das Folgendes enthält:

    - `domain` {{Optional_Inline}}
      - : Ein String, der die Domain des Cookies enthält. Standardwert ist `null`.
    - `expires` {{Optional_Inline}}
      - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält. Standardwert ist `null`.
    - `name`
      - : Ein String mit dem Namen eines Cookies.
    - `partitioned` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Wenn auf `true` gesetzt, wird das gesetzte Cookie ein partitioniertes Cookie sein. Weitere Informationen finden Sie unter [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).
    - `path` {{Optional_Inline}}
      - : Ein String, der den Pfad des Cookies enthält. Standardwert ist `/`.
    - `sameSite` {{Optional_Inline}}

      - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Werte:

        - `"strict"`
          - : Cookies werden nur in einem Erstparteienkontext gesendet und nicht zusammen mit Anfragen von Drittanbieter-Websites. Dies ist der Standardwert.
        - `"lax"`
          - : Cookies werden nicht bei normalen Cross-Site-Subanfragen gesendet (zum Beispiel zum Laden von Bildern oder Frames in eine Drittanbieterseite), werden aber gesendet, wenn ein Benutzer zur Ursprungsseite navigiert (z.B. beim Folgen eines Links).
        - `"none"`
          - : Cookies werden in allen Kontexten gesendet.

    - `value`
      - : Ein String mit dem Wert des Cookies.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf {{jsxref("undefined")}} aufgelöst wird, wenn das Setzen des Cookies abgeschlossen ist.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht in eine URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Setzen des Cookies mit dem angegebenen `name` und `value` oder den `options` fehlschlägt.

## Beispiele

Das folgende Beispiel setzt ein Cookie, indem es ein Objekt mit `name`, `value`, `expires` und `domain` übergibt.

```js
const day = 24 * 60 * 60 * 1000;

cookieStore.set({
  name: "cookie1",
  value: "cookie1-value",
  expires: Date.now() + day,
  domain: "example.com",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
