---
title: "CookieStore: set()-Methode"
short-title: set()
slug: Web/API/CookieStore/set
l10n:
  sourceCommit: 01e7af5aeee7833c129ddfa41eb719b123a8cdcc
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

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `domain` {{Optional_Inline}}
      - : Ein String, der die Domain des Cookies enthält. Standardmäßig `null`.
    - `expires` {{Optional_Inline}}
      - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält. Standardmäßig `null`.
    - `name`
      - : Ein String mit dem Namen eines Cookies.
    - `partitioned` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist. Wenn auf `true` gesetzt, wird das gesetzte Cookie ein partitioniertes Cookie sein. Weitere Informationen finden Sie unter [Cookies mit unabhängigem partitionierten Zustand (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies).
    - `path` {{Optional_Inline}}
      - : Ein String, der den Pfad des Cookies enthält. Standardmäßig `/`.
    - `sameSite` {{Optional_Inline}}

      - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Werte:

        - `"strict"`
          - : Cookies werden nur in einem Erstparteikontext gesendet und nicht zusammen mit Anfragen, die von Drittanbieter-Websites initiiert werden. Dies ist der Standard.
        - `"lax"`
          - : Cookies werden nicht bei normalen Cross-Site-Subanfragen gesendet (zum Beispiel zum Laden von Bildern oder Frames in eine Drittanbieter-Seite), jedoch gesendet, wenn ein Benutzer zur Ursprungsseite navigiert (d.h. wenn er einem Link folgt).
        - `"none"`
          - : Cookies werden in allen Kontexten gesendet.

    - `value`
      - : Ein String mit dem Wert des Cookies.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird, wenn das Setzen des Cookies abgeschlossen ist.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht zu einer URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Setzen des Cookies mit dem angegebenen `name` und `value` oder `options` fehlschlägt.

## Beispiele

Das folgende Beispiel setzt ein Cookie, indem ein Objekt mit `name`, `value`, `expires` und `domain` übergeben wird.

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
