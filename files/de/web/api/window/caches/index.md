---
title: "Window: caches-Eigenschaft"
short-title: caches
slug: Web/API/Window/caches
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{securecontext_header}}

Die **`caches`** schreibgeschützte Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist.
Dieses Objekt ermöglicht Funktionen wie das Speichern von Assets für die Offline-Nutzung und das Erstellen benutzerdefinierter Antworten auf Anfragen.

## Wert

Ein [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt.

## Beispiele

Das folgende Beispiel zeigt, wie ein Fenster zwischengespeicherte Daten abrufen kann.

```js
window.caches.open("v1").then((cache) => {
  return cache.match("/list");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Workers](/de/docs/Web/API/Service_Worker_API)
- [`CacheStorage`](/de/docs/Web/API/CacheStorage)
- [`Cache`](/de/docs/Web/API/Cache)
