---
title: Expect-CT
slug: Web/HTTP/Headers/Expect-CT
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{Deprecated_Header}}

Der `Expect-CT` {{Glossary("response_header", "Antwort-Header")}} ermöglicht es Websites, sich für die Berichterstattung und/oder Durchsetzung von Anforderungen der [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) zu entscheiden. Certificate Transparency (CT) zielt darauf ab, die Nutzung von falsch ausgestellten Zertifikaten für diese Website unbemerkt zu verhindern.

Nur Google Chrome und andere auf Chromium basierende Browser haben `Expect-CT` implementiert, und Chromium hat den Header ab Version 107 veraltet erklärt, da Chromium jetzt CT standardmäßig durchsetzt. Siehe das Update im [Chrome Platform Status](https://chromestatus.com/feature/6244547273687040).

CT-Anforderungen können durch einen der folgenden Mechanismen erfüllt werden:

- X.509v3-Zertifikaterweiterung, um eingebettete signierte Zertifikatstoken von individuellen Logs zu ermöglichen. Die meisten TLS-Zertifikate, die von öffentlich vertrauten CAs ausgestellt und online verwendet werden, enthalten eingebettetes CT.
- Eine TLS-Erweiterung vom Typ `signed_certificate_timestamp`, die während des Handshakes gesendet wird
- Unterstützung von OCSP-Stapling (d.h. die `status_request` TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList`

> [!NOTE]
> Wenn eine Website den `Expect-CT`-Header aktiviert, fordert sie den Browser auf zu überprüfen, ob jedes Zertifikat für diese Website in **[öffentlichen CT-Logs](https://github.com/google/certificate-transparency-community-site/blob/master/docs/google/known-logs.md)** erscheint.

> [!NOTE]
> Browser **ignorieren** den `Expect-CT`-Header über HTTP; der Header hat nur Auswirkung auf HTTPS-Verbindungen.

> [!NOTE]
> Der `Expect-CT` ist seit Juni 2021 größtenteils überholt.
> Seit Mai 2018 wird erwartet, dass alle neuen TLS-Zertifikate standardmäßig SCTs unterstützen.
> Zertifikate, die vor März 2018 ausgestellt wurden, durften eine Lebensdauer von 39 Monaten haben, sodass sie im Juni 2021 abgelaufen sind.
> Chromium plant, den `Expect-CT`-Header zu veralten und ihn schließlich zu entfernen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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

## Anweisungen

- `max-age`

  - : Die Anzahl der Sekunden nach Empfang des `Expect-CT` Header-Feldes, während derer der Benutzeragent den Host der empfangenen Nachricht als bekannten `Expect-CT` Host betrachten sollte.

    Falls ein Cache einen Wert erhält, der größer ist, als er darstellen kann, oder wenn eine seiner nachfolgenden Berechnungen überläuft, wird der Cache diesen Wert entweder als 2,147,483,648 (2^31) oder als die größte positive Zahl betrachten, die er darstellen kann.

- `report-uri="<uri>"` {{optional_inline}}

  - : Die URI, an die der Benutzeragent `Expect-CT`-Fehler melden sollte.

    Wenn die Anweisung in Kombination mit der Anweisung `enforce` vorhanden ist, wird die Konfiguration als "enforce-and-report"-Konfiguration bezeichnet und signalisiert dem Benutzeragenten, dass sowohl die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt als auch Verstöße gemeldet werden sollen.

- `enforce` {{optional_inline}}

  - : Signalisiert dem Benutzeragenten, dass die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt werden soll (anstatt lediglich die Konformität zu melden) und dass der Benutzeragent zukünftige Verbindungen ablehnen soll, die gegen seine Certificate Transparency-Richtlinie verstoßen.

    Wenn sowohl die Anweisung `enforce` als auch die Anweisung `report-uri` vorhanden sind, wird die Konfiguration als "enforce-and-report"-Konfiguration bezeichnet, die dem Benutzeragenten signalisiert, dass sowohl die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt als auch Verstöße gemeldet werden sollen.

## Beispiel

Das folgende Beispiel spezifiziert die Durchsetzung der Certificate Transparency für 24 Stunden und meldet Verstöße an `foo.example.com`.

```http
Expect-CT: max-age=86400, enforce, report-uri="https://foo.example.com/report"
```

## Anmerkungen

Manuell zum Trust Store hinzugefügte Root-CAs überschreiben und unterdrücken `Expect-CT`-Berichte/Durchsetzungen.

Browser werden sich eine `Expect-CT`-Richtlinie nicht merken, es sei denn, die Website hat bewiesen, dass sie ein Zertifikat bereitstellen kann, das die Anforderungen der Certificate Transparency erfüllt. Browser implementieren ihr eigenes Vertrauensmodell bezüglich der CT-Protokolle, die als vertrauenswürdig angesehen werden, damit das Zertifikat protokolliert wurde.

Builds von Chrome sind so konzipiert, dass sie die Durchsetzung der `Expect-CT`-Richtlinie 10 Wochen nach dem Build-Datum der Installation einstellen.

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
