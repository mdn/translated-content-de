---
title: Was ist ein Domainname?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

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
        Erfahren Sie, was Domainnamen sind, wie sie funktionieren und warum sie wichtig sind.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Domainnamen sind ein wesentlicher Bestandteil der Internet-Infrastruktur. Sie bieten eine menschenlesbare Adresse für jeden Webserver, der im Internet verfügbar ist.

Jeder internetverbundene Computer kann über eine öffentliche {{Glossary("IP_Address", "IP-Adresse")}} erreicht werden, entweder eine IPv4-Adresse (z. B. `192.0.2.172`) oder eine IPv6-Adresse (z. B. `2001:db8:8b73:0000:0000:8a2e:0370:1337`).

Computer können mit solchen Adressen problemlos umgehen, aber Menschen haben Schwierigkeiten, herauszufinden, wer den Server betreibt oder welchen Dienst die Website anbietet. IP-Adressen sind schwer zu merken und können sich im Laufe der Zeit ändern.

Um all diese Probleme zu lösen, verwenden wir menschenlesbare Adressen, die Domainnamen genannt werden.

## Vertiefung

### Struktur von Domainnamen

Ein Domainname hat eine einfache Struktur, die aus mehreren Teilen besteht (es kann nur ein Teil sein, zwei, drei…), die durch Punkte getrennt sind und **von rechts nach links gelesen werden**:

![Anatomie des MDN-Domainnamens](structure.png)

Jeder dieser Teile liefert spezifische Informationen über den gesamten Domainnamen.

