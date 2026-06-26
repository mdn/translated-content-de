---
title: "CookieChangeEvent: deleted-Eigenschaft"
short-title: deleted
slug: Web/API/CookieChangeEvent/deleted
l10n:
  sourceCommit: 5ef5a171a41dbcb48c953cc3c98c1237566796e9
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

Die schreibgeschützte **`deleted`**-Eigenschaft des [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)-Interfaces gibt ein Array der Cookies zurück, die durch die gegebene `CookieChangeEvent`-Instanz gelöscht wurden.

Beachten Sie, dass dies Cookies umfassen wird, die mit einem Ablaufdatum in der Vergangenheit erstellt wurden, da diese Cookies sofort gelöscht werden.

## Wert

Ein Array von Objekten, die das/die gelöschte(n) Cookie(s) enthalten. Jedes Objekt enthält die folgenden Eigenschaften:

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
  - : Ein {{jsxref("Boolean")}}, das anzeigt, ob das Cookie nur in einem sicheren Kontext verwendet wird (HTTPS anstelle von HTTP).
- `sameSite`
  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Werte:
    - `"strict"`
      - : Cookies werden nur in einem Erstanbieter-Kontext gesendet und nicht mit Anfragen gesendet, die von Websites Dritter initiiert werden.
    - `"lax"`
      - : Cookies werden bei normalen Subanfragen über Websites hinweg nicht gesendet (zum Beispiel zum Laden von Bildern oder Frames in eine Drittanbieterseite), jedoch werden sie gesendet, wenn ein Benutzer innerhalb der Ursprungsseite navigiert (d.h. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein Boolean, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Siehe [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies) für weitere Informationen.

## Beispiele

In diesem Beispiel protokolliert der Event-Listener, wenn das Cookie gelöscht wird, das erste Element in der `CookieChangeEvent.deleted`-Eigenschaft in der Konsole. Es enthält ein Objekt, das das soeben gelöschte Cookie repräsentiert.

```js
cookieStore.addEventListener("change", (event) => {
  console.log(event.deleted[0]);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
