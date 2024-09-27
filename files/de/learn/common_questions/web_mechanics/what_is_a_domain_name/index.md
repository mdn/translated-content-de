---
title: Was ist ein Domain-Name?
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
        Lernen Sie, was Domain-Namen sind, wie sie funktionieren und warum sie wichtig sind.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Domain-Namen sind ein wesentlicher Bestandteil der Internet-Infrastruktur. Sie bieten eine menschenlesbare Adresse für jeden Webserver, der im Internet verfügbar ist.

Jeder mit dem Internet verbundene Computer kann über eine öffentliche [IP-Adresse](/de/docs/Glossary/IP_Address) erreicht werden, entweder eine IPv4-Adresse (z.B. `192.0.2.172`) oder eine IPv6-Adresse (z.B., `2001:db8:8b73:0000:0000:8a2e:0370:1337`).

Computer können solche Adressen leicht verarbeiten, aber es fällt den Menschen schwer, herauszufinden, wer den Server betreibt oder welchen Dienst die Website anbietet. IP-Adressen sind schwer zu merken und können sich im Laufe der Zeit ändern.

Um all diese Probleme zu lösen, verwenden wir menschenlesbare Adressen, die Domain-Namen genannt werden.

## Tiefergehende Betrachtung

### Struktur von Domain-Namen

Ein Domain-Name hat eine einfache Struktur, die aus mehreren Teilen besteht (es kann nur ein Teil sein, zwei, drei...), die durch Punkte getrennt sind und **von rechts nach links gelesen werden**:

![Anatomie des MDN-Domain-Namens](structure.png)

Jeder dieser Teile liefert spezifische Informationen über den gesamten Domain-Namen.

