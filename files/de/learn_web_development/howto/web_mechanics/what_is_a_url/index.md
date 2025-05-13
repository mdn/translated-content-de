---
title: Was ist eine URL?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_URL
l10n:
  sourceCommit: 324d86d51118c339d4ad7afa973e38fb64f6564e
---

Dieser Artikel behandelt Uniform Resource Locators (URLs) und erklärt, was sie sind und wie sie aufgebaut sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten zunächst wissen,
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work">wie das Internet funktioniert</a>,
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server">was ein Webserver ist</a>
        und
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/What_are_hyperlinks">die Konzepte hinter Links im Web</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Sie werden lernen, was eine URL ist und wie sie im Web funktioniert.</td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Eine **URL** (Uniform Resource Locator) ist die Adresse einer einzigartigen Ressource im Internet. Sie ist einer der Hauptmechanismen, den {{Glossary("Browser", "Browser")}} verwenden, um veröffentlichte Ressourcen wie HTML-Seiten, CSS-Dokumente, Bilder usw. abzurufen.

Theoretisch zeigt jede gültige URL auf eine einzigartige Ressource. In der Praxis gibt es einige Ausnahmen, wobei die häufigste eine URL ist, die auf eine Ressource zeigt, die nicht mehr existiert oder verschoben wurde. Da die Ressource, die durch die URL repräsentiert wird, und die URL selbst vom Webserver verwaltet werden, liegt es in der Verantwortung des Besitzers des Webservers, diese Ressource und ihre zugeordnete URL sorgfältig zu verwalten.

## Grundlagen: Aufbau einer URL

Hier sind einige Beispiele für URLs:

```plain
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn_web_development/
https://developer.mozilla.org/en-US/search?q=URL
```

Jede dieser URLs kann in die Adressleiste Ihres Browsers eingegeben werden, um den zugehörigen Inhalt zu laden, der in allen drei Fällen eine Webseite ist.

Eine URL besteht aus verschiedenen Teilen, von denen einige zwingend erforderlich, andere optional sind. Die wichtigsten Teile sind in der URL unten hervorgehoben (Details werden in den folgenden Abschnitten angegeben):

![vollständige URL](mdn-url-all.png)

> [!NOTE]
> Sie können sich eine URL wie eine normale Postadresse vorstellen: das _Schema_ repräsentiert den Postdienst, den Sie verwenden möchten, der _Domain-Name_ ist die Stadt oder der Ort, und der _Port_ ist wie die Postleitzahl; der _Pfad_ repräsentiert das Gebäude, in das Ihre Post geliefert werden soll; die _Parameter_ stellen zusätzliche Informationen wie die Wohnungsnummer im Gebäude dar; und schließlich repräsentiert der _Anker_ die eigentliche Person, an die Sie Ihre Post adressiert haben.

