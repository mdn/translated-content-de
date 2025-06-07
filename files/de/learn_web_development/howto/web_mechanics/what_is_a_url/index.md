---
title: Was ist eine URL?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_URL
l10n:
  sourceCommit: 9f935510a1add5dd4c1d8696e770ea7e6ef2f597
---

Dieser Artikel erläutert Uniform Resource Locators (URLs), erklärt, was sie sind und wie sie strukturiert sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie müssen zunächst wissen,
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
      <td>Sie lernen, was eine URL ist und wie sie im Web funktioniert.</td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Eine **URL** (Uniform Resource Locator) ist die Adresse einer einzigartigen Ressource im Internet. Sie ist einer der wichtigsten Mechanismen, die von {{Glossary("Browser", "Browsern")}} verwendet werden, um veröffentlichte Ressourcen wie HTML-Seiten, CSS-Dokumente, Bilder und Ähnliches abzurufen.

Theoretisch verweist jede gültige URL auf eine einzigartige Ressource. In der Praxis gibt es jedoch einige Ausnahmen, die häufigste ist eine URL, die auf eine Ressource verweist, die nicht mehr existiert oder verschoben wurde. Da die Ressource, die durch die URL repräsentiert wird, und die URL selbst vom Webserver verwaltet werden, liegt es in der Verantwortung des Betreibers des Webservers, diese Ressource und ihre zugehörige URL sorgfältig zu verwalten.

## Grundlagen: Anatomie einer URL

Hier sind einige Beispiele für URLs:

```plain
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn_web_development/
https://developer.mozilla.org/en-US/search?q=URL
```

Alle diese URLs können in die Adressleiste Ihres Browsers eingetippt werden, um ihm mitzuteilen, dass er die zugehörige Ressource laden soll, die in allen drei Fällen eine Webseite ist.

Eine URL besteht aus verschiedenen Teilen, von denen einige obligatorisch und andere optional sind. Die wichtigsten Teile sind in der untenstehenden URL hervorgehoben (Details werden in den folgenden Abschnitten gegeben):

![Vollständige URL](mdn-url-all.png)

> [!NOTE]
> Sie könnten eine URL wie eine normale Postadresse betrachten: das _Schema_ repräsentiert den Postdienst, den Sie verwenden möchten, der _Domainname_ ist die Stadt oder der Ort, und der _Port_ ist wie die Postleitzahl; der _Pfad_ repräsentiert das Gebäude, in das Ihre Post geliefert werden soll; die _Parameter_ stehen für zusätzliche Informationen wie z.B. die Nummer der Wohnung im Gebäude; und schließlich repräsentiert der _Anchor_ die eigentliche Person, an die Sie Ihre Post adressiert haben.

