---
title: X-Robots-Tag header
short-title: X-Robots-Tag
slug: Web/HTTP/Reference/Headers/X-Robots-Tag
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der **`X-Robots-Tag`** {{Glossary("response_header", "Antwort-Header")}} definiert, wie {{Glossary("Crawler", "Crawler")}} URLs indexieren sollen.
Obwohl nicht Teil einer offiziellen Spezifikation, ist es ein de-facto Standardverfahren zur Kommunikation mit Suchmaschinen-Bots, Web-Crawlers und ähnlichen Benutzeragenten.
Suchmaschinenbezogene Crawler nutzen die Regeln im `X-Robots-Tag`-Header, um anzupassen, wie Webseiten oder andere Ressourcen in den Suchergebnissen dargestellt werden.

Indexierungsregeln sind entweder in einem `X-Robots-Tag`-Header oder einem [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) HTML-Element (oft als "Robots-Tag" bezeichnet) definiert und werden entdeckt, wenn eine URL gecrawlt wird.
Das Spezifizieren von Indexierungsregeln in einem HTTP-Header ist nützlich für Nicht-HTML-Dokumente wie Bilder, PDFs oder andere Medien.

> [!NOTE]
> Nur kooperative Roboter befolgen diese Regeln, und ein Crawler muss zuerst auf die Ressource zugreifen, um Header und Meta-Elemente zu lesen (siehe [Interaktion mit robots.txt](#interaktion_mit_robots.txt)).
> Wenn Sie den Bandbreitenverbrauch durch Crawler verhindern möchten, ist eine restriktive {{Glossary("robots.txt", "robots.txt")}}-Datei effektiver als Indexierungsregeln, da sie Ressourcen vom Crawlen blockiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-Robots-Tag: <indexing-rule>
X-Robots-Tag: <indexing-rule>, …, <indexing-ruleN>
```

Ein optionales `<bot-name>:` gibt den Benutzeragenten an, auf den die folgenden Regeln angewendet werden sollen:

```http
X-Robots-Tag: <indexing-rule>, <bot-name>: <indexing-rule>
X-Robots-Tag: <bot-name>: <indexing-rule>, …, <indexing-ruleN>
```

Siehe [Spezifizieren von Benutzeragenten](#spezifizieren_von_benutzeragenten) für ein Beispiel.

## Direktiven

Folgende Indexierungsregeln können verwendet werden:

- `all`
  - : Keine Einschränkungen für die Indexierung oder Anzeige in Suchergebnissen.
    Diese Regel ist der Standardwert und hat keine Wirkung, wenn sie explizit aufgelistet ist.
- `noindex`
  - : Diese Seite, Medien oder Ressource nicht in Suchergebnissen anzeigen.
    Fehlt diese Regel, können die Seite, Medien oder Ressource indexiert und in Suchergebnissen angezeigt werden.
- `nofollow`
  - : Die Links auf dieser Seite nicht verfolgen.
    Fehlt diese Regel, können Suchmaschinen die Links auf der Seite verwenden, um die verlinkten Seiten zu entdecken.
- `none`
  - : Entspricht `noindex, nofollow`.
- `nosnippet`
  - : Kein Textsnippet oder Videovorschau in den Suchergebnissen für diese Seite anzeigen.
    Ein statisches Bildminiaturbild (falls vorhanden) kann weiterhin sichtbar sein.
    Fehlt diese Regel, können Suchmaschinen ein Textsnippet und eine Videovorschau basierend auf Informationen auf der Seite generieren.
    Um zu verhindern, dass bestimmte Abschnitte Ihres Inhalts in Suchergebnissnippets erscheinen, verwenden Sie das [`data-nosnippet` HTML-Attribut](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#data-nosnippet-attr).
- `indexifembedded`
  - : Eine Suchmaschine darf den Inhalt einer Seite indexieren, wenn diese in eine andere Seite eingebettet ist, z. B. über iframes oder ähnliche HTML-Elemente, trotz einer `noindex`-Regel.
    `indexifembedded` hat nur eine Wirkung, wenn es von `noindex` begleitet wird.
- `max-snippet: <number>`
  - : Verwenden Sie maximal `<number>` Zeichen als Textsnippet für dieses Suchergebnis.
    Wird ignoriert, wenn keine gültige `<number>` angegeben ist.
- `max-image-preview: <setting>`
  - : Die maximale Größe einer Bildvorschau für diese Seite in Suchergebnissen.
    Fehlt diese Regel, können Suchmaschinen eine Bildvorschau in der Standardgröße anzeigen.
    Wenn Sie nicht möchten, dass Suchmaschinen größere Miniaturbilder verwenden, geben Sie einen `max-image-preview`-Wert von `standard` oder `none` an. Werte sind unter anderem:
    - `none`
      - : Es wird keine Bildvorschau angezeigt.
    - `standard`
      - : Eine Standardbildvorschau darf angezeigt werden.
    - `large`
      - : Eine größere Bildvorschau bis zur Breite des Ansichtsfensters kann angezeigt werden.
- `max-video-preview: <number>`
  - : Verwenden Sie maximal `<number>` Sekunden als Videovorschau für Videos auf dieser Seite in Suchergebnissen.
    Wenn diese Regel fehlt, können Suchmaschinen eine Videovorschau in Suchergebnissen anzeigen, und die Suchmaschine entscheidet, wie lang eine Vorschau sein darf.
    Wird ignoriert, wenn keine gültige `<number>` angegeben ist.
    Spezielle Werte sind wie folgt:
    - `0`
      - : Höchstens ein statisches Bild darf verwendet werden, gemäß den `max-image-preview`-Einstellungen.
    - `-1`
      - : Keine Begrenzung der Videolänge.
- `notranslate`
  - : Keine Übersetzung dieser Seite in Suchergebnissen anbieten.
    Fehlt diese Regel, können Suchmaschinen den Suchergebnistitel und das Snippet in die Sprache der Suchanfrage übersetzen.
- `noimageindex`
  - : Bilder auf dieser Seite nicht indexieren.
    Fehlt diese Regel, können Bilder auf der Seite indexiert und in Suchergebnissen angezeigt werden.
- `unavailable_after: <date/time>`
  - : Fordert, dass diese Seite nach dem angegebenen `<date/time>` nicht mehr in Suchergebnissen angezeigt wird.
    Wird ignoriert, wenn kein gültiges `<date/time>` angegeben ist.
    Ein Datum muss in einem Format wie {{RFC("822")}}, {{RFC("850")}} oder ISO 8601 angegeben werden.

    Standardmäßig gibt es kein Ablaufdatum für Inhalte.
    Wenn diese Regel fehlt, kann diese Seite auf unbestimmte Zeit in Suchergebnissen angezeigt werden.
    Crawler erwarten eine deutliche Verringerung der Crawling-Frequenz der URL nach dem angegebenen Datum und der angegebenen Uhrzeit.

## Beschreibung

Indexierungsregeln über `<meta name="robots">` und `X-Robots-Tag` werden entdeckt, wenn eine URL gecrawlt wird.
Die meisten Crawler unterstützen Regeln im `X-Robots-Tag` HTTP-Header, die in einem `<meta name="robots">`-Element verwendet werden können.

Im Falle von widersprüchlichen Robot-Regeln im `X-Robots-Tag` oder zwischen dem `X-Robots-Tag` HTTP-Header und dem `<meta name="robots">`-Element gilt die restriktivere Regel.
Zum Beispiel, wenn eine Seite sowohl `max-snippet:50` als auch `nosnippet` Regeln hat, wird die `nosnippet`-Regel angewendet.
Indexierungsregeln werden nicht entdeckt oder angewendet, wenn Pfade durch eine `robots.txt`-Datei vom Crawlen blockiert sind.

Einige Werte sind gegenseitig ausschließend, wie `index` und `noindex`, oder `follow` und `nofollow`.
In diesen Fällen ist das Verhalten des Crawlers undefiniert und kann variieren.

### Interaktion mit robots.txt

Wenn eine Ressource durch eine `robots.txt`-Datei vom Crawlen blockiert ist, werden jegliche Informationen über Indexierungs- oder Bereitstellungsregeln, die mit `<meta name="robots">` oder dem `X-Robots-Tag` HTTP-Header spezifiziert sind, nicht erkannt und daher ignoriert.

Eine Seite, die vom Crawlen blockiert ist, kann dennoch indexiert werden, wenn sie von einem anderen Dokument referenziert wird (siehe die [`nofollow`](#nofollow) Direktive).
Wenn Sie eine Seite aus den Suchindizes entfernen möchten, funktioniert `X-Robots-Tag: noindex` normalerweise, aber ein Roboter muss die Seite zuerst erneut besuchen, um die `X-Robots-Tag`-Regel zu erkennen.

## Beispiele

### Verwendung des X-Robots-Tag

Der folgende `X-Robots-Tag`-Header fügt `noindex` hinzu, um Crawler zu bitten, diese Seite, Medien oder Ressource nicht in Suchergebnissen anzuzeigen:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noindex
```

### Mehrere Header

Die folgende Antwort hat zwei `X-Robots-Tag`-Header, von denen jeder eine Indexierungsregel spezifiziert:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noimageindex
X-Robots-Tag: unavailable_after: Wed, 03 Dec 2025 13:09:53 GMT
```

### Spezifizieren von Benutzeragenten

Es ist möglich anzugeben, auf welchen Benutzeragenten die Regeln angewendet werden sollen.
Das folgende Beispiel enthält zwei `X-Robots-Tag`-Header, die `googlebot` auffordern, die Links auf dieser Seite nicht zu verfolgen, und einen fiktiven `BadBot`-Crawler, die Seite weder zu indexieren noch irgendwelche Links darauf zu verfolgen:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow
X-Robots-Tag: googlebot: nofollow
```

In der unten stehenden Antwort sind die gleichen Indexierungsregeln definiert, jedoch in einem einzelnen Header.
Jede Indexierungsregel wird auf den Benutzeragenten angewendet, der dahinter angegeben ist:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow, googlebot: nofollow
```

In Situationen, in denen mehrere Crawler mit unterschiedlichen Regeln spezifiziert werden, verwendet die Suchmaschine die Summe der negativen Regeln.
Zum Beispiel:

```http
X-Robots-Tag: nofollow
X-Robots-Tag: googlebot: noindex
```

Die Seite, die diese Header enthält, wird interpretiert, als habe sie eine `noindex, nofollow` Regel, wenn sie von `googlebot` gecrawlt wird.

## Spezifikationen

Teil keiner aktuellen Spezifikation.

## Siehe auch

- {{Glossary("robots.txt", "robots.txt")}}
- {{Glossary("Search_engine", "Suchmaschine")}}
- [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) HTML-Element ("Robots-Tag")
- [robots.txt-Konfiguration](/de/docs/Web/Security/Practical_implementation_guides/Robots_txt) Sicherheitsleitfaden
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [Verwendung des X-Robots-Tag HTTP-Headers](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#xrobotstag) auf developers.google.com
