---
title: Expect-CT header
short-title: Expect-CT
slug: Web/HTTP/Reference/Headers/Expect-CT
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{Deprecated_Header}}

Der `Expect-CT`-{{Glossary("response_header", "Antwortheader")}} ermöglicht es Websites, das Überwachen und/oder Erzwingen von Anforderungen der [Zertifikat-Transparenz](/de/docs/Web/Security/Defenses/Certificate_Transparency) zu akzeptieren. Certificate Transparency (CT) zielt darauf ab, die Verwendung von falsch ausgestellten Zertifikaten für diese Website zu verhindern, indem deren Missbrauch unbemerkt bleibt.

Nur Google Chrome und andere auf Chromium basierende Browser haben `Expect-CT` implementiert, und Chromium hat den Header ab Version 107 veraltet, da Chromium CT jetzt standardmäßig erzwingt. Siehe das [Chrome Platform Status](https://chromestatus.com/feature/6244547273687040)-Update.

CT-Anforderungen können durch einen der folgenden Mechanismen erfüllt werden:

- X.509v3-Zertifikaterweiterung zur Einbettung von signierten Zertifikat-Zeitstempeln, die von einzelnen Protokollen ausgestellt wurden. Die meisten TLS-Zertifikate, die von öffentlich vertrauenswürdigen CAs ausgestellt und online verwendet werden, enthalten eingebettetes CT.
- Eine TLS-Erweiterung des Typs `signed_certificate_timestamp`, die während des Handshakes gesendet wird.
- Unterstützung von OCSP-Stapling (das heißt, die `status_request`-TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList`.

> [!NOTE]
> Wenn eine Seite den `Expect-CT`-Header aktiviert, fordert sie vom Browser, dass jedes Zertifikat für diese Seite in **[öffentlich zugänglichen CT-Protokollen](https://github.com/google/certificate-transparency-community-site/blob/master/docs/google/known-logs.md)** erscheint.

> [!NOTE]
> Browser **ignorieren** den `Expect-CT`-Header über HTTP; der Header hat nur bei HTTPS-Verbindungen Wirkung.

> [!NOTE]
> Der `Expect-CT` ist seit Juni 2021 größtenteils obsolet.
> Seit Mai 2018 wird erwartet, dass alle neuen TLS-Zertifikate standardmäßig SCTs unterstützen.
> Zertifikate, die vor März 2018 ausgestellt wurden, durften eine Laufzeit von 39 Monaten haben, sodass sie im Juni 2021 abgelaufen sind.
> Chromium plant, den `Expect-CT`-Header veraltet zu machen und ihn schließlich zu entfernen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
  - : Die Anzahl der Sekunden nach dem Empfang des `Expect-CT`-Headerfeldes, während der der Benutzeragent den Host der empfangenen Nachricht als bekannten `Expect-CT`-Host betrachten sollte.

    Wenn ein Cache einen Wert erhält, der größer ist, als er darstellen kann, oder wenn eine seiner nachfolgenden Berechnungen überläuft, wird der Cache diesen Wert entweder als 2.147.483.648 (2^31) oder als größte positive ganze Zahl betrachten, die er darstellen kann.

- `report-uri="<uri>"` {{optional_inline}}
  - : Die URI, an die der Benutzeragent `Expect-CT`-Fehler melden sollte.

    Wenn in Verbindung mit der `enforce`-Direktive vorhanden, wird die Konfiguration als "enforce-and-report"-Konfiguration bezeichnet, die dem Benutzeragenten signalisiert, dass die Einhaltung der Certificate Transparency-Richtlinie sowohl durchgesetzt als auch Verstöße gemeldet werden sollen.

- `enforce` {{optional_inline}}
  - : Signalisiert dem Benutzeragenten, dass die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt werden sollte (anstatt nur die Einhaltung zu melden) und dass der Benutzeragent zukünftige Verbindungen ablehnen sollte, die gegen seine Certificate Transparency-Richtlinie verstoßen.

    Wenn sowohl die `enforce`- als auch die `report-uri`-Direktive vorhanden sind, wird die Konfiguration als "enforce-and-report"-Konfiguration bezeichnet, die dem Benutzeragenten signalisiert, dass sowohl die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt als auch Verstöße gemeldet werden sollen.

## Beispiel

Das folgende Beispiel spezifiziert die Durchsetzung der Certificate Transparency für 24 Stunden und meldet Verstöße an `foo.example.com`.

```http
Expect-CT: max-age=86400, enforce, report-uri="https://foo.example.com/report"
```

## Hinweise

Manuell zum Trust-Store hinzugefügte Root-CAs überschreiben und unterdrücken `Expect-CT`-Berichte/Durchsetzung.

Browser werden sich keine `Expect-CT`-Richtlinie merken, es sei denn, die Website hat bewiesen, dass sie ein Zertifikat bereitstellen kann, das den Anforderungen der Zertifikat-Transparenz entspricht. Browser implementieren ihr eigenes Vertrauensmodell in Bezug darauf, welche CT-Protokolle als vertrauenswürdig betrachtet werden, damit das Zertifikat geloggt wird.

Builds von Chrome sind so konzipiert, dass die Erzwingung der `Expect-CT`-Richtlinie 10 Wochen nach dem Bauzeitpunkt der Installation aufhört.

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
