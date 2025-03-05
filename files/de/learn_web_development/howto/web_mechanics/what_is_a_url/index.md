---
title: Was ist eine URL?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_URL
l10n:
  sourceCommit: 5ef2a133a42cf14c0a6b486d442dfa3ece77f60e
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Dieser Artikel behandelt Uniform Resource Locators (URLs), erklärt, was sie sind und wie sie strukturiert sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten zunächst wissen,
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

Eine **URL** (Uniform Resource Locator) ist die Adresse einer eindeutigen Ressource im Internet. Sie ist einer der wichtigsten Mechanismen, die von {{Glossary("Browser", "Browsers")}} verwendet werden, um veröffentlichte Ressourcen wie HTML-Seiten, CSS-Dokumente, Bilder usw. abzurufen.

Theoretisch verweist jede gültige URL auf eine eindeutige Ressource. In der Praxis gibt es einige Ausnahmen, die häufigste ist, dass eine URL auf eine Ressource verweist, die nicht mehr existiert oder verschoben wurde. Da die Ressource, die durch die URL dargestellt wird, und die URL selbst vom Webserver verwaltet werden, liegt es in der Verantwortung des Eigentümers des Webservers, diese Ressource und ihre zugehörige URL sorgfältig zu verwalten.

## Grundlagen: Aufbau einer URL

Hier sind einige Beispiele für URLs:

```plain
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn_web_development/
https://developer.mozilla.org/en-US/search?q=URL
```

Jede dieser URLs kann in die Adressleiste Ihres Browsers eingegeben werden, um ihm zu sagen, dass er die zugehörige Ressource laden soll, die in allen drei Fällen eine Webseite ist.

Eine URL besteht aus verschiedenen Teilen, von denen einige obligatorisch und andere optional sind. Die wichtigsten Teile sind in der untenstehenden URL hervorgehoben (Einzelheiten werden in den folgenden Abschnitten bereitgestellt):

![volle URL](mdn-url-all.png)

> [!NOTE]
> Sie könnten sich eine URL wie eine normale Postadresse vorstellen: Das _scheme_ repräsentiert den Postdienst, den Sie verwenden möchten, der _domain name_ ist die Stadt oder der Ort, und der _port_ ist wie die Postleitzahl; der _path_ repräsentiert das Gebäude, in das Ihre Post zugestellt werden soll; die _parameters_ repräsentieren zusätzliche Informationen wie die Wohnungsnummer in dem Gebäude; und schließlich ist der _anchor_ die tatsächliche Person, an die Sie Ihre Post adressiert haben.

