---
title: "ExtendableCookieChangeEvent: deleted-Property"
short-title: deleted
slug: Web/API/ExtendableCookieChangeEvent/deleted
l10n:
  sourceCommit: 5ef5a171a41dbcb48c953cc3c98c1237566796e9
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

Die **`deleted`**-Eigenschaft der [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent)-Schnittstelle ist schreibgeschützt und gibt alle Cookies zurück, die durch die gegebene `ExtendableCookieChangeEvent`-Instanz gelöscht wurden.

## Wert

Ein Array von Objekten, das die gelöschten Cookie(s) enthält. Jedes Objekt hat die folgenden Eigenschaften:

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
  - : Ein {{jsxref("Boolean")}}, der anzeigt, ob das Cookie nur in einem sicheren Kontext (HTTPS statt HTTP) verwendet wird.
- `sameSite`
  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Werte:
    - `"strict"`
      - : Cookies werden nur in einem Kontext erster Partei gesendet und nicht mit Anfragen, die von Websites Dritter initiiert werden.
    - `"lax"`
      - : Cookies werden bei normalen Cross-Site-Anfragen nicht gesendet (zum Beispiel beim Laden von Bildern oder Frames auf einer Seite Dritter), aber sie werden gesendet, wenn ein Nutzer innerhalb der Ursprungsseite navigiert (d.h. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein Boolean, der anzeigt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies mit unabhängiger partitionierter Zuständen (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies).

## Beispiele

In diesem Beispiel wird, wenn das Cookie gelöscht wird, der erste Eintrag der `deleted`-Eigenschaft durch den Event-Listener in die Konsole geloggt. Es enthält ein Objekt, das das gerade gelöschte Cookie repräsentiert.

```js
self.addEventListener("cookiechange", (event) => {
  console.log(event.deleted[0]);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
