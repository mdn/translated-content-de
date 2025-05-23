---
title: "Window: caches-Eigenschaft"
short-title: caches
slug: Web/API/Window/caches
l10n:
  sourceCommit: 4a0413ef319179b7d0d833c42a156629544c8248
---

{{APIRef("Service Workers API")}}{{securecontext_header}}

Die schreibgeschützte **`caches`**-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Dieses Objekt ermöglicht Funktionen wie das Speichern von Ressourcen zur Offline-Nutzung und das Erstellen benutzerdefinierter Antworten auf Anfragen.

## Wert

Ein [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt.

## Beispiele

Das folgende Beispiel zeigt, wie ein Fenster zwischengespeicherte Daten abrufen kann.

```js
caches.open("v1").then((cache) => cache.match("/list"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Workers](/de/docs/Web/API/Service_Worker_API)
- [`CacheStorage`](/de/docs/Web/API/CacheStorage)
- [`Cache`](/de/docs/Web/API/Cache)