> [!NOTE]
> Es gibt [einige zusätzliche Teile und Regeln](https://en.wikipedia.org/wiki/Uniform_Resource_Locator) bezüglich URLs, aber diese sind für normale Benutzer oder Webentwickler nicht relevant. Machen Sie sich keine Sorgen, Sie müssen sie nicht kennen, um voll funktionsfähige URLs zu erstellen und zu verwenden.

## Schema

![Schema](mdn-url-protocol@x2_update.png)

Der erste Teil der URL ist das _Schema_, das angibt, welches Protokoll der Browser verwenden muss, um die Ressource anzufordern (ein Protokoll ist eine festgelegte Methode für den Austausch oder die Übertragung von Daten über ein Computernetzwerk). Üblicherweise ist das Protokoll für Webseiten HTTPS oder HTTP (seine ungesicherte Version). Beim Aufrufen von Webseiten wird eines dieser beiden Protokolle benötigt, aber Browser können auch andere Schemen, wie `mailto:` (zum Öffnen eines Mail-Clients), verarbeiten, also wundern Sie sich nicht, wenn Sie andere Protokolle sehen.

## Autorität

![Autorität](mdn-url-authority.png)

Als nächstes folgt die _Autorität_, die durch das Zeichenmuster `://` vom Schema getrennt wird. Wenn vorhanden, umfasst die Autorität sowohl die _Domain_ (z.B. `www.example.com`) als auch den _Port_ (`80`), getrennt durch einen Doppelpunkt:

- Die Domain gibt an, welcher Webserver angefordert wird. Üblicherweise ist dies ein [Domain-Name](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name), es kann aber auch eine {{Glossary("IP_address", "IP-Adresse")}} verwendet werden (was allerdings selten vorkommt, da es viel weniger bequem ist).
- Der Port gibt das technische "Tor" an, das für den Zugriff auf die Ressourcen des Webservers verwendet wird. Er wird normalerweise weggelassen, wenn der Webserver die Standardports des HTTP-Protokolls (80 für HTTP und 443 für HTTPS) zum Gewähren des Zugriffs auf seine Ressourcen verwendet. Andernfalls ist er zwingend erforderlich.

> [!NOTE]
> Der Trenner zwischen Schema und Autorität ist `://`. Der Doppelpunkt trennt das Schema vom nächsten Teil der URL, während `//` anzeigt, dass der nächste Teil der URL die Autorität ist.
>
> Ein Beispiel für eine URL, die keine Autorität verwendet, ist der Mail-Client (`mailto:foobar`). Er enthält ein Schema, verwendet aber keine Autoritätskomponente. Daher folgt dem Doppelpunkt nicht zwei Schrägstriche und er fungiert nur als Trennzeichen zwischen Schema und Mailadresse.

## Pfad zur Ressource

![Pfad zur Datei](mdn-url-path@x2.png)

`/path/to/myfile.html` ist der Pfad zur Ressource auf dem Webserver. In den frühen Tagen des Web stellte ein solcher Pfad einen physischen Dateispeicherort auf dem Webserver dar. Heutzutage ist es meist eine Abstraktion, die von Webservern ohne physische Realität gehandhabt wird.

## Parameter

![Parameter](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` sind zusätzliche Parameter, die dem Webserver bereitgestellt werden. Diese Parameter sind eine Liste von Schlüssel-Wert-Paaren, die durch das `&`-Symbol getrennt sind. Der Webserver kann diese Parameter verwenden, um zusätzliche Aufgaben zu erledigen, bevor er die Ressource zurückgibt. Jeder Webserver hat seine eigenen Regeln bezüglich Parameter, und der einzige zuverlässige Weg, um zu wissen, ob ein bestimmter Webserver Parameter verarbeitet, besteht darin, den Besitzer des Webservers zu fragen.

## Anker

![Anker](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` ist ein Anker zu einem anderen Teil der Ressource selbst. Ein Anker repräsentiert eine Art "Lesezeichen" innerhalb der Ressource und gibt dem Browser die Anweisungen, um den Inhalt an der Stelle anzuzeigen, die das "Lesezeichen" markiert. In einem HTML-Dokument beispielsweise scrollt der Browser zu der Stelle, an der der Anker definiert ist; in einem Video- oder Audiodokument versucht der Browser, zu der Zeit zu gehen, die der Anker repräsentiert. Es ist wichtig zu beachten, dass der Teil nach dem **#**, auch als **Fragmentbezeichner** bekannt, niemals mit der Anfrage an den Server gesendet wird.

## Wie man URLs verwendet

Jede URL kann direkt in die Adressleiste des Browsers eingegeben werden, um zur dahinterliegenden Ressource zu gelangen. Aber das ist nur die Spitze des Eisbergs!

Die {{Glossary("HTML", "HTML")}}-Sprache (siehe [Inhalte strukturieren mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)) macht umfangreichen Gebrauch von URLs:

- um Links zu anderen Dokumenten mit dem {{HTMLElement("a")}}-Element zu erstellen;
- um ein Dokument mit seinen zugehörigen Ressourcen über verschiedene Elemente wie {{HTMLElement("link")}} oder {{HTMLElement("script")}} zu verknüpfen;
- um Medien wie Bilder (mit dem {{HTMLElement("img")}}-Element), Videos (mit dem {{HTMLElement("video")}}-Element), Geräusche und Musik (mit dem {{HTMLElement("audio")}}-Element) usw. anzuzeigen;
- um andere HTML-Dokumente mit dem {{HTMLElement("iframe")}}-Element anzuzeigen.

> [!NOTE]
> Beim Spezifizieren von URLs zum Laden von Ressourcen als Teil einer Seite (wie beim Verwenden von `<script>`, `<audio>`, `<img>`, `<video>` und Ähnlichem) sollten Sie im Allgemeinen nur HTTP- und HTTPS-URLs verwenden, mit wenigen Ausnahmen (eine bemerkenswerte ist `data:`; siehe [Data URLs](/de/docs/Web/URI/Reference/Schemes/data)). Die Verwendung von FTP ist zum Beispiel nicht sicher und wird von modernen Browsern nicht mehr unterstützt.

Andere Technologien, wie {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}}, verwenden URLs umfangreich, und sie sind wirklich das Herz des Webs.

## Absolute URLs vs. relative URLs

Was wir oben gesehen haben, wird als _absolute URL_ bezeichnet, aber es gibt auch etwas, das _relative URL_ genannt wird. Der [URL-Standard](https://url.spec.whatwg.org/#absolute-url-string) definiert beide — obwohl er die Begriffe [_absolute URL string_](https://url.spec.whatwg.org/#absolute-url-string) und [_relative URL string_](https://url.spec.whatwg.org/#relative-url-string) verwendet, um sie von [URL-Objekten](https://url.spec.whatwg.org/#url) zu unterscheiden (die speicherinterne Darstellungen von URLs sind).

Lassen Sie uns untersuchen, was der Unterschied zwischen _absolut_ und _relativ_ im Kontext von URLs bedeutet.

Die erforderlichen Teile einer URL hängen stark vom Kontext ab, in dem die URL verwendet wird. In der Adressleiste Ihres Browsers hat eine URL keinen Kontext, also müssen Sie eine vollständige (oder _absolute_) URL angeben, wie die, die wir oben gesehen haben. Sie müssen das Protokoll nicht einschließen (der Browser verwendet standardmäßig HTTP) oder den Port (der nur erforderlich ist, wenn der angezielte Webserver einen ungewöhnlichen Port verwendet), aber alle anderen Teile der URL sind notwendig.

Wenn eine URL in einem Dokument verwendet wird, wie beispielsweise auf einer HTML-Seite, sieht die Sache etwas anders aus. Da der Browser bereits die eigene URL des Dokuments hat, kann er diese Informationen nutzen, um die fehlenden Teile jeder URL innerhalb dieses Dokuments zu ergänzen. Wir können zwischen einer _absoluten URL_ und einer _relativen URL_ unterscheiden, indem wir nur den _Pfad_ der URL betrachten. Wenn der Pfad der URL mit dem Zeichen `/` beginnt, ruft der Browser diese Ressource vom obersten Stamm des Servers ab, ohne Bezug auf den vom aktuellen Dokument gegebenen Kontext.

Lassen Sie uns einige Beispiele betrachten, um dies zu verdeutlichen. Nehmen wir an, die URLs werden innerhalb des Dokuments an der folgenden URL definiert: `https://developer.mozilla.org/de/docs/Learn_web_development`.

`https://developer.mozilla.org/de/docs/Learn_web_development` selbst ist eine absolute URL. Sie hat alle notwendigen Teile, die benötigt werden, um die Ressource zu lokalisieren, auf die sie zeigt.

Alle folgenden URLs sind relative URLs:

- Schema-relative URL: `//developer.mozilla.org/de/docs/Learn_web_development` — nur das Protokoll fehlt. Der Browser verwendet dasselbe Protokoll wie das, welches verwendet wurde, um das Dokument zu laden, das diese URL hostet.
- Domain-relative URL: `/de/docs/Learn_web_development` — Protokoll und Domain-Name fehlen beide. Der Browser verwendet dasselbe Protokoll und denselben Domain-Namen wie das, welches verwendet wurde, um das Dokument zu laden, das diese URL hostet.
- Teilressourcen: `Howto/Web_mechanics/What_is_a_URL` — das Protokoll und der Domain-Name fehlen, und der Pfad beginnt nicht mit `/`. Der Browser versucht, das Dokument in einem Unterverzeichnis des Verzeichnisses zu finden, das die aktuelle Ressource enthält. In diesem Fall wollen wir wirklich diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL`.
- Zurückgehender Pfad im Verzeichnisbaum: `../CSS/display` — das Protokoll und der Domain-Name fehlen, und der Pfad beginnt mit `..`. Dies ist aus der UNIX-Dateisystemwelt übernommen worden — um dem Browser mitzuteilen, dass wir eine Ebene nach oben gehen möchten. Hier möchten wir diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn_web_development/../Web/CSS/display`, die vereinfacht werden kann zu: `https://developer.mozilla.org/de/docs/Web/CSS/display`.
- Nur Anker: `#semantic_urls` - alle Teile fehlen außer dem Anker. Der Browser verwendet die URL des aktuellen Dokuments und ersetzt oder ergänzt den Ankerteil daran. Dies ist nützlich, wenn Sie auf einen bestimmten Teil des aktuellen Dokuments verlinken möchten.

## URL-Benutzernamen und Passwörter

Weniger häufig als die oben besprochenen URL-Teile können Sie möglicherweise einen Benutzernamen und ein Passwort in URLs sehen.

Zum Beispiel:

```plain
https://username:password@www.example.com:80/
```

Wenn enthalten, werden Benutzername und Passwort zwischen den `://`-Zeichen und der Autorität platziert, mit einem Doppelpunkt zwischen den beiden und einem `@`-Zeichen am Ende.

Ein Benutzername und ein Passwort können in die URL aufgenommen werden, wenn auf Websites zugegriffen wird, die den [HTTP-Authentifizierungsmechanismus](/de/docs/Web/HTTP/Guides/Authentication) verwenden, um sich sofort bei einer Website anzumelden und das Dialogfeld für Benutzername/Passwort zu umgehen, das andernfalls erscheinen würde, um Ihre Zugangsdaten einzugeben.

Obwohl Sie diesen Mechanismus möglicherweise noch in freier Wildbahn sehen, ist er wegen Sicherheitsbedenken veraltet, und moderne Websites neigen dazu, andere Mechanismen zur Authentifizierung zu verwenden. Siehe [Zugang über Anmeldedaten in der URL](/de/docs/Web/HTTP/Guides/Authentication#access_using_credentials_in_the_url) für weitere Details.

## Semantische URLs

Trotz ihres sehr technischen Charakters stellen URLs einen für Menschen lesbaren Einstiegspunkt für eine Website dar. Sie können auswendig gelernt werden, und jeder kann sie in die Adressleiste eines Browsers eingeben. Menschen stehen im Mittelpunkt des Web, und es wird daher als Best Practice angesehen, sogenannte [_semantische URLs_](https://en.wikipedia.org/wiki/Semantic_URL) zu erstellen. Semantische URLs verwenden Wörter mit inhärenter Bedeutung, die von jedem verstanden werden können, unabhängig von seinem technischen Wissen.

Linguistische Semantik ist natürlich für Computer irrelevant. Sie haben wahrscheinlich oft URLs gesehen, die wie ein Durcheinander von zufälligen Zeichen erscheinen. Aber es gibt viele Vorteile, menschenlesbare URLs zu erstellen:

- Es ist einfacher für Sie, sie zu manipulieren.
- Es klärt die Dinge für Benutzer in Bezug darauf, wo sie sich befinden, was sie tun, was sie lesen oder mit dem Web interagieren.
- Einige Suchmaschinen können diese Semantik verwenden, um die Klassifizierung der zugehörigen Seiten zu verbessern.

## Siehe auch

[Data URLs](/de/docs/Web/URI/Reference/Schemes/data): URLs, die mit dem `data:`-Schema beginnen und es Inhaltserstellern ermöglichen, kleine Dateien direkt in Dokumente einzubetten.
