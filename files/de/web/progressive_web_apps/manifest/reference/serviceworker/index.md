---
title: serviceworker
slug: Web/Progressive_web_apps/Manifest/Reference/serviceworker
l10n:
  sourceCommit: 73ca80b86a348f88f51fdb8f9441c114b76e94f1
---

{{SeeCompatTable}}{{Non-standard_header}}

Das Mitglied `serviceworker` gibt einen Service-Worker an, der Just-In-Time (JIT) installiert und registriert wird, um eine webbasierte Zahlungs-App zu betreiben, die einen Zahlungsmechanismus für eine bestimmte Zahlungsmethode auf einer Händler-Website bereitstellt. Siehe [Web-based Payment Handler API](/de/docs/Web/API/Web-Based_Payment_Handler_API) für weitere Details.

## Werte

`serviceworker`-Objekte können die folgenden Werte enthalten:

- `scope` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der den Registrierungsbereich des Service-Workers darstellt.

- `src` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der die URL angibt, von der das Service-Worker-Skript heruntergeladen werden soll.

- `use_cache` {{experimental_inline}} {{non-standard_inline}}
  - : Ein boolescher Wert, der festlegt, wie der HTTP-Cache für Service-Worker-Skriptdaten während Aktualisierungen verwendet wird.
    Er bietet eine gleichwertige Funktionalität zu bestimmten Werten der `updateViaCache`-Option, die bereitgestellt wird, wenn ein Service-Worker über JavaScript registriert wird, indem [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) verwendet wird.
    - `true`: Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer aus dem Netzwerk aktualisiert. Wenn kein frischer Eintrag im HTTP-Cache für die Importe gefunden wird, werden sie aus dem Netzwerk heruntergeladen. Entspricht `updateViaCache: "imports"`.
    - `false`: Der HTTP-Cache wird weder für das Hauptskript noch für dessen Importe verwendet. Alle Service-Worker-Skriptdaten werden aus dem Netzwerk aktualisiert. Entspricht `updateViaCache: "none"`.

## Beispiele

Siehe [Web-based Payment Handler API > Konzepte und Nutzung](/de/docs/Web/API/Web-Based_Payment_Handler_API#concepts_and_usage).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Web-based Payment Handler API](/de/docs/Web/API/Web-Based_Payment_Handler_API)
- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Ablauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
