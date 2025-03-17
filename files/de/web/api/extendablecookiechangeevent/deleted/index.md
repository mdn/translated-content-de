---
title: "ExtendableCookieChangeEvent: deleted-Eigenschaft"
short-title: deleted
slug: Web/API/ExtendableCookieChangeEvent/deleted
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`deleted`**-Eigenschaft der [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent)-Schnittstelle gibt die Cookies zurück, die durch die gegebene Instanz von `ExtendableCookieChangeEvent` gelöscht wurden.

## Wert

Ein Array von Objekten, das die gelöschten Cookies enthält. Jedes Objekt umfasst die folgenden Eigenschaften:

- `name`
  - : Ein String, der den Namen des Cookies enthält.
- `value`
  - : Ein String, der den Wert des Cookies enthält.
- `domain`
  - : Ein String, der die Domäne des Cookies enthält.
- `path`
  - : Ein String, der den Pfad des Cookies enthält.
- `expires`
  - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält.
- `secure`
  - : Ein {{jsxref("boolean")}}, der anzeigt, ob das Cookie nur in einem sicheren Kontext (HTTPS anstelle von HTTP) verwendet wird.
- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Werte:

    - `"strict"`
      - : Cookies werden nur in einem First-Party-Kontext gesendet und nicht mit Anfragen, die von Drittanbieter-Websites initiiert wurden, gesendet.
    - `"lax"`
      - : Cookies werden bei normalen Cross-Site-Unteranfragen (z. B. zum Laden von Bildern oder Frames in eine Drittanbieter-Website) nicht gesendet, aber sie werden gesendet, wenn ein Benutzer innerhalb der Ursprungsseite navigiert (d.h. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein Boolean, der anzeigt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

## Beispiele

In diesem Beispiel protokolliert der Event-Listener beim Löschen des Cookies das erste Element in der `deleted`-Eigenschaft in der Konsole. Es enthält ein Objekt, das das gerade gelöschte Cookie repräsentiert.

```js
self.addEventListener("cookiechange", (event) => {
  console.log(event.deleted[0]);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
