---
title: X-Robots-Tag header
short-title: X-Robots-Tag
slug: Web/HTTP/Reference/Headers/X-Robots-Tag
l10n:
  sourceCommit: 44a853a7fce4ef042b6eeddc96f0a587f25704d3
---

Der **`X-Robots-Tag`** {{Glossary("response_header", "Response-Header")}} definiert, wie {{Glossary("Crawler", "Crawler")}} URLs indizieren sollten.
Obwohl er nicht Teil einer spezifischen Spezifikation ist, stellt er eine De-facto-Standardmethode dar, um mit Suchmaschinen-Bots, Web-Crawlern und ähnlichen Benutzeragenten zu kommunizieren.
Suchbezogene Crawler verwenden die Regeln aus dem `X-Robots-Tag`-Header, um anzupassen, wie Webseiten oder andere Ressourcen in den Suchergebnissen dargestellt werden.

Indexierungsregeln werden in einem `X-Robots-Tag`-Header oder einem [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) HTML-Element (oft als "robots tag" bezeichnet) definiert und werden entdeckt, wenn eine URL gecrawlt wird.
Das Festlegen von Indexierungsregeln in einem HTTP-Header ist nützlich für Nicht-HTML-Dokumente wie Bilder, PDFs oder andere Medien.

> [!NOTE]
> Nur kooperative Roboter befolgen diese Regeln, und ein Crawler muss zunächst auf die Ressource zugreifen, um Header und Metaelemente zu lesen (siehe [Interaktion mit robots.txt](#interaktion_mit_robots.txt)).
> Wenn Sie den Bandbreitenverbrauch durch Crawler verhindern möchten, ist eine restriktive {{Glossary("robots.txt", "robots.txt")}}-Datei effektiver als Indexierungsregeln, da sie das Crawlen von Ressourcen blockiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-Robots-Tag: <indexing-rule>
X-Robots-Tag: <indexing-rule>, …, <indexing-ruleN>
```

Ein optionales `<bot-name>:` spezifiziert den Benutzeragenten, auf den die nachfolgenden Regeln angewendet werden sollen:

```http
X-Robots-Tag: <indexing-rule>, <bot-name>: <indexing-rule>
X-Robots-Tag: <bot-name>: <indexing-rule>, …, <indexing-ruleN>
```

Siehe [Spezifizierung von Benutzeragenten](#spezifizierung_von_benutzeragenten) für ein Beispiel.

## Direktiven

Es können die folgenden Indexierungsregeln verwendet werden:

- `all`
  - : Keine Einschränkungen für die Indexierung oder Darstellung in Suchergebnissen.
    Diese Regel ist der Standardwert und hat keine Wirkung, wenn explizit aufgeführt.
- `noindex`
  - : Diese Seite, das Medium oder die Ressource nicht in Suchergebnissen anzeigen.
    Wenn nicht angegeben, können die Seite, das Medium oder die Ressource indiziert und in Suchergebnissen angezeigt werden.
- `nofollow`
  - : Den Links auf dieser Seite nicht folgen.
    Wenn nicht angegeben, können Suchmaschinen die Links auf der Seite verwenden, um die verlinkten Seiten zu entdecken.
- `none`
  - : Entspricht `noindex, nofollow`.
- `nosnippet`
  - : Kein Textsnippet oder Videovorschau in den Suchergebnissen für diese Seite anzeigen.
    Ein statisches Bildthumbnail (falls verfügbar) kann trotzdem sichtbar sein.
    Wenn nicht angegeben, können Suchmaschinen ein Textsnippet und eine Videovorschau basierend auf den Informationen auf der Seite generieren.
    Um zu verhindern, dass bestimmte Abschnitte Ihres Inhalts in Suchergebnis-Snippets erscheinen, verwenden Sie das [`data-nosnippet` HTML-Attribut](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#data-nosnippet-attr).
- `indexifembedded`
  - : Eine Suchmaschine darf den Inhalt einer Seite indizieren, wenn er in eine andere Seite über iframes oder ähnliche HTML-Elemente eingebettet ist, trotz einer `noindex`-Regel.
    `indexifembedded` hat nur eine Wirkung, wenn es von `noindex` begleitet wird.
- `max-snippet: <number>`
  - : Verwenden Sie maximal `<number>` Zeichen als Textsnippet für dieses Suchergebnis.
    Ignoriert, wenn keine gültige `<number>` angegeben ist.
- `max-image-preview: <setting>`
  - : Die maximale Größe einer Bildvorschau für diese Seite in Suchergebnissen.
    Wenn nicht angegeben, können Suchmaschinen eine Bildvorschau der Standardgröße anzeigen.
    Wenn Sie nicht möchten, dass Suchmaschinen größere Vorschaubilder verwenden, geben Sie einen `max-image-preview`-Wert von `standard` oder `none` an. Werte umfassen:
    - `none`
      - : Keine Bildvorschau soll angezeigt werden.
    - `standard`
      - : Eine Standard-Bildvorschau darf angezeigt werden.
    - `large`
      - : Eine größere Bildvorschau, bis zur Breite des Viewports, darf angezeigt werden.
- `max-video-preview: <number>`
  - : Verwenden Sie maximal `<number>` Sekunden als Video-Snippet für Videos auf dieser Seite in Suchergebnissen.
    Wenn nicht angegeben, können Suchmaschinen ein Video-Snippet in Suchergebnissen anzeigen, und die Suchmaschine bestimmt, wie lange ein Vorschau sein darf.
    Ignoriert, wenn keine gültige `<number>` angegeben ist.
    Besondere Werte sind wie folgt:
    - `0`
      - : Höchstens kann ein statisches Bild verwendet werden, in Übereinstimmung mit der `max-image-preview`-Einstellung.
    - `-1`
      - : Kein Videolängenlimit.
- `notranslate`
  - : Bieten Sie keine Übersetzung dieser Seite in Suchergebnissen an.
    Wenn nicht angegeben, können Suchmaschinen den Titel und das Snippet des Suchergebnisses in die Sprache der Suchanfrage übersetzen.
- `noimageindex`
  - : Bilder auf dieser Seite nicht indizieren.
    Wenn nicht angegeben, können Bilder auf der Seite indiziert und in Suchergebnissen angezeigt werden.
- `unavailable_after: <date/time>`
  - : Fordert, diese Seite nicht in Suchergebnissen nach dem angegebenen `<date/time>` anzuzeigen.
    Ignoriert, wenn kein gültiges `<date/time>` angegeben ist.
    Ein Datum muss in einem Format wie {{RFC("822")}}, {{RFC("850")}}, oder ISO 8601 angegeben werden.

    Standardmäßig gibt es kein Ablaufdatum für Inhalte.
    Wenn nicht angegeben, kann diese Seite auf unbestimmte Zeit in Suchergebnissen angezeigt werden.
    Es wird erwartet, dass Crawler die Crawl-Rate der URL nach dem angegebenen Datum und Uhrzeit erheblich verringern.

## Beschreibung

Indexierungsregeln über `<meta name="robots">` und `X-Robots-Tag` werden entdeckt, wenn eine URL gecrawlt wird.
Die meisten Crawler unterstützen Regeln im `X-Robots-Tag` HTTP-Header, die in einem `<meta name="robots">`-Element verwendet werden können.

Im Fall von widersprüchlichen Robot-Regeln innerhalb des `X-Robots-Tag` oder zwischen dem `X-Robots-Tag` HTTP-Header und dem `<meta name="robots">`-Element gilt die restriktivere Regel.
Zum Beispiel, wenn eine Seite sowohl `max-snippet:50` als auch `nosnippet`-Regeln hat, wird die `nosnippet`-Regel gelten.
Indexierungsregeln werden nicht entdeckt oder angewendet, wenn Pfade durch eine `robots.txt`-Datei vom Crawlen blockiert sind.

Einige Werte schließen sich gegenseitig aus, wie `index` und `noindex`, oder `follow` und `nofollow`.
In diesen Fällen ist das Verhalten des Crawlers undefiniert und kann variieren.

### Interaktion mit robots.txt

Wenn eine Ressource durch eine `robots.txt`-Datei vom Crawlen blockiert ist, werden alle Informationen über Indexierungs- oder Bedieneinstellungen, die mittels `<meta name="robots">` oder dem `X-Robots-Tag` HTTP-Header angegeben sind, nicht erkannt und daher ignoriert.

Eine Seite, die vom Crawlen blockiert ist, kann trotzdem indiziert werden, wenn sie von einem anderen Dokument referenziert wird (siehe die [`nofollow`](#nofollow)-Direktive).
Wenn Sie eine Seite aus Suchindizes entfernen möchten, wird `X-Robots-Tag: noindex` in der Regel funktionieren, jedoch muss ein Roboter die Seite zuerst erneut besuchen, um die `X-Robots-Tag`-Regel zu erkennen.

## Beispiele

### Verwendung von X-Robots-Tag

Der folgende `X-Robots-Tag`-Header fügt `noindex` hinzu und fordert Crawler auf, diese Seite, das Medium oder die Ressource nicht in Suchergebnissen anzuzeigen:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noindex
```

### Mehrere Header

Die folgende Antwort hat zwei `X-Robots-Tag`-Header, jeweils mit einer angegebenen Indexierungsregel:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noimageindex
X-Robots-Tag: unavailable_after: Wed, 03 Dec 2025 13:09:53 GMT
```

### Spezifizierung von Benutzeragenten

Es ist möglich zu spezifizieren, auf welchen Benutzeragenten die Regeln angewendet werden sollen.
Das folgende Beispiel enthält zwei `X-Robots-Tag`-Header, die `googlebot` auffordern, den Links auf dieser Seite nicht zu folgen, und einem fiktiven `BadBot`-Crawler, die Seite nicht zu indizieren oder Links darauf zu verfolgen:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow
X-Robots-Tag: googlebot: nofollow
```

In der untenstehenden Antwort sind die gleichen Indexierungsregeln definiert, jedoch in einem einzigen Header.
Jede Indexierungsregel wird auf den Benutzeragenten angewendet, der hinter ihr angegeben ist:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow, googlebot: nofollow
```

Für Situationen, in denen mehrere Crawler zusammen mit unterschiedlichen Regeln angegeben sind, verwendet die Suchmaschine die Summe der negativen Regeln.
Zum Beispiel:

```http
X-Robots-Tag: nofollow
X-Robots-Tag: googlebot: noindex
```

Die Seite, die diese Header enthält, wird als mit einer `noindex, nofollow`-Regel interpretiert, wenn sie von `googlebot` gecrawlt wird.

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation.

## Siehe auch

- {{Glossary("robots.txt", "robots.txt")}}
- {{Glossary("Search_engine", "Suchmaschine")}}
- [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) HTML-Element ("robots tag")
- [robots.txt-Konfiguration](/de/docs/Web/Security/Practical_implementation_guides/Robots_txt) Sicherheitsleitfaden
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [Verwendung des X-Robots-Tag HTTP-Headers](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#xrobotstag) auf developers.google.com
