---
title: X-Robots-Tag header
short-title: X-Robots-Tag
slug: Web/HTTP/Reference/Headers/X-Robots-Tag
l10n:
  sourceCommit: a3693d282028046f4e0dadf0b1aa068b407d1158
---

{{HTTPSidebar}}

Der **`X-Robots-Tag`** {{Glossary("response_header", "Response-Header")}} definiert, wie {{Glossary("Crawler", "Crawler")}} URLs indexieren sollen. Obwohl nicht Teil einer Spezifikation, ist es eine de-facto Standardmethode für die Kommunikation mit Suchbots, Webcrawlern und ähnlichen Benutzeragenten. Suchbezogene Crawler verwenden die Regeln aus dem `X-Robots-Tag`-Header, um festzulegen, wie Webseiten oder andere Ressourcen in Suchergebnissen präsentiert werden.

Indexierungsregeln werden in einem `X-Robots-Tag`-Header oder einem [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) HTML-Element (oft als "robots tag" bezeichnet) definiert und werden entdeckt, wenn eine URL gecrawlt wird. Das Festlegen von Indexierungsregeln in einem HTTP-Header ist nützlich für Nicht-HTML-Dokumente wie Bilder, PDFs oder andere Medien.

> [!NOTE]
> Nur kooperative Roboter halten sich an diese Regeln, und ein Crawler muss zuerst auf die Ressource zugreifen, um Header und Metaelemente zu lesen (siehe [Interaktion mit robots.txt](#interaktion_mit_robots.txt)). Wenn Sie den Bandbreitenverbrauch durch Crawler verhindern möchten, ist eine restriktive {{Glossary("robots.txt", "robots.txt")}}-Datei effektiver als Indexierungsregeln, da sie das Crawlen von Ressourcen blockiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Indexierungsregeln als Komma-separierte Liste:

```http
X-Robots-Tag: <indexing-rule>
X-Robots-Tag: <indexing-rule>, …, <indexing-ruleN>
```

Ein optionales `<bot-name>:` spezifiziert den Benutzeragenten, auf den die nachfolgenden Regeln angewendet werden sollen:

```http
X-Robots-Tag: <indexing-rule>, <bot-name>: <indexing-rule>
X-Robots-Tag: <bot-name>: <indexing-rule>, …, <indexing-ruleN>
```

Siehe [Festlegung von Benutzeragenten](#benutzeragenten_spezifizieren) für ein Beispiel.

## Direktiven

Jede der folgenden Indexierungsregeln kann verwendet werden:

- `all`
  - : Keine Einschränkungen für die Indexierung oder das Anzeigen in Suchergebnissen. Diese Regel ist der Standardwert und hat keine Wirkung, wenn sie explizit aufgeführt wird.
- `noindex`
  - : Diese Seite, Medien oder Ressource nicht in Suchergebnissen anzeigen. Wenn ausgelassen, können Seite, Medien oder Ressource indiziert und in Suchergebnissen angezeigt werden.
- `nofollow`
  - : Die Links auf dieser Seite nicht folgen. Wenn ausgelassen, können Suchmaschinen die Links auf der Seite verwenden, um diese verlinkten Seiten zu entdecken.
- `none`
  - : Entspricht `noindex, nofollow`.
- `nosnippet`
  - : Kein Textausschnitt oder Videovorschau in den Suchergebnissen für diese Seite anzeigen. Ein statisches Bild-Thumbnail (falls verfügbar) kann weiterhin sichtbar sein. Wenn ausgelassen, können Suchmaschinen basierend auf Informationen auf der Seite einen Textausschnitt und eine Videovorschau generieren. Um bestimmte Abschnitte Ihres Inhalts davon auszuschließen, in Snippets von Suchergebnissen zu erscheinen, verwenden Sie das [`data-nosnippet` HTML-Attribut](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#data-nosnippet-attr).
- `indexifembedded`
  - : Eine Suchmaschine darf den Inhalt einer Seite indexieren, wenn dieser auf einer anderen Seite durch iframes oder ähnliche HTML-Elemente eingebettet ist, trotz einer `noindex` Regel. `indexifembedded` hat nur eine Wirkung, wenn es von `noindex` begleitet wird.
- `max-snippet: <number>`
  - : Verwenden Sie maximal `<number>` Zeichen als Textauszug für dieses Suchergebnis. Wird ignoriert, wenn keine gültige `<number>` angegeben ist.
- `max-image-preview: <setting>`
  - : Die maximale Größe einer Bildvorschau für diese Seite in Suchergebnissen. Wenn ausgelassen, können Suchmaschinen eine Bildvorschau in der Standardgröße anzeigen. Wenn Sie nicht möchten, dass Suchmaschinen größere Thumbnail-Bilder verwenden, geben Sie einen `max-image-preview` Wert von `standard` oder `none` an. Werte umfassen:
    - `none`
      - : Keine Bildvorschau soll angezeigt werden.
    - `standard`
      - : Eine Standardbildvorschau kann angezeigt werden.
    - `large`
      - : Eine größere Bildvorschau, bis zur Breite des Ansichtsfensters, kann angezeigt werden.
- `max-video-preview: <number>`
  - : Verwenden Sie maximal `<number>` Sekunden als Videoausschnitt für Videos auf dieser Seite in Suchergebnissen. Wenn ausgelassen, können Suchmaschinen einen Videoausschnitt in Suchergebnissen anzeigen, und die Suchmaschine entscheidet, wie lange eine Vorschau sein kann. Wird ignoriert, wenn keine gültige `<number>` angegeben ist. Spezielle Werte sind wie folgt:
    - `0`
      - : Höchstens darf ein statisches Bild verwendet werden, in Übereinstimmung mit der Einstellung `max-image-preview`.
    - `-1`
      - : Kein Videolängenlimit.
- `notranslate`
  - : Keine Übersetzung dieser Seite in Suchergebnissen anbieten. Wenn ausgelassen, können Suchmaschinen den Suchergebnistitel und -auszug in die Sprache der Suchanfrage übersetzen.
- `noimageindex`
  - : Bilder auf dieser Seite nicht indexieren. Wenn ausgelassen, können Bilder auf der Seite indiziert und in Suchergebnissen angezeigt werden.
- `unavailable_after: <date/time>`

  - : Fordert an, diese Seite nach dem angegebenen `<date/time>` nicht mehr in Suchergebnissen anzuzeigen. Wird ignoriert, wenn kein gültiges `<date/time>` angegeben ist. Ein Datum muss in einem Format wie {{RFC("822")}}, {{RFC("850")}} oder ISO 8601 angegeben sein.

    Standardmäßig gibt es kein Ablaufdatum für Inhalte. Wenn ausgelassen, kann diese Seite auf unbestimmte Zeit in Suchergebnissen angezeigt werden. Crawler sollten die Crawlrate der URL erheblich verringern, nachdem das angegebene Datum und die Uhrzeit erreicht sind.

## Beschreibung

Indexierungsregeln über `<meta name="robots">` und `X-Robots-Tag` werden entdeckt, wenn eine URL gecrawlt wird. Die meisten Crawler unterstützen Regeln im `X-Robots-Tag` HTTP-Header, die in einem `<meta name="robots">`-Element verwendet werden können.

Bei widersprüchlichen Roboterregeln innerhalb des `X-Robots-Tag` oder zwischen dem `X-Robots-Tag` HTTP-Header und dem `<meta name="robots">`-Element gilt die restriktivere Regel. Zum Beispiel, wenn eine Seite sowohl `max-snippet:50` als auch `nosnippet` Regeln hat, wird die `nosnippet` Regel angewendet. Indexierungsregeln werden nicht entdeckt oder angewendet, wenn Pfade von einer `robots.txt`-Datei vom Crawlen ausgeschlossen sind.

Einige Werte schließen sich gegenseitig aus, wie `index` und `noindex`, oder `follow` und `nofollow`. In solchen Fällen ist das Verhalten des Crawlers undefiniert und kann variieren.

### Interaktion mit robots.txt

Wenn eine Ressource durch eine `robots.txt`-Datei vom Crawlen ausgeschlossen ist, werden keine Informationen über Indexierungs- oder Serviervorschriften, die mit `<meta name="robots">` oder dem `X-Robots-Tag` HTTP-Header angegeben sind, erkannt und daher ignoriert.

Eine Seite, die vom Crawlen ausgeschlossen ist, kann immer noch indiziert werden, wenn sie von einem anderen Dokument referenziert wird (siehe die [`nofollow`](#nofollow) Direktive). Wenn Sie eine Seite aus den Suchindizes entfernen möchten, funktioniert `X-Robots-Tag: noindex` typischerweise, aber ein Roboter muss zuerst die Seite erneut besuchen, um die `X-Robots-Tag`-Regel zu erkennen.

## Beispiele

### Verwendung des X-Robots-Tag

Der folgende `X-Robots-Tag`-Header fügt `noindex` hinzu und bittet Crawler, diese Seite, Medien oder Ressource nicht in Suchergebnissen anzuzeigen:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noindex
```

### Mehrere Header

Die folgende Antwort hat zwei `X-Robots-Tag`-Header, jeder mit einer festgelegten Indexierungsregel:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noimageindex
X-Robots-Tag: unavailable_after: Wed, 03 Dec 2025 13:09:53 GMT
```

### Benutzeragenten spezifizieren

Es ist möglich, anzugeben, auf welchen Benutzeragenten die Regeln angewendet werden sollen. Das folgende Beispiel enthält zwei `X-Robots-Tag`-Header, die `googlebot` bitten, die Links auf dieser Seite nicht zu folgen und dass ein fiktiver `BadBot` Crawler die Seite nicht indizieren oder irgendwelchen Links auf ihr folgen soll:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow
X-Robots-Tag: googlebot: nofollow
```

In der untenstehenden Antwort werden dieselben Indexierungsregeln definiert, jedoch in einem einzigen Header. Jede Indexierungsregel gilt für den Benutzeragenten, der dahinter angegeben ist:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow, googlebot: nofollow
```

In Fällen, in denen mehrere Crawler zusammen mit unterschiedlichen Regeln spezifiziert sind, wird die Suchmaschine die Summe der negativen Regeln verwenden. Zum Beispiel:

```http
X-Robots-Tag: nofollow
X-Robots-Tag: googlebot: noindex
```

Die Seite mit diesen Headern wird interpretiert, als hätte sie eine `noindex, nofollow` Regel, wenn sie von `googlebot` gecrawlt wird.

## Spezifikationen

Kein Teil einer aktuellen Spezifikation.

## Siehe auch

- {{Glossary("robots.txt", "robots.txt")}}
- {{Glossary("Search_engine", "Suchmaschine")}}
- [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) HTML-Element ("robots tag")
- [Konfiguration von robots.txt](/de/docs/Web/Security/Practical_implementation_guides/Robots_txt) Sicherheitsleitfaden
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [Verwendung des X-Robots-Tag HTTP-Headers](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#xrobotstag) auf developers.google.com
