---
title: "PermissionStatus: change Ereignis"
short-title: change
slug: Web/API/PermissionStatus/change_event
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

Das **`change`**-Ereignis des [`PermissionStatus`](/de/docs/Web/API/PermissionStatus)-Interfaces wird ausgelöst, wann immer sich die [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state)-Eigenschaft ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

```js
navigator.permissions
  .query({ name: "geolocation" })
  .then((permissionStatus) => {
    console.log(`geolocation permission state is ${permissionStatus.state}`);
    permissionStatus.onchange = () => {
      console.log(
        `geolocation permission state has changed to ${permissionStatus.state}`,
      );
    };
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
