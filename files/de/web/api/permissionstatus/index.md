---
title: PermissionStatus
slug: Web/API/PermissionStatus
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

Die **`PermissionStatus`**-Schnittstelle der [Permissions API](/de/docs/Web/API/Permissions_API) liefert den Status eines Objekts und einen Ereignis-Handler zum Überwachen von Änderungen dieses Status.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("PermissionStatus.name")}} {{ReadOnlyInline}}
  - : Gibt den Namen einer angeforderten Berechtigung zurück, identisch mit dem `name`, der an {{domxref("Permissions.query")}} übergeben wurde.
- {{domxref("PermissionStatus.state")}} {{ReadOnlyInline}}
  - : Gibt den Status einer angeforderten Berechtigung zurück; einer der Werte `'granted'`, `'denied'` oder `'prompt'`.

### Ereignisse

- {{domxref("PermissionStatus.change_event", "change")}}
  - : Wird bei Änderungen des `PermissionStatus.state`-Eigenschaft aufgerufen.

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

## Kompatibilität der Browser

{{Compat}}
