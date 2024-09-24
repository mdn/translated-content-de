---
title: Expect-CT
slug: Web/HTTP/Headers/Expect-CT
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{HTTPSidebar}}{{Deprecated_Header}}

Der `Expect-CT` Header ermöglicht es Websites, das Reporting und/oder die Durchsetzung der Anforderungen für [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) zu aktivieren. Certificate Transparency (CT) zielt darauf ab, den Einsatz von unberechtigt ausgestellten Zertifikaten für diese Website unbemerkt zu verhindern.

Nur Google Chrome und andere auf Chromium basierende Browser haben `Expect-CT` implementiert, und Chromium hat den Header ab Version 107 als veraltet erklärt, da Chromium jetzt CT standardmäßig durchsetzt. Siehe das Update im [Chrome Platform Status](https://chromestatus.com/feature/6244547273687040).

CT-Anforderungen können durch einen der folgenden Mechanismen erfüllt werden:

- X.509v3 Zertifikaterweiterung, um das Einbetten von signierten Zertifikatstimestamps zu ermöglichen, die von einzelnen Logs ausgestellt wurden. Die meisten online genutzten TLS-Zertifikate, die von allgemein anerkannten CAs ausgestellt wurden, enthalten eingebettetes CT.
- Eine TLS-Erweiterung vom Typ `signed_certificate_timestamp`, die während des Handshakes gesendet wird.
- Unterstützung von OCSP Stapling (d.h. die TLS-Erweiterung `status_request`) und Bereitstellung einer `SignedCertificateTimestampList`

> [!NOTE]
> Wenn eine Website den `Expect-CT` Header aktiviert, fordert sie den Browser auf, zu überprüfen, dass jedes Zertifikat für diese Website in **[öffentlichen CT-Logs](https://github.com/google/certificate-transparency-community-site/blob/master/docs/google/known-logs.md)** erscheint.

> [!NOTE]
> Browser **ignorieren** den `Expect-CT` Header über HTTP; der Header hat nur Auswirkungen auf HTTPS-Verbindungen.

> [!NOTE]
> Der `Expect-CT` Header ist seit Juni 2021 weitgehend obsolet. Seit Mai 2018 wird erwartet, dass alle neuen TLS-Zertifikate standardmäßig SCTs unterstützen. Zertifikate, die vor März 2018 ausgestellt wurden, durften eine Laufzeit von 39 Monaten haben, so dass sie im Juni 2021 abgelaufen waren. Chromium plant, den `Expect-CT` Header als veraltet zu kennzeichnen und irgendwann zu entfernen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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

  - : Die Anzahl der Sekunden nach Empfang des `Expect-CT` Header-Feldes, während derer der Benutzeragent den Host der empfangenen Nachricht als bekannten `Expect-CT` Host betrachten soll.

    Wenn ein Cache einen Wert empfängt, der größer ist, als er darstellen kann, oder wenn eine seiner späteren Berechnungen überläuft, wird der Cache diesen Wert als entweder 2.147.483.648 (2^31) oder als den größten positiven Integer, den er darstellen kann, ansehen.

- `report-uri="<uri>"` {{optional_inline}}

  - : Die URI, wohin der Benutzeragent `Expect-CT` Fehler melden soll.

    Wenn diese Direktive zusammen mit der `enforce` Direktive vorhanden ist, wird die Konfiguration als "enforce-and-report" Konfiguration bezeichnet, die dem Benutzeragent signalisiert, dass sowohl die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt als auch Verstöße gemeldet werden sollen.

- `enforce` {{optional_inline}}

  - : Signalisiert dem Benutzeragent, dass die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt werden soll (anstatt nur die Einhaltung zu melden) und dass der Benutzeragent zukünftige Verbindungen ablehnen soll, die gegen seine Certificate Transparency-Richtlinie verstoßen.

    Wenn sowohl die `enforce` Direktive als auch die `report-uri` Direktive vorhanden sind, wird die Konfiguration als "enforce-and-report" Konfiguration bezeichnet, die dem Benutzeragent signalisiert, dass sowohl die Einhaltung der Certificate Transparency-Richtlinie durchgesetzt als auch Verstöße gemeldet werden sollen.

## Beispiel

Das folgende Beispiel spezifiziert die Durchsetzung der Certificate Transparency für 24 Stunden und meldet Verstöße an `foo.example.com`.

```http
Expect-CT: max-age=86400, enforce, report-uri="https://foo.example.com/report"
```

## Anmerkungen

Root-CAs, die manuell zum Vertrauensspeicher hinzugefügt wurden, überschreiben und unterdrücken `Expect-CT` Berichte/Durchsetzungen.

Browser werden keine `Expect-CT`-Richtlinie merken, es sei denn, die Website hat 'bewiesen', dass sie ein Zertifikat bereitstellen kann, das die Anforderungen an die Zertifikattransparenz erfüllt. Browser implementieren ihr eigenes Vertrauensmodell in Bezug darauf, welche CT-Logs als vertrauenswürdig gelten, damit das Zertifikat in ihnen protokolliert wurde.

Builds von Chrome sind so konzipiert, dass sie die Durchsetzung der `Expect-CT`-Richtlinie 10 Wochen nach dem Build-Datum der Installation einstellen.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
