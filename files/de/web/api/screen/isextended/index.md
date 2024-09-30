---
title: "Screen: isExtended-Eigenschaft"
short-title: isExtended
slug: Web/API/Screen/isExtended
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`isExtended`** der [`Screen`](/de/docs/Web/API/Screen)-Schnittstelle gibt `true` zurück, wenn das Gerät des Benutzers mehrere Bildschirme hat, und `false`, wenn nicht.

Diese Eigenschaft wird typischerweise über `window.screen.isExtended` abgerufen und kann verwendet werden, um zu testen, ob mehrere Bildschirme verfügbar sind, bevor versucht wird, mit der [Window Management API](/de/docs/Web/API/Window_Management_API) ein Layout mit mehreren Fenstern und Bildschirmen zu erstellen.

## Wert

Ein Boolescher Wert — `true`, wenn das Gerät mehrere Bildschirme hat, und `false`, wenn nicht.

> [!NOTE]
> Wenn eine {{httpheader("Permissions-Policy/window-management", "window-management")}} [Permissions-Policy](/de/docs/Web/HTTP/Permissions_Policy) gesetzt ist, die die Nutzung der Window Management API blockiert, wird `isExtended` immer `false` zurückgeben.

## Beispiele

```js
if (window.screen.isExtended) {
  // Create multi-screen window layout
} else {
  // Create single-screen window layout
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
