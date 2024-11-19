---
title: Expect-CT
slug: Web/HTTP/Headers/Expect-CT
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{HTTPSidebar}}{{Deprecated_Header}}

Der `Expect-CT` {{Glossary("response_header", "Response-Header")}} ermöglicht es Websites, die Meldung und/oder Durchsetzung der Anforderungen der [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) zu aktivieren. Certificate Transparency (CT) zielt darauf ab, den Einsatz von falsch ausgestellten Zertifikaten für diese Website unbemerkt zu verhindern.

Nur Google Chrome und andere auf Chromium basierende Browser haben `Expect-CT` implementiert, und Chromium hat den Header ab Version 107 als veraltet eingestuft, da Chromium jetzt CT standardmäßig durchsetzt. Siehe die [Chrome Platform Status](https://chromestatus.com/feature/6244547273687040) Aktualisierung.

CT-Anforderungen können durch einen der folgenden Mechanismen erfüllt werden:

- X.509v3-Zertifikaterweiterung, um die Einbettung von signierten Zertifikatszeitstempeln zu ermöglichen, die von einzelnen Logs ausgegeben werden. Die meisten TLS-Zertifikate, die von öffentlich vertrauenswürdigen CAs ausgegeben und online verwendet werden, enthalten eingebettetes CT.
- Eine TLS-Erweiterung des Typs `signed_certificate_timestamp`, die während des Handshakes gesendet wird.
- Unterstützung von OCSP-Stapling (d.h. die `status_request` TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList`.

> [!NOTE]
> Wenn eine Website den `Expect-CT` Header aktiviert, fordert sie den Browser auf, zu überprüfen, dass jedes Zertifikat für diese Website in **[öffentlichen CT-Logs](https://github.com/google/certificate-transparency-community-site/blob/master/docs/google/known-logs.md)** erscheint.

> [!NOTE]
> Browser **ignorieren** den `Expect-CT` Header über HTTP; der Header hat nur Auswirkungen auf HTTPS-Verbindungen.

> [!NOTE]
> Der `Expect-CT` ist seit Juni 2021 größtenteils obsolet.
> Seit Mai 2018 wird erwartet, dass alle neuen TLS-Zertifikate SCTs standardmäßig unterstützen.
> Zertifikate, die vor März 2018 ausgestellt wurden, durften eine Lebensdauer von 39 Monaten haben, so dass sie im Juni 2021 abgelaufen sind.
> Chromium plant, den `Expect-CT` Header zu veralten und ihn schließlich zu entfernen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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

  - : Die Anzahl der Sekunden nach Empfang des `Expect-CT` Header-Feldes, während derer der User Agent den Host der empfangenen Nachricht als bekannten `Expect-CT` Host behandeln sollte.

    Wenn ein Cache einen Wert erhält, der größer ist, als er darstellen kann, oder wenn eine seiner nachfolgenden Berechnungen überläuft, wird der Cache diesen Wert als entweder 2.147.483.648 (2^31) oder die größte positive Ganzzahl, die er darstellen kann, betrachten.

- `report-uri="<uri>"` {{optional_inline}}

  - : Die URI, an die der User Agent `Expect-CT`-Fehler melden soll.

    Wenn es zusammen mit der `enforce`-Direktive vorhanden ist, wird die Konfiguration als "enforce-and-report"-Konfiguration bezeichnet, die dem User Agent signalisiert, dass sowohl die Einhaltung der Certificate Transparency-Politik durchgesetzt _als auch_ Verstöße gemeldet werden sollen.

- `enforce` {{optional_inline}}

  - : Signalisiert dem User Agent, dass die Einhaltung der Certificate Transparency-Politik durchgesetzt werden soll (anstatt nur die Einhaltung zu melden) und dass der User Agent zukünftige Verbindungen, die gegen seine Certificate Transparency-Politik verstoßen, ablehnen sollte.

    Wenn sowohl die `enforce`-Direktive als auch die `report-uri`-Direktive vorhanden sind, wird die Konfiguration als "enforce-and-report"-Konfiguration bezeichnet, die dem User Agent signalisiert, dass sowohl die Einhaltung der Certificate Transparency-Politik durchgesetzt als auch Verstöße gemeldet werden sollen.

## Beispiel

Das folgende Beispiel spezifiziert die Durchsetzung der Certificate Transparency für 24 Stunden und meldet Verstöße an `foo.example.com`.

```http
Expect-CT: max-age=86400, enforce, report-uri="https://foo.example.com/report"
```

## Anmerkungen

Manuell zum Trust Store hinzugefügte Root CAs überschreiben und unterdrücken `Expect-CT`-Berichte/Durchsetzungen.

Browser werden sich keine `Expect-CT`-Richtlinie merken, es sei denn, die Website hat 'bewiesen', dass sie ein Zertifikat bereitstellen kann, das die Anforderungen der Certificate Transparency erfüllt. Browser implementieren ihr eigenes Vertrauensmodell dahingehend, welche CT-Logs als vertrauenswürdig gelten, damit das Zertifikat geloggt wurde.

Builds von Chrome sind so konzipiert, dass sie die Durchsetzung der `Expect-CT`-Richtlinie 10 Wochen nach dem Build-Datum der Installation stoppen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
