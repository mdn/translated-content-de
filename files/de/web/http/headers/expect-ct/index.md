---
title: Expect-CT
slug: Web/HTTP/Headers/Expect-CT
l10n:
  sourceCommit: ab1bf2c5955c1bfa4d96d779f701ab22f3870d43
---

{{HTTPSidebar}}{{Deprecated_Header}}

Der `Expect-CT` {{Glossary("response_header", "Response-Header")}} ermöglicht es Websites, die Berichterstattung und/oder Durchsetzung der Anforderungen an die [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) zu aktivieren. Certificate Transparency (CT) zielt darauf ab, die unbemerkte Verwendung von fehlerhaften Zertifikaten für diese Website zu verhindern.

Nur Google Chrome und andere auf Chromium basierende Browser haben `Expect-CT` implementiert, und Chromium hat den Header ab Version 107 veraltet, da Chromium jetzt standardmäßig CT durchsetzt. Siehe das [Chrome Platform Status](https://chromestatus.com/feature/6244547273687040) Update.

CT-Anforderungen können durch einen der folgenden Mechanismen erfüllt werden:

- X.509v3-Zertifikatserweiterung, um das Einbetten von unterzeichneten Zertifikatsstempeln, die von einzelnen Logs ausgestellt wurden, zu ermöglichen. Die meisten online verwendeten TLS-Zertifikate, die von öffentlich vertrauenswürdigen Zertifizierungsstellen ausgestellt wurden, enthalten eingebettetes CT.
- Eine TLS-Erweiterung vom Typ `signed_certificate_timestamp`, die während des Handshakes gesendet wird
- Unterstützung von OCSP-Stapling (das heißt, die `status_request` TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList`

> [!NOTE]
> Wenn eine Website den `Expect-CT` Header aktiviert, fordert sie den Browser auf zu überprüfen, ob ein Zertifikat für diese Website in **[öffentlichen CT-Logs](https://github.com/google/certificate-transparency-community-site/blob/master/docs/google/known-logs.md)** erscheint.

> [!NOTE]
> Browser **ignorieren** den `Expect-CT` Header über HTTP; der Header hat nur Auswirkungen auf HTTPS-Verbindungen.

> [!NOTE]
> Der `Expect-CT` ist größtenteils seit Juni 2021 veraltet.
> Seit Mai 2018 wird erwartet, dass alle neuen TLS-Zertifikate standardmäßig SCTs unterstützen.
> Zertifikate, die vor März 2018 ausgestellt wurden, durften eine Lebensdauer von 39 Monaten haben, sodass sie im Juni 2021 abgelaufen waren.
> Chromium plant, den `Expect-CT` Header zu veralten und ihn schließlich zu entfernen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
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

  - : Die Anzahl der Sekunden nach Empfang des `Expect-CT` Header-Feldes, während derer der User-Agent den Host der empfangenen Nachricht als bekannten `Expect-CT` Host betrachten soll.

    Wenn ein Cache einen Wert erhält, der größer ist als er darstellen kann, oder wenn eine seiner nachfolgenden Berechnungen überläuft, wird der Cache diesen Wert entweder als 2.147.483.648 (2^31) oder als die größte positive ganze Zahl betrachten, die er darstellen kann.

- `report-uri="<uri>"` {{optional_inline}}

  - : Die URI, an die der User-Agent `Expect-CT` Fehler melden soll.

    Wenn sie zusammen mit der `enforce` Direktive vorhanden ist, wird die Konfiguration als "enforce-and-report" Konfiguration bezeichnet, was dem User-Agent signalisiert, dass sowohl die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt als auch Verstöße gemeldet werden sollen.

- `enforce` {{optional_inline}}

  - : Signalisiert dem User-Agent, dass die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt werden soll (anstatt nur die Einhaltung zu melden) und dass der User-Agent zukünftige Verbindungen ablehnen soll, die gegen seine Certificate Transparency-Richtlinie verstoßen.

    Wenn sowohl die `enforce` Direktive als auch die `report-uri` Direktive vorhanden sind, wird die Konfiguration als "enforce-and-report" Konfiguration bezeichnet, die dem User-Agent signalisiert, dass sowohl die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt als auch Verstöße gemeldet werden sollen.

## Beispiel

Das folgende Beispiel spezifiziert die Durchsetzung von Certificate Transparency für 24 Stunden und meldet Verstöße an `foo.example.com`.

```http
Expect-CT: max-age=86400, enforce, report-uri="https://foo.example.com/report"
```

## Anmerkungen

Von Benutzern manuell hinzugefügte Stammzertifizierungsstellen im Trust Store überschreiben und unterdrücken `Expect-CT` Berichte/Durchsetzungen.

Browser werden sich an eine `Expect-CT` Richtlinie nicht erinnern, es sei denn, die Website hat "bewiesen", dass sie ein Zertifikat bereitstellen kann, das die Anforderungen an die Certificate Transparency erfüllt. Browser implementieren ihr eigenes Vertrauensmodell in Bezug darauf, welche CT-Logs als vertrauenswürdig angesehen werden, damit ein Zertifikat dort protokolliert wurde.

Builds von Chrome sind so konzipiert, dass sie die Durchsetzung der `Expect-CT` Richtlinie 10 Wochen nach dem Erstellungsdatum der Installation einstellen.

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
