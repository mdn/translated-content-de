---
title: Was ist ein Domain-Name?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Zuerst sollten Sie wissen,
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
          >wie das Internet funktioniert</a
        >
        und
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL"
          >was URLs sind</a
        >
        verstehen.
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

Domain-Namen sind ein wesentlicher Bestandteil der Internet-Infrastruktur. Sie bieten eine menschenlesbare Adresse für jeden Webserver, der im Internet verfügbar ist.

Jeder mit dem Internet verbundene Computer kann über eine öffentliche {{Glossary("IP_Address", "IP-Adresse")}} erreicht werden, entweder eine IPv4-Adresse (z.B. `192.0.2.172`) oder eine IPv6-Adresse (z.B. `2001:db8:8b73:0000:0000:8a2e:0370:1337`).

Computer können solche Adressen leicht verarbeiten, aber Menschen haben Schwierigkeiten herauszufinden, wer den Server betreibt oder welchen Dienst die Website bietet. IP-Adressen sind schwer zu merken und können sich im Laufe der Zeit ändern.

Um all diese Probleme zu lösen, verwenden wir menschenlesbare Adressen, die Domain-Namen genannt werden.

## Tiefere Einblicke

### Struktur von Domain-Namen

Ein Domain-Name hat eine einfache Struktur, die aus mehreren Teilen besteht (es kann nur ein Teil sein, zwei, drei…), getrennt durch Punkte und **von rechts nach links** gelesen wird:

![Anatomie des MDN-Domain-Namens](structure.png)

Jeder dieser Teile liefert spezifische Informationen über den gesamten Domain-Namen.

