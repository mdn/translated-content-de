---
title: "CookieChangeEvent: deleted-Eigenschaft"
short-title: deleted
slug: Web/API/CookieChangeEvent/deleted
l10n:
  sourceCommit: de4bd74771b88bb6352c1136b608811edf24ffda
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

Die **`deleted`**-Eigenschaft der [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)-Schnittstelle ist schreibgeschützt und gibt ein Array der Cookies zurück, die durch die gegebene Instanz des `CookieChangeEvent` gelöscht wurden.

Beachten Sie, dass dies Cookies einschließt, die mit einem Ablaufdatum in der Vergangenheit erstellt wurden, da diese Cookies sofort gelöscht werden.

## Wert

Ein Array von Objekten, die das oder die gelöschten Cookies enthalten. Jedes Objekt enthält die folgenden Eigenschaften:

- `name`
  - : Ein String, der den Namen des Cookies enthält.
- `value`
  - : Ein String, der den Wert des Cookies enthält.
- `domain`
  - : Ein String, der die Domäne des Cookies enthält.
- `path`
  - : Ein String, der den Pfad des Cookies enthält.
- `expires`
  - : Ein Zeitstempel, angegeben als [Unix-Zeit](/de/docs/Glossary/Unix_time) in Millisekunden, der das Ablaufdatum des Cookies enthält.
- `secure`
  - : Ein {{jsxref("boolean")}}, der anzeigt, ob das Cookie nur in einem sicheren Kontext (HTTPS anstelle von HTTP) verwendet wird.
- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Werte:

    - `"strict"`
      - : Cookies werden nur in einem Erstpartei-Kontext gesendet und nicht mit Anfragen weitergeleitet, die von Drittanbieterseiten initiiert wurden.
    - `"lax"`
      - : Cookies werden bei normalen Cross-Site-Subanfragen (zum Beispiel zum Laden von Bildern oder Frames in eine Drittanbieterseite) nicht gesendet, aber sie werden gesendet, wenn ein Benutzer innerhalb der Ursprungsseite navigiert (d.h. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein Boolean, der anzeigt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Siehe [Cookies mit unabhängigem partitionierten Zustand (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) für weitere Informationen.

## Beispiele

In diesem Beispiel protokolliert der Ereignislistener beim Löschen eines Cookies das erste Element in der `CookieChangeEvent.deleted`-Eigenschaft in die Konsole. Es enthält ein Objekt, das das gerade gelöschte Cookie repräsentiert.

```js
cookieStore.addEventListener("change", (event) => {
  console.log(event.deleted[0]);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
