---
title: Expect-CT header
short-title: Expect-CT
slug: Web/HTTP/Reference/Headers/Expect-CT
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{Deprecated_Header}}

Der `Expect-CT`-{{Glossary("response_header", "Antwortheader")}} ermöglicht es Websites, die Berichterstattung und/oder Durchsetzung der Anforderungen von [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) zu unterstützen.
Certificate Transparency (CT) zielt darauf ab, die Verwendung falsch ausgestellter Zertifikate für diese Website unbemerkt zu verhindern.

Nur Google Chrome und andere auf Chromium basierende Browser haben `Expect-CT` implementiert, und Chromium hat den Header ab Version 107 als veraltet eingestuft, da Chromium jetzt CT standardmäßig durchsetzt.
Siehe das [Chrome Platform Status](https://chromestatus.com/feature/6244547273687040) Update.

CT-Anforderungen können über einen der folgenden Mechanismen erfüllt werden:

- X.509v3 Zertifikaterweiterung zum Einbetten von signierten Zertifikatszeitstempeln, die von individuellen Logs ausgegeben werden. Die meisten TLS-Zertifikate, die von öffentlich anerkannten CAs ausgestellt und online verwendet werden, enthalten eingebettetes CT.
- Eine TLS-Erweiterung vom Typ `signed_certificate_timestamp`, die während des Handshakes gesendet wird
- Unterstützung von OCSP-Stapling (d.h. die `status_request` TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList`

> [!NOTE]
> Wenn eine Website den `Expect-CT`-Header aktiviert, fordert sie, dass der Browser prüft, ob ein Zertifikat für diese Website in den **[öffentlichen CT-Logs](https://github.com/google/certificate-transparency-community-site/blob/master/docs/google/known-logs.md)** erscheint.

> [!NOTE]
> Browser **ignorieren** den `Expect-CT`-Header über HTTP; der Header hat nur Wirkung bei HTTPS-Verbindungen.

> [!NOTE]
> Der `Expect-CT` ist seit Juni 2021 größtenteils obsolet.
> Seit Mai 2018 wird erwartet, dass alle neuen TLS-Zertifikate standardmäßig SCTs unterstützen.
> Zertifikate, die vor März 2018 ausgestellt wurden, durften eine Laufzeit von 39 Monaten haben, wodurch sie im Juni 2021 abgelaufen waren.
> Chromium plant, den `Expect-CT`-Header abzulehnen und schließlich zu entfernen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
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
  - : Die Anzahl der Sekunden nach Empfang des `Expect-CT`-Header-Feldes, während derer der Benutzeragent den Host der empfangenen Nachricht als bekannten `Expect-CT`-Host betrachten sollte.

    Wenn ein Cache einen Wert erhält, der größer ist, als er darstellen kann, oder wenn eine seiner nachfolgenden Berechnungen überläuft, wird der Cache diesen Wert als entweder 2.147.483.648 (2^31) oder als die größte positive Ganzzahl betrachten, die er darstellen kann.

- `report-uri="<uri>"` {{optional_inline}}
  - : Die URI, an die der Benutzeragent `Expect-CT`-Fehler melden soll.

    Wenn die Direktive zusammen mit der `enforce`-Direktive vorhanden ist, wird die Konfiguration als "enforce-and-report" bezeichnet, was dem Benutzeragenten signalisiert, dass die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt _und_ Verstöße gemeldet werden sollen.

- `enforce` {{optional_inline}}
  - : Signalisiert dem Benutzeragenten, dass die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt werden sollte (anstatt nur die Einhaltung zu melden) und dass der Benutzeragent zukünftige Verbindungen ablehnen sollte, die gegen seine Certificate Transparency-Richtlinie verstoßen.

    Wenn sowohl die `enforce`-Direktive als auch die `report-uri`-Direktive vorhanden sind, wird die Konfiguration als "enforce-and-report" bezeichnet, was dem Benutzeragenten signalisiert, dass sowohl die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt als auch Verstöße gemeldet werden sollen.

## Beispiel

Das folgende Beispiel spezifiziert die Durchsetzung der Certificate Transparency für 24 Stunden und meldet Verstöße an `foo.example.com`.

```http
Expect-CT: max-age=86400, enforce, report-uri="https://foo.example.com/report"
```

## Hinweise

Manuell dem Trust Store hinzugefügte Root-CAs überschreiben und unterdrücken `Expect-CT`-Berichte/Durchsetzungen.

Browser werden eine `Expect-CT`-Richtlinie nicht speichern, es sei denn, die Website hat "bewiesen", dass sie ein Zertifikat bereitstellen kann, das die Anforderungen an die Zertifikattransparenz erfüllt. Browser implementieren ihr eigenes Vertrauensmodell hinsichtlich der CT-Logs, die als vertrauenswürdig gelten, damit das Zertifikat protokolliert wurde.

Builds von Chrome sind so konzipiert, dass sie die `Expect-CT`-Richtlinie 10 Wochen nach dem Erstellungsdatum der Installation nicht mehr durchsetzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Secure Contexts](/de/docs/Web/Security/Secure_Contexts)
- Glossarbegriffe:
  - {{Glossary("TLS", "Transport Layer Security (TLS)")}}
  - {{Glossary("SSL", "Secure Sockets Layer (SSL)")}}
  - {{Glossary("HTTPS", "HTTPS")}}
