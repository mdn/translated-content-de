---
title: "CookieChangeEvent: changed-Eigenschaft"
short-title: changed
slug: Web/API/CookieChangeEvent/changed
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

Die schreibgeschützte Eigenschaft **`changed`** des [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)-Interfaces gibt ein Array der Cookies zurück, die geändert wurden.

Beachten Sie, dass Cookies, die mit einem in der Vergangenheit liegenden Ablaufdatum erstellt wurden, ausgeschlossen werden, da diese Cookies sofort gelöscht werden.

## Wert

Ein Array von Objekten, die die geänderten Cookies enthalten. Jedes Objekt enthält die folgenden Eigenschaften:

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
  - : Ein {{jsxref("boolean")}}, der angibt, ob das Cookie nur in einem sicheren Kontext (HTTPS statt HTTP) verwendet wird.
- `sameSite`
  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Werte:
    - `"strict"`
      - : Cookies werden nur in einem First-Party-Kontext gesendet und nicht mit Anfragen, die von Drittanbieter-Websites initiiert werden.
    - `"lax"`
      - : Cookies werden nicht bei normalen Cross-Site-Subanfragen (zum Beispiel beim Laden von Bildern oder Frames auf eine Drittanbieter-Website) gesendet, aber sie werden gesendet, wenn ein Benutzer innerhalb der Ursprungs-Website navigiert (d.h. wenn er einem Link folgt).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein Boolean, der angibt, ob es sich bei dem Cookie um ein partitioniertes Cookie (`true`) handelt oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies mit unabhängigen partitionierten Zuständen (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

## Beispiele

In diesem Beispiel protokolliert der Event-Listener die `changed`-Eigenschaft in die Konsole, wenn das Cookie gesetzt wird. Das erste Element in diesem Array enthält ein Objekt, das das gerade gesetzte Cookie darstellt.

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
