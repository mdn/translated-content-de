---
title: Was ist ein Domainname?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Zuerst müssen Sie wissen,
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
        Lernen, was Domainnamen sind, wie sie funktionieren und warum sie wichtig sind.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Domainnamen sind ein wesentlicher Bestandteil der Internetinfrastruktur. Sie bieten eine menschenlesbare Adresse für jeden Webserver, der im Internet verfügbar ist.

Jeder mit dem Internet verbundene Computer kann über eine öffentliche {{Glossary("IP_Address", "IP-Adresse")}} erreicht werden, entweder eine IPv4-Adresse (z.B. `192.0.2.172`) oder eine IPv6-Adresse (z.B. `2001:db8:8b73:0000:0000:8a2e:0370:1337`).

Computer können solche Adressen leicht verarbeiten, aber Menschen fällt es schwer, herauszufinden, wer den Server betreibt oder welchen Service die Website anbietet. IP-Adressen sind schwer zu merken und können sich im Laufe der Zeit ändern.

Um all diese Probleme zu lösen, verwenden wir menschenlesbare Adressen, die Domainnamen genannt werden.

## Detaillierter Einblick

### Struktur von Domainnamen

Ein Domainname hat eine einfache Struktur, die aus mehreren Teilen (es könnte nur ein Teil sein, zwei, drei…) besteht, die durch Punkte getrennt sind und von rechts nach links **gelesen** werden:

![Anatomie des MDN Domainnamens](structure.png)

Jeder dieser Teile liefert spezifische Informationen über den gesamten Domainnamen.