- {{Glossary("TLD", "TLD")}} (Top-Level Domain).

  - : TLDs geben den Nutzern den allgemeinen Zweck des Dienstes hinter dem Domainnamen an. Die allgemeinsten TLDs (`.com`, `.org`, `.net`) erfordern nicht, dass Webdienste bestimmte Kriterien erfüllen, aber einige TLDs setzen strengere Richtlinien durch, sodass klarer ist, was ihr Zweck ist. Zum Beispiel:

    - Lokale TLDs wie `.us`, `.fr` oder `.se` können verlangen, dass der Dienst in einer bestimmten Sprache bereitgestellt wird oder in einem bestimmten Land gehostet wird – sie sollen eine Ressource in einer bestimmten Sprache oder einem Land anzeigen.
    - TLDs, die `.gov` enthalten, dürfen nur von Regierungsabteilungen verwendet werden.
    - Die `.edu` TLD ist nur für den Gebrauch durch Bildungs- und akademische Einrichtungen gedacht.

    TLDs können sowohl spezielle als auch lateinische Zeichen enthalten. Die maximale Länge einer TLD beträgt 63 Zeichen, obwohl die meisten etwa 2-3 Zeichen lang sind.

    Die vollständige Liste der TLDs wird von [ICANN verwaltet](https://www.icann.org/resources/pages/tlds-2012-02-25-en).

- Kennzeichen (oder Komponente)

  - : Die Kennzeichen folgen auf die TLD. Ein Kennzeichen ist eine nicht groß- und kleinschreibungsempfindliche Zeichenfolge von eins bis dreiundsechzig Zeichen Länge und enthält nur die Buchstaben `A` bis `Z`, die Ziffern `0` bis `9` und das Zeichen `-` (das nicht das erste oder letzte Zeichen im Kennzeichen sein darf). `a`, `97` und `hello-strange-person-16-how-are-you` sind alles Beispiele für gültige Kennzeichen.

    Das Kennzeichen, das sich direkt vor der TLD befindet, wird auch als _Secondary Level Domain_ (SLD) bezeichnet.

    Ein Domainname kann viele Kennzeichen (oder Komponenten) haben. Es ist weder zwingend noch notwendig, 3 Kennzeichen zu haben, um einen Domainnamen zu bilden. Beispielsweise ist [informatics.ed.ac.uk](https://informatics.ed.ac.uk/) ein gültiger Domainname. Für jede Domain, die Sie kontrollieren (z. B. [mozilla.org](https://www.mozilla.org/en-US/)), können Sie "Subdomains" mit unterschiedlichen Inhalten an jedem Ort erstellen, wie [developer.mozilla.org](/), [support.mozilla.org](https://support.mozilla.org/) oder [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).

### Einen Domainnamen kaufen

#### Wem gehört ein Domainname?

Sie können keinen "Domainnamen kaufen". Dies ist so, damit ungenutzte Domainnamen schließlich wieder von jemand anderem verwendet werden können. Wenn jeder Domainname gekauft wäre, würde das Netz schnell mit ungenutzten Domainnamen gefüllt, die gesperrt wären und von niemandem verwendet werden könnten.

Stattdessen zahlen Sie für das Recht, einen Domainnamen für ein oder mehrere Jahre zu nutzen. Sie können Ihr Recht verlängern, und Ihre Verlängerung hat Vorrang vor den Anträgen anderer Personen. Aber Sie besitzen den Domainnamen nie.

Unternehmen, die Registrare genannt werden, verwenden Domain-Registrierungsstellen, um technische und administrative Informationen zu verfolgen, die Sie mit Ihrem Domainnamen verbinden.

> [!NOTE]
> Bei einigen Domainnamen ist möglicherweise kein Registrar dafür zuständig, sie zu verfolgen. Zum Beispiel wird jeder Domainname unter `.fire` von Amazon verwaltet.

#### Einen verfügbaren Domainnamen finden

Um herauszufinden, ob ein bestimmter Domainname verfügbar ist,

- Gehen Sie auf die Website eines Domain-Registrars. Die meisten von ihnen bieten einen "whois"-Dienst an, der Ihnen mitteilt, ob ein Domainname verfügbar ist.
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

Wie Sie sehen können, kann ich `mozilla.org` nicht registrieren, weil die Mozilla Foundation es bereits registriert hat.

Andererseits, schauen wir mal, ob ich `afunkydomainname.org` registrieren könnte:

```bash
whois afunkydomainname.org
```

Dies wird folgendes ausgeben (zum Zeitpunkt des Schreibens):

```plain
NOT FOUND
```

Wie Sie sehen können, existiert die Domain nicht in der `whois`-Datenbank, daher könnten wir beantragen, sie zu registrieren. Gut zu wissen!

#### Einen Domainnamen erhalten

Der Prozess ist recht einfach:

1. Gehen Sie auf die Website eines Registrars.
2. In der Regel gibt es einen prominenten "Domainnamen erhalten" Call-to-Action. Klicken Sie darauf.
3. Füllen Sie das Formular mit allen erforderlichen Angaben aus. Stellen Sie sicher, insbesondere, dass Sie Ihren gewünschten Domainnamen nicht falsch geschrieben haben. Sobald es bezahlt ist, ist es zu spät!
4. Der Registrar wird Sie informieren, wenn der Domainname ordnungsgemäß registriert ist. Innerhalb weniger Stunden werden alle DNS-Server Ihre DNS-Informationen erhalten haben.

> [!NOTE]
> In diesem Prozess bittet der Registrar Sie um Ihre reale Adresse. Stellen Sie sicher, dass Sie diese korrekt ausfüllen, da in einigen Ländern Registrare gezwungen sein könnten, die Domain zu schließen, wenn sie keine gültige Adresse bereitstellen können.

#### DNS-Aktualisierung

DNS-Datenbanken werden auf jedem DNS-Server weltweit gespeichert, und alle diese Server verweisen auf einige spezielle Server, die "autoritative Nameserver" oder "Top-Level-DNS-Server" genannt werden — diese sind wie die Boss-Server, die das System verwalten.

Wann immer Ihr Registrar Informationen für eine bestimmte Domain erstellt oder aktualisiert, müssen die Informationen in jeder DNS-Datenbank aktualisiert werden. Jeder DNS-Server, der von einer bestimmten Domain weiß, speichert die Informationen für eine bestimmte Zeit, bevor sie automatisch ungültig wird und dann aktualisiert wird (der DNS-Server fragt einen autoritativen Server ab und holt die aktualisierten Informationen von diesem). Daher dauert es eine Weile, bis die DNS-Server, die über diesen Domainnamen Bescheid wissen, die aktuellen Informationen erhalten.

### Wie funktioniert eine DNS-Anfrage?

Wie wir bereits gesehen haben, ist es beim Anzeigen einer Webseite in Ihrem Browser einfacher, einen Domainnamen als eine IP-Adresse einzugeben. Werfen wir einen Blick auf den Prozess:

1. Geben Sie `mozilla.org` in die Adressleiste Ihres Browsers ein.
2. Ihr Browser fragt Ihren Computer ab, ob er die IP-Adresse, die durch diesen Domainnamen identifiziert wird, bereits kennt (verwenden Sie einen lokalen DNS-Cache). Wenn ja, wird der Name zur IP-Adresse übersetzt und der Browser verhandelt den Inhalt mit dem Webserver. Ende der Geschichte.
3. Wenn Ihr Computer nicht weiß, welche IP sich hinter dem Namen `mozilla.org` verbirgt, fragt er einen DNS-Server, dessen Aufgabe es ist, Ihrem Computer mitzuteilen, welche IP-Adresse zu jedem registrierten Domainnamen passt.
4. Sobald der Computer die angeforderte IP-Adresse kennt, kann Ihr Browser den Inhalt mit dem Webserver verhandeln.

![Erklärung der Schritte, die erforderlich sind, um das Ergebnis einer DNS-Anfrage zu erhalten](2014-10-dns-request2.png)

## Nächste Schritte

Okay, wir haben viel über Prozesse und Architektur gesprochen. Zeit, weiterzumachen.

- Wenn Sie praktisch arbeiten möchten, ist jetzt ein guter Zeitpunkt, um in das Design einzutauchen und [die Anatomie einer Webseite](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts) zu erkunden.
- Es ist auch wichtig zu beachten, dass einige Aspekte des Baus einer Website Geld kosten. Bitte lesen Sie [wie viel es kostet, eine Website zu erstellen](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost).
- Oder lesen Sie mehr über [Domainnamen](https://de.wikipedia.org/wiki/Domain) auf Wikipedia.
- Sie können auch [hier](https://howdns.works/) eine unterhaltsame und farbenfrohe Erklärung darüber finden, wie DNS funktioniert.
