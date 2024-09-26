---
title: "Screen: Eigenschaft isExtended"
short-title: isExtended
slug: Web/API/Screen/isExtended
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`isExtended`** der
{{domxref("Screen")}}-Schnittstelle gibt `true` zurück, wenn das Gerät des Benutzers mehrere Bildschirme hat, und `false`, wenn nicht.

Diese Eigenschaft wird normalerweise über `window.screen.isExtended` abgerufen und kann verwendet werden, um zu testen, ob mehrere Bildschirme verfügbar sind, bevor versucht wird, ein Multi-Window-Layout mit mehreren Bildschirmen unter Verwendung der [Window Management API](/de/docs/Web/API/Window_Management_API) zu erstellen.

## Wert

Ein boolescher Wert — `true`, wenn das Gerät mehrere Bildschirme hat, und `false`, wenn nicht.

> [!NOTE]
> Wenn eine {{httpheader("Permissions-Policy/window-management", "window-management")}} [Permissions-Policy](/de/docs/Web/HTTP/Permissions_Policy) festgelegt ist, die die Verwendung der Window Management API blockiert, wird `isExtended` immer `false` zurückgeben.

## Beispiele

```js
if (window.screen.isExtended) {
  // Mehrbildschirm-Fensterlayout erstellen
} else {
  // Einzelbildschirm-Fensterlayout erstellen
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)