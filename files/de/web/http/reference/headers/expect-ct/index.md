---
title: Expect-CT
slug: Web/HTTP/Reference/Headers/Expect-CT
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{Deprecated_Header}}

Der `Expect-CT` {{Glossary("response_header", "Response-Header")}} ermöglicht es Websites, die Berichterstattung und/oder Durchsetzung der [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) Anforderungen zu aktivieren. Certificate Transparency (CT) zielt darauf ab, die unbemerkte Verwendung von falsch ausgestellten Zertifikaten für diese Website zu verhindern.

Nur Google Chrome und andere auf Chromium basierende Browser implementierten `Expect-CT`, und Chromium hat den Header ab Version 107 veraltet, da Chromium jetzt CT standardmäßig durchsetzt. Siehe das [Chrome Platform Status](https://chromestatus.com/feature/6244547273687040) Update.

CT-Anforderungen können über einen der folgenden Mechanismen erfüllt werden:

- X.509v3-Zertifikaterweiterung, um das Einbetten von signierten Zertifikatstimestamps zu ermöglichen, die von einzelnen Logs ausgestellt wurden. Die meisten TLS-Zertifikate, die von öffentlich vertrauenswürdigen CAs ausgestellt und online verwendet werden, enthalten eingebettetes CT.
- Eine TLS-Erweiterung vom Typ `signed_certificate_timestamp`, die während des Handshakes gesendet wird
- Unterstützung von OCSP-Stapling (das heißt, die `status_request` TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList`

> [!NOTE]
> Wenn eine Website den `Expect-CT` Header aktiviert, verlangt sie, dass der Browser überprüft, ob jedes Zertifikat für diese Website in **[öffentlichen CT-Logs](https://github.com/google/certificate-transparency-community-site/blob/master/docs/google/known-logs.md)** enthalten ist.

> [!NOTE]
> Browser **ignorieren** den `Expect-CT` Header über HTTP; der Header wirkt sich nur auf HTTPS-Verbindungen aus.

> [!NOTE]
> Der `Expect-CT` ist seit Juni 2021 größtenteils veraltet.
> Seit Mai 2018 wird erwartet, dass alle neuen TLS-Zertifikate SCTs standardmäßig unterstützen.
> Zertifikate, die vor März 2018 ausgestellt wurden, durften eine Laufzeit von 39 Monaten haben, sodass sie im Juni 2021 abgelaufen waren.
> Chromium plant, den `Expect-CT` Header zu veraltet zu erklären und ihn schließlich zu entfernen.

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

  - : Die Anzahl der Sekunden nach Erhalt des `Expect-CT` Header-Feldes, während derer der Benutzeragent den Host der empfangenen Nachricht als bekannten `Expect-CT` Host betrachten soll.

    Wenn ein Cache einen Wert erhält, der größer ist, als er darstellen kann, oder wenn eine seiner nachfolgenden Berechnungen einen Überlauf verursacht, wird der Cache diesen Wert entweder als 2.147.483.648 (2^31) oder als größte positive ganze Zahl, die er darstellen kann, betrachten.

- `report-uri="<uri>"` {{optional_inline}}

  - : Die URI, an die der Benutzeragent `Expect-CT`-Fehler melden soll.

    Wenn in Verbindung mit der `enforce` Direktive vorhanden, wird die Konfiguration als "enforce-and-report" bezeichnet und signalisiert dem Benutzeragenten sowohl, dass die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt werden sollte, _als auch_, dass Verstöße gemeldet werden sollen.

- `enforce` {{optional_inline}}

  - : Signalisiert dem Benutzeragenten, dass die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt werden sollte (anstatt nur die Einhaltung zu melden) und dass der Benutzeragent zukünftige Verbindungen, die gegen seine Certificate Transparency-Richtlinie verstoßen, ablehnen sollte.

    Wenn sowohl die `enforce` Direktive als auch die `report-uri` Direktive vorhanden sind, wird die Konfiguration als "enforce-and-report" bezeichnet und signalisiert dem Benutzeragenten sowohl, dass die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt werden sollte, als auch, dass Verstöße gemeldet werden sollen.

## Beispiel

Das folgende Beispiel spezifiziert die Durchsetzung von Certificate Transparency für 24 Stunden und meldet Verstöße an `foo.example.com`.

```http
Expect-CT: max-age=86400, enforce, report-uri="https://foo.example.com/report"
```

## Anmerkungen

Manuell dem Trust Store hinzugefügte Root-CAs überschreiben und unterdrücken `Expect-CT`-Berichte/-Durchsetzung.

Browser werden sich eine `Expect-CT`-Richtlinie nicht merken, es sei denn, die Website hat 'bewiesen', dass sie ein Zertifikat bereitstellen kann, das die Anforderungen an die Zertifikattransparenz erfüllt. Browser implementieren ihr eigenes Vertrauensmodell hinsichtlich der CT-Logs, die als vertrauenswürdig angesehen werden, damit das Zertifikat dort geloggt wurde.

Chrome-Versionen sind darauf ausgelegt, die Durchsetzung der `Expect-CT`-Richtlinie 10 Wochen nach dem Erstellungsdatum der Installation einzustellen.

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
