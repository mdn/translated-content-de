---
title: Microformats
slug: Web/HTML/microformats
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

[_Microformats_](https://microformats.org/wiki/Main_Page) sind Standards zur Einbettung von Semantik und strukturierten Daten in HTML und bieten eine API für soziale Webanwendungen, Suchmaschinen, Aggregatoren und andere Werkzeuge. Diese minimalen HTML-Muster werden verwendet, um Entitäten zu markieren, die von grundlegenden bis zu domänenspezifischen Informationen reichen, wie Personen, Organisationen, Ereignisse und Orte.

- Um ein Microformats-Objekt zu erstellen, werden `h-*` Klassennamen im Klassenattribut verwendet.
- Um einer Entität eine Eigenschaft hinzuzufügen, werden die Klassennamen `p-*`, `u-*`, `dt-*`, `e-*` auf einem der Nachfahren der Entität verwendet.

Microformats nutzen unterstützende Vokabulare zur Beschreibung von Objekten und Name-Wert-Paare zur Zuweisung von Werten an deren Eigenschaften. Die Eigenschaften werden in Klassenattributen mitgeführt, die jedem HTML-Element hinzugefügt werden können, während die Datenwerte den Inhalt und die semantischen Attribute von HTML-Elementen wiederverwenden.

Microformats2 (manchmal als mf2 bezeichnet) ist eine Aktualisierung der Microformats, die eine Methode zur Annotierung von HTML-strukturierter Syntax und Vokabularen bietet, als frühere Ansätze mit RDFa und Microdata. Diese früheren Ansätze erfordern das Erlernen neuer Attribute.

Es gibt [Open-Source-Bibliotheken für die meisten Sprachen](https://microformats.org/wiki/microformats2#Parsers) zur Analyse von Microformats2.

## Wie Microformats funktionieren

Ein Autor einer Webseite kann seiner HTML-Datei Microformats hinzufügen. Wenn sie sich beispielsweise identifizieren wollten, könnten sie eine [h-card](https://microformats.org/wiki/h-card) verwenden, wie z.B.:

### HTML-Beispiel

```html
<a class="h-card" href="https://alice.example.com">Alice Blogger</a>
```

Wenn ein Parser diese Daten trifft, wird er wissen, dass diese Seite eine "Karte" enthält, die eine Person oder Organisation namens `Alice Blogger` mit einer URL von `https://alice.example.com/` beschreibt. Der Parser stellt diese Daten über APIs zur Verfügung, die für verschiedene Anwendungen genutzt werden können. Beispielsweise könnte eine Anwendung eine Seite nach einer h-card scannen, um sie als Profilinformation für jemanden zu verwenden, der sich für einen Dienst angemeldet hat.

Wie in diesem Beispiel erfordert einige Markup-Muster nur einen einzigen Microformat-Wurzelklassennamen, den Parser verwenden, um einige generische Eigenschaften wie `name`, `url`, `photo` zu finden.

## Anwendungsfälle für Microformats

Microformats haben zahlreiche Anwendungsfälle. Zuerst verwendet der [Webmention-Standard](https://www.w3.org/TR/webmention/) Microformats, um eine Möglichkeit zu bieten, wie Nachrichten und Kommentare von einer Seite zur anderen gesendet werden können. Die Webmention-Spezifikation definiert spezifische Attribute, die Webseiten veröffentlichen und konsumieren können, um eine reichhaltige, interoperable Möglichkeit zur Veröffentlichung von Nachrichten und Kommentaren zu schaffen. Microformats können auch mit Webmentions verwendet werden, um das Senden von sozialen Reaktionen wie Likes, Reposts und Bookmarks von einer Seite zur anderen zu ermöglichen.

Microformats ermöglichen auch eine einfache Verbreitung über Webseiten hinweg. Ein Aggregator könnte eine Seite mit veröffentlichten Microformats parsen, um nach Informationen wie einem Beitragstitel, einem Beitragstext und dem Autor eines Beitrags zu suchen. Dieser Aggregator könnte dann die gesammelten semantischen Informationen verwenden, um ein Ergebnis auf seiner Seite darzustellen. Beispielsweise könnten Nachrichtenaggregatoren und öffentliche Foren Einreichungen erleichtern und Microformats nutzen, um relevante Inhalte aus einer Seite zu extrahieren. Darüber hinaus könnte eine Webseite Microformats verwenden, um maßgeschneiderte Anfragen an Dritte zu senden, um Inhalte zu veröffentlichen, wie z.B. soziale Netzwerke.

Alle großen Suchmaschinen unterstützen das Lesen und Interpretieren von Microformats. Suchmaschinen profitieren stark von direktem Zugriff auf diese strukturierten Daten, da sie ihnen ermöglichen, die Informationen auf Webseiten besser zu verstehen. Mit diesen Informationen können Suchmaschinen relevantere Suchergebnisse für Benutzer bereitstellen. Einige Suchmaschinen können basierend auf den in Microformats bereitgestellten Daten spezielle Snippets wie Sternbewertungen auf einer Suchergebnisseite darstellen.

Zusätzlich zu der Maschinenlesbarkeit sind Microformats so konzipiert, dass sie auch für Menschen leicht lesbar sind. Dieser Ansatz erleichtert es, Microformats-Daten zu verstehen und zu pflegen.

## Microformats-Präfixe

Alle Microformats bestehen aus einer Wurzel und einer Sammlung von Eigenschaften. Eigenschaften sind alle optional und potenziell mehrwertig – Anwendungen, die einen einzelnen Wert benötigen, können die erste Instanz einer Eigenschaft verwenden. Hierarchische Daten werden mit verschachtelten Microformats dargestellt, in der Regel als Werte von Eigenschaften selbst.

Alle Microformats-Klassennamen verwenden Präfixe. Präfixe sind **syntaktisch unabhängig von Vokabularen**, die separat entwickelt werden.

- **„h-\*“ für Wurzelklassennamen**, z.B. „h-card“, „h-entry“, „h-feed“ und viele mehr. Diese obersten Wurzelklassen zeigen normalerweise einen Typ und das dazugehörige erwartete Vokabular von Eigenschaften an. Zum Beispiel:

  - [h-card](https://microformats.org/wiki/h-card) beschreibt eine Person oder Organisation
  - [h-entry](https://microformats.org/wiki/h-entry) beschreibt episodische oder datierte Online-Inhalte wie Blog-Posts
  - [h-feed](https://microformats.org/wiki/h-feed) beschreibt einen Strom oder Feed von Beiträgen
  - Sie können viele weitere [Vokabul-Varianten im microformats2-Wiki finden.](https://microformats.org/wiki/microformats2#v2_vocabularies)

- **„p-\*“ für einfache (Text-)Eigenschaften**, z.B. „p-name“, „p-summary“

  - Generisches Plaintext-Parsen, allgemeiner Elementtext. Bei bestimmten HTML-Elementen zuerst spezielle Attribute verwenden, z.B. img/alt, abbr/title.

- **„u-\*“ für URL-Eigenschaften**, z.B. „u-url“, „u-photo“, „u-logo“

  - Spezielles Parsen: Elementattribute a/href, img/src, object/data etc. Attribute über Elementinhalte.

- **„dt-\*“ für Datumseigenschaften**, z.B. „dt-start“, „dt-end“, „dt-bday“

  - Spezielles Parsen: time-Element-Datumsattribut, [value-class-pattern](https://microformats.org/wiki/value-class-pattern) und separate Date-Time-Wert-Analyse zur Lesbarkeit.

- **„e-\*“ für Elementbaum-Eigenschaften**, bei denen die gesamte enthaltene Element-Hierarchie der Wert ist, z.B. „e-content“. Das „e-“ Präfix kann auch mnemonisch als „Elementbaum“, „eingebettetes Markup“ oder „gekapseltes Markup“ erinnert werden.

## Einige Beispiele für Microformats

### h-card

Das [h-card](https://microformats.org/wiki/h-card) Microformat repräsentiert eine Person oder Organisation.

Der Wert jeder Eigenschaft wird in HTML mithilfe der Klasseneigenschaft definiert, die jedes Element tragen kann.

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
| **`p-name`**           | Der vollständige/formatierte Name der Person oder Organisation           |
| **`u-email`**          | E-Mail-Adresse                                                           |
| **`u-photo`**          | Ein Foto der Person oder Organisation                                    |
| **`u-url`**            | Homepage oder andere URL, die die Person oder Organisation repräsentiert |
| **`u-uid`**            | Universell eindeutiger Bezeichner, vorzugsweise kanonische URL           |
| **`p-street-address`** | Straßenname und -nummer                                                  |
| **`p-locality`**       | Stadt/Dorf/Ort                                                           |
| **`p-country-name`**   | Name des Landes                                                          |

#### Verschachteltes h-card-Beispiel

```html
<div class="h-card">
  <a class="p-name u-url" href="https://blog.lizardwrangler.com/">
    Mitchell Baker
  </a>
  (<a class="p-org h-card" href="https://mozilla.org/">Mozilla Foundation</a>)
</div>
```

Analysiertes JSON:

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

In diesem Beispiel ist sowohl für eine Person als auch für die Organisation, die sie repräsentiert, eine h-card angegeben. Die Verbindung der Person mit der verlinkten Organisation wird mittels der Eigenschaft p-org angegeben.

Hinweis: die verschachtelte h-card hat implizierte 'name' und 'url' Eigenschaften, genau wie jede andere Wurzelklassennamen-h-card auf einem `<a href>`.

### h-entry

Das [h-entry](https://microformats.org/wiki/h-entry) Microformat repräsentiert episodische oder datierte Inhalte im Web. h-entry wird oft mit Inhalten verwendet, die zur Verbreitung vorgesehen sind, z.B. Blog-Beiträge und kurze Notizen.

Beispiel für ein h-entry als Blogpost:

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
| **`p-name`**       | Name/Titel des Eintrags                                       |
| **`p-author`**     | Wer den Eintrag geschrieben hat, optional eingebettete h-card |
| **`dt-published`** | Wann der Eintrag veröffentlicht wurde                         |
| **`p-summary`**    | Kurze Zusammenfassung des Eintrags                            |
| **`e-content`**    | Vollständiger Inhalt des Eintrags                             |

#### Beispiel einer analysierten Antwort h-entry

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

Der [h-feed](https://microformats.org/wiki/h-feed) ist ein Strom oder Feed von [h-entry](https://microformats.org/wiki/h-entry) Beiträgen, wie vollständige Beiträge auf einer Startseite oder Archivseiten, oder Zusammenfassungen oder andere kurze Listen von Beiträgen.

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

Das `h-event` ist für Ereignisse im Web. h-event wird oft sowohl mit Veranstaltungslisten als auch mit individuellen Veranstaltungsseiten verwendet.

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
| **`p-name`**     | Name (oder Titel) des Ereignisses                         |
| **`p-summary`**  | Kurze Zusammenfassung des Ereignisses                     |
| **`dt-start`**   | Datum/Uhrzeit, wann das Ereignis beginnt                  |
| **`dt-end`**     | Datum/Uhrzeit, wann das Ereignis endet                    |
| **`p-location`** | Wo das Ereignis stattfindet, optional eingebettete h-card |

#### Beispiel für ein analysiertes h-event

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

## Beispiele für Microformats mit rel-Attributen

Es gibt einige Microformats, die auf eine Seite durch ein spezielles `rel=`-Attribut angewendet werden. Diese Microformats beschreiben eine Beziehung zwischen einem aktuellen Dokument und einem verlinkten Dokument. Für eine vollständige Liste dieser siehe die [rel-Attributseite](https://microformats.org/wiki/rel-values) im Microformats-Wiki.

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

Dieses Attribut gibt an, dass das verlinkte Dokument von Algorithmen zur Suchmaschinen-Ranggewichtung, die sich von der aktuellen Seite ableiten könnten, nicht berücksichtigt werden sollte. Dies ist nützlich, um zu verhindern, dass Link-Graph-Algorithmen eine Seite höher gewichten, als sie es sonst täten, nachdem sie einen Link zu einem Dokument gesehen haben.

```html
<a rel="nofollow" href="https://jamesg.blog">James Gallagher</a>
```

## Browser-Kompatibilität

Unterstützt in der gesamten Unterstützung für das class-Attribut und seine DOM-API.

## Siehe auch

- [class-Attribut](/de/docs/Web/HTML/Global_attributes/class)
- [Microformat](https://en.wikipedia.org/wiki/Microformat) auf Wikipedia
- [Offizielle Website der Microformats](https://microformats.org/wiki/Main_Page)
- [Unterstützung durch Suchmaschinen](https://microformats.org/wiki/search_engines) auf der offiziellen Website der Microformats
- [Microformats auf IndieWebCamp](https://indieweb.org/microformats)
