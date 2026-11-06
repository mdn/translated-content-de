---
title: Was ist ein Domainname?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name
l10n:
  sourceCommit: 2a563c927890794b513523649ccfbbe48d336465
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
      <th scope="row">Ziel:</th>
      <td>
        Erfahren Sie, was Domainnamen sind, wie sie funktionieren und warum sie wichtig sind.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Domainnamen sind ein zentraler Bestandteil der Internetinfrastruktur. Sie bieten eine für Menschen lesbare Adresse für jeden Webserver, der im Internet verfügbar ist.

Jeder mit dem Internet verbundene Computer kann über eine öffentliche {{Glossary("IP_Address", "IP-Adresse")}} erreicht werden, entweder über eine IPv4-Adresse (z. B. `192.0.2.172`) oder eine IPv6-Adresse (z. B. `2001:db8:8b73:0000:0000:8a2e:0370:1337`).

Computer können solche Adressen problemlos verarbeiten. Für Menschen ist es jedoch schwierig, anhand einer IP-Adresse herauszufinden, wer den Server betreibt oder welchen Dienst die Website anbietet. IP-Adressen sind schwer zu merken und können sich im Laufe der Zeit ändern.

Um diese Probleme zu lösen, verwenden wir für Menschen lesbare Adressen, sogenannte Domainnamen.

## Vertiefung

### Aufbau von Domainnamen

Ein Domainname hat einen einfachen Aufbau aus mehreren Teilen (es kann auch nur ein Teil sein, zwei, drei …). Die Teile sind durch Punkte getrennt und werden **von rechts nach links gelesen**:

![Aufbau des MDN-Domainnamens](structure.png)

Jeder dieser Teile liefert bestimmte Informationen über den gesamten Domainnamen.

