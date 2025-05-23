---
title: Expect-CT header
short-title: Expect-CT
slug: Web/HTTP/Reference/Headers/Expect-CT
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{Deprecated_Header}}

Der `Expect-CT` {{Glossary("response_header", "Response-Header")}} ermöglicht es Webseiten, die Überwachung und/oder Durchsetzung der Anforderungen an die [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) zu aktivieren. Certificate Transparency (CT) zielt darauf ab, die unbemerkte Nutzung falsch ausgestellter Zertifikate für diese Seite zu verhindern.

Nur Google Chrome und andere auf Chromium basierende Browser haben `Expect-CT` implementiert, und Chromium hat den Header ab Version 107 veraltet erklärt, da Chromium nun CT standardmäßig erzwingt. Siehe das [Chrome Platform Status](https://chromestatus.com/feature/6244547273687040) Update.

Die CT-Anforderungen können über einen der folgenden Mechanismen erfüllt werden:

- X.509v3-Zertifikaterweiterung zum Einbetten von signierten Zertifikat-Zeitstempeln, die von einzelnen Logs ausgestellt wurden. Die meisten TLS-Zertifikate, die von öffentlich vertrauenswürdigen CAs ausgestellt und online genutzt werden, enthalten eingebettetes CT.
- Eine TLS-Erweiterung vom Typ `signed_certificate_timestamp`, die während des Handshakes gesendet wird
- Unterstützung von OCSP-Stapling (das ist, die `status_request` TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList`

> [!NOTE]
> Wenn eine Seite den `Expect-CT`-Header aktiviert, verlangt sie, dass der Browser überprüft, ob irgendein Zertifikat für diese Seite in **[öffentlichen CT-Logs](https://github.com/google/certificate-transparency-community-site/blob/master/docs/google/known-logs.md)** erscheint.

> [!NOTE]
> Browser **ignorieren** den `Expect-CT` Header über HTTP; der Header hat nur Auswirkungen auf HTTPS-Verbindungen.

> [!NOTE]
> Der `Expect-CT` ist seit Juni 2021 größtenteils obsolet.
> Seit Mai 2018 wird erwartet, dass alle neuen TLS-Zertifikate standardmäßig SCTs unterstützen.
> Zertifikate, die vor März 2018 ausgestellt wurden, durften eine Lebensdauer von 39 Monaten haben, sodass sie im Juni 2021 abgelaufen sind.
> Chromium plant die Einstellung des `Expect-CT` Headers und schließlich dessen Entfernung.

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

  - : Die Anzahl der Sekunden nach Empfang des `Expect-CT`-Header-Feldes, während derer der User-Agent den Host der empfangenen Nachricht als bekannten `Expect-CT` Host betrachten sollte.

    Wenn ein Cache einen Wert erhält, der größer ist als er darstellen kann, oder wenn eine seiner späteren Berechnungen überläuft, wird der Cache diesen Wert entweder mit 2,147,483,648 (2^31) oder der größten positiven Zahl, die er darstellen kann, betrachten.

- `report-uri="<uri>"` {{optional_inline}}

  - : Die URI, wohin der User-Agent `Expect-CT`-Fehler melden sollte.

    Wenn zusammen mit der `enforce` Direktive vorhanden, wird die Konfiguration als "enforce-and-report" Konfiguration bezeichnet, die dem User-Agent signalisiert, dass die Einhaltung der Certificate Transparency-Politik erzwungen _und_ Verstöße gemeldet werden sollten.

- `enforce` {{optional_inline}}

  - : Signale an den User-Agent, dass die Einhaltung der Certificate Transparency-Politik erzwungen (anstatt nur gemeldet) werden sollte und dass der User-Agent zukünftige Verbindungen, die gegen seine Certificate Transparency-Politik verstoßen, ablehnen sollte.

    Wenn sowohl die `enforce` Direktive als auch die `report-uri` Direktive vorhanden sind, wird die Konfiguration als "enforce-and-report" Konfiguration bezeichnet, die dem User-Agent signalisiert, dass die Einhaltung der Certificate Transparency-Politik erzwungen und Verstöße gemeldet werden sollten.

## Beispiel

Das folgende Beispiel spezifiziert die Durchsetzung von Certificate Transparency für 24 Stunden und meldet Verstöße an `foo.example.com`.

```http
Expect-CT: max-age=86400, enforce, report-uri="https://foo.example.com/report"
```

## Anmerkungen

Von Hand zum Vertrauensspeicher hinzugefügte Root-CAs überschreiben und unterdrücken `Expect-CT`-Berichte/Durchsetzungen.

Browser merken sich eine `Expect-CT`-Policy nicht, es sei denn, die Seite hat 'bewiesen', dass sie ein Zertifikat bereitstellen kann, das die Certificate Transparency-Anforderungen erfüllt. Browser implementieren ihr eigenes Vertrauensmodell bezüglich der CT-Logs, die als vertrauenswürdig angesehen werden, um das Zertifikat geloggt zu haben.

Builds von Chrome sind so konzipiert, dass sie 10 Wochen nach dem Build-Datum der Installation aufhören, die `Expect-CT`-Richtlinie zu erzwingen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Sichere Kontexte](/de/docs/Web/Security/Secure_Contexts)
- Glossarbegriffe:
  - {{Glossary("TLS", "Transport Layer Security (TLS)")}}
  - {{Glossary("SSL", "Secure Sockets Layer (SSL)")}}
  - {{Glossary("HTTPS", "HTTPS")}}
