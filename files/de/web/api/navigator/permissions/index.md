---
title: "Navigator: permissions Eigenschaft"
short-title: permissions
slug: Web/API/Navigator/permissions
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}

Die **`permissions`** schreibgeschützte Eigenschaft des {{domxref("Navigator")}}-Interface gibt ein
{{domxref("Permissions")}}-Objekt zurück, das verwendet werden kann, um den Berechtigungsstatus der von der [Permissions API](/de/docs/Web/API/Permissions_API) abgedeckten APIs abzufragen und zu aktualisieren.

## Wert

Ein {{domxref("Permissions")}}-Objekt.

## Beispiele

```js
navigator.permissions.query({ name: "geolocation" }).then((result) => {
  if (result.state === "granted") {
    showMap();
  } else if (result.state === "prompt") {
    showButtonToEnableMap();
  }
  // Tun Sie nichts, wenn die Berechtigung verweigert wurde.
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Permissions API](/de/docs/Web/API/Permissions_API)
- {{domxref("Navigator")}}
