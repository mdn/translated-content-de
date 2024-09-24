---
title: "Fenster: Caches-Eigenschaft"
short-title: Caches
slug: Web/API/Window/caches
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{securecontext_header}}

Die **`caches`** schreibgeschützte Eigenschaft der {{domxref("Window")}}-Schnittstelle gibt das {{domxref("CacheStorage")}}-Objekt zurück, das mit dem aktuellen Kontext verbunden ist. Dieses Objekt ermöglicht Funktionen wie das Speichern von Ressourcen für die Offline-Nutzung und das Erzeugen benutzerdefinierter Antworten auf Anfragen.

## Wert

Ein {{domxref("CacheStorage")}}-Objekt.

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
- {{domxref("CacheStorage")}}
- {{domxref("Cache")}}
