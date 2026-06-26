---
title: "CookieChangeEvent: changed-Eigenschaft"
short-title: changed
slug: Web/API/CookieChangeEvent/changed
l10n:
  sourceCommit: 5ef5a171a41dbcb48c953cc3c98c1237566796e9
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

Die schreibgeschützte **`changed`**-Eigenschaft des [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)-Interfaces gibt ein Array der Cookies zurück, die geändert wurden.

Beachten Sie, dass dies Cookies ausschließt, die mit einem Ablaufdatum in der Vergangenheit erstellt wurden, da diese Cookies sofort gelöscht werden.

## Wert

Ein Array von Objekten, das die geänderten Cookie(s) enthält. Jedes Objekt enthält die folgenden Eigenschaften:

- `name`
  - : Ein String, der den Namen des Cookies enthält.
- `value`
  - : Ein String, der den Wert des Cookies enthält.
- `domain`
  - : Ein String, der die Domain des Cookies enthält.
- `path`
  - : Ein String, der den Pfad des Cookies enthält.
- `expires`
  - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält.
- `secure`
  - : Ein {{jsxref("Boolean")}}, der angibt, ob das Cookie nur in einem sicheren Kontext verwendet wird (HTTPS anstelle von HTTP).
- `sameSite`
  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Werte:
    - `"strict"`
      - : Cookies werden nur in einem First-Party-Kontext gesendet und nicht mit Anforderungen von Drittanbieter-Websites.
    - `"lax"`
      - : Cookies werden nicht bei normalen Cross-Site-Subanfragen gesendet (zum Beispiel, um Bilder oder Frames in eine Drittanbieter-Website zu laden), aber sie werden gesendet, wenn sich ein Benutzer innerhalb der Ursprungsseite bewegt (d.h. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein Boolean, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Siehe [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies) für weitere Informationen.

## Beispiele

In diesem Beispiel wird beim Setzen des Cookies der Eventlistener die `changed`-Eigenschaft in der Konsole protokollieren. Das erste Element in diesem Array enthält ein Objekt, das das gerade gesetzte Cookie darstellt.

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
