---
title: "CookieChangeEvent: veränderte Eigenschaft"
short-title: verändert
slug: Web/API/CookieChangeEvent/changed
l10n:
  sourceCommit: de4bd74771b88bb6352c1136b608811edf24ffda
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

Die **`changed`** schreibgeschützte Eigenschaft des {{domxref("CookieChangeEvent")}}-Interfaces gibt ein Array der Cookies zurück, die geändert wurden.

Bitte beachten Sie, dass Cookies, die mit einem Ablaufdatum in der Vergangenheit erstellt wurden, ausgeschlossen werden, da diese Cookies sofort gelöscht werden.

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
  - : Ein Zeitstempel, angegeben in {{glossary("Unix time")}} in Millisekunden, der das Ablaufdatum des Cookies enthält.
- `secure`
  - : Ein {{jsxref("boolean")}}, der angibt, ob das Cookie nur in einem sicheren Kontext (HTTPS statt HTTP) verwendet wird.
- `sameSite`
  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Werte:

    - `"strict"`
      - : Cookies werden nur im Erstparteikontext gesendet und nicht mit Anfragen, die von Webseiten Dritter initiiert werden.
    - `"lax"`
      - : Cookies werden nicht bei normalen plattformübergreifenden Subanfragen gesendet (zum Beispiel, um Bilder oder Frames in eine Drittanbieter-Site zu laden), aber sie werden gesendet, wenn ein Benutzer innerhalb der Ursprungsseite navigiert (d.h. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein Boolean, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Siehe [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) für weitere Informationen.

## Beispiele

In diesem Beispiel protokolliert der Event-Listener die `changed`-Eigenschaft in der Konsole, wenn das Cookie gesetzt wird. Der erste Eintrag in diesem Array enthält ein Objekt, das das gerade gesetzte Cookie repräsentiert.

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
