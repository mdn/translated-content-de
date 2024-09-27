---
title: Was ist eine URL?
slug: Learn/Common_questions/Web_mechanics/What_is_a_URL
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel behandelt Uniform Resource Locators (URLs), erklärt, was sie sind und wie sie aufgebaut sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie müssen zunächst wissen,
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work"
          >wie das Internet funktioniert</a
        >,
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server"
          >was ein Webserver ist</a
        >
        und
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/What_are_hyperlinks"
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

Eine **URL** (Uniform Resource Locator) ist die Adresse einer eindeutigen Ressource im Internet. Sie ist einer der Hauptmechanismen, die von [Browsern](/de/docs/Glossary/Browser) verwendet werden, um veröffentlichte Ressourcen wie HTML-Seiten, CSS-Dokumente, Bilder usw. abzurufen.

Theoretisch verweist jede gültige URL auf eine eindeutige Ressource. In der Praxis gibt es einige Ausnahmen, die häufigste ist, dass eine URL auf eine Ressource verweist, die nicht mehr existiert oder verschoben wurde. Da die Ressource, die durch die URL repräsentiert wird, und die URL selbst vom Webserver verwaltet werden, liegt es in der Verantwortung des Besitzers des Webservers, diese Ressource und die zugehörige URL sorgfältig zu verwalten.

## Grundlagen: Aufbau einer URL

Hier sind einige Beispiele für URLs:

```plain
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn/
https://developer.mozilla.org/en-US/search?q=URL
```

Jede dieser URLs kann in die Adressleiste Ihres Browsers eingegeben werden, um ihn anzuweisen, die zugehörige Ressource zu laden, die in allen drei Fällen eine Webseite ist.

Eine URL besteht aus verschiedenen Teilen, von denen einige obligatorisch und andere optional sind. Die wichtigsten Teile sind in der URL unten hervorgehoben (Details werden in den folgenden Abschnitten bereitgestellt):

![vollständige URL](mdn-url-all.png)

> [!NOTE]
> Sie können sich eine URL wie eine normale Postadresse vorstellen: das _Schema_ stellt den Postdienst dar, den Sie verwenden möchten, der _Domain-Name_ ist die Stadt oder der Ort, und der _Port_ ist wie die Postleitzahl; der _Pfad_ repräsentiert das Gebäude, in das Ihre Post geliefert werden soll; die _Parameter_ repräsentieren zusätzliche Informationen wie die Nummer der Wohnung im Gebäude; und schließlich repräsentiert der _Anker_ die tatsächliche Person, an die Sie Ihre Post adressiert haben.

