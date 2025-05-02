---
title: "PermissionStatus: change Ereignis"
short-title: change
slug: Web/API/PermissionStatus/change_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

Das **`change`**-Ereignis der [`PermissionStatus`](/de/docs/Web/API/PermissionStatus)-Schnittstelle wird ausgelöst, wann immer sich die [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state)-Eigenschaft ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
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
