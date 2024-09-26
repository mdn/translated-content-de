---
title: Expect-CT
slug: Web/HTTP/Headers/Expect-CT
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{HTTPSidebar}}{{Deprecated_Header}}

Der `Expect-CT` Header ermöglicht es Websites, sich für die Berichterstattung und/oder Durchsetzung von [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) Anforderungen anzumelden. Certificate Transparency (CT) zielt darauf ab, die Verwendung falsch ausgestellter Zertifikate für diese Website unbemerkt zu verhindern.

Nur Google Chrome und andere auf Chromium basierende Browser haben `Expect-CT` implementiert, und Chromium hat den Header ab Version 107 veraltet, da Chromium nun CT standardmäßig durchsetzt. Siehe das Update im [Chrome Platform Status](https://chromestatus.com/feature/6244547273687040).

CT-Anforderungen können durch einen der folgenden Mechanismen erfüllt werden:

- X.509v3-Zertifikaterweiterung, um das Einbetten von signierten Zertifikatszeitschriften zu ermöglichen, die von einzelnen Protokollen ausgestellt werden. Die meisten TLS-Zertifikate, die von öffentlich vertrauenswürdigen CAs ausgestellt und online verwendet werden, enthalten eingebettetes CT.
- Eine TLS-Erweiterung des Typs `signed_certificate_timestamp`, die während des Handshakes gesendet wird
- Unterstützung von OCSP Stapling (das heißt, die `status_request` TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList`

> [!NOTE]
> Wenn eine Website den `Expect-CT` Header aktiviert, fordert sie den Browser auf, zu überprüfen, dass jedes Zertifikat für diese Website in **[öffentlichen CT-Protokollen](https://github.com/google/certificate-transparency-community-site/blob/master/docs/google/known-logs.md)** erscheint.

> [!NOTE]
> Browser **ignorieren** den `Expect-CT` Header über HTTP; der Header hat nur Auswirkungen auf HTTPS-Verbindungen.

> [!NOTE]
> Der `Expect-CT` ist seit Juni 2021 weitgehend obsolet. Seit Mai 2018 wird erwartet, dass alle neuen TLS-Zertifikate standardmäßig SCTs unterstützen. Zertifikate, die vor März 2018 ausgestellt wurden, durften eine Lebensdauer von 39 Monaten haben, sodass sie im Juni 2021 abgelaufen sind. Chromium plant, den `Expect-CT` Header zu veraltet und ihn schließlich zu entfernen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
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

  - : Die Anzahl der Sekunden nach Empfang des `Expect-CT` Header-Felds, während der der User-Agent den Host der empfangenen Nachricht als bekannten `Expect-CT` Host betrachten sollte.

    Wenn ein Cache einen Wert erhält, der größer ist, als er darstellen kann, oder wenn eine seiner nachfolgenden Berechnungen überläuft, wird der Cache diesen Wert entweder als 2,147,483,648 (2^31) oder als die größte positive Zahl, die er darstellen kann, betrachten.

- `report-uri="<uri>"` {{optional_inline}}

  - : Die URI, an die der User-Agent `Expect-CT` Fehler melden soll.

    Wenn zusammen mit der `enforce` Direktive vorhanden, wird die Konfiguration als "enforce-and-report" Konfiguration bezeichnet und signalisiert dem User-Agent sowohl, dass die Einhaltung der Certificate Transparency Richtlinie durchgesetzt werden sollte _und_ dass Verstöße gemeldet werden sollten.

- `enforce` {{optional_inline}}

  - : Signalisiert dem User-Agent, dass die Einhaltung der Certificate Transparency Richtlinie durchgesetzt werden soll (anstatt nur die Einhaltung zu melden) und dass der User-Agent zukünftige Verbindungen ablehnen soll, die gegen seine Certificate Transparency Richtlinie verstoßen.

    Wenn sowohl die `enforce` Direktive als auch die `report-uri` Direktive vorhanden sind, wird die Konfiguration als "enforce-and-report" Konfiguration bezeichnet und signalisiert dem User-Agent sowohl, dass die Einhaltung der Certificate Transparency Richtlinie durchgesetzt werden sollte und dass Verstöße gemeldet werden sollten.

## Beispiel

Das folgende Beispiel spezifiziert die Durchsetzung der Certificate Transparency für 24 Stunden und meldet Verstöße an `foo.example.com`.

```http
Expect-CT: max-age=86400, enforce, report-uri="https://foo.example.com/report"
```

## Anmerkungen

Manuell zugefügte Root-CAs im Truststore überschreiben und unterdrücken `Expect-CT` Berichte/Durchsetzung.

Browser werden keine `Expect-CT` Richtlinie speichern, es sei denn, die Website hat 'bewiesen', dass sie ein Zertifikat bereitstellen kann, das die Anforderungen an die Certificate Transparency erfüllt. Browser implementieren ihr eigenes Vertrauensmodell bezüglich welcher CT-Protokolle als vertrauenswürdig angesehen werden, damit das Zertifikat protokolliert wurde.

Builds von Chrome sind so konzipiert, dass sie die `Expect-CT` Richtlinie 10 Wochen nach dem Build-Datum der Installation nicht mehr durchsetzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
