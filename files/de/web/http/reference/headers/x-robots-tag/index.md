---
title: X-Robots-Tag header
short-title: X-Robots-Tag
slug: Web/HTTP/Reference/Headers/X-Robots-Tag
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der **`X-Robots-Tag`** {{Glossary("response_header", "Antwort-Header")}} definiert, wie {{Glossary("Crawler", "Crawler")}} URLs indexieren sollen. Obwohl er nicht Teil einer bestimmten Spezifikation ist, gilt er als de-facto Standardmethode zur Kommunikation mit Suchbots, Web-Crawlern und ähnlichen Benutzeragenten. Suchbezogene Crawler verwenden die Regeln aus dem `X-Robots-Tag` Header, um zu bestimmen, wie Webseiten oder andere Ressourcen in Suchergebnissen angezeigt werden sollen.

Indexierungsregeln werden in einem `X-Robots-Tag` Header oder einem [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) HTML-Element (oft als "robots tag" bezeichnet) definiert und werden entdeckt, wenn eine URL gecrawlt wird. Das Festlegen von Indexierungsregeln in einem HTTP-Header ist nützlich für nicht-HTML-Dokumente wie Bilder, PDFs oder andere Medien.

> [!NOTE]
> Nur kooperative Roboter befolgen diese Regeln, und ein Crawler muss zuerst auf die Ressource zugreifen, um Header und Meta-Elemente zu lesen (siehe [Interaktion mit robots.txt](#interaktion_mit_robots.txt)). Wenn Sie den Bandbreitenverbrauch durch Crawler verhindern möchten, ist eine restriktive {{Glossary("robots.txt", "robots.txt")}} Datei effektiver als Indexierungsregeln, da sie das Crawlen von Ressourcen blockiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
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

Sehen Sie [Benutzeragenten spezifizieren](#spezifizieren_von_benutzeragenten) für ein Beispiel.

## Direktiven

Jede der folgenden Indexierungsregeln kann verwendet werden:

- `all`
  - : Keine Einschränkungen für die Indexierung oder Darstellung in Suchergebnissen.
    Diese Regel ist der Standardwert und hat keine Wirkung, wenn sie explizit aufgeführt wird.
- `noindex`
  - : Diese Seite, dieses Medium oder diese Ressource nicht in Suchergebnissen anzeigen.
    Wenn weggelassen, kann die Seite, das Medium oder die Ressource indexiert und in Suchergebnissen angezeigt werden.
- `nofollow`
  - : Die Links auf dieser Seite nicht folgen.
    Wenn weggelassen, können Suchmaschinen die Links auf der Seite verwenden, um die verlinkten Seiten zu entdecken.
- `none`
  - : Entspricht `noindex, nofollow`.
- `nosnippet`
  - : Kein Textsnippet oder Videovorschau in den Suchergebnissen für diese Seite anzeigen.
    Ein statisches Bild-Thumbnail (falls verfügbar) kann weiterhin sichtbar sein.
    Wenn weggelassen, können Suchmaschinen basierend auf Informationen auf der Seite ein Textsnippet und eine Videovorschau generieren.
    Um bestimmte Abschnitte Ihres Inhalts von Suchergebnis-Snippets auszuschließen, verwenden Sie das [`data-nosnippet` HTML-Attribut](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#data-nosnippet-attr).
- `indexifembedded`
  - : Eine Suchmaschine darf den Inhalt einer Seite indexieren, wenn er durch iframes oder ähnliche HTML-Elemente in eine andere Seite eingebettet ist, trotz einer `noindex`-Regel.
    `indexifembedded` hat nur Wirkung, wenn es von `noindex` begleitet wird.
- `max-snippet: <number>`
  - : Verwenden Sie maximal `<number>` Zeichen als Text-Snippet für dieses Suchergebnis.
    Wird ignoriert, wenn keine gültige `<number>` angegeben wird.
- `max-image-preview: <setting>`
  - : Die maximale Größe einer Bildvorschau für diese Seite in einem Suchergebnis.
    Wenn weggelassen, können Suchmaschinen eine Bildvorschau in der Standardgröße anzeigen.
    Wenn Sie nicht möchten, dass Suchmaschinen größere Thumbnail-Bilder verwenden, spezifizieren Sie einen `max-image-preview` Wert von `standard` oder `none`. Mögliche Werte sind:
    - `none`
      - : Es soll keine Bildvorschau angezeigt werden.
    - `standard`
      - : Eine Standard-Bildvorschau darf angezeigt werden.
    - `large`
      - : Eine größere Bildvorschau, bis zur Breite des Ansichtsfensters, darf angezeigt werden.
- `max-video-preview: <number>`
  - : Verwenden Sie maximal `<number>` Sekunden als Video-Snippet für Videos auf dieser Seite in Suchergebnissen.
    Wenn weggelassen, können Suchmaschinen ein Video-Snippet in Suchergebnissen anzeigen, und die Suchmaschine entscheidet, wie lange eine Vorschau sein darf.
    Wird ignoriert, wenn keine gültige `<number>` angegeben wird.
    Spezielle Werte sind:
    - `0`
      - : Maximal darf ein statisches Bild verwendet werden, gemäß der `max-image-preview` Einstellung.
    - `-1`
      - : Keine Videolängenbeschränkung.
- `notranslate`
  - : Bieten Sie keine Übersetzung dieser Seite in Suchergebnissen an.
    Wenn weggelassen, können Suchmaschinen den Titel und das Snippet des Suchergebnisses in die Sprache der Suchanfrage übersetzen.
- `noimageindex`
  - : Bilder auf dieser Seite nicht indexieren.
    Wenn weggelassen, können die Bilder auf der Seite indexiert und in Suchergebnissen angezeigt werden.
- `unavailable_after: <date/time>`
  - : Fordert, diese Seite nach dem angegebenen `<date/time>` nicht mehr in Suchergebnissen anzuzeigen.
    Wird ignoriert, wenn kein gültiges `<date/time>` angegeben wird.
    Ein Datum muss in einem Format wie {{RFC("822")}}, {{RFC("850")}} oder ISO 8601 angegeben werden.

    Standardmäßig gibt es kein Ablaufdatum für Inhalte.
    Wenn weggelassen, kann diese Seite unbegrenzt in Suchergebnissen angezeigt werden.
    Crawler sollten die Crawlraten der URL nach dem angegebenen Datum und Uhrzeit erheblich verringern.

## Beschreibung

Indexierungsregeln über `<meta name="robots">` und `X-Robots-Tag` werden entdeckt, wenn eine URL gecrawlt wird. Die meisten Crawler unterstützen Regeln im `X-Robots-Tag` HTTP-Header, die in einem `<meta name="robots">` Element verwendet werden können.

Im Falle widersprüchlicher Robot-Regeln innerhalb des `X-Robots-Tag` oder zwischen dem `X-Robots-Tag` HTTP-Header und dem `<meta name="robots">` Element gilt die restriktivere Regel. Zum Beispiel, wenn eine Seite sowohl `max-snippet:50` als auch `nosnippet` Regeln hat, wird die `nosnippet` Regel angewendet. Indexierungsregeln werden nicht entdeckt oder angewendet, wenn Pfade durch eine `robots.txt` Datei vom Crawlen blockiert werden.

Einige Werte schließen sich gegenseitig aus, wie `index` und `noindex`, oder `follow` und `nofollow`. In diesen Fällen ist das Verhalten des Crawlers undefiniert und kann variieren.

### Interaktion mit robots.txt

Wenn eine Ressource durch eine `robots.txt` Datei vom Crawlen blockiert ist, werden alle Informationen über Indexierungs- oder Bereitstellungsregeln, die mit `<meta name="robots">` oder dem `X-Robots-Tag` HTTP-Header festgelegt sind, nicht erkannt und somit ignoriert.

Eine Seite, die vom Crawlen blockiert ist, kann dennoch indexiert werden, wenn sie von einem anderen Dokument referenziert wird (siehe die [`nofollow`](#nofollow) Direktive). Wenn Sie eine Seite aus den Suchindizes entfernen möchten, funktioniert `X-Robots-Tag: noindex` normalerweise, aber ein Roboter muss die Seite zuerst erneut besuchen, um die `X-Robots-Tag` Regel zu erkennen.

## Beispiele

### Verwendung des X-Robots-Tag

Der folgende `X-Robots-Tag` Header fügt `noindex` hinzu, um Crawler aufzufordern, diese Seite, Medien oder Ressource nicht in Suchergebnissen anzuzeigen:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noindex
```

### Mehrere Header

Die folgende Antwort hat zwei `X-Robots-Tag` Header, von denen jeder eine Indexierungsregel spezifiziert:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noimageindex
X-Robots-Tag: unavailable_after: Wed, 03 Dec 2025 13:09:53 GMT
```

### Spezifizieren von Benutzeragenten

Es ist möglich, zu spezifizieren, auf welche Benutzeragenten die Regeln angewendet werden sollen. Das folgende Beispiel enthält zwei `X-Robots-Tag` Header, die `googlebot` auffordern, die Links auf dieser Seite nicht zu folgen, und einen fiktiven `BadBot` Crawler, die Seite weder zu indexieren noch den Links zu folgen:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow
X-Robots-Tag: googlebot: nofollow
```

In der untenstehenden Antwort sind dieselben Indexierungsregeln definiert, aber in einem einzigen Header. Jede Indexierungsregel gilt für den Benutzeragenten, der dahinter angegeben ist:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow, googlebot: nofollow
```

Bei Situationen, in denen mehrere Crawler mit unterschiedlichen Regeln angegeben sind, verwendet die Suchmaschine die Summe der negativen Regeln. Zum Beispiel:

```http
X-Robots-Tag: nofollow
X-Robots-Tag: googlebot: noindex
```

Die Seite mit diesen Headern wird als Regel `noindex, nofollow` interpretiert, wenn sie von `googlebot` gecrawlt wird.

## Spezifikationen

Teil keiner aktuellen Spezifikation.

## Siehe auch

- {{Glossary("robots.txt", "robots.txt")}}
- {{Glossary("Search_engine", "Suchmaschine")}}
- [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) HTML-Element ("robots tag")
- [robots.txt-Konfiguration](/de/docs/Web/Security/Practical_implementation_guides/Robots_txt) Sicherheitsleitfaden
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [Verwendung des X-Robots-Tag HTTP-Headers](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#xrobotstag) auf developers.google.com
