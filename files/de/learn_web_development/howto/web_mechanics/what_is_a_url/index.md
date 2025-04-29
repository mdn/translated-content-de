---
title: Was ist eine URL?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_URL
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

Dieser Artikel behandelt Uniform Resource Locators (URLs) und erklärt, was sie sind und wie sie strukturiert sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie müssen zuerst wissen,
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
      <td>Sie erfahren, was eine URL ist und wie sie im Web funktioniert.</td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Eine **URL** (Uniform Resource Locator) ist die Adresse einer einzigartigen Ressource im Internet. Sie ist einer der Hauptmechanismen, den {{Glossary("Browser", "Browser")}} verwenden, um veröffentlichte Ressourcen abzurufen, wie HTML-Seiten, CSS-Dokumente, Bilder und so weiter.

Theoretisch verweist jede gültige URL auf eine einzigartige Ressource. In der Praxis gibt es einige Ausnahmen, die häufigste ist eine URL, die auf eine Ressource verweist, die nicht mehr existiert oder verschoben wurde. Da die Ressource, die von der URL repräsentiert wird, und die URL selbst vom Webserver verwaltet werden, liegt es in der Verantwortung des Webserver-Besitzers, diese Ressource und ihre zugehörige URL sorgfältig zu verwalten.

## Grundlagen: Aufbau einer URL

Hier sind einige Beispiele von URLs:

```plain
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn_web_development/
https://developer.mozilla.org/en-US/search?q=URL
```

Jede dieser URLs kann in die Adressleiste Ihres Browsers eingegeben werden, um ihn dazu zu bringen, die zugeordnete Ressource zu laden, die in allen drei Fällen eine Webseite ist.

Eine URL besteht aus verschiedenen Teilen, von denen einige obligatorisch und andere optional sind. Die wichtigsten Teile sind in der untenstehenden URL hervorgehoben (Details werden in den folgenden Abschnitten bereitgestellt):

![vollständige URL](mdn-url-all.png)

> [!NOTE]
> Sie können sich eine URL wie eine reguläre Postanschrift vorstellen: das _Schema_ repräsentiert den Postdienst, den Sie verwenden möchten, der _Domain-Name_ ist die Stadt oder der Ort, und der _Port_ ist wie die Postleitzahl; der _Pfad_ repräsentiert das Gebäude, in das Ihre Post geliefert werden soll; die _Parameter_ repräsentieren zusätzliche Informationen wie die Nummer der Wohnung im Gebäude; und schließlich repräsentiert der _Anker_ die tatsächliche Person, an die Sie die Post adressiert haben.

