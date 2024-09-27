---
title: Expect-CT
slug: Web/HTTP/Headers/Expect-CT
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{HTTPSidebar}}{{Deprecated_Header}}

Der `Expect-CT`-Header ermöglicht es Websites, die Berichterstattung und/oder Durchsetzung von [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)-Anforderungen zu aktivieren. Certificate Transparency (CT) soll verhindern, dass die Verwendung von falsch ausgestellten Zertifikaten für diese Website unbemerkt bleibt.

Nur Google Chrome und andere Chromium-basierte Browser haben `Expect-CT` implementiert, und Chromium hat den Header ab Version 107 als veraltet markiert, da Chromium jetzt CT standardmäßig durchsetzt. Siehe das [Chrome Platform Status](https://chromestatus.com/feature/6244547273687040) Update.

CT-Anforderungen können durch einen der folgenden Mechanismen erfüllt werden:

- X.509v3-Zertifikaterweiterung, die das Einbetten von signierten Zertifikatzeitstempeln, ausgestellt von individuellen Protokollen, erlaubt. Die meisten online verwendeten TLS-Zertifikate, die von öffentlich vertrauenswürdigen CAs ausgestellt werden, enthalten eingebettetes CT.
- Eine TLS-Erweiterung vom Typ `signed_certificate_timestamp`, die während des Handshakes gesendet wird
- Unterstützung von OCSP-Stapling (d.h. die `status_request` TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList`

> [!NOTE]
> Wenn eine Website den `Expect-CT`-Header aktiviert, fordert sie, dass der Browser überprüft, dass jedes Zertifikat für diese Website in **[öffentlichen CT-Protokollen](https://github.com/google/certificate-transparency-community-site/blob/master/docs/google/known-logs.md)** erscheint.

> [!NOTE]
> Browser **ignorieren** den `Expect-CT`-Header über HTTP; der Header hat nur Auswirkungen auf HTTPS-Verbindungen.

> [!NOTE]
> Der `Expect-CT` ist größtenteils seit Juni 2021 veraltet. Seit Mai 2018 sollen alle neuen TLS-Zertifikate standardmäßig SCTs unterstützen. Zertifikate, die vor März 2018 ausgestellt wurden, durften eine Laufzeit von 39 Monaten haben, sodass sie im Juni 2021 abgelaufen waren. Chromium plant, den `Expect-CT`-Header abzusetzen und ihn schließlich zu entfernen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Response header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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

  - : Die Anzahl der Sekunden nach Empfang des `Expect-CT`-Header-Feldes, während derer der Benutzeragent den Host der empfangenen Nachricht als bekannten `Expect-CT`-Host betrachten soll.

    Wenn ein Cache einen Wert erhält, der größer ist, als er darstellen kann, oder wenn eine seiner nachfolgenden Berechnungen überläuft, betrachtet der Cache diesen Wert entweder als 2,147,483,648 (2^31) oder als die größte positive ganze Zahl, die er darstellen kann.

- `report-uri="<uri>"` {{optional_inline}}

  - : Die URI, an die der Benutzeragent `Expect-CT`-Fehler melden soll.

    Wenn vorhanden zusammen mit der `enforce`-Richtlinie, wird die Konfiguration als "enforce-and-report"-Konfiguration bezeichnet, die dem Benutzeragent signalisiert, dass die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt werden soll _und_ dass Verstöße gemeldet werden sollen.

- `enforce` {{optional_inline}}

  - : Signalisiert dem Benutzeragent, dass die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt werden soll (anstatt nur die Einhaltung zu melden) und dass der Benutzeragent zukünftige Verbindungen ablehnen soll, die gegen seine Certificate Transparency-Richtlinie verstoßen.

    Wenn sowohl die `enforce`-Richtlinie als auch die `report-uri`-Richtlinie vorhanden sind, wird die Konfiguration als "enforce-and-report"-Konfiguration bezeichnet, die dem Benutzeragent signalisiert, dass die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt werden soll und dass Verstöße gemeldet werden sollen.

## Beispiel

Das folgende Beispiel gibt die Durchsetzung von Certificate Transparency für 24 Stunden an und meldet Verstöße an `foo.example.com`.

```http
Expect-CT: max-age=86400, enforce, report-uri="https://foo.example.com/report"
```

## Anmerkungen

Manuell zum Trust Store hinzugefügte Root-CAs überschreiben und unterdrücken `Expect-CT`-Berichte/-Durchsetzung.

Browser werden sich eine `Expect-CT`-Richtlinie nicht merken, es sei denn, die Website hat "bewiesen", dass sie ein Zertifikat bereitstellen kann, das die Anforderungen der Certificate Transparency erfüllt. Browser implementieren ihr eigenes Vertrauensmodell bezüglich der CT-Protokolle, die als vertrauenswürdig angesehen werden, damit das Zertifikat protokolliert wurde.

Builds von Chrome sind so konzipiert, dass sie die `Expect-CT`-Richtlinie 10 Wochen nach dem Build-Datum der Installation nicht mehr durchsetzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
