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
      <th scope="row">Voraussetzungen:</th>
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
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, was Domainnamen sind, wie sie funktionieren und warum sie wichtig sind.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Domainnamen sind ein wesentlicher Bestandteil der Internet-Infrastruktur. Sie bieten eine menschenlesbare Adresse für jeden Webserver, der im Internet verfügbar ist.

Jeder mit dem Internet verbundene Computer kann über eine öffentliche {{Glossary("IP_Address", "IP-Adresse")}} erreicht werden, entweder eine IPv4-Adresse (z. B. `192.0.2.172`) oder eine IPv6-Adresse (z. B. `2001:db8:8b73:0000:0000:8a2e:0370:1337`).

Computer können solche Adressen leicht verarbeiten, aber Menschen haben Schwierigkeiten zu erkennen, wer den Server betreibt oder welchen Service die Website anbietet. IP-Adressen sind schwer zu merken und können sich im Laufe der Zeit ändern.

Um all diese Probleme zu lösen, verwenden wir menschenlesbare Adressen, die als Domainnamen bezeichnet werden.

## Tiefere Einblicke

### Struktur von Domainnamen

Ein Domainname hat eine einfache Struktur, die aus mehreren Teilen besteht (es könnte nur ein Teil sein, zwei, drei ...), getrennt durch Punkte und **von rechts nach links gelesen**:

![Anatomie des MDN-Domainnamens](structure.png)

Jeder dieser Teile liefert spezifische Informationen über den gesamten Domainnamen.

