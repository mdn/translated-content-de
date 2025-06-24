---
title: Verwenden von Mikroformaten in HTML
short-title: Microformats
slug: Web/HTML/Guides/Microformats
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

[_Mikroformate_](https://microformats.org/wiki/Main_Page) sind Standards, die verwendet werden, um Semantik und strukturierte Daten in HTML einzubetten und eine API bereitzustellen, die von sozialen Webanwendungen, Suchmaschinen, Aggregatoren und anderen Tools genutzt werden kann. Diese minimalen Muster in HTML dienen zur Markierung von Entitäten, die von grundlegenden bis hin zu domänenspezifischen Informationen wie Personen, Organisationen, Ereignissen und Orten reichen.

- Um ein Mikroformat-Objekt zu erstellen, werden `h-*` Klassennamen im class-Attribut verwendet.
- Um einem Objekt eine Eigenschaft hinzuzufügen, werden die Klassennamen `p-*`, `u-*`, `dt-*`, `e-*` bei einem der Nachkommen des Objekts verwendet.

Mikroformate nutzen unterstützende Vokabularien zur Beschreibung von Objekten und Name-Wert-Paaren, um ihren Eigenschaften Werte zuzuweisen. Die Eigenschaften werden in class-Attributen gespeichert, die jedem HTML-Element hinzugefügt werden können, während die Datenwerte den Inhalt von HTML-Elementen und semantische Attribute wiederverwenden.

Microformats2 (manchmal als mf2 bezeichnet) ist ein Update von Mikroformaten, das eine Methode zur Anmerkung von HTML-strukturierter Syntax und Vokabularien bietet, im Gegensatz zu früheren Ansätzen wie RDFa und Microdata. Diese früheren Ansätze erfordern das Erlernen neuer Attribute.

Es gibt [Open-Source-Parsing-Bibliotheken für die meisten Sprachen](https://microformats.org/wiki/microformats2#Parsers) für Microformats2.

## Wie Mikroformate funktionieren

Ein Autor einer Webseite kann seinem HTML Mikroformate hinzufügen. Wenn er sich zum Beispiel selbst identifizieren möchte, könnte er eine [h-card](https://microformats.org/wiki/h-card) wie diese verwenden:

### HTML-Beispiel

```html
<a class="h-card" href="https://alice.example.com">Alice Blogger</a>
```

Wenn ein Parser diese Daten erkennt, weiß er, dass diese Seite eine "Karte" enthält, die eine Person oder Organisation mit dem Namen `Alice Blogger` und einer URL von `https://alice.example.com/` beschreibt. Der Parser macht diese Daten über APIs verfügbar, die für verschiedene Anwendungen genutzt werden können. Zum Beispiel könnte eine Anwendung eine Seite nach einer h-card durchsuchen, um sie als Profilinformationen für jemanden zu verwenden, der sich bei einem Dienst angemeldet hat.

Wie in diesem Beispiel erfordern einige Markup-Muster nur einen einzigen Mikroformat-Wurzelklassennamen, den Parser verwenden, um einige generische Eigenschaften wie `name`, `url`, `photo` zu finden.

## Anwendungsfälle für Mikroformate

Mikroformate haben zahlreiche Anwendungsfälle. Erstens nutzt der [Webmention-Standard](https://webmention.net/draft/) Mikroformate, um eine Möglichkeit zu bieten, mit der Nachrichten und Kommentare von einer Seite zur anderen gesendet werden können. Die Webmention-Spezifikation definiert spezifische Attribute, die Websites veröffentlichen und verwenden können, um eine reiche, interoperable Möglichkeit zum Veröffentlichen von Nachrichten und Kommentaren zu schaffen. Mikroformate können auch mit Webmentions verwendet werden, um soziale Reaktionen wie Likes, Reposts und Bookmarks von einer Seite zur anderen zu senden.

Mikroformate ermöglichen auch eine einfache Syndizierung über verschiedene Seiten hinweg. Ein Aggregator könnte eine Seite mit veröffentlichten Mikroformaten parsen, um nach Informationen wie einem Beitragstitel, einem Beitragstext und dem Autor eines Beitrags zu suchen. Dieser Aggregator könnte dann die gesammelten semantischen Informationen nutzen, um ein Ergebnis auf ihrer Seite darzustellen. Zum Beispiel könnten Nachrichtenaggregatoren und Community-Posting-Plattformen Beiträge erleichtern und Mikroformate verwenden, um relevante Inhalte aus einer Seite zu extrahieren. Außerdem könnte eine Website Mikroformate verwenden, um gestaltete Anfragen an Dritte zu senden, um Inhalte zu veröffentlichen, wie soziale Netzwerke.

Alle großen Suchmaschinen unterstützen das Lesen und Interpretieren von Mikroformaten. Suchmaschinen profitieren erheblich von dem direkten Zugriff auf diese strukturierten Daten, da sie es ihnen ermöglichen, die Informationen auf Webseiten besser zu verstehen. Mit diesen Informationen können Suchmaschinen relevantere Ergebnisse für die Benutzer bereitstellen. Einige Suchmaschinen können basierend auf den in Mikroformaten bereitgestellten Daten spezielle Snippets wie Sternebewertungen auf der Suchergebnisseite rendern.

Zusätzlich zur Maschinenlesbarkeit sind Mikroformate so gestaltet, dass sie auch für Menschen leicht lesbar sind. Dieser Ansatz erleichtert es den Menschen, Mikroformat-Daten zu verstehen und zu pflegen.

## Mikroformat-Präfixe

Alle Mikroformate bestehen aus einer Wurzel und einer Sammlung von Eigenschaften. Eigenschaften sind alle optional und möglicherweise mehrwertig – Anwendungen, die einen Einzelwert benötigen, können die erste Instanz einer Eigenschaft verwenden. Hierarchische Daten werden mit verschachtelten Mikroformaten dargestellt, typischerweise als Eigenschaftswerte selbst.

Alle Mikroformatenklassennamen verwenden Präfixe. Präfixe sind **syntaxunabhängig von Vokabularien**, die separat entwickelt werden.

- **"h-\*" für Wurzelklassennamen**, z.B. "h-card", "h-entry", "h-feed" und viele mehr. Diese obersten Wurzelklassen geben normalerweise einen Typ und das entsprechende erwartete Vokabular von Eigenschaften an. Zum Beispiel:

  - [h-card](https://microformats.org/wiki/h-card) beschreibt eine Person oder eine Organisation
  - [h-entry](https://microformats.org/wiki/h-entry) beschreibt episodischen oder datumsstempelte Online-Inhalte wie einen Blogbeitrag
  - [h-feed](https://microformats.org/wiki/h-feed) beschreibt einen Strom oder Feed von Beiträgen
  - Sie können viele weitere [Vokabularien im microformats2-Wiki finden.](https://microformats.org/wiki/microformats2#v2_vocabularies)

- **"p-\*" für einfache (Text-)Eigenschaften**, z.B. "p-name", "p-summary"

  - Generische PLAIN-TEXTPARSING, Elemente allgemein. Bei bestimmten HTML-Elementen spezielle Attribute zuerst verwenden, z.B. img/alt, abbr/title.

- **"u-\*" für URL-Eigenschaften**, z.B. "u-url", "u-photo", "u-logo"

  - Spezielles Parsing: Elementattribute a/href, img/src, object/data etc. Attribute über den Inhalt des Elements.

- **"dt-\*" für Datum-Zeit-Eigenschaften**, z.B. "dt-start", "dt-end", "dt-bday"

  - Spezielles Parsing: das datetime-Attribut des time-Elements, [value-class-pattern](https://microformats.org/wiki/value-class-pattern) und getrennte Datumszeitwertanalyse zur Lesbarkeit.

- **"e-\*" für Elementbaum-Eigenschaften** bei denen die gesamte enthaltene Elementhierarchie der Wert ist, z.B. "e-content". Das "e-" Präfix kann auch mnemonisch als "Elementbaum", "eingebettetes Markup" oder "gekapseltes Markup" erinnert werden.

## Einige Mikroformate Beispiele

### h-card

Das [h-card](https://microformats.org/wiki/h-card) Mikroformat stellt eine Person oder Organisation dar.

Der Wert jeder Eigenschaft wird in HTML mithilfe der Klassen-Eigenschaft definiert, die jedes Element haben kann.

#### Beispiel h-card

```html
<p class="h-card">
  <img class="u-photo" src="https://example.org/photo.png" alt="" />
  <a class="p-name u-url" href="https://example.org">Joe Bloggs</a>
  <a class="u-email" href="mailto:jbloggs@example.com">jbloggs@example.com</a>,
  <span class="p-street-address">17 Austerstræti</span>
  <span class="p-locality">Reykjavík</span>
  <span class="p-country-name">Iceland</span>
</p>
```

| Eigenschaft            | Beschreibung                                                                  |
| ---------------------- | ----------------------------------------------------------------------------- |
| **`p-name`**           | Der vollständige/formatierte Name der Person oder Organisation.               |
| **`u-email`**          | E-Mail-Adresse                                                                |
| **`u-photo`**          | Ein Foto der Person oder Organisation                                         |
| **`u-url`**            | Homepage oder eine andere URL, die die Person oder Organisation repräsentiert |
| **`u-uid`**            | Universell eindeutige Kennung, vorzugsweise kanonische URL                    |
| **`p-street-address`** | Straßenname + Hausnummer                                                      |
| **`p-locality`**       | Stadt/Dorf                                                                    |
| **`p-country-name`**   | Ländername                                                                    |

#### Verschachteltes h-card Beispiel

```html
<div class="h-card">
  <a class="p-name u-url" href="https://blog.lizardwrangler.com/">
    Mitchell Baker
  </a>
  (<a class="p-org h-card" href="https://mozilla.org/">Mozilla Foundation</a>)
</div>
```

Geparstes JSON:

```json
{
  "items": [
    {
      "type": ["h-card"],
      "properties": {
        "name": ["Mitchell Baker"],
        "url": ["https://blog.lizardwrangler.com/"],
        "org": [
          {
            "value": "Mozilla Foundation",
            "type": ["h-card"],
            "properties": {
              "name": ["Mozilla Foundation"],
              "url": ["https://mozilla.org/"]
            }
          }
        ]
      }
    }
  ]
}
```

In diesem Beispiel wird eine h-card sowohl für eine Person als auch für die Organisation angegeben, die sie repräsentiert. Die Zugehörigkeit der Person zur verlinkten Organisation wird mithilfe der p-org Eigenschaft festgelegt.

Hinweis: die verschachtelte h-card hat implizierte 'name' und 'url' Eigenschaften, genau wie jede andere h-card nur mit Wurzelklassennamen auf einem `<a href>` würde.

### h-entry

Das [h-entry](https://microformats.org/wiki/h-entry) Mikroformat repräsentiert episodenhafte oder datumsstempelte Inhalte im Web. h-entry wird oft mit für die Syndizierung bestimmten Inhalten verwendet, z.B. Blogbeiträge und kurze Notizen.

Beispiel h-entry als Blogbeitrag:

```html
<article class="h-entry">
  <h1 class="p-name">Microformats are amazing</h1>
  <p>
    Published by
    <a class="p-author h-card" href="https://example.com">W. Developer</a> on
    <time class="dt-published" datetime="2013-06-13 12:00:00">
      13<sup>th</sup> June 2013
    </time>
  </p>

  <p class="p-summary">In which I extoll the virtues of using microformats.</p>

  <div class="e-content">
    <p>Blah blah blah</p>
  </div>
</article>
```

#### Eigenschaften

| Eigenschaft        | Beschreibung                                         |
| ------------------ | ---------------------------------------------------- |
| **`p-name`**       | Eintragsname/Titel                                   |
| **`p-author`**     | Verfasser des Eintrags, optional eingebettete h-card |
| **`dt-published`** | Zeitpunkt der Veröffentlichung des Eintrags haben    |
| **`p-summary`**    | Kurze Zusammenfassung des Eintrags                   |
| **`e-content`**    | Voller Inhalt des Eintrags                           |

#### Geparstes Antwort h-entry Beispiel

```html
<div class="h-entry">
  <p>
    <span class="p-author h-card">
      <a href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106">
        <img
          class="u-photo"
          alt="Greg McVerry"
          src="https://quickthoughts.jgregorymcverry.com/file/2d6c9cfed7ac8e849f492b5bc7e6a630/thumb.jpg" />
      </a>
      <a
        class="p-name u-url"
        href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106">
        Greg McVerry
      </a>
    </span>
    Replied to
    <a
      class="u-in-reply-to"
      href="https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Microformats">
      a post on <strong>developer.mozilla.org</strong>
    </a>
    :
  </p>
  <p class="p-name e-content">
    Hey thanks for making this microformats resource
  </p>
  <p>
    <a href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106">
      Greg McVerry
    </a>
    published this
    <a
      class="u-url url"
      href="https://quickthoughts.jgregorymcverry.com/2019/05/31/hey-thanks-for-making-this-microformats-resource">
      <time class="dt-published" datetime="2019-05-31T14:19:09+0000">
        31 May 2019
      </time>
    </a>
  </p>
</div>
```

```json
{
  "items": [
    {
      "type": ["h-entry"],
      "properties": {
        "in-reply-to": [
          "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Microformats"
        ],
        "name": ["Hey thanks for making this microformats resource"],
        "url": [
          "https://quickthoughts.jgregorymcverry.com/2019/05/31/hey-thanks-for-making-this-microformats-resource"
        ],
        "published": ["2019-05-31T14:19:09+0000"],
        "content": [
          {
            "html": "Hey thanks for making this microformats resource",
            "value": "Hey thanks for making this microformats resource",
            "lang": "en"
          }
        ],
        "author": [
          {
            "type": ["h-card"],
            "properties": {
              "name": ["Greg McVerry"],
              "photo": [
                "https://quickthoughts.jgregorymcverry.com/file/2d6c9cfed7ac8e849f492b5bc7e6a630/thumb.jpg"
              ],
              "url": [
                "https://quickthoughts.jgregorymcverry.com/profile/jgmac1106"
              ]
            },
            "lang": "en",
            "value": "Greg McVerry"
          }
        ]
      },
      "lang": "en"
    }
  ]
}
```

### h-feed

Das [h-feed](https://microformats.org/wiki/h-feed) ist ein Strom oder Feed von [h-entry](https://microformats.org/wiki/h-entry) Beiträgen, wie vollständige Beiträge auf einer Startseite oder Archivseiten, oder Zusammenfassungen oder andere kurze Aufzählungen von Beiträgen.

#### Beispiel h-feed

```html
<div class="h-feed">
  <h1 class="p-name">Microformats Blogs</h1>
  <article class="h-entry">
    <h2 class="p-name">Microformats are amazing</h2>
    <p>
      Published by
      <a class="p-author h-card" href="https://example.com">W. Developer</a> on
      <time class="dt-published" datetime="2013-06-13 12:00:00">
        13<sup>th</sup> June 2013
      </time>
    </p>
    <p class="p-summary">
      In which I extoll the virtues of using microformats.
    </p>
    <div class="e-content"><p>Blah blah blah</p></div>
  </article>
</div>
```

#### Eigenschaften

| Eigenschaft    | Beschreibung                                    |
| -------------- | ----------------------------------------------- |
| **`p-name`**   | Name des Feeds                                  |
| **`p-author`** | Autor des Feeds, optional eine h-card einbetten |

#### Kinder

<table class="standard-table">
  <tbody>
    <tr>
      <td><strong>Verschachteltes h-entry</strong></td>
      <td></td>
    </tr>
    <tr>
      <td>Objekte, die die Elemente des Feeds darstellen</td>
      <td></td>
    </tr>
  </tbody>
</table>

### h-event

Das `h-event` ist für Veranstaltungen im Web. h-event wird oft sowohl für Veranstaltungslisten als auch für einzelne Veranstaltungsseiten verwendet.

```html
<div class="h-event">
  <h1 class="p-name">Microformats Meetup</h1>
  <p>
    From
    <time class="dt-start" datetime="2013-06-30 12:00">
      30<sup>th</sup> June 2013, 12:00
    </time>
    to <time class="dt-end" datetime="2013-06-30 18:00">18:00</time> at
    <span class="p-location">Some bar in SF</span>
  </p>
  <p class="p-summary">
    Get together and discuss all things microformats-related.
  </p>
</div>
```

#### Eigenschaften

| Eigenschaft      | Beschreibung                                                            |
| ---------------- | ----------------------------------------------------------------------- |
| **`p-name`**     | Veranstaltungsname (oder Titel)                                         |
| **`p-summary`**  | Kurze Zusammenfassung der Veranstaltung                                 |
| **`dt-start`**   | Datum/Uhrzeit, wann die Veranstaltung beginnt                           |
| **`dt-end`**     | Datum/Uhrzeit, wann die Veranstaltung endet                             |
| **`p-location`** | Ort, an dem die Veranstaltung stattfindet, optional eingebettete h-card |

#### Geparstes h-event Beispiel

```html
<div class="h-event">
  <h2 class="p-name">IndieWeb Summit</h2>
  <time class="dt-start" datetime="2019-06-29T09:00:00-07:00">
    June 29, 2019 at 9:00am (-0700)
  </time>
  <br />through
  <time class="dt-end" datetime="2019-06-30T18:00:00-07:00">
    June 30, 2019 at 6:00pm (-0700)
  </time>
  <br />
  <div class="p-location h-card">
    <div>
      <span class="p-name">Mozilla</span>
    </div>
    <div>
      <span class="p-street-address">1120 NW Couch St</span>,
      <span class="p-locality">Portland</span>,
      <span class="p-region">Oregon</span>,
      <span class="p-country">US</span>
    </div>
    <data class="p-latitude" value="45.52345"></data>
    <data class="p-longitude" value="-122.682677"></data>
  </div>
  <div class="e-content">Come join us</div>
  <div>
    <span class="p-author h-card">
      <a class="u-url p-name" href="https://aaronparecki.com">Aaron Parecki</a>
    </span>
    Published this
    <a href="https://aaronparecki.com/2019/06/29/1/" class="u-url">event </a>on
    <time class="dt published" datetime="2019-05-25T18:00:00-07:00">
      May 5th, 2019
    </time>
  </div>
</div>
```

```json
{
  "items": [
    {
      "type": ["h-event"],
      "properties": {
        "name": ["IndieWeb Summit"],
        "url": ["https://aaronparecki.com/2019/06/29/1/"],
        "author": [
          {
            "type": ["h-card"],
            "properties": {
              "name": ["Aaron Parecki"],
              "url": ["https://aaronparecki.com"]
            },
            "lang": "en",
            "value": "Aaron Parecki"
          }
        ],
        "start": ["2019-06-29T09:00:00-07:00"],
        "end": ["2019-06-30T18:00:00-07:00"],
        "published": ["2019-05-25T18:00:00-07:00"],
        "content": [
          {
            "html": "Come join us",
            "value": "Come join us",
            "lang": "en"
          }
        ],
        "location": [
          {
            "type": ["h-card"],
            "properties": {
              "name": ["Mozilla"],
              "p-street-address": ["1120 NW Couch St"],
              "locality": ["Portland"],
              "region": ["Oregon"],
              "country": ["US"],
              "latitude": ["45.52345"],
              "longitude": ["-122.682677"]
            },
            "lang": "en",
            "value": "Mozilla"
          }
        ]
      },
      "lang": "en"
    }
  ]
}
```

## Beispiele mit dem Mikroformat rel-Attribut

Es gibt einige Mikroformate, die einer Seite durch die Verwendung eines speziellen `rel=` Attributs angewendet werden. Diese Mikroformate beschreiben eine Beziehung zwischen einem aktuellen Dokument und einem verlinkten Dokument. Für eine vollständige Liste dieser, siehe die [rel property](https://microformats.org/wiki/rel-values) im Mikroformate-Wiki.

### rel=author

Dieses Attribut gibt an, dass das verlinkte Dokument den Autor der aktuellen Seite repräsentiert.

```html
<a rel="author" href="https://jamesg.blog">James Gallagher</a>
```

### rel=license

Dieses Attribut gibt an, dass das verlinkte Dokument die Lizenz enthält, unter der die aktuelle Seite veröffentlicht wird.

```html
<a rel="license" href="https://mit-license.org/">MIT License</a>
```

### rel=nofollow

Dieses Attribut gibt an, dass das verlinkte Dokument von Suchmaschinen-Ranking-Algorithmen, die sich aus der aktuellen Seite ableiten könnten, kein Gewicht bekommen sollte. Dies ist nützlich, um zu verhindern, dass Link-Graph-Algorithmen eine Seite höher bewerten, als sie es sonst tun würden, nachdem ein Link zu einem Dokument gesehen wurde.

```html
<a rel="nofollow" href="https://jamesg.blog">James Gallagher</a>
```

## Browser-Kompatibilität

Wird in allen Browsern unterstützt, die die class-Attribut- und DOM-API unterstützen.

## Siehe auch

- [class-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class)
- [Microformat](https://en.wikipedia.org/wiki/Microformat) auf Wikipedia
- [Offizielle Website der Mikroformate](https://microformats.org/wiki/Main_Page)
- [Unterstützung der Suchmaschinen](https://microformats.org/wiki/search_engines) auf der offiziellen Website der Mikroformate
- [Mikroformate auf IndieWebCamp](https://indieweb.org/microformats)
