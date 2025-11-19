---
title: Was ist ein Domain-Name?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
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
        Lernen Sie, was Domain-Namen sind, wie sie funktionieren und warum sie wichtig sind.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Domain-Namen sind ein wesentlicher Bestandteil der Internet-Infrastruktur. Sie bieten eine menschenlesbare Adresse für jeden Webserver, der im Internet verfügbar ist.

Jeder mit dem Internet verbundene Computer kann über eine öffentliche {{Glossary("IP_Address", "IP-Adresse")}} erreicht werden, entweder eine IPv4-Adresse (z.B. `192.0.2.172`) oder eine IPv6-Adresse (z.B. `2001:db8:8b73:0000:0000:8a2e:0370:1337`).

Computer können solche Adressen leicht verarbeiten, aber für Menschen ist es schwer herauszufinden, wer den Server betreibt oder welchen Dienst die Website anbietet. IP-Adressen sind schwer zu merken und können sich im Laufe der Zeit ändern.

Um all diese Probleme zu lösen, verwenden wir menschenlesbare Adressen, die Domain-Namen genannt werden.

## Tiefergehender Einblick

### Struktur von Domain-Namen

Ein Domain-Name hat eine einfache Struktur, die aus mehreren Teilen besteht (es kann ein Teil, zwei, drei oder mehr sein), die durch Punkte getrennt sind und **von rechts nach links gelesen** werden:

![Anatomie des MDN-Domain-Namens](structure.png)

Jeder dieser Teile bietet spezifische Informationen über den gesamten Domain-Namen.

