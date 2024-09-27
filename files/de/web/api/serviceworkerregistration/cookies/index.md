---
title: "ServiceWorkerRegistration: cookies-Eigenschaft"
short-title: cookies
slug: Web/API/ServiceWorkerRegistration/cookies
l10n:
  sourceCommit: 60c3843f55839380e0c0cdc293ea694fe9943158
---

{{APIRef("Cookie Store API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_service")}}

Die **`cookies`** schreibgeschützte Eigenschaft der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Schnittstelle gibt eine Referenz auf die [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager)-Schnittstelle zurück. Diese ermöglicht es einer Web-App, sich bei Cookie-Änderungsereignissen in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) anzumelden oder abzumelden. Dies ist ein Einstiegspunkt für die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API).

## Wert

Ein [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
