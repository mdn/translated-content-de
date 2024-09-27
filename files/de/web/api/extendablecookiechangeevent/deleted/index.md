---
title: "ExtendableCookieChangeEvent: deleted-Eigenschaft"
short-title: deleted
slug: Web/API/ExtendableCookieChangeEvent/deleted
l10n:
  sourceCommit: 08f7d7ef89c04b824fa246e6fd35d47aebef7b51
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

Die **`deleted`** schreibgeschützte Eigenschaft der Schnittstelle [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent) gibt alle Cookies zurück, die durch die gegebene Instanz von `ExtendableCookieChangeEvent` gelöscht wurden.

## Wert

Ein Array von Objekten, die die gelöschten Cookies enthalten. Jedes Objekt enthält die folgenden Eigenschaften:

- `name`
  - : Ein String, der den Namen des Cookies enthält.
- `value`
  - : Ein String, der den Wert des Cookies enthält.
- `domain`
  - : Ein String, der die Domain des Cookies enthält.
- `path`
  - : Ein String, der den Pfad des Cookies enthält.
- `expires`
  - : Ein Zeitstempel im [Unix-Zeit](/de/docs/Glossary/Unix_time)-Format in Millisekunden, der das Ablaufdatum des Cookies enthält.
- `secure`
  - : Ein {{jsxref("boolean")}}, der angibt, ob das Cookie nur in einem sicheren Kontext (HTTPS statt HTTP) verwendet wird.
- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Werte:

    - `"strict"`
      - : Cookies werden nur in einem Erstanbieter-Kontext gesendet und nicht mit Anfragen gesendet, die von Drittanbieter-Websites initiiert werden.
    - `"lax"`
      - : Cookies werden nicht bei normalen Cross-Site-Subanfragen gesendet (zum Beispiel um Bilder oder Frames in eine Drittanbieter-Site zu laden), werden jedoch gesendet, wenn ein Benutzer innerhalb der Ursprungsseite navigiert (d.h. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexte gesendet.

- `partitioned`
  - : Ein boolean, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies).

## Beispiele

In diesem Beispiel protokolliert der Event-Listener, wenn das Cookie gelöscht wird, das erste Element in der `deleted`-Eigenschaft in der Konsole. Es enthält ein Objekt, das das gerade gelöschte Cookie darstellt.

```js
self.addEventListener("cookiechange", (event) => {
  console.log(event.deleted[0]);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
