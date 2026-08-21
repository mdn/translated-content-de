---
title: Expect-CT header
short-title: Expect-CT
slug: Web/HTTP/Reference/Headers/Expect-CT
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Der `Expect-CT` {{Glossary("response_header", "Antwort-Header")}} ermöglicht es Websites, die Berichterstattung und/oder Durchsetzung der [Zertifikat-Transparenz](/de/docs/Web/Security/Defenses/Certificate_Transparency) Anforderungen zu aktivieren. Zertifikat-Transparenz (CT) zielt darauf ab, die Nutzung falsch ausgestellter Zertifikate für diese Website zu verhindern, ohne dass es unbemerkt bleibt.

Nur Google Chrome und andere auf Chromium basierende Browser haben `Expect-CT` implementiert, und Chromium hat den Header ab Version 107 veraltet, da Chromium CT nun standardmäßig durchsetzt. Siehe das [Chrome Platform Status](https://chromestatus.com/feature/6244547273687040) Update.

CT-Anforderungen können über einen der folgenden Mechanismen erfüllt werden:

- X.509v3-Zertifikaterweiterung zur Einbettung signierter Zertifikatszeitstempel, die von einzelnen Logs ausgestellt wurden. Die meisten TLS-Zertifikate, die von öffentlich vertrauten CAs ausgestellt und online verwendet werden, enthalten eingebettete CT.
- Eine TLS-Erweiterung vom Typ `signed_certificate_timestamp`, die während des Handshakes gesendet wird
- Unterstützung von OCSP-Stapling (das heißt, die `status_request` TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList`

> [!NOTE]
> Wenn eine Website den `Expect-CT`-Header aktiviert, fordert sie, dass der Browser überprüft, dass jedes Zertifikat für diese Website in **[öffentlichen CT-Logs](https://github.com/google/certificate-transparency-community-site/blob/master/docs/google/known-logs.md)** erscheint.

> [!NOTE]
> Browser **ignorieren** den `Expect-CT`-Header über HTTP; der Header hat nur Auswirkungen auf HTTPS-Verbindungen.

> [!NOTE]
> Der `Expect-CT` ist seit Juni 2021 weitgehend veraltet. Seit Mai 2018 wird erwartet, dass alle neuen TLS-Zertifikate SCTs standardmäßig unterstützen. Zertifikate, die vor März 2018 ausgestellt wurden, durften eine Laufzeit von 39 Monaten haben, sodass sie im Juni 2021 abliefen. Chromium plant, den `Expect-CT`-Header zu veralteten und ihn schließlich zu entfernen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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
  - : Die Anzahl der Sekunden nach Empfang des `Expect-CT`-Header-Feldes, während derer der User-Agent den Host der empfangenen Nachricht als bekannten `Expect-CT`-Host betrachten sollte.

    Wenn ein Cache einen Wert erhält, der größer ist als er darstellen kann, oder wenn eine seiner nachfolgenden Berechnungen überläuft, wird der Cache diesen Wert entweder als 2.147.483.648 (2^31) oder als die größte positive ganze Zahl, die er darstellen kann, betrachten.

- `report-uri="<uri>"` {{optional_inline}}
  - : Die URI, an die der User-Agent `Expect-CT`-Fehler melden sollte.

    Wenn sie mit der `enforce`-Direktive vorhanden ist, wird die Konfiguration als "enforce-and-report"-Konfiguration bezeichnet, die dem User-Agent signalisiert, dass die Einhaltung der Zertifikat-Transparenz-Richtlinie _durchgesetzt_ und Verstöße gemeldet werden sollten.

- `enforce` {{optional_inline}}
  - : Signalisiert dem User-Agent, dass die Einhaltung der Zertifikat-Transparenz-Richtlinie durchgesetzt werden sollte (anstatt nur die Einhaltung zu melden) und dass der User-Agent zukünftige Verbindungen, die gegen die Zertifikat-Transparenz-Richtlinie verstoßen, ablehnen sollte.

    Wenn sowohl die `enforce`-Direktive als auch die `report-uri`-Direktive vorhanden sind, wird die Konfiguration als "enforce-and-report"-Konfiguration bezeichnet, die dem User-Agent signalisiert, dass die Einhaltung der Zertifikat-Transparenz-Richtlinie durchgesetzt und Verstöße gemeldet werden sollten.

## Beispiel

Das folgende Beispiel spezifiziert die Durchsetzung der Zertifikat-Transparenz für 24 Stunden und meldet Verstöße an `foo.example.com`.

```http
Expect-CT: max-age=86400, enforce, report-uri="https://foo.example.com/report"
```

## Hinweise

Root-CAs, die manuell zum Vertrauensspeicher hinzugefügt werden, überschreiben und unterdrücken `Expect-CT`-Berichte/Durchsetzungen.

Browser werden sich keine `Expect-CT`-Richtlinie merken, es sei denn, die Site hat 'bewiesen', dass sie ein Zertifikat bereitstellen kann, das die Zertifikat-Transparenz-Anforderungen erfüllt. Browser implementieren ihr eigenes Vertrauensmodell in Bezug darauf, welche CT-Logs als vertrauenswürdig gelten, damit das Zertifikat protokolliert wurde.

Versionen von Chrome sind so konzipiert, dass sie die `Expect-CT`-Richtlinie 10 Wochen nach dem Build-Datum der Installation nicht mehr durchsetzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts)
- Glossareinträge:
  - {{Glossary("TLS", "Transport Layer Security (TLS)")}}
  - {{Glossary("SSL", "Secure Sockets Layer (SSL)")}}
  - {{Glossary("HTTPS", "HTTPS")}}
