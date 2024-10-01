---
title: Was ist eine URL?
slug: Learn/Common_questions/Web_mechanics/What_is_a_URL
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel befasst sich mit Uniform Resource Locators (URLs), erklärt, was sie sind und wie sie strukturiert sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie müssen zuerst wissen,
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work"
          >wie das Internet funktioniert</a
        >,
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server"
          >was ein Webserver ist</a
        >
        und
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/What_are_hyperlinks"
          >das Konzept hinter Links im Web</a
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

Eine **URL** (Uniform Resource Locator) ist die Adresse einer einzigartigen Ressource im Internet. Sie ist einer der Hauptmechanismen, die von {{Glossary("Browser", "Browsern")}} verwendet werden, um veröffentlichte Ressourcen abzurufen, wie HTML-Seiten, CSS-Dokumente, Bilder und so weiter.

Theoretisch verweist jede gültige URL auf eine einzigartige Ressource. Praktisch gibt es einige Ausnahmen, die häufigste ist eine URL, die auf eine Ressource verweist, die nicht mehr existiert oder umgezogen ist. Da die durch die URL repräsentierte Ressource und die URL selbst vom Webserver verwaltet werden, liegt es in der Verantwortung des Besitzers des Webservers, diese Ressource und die zugehörige URL sorgfältig zu verwalten.

## Grundlagen: Aufbau einer URL

Hier sind einige Beispiele für URLs:

```plain
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn/
https://developer.mozilla.org/en-US/search?q=URL
```

Jede dieser URLs kann in die Adressleiste Ihres Browsers eingegeben werden, um ihn anzuweisen, die zugehörige Ressource zu laden, die in allen drei Fällen eine Webseite ist.

Eine URL besteht aus verschiedenen Teilen, einige obligatorisch, andere optional. Die wichtigsten Teile sind in der unten stehenden URL hervorgehoben (Details werden in den folgenden Abschnitten bereitgestellt):

![volle URL](mdn-url-all.png)

> [!NOTE]
> Sie könnten sich eine URL wie eine reguläre Postadresse vorstellen: das _Schema_ repräsentiert den Postdienst, den Sie verwenden möchten, der _Domain-Name_ ist die Stadt oder der Ort, und der _Port_ ist wie die Postleitzahl; der _Pfad_ repräsentiert das Gebäude, zu dem Ihre Post geliefert werden soll; die _Parameter_ stellen zusätzliche Informationen wie die Nummer der Wohnung im Gebäude dar; und schließlich repräsentiert der _Anker_ die eigentliche Person, an die Sie Ihre Post adressiert haben.

