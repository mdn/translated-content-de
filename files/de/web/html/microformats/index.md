---
title: Microformats
slug: Web/HTML/microformats
l10n:
  sourceCommit: 2705886f9805b82cd23f0f0463bf82058d8c8fac
---

{{HTMLSidebar}}

[_Microformats_](https://microformats.org/wiki/Main_Page) sind Standards, die verwendet werden, um Semantik und strukturierte Daten in HTML einzubetten und eine API bereitzustellen, die von sozialen Webanwendungen, Suchmaschinen, Aggregatoren und anderen Tools verwendet werden kann. Diese minimalen HTML-Muster werden zur Markierung von Entitäten verwendet, die von grundlegenden bis hin zu domänenspezifischen Informationen reichen, wie Personen, Organisationen, Veranstaltungen und Orte.

- Um ein Microformats-Objekt zu erstellen, werden `h-*` Klassenbezeichnungen im `class`-Attribut verwendet.
- Um eine Eigenschaft zu einem Objekt hinzuzufügen, werden die `p-*`, `u-*`, `dt-*`, `e-*` Klassenbezeichnungen bei einem der Nachkommen des Objekts verwendet.

Microformats verwenden unterstützende Vokabulare, um Objekte zu beschreiben und Paaren von Namen und Werten Werte zuzuweisen. Die Eigenschaften sind in `class`-Attributen enthalten, die zu jedem HTML-Element hinzugefügt werden können, während die Datenwerte den Inhalt von HTML-Elementen und deren semantische Attribute wiederverwenden.

Microformats2 (manchmal als mf2 bezeichnet) ist ein Update der Microformats, das eine einfachere Möglichkeit bietet, HTML-strukturierte Syntax und Vokabulare zu annotieren, als die vorherigen Ansätze wie RDFa und Mikrodaten. Diese früheren Ansätze erfordern das Erlernen neuer Attribute.

Es gibt [Open-Source-Parsing-Bibliotheken für die meisten Sprachen](https://microformats.org/wiki/microformats2#Parsers) für Microformats2.

## Wie Microformats funktionieren

Ein Autor einer Webseite kann Microformats zu seinem HTML hinzufügen. Wenn sie sich zum Beispiel selbst identifizieren wollten, könnten sie eine [h-card](https://microformats.org/wiki/h-card) verwenden, wie z.B.:

### HTML-Beispiel

```html
<a class="h-card" href="https://alice.example.com">Alice Blogger</a>
```

Wenn ein Parser auf diese Daten stößt, erkennt er, dass diese Seite eine "Karte" enthält, die eine Person oder Organisation namens `Alice Blogger` mit einer URL von `https://alice.example.com/` beschreibt. Der Parser macht diese Daten über APIs verfügbar, die für verschiedene Anwendungen verwendet werden können. So könnte eine Anwendung eine Seite nach einer h-card durchsuchen, um sie als Profilinformation für jemanden zu verwenden, der sich bei einem Dienst angemeldet hat.

Wie in diesem Beispiel erfordern einige Markup-Muster nur einen einzigen Microformat-Root-Klassennamen, den Parser verwenden, um einige generische Eigenschaften wie `name`, `url`, `photo` zu finden.

## Anwendungsfälle für Microformats

Microformats haben zahlreiche Anwendungsfälle. Zuerst verwendet der [Webmention-Standard](https://www.w3.org/TR/webmention/) Microformats, um eine Möglichkeit bereitzustellen, mit der Nachrichten und Kommentare von einer Seite an eine andere gesendet werden können. Die Webmention-Spezifikation definiert spezielle Attribute, die Seiten veröffentlichen und konsumieren können, um eine reichhaltige, interoperable Möglichkeit zum Veröffentlichen von Nachrichten und Kommentaren zu schaffen. Microformats können auch mit Webmentions verwendet werden, um soziale Reaktionen wie Likes, Reposts und Bookmarks von einer Seite an eine andere zu senden.

Microformats ermöglichen auch eine einfache Syndizierung über Webseiten hinweg. Ein Aggregator könnte eine Seite mit veröffentlichten Microformats parsen, um nach Informationen wie einem Beitragstitel, einem Textkörper und dem Autor eines Beitrags zu suchen. Dieser Aggregator könnte dann die gesammelten semantischen Informationen verwenden, um ein Ergebnis auf seiner Seite darzustellen. Nachrichten-Aggregatoren und Community-Posting-Boards könnten zum Beispiel Einreichungen erleichtern und Microformats verwenden, um relevante Inhalte aus einer Seite zu extrahieren. Ebenso könnte eine Webseite Microformats nutzen, um gestaltete Anfragen an Drittparteien zu senden, um Inhalte zu veröffentlichen, etwa an soziale Netzwerke.

Alle großen Suchmaschinen unterstützen das Lesen und Interpretieren von Microformats. Suchmaschinen profitieren enorm von direktem Zugriff auf diese strukturierten Daten, weil es ihnen ermöglicht, die Informationen auf Webseiten zu verstehen. Mit diesen Informationen können Suchmaschinen den Nutzern relevantere Ergebnisse liefern. Einige Suchmaschinen können basierend auf den in Microformats bereitgestellten Daten spezielle Snippets wie Sternebewertungen auf einer Suchergebnisseite rendern.

Zusätzlich dazu, maschinenlesbar zu sein, sind Microformats dafür ausgelegt, leicht von Menschen gelesen zu werden. Dieser Ansatz macht es einfach, dass Menschen Microformats-Daten verstehen und pflegen können.

## Microformats-Präfixe

Alle Microformats bestehen aus einer Wurzel und einer Sammlung von Eigenschaften. Eigenschaften sind alle optional und potenziell mehrwertig - Anwendungen, die einen einzelnen Wert benötigen, können die erste Vorkommen einer Eigenschaft verwenden. Hierarchische Daten werden mit verschachtelten Microformats dargestellt, typischerweise als Eigenschaftswerte selbst.

Alle Microformats-Klassennamen verwenden Präfixe. Präfixe sind **syntaxunabhängig von Vokabularen**, die separat entwickelt werden.

- **"h-\*" für Root-Klassennamen**, z.B. "h-card", "h-entry", "h-feed" und viele mehr. Diese Top-Level-Rootklassen weisen in der Regel auf einen Typ und das entsprechende erwartete Vokabular der Eigenschaften hin. Zum Beispiel:

  - [h-card](https://microformats.org/wiki/h-card) beschreibt eine Person oder Organisation
  - [h-entry](https://microformats.org/wiki/h-entry) beschreibt episodische oder datumsgebundene Inhalte wie einen Blog-Beitrag
  - [h-feed](https://microformats.org/wiki/h-feed) beschreibt einen Stream oder Feed von Beiträgen
  - Sie können viele weitere Vokabulare auf der [Microformats2-Wiki finden.](https://microformats.org/wiki/microformats2#v2_vocabularies)

- **"p-\*" für einfache (Text-)Eigenschaften**, z.B. "p-name", "p-summary"

  - Generische einfache Textanalyse, Textelement im Allgemeinen. Bei bestimmten HTML-Elementen verwenden Sie zuerst spezielle Attribute, z.B. img/alt, abbr/title.

- **"u-\*" für URL-Eigenschaften**, z.B. "u-url", "u-photo", "u-logo"

  - Spezielle Analyse: Elementattribute a/href, img/src, object/data usw. Attribute über Elementinhalten.

- **"dt-\*" für Datum/Uhrzeit-Eigenschaften**, z.B. "dt-start", "dt-end", "dt-bday"

  - Spezielle Analyse: `time`-Element-datetime-Attribut, [value-class-pattern](https://microformats.org/wiki/value-class-pattern) und separate Datum-Zeit-Wert-Analyse für bessere Lesbarkeit.

- **"e-\*" für Elementbaum-Eigenschaften**, bei denen die gesamte enthaltene Elementhierarchie der Wert ist, z.B. "e-content". Das "e-" Präfix kann auch mnemonisch als "Elementbaum", "eingebettetes Markup" oder "eingekapseltes Markup" in Erinnerung behalten werden.

## Einige Microformats-Beispiele

### h-card

Das [h-card](https://microformats.org/wiki/h-card) Microformat repräsentiert eine Person oder Organisation.

Der Wert jeder Eigenschaft wird in HTML unter Verwendung der Klasseneigenschaft, die jedes Element tragen kann, definiert.

#### Beispiel für eine h-card

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
| **`p-name`**           | Der volle/formatierte Name der Person oder Organisation.                 |
| **`u-email`**          | E-Mail-Adresse                                                           |
| **`u-photo`**          | Ein Foto der Person oder Organisation                                    |
| **`u-url`**            | Homepage oder andere URL, die die Person oder Organisation repräsentiert |
| **`u-uid`**            | Universell eindeutiger Identifikator, vorzugsweise kanonische URL        |
| **`p-street-address`** | Straßenname und -nummer                                                  |
| **`p-locality`**       | Stadt/Ort/Dorf                                                           |
| **`p-country-name`**   | Ländername                                                               |

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

In diesem Beispiel ist sowohl für eine Person als auch die Organisation, die sie repräsentiert, eine h-card spezifiziert. Die Verbindung der Person zur verlinkten Organisation wird mit der p-org-Eigenschaft angegeben.

Hinweis: Die verschachtelte h-card hat implizierte 'name'- und 'url'-Eigenschaften, genau wie jede andere Root-Klassennamen-only h-card auf einem `<a href>`.

### h-entry

Das [h-entry](https://microformats.org/wiki/h-entry) Microformat repräsentiert episodische oder datumsgebundene Inhalte im Web. h-entry wird oft mit Inhalten verwendet, die syndiziert werden sollen, z.B. Blog-Beiträge und kurze Notizen.

Beispiel für ein h-entry als Blog-Beitrag:

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

| Eigenschaft        | Beschreibung                                               |
| ------------------ | ---------------------------------------------------------- |
| **`p-name`**       | Eintragsname/Titel                                         |
| **`p-author`**     | wer den Eintrag verfasst hat, optional eingebettete h-card |
| **`dt-published`** | wann der Eintrag veröffentlicht wurde                      |
| **`p-summary`**    | kurze Zusammenfassung des Eintrags                         |
| **`e-content`**    | vollständiger Inhalt des Eintrags                          |

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
      href="https://developer.mozilla.org/en-US/docs/Web/HTML/microformats">
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
          "https://developer.mozilla.org/en-US/docs/Web/HTML/microformats"
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

Das [h-feed](https://microformats.org/wiki/h-feed) ist ein Stream oder Feed von [h-entry](https://microformats.org/wiki/h-entry) Beiträgen, wie vollständige Beiträge auf einer Startseite oder Archivseiten oder Zusammenfassungen oder andere kurze Listen von Beiträgen.

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
      <td><strong>Verschachtelte h-entry</strong></td>
      <td></td>
    </tr>
    <tr>
      <td>Objekte, die die Elemente des Feeds repräsentieren</td>
      <td></td>
    </tr>
  </tbody>
</table>

### h-event

Das `h-event` ist für Ereignisse im Web. h-event wird häufig sowohl bei Ereignislisten als auch bei einzelnen Ereignisseiten verwendet.

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

| Eigenschaft      | Beschreibung                                              |
| ---------------- | --------------------------------------------------------- |
| **`p-name`**     | Name des Ereignisses (oder Titel)                         |
| **`p-summary`**  | Kurze Zusammenfassung des Ereignisses                     |
| **`dt-start`**   | Uhrzeit/Datum, wann das Ereignis beginnt                  |
| **`dt-end`**     | Uhrzeit/Datum, wann das Ereignis endet                    |
| **`p-location`** | Wo das Ereignis stattfindet, optional eingebettete h-card |

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

## Beispiele für das Microformats `rel`-Attribut

Es gibt einige Microformats, die auf einer Seite durch die Verwendung eines speziellen `rel=`-Attributs angewendet werden. Diese Microformats beschreiben eine Beziehung zwischen einem aktuellen Dokument und einem verlinkten Dokument. Eine vollständige Liste hiervon finden Sie im [rel-Attribut](https://microformats.org/wiki/rel-values) auf der Microformats-Wiki.

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

Dieses Attribut gibt an, dass das verlinkte Dokument von Suchmaschinen-Ranking-Algorithmen, die möglicherweise vom aktuellen Dokument abgeleitet sind, kein besonderes Gewicht bekommen soll. Dies ist nützlich, um zu verhindern, dass Link-Graph-Algorithmen eine Seite höher bewerten, als sie es sonst tun würden, nachdem sie einen Link zu einem Dokument gesehen haben.

```html
<a rel="nofollow" href="https://jamesg.blog">James Gallagher</a>
```

## Browser-Kompatibilität

Unterstützt in allen Browsern mit Unterstützung des class-Attributs und dessen DOM-API.

## Siehe auch

- [class-Attribut](/de/docs/Web/HTML/Global_attributes/class)
- [Microformat](https://en.wikipedia.org/wiki/Microformat) auf Wikipedia
- [Offizielle Microformats-Website](https://microformats.org/wiki/Main_Page)
- [Unterstützung durch Suchmaschinen](https://microformats.org/wiki/search_engines) auf der offiziellen Microformats-Website
- [Microformats auf IndieWebCamp](https://indieweb.org/microformats)
