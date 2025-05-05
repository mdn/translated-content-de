---
title: serviceworker
slug: Web/Progressive_web_apps/Manifest/Reference/serviceworker
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

{{SeeCompatTable}}{{Non-standard_header}}

Das `serviceworker`-Mitglied spezifiziert einen Serviceworker, der Just-In-Time (JIT) installiert und registriert wird, um eine webbasierte Zahlungs-App bereitzustellen, die einen Zahlungsmechanismus für eine angegebene Zahlungsmethode auf einer Händler-Website bietet. Weitere Details finden Sie in der [Payment Handler API](/de/docs/Web/API/Payment_Handler_API).

### Werte

`serviceworker`-Objekte können die folgenden Werte enthalten:

- `scope` {{experimental_inline}} {{non-standard_inline}}

  - : Ein String, der den Registrierungsbereich des Serviceworkers darstellt.

- `src` {{experimental_inline}} {{non-standard_inline}}

  - : Ein String, der die URL repräsentiert, von der das Serviceworker-Skript heruntergeladen werden soll.

- `use_cache` {{experimental_inline}} {{non-standard_inline}}

  - : Ein boolescher Wert, der festlegt, wie der HTTP-Cache für Serviceworker-Skript-Ressourcen während der Updates verwendet wird.
    Es bietet eine äquivalente Funktionalität zu bestimmten Werten der `updateViaCache`-Option, die bereitgestellt wird, wenn ein Serviceworker über JavaScript mit [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert wird.

    - `true`: Der HTTP-Cache wird nach Imports durchsucht, aber das Hauptskript wird immer aus dem Netzwerk aktualisiert. Wenn kein aktueller Eintrag im HTTP-Cache für die Imports gefunden wird, werden sie aus dem Netzwerk abgerufen. Entspricht `updateViaCache: "imports"`.
    - `false`: Der HTTP-Cache wird weder für das Hauptskript noch für dessen Imports verwendet. Alle Serviceworker-Skript-Ressourcen werden aus dem Netzwerk aktualisiert. Entspricht `updateViaCache: "none"`.

## Beispiele

Siehe [Payment Handler API > Konzepte und Verwendung](/de/docs/Web/API/Payment_Handler_API#concepts_and_usage).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
- [Webbasierte Zahlungs-Apps Übersicht](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Leben einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Zahlungsverarbeitungskonzepte](/de/docs/Web/API/Payment_Request_API/Concepts)
