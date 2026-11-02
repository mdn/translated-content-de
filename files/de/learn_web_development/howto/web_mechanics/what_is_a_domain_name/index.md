---
title: Was ist ein Domainname?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name
l10n:
  sourceCommit: d50a52075711e21da27bce5ee24f6334b56cf0f3
---

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Zunächst sollten Sie wissen,
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
      <th scope="row">Lernziel:</th>
      <td>
        Erfahren Sie, was Domainnamen sind, wie sie funktionieren und warum sie wichtig sind.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Domainnamen sind ein wesentlicher Bestandteil der Internetinfrastruktur. Sie bieten eine für Menschen lesbare Adresse für jeden Webserver, der im Internet verfügbar ist.

Jeder mit dem Internet verbundene Computer ist über eine öffentliche {{Glossary("IP_Address", "IP-Adresse")}} erreichbar: entweder über eine IPv4-Adresse (z. B. `192.0.2.172`) oder eine IPv6-Adresse (z. B. `2001:db8:8b73:0000:0000:8a2e:0370:1337`).

Computer können solche Adressen problemlos verarbeiten. Für Menschen ist es jedoch schwierig, anhand einer IP-Adresse herauszufinden, wer den Server betreibt oder welchen Dienst die Website anbietet. Außerdem sind IP-Adressen schwer zu merken und können sich im Laufe der Zeit ändern.

Um diese Probleme zu lösen, verwenden wir für Menschen lesbare Adressen, sogenannte Domainnamen.

## Vertiefung

### Aufbau von Domainnamen

Ein Domainname hat einen einfachen Aufbau aus mehreren Teilen (es kann auch nur ein Teil sein, zwei, drei …). Diese sind durch Punkte getrennt und werden **von rechts nach links gelesen**:

![Aufbau des MDN-Domainnamens](structure.png)

Jeder dieser Teile liefert bestimmte Informationen über den gesamten Domainnamen.

