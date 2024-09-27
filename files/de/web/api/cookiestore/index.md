---
title: CookieStore
slug: Web/API/CookieStore
l10n:
  sourceCommit: 01e7af5aeee7833c129ddfa41eb719b123a8cdcc
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Das **`CookieStore`** Interface der [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) bietet Methoden zum asynchronen Abrufen und Setzen von Cookies, entweder von einer Seite oder einem Service Worker.

Das `CookieStore` wird über Attribute im globalen Scope in einem [`Window`](/de/docs/Web/API/Window) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) Kontext zugegriffen. Daher gibt es keinen Konstruktor.

{{InheritanceDiagram}}

## Instanzmethoden

- [`CookieStore.delete()`](/de/docs/Web/API/CookieStore/delete)
  - : Die `delete()` Methode löscht ein Cookie mit dem gegebenen `name` oder `options` Objekt. Sie gibt ein {{jsxref("Promise")}} zurück, das sich auflöst, wenn das Löschen abgeschlossen ist.
- [`CookieStore.get()`](/de/docs/Web/API/CookieStore/get)
  - : Die `get()` Methode ruft ein einzelnes Cookie mit dem gegebenen `name` oder `options` Objekt ab. Sie gibt ein {{jsxref("Promise")}} zurück, das sich mit den Details eines einzelnen Cookies auflöst.
- [`CookieStore.getAll()`](/de/docs/Web/API/CookieStore/getAll)
  - : Die `getAll()` Methode ruft alle passenden Cookies ab. Sie gibt ein {{jsxref("Promise")}} zurück, das sich mit einer Liste von Cookies auflöst.
- [`CookieStore.set()`](/de/docs/Web/API/CookieStore/set)
  - : Die `set()` Methode setzt ein Cookie mit dem gegebenen `name` und `value` oder `options` Objekt. Sie gibt ein {{jsxref("Promise")}} zurück, das sich auflöst, wenn das Cookie gesetzt ist.

## Ereignisse

- [`change`](/de/docs/Web/API/CookieStore/change_event)
  - : Das `change` Ereignis wird ausgelöst, wenn eine Veränderung an einem Cookie vorgenommen wird.

## Beispiele

In diesem Beispiel setzen wir ein Cookie und schreiben eine Rückmeldung in die Konsole, ob die Operation erfolgreich war oder fehlgeschlagen ist.

```js
const day = 24 * 60 * 60 * 1000;

cookieStore
  .set({
    name: "cookie1",
    value: "cookie1-value",
    expires: Date.now() + day,
    domain: "example.com",
  })
  .then(
    () => {
      console.log("It worked!");
    },
    (reason) => {
      console.error("It failed: ", reason);
    },
  );
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
