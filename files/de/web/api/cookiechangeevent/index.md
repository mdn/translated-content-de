---
title: CookieChangeEvent
slug: Web/API/CookieChangeEvent
l10n:
  sourceCommit: de4bd74771b88bb6352c1136b608811edf24ffda
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

Die **`CookieChangeEvent`**-Schnittstelle der {{domxref("Cookie Store API", "", "", "nocode")}} ist der Ereignistyp des {{domxref("CookieStore/change_event", "change")}}-Ereignisses, das bei einem {{domxref("CookieStore")}} ausgelöst wird, wenn Cookies erstellt oder gelöscht werden.

> [!NOTE]
> Ein Cookie, das durch das Einfügen eines anderen Cookies mit demselben Namen, derselben Domäne und demselben Pfad ersetzt wird, wird ignoriert und löst kein Änderungsereignis aus.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("CookieChangeEvent.CookieChangeEvent", "CookieChangeEvent()")}}
  - : Erstellt ein neues `CookieChangeEvent`.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von {{domxref("Event")}}._

- {{domxref("CookieChangeEvent.changed")}} {{ReadOnlyInline}}
  - : Ein Array, das alle neu erstellten Cookies auflistet. Beachten Sie, dass Cookies, die mit einem Ablaufdatum in der Vergangenheit erstellt wurden, ausgeschlossen werden, da diese Cookies sofort gelöscht werden.
- {{domxref("CookieChangeEvent.deleted")}} {{ReadOnlyInline}}
  - : Ein Array, das alle Cookies auflistet, die entweder aufgrund ihres Ablaufs oder weil sie ausdrücklich gelöscht wurden, entfernt wurden. Beachten Sie, dass dies Cookies umfasst, die mit einem Ablaufdatum in der Vergangenheit erstellt wurden.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von {{domxref("Event")}}._

## Beispiele

In diesem Beispiel, wenn das Cookie gesetzt wird, protokolliert der Ereignislistener das Ereignis in der Konsole. Dies ist ein `CookieChangeEvent`-Objekt mit der Eigenschaft {{domxref("CookieChangeEvent.changed","changed")}}, die ein Objekt enthält, das das soeben gesetzte Cookie darstellt.

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
