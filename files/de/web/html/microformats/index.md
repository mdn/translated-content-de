---
title: Mikrodatenformate
slug: Web/HTML/microformats
l10n:
  sourceCommit: 2705886f9805b82cd23f0f0463bf82058d8c8fac
---

{{HTMLSidebar}}

[_Microformats_](https://microformats.org/wiki/Main_Page) sind Standards, die verwendet werden, um Semantik und strukturierte Daten in HTML einzubetten und bieten eine API, die von sozialen Webanwendungen, Suchmaschinen, Aggregatoren und anderen Tools genutzt werden kann. Diese minimalen HTML-Muster werden verwendet, um Entitäten zu kennzeichnen, die von grundlegenden bis hin zu domänenspezifischen Informationen reichen, wie Personen, Organisationen, Ereignisse und Standorte.

- Um ein Mikroformate-Objekt zu erstellen, werden `h-*` Klassennamen im Klassenattribut verwendet.
- Um einer Entität eine Eigenschaft hinzuzufügen, werden die `p-*`, `u-*`, `dt-*`, `e-*` Klassennamen auf einem der Nachkommen des Objekts verwendet.

Microformats verwenden unterstützende Vokabulare zur Beschreibung von Objekten und Namens-Werte-Paaren zur Zuweisung von Werten zu deren Eigenschaften. Die Eigenschaften werden in Klassenattributen getragen, die zu jedem HTML-Element hinzugefügt werden können, während die Datenwerte den Inhalt und die semantischen Attribute von HTML-Elementen wiederverwenden.

Microformats2 (manchmal als mf2 bezeichnet) ist ein Update der Microformats, das eine einfachere Möglichkeit bietet, HTML-strukturierte Syntax und Vokabulare zu annotieren als frühere Ansätze wie RDFa und Microdata, die das Lernen neuer Attribute erforderten.

Es gibt [Open-Source-Parsing-Bibliotheken für die meisten Sprachen](https://microformats.org/wiki/microformats2#Parsers) für Microformats2.

## Wie Microformats funktionieren

Ein Autor einer Webseite kann Microformats zu ihrem HTML hinzufügen. Wenn sie sich beispielsweise selbst identifizieren möchten, könnten sie eine [h-card](https://microformats.org/wiki/h-card) wie folgt verwenden:

### HTML-Beispiel

```html
<a class="h-card" href="https://alice.example.com">Alice Blogger</a>
```

Wenn ein Parser auf diese Daten stößt, wird er erkennen, dass diese Seite eine "card" enthält, die eine Person oder Organisation namens `Alice Blogger` mit einer URL `https://alice.example.com/` beschreibt. Der Parser macht diese Daten über APIs verfügbar, die für verschiedene Anwendungen verwendet werden können. Zum Beispiel könnte eine Anwendung eine Seite nach einer h-card durchsuchen, um sie als Profilinformationen für jemanden zu verwenden, der sich für einen Service angemeldet hat.

Wie in diesem Beispiel erfordern einige Markup-Muster nur einen einzelnen Microformat-Wurzelklassennamen, den Parser verwenden, um einige generische Eigenschaften wie `name`, `url`, `photo` zu finden.

## Anwendungsfälle für Microformats

Mikrodatenformate haben zahlreiche Anwendungsfälle. Erstens verwendet der [Webmention-Standard](https://www.w3.org/TR/webmention/) Microformats, um Nachrichten und Kommentare von einer Website zur anderen zu senden. Die Webmention-Spezifikation definiert spezifische Attribute, die Websites veröffentlichen und konsumieren können, um eine reiche, interoperable Art des Publizierens von Nachrichten und Kommentaren zu schaffen. Microformats können auch mit Webmentions verwendet werden, um soziale Reaktionen wie Likes, Reposts und Lesezeichen von einer Website zur anderen zu senden.

Mikrodatenformate ermöglichen auch eine einfache Syndizierung über Websites hinweg. Ein Aggregator könnte eine Seite mit veröffentlichten Microformats parsen, um nach Informationen wie einem Beitragstitel, einem Beitragskörper und dem Autor eines Beitrags zu suchen. Dieser Aggregator könnte dann die gesammelten semantischen Informationen verwenden, um ein Ergebnis auf seiner Website darzustellen. Beispielsweise könnten Nachrichtenaggregatoren und Community-Posting-Boards Einreichungen erleichtern und Microformats verwenden, um relevante Inhalte aus einer Seite zu extrahieren. Darüber hinaus könnte eine Website Microformats verwenden, um maßgeschneiderte Anfragen an Dritte zu senden, um Inhalte zu veröffentlichen, wie soziale Netzwerke.

Alle großen Suchmaschinen unterstützen das Lesen und Interpretieren von Microformats. Suchmaschinen profitieren stark von direktem Zugriff auf diese strukturierten Daten, da es ihnen ermöglicht, die Informationen auf Webseiten zu verstehen. Mit diesen Informationen können Suchmaschinen relevantere Ergebnisse für Nutzer präsentieren. Einige Suchmaschinen könnten spezielle Snippets wie Sternebewertungen auf einer Suchergebnisseite basierend auf den in Microformats bereitgestellten Daten ausgeben.

Zusätzlich zu ihrer Maschinenlesbarkeit sind Mikrodatenformate so gestaltet, dass sie leicht von Menschen gelesen werden können. Dieser Ansatz erleichtert es den Menschen, die Mikrodatenformat-Daten zu verstehen und zu pflegen.

## Prefix der Mikrodatenformate

Alle Microformats bestehen aus einer Wurzel und einer Sammlung von Eigenschaften. Eigenschaften sind alle optional und potenziell mehrfach vorhanden – Anwendungen, die einen einzelnen Wert benötigen, können die erste Instanz einer Eigenschaft verwenden. Hierarchische Daten werden mit verschachtelten Microformats dargestellt, typischerweise als Eigenschaftswerte selbst.

Alle Klassennamen von Mikrodatenformaten verwenden Präfixe. Präfixe sind **syntaxunabhängig von Vokabularen**, die separat entwickelt werden.

- **"h-\*" für Wurzelklassennamen**, z.B. "h-card", "h-entry", "h-feed" und viele mehr. Diese Top-Level-Wurzelklassen zeigen normalerweise einen Typ und das entsprechende erwartete Vokabular von Eigenschaften an. Zum Beispiel:

  - [h-card](https://microformats.org/wiki/h-card) beschreibt eine Person oder Organisation
  - [h-entry](https://microformats.org/wiki/h-entry) beschreibt episodische oder mit Datum versehene Online-Inhalte wie einen Blogbeitrag
  - [h-feed](https://microformats.org/wiki/h-feed) beschreibt einen Strom oder Feed von Beiträgen
  - Viele weitere [Vokabulare finden Sie auf der microformats2-Wiki.](https://microformats.org/wiki/microformats2#v2_vocabularies)

- **"p-\*" für einfache (Text-)Eigenschaften**, z.B. "p-name", "p-summary"

  - Generische einfache Textanalyse, allgemein der Elementtext. Bei bestimmten HTML-Elementen verwenden Sie zuerst spezielle Attribute, z.B. img/alt, abbr/title.

- **"u-\*" für URL-Eigenschaften**, z.B. "u-url", "u-photo", "u-logo"

  - Spezielle Analyse: Elementattribute a/href, img/src, object/data usw. Attribute über Elementinhalte.

- **"dt-\*" für Datums- und Zeiteigenschaften**, z.B. "dt-start", "dt-end", "dt-bday"

  - Spezielle Analyse: Zeit-Element-Datum/Uhrzeit-Attribut, [value-class-pattern](https://microformats.org/wiki/value-class-pattern) und separate Datums-/Uhrzeitwertanalyse für Lesbarkeit.

- **"e-\*" für Elementbaum-Eigenschaften** bei denen die gesamte enthaltene Elementhierarchie der Wert ist, z.B. "e-content". Das "e-" Präfix kann auch mnemotechnisch als "element tree", "embedded markup" oder "encapsulated markup" in Erinnerung behalten werden.

## Einige Mikrodatenformat-Beispiele

### h-card

Das [h-card](https://microformats.org/wiki/h-card) Mikroformat repräsentiert eine Person oder Organisation.

Der Wert jeder Eigenschaft wird in HTML mithilfe des Klassenattributs definiert, das jedes Element tragen kann.

#### Beispiel h-card

```html
<p class="h-card">
  <img class="u-photo" src="https://example.org/photo.png" alt="" />
  <a class="p-name u-url" href="https://example.org">Joe Bloggs</a>
  <a class="u-email" href="mailto:jbloggs@example.com">jbloggs@example.com</a>,
  <span class="p-street-address">17 Austerstræti</span>
  <span class="p-locality">Reykjavík</span>
  <span class="p-country-name">Island</span>
</p>
```

| Eigenschaft             | Beschreibung                                                        |
| ----------------------- | ------------------------------------------------------------------- |
| **`p-name`**            | Der vollständige/formattierte Name der Person oder Organisation.    |
| **`u-email`**           | E-Mail-Adresse                                                      |
| **`u-photo`**           | Ein Foto der Person oder Organisation                               |
| **`u-url`**             | Homepage oder andere URL, die die Person oder Organisation repräsentiert |
| **`u-uid`**             | Universell eindeutiger Bezeichner, vorzugsweise kanonische URL      |
| **`p-street-address`**  | Straßennummer + Name                                                |
| **`p-locality`**        | Stadt/Dorf/Ort                                                     |
| **`p-country-name`**    | Ländername                                                          |

#### Verschachtelte h-card Beispiel

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

In diesem Beispiel wird eine h-card sowohl für eine Person als auch die Organisation, die sie repräsentiert, spezifiziert. Die Verbindung der Person mit der verlinkten Organisation wird mit der Eigenschaft p-org angegeben.

Hinweis: Die verschachtelte h-card hat implizite 'name'- und 'url'-Eigenschaften, ähnlich wie jede andere Root-Class-Name alleinstehende h-card auf einem `<a href>`.

### h-entry

Das [h-entry](https://microformats.org/wiki/h-entry) Mikroformat repräsentiert episodische oder datumsstempelbasierte Inhalte im Web. h-entry wird oft bei Inhalten verwendet, die syndiziert werden sollen, z.B. Blogbeiträge und kurze Notizen.

Beispiel h-entry als Blogbeitrag:

```html
<article class="h-entry">
  <h1 class="p-name">Microformats sind erstaunlich</h1>
  <p>
    Veröffentlicht von
    <a class="p-author h-card" href="https://example.com">W. Developer</a> am
    <time class="dt-published" datetime="2013-06-13 12:00:00">
      13<sup>te</sup> Juni 2013
    </time>
  </p>

  <p class="p-summary">In dem ich die Vorzüge der Verwendung von Mikrodatenformaten preise.</p>

  <div class="e-content">
    <p>Blah blah blah</p>
  </div>
</article>
```

#### Eigenschaften

| Eigenschaft         | Beschreibung                                                   |
| ------------------- | -------------------------------------------------------------- |
| **`p-name`**        | Eintragsname/-titel                                            |
| **`p-author`**      | Wer den Eintrag erstellt hat, optional eingebettete h-card     |
| **`dt-published`**  | Wann der Eintrag veröffentlicht wurde                          |
| **`p-summary`**     | Kurze Zusammenfassung des Eintrags                             |
| **`e-content`**     | Voller Inhalt des Eintrags                                     |

#### Parsed reply h-entry Beispiel

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
    Antwortete auf
    <a
      class="u-in-reply-to"
      href="https://developer.mozilla.org/de/docs/Web/HTML/microformats">
      einen Beitrag auf <strong>developer.mozilla.org</strong>
    </a>
    :
  </p>
  <p class="p-name e-content">
    Hey danke, dass Sie diese Mikrodatenformat-Ressource erstellt haben
  </p>
  <p>
    <a href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106">
      Greg McVerry
    </a>
    veröffentlichte dies
    <a
      class="u-url url"
      href="https://quickthoughts.jgregorymcverry.com/2019/05/31/hey-thanks-for-making-this-microformats-resource">
      <time class="dt-published" datetime="2019-05-31T14:19:09+0000">
        31. Mai 2019
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
          "https://developer.mozilla.org/de/docs/Web/HTML/microformats"
        ],
        "name": ["Hey danke, dass Sie diese Mikrodatenformat-Ressource erstellt haben"],
        "url": [
          "https://quickthoughts.jgregorymcverry.com/2019/05/31/hey-thanks-for-making-this-microformats-resource"
        ],
        "published": ["2019-05-31T14:19:09+0000"],
        "content": [
          {
            "html": "Hey danke, dass Sie diese Mikrodatenformat-Ressource erstellt haben",
            "value": "Hey danke, dass Sie diese Mikrodatenformat-Ressource erstellt haben",
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

Das [h-feed](https://microformats.org/wiki/h-feed) ist ein Strom oder Feed von [h-entry](https://microformats.org/wiki/h-entry) Beiträgen, wie vollständige Beiträge auf einer Startseite oder Archivseiten oder Zusammenfassungen oder andere kurze Listen von Beiträgen.

#### Beispiel h-feed

```html
<div class="h-feed">
  <h1 class="p-name">Microformats Blogs</h1>
  <article class="h-entry">
    <h2 class="p-name">Microformats sind erstaunlich</h2>
    <p>
      Veröffentlicht von
      <a class="p-author h-card" href="https://example.com">W. Developer</a> am
      <time class="dt-published" datetime="2013-06-13 12:00:00">
        13<sup>te</sup> Juni 2013
      </time>
    </p>
    <p class="p-summary">
      In dem ich die Vorzüge der Verwendung von Mikrodatenformaten preise.
    </p>
    <div class="e-content"><p>Blah blah blah</p></div>
  </article>
</div>
```

#### Eigenschaften

| Eigenschaft     | Beschreibung                                   |
| --------------- | -----------------------------------------------|
| **`p-name`**    | Name des Feeds                                 |
| **`p-author`**  | Autor des Feeds, optional eine eingebettete h-card |

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

Das `h-event` ist für Veranstaltungen im Web. h-event wird oft sowohl für Veranstaltungslisten als auch einzelne Veranstaltungsseiten verwendet.

```html
<div class="h-event">
  <h1 class="p-name">Microformats-Treffen</h1>
  <p>
    Von
    <time class="dt-start" datetime="2013-06-30 12:00">
      30<sup>ter</sup> Juni 2013, 12:00
    </time>
    bis <time class="dt-end" datetime="2013-06-30 18:00">18:00</time> bei
    <span class="p-location">Irgendeiner Bar in SF</span>
  </p>
  <p class="p-summary">
    Treffen Sie sich, um alles rund um Mikrodatenformate zu besprechen.
  </p>
</div>
```

#### Eigenschaften

| Eigenschaft       | Beschreibung                                         |
| ----------------- | ---------------------------------------------------- |
| **`p-name`**      | Veranstaltungsname (oder Titel)                      |
| **`p-summary`**   | Kurze Zusammenfassung der Veranstaltung              |
| **`dt-start`**    | Datum und Uhrzeit, wann die Veranstaltung beginnt    |
| **`dt-end`**      | Datum und Uhrzeit, wann die Veranstaltung endet      |
| **`p-location`**  | Wo die Veranstaltung stattfindet, optional eingebettete h-card |

#### Parsed h-event Beispiel

```html
<div class="h-event">
  <h2 class="p-name">IndieWeb-Gipfel</h2>
  <time class="dt-start" datetime="2019-06-29T09:00:00-07:00">
    29. Juni 2019 um 9:00 Uhr (-0700)
  </time>
  <br />durch
  <time class="dt-end" datetime="2019-06-30T18:00:00-07:00">
    30. Juni 2019 um 18:00 Uhr (-0700)
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
  <div class="e-content">Kommen Sie dazu</div>
  <div>
    <span class="p-author h-card">
      <a class="u-url p-name" href="https://aaronparecki.com">Aaron Parecki</a>
    </span>
    Veröffentlicht diese
    <a href="https://aaronparecki.com/2019/06/29/1/" class="u-url">Veranstaltung </a>am
    <time class="dt published" datetime="2019-05-25T18:00:00-07:00">
      5. Mai 2019
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
            "html": "Kommen Sie dazu",
            "value": "Kommen Sie dazu",
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

## Beispiele für das rel-Attribut in Microformats

Es gibt einige Mikrodatenformate, die auf einer Seite durch ein spezielles `rel=`-Attribut angewendet werden. Diese Microformats beschreiben eine Beziehung zwischen einem aktuellen Dokument und einem verlinkten Dokument. Für eine vollständige Liste dieser, siehe das [rel-Attribut](https://microformats.org/wiki/rel-values) auf der Microformats Wiki.

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

Dieses Attribut besagt, dass das verlinkte Dokument von Algorithmen zur Suchmaschinenplatzierung, die sich möglicherweise aus der aktuellen Seite ableiten, nicht gewichtet werden sollte. Dies ist nützlich, um zu verhindern, dass Link-Graf-Algorithmen eine höhere Gewichtung einer Seite vornehmen, als es ansonsten nach dem Erkennen eines Links zu einem Dokument der Fall wäre.

```html
<a rel="nofollow" href="https://jamesg.blog">James Gallagher</a>
```

## Browserkompatibilität

Unterstützt in allen Browsern mit Unterstützung für das Klassenattribut und dessen DOM-API.

## Siehe auch

- [class Attribut](/de/docs/Web/HTML/Global_attributes/class)
- [Microformat](https://en.wikipedia.org/wiki/Microformat) auf Wikipedia
- [Offizielle Microformats Website](https://microformats.org/wiki/Main_Page)
- [Suchmaschinenunterstützung](https://microformats.org/wiki/search_engines) auf der offiziellen Microformats Website
- [Microformats auf IndieWebCamp](https://indieweb.org/microformats)