- {{Glossary("TLD", "TLD")}} (Top-Level Domain).

  - : TLDs geben den Nutzern den allgemeinen Zweck des Dienstes hinter dem Domain-Namen an. Die generischsten TLDs (`.com`, `.org`, `.net`) erfordern nicht, dass Webdienste besondere Kriterien erfüllen, aber einige TLDs setzen strengere Richtlinien durch, sodass klarer ist, welchen Zweck sie haben. Zum Beispiel:

    - Lokale TLDs wie `.us`, `.fr` oder `.se` können erfordern, dass der Dienst in einer bestimmten Sprache bereitgestellt oder in einem bestimmten Land gehostet wird — sie sollen eine Ressource in einer bestimmten Sprache oder einem bestimmten Land anzeigen.
    - TLDs mit `.gov` dürfen nur von Regierungsabteilungen verwendet werden.
    - Die `.edu` TLD ist nur zur Nutzung durch Bildungs- und akademische Einrichtungen vorgesehen.

    TLDs können sowohl Sonder- als auch lateinische Zeichen enthalten. Die maximale Länge einer TLD beträgt 63 Zeichen, obwohl die meisten etwa 2–3 Zeichen lang sind.

    Die vollständige Liste der TLDs wird von [ICANN gepflegt](https://www.icann.org/en/contracted-parties/registry-operators/resources/list-of-top-level-domains).

- Label (oder Komponente)

  - : Die Labels folgen der TLD. Ein Label ist eine nicht auf Groß- und Kleinschreibung achtende Zeichenfolge von einem bis dreiundsechzig Zeichen Länge, die nur die Buchstaben `A` bis `Z`, Ziffern `0` bis `9` und das Zeichen '-' enthält (dies darf weder das erste noch das letzte Zeichen im Label sein). `a`, `97` und `hello-strange-person-16-how-are-you` sind alles Beispiele für gültige Labels.

    Das Label, das sich direkt vor der TLD befindet, wird auch _Secondary Level Domain_ (SLD) genannt.

    Ein Domain-Name kann viele Labels (oder Komponenten) haben. Es ist weder zwingend noch erforderlich, drei Labels zu haben, um einen Domain-Namen zu bilden. Zum Beispiel ist [informatics.ed.ac.uk](https://informatics.ed.ac.uk/) ein gültiger Domain-Name. Für jede Domain, die Sie kontrollieren (z.B. [mozilla.org](https://www.mozilla.org/en-US/)), können Sie "Subdomains" mit unterschiedlichem Inhalt erstellen, wie [developer.mozilla.org](/), [support.mozilla.org](https://support.mozilla.org/), oder [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).

### Kauf eines Domain-Namens

#### Wem gehört ein Domain-Name?

Sie können keinen "Domain-Namen kaufen". Dies ist so, dass ungenutzte Domain-Namen schließlich wieder verfügbar werden, um von jemand anderem verwendet zu werden. Wäre jeder Domain-Name gekauft, würde das Web schnell mit ungenutzten Domain-Namen gefüllt, die gesperrt wären und von niemandem mehr verwendet werden könnten.

Stattdessen zahlen Sie für das Recht, einen Domain-Namen für ein oder mehrere Jahre zu nutzen. Sie können Ihr Recht erneuern, und Ihre Erneuerung hat Vorrang vor den Anträgen anderer Leute. Aber Sie besitzen den Domain-Namen nie.

Unternehmen, die Registrare genannt werden, verwenden Domain-Namen-Register, um technische und administrative Informationen, die Sie mit Ihrem Domain-Namen verbinden, im Auge zu behalten.

> [!NOTE]
> Für einige Domain-Namen ist möglicherweise nicht ein Registrar verantwortlich, diese zu verwalten. Zum Beispiel wird jede Domain unter `.fire` von Amazon verwaltet.

#### Einen verfügbaren Domain-Namen finden

Um herauszufinden, ob ein bestimmter Domain-Name verfügbar ist,

- Besuchen Sie die Website eines Domain-Namen-Registrars. Die meisten bieten einen "whois"-Dienst, der Ihnen sagt, ob ein Domain-Name verfügbar ist.
- Alternativ, wenn Sie ein System mit eingebauter Shell verwenden, geben Sie einen `whois`-Befehl ein, wie hier für `mozilla.org` gezeigt:

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

Andererseits, sehen wir mal, ob ich `afunkydomainname.org` registrieren könnte:

```bash
whois afunkydomainname.org
```

Dies wird die folgende Ausgabe erzeugen (zum Zeitpunkt der Erstellung):

```plain
NOT FOUND
```

Wie Sie sehen, existiert die Domain nicht in der `whois`-Datenbank, also könnten wir darum bitten, sie zu registrieren. Gut zu wissen!

#### Einen Domain-Namen erhalten

Der Prozess ist ziemlich einfach:

1. Gehen Sie auf die Website eines Registrars.
2. Normalerweise gibt es einen auffälligen "Einen Domain-Namen bekommen"-Aufruf zur Aktion. Klicken Sie darauf.
3. Füllen Sie das Formular mit allen erforderlichen Details aus. Achten Sie insbesondere darauf, dass Sie Ihren gewünschten Domain-Namen nicht falsch geschrieben haben. Wenn er einmal bezahlt ist, ist es zu spät!
4. Der Registrar wird Ihnen mitteilen, wenn der Domain-Name ordnungsgemäß registriert ist. Innerhalb weniger Stunden werden alle DNS-Server Ihre DNS-Informationen erhalten haben.

> [!NOTE]
> In diesem Prozess fragt der Registrar nach Ihrer realen Adresse. Stellen Sie sicher, dass Sie diese korrekt ausfüllen, da in einigen Ländern die Registrare gezwungen sein könnten, die Domain zu schließen, wenn sie keine gültige Adresse angeben können.

#### DNS-Aktualisierung

DNS-Datenbanken werden auf jedem DNS-Server weltweit gespeichert, und alle diese Server beziehen sich auf einige spezielle Server, die "authoritative name servers" oder "top-level DNS servers" genannt werden — diese sind wie die Chefserver, die das System verwalten.

Immer wenn Ihr Registrar Informationen für eine gegebene Domain erstellt oder aktualisiert, müssen die Informationen in jeder DNS-Datenbank aktualisiert werden. Jeder DNS-Server, der Informationen über eine bestimmte Domain hat, speichert die Informationen für eine gewisse Zeit, bevor sie automatisch ungültig werden und dann aktualisiert werden (der DNS-Server fragt einen autoritativen Server und holt die aktualisierten Informationen von ihm). Daher dauert es einige Zeit, bis DNS-Server, die Informationen über diesen Domain-Namen haben, die aktuellsten Informationen erhalten.

### Wie funktioniert eine DNS-Abfrage?

Wie wir bereits gesehen haben, ist es, wenn Sie eine Webseite in Ihrem Browser anzeigen möchten, einfacher, einen Domain-Namen einzugeben als eine IP-Adresse. Werfen Sie einen Blick auf den Prozess:

1. Geben Sie `mozilla.org` in die Adressleiste Ihres Browsers ein.
2. Ihr Browser fragt Ihren Computer, ob er bereits die IP-Adresse kennt, die von diesem Domain-Namen identifiziert wird (unter Verwendung eines lokalen DNS-Caches). Wenn ja, wird der Name in die IP-Adresse übersetzt und der Browser verhandelt den Inhalt mit dem Webserver. Geschichte zu Ende.
3. Wenn Ihr Computer nicht weiß, welche IP hinter dem `mozilla.org`-Namen steckt, fragt er einen DNS-Server, dessen Aufgabe es genau ist, Ihrem Computer zu sagen, welche IP-Adresse zu jedem registrierten Domain-Namen passt.
4. Jetzt, da der Computer die angeforderte IP-Adresse kennt, kann Ihr Browser die Inhalte mit dem Webserver verhandeln.

![Erklärung der Schritte, die erforderlich sind, um das Ergebnis einer DNS-Anfrage zu erhalten](2014-10-dns-request2.png)

## Nächste Schritte

Okay, wir haben viel über Prozesse und Architektur gesprochen. Zeit, weiterzumachen.

- Wenn Sie praktisch arbeiten möchten, ist es jetzt ein guter Zeitpunkt, um mit dem Design zu beginnen und die [Anatomie einer Webseite](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts) zu erkunden.
- Es ist auch wichtig zu beachten, dass einige Aspekte der Erstellung einer Website Geld kosten. Bitte beziehen Sie sich auf [wie viel es kostet, eine Website zu erstellen](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost).
- Oder lesen Sie mehr über [Domain-Namen](https://de.wikipedia.org/wiki/Domainname) auf Wikipedia.
- Das [How DNS works](https://howdns.works/) Tutorial bietet eine lustige und farbenfrohe Erklärung.