- {{Glossary("TLD", "TLD")}} (Top-Level Domain).
  - : TLDs geben Nutzern einen allgemeinen Hinweis auf den Zweck des Dienstes hinter dem Domainnamen. Die allgemeinsten TLDs (`.com`, `.org`, `.net`) verlangen nicht, dass Webdienste bestimmte Kriterien erfüllen. Für einige TLDs gelten jedoch strengere Regeln, damit ihr Zweck deutlicher erkennbar ist. Zum Beispiel:
    - Länderspezifische TLDs wie `.us`, `.fr` oder `.se` können voraussetzen, dass der Dienst in einer bestimmten Sprache angeboten oder in einem bestimmten Land gehostet wird. Sie sollen auf eine Ressource in einer bestimmten Sprache oder einem bestimmten Land hinweisen.
    - TLDs mit `.gov` dürfen nur von Regierungsstellen verwendet werden.
    - Die TLD `.edu` ist Bildungseinrichtungen und akademischen Einrichtungen vorbehalten.

    TLDs können sowohl Sonderzeichen als auch lateinische Zeichen enthalten. Eine TLD darf höchstens 63 Zeichen lang sein, die meisten sind jedoch etwa 2 bis 3 Zeichen lang.

    Die vollständige Liste der TLDs wird [von ICANN gepflegt](https://www.icann.org/en/contracted-parties/registry-operators/resources/list-of-top-level-domains).

- Label (oder Bestandteil)
  - : Labels sind die Teile, die auf die TLD folgen. Ein Label ist eine Zeichenfolge mit einer Länge von einem bis 63 Zeichen, bei der die Groß- und Kleinschreibung keine Rolle spielt. Sie darf nur die Buchstaben `A` bis `Z`, die Ziffern `0` bis `9` und das Zeichen '-' enthalten (das weder am Anfang noch am Ende des Labels stehen darf). `a`, `97` und `hello-strange-person-16-how-are-you` sind Beispiele für gültige Labels.

    Das Label direkt vor der TLD wird auch als _Secondary Level Domain_ (SLD) bezeichnet.

    Ein Domainname kann viele Labels (oder Bestandteile) haben. Drei Labels sind weder vorgeschrieben noch erforderlich, um einen Domainnamen zu bilden. Beispielsweise ist [informatics.ed.ac.uk](https://informatics.ed.ac.uk/) ein gültiger Domainname. Für jede Domain, über die Sie verfügen (z. B. [mozilla.org](https://www.mozilla.org/en-US/)), können Sie „Subdomains“ mit unterschiedlichen Inhalten erstellen, etwa [developer.mozilla.org](/), [support.mozilla.org](https://support.mozilla.org/) oder [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).

### Einen Domainnamen erwerben

#### Wem gehört ein Domainname?

Sie können einen Domainnamen nicht „kaufen“. So wird sichergestellt, dass ungenutzte Domainnamen irgendwann wieder für andere verfügbar werden. Könnte man jeden Domainnamen kaufen, wäre das Web schnell voller ungenutzter Domainnamen, die für andere gesperrt wären.

Stattdessen bezahlen Sie für das Recht, einen Domainnamen ein oder mehrere Jahre lang zu nutzen. Sie können dieses Nutzungsrecht verlängern; dabei hat Ihre Verlängerung Vorrang vor den Anträgen anderer Personen. Der Domainname gehört Ihnen jedoch nie.

Unternehmen, die als Registrare bezeichnet werden, nutzen Domain-Registrierungsstellen, um technische und administrative Informationen zu verwalten, die Sie mit Ihrem Domainnamen verknüpfen.

> [!NOTE]
> Bei manchen Domainnamen ist nicht ein Registrar für diese Verwaltung zuständig. Beispielsweise werden alle Domainnamen unter `.fire` von Amazon verwaltet.

#### Einen verfügbaren Domainnamen finden

So finden Sie heraus, ob ein bestimmter Domainname verfügbar ist:

- Besuchen Sie die Website eines Domain-Registrars. Die meisten bieten einen „whois“-Dienst an, mit dem Sie die Verfügbarkeit eines Domainnamens prüfen können.
- Wenn Sie ein System mit integrierter Shell verwenden, können Sie alternativ den Befehl `whois` eingeben, wie hier für `mozilla.org` gezeigt:

  ```bash
  whois mozilla.org
  ```

  Daraufhin wird Folgendes ausgegeben:

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

Wie Sie sehen, kann ich `mozilla.org` nicht registrieren, weil die Mozilla Foundation den Domainnamen bereits registriert hat.

Sehen wir uns dagegen an, ob ich `afunkydomainname.org` registrieren könnte:

```bash
whois afunkydomainname.org
```

Zum Zeitpunkt der Erstellung dieses Artikels wird Folgendes ausgegeben:

```plain
NOT FOUND
```

Wie Sie sehen, existiert die Domain nicht in der `whois`-Datenbank. Wir könnten also ihre Registrierung beantragen. Gut zu wissen!

#### Einen Domainnamen registrieren

Der Ablauf ist recht einfach:

1. Besuchen Sie die Website eines Registrars.
2. Dort gibt es normalerweise eine gut sichtbare Schaltfläche mit einer Aufforderung wie „Domainnamen sichern“. Klicken Sie darauf.
3. Füllen Sie das Formular mit allen erforderlichen Angaben aus. Achten Sie besonders darauf, den gewünschten Domainnamen richtig zu schreiben. Sobald Sie dafür bezahlt haben, ist es zu spät!
4. Der Registrar informiert Sie, sobald der Domainname ordnungsgemäß registriert ist. Innerhalb weniger Stunden haben alle DNS-Server Ihre DNS-Informationen erhalten.

> [!NOTE]
> Bei diesem Vorgang fragt der Registrar nach Ihrer tatsächlichen Adresse. Geben Sie sie korrekt an, da Registrare in manchen Ländern gezwungen sein können, die Domain zu schließen, wenn sie keine gültige Adresse angeben können.

#### Aktualisierung des DNS

DNS-Datenbanken sind auf DNS-Servern weltweit gespeichert. Alle diese Server greifen auf einige besondere Server zurück, die „autoritative Nameserver“ oder „Top-Level-DNS-Server“ genannt werden. Diese übergeordneten Server verwalten das System.

Wenn Ihr Registrar Informationen zu einer Domain erstellt oder aktualisiert, müssen diese Informationen in jeder DNS-Datenbank aktualisiert werden. Jeder DNS-Server, dem eine bestimmte Domain bekannt ist, speichert die Informationen eine Zeit lang. Danach werden sie automatisch ungültig und anschließend aktualisiert: Der DNS-Server fragt einen autoritativen Server ab und ruft die aktualisierten Informationen von ihm ab. Daher dauert es eine Weile, bis die DNS-Server, denen der Domainname bekannt ist, die aktuellen Informationen erhalten.

### Wie funktioniert eine DNS-Anfrage?

Wie wir bereits gesehen haben, ist es einfacher, einen Domainnamen statt einer IP-Adresse einzugeben, wenn Sie eine Webseite in Ihrem Browser anzeigen möchten. Sehen wir uns den Ablauf an:

1. Geben Sie `mozilla.org` in die Adressleiste Ihres Browsers ein.
2. Ihr Browser fragt Ihren Computer, ob ihm die zu diesem Domainnamen gehörende IP-Adresse bereits bekannt ist (mithilfe eines lokalen DNS-Caches). Falls ja, wird der Name in die IP-Adresse übersetzt, und der Browser handelt den Inhalt mit dem Webserver aus. Damit ist der Vorgang abgeschlossen.
3. Wenn Ihr Computer nicht weiß, welche IP-Adresse sich hinter dem Namen `mozilla.org` verbirgt, fragt er einen DNS-Server. Dessen Aufgabe ist es, Ihrem Computer mitzuteilen, welche IP-Adresse zu einem registrierten Domainnamen gehört.
4. Da der Computer nun die angeforderte IP-Adresse kennt, kann Ihr Browser den Inhalt mit dem Webserver aushandeln.

![Erläuterung der Schritte, die erforderlich sind, um das Ergebnis einer DNS-Anfrage zu erhalten](2014-10-dns-request2.png)

## Nächste Schritte

Wir haben ausführlich über Abläufe und Architektur gesprochen. Zeit, weiterzumachen.

- Wenn Sie selbst aktiv werden möchten, ist jetzt ein guter Zeitpunkt, sich mit Design zu beschäftigen und den [Aufbau einer Webseite](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts) zu erkunden.
- Oder lesen Sie auf Wikipedia mehr über [Domainnamen](https://en.wikipedia.org/wiki/Domain_name).
- Das Tutorial [How DNS works](https://dnsimple.com/comics/how-dns-works/) bietet eine anschauliche und farbenfrohe Erklärung.
