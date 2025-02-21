---
title: "CookieChangeEvent: deleted-Eigenschaft"
short-title: deleted
slug: Web/API/CookieChangeEvent/deleted
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

Die schreibgeschützte **`deleted`**-Eigenschaft der [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)-Schnittstelle gibt ein Array der Cookies zurück, die durch die gegebene `CookieChangeEvent`-Instanz gelöscht wurden.

Beachten Sie, dass dies Cookies einschließt, die mit einem Ablaufdatum in der Vergangenheit erstellt wurden, da diese Cookies sofort gelöscht werden.

## Wert

Ein Array von Objekten, das die gelöschten Cookies enthält. Jedes Objekt enthält die folgenden Eigenschaften:

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
      - : Cookies werden nur in einem Erstanbieter-Kontext gesendet und nicht mit Anfragen, die von Drittanbieter-Websites initiiert werden.
    - `"lax"`
      - : Cookies werden bei normalen cross-site Subanfragen nicht gesendet (z. B. um Bilder oder Frames in eine Drittanbieter-Website zu laden), aber sie werden gesendet, wenn ein Benutzer innerhalb der Ursprungsseite navigiert (d. h., wenn ein Link gefolgt wird).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein boolean, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies mit unabhängigem partitionierten Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

## Beispiele

In diesem Beispiel protokolliert der Event-Listener, wenn das Cookie gelöscht wird, das erste Element in der `CookieChangeEvent.deleted`-Eigenschaft in der Konsole. Es enthält ein Objekt, das das gerade gelöschte Cookie darstellt.

```js
cookieStore.addEventListener("change", (event) => {
  console.log(event.deleted[0]);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
