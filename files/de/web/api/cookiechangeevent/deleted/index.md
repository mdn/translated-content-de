---
title: "CookieChangeEvent: deleted-Eigenschaft"
short-title: deleted
slug: Web/API/CookieChangeEvent/deleted
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

Die schreibgeschützte **`deleted`**-Eigenschaft des [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)-Interfaces gibt ein Array der Cookies zurück, die von der gegebenen `CookieChangeEvent`-Instanz gelöscht wurden.

Beachten Sie, dass dies Cookies umfassen wird, die mit einem Ablaufdatum in der Vergangenheit erstellt wurden, da diese Cookies sofort gelöscht werden.

## Wert

Ein Array von Objekten, das die gelöschten Cookies enthält. Jedes Objekt enthält die folgenden Eigenschaften:

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
  - : Ein {{jsxref("boolean")}}, der angibt, ob das Cookie nur in einem sicheren Kontext verwendet wird (HTTPS anstelle von HTTP).
- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Werte:
    - `"strict"`
      - : Cookies werden nur in einem First-Party-Kontext gesendet und nicht mit Anfragen gesendet, die von Drittanbieter-Websites initiiert werden.
    - `"lax"`
      - : Cookies werden bei normalen Cross-Site-Subanfragen (z. B. zum Laden von Bildern oder Frames auf einer Drittanbieter-Website) nicht gesendet, aber wenn ein Benutzer innerhalb der Ursprungs-Website navigiert (d.h. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein Boolean, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies mit unabhängigem partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

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
