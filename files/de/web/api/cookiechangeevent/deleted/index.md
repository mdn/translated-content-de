---
title: "CookieChangeEvent: deleted-Eigenschaft"
short-title: deleted
slug: Web/API/CookieChangeEvent/deleted
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

Die schreibgeschützte **`deleted`**-Eigenschaft der [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)-Schnittstelle gibt ein Array der Cookies zurück, die durch die gegebene `CookieChangeEvent`-Instanz gelöscht wurden.

Beachten Sie, dass dies auch Cookies einschließt, die mit einem Ablaufdatum in der Vergangenheit erstellt wurden, da diese Cookies sofort gelöscht werden.

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
  - : Ein {{jsxref("Boolean")}}, das angibt, ob das Cookie nur in einem sicheren Kontext (HTTPS statt HTTP) verwendet wird.
- `sameSite`
  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Werte:
    - `"strict"`
      - : Cookies werden nur in einem Erstanbieter-Kontext gesendet und nicht mit Anfragen, die von Drittanbieter-Webseiten initiiert werden.
    - `"lax"`
      - : Cookies werden nicht bei normalen plattformübergreifenden Subanfragen (zum Beispiel beim Laden von Bildern oder Frames in eine Drittanbieter-Seite) gesendet, aber sie werden versendet, wenn ein Benutzer innerhalb der Ursprungsseite navigiert (d.h. wenn er einem Link folgt).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein boolean, das angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Siehe [Cookies mit unabhängigem partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies) für weitere Informationen.

## Beispiele

In diesem Beispiel protokolliert der Event-Listener, wenn das Cookie gelöscht wird, das erste Element der `CookieChangeEvent.deleted`-Eigenschaft in der Konsole. Es enthält ein Objekt, das das gerade gelöschte Cookie darstellt.

```js
cookieStore.addEventListener("change", (event) => {
  console.log(event.deleted[0]);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
