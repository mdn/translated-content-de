---
title: "ExtendableCookieChangeEvent: changed-Eigenschaft"
short-title: changed
slug: Web/API/ExtendableCookieChangeEvent/changed
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

Die **`changed`** schreibgeschützte Eigenschaft des [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent)-Interface gibt alle Cookies zurück, die durch die gegebene Instanz von `ExtendableCookieChangeEvent` geändert wurden.

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

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Werte:

    - `"strict"`
      - : Cookies werden nur in einem First-Party-Kontext gesendet und nicht mit Anfragen, die von Drittanbieter-Webseiten initiiert wurden.
    - `"lax"`
      - : Cookies werden nicht bei normalen Cross-Site-Subbfragen gesendet (zum Beispiel, um Bilder oder Frames in eine Drittanbieter-Website zu laden), werden jedoch gesendet, wenn ein Benutzer innerhalb der Ursprungsseite navigiert (d. h., wenn einem Link gefolgt wird).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein Boolean, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies mit unabhängigem partitionierten Status (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

## Beispiele

In diesem Beispiel wird, wenn das Cookie gesetzt wird, der Event-Listener die `changed`-Eigenschaft in die Konsole protokollieren. Das erste Element in diesem Array enthält ein Objekt, das das gerade gesetzte Cookie darstellt.

```js
self.addEventListener("cookiechange", (event) => {
  console.log(event.changed[0]);
});

const one_day = 24 * 60 * 60 * 1000;
cookieStore.set({
  name: "cookie1",
  value: "cookie1-value",
  expires: Date.now() + one_day,
  domain: "example.com",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
