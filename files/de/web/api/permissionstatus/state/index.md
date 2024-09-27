---
title: "PermissionStatus: state-Eigenschaft"
short-title: state
slug: Web/API/PermissionStatus/state
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`state`**-Eigenschaft der [`PermissionStatus`](/de/docs/Web/API/PermissionStatus)-Schnittstelle gibt den Status einer angeforderten Berechtigung zurück. Diese Eigenschaft gibt einen der folgenden Werte zurück: `'granted'`, `'denied'` oder `'prompt'`.

## Wert

Einer der folgenden:

- `'granted'`
  - : Der Nutzer oder die Benutzer-Agent im Namen des Nutzers hat die ausdrückliche Erlaubnis gegeben, ein [mächtiges Feature](https://w3c.github.io/permissions/#dfn-powerful-feature) zu verwenden. Der Anrufer kann das Feature möglicherweise verwenden, ohne dass der Benutzer-Agent die Erlaubnis des Nutzers einholt.
- `'denied'`
  - : Der Nutzer oder die Benutzer-Agent im Namen des Nutzers hat den Zugriff auf dieses [mächtige Feature](https://w3c.github.io/permissions/#dfn-powerful-feature) verweigert. Der Anrufer kann das Feature nicht nutzen.
- `'prompt'`
  - : Der Nutzer hat keine ausdrückliche Erlaubnis zur Nutzung des Features gegeben (_d. h., es ist das Gleiche wie abgelehnt_). Es bedeutet auch, dass, wenn ein Anrufer versucht, das Feature zu nutzen, der Benutzer-Agent entweder die Erlaubnis des Nutzers erfragt oder der Zugang zum Feature verweigert wird.

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
