---
title: serviceworker
slug: Web/Manifest/Reference/serviceworker
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}{{SeeCompatTable}}{{Non-standard_header}}

Das `serviceworker` Element gibt einen Serviceworker an, der Just-In-Time (JIT) installiert und registriert ist, um eine webbasierte Zahlungs-App auszuführen, die einen Zahlungsmechanismus für eine spezifische Zahlungsmethode auf einer Händler-Website bereitstellt. Weitere Details finden Sie in der [Payment Handler API](/de/docs/Web/API/Payment_Handler_API).

### Werte

`serviceworker` Objekte können die folgenden Werte enthalten:

- `scope` {{experimental_inline}} {{non-standard_inline}}

  - : Ein String, der den Registrierungsscope des Serviceworkers repräsentiert.

- `src` {{experimental_inline}} {{non-standard_inline}}

  - : Ein String, der die URL darstellt, von der das Serviceworker-Skript heruntergeladen wird.

- `use_cache` {{experimental_inline}} {{non-standard_inline}}

  - : Ein Boolescher Wert, der festlegt, wie der HTTP-Cache für Serviceworker-Skript-Ressourcen während Aktualisierungen genutzt wird.
    Er bietet eine äquivalente Funktionalität zu bestimmten Werten der `updateViaCache` Option, die verwendet wird, wenn ein Serviceworker via JavaScript mit [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert wird.

    - `true`: Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer aus dem Netzwerk aktualisiert. Wenn kein aktueller Eintrag im HTTP-Cache für die Importe gefunden wird, werden sie aus dem Netzwerk abgerufen. Äquivalent zu `updateViaCache: "imports"`.
    - `false`: Der HTTP-Cache wird nicht für das Hauptskript oder seine Importe verwendet. Alle Serviceworker-Skript-Ressourcen werden aus dem Netzwerk aktualisiert. Äquivalent zu `updateViaCache: "none"`.

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
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Ablauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Zahlungsverarbeitungskonzepte](/de/docs/Web/API/Payment_Request_API/Concepts)
