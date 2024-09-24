---
title: "ServiceWorkerContainer: controller Eigenschaft"
short-title: controller
slug: Web/API/ServiceWorkerContainer/controller
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`controller`** Schreibgeschützte Eigenschaft des {{domxref("ServiceWorkerContainer")}}-Interfaces gibt ein {{domxref("ServiceWorker")}}-Objekt zurück, wenn dessen Zustand `activating` oder `activated` ist (das gleiche Objekt, das von {{domxref("ServiceWorkerRegistration.active")}} zurückgegeben wird). Diese Eigenschaft gibt `null` zurück, wenn die Anfrage ein erzwungener Refresh (_Shift_ + Refresh) ist oder wenn kein aktiver Worker vorhanden ist.

## Wert

Ein {{domxref("ServiceWorker")}}-Objekt.

## Beispiele

```js
if ("serviceWorker" in navigator) {
  // Führen Sie eine einmalige Überprüfung durch, um festzustellen, ob ein Service Worker die Kontrolle hat.
  if (navigator.serviceWorker.controller) {
    console.log(
      `Diese Seite wird derzeit kontrolliert von: ${navigator.serviceWorker.controller}`,
    );
  } else {
    console.log("Diese Seite wird derzeit nicht von einem Service Worker kontrolliert.");
  }
} else {
  console.log("Service Worker werden nicht unterstützt.");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
