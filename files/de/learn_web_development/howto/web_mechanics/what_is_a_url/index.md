---
title: Was ist eine URL?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_URL
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Dieser Artikel behandelt Uniform Resource Locators (URLs) und erklärt, was sie sind und wie sie aufgebaut sind.

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
      <td>Sie lernen, was eine URL ist und wie sie im Web funktioniert.</td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Eine **URL** (Uniform Resource Locator) ist die Adresse einer einzigartigen Ressource im Internet. Es ist einer der wichtigsten Mechanismen, die {{Glossary("Browser", "Browser")}} verwenden, um veröffentlichte Ressourcen wie HTML-Seiten, CSS-Dokumente, Bilder usw. abzurufen.

Theoretisch verweist jede gültige URL auf eine einzigartige Ressource. In der Praxis gibt es einige Ausnahmen, die häufigste ist eine URL, die auf eine Ressource verweist, die nicht mehr existiert oder sich bewegt hat. Da die Ressource, die von der URL repräsentiert wird, und die URL selbst vom Webserver verwaltet werden, liegt es am Besitzer des Webservers, diese Ressource und ihre zugehörige URL sorgfältig zu verwalten.

## Grundlagen: Anatomie einer URL

Hier sind einige Beispiele für URLs:

```plain
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn_web_development/
https://developer.mozilla.org/en-US/search?q=URL
```

Jede dieser URLs kann in die Adressleiste Ihres Browsers eingegeben werden, um ihm mitzuteilen, die zugehörige Ressource zu laden, die in allen drei Fällen eine Webseite ist.

Eine URL besteht aus verschiedenen Teilen, von denen einige obligatorisch und andere optional sind. Die wichtigsten Teile sind in der unten stehenden URL hervorgehoben (Details werden in den folgenden Abschnitten bereitgestellt):

![volle URL](mdn-url-all.png)

> [!NOTE]
> Sie können sich eine URL wie eine reguläre Postadresse vorstellen: das _Schema_ repräsentiert den Postdienst, den Sie verwenden möchten, der _Domain-Name_ ist die Stadt oder das Dorf, und der _Port_ ist wie die Postleitzahl; der _Pfad_ repräsentiert das Gebäude, in das Ihre Post geliefert werden soll; die _Parameter_ repräsentieren zusätzliche Informationen, z. B. die Nummer der Wohnung im Gebäude; und schließlich repräsentiert der _Anker_ die eigentliche Person, an die Sie Ihre Post adressiert haben.

