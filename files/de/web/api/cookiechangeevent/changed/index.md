---
title: "CookieChangeEvent: changed-Eigenschaft"
short-title: changed
slug: Web/API/CookieChangeEvent/changed
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

Die schreibgeschützte **`changed`**-Eigenschaft der [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)-Schnittstelle gibt ein Array der Cookies zurück, die geändert wurden.

Beachten Sie, dass Cookies mit einem Ablaufdatum in der Vergangenheit ausgeschlossen werden, da diese Cookies sofort gelöscht werden.

## Wert

Ein Array von Objekten, die die geänderten Cookie(s) enthalten. Jedes Objekt enthält die folgenden Eigenschaften:

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
  - : Ein {{jsxref("boolean")}}, der angibt, ob das Cookie nur in einem sicheren Kontext (HTTPS anstelle von HTTP) verwendet wird.
- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Werte:
    - `"strict"`
      - : Cookies werden nur in einem First-Party-Kontext gesendet und nicht mit Anfragen, die von Drittanbieter-Websites initiiert wurden.
    - `"lax"`
      - : Cookies werden nicht bei normalen Cross-Site-Unteranfragen gesendet (z.B. zum Laden von Bildern oder Frames in eine Drittanbieter-Website), aber sie werden gesendet, wenn ein Benutzer innerhalb der Ursprungsseite navigiert (d.h. wenn er einem Link folgt).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein boolean, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

## Beispiele

In diesem Beispiel, wenn das Cookie gesetzt wird, protokolliert der Event-Listener die `changed`-Eigenschaft in die Konsole. Das erste Element in diesem Array enthält ein Objekt, das das gerade gesetzte Cookie darstellt.

```js
cookieStore.addEventListener("change", (event) => {
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
