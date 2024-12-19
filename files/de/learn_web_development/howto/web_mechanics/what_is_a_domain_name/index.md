---
title: Was ist ein Domainname?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Zuerst müssen Sie wissen,
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
          >wie das Internet funktioniert</a>
        und verstehen,
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL"
          >was URLs sind</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, was Domainnamen sind, wie sie funktionieren und warum sie wichtig sind.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Domainnamen sind ein wesentlicher Bestandteil der Internetinfrastruktur. Sie bieten eine menschenlesbare Adresse für jeden im Internet verfügbaren Webserver.

Jeder mit dem Internet verbundene Computer kann über eine öffentliche {{Glossary("IP_Address", "IP-Adresse")}} erreicht werden, entweder eine IPv4-Adresse (z.B. `192.0.2.172`) oder eine IPv6-Adresse (z.B. `2001:db8:8b73:0000:0000:8a2e:0370:1337`).

Computer können solche Adressen leicht verarbeiten, aber Menschen haben Schwierigkeiten herauszufinden, wer den Server betreibt oder welchen Dienst die Website anbietet. IP-Adressen sind schwer zu merken und können sich im Laufe der Zeit ändern.

Um all diese Probleme zu lösen, verwenden wir menschenlesbare Adressen, sogenannte Domainnamen.

## Tieferes Eintauchen

### Struktur von Domainnamen

Ein Domainname hat eine einfache Struktur, die aus mehreren Teilen besteht (es könnte nur ein Teil sein, zwei, drei ...), getrennt durch Punkte und **von rechts nach links gelesen**:

![Anatomie des MDN-Domainnamens](structure.png)

Jeder dieser Teile liefert spezifische Informationen über den gesamten Domainnamen.

