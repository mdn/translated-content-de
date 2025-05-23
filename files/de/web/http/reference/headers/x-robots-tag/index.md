---
title: X-Robots-Tag header
short-title: X-Robots-Tag
slug: Web/HTTP/Reference/Headers/X-Robots-Tag
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der **`X-Robots-Tag`** {{Glossary("response_header", "Antwortheader")}} definiert, wie {{Glossary("Crawler", "Crawler")}} URLs indexieren sollten. Obwohl er nicht Teil einer offiziellen Spezifikation ist, handelt es sich um eine de-facto Standardmethode zur Kommunikation mit Suchmaschinen-Bots, Webcrawlern und ähnlichen Benutzeragenten. Crawling-Programme für Suchmaschinen verwenden die Regeln aus dem `X-Robots-Tag`-Header, um die Darstellung von Webseiten oder anderen Ressourcen in Suchergebnissen anzupassen.

Indexierungsregeln, die über `<meta name="robots">`-Elemente und `X-Robots-Tag`-Header definiert werden, werden entdeckt, wenn eine URL gecrawlt wird. Das Festlegen von Indexierungsregeln in einem HTTP-Header ist nützlich für Nicht-HTML-Dokumente wie Bilder, PDFs oder andere Medien.

> [!NOTE]
> Nur kooperative Roboter befolgen diese Regeln, und ein Crawler muss dennoch auf die Ressource zugreifen, um Header und Meta-Elemente zu lesen (siehe [Interaktion mit robots.txt](#interaktion_mit_robots.txt)).
> Wenn Sie den Bandbreitenverbrauch durch Crawler verhindern möchten, ist eine restriktive {{Glossary("robots.txt", "robots.txt")}} Datei effektiver als Indexierungsregeln, da sie das vollständige Crawlen von Ressourcen verhindert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Indexierungsregeln als kommagetrennte Liste:

```http
X-Robots-Tag: <indexing-rule>
X-Robots-Tag: <indexing-rule>, …, <indexing-ruleN>
```

Ein optionaler `<bot-name>:` gibt an, für welchen Benutzeragent die nachfolgenden Regeln gelten sollen:

```http
X-Robots-Tag: <indexing-rule>, <bot-name>: <indexing-rule>
X-Robots-Tag: <bot-name>: <indexing-rule>, …, <indexing-ruleN>
```

Siehe [Benutzeragenten angeben](#benutzeragenten_angeben) für ein Beispiel.

## Direktiven

Es können alle der folgenden Indexierungsregeln verwendet werden:

- `all`
  - : Keine Beschränkungen für die Indexierung oder das Anzeigen in Suchergebnissen. Diese Regel ist der Standardwert und hat keine Wirkung, wenn sie explizit aufgeführt ist.
- `noindex`
  - : Diese Seite, diese Medien oder diese Ressource nicht in Suchergebnissen anzeigen. Wenn ausgelassen, können die Seite, die Medien oder die Ressource indexiert und in Suchergebnissen angezeigt werden.
- `nofollow`
  - : Den Links auf dieser Seite nicht folgen. Wenn ausgelassen, können Suchmaschinen die Links auf der Seite nutzen, um die verlinkten Seiten zu entdecken.
- `none`
  - : Entspricht `noindex, nofollow`.
- `nosnippet`
  - : Kein Textschnipsel oder Videovorschau in den Suchergebnissen für diese Seite anzeigen. Ein statisches Bildminiaturbild (falls verfügbar) kann weiterhin sichtbar sein. Wenn ausgelassen, können Suchmaschinen einen Textschnipsel und eine Videovorschau basierend auf Informationen auf der Seite generieren. Um bestimmte Abschnitte Ihres Inhalts von der Anzeige in Suchergebnis-Snippets auszuschließen, verwenden Sie das [`data-nosnippet` HTML-Attribut](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#data-nosnippet-attr).
- `indexifembedded`
  - : Eine Suchmaschine darf den Inhalt einer Seite indexieren, wenn sie in eine andere Seite über iframes oder ähnliche HTML-Elemente eingebettet ist, trotz einer `noindex`-Regel. `indexifembedded` hat nur eine Wirkung, wenn es von `noindex` begleitet wird.
- `max-snippet: <number>`
  - : Nur maximal `<number>` Zeichen als Textschnipsel für dieses Suchergebnis verwenden. Wird ignoriert, wenn keine gültige `<number>` angegeben ist.
- `max-image-preview: <setting>`
  - : Die maximale Größe einer Bildvorschau für diese Seite in Suchergebnissen. Wenn ausgelassen, können Suchmaschinen eine Bildvorschau in der Standardgröße anzeigen. Wenn Sie nicht möchten, dass Suchmaschinen größere Miniaturbilder verwenden, geben Sie einen `max-image-preview` Wert von `standard` oder `none` an. Mögliche Werte sind:
    - `none`
      - : Es wird keine Bildvorschau angezeigt.
    - `standard`
      - : Eine Standard-Bildvorschau kann angezeigt werden.
    - `large`
      - : Eine größere Bildvorschau, bis zur Breite des Ansichtsfensters, kann angezeigt werden.
- `max-video-preview: <number>`
  - : Nur maximal `<number>` Sekunden als Videoschnipsel für Videos auf dieser Seite in Suchergebnissen verwenden. Wenn ausgelassen, können Suchmaschinen einen Videoschnipsel in Suchergebnissen anzeigen, und die Suchmaschine bestimmt, wie lange eine Vorschau sein darf. Wird ignoriert, wenn keine gültige `<number>` angegeben ist. Spezielle Werte sind wie folgt:
    - `0`
      - : Im Maximum darf ein statisches Bild verwendet werden, entsprechend der `max-image-preview`-Einstellung.
    - `-1`
      - : Kein Videolängenlimit.
- `notranslate`
  - : Keine Übersetzung dieser Seite in Suchergebnissen anbieten. Wenn ausgelassen, können Suchmaschinen den Suchergebnistitel und das Snippet in die Sprache der Suchanfrage übersetzen.
- `noimageindex`
  - : Bilder auf dieser Seite nicht indexieren. Wenn ausgelassen, können Bilder auf der Seite indexiert und in Suchergebnissen angezeigt werden.
- `unavailable_after: <date/time>`

  - : Fordert an, diese Seite nach dem angegebenen `<date/time>` nicht mehr in Suchergebnissen anzuzeigen. Wird ignoriert, wenn kein gültiges `<date/time>` angegeben ist. Ein Datum muss in einem Format wie {{RFC("822")}}, {{RFC("850")}}, oder ISO 8601 angegeben werden.

    Standardmäßig gibt es kein Ablaufdatum für Inhalte. Wenn ausgelassen, kann diese Seite unbegrenzt in Suchergebnissen angezeigt werden. Crawler werden voraussichtlich die Crawling-Rate der URL erheblich nach dem angegebenen Datum und der Uhrzeit verringern.

## Beschreibung

Indexierungsregeln über `<meta name="robots">` und `X-Robots-Tag` werden entdeckt, wenn eine URL gecrawlt wird. Die meisten Crawler unterstützen Regeln im `X-Robots-Tag` HTTP-Header, die in einem `<meta name="robots">`-Element verwendet werden können.

Bei widersprüchlichen Roboterregeln innerhalb des `X-Robots-Tag` oder zwischen dem `X-Robots-Tag` HTTP-Header und dem `<meta name="robots">`-Element gilt die restriktivere Regel. Wenn eine Seite sowohl `max-snippet:50` als auch `nosnippet` Regeln hat, wird die `nosnippet` Regel angewendet. Indexierungsregeln werden nicht entdeckt oder angewendet, wenn Pfade durch eine `robots.txt` Datei vom Crawlen blockiert sind.

Einige Werte schließen sich gegenseitig aus, wie `index` und `noindex` oder `follow` und `nofollow`. In diesen Fällen ist das Verhalten des Crawlers undefiniert und kann variieren.

### Interaktion mit robots.txt

Wenn eine Ressource durch eine `robots.txt` Datei vom Crawlen blockiert wird, werden alle Informationen über Indexierungs- oder Bereitstellungsregeln, die über `<meta name="robots">` oder den `X-Robots-Tag` HTTP-Header festgelegt sind, nicht erkannt und daher ignoriert.

Eine Seite, die vom Crawlen blockiert ist, kann immer noch indexiert werden, wenn sie von einem anderen Dokument referenziert wird (siehe die [`nofollow`](#nofollow) Direktive). Wenn Sie eine Seite aus den Suchindizes entfernen möchten, funktioniert `X-Robots-Tag: noindex` in der Regel, aber ein Roboter muss die Seite zuerst erneut besuchen, um die `X-Robots-Tag` Regel zu erkennen.

## Beispiele

### Verwendung des X-Robots-Tag

Der folgende `X-Robots-Tag` Header fügt `noindex` hinzu und fordert Crawler auf, diese Seite, Medien oder Ressource nicht in Suchergebnissen anzuzeigen:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noindex
```

### Mehrere Header

Die folgende Antwort hat zwei `X-Robots-Tag` Header, jeweils mit einer angegebenen Indexierungsregel:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noimageindex
X-Robots-Tag: unavailable_after: Wed, 03 Dec 2025 13:09:53 GMT
```

### Benutzeragenten angeben

Es ist möglich, anzugeben, welchem Benutzeragent die Regeln gelten sollen. Das folgende Beispiel enthält zwei `X-Robots-Tag` Header, die `googlebot` darum bitten, den Links auf dieser Seite nicht zu folgen, und einen fiktiven `BadBot` Crawler, die Seite weder zu indexieren noch den Links darauf zu folgen:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow
X-Robots-Tag: googlebot: nofollow
```

In der folgenden Antwort sind dieselben Indexierungsregeln definiert, jedoch in einem einzigen Header. Jede Indexierungsregel gilt für den dahinter angegebenen Benutzeragenten:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow, googlebot: nofollow
```

In Fällen, in denen mehrere Crawler zusammen mit unterschiedlichen Regeln angegeben sind, verwendet die Suchmaschine die Summe der negativen Regeln. Zum Beispiel:

```http
X-Robots-Tag: nofollow
X-Robots-Tag: googlebot: noindex
```

Die Seite, die diese Header enthält, wird als Regel `noindex, nofollow` interpretiert, wenn sie von `googlebot` gecrawlt wird.

## Spezifikationen

Teil keiner aktuellen Spezifikation.

## Siehe auch

- {{Glossary("Robots.txt", "Robots.txt")}}
- {{Glossary("Search_engine", "Suchmaschine")}}
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [Verwendung des X-Robots-Tag HTTP-Headers](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#xrobotstag) auf developers.google.com
