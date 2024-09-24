---
title: serviceworker
slug: Web/Manifest/serviceworker
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}{{Non-standard_header}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
  </tbody>
</table>

Das `serviceworker`-Mitglied spezifiziert einen Serviceworker, der Just-In-Time (JIT) installiert und registriert wird, um eine webbasierte Zahlungsanwendung bereitzustellen, die einen Zahlungsmechanismus für eine angegebene Zahlungsmethode auf einer Händler-Website bereitstellt. Weitere Details finden Sie in der {{domxref("Payment Handler API", "Payment Handler API", "", "nocode")}}.

## Beispiel

Siehe [Payment Handler API > Konzepte und Verwendung](/de/docs/Web/API/Payment_Handler_API#concepts_and_usage).

## Werte

`serviceworker`-Objekte können die folgenden Werte enthalten:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Mitglied</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>scope</code></td>
      <td>
        Ein String, der den Registrierungsumfang des Serviceworkers darstellt.
      </td>
    </tr>
    <tr>
      <td><code>src</code></td>
      <td>
        Ein String, der die URL darstellt, von der das Serviceworker-Skript heruntergeladen wird.
      </td>
    </tr>
    <tr>
      <td><code>use_cache</code></td>
      <td>
        Ein boolescher Wert, der festlegt, wie der HTTP-Cache für Serviceworker-Skriptressourcen während des Updates verwendet wird. Er bietet eine äquivalente Funktionalität zu bestimmten Werten der <code>updateViaCache</code>-Option, die verwendet wird, wenn ein Serviceworker über JavaScript mit {{domxref("ServiceWorkerContainer.register()")}} registriert wird.
        <ul>
          <li><code>true</code>: Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer aus dem Netzwerk aktualisiert. Wenn kein frischer Eintrag im HTTP-Cache für die Importe gefunden wird, werden sie aus dem Netzwerk abgerufen. Äquivalent zu <code>updateViaCache: "imports"</code>.</li>
          <li><code>false</code>: Der HTTP-Cache wird weder für das Hauptskript noch für dessen Importe verwendet. Alle Serviceworker-Skriptressourcen werden aus dem Netzwerk aktualisiert. Äquivalent zu <code>updateViaCache: "none"</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Service Worker API", "Service Worker API", "", "nocode")}}
- {{domxref("Payment Handler API", "Payment Handler API", "", "nocode")}}
- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Leben eines Zahlungsvorgangs](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte zur Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
