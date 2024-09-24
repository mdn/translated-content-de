---
title: Was ist eine URL?
slug: Learn/Common_questions/Web_mechanics/What_is_a_URL
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel behandelt Uniform Resource Locators (URLs) und erklärt, was sie sind und wie sie strukturiert sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten zunächst wissen,
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
      <th scope="row">Zielsetzung:</th>
      <td>Sie werden lernen, was eine URL ist und wie sie im Web funktioniert.</td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Eine **URL** (Uniform Resource Locator) ist die Adresse einer einzigartigen Ressource im Internet. Sie ist einer der Hauptmechanismen, die von {{Glossary("Browser","Browsern")}} verwendet werden, um veröffentlichte Ressourcen abzurufen, wie HTML-Seiten, CSS-Dokumente, Bilder usw.

Theoretisch zeigt jede gültige URL auf eine einzigartige Ressource. In der Praxis gibt es einige Ausnahmen, die häufigste ist eine URL, die auf eine Ressource zeigt, die nicht mehr existiert oder verschoben wurde. Da die Ressource, die durch die URL repräsentiert wird, und die URL selbst vom Webserver verwaltet werden, liegt es in der Verantwortung des Besitzers des Webservers, diese Ressource und ihre zugehörige URL sorgfältig zu verwalten.

## Grundlagen: Aufbau einer URL

Hier sind einige Beispiele für URLs:

```plain
https://developer.mozilla.org
https://developer.mozilla.org/de/docs/Learn/
https://developer.mozilla.org/en-US/search?q=URL
```

Jede dieser URLs kann in die Adressleiste Ihres Browsers eingegeben werden, um den zugehörigen Inhalt zu laden, der in allen drei Fällen eine Webseite ist.

Eine URL besteht aus verschiedenen Teilen, einige davon sind obligatorisch und andere optional. Die wichtigsten Teile sind in der untenstehenden URL hervorgehoben (Details werden in den folgenden Abschnitten bereitgestellt):

![volle URL](mdn-url-all.png)

> [!NOTE]
> Sie könnten eine URL wie eine normale Postadresse betrachten: das _Schema_ repräsentiert den von Ihnen verwendeten Postdienst, der _Domainname_ ist die Stadt oder Gemeinde, und der _Port_ ist wie die Postleitzahl; der _Pfad_ repräsentiert das Gebäude, in das Ihre Post geliefert werden soll; die _Parameter_ repräsentieren zusätzliche Informationen wie die Wohnungsnummer im Gebäude; und schließlich repräsentiert der _Anker_ die tatsächliche Person, an die Sie Ihre Post adressiert haben.

