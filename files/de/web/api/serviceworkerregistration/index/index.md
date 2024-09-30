---
title: "ServiceWorkerRegistration: index-Eigenschaft"
short-title: index
slug: Web/API/ServiceWorkerRegistration/index
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`index`**-Schreibgeschützte Eigenschaft des [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Interfaces gibt einen Verweis auf das [`ContentIndex`](/de/docs/Web/API/ContentIndex)-Interface zurück, das die Indizierung von Offline-Inhalten ermöglicht.

## Wert

Ein [`ContentIndex`](/de/docs/Web/API/ContentIndex)-Objekt.

## Beispiele

Sie können die Eigenschaft entweder aus Ihrem Hauptskript oder dem registrierten Service Worker aufrufen.

Hier ist ein Beispiel aus dem Hauptskript:

```js
// reference registration
const registration = await navigator.serviceWorker.ready;

// feature detection
if ("index" in registration) {
  // Content Index API functionality
  const contentIndex = registration.index;
}
```

Aus dem [Service Worker](/de/docs/Web/API/ServiceWorker):

```js
// service worker script

const contentIndex = self.registration.index;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Index API](/de/docs/Web/API/Content_Index_API)
- [Ein einführender Artikel über die Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
