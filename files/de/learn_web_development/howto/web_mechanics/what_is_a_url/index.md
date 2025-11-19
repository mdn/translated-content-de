---
title: Was ist eine URL?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_URL
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

Dieser Artikel behandelt Uniform Resource Locators (URLs) und erklärt, was sie sind und wie sie aufgebaut sind.

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
      <td>Sie werden lernen, was eine URL ist und wie sie im Web funktioniert.</td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Eine **URL** (Uniform Resource Locator) ist die Adresse einer einzigartigen Ressource im Internet. Sie ist einer der Schlüsselmechanismen, die von {{Glossary("Browser", "Browsern")}} verwendet werden, um veröffentlichte Ressourcen abzurufen, wie HTML-Seiten, CSS-Dokumente, Bilder und so weiter.

Theoretisch verweist jede gültige URL auf eine einzigartige Ressource. In der Praxis gibt es einige Ausnahmen, die häufigste ist eine URL, die auf eine Ressource verweist, die nicht mehr existiert oder verschoben wurde. Da die Ressource, die durch die URL dargestellt wird, und die URL selbst vom Webserver verwaltet werden, obliegt es dem Besitzer des Webservers, die Ressource und die zugehörige URL sorgfältig zu verwalten.

## Grundlagen: Aufbau einer URL

Hier sind einige Beispiele für URLs:

```plain
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn_web_development/
https://developer.mozilla.org/en-US/search?q=URL
```

Jede dieser URLs kann in die Adressleiste Ihres Browsers eingegeben werden, um ihm zu sagen, dass er die zugehörige Ressource laden soll, die in allen drei Fällen eine Webseite ist.

Eine URL besteht aus verschiedenen Teilen, von denen einige obligatorisch und andere optional sind. Die wichtigsten Teile sind in der folgenden URL hervorgehoben (Details werden in den folgenden Abschnitten bereitgestellt):

![vollständige URL](mdn-url-all.png)

> [!NOTE]
> Sie können sich eine URL wie eine normale Postadresse vorstellen: das _Schema_ repräsentiert den Postdienst, den Sie nutzen möchten, der _Domainname_ ist die Stadt oder das Dorf, und der _Port_ ist wie die Postleitzahl; der _Pfad_ repräsentiert das Gebäude, in das Ihre Post geliefert werden soll; die _Parameter_ repräsentieren zusätzliche Informationen wie die Nummer der Wohnung im Gebäude; und schließlich repräsentiert der _Anker_ die tatsächliche Person, an die Sie Ihre Post adressiert haben.