> [!NOTE]
> Es gibt [einige zusätzliche Teile und einige zusätzliche Regeln](https://en.wikipedia.org/wiki/Uniform_Resource_Locator) bezüglich URLs, aber sie sind für normale Nutzer oder Webentwickler nicht relevant. Machen Sie sich darüber keine Sorgen, Sie müssen sie nicht kennen, um vollständig funktionale URLs zu erstellen und zu verwenden.

## Schema

![Schema](mdn-url-protocol@x2_update.png)

Der erste Teil der URL ist das _Schema_, das das Protokoll angibt, das der Browser verwenden muss, um die Ressource anzufordern (ein Protokoll ist eine festgelegte Methode zum Austauschen oder Übertragen von Daten in einem Computernetzwerk). Normalerweise lautet das Protokoll für Websites HTTPS oder HTTP (seine ungesicherte Version). Das Adressieren von Webseiten erfordert eines dieser beiden, aber Browser wissen auch, wie man mit anderen Schemata umgeht, wie z.B. `mailto:` (um einen E-Mail-Client zu öffnen), also seien Sie nicht überrascht, wenn Sie andere Protokolle sehen.

## Authority

![Authority](mdn-url-authority.png)

Es folgt die _Authority_, die durch das Zeichenmuster `://` vom Schema getrennt wird. Wenn vorhanden, umfasst die Authority sowohl die _Domain_ (z. B. `www.example.com`) als auch den _Port_ (`80`), getrennt durch einen Doppelpunkt:

- Die Domain zeigt an, welcher Webserver angefordert wird. Dies ist normalerweise ein [Domain-Name](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name), aber eine {{Glossary("IP_address", "IP-Adresse")}} kann auch verwendet werden (aber das ist selten, da es viel weniger praktisch ist).
- Der Port gibt das technische "Tor" an, das verwendet wird, um auf die Ressourcen auf dem Webserver zuzugreifen. Er wird normalerweise weggelassen, wenn der Webserver die Standard-Ports des HTTP-Protokolls (80 für HTTP und 443 für HTTPS) verwendet, um Zugang zu seinen Ressourcen zu gewähren. Andernfalls ist er obligatorisch.

> [!NOTE]
> Der Separator zwischen dem Schema und der Authority ist `://`. Der Doppelpunkt trennt das Schema vom nächsten Teil der URL, während `//` anzeigt, dass der nächste Teil der URL die Authority ist.
>
> Ein Beispiel für eine URL, die keine Authority verwendet, ist der Mail-Client (`mailto:foobar`). Sie enthält ein Schema, benutzt aber keine Authority-Komponente. Daher wird der Doppelpunkt nicht von zwei Schrägstrichen gefolgt und dient nur als Trennzeichen zwischen dem Schema und der Mail-Adresse.

## Pfad zur Ressource

![Pfad zur Datei](mdn-url-path@x2.png)

`/path/to/myfile.html` ist der Pfad zur Ressource auf dem Webserver. In den Anfangstagen des Webs stellte ein solcher Pfad einen physischen Dateispeicherort auf dem Webserver dar. Heutzutage ist es meistens eine Abstraktion, die von Webservern ohne physische Realität behandelt wird.

## Parameter

![Parameter](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` sind zusätzliche Parameter, die dem Webserver zur Verfügung gestellt werden. Diese Parameter sind eine Liste von Schlüssel-/Wert-Paaren, die mit dem `&`-Symbol getrennt sind. Der Webserver kann diese Parameter verwenden, um zusätzliche Aufgaben auszuführen, bevor er die Ressource zurückgibt. Jeder Webserver hat seine eigenen Regeln bezüglich der Parameter, und der einzige zuverlässige Weg zu wissen, ob ein bestimmter Webserver Parameter verarbeitet, ist, den Besitzer des Webservers zu fragen.

## Anker

![Anker](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` ist ein Anker zu einem anderen Teil der Ressource selbst. Ein Anker repräsentiert eine Art "Lesezeichen" innerhalb der Ressource und gibt dem Browser die Anweisungen, den Inhalt an der "markierten" Stelle anzuzeigen. Auf einem HTML-Dokument scrollt der Browser zum Punkt, an dem der Anker definiert ist; auf einem Video- oder Audiodokument versucht der Browser, zu dem Zeitpunkt zu gehen, den der Anker darstellt. Es ist erwähnenswert, dass der Teil nach dem **#**, auch bekannt als **Fragment-Identifier**, niemals mit der Anfrage an den Server gesendet wird.

## Wie benutzt man URLs

Jede URL kann direkt in die Adressleiste des Browsers eingegeben werden, um die dahinter liegende Ressource zu erreichen. Aber das ist nur die Spitze des Eisbergs!

Die {{Glossary("HTML", "HTML")}}-Sprache (siehe [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)) verwendet URLs intensiv:

- um mit dem {{HTMLElement("a")}}-Element Links zu anderen Dokumenten zu erstellen;
- um ein Dokument mit seinen zugehörigen Ressourcen durch verschiedene Elemente wie {{HTMLElement("link")}} oder {{HTMLElement("script")}} zu verknüpfen;
- um Medien wie Bilder (mit dem {{HTMLElement("img")}}-Element), Videos (mit dem {{HTMLElement("video")}}-Element), Sounds und Musik (mit dem {{HTMLElement("audio")}}-Element) usw. anzuzeigen;
- um andere HTML-Dokumente mit dem {{HTMLElement("iframe")}}-Element anzuzeigen.

> [!NOTE]
> Beim Angeben von URLs zum Laden von Ressourcen als Teil einer Seite (z. B. bei der Verwendung von `<script>`, `<audio>`, `<img>`, `<video>` usw.) sollten Sie im Allgemeinen nur HTTP- und HTTPS-URLs verwenden, mit wenigen Ausnahmen (eine bemerkenswerte ist `data:`; siehe [Data URLs](/de/docs/Web/URI/Reference/Schemes/data)). Die Verwendung von FTP ist zum Beispiel nicht sicher und wird von modernen Browsern nicht mehr unterstützt.

Andere Technologien, wie {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}}, verwenden URLs intensiv, und diese sind wirklich das Herzstück des Webs.

## Absolute URLs vs. relative URLs

Was wir oben gesehen haben, wird als _absolute URL_ bezeichnet, aber es gibt auch etwas, das als _relative URL_ bezeichnet wird. Der [URL-Standard](https://url.spec.whatwg.org/#absolute-url-string) definiert beide — obwohl er die Begriffe [_absolute URL string_](https://url.spec.whatwg.org/#absolute-url-string) und [_relative URL string_](https://url.spec.whatwg.org/#relative-url-string) verwendet, um sie von [URL-Objekten](https://url.spec.whatwg.org/#url) zu unterscheiden (die Speicherrepräsentationen von URLs sind).

Lassen Sie uns untersuchen, was die Unterscheidung zwischen _absolut_ und _relativ_ im Kontext von URLs bedeutet.

Die notwendigen Teile einer URL hängen in großem Maße vom Kontext ab, in dem die URL verwendet wird. In der Adressleiste Ihres Browsers hat eine URL keinen Kontext, daher müssen Sie eine vollständige (oder _absolute_) URL angeben, wie die, die wir oben gesehen haben. Sie müssen das Protokoll (der Browser verwendet standardmäßig HTTP) oder den Port (der nur erforderlich ist, wenn der angezielte Webserver einen ungewöhnlichen Port verwendet) nicht angeben, aber alle anderen Teile der URL sind notwendig.

Wenn eine URL innerhalb eines Dokuments verwendet wird, wie in einer HTML-Seite, sind die Dinge etwas anders. Da der Browser bereits die eigene URL des Dokuments hat, kann er diese Informationen verwenden, um die fehlenden Teile einer URL innerhalb dieses Dokuments auszufüllen. Wir können zwischen einer _absoluten URL_ und einer _relativen URL_ unterscheiden, indem wir nur den _Pfad_-Teil der URL betrachten. Wenn der Pfadteil der URL mit dem `/`-Zeichen beginnt, wird der Browser diese Ressource vom obersten Verzeichnis des Servers abrufen, ohne auf den Kontext des aktuellen Dokuments Bezug zu nehmen.

Schauen wir uns einige Beispiele an, um das klarer zu machen. Nehmen wir an, dass die URLs innerhalb des Dokuments definiert sind, das an folgender URL zu finden ist: `https://developer.mozilla.org/de/docs/Learn_web_development`.

`https://developer.mozilla.org/de/docs/Learn_web_development` selbst ist eine absolute URL. Sie enthält alle notwendigen Teile, die benötigt werden, um die Ressource zu lokalisieren, auf die sie verweist.

Alle folgenden URLs sind relative URLs:

- Schema-relative URL: `//developer.mozilla.org/de/docs/Learn_web_development` — nur das Protokoll fehlt. Der Browser wird das gleiche Protokoll verwenden wie das, das verwendet wurde, um das Dokument zu laden, das diese URL beherbergt.
- Domain-relative URL: `/de/docs/Learn_web_development` — das Protokoll und der Domain-Name fehlen beide. Der Browser wird das gleiche Protokoll und den gleichen Domain-Namen verwenden wie das, das verwendet wurde, um das Dokument zu laden, das diese URL beherbergt.
- Unterressourcen: `Howto/Web_mechanics/What_is_a_URL` — das Protokoll und der Domain-Name fehlen, und der Pfad beginnt nicht mit `/`. Der Browser wird versuchen, das Dokument in einem Unterverzeichnis desjenigen zu finden, das die aktuelle Ressource enthält. In diesem Fall wollen wir wirklich diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL`.
- Zurück im Verzeichnisbaum: `../CSS/display` — das Protokoll und der Domain-Name fehlen, und der Pfad beginnt mit `..`. Dies ist aus der UNIX-Dateisystemwelt geerbt — um dem Browser mitzuteilen, dass wir um eine Ebene nach oben gehen möchten. Hier wollen wir diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn_web_development/../Web/CSS/display`, die vereinfacht werden kann zu: `https://developer.mozilla.org/de/docs/Web/CSS/display`.
- Nur Anker: `#semantic_urls` - alle Teile fehlen außer dem Anker. Der Browser wird die URL des aktuellen Dokuments verwenden und den Ankerteil daran ersetzen oder hinzufügen. Dies ist nützlich, wenn Sie auf einen bestimmten Teil des aktuellen Dokuments verlinken möchten.

## Semantische URLs

Trotz ihres sehr technischen Charakters stellen URLs einen für Menschen lesbaren Einstiegspunkt für eine Website dar. Sie können auswendig gelernt werden, und jeder kann sie in die Adressleiste eines Browsers eingeben. Menschen stehen im Mittelpunkt des Webs, und es gilt daher als Best Practice, sogenannte [_semantische URLs_](https://en.wikipedia.org/wiki/Semantic_URL) zu erstellen. Semantische URLs verwenden Wörter mit einem inhärenten Verständnis, das von jedem verstanden werden kann, unabhängig von seinem technischen Wissen.

Linguistische Semantik ist natürlich für Computer irrelevant. Sie haben wahrscheinlich oft URLs gesehen, die wie Zusammensetzungen aus zufälligen Zeichen aussehen. Aber es gibt viele Vorteile bei der Erstellung menschenlesbarer URLs:

- Es ist einfacher für Sie, sie zu manipulieren.
- Es klärt für Nutzer Dinge in Bezug darauf, wo sie sind, was sie tun, was sie lesen oder im Web interagieren.
- Einige Suchmaschinen können diese Semantik verwenden, um die Klassifizierung der zugehörigen Seiten zu verbessern.

## Siehe auch

[Data URLs](/de/docs/Web/URI/Reference/Schemes/data): URLs, die mit dem `data:`-Schema beginnen, ermöglichen es Inhaltserstellern, kleine Dateien inline in Dokumente einzubetten.
