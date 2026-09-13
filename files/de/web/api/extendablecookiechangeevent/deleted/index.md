---
title: "ExtendableCookieChangeEvent: deleted-Eigenschaft"
short-title: deleted
slug: Web/API/ExtendableCookieChangeEvent/deleted
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`deleted`**-Eigenschaft des [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent)-Interfaces gibt alle Cookies zurück, die durch die gegebene Instanz von `ExtendableCookieChangeEvent` gelöscht wurden.

## Wert

Ein Array von Objekten, das die gelöschten Cookies enthält. Jedes Objekt enthält die folgenden Eigenschaften:

- `name`
  - : Eine Zeichenkette, die den Namen des Cookies enthält.
- `value`
  - : Eine Zeichenkette, die den Wert des Cookies enthält.
- `domain`
  - : Eine Zeichenkette, die die Domain des Cookies enthält.
- `path`
  - : Eine Zeichenkette, die den Pfad des Cookies enthält.
- `expires`
  - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält.
- `secure`
  - : Ein {{jsxref("Boolean")}}, der anzeigt, ob das Cookie nur in einem sicheren Kontext verwendet wird (HTTPS anstelle von HTTP).
- `sameSite`
  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Werte:
    - `"strict"`
      - : Cookies werden nur in einem Erstparteikontext gesendet und nicht mit Anfragen, die von Websites Dritter initiiert wurden.
    - `"lax"`
      - : Cookies werden bei normalen Cross-Site-Subanfragen (zum Beispiel, um Bilder oder Frames in eine Drittanbieter-Website zu laden) nicht gesendet, wohl aber, wenn ein Benutzer innerhalb der Ursprungswebsite navigiert (d.h. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein Boolean, der anzeigt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies mit unabhängigem partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies).

## Beispiele

In diesem Beispiel protokolliert der Event-Listener beim Löschen eines Cookies das erste Element in der `deleted`-Eigenschaft auf der Konsole. Es enthält ein Objekt, das das soeben gelöschte Cookie repräsentiert.

```js
self.addEventListener("cookiechange", (event) => {
  console.log(event.deleted[0]);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