- {{Glossary("TLD", "TLD")}} (Top-Level Domain).

  - : TLDs geben den Benutzern den allgemeinen Zweck des Dienstes hinter dem Domainnamen an. Die allgemeinsten TLDs (`.com`, `.org`, `.net`) erfordern nicht, dass Webdienste bestimmte Kriterien erfüllen, aber einige TLDs setzen strengere Richtlinien durch, sodass klarer ist, was ihr Zweck ist. Zum Beispiel:

    - Lokale TLDs wie `.us`, `.fr` oder `.se` können erfordern, dass der Dienst in einer bestimmten Sprache bereitgestellt oder in einem bestimmten Land gehostet wird — sie sollen auf eine Ressource in einer bestimmten Sprache oder einem bestimmten Land hinweisen.
    - TLDs, die `.gov` enthalten, dürfen nur von Regierungsabteilungen verwendet werden.
    - Die TLD `.edu` ist ausschließlich für Bildungs- und akademische Institutionen vorgesehen.

    TLDs können sowohl Sonderzeichen als auch lateinische Zeichen enthalten. Die maximale Länge einer TLD beträgt 63 Zeichen, obwohl die meisten etwa 2–3 Zeichen lang sind.

    Die vollständige Liste der TLDs wird von [ICANN verwaltet](https://www.icann.org/resources/pages/tlds-2012-02-25-en).

- Label (oder Komponente)

  - : Die Labels sind das, was der TLD folgt. Ein Label ist eine nicht case-sensitive Zeichenfolge, die zwischen einem und dreiundsechzig Zeichen lang ist und nur die Buchstaben `A` bis `Z`, die Ziffern `0` bis `9` und das Zeichen '-' enthält (das weder das erste noch das letzte Zeichen im Label sein darf). `a`, `97` und `hello-strange-person-16-how-are-you` sind alles Beispiele für gültige Labels.

    Das Label direkt vor der TLD wird auch als _Secondary Level Domain_ (SLD) bezeichnet.

    Ein Domainname kann viele Labels (oder Komponenten) haben. Es ist weder obligatorisch noch notwendig, 3 Labels zu haben, um einen Domainnamen zu bilden. Zum Beispiel ist [informatics.ed.ac.uk](https://informatics.ed.ac.uk/) ein gültiger Domainname. Für jede Domain, die Sie kontrollieren (z. B. [mozilla.org](https://www.mozilla.org/en-US/)), können Sie "Subdomains" erstellen, die an jedem anderen Inhalt enthalten, wie [developer.mozilla.org](/), [support.mozilla.org](https://support.mozilla.org/) oder [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).

### Kauf eines Domainnamens

#### Wer besitzt einen Domainnamen?

Sie können einen Domainnamen nicht "kaufen". Dies ist so, dass nicht genutzte Domainnamen irgendwann wieder verfügbar werden, um von jemand anderem verwendet zu werden. Wenn jeder Domainname gekauft wäre, würde das Web schnell mit ungenutzten Domainnamen gefüllt, die gesperrt und von niemandem genutzt werden könnten.

Stattdessen zahlen Sie für das Recht, einen Domainnamen für ein oder mehrere Jahre zu nutzen. Sie können Ihr Recht verlängern, und Ihre Erneuerung hat Vorrang vor den Bewerbungen anderer. Aber Sie besitzen den Domainnamen nie.

Unternehmen, die Registrare genannt werden, verwenden Domainnamensregister, um technische und administrative Informationen zu verwalten, die Sie mit Ihrem Domainnamen verbinden.

> [!NOTE]
> Bei einigen Domainnamen ist es möglicherweise nicht ein Registrar, der für die Verwaltung verantwortlich ist. Zum Beispiel wird jedes Domainnamen unter `.fire` von Amazon verwaltet.

#### Einen verfügbaren Domainnamen finden

Um herauszufinden, ob ein bestimmter Domainname verfügbar ist,

- Gehen Sie auf die Website eines Domainnamens-Registrars. Die meisten von ihnen bieten einen "whois"-Service an, der Ihnen sagt, ob ein Domainname verfügbar ist.
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

Wie Sie sehen, kann ich `mozilla.org` nicht registrieren, da die Mozilla Foundation es bereits registriert hat.

Andererseits, schauen wir mal, ob ich `afunkydomainname.org` registrieren könnte:

```bash
whois afunkydomainname.org
```

Dies wird folgendes ausgeben (zum Zeitpunkt des Schreibens):

```plain
NOT FOUND
```

Wie Sie sehen, existiert die Domain nicht in der `whois`-Datenbank, sodass wir beantragen könnten, sie zu registrieren. Gut zu wissen!

#### Einen Domainnamen erhalten

Der Prozess ist ziemlich einfach:

1. Gehen Sie auf die Website eines Registrars.
2. Normalerweise gibt es einen auffälligen "Get a domain name"-Call-to-Action. Klicken Sie darauf.
3. Füllen Sie das Formular mit allen erforderlichen Details aus. Achten Sie besonders darauf, dass Sie Ihren gewünschten Domainnamen nicht falsch geschrieben haben. Sobald es bezahlt ist, ist es zu spät!
4. Der Registrar wird Sie benachrichtigen, wenn der Domainname ordnungsgemäß registriert ist. Innerhalb weniger Stunden werden alle DNS-Server Ihre DNS-Informationen erhalten haben.

> [!NOTE]
> In diesem Prozess fragt der Registrar nach Ihrer realen Adresse. Stellen Sie sicher, dass Sie diese korrekt ausfüllen, da in einigen Ländern Registrare möglicherweise verpflichtet sind, die Domain zu schließen, wenn sie keine gültige Adresse angeben können.

#### DNS-Aktualisierung

DNS-Datenbanken werden auf jedem DNS-Server weltweit gespeichert, und alle diese Server beziehen sich auf einige spezielle Server, die "authoritative name servers" oder "Top-Level DNS-Server" genannt werden — diese sind wie die Chefserver, die das System verwalten.

Wann immer Ihr Registrar Informationen zu einer bestimmten Domain erstellt oder aktualisiert, müssen die Informationen in jeder DNS-Datenbank aktualisiert werden. Jeder DNS-Server, der eine bestimmte Domain kennt, speichert die Informationen für eine gewisse Zeit, bevor sie automatisch ungültig werden und dann aktualisiert werden (der DNS-Server fragt einen autoritativen Server und ruft die aktualisierten Informationen von dort ab). Daher dauert es einige Zeit, bis DNS-Server, die diesen Domainnamen kennen, die aktuellsten Informationen erhalten.

### Wie funktioniert eine DNS-Anfrage?

Wie wir bereits gesehen haben, ist es einfacher, einen Domainnamen einzugeben als eine IP-Adresse, wenn Sie eine Webseite in Ihrem Browser anzeigen möchten. Schauen wir uns den Prozess an:

1. Geben Sie `mozilla.org` in die Adressleiste Ihres Browsers ein.
2. Ihr Browser fragt Ihren Computer, ob er die IP-Adresse, die mit diesem Domainnamen identifiziert wird, bereits kennt (unter Verwendung eines lokalen DNS-Caches). Wenn ja, wird der Name in die IP-Adresse übersetzt, und der Browser verhandelt Inhalte mit dem Webserver. Ende der Geschichte.
3. Wenn Ihr Computer nicht weiß, welche IP mit dem Namen `mozilla.org` verbunden ist, fragt er einen DNS-Server, dessen Aufgabe es ist, Ihrem Computer mitzuteilen, welche IP-Adresse jedem registrierten Domainnamen zugeordnet ist.
4. Jetzt, da der Computer die angeforderte IP-Adresse kennt, kann Ihr Browser Inhalte mit dem Webserver verhandeln.

![Erklärung der Schritte, die benötigt werden, um das Ergebnis einer DNS-Anfrage zu erhalten](2014-10-dns-request2.png)

## Nächste Schritte

Okay, wir haben viel über Prozesse und Architektur gesprochen. Zeit, weiterzumachen.

- Wenn Sie selbst anpacken wollen, ist es ein guter Zeitpunkt, sich im Design einzuarbeiten und die [Anatomie einer Webseite](/de/docs/Learn/Common_questions/Design_and_accessibility/Common_web_layouts) zu erkunden.
- Es ist auch wichtig zu beachten, dass einige Aspekte beim Erstellen einer Website Geld kosten. Bitte beziehen Sie sich auf [wie viel es kostet, eine Webseite zu erstellen](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost).
- Oder lesen Sie mehr über [Domainnamen](https://en.wikipedia.org/wiki/Domain_name) auf Wikipedia.
- Eine lustige und farbenfrohe Erklärung, wie DNS funktioniert, finden Sie [hier](https://howdns.works/).
