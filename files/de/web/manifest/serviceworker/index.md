---
title: serviceworker
slug: Web/Manifest/serviceworker
l10n:
  sourceCommit: 2b44e3e665ceb5f4336089695aa5f617b1baf33c
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}{{Non-standard_header}}

Das `serviceworker`-Element spezifiziert einen Serviceworker, der Just-In-Time (JIT) installiert und registriert wird, um eine webbasierte Zahlungsanwendung bereitzustellen, die einen Zahlungsmechanismus für eine bestimmte Zahlungsmethode auf einer Händlerwebsite bietet. Weitere Details finden Sie in der [Payment Handler API](/de/docs/Web/API/Payment_Handler_API).

### Werte

`serviceworker`-Objekte können die folgenden Werte enthalten:

- `scope` {{experimental_inline}}

  - : Ein String, der den Registrierungsbereich des Serviceworkers darstellt.

- `src` {{experimental_inline}}

  - : Ein String, der die URL repräsentiert, von der das Serviceworker-Skript heruntergeladen wird.

- `use_cache` {{experimental_inline}}

  - : Ein boolescher Wert, der festlegt, wie der HTTP-Cache für Serviceworker-Skriptressourcen während Updates verwendet wird.
    Er bietet eine gleichwertige Funktionalität zu bestimmten Werten der `updateViaCache`-Option, die verwendet wird, wenn ein Serviceworker über JavaScript mit [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert wird.

    - `true`: Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer aus dem Netzwerk aktualisiert. Wenn kein aktueller Eintrag im HTTP-Cache für die Importe gefunden wird, werden sie aus dem Netzwerk bezogen. Entspricht `updateViaCache: "imports"`.
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
- [Überblick über webbasierte Zahlungssysteme](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte zur Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