> [!NOTE]
> Es gibt [einige zusätzliche Teile und Regeln](https://en.wikipedia.org/wiki/Uniform_Resource_Locator) bezüglich URLs, die für normale Benutzer oder Webentwickler jedoch nicht von Bedeutung sind. Machen Sie sich darüber keine Sorgen, Sie müssen diese nicht kennen, um vollständig funktionale URLs zu erstellen und zu verwenden.

## Schema

![Schema](mdn-url-protocol@x2_update.png)

Der erste Teil der URL ist das _Schema_, das das Protokoll angibt, das der Browser verwenden muss, um die Ressource anzufordern (ein Protokoll ist eine festgelegte Methode zum Austausch oder zur Übertragung von Daten in einem Computernetzwerk). Normalerweise ist das Protokoll für Websites HTTPS oder HTTP (die ungesicherte Version davon). Das Adressieren von Webseiten erfordert eines dieser beiden, aber Browser können auch andere Schemata wie `mailto:` (um einen E-Mail-Client zu öffnen) behandeln, daher sollten Sie sich nicht wundern, wenn Sie andere Protokolle sehen.

## Authority

![Autorität](mdn-url-authority.png)

Es folgt die _Authority_, die durch das Zeichenmuster `://` vom Schema getrennt ist. Wenn vorhanden, enthält die Authority sowohl die _Domain_ (z.B. `www.example.com`) als auch den _Port_ (`80`), getrennt durch ein Doppelpunkt:

- Die Domain gibt an, welcher Webserver angefordert wird. Normalerweise ist dies ein [Domain-Name](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name), aber auch eine {{Glossary("IP_address", "IP-Adresse")}} kann verwendet werden (was jedoch selten der Fall ist, da es viel weniger praktisch ist).
- Der Port gibt das technische „Tor“ an, das verwendet wird, um auf die Ressourcen des Webservers zuzugreifen. Er wird normalerweise weggelassen, wenn der Webserver die Standardports des HTTP-Protokolls (80 für HTTP und 443 für HTTPS) verwendet, um den Zugriff auf seine Ressourcen zu gewähren. Andernfalls ist er obligatorisch.

> [!NOTE]
> Der Trenner zwischen Schema und Authority ist `://`. Der Doppelpunkt trennt das Schema vom nächsten Teil der URL, während `//` anzeigt, dass der nächste Teil der URL die Authority ist.
>
> Ein Beispiel für eine URL, die keine Authority verwendet, ist der Mailclient (`mailto:foobar`). Sie enthält ein Schema, verwendet jedoch keine Authority-Komponente. Daher folgen dem Doppelpunkt keine zwei Schrägstriche und er fungiert nur als Trennzeichen zwischen dem Schema und der E-Mail-Adresse.

## Pfad zur Ressource

![Pfad zur Datei](mdn-url-path@x2.png)

`/path/to/myfile.html` ist der Pfad zur Ressource auf dem Webserver. In den frühen Tagen des Web stellte ein solcher Pfad einen physischen Dateispeicherort auf dem Webserver dar. Heutzutage ist es größtenteils eine Abstraktion, die von Webservern ohne physische Realität gehandhabt wird.

## Parameter

![Parameter](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` sind zusätzliche Parameter, die dem Webserver bereitgestellt werden. Diese Parameter sind eine Liste von Schlüssel/Wert-Paaren, die mit dem `&`-Symbol getrennt sind. Der Webserver kann diese Parameter verwenden, um zusätzliche Aufgaben zu erledigen, bevor die Ressource zurückgegeben wird. Jeder Webserver hat seine eigenen Regeln bezüglich der Parameter, und der einzige verlässliche Weg, um zu wissen, ob ein bestimmter Webserver mit Parametern arbeitet, besteht darin, den Besitzer des Webservers zu fragen.

## Anker

![Anker](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` ist ein Anker zu einem anderen Teil der Ressource selbst. Ein Anker repräsentiert eine Art "Lesezeichen" innerhalb der Ressource und gibt dem Browser die Anweisungen, den Inhalt anzuzeigen, der sich an dieser "markierten" Stelle befindet. In einem HTML-Dokument scrollt der Browser beispielsweise zu dem Punkt, an dem der Anker definiert ist; in einem Video- oder Audiodokument versucht der Browser zu der Zeit zu gehen, die der Anker repräsentiert. Es ist bemerkenswert, dass der Teil nach dem **#**, auch bekannt als **Fragmentkennung**, niemals mit der Anfrage an den Server gesendet wird.

## Anleitung zur Verwendung von URLs

Jede URL kann direkt in die Adressleiste des Browsers eingetippt werden, um zur dahinterliegenden Ressource zu gelangen. Aber das ist nur die Spitze des Eisbergs!

Die {{Glossary("HTML", "HTML")}}-Sprache — [die später besprochen wird](/de/docs/Learn/HTML/Introduction_to_HTML) — macht extensiven Gebrauch von URLs:

- um Links zu anderen Dokumenten mit dem {{HTMLElement("a")}}-Element zu erstellen;
- um ein Dokument mit seinen verbundenen Ressourcen durch verschiedene Elemente wie {{HTMLElement("link")}} oder {{HTMLElement("script")}} zu verknüpfen;
- um Medien wie Bilder (mit dem {{HTMLElement("img")}}-Element), Videos (mit dem {{HTMLElement("video")}}-Element), Sounds und Musik (mit dem {{HTMLElement("audio")}}-Element) anzuzeigen;
- um andere HTML-Dokumente mit dem {{HTMLElement("iframe")}}-Element darzustellen.

> [!NOTE]
> Wenn Sie URLs angeben, um Ressourcen als Teil einer Seite zu laden (z.B. bei Verwendung von `<script>`, `<audio>`, `<img>`, `<video>` usw.), sollten Sie im Allgemeinen nur HTTP und HTTPS-URLs verwenden, mit wenigen Ausnahmen (eine bemerkenswerte ist `data:`; siehe [Data URLs](/de/docs/Web/URI/Schemes/data)). Die Verwendung von FTP ist beispielsweise nicht sicher und wird von modernen Browsern nicht mehr unterstützt.

Andere Technologien wie {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}} nutzen URLs umfangreich, und diese sind wirklich das Herz des Webs.

## Absolute URLs vs. relative URLs

Was wir oben gesehen haben, wird als _absolute URL_ bezeichnet, aber es gibt auch etwas, das _relative URL_ genannt wird. Der [URL-Standard](https://url.spec.whatwg.org/#absolute-url-string) definiert beide — obwohl er die Begriffe [_absolute URL string_](https://url.spec.whatwg.org/#absolute-url-string) und [_relative URL string_](https://url.spec.whatwg.org/#relative-url-string) verwendet, um sie von [URL-Objekten](https://url.spec.whatwg.org/#url) zu unterscheiden (die in Speicherrepräsentationen von URLs sind).

Lassen Sie uns untersuchen, was die Unterscheidung zwischen _absolut_ und _relativ_ im Kontext von URLs bedeutet.

Die erforderlichen Teile einer URL hängen in hohem Maße vom Kontext ab, in dem die URL verwendet wird. In der Adressleiste Ihres Browsers hat eine URL keinen Kontext, daher müssen Sie eine vollständige (oder _absolute_) URL angeben, wie die, die wir oben gesehen haben. Sie müssen das Protokoll nicht einschließen (der Browser verwendet standardmäßig HTTP) oder den Port (der nur erforderlich ist, wenn der Zielwebserver einen ungewöhnlichen Port verwendet), aber alle anderen Teile der URL sind notwendig.

Wenn eine URL innerhalb eines Dokuments verwendet wird, wie in einer HTML-Seite, ist es etwas anders. Da der Browser bereits die URL des Dokuments hat, kann er diese Informationen verwenden, um die fehlenden Teile jeder URL innerhalb dieses Dokuments zu ergänzen. Wir können zwischen einer _absoluten URL_ und einer _relativen URL_ nur durch den Blick auf den _Pfad_ der URL unterscheiden. Wenn der Pfad der URL mit dem `/`-Zeichen beginnt, wird der Browser diese Ressource vom obersten Root des Servers abrufen, ohne auf den Kontext des aktuellen Dokuments Bezug zu nehmen.

Sehen wir uns einige Beispiele an, um dies zu verdeutlichen. Nehmen wir an, dass die URLs innerhalb des Dokuments definiert sind, das sich unter folgender URL befindet: `https://developer.mozilla.org/de/docs/Learn`.

`https://developer.mozilla.org/de/docs/Learn` selbst ist eine absolute URL. Sie enthält alle notwendigen Teile, die benötigt werden, um die Ressource zu lokalisieren, auf die sie zeigt.

Alle folgenden URLs sind relative URLs:

- Schema-relative URL: `//developer.mozilla.org/de/docs/Learn` — nur das Protokoll fehlt. Der Browser verwendet dasselbe Protokoll wie das, das verwendet wurde, um das Dokument zu laden, das diese URL hostet.
- Domain-relative URL: `/de/docs/Learn` — das Protokoll und der Domainname fehlen beide. Der Browser verwendet dasselbe Protokoll und denselben Domainnamen wie das, das verwendet wurde, um das Dokument zu laden, das diese URL hostet.
- Unterressourcen: `Common_questions/Web_mechanics/What_is_a_URL` — das Protokoll und der Domainname fehlen, und der Pfad beginnt nicht mit `/`. Der Browser wird versuchen, das Dokument in einem Unterverzeichnis des Verzeichnisses zu finden, das die aktuelle Ressource enthält. In diesem Fall möchten wir wirklich diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL`.
- Zurück im Verzeichnisbaum: `../CSS/display` — das Protokoll und der Domainname fehlen, und der Pfad beginnt mit `..`. Dies ist aus der UNIX-Dateisystemwelt geerbt — um dem Browser mitzuteilen, dass wir um eine Ebene nach oben gehen wollen. Hier wollen wir diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn/../CSS/display`, die auf folgende Weise vereinfacht werden kann: `https://developer.mozilla.org/de/docs/CSS/display`.
- Nur Anker: `#semantic_urls` - alle Teile fehlen außer dem Anker. Der Browser wird die URL des aktuellen Dokuments verwenden und den Ankerteil ersetzen oder hinzufügen. Dies ist nützlich, wenn Sie auf einen bestimmten Teil des aktuellen Dokuments verlinken möchten.

## Semantische URLs

Trotz ihrer sehr technischen Ausprägung stellen URLs einen menschenlesbaren Einstiegspunkt für eine Website dar. Sie können sich diese merken, und jeder kann sie in die Adressleiste eines Browsers eingeben. Menschen stehen im Mittelpunkt des Webs, und daher wird es als Best Practice angesehen, sogenannte [semantische URLs](https://en.wikipedia.org/wiki/Semantic_URL) zu erstellen. Semantische URLs verwenden Wörter mit inhärenter Bedeutung, die von jedem verstanden werden können, unabhängig von deren technischem Wissen.

Linguistische Semantik ist für Computer natürlich irrelevant. Sie haben wahrscheinlich oft URLs gesehen, die wie eine Mischung aus zufälligen Zeichen aussehen. Aber es gibt viele Vorteile, menschlich lesbare URLs zu erstellen:

- Es ist einfacher für Sie, sie zu manipulieren.
- Es klärt die Dinge für Benutzer in Bezug darauf, wo sie sich befinden, was sie tun, was sie lesen oder mit dem Web interagieren.
- Einige Suchmaschinen können diese Semantik verwenden, um die Klassifizierung der zugehörigen Seiten zu verbessern.

## Siehe auch

[Data URLs](/de/docs/Web/URI/Schemes/data): URLs mit dem Präfix `data:` erlauben es Inhaltsautoren, kleine Dateien in Dokumente einzubetten.
