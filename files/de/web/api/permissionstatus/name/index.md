---
title: "PermissionStatus: name Eigenschaft"
short-title: name
slug: Web/API/PermissionStatus/name
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`name`**-Eigenschaft des {{domxref("PermissionStatus")}}-Interfaces gibt den Namen einer angeforderten Berechtigung zurück.

## Wert

Ein schreibgeschützter Wert, der mit dem `name`-Argument identisch ist, das an {{domxref("Permissions.query", "navigator.permissions.query()")}} übergeben wurde.

## Beispiele

```js
function stateChangeListener() {
  console.log(`${this.name} permission status changed to ${this.state}`);
}
function queryAndTrackPermission(permissionName) {
  navigator.permissions
    .query({ name: permissionName })
    .then((permissionStatus) => {
      console.log(
        `${permissionName} permission state is ${permissionStatus.state}`,
      );
      permissionStatus.onchange = stateChangeListener;
    });
}
queryAndTrackPermission("geolocation");
queryAndTrackPermission("midi");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
