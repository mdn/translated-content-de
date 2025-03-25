---
title: serviceworker
slug: Web/Progressive_web_apps/Manifest/Reference/serviceworker
l10n:
  sourceCommit: 2f6ddccbafddcea8f2b68eb4a78b9764892916b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}{{SeeCompatTable}}{{Non-standard_header}}

Das `serviceworker`-Mitglied legt einen Service Worker fest, der Just-In-Time (JIT) installiert und registriert wird, um eine webbasierte Zahlungs-App mit einem Zahlungsmechanismus für eine bestimmte Zahlungsmethode auf einer Händler-Website bereitzustellen. Weitere Details finden Sie in der [Payment Handler API](/de/docs/Web/API/Payment_Handler_API).

### Werte

`serviceworker`-Objekte können die folgenden Werte enthalten:

- `scope` {{experimental_inline}} {{non-standard_inline}}

  - : Ein String, der den Registrierungsbereich des Service Workers darstellt.

- `src` {{experimental_inline}} {{non-standard_inline}}

  - : Ein String, der die URL darstellt, von der das Service Worker-Skript heruntergeladen wird.

- `use_cache` {{experimental_inline}} {{non-standard_inline}}

  - : Ein Boolean, der festlegt, wie der HTTP-Cache für Service Worker-Skriptressourcen während Updates verwendet wird.
    Er bietet eine gleichwertige Funktionalität zu bestimmten Werten der `updateViaCache`-Option, die beim Registrieren eines Service Workers über JavaScript mit [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) bereitgestellt wird.

    - `true`: Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer aus dem Netzwerk aktualisiert. Wenn kein frischer Eintrag im HTTP-Cache für die Importe gefunden wird, werden sie aus dem Netzwerk abgerufen. Entspricht `updateViaCache: "imports"`.
    - `false`: Der HTTP-Cache wird weder für das Hauptskript noch für seine Importe verwendet. Alle Service Worker-Skriptressourcen werden aus dem Netzwerk aktualisiert. Entspricht `updateViaCache: "none"`.

## Beispiele

Weitere Informationen finden Sie unter [Payment Handler API > Konzepte und Nutzung](/de/docs/Web/API/Payment_Handler_API#concepts_and_usage).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtungsanleitung für eine Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Verlauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Zahlungsverarbeitungskonzepte](/de/docs/Web/API/Payment_Request_API/Concepts)
