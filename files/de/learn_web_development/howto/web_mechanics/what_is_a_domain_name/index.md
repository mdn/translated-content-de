---
title: Was ist ein Domain-Name?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Zuerst sollten Sie wissen,
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
          >wie das Internet funktioniert</a
        >
        und verstehen,
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL"
          >was URLs sind</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, was Domain-Namen sind, wie sie funktionieren und warum sie wichtig sind.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Domain-Namen sind ein wichtiger Teil der Internetinfrastruktur. Sie bieten eine menschenlesbare Adresse für jeden Webserver, der im Internet verfügbar ist.

Jeder mit dem Internet verbundene Computer kann durch eine öffentliche {{Glossary("IP_Address", "IP-Adresse")}} erreicht werden, entweder eine IPv4-Adresse (z.B. `192.0.2.172`) oder eine IPv6-Adresse (z.B. `2001:db8:8b73:0000:0000:8a2e:0370:1337`).

Computer können solche Adressen leicht verarbeiten, aber Menschen haben Schwierigkeiten herauszufinden, wer den Server betreibt oder welchen Dienst die Webseite anbietet. IP-Adressen sind schwer zu merken und können sich im Laufe der Zeit ändern.

Um all diese Probleme zu lösen, verwenden wir menschenlesbare Adressen, die Domain-Namen genannt werden.

## Ein tieferer Einblick

### Struktur von Domain-Namen

Ein Domain-Name hat eine einfache Struktur, die aus mehreren Teilen besteht (es kann auch nur ein Teil sein, oder zwei, drei…), die durch Punkte getrennt sind und **von rechts nach links gelesen werden**:

![Anatomie des MDN-Domain-Namens](structure.png)

Jeder dieser Teile liefert spezifische Informationen über den gesamten Domain-Namen.