- {{Glossary("TLD", "TLD")}} (Top-Level Domain).

  - : TLDs vermitteln den Nutzern den allgemeinen Zweck des Dienstes hinter dem Domainnamen. Die allgemeinsten TLDs (`.com`, `.org`, `.net`) erfordern nicht, dass Webdienste bestimmte Kriterien erfüllen, aber einige TLDs setzen strengere Richtlinien durch, um klarer zu machen, wofür sie bestimmt sind. Zum Beispiel:

    - Lokale TLDs wie `.us`, `.fr` oder `.se` können verlangen, dass der Dienst in einer bestimmten Sprache bereitgestellt oder in einem bestimmten Land gehostet wird — sie sollen eine Ressource in einer bestimmten Sprache oder einem bestimmten Land anzeigen.
    - TLDs mit `.gov` dürfen nur von Regierungsabteilungen verwendet werden.
    - Die `.edu` TLD ist ausschließlich für Bildungs- und akademische Institutionen bestimmt.

    TLDs können sowohl spezielle als auch lateinische Zeichen enthalten. Die maximale Länge einer TLD beträgt 63 Zeichen, obwohl die meisten etwa 2–3 Zeichen lang sind.

    Die vollständige Liste der TLDs wird [von ICANN gepflegt](https://www.icann.org/resources/pages/tlds-2012-02-25-en).

- Label (oder Komponente)

  - : Die Labels folgen auf die TLD. Ein Label ist eine nicht case-sensitive Zeichenfolge, die zwischen einem und 63 Zeichen lang ist und nur die Buchstaben `A` bis `Z`, Ziffern `0` bis `9` und das '-' Zeichen enthält (dies darf nicht das erste oder letzte Zeichen im Label sein). `a`, `97` und `hello-strange-person-16-how-are-you` sind alles gültige Labels.

    Das direkt vor der TLD befindliche Label wird auch als _Secondary Level Domain_ (SLD) bezeichnet.

    Ein Domainname kann viele Labels (oder Komponenten) haben. Es ist weder verpflichtend noch notwendig, drei Labels zu haben, um einen Domainnamen zu bilden. Zum Beispiel ist [informatics.ed.ac.uk](https://informatics.ed.ac.uk/) ein gültiger Domainname. Für jede Domain, die Sie kontrollieren (z.B. [mozilla.org](https://www.mozilla.org/en-US/)), können Sie "Subdomains" mit unterschiedlichen Inhalten an jedem Standort erstellen, wie [developer.mozilla.org](/), [support.mozilla.org](https://support.mozilla.org/) oder [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).

### Einen Domainnamen kaufen

#### Wer besitzt einen Domainnamen?

Sie können keinen "Domainnamen kaufen". Dies ist so, damit ungenutzte Domainnamen schließlich wieder verfügbar werden und von jemand anderem genutzt werden können. Wenn jeder Domainname gekauft werden würde, wäre das Netz schnell mit ungenutzten Domainnamen gefüllt, die gesperrt wären und von niemandem genutzt werden könnten.

Stattdessen bezahlen Sie für das Recht, einen Domainnamen für ein oder mehrere Jahre zu nutzen. Sie können Ihr Recht erneuern, und Ihre Verlängerung hat Vorrang vor den Anträgen anderer Personen. Aber Sie besitzen den Domainnamen nie.

Unternehmen, die als Registrare bezeichnet werden, verwenden Domain-Namensregister, um technische und administrative Informationen zu verfolgen, die Sie mit Ihrem Domainnamen verbinden.

> [!NOTE]
> Für einige Domainnamen ist möglicherweise kein Registrar zuständig. Beispielsweise wird jeder Domainname unter `.fire` von Amazon verwaltet.

#### Einen verfügbaren Domainnamen finden

Um herauszufinden, ob ein bestimmter Domainname verfügbar ist,

- Gehen Sie auf die Website eines Domainnamen-Registrars. Die meisten bieten einen "whois"-Dienst an, der Ihnen mitteilt, ob ein Domainname verfügbar ist.
- Alternativ, wenn Sie ein System mit einer integrierten Shell verwenden, geben Sie darin einen `whois`-Befehl ein, wie hier für `mozilla.org` gezeigt:

  ```bash
  whois mozilla.org
  ```

  Dies wird folgende Ausgabe liefern:

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

Wie Sie sehen, kann ich `mozilla.org` nicht registrieren, da die Mozilla Foundation es bereits registriert hat.

Andererseits, sehen wir mal, ob ich `afunkydomainname.org` registrieren könnte:

```bash
whois afunkydomainname.org
```

Dies wird folgende Ausgabe liefern (zum Zeitpunkt des Schreibens):

```plain
NOT FOUND
```

Wie Sie sehen, existiert die Domain nicht in der `whois`-Datenbank, also könnten wir versuchen, sie zu registrieren. Gut zu wissen!

#### Einen Domainnamen erhalten

Der Prozess ist ziemlich einfach:

1. Gehen Sie auf die Website eines Registrars.
2. Normalerweise gibt es einen auffälligen "Get a domain name" Call-to-Action. Klicken Sie darauf.
3. Füllen Sie das Formular mit allen erforderlichen Details aus. Achten Sie besonders darauf, dass Sie Ihren gewünschten Domainnamen nicht falsch geschrieben haben. Sobald er bezahlt ist, ist es zu spät!
4. Der Registrar wird Sie informieren, wenn der Domainname ordnungsgemäß registriert ist. Innerhalb weniger Stunden werden alle DNS-Server Ihre DNS-Informationen erhalten haben.

> [!NOTE]
> In diesem Prozess bittet der Registrar Sie um Ihre echte Adresse in der realen Welt. Stellen Sie sicher, dass Sie sie korrekt ausfüllen, da Registrare in einigen Ländern gezwungen sein können, die Domain zu schließen, wenn sie keine gültige Adresse angeben können.

#### DNS-Aktualisierung

DNS-Datenbanken werden auf jedem DNS-Server weltweit gespeichert, und all diese Server beziehen sich auf einige spezielle Server, die als "autoritative Nameserver" oder "Top-Level-DNS-Server" bezeichnet werden — dies sind wie die Chefserver, die das System verwalten.

Wann immer Ihr Registrar Informationen für eine gegebene Domain erstellt oder aktualisiert, müssen die Informationen in jeder DNS-Datenbank aktualisiert werden. Jeder DNS-Server, der über eine bestimmte Domain Bescheid weiß, speichert die Informationen für eine gewisse Zeit, bevor sie automatisch ungültig werden und dann aktualisiert werden (der DNS-Server fragt einen autoritativen Server ab und holt die aktualisierten Informationen von ihm ab). Daher dauert es einige Zeit, bis DNS-Server, die über diesen Domainnamen Bescheid wissen, die aktuellen Informationen erhalten.

### Wie funktioniert eine DNS-Anfrage?

Wie wir bereits gesehen haben, ist es einfacher, einen Domainnamen als eine IP-Adresse einzugeben, wenn Sie eine Webseite in Ihrem Browser anzeigen möchten. Werfen wir einen Blick auf den Prozess:

1. Geben Sie `mozilla.org` in die Adressleiste Ihres Browsers ein.
2. Ihr Browser fragt Ihren Computer, ob er bereits die IP-Adresse erkennt, die durch diesen Domainnamen identifiziert wird (unter Verwendung eines lokalen DNS-Cache). Wenn dies der Fall ist, wird der Name in die IP-Adresse übersetzt und der Browser spricht mit dem Webserver. Ende der Geschichte.
3. Wenn Ihr Computer nicht weiß, welche IP sich hinter dem Namen `mozilla.org` verbirgt, fragt er einen DNS-Server, dessen Aufgabe es ist, Ihrem Computer mitzuteilen, welche IP-Adresse zu jedem registrierten Domainnamen gehört.
4. Jetzt, da der Computer die angeforderte IP-Adresse kennt, kann Ihr Browser mit dem Webserver verhandeln.

![Erklärung der Schritte, die erforderlich sind, um das Ergebnis einer DNS-Anfrage zu erhalten](2014-10-dns-request2.png)

## Nächste Schritte

Okay, wir haben viel über Prozesse und Architektur gesprochen. Zeit, weiterzumachen.

- Wenn Sie selbst Hand anlegen möchten, ist es eine gute Gelegenheit, ins Design einzutauchen und die [Anatomie einer Webseite](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts) zu erkunden.
- Es ist auch zu beachten, dass einige Aspekte beim Aufbau einer Website Geld kosten. Bitte lesen Sie dazu [wie viel es kostet, eine Website zu erstellen](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost).
- Oder lesen Sie mehr über [Domainnamen](https://en.wikipedia.org/wiki/Domain_name) auf Wikipedia.
- Sie können auch [hier](https://howdns.works/) eine unterhaltsame und farbenfrohe Erklärung finden, wie DNS funktioniert.