> [!NOTE]
> Es gibt [einige zusätzliche Teile und Regeln](https://en.wikipedia.org/wiki/Uniform_Resource_Locator) in Bezug auf URLs, die jedoch für normale Nutzer oder Webentwickler nicht relevant sind. Machen Sie sich keine Sorgen darüber, Sie müssen diese nicht kennen, um vollständig funktionsfähige URLs zu erstellen und zu verwenden.

## Scheme

![Scheme](mdn-url-protocol@x2_update.png)

Der erste Teil der URL ist das _scheme_, welches das Protokoll angibt, das der Browser verwenden muss, um die Ressource anzufordern (ein Protokoll ist eine festgelegte Methode zum Austausch oder Übertragen von Daten über ein Computernetzwerk). Üblicherweise ist das Protokoll für Websites HTTPS oder HTTP (dessen ungesicherte Version). Das Ansprechen von Webseiten erfordert eines dieser beiden, aber Browser können auch andere Schemes verarbeiten, wie `mailto:` (um einen E-Mail-Client zu öffnen), daher seien Sie nicht überrascht, wenn Sie andere Protokolle sehen.

## Authority

![Authority](mdn-url-authority.png)

Darauf folgt die _authority_, die durch das Zeichenmuster `://` vom Scheme getrennt wird. Wenn vorhanden, umfasst die Authority sowohl die _domain_ (z.B. `www.example.com`) als auch den _port_ (`80`), getrennt durch einen Doppelpunkt:

- Die Domain gibt an, welcher Webserver angefordert wird. Üblicherweise ist dies ein [domain name](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name), aber eine {{Glossary("IP_address", "IP address")}} kann ebenfalls verwendet werden (allerdings ist dies selten, da es viel weniger bequem ist).
- Der Port gibt das technische "Tor" an, das verwendet wird, um auf die Ressourcen des Webservers zuzugreifen. Er wird normalerweise weggelassen, wenn der Webserver die Standardports des HTTP-Protokolls (80 für HTTP und 443 für HTTPS) verwendet, um den Zugang zu seinen Ressourcen zu gewähren. Andernfalls ist er obligatorisch.

> [!NOTE]
> Der Trenner zwischen Scheme und Authority ist `://`. Der Doppelpunkt trennt das Scheme vom nächsten Teil der URL, während `//` darauf hinweist, dass der nächste Teil der URL die Authority ist.
>
> Ein Beispiel für eine URL, die keine Authority verwendet, ist der E-Mail-Client (`mailto:foobar`). Er enthält ein Scheme, verwendet jedoch keine Authority-Komponente. Daher folgt auf den Doppelpunkt nicht zwei Schrägstriche, sondern er fungiert lediglich als Trennzeichen zwischen dem Scheme und der E-Mail-Adresse.

## Pfad zur Ressource

![Pfad zur Datei](mdn-url-path@x2.png)

`/path/to/myfile.html` ist der Pfad zur Ressource auf dem Webserver. In den frühen Tagen des Webs repräsentierte ein solcher Pfad einen physischen Dateispeicherort auf dem Webserver. Heutzutage ist es meist eine Abstraktion, die von Webservern ohne physische Realität verwaltet wird.

## Parameter

![Parameter](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` sind zusätzliche Parameter, die dem Webserver bereitgestellt werden. Diese Parameter sind eine Liste von Schlüssel/Wert-Paaren, die mit dem `&` Symbol getrennt sind. Der Webserver kann diese Parameter verwenden, um zusätzliche Dinge zu tun, bevor er die Ressource zurückgibt. Jeder Webserver hat seine eigenen Regeln bezüglich der Parameter, und der einzige verlässliche Weg zu wissen, ob ein bestimmter Webserver Parameter verarbeitet, besteht darin, den Besitzer des Webservers zu fragen.

## Anker

![Anker](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` ist ein Anker zu einem anderen Teil der Ressource selbst. Ein Anker stellt eine Art "Lesezeichen" innerhalb der Ressource dar und gibt dem Browser Anweisungen, den Inhalt an der "markierten" Stelle anzuzeigen. In einem HTML-Dokument wird der Browser zum Beispiel zu dem Punkt scrollen, an dem der Anker definiert ist; in einem Video- oder Audiodokument wird der Browser versuchen, zu der Zeit zu gehen, die der Anker darstellt. Es ist erwähnenswert, dass der Teil nach dem **#**, auch bekannt als **Fragment-Identifier**, niemals zum Server mit der Anfrage gesendet wird.

## Anleitung zur Verwendung von URLs

Jede URL kann direkt in die Adressleiste des Browsers eingegeben werden, um die dahinterliegende Ressource zu erreichen. Aber das ist nur die Spitze des Eisbergs!

Die {{Glossary("HTML", "HTML")}} Sprache (siehe [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)) nutzt URLs ausgiebig:

- um Links zu anderen Dokumenten mit dem {{HTMLElement("a")}} Element zu erstellen;
- um ein Dokument mit seinen verwandten Ressourcen durch verschiedene Elemente wie {{HTMLElement("link")}} oder {{HTMLElement("script")}} zu verknüpfen;
- um Medien wie Bilder (mit dem {{HTMLElement("img")}} Element), Videos (mit dem {{HTMLElement("video")}} Element), Sounds und Musik (mit dem {{HTMLElement("audio")}} Element) anzuzeigen;
- um andere HTML-Dokumente mit dem {{HTMLElement("iframe")}} Element anzuzeigen.

> [!NOTE]
> Beim Angeben von URLs zum Laden von Ressourcen als Teil einer Seite (zum Beispiel bei der Verwendung von `<script>`, `<audio>`, `<img>`, `<video>` und dergleichen) sollten Sie im Allgemeinen nur HTTP- und HTTPS-URLs verwenden, mit wenigen Ausnahmen (eine bemerkenswerte ist `data:`; siehe [Data URLs](/de/docs/Web/URI/Reference/Schemes/data)). Die Verwendung von FTP zum Beispiel ist nicht sicher und wird von modernen Browsern nicht mehr unterstützt.

Andere Technologien, wie {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}}, verwenden URLs in großem Umfang, und diese sind wirklich das Herzstück des Webs.

## Absolute URLs vs. relative URLs

Was wir oben gesehen haben, nennt man eine _absolute URL_, aber es gibt auch etwas, das man _relative URL_ nennt. Der [URL-Standard](https://url.spec.whatwg.org/#absolute-url-string) definiert beide – obwohl er die Begriffe [_absolute URL string_](https://url.spec.whatwg.org/#absolute-url-string) und [_relative URL string_](https://url.spec.whatwg.org/#relative-url-string) verwendet, um sie von [URL objects](https://url.spec.whatwg.org/#url) zu unterscheiden (die in-memory Repräsentationen von URLs sind).

Lassen Sie uns untersuchen, was der Unterschied zwischen _absolut_ und _relativ_ im Kontext von URLs bedeutet.

Die erforderlichen Teile einer URL hängen in großem Maße vom Kontext ab, in dem die URL verwendet wird. In der Adressleiste Ihres Browsers hat eine URL keinen Kontext, daher müssen Sie eine vollständige (oder _absolute_) URL angeben, wie die, die wir oben gesehen haben. Sie müssen das Protokoll nicht angeben (der Browser verwendet standardmäßig HTTP) oder den Port (der nur erforderlich ist, wenn der angezielte Webserver einen ungewöhnlichen Port verwendet), aber alle anderen Teile der URL sind notwendig.

Wenn eine URL innerhalb eines Dokuments verwendet wird, wie in einer HTML-Seite, sehen die Dinge ein wenig anders aus. Da der Browser die eigene URL des Dokuments bereits hat, kann er diese Informationen verwenden, um die fehlenden Teile einer URL innerhalb dieses Dokuments auszufüllen. Wir können zwischen einer _absoluten URL_ und einer _relativen URL_ unterscheiden, indem wir nur den _Pfad_ Teil der URL betrachten. Wenn der Pfadteil der URL mit dem Zeichen `/` beginnt, wird der Browser diese Ressource aus dem obersten Verzeichnis des Servers abrufen, ohne Bezug auf den Kontext des aktuellen Dokuments.

Schauen wir uns einige Beispiele an, um dies klarer zu machen. Nehmen wir an, dass die URLs innerhalb des Dokuments definiert sind, das sich unter der folgenden URL befindet: `https://developer.mozilla.org/de/docs/Learn_web_development`.

`https://developer.mozilla.org/de/docs/Learn_web_development` selbst ist eine absolute URL. Sie enthält alle notwendigen Teile, um die Ressource zu lokalisieren, auf die sie verweist.

Alle folgenden URLs sind relative URLs:

- Scheme-relative URL: `//developer.mozilla.org/de/docs/Learn_web_development` — nur das Protokoll fehlt. Der Browser wird dasselbe Protokoll verwenden, das auch zum Laden des Dokuments verwendet wurde, das diese URL enthält.
- Domain-relative URL: `/de/docs/Learn_web_development` — sowohl das Protokoll als auch der Domain-Name fehlen. Der Browser wird dasselbe Protokoll und denselben Domain-Namen verwenden, die auch zum Laden des Dokuments verwendet wurden, das diese URL enthält.
- Unterressourcen: `Howto/Web_mechanics/What_is_a_URL` — das Protokoll und der Domain-Name fehlen, und der Pfad beginnt nicht mit `/`. Der Browser wird versuchen, das Dokument in einem Unterverzeichnis desjenigen zu finden, das die aktuelle Ressource enthält. In diesem Fall möchten wir wirklich diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL`.
- Im Verzeichnisbaum zurückgehen: `../CSS/display` — das Protokoll und der Domainname fehlen, und der Pfad beginnt mit `..`. Dies stammt aus der UNIX-Dateisystemwelt – um dem Browser zu sagen, dass wir um eine Ebene nach oben gehen wollen. Wir möchten diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn_web_development/../Web/CSS/display`, die vereinfacht werden kann zu: `https://developer.mozilla.org/de/docs/Web/CSS/display`.
- Nur Anker: `#semantic_urls` - alle Teile fehlen außer dem Anker. Der Browser wird die aktuelle URL des Dokuments verwenden und den Ankerteil ersetzen oder hinzufügen. Dies ist nützlich, wenn Sie auf einen bestimmten Teil des aktuellen Dokuments verlinken möchten.

## Semantische URLs

Trotz ihres sehr technischen Charakters stellen URLs einen leicht lesbaren Einstiegspunkt für eine Website dar. Sie können auswendig gelernt werden, und jeder kann sie in die Adressleiste eines Browsers eingeben. Menschen stehen im Mittelpunkt des Webs, daher ist es als Best Practice angesehen, sogenannte [_semantische URLs_](https://en.wikipedia.org/wiki/Semantic_URL) zu erstellen. Semantische URLs verwenden Wörter mit inherenter Bedeutung, die von jedem verstanden werden können, unabhängig von ihrem technischen Wissen.

Linguistische Semantik ist natürlich für Computer irrelevant. Sie haben wahrscheinlich oft URLs gesehen, die wie eine Mischung aus zufälligen Zeichen aussehen. Aber es gibt viele Vorteile, menschlich lesbare URLs zu erstellen:

- Es ist einfacher für Sie, sie zu manipulieren.
- Es klärt die Dinge für Nutzer in Bezug auf den Standort, was sie tun, was sie lesen oder im Web interagieren.
- Einige Suchmaschinen können diese Semantik verwenden, um die Klassifizierung der zugehörigen Seiten zu verbessern.

## Siehe auch

[Data URLs](/de/docs/Web/URI/Reference/Schemes/data): URLs, die mit dem `data:` Schema beginnen, ermöglichen es Inhaltsanbietern, kleine Dateien in Dokumente einzubetten.
