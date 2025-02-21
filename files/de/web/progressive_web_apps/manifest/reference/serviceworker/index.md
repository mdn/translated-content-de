---
title: serviceworker
slug: Web/Progressive_web_apps/Manifest/Reference/serviceworker
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}{{SeeCompatTable}}{{Non-standard_header}}

Das `serviceworker`-Mitglied gibt einen Serviceworker an, der Just-In-Time (JIT) installiert und registriert wird, um eine webbasierte Payment-App zu betreiben, die einen Zahlungsmechanismus für eine spezifische Zahlungsmethode auf einer Händlerwebsite bereitstellt. Weitere Details finden Sie in der [Payment Handler API](/de/docs/Web/API/Payment_Handler_API).

### Werte

`serviceworker`-Objekte können die folgenden Werte enthalten:

- `scope` {{experimental_inline}} {{non-standard_inline}}

  - : Ein String, der den Registrierungsbereich des Serviceworkers darstellt.

- `src` {{experimental_inline}} {{non-standard_inline}}

  - : Ein String, der die URL angibt, von der das Serviceworker-Skript heruntergeladen wird.

- `use_cache` {{experimental_inline}} {{non-standard_inline}}

  - : Ein Boolean, der festlegt, wie der HTTP-Cache für Serviceworker-Skript-Ressourcen bei Updates verwendet wird.
    Es bietet eine äquivalente Funktionalität zu bestimmten Werten der `updateViaCache`-Option, die verwendet wird, wenn ein Serviceworker über JavaScript mit [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) registriert wird.

    - `true`: Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer aus dem Netzwerk aktualisiert. Wenn kein aktueller Eintrag im HTTP-Cache für die Importe gefunden wird, werden sie aus dem Netzwerk geholt. Entspricht `updateViaCache: "imports"`.
    - `false`: Der HTTP-Cache wird nicht für das Hauptskript oder dessen Importe verwendet. Alle Serviceworker-Skript-Ressourcen werden aus dem Netzwerk aktualisiert. Entspricht `updateViaCache: "none"`.

## Beispiele

Siehe [Payment Handler API > Konzepte und Verwendung](/de/docs/Web/API/Payment_Handler_API#concepts_and_usage).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
- [Webbasierte Payment-Apps Übersicht](https://web.dev/articles/web-based-payment-apps-overview)
- [Ein Zahlungsmittel einrichten](https://web.dev/articles/setting-up-a-payment-method)
- [Der Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Die Payment Request API verwenden](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
