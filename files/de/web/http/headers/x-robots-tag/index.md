---
title: X-Robots-Tag
slug: Web/HTTP/Headers/X-Robots-Tag
l10n:
  sourceCommit: 24d8a34da576f86b10923e426f66df48ab6201b9
---

{{HTTPSidebar}}

Der **`X-Robots-Tag`** {{Glossary("response_header", "Antwort-Header")}} definiert, wie {{Glossary("Crawler", "Crawler")}} URLs indexieren sollten. Obwohl er nicht Teil einer Spezifikation ist, ist er eine De-facto-Standardmethode zur Kommunikation mit Suchbots, Webcrawlern und ähnlichen Benutzeragenten. Suchbezogene Crawler verwenden die Regeln aus dem `X-Robots-Tag` Header, um anzupassen, wie Webseiten oder andere Ressourcen in den Suchergebnissen präsentiert werden.

Indizierungsregeln, die über `<meta name="robots">` Elemente und `X-Robots-Tag` Header definiert sind, werden entdeckt, wenn eine URL gecrawlt wird. Das Angeben von Indizierungsregeln in einem HTTP-Header ist nützlich für nicht-HTML-Dokumente wie Bilder, PDFs oder andere Medien.

> [!NOTE]
> Nur kooperative Roboter befolgen diese Regeln, und ein Crawler muss dennoch auf die Ressource zugreifen, um Header und Meta-Elemente zu lesen (siehe [Interaktion mit robots.txt](#interaktion_mit_robots.txt)).
> Wenn Sie den Bandbreitenverbrauch durch Crawler verhindern möchten, ist eine restriktive {{Glossary("robots.txt", "robots.txt")}} Datei effektiver als Indizierungsregeln, da sie Ressourcen vollständig vom Crawlen ausschließt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Indizierungsregeln als kommagetrennte Liste:

```http
X-Robots-Tag: <indexing-rule>
X-Robots-Tag: <indexing-rule>, …, <indexing-ruleN>
```

Ein optionales `<bot-name>:` gibt an, auf welchen Benutzeragenten die nachfolgenden Regeln angewendet werden sollen:

```http
X-Robots-Tag: <indexing-rule>, <bot-name>: <indexing-rule>
X-Robots-Tag: <bot-name>: <indexing-rule>, …, <indexing-ruleN>
```

Siehe [Benutzeragenten spezifizieren](#benutzeragenten_spezifizieren) für ein Beispiel.

## Direktiven

Jede der folgenden Indizierungsregeln kann verwendet werden:

- `all`
  - : Keine Beschränkungen für das Indizieren oder Darstellen in Suchergebnissen.
    Diese Regel ist der Standardwert und hat keine Wirkung, wenn sie explizit aufgeführt ist.
- `noindex`
  - : Diese Seite, Medien oder Ressource nicht in Suchergebnissen anzeigen.
    Wenn diese Regel weggelassen wird, kann die Seite, das Medium oder die Ressource indiziert und in Suchergebnissen angezeigt werden.
- `nofollow`
  - : Die Links auf dieser Seite nicht folgen.
    Wenn diese Regel weggelassen wird, können Suchmaschinen die Links auf der Seite verwenden, um die verlinkten Seiten zu entdecken.
- `none`
  - : Entspricht `noindex, nofollow`.
- `nosnippet`
  - : Kein Textausschnitt oder Video-Vorschau in den Suchergebnissen für diese Seite anzeigen.
    Ein statisches Bild-Thumbnail (falls verfügbar) kann dennoch sichtbar sein.
    Wenn diese Regel weggelassen wird, können Suchmaschinen anhand der Informationen auf der Seite einen Textausschnitt und eine Video-Vorschau generieren.
    Um bestimmte Abschnitte Ihres Inhalts von Suchergebnis-Snippets auszuschließen, verwenden Sie das [`data-nosnippet` HTML-Attribut](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#data-nosnippet-attr).
- `indexifembedded`
  - : Eine Suchmaschine darf den Inhalt einer Seite indexieren, wenn er in eine andere Seite eingebettet ist, zum Beispiel durch iframes oder ähnliche HTML-Elemente, trotz einer `noindex`-Regel.
    `indexifembedded` hat nur dann eine Wirkung, wenn es von `noindex` begleitet wird.
- `max-snippet: <number>`
  - : Verwenden Sie maximal `<number>` Zeichen als textlichen Ausschnitt für dieses Suchergebnis.
    Wird ignoriert, wenn keine gültige `<number>` angegeben ist.
- `max-image-preview: <setting>`
  - : Die maximale Größe einer Bildvorschau für diese Seite in einem Suchergebnis.
    Wenn diese Regel weggelassen wird, können Suchmaschinen eine Bildvorschau in der Standardgröße anzeigen.
    Wenn Sie nicht möchten, dass Suchmaschinen größere Vorschaubilder verwenden, geben Sie einen `max-image-preview` Wert von `standard` oder `none` an. Mögliche Werte sind:
    - `none`
      - : Keine Bildvorschau soll angezeigt werden.
    - `standard`
      - : Eine Standard-Bildvorschau kann angezeigt werden.
    - `large`
      - : Eine größere Bildvorschau, bis zur Breite des Viewports, kann angezeigt werden.
- `max-video-preview: <number>`
  - : Verwenden Sie maximal `<number>` Sekunden als Video-Ausschnitt für Videos auf dieser Seite in Suchergebnissen.
    Wenn diese Regel weggelassen wird, können Suchmaschinen einen Video-Ausschnitt in Suchergebnissen anzeigen, und die Suchmaschine entscheidet, wie lang eine Vorschau sein darf.
    Wird ignoriert, wenn keine gültige `<number>` angegeben ist.
    Besondere Werte sind wie folgt:
    - `0`
      - : Es darf höchstens ein statisches Bild verwendet werden, in Übereinstimmung mit der `max-image-preview` Einstellung.
    - `-1`
      - : Keine Begrenzung der Videolänge.
- `notranslate`
  - : Keine Übersetzung dieser Seite in Suchergebnissen anbieten.
    Wenn diese Regel weggelassen wird, können Suchmaschinen den Titel und den Ausschnitt des Suchergebnisses in die Sprache der Suchanfrage übersetzen.
- `noimageindex`
  - : Bilder auf dieser Seite nicht indexieren.
    Wenn diese Regel weggelassen wird, können die Bilder auf der Seite indiziert und in Suchergebnissen angezeigt werden.
- `unavailable_after: <date/time>`

  - : Fordert, dass diese Seite nach dem angegebenen `<date/time>` nicht mehr in den Suchergebnissen angezeigt wird.
    Wird ignoriert, wenn kein gültiges `<date/time>` angegeben ist.
    Ein Datum muss in einem Format wie {{RFC("822")}}, {{RFC("850")}}, oder ISO 8601 angegeben werden.

    Standardmäßig gibt es kein Ablaufdatum für Inhalte.
    Wenn weggelassen, kann diese Seite unbegrenzt in Suchergebnissen angezeigt werden.
    Crawler sollten die Crawling-Rate der URL nach dem angegebenen Datum und der Uhrzeit erheblich reduzieren.

## Beschreibung

Indizierungsregeln über `<meta name="robots">` und `X-Robots-Tag` werden entdeckt, wenn eine URL gecrawlt wird. Die meisten Crawler unterstützen Regeln im `X-Robots-Tag` HTTP-Header, die in einem `<meta name="robots">` Element verwendet werden können.

Im Fall von widersprüchlichen Robot-Regeln innerhalb des `X-Robots-Tag` oder zwischen dem `X-Robots-Tag` HTTP-Header und dem `<meta name="robots">` Element gilt die restriktivere Regel. Beispielsweise, wenn eine Seite sowohl `max-snippet:50` als auch `nosnippet` Regeln hat, wird die `nosnippet` Regel angewendet. Indizierungsregeln werden nicht entdeckt oder angewendet, wenn Pfade durch eine `robots.txt` Datei vom Crawlen ausgeschlossen sind.

Einige Werte sind gegenseitig ausschließend, wie `index` und `noindex`, oder `follow` und `nofollow`. In diesen Fällen ist das Verhalten des Crawlers undefiniert und kann variieren.

### Interaktion mit robots.txt

Wenn eine Ressource durch eine `robots.txt` Datei vom Crawlen ausgeschlossen ist, werden alle Informationen über Indizierungs- oder Serviceregeln, die mit `<meta name="robots">` oder dem `X-Robots-Tag` HTTP-Header angegeben werden, nicht entdeckt und daher ignoriert.

Eine Seite, die vom Crawlen ausgeschlossen ist, kann dennoch indexiert werden, wenn sie aus einem anderen Dokument referenziert wird (siehe die [`nofollow`](#nofollow) Direktive). Wenn Sie eine Seite aus Suchindizes entfernen möchten, funktioniert `X-Robots-Tag: noindex` in der Regel, jedoch muss ein Roboter die Seite zunächst erneut besuchen, um die `X-Robots-Tag` Regel zu erkennen.

## Beispiele

### Verwendung von X-Robots-Tag

Der folgende `X-Robots-Tag` Header fügt `noindex` hinzu und bittet Crawler, diese Seite, Medien oder Ressource nicht in Suchergebnissen anzuzeigen:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noindex
```

### Mehrere Header

Die folgende Antwort hat zwei `X-Robots-Tag` Header, jeweils mit einer festgelegten Indizierungsregel:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noimageindex
X-Robots-Tag: unavailable_after: Wed, 03 Dec 2025 13:09:53 GMT
```

### Benutzeragenten spezifizieren

Es ist möglich anzugeben, auf welchen Benutzeragenten die Regeln anzuwenden sind. Das folgende Beispiel enthält zwei `X-Robots-Tag` Header, die `googlebot` bitten, die Links auf dieser Seite nicht zu folgen, und den fiktiven `BadBot` Crawler, die Seite weder zu indexieren noch die Links darauf zu folgen:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow
X-Robots-Tag: googlebot: nofollow
```

In der Antwort unten sind die gleichen Indizierungsregeln definiert, jedoch in einem einzigen Header. Jede Indizierungsregel gilt für den Benutzeragenten, der dahinter angegeben ist:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow, googlebot: nofollow
```

In Situationen, in denen mehrere Crawler zusammen mit unterschiedlichen Regeln angegeben sind, verwendet die Suchmaschine die Summe der negativen Regeln. Zum Beispiel:

```http
X-Robots-Tag: nofollow
X-Robots-Tag: googlebot: noindex
```

Die Seite, die diese Header enthält, wird beim Crawling durch `googlebot` als mit `noindex, nofollow` Regel interpretiert.

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation.

## Siehe auch

- {{Glossary("Robots.txt", "Robots.txt")}}
- {{Glossary("Search_engine", "Suchmaschine")}}
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [Verwendung des X-Robots-Tag HTTP-Headers](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#xrobotstag) auf developers.google.com
