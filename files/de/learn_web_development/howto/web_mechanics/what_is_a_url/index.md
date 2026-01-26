---
title: Was ist eine URL?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_URL
l10n:
  sourceCommit: 0b9a7f55285ab727f5e14f6d983f2812c70d62d1
---

Dieser Artikel bespricht Uniform Resource Locators (URLs) und erklärt, was sie sind und wie sie strukturiert sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten zuerst wissen,
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
          >wie das Internet funktioniert</a
        >,
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server"
          >was ein Webserver ist</a
        >
        und
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/What_are_hyperlinks"
          >die Konzepte hinter Links im Web</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Sie werden lernen, was eine URL ist und wie sie im Web funktioniert.</td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Eine **URL** (Uniform Resource Locator) ist die Adresse einer einzigartigen Ressource im Internet. Sie ist einer der Hauptmechanismen, die von {{Glossary("Browser", "Browsern")}} verwendet werden, um veröffentlichte Ressourcen abzurufen, wie z.B. HTML-Seiten, CSS-Dokumente, Bilder usw.

Theoretisch verweist jede gültige URL auf eine einzigartige Ressource. In der Praxis gibt es einige Ausnahmen, die häufigste ist eine URL, die auf eine Ressource verweist, die nicht mehr existiert oder die verschoben wurde. Da die Ressource, die von der URL repräsentiert wird, und die URL selbst vom Webserver verwaltet werden, liegt es in der Verantwortung des Eigentümers des Webservers, diese Ressource und ihre zugehörige URL sorgfältig zu verwalten.

## Grundlagen: Anatomie einer URL

Hier sind einige Beispiele für URLs:

```plain
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn_web_development/
https://developer.mozilla.org/en-US/search?q=URL
```

Jede dieser URLs kann in die Adressleiste Ihres Browsers eingegeben werden, um ihm mitzuteilen, dass die zugehörige Ressource geladen werden soll, was in allen drei Fällen eine Webseite ist.

Eine URL besteht aus verschiedenen Teilen, von denen einige obligatorisch und andere optional sind. Die wichtigsten Teile sind in der unten stehenden URL hervorgehoben (Details werden in den folgenden Abschnitten bereitgestellt):

![volle URL](mdn-url-all.png)

> [!NOTE]
> Sie könnten eine URL wie eine normale Postadresse betrachten: das _Schema_ repräsentiert den postalischen Dienst, den Sie nutzen möchten, der _Domainname_ ist die Stadt oder Gemeinde, der _Port_ ist wie die Postleitzahl; der _Pfad_ repräsentiert das Gebäude, an das Ihre Post geliefert werden soll; die _Parameter_ repräsentieren zusätzliche Informationen wie die Nummer der Wohnung im Gebäude; und schließlich repräsentiert das _Anker_ die tatsächliche Person, an die Sie Ihre Post adressiert haben.

