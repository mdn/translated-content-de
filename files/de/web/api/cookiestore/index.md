---
title: CookieStore
slug: Web/API/CookieStore
l10n:
  sourceCommit: 01e7af5aeee7833c129ddfa41eb719b123a8cdcc
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Das **`CookieStore`** Interface der {{domxref("Cookie Store API", "", "", "nocode")}} stellt Methoden zum asynchronen Abrufen und Setzen von Cookies entweder von einer Seite oder einem Service Worker bereit.

Das `CookieStore` wird über Attribute im globalen Kontext in einem {{domxref("Window")}} oder {{domxref("ServiceWorkerGlobalScope")}} Kontext aufgerufen. Daher gibt es keinen Konstruktor.

{{InheritanceDiagram}}

## Instanzmethoden

- {{domxref("CookieStore.delete()")}}
  - : Die `delete()`-Methode löscht ein Cookie mit dem angegebenen `name` oder `options`-Objekt und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das Löschen abgeschlossen ist.
- {{domxref("CookieStore.get()")}}
  - : Die `get()`-Methode ruft ein einzelnes Cookie mit dem angegebenen `name` oder `options`-Objekt ab und gibt ein {{jsxref("Promise")}} zurück, das mit den Details eines einzelnen Cookies aufgelöst wird.
- {{domxref("CookieStore.getAll()")}}
  - : Die `getAll()`-Methode ruft alle übereinstimmenden Cookies ab und gibt ein {{jsxref("Promise")}} zurück, das mit einer Liste von Cookies aufgelöst wird.
- {{domxref("CookieStore.set()")}}
  - : Die `set()`-Methode setzt ein Cookie mit dem angegebenen `name` und `value` oder `options`-Objekt und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das Cookie gesetzt wurde.

## Ereignisse

- {{domxref("CookieStore.change_event", "change")}}
  - : Das `change`-Ereignis wird ausgelöst, wenn eine Änderung an einem beliebigen Cookie vorgenommen wird.

## Beispiele

In diesem Beispiel setzen wir ein Cookie und schreiben in die Konsole, ob der Vorgang erfolgreich war oder fehlgeschlagen ist.

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
