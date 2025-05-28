---
title: Verwendung von Microformats in HTML
short-title: Microformats
slug: Web/HTML/Guides/Microformats
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{HTMLSidebar}}

[_Microformats_](https://microformats.org/wiki/Main_Page) sind Standards zur Einbettung von Semantik und strukturierten Daten in HTML und bieten eine API, die von sozialen Webanwendungen, Suchmaschinen, Aggregatoren und anderen Tools genutzt werden kann. Diese minimalen HTML-Muster werden verwendet, um Entitäten zu markieren, die von grundlegenden bis zu domänenspezifischen Informationen reichen, wie Personen, Organisationen, Ereignisse und Standorte.

- Um ein Microformats-Objekt zu erstellen, werden `h-*` Klassennamen im Attribut class verwendet.
- Um eine Eigenschaft zu einem Objekt hinzuzufügen, werden die Klassennamen `p-*`, `u-*`, `dt-*`, `e-*` auf einem der Nachfahren des Objekts verwendet.

Microformats verwenden unterstützende Vokabulare, um Objekte zu beschreiben, und Name-Wert-Paare, um ihre Eigenschaften zuzuweisen. Die Eigenschaften werden in class-Attributen getragen, die jedem HTML-Element hinzugefügt werden können, während die Datenelemente den Inhalt von HTML-Elementen und semantischen Attributen wiederverwenden.

Microformats2 (manchmal als mf2 bezeichnet) ist ein Update der Microformats, das eine Methode zur Annotierung von HTML-strukturierter Syntax und Vokabularen bereitstellt, im Gegensatz zu den vorherigen Ansätzen mit RDFa und Microdata. Diese vorherigen Ansätze erfordern das Erlernen neuer Attribute.

Es gibt [Open-Source-Parsing-Bibliotheken für die meisten Sprachen](https://microformats.org/wiki/microformats2#Parsers) für Microformats2.

## Wie Microformats funktionieren

Ein Autor einer Webseite kann Microformats zu seinem HTML hinzufügen. Wenn er sich beispielsweise selbst identifizieren möchte, könnte er eine [h-card](https://microformats.org/wiki/h-card) verwenden, wie zum Beispiel:

### HTML-Beispiel

```html
<a class="h-card" href="https://alice.example.com">Alice Blogger</a>
```

Wenn ein Parser auf diese Daten trifft, erkennt er, dass diese Seite eine "Karte" enthält, die eine Person oder eine Organisation namens `Alice Blogger` mit einer URL von `https://alice.example.com/` beschreibt. Der Parser macht diese Daten über APIs verfügbar, die für verschiedene Anwendungen verwendet werden können. Beispielsweise könnte eine Anwendung eine Seite nach einer h-card durchsuchen, um sie als Profildaten für jemanden zu verwenden, der sich bei einem Dienst angemeldet hat.

Wie in diesem Beispiel erfordern einige Markup-Muster nur einen einzigen Microformat-Root-Klassennamen, den Parser verwenden, um einige allgemeine Eigenschaften wie `name`, `url`, `photo` zu finden.

## Anwendungsfälle für Microformats

Microformats haben zahlreiche Anwendungsfälle. Erstens verwendet der [Webmention-Standard](https://webmention.net/draft/) Microformats, um eine Möglichkeit zu bieten, mit der Nachrichten und Kommentare von einer Website zur anderen gesendet werden können. Die Webmention-Spezifikation definiert bestimmte Attribute, die Websites veröffentlichen und konsumieren können, um eine reiche, interoperable Art der Veröffentlichung von Nachrichten und Kommentaren zu schaffen. Microformats können auch mit Webmentions verwendet werden, um soziale Reaktionen wie Likes, Reposts und Lesezeichen von einer Website zur anderen zu senden.

Microformats ermöglichen auch eine einfache Syndizierung über Websites hinweg. Ein Aggregator könnte eine Seite mit veröffentlichten Microformats parsen, um Informationen wie einen Beitragstitel, einen Beitragstext und den Autor eines Beitrags zu finden. Dieser Aggregator könnte dann die gesammelten semantischen Informationen verwenden, um ein Ergebnis auf seiner Seite anzuzeigen. Beispielsweise könnten Nachrichtenaggregatoren und Community-Pinnwände Einreichungen erleichtern und Microformats verwenden, um relevante Inhalte von einer Seite zu extrahieren. Weiterhin könnte eine Website Microformats verwenden, um ausgearbeitete Anfragen an Dritte zu senden, um Inhalte zu veröffentlichen, wie z.B. soziale Netzwerke.

Alle großen Suchmaschinen unterstützen das Lesen und Interpretieren von Microformats. Suchmaschinen profitieren erheblich von einem direkten Zugriff auf diese strukturierten Daten, da sie dadurch die Informationen auf Webseiten besser verstehen können. Mit diesen Informationen können Suchmaschinen den Nutzern relevantere Ergebnisse liefern. Einige Suchmaschinen könnten spezielle Snippets wie Sternebewertungen auf einer Suchergebnisseite basierend auf den in Microformats bereitgestellten Daten anzeigen.

Zusätzlich zu ihrer maschinenlesbaren Natur sind Microformats so gestaltet, dass sie auch von Menschen leicht gelesen werden können. Dieser Ansatz erleichtert es den Menschen, Microformats-Daten zu verstehen und zu pflegen.

## Microformats-Präfixe

Alle Microformats bestehen aus einer Wurzel und einer Sammlung von Eigenschaften. Eigenschaften sind alle optional und möglicherweise mehrfach belegt — Anwendungen, die einen einzelnen Wert benötigen, können die erste Instanz einer Eigenschaft verwenden. Hierarchische Daten werden mit verschachtelten Microformats dargestellt, typischerweise als Eigenschaftswerte selbst.

Alle Microformats-Klassennamen verwenden Präfixe. Präfixe sind **syntaxunabhängig von Vokabularen**, die separat entwickelt werden.

- **"h-\*" für Root-Klassennamen**, z.B. "h-card", "h-entry", "h-feed" und viele mehr. Diese Top-Level-Root-Klassen geben normalerweise einen Typ und das entsprechende erwartete Vokabular von Eigenschaften an. Zum Beispiel:

  - [h-card](https://microformats.org/wiki/h-card) beschreibt eine Person oder Organisation
  - [h-entry](https://microformats.org/wiki/h-entry) beschreibt episodische oder datumsstempelte Online-Inhalte wie einen Blogbeitrag
  - [h-feed](https://microformats.org/wiki/h-feed) beschreibt einen Strom oder Feed von Beiträgen
  - Sie können viele weitere [Vokabulare im microformats2-Wiki finden.](https://microformats.org/wiki/microformats2#v2_vocabularies)

- **"p-\*" für einfache (Text-)Eigenschaften**, z.B. "p-name", "p-summary"

  - Generisches Plain-Text-Parsing, Elementtext im Allgemeinen. Bei bestimmten HTML-Elementen zuerst spezielle Attribute verwenden, z.B. img/alt, abbr/title.

- **"u-\*" für URL-Eigenschaften**, z.B. "u-url", "u-photo", "u-logo"

  - Spezielles Parsing: Elementattribute a/href, img/src, object/data etc. Attribute über Elementinhalte.

- **"dt-\*" für Datetime-Eigenschaften**, z.B. "dt-start", "dt-end", "dt-bday"

  - Spezielles Parsing: Zeit-Element-Datetime-Attribut, [value-class-pattern](https://microformats.org/wiki/value-class-pattern) und separates Datumszeitwert-Parsing zur besseren Lesbarkeit.

- **"e-\*" für Elementbaum-Eigenschaften**, bei denen die gesamte enthaltene Elementhierarchie der Wert ist, z.B. "e-content". Das Präfix "e-" kann auch mnemonisch als "Elementbaum", "eingebettetes Markup" oder "verkapseltes Markup" erinnert werden.

## Einige Microformats-Beispiele

### h-card

Das [h-card](https://microformats.org/wiki/h-card) Microformat repräsentiert eine Person oder Organisation.

Der Wert jeder Eigenschaft wird in HTML über das Klassenattribut definiert, das jedes Element tragen kann.

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

| Eigenschaft            | Beschreibung                                                             |
| ---------------------- | ------------------------------------------------------------------------ |
| **`p-name`**           | Der volle/formatierte Name der Person oder Organisation                  |
| **`u-email`**          | E-Mail-Adresse                                                           |
| **`u-photo`**          | Ein Foto der Person oder Organisation                                    |
| **`u-url`**            | Homepage oder andere URL, die die Person oder Organisation repräsentiert |
| **`u-uid`**            | Universell eindeutige Kennung, vorzugsweise kanonische URL               |
| **`p-street-address`** | Straßenname und -nummer                                                  |
| **`p-locality`**       | Stadt/Dorf                                                               |
| **`p-country-name`**   | Ländername                                                               |

#### Geschachteltes h-card-Beispiel

```html
<div class="h-card">
  <a class="p-name u-url" href="https://blog.lizardwrangler.com/">
    Mitchell Baker
  </a>
  (<a class="p-org h-card" href="https://mozilla.org/">Mozilla Foundation</a>)
</div>
```

Parsed JSON:

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

In diesem Beispiel wird eine h-card sowohl für eine Person als auch für die Organisation angegeben, die sie repräsentiert. Die Zugehörigkeit der Person zur verknüpften Organisation wird mithilfe der Eigenschaft p-org spezifiziert.

Anmerkung: Die geschachtelte h-card hat implizite 'name'- und 'url'-Eigenschaften, genau wie jede andere h-card mit nur dem Root-Klassennamen auf einem `<a href>`.

### h-entry

Das [h-entry](https://microformats.org/wiki/h-entry) Microformat repräsentiert episodische oder datumsstempelte Inhalte im Web. h-entry wird oft mit Inhalten verwendet, die syndiziert werden sollen, z.B. Blogbeiträge und Kurznotizen.

Ein Beispiel für ein h-entry als Blogbeitrag:

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

| Eigenschaft        | Beschreibung                                                  |
| ------------------ | ------------------------------------------------------------- |
| **`p-name`**       | Beitragsname/-titel                                           |
| **`p-author`**     | wer den Beitrag geschrieben hat, optional eingebettete h-card |
| **`dt-published`** | wann der Beitrag veröffentlicht wurde                         |
| **`p-summary`**    | kurze Zusammenfassung des Beitrags                            |
| **`e-content`**    | ganzer Inhalt des Beitrags                                    |

#### Geparstes Antwort-h-entry-Beispiel

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

Das [h-feed](https://microformats.org/wiki/h-feed) ist ein Strom oder Feed von [h-entry](https://microformats.org/wiki/h-entry)-Beiträgen, wie komplette Beiträge auf einer Startseite oder Archivseiten, oder Zusammenfassungen oder andere kurze Listen von Beiträgen.

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

| Eigenschaft    | Beschreibung                                  |
| -------------- | --------------------------------------------- |
| **`p-name`**   | Name des Feeds                                |
| **`p-author`** | Autor des Feeds, optional eingebettete h-card |

#### Kinder

<table class="standard-table">
  <tbody>
    <tr>
      <td><strong>Geschachteltes h-entry</strong></td>
      <td></td>
    </tr>
    <tr>
      <td>Objekte, die die Elemente des Feeds darstellen</td>
      <td></td>
    </tr>
  </tbody>
</table>

### h-event

Das `h-event` beschreibt Veranstaltungen im Web. h-event wird oft sowohl für Veranstaltungslisten als auch für einzelne Veranstaltungsseiten verwendet.

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

| Eigenschaft      | Beschreibung                                                   |
| ---------------- | -------------------------------------------------------------- |
| **`p-name`**     | Veranstaltungsname (oder Titel)                                |
| **`p-summary`**  | kurze Zusammenfassung der Veranstaltung                        |
| **`dt-start`**   | Datum und Uhrzeit, wann die Veranstaltung beginnt              |
| **`dt-end`**     | Datum und Uhrzeit, wann die Veranstaltung endet                |
| **`p-location`** | wo die Veranstaltung stattfindet, optional eingebettete h-card |

#### Geparstes h-event-Beispiel

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

## Beispiele für Microformats mit der rel-Eigenschaft

Es gibt einige Microformats, die durch das Attribut `rel=` zu einer Seite hinzugefügt werden. Diese Microformats beschreiben eine Beziehung zwischen einem aktuellen Dokument und einem verlinkten Dokument. Eine vollständige Liste davon finden Sie im [rel-Eigenschaft](https://microformats.org/wiki/rel-values) im Microformats-Wiki.

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

Dieses Attribut besagt, dass das verlinkte Dokument von Suchmaschinen-Ranking-Algorithmen kein Gewicht erhalten sollte, das möglicherweise von der aktuellen Seite abgeleitet wird. Dies ist nützlich, um zu verhindern, dass Link-Graph-Algorithmen eine Seite höher bewerten, als sie es sonst tun würden, nachdem sie einen Link zu einem Dokument gesehen haben.

```html
<a rel="nofollow" href="https://jamesg.blog">James Gallagher</a>
```

## Browser-Kompatibilität

Unterstützt in allen Browsern, die das class-Attribut und seine DOM-API unterstützen.

## Siehe auch

- [class-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class)
- [Microformat](https://en.wikipedia.org/wiki/Microformat) auf Wikipedia
- [Offizielle Microformats-Website](https://microformats.org/wiki/Main_Page)
- [Suchmaschinenunterstützung](https://microformats.org/wiki/search_engines) auf der offiziellen Microformats-Website
- [Microformats auf IndieWebCamp](https://indieweb.org/microformats)
