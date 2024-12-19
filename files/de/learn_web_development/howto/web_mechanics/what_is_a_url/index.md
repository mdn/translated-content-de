---
title: Was ist eine URL?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_URL
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel behandelt Uniform Resource Locators (URLs) und erklärt, was sie sind und wie sie aufgebaut sind.

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

Eine **URL** (Uniform Resource Locator) ist die Adresse einer einzigartigen Ressource im Internet. Sie ist einer der wichtigsten Mechanismen, die {{Glossary("Browser", "Browser")}} verwenden, um veröffentlichte Ressourcen wie HTML-Seiten, CSS-Dokumente, Bilder und so weiter zu beziehen.

Theoretisch verweist jede gültige URL auf eine einzigartige Ressource. In der Praxis gibt es einige Ausnahmen, wobei die häufigste eine URL ist, die auf eine Ressource verweist, die nicht mehr existiert oder verschoben wurde. Da die durch die URL dargestellte Ressource und die URL selbst durch den Webserver verwaltet werden, ist es Aufgabe des Besitzers des Webservers, diese Ressource und ihre zugehörige URL sorgfältig zu verwalten.

## Grundlagen: Aufbau einer URL

Hier sind einige Beispiele für URLs:

```plain
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn_web_development/
https://developer.mozilla.org/en-US/search?q=URL
```

Jede dieser URLs kann in die Adressleiste Ihres Browsers eingegeben werden, um die zugehörige Ressource zu laden, die in allen drei Fällen eine Webseite ist.

Eine URL besteht aus verschiedenen Teilen, von denen einige obligatorisch und andere optional sind. Die wichtigsten Teile sind in der URL unten hervorgehoben (Details werden in den folgenden Abschnitten bereitgestellt):

![volständige URL](mdn-url-all.png)

> [!NOTE]
> Sie könnten eine URL wie eine reguläre Postadresse betrachten: das _Schema_ repräsentiert den Postdienst, den Sie verwenden möchten, der _Domainname_ ist die Stadt oder der Ort, und der _Port_ ist wie die Postleitzahl; der _Pfad_ repräsentiert das Gebäude, in das Ihre Post zugestellt werden soll; die _Parameter_ stellen zusätzliche Informationen dar, wie z. B. die Nummer der Wohnung im Gebäude; und schließlich repräsentiert der _Anker_ die tatsächliche Person, an die Sie Ihre Post adressiert haben.

