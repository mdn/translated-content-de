---
title: "CookieChangeEvent: deleted-Eigenschaft"
short-title: deleted
slug: Web/API/CookieChangeEvent/deleted
l10n:
  sourceCommit: de4bd74771b88bb6352c1136b608811edf24ffda
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

Die **`deleted`** schreibgeschützte Eigenschaft des [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)-Interfaces gibt ein Array der Cookies zurück, die durch die gegebene `CookieChangeEvent`-Instanz gelöscht wurden.

Beachten Sie, dass dies Cookies einschließt, die mit einem abgelaufenen Datum in der Vergangenheit erstellt wurden, da diese Cookies sofort gelöscht werden.

## Wert

Ein Array von Objekten, das die gelöschten Cookie(s) enthält. Jedes Objekt enthält die folgenden Eigenschaften:

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
  - : Ein {{jsxref("boolean")}}, der angibt, ob das Cookie nur in einem sicheren Kontext (HTTPS statt HTTP) verwendet wird.
- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Werte:

    - `"strict"`
      - : Cookies werden nur in einem Erstanbieterkontext gesendet und nicht mit Anfragen, die von Drittanbieter-Websites initiiert werden.
    - `"lax"`
      - : Cookies werden bei normalen Cross-Site-Subrequests (z.B. zum Laden von Bildern oder Frames in eine Drittanbieterseite) nicht gesendet, aber wenn ein Benutzer innerhalb der Ursprungsseite navigiert (d.h. beim Folgen eines Links), werden sie gesendet.
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein Boolean, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Siehe [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) für weitere Informationen.

## Beispiele

In diesem Beispiel protokolliert der Ereignislistener das erste Element der `CookieChangeEvent.deleted`-Eigenschaft in die Konsole, wenn das Cookie gelöscht wird. Es enthält ein Objekt, das das gerade gelöschte Cookie darstellt.

```js
cookieStore.addEventListener("change", (event) => {
  console.log(event.deleted[0]);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
