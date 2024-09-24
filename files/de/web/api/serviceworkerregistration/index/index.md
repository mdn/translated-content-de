---
title: "ServiceWorkerRegistration: Eigenschaft index"
short-title: index
slug: Web/API/ServiceWorkerRegistration/index
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`index`**-Eigenschaft mit Schreibschutz der
{{domxref("ServiceWorkerRegistration")}}-Schnittstelle gibt eine Referenz auf die
{{domxref('ContentIndex')}}-Schnittstelle zurück, die das Indexieren von offline Inhalten ermöglicht.

## Wert

Ein {{domxref('ContentIndex')}} Objekt.

## Beispiele

Sie können auf die Eigenschaft sowohl von Ihrem Hauptskript als auch vom registrierten Service Worker aus zugreifen.

Hier ein Beispiel aus dem Hauptskript:

```js
// Registrierung referenzieren
const registration = await navigator.serviceWorker.ready;

// Funktionsprüfung
if ("index" in registration) {
  // Funktionalität der Content Index API
  const contentIndex = registration.index;
}
```

Vom [Service Worker](/de/docs/Web/API/ServiceWorker):

```js
// Service Worker Skript

const contentIndex = self.registration.index;
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Content Index API](/de/docs/Web/API/Content_Index_API)
- [Ein einführender Artikel zur Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
