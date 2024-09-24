---
title: "ExtendableCookieChangeEvent: changed-Eigenschaft"
short-title: geändert
slug: Web/API/ExtendableCookieChangeEvent/changed
l10n:
  sourceCommit: 08f7d7ef89c04b824fa246e6fd35d47aebef7b51
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

Die **`changed`** schreibgeschützte Eigenschaft der {{domxref("ExtendableCookieChangeEvent")}}-Schnittstelle gibt alle Cookies zurück, die durch die gegebene Instanz von `ExtendableCookieChangeEvent` geändert wurden.

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
  - : Ein Zeitstempel, angegeben als [Unix-Zeit](/de/docs/Glossary/Unix_time) in Millisekunden, der das Ablaufdatum des Cookies enthält.
- `secure`
  - : Ein {{jsxref("boolean")}} der angibt, ob das Cookie nur in einem sicheren Kontext verwendet wird (HTTPS anstelle von HTTP).
- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Werte:

    - `"strict"`
      - : Cookies werden nur in einem First-Party-Kontext gesendet und nicht mit Anfragen von Drittanbieter-Websites gesendet.
    - `"lax"`
      - : Cookies werden bei normalen abteilungsübergreifenden Unteranfragen nicht gesendet (z.B. um Bilder oder Frames in eine Drittanbieter-Site zu laden), aber gesendet, wenn ein Benutzer innerhalb der Ursprungs-Site navigiert (d.h. wenn er einem Link folgt).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein Boolean, der angibt, ob das Cookie ein partitioniertes Cookie ist (`true`) oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies mit unabhängigem partitionierten Zustand (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies).

## Beispiele

In diesem Beispiel wird beim Setzen des Cookies die `changed`-Eigenschaft von dem Event Listener in der Konsole protokolliert. Das erste Element in diesem Array enthält ein Objekt, das das gerade gesetzte Cookie darstellt.

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
