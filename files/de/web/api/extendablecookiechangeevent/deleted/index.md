---
title: "ExtendableCookieChangeEvent: deleted Eigenschaft"
short-title: deleted
slug: Web/API/ExtendableCookieChangeEvent/deleted
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte Eigenschaft **`deleted`** der Schnittstelle [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent) gibt alle Cookies zurück, die durch die Instanz von `ExtendableCookieChangeEvent` gelöscht wurden.

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
  - : Ein {{jsxref("boolean")}}, der angibt, ob das Cookie nur in einem sicheren Kontext (HTTPS anstelle von HTTP) verwendet wird.
- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Werte:
    - `"strict"`
      - : Cookies werden nur in einem Erstanbieter-Kontext gesendet und nicht mit Anfragen von Drittanbieter-Websites.
    - `"lax"`
      - : Cookies werden bei normalen Cross-Site-Anfragen nicht gesendet (zum Beispiel, um Bilder oder Frames in eine Drittanbieter-Seite zu laden), aber sie werden gesendet, wenn ein Benutzer innerhalb der Ursprungsseite navigiert (d.h. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein boolean, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

## Beispiele

In diesem Beispiel protokolliert der Event-Listener beim Löschen des Cookies das erste Element der `deleted`-Eigenschaft in der Konsole. Es enthält ein Objekt, das das gerade gelöschte Cookie darstellt.

```js
self.addEventListener("cookiechange", (event) => {
  console.log(event.deleted[0]);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
