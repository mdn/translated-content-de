---
title: "PermissionStatus: change-Ereignis"
short-title: change
slug: Web/API/PermissionStatus/change_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

Das **`change`**-Ereignis der Schnittstelle [`PermissionStatus`](/de/docs/Web/API/PermissionStatus) wird ausgelöst, wenn sich die Eigenschaft [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) ändert.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("change", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
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
