---
title: Was ist eine URL?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_URL
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Dieser Artikel bespricht Uniform Resource Locators (URLs) und erklärt, was sie sind und wie sie aufgebaut sind.

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
      <td>Sie lernen, was eine URL ist und wie sie im Web funktioniert.</td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Eine **URL** (Uniform Resource Locator) ist die Adresse einer eindeutigen Ressource im Internet. Es ist einer der wichtigsten Mechanismen, die von {{Glossary("Browser", "Browsern")}} verwendet werden, um veröffentlichte Ressourcen wie HTML-Seiten, CSS-Dokumente, Bilder usw. abzurufen.

Theoretisch verweist jede gültige URL auf eine eindeutige Ressource. In der Praxis gibt es jedoch einige Ausnahmen, die häufigste ist eine URL, die auf eine Ressource zeigt, die nicht mehr existiert oder verschoben wurde. Da die Ressource, die durch die URL repräsentiert wird, und die URL selbst vom Webserver verwaltet werden, liegt es in der Verantwortung des Eigentümers des Webservers, diese Ressource und die zugehörige URL sorgfältig zu verwalten.

## Grundlagen: Aufbau einer URL

Hier sind einige Beispiele für URLs:

```plain
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn_web_development/
https://developer.mozilla.org/en-US/search?q=URL
```

Alle diese URLs können in die Adressleiste Ihres Browsers eingegeben werden, um die zugehörige Ressource zu laden, die in allen drei Fällen eine Webseite ist.

Eine URL besteht aus verschiedenen Teilen, von denen einige obligatorisch und andere optional sind. Die wichtigsten Teile sind in der unten stehenden URL hervorgehoben (Details werden in den folgenden Abschnitten beschrieben):

![vollständige URL](mdn-url-all.png)

> [!NOTE]
> Sie können sich eine URL wie eine normale Postadresse vorstellen: Das _Schema_ repräsentiert den Postdienst, den Sie verwenden möchten, der _Domain-Name_ ist die Stadt oder der Ort, und der _Port_ ist wie die Postleitzahl; der _Pfad_ repräsentiert das Gebäude, in das Ihre Post geliefert werden soll; die _Parameter_ enthalten zusätzliche Informationen, wie etwa die Wohnungsnummer im Gebäude; und schließlich repräsentiert der _Anchor_ die eigentliche Person, an die Ihre Post gerichtet ist.

