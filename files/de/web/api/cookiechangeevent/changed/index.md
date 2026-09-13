---
title: "CookieChangeEvent: changed-Eigenschaft"
short-title: changed
slug: Web/API/CookieChangeEvent/changed
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

Die schreibgeschützte **`changed`**-Eigenschaft des [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)-Interfaces gibt ein Array der Cookies zurück, die geändert wurden.

Beachten Sie, dass dies Cookies ausschließt, die mit einem Ablaufdatum in der Vergangenheit erstellt wurden, da diese Cookies sofort gelöscht werden.

## Wert

Ein Array von Objekten, das die geänderten Cookies enthält. Jedes Objekt enthält die folgenden Eigenschaften:

- `name`
  - : Ein String, der den Namen des Cookies enthält.
- `value`
  - : Ein String, der den Wert des Cookies enthält.
- `domain`
  - : Ein String, der die Domain des Cookies enthält.
- `path`
  - : Ein String, der den Pfad des Cookies enthält.
- `expires`
  - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix time")}} in Millisekunden, der das Ablaufdatum des Cookies enthält.
- `secure`
  - : Ein {{jsxref("Boolean")}}, der angibt, ob das Cookie nur in einem sicheren Kontext verwendet wird (HTTPS statt HTTP).
- `sameSite`
  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Werte:
    - `"strict"`
      - : Cookies werden nur in einem Erstanbieterkontext gesendet und nicht mit Anfragen von Drittanbieter-Websites.
    - `"lax"`
      - : Cookies werden bei normalen Cross-Site-Anfragen nicht gesendet (z.B. beim Laden von Bildern oder Frames auf Drittanbieterseiten), aber sie werden gesendet, wenn der Benutzer innerhalb der Ursprungsseite navigiert (d.h. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein Boolean, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies).

## Beispiele

In diesem Beispiel, wenn das Cookie gesetzt wird, protokolliert der Ereignis-Listener die `changed`-Eigenschaft in der Konsole. Das erste Element in diesem Array enthält ein Objekt, das das gerade gesetzte Cookie darstellt.

```js
cookieStore.addEventListener("change", (event) => {
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
