---
title: Verwendung von Mikroformaten in HTML
short-title: Microformats
slug: Web/HTML/Guides/Microformats
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

[_Mikroformate_](https://microformats.org/wiki/Main_Page) sind Standards, die verwendet werden, um Semantik und strukturierte Daten in HTML einzubetten, und bieten eine API, die von sozialen Webanwendungen, Suchmaschinen, Aggregatoren und anderen Tools genutzt werden kann. Diese minimalen Muster von HTML werden verwendet, um Entitäten zu markieren, die von grundlegenden bis zu domänenspezifischen Informationen reichen, wie z.B. Personen, Organisationen, Veranstaltungen und Orte.

- Um ein Mikroformat-Objekt zu erstellen, werden `h-*` Klassennamen im class-Attribut verwendet.
- Um eine Eigenschaft zu einem Objekt hinzuzufügen, werden die Klassennamen `p-*`, `u-*`, `dt-*`, `e-*` auf einem der Nachkommen des Objekts verwendet.

Mikroformate nutzen unterstützende Vokabeln, um Objekte zu beschreiben und Namens-Wert-Paare, um ihren Eigenschaften Werte zuzuweisen. Die Eigenschaften werden in Klassenattributen getragen, die zu jedem HTML-Element hinzugefügt werden können, während die Datenwerte den Inhalt von HTML-Elementen und semantische Attribute wiederverwenden.

Microformats2 (manchmal mf2 genannt) ist ein Update der Mikroformate, das eine Methode zur Annotation von HTML-Struktursyntax und Vokabeln bereitstellt als frühere Ansätze der Verwendung von RDFa und Microdata. Diese früheren Ansätze erfordern das Erlernen neuer Attribute.

Es gibt [Open-Source-Parsing-Bibliotheken für die meisten Sprachen](https://microformats.org/wiki/microformats2#Parsers) für Microformats2.

## Wie Mikroformate funktionieren

Ein Autor einer Webseite kann Mikroformate zu ihrem HTML hinzufügen. Zum Beispiel, wenn sie sich selbst identifizieren wollten, könnten sie eine [h-card](https://microformats.org/wiki/h-card) verwenden wie:

### HTML-Beispiel

```html
<a class="h-card" href="https://alice.example.com">Alice Blogger</a>
```

Wenn ein Parser auf diese Daten stößt, wird er wissen, dass diese Seite eine "card" enthält, die eine Person oder Organisation namens `Alice Blogger` mit einer URL von `https://alice.example.com/` beschreibt. Der Parser macht diese Daten über APIs verfügbar, die für verschiedene Anwendungen genutzt werden können. Zum Beispiel könnte eine Anwendung eine Seite nach einer h-card scannen, um sie als Profilinformation für jemanden zu verwenden, der sich bei einem Dienst angemeldet hat.

Wie in diesem Beispiel erfordern einige Markup-Muster nur einen einzigen Mikroformat-Wurzelklassennamen, den Parser verwenden, um einige generische Eigenschaften wie `name`, `url`, `photo` zu finden.

## Anwendungsfälle für Mikroformate

Mikroformate haben zahlreiche Anwendungsfälle. Erstens verwendet der [Webmention-Standard](https://webmention.net/draft/) Mikroformate, um eine Möglichkeit bereitzustellen, wie Nachrichten und Kommentare von einer Seite zur anderen gesendet werden können. Die Webmention-Spezifikation definiert spezifische Attribute, die Seiten veröffentlichen und konsumieren können, um eine reiche, interoperable Art des Veröffentlichens von Nachrichten und Kommentaren zu schaffen. Mikroformate können auch mit Webmentions verwendet werden, um das Senden sozialer Reaktionen wie Likes, Reposts und Bookmarks von einer Seite zur anderen zu ermöglichen.

Mikroformate ermöglichen auch eine einfache Syndizierung über verschiedene Seiten. Ein Aggregator könnte eine Seite mit veröffentlichten Mikroformaten parsen, um nach Informationen wie einem Posttitel, einem Postinhalt und dem Autor eines Posts zu suchen. Dieser Aggregator könnte dann die gesammelten semantischen Informationen nutzen, um ein Ergebnis auf ihrer Seite darzustellen. Beispielsweise könnten Nachrichten-Aggregatoren und Community-Beitrags-Boards Einreichungen erleichtern und Mikroformate nutzen, um relevante Inhalte von einer Seite zu extrahieren. Weiterhin könnte eine Webseite Mikroformate verwenden, um gestaltete Anfragen an Dritte zu senden, um Inhalte zu veröffentlichen, wie zum Beispiel soziale Netzwerke.

Alle großen Suchmaschinen unterstützen das Lesen und Interpretieren von Mikroformaten. Suchmaschinen profitieren stark vom direkten Zugriff auf diese strukturierten Daten, da sie ihnen ermöglicht, die Informationen auf Webseiten zu verstehen. Mit diesen Informationen können Suchmaschinen den Nutzern relevantere Ergebnisse liefern. Einige Suchmaschinen könnten spezielle Snippets wie z.B. Sternebewertungen auf einer Suchergebnisseite basierend auf den bereitgestellten Daten in Mikroformaten rendern.

Neben der maschinenlesbaren Form sind Mikroformate so gestaltet, dass sie leicht von Menschen gelesen werden können. Dieser Ansatz erleichtert es Menschen, Mikroformat-Daten zu verstehen und zu pflegen.

## Mikroformate-Präfixe

Alle Mikroformate bestehen aus einem Wurzel- und einer Sammlung von Eigenschaften. Eigenschaften sind alle optional und potenziell mehrwertig - Anwendungen, die einen einzelnen Wert benötigen, können die erste Instanz einer Eigenschaft verwenden. Hierarchische Daten werden mit verschachtelten Mikroformaten dargestellt, typischerweise als Eigenschaftswerte selbst.

Alle Mikroformat-Klassennamen verwenden Präfixe. Präfixe sind **syntaxunabhängig von Vokabeln**, die separat entwickelt werden.

- **"h-\*" für Wurzelklassennamen**, z.B. "h-card", "h-entry", "h-feed" und viele mehr. Diese obersten Wurzelklassen zeigen normalerweise einen Typ und das zu erwartende Vokabular von Eigenschaften an. Zum Beispiel:
  - [h-card](https://microformats.org/wiki/h-card) beschreibt eine Person oder Organisation
  - [h-entry](https://microformats.org/wiki/h-entry) beschreibt episodische oder datierte Online-Inhalte wie einen Blogpost
  - [h-feed](https://microformats.org/wiki/h-feed) beschreibt einen Strom oder Feed von Beiträgen
  - Sie finden viele weitere [Vokabeln im Microformats2-Wiki.](https://microformats.org/wiki/microformats2#v2_vocabularies)

- **"p-\*" für einfache (Text-)Eigenschaften**, z.B. "p-name", "p-summary"
  - Generisches Parsing von einfachem Text, generell Textelemente. Bei bestimmten HTML-Elementen zuerst spezielle Attribute verwenden, z.B. img/alt, abbr/title.

- **"u-\*" für URL-Eigenschaften**, z.B. "u-url", "u-photo", "u-logo"
  - Spezielle Parsing: Elementattribute a/href, img/src, object/data etc. Attribute über Elementinhalte.

- **"dt-\*" für Datetime-Eigenschaften**, z.B. "dt-start", "dt-end", "dt-bday"
  - Spezielle Parsing: time-Element-Datetime-Attribut, [Value-Class-Pattern](https://microformats.org/wiki/value-class-pattern) und separate Datums-Zeitwert-Parsing für bessere Lesbarkeit.

- **"e-\*" für Elementbaum-Eigenschaften**, bei denen die gesamte enthaltene Elementhierarchie der Wert ist, z.B. "e-content". Das "e-" Präfix kann auch mnemotechnisch als "Elementbaum", "eingebettetes Markup" oder "eingekapseltes Markup" erinnert werden.

## Einige Beispiele für Mikroformate

### h-card

Das [h-card](https://microformats.org/wiki/h-card) Mikroformat repräsentiert eine Person oder Organisation.

Der Wert jeder Eigenschaft wird in HTML mithilfe des Klassenattributs definiert, welches jedes Element tragen kann.

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

| Eigenschaft            | Beschreibung                                                               |
| ---------------------- | -------------------------------------------------------------------------- |
| **`p-name`**           | Der vollständige/formatierte Name der Person oder Organisation.            |
| **`u-email`**          | E-Mail-Adresse                                                             |
| **`u-photo`**          | Ein Foto der Person oder Organisation                                      |
| **`u-url`**            | Startseite oder andere URL, die die Person oder Organisation repräsentiert |
| **`u-uid`**            | Universell eindeutiger Identifikator, vorzugsweise kanonische URL          |
| **`p-street-address`** | Straßenname und -nummer                                                    |
| **`p-locality`**       | Stadt/Dorf/Ort                                                             |
| **`p-country-name`**   | Ländername                                                                 |

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

In diesem Beispiel ist eine h-card sowohl für eine Person als auch die Organisation, die sie repräsentiert, angegeben. Die Zugehörigkeit der Person zur verlinkten Organisation wird mit der Eigenschaft p-org angegeben.

Hinweis: Die verschachtelte h-card hat implizite 'name' und 'url' Eigenschaften, genau wie jede andere Wurzelklassennamen-nur h-card auf einem `<a href>`.

### h-entry

Das [h-entry](https://microformats.org/wiki/h-entry) Mikroformat repräsentiert episodische oder datumsvermerkte Inhalte im Web. h-entry wird oft mit Inhalten verwendet, die syndiziert werden sollen, z.B. Blogposts und kurze Notizen.

Beispiel h-entry als Blogpost:

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
| **`p-name`**       | Eintragsname/Titel                                            |
| **`p-author`**     | Wer den Eintrag geschrieben hat, optional eingebettete h-card |
| **`dt-published`** | Wann der Eintrag veröffentlicht wurde                         |
| **`p-summary`**    | Kurze Zusammenfassung des Eintrags                            |
| **`e-content`**    | Vollständiger Inhalt des Eintrags                             |

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

Das [h-feed](https://microformats.org/wiki/h-feed) ist ein Stream oder Feed von [h-entry](https://microformats.org/wiki/h-entry)-Beiträgen, wie vollständige Beiträge auf einer Startseite oder Archivseiten, oder Zusammenfassungen oder andere kurze Listen von Beiträgen.

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
      <td>Objekte, die die Elemente des Feeds darstellen</td>
      <td></td>
    </tr>
  </tbody>
</table>

### h-event

Das `h-event` ist für Veranstaltungen im Web. h-event wird oft sowohl mit Veranstaltungsliste als auch mit individuellen Veranstaltungsseiten verwendet.

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
| **`p-summary`**  | Kurze Zusammenfassung der Veranstaltung                        |
| **`dt-start`**   | Datum und Uhrzeit, wann die Veranstaltung beginnt              |
| **`dt-end`**     | Datum und Uhrzeit, wann die Veranstaltung endet                |
| **`p-location`** | Wo die Veranstaltung stattfindet, optional eingebettete h-card |

#### Beispiel eines geparsten h-events

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

## Beispiele für das Mikroformat `rel`-Eigenschaft

Es gibt einige Mikroformate, die auf eine Seite durch die Verwendung einer speziellen `rel=` Eigenschaft angewendet werden. Diese Mikroformate beschreiben eine Beziehung zwischen einem aktuellen und einem verlinkten Dokument. Für eine vollständige Liste dieser, sehen Sie sich die [rel-Eigenschaft](https://microformats.org/wiki/rel-values) im Microformats-Wiki an.

### rel=author

Dieses Attribut gibt an, dass das verlinkte Dokument den Autor der aktuellen Seite darstellt.

```html
<a rel="author" href="https://jamesg.blog">James Gallagher</a>
```

### rel=license

Dieses Attribut gibt an, dass das verlinkte Dokument die Lizenz enthält, unter der die aktuelle Seite veröffentlicht wird.

```html
<a rel="license" href="https://mit-license.org/">MIT License</a>
```

### rel=nofollow

Dieses Attribut gibt an, dass das verlinkte Dokument von Suchmaschinen-Ranking-Algorithmen, die sich möglicherweise von der aktuellen Seite ableiten, kein Gewicht erhalten sollte. Dies ist nützlich, um zu verhindern, dass Link-Graph-Algorithmen einer Seite mehr Gewicht geben, als sie sonst nach dem Erkennen eines Links zu einem Dokument bekommen würde.

```html
<a rel="nofollow" href="https://jamesg.blog">James Gallagher</a>
```

## Browser-Kompatibilität

Unterstützt in allen Browsern, die das class-Attribut und deren DOM API unterstützen.

## Siehe auch

- [Klassische Attribute](/de/docs/Web/HTML/Reference/Global_attributes/class)
- [Mikroformat](https://en.wikipedia.org/wiki/Microformat) bei Wikipedia
- [Offizielle Mikroformate Website](https://microformats.org/wiki/Main_Page)
- [Suchmaschinenunterstützung](https://microformats.org/wiki/search_engines) auf der offiziellen Mikroformate-Website
- [Mikroformate bei IndieWebCamp](https://indieweb.org/microformats)