> [!NOTE]
> Es gibt [einige zusätzliche Teile und Regeln](https://en.wikipedia.org/wiki/Uniform_Resource_Locator) bezüglich URLs, aber diese sind für normale Nutzer oder Webentwickler nicht relevant. Machen Sie sich keine Sorgen, Sie müssen diese nicht kennen, um funktionsfähige URLs zu erstellen und zu verwenden.

## Schema

![Schema](mdn-url-protocol@x2_update.png)

Der erste Teil einer URL ist das _Schema_, das das Protokoll angibt, das der Browser verwenden muss, um die Ressource anzufordern (ein Protokoll ist eine festgelegte Methode zum Austausch oder zur Übertragung von Daten in einem Computernetzwerk). Für Websites wird in der Regel HTTPS oder HTTP (die nicht gesicherte Version) verwendet. Zum Adressieren von Webseiten wird eines dieser beiden benötigt, aber Browser können auch andere Protokolle wie `mailto:` (zum Öffnen eines E-Mail-Clients) verarbeiten. Seien Sie also nicht überrascht, wenn Sie andere Protokolle sehen.

## Autorität

![Autorität](mdn-url-authority.png)

Als nächstes folgt die _Autorität_, die durch das Zeichenmuster `://` vom Schema getrennt wird. Wenn vorhanden, umfasst die Autorität sowohl die _Domain_ (z. B. `www.example.com`) als auch den _Port_ (`80`), getrennt durch einen Doppelpunkt:

- Die Domain gibt an, welcher Webserver angefordert wird. Normalerweise ist dies ein [Domain-Name](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name), aber manchmal kann auch eine {{Glossary("IP_address", "IP-Adresse")}} verwendet werden (das ist jedoch selten, da es weniger praktisch ist).
- Der Port gibt das technische "Tor" an, das verwendet wird, um auf die Ressourcen des Webservers zuzugreifen. Er wird normalerweise weggelassen, wenn der Webserver die Standard-Ports des HTTP-Protokolls (80 für HTTP und 443 für HTTPS) verwendet. Andernfalls ist er obligatorisch.

> [!NOTE]
> Der Separator zwischen Schema und Autorität ist `://`. Der Doppelpunkt trennt das Schema vom nächsten Teil der URL, während `//` angibt, dass der nächste Teil der URL die Autorität ist.
>
> Ein Beispiel für eine URL, die keine Autorität verwendet, ist der E-Mail-Client (`mailto:foobar`). Es enthält ein Schema, verwendet jedoch keine Autoritätskomponente. Daher wird der Doppelpunkt nicht von zwei Schrägstrichen gefolgt und dient nur als Trennzeichen zwischen Schema und E-Mail-Adresse.

## Pfad zur Ressource

![Pfad zur Datei](mdn-url-path@x2.png)

`/path/to/myfile.html` ist der Pfad zur Ressource auf dem Webserver. In den frühen Tagen des Internets stellte ein solcher Pfad einen physischen Dateispeicherort auf dem Webserver dar. Heutzutage ist es meist eine Abstraktion, die von Webservern ohne physische Realität verwaltet wird.

## Parameter

![Parameter](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` sind zusätzliche Parameter, die dem Webserver bereitgestellt werden. Diese Parameter sind eine Liste von Schlüssel/Wert-Paaren, die mit dem Symbol `&` getrennt sind. Der Webserver kann diese Parameter verwenden, um zusätzliche Aktionen auszuführen, bevor er die Ressource zurückgibt. Jeder Webserver hat seine eigenen Regeln bezüglich der Parameter, und die einzige zuverlässige Möglichkeit zu wissen, wie genau ein bestimmter Webserver mit Parametern umgeht, besteht darin, den Eigentümer des Webservers zu fragen.

## Anker

![Anker](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` ist ein Anker zu einem anderen Teil der Ressource selbst. Ein Anker stellt eine Art "Lesezeichen" innerhalb der Ressource dar und gibt dem Browser die Anweisungen, den Inhalt an der "markierten" Stelle anzuzeigen. In einem HTML-Dokument wird der Browser beispielsweise zu dem Punkt scrollen, an dem der Anker definiert ist; in einem Video- oder Audio-Dokument wird der Browser versuchen, die Zeit zu erreichen, die der Anker repräsentiert. Es ist bemerkenswert, dass der Teil nach dem **#**, auch bekannt als **Fragment-Identifier**, niemals mit der Anfrage an den Server gesendet wird.

## Anleitung zur Verwendung von URLs

Jede URL kann direkt in die Adressleiste eines Browsers eingegeben werden, um zur zugrunde liegenden Ressource zu gelangen. Aber dies ist nur die Spitze des Eisbergs!

Die {{Glossary("HTML", "HTML")}}-Sprache (siehe [Inhalte strukturieren mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)) nutzt URLs ausgiebig:

- um Links zu anderen Dokumenten mit dem {{HTMLElement("a")}}-Element zu erstellen;
- um ein Dokument mit seinen zugehörigen Ressourcen über verschiedene Elemente wie {{HTMLElement("link")}} oder {{HTMLElement("script")}} zu verknüpfen;
- um Medien wie Bilder (mit dem {{HTMLElement("img")}}-Element), Videos (mit dem {{HTMLElement("video")}}-Element), Ton und Musik (mit dem {{HTMLElement("audio")}}-Element) usw. anzuzeigen;
- um andere HTML-Dokumente mit dem {{HTMLElement("iframe")}}-Element darzustellen.

> [!NOTE]
> Wenn Sie URLs verwenden, um Ressourcen als Teil einer Seite zu laden (z. B. mit `<script>`, `<audio>`, `<img>`, `<video>` usw.), sollten Sie in der Regel nur HTTP- und HTTPS-URLs verwenden, mit wenigen Ausnahmen (eine bemerkenswerte ist `data:`; siehe [Data URLs](/de/docs/Web/URI/Reference/Schemes/data)). Die Verwendung von FTP ist beispielsweise unsicher und wird von modernen Browsern nicht mehr unterstützt.

Andere Technologien wie {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}} verwenden URLs intensiv und bilden wirklich das Herz des Internets.

## Absolute URLs vs. relative URLs

Was wir oben gesehen haben, wird als _absolute URL_ bezeichnet, aber es gibt auch etwas, das als _relative URL_ bezeichnet wird. Der [URL-Standard](https://url.spec.whatwg.org/#absolute-url-string) definiert beide Begriffe — verwendet jedoch die Begriffe [_absolute URL string_](https://url.spec.whatwg.org/#absolute-url-string) und [_relative URL string_](https://url.spec.whatwg.org/#relative-url-string), um sie von [URL-Objekten](https://url.spec.whatwg.org/#url) (In-Memory-Repräsentationen von URLs) zu unterscheiden.

Lassen Sie uns nun den Unterschied zwischen _absolut_ und _relativ_ im Kontext von URLs untersuchen.

Die erforderlichen Teile einer URL hängen stark vom Kontext ab, in dem die URL verwendet wird. In der Adressleiste Ihres Browsers hat eine URL keinen Kontext, daher müssen Sie eine vollständige (oder _absolute_) URL wie die oben genannten angeben. Sie müssen nicht das Protokoll angeben (der Browser verwendet standardmäßig HTTP) oder den Port (dieser wird nur benötigt, wenn der Ziel-Webserver einen ungewöhnlichen Port verwendet), aber alle anderen Teile der URL sind notwendig.

Wenn eine URL innerhalb eines Dokuments verwendet wird, z. B. in einer HTML-Seite, ist die Situation etwas anders. Da der Browser bereits die URL des Dokuments kennt, kann er diese Informationen verwenden, um die fehlenden Teile jeder innerhalb des Dokuments verfügbaren URL zu ergänzen. Wir können zwischen einer _absoluten URL_ und einer _relativen URL_ nur anhand des _Pfad_-Teils der URL unterscheiden. Wenn der Pfad-Teil der URL mit dem Zeichen `/` beginnt, ruft der Browser diese Ressource aus dem Stammverzeichnis des Servers ab, ohne sich auf den Kontext des aktuellen Dokuments zu beziehen.

Hier sind einige Beispiele, um dies zu verdeutlichen. Angenommen, die URLs sind innerhalb des Dokuments definiert, das sich an folgender URL befindet: `https://developer.mozilla.org/de/docs/Learn`.

`https://developer.mozilla.org/de/docs/Learn` selbst ist eine absolute URL. Sie enthält alle notwendigen Teile, die erforderlich sind, um die Ressource zu lokalisieren, auf die sie verweist.

Alle folgenden URLs sind relative URLs:

- Scheme-relative URL: `//developer.mozilla.org/de/docs/Learn` — es fehlt lediglich das Protokoll. Der Browser verwendet dasselbe Protokoll wie das, das verwendet wurde, um das Dokument zu laden, das diese URL enthält.
- Domain-relative URL: `/de/docs/Learn` — es fehlen sowohl das Protokoll als auch der Domain-Name. Der Browser verwendet dasselbe Protokoll und denselben Domain-Namen wie der, der verwendet wurde, um das Dokument zu laden, das diese URL enthält.
- Sub-Ressourcen: `Common_questions/Web_mechanics/What_is_a_URL` — es fehlen das Protokoll und der Domain-Name, und der Pfad beginnt nicht mit `/`. Der Browser versucht, das Dokument in einem Unterverzeichnis desjenigen zu finden, das die aktuelle Ressource enthält. In diesem Fall möchten wir wirklich diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL`.
- Im Verzeichnisbaum zurückgehen: `../CSS/display` — es fehlen Protokoll und Domain-Name, und der Pfad beginnt mit `..`. Dies stammt aus der UNIX-Dateisystemwelt — um dem Browser anzuzeigen, dass wir um ein Verzeichnisebene zurückgehen möchten. Hier möchten wir diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn_web_development/../Web/CSS/display`, die vereinfacht werden kann zu: `https://developer.mozilla.org/de/docs/Web/CSS/display`.
- Nur Anker: `#semantic_urls` – es fehlen alle Teile außer dem Anker. Der Browser verwendet die URL des aktuellen Dokuments und ersetzt oder ergänzt den Anker-Teil. Dies ist nützlich, wenn Sie auf einen bestimmten Teil des aktuellen Dokuments verlinken möchten.

## Semantische URLs

Trotz ihres sehr technischen Charakters stellen URLs einen menschenlesbaren Einstiegspunkt für eine Website dar. Sie können gemerkt werden, und jeder kann sie in die Adressleiste eines Browsers eingeben. Menschen stehen im Zentrum des Internets, und deshalb gilt es als bewährte Praxis, sogenannte [_semantische URLs_](https://en.wikipedia.org/wiki/Semantic_URL) zu erstellen. Semantische URLs verwenden Wörter mit inhärenter Bedeutung, die jeder, unabhängig von seinem technischen Wissen, verstehen kann.

Linguistische Semantik ist natürlich für Computer irrelevant. Sie haben wahrscheinlich oft URLs gesehen, die wie eine Kombination aus zufälligen Zeichen aussehen. Aber es gibt viele Vorteile, menschenlesbare URLs zu erstellen:

- Es ist einfacher für Sie, diese zu bearbeiten.
- Es wird für Benutzer klarer, wo sie sich befinden, was sie tun, was sie lesen oder womit sie im Web interagieren.
- Einige Suchmaschinen können diese Semantik verwenden, um die Klassifizierung der zugehörigen Seiten zu verbessern.

## Siehe auch

[Data URLs](/de/docs/Web/URI/Reference/Schemes/data): URLs, die mit dem Präfix `data:` beginnen, ermöglichen es Inhaltserstellern, kleine Dateien inline in Dokumente einzubetten.
