---
title: serviceworker
slug: Web/Progressive_web_apps/Manifest/Reference/serviceworker
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{SeeCompatTable}}{{Non-standard_header}}

Das `serviceworker`-Mitglied gibt einen Serviceworker an, der Just-In-Time (JIT) installiert und registriert wird, um eine webbasierte Zahlungs-App zu betreiben, die einen Zahlungsmechanismus für eine bestimmte Zahlungsmethode auf einer Händler-Website bereitstellt. Weitere Details finden Sie in der [Payment Handler API](/de/docs/Web/API/Payment_Handler_API).

## Werte

`serviceworker`-Objekte können die folgenden Werte enthalten:

- `scope` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der den Registrierungsbereich des Serviceworkers darstellt.

- `src` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der die URL angibt, von der das Serviceworker-Skript heruntergeladen wird.

- `use_cache` {{experimental_inline}} {{non-standard_inline}}
  - : Ein Boolean, der festlegt, wie der HTTP-Cache für Serviceworker-Skripte während der Updates genutzt wird.
    Er bietet eine gleichwertige Funktionalität zu bestimmten Werten der `updateViaCache`-Option, die bereitgestellt wird, wenn ein Serviceworker über JavaScript registriert wird, indem [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) verwendet wird.
    - `true`: Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer aus dem Netzwerk aktualisiert. Falls kein aktueller Eintrag im HTTP-Cache für die Importe vorhanden ist, werden sie aus dem Netzwerk abgerufen. Entspricht `updateViaCache: "imports"`.
    - `false`: Der HTTP-Cache wird weder für das Hauptskript noch für dessen Importe verwendet. Alle Serviceworker-Skript-Ressourcen werden aus dem Netzwerk aktualisiert. Entspricht `updateViaCache: "none"`.

## Beispiele

Siehe [Payment Handler API > Konzepte und Nutzung](/de/docs/Web/API/Payment_Handler_API#concepts_and_usage).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