> [!NOTE]
> Es gibt [einige zusätzliche Teile und einige zusätzliche Regeln](https://en.wikipedia.org/wiki/Uniform_Resource_Locator) bezüglich URLs, aber diese sind für normale Benutzer oder Webentwickler nicht relevant. Machen Sie sich darüber keine Sorgen, Sie müssen diese nicht kennen, um voll funktionsfähige URLs zu erstellen und zu nutzen.

## Schema

![Schema](mdn-url-protocol@x2_update.png)

Der erste Teil der URL ist das _Schema_, das das Protokoll angibt, das der Browser verwenden muss, um die Ressource anzufordern (ein Protokoll ist eine festgelegte Methode zum Austausch oder zur Übertragung von Daten in einem Computernetzwerk). Üblicherweise ist das Protokoll für Webseiten HTTPS oder HTTP (dessen ungesicherte Version). Das Adressieren von Webseiten erfordert eines dieser beiden Protokolle, aber Browser können auch andere Schemata wie `mailto:` (zum Öffnen eines Mail-Clients) handhaben, sodass Sie sich nicht wundern sollten, wenn Sie andere Protokolle sehen.

## Autorität

![Autorität](mdn-url-authority.png)

Es folgt die _Autorität_, die durch das Zeichenmuster `://` vom Schema getrennt ist. Wenn vorhanden, umfasst die Autorität sowohl die _Domain_ (z.B., `www.example.com`) als auch den _Port_ (`80`), getrennt durch einen Doppelpunkt:

- Die Domain gibt an, welcher Webserver angefordert wird. Üblicherweise ist dies ein [Domainname](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name), aber es kann auch eine {{Glossary("IP_address", "IP-Adresse")}} verwendet werden (was jedoch selten ist, da es viel weniger praktisch ist).
- Der Port gibt das technische "Tor" an, das verwendet wird, um auf die Ressourcen auf dem Webserver zuzugreifen. Er wird normalerweise weggelassen, wenn der Webserver die Standard-Ports des HTTP-Protokolls (80 für HTTP und 443 für HTTPS) verwendet, um Zugriff auf seine Ressourcen zu gewähren. Andernfalls ist er zwingend erforderlich.

> [!NOTE]
> Der Separator zwischen dem Schema und der Autorität ist `://`. Der Doppelpunkt trennt das Schema vom nächsten Teil der URL, während `//` anzeigt, dass der nächste Teil der URL die Autorität ist.
>
> Ein Beispiel für eine URL, die keine Autorität verwendet, ist der Mail-Client (`mailto:foobar`). Sie enthält ein Schema, verwendet jedoch keine Autoritätskomponente. Daher wird der Doppelpunkt nicht von zwei Schrägstrichen gefolgt und dient lediglich als Trennzeichen zwischen dem Schema und der Mailadresse.

## Pfad zur Ressource

![Pfad zur Datei](mdn-url-path@x2.png)

`/path/to/myfile.html` ist der Pfad zur Ressource auf dem Webserver. In den frühen Tagen des Webs stellte ein solcher Pfad einen physischen Dateispeicherort auf dem Webserver dar. Heutzutage ist es meist eine Abstraktion, die von Webservern ohne physische Realität behandelt wird.

## Parameter

![Parameter](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` sind zusätzliche Parameter, die dem Webserver zur Verfügung gestellt werden. Diese Parameter sind eine Liste von Schlüssel/Wert-Paaren, die mit dem `&`-Symbol getrennt sind. Der Webserver kann diese Parameter verwenden, um zusätzliche Dinge zu tun, bevor er die Ressource zurückgibt. Jeder Webserver hat seine eigenen Regeln bezüglich Parameter, und der einzige verlässliche Weg, um zu wissen, ob ein bestimmter Webserver Parameter handhabt, ist, den Besitzer des Webservers zu fragen.

## Anker

![Anker](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` ist ein Anker zu einem anderen Teil der Ressource selbst. Ein Anker stellt eine Art "Lesezeichen" innerhalb der Ressource dar und gibt dem Browser die Richtung, um den Inhalt anzuzeigen, der sich an dieser "Lesezeichen"-Stelle befindet. In einem HTML-Dokument wird der Browser beispielsweise zu dem Punkt scrollen, an dem der Anker definiert ist; in einem Video- oder Audiodokument wird der Browser versuchen, zu der Zeit zu gelangen, die der Anker darstellt. Es ist erwähnenswert, dass der Teil nach dem **#**, auch bekannt als **Fragment-Identifier**, niemals mit der Anfrage an den Server gesendet wird.

## Anleitung zur Verwendung von URLs

Jede URL kann direkt in die Adressleiste des Browsers eingegeben werden, um zu der Ressource zu gelangen, die dahinter liegt. Aber das ist nur die Spitze des Eisbergs!

Die {{Glossary("HTML", "HTML")}}-Sprache (siehe [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)) macht ausgiebigen Gebrauch von URLs:

- um Links zu anderen Dokumenten mit dem {{HTMLElement("a")}}-Element zu erstellen;
- um ein Dokument mit seinen zugehörigen Ressourcen über verschiedene Elemente wie {{HTMLElement("link")}} oder {{HTMLElement("script")}} zu verknüpfen;
- um Medien wie Bilder (mit dem {{HTMLElement("img")}}-Element), Videos (mit dem {{HTMLElement("video")}}-Element), Geräusche und Musik (mit dem {{HTMLElement("audio")}}-Element) usw. anzuzeigen;
- um andere HTML-Dokumente mit dem {{HTMLElement("iframe")}}-Element anzuzeigen.

> [!NOTE]
> Wenn Sie URLs zum Laden von Ressourcen als Teil einer Seite angeben (wie bei der Verwendung von `<script>`, `<audio>`, `<img>`, `<video>` und dergleichen), sollten Sie im Allgemeinen nur HTTP und HTTPS-URLs verwenden, mit wenigen Ausnahmen (eine bemerkenswerte ist `data:`; siehe [Datendateien](/de/docs/Web/URI/Reference/Schemes/data)). Die Verwendung von FTP ist beispielsweise nicht sicher und wird von modernen Browsern nicht mehr unterstützt.

Andere Technologien wie {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}} verwenden URLs umfangreich, und diese sind wirklich das Herzstück des Webs.

## Absolute URLs vs. relative URLs

Was wir oben gesehen haben, wird als _absolute URL_ bezeichnet, aber es gibt auch etwas, das als _relative URL_ bezeichnet wird. Die [URL-Standard](https://url.spec.whatwg.org/#absolute-url-string) definiert beide — obwohl sie die Begriffe [_absolute URL string_](https://url.spec.whatwg.org/#absolute-url-string) und [_relative URL string_](https://url.spec.whatwg.org/#relative-url-string) verwendet, um sie von [URL-Objekten](https://url.spec.whatwg.org/#url) zu unterscheiden (die speicherinterne Darstellungen von URLs sind).

Lassen Sie uns untersuchen, was der Unterschied zwischen _absolut_ und _relativ_ im Kontext von URLs bedeutet.

Die erforderlichen Teile einer URL hängen zu einem großen Teil vom Kontext ab, in dem die URL verwendet wird. In der Adressleiste Ihres Browsers hat eine URL keinen Kontext, daher müssen Sie eine vollständige (oder _absolute_) URL angeben, wie die, die wir oben gesehen haben. Sie müssen das Protokoll nicht einschließen (der Browser verwendet standardmäßig HTTP) oder den Port (der nur erforderlich ist, wenn der angezielte Webserver einen ungewöhnlichen Port verwendet), aber alle anderen Teile der URL sind notwendig.

Wenn eine URL innerhalb eines Dokuments verwendet wird, wie in einer HTML-Seite, sind die Dinge etwas anders. Da der Browser bereits die eigene URL des Dokuments hat, kann er diese Informationen verwenden, um die fehlenden Teile jeder URL innerhalb dieses Dokuments auszufüllen. Wir können zwischen einer _absoluten URL_ und einer _relativen URL_ unterscheiden, indem wir nur den _Pfad_-Teil der URL betrachten. Wenn der Pfad-Teil der URL mit dem Zeichen `/` beginnt, wird der Browser diese Ressource vom obersten Root des Servers abrufen, ohne auf den durch das aktuelle Dokument gegebenen Kontext zu verweisen.

Betrachten wir einige Beispiele, um dies zu verdeutlichen. Nehmen wir an, dass die URLs innerhalb des Dokuments definiert sind, das sich unter der folgenden URL befindet: `https://developer.mozilla.org/de/docs/Learn_web_development`.

`https://developer.mozilla.org/de/docs/Learn_web_development` selbst ist eine absolute URL. Sie enthält alle notwendigen Teile, um die Ressource, auf die sie verweist, zu lokalisieren.

Alle folgenden URLs sind relative URLs:

- Schema-relative URL: `//developer.mozilla.org/de/docs/Learn_web_development` — nur das Protokoll fehlt. Der Browser verwendet dasselbe Protokoll wie das, das zum Laden des Dokuments verwendet wurde, das diese URL hostet.
- Domain-relative URL: `/de/docs/Learn_web_development` — das Protokoll und der Domainname fehlen. Der Browser verwendet dasselbe Protokoll und denselben Domainnamen wie das, das zum Laden des Dokuments verwendet wurde, das diese URL hostet.
- Sub-Ressourcen: `Howto/Web_mechanics/What_is_a_URL` — das Protokoll und der Domainname fehlen, und der Pfad beginnt nicht mit `/`. Der Browser wird versuchen, das Dokument in einem Unterverzeichnis desjenigen zu finden, das die aktuelle Ressource enthält. In diesem Fall möchten wir wirklich diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL`.
- Zurückgehen im Verzeichnisbaum: `../CSS/Reference` — das Protokoll und der Domainname fehlen, und der Pfad beginnt mit `..`. Dies wird aus der UNIX-Dateisystemwelt übernommen — um dem Browser mitzuteilen, dass wir eine Ebene nach oben gehen möchten. Hier möchten wir diese URL erreichen: `https://developer.mozilla.org/de/docs/Learn_web_development/../Web/CSS/Reference`, die vereinfacht werden kann zu: `https://developer.mozilla.org/de/docs/Web/CSS/Reference`.
- Nur Anker: `#semantic_urls` - alle Teile fehlen außer dem Anker. Der Browser wird die URL des aktuellen Dokuments verwenden und den Anker-Teil ersetzen oder hinzufügen. Dies ist nützlich, wenn Sie auf einen bestimmten Teil des aktuellen Dokuments verlinken möchten.

## URL-Benutzernamen und -Passwörter

Weniger häufig als die oben besprochenen URL-Teile, können Sie möglicherweise einen Benutzernamen und ein Passwort in URLs sehen.

Beispielsweise:

```plain
https://username:password@www.example.com:80/
```

Wenn enthalten, werden der Benutzername und das Passwort zwischen den `://` Zeichen und der Autorität platziert, mit einem Doppelpunkt dazwischen und einem At-Zeichen (`@`) am Ende.

Ein Benutzername und ein Passwort können in die URL aufgenommen werden, wenn auf Websites zugegriffen wird, die den Sicherheitsmechanismus [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) verwenden, um sich sofort bei einer Website anzumelden und das Dialogfeld für Benutzername/Passwort zu umgehen, das ansonsten angezeigt würde, um Ihre Anmeldeinformationen einzugeben.

Obwohl Sie diesen Mechanismus möglicherweise noch in freier Wildbahn sehen, ist er aufgrund von Sicherheitsbedenken veraltet und moderne Websites tendieren dazu, andere Mechanismen für die Authentifizierung zu verwenden. Weitere Informationen finden Sie unter [Zugriff mit Credenzen in der URL](/de/docs/Web/HTTP/Guides/Authentication#access_using_credentials_in_the_url).

## Semantische URLs

Trotz ihres sehr technischen Charakters stellen URLs einen menschenlesbaren Einstiegspunkt für eine Website dar. Sie können memorisiert werden, und jeder kann sie in die Adressleiste eines Browsers eingeben. Menschen stehen im Mittelpunkt des Webs, und daher wird es als beste Praxis angesehen, sogenannte [_semantische URLs_](https://en.wikipedia.org/wiki/Semantic_URL) zu erstellen. Semantische URLs verwenden Wörter mit inhärenter Bedeutung, die von jedem verstanden werden können, unabhängig von ihrem technischen Wissen.

Linguistische Semantik ist natürlich für Computer irrelevant. Sie haben wahrscheinlich schon oft URLs gesehen, die wie Mischungen aus zufälligen Zeichen aussehen. Aber es gibt viele Vorteile, menschenlesbare URLs zu erstellen:

- Es ist einfacher für Sie, sie zu handhaben.
- Es klärt Benutzer darüber auf, wo sie sich befinden, was sie tun und was sie im Web lesen oder mit was sie interagieren.
- Einige Suchmaschinen können diese Semantik verwenden, um die Einstufung der zugehörigen Seiten zu verbessern.

## Siehe auch

[Datendateien](/de/docs/Web/URI/Reference/Schemes/data): URLs, die mit dem `data:`-Schema versehen sind, ermöglichen es Inhaltsautoren, kleine Dateien direkt in Dokumente einzubetten.