> [!NOTE]
> Es gibt [einige zusätzliche Teile und Regeln](https://en.wikipedia.org/wiki/Uniform_Resource_Locator) bezüglich URLs, die jedoch für normale Benutzer oder Webentwickler nicht relevant sind. Machen Sie sich darüber keine Sorgen, Sie müssen sie nicht kennen, um voll funktionsfähige URLs zu erstellen und zu verwenden.

## Schema

![Schema](mdn-url-protocol@x2_update.png)

Der erste Teil der URL ist das _Schema_, das das Protokoll angibt, das der Browser verwenden muss, um die Ressource anzufordern (ein Protokoll ist eine festgelegte Methode zum Austausch oder zur Übertragung von Daten in einem Computernetzwerk). Normalerweise ist das Protokoll für Webseiten HTTPS oder HTTP (die ungesicherte Version davon). Zum Abrufen von Webseiten ist eines dieser beiden Protokolle erforderlich, aber Browser wissen auch, wie man andere Schemata wie `mailto:` (zum Öffnen eines Mail-Clients) verwendet, daher seien Sie nicht überrascht, wenn Sie andere Protokolle sehen.

## Autorität

![Autorität](mdn-url-authority.png)

Als nächstes folgt die _Autorität_, die durch das Zeichenmuster `://` vom Schema getrennt ist. Wenn vorhanden, umfasst die Autorität sowohl die _Domain_ (z.B. `www.example.com`) als auch den _Port_ (`80`), getrennt durch einen Doppelpunkt:

- Die Domain gibt an, welcher Webserver angefordert wird. Normalerweise handelt es sich dabei um einen [Domain-Namen](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name), aber es kann auch eine [IP-Adresse](/de/docs/Glossary/IP_address) verwendet werden (was jedoch selten ist, da es weniger praktisch ist).
- Der Port gibt das technische "Tor" an, über das der Zugriff auf die Ressourcen auf dem Webserver erfolgt. Er wird normalerweise weggelassen, wenn der Webserver die Standardports des HTTP-Protokolls (80 für HTTP und 443 für HTTPS) verwendet, um Zugriff auf seine Ressourcen zu gewähren. Andernfalls ist er erforderlich.

> [!NOTE]
> Der Separator zwischen Schema und Autorität ist `://`. Der Doppelpunkt trennt das Schema vom nächsten Teil der URL, während `//` anzeigt, dass der nächste Teil der URL die Autorität ist.
>
> Ein Beispiel für eine URL, die keine Autorität verwendet, ist der Mail-Client (`mailto:foobar`). Er enthält ein Schema, verwendet jedoch keine Autoritätskomponente. Daher wird der Doppelpunkt nicht von zwei Schrägstrichen gefolgt, sondern dient nur als Trennzeichen zwischen Schema und Mail-Adresse.

## Pfad zur Ressource

![Pfad zur Datei](mdn-url-path@x2.png)

`/path/to/myfile.html` ist der Pfad zur Ressource auf dem Webserver. In den frühen Tagen des Webs repräsentierte ein solcher Pfad einen physischen Dateiort auf dem Webserver. Heute ist es größtenteils eine Abstraktion, die von Webservern ohne physische Realität verwaltet wird.

## Parameter

![Parameter](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` sind zusätzliche Parameter, die dem Webserver bereitgestellt werden. Diese Parameter sind eine Liste von Schlüssel/Wert-Paaren, die mit dem `&`-Symbol getrennt sind. Der Webserver kann diese Parameter verwenden, um zusätzliche Aufgaben auszuführen, bevor er die Ressource zurückgibt. Jeder Webserver hat eigene Regeln bezüglich der Parameter, und der einzige zuverlässige Weg zu wissen, ob ein spezifischer Webserver Parameter verarbeitet, besteht darin, den Besitzer des Webservers zu fragen.

## Anker

![Anker](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` ist ein Anker zu einem anderen Teil der Ressource selbst. Ein Anker repräsentiert eine Art "Lesezeichen" innerhalb der Ressource und gibt dem Browser Anweisungen, den Inhalt an der "markierten" Stelle anzuzeigen. In einem HTML-Dokument beispielsweise scrollt der Browser zu dem Punkt, an dem der Anker definiert ist; in einem Video- oder Audiodokument versucht der Browser, zu dem Zeitpunkt zu gelangen, den der Anker darstellt. Es ist wichtig zu beachten, dass der Teil nach dem **#**, auch bekannt als **Fragment-Identifikator**, niemals mit der Anfrage an den Server gesendet wird.

## Verwendung von URLs

Jede URL kann direkt in die Adressleiste des Browsers eingegeben werden, um zur dahinter liegenden Ressource zu gelangen. Aber das ist nur die Spitze des Eisbergs!

Die [HTML](/de/docs/Glossary/HTML)-Sprache — [die später besprochen wird](/de/docs/Learn/HTML/Introduction_to_HTML) — nutzt URLs umfassend:

- um Links zu anderen Dokumenten mit dem {{HTMLElement("a")}}-Element zu erstellen;
- um ein Dokument mit seinen zugehörigen Ressourcen durch verschiedene Elemente wie {{HTMLElement("link")}} oder {{HTMLElement("script")}} zu verknüpfen;
- um Medien wie Bilder (mit dem {{HTMLElement("img")}}-Element), Videos (mit dem {{HTMLElement("video")}}-Element), Sounds und Musik (mit dem {{HTMLElement("audio")}}-Element) usw. anzuzeigen;
- um andere HTML-Dokumente mit dem {{HTMLElement("iframe")}}-Element anzuzeigen.

> [!NOTE]
> Wenn Sie URLs angeben, um Ressourcen als Teil einer Seite zu laden (wie bei der Verwendung von `<script>`, `<audio>`, `<img>`, `<video>` und ähnlich), sollten Sie im Allgemeinen nur HTTP- und HTTPS-URLs verwenden, mit wenigen Ausnahmen (eine bemerkenswerte ist `data:`; siehe [Data URLs](/de/docs/Web/URI/Schemes/data)). Die Verwendung von FTP ist beispielsweise nicht sicher und wird von modernen Browsern nicht mehr unterstützt.

Andere Technologien wie [CSS](/de/docs/Glossary/CSS) oder [JavaScript](/de/docs/Glossary/JavaScript) nutzen URLs umfassend, und diese sind wirklich das Herzstück des Webs.

## Absolute URLs vs. relative URLs

Was wir oben gesehen haben, wird als _absolute URL_ bezeichnet, aber es gibt auch etwas, das als _relative URL_ bezeichnet wird. Der [URL-Standard](https://url.spec.whatwg.org/#absolute-url-string) definiert beide, obwohl er die Begriffe [_absolute URL string_](https://url.spec.whatwg.org/#absolute-url-string) und [_relative URL string_](https://url.spec.whatwg.org/#relative-url-string) verwendet, um sie von [URL-Objekten](https://url.spec.whatwg.org/#url) zu unterscheiden (welche speicherinterne Darstellungen von URLs sind).

Lassen Sie uns untersuchen, was der Unterschied zwischen _absolut_ und _relativ_ im Kontext von URLs bedeutet.

Die erforderlichen Teile einer URL hängen stark vom Kontext ab, in dem die URL verwendet wird. In der Adressleiste Ihres Browsers hat eine URL keinen Kontext, daher müssen Sie eine vollständige (oder _absolute_) URL angeben, wie die, die wir oben gesehen haben. Sie müssen das Protokoll nicht einschließen (der Browser verwendet HTTP standardmäßig) oder den Port (der nur erforderlich ist, wenn der zielgerichtete Webserver einen ungewöhnlichen Port verwendet), aber alle anderen Teile der URL sind notwendig.

Wenn eine URL innerhalb eines Dokuments verwendet wird, beispielsweise auf einer HTML-Seite, ist das etwas anders. Da der Browser bereits die URL des Dokuments hat, kann er diese Informationen verwenden, um die fehlenden Teile jeder URL innerhalb dieses Dokuments zu ergänzen. Wir können zwischen einer _absoluten URL_ und einer _relativen URL_ unterscheiden, indem wir nur den _Pfad_ Teil der URL betrachten. Wenn der Pfad Teil der URL mit dem Zeichen `/` beginnt, wird der Browser diese Ressource vom obersten Stammverzeichnis des Servers abrufen, ohne Bezug auf den Kontext, der durch das aktuelle Dokument gegeben ist.

Schauen wir uns einige Beispiele an, um dies klarer zu machen. Nehmen wir an, die URLs sind innerhalb des Dokuments definiert, das sich an der folgenden URL befindet: `https://developer.mozilla.org/de/docs/Learn`.

`https://developer.mozilla.org/de/docs/Learn` selbst ist eine absolute URL. Sie enthält alle notwendigen Teile, um die Ressource zu lokalisieren, auf die sie verweist.

Alle folgenden URLs sind relative URLs:

- Schema-relative URL: `//developer.mozilla.org/de/docs/Learn` — nur das Protokoll fehlt. Der Browser verwendet dasselbe Protokoll, das zum Laden des Dokuments verwendet wurde, das diese URL hostet.
- Domain-relative URL: `/de/docs/Learn` — das Protokoll und der Domain-Name fehlen beide. Der Browser verwendet dasselbe Protokoll und denselben Domain-Namen, der auch zum Laden des Dokuments verwendet wurde, das diese URL hostet.
- Unterressourcen: `Common_questions/Web_mechanics/What_is_a_URL` — das Protokoll und der Domain-Name fehlen, und der Pfad beginnt nicht mit `/`. Der Browser versucht, das Dokument in einem Unterverzeichnis desjenigen zu finden, das die aktuelle Ressource enthält. In diesem Fall möchten wir wirklich diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL`.
- Zurückgehen im Verzeichnisbaum: `../CSS/display` — das Protokoll und der Domain-Name fehlen, und der Pfad beginnt mit `..`. Dies ist aus der UNIX-Dateisystemwelt geerbt — um dem Browser mitzuteilen, dass man um eine Ebene höher gehen möchte. Hier wollen wir diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn/../CSS/display`, was vereinfacht werden kann zu: `https://developer.mozilla.org/de/docs/CSS/display`.
- Nur Anker: `#semantic_urls` - alle Teile fehlen außer dem Anker. Der Browser verwendet die URL des aktuellen Dokuments und ersetzt oder fügt den Ankerteil hinzu. Dies ist nützlich, wenn Sie auf einen bestimmten Teil des aktuellen Dokuments verweisen möchten.

## Semantische URLs

Trotz ihres sehr technischen Charakters stellen URLs einen menschenlesbaren Einstiegspunkt für eine Website dar. Sie können sich merken und von jedermann in die Adressleiste eines Browsers eingegeben werden. Menschen stehen im Mittelpunkt des Webs, daher gilt es als Best Practice, sogenannte [_semantische URLs_](https://en.wikipedia.org/wiki/Semantic_URL) zu erstellen. Semantische URLs verwenden Wörter mit inhärenter Bedeutung, die von jedem verstanden werden können, unabhängig von ihrem technischen Wissen.

Linguistische Semantik ist für Computer natürlich irrelevant. Sie haben wahrscheinlich oft URLs gesehen, die wie Mischungen aus zufälligen Zeichen aussehen. Aber es gibt viele Vorteile bei der Erstellung menschenlesbarer URLs:

- Es ist einfacher für Sie, sie zu manipulieren.
- Es klärt Dinge für Benutzer, in Bezug darauf, wo sie sich befinden, was sie tun, was sie im Web lesen oder interagieren.
- Einige Suchmaschinen können diese Semantik nutzen, um die Klassifizierung der zugehörigen Seiten zu verbessern.

## Siehe auch

[Data URLs](/de/docs/Web/URI/Schemes/data): URLs, die mit dem `data:`-Schema an den Anfang gestellt werden, erlauben es Inhaltsautoren, kleine Dateien direkt in Dokumente einzubetten.
