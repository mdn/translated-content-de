---
title: "ExtendableCookieChangeEvent: changed-Eigenschaft"
short-title: changed
slug: Web/API/ExtendableCookieChangeEvent/changed
l10n:
  sourceCommit: 5ef5a171a41dbcb48c953cc3c98c1237566796e9
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`changed`**-Eigenschaft der [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent)-Schnittstelle gibt alle Cookies zurück, die durch die gegebene `ExtendableCookieChangeEvent`-Instanz geändert wurden.

## Wert

Ein Array von Objekten, das die geänderten Cookie(s) enthält. Jedes Objekt enthält die folgenden Eigenschaften:

- `name`
  - : Ein String, der den Namen des Cookies enthält.
- `value`
  - : Ein String, der den Wert des Cookies enthält.
- `domain`
  - : Ein String, der die Domäne des Cookies enthält.
- `path`
  - : Ein String, der den Pfad des Cookies enthält.
- `expires`
  - : Ein Zeitstempel, als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält.
- `secure`
  - : Ein {{jsxref("Boolean")}}, der angibt, ob das Cookie nur in einem sicheren Kontext verwendet wird (HTTPS anstelle von HTTP).
- `sameSite`
  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Werte:
    - `"strict"`
      - : Cookies werden nur in einem First-Party-Kontext gesendet und nicht mit Anfragen, die von Drittanbieter-Websites initiiert wurden.
    - `"lax"`
      - : Cookies werden nicht bei normalen Cross-Site-Subrequests gesendet (zum Beispiel zum Laden von Bildern oder Frames in eine Drittanbieter-Website), aber werden gesendet, wenn ein Benutzer innerhalb der Ursprungswebsite navigiert (d.h. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein Boolean, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies).

## Beispiele

In diesem Beispiel wird beim Setzen des Cookies der `changed`-Eigenschaft an die Konsole geloggt. Das erste Element in diesem Array enthält ein Objekt, das das gerade gesetzte Cookie darstellt.

```js
self.addEventListener("cookiechange", (event) => {
  console.log(event.changed[0]);
});

const oneDay = 24 * 60 * 60 * 1000;
cookieStore.set({
  name: "cookie1",
  value: "cookie1-value",
  expires: Date.now() + oneDay,
  domain: "example.com",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
