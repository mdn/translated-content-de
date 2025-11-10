---
title: "ExtendableCookieChangeEvent: changed-Eigenschaft"
short-title: changed
slug: Web/API/ExtendableCookieChangeEvent/changed
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

Die **`changed`**-Eigenschaft des [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent)-Interfaces gibt alle Cookies zurück, die durch die gegebene `ExtendableCookieChangeEvent`-Instanz verändert wurden.

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
  - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält.
- `secure`
  - : Ein {{jsxref("boolean")}}, der angibt, ob das Cookie nur in einem sicheren Kontext (HTTPS statt HTTP) verwendet wird.
- `sameSite`
  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Werte:
    - `"strict"`
      - : Cookies werden nur in einem Erstanbieterkontext gesendet und nicht mit Anfragen, die von Drittanbieter-Webseiten initiiert werden.
    - `"lax"`
      - : Cookies werden bei normalen Cross-Site-Subrequests (z. B. zum Laden von Bildern oder Frames in eine Drittanbieter-Seite) nicht gesendet, aber sie werden gesendet, wenn ein Benutzer innerhalb der Ursprungsseite navigiert (d.h. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein boolean, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies mit unabhängiger partitionierter Zustandsverwaltung (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

## Beispiele

In diesem Beispiel wird beim Setzen des Cookies der Event-Listener die `changed`-Eigenschaft in die Konsole protokollieren. Das erste Element in diesem Array enthält ein Objekt, das das soeben gesetzte Cookie repräsentiert.

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
