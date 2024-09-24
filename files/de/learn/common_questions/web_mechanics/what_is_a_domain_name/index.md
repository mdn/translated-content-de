---
title: Was ist ein Domainname?
slug: Learn/Common_questions/Web_mechanics/What_is_a_domain_name
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Zuerst müssen Sie wissen,
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work"
          >wie das Internet funktioniert</a
        >
        und verstehen,
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL"
          >was URLs sind</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        Lernen Sie, was Domainnamen sind, wie sie funktionieren und warum sie wichtig sind.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Domainnamen sind ein wesentlicher Bestandteil der Internetinfrastruktur. Sie bieten eine menschenlesbare Adresse für jeden Webserver, der im Internet verfügbar ist.

Jeder mit dem Internet verbundene Computer kann über eine öffentliche {{Glossary("IP Address")}} erreicht werden, entweder eine IPv4-Adresse (z.B. `192.0.2.172`) oder eine IPv6-Adresse (z.B. `2001:db8:8b73:0000:0000:8a2e:0370:1337`).

Computer können mit solchen Adressen leicht umgehen, aber Menschen haben Schwierigkeiten festzustellen, wer den Server betreibt oder welchen Dienst die Website bietet. IP-Adressen sind schwer zu merken und können sich im Laufe der Zeit ändern.

Um all diese Probleme zu lösen, verwenden wir menschenlesbare Adressen, die Domainnamen genannt werden.

## Vertiefung

### Aufbau von Domainnamen

Ein Domainname hat eine einfache Struktur, die aus mehreren Teilen besteht (es kann nur ein Teil, zwei, drei oder mehr sein), die durch Punkte getrennt sind und **von rechts nach links gelesen werden**:

![Anatomie des MDN-Domainnamens](structure.png)

Jeder dieser Teile liefert spezifische Informationen über den gesamten Domainnamen.