> [!NOTE]
> Es gibt [einige zusätzliche Teile und Regeln](https://de.wikipedia.org/wiki/Uniform_Resource_Locator) bezüglich URLs, aber sie sind für normale Benutzer oder Webentwickler nicht relevant. Machen Sie sich keine Sorgen, Sie müssen sie nicht kennen, um vollständig funktionale URLs zu erstellen und zu verwenden.

## Schema

![Schema](mdn-url-protocol@x2_update.png)

Der erste Teil der URL ist das _Schema_, das das Protokoll angibt, das der Browser verwenden muss, um die Ressource anzufordern (ein Protokoll ist eine festgelegte Methode zum Austausch oder Übertragen von Daten über ein Computernetzwerk). Für Websites ist das Protokoll normalerweise HTTPS oder HTTP (die ungesicherte Version). Das Ansprechen von Webseiten erfordert eines dieser beiden, aber Browser können auch andere Schemata wie `mailto:` (um ein Mailprogramm zu öffnen) verarbeiten, sehen Sie also nicht überrascht, wenn Sie andere Protokolle sehen.

## Authority

![Authority](mdn-url-authority.png)

Es folgt die _Authority_, die durch das Zeichenmuster `://` vom Schema getrennt ist. Wenn vorhanden, beinhaltet die Authority sowohl die _Domain_ (z.B. `www.example.com`) als auch den _Port_ (`80`), getrennt durch einen Doppelpunkt:

- Die Domain gibt an, welcher Webserver angefordert wird. Normalerweise ist dies ein [Domainname](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name), aber es kann auch eine {{Glossary("IP_address", "IP-Adresse")}} verwendet werden (was jedoch selten ist, da es viel weniger bequem ist).
- Der Port gibt das technische "Tor" an, das verwendet wird, um auf die Ressourcen auf dem Webserver zuzugreifen. Er wird normalerweise weggelassen, wenn der Webserver die Standard-Ports des HTTP-Protokolls (80 für HTTP und 443 für HTTPS) verwendet, um den Zugriff auf seine Ressourcen zu gewähren. Andernfalls ist er obligatorisch.

> [!NOTE]
> Das Trennzeichen zwischen Schema und Authority ist `://`. Der Doppelpunkt trennt das Schema vom nächsten Teil der URL, während `//` anzeigt, dass der nächste Teil der URL die Authority ist.
>
> Ein Beispiel für eine URL, die keine Authority verwendet, ist der Mailclient (`mailto:foobar`). Es enthält ein Schema, verwendet jedoch keine Authority-Komponente. Daher folgt auf den Doppelpunkt nicht zwei Schrägstriche, sondern dient nur als Trennzeichen zwischen dem Schema und der Mailadresse.

## Pfad zur Ressource

![Pfad zur Datei](mdn-url-path@x2.png)

`/path/to/myfile.html` ist der Pfad zur Ressource auf dem Webserver. In den frühen Tagen des Webs stellte ein solcher Pfad einen physischen Speicherort auf dem Webserver dar. Heutzutage ist es meistens eine Abstraktion, die von Webservern ohne physische Realität gehandhabt wird.

## Parameter

![Parameter](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` sind zusätzliche Parameter, die dem Webserver bereitgestellt werden. Diese Parameter sind eine Liste von Schlüssel/Wert-Paaren, die mit dem `&`-Symbol getrennt sind. Der Webserver kann diese Parameter verwenden, um zusätzliche Aktionen durchzuführen, bevor er die Ressource zurückgibt. Jeder Webserver hat seine eigenen Regeln in Bezug auf Parameter, und der einzige zuverlässige Weg, um zu wissen, ob ein bestimmter Webserver mit Parametern umgeht, besteht darin, den Besitzer des Webservers zu fragen.

## Anker

![Anker](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` ist ein Anker zu einem anderen Bereich der Ressource selbst. Ein Anker stellt eine Art "Lesezeichen" innerhalb der Ressource dar und gibt dem Browser die Anweisungen, den Inhalt an dem "markierten" Punkt anzuzeigen. In einem HTML-Dokument wird der Browser z.B. zu dem Punkt scrollen, an dem der Anker definiert ist; in einem Video- oder Audiodokument versucht der Browser, zu der Zeit zu springen, die der Anker repräsentiert. Es ist erwähnenswert, dass der Teil nach dem **#**, auch bekannt als **Fragment-Identifikator**, niemals mit der Anfrage an den Server gesendet wird.

## Wie man URLs verwendet

Jede URL kann direkt in die Adressleiste des Browsers eingegeben werden, um zu der Ressource dahinter zu gelangen. Aber das ist nur die Spitze des Eisbergs!

Die {{Glossary("HTML", "HTML")}}-Sprache (siehe [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)) nutzt URLs umfassend:

- um Links zu anderen Dokumenten mit dem {{HTMLElement("a")}}-Element zu erstellen;
- um ein Dokument mit seinen zugehörigen Ressourcen durch verschiedene Elemente wie {{HTMLElement("link")}} oder {{HTMLElement("script")}} zu verknüpfen;
- um Medien wie Bilder (mit dem {{HTMLElement("img")}}-Element), Videos (mit dem {{HTMLElement("video")}}-Element), Geräusche und Musik (mit dem {{HTMLElement("audio")}}-Element) usw. anzuzeigen;
- um andere HTML-Dokumente mit dem {{HTMLElement("iframe")}}-Element anzuzeigen.

> [!NOTE]
> Wenn Sie URLs angeben, um Ressourcen als Teil einer Seite zu laden (z.B. beim Verwenden von `<script>`, `<audio>`, `<img>`, `<video>` und dergleichen), sollten Sie im Allgemeinen nur HTTP- und HTTPS-URLs verwenden, mit wenigen Ausnahmen (eine bemerkenswerte ist `data:`; siehe [Data URLs](/de/docs/Web/URI/Reference/Schemes/data)). Die Verwendung von FTP ist beispielsweise nicht sicher und wird von modernen Browsern nicht mehr unterstützt.

Andere Technologien, wie {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}}, nutzen URLs umfangreich, und sie sind wirklich das Herz des Webs.

## Absolute URLs vs. relative URLs

Was wir oben gesehen haben, wird eine _absolute URL_ genannt, aber es gibt auch etwas, das als _relative URL_ bezeichnet wird. Der [URL-Standard](https://url.spec.whatwg.org/#absolute-url-string) definiert beide — obwohl er die Begriffe [_absolute URL-Zeichenfolge_](https://url.spec.whatwg.org/#absolute-url-string) und [_relative URL-Zeichenfolge_](https://url.spec.whatwg.org/#relative-url-string) verwendet, um sie von [URL-Objekten](https://url.spec.whatwg.org/#url) (die In-Memory-Darstellungen von URLs sind) zu unterscheiden.

Lassen Sie uns untersuchen, was die Unterscheidung zwischen _absolut_ und _relativ_ im Kontext von URLs bedeutet.

Die erforderlichen Teile einer URL hängen in hohem Maße vom Kontext ab, in dem die URL verwendet wird. In der Adressleiste Ihres Browsers hat eine URL keinen Kontext, daher müssen Sie eine vollständige (oder _absolute_) URL angeben, wie die, die wir oben gesehen haben. Sie müssen das Protokoll nicht einschließen (der Browser verwendet standardmäßig HTTP) oder den Port (der nur erforderlich ist, wenn der angezielte Webserver einen ungewöhnlichen Port verwendet), aber alle anderen Teile der URL sind erforderlich.

Wenn eine URL innerhalb eines Dokuments verwendet wird, z.B. auf einer HTML-Seite, sieht dies ein wenig anders aus. Da der Browser bereits die eigene URL des Dokumentes hat, kann er diese Informationen verwenden, um die fehlenden Teile einer in diesem Dokument verfügbaren URL zu ergänzen. Wir können zwischen einer _absoluten URL_ und einer _relativen URL_ unterscheiden, indem wir nur auf den _Pfad_-Teil der URL schauen. Wenn der Pfad-Teil der URL mit dem Zeichen `/` beginnt, wird der Browser diese Ressource vom obersten Root des Servers abrufen, ohne Bezug auf den vom aktuellen Dokument gegebenen Kontext.

Lassen Sie uns einige Beispiele ansehen, um dies klarer zu machen. Nehmen wir an, dass die URLs aus dem Dokument stammen, das sich unter der folgenden URL befindet: `https://developer.mozilla.org/de/docs/Learn_web_development`.

`https://developer.mozilla.org/de/docs/Learn_web_development` selbst ist eine absolute URL. Sie enthält alle notwendigen Teile, die benötigt werden, um die Ressource zu lokalisieren, auf die sie verweist.

Alle folgenden URLs sind relative URLs:

- Schema-relative URL: `//developer.mozilla.org/de/docs/Learn_web_development` — nur das Protokoll fehlt. Der Browser verwendet dasselbe Protokoll wie das, das zum Laden des Dokuments verwendet wurde, welches diese URL enthält.
- Domain-relative URL: `/de/docs/Learn_web_development` — das Protokoll und der Domainname fehlen. Der Browser verwendet dasselbe Protokoll und denselben Domainnamen wie der, der zum Laden des Dokuments verwendet wurde, welches diese URL enthält.
- Unterressourcen: `Howto/Web_mechanics/What_is_a_URL` — das Protokoll und der Domainname fehlen, und der Pfad beginnt nicht mit `/`. Der Browser wird versuchen, das Dokument in einem Unterverzeichnis desjenigen zu finden, das die aktuelle Ressource enthält. In diesem Fall möchten wir wirklich diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL`.
- Im Verzeichnisbaum zurückgehen: `../Web/CSS/Reference` — das Protokoll und der Domainname fehlen, und der Pfad beginnt mit `..`. Dies stammt aus der UNIX-Dateisystemwelt — um dem Browser mitzuteilen, dass wir um eine Ebene höher gehen möchten. Hier möchten wir diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn_web_development/../Web/CSS/Reference`, die vereinfacht werden kann zu: `https://developer.mozilla.org/de/docs/Web/CSS/Reference`.
- Nur Anker: `#semantic_urls` - alle Teile fehlen außer dem Anker. Der Browser wird die URL des aktuellen Dokuments verwenden und den Ankerteil daran ersetzen oder hinzufügen. Dies ist nützlich, wenn Sie auf einen bestimmten Teil des aktuellen Dokuments verlinken möchten.

## URL-Benutzernamen und -Passwörter

Weniger verbreitet als die oben diskutierten URL-Teile, können Sie Benutzernamen und Passwort in URLs sehen.

Zum Beispiel:

```plain
https://username:password@www.example.com:80/
```

Wenn sie enthalten sind, werden der Benutzername und das Passwort zwischen den `://`-Zeichen und der Authority gesetzt, mit einem Doppelpunkt dazwischen und einem At-Zeichen (`@`) am Ende.

Ein Benutzername und Passwort können in der URL enthalten sein, wenn auf Websites zugegriffen wird, die den [HTTP-Authentifizierungsmechanismus](/de/docs/Web/HTTP/Guides/Authentication) verwenden, um sich sofort auf einer Website anzumelden und das ansonsten erscheinende Benutzername/Passwort-Dialogfeld zu überspringen, um Ihre Anmeldeinformationen einzugeben.

Obwohl Sie dieses Verfahren noch in der freien Wildbahn sehen könnten, ist es aufgrund von Sicherheitsbedenken veraltet und moderne Websites tendieren dazu, andere Mechanismen für die Authentifizierung zu verwenden. Siehe [Zugriff mit Anmeldedaten in der URL](/de/docs/Web/HTTP/Guides/Authentication#access_using_credentials_in_the_url) für weitere Details.

## Semantische URLs

Trotz ihres sehr technischen Geschmacks stellen URLs einen menschenlesbaren Einstiegspunkt für eine Website dar. Sie können gespeichert werden, und jeder kann sie in die Adressleiste eines Browsers eingeben. Menschen stehen im Mittelpunkt des Webs, und daher gilt es als beste Praxis, das zu erstellen, was [_semantische URLs_](https://de.wikipedia.org/wiki/Semantischer_URL) genannt wird. Semantische URLs verwenden Worte mit inhärenter Bedeutung, die von jedem verstanden werden können, unabhängig von ihrem technischen Know-how.

Linguistische Semantik ist natürlich für Computer irrelevant. Sie haben wahrscheinlich oft URLs gesehen, die wie Mashups aus zufälligen Zeichen aussehen. Aber es gibt viele Vorteile, menschenlesbare URLs zu erstellen:

- Es ist für Sie einfacher, sie zu manipulieren.
- Es klärt für die Benutzer, wo sie sich befinden, was sie tun, was sie lesen oder mit was sie im Web interagieren.
- Einige Suchmaschinen können diese Semantik verwenden, um die Klassifizierung der zugehörigen Seiten zu verbessern.

## Siehe auch

[Data URLs](/de/docs/Web/URI/Reference/Schemes/data): Mit dem `data:`-Schema vorangestellte URLs ermöglichen es Inhaltsanbietern, kleine Dateien direkt in Dokumente einzubetten.