> [!NOTE]
> Es gibt [einige zusätzliche Teile und Regeln](https://en.wikipedia.org/wiki/Uniform_Resource_Locator) zu URLs, aber sie sind nicht relevant für normale Benutzer oder Webentwickler. Machen Sie sich darüber keine Sorgen, Sie müssen sie nicht kennen, um voll funktionsfähige URLs zu erstellen und zu nutzen.

## Schema

![Schema](mdn-url-protocol@x2_update.png)

Der erste Teil der URL ist das _Schema_, das das Protokoll angibt, das der Browser verwenden muss, um die Ressource anzufordern (ein Protokoll ist eine festgelegte Methode zum Austausch oder zur Übertragung von Daten über ein Computernetzwerk). Für Websites ist das Protokoll normalerweise HTTPS oder HTTP (seine ungesicherte Version). Beim Adressieren von Webseiten ist eines dieser beiden erforderlich, aber Browser wissen auch, wie man andere Schemata wie `mailto:` (um einen E-Mail-Client zu öffnen) behandelt, seien Sie also nicht überrascht, wenn Sie andere Protokolle sehen.

## Autorität

![Autorität](mdn-url-authority.png)

Als nächstes folgt die _Autorität_, die durch das Zeichenmuster `://` vom Schema getrennt wird. Wenn vorhanden, umfasst die Autorität sowohl die _Domain_ (z.B. `www.example.com`) als auch den _Port_ (`80`), getrennt durch einen Doppelpunkt:

- Die Domain gibt an, welcher Webserver angefragt wird. Normalerweise ist dies ein [Domain-Name](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name), aber auch eine {{Glossary("IP_address", "IP-Adresse")}} kann verwendet werden (was jedoch selten ist, da es weniger bequem ist).
- Der Port gibt das technische "Tor" an, über das auf die Ressourcen auf dem Webserver zugegriffen wird. Es wird normalerweise weggelassen, wenn der Webserver die Standard-Ports des HTTP-Protokolls (80 für HTTP und 443 für HTTPS) verwendet, um Zugriff auf seine Ressourcen zu gewähren. Andernfalls ist es obligatorisch.

> [!NOTE]
> Der Separator zwischen Schema und Autorität ist `://`. Der Doppelpunkt trennt das Schema vom nächsten Teil der URL, während `//` anzeigt, dass der nächste Teil der URL die Autorität ist.
>
> Ein Beispiel für eine URL, die keine Autorität verwendet, ist der E-Mail-Client (`mailto:foobar`). Es enthält ein Schema, verwendet jedoch keine Autoritätskomponente. Daher wird der Doppelpunkt nicht von zwei Schrägstrichen gefolgt und dient nur als Trennzeichen zwischen Schema und E-Mail-Adresse.

## Pfad zur Ressource

![Pfad zur Datei](mdn-url-path@x2.png)

`/path/to/myfile.html` ist der Pfad zur Ressource auf dem Webserver. In den frühen Tagen des Webs stellte ein solcher Pfad einen physischen Dateispeicherort auf dem Webserver dar. Heutzutage ist es meist eine Abstraktion, die von Webservern ohne physische Realität gehandhabt wird.

## Parameter

![Parameter](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` sind zusätzliche Parameter, die dem Webserver bereitgestellt werden. Diese Parameter sind eine Liste von Schlüssel/Wert-Paaren, die mit dem `&`-Symbol getrennt sind. Der Webserver kann diese Parameter verwenden, um zusätzliche Dinge zu tun, bevor die Ressource zurückgegeben wird. Jeder Webserver hat seine eigenen Regeln bezüglich der Parameter, und der einzige zuverlässige Weg, um zu wissen, ob ein bestimmter Webserver mit Parametern umgeht, besteht darin, den Besitzer des Webservers zu fragen.

## Anker

![Anker](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` ist ein Anker zu einem anderen Teil der Ressource selbst. Ein Anker stellt eine Art "Lesezeichen" innerhalb der Ressource dar und gibt dem Browser die Anweisung, den Inhalt an der "markierten" Stelle anzuzeigen. In einem HTML-Dokument scrollt der Browser beispielsweise zu dem Punkt, an dem der Anker definiert ist; in einem Video- oder Audiodokument versucht der Browser, zu der Zeit zu gelangen, die der Anker repräsentiert. Es ist erwähnenswert, dass der Teil nach dem **#**, auch bekannt als **Fragment-Identifier**, niemals mit der Anfrage an den Server gesendet wird.

## Wie man URLs verwendet

Jede URL kann direkt in die Adressleiste des Browsers eingegeben werden, um zur Ressource dahinter zu gelangen. Aber das ist nur die Spitze des Eisbergs!

Die {{Glossary("HTML", "HTML")}} Sprache (siehe [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)) macht umfangreichen Gebrauch von URLs:

- um Links zu anderen Dokumenten mit dem {{HTMLElement("a")}}-Element zu erstellen;
- um ein Dokument mit seinen zugehörigen Ressourcen über verschiedene Elemente wie {{HTMLElement("link")}} oder {{HTMLElement("script")}} zu verknüpfen;
- um Medien wie Bilder (mit dem {{HTMLElement("img")}}-Element), Videos (mit dem {{HTMLElement("video")}}-Element), Sounds und Musik (mit dem {{HTMLElement("audio")}}-Element), usw. darzustellen;
- um andere HTML-Dokumente mit dem {{HTMLElement("iframe")}}-Element anzuzeigen.

> [!NOTE]
> Wenn Sie URLs angeben, um Ressourcen als Teil einer Seite zu laden (wie bei der Verwendung von `<script>`, `<audio>`, `<img>`, `<video>` und dergleichen), sollten Sie im Allgemeinen nur HTTP- und HTTPS-URLs verwenden, mit wenigen Ausnahmen (eine bemerkenswerte ist `data:`; siehe [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data)). Die Verwendung von FTP ist beispielsweise nicht sicher und wird von modernen Browsern nicht mehr unterstützt.

Andere Technologien, wie {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}}, nutzen URLs ausgiebig, und diese sind wirklich das Herz des Webs.

## Absolute URLs vs. relative URLs

Was wir oben gesehen haben, nennt man eine _absolute URL_, aber es gibt auch etwas, das man eine _relative URL_ nennt. Der [URL-Standard](https://url.spec.whatwg.org/#absolute-url-string) definiert beide — obwohl er die Begriffe [_absolute URL string_](https://url.spec.whatwg.org/#absolute-url-string) und [_relative URL string_](https://url.spec.whatwg.org/#relative-url-string) verwendet, um sie von [URL-Objekten](https://url.spec.whatwg.org/#url) zu unterscheiden (die speicherinterne Repräsentationen von URLs sind).

Lassen Sie uns untersuchen, was der Unterschied zwischen _absolut_ und _relativ_ im Kontext von URLs bedeutet.

Die erforderlichen Teile einer URL hängen in hohem Maße vom Kontext ab, in dem die URL verwendet wird. In der Adressleiste Ihres Browsers hat eine URL keinen Kontext, daher müssen Sie eine vollständige (oder _absolute_) URL angeben, wie die, die wir oben gesehen haben. Sie müssen das Protokoll nicht einschließen (der Browser verwendet standardmäßig HTTP) oder den Port (der nur erforderlich ist, wenn der angezielte Webserver einen ungewöhnlichen Port verwendet), aber alle anderen Teile der URL sind notwendig.

Wenn eine URL in einem Dokument verwendet wird, wie auf einer HTML-Seite, ist die Sache ein wenig anders. Da der Browser bereits die eigene URL des Dokuments hat, kann er diese Informationen verwenden, um die fehlenden Teile einer URL auszufüllen, die in diesem Dokument verfügbar sind. Wir können zwischen einer _absoluten URL_ und einer _relativen URL_ unterscheiden, indem wir nur den _Pfad_ Teil der URL betrachten. Wenn der Pfadteil der URL mit dem Zeichen `/` beginnt, wird der Browser diese Ressource vom obersten Wurzelverzeichnis des Servers abrufen, ohne auf den Kontext des aktuellen Dokuments zu verweisen.

Schauen wir uns einige Beispiele an, um dies klarer zu machen. Nehmen wir an, dass die URLs innerhalb des Dokuments definiert sind, das unter der folgenden URL zu finden ist: `https://developer.mozilla.org/de/docs/Learn_web_development`.

`https://developer.mozilla.org/de/docs/Learn_web_development` selbst ist eine absolute URL. Sie hat alle notwendigen Teile, die erforderlich sind, um die Ressource zu lokalisieren, auf die sie verweist.

Alle folgenden URLs sind relative URLs:

- Schema-relative URL: `//developer.mozilla.org/de/docs/Learn_web_development` — nur das Protokoll fehlt. Der Browser verwendet dasselbe Protokoll wie das, das verwendet wurde, um das Dokument zu laden, das diese URL hostet.
- Domänen-relative URL: `/de/docs/Learn_web_development` — das Protokoll und der Domain-Name fehlen beide. Der Browser wird dasselbe Protokoll und denselben Domain-Namen verwenden wie der, der verwendet wurde, um das Dokument zu laden, das diese URL hostet.
- Subressourcen: `Howto/Web_mechanics/What_is_a_URL` — das Protokoll und der Domain-Name fehlen, und der Pfad beginnt nicht mit `/`. Der Browser wird versuchen, das Dokument in einem Unterverzeichnis desjenigen zu finden, das die aktuelle Ressource enthält. In diesem Fall wollen wir tatsächlich diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL`.
- Zurück im Verzeichnisbaum gehen: `../CSS/display` — das Protokoll und der Domain-Name fehlen, und der Pfad beginnt mit `..`. Dies ist aus der UNIX-Dateisystemwelt abgeleitet — um dem Browser zu sagen, dass wir um eine Ebene nach oben gehen wollen. Hier wollen wir diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn_web_development/../Web/CSS/display`, was auf folgendes vereinfacht werden kann: `https://developer.mozilla.org/de/docs/Web/CSS/display`.
- Nur Anker: `#semantic_urls` — alle Teile fehlen außer dem Anker. Der Browser wird die URL des aktuellen Dokuments verwenden und den Ankerteil darauf ersetzen oder hinzufügen. Dies ist nützlich, wenn Sie auf einen bestimmten Teil des aktuellen Dokuments verlinken möchten.

## Semantische URLs

Trotz ihres sehr technischen Charakters stellen URLs einen menschenlesbaren Einstiegspunkt für eine Website dar. Sie können sich gemerkt werden, und jeder kann sie in die Adressleiste eines Browsers eingeben. Menschen stehen im Mittelpunkt des Webs, daher gilt es als bewährte Praxis, sogenannte [_semantische URLs_](https://en.wikipedia.org/wiki/Semantic_URL) zu erstellen. Semantische URLs verwenden Wörter mit inhärenter Bedeutung, die von jedem verstanden werden können, unabhängig von ihrem technischen Wissen.

Linguistische Semantik ist natürlich irrelevant für Computer. Sie haben wahrscheinlich oft URLs gesehen, die wie ein Durcheinander zufälliger Zeichen aussehen. Aber es gibt viele Vorteile bei der Erstellung menschenlesbarer URLs:

- Es ist einfacher für Sie, sie zu manipulieren.
- Es klärt die Benutzer darüber auf, wo sie sich befinden, was sie tun, was sie im Web lesen oder mit was sie interagieren.
- Einige Suchmaschinen können diese Semantik nutzen, um die Klassifizierung der zugehörigen Seiten zu verbessern.

## Siehe auch

[Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data): URLs mit dem Präfix `data:` ermöglichen es Inhaltserstellern, kleine Dateien direkt in Dokumente einzubetten.
