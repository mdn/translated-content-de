---
title: Expect-CT header
short-title: Expect-CT
slug: Web/HTTP/Reference/Headers/Expect-CT
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}{{Deprecated_Header}}

Der `Expect-CT` {{Glossary("response_header", "Response-Header")}} ermöglicht es Websites, die Einhaltung und/oder Meldung von Anforderungen an die [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) zu aktivieren. Certificate Transparency (CT) zielt darauf ab, die unbemerkte Verwendung von falsch ausgestellten Zertifikaten für diese Seite zu verhindern.

Nur Google Chrome und andere auf Chromium basierende Browser haben `Expect-CT` implementiert. Chromium hat den Header ab Version 107 als veraltet markiert, da Chromium nun CT standardmäßig erzwingt. Siehe das [Chrome Platform Status](https://chromestatus.com/feature/6244547273687040) Update.

CT-Anforderungen können über einen der folgenden Mechanismen erfüllt werden:

- X.509v3-Zertifikaterweiterung, um das Einbetten von signierten Zertifikatstimestamps von individuellen Logs zu ermöglichen. Die meisten online verwendeten TLS-Zertifikate von öffentlich vertrauenswürdigen CAs enthalten eingebettetes CT.
- Eine TLS-Erweiterung vom Typ `signed_certificate_timestamp`, die während des Handshakes gesendet wird.
- Unterstützung von OCSP-Stapling (das heißt, die `status_request` TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList`.

> [!NOTE]
> Wenn eine Website den `Expect-CT` Header aktiviert, wird damit vom Browser verlangt, dass jedes Zertifikat für diese Website in **[öffentlichen CT-Logs](https://github.com/google/certificate-transparency-community-site/blob/master/docs/google/known-logs.md)** erscheint.

> [!NOTE]
> Browser **ignorieren** den `Expect-CT` Header über HTTP; der Header hat nur Auswirkungen auf HTTPS-Verbindungen.

> [!NOTE]
> Der `Expect-CT` ist seit Juni 2021 größtenteils obsolet.
> Seit Mai 2018 wird erwartet, dass alle neuen TLS-Zertifikate standardmäßig SCTs unterstützen.
> Zertifikate, die vor März 2018 ausgestellt wurden, durften eine Laufzeit von 39 Monaten haben, sodass sie im Juni 2021 abgelaufen waren.
> Chromium plant, den `Expect-CT` Header zu verwerfen und schließlich zu entfernen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Expect-CT: report-uri="<uri>",
           enforce,
           max-age=<age>
```

## Direktiven

- `max-age`

  - : Die Anzahl der Sekunden nach Empfang des `Expect-CT` Headerfeldes, während derer der User Agent den Host der empfangenen Nachricht als bekannten `Expect-CT` Host betrachten soll.

    Wenn ein Cache einen Wert erhält, der größer ist als er darstellen kann, oder wenn eine seiner nachfolgenden Berechnungen überläuft, wird der Cache diesen Wert entweder als 2.147.483.648 (2^31) oder als größte positive ganze Zahl ansehen, die er darstellen kann.

- `report-uri="<uri>"` {{optional_inline}}

  - : Die URI, an die der User Agent `Expect-CT`-Fehler melden soll.

    Wenn zusammen mit der `enforce`-Direktive vorhanden, wird die Konfiguration als "enforce-and-report"-Konfiguration bezeichnet, die dem User Agent signalisiert, dass die Einhaltung der Certificate Transparency-Richtlinie sowohl durchgesetzt als auch Verstöße gemeldet werden sollen.

- `enforce` {{optional_inline}}

  - : Signalisiert dem User Agent, dass die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt werden soll (anstatt nur die Einhaltung zu melden) und dass der User Agent zukünftige Verbindungen ablehnen soll, die gegen seine Certificate Transparency-Richtlinie verstoßen.

    Wenn sowohl die `enforce`-Direktive als auch die `report-uri`-Direktive vorhanden sind, wird die Konfiguration als "enforce-and-report"-Konfiguration bezeichnet, die dem User Agent signalisiert, dass die Einhaltung der Certificate Transparency-Richtlinie sowohl durchgesetzt als auch Verstöße gemeldet werden sollen.

## Beispiel

Das folgende Beispiel spezifiziert die Durchsetzung der Certificate Transparency für 24 Stunden und meldet Verstöße an `foo.example.com`.

```http
Expect-CT: max-age=86400, enforce, report-uri="https://foo.example.com/report"
```

## Hinweise

Manuell zum Trust-Store hinzugefügte Root-CAs überschreiben und unterdrücken `Expect-CT`-Berichte/Durchsetzungen.

Browser werden sich eine `Expect-CT`-Richtlinie nicht merken, es sei denn, die Seite hat 'bewiesen', dass sie ein Zertifikat bereitstellen kann, das die Anforderungen der Certificate Transparency erfüllt. Browser implementieren ihr eigenes Vertrauensmodell, welche CT-Logs als vertrauenswürdig angesehen werden, damit das Zertifikat geloggt wurde.

Builds von Chrome sind so konzipiert, dass sie die `Expect-CT`-Richtlinie 10 Wochen nach dem Erstellungsdatum der Installation nicht mehr durchsetzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Sichere Kontexte](/de/docs/Web/Security/Secure_Contexts)
- Glossareinträge:
  - {{Glossary("TLS", "Transport Layer Security (TLS)")}}
  - {{Glossary("SSL", "Secure Sockets Layer (SSL)")}}
  - {{Glossary("HTTPS", "HTTPS")}}
