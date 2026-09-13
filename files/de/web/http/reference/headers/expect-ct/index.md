---
title: Expect-CT header
short-title: Expect-CT
slug: Web/HTTP/Reference/Headers/Expect-CT
l10n:
  sourceCommit: b3cd597b58940518a7712487ce94efc0881cb549
---

Der `Expect-CT`-{{Glossary("response_header", "Antwort-Header")}} ermöglicht es Websites, die Berichterstattung und/oder Durchsetzung der [Certificate Transparency](/de/docs/Web/Security/Defenses/Certificate_Transparency)-Anforderungen zu aktivieren. Certificate Transparency (CT) zielt darauf ab, die Nutzung von fälschlicherweise ausgestellten Zertifikaten für diese Website unbemerkt zu verhindern.

Nur Google Chrome und andere auf Chromium basierende Browser haben `Expect-CT` implementiert; Chromium hat den Header ab Version 107 veraltet, da Chromium jetzt standardmäßig CT durchsetzt.
Siehe das [Chrome Platform Status](https://chromestatus.com/feature/6244547273687040)-Update.

CT-Anforderungen können über einen der folgenden Mechanismen erfüllt werden:

- X.509v3-Zertifikaterweiterung, um das Einbetten von signierten Zertifikat-Zeitstempeln zu ermöglichen, die von einzelnen Protokollen ausgestellt wurden. Die meisten TLS-Zertifikate, die von öffentlich vertrauenswürdigen Zertifizierungsstellen ausgestellt und online verwendet werden, enthalten eingebettetes CT.
- Eine TLS-Erweiterung des Typs `signed_certificate_timestamp`, die während des Handshakes gesendet wird.
- Unterstützung von OCSP-Stapling (d.h. der `status_request` TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList`.

> [!NOTE]
> Wenn eine Website den `Expect-CT`-Header aktiviert, wird der Browser aufgefordert zu prüfen, ob ein Zertifikat für diese Website in **[öffentlichen CT-Protokollen](https://github.com/google/certificate-transparency-community-site/blob/master/docs/google/known-logs.md)** erscheint.

> [!NOTE]
> Browser **ignorieren** den `Expect-CT`-Header über HTTP; der Header hat nur Auswirkungen auf HTTPS-Verbindungen.

> [!NOTE]
> Der `Expect-CT` ist seit Juni 2021 größtenteils veraltet.
> Seit Mai 2018 wird erwartet, dass alle neuen TLS-Zertifikate SCTs standardmäßig unterstützen.
> Zertifikate, die vor März 2018 ausgestellt wurden, durften eine Lebensdauer von 39 Monaten haben, sodass sie im Juni 2021 abgelaufen waren.
> Chromium plant, den `Expect-CT`-Header zu deprecieren und schließlich zu entfernen.

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
  - : Die Anzahl der Sekunden nach dem Empfang des `Expect-CT`-Header-Feldes, während derer der Benutzeragent den Host der empfangenen Nachricht als bekannten `Expect-CT`-Host betrachten soll.

    Wenn ein Cache einen Wert erhält, der größer ist, als er darstellen kann, oder wenn eine seiner nachfolgenden Berechnungen überläuft, betrachtet der Cache diesen Wert entweder als 2.147.483.648 (2^31) oder als die größte positive ganze Zahl, die er darstellen kann.

- `report-uri="<uri>"` {{optional_inline}}
  - : Die URI, an die der Benutzeragent `Expect-CT`-Fehler melden soll.

    Wenn es zusammen mit der `enforce`-Direktive vorhanden ist, wird die Konfiguration als "enforce-and-report"-Konfiguration bezeichnet, was dem Benutzeragenten signalisiert, dass die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt _und_ Verstöße gemeldet werden sollen.

- `enforce` {{optional_inline}}
  - : Signalisiert dem Benutzeragenten, dass die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt werden soll (anstatt nur die Einhaltung zu melden) und dass der Benutzeragent zukünftige Verbindungen ablehnen soll, die gegen seine Certificate Transparency-Richtlinie verstoßen.

    Wenn sowohl die `enforce`-Direktive als auch die `report-uri`-Direktive vorhanden sind, wird die Konfiguration als "enforce-and-report"-Konfiguration bezeichnet, was dem Benutzeragenten signalisiert, dass die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt und Verstöße gemeldet werden sollen.

## Beispiel

Das folgende Beispiel gibt die Durchsetzung der Certificate Transparency für 24 Stunden an und meldet Verstöße an `foo.example.com`.

```http
Expect-CT: max-age=86400, enforce, report-uri="https://foo.example.com/report"
```

## Anmerkungen

Manuell zum Vertrauensspeicher hinzugefügte Root-CAs überschreiben und unterdrücken `Expect-CT`-Berichte/Durchsetzungen.

Browser werden sich eine `Expect-CT`-Richtlinie nicht merken, es sei denn, die Website hat 'bewiesen', dass sie ein Zertifikat liefern kann, das den Anforderungen der Certificate Transparency entspricht. Browser implementieren ihr eigenes Vertrauensmodell, bezüglich welcher CT-Protokolle als vertrauenswürdig angesehen werden, damit das Zertifikat protokolliert wurde.

Builds von Chrome sind so konzipiert, dass sie 10 Wochen nach dem Build-Datum der Installation aufhören, die `Expect-CT`-Richtlinie durchzusetzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts)
- Glossarbegriffe:
  - {{Glossary("TLS", "Transport Layer Security (TLS)")}}
  - {{Glossary("SSL", "Secure Sockets Layer (SSL)")}}
  - {{Glossary("HTTPS", "HTTPS")}}
