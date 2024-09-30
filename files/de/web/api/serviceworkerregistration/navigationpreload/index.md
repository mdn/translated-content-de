---
title: "ServiceWorkerRegistration: navigationPreload-Eigenschaft"
short-title: navigationPreload
slug: Web/API/ServiceWorkerRegistration/navigationPreload
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`navigationPreload`** schreibgeschützte Eigenschaft des [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Interfaces gibt den [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager) zurück, der mit der aktuellen Serviceworker-Registrierung verbunden ist.

Das zurückgegebene Objekt ermöglicht es, dass von einem Service Worker verwaltete Ressourcen parallel zum Hochfahren des Service Workers präventiv heruntergeladen werden können.

## Wert

Eine Instanz von [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