- {{Glossary("TLD", "TLD")}} (Top-Level Domain).

  - TLDs informieren Benutzer über den allgemeinen Zweck des Dienstes hinter dem Domain-Namen. Die allgemeinsten TLDs (`.com`, `.org`, `.net`) erfordern nicht, dass Webdienste bestimmte Kriterien erfüllen, aber einige TLDs erzwingen strengere Richtlinien, sodass klarer ist, was ihr Zweck ist. Zum Beispiel:

    - Lokale TLDs wie `.us`, `.fr` oder `.se` können verlangen, dass der Dienst in einer bestimmten Sprache bereitgestellt oder in einem bestimmten Land gehostet wird — sie sollen eine Ressource in einer bestimmten Sprache oder einem bestimmten Land anzeigen.
    - TLDs, die `.gov` enthalten, dürfen nur von Regierungsbehörden verwendet werden.
    - Die `.edu` TLD ist ausschließlich für Bildungs- und akademische Institutionen gedacht.

    TLDs können sowohl Sonder- als auch lateinische Zeichen enthalten. Die maximale Länge einer TLD beträgt 63 Zeichen, obwohl die meisten etwa 2–3 Zeichen lang sind.

    Die vollständige Liste der TLDs wird von [ICANN verwaltet](https://www.icann.org/resources/pages/tlds-2012-02-25-en).

- Label (oder Komponente)

  - Die Labels folgen auf die TLD. Ein Label ist eine nicht case-sensitive Zeichenfolge von einem bis dreiundsechzig Zeichen Länge, die nur die Buchstaben `A` bis `Z`, Ziffern `0` bis `9` und das Zeichen `-` enthält (das nicht das erste oder letzte Zeichen im Label sein darf). `a`, `97` und `hello-strange-person-16-how-are-you` sind alles gültige Beispiele für Labels.

    Das direkt vor der TLD befindliche Label wird auch als _Secondary Level Domain_ (SLD) bezeichnet.

    Ein Domain-Name kann viele Labels (oder Komponenten) haben. Es ist weder verpflichtend noch notwendig, 3 Labels zu haben, um einen Domain-Namen zu bilden. Beispielsweise ist [informatics.ed.ac.uk](https://informatics.ed.ac.uk/) ein gültiger Domain-Name. Für jede Domain, die Sie kontrollieren (z.B. [mozilla.org](https://www.mozilla.org/en-US/)), können Sie "Subdomains" mit unterschiedlichen Inhalten erstellen, die jeweils an unterschiedlichen Orten gehostet sind, wie [developer.mozilla.org](/), [support.mozilla.org](https://support.mozilla.org/) oder [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).

### Einen Domain-Namen kaufen

#### Wer besitzt einen Domain-Namen?

Sie können keinen "Domain-Namen kaufen". Dadurch wird sichergestellt, dass nicht genutzte Domain-Namen schließlich wieder verfügbar werden, um von jemand anderem genutzt zu werden. Wären alle Domain-Namen gekauft, wäre das Web schnell von ungenutzten, gesperrten Domain-Namen gefüllt, die niemand verwenden könnte.

Stattdessen zahlen Sie für das Recht, einen Domain-Namen für ein oder mehrere Jahre zu verwenden. Sie können Ihr Recht verlängern, und Ihre Verlängerung hat Vorrang vor den Anträgen anderer. Aber Sie besitzen den Domain-Namen nie.

Unternehmen, die als Registrare bezeichnet werden, nutzen Domain-Name-Register, um technische und administrative Informationen zu verfolgen, die Sie mit Ihrem Domain-Namen verbinden.

> [!NOTE]
> In einigen Fällen wird ein Domain-Name möglicherweise nicht von einem Registrar verfolgt. Zum Beispiel wird jeder Domain-Name unter `.fire` von Amazon verwaltet.

#### Einen verfügbaren Domain-Namen finden

Um herauszufinden, ob ein bestimmter Domain-Name verfügbar ist,

- Besuchen Sie die Website eines Domain-Name-Registrars. Die meisten von ihnen bieten einen "whois"-Dienst an, der Ihnen sagt, ob ein Domain-Name verfügbar ist.
- Alternativ, wenn Sie ein System mit einer integrierten Shell verwenden, geben Sie ein `whois`-Befehl dort ein, wie hier für `mozilla.org` gezeigt:

  ```bash
  whois mozilla.org
  ```

  Dies wird die folgende Ausgabe erzeugen:

  ```plain
  Domain Name:MOZILLA.ORG
  Domain ID: D1409563-LROR
  Creation Date: 1998-01-24T05:00:00Z
  Updated Date: 2013-12-08T01:16:57Z
  Registry Expiry Date: 2015-01-23T05:00:00Z
  Sponsoring Registrar:MarkMonitor Inc. (R37-LROR)
  Sponsoring Registrar IANA ID: 292
  WHOIS Server:
  Referral URL:
  Domain Status: clientDeleteProhibited
  Domain Status: clientTransferProhibited
  Domain Status: clientUpdateProhibited
  Registrant ID:mmr-33684
  Registrant Name:DNS Admin
  Registrant Organization:Mozilla Foundation
  Registrant Street: 650 Castro St Ste 300
  Registrant City:Mountain View
  Registrant State/Province:CA
  Registrant Postal Code:94041
  Registrant Country:US
  Registrant Phone:+1.6509030800
  ```

Wie Sie sehen können, kann ich `mozilla.org` nicht registrieren, da die Mozilla Foundation es bereits registriert hat.

Andererseits, sehen wir, ob ich `afunkydomainname.org` registrieren könnte:

```bash
whois afunkydomainname.org
```

Dies wird die folgende Ausgabe erzeugen (zum Zeitpunkt des Schreibens):

```plain
NOT FOUND
```

Wie Sie sehen können, existiert die Domain nicht in der `whois`-Datenbank, daher könnten wir fragen, ob wir sie registrieren dürfen. Gut zu wissen!

#### Einen Domain-Namen erhalten

Der Prozess ist ziemlich einfach:

1. Besuchen Sie die Website eines Registrars.
2. Normalerweise gibt es einen prominenten "Einen Domain-Namen erhalten" Aufruf zum Handeln. Klicken Sie darauf.
3. Füllen Sie das Formular mit allen erforderlichen Details aus. Achten Sie besonders darauf, dass Sie Ihren gewünschten Domain-Namen nicht falsch geschrieben haben. Sobald er bezahlt ist, ist es zu spät!
4. Der Registrar wird Sie informieren, wenn der Domain-Name ordnungsgemäß registriert ist. Innerhalb weniger Stunden werden alle DNS-Server Ihre DNS-Informationen erhalten haben.

> [!NOTE]
> In diesem Prozess fragt der Registrar nach Ihrer realen Adresse. Stellen Sie sicher, dass Sie diese korrekt ausfüllen, da Registrare in einigen Ländern gezwungen sein können, die Domain zu schließen, wenn sie keine gültige Adresse bereitstellen können.

#### DNS-Aktualisierung

DNS-Datenbanken werden auf jedem DNS-Server weltweit gespeichert, und all diese Server beziehen sich auf einige spezielle Server, die als "authoritative name servers" oder "top-level DNS servers" bezeichnet werden — dies sind die Boss-Server, die das System verwalten.

Wann immer Ihr Registrar Informationen für eine bestimmte Domain erstellt oder aktualisiert, müssen diese Informationen in jeder DNS-Datenbank aktualisiert werden. Jeder DNS-Server, der über eine bestimmte Domain Bescheid weiß, speichert die Informationen eine gewisse Zeit, bevor sie automatisch ungültig werden und dann aktualisiert werden (der DNS-Server fragt einen autoritativen Server an und holt die aktualisierten Informationen von ihm). Daher dauert es eine Weile, bis DNS-Server, die über diesen Domain-Namen Bescheid wissen, die aktuellen Informationen erhalten.

### Wie funktioniert eine DNS-Anfrage?

Wie wir bereits gesehen haben, ist es einfacher, einen Domain-Namen als eine IP-Adresse in Ihren Browser einzugeben, wenn Sie eine Webseite anzeigen möchten. Schauen wir uns den Prozess an:

1. Geben Sie `mozilla.org` in die Adressleiste Ihres Browsers ein.
2. Ihr Browser fragt Ihren Computer, ob er bereits die IP-Adresse kennt, die durch diesen Domain-Namen identifiziert wird (unter Verwendung eines lokalen DNS Caches). Wenn er dies tut, wird der Name in die IP-Adresse übersetzt und der Browser verhandelt Inhalte mit dem Webserver. Ende der Geschichte.
3. Wenn Ihr Computer nicht weiß, welche IP hinter dem Namen `mozilla.org` steckt, fragt er einen DNS-Server, dessen Aufgabe es ist, Ihrem Computer mitzuteilen, welche IP-Adresse jedem registrierten Domain-Namen entspricht.
4. Jetzt, da der Computer die benötigte IP-Adresse kennt, kann Ihr Browser Inhalte mit dem Webserver verhandeln.

![Erklärung der Schritte, die für die Durchführung einer DNS-Anfrage erforderlich sind](2014-10-dns-request2.png)

## Nächste Schritte

Okay, wir haben viel über Prozesse und Architektur gesprochen. Zeit, weiterzumachen.

- Wenn Sie praktisch arbeiten möchten, ist jetzt ein guter Zeitpunkt, mit dem Design zu beginnen und [die Anatomie einer Webseite](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts) zu erkunden.
- Es ist auch erwähnenswert, dass einige Aspekte des Baus einer Website Geld kosten. Bitte beziehen Sie sich auf [wie viel es kostet, eine Website zu erstellen](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost).
- Oder lesen Sie mehr über [Domain-Namen](https://en.wikipedia.org/wiki/Domain_name) auf Wikipedia.
- Sie finden auch [hier](https://howdns.works/) eine unterhaltsame und farbenfrohe Erklärung, wie DNS funktioniert.
