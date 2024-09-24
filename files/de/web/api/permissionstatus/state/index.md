---
title: "PermissionStatus: state-Eigenschaft"
short-title: state
slug: Web/API/PermissionStatus/state
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

Die **`state`**-Schreibgeschützte Eigenschaft des {{domxref("PermissionStatus")}} Interfaces gibt den Status einer angeforderten Berechtigung zurück. Diese Eigenschaft gibt einen der folgenden Werte zurück: `'granted'`, `'denied'` oder `'prompt'`.

## Wert

Einer der folgenden:

- `'granted'`
  - : Der Benutzer oder der Benutzeragent im Namen des Benutzers hat die ausdrückliche Erlaubnis zur Nutzung einer [leistungsstarken Funktion](https://w3c.github.io/permissions/#dfn-powerful-feature) erteilt. Der Aufrufer kann die Funktion möglicherweise verwenden, ohne dass der Benutzeragent die Erlaubnis des Benutzers einholt.
- `'denied'`
  - : Der Benutzer oder der Benutzeragent im Namen des Benutzers hat den Zugriff auf diese [leistungsstarke Funktion](https://w3c.github.io/permissions/#dfn-powerful-feature) verweigert. Der Aufrufer kann die Funktion nicht verwenden.
- `'prompt'`
  - : Der Benutzer hat keine ausdrückliche Erlaubnis zur Nutzung der Funktion gegeben (_bedeutet, es ist dasselbe wie verweigert_). Dies bedeutet auch, dass, wenn ein Aufrufer versucht, die Funktion zu verwenden, der Benutzeragent entweder den Benutzer um Erlaubnis bitten wird oder der Zugriff auf die Funktion verweigert wird.

## Beispiele

```js
navigator.permissions
  .query({ name: "geolocation" })
  .then((permissionStatus) => {
    console.log(`geolocation permission state is ${permissionStatus.state}`);
    permissionStatus.onchange = () => {
      console.log(
        `geolocation permission status has changed to ${permissionStatus.state}`,
      );
    };
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