- {{Glossary("TLD", "TLD")}} (Top-Level-Domain).
  - : TLDs geben den Nutzern den allgemeinen Zweck des Dienstes hinter dem Domain-Namen an. Die allgemeinsten TLDs (`.com`, `.org`, `.net`) erfordern nicht, dass Webdienste bestimmte Kriterien erfüllen, aber einige TLDs setzen strengere Richtlinien durch, um den Zweck klarer zu machen. Zum Beispiel:
    - Lokale TLDs wie `.us`, `.fr` oder `.se` können erfordern, dass der Dienst in einer bestimmten Sprache bereitgestellt oder in einem bestimmten Land gehostet wird — sie sollen eine Ressource in einer bestimmten Sprache oder einem bestimmten Land anzeigen.
    - TLDs, die `.gov` enthalten, dürfen nur von Regierungsabteilungen verwendet werden.
    - Die `.edu` TLD ist nur für die Nutzung durch Bildungs- und akademische Institutionen vorgesehen.

    TLDs können sowohl spezielle als auch lateinische Zeichen enthalten. Die maximale Länge einer TLD beträgt 63 Zeichen, obwohl die meisten etwa 2–3 Zeichen lang sind.

    Die vollständige Liste der TLDs wird von [ICANN gepflegt](https://www.icann.org/en/contracted-parties/registry-operators/resources/list-of-top-level-domains).

- Label (oder Komponente)
  - : Die Labels sind das, was der TLD folgt. Ein Label ist eine nicht case-sensitive Zeichenfolge, die zwischen einem und dreiundsechzig Zeichen lang ist, nur die Buchstaben `A` bis `Z`, Ziffern `0` bis `9` und das Zeichen '-' enthält (das nicht das erste oder letzte Zeichen des Labels sein darf). `a`, `97` und `hello-strange-person-16-how-are-you` sind alles Beispiele für gültige Labels.

    Das Label direkt vor der TLD wird auch _Secondary Level Domain_ (SLD) genannt.

    Ein Domain-Name kann viele Labels (oder Komponenten) haben. Es ist weder obligatorisch noch notwendig, 3 Labels zu haben, um einen Domain-Namen zu bilden. Zum Beispiel ist [informatics.ed.ac.uk](https://informatics.ed.ac.uk/) ein gültiger Domain-Name. Für jede Domain, die Sie kontrollieren (z.B. [mozilla.org](https://www.mozilla.org/en-US/)), können Sie "Subdomains" mit unterschiedlichem Inhalt erstellen, wie [developer.mozilla.org](/), [support.mozilla.org](https://support.mozilla.org/) oder [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).

### Kauf eines Domain-Namens

#### Wem gehört ein Domain-Name?

Sie können keinen "Domain-Namen kaufen". Dies geschieht, damit ungenutzte Domain-Namen schließlich wieder verfügbar werden, damit jemand anderes sie verwenden kann. Wenn jeder Domain-Name gekauft würde, würde das Web schnell mit ungenutzten Domain-Namen gefüllt, die gesperrt wären und von niemandem genutzt werden könnten.

Stattdessen zahlen Sie für das Recht, einen Domain-Namen für ein oder mehrere Jahre zu nutzen. Sie können Ihr Recht verlängern und Ihre Verlängerung hat Vorrang vor den Anträgen anderer Personen. Aber Sie besitzen den Domain-Namen niemals.

Unternehmen, die Registrare genannt werden, verwenden Domain-Namen-Register, um technische und administrative Informationen zu verwalten, die Sie mit Ihrem Domain-Namen verbinden.

> [!NOTE]
> Für einige Domain-Namen ist möglicherweise nicht ein Registrar für die Nachverfolgung zuständig. Zum Beispiel wird jeder Domain-Name unter `.fire` von Amazon verwaltet.

#### Finden eines verfügbaren Domain-Namens

Um herauszufinden, ob ein bestimmter Domain-Name verfügbar ist,

- Gehen Sie auf die Website eines Domain-Namen-Registrars. Die meisten von ihnen bieten einen "whois"-Dienst an, der Ihnen sagt, ob ein Domain-Name verfügbar ist.
- Alternativ können Sie, wenn Sie ein System mit einer integrierten Shell verwenden, einen `whois`-Befehl in diese eingeben, wie hier für `mozilla.org` gezeigt:

  ```bash
  whois mozilla.org
  ```

  Dies wird die folgende Ausgabe liefern:

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

Andererseits, lassen Sie uns sehen, ob ich `afunkydomainname.org` registrieren könnte:

```bash
whois afunkydomainname.org
```

Dies wird die folgende Ausgabe liefern (zum Zeitpunkt des Schreibens):

```plain
NOT FOUND
```

Wie Sie sehen, existiert die Domain nicht in der `whois`-Datenbank, also könnten wir sie zur Registrierung anfragen. Gut zu wissen!

#### Einen Domain-Namen bekommen

Der Prozess ist ziemlich einfach:

1. Gehen Sie auf die Website eines Registrars.
2. Normalerweise gibt es einen prominenten "Get a domain name" Call-to-Action. Klicken Sie darauf.
3. Füllen Sie das Formular mit allen erforderlichen Angaben aus. Stellen Sie vor allem sicher, dass Sie Ihren gewünschten Domain-Namen nicht falsch geschrieben haben. Sobald er bezahlt ist, ist es zu spät!
4. Der Registrar wird Sie informieren, wenn der Domain-Name ordnungsgemäß registriert ist. Innerhalb weniger Stunden werden alle DNS-Server Ihre DNS-Informationen erhalten haben.

> [!NOTE]
> In diesem Prozess fragt der Registrar nach Ihrer physischen Adresse. Stellen Sie sicher, dass Sie diese korrekt ausfüllen, da in einigen Ländern Registrare gezwungen sein könnten, die Domain zu schließen, wenn sie keine gültige Adresse bereitstellen können.

#### DNS-Aktualisierung

DNS-Datenbanken werden auf jedem DNS-Server weltweit gespeichert, und alle diese Server beziehen sich auf einige spezielle Server, die als "autoritative Nameserver" oder "Top-Level-DNS-Server" bezeichnet werden — dies sind wie die Chef-Server, die das System verwalten.

Wann immer Ihr Registrar Informationen für eine bestimmte Domain erstellt oder aktualisiert, müssen die Informationen in jeder DNS-Datenbank aktualisiert werden. Jeder DNS-Server, der über eine bestimmte Domain Bescheid weiß, speichert die Informationen für einige Zeit, bevor sie automatisch ungültig gemacht und dann aktualisiert werden (der DNS-Server fragt einen autoritativen Server und ruft die aktualisierten Informationen von diesem ab). Daher dauert es einige Zeit, bis DNS-Server, die über diesen Domain-Namen Bescheid wissen, die aktuellen Informationen erhalten.

### Wie funktioniert eine DNS-Anfrage?

Wie wir bereits gesehen haben, ist es einfacher, eine Domain zu tippen als eine IP-Adresse, wenn Sie eine Webseite in Ihrem Browser anzeigen wollen. Werfen wir einen Blick auf den Prozess:

1. Geben Sie `mozilla.org` in die Adressleiste Ihres Browsers ein.
2. Ihr Browser fragt Ihren Computer, ob er die IP-Adresse, die durch diesen Domain-Namen identifiziert wird, bereits kennt (mithilfe eines lokalen DNS-Caches). Wenn ja, wird der Name in die IP-Adresse übersetzt und der Browser verhandelt Inhalte mit dem Webserver. Geschichte zu Ende.
3. Wenn Ihr Computer nicht weiß, welche IP-Adresse hinter dem Namen `mozilla.org` steckt, fragt er einen DNS-Server, dessen Aufgabe es ist, Ihrem Computer mitzuteilen, welche IP-Adresse zu jedem registrierten Domain-Namen passt.
4. Sobald der Computer die angeforderte IP-Adresse kennt, kann der Browser Inhalte mit dem Webserver verhandeln.

![Erklärung der Schritte, die notwendig sind, um das Ergebnis einer DNS-Anfrage zu erhalten](2014-10-dns-request2.png)

## Nächste Schritte

Okay, wir haben viel über Prozesse und Architektur gesprochen. Es ist Zeit, weiterzugehen.

- Wenn Sie praktisch arbeiten möchten, ist es ein guter Zeitpunkt, ins Design einzutauchen und [die Anatomie einer Webseite](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts) zu erkunden.
- Es ist auch wichtig zu beachten, dass einige Aspekte des Erstellens einer Website Geld kosten. Bitte beziehen Sie sich auf [wie viel es kostet, eine Website zu erstellen](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost).
- Oder lesen Sie mehr über [Domain-Namen](https://de.wikipedia.org/wiki/Domain_name) auf Wikipedia.
- Das Tutorial [Wie DNS funktioniert](https://howdns.works/) bietet eine unterhaltsame und farbenfrohe Erklärung.