- {{Glossary("TLD", "TLD")}} (Top-Level-Domain)
  - : TLDs geben Aufschluss über den allgemeinen Zweck des Dienstes hinter dem Domainnamen. Die gängigsten TLDs (`.com`, `.org`, `.net`) verlangen von Webdiensten nicht, bestimmte Kriterien zu erfüllen. Für einige TLDs gelten jedoch strengere Regeln, damit ihr Zweck deutlicher erkennbar ist. Zum Beispiel:
    - Länderspezifische TLDs wie `.us`, `.fr` oder `.se` können voraussetzen, dass der Dienst in einer bestimmten Sprache angeboten oder in einem bestimmten Land gehostet wird. Sie sollen auf eine Ressource in einer bestimmten Sprache oder einem bestimmten Land hinweisen.
    - TLDs mit `.gov` dürfen nur von Regierungsbehörden verwendet werden.
    - Die TLD `.edu` ist ausschließlich Bildungs- und akademischen Einrichtungen vorbehalten.

    TLDs können sowohl Sonderzeichen als auch lateinische Zeichen enthalten. Eine TLD darf höchstens 63 Zeichen lang sein, die meisten sind jedoch etwa zwei bis drei Zeichen lang.

    Die vollständige Liste der TLDs wird [von ICANN gepflegt](https://www.icann.org/en/contracted-parties/registry-operators/resources/list-of-top-level-domains).

- Label (oder Bestandteil)
  - : Labels sind die Teile, die auf die TLD folgen, wenn man den Domainnamen von rechts nach links liest. Ein Label ist eine Zeichenfolge mit einer Länge von einem bis 63 Zeichen, bei der die Groß- und Kleinschreibung keine Rolle spielt. Sie darf nur die Buchstaben `A` bis `Z`, die Ziffern `0` bis `9` und den Bindestrich `-` enthalten. Der Bindestrich darf nicht am Anfang oder Ende des Labels stehen. `a`, `97` und `hello-strange-person-16-how-are-you` sind Beispiele für gültige Labels.

    Das Label direkt links neben der TLD wird auch _Second-Level-Domain_ (SLD) genannt.

    Ein Domainname kann viele Labels (oder Bestandteile) haben. Er muss nicht aus drei Labels bestehen. Beispielsweise ist [informatics.ed.ac.uk](https://informatics.ed.ac.uk/) ein gültiger Domainname. Für jede Domain, die Sie verwalten (z. B. [mozilla.org](https://www.mozilla.org/en-US/)), können Sie „Subdomains“ mit unterschiedlichen Inhalten erstellen, etwa [developer.mozilla.org](/), [support.mozilla.org](https://support.mozilla.org/) oder [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).

### Einen Domainnamen erwerben

#### Wem gehört ein Domainname?

Sie können einen Domainnamen nicht „kaufen“. Dadurch werden ungenutzte Domainnamen irgendwann wieder für andere verfügbar. Könnte jeder Domainname dauerhaft gekauft werden, wäre das Web bald voller ungenutzter Domainnamen, die gesperrt wären und von niemandem verwendet werden könnten.

Stattdessen bezahlen Sie für das Recht, einen Domainnamen ein oder mehrere Jahre lang zu nutzen. Sie können dieses Recht verlängern; dabei hat Ihre Verlängerung Vorrang vor den Anträgen anderer. Der Domainname gehört Ihnen jedoch nie.

Unternehmen, die Registrare genannt werden, nutzen Domain-Registrierungsstellen, um technische und administrative Informationen zu verwalten, die Sie mit Ihrem Domainnamen verknüpfen.

> [!NOTE]
> Bei manchen Domainnamen ist kein Registrar für diese Verwaltung zuständig. Beispielsweise werden alle Domainnamen unter `.fire` von Amazon verwaltet.

#### Einen verfügbaren Domainnamen finden

So finden Sie heraus, ob ein bestimmter Domainname verfügbar ist:

- Besuchen Sie die Website eines Domainnamen-Registrars. Die meisten bieten einen „whois“-Dienst an, mit dem Sie die Verfügbarkeit eines Domainnamens prüfen können.
- Wenn Sie ein System mit integrierter Shell verwenden, können Sie alternativ den Befehl `whois` eingeben, wie hier für `mozilla.org` gezeigt:

  ```bash
  whois mozilla.org
  ```

  Die Ausgabe sieht folgendermaßen aus:

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

Wie Sie sehen, kann ich `mozilla.org` nicht registrieren, da die Mozilla Foundation den Domainnamen bereits registriert hat.

Sehen wir uns dagegen an, ob ich `afunkydomainname.org` registrieren könnte:

```bash
whois afunkydomainname.org
```

Zum Zeitpunkt der Erstellung dieses Artikels ergibt sich folgende Ausgabe:

```plain
NOT FOUND
```

Wie Sie sehen, ist die Domain nicht in der `whois`-Datenbank verzeichnet. Wir könnten also ihre Registrierung beantragen. Gut zu wissen!

#### Einen Domainnamen registrieren

Der Ablauf ist recht einfach:

1. Besuchen Sie die Website eines Registrars.
2. Dort finden Sie in der Regel eine gut sichtbare Schaltfläche oder einen Link mit der Aufschrift „Domainnamen registrieren“. Klicken Sie darauf.
3. Füllen Sie das Formular mit allen erforderlichen Angaben aus. Achten Sie besonders darauf, dass Ihr gewünschter Domainname keinen Tippfehler enthält. Sobald Sie bezahlt haben, ist es dafür zu spät!
4. Der Registrar informiert Sie, sobald der Domainname ordnungsgemäß registriert ist. Innerhalb weniger Stunden haben alle DNS-Server Ihre DNS-Informationen erhalten.

> [!NOTE]
> Bei diesem Vorgang fragt der Registrar nach Ihrer tatsächlichen Anschrift. Geben Sie diese korrekt an, da Registrare in manchen Ländern gezwungen sein können, eine Domain zu schließen, wenn sie keine gültige Anschrift vorweisen können.

#### Aktualisierung von DNS-Daten

DNS-Datenbanken befinden sich auf DNS-Servern weltweit. Diese Server greifen auf einige spezielle Server zurück, die „autoritative Nameserver“ oder „Top-Level-DNS-Server“ genannt werden. Diese übergeordneten Server verwalten das System.

Wenn Ihr Registrar Informationen zu einer Domain erstellt oder aktualisiert, müssen diese Informationen in jeder DNS-Datenbank aktualisiert werden. Jeder DNS-Server, dem eine bestimmte Domain bekannt ist, speichert die Informationen eine Zeit lang. Danach werden sie automatisch ungültig und anschließend aktualisiert: Der DNS-Server fragt einen autoritativen Server ab und ruft die aktuellen Informationen von ihm ab. Deshalb dauert es eine Weile, bis alle DNS-Server, denen dieser Domainname bekannt ist, über die neuesten Informationen verfügen.

### Wie funktioniert eine DNS-Anfrage?

Wie bereits erwähnt, ist es einfacher, einen Domainnamen als eine IP-Adresse einzugeben, wenn Sie eine Webseite in Ihrem Browser aufrufen möchten. Sehen wir uns den Ablauf an:

1. Geben Sie `mozilla.org` in die Adressleiste Ihres Browsers ein.
2. Ihr Browser fragt Ihren Computer, ob ihm die IP-Adresse zu diesem Domainnamen bereits bekannt ist. Dazu verwendet er einen lokalen DNS-Cache. Falls ja, wird der Name in die IP-Adresse übersetzt, und der Browser tauscht Daten mit dem Webserver aus. Damit ist der Vorgang abgeschlossen.
3. Falls Ihr Computer die IP-Adresse hinter `mozilla.org` nicht kennt, fragt er einen DNS-Server. Dessen Aufgabe ist es, Ihrem Computer mitzuteilen, welche IP-Adresse zu einem registrierten Domainnamen gehört.
4. Sobald der Computer die angeforderte IP-Adresse kennt, kann Ihr Browser Daten mit dem Webserver austauschen.

![Darstellung der Schritte zum Ermitteln des Ergebnisses einer DNS-Anfrage](2014-10-dns-request2.png)

## Nächste Schritte

Wir haben nun ausführlich über Abläufe und Architektur gesprochen. Zeit, weiterzumachen.

- Wenn Sie selbst aktiv werden möchten, ist jetzt ein guter Zeitpunkt, sich mit Design zu beschäftigen und den [Aufbau einer Webseite](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts) zu erkunden.
- Oder lesen Sie auf Wikipedia mehr über [Domainnamen](https://en.wikipedia.org/wiki/Domain_name).
- Das Tutorial [How DNS works](https://howdns.works/) bietet eine anschauliche und farbenfrohe Erklärung.