- {{Glossary("TLD")}} (Top-Level-Domain).

  - : TLDs geben den Benutzern den allgemeinen Zweck des Dienstes hinter dem Domainnamen an. Die generischsten TLDs (`.com`, `.org`, `.net`) erfordern nicht, dass Webdienste bestimmte Kriterien erfüllen, aber einige TLDs setzen strengere Richtlinien durch, um klarer zu machen, was ihr Zweck ist. Zum Beispiel:

    - Lokale TLDs wie `.us`, `.fr` oder `.se` können verlangen, dass der Dienst in einer bestimmten Sprache bereitgestellt oder in einem bestimmten Land gehostet wird – sie sollen eine Ressource in einer bestimmten Sprache oder einem bestimmten Land anzeigen.
    - TLDs, die `.gov` enthalten, dürfen nur von Regierungsabteilungen verwendet werden.
    - Die `.edu` TLD ist nur für Bildungs- und akademische Einrichtungen bestimmt.

    TLDs können sowohl spezielle als auch lateinische Zeichen enthalten. Die maximale Länge einer TLD beträgt 63 Zeichen, obwohl die meisten etwa 2–3 Zeichen lang sind.

    Die vollständige Liste der TLDs wird [von ICANN gepflegt](https://www.icann.org/resources/pages/tlds-2012-02-25-en).

- Label (oder Komponente)

  - : Die Labels sind das, was der TLD folgt. Ein Label ist eine nicht-fallunterscheidende Zeichenfolge mit einer Länge von einem bis dreiundsechzig Zeichen, die nur die Buchstaben `A` bis `Z`, die Ziffern `0` bis `9` und das '-' Zeichen enthält (das nicht das erste oder letzte Zeichen im Label sein darf). `a`, `97` und `hello-strange-person-16-how-are-you` sind alles Beispiele für gültige Labels.

    Das Label direkt vor der TLD wird auch _Secondary Level Domain_ (SLD) genannt.

    Ein Domainname kann viele Labels (oder Komponenten) haben. Es ist weder zwingend noch notwendig, um 3 Labels zu haben, um einen Domainnamen zu bilden. Beispielsweise ist [informatics.ed.ac.uk](https://informatics.ed.ac.uk/) ein gültiger Domainname. Für jede Domain, die Sie kontrollieren (z.B. [mozilla.org](https://www.mozilla.org/en-US/)), können Sie „Subdomains“ mit unterschiedlichen Inhalten erstellen, die an jedem Standort verfügbar sind, wie [developer.mozilla.org](/), [support.mozilla.org](https://support.mozilla.org/) oder [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).

### Einen Domainnamen kaufen

#### Wem gehört ein Domainname?

Einen Domainnamen kann man nicht „kaufen“. Dies geschieht, damit ungenutzte Domainnamen irgendwann wieder von jemand anderem verwendet werden können. Wenn jeder Domainname gekauft würde, würde das Web schnell mit ungenutzten Domainnamen überfüllt sein, die gesperrt und von niemandem genutzt werden könnten.

Stattdessen zahlen Sie für das Recht, einen Domainnamen für ein oder mehrere Jahre zu nutzen. Sie können Ihr Nutzungsrecht verlängern, und Ihre Verlängerung hat Vorrang vor den Bewerbungen anderer Personen. Aber Sie besitzen den Domainnamen nie.

Unternehmen, die als Registrare bezeichnet werden, verwenden Domainnamenregister, um technische und administrative Informationen zu speichern, die Sie mit Ihrem Domainnamen verbinden.

> [!NOTE]
> Bei einigen Domainnamen ist es möglicherweise nicht ein Registrar, der für die Nachverfolgung zuständig ist. Beispielsweise wird jeder Domainname unter `.fire` von Amazon verwaltet.

#### Einen verfügbaren Domainnamen finden

Um herauszufinden, ob ein bestimmter Domainname verfügbar ist,

- Gehen Sie zu einer Website eines Domainnamen-Registrars. Die meisten von ihnen bieten einen "whois"-Dienst an, der Ihnen sagt, ob ein Domainname verfügbar ist.
- Alternativ, wenn Sie ein System mit einer integrierten Shell verwenden, geben Sie einen `whois` Befehl darin ein, wie hier für `mozilla.org` gezeigt:

  ```bash
  whois mozilla.org
  ```

  Dies gibt folgendes aus:

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

Andererseits sehen wir, ob ich `afunkydomainname.org` registrieren könnte:

```bash
whois afunkydomainname.org
```

Dies würde folgendes ausgeben (zum Zeitpunkt des Schreibens):

```plain
NOT FOUND
```

Wie Sie sehen können, existiert die Domain nicht in der `whois` Datenbank, also könnten wir darum bitten, sie zu registrieren. Gut zu wissen!

#### Einen Domainnamen erhalten

Der Prozess ist recht einfach:

1. Gehen Sie zu einer Website eines Registrars.
2. In der Regel gibt es einen prominenten "Get a domain name" Call-to-Action. Klicken Sie darauf.
3. Füllen Sie das Formular mit allen erforderlichen Details aus. Achten Sie besonders darauf, dass Sie Ihren gewünschten Domainnamen nicht falsch geschrieben haben. Sobald es bezahlt ist, ist es zu spät!
4. Der Registrar informiert Sie, wenn der Domainname ordnungsgemäß registriert ist. Innerhalb weniger Stunden haben alle DNS-Server Ihre DNS-Informationen erhalten.

> [!NOTE]
> In diesem Prozess fragt der Registrar nach Ihrer realen Adresse. Stellen Sie sicher, dass Sie sie korrekt angeben, da Registrar in einigen Ländern gezwungen sein können, die Domain zu schließen, wenn sie keine gültige Adresse angeben können.

#### DNS-Aktualisierung

DNS-Datenbanken werden auf jedem DNS-Server weltweit gespeichert, und alle diese Server beziehen sich auf einige spezielle Server, die als „autoritative Nameserver“ oder „Top-Level-DNS-Server“ bezeichnet werden — dies sind wie die Chef-Server, die das System verwalten.

Immer wenn Ihr Registrar Informationen zu einer bestimmten Domain erstellt oder aktualisiert, müssen diese Informationen in jeder DNS-Datenbank aktualisiert werden. Jeder DNS-Server, der eine bestimmte Domain kennt, speichert die Informationen für eine bestimmte Zeit, bevor sie automatisch ungültig werden, und sie dann aktualisiert werden (der DNS-Server fragt einen autoritativen Server ab und ruft die aktualisierten Informationen von dort ab). Somit dauert es einige Zeit, bis DNS-Server, die diesen Domainnamen kennen, die aktuellsten Informationen erhalten.

### Wie funktioniert eine DNS-Anfrage?

Wie wir bereits gesehen haben, ist es einfacher, einen Domainnamen in den Adressbereich Ihres Browsers einzugeben als eine IP-Adresse. Lassen Sie uns den Vorgang betrachten:

1. Geben Sie `mozilla.org` in die Adressleiste Ihres Browsers ein.
2. Ihr Browser fragt Ihren Computer, ob dieser die IP-Adresse, die diesem Domainnamen zugewiesen ist, bereits kennt (unter Verwendung eines lokalen DNS-Caches). Wenn ja, wird der Name in die IP-Adresse übersetzt und der Browser handelt die Inhalte mit dem Webserver aus. Ende der Geschichte.
3. Wenn Ihr Computer nicht weiß, welche IP-Adresse sich hinter dem Namen `mozilla.org` verbirgt, fragt er einen DNS-Server, dessen Aufgabe es genau ist, Ihrem Computer mitzuteilen, welche IP-Adresse mit jedem registrierten Domainnamen übereinstimmt.
4. Sobald der Computer die angeforderte IP-Adresse kennt, kann Ihr Browser mit dem Webserver die Inhalte aushandeln.

![Erklärung der Schritte, die zur Erzielung des Ergebnisses einer DNS-Anfrage erforderlich sind](2014-10-dns-request2.png)

## Nächste Schritte

Okay, wir haben viel über Prozesse und Architektur gesprochen. Zeit weiterzumachen.

- Wenn Sie sich praktisch betätigen möchten, ist es eine gute Gelegenheit, mit dem Entwurf zu beginnen und [die Anatomie einer Webseite](/de/docs/Learn/Common_questions/Design_and_accessibility/Common_web_layouts) zu erkunden.
- Es sei auch darauf hingewiesen, dass einige Aspekte des Aufbaus einer Website Geld kosten. Bitte lesen Sie hierzu [wie viel es kostet, eine Website zu erstellen](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost).
- Oder lesen Sie mehr über [Domainnamen](https://en.wikipedia.org/wiki/Domain_name) auf Wikipedia.
- Außerdem finden Sie [hier](https://howdns.works/) eine unterhaltsame und farbenfrohe Erklärung, wie DNS funktioniert.
