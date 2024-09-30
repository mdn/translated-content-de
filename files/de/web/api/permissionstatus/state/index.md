---
title: "PermissionStatus: state-Eigenschaft"
short-title: state
slug: Web/API/PermissionStatus/state
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

Die **`state`**-Eigenschaft des schreibgeschützten [`PermissionStatus`](/de/docs/Web/API/PermissionStatus) Interfaces gibt den Status einer angeforderten Berechtigung zurück. Diese Eigenschaft gibt einen der folgenden Werte zurück: `'granted'`, `'denied'` oder `'prompt'`.

## Wert

Einer der folgenden:

- `'granted'`
  - : Der Nutzer oder der Nutzeragent im Namen des Nutzers hat die ausdrückliche Erlaubnis erteilt, ein [leistungsstarkes Feature](https://w3c.github.io/permissions/#dfn-powerful-feature) zu verwenden. Der Aufrufer kann das Feature möglicherweise nutzen, ohne dass der Nutzeragent die Erlaubnis des Nutzers einholt.
- `'denied'`
  - : Der Nutzer oder der Nutzeragent im Namen des Nutzers hat den Zugriff auf dieses [leistungsstarke Feature](https://w3c.github.io/permissions/#dfn-powerful-feature) verweigert. Der Aufrufer kann das Feature nicht nutzen.
- `'prompt'`
  - : Der Nutzer hat noch keine ausdrückliche Erlaubnis zur Nutzung des Features erteilt (_d.h. es entspricht dem Status "verweigert"_). Es bedeutet auch, dass der Nutzeragent den Nutzer um Erlaubnis bitten wird, wenn ein Aufrufer versucht, das Feature zu verwenden, oder der Zugriff auf das Feature wird verweigert.

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