> [!NOTE]
> Es gibt [einige zusätzliche Teile und einige zusätzliche Regeln](https://en.wikipedia.org/wiki/Uniform_Resource_Locator) in Bezug auf URLs, aber sie sind nicht relevant für normale Benutzer oder Webentwickler. Machen Sie sich darüber keine Sorgen, Sie müssen sie nicht kennen, um voll funktionsfähige URLs zu erstellen und zu verwenden.

## Schema

![Schema](mdn-url-protocol@x2_update.png)

Der erste Teil der URL ist das _Schema_, das das Protokoll angibt, das der Browser verwenden muss, um die Ressource anzufordern (ein Protokoll ist eine festgelegte Methode zum Austausch oder zur Übertragung von Daten in einem Computernetzwerk). Normalerweise ist das Protokoll für Websites HTTPS oder HTTP (seine ungesicherte Version). Beim Adressieren von Webseiten ist eines von beiden erforderlich, aber Browser sind auch in der Lage, andere Schemata wie `mailto:` (um einen E-Mail-Client zu öffnen) zu handhaben, daher seien Sie nicht überrascht, wenn Sie andere Protokolle sehen.

## Autorität

![Autorität](mdn-url-authority.png)

Danach folgt die _Autorität_, die vom Schema durch das Zeichenmuster `://` getrennt ist. Falls vorhanden, umfasst die Autorität sowohl die _Domain_ (z.B. `www.example.com`) als auch den _Port_ (`80`), getrennt durch einen Doppelpunkt:

- Die Domain gibt an, welcher Webserver angefordert wird. In der Regel ist dies ein [Domainname](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name), aber eine {{Glossary("IP_address", "IP-Adresse")}} kann ebenfalls verwendet werden (dies ist jedoch selten, da es viel weniger bequem ist).
- Der Port gibt das technische "Tor" an, das verwendet wird, um auf die Ressourcen des Webservers zuzugreifen. Wenn der Webserver die Standardports des HTTP-Protokolls (80 für HTTP und 443 für HTTPS) zur Gewährung des Zugriffs auf seine Ressourcen verwendet, wird er meistens weggelassen. Andernfalls ist er obligatorisch.

> [!NOTE]
> Der Separator zwischen Schema und Autorität ist `://`. Der Doppelpunkt trennt das Schema vom nächsten Teil der URL, während `//` anzeigt, dass der nächste Teil der URL die Autorität ist.
>
> Ein Beispiel für eine URL, die keine Autorität verwendet, ist der E-Mail-Client (`mailto:foobar`). Sie enthält ein Schema, verwendet aber keine Autoritätskomponente. Daher folgt dem Doppelpunkt nicht zwei Schrägstriche und es wirkt nur als Trennzeichen zwischen Schema und E-Mail-Adresse.

## Pfad zur Ressource

![Pfad zur Datei](mdn-url-path@x2.png)

`/path/to/myfile.html` ist der Pfad zur Ressource auf dem Webserver. In den frühen Tagen des Web stand ein solcher Pfad für eine physische Dateilocation auf dem Webserver. Heutzutage ist es meist eine Abstraktion, die von Webservern verwaltet wird, ohne jegliche physische Realität.

## Parameter

![Parameter](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` sind zusätzliche Parameter, die dem Webserver bereitgestellt werden. Diese Parameter sind eine Liste von Schlüssel/Wert-Paaren, die mit dem `&`-Symbol getrennt sind. Der Webserver kann diese Parameter verwenden, um vor der Rückgabe der Ressource zusätzliche Funktionen auszuführen. Jeder Webserver hat seine eigenen Regeln bezüglich der Parameter, und der einzige zuverlässige Weg, um zu wissen, ob ein bestimmter Webserver Parameter verarbeitet, besteht darin, den Webserver-Besitzer zu fragen.

## Anker

![Anker](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` ist ein Anker zu einem anderen Teil der Ressource selbst. Ein Anker stellt eine Art "Lesezeichen" innerhalb der Ressource dar und gibt dem Browser Anweisungen, um den Inhalt an der "Lesezeichen"-Stelle anzuzeigen. In einem HTML-Dokument scrollt der Browser beispielsweise an die Stelle, an der der Anker definiert ist; in einem Video- oder Audiodokument versucht der Browser, zu dem Zeitpunkt zu gelangen, den der Anker darstellt. Es ist erwähnenswert, dass der Teil nach dem **#**, auch bekannt als **Fragment-Identifikator**, niemals mit der Anfrage an den Server gesendet wird.

## Anleitung zur Nutzung von URLs

Jede URL kann direkt in die Adressleiste des Browsers eingegeben werden, um zur Ressource zu gelangen, die sich dahinter befindet. Aber das ist nur die Spitze des Eisbergs!

Die {{Glossary("HTML", "HTML")}}-Sprache (siehe [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content)) verwendet URLs umfangreich:

- um Verknüpfungen zu anderen Dokumenten mit dem {{HTMLElement("a")}}-Element zu erstellen;
- um ein Dokument mit seinen verwandten Ressourcen durch verschiedene Elemente wie {{HTMLElement("link")}} oder {{HTMLElement("script")}} zu verknüpfen;
- um Medien wie Bilder darzustellen (mit dem {{HTMLElement("img")}}-Element), Videos (mit dem {{HTMLElement("video")}}-Element), Töne und Musik (mit dem {{HTMLElement("audio")}}-Element) usw.;
- um andere HTML-Dokumente mit dem {{HTMLElement("iframe")}}-Element darzustellen.

> [!NOTE]
> Wenn Sie URLs angeben, um Ressourcen als Teil einer Seite zu laden (wie bei der Verwendung von `<script>`, `<audio>`, `<img>`, `<video>` und ähnlichen Elementen), sollten Sie im Allgemeinen nur HTTP- und HTTPS-URLs verwenden, mit wenigen Ausnahmen (eine bemerkenswerte ist `data:`; siehe [Data-URLs](/de/docs/Web/URI/Schemes/data)). Die Verwendung von FTP ist zum Beispiel nicht sicher und wird von modernen Browsern nicht mehr unterstützt.

Andere Technologien wie {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}} verwenden URLs umfangreich, und diese sind wirklich das Herz des Webs.

## Absolute URLs vs. relative URLs

Was wir oben gesehen haben, wird als _absolute URL_ bezeichnet, aber es gibt auch etwas, das als _relative URL_ bezeichnet wird. Der [URL-Standard](https://url.spec.whatwg.org/#absolute-url-string) definiert beide, obwohl er die Begriffe [_absolute URL string_](https://url.spec.whatwg.org/#absolute-url-string) und [_relative URL string_](https://url.spec.whatwg.org/#relative-url-string) verwendet, um sie von [URL-Objekten](https://url.spec.whatwg.org/#url) zu unterscheiden (die sind in Speicher darstellbare URLs).

Lassen Sie uns untersuchen, was der Unterschied zwischen _absolut_ und _relativ_ im Kontext von URLs bedeutet.

Die erforderlichen Teile einer URL hängen in hohem Maße vom Kontext ab, in dem die URL verwendet wird. In der Adressleiste Ihres Browsers hat eine URL keinen Kontext, also müssen Sie eine vollständige (oder _absolute_) URL angeben, wie die, die wir oben gesehen haben. Sie müssen das Protokoll (der Browser verwendet standardmäßig HTTP) oder den Port (dieser ist nur erforderlich, wenn der Ziel-Webserver einen ungewöhnlichen Port verwendet) nicht angeben, aber alle anderen Teile der URL sind notwendig.

Wenn eine URL in einem Dokument verwendet wird, wie etwa auf einer HTML-Seite, sind die Dinge etwas anders. Da der Browser bereits die URL des Dokuments hat, kann er diese Informationen verwenden, um die fehlenden Teile jeder URL in diesem Dokument zu ergänzen. Wir können zwischen einer _absoluten URL_ und einer _relativen URL_ unterscheiden, indem wir nur den _Pfad_ der URL betrachten. Wenn der Pfad der URL mit dem Zeichen `/` beginnt, holt der Browser diese Ressource vom obersten Stammverzeichnis des Servers, ohne den Kontext des aktuellen Dokuments zu beachten.

Schauen wir uns einige Beispiele an, um dies zu verdeutlichen. Nehmen wir an, die URLs sind innerhalb des Dokuments unter der folgenden URL definiert: `https://developer.mozilla.org/de/docs/Learn`.

`https://developer.mozilla.org/de/docs/Learn` selbst ist eine absolute URL. Sie enthält alle notwendigen Teile, die benötigt werden, um die Ressource, auf die sie verweist, zu lokalisieren.

Alle folgenden URLs sind relative URLs:

- Schema-relative URL: `//developer.mozilla.org/de/docs/Learn` – nur das Protokoll fehlt. Der Browser verwendet dasselbe Protokoll wie das, das verwendet wurde, um das Dokument zu laden, in dem diese URL vorhanden ist.
- Domain-relative URL: `/de/docs/Learn` – das Protokoll und der Domainname fehlen beide. Der Browser verwendet dasselbe Protokoll und denselben Domainnamen wie das, das verwendet wurde, um das Dokument zu laden, in dem diese URL vorhanden ist.
- Unterressourcen: `Common_questions/Web_mechanics/What_is_a_URL` – das Protokoll und der Domainname fehlen, und der Pfad beginnt nicht mit `/`. Der Browser wird versuchen, das Dokument in einem Unterverzeichnis des Verzeichnisses zu finden, das die aktuelle Ressource enthält. In diesem Fall möchten wir wirklich auf diese URL zugreifen: `https://developer.mozilla.org/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL`.
- Rückgängigmachen im Verzeichnisbaum: `../CSS/display` – das Protokoll und der Domainname fehlen, und der Pfad beginnt mit `..`. Dies stammt aus der UNIX-Dateisystemwelt, um dem Browser mitzuteilen, dass wir um eine Ebene nach oben gehen möchten. Hier möchten wir diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn_web_development/../Web/CSS/display`, die vereinfacht werden kann zu: `https://developer.mozilla.org/de/docs/Web/CSS/display`.
- Nur Anker: `#semantic_urls` – alle Teile fehlen außer dem Anker. Der Browser verwendet die URL des aktuellen Dokuments und ersetzt oder fügt den Ankerteil hinzu. Dies ist nützlich, wenn Sie auf einen bestimmten Teil des aktuellen Dokuments verlinken möchten.

## Semantische URLs

Trotz ihres sehr technischen Charakters stellen URLs einen für Menschen lesbaren Einstiegspunkt für eine Website dar. Sie können sich gemerkt werden, und jeder kann sie in die Adressleiste eines Browsers eingeben. Menschen stehen im Mittelpunkt des Webs, und daher gilt es als Best Practice, sogenannte [_semantische URLs_](https://en.wikipedia.org/wiki/Semantic_URL) zu erstellen. Semantische URLs verwenden Wörter mit inhärenter Bedeutung, die von jedem verstanden werden können, unabhängig von ihrem technischen Know-how.

Linguistische Semantik ist für Computer natürlich irrelevant. Sie haben wahrscheinlich oft URLs gesehen, die wie Mashups aus zufälligen Zeichen aussehen. Aber es gibt viele Vorteile, menschenlesbare URLs zu erstellen:

- Es ist für Sie einfacher, sie zu manipulieren.
- Es verdeutlicht den Nutzern, wo sie sich befinden, was sie tun, was sie lesen oder im Web interagieren.
- Einige Suchmaschinen können diese Semantik verwenden, um die Klassifizierung der zugehörigen Seiten zu verbessern.

## Siehe auch

[Data-URLs](/de/docs/Web/URI/Schemes/data): URLs, die mit dem `data:`-Schema beginnen, ermöglichen es Inhaltsanbietern, kleine Dateien direkt in Dokumenten einzubetten.
