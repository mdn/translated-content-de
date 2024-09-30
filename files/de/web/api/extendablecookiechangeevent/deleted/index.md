---
title: "ExtendableCookieChangeEvent: deleted-Eigenschaft"
short-title: deleted
slug: Web/API/ExtendableCookieChangeEvent/deleted
l10n:
  sourceCommit: 08f7d7ef89c04b824fa246e6fd35d47aebef7b51
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte Eigenschaft **`deleted`** der Schnittstelle [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent) gibt alle Cookies zurück, die durch die gegebene `ExtendableCookieChangeEvent`-Instanz gelöscht wurden.

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
  - : Ein Zeitstempel, angegeben als [Unix-Zeit](/de/docs/Glossary/Unix_time) in Millisekunden, der das Ablaufdatum des Cookies enthält.
- `secure`
  - : Ein {{jsxref("boolean")}}, das angibt, ob das Cookie nur in einem sicheren Kontext verwendet wird (HTTPS anstelle von HTTP).
- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Werte:

    - `"strict"`
      - : Cookies werden nur in einem Erstpartei-Kontext gesendet und nicht mit Anfragen, die von Drittanbieter-Websites initiiert wurden.
    - `"lax"`
      - : Cookies werden bei normalen Cross-Site-Subrequests nicht gesendet (zum Beispiel zum Laden von Bildern oder Frames auf einer Drittanbieter-Website), aber sie werden gesendet, wenn ein Benutzer innerhalb der Ursprungsseite navigiert (d. h. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein Boolean, der angibt, ob das Cookie ein partitioniertes Cookie ist (`true`) oder nicht (`false`). Siehe [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) für weitere Informationen.

## Beispiele

In diesem Beispiel protokolliert der Event-Listener das erste Element in der `deleted`-Eigenschaft in die Konsole, wenn das Cookie gelöscht wird. Es enthält ein Objekt, das das soeben gelöschte Cookie repräsentiert.

```js
self.addEventListener("cookiechange", (event) => {
  console.log(event.deleted[0]);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
