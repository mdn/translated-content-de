---
title: "Screen: isExtended-Eigenschaft"
short-title: isExtended
slug: Web/API/Screen/isExtended
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`isExtended`**-Eigenschaft der [`Screen`](/de/docs/Web/API/Screen)-Schnittstelle gibt `true` zurück, wenn das Gerät des Nutzers mehrere Bildschirme hat, und `false`, wenn nicht.

Auf diese Eigenschaft wird typischerweise über `window.screen.isExtended` zugegriffen und sie kann verwendet werden, um zu testen, ob mehrere Bildschirme verfügbar sind, bevor versucht wird, ein Mehrfenster-Layout mit mehreren Bildschirmen unter Verwendung der [Window Management API](/de/docs/Web/API/Window_Management_API) zu erstellen.

## Wert

Ein boolescher Wert — `true`, wenn das Gerät mehrere Bildschirme hat, und `false`, wenn nicht.

> [!NOTE]
> Wenn eine {{httpheader("Permissions-Policy/window-management", "window-management")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) festgelegt wurde, die die Verwendung der Window Management API blockiert, wird `isExtended` immer `false` zurückgeben.

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
