---
title: CookieChangeEvent
slug: Web/API/CookieChangeEvent
l10n:
  sourceCommit: de4bd74771b88bb6352c1136b608811edf24ffda
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

Die **`CookieChangeEvent`**-Schnittstelle der [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist der Ereignistyp des [`change`](/de/docs/Web/API/CookieStore/change_event)-Ereignisses, das bei einem [`CookieStore`](/de/docs/Web/API/CookieStore) ausgelöst wird, wenn Cookies erstellt oder gelöscht werden.

> [!NOTE]
> Ein Cookie, das durch das Einfügen eines anderen Cookies mit demselben Namen, derselben Domain und demselben Pfad ersetzt wird, wird ignoriert und löst kein Änderungsereignis aus.

{{InheritanceDiagram}}

## Konstruktor

- [`CookieChangeEvent()`](/de/docs/Web/API/CookieChangeEvent/CookieChangeEvent)
  - : Erstellt ein neues `CookieChangeEvent`.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`Event`](/de/docs/Web/API/Event)._

- [`CookieChangeEvent.changed`](/de/docs/Web/API/CookieChangeEvent/changed) {{ReadOnlyInline}}
  - : Ein Array, das alle neu erstellten Cookies auflistet. Beachten Sie, dass Cookies mit einem Ablaufdatum in der Vergangenheit ausgeschlossen werden, da diese Cookies sofort gelöscht werden.
- [`CookieChangeEvent.deleted`](/de/docs/Web/API/CookieChangeEvent/deleted) {{ReadOnlyInline}}
  - : Ein Array, das alle Cookies auflistet, die entfernt wurden, entweder weil sie abgelaufen sind oder weil sie explizit gelöscht wurden. Beachten Sie, dass dies Cookies einschließt, die mit einem Ablaufdatum in der Vergangenheit erstellt wurden.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von [`Event`](/de/docs/Web/API/Event)._

## Beispiele

In diesem Beispiel protokolliert der Ereignis-Listener beim Setzen des Cookies das Ereignis in der Konsole. Dies ist ein `CookieChangeEvent`-Objekt mit der [`changed`](/de/docs/Web/API/CookieChangeEvent/changed)-Eigenschaft, die ein Objekt enthält, das das gerade gesetzte Cookie darstellt.

```js
cookieStore.addEventListener("change", (event) => {
  console.log(event);
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
