---
title: serviceworker
slug: Web/Progressive_web_apps/Manifest/Reference/serviceworker
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{SeeCompatTable}}{{Non-standard_header}}

Das `serviceworker`-Mitglied spezifiziert einen Serviceworker, der Just-In-Time (JIT) installiert und registriert wird, um eine webbasierte Zahlungs-App bereitzustellen, die einen Zahlungsmechanismus für eine festgelegte Zahlungsmethode auf einer Händler-Website bereitstellt. Siehe [Payment Handler API](/de/docs/Web/API/Payment_Handler_API) für weitere Details.

### Werte

`serviceworker`-Objekte können die folgenden Werte enthalten:

- `scope` {{experimental_inline}} {{non-standard_inline}}

  - : Ein String, der den Registrierungsbereich des Serviceworkers darstellt.

- `src` {{experimental_inline}} {{non-standard_inline}}

  - : Ein String, der die URL zum Herunterladen des Serviceworker-Skripts darstellt.

- `use_cache` {{experimental_inline}} {{non-standard_inline}}
  - : Ein Boolean, der festlegt, wie der HTTP-Cache für Serviceworker-Skriptressourcen während Updates verwendet wird.
    Es bietet eine gleichwertige Funktionalität zu bestimmten Werten der `updateViaCache`-Option, die bereitgestellt wird, wenn ein Serviceworker über JavaScript mit [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert wird.
    - `true`: Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer aus dem Netzwerk aktualisiert. Wenn kein aktueller Eintrag im HTTP-Cache für die Importe gefunden wird, werden sie aus dem Netzwerk abgerufen. Entspricht `updateViaCache: "imports"`.
    - `false`: Der HTTP-Cache wird weder für das Hauptskript noch für seine Importe verwendet. Alle Serviceworker-Skriptressourcen werden aus dem Netzwerk aktualisiert. Entspricht `updateViaCache: "none"`.

## Beispiele

Siehe [Payment Handler API > Konzepte und Verwendung](/de/docs/Web/API/Payment_Handler_API#concepts_and_usage).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Leben einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
