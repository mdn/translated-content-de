---
title: "Navigator: permissions-Eigenschaft"
short-title: permissions
slug: Web/API/Navigator/permissions
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}

Die **`permissions`** schreibgeschützte Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt ein
[`Permissions`](/de/docs/Web/API/Permissions)-Objekt zurück, das verwendet werden kann, um den Berechtigungsstatus von APIs abzufragen und zu aktualisieren, die von der [Permissions API](/de/docs/Web/API/Permissions_API) abgedeckt sind.

## Wert

Ein [`Permissions`](/de/docs/Web/API/Permissions)-Objekt.

## Beispiele

```js
navigator.permissions.query({ name: "geolocation" }).then((result) => {
  if (result.state === "granted") {
    showMap();
  } else if (result.state === "prompt") {
    showButtonToEnableMap();
  }
  // Don't do anything if the permission was denied.
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Permissions API](/de/docs/Web/API/Permissions_API)
- [`Navigator`](/de/docs/Web/API/Navigator)