- [TLD](/de/docs/Glossary/TLD) (Top-Level-Domain).

  - : TLDs vermitteln Nutzern den allgemeinen Zweck des Dienstes hinter dem Domain-Namen. Die allgemeinsten TLDs (`.com`, `.org`, `.net`) erfordern nicht, dass Webdienste bestimmte Kriterien erfüllen, aber einige TLDs setzen strengere Richtlinien durch, um klarer ihren Zweck zu zeigen. Zum Beispiel:

    - Lokale TLDs wie `.us`, `.fr` oder `.se` können verlangen, dass der Dienst in einer bestimmten Sprache bereitgestellt oder in einem bestimmten Land gehostet wird - sie sollen auf eine Ressource in einer bestimmten Sprache oder einem Land hinweisen.
    - TLDs, die `.gov` enthalten, dürfen nur von Regierungsabteilungen verwendet werden.
    - Die `.edu`-TLD ist nur für Bildungs- und akademische Einrichtungen bestimmt.

    TLDs können sowohl Sonderzeichen als auch lateinische Zeichen enthalten. Die maximale Länge einer TLD beträgt 63 Zeichen, obwohl die meisten 2-3 Zeichen lang sind.

    Die vollständige Liste der TLDs wird von [ICANN gepflegt](https://www.icann.org/resources/pages/tlds-2012-02-25-en).

- Label (oder Komponente)

  - : Die Labels folgen auf die TLD. Ein Label ist eine nicht auf Groß- und Kleinschreibung achtende Zeichenfolge von einem bis dreiundsechzig Zeichen Länge, die nur die Buchstaben `A` bis `Z`, die Ziffern `0` bis `9` und das Zeichen `-` (welches nicht das erste oder letzte Zeichen im Label sein darf) enthält. `a`, `97` und `hello-strange-person-16-how-are-you` sind alles Beispiele für gültige Labels.

    Das direkt vor der TLD befindliche Label wird auch als _Sekundär-Level-Domain_ (SLD) bezeichnet.

    Ein Domain-Name kann viele Labels (oder Komponenten) haben. Es ist weder obligatorisch noch erforderlich, 3 Labels zu haben, um einen Domain-Namen zu bilden. Zum Beispiel ist [informatics.ed.ac.uk](https://informatics.ed.ac.uk/) ein gültiger Domain-Name. Für jede Domain, die Sie kontrollieren (z.B. [mozilla.org](https://www.mozilla.org/en-US/)), können Sie "Subdomains" mit unterschiedlichen Inhalten erstellen, wie [developer.mozilla.org](/), [support.mozilla.org](https://support.mozilla.org/) oder [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).

### Kauf eines Domain-Namens

#### Wem gehört ein Domain-Name?

Sie können keinen "Domain-Namen kaufen". Das liegt daran, dass ungenutzte Domain-Namen irgendwann wieder verfügbar werden, um von jemand anderem genutzt zu werden. Wenn jeder Domain-Name gekauft würde, würde das Web schnell mit ungenutzten Domain-Namen gefüllt sein, die gesperrt und von niemandem genutzt werden könnten.

Stattdessen zahlen Sie für das Recht, einen Domain-Namen für ein oder mehrere Jahre zu nutzen. Sie können Ihr Recht verlängern, und Ihre Verlängerung hat Vorrang vor den Bewerbungen anderer Personen. Aber Ihnen gehört der Domain-Name nie.

Firmen, die Registrare genannt werden, nutzen Domain-Name-Registrierungsstellen, um technische und administrative Informationen zu verfolgen, die Sie mit Ihrem Domain-Namen verbinden.

> [!NOTE]
> Für einige Domain-Namen könnte es nicht ein Registrar sein, der verantwortlich ist, die Informationen zu verfolgen. Zum Beispiel wird jeder Domain-Name unter `.fire` von Amazon verwaltet.

#### Finden eines verfügbaren Domain-Namens

Um herauszufinden, ob ein bestimmter Domain-Name verfügbar ist,

- Gehen Sie auf die Website eines Domain-Name-Registrars. Die meisten von ihnen bieten einen "whois"-Dienst an, der Ihnen sagt, ob ein Domain-Name verfügbar ist.
- Alternativ können Sie, wenn Sie ein System mit einer integrierten Shell verwenden, einen `whois`-Befehl dort eingeben, wie hier für `mozilla.org` gezeigt:

  ```bash
  whois mozilla.org
  ```

  Dies wird das Folgende ausgeben:

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

Andererseits, schauen wir mal, ob ich `afunkydomainname.org` registrieren könnte:

```bash
whois afunkydomainname.org
```

Dies wird das Folgende ausgeben (zum Zeitpunkt des Schreibens):

```plain
NOT FOUND
```

Wie Sie sehen können, existiert die Domain nicht in der `whois`-Datenbank, also könnten wir sie registrieren lassen. Gut zu wissen!

#### Erhalten eines Domain-Namens

Der Prozess ist ziemlich einfach:

1. Gehen Sie auf die Website eines Registrars.
2. Normalerweise gibt es einen prominenten Aufruf zum Handeln "Einen Domain-Namen erhalten". Klicken Sie darauf.
3. Füllen Sie das Formular mit allen erforderlichen Angaben aus. Achten Sie besonders darauf, dass Sie Ihren gewünschten Domain-Namen nicht falsch schreiben. Sobald er bezahlt ist, ist es zu spät!
4. Der Registrar wird Sie benachrichtigen, wenn der Domain-Name ordnungsgemäß registriert ist. Innerhalb weniger Stunden werden alle DNS-Server Ihre DNS-Informationen erhalten haben.

> [!NOTE]
> In diesem Prozess fragt der Registrar nach Ihrer realen Adresse. Stellen Sie sicher, dass Sie diese korrekt angeben, da in einigen Ländern die Registrare gezwungen sein können, die Domain zu schließen, wenn sie keine gültige Adresse angeben können.

#### DNS-Aktualisierung

DNS-Datenbanken sind auf jedem DNS-Server weltweit gespeichert, und alle diese Server beziehen sich auf einige spezielle Server, die "autoritative Namensserver" oder "Top-Level-DNS-Server" genannt werden – das sind wie die Boss-Server, die das System verwalten.

Wann immer Ihr Registrar Informationen für eine gegebene Domain erstellt oder aktualisiert, müssen die Informationen in jeder DNS-Datenbank aktualisiert werden. Jeder DNS-Server, der über eine gegebene Domain informiert ist, speichert die Informationen für einige Zeit, bevor sie automatisch ungültig werden und dann aktualisiert werden (der DNS-Server fragt einen autoritativen Server ab und holt die aktualisierten Informationen von diesem). Daher dauert es einige Zeit, bis DNS-Server, die über diesen Domain-Namen informiert sind, die aktuellen Informationen erhalten.

### Wie funktioniert eine DNS-Anfrage?

Wie wir bereits gesehen haben, wenn Sie eine Webseite in Ihrem Browser anzeigen möchten, ist es einfacher, einen Domain-Namen als eine IP-Adresse einzugeben. Schauen wir uns den Prozess an:

1. Geben Sie `mozilla.org` in die Adressleiste Ihres Browsers ein.
2. Ihr Browser fragt Ihren Computer, ob er die IP-Adresse, die durch diesen Domain-Namen identifiziert wird, bereits kennt (unter Verwendung eines lokalen DNS-Caches). Wenn ja, wird der Name in die IP-Adresse übersetzt und der Browser handelt Inhalte mit dem Webserver aus. Ende der Geschichte.
3. Wenn Ihr Computer nicht weiß, welche IP-Adresse sich hinter dem Namen `mozilla.org` verbirgt, fragt er einen DNS-Server, dessen Aufgabe es ist, Ihrem Computer mitzuteilen, welche IP-Adresse zu jedem registrierten Domain-Namen gehört.
4. Jetzt, da der Computer die angeforderte IP-Adresse kennt, kann Ihr Browser Inhalte mit dem Webserver aushandeln.

![Erklärung der Schritte, die erforderlich sind, um das Ergebnis einer DNS-Anfrage zu erhalten](2014-10-dns-request2.png)

## Nächste Schritte

Okay, wir haben viel über Prozesse und Architektur gesprochen. Zeit, weiterzugehen.

- Wenn Sie praktisch arbeiten möchten, ist es ein guter Zeitpunkt, in das Design einzutauchen und [die Anatomie einer Webseite](/de/docs/Learn/Common_questions/Design_and_accessibility/Common_web_layouts) zu erkunden.
- Es ist auch erwähnenswert, dass einige Aspekte der Website-Erstellung Geld kosten. Bitte beziehen Sie sich auf [wie viel es kostet, eine Website zu erstellen](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost).
- Oder lesen Sie mehr über [Domain-Namen](https://en.wikipedia.org/wiki/Domain_name) auf Wikipedia.
- Sie finden auch [hier](https://howdns.works/) eine unterhaltsame und farbenfrohe Erklärung, wie DNS funktioniert.
