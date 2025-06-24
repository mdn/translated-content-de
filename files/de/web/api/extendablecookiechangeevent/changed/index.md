---
title: "ExtendableCookieChangeEvent: changed Eigenschaft"
short-title: changed
slug: Web/API/ExtendableCookieChangeEvent/changed
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

Die **`changed`** schreibgeschützte Eigenschaft der [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent) Schnittstelle gibt alle Cookies zurück, die durch die gegebene `ExtendableCookieChangeEvent`-Instanz verändert wurden.

## Wert

Ein Array von Objekten, das die geänderten Cookies enthält. Jedes Objekt besitzt die folgenden Eigenschaften:

- `name`
  - : Ein String, der den Namen des Cookies enthält.
- `value`
  - : Ein String, der den Wert des Cookies enthält.
- `domain`
  - : Ein String, der die Domain des Cookies enthält.
- `path`
  - : Ein String, der den Pfad des Cookies enthält.
- `expires`
  - : Ein Zeitstempel, gegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält.
- `secure`
  - : Ein {{jsxref("boolean")}}, der anzeigt, ob das Cookie nur in einem sicheren Kontext verwendet wird (HTTPS statt HTTP).
- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Werte:
    - `"strict"`
      - : Cookies werden nur in einem First-Party-Kontext gesendet und nicht mit Anfragen von Drittanbieter-Websites.
    - `"lax"`
      - : Cookies werden nicht bei normalen Cross-Site-Unteranfragen gesendet (zum Beispiel beim Laden von Bildern oder Frames auf einer Drittanbieter-Seite), aber sie werden gesendet, wenn ein Benutzer innerhalb der Ursprungsseite navigiert (d.h. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein Boolean-Wert, der angibt, ob es sich um ein partitioniertes Cookie (`true`) handelt oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

## Beispiele

In diesem Beispiel wird beim Setzen des Cookies die `changed` Eigenschaft des Event-Listeners in die Konsole geloggt. Das erste Element in diesem Array enthält ein Objekt, das das Cookie repräsentiert, das gerade gesetzt wurde.

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