- {{Glossary("TLD", "TLD")}} (Top-Level-Domain).

  - : TLDs geben den Benutzern den allgemeinen Zweck des Dienstes hinter dem Domainnamen an. Die allgemeinsten TLDs (`.com`, `.org`, `.net`) erfordern nicht, dass Webdienste bestimmte Kriterien erfüllen, aber einige TLDs setzen strengere Richtlinien durch, damit klarer wird, wofür sie da sind. Zum Beispiel:

    - Lokale TLDs wie `.us`, `.fr` oder `.se` können erfordern, dass der Dienst in einer bestimmten Sprache bereitgestellt oder in einem bestimmten Land gehostet wird — sie sollen auf eine Ressource in einer bestimmten Sprache oder einem bestimmten Land hinweisen.
    - TLDs, die `.gov` enthalten, sind nur für den Gebrauch durch Regierungsabteilungen erlaubt.
    - Die `.edu` TLD ist nur für Bildungs- und akademische Institutionen bestimmt.

    TLDs können sowohl spezielle als auch lateinische Zeichen enthalten. Die maximale Länge einer TLD beträgt 63 Zeichen, obwohl die meisten etwa 2–3 sind.

    Die vollständige Liste der TLDs wird von [ICANN gepflegt](https://www.icann.org/en/contracted-parties/registry-operators/resources/list-of-top-level-domains).

- Label (oder Komponente)

  - : Die Labels folgen der TLD. Ein Label ist eine nicht case-sensitive Zeichenfolge von eins bis dreiundsechzig Zeichen in der Länge, die nur die Buchstaben `A` bis `Z`, die Ziffern `0` bis `9` und das Zeichen '-' enthalten darf (dies darf jedoch nicht das erste oder letzte Zeichen im Label sein). `a`, `97` und `hello-strange-person-16-how-are-you` sind alle Beispiele für gültige Labels.

    Das Label, das sich direkt vor der TLD befindet, wird auch als _Secondary Level Domain_ (SLD) bezeichnet.

    Ein Domainname kann viele Labels (oder Komponenten) haben. Es ist weder zwingend noch notwendig, 3 Labels zu haben, um einen Domainnamen zu bilden. Beispielsweise ist [informatics.ed.ac.uk](https://informatics.ed.ac.uk/) ein gültiger Domainname. Für jede Domain, die Sie kontrollieren (z.B. [mozilla.org](https://www.mozilla.org/en-US/)), können Sie "Subdomains" mit unterschiedlichem Inhalt erstellen, die an verschiedenen Orten liegen, wie [developer.mozilla.org](/), [support.mozilla.org](https://support.mozilla.org/) oder [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).

### Einen Domainnamen kaufen

#### Wem gehört ein Domainname?

Sie können einen Domainnamen nicht "kaufen". Dies ist so, dass ungenutzte Domainnamen schließlich wieder von jemand anderem verwendet werden können. Wenn jeder Domainname gekauft wäre, würde das Web schnell mit ungenutzten und gesperrten Domainnamen gefüllt sein.

Stattdessen zahlen Sie für das Recht, einen Domainnamen für ein oder mehrere Jahre zu nutzen. Sie können Ihr Recht verlängern, und Ihre Verlängerung hat Vorrang vor den Bewerbungen anderer Leute. Aber Sie besitzen niemals den Domainnamen.

Unternehmen, die als Registrare bezeichnet werden, verwenden Domainname-Register, um technische und administrative Informationen zu verfolgen, die Sie mit Ihrem Domainnamen verbinden.

> [!NOTE]
> Für einige Domainnamen ist möglicherweise nicht ein Registrar zuständig, um den Überblick zu behalten. Beispielsweise wird jeder Domainname unter `.fire` von Amazon verwaltet.

#### Einen verfügbaren Domainnamen finden

Um herauszufinden, ob ein bestimmter Domainname verfügbar ist,

- Gehen Sie auf die Website eines Domainname-Registrars. Die meisten von ihnen bieten einen "whois"-Dienst an, der Ihnen sagt, ob ein Domainname verfügbar ist.
- Alternativ, wenn Sie ein System mit einer integrierten Shell verwenden, geben Sie einen `whois`-Befehl ein, wie hier für `mozilla.org` gezeigt:

  ```bash
  whois mozilla.org
  ```

  Dies wird folgendes ausgeben:

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

Wie Sie sehen, kann ich `mozilla.org` nicht registrieren, da die Mozilla Foundation ihn bereits registriert hat.

Sehen wir uns andererseits an, ob ich `afunkydomainname.org` registrieren könnte:

```bash
whois afunkydomainname.org
```

Dies wird folgendes ausgeben (zum Zeitpunkt des Schreibens):

```plain
NOT FOUND
```

Wie Sie sehen, existiert die Domain nicht in der `whois`-Datenbank, also könnten wir beantragen, sie zu registrieren. Gut zu wissen!

#### Einen Domainnamen bekommen

Der Prozess ist ziemlich einfach:

1. Gehen Sie auf die Website eines Registrars.
2. In der Regel gibt es einen prominenten "Get a domain name" Call to Action. Klicken Sie darauf.
3. Füllen Sie das Formular mit allen erforderlichen Details aus. Stellen Sie insbesondere sicher, dass Sie Ihren gewünschten Domainnamen nicht falsch geschrieben haben. Sobald er bezahlt ist, ist es zu spät!
4. Der Registrar wird Sie benachrichtigen, wenn der Domainname ordnungsgemäß registriert wurde. Innerhalb weniger Stunden werden alle DNS-Server Ihre DNS-Informationen erhalten haben.

> [!NOTE]
> In diesem Prozess fragt der Registrar nach Ihrer realen Adresse. Stellen Sie sicher, dass Sie sie korrekt ausfüllen, da in einigen Ländern die Registrare gezwungen sein können, die Domain zu schließen, wenn sie keine gültige Adresse angeben können.

#### DNS-Aktualisierungen

DNS-Datenbanken werden auf jedem DNS-Server weltweit gespeichert, und alle diese Server beziehen sich auf einige spezielle Server, die "autoritative Nameserver" oder "Top-Level-DNS-Server" genannt werden — das sind wie die Boss-Server, die das System verwalten.

Wann immer Ihr Registrar Informationen für eine bestimmte Domain erstellt oder aktualisiert, müssen die Informationen in jeder DNS-Datenbank aktualisiert werden. Jeder DNS-Server, der von einer bestimmten Domain weiß, speichert die Informationen für einige Zeit, bevor sie automatisch ungültig werden und dann aktualisiert werden (der DNS-Server fragt einen autoritativen Server ab und ruft die aktualisierten Informationen von diesem ab). Daher dauert es einige Zeit, bis DNS-Server, die von diesem Domainnamen wissen, die aktuellen Informationen erhalten.

### Wie funktioniert eine DNS-Anfrage?

Wie bereits erwähnt, ist es, wenn Sie eine Webseite in Ihrem Browser anzeigen möchten, einfacher, einen Domainnamen als eine IP-Adresse einzugeben. Werfen wir einen Blick auf den Prozess:

1. Geben Sie `mozilla.org` in die Adressleiste Ihres Browsers ein.
2. Ihr Browser fragt Ihren Computer, ob er die IP-Adresse, die von diesem Domainnamen identifiziert wird, bereits erkennt (unter Verwendung eines lokalen DNS-Caches). Wenn dies der Fall ist, wird der Name in die IP-Adresse übersetzt und der Browser verhandelt Inhalte mit dem Webserver. Geschichte zu Ende.
3. Wenn Ihr Computer nicht weiß, welche IP sich hinter dem Namen `mozilla.org` verbirgt, fragt er einen DNS-Server, dessen Aufgabe es ist, Ihrem Computer mitzuteilen, welche IP-Adresse mit jedem registrierten Domainnamen übereinstimmt.
4. Jetzt, da der Computer die angeforderte IP-Adresse kennt, kann Ihr Browser Inhalte mit dem Webserver verhandeln.

![Erläuterung der Schritte für die Ausführung einer DNS-Anfrage](2014-10-dns-request2.png)

## Nächste Schritte

Okay, wir haben viel über Prozesse und Architektur gesprochen. Zeit, weiterzumachen.

- Wenn Sie praktisch arbeiten möchten, ist jetzt ein guter Zeitpunkt, sich mit dem Design zu beschäftigen und [die Anatomie einer Webseite](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts) zu erkunden.
- Es ist auch erwähnenswert, dass einige Aspekte des Aufbaus einer Website Geld kosten. Bitte beachten Sie [wie viel es kostet, eine Website zu erstellen](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost).
- Oder lesen Sie mehr über [Domainnamen](https://en.wikipedia.org/wiki/Domain_name) auf Wikipedia.
- Sie können auch [hier](https://howdns.works/) eine lustige und farbenfrohe Erklärung finden, wie DNS funktioniert.
