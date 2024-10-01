---
title: Expect-CT
slug: Web/HTTP/Headers/Expect-CT
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{HTTPSidebar}}{{Deprecated_Header}}

Der `Expect-CT`-Header ermöglicht es Websites, sich für das Melden und/oder die Durchsetzung von [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)-Anforderungen anzumelden. Certificate Transparency (CT) zielt darauf ab, die Nutzung von falsch ausgestellten Zertifikaten für diese Website unentdeckt zu verhindern.

Nur Google Chrome und andere auf Chromium basierende Browser haben `Expect-CT` implementiert, und Chromium hat den Header ab Version 107 veraltet erklärt, da Chromium jetzt CT standardmäßig erzwingt. Siehe das [Chrome Platform Status](https://chromestatus.com/feature/6244547273687040)-Update.

CT-Anforderungen können über einen der folgenden Mechanismen erfüllt werden:

- X.509v3-Zertifikats-Erweiterung, um das Einbetten von signierten Zertifikatszeitstempeln zu ermöglichen, die von einzelnen Logs ausgestellt wurden. Die meisten TLS-Zertifikate, die von öffentlich vertrauenswürdigen CAs ausgestellt und online verwendet werden, enthalten eingebettetes CT.
- Eine TLS-Erweiterung vom Typ `signed_certificate_timestamp`, die während des Handshakes gesendet wird
- Unterstützung von OCSP Stapling (das heißt, die `status_request` TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList`

> [!NOTE]
> Wenn eine Website den `Expect-CT`-Header aktiviert, bittet sie den Browser zu überprüfen, ob ein Zertifikat für diese Website in **[öffentlichen CT-Logs](https://github.com/google/certificate-transparency-community-site/blob/master/docs/google/known-logs.md)** erscheint.

> [!NOTE]
> Browser **ignorieren** den `Expect-CT`-Header über HTTP; der Header hat nur Auswirkungen auf HTTPS-Verbindungen.

> [!NOTE]
> Der `Expect-CT` ist größtenteils seit Juni 2021 obsolet. Seit Mai 2018 wird erwartet, dass alle neuen TLS-Zertifikate standardmäßig SCTs unterstützen. Zertifikate, die vor März 2018 ausgestellt wurden, durften eine Lebensdauer von 39 Monaten haben, sodass sie im Juni 2021 abgelaufen sind. Chromium plant, den `Expect-CT`-Header veraltet zu machen und ihn schließlich zu entfernen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>ja</td>
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

  - : Die Anzahl der Sekunden nach Empfang des `Expect-CT`-Header-Feldes, in denen der Benutzeragent den Host der empfangenen Nachricht als bekannten `Expect-CT`-Host betrachten sollte.

    Wenn ein Cache einen Wert empfängt, der größer ist, als er darstellen kann, oder wenn eine seiner nachfolgenden Berechnungen einen Überlauf verursacht, betrachtet der Cache diesen Wert entweder als 2.147.483.648 (2^31) oder als die größte positive ganze Zahl, die er darstellen kann.

- `report-uri="<uri>"` {{optional_inline}}

  - : Die URI, an die der Benutzeragent `Expect-CT`-Fehler melden sollte.

    Wenn zusammen mit der `enforce`-Direktive vorhanden, wird die Konfiguration als "enforce-and-report"-Konfiguration bezeichnet, die dem Benutzeragent signalisiert, dass die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt werden und Verstöße gemeldet werden sollten.

- `enforce` {{optional_inline}}

  - : Signalisiert dem Benutzeragenten, dass die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt werden sollte (anstatt nur die Einhaltung zu melden) und dass der Benutzeragent zukünftige Verbindungen ablehnen sollte, die gegen seine Certificate Transparency-Richtlinie verstoßen.

    Wenn sowohl die `enforce`-Direktive als auch die `report-uri`-Direktive vorhanden sind, wird die Konfiguration als "enforce-and-report"-Konfiguration bezeichnet, die dem Benutzeragent sowohl signalisiert, dass die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt werden sollte, als auch dass Verstöße gemeldet werden sollten.

## Beispiel

Das folgende Beispiel spezifiziert die Durchsetzung von Certificate Transparency für 24 Stunden und meldet Verstöße an `foo.example.com`.

```http
Expect-CT: max-age=86400, enforce, report-uri="https://foo.example.com/report"
```

## Hinweise

Manuell dem Vertrauensspeicher hinzugefügte Root-CAs überschreiben und unterdrücken `Expect-CT`-Berichte/Durchsetzungen.

Browser werden sich keine `Expect-CT`-Richtlinie merken, es sei denn, die Website hat 'bewiesen', dass sie ein Zertifikat bereitstellen kann, das die Anforderungen der Zertifikatstransparenz erfüllt. Browser implementieren ihr eigenes Vertrauensmodell in Bezug darauf, welche CT-Logs als vertrauenswürdig angesehen werden, damit das Zertifikat protokolliert wurde.

Builds von Chrome sind so konzipiert, dass sie die `Expect-CT`-Richtlinie 10 Wochen nach dem Build-Datum der Installation nicht mehr durchsetzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
