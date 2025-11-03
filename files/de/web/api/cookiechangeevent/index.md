---
title: CookieChangeEvent
slug: Web/API/CookieChangeEvent
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

Die **`CookieChangeEvent`**-Schnittstelle der [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist der Ereignistyp des [`change`](/de/docs/Web/API/CookieStore/change_event)-Events, das bei einem [`CookieStore`](/de/docs/Web/API/CookieStore) ausgelöst wird, wenn ein Cookie erstellt oder gelöscht wird.

> [!NOTE]
> Ein Cookie, das aufgrund der Einfügung eines anderen Cookies mit demselben Namen, derselben Domain und demselben Pfad ersetzt wird, wird ignoriert und löst kein Änderungsereignis aus.

{{InheritanceDiagram}}

## Konstruktor

- [`CookieChangeEvent()`](/de/docs/Web/API/CookieChangeEvent/CookieChangeEvent)
  - : Erstellt ein neues `CookieChangeEvent`.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`Event`](/de/docs/Web/API/Event)._

- [`CookieChangeEvent.changed`](/de/docs/Web/API/CookieChangeEvent/changed) {{ReadOnlyInline}}
  - : Ein Array, das alle neu erstellten Cookies auflistet. Beachten Sie, dass dies Cookies ausschließt, die mit einem Verfallsdatum in der Vergangenheit erstellt wurden, da diese sofort gelöscht werden.
- [`CookieChangeEvent.deleted`](/de/docs/Web/API/CookieChangeEvent/deleted) {{ReadOnlyInline}}
  - : Ein Array, das alle entfernten Cookies auflistet, entweder weil sie abgelaufen sind oder weil sie explizit gelöscht wurden. Beachten Sie, dass dies Cookies einschließt, die mit einem Verfallsdatum in der Vergangenheit erstellt wurden.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von [`Event`](/de/docs/Web/API/Event)._

## Beispiele

In diesem Beispiel, wenn das Cookie gesetzt wird, protokolliert der Event-Listener das Ereignis in der Konsole. Dies ist ein `CookieChangeEvent`-Objekt mit der [`changed`](/de/docs/Web/API/CookieChangeEvent/changed)-Eigenschaft, die ein Objekt enthält, das das gerade gesetzte Cookie darstellt.

```js
cookieStore.addEventListener("change", (event) => {
  console.log(event);
});

const oneDay = 24 * 60 * 60 * 1000;
cookieStore.set({
  name: "cookie1",
  value: "cookie1-value",
  expires: Date.now() + oneDay,
  domain: "example.com",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
