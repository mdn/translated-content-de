---
title: PermissionStatus
slug: Web/API/PermissionStatus
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

Die **`PermissionStatus`**-Schnittstelle der [Permissions API](/de/docs/Web/API/Permissions_API) bietet den Status eines Objekts und einen Ereignis-Handler zum Überwachen von Änderungen dieses Status.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`PermissionStatus.name`](/de/docs/Web/API/PermissionStatus/name) {{ReadOnlyInline}}
  - : Gibt den Namen einer angeforderten Berechtigung zurück, identisch mit dem `name`, der an [`Permissions.query`](/de/docs/Web/API/Permissions/query) übergeben wurde.
- [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) {{ReadOnlyInline}}
  - : Gibt den Status einer angeforderten Berechtigung zurück; entweder `'granted'`, `'denied'` oder `'prompt'`.

### Ereignisse

- [`change`](/de/docs/Web/API/PermissionStatus/change_event)
  - : Wird bei Änderungen des `PermissionStatus.state` aufgerufen.

## Beispiel

```js
navigator.permissions
  .query({ name: "geolocation" })
  .then((permissionStatus) => {
    console.log(`geolocation permission status is ${permissionStatus.state}`);
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
