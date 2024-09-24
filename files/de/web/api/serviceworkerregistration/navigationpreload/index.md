---
title: "ServiceWorkerRegistration: navigationPreload-Eigenschaft"
short-title: navigationPreload
slug: Web/API/ServiceWorkerRegistration/navigationPreload
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`navigationPreload`** Nur-Lese-Eigenschaft des {{domxref("ServiceWorkerRegistration")}}-Interfaces gibt den {{domxref("NavigationPreloadManager")}} zurück, der mit der aktuellen Service Worker-Registrierung verbunden ist.

Das zurückgegebene Objekt ermöglicht es, Ressourcen, die von einem Service Worker verwaltet werden, proaktiv parallel zum Start des Service Workers herunterzuladen.

## Wert

Eine Instanz von {{domxref("NavigationPreloadManager")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
