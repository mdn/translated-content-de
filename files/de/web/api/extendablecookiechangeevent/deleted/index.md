---
title: "Erweiterbares CookieChangeEvent: deleted-Eigenschaft"
short-title: gelöscht
slug: Web/API/ExtendableCookieChangeEvent/deleted
l10n:
  sourceCommit: 08f7d7ef89c04b824fa246e6fd35d47aebef7b51
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

Die **`deleted`** schreibgeschützte Eigenschaft der {{domxref("ExtendableCookieChangeEvent")}} Schnittstelle gibt alle Cookies zurück, die durch die gegebene `ExtendableCookieChangeEvent` Instanz gelöscht wurden.

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
  - : Ein Zeitstempel, angegeben als [Unix-Zeit](/de/docs/Glossary/Unix_time) in Millisekunden, der das Ablaufdatum des Cookies enthält.
- `secure`
  - : Ein {{jsxref("boolean")}}, der angibt, ob das Cookie nur in einem sicheren Kontext (HTTPS anstatt HTTP) verwendet wird.
- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Werte:

    - `"strict"`
      - : Cookies werden nur in einem First-Party-Kontext gesendet und nicht mit Anfragen, die von Drittanbieter-Websites initiiert werden.
    - `"lax"`
      - : Cookies werden bei normalen Cross-Site-Subanfragen nicht gesendet (zum Beispiel zum Laden von Bildern oder Frames in eine Drittanbieter-Website), aber sie werden gesendet, wenn sich ein Benutzer innerhalb der Origin-Site bewegt (d.h. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `partitioned`
  - : Ein boolean, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Siehe [Cookies mit unabhängigen partitionierten Zuständen (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) für weitere Informationen.

## Beispiele

In diesem Beispiel wird beim Löschen des Cookies der erste Eintrag der `deleted` Eigenschaft in die Konsole protokolliert. Es enthält ein Objekt, das das gerade gelöschte Cookie darstellt.

```js
self.addEventListener("cookiechange", (event) => {
  console.log(event.deleted[0]);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
