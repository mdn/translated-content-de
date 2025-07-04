---
title: Expect-CT header
short-title: Expect-CT
slug: Web/HTTP/Reference/Headers/Expect-CT
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Deprecated_Header}}

Der `Expect-CT` {{Glossary("response_header", "Response-Header")}} erlaubt es Websites, das Reporting und/oder die Durchsetzung von [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)-Anforderungen zu aktivieren. Certificate Transparency (CT) zielt darauf ab, die Verwendung von falsch ausgestellten Zertifikaten für diese Website zu verhindern, die unbemerkt bleibt.

Nur Google Chrome und andere auf Chromium basierende Browser haben `Expect-CT` implementiert, und Chromium hat den Header ab Version 107 veraltet, da Chromium jetzt CT standardmäßig erzwingt. Siehe das Update auf der [Chrome Platform Status](https://chromestatus.com/feature/6244547273687040)-Seite.

CT-Anforderungen können durch einen der folgenden Mechanismen erfüllt werden:

- X.509v3-Zertifikats-Erweiterung, um das Einbetten von signierten Zertifikats-Timestamps zu ermöglichen, die von einzelnen Logs ausgegeben werden. Die meisten online genutzten TLS-Zertifikate, die von öffentlich vertrauenswürdigen CAs ausgestellt werden, enthalten eingebettete CT.
- Eine TLS-Erweiterung vom Typ `signed_certificate_timestamp`, die während des Handshakes gesendet wird
- Unterstützung von OCSP-Stapling (also die `status_request` TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList`

> [!NOTE]
> Wenn eine Website den `Expect-CT` Header aktiviert, fordert sie den Browser auf zu überprüfen, dass ein Zertifikat für diese Website in **[öffentlichen CT-Logs](https://github.com/google/certificate-transparency-community-site/blob/master/docs/google/known-logs.md)** erscheint.

> [!NOTE]
> Browser **ignorieren** den `Expect-CT` Header über HTTP; der Header wirkt sich nur auf HTTPS-Verbindungen aus.

> [!NOTE]
> Der `Expect-CT` ist seit Juni 2021 größtenteils veraltet.
> Seit Mai 2018 wird erwartet, dass alle neuen TLS-Zertifikate standardmäßig SCTs unterstützen.
> Zertifikate, die vor März 2018 ausgestellt wurden, durften eine Lebensdauer von 39 Monaten haben, sodass sie im Juni 2021 abgelaufen sind.
> Chromium plant, den `Expect-CT` Header zu veralten und schließlich zu entfernen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
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
  - : Die Anzahl der Sekunden nach Empfang des `Expect-CT` Header-Feldes, während der der Benutzeragent den Host der empfangenen Nachricht als bekannten `Expect-CT` Host betrachten sollte.

    Wenn ein Cache einen Wert erhält, der größer ist als er darstellen kann, oder wenn eine seiner nachfolgenden Berechnungen überläuft, wird der Cache diesen Wert entweder als 2.147.483.648 (2^31) oder als die größte positive Ganzzahl betrachten, die er darstellen kann.

- `report-uri="<uri>"` {{optional_inline}}
  - : Die URI, an die der Benutzeragent `Expect-CT` Fehler melden soll.

    Wenn diese zusammen mit der `enforce` Direktive vorhanden ist, wird die Konfiguration als "enforce-and-report" Konfiguration bezeichnet, die dem Benutzeragenten signalisiert, dass die Einhaltung der Certificate Transparency-Richtlinie sowohl durchgesetzt als auch Verstöße gemeldet werden sollen.

- `enforce` {{optional_inline}}
  - : Signalisiert dem Benutzeragenten, dass die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt werden soll (anstatt nur die Einhaltung zu melden) und dass der Benutzeragent zukünftige Verbindungen ablehnen sollte, die gegen seine Certificate Transparency-Richtlinie verstoßen.

    Wenn sowohl die `enforce` Direktive als auch die `report-uri` Direktive vorhanden sind, wird die Konfiguration als "enforce-and-report" Konfiguration bezeichnet, die dem Benutzeragenten signalisiert, dass die Einhaltung der Certificate Transparency-Richtlinie sowohl durchgesetzt als auch Verstöße gemeldet werden sollen.

## Beispiel

Das folgende Beispiel spezifiziert die Durchsetzung der Certificate Transparency für 24 Stunden und meldet Verstöße an `foo.example.com`.

```http
Expect-CT: max-age=86400, enforce, report-uri="https://foo.example.com/report"
```

## Anmerkungen

Manuell dem Trust Store hinzugefügte Root-CAs überschreiben und unterdrücken `Expect-CT` Berichte/Durchsetzung.

Browser werden sich keine `Expect-CT`-Richtlinie merken, es sei denn, die Website hat "bewiesen", dass sie ein Zertifikat ausliefern kann, das die Anforderungen der Certificate Transparency erfüllt. Browser implementieren ihr eigenes Vertrauensmodell, welche CT Logs als vertrauenswürdig betrachtet werden, damit das Zertifikat protokolliert worden ist.

Builds von Chrome sind so gestaltet, dass sie die `Expect-CT` Richtlinie 10 Wochen nach dem Build-Datum der Installation nicht mehr durchsetzen.

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
