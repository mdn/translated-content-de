---
title: serviceworker
slug: Web/Manifest/serviceworker
l10n:
  sourceCommit: 79f75809844204ce0dd5a1411095b7851711cdeb
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}{{Non-standard_header}}

Das `serviceworker`-Element gibt einen Serviceworker an, der Just-In-Time (JIT) installiert und registriert wird, um eine webbasierte Zahlungs-App auszuführen, die einen Zahlungsmechanismus für eine bestimmte Zahlungsmethode auf einer Händler-Website bereitstellt. Siehe [Payment Handler API](/de/docs/Web/API/Payment_Handler_API) für weitere Details.

### Werte

`serviceworker`-Objekte können die folgenden Werte enthalten:

- `scope` {{experimental_inline}} {{non-standard_inline}}

  - : Ein String, der den Registrierungsscope des Serviceworkers darstellt.

- `src` {{experimental_inline}} {{non-standard_inline}}

  - : Ein String, der die URL angibt, von der das Skript des Serviceworkers heruntergeladen wird.

- `use_cache` {{experimental_inline}} {{non-standard_inline}}

  - : Ein Boolean, der festlegt, wie der HTTP-Cache für Serviceworker-Skriptressourcen während der Aktualisierungen verwendet wird.
    Er bietet eine gleichwertige Funktionalität zu bestimmten Werten der `updateViaCache`-Option, die verwendet wird, wenn ein Serviceworker über JavaScript mithilfe von [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert wird.

    - `true`: Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer aus dem Netzwerk aktualisiert. Wenn kein aktueller Eintrag im HTTP-Cache für die Importe gefunden wird, werden sie aus dem Netzwerk abgerufen. Entspricht `updateViaCache: "imports"`.
    - `false`: Der HTTP-Cache wird weder für das Hauptskript noch für seine Importe verwendet. Alle Serviceworker-Skriptressourcen werden aus dem Netzwerk aktualisiert. Entspricht `updateViaCache: "none"`.

## Beispiele

Siehe [Payment Handler API > Konzepte und Nutzung](/de/docs/Web/API/Payment_Handler_API#concepts_and_usage).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
- [Web-basierte Zahlungs-Apps Übersicht](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
