---
title: Verwendung von Mikroformaten in HTML
short-title: Microformats
slug: Web/HTML/Guides/Microformats
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

[_Mikroformate_](https://microformats.org/wiki/Main_Page) sind Standards zur Einbettung von Semantik und strukturierten Daten in HTML und bieten eine API, die von sozialen Web-Anwendungen, Suchmaschinen, Aggregatoren und anderen Tools genutzt werden kann. Diese minimalen HTML-Muster werden verwendet, um Entitäten zu kennzeichnen, die von grundlegenden bis hin zu domänenspezifischen Informationen reichen, wie z. B. Personen, Organisationen, Veranstaltungen und Standorte.

- Um ein Mikroformat-Objekt zu erstellen, werden `h-*` Klassennamen im Attribut class verwendet.
- Um einem Objekt eine Eigenschaft hinzuzufügen, werden die Klassennamen `p-*`, `u-*`, `dt-*`, `e-*` auf einem der Nachkommen des Objekts verwendet.

Mikroformate verwenden unterstützende Vokabularien, um Objekte zu beschreiben, und Name-Wert-Paare, um ihren Eigenschaften Werte zuzuweisen. Die Eigenschaften werden in class-Attributen gespeichert, die zu jedem HTML-Element hinzugefügt werden können, während die Datenwerte den Inhalt und die semantischen Attribute von HTML-Elementen wiederverwenden.

Microformats2 (manchmal auch als mf2 bezeichnet) ist ein Update der Mikroformate, das eine Methode zur Annotation der HTML-strukturierten Syntax und Vokabularien bietet, im Gegensatz zu früheren Ansätzen mit RDFa und Microdata. Diese früheren Ansätze erforderten das Erlernen neuer Attribute.

Es gibt [Open-Source-Parsing-Bibliotheken für die meisten Sprachen](https://microformats.org/wiki/microformats2#Parsers) für Microformats2.

## Funktionsweise von Mikroformaten

Ein Verfasser einer Webseite kann Mikroformate zu seinem HTML hinzufügen. Wenn sie sich beispielsweise identifizieren möchten, könnten sie eine [h-card](https://microformats.org/wiki/h-card) verwenden, wie:

### HTML-Beispiel

```html
<a class="h-card" href="https://alice.example.com">Alice Blogger</a>
```

Wenn ein Parser auf diese Daten stößt, weiß er, dass diese Seite eine "Karte" enthält, die eine Person oder Organisation namens `Alice Blogger` mit einer URL von `https://alice.example.com/` beschreibt. Der Parser macht diese Daten über APIs verfügbar, die für verschiedene Anwendungen genutzt werden können. Beispielsweise könnte eine Anwendung eine Seite nach einer h-card durchsuchen, um diese als Profilinformation für jemanden zu verwenden, der sich für einen Dienst angemeldet hat.

Wie in diesem Beispiel erfordern einige Markup-Muster nur einen einzelnen Mikroformat-Root-Class-Namen, den Parser verwenden, um einige allgemeine Eigenschaften wie `name`, `url`, `photo` zu finden.

## Anwendungsfälle von Mikroformaten

Mikroformate haben zahlreiche Anwendungsfälle. Erstens verwendet der [Webmention-Standard](https://www.w3.org/TR/webmention/) Mikroformate, um eine Möglichkeit zu bieten, Nachrichten und Kommentare von einer Seite zur anderen zu senden. Die Webmention-Spezifikation definiert spezifische Attribute, die Seiten veröffentlichen und konsumieren können, um eine reichhaltige, interoperable Methode zum Veröffentlichen von Nachrichten und Kommentaren zu schaffen. Mikroformate können auch mit Webmentions verwendet werden, um das Senden sozialer Reaktionen wie Likes, Reposts und Lesezeichen von einer Seite zur anderen zu ermöglichen.

Mikroformate ermöglichen auch eine einfache Syndizierung über Websites hinweg. Ein Aggregator könnte eine Seite mit veröffentlichten Mikroformaten parsen, um nach Informationen wie einem Post-Titel, einem Post-Körper und dem Autor eines Posts zu suchen. Dieser Aggregator könnte dann die gesammelten semantischen Informationen verwenden, um ein Ergebnis auf ihrer Seite zu rendern. Beispielsweise könnten Nachrichten-Aggregatoren und Community-Plattformen Einreichungen erleichtern und Mikroformate verwenden, um relevanten Inhalt von einer Seite zu extrahieren. Darüber hinaus könnte eine Website Mikroformate verwenden, um gestaltete Anfragen an Dritte zu senden, um Inhalte zu veröffentlichen, wie in sozialen Netzwerken.

Alle großen Suchmaschinen unterstützen das Lesen und Interpretieren von Mikroformaten. Suchmaschinen profitieren enorm von direktem Zugang zu diesen strukturierten Daten, weil sie es ihnen ermöglicht, die Informationen auf Webseiten zu verstehen. Mit diesen Informationen können Suchmaschinen den Nutzern relevantere Ergebnisse liefern. Einige Suchmaschinen könnten basierend auf den in Mikroformaten bereitgestellten Daten spezielle Snippets wie Sternebewertungen auf einer Suchergebnisseite anzeigen.

Neben der maschinenlesbaren Lesbarkeit sind Mikroformate so gestaltet, dass sie auch für Menschen leicht lesbar sind. Dieser Ansatz erleichtert es, die Mikroformat-Daten zu verstehen und zu pflegen.

## Präfixe der Mikroformate

Alle Mikroformate bestehen aus einem Root und einer Sammlung von Eigenschaften. Eigenschaften sind alle optional und potenziell multivalent - Anwendungen, die einen einzelnen Wert benötigen, können die erste Instanz einer Eigenschaft verwenden. Hierarchische Daten werden mit verschachtelten Mikroformaten dargestellt, typischerweise als Eigenschaftswerte selbst.

Alle Mikroformat-Klassennamen verwenden Präfixe. Präfixe sind **syntaxunabhängig von Vokabularien**, die separat entwickelt werden.

- **"h-\*" für Root-Klassennamen**, z.B., "h-card", "h-entry", "h-feed" und viele mehr. Diese top-level Root-Klassen geben normalerweise einen Typ an und das entsprechende erwartete Vokabular von Eigenschaften an. Zum Beispiel:

  - [h-card](https://microformats.org/wiki/h-card) beschreibt eine Person oder Organisation
  - [h-entry](https://microformats.org/wiki/h-entry) beschreibt episodische oder datierte Online-Inhalte wie einen Blogpost
  - [h-feed](https://microformats.org/wiki/h-feed) beschreibt einen Strom oder Feed von Posts
  - Sie können viele weitere [Vokabulare im microformats2 wiki finden.](https://microformats.org/wiki/microformats2#v2_vocabularies)

- **"p-\*" für einfache (Text-)Eigenschaften**, z.B., "p-name", "p-summary"

  - Generisches Plain-Text-Parsing, im Allgemeinen Elementtext. Bei bestimmten HTML-Elementen werden zuerst spezielle Attribute verwendet, z.B., img/alt, abbr/title.

- **"u-\*" für URL-Eigenschaften**, z.B., "u-url", "u-photo", "u-logo"

  - Spezielles Parsing: Elementattribute a/href, img/src, object/data etc. Attribute über Elementinhalte hinweg.

- **"dt-\*" für Datum-Uhrzeit-Eigenschaften**, z.B., "dt-start", "dt-end", "dt-bday"

  - Spezielles Parsing: Zeit-Element-Datetime-Attribut, [value-class-pattern](https://microformats.org/wiki/value-class-pattern) und separates Datum-Zeit-Wert-Parsing zur besseren Lesbarkeit.

- **"e-\*" für Elementbaum-Eigenschaften**, bei denen die gesamte enthaltene Elementhierarchie der Wert ist, z.B., "e-content". Das "e-" Präfix kann auch als "Elementbaum", "eingebettetes Markup" oder "gekapseltes Markup" mnemotechnisch erinnert werden.

## Einige Mikroformat-Beispiele

### h-card

Das [h-card](https://microformats.org/wiki/h-card) Mikroformat stellt eine Person oder Organisation dar.

Der Wert jeder Eigenschaft wird in HTML unter Verwendung der Klasseigenschaft definiert, die jedes Element tragen kann.

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

| Eigenschaft            | Beschreibung                                                   |
| ---------------------- | -------------------------------------------------------------- |
| **`p-name`**           | Der volle/formatierte Name der Person oder Organisation.       |
| **`u-email`**          | E-Mail-Adresse                                                 |
| **`u-photo`**          | ein Foto der Person oder Organisation                          |
| **`u-url`**            | Homepage oder andere URL, die die Person oder Organisation repräsentiert |
| **`u-uid`**            | universell eindeutige Kennung, vorzugsweise kanonische URL     |
| **`p-street-address`** | Straßenname und -nummer                                        |
| **`p-locality`**       | Stadt/Ort/Dorf                                                 |
| **`p-country-name`**   | Ländername                                                     |

#### Verschachteltes h-card Beispiel

```html
<div class="h-card">
  <a class="p-name u-url" href="https://blog.lizardwrangler.com/">
    Mitchell Baker
  </a>
  (<a class="p-org h-card" href="https://mozilla.org/">Mozilla Foundation</a>)
</div>
```

Parsiertes JSON:

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

In diesem Beispiel wird eine h-card sowohl für eine Person als auch für die von ihr vertretene Organisation angegeben. Die Verbindung der Person zur verlinkten Organisation wird mit der p-org-Eigenschaft angegeben.

Hinweis: Die verschachtelte h-card hat implizierte 'name' und 'url'-Eigenschaften, genau wie jede andere Root-Class-Name-Only h-card auf einem `<a href>`.

### h-entry

Das [h-entry](https://microformats.org/wiki/h-entry) Mikroformat stellt episodische oder datierte Inhalte im Web dar. h-entry wird oft mit Inhalten verwendet, die zur Syndikation bestimmt sind, z. B. Blogposts und kurze Notizen.

Beispiel für h-entry als Blogpost:

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

| Eigenschaft       | Beschreibung                                    |
| ----------------- | ----------------------------------------------- |
| **`p-name`**      | Eintragsname/-Titel                             |
| **`p-author`**    | wer den Eintrag geschrieben hat, optional eingebettete h-card |
| **`dt-published`**| wann der Eintrag veröffentlicht wurde           |
| **`p-summary`**   | kurze Zusammenfassung des Eintrags              |
| **`e-content`**   | voller Inhalt des Eintrags                      |

#### Parsierv Beispiel für h-entry Antwort

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

Das [h-feed](https://microformats.org/wiki/h-feed) ist ein Strom oder Feed von [h-entry](https://microformats.org/wiki/h-entry) Posts, wie vollständige Posts auf einer Start- oder Archivseite oder Zusammenfassungen oder andere kurze Listen von Posts.

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

| Eigenschaft     | Beschreibung                                      |
| --------------- | ------------------------------------------------- |
| **`p-name`**    | Name des Feeds                                    |
| **`p-author`**  | Autor des Feeds, optional eingebettete h-card     |

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

Das `h-event` ist für Veranstaltungen im Web. h-event wird oft sowohl für Veranstaltungslisten als auch für individuelle Veranstaltungsseiten verwendet.

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

| Eigenschaft       | Beschreibung                                          |
| ----------------- | ----------------------------------------------------- |
| **`p-name`**      | Veranstaltungsname (oder Titel)                       |
| **`p-summary`**   | kurze Zusammenfassung der Veranstaltung               |
| **`dt-start`**    | Datum und Uhrzeit, wann die Veranstaltung beginnt     |
| **`dt-end`**      | Datum und Uhrzeit, wann die Veranstaltung endet       |
| **`p-location`**  | Ort der Veranstaltung, optional eingebettete h-card   |

#### Beispiel für geparste h-event

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

## Beispiele für Mikroformate rel Eigenschaft

Es gibt einige Mikroformate, die auf einer Seite durch die Verwendung einer speziellen `rel=` Eigenschaft angewendet werden. Diese Mikroformate beschreiben eine Beziehung zwischen einem aktuellen Dokument und einem verlinkten Dokument. Für eine vollständige Liste dieser, siehe die [rel Eigenschaft](https://microformats.org/wiki/rel-values) im Mikroformat-Wiki.

### rel=author

Dieses Attribut besagt, dass das verlinkte Dokument den Autor der aktuellen Seite darstellt.

```html
<a rel="author" href="https://jamesg.blog">James Gallagher</a>
```

### rel=license

Dieses Attribut besagt, dass das verlinkte Dokument die Lizenz enthält, unter der die aktuelle Seite veröffentlicht wird.

```html
<a rel="license" href="https://mit-license.org/">MIT License</a>
```

### rel=nofollow

Dieses Attribut besagt, dass das verlinkte Dokument von Suchmaschinen-Algorithmusrankings, die sich von der aktuellen Seite ergeben könnten, nicht gewichtet werden sollte. Dies ist nützlich, um zu verhindern, dass Linkgraph-Algorithmen eine Seite höher gewichten als sie es sonst täten, nachdem sie einen Link zu einem Dokument gesehen haben.

```html
<a rel="nofollow" href="https://jamesg.blog">James Gallagher</a>
```

## Browser-Kompatibilität

Unterstützt in der Unterstützung des class-Attributs in allen Browsern und seiner DOM-API.

## Siehe auch

- [class Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class)
- [Mikroformat](https://de.wikipedia.org/wiki/Mikroformat) auf Wikipedia
- [Offizielle Website der Mikroformate](https://microformats.org/wiki/Main_Page)
- [Suchmaschinen-Unterstützung](https://microformats.org/wiki/search_engines) auf der offiziellen Mikroformate-Website
- [Mikroformate auf IndieWebCamp](https://indieweb.org/microformats)