> [!NOTE]
> Es gibt [einige zusätzliche Teile und Regeln](https://en.wikipedia.org/wiki/Uniform_Resource_Locator) in Bezug auf URLs, aber diese sind für normale Benutzer oder Webentwickler nicht relevant. Machen Sie sich darüber keine Sorgen, Sie müssen sie nicht kennen, um vollständige und funktionierende URLs zu erstellen und zu verwenden.

## Schema

![Schema](mdn-url-protocol@x2_update.png)

Der erste Teil der URL ist das _Schema_, das das Protokoll angibt, das der Browser verwenden muss, um die Ressource anzufordern (ein Protokoll ist eine festgelegte Methode zum Austauschen oder Übertragen von Daten in einem Computernetzwerk). Normalerweise ist das Protokoll für Webseiten HTTPS oder HTTP (seine nicht gesicherte Version). Zum Adressieren von Webseiten wird eines dieser beiden benötigt, aber Browser können auch andere Schemata wie `mailto:` (um einen E-Mail-Client zu öffnen) verarbeiten, daher sollten Sie nicht überrascht sein, wenn Sie andere Protokolle sehen.

## Autorität

![Autorität](mdn-url-authority.png)

Es folgt die _Autorität_, die durch das Muster `://` vom Schema getrennt wird. Ist die Autorität vorhanden, umfasst sie sowohl die _Domain_ (z.B., `www.example.com`) als auch den _Port_ (`80`), getrennt durch einen Doppelpunkt:

- Die Domain gibt an, welcher Webserver angefordert wird. Üblicherweise handelt es sich um einen [Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name), aber auch eine {{Glossary("IP_address", "IP-Adresse")}} kann verwendet werden (was jedoch selten ist, da es viel weniger praktisch ist).
- Der Port zeigt das technische "Tor" an, das verwendet wird, um auf die Ressourcen des Webservers zuzugreifen. Er wird normalerweise weggelassen, wenn der Webserver die Standardports des HTTP-Protokolls (80 für HTTP und 443 für HTTPS) verwendet, um den Zugriff auf seine Ressourcen zu gewähren. Andernfalls ist er obligatorisch.

> [!NOTE]
> Der Trenner zwischen Schema und Autorität ist `://`. Der Doppelpunkt trennt das Schema vom nächsten Teil der URL, während `//` anzeigt, dass der nächste Teil der URL die Autorität ist.
>
> Ein Beispiel für eine URL, die keine Autorität verwendet, ist der E-Mail-Client (`mailto:foobar`). Er enthält ein Schema, verwendet jedoch keine Autoritätskomponente. Daher wird der Doppelpunkt nicht von zwei Schrägstrichen gefolgt und fungiert nur als Trennzeichen zwischen dem Schema und der E-Mail-Adresse.

## Pfad zur Ressource

![Pfad zur Datei](mdn-url-path@x2.png)

`/path/to/myfile.html` ist der Pfad zur Ressource auf dem Webserver. In den frühen Tagen des Webs stellte ein solcher Pfad einen physischen Dateispeicherort auf dem Webserver dar. Heutzutage ist es meist eine Abstraktion, die von Webservern ohne physische Realität gehandhabt wird.

## Parameter

![Parameter](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` sind zusätzliche Parameter, die dem Webserver zur Verfügung gestellt werden. Diese Parameter sind eine Liste von Schlüssel/Wert-Paaren, die mit dem `&`-Symbol getrennt sind. Der Webserver kann diese Parameter verwenden, um vor dem Zurückgeben der Ressource zusätzliche Dinge auszuführen. Jeder Webserver hat seine eigenen Regeln in Bezug auf Parameter, und der einzige zuverlässige Weg, um zu wissen, ob ein bestimmter Webserver mit Parametern arbeitet, besteht darin, den Betreiber des Webservers zu fragen.

## Anker

![Anker](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` ist ein Anker zu einem anderen Teil der Ressource selbst. Ein Anker stellt eine Art "Lesezeichen" innerhalb der Ressource dar und gibt dem Browser die Richtung, um den Inhalt an der "markierten" Stelle anzuzeigen. In einem HTML-Dokument scrollt der Browser beispielsweise zu dem Punkt, an dem der Anker definiert ist; in einem Video- oder Audiodokument versucht der Browser zur durch den Anker repräsentierten Zeit zu springen. Es ist wichtig zu beachten, dass der Teil nach der **#**, auch bekannt als **Fragment-Identifikator**, niemals mit der Anfrage an den Server gesendet wird.

## Anleitung zur Verwendung von URLs

Jede URL kann direkt in die Adressleiste des Browsers eingegeben werden, um die dahinterstehende Ressource zu erreichen. Aber dies ist nur die Spitze des Eisbergs!

Die {{Glossary("HTML", "HTML")}}-Sprache (siehe [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content)) nutzt URLs intensiv:

- um Links zu anderen Dokumenten mit dem {{HTMLElement("a")}}-Element zu erstellen;
- um ein Dokument mit seinen zugehörigen Ressourcen durch verschiedene Elemente wie {{HTMLElement("link")}} oder {{HTMLElement("script")}} zu verknüpfen;
- um Medien anzuzeigen, wie z.B. Bilder (mit dem {{HTMLElement("img")}}-Element), Videos (mit dem {{HTMLElement("video")}}-Element), Sounds und Musik (mit dem {{HTMLElement("audio")}}-Element) usw.;
- um andere HTML-Dokumente mit dem {{HTMLElement("iframe")}}-Element anzuzeigen.

> [!NOTE]
> Wenn Sie URLs angeben, um Ressourcen als Teil einer Seite zu laden (wie wenn Sie `<script>`, `<audio>`, `<img>`, `<video>` und ähnliche verwenden), sollten Sie im Allgemeinen nur HTTP- und HTTPS-URLs verwenden, mit wenigen Ausnahmen (eine bemerkenswerte ist `data:`; siehe [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data)). Die Verwendung von FTP ist beispielsweise nicht sicher und wird von modernen Browsern nicht mehr unterstützt.

Andere Technologien wie {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}} nutzen URLs ebenfalls intensiv, und sie sind wirklich das Herz des Webs.

## Absolute URLs vs. relative URLs

Was wir oben gesehen haben, wird als _absolute URL_ bezeichnet, aber es gibt auch so etwas wie eine _relative URL_. Der [URL-Standard](https://url.spec.whatwg.org/#absolute-url-string) definiert beide — obwohl er die Begriffe [_absolute URL string_](https://url.spec.whatwg.org/#absolute-url-string) und [_relative URL string_](https://url.spec.whatwg.org/#relative-url-string) verwendet, um sie von [URL-Objekten](https://url.spec.whatwg.org/#url) (die speicherinterne Darstellungen von URLs sind) zu unterscheiden.

Lassen Sie uns untersuchen, was die Unterscheidung zwischen _absolut_ und _relativ_ im Kontext von URLs bedeutet.

Die erforderlichen Teile einer URL hängen stark vom Kontext ab, in dem die URL verwendet wird. In der Adressleiste Ihres Browsers hat eine URL keinen Kontext, daher müssen Sie eine vollständige (oder _absolute_) URL angeben, wie die oben gezeigten. Sie müssen das Protokoll nicht einbeziehen (der Browser verwendet standardmäßig HTTP) oder den Port (der nur erforderlich ist, wenn der angezielte Webserver einen ungewöhnlichen Port verwendet), aber alle anderen Teile der URL sind erforderlich.

Wenn eine URL in einem Dokument verwendet wird, wie in einer HTML-Seite, sind die Dinge etwas anders. Da der Browser bereits die eigene URL des Dokuments hat, kann er diese Informationen verwenden, um die fehlenden Teile einer URL innerhalb dieses Dokuments auszufüllen. Wir können zwischen einer _absoluten URL_ und einer _relativen URL_ unterscheiden, indem wir uns nur den _Pfad_ Teil der URL ansehen. Wenn der Pfadteil der URL mit dem `/`-Zeichen beginnt, ruft der Browser diese Ressource von der obersten Wurzel des Servers ab, ohne Bezug auf den vom aktuellen Dokument gegebenen Kontext.

Schauen wir uns einige Beispiele an, um dies klarer zu machen. Nehmen wir an, die URLs werden innerhalb des Dokuments an folgender URL definiert: `https://developer.mozilla.org/de/docs/Learn_web_development`.

`https://developer.mozilla.org/de/docs/Learn_web_development` selbst ist eine absolute URL. Sie enthält alle erforderlichen Teile, die zum Lokalisieren der Ressource, auf die sie verweist, benötigt werden.

Alle folgenden URLs sind relative URLs:

- Schema-relative URL: `//developer.mozilla.org/de/docs/Learn_web_development` — nur das Protokoll fehlt. Der Browser verwendet dasselbe Protokoll wie das, das zum Laden des Dokuments verwendet wurde, das diese URL beherbergt.
- Domain-relative URL: `/de/docs/Learn_web_development` — das Protokoll und der Domainname fehlen beide. Der Browser verwendet dasselbe Protokoll und denselben Domainnamen wie das, das zum Laden des Dokuments verwendet wurde, das diese URL beherbergt.
- Unterressourcen: `Howto/Web_mechanics/What_is_a_URL` — das Protokoll und der Domainname fehlen und der Pfad beginnt nicht mit `/`. Der Browser versucht, das Dokument in einem Unterverzeichnis desjenigen zu finden, das die aktuelle Ressource enthält. In diesem Fall möchten wir wirklich diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL`.
- Zurück im Verzeichnisbaum: `../CSS/display` — das Protokoll und der Domainname fehlen, und der Pfad beginnt mit `..`. Dies ist aus der UNIX-Dateisystemwelt geerbt — um dem Browser zu sagen, dass wir um eine Ebene nach oben gehen möchten. Hier möchten wir diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn_web_development/../Web/CSS/display`, die vereinfacht werden kann zu: `https://developer.mozilla.org/de/docs/Web/CSS/display`.
- Nur Anker: `#semantic_urls` - alle Teile außer dem Anker fehlen. Der Browser verwendet die URL des aktuellen Dokuments und ersetzt oder fügt den Anker-Teil hinzu. Dies ist nützlich, wenn Sie auf einen bestimmten Teil des aktuellen Dokuments verlinken möchten.

## Benutzernamen und Passwörter in URLs

Etwas weniger häufig als die oben besprochenen Teile einer URL, können Sie einen Benutzernamen und ein Passwort in URLs sehen.

Zum Beispiel:

```plain
https://username:password@www.example.com:80/
```

Wenn vorhanden, werden der Benutzername und das Passwort zwischen den Zeichen `://` und der Autorität gesetzt, mit einem Doppelpunkt zwischen den beiden und einem `@`-Zeichen am Ende.

Ein Benutzername und ein Passwort können in der URL enthalten sein, wenn Sie auf Websites zugreifen, die den Sicherheitsmechanismus der [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) verwenden, um sich sofort anzumelden und das Benutzername/Passwort-Dialogfeld zu umgehen, das sonst zum Eingeben Ihrer Anmeldedaten erscheinen würde.

Obwohl Sie diesen Mechanismus noch in freier Wildbahn sehen könnten, ist er aufgrund von Sicherheitsbedenken veraltet, und moderne Websites neigen dazu, andere Mechanismen für die Authentifizierung zu verwenden. Lesen Sie [Zugriff mit Anmeldedaten in der URL](/de/docs/Web/HTTP/Guides/Authentication#access_using_credentials_in_the_url) für weitere Details.

## Semantische URLs

Trotz ihres sehr technischen Charakters stellen URLs einen für Menschen lesbaren Einstiegspunkt für eine Website dar. Sie können auswendig gelernt werden, und jeder kann sie in die Adressleiste des Browsers eingeben. Menschen stehen im Mittelpunkt des Webs, und daher gilt es als beste Praxis, sogenannte [_semantische URLs_](https://en.wikipedia.org/wiki/Semantic_URL) zu erstellen. Semantische URLs verwenden Wörter mit einer innewohnenden Bedeutung, die von jedem verstanden werden können, unabhängig von ihrem technischen Wissen.

Linguistische Semantik ist für Computer natürlich irrelevant. Sie haben wahrscheinlich oft URLs gesehen, die wie eine Mischung aus zufälligen Zeichen aussehen. Aber es gibt viele Vorteile bei der Erstellung von menschlich lesbaren URLs:

- Es ist einfacher für Sie, sie zu verwalten.
- Sie klären die Benutzer darüber auf, wo sie sich befinden, was sie tun, was sie auf dem Web lesen oder mit dem sie interagieren.
- Einige Suchmaschinen können diese Semantik nutzen, um die Klassifizierung der zugehörigen Seiten zu verbessern.

## Siehe auch

[Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data): URLs, die mit dem `data:`-Schema prefixed sind, erlauben es Inhaltsanbietern, kleine Dateien direkt in Dokumenten einzubetten.
