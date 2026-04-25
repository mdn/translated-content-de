---
title: "CookieStoreManager: subscribe() Methode"
short-title: subscribe()
slug: Web/API/CookieStoreManager/subscribe
l10n:
  sourceCommit: e727f51eb866144a5ee11480167188ef81e6667e
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`subscribe()`** Methode des [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) Schnittstelle meldet eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für Cookie-Änderungsereignisse an.

Doppelte Abonnements werden ignoriert: Das heißt, wenn ein Service Worker sich mehrmals für dasselbe Cookie anmeldet, erhält er jede Änderungsbenachrichtigung nur einmal.

## Syntax

```js-nolint
subscribe(subscriptions)
```

### Parameter

- `subscriptions`
  - : Ein Array von Objekten, die jeweils die folgenden Eigenschaften haben:
    - `name` {{optional_inline}}
      - : Ein String, der dem Namen eines Cookies entspricht. Wenn `name` weggelassen wird, meldet sich der Service Worker für Änderungsereignisse aller Cookies im Gültigkeitsbereich an.
    - `url` {{optional_inline}}
      - : Ein String, der der URL eines Cookie-Gültigkeitsbereichs entspricht. Dieser kann enger als der Gültigkeitsbereich der Service Worker-Registrierung sein. Wenn `url` weggelassen wird, ist der Standardwert der Gültigkeitsbereich der Service Worker-Registrierung.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird, wenn das Abonnement abgeschlossen ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `url` keine gültige URL ist oder nicht mit dem [`scope`](/de/docs/Web/API/ServiceWorkerRegistration/scope) der Service Worker-Registrierung beginnt.

## Beispiele

### Festlegung von Name und URL

In diesem Beispiel meldet sich die [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration), die durch `registration` dargestellt wird, für Änderungsereignisse des Cookies mit dem Namen `"cookie1"` und einem Gültigkeitsbereich von `"/path1"` an.

```js
// Subscribe to a specific cookie and URL
const subscriptions = [{ name: "cookie1", url: `/path1` }];
await registration.cookies.subscribe(subscriptions);
```

### Nur den Namen festlegen

In diesem Beispiel setzen wir nur `name` und lassen `url` weg: Das Abonnement gilt für alle Cookies mit dem Namen `cookie1` im Gültigkeitsbereich des Service Workers.

```js
// Subscribe to all cookies named "cookie1" in the registration scope
await registration.cookies.subscribe([{ name: "cookie1" }]);
```

### Nur die URL festlegen

In diesem Beispiel setzen wir nur `url` und lassen `name` weg: Das Abonnement gilt für alle Cookies im angegebenen URL-Gültigkeitsbereich.

```js
// Subscribe to all cookie changes within a specific path
await registration.cookies.subscribe([{ url: "/path/one/" }]);
```

### Anmeldung für alle Cookies

In diesem Beispiel werden sowohl `name` als auch `url` weggelassen. Das Abonnement gilt für alle Cookies im Gültigkeitsbereich des Service Workers.

```js
// Subscribe to all cookie changes within the entire registration scope
await registration.cookies.subscribe([{}]);
```

### Eine URL außerhalb des Gültigkeitsbereichs des Service Workers setzen

Wenn die URL außerhalb des Gültigkeitsbereichs des Service Workers liegt, wird `subscribe()` einen `TypeError` auslösen.

```js example-bad
await registration.cookies.subscribe([
  { name: "cookie1", url: "/out-of-scope/" },
]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