> [!NOTE]
> Es gibt [einige zusätzliche Teile und einige zusätzliche Regeln](https://en.wikipedia.org/wiki/Uniform_Resource_Locator) bezüglich URLs, aber sie sind für normale Benutzer oder Webentwickler nicht relevant. Machen Sie sich darüber keine Sorgen, Sie müssen sie nicht kennen, um vollständig funktionierende URLs zu erstellen und zu verwenden.

## Schema

![Schema](mdn-url-protocol@x2_update.png)

Der erste Teil der URL ist das _Schema_, das das Protokoll angibt, das der Browser verwenden muss, um die Ressource anzufordern (ein Protokoll ist eine festgelegte Methode zum Austauschen oder Übertragen von Daten in einem Computernetzwerk). Üblicherweise ist das Protokoll für Webseiten HTTPS oder HTTP (die ungesicherte Version davon). Zur Adressierung von Webseiten wird eines dieser beiden benötigt, aber Browser wissen auch, wie sie mit anderen Schemata wie `mailto:` umgehen müssen (um einen Mail-Client zu öffnen), daher seien Sie nicht überrascht, wenn Sie andere Protokolle sehen.

## Authority

![Authority](mdn-url-authority.png)

Als nächstes folgt die _Authority_, die durch das Zeichenmuster `://` vom Schema getrennt ist. Wenn vorhanden, umfasst die Authority sowohl die _Domain_ (z.B. `www.example.com`) als auch den _Port_ (`80`), getrennt durch einen Doppelpunkt:

- Die Domain gibt an, welcher Webserver angefordert wird. Normalerweise ist dies ein [Domainname](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name), aber es kann auch eine {{Glossary("IP address")}} verwendet werden (was selten ist, da es viel weniger praktisch ist).
- Der Port gibt das technische "Tor" an, das zum Zugriff auf die Ressourcen auf dem Webserver verwendet wird. Es wird normalerweise weggelassen, wenn der Webserver die Standardports des HTTP-Protokolls benutzt (80 für HTTP und 443 für HTTPS), um Zugriff auf seine Ressourcen zu gewähren. Andernfalls ist er obligatorisch.

> [!NOTE]
> Der Separator zwischen dem Schema und der Authority ist `://`. Der Doppelpunkt trennt das Schema vom nächsten Teil der URL, während `//` anzeigt, dass der nächste Teil der URL die Authority ist.
>
> Ein Beispiel für eine URL, die keine Authority verwendet, ist der Mail-Client (`mailto:foobar`). Es enthält ein Schema, verwendet aber keine Authority-Komponente. Daher wird der Doppelpunkt nicht von zwei Schrägstrichen gefolgt und dient nur als Trennzeichen zwischen Schema und Mailadresse.

## Pfad zur Ressource

![Pfad zur Datei](mdn-url-path@x2.png)

`/pfad/zur/meinerdatei.html` ist der Pfad zur Ressource auf dem Webserver. In den frühen Tagen des Webs stellte ein solcher Pfad einen physischen Dateispeicherort auf dem Webserver dar. Heutzutage ist es meistens eine Abstraktion, die von Webservern ohne physische Realität gehandhabt wird.

## Parameter

![Parameter](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` sind zusätzliche Parameter, die dem Webserver bereitgestellt werden. Diese Parameter sind eine Liste von Schlüssel/Wert-Paaren, die mit dem `&`-Symbol getrennt sind. Der Webserver kann diese Parameter verwenden, um zusätzliche Aufgaben auszuführen, bevor die Ressource zurückgegeben wird. Jeder Webserver hat seine eigenen Regeln bezüglich der Parameter, und der einzige zuverlässige Weg, um zu wissen, ob ein spezifischer Webserver die Parameter verarbeitet, besteht darin, den Besitzer des Webservers zu fragen.

## Anker

![Anker](mdn-url-anchor@x2.png)

`#IrgendwoImDokument` ist ein Anker zu einem anderen Teil der Ressource selbst. Ein Anker repräsentiert eine Art "Lesezeichen" innerhalb der Ressource und gibt dem Browser die Anweisungen, den Inhalt an der "markierten" Stelle anzuzeigen. In einem HTML-Dokument wird der Browser beispielsweise zu dem Punkt scrollen, an dem der Anker definiert ist; in einem Video- oder Audiodokument wird der Browser versuchen, die Zeit anzusteuern, die der Anker darstellt. Es ist wichtig zu beachten, dass der Teil nach dem **#**, auch bekannt als **Fragment-Identifier**, niemals mit der Anfrage an den Server gesendet wird.

## Wie man URLs verwendet

Jede URL kann direkt in die Adressleiste des Browsers eingegeben werden, um zur dahinter liegenden Ressource zu gelangen. Aber dies ist nur die Spitze des Eisbergs!

Die {{Glossary("HTML")}}-Sprache — [die später behandelt wird](/de/docs/Learn/HTML/Introduction_to_HTML) — nutzt URLs umfangreich:

- um Links zu anderen Dokumenten mit dem {{HTMLElement("a")}}-Element zu erstellen;
- um ein Dokument mit seinen zugehörigen Ressourcen über verschiedene Elemente wie {{HTMLElement("link")}} oder {{HTMLElement("script")}} zu verknüpfen;
- um Medien wie Bilder (mit dem {{HTMLElement("img")}}-Element), Videos (mit dem {{HTMLElement("video")}}-Element), Sounds und Musik (mit dem {{HTMLElement("audio")}}-Element) usw. anzuzeigen;
- um andere HTML-Dokumente mit dem {{HTMLElement("iframe")}}-Element anzuzeigen.

> [!NOTE]
> Beim Spezifizieren von URLs zum Laden von Ressourcen als Teil einer Seite (wie beim Verwenden von `<script>`, `<audio>`, `<img>`, `<video>` und dergleichen) sollten Sie im Allgemeinen nur HTTP- und HTTPS-URLs verwenden, mit wenigen Ausnahmen (eine bemerkenswerte ist `data:`; siehe [Daten-URLs](/de/docs/Web/URI/Schemes/data)). Die Verwendung von FTP ist beispielsweise nicht sicher und wird von modernen Browsern nicht mehr unterstützt.

Andere Technologien, wie {{Glossary("CSS")}} oder {{Glossary("JavaScript")}}, verwenden URLs ausgiebig, und diese sind wirklich das Herz des Webs.

## Absolute URLs vs. relative URLs

Was wir oben gesehen haben, wird als _absolute URL_ bezeichnet, aber es gibt auch etwas, das als _relative URL_ bekannt ist. Der [URL-Standard](https://url.spec.whatwg.org/#absolute-url-string) definiert beide — obwohl er die Begriffe [_absolute URL string_](https://url.spec.whatwg.org/#absolute-url-string) und [_relative URL string_](https://url.spec.whatwg.org/#relative-url-string) verwendet, um sie von [URL-Objekten](https://url.spec.whatwg.org/#url) zu unterscheiden (die speicherinterne Darstellungen von URLs sind).

Lassen Sie uns untersuchen, was die Unterscheidung zwischen _absolut_ und _relativ_ im Kontext von URLs bedeutet.

Die erforderlichen Teile einer URL hängen erheblich vom Kontext ab, in dem die URL verwendet wird. In der Adressleiste Ihres Browsers hat eine URL keinen Kontext, sodass Sie eine vollständige (oder _absolute_) URL angeben müssen, wie die, die wir oben gesehen haben. Sie müssen das Protokoll nicht einbeziehen (der Browser verwendet standardmäßig HTTP) oder den Port (der nur erforderlich ist, wenn der angeforderte Webserver einen ungewöhnlichen Port verwendet), aber alle anderen Teile der URL sind notwendig.

Wenn eine URL innerhalb eines Dokuments verwendet wird, wie zum Beispiel auf einer HTML-Seite, sieht die Sache ein wenig anders aus. Da der Browser bereits die eigene URL des Dokuments hat, kann er diese Informationen verwenden, um die fehlenden Teile einer beliebigen URL innerhalb dieses Dokuments zu ergänzen. Wir können zwischen einer _absoluten URL_ und einer _relativen URL_ unterscheiden, indem wir nur den _Pfad_ der URL betrachten. Wenn der Pfad der URL mit dem Zeichen "`/`" beginnt, wird der Browser diese Ressource aus dem obersten Verzeichnis des Servers beziehen, ohne Rücksicht auf den Kontext, der durch das aktuelle Dokument gegeben ist.

Lassen Sie uns einige Beispiele betrachten, um dies klarer zu machen. Nehmen wir an, die URLs sind innerhalb des Dokuments definiert, das sich an folgender URL befindet: `https://developer.mozilla.org/de/docs/Learn`.

`https://developer.mozilla.org/de/docs/Learn` selbst ist eine absolute URL. Sie hat alle notwendigen Teile, um die Ressource ausfindig zu machen, auf die sie zeigt.

Alle folgenden URLs sind relative URLs:

- Schema-relative URL: `//developer.mozilla.org/de/docs/Learn` — nur das Protokoll fehlt. Der Browser wird dasselbe Protokoll wie das verwenden, das zum Laden des Dokuments verwendet wurde, das diese URL enthält.
- Domain-relative URL: `/de/docs/Learn` — das Protokoll und der Domainname fehlen beide. Der Browser wird dasselbe Protokoll und denselben Domainnamen wie das verwenden, das zum Laden des Dokuments verwendet wurde, das diese URL enthält.
- Unterressourcen: `Common_questions/Web_mechanics/What_is_a_URL` — das Protokoll und der Domainname fehlen, und der Pfad beginnt nicht mit `/`. Der Browser wird versuchen, das Dokument in einem Unterverzeichnis desjenigen zu finden, das die aktuelle Ressource enthält. In diesem Fall möchten wir wirklich diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL`.
- Rückkehr im Verzeichnisbaum: `../CSS/display` — das Protokoll und der Domainname fehlen, und der Pfad beginnt mit `..`. Dies stammt aus der Unix-Dateisystemwelt — um dem Browser mitzuteilen, dass wir um eine Ebene nach oben gehen möchten. Hier möchten wir diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn/../CSS/display`, die zu vereinfachen ist zu: `https://developer.mozilla.org/de/docs/CSS/display`.
- Nur Anker: `#semantic_urls` - alle Teile fehlen, außer dem Anker. Der Browser wird die aktuelle URL des Dokuments verwenden und den Ankerteil daran ersetzen oder hinzufügen. Dies ist nützlich, wenn Sie auf einen bestimmten Teil des aktuellen Dokuments verlinken möchten.

## Semantische URLs

Trotz ihres sehr technischen Charakters stellen URLs einen menschenlesbaren Einstiegspunkt für eine Website dar. Sie können memoriert werden, und jeder kann sie in die Adressleiste eines Browsers eingeben. Menschen stehen im Mittelpunkt des Webs, und daher wird es als bewährte Praxis angesehen, sogenannte [_semantische URLs_](https://en.wikipedia.org/wiki/Semantic_URL) zu erstellen. Semantische URLs verwenden Wörter mit inhärenter Bedeutung, die von jedem verstanden werden können, unabhängig von ihrem technischen Wissen.

Linguistische Semantik ist für Computer natürlich irrelevant. Sie haben wahrscheinlich oft URLs gesehen, die wie Zusammenstellungen von zufälligen Zeichen aussehen. Aber es gibt viele Vorteile bei der Erstellung von menschenlesbaren URLs:

- Es ist einfacher für Sie, mit ihnen umzugehen.
- Es klärt für die Benutzer, wo sie sich befinden, was sie tun, was sie lesen oder mit was sie im Web interagieren.
- Einige Suchmaschinen können diese Semantik nutzen, um die Klassifizierung der zugehörigen Seiten zu verbessern.

## Siehe auch

[Daten-URLs](/de/docs/Web/URI/Schemes/data): URLs, die mit dem `data:`-Schema versehen sind, ermöglichen es Inhaltsanbietern, kleine Dateien direkt in Dokumenten einzubetten.
