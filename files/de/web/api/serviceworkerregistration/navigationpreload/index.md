---
title: "ServiceWorkerRegistration: navigationPreload-Eigenschaft"
short-title: navigationPreload
slug: Web/API/ServiceWorkerRegistration/navigationPreload
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`navigationPreload`**-Eigenschaft des [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Interfaces gibt den [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager) zurück, der mit der aktuellen Service-Worker-Registrierung verknüpft ist.

Das zurückgegebene Objekt ermöglicht es, dass Ressourcen, die von einem Service Worker verwaltet werden, gleichzeitig mit dem Start des Service Workers vorab heruntergeladen werden.

## Wert

Eine Instanz von [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
