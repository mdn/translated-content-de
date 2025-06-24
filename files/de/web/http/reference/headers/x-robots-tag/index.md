---
title: X-Robots-Tag header
short-title: X-Robots-Tag
slug: Web/HTTP/Reference/Headers/X-Robots-Tag
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Der **`X-Robots-Tag`** {{Glossary("response_header", "Antwort-Header")}} definiert, wie {{Glossary("Crawler", "Crawler")}} URLs indexieren sollen. Obwohl nicht Teil einer offiziellen Spezifikation, ist es eine de-facto-Standardmethode zur Kommunikation mit Suchmaschinen-Bots, Webcrawlern und ähnlichen User Agents. Suchbezogene Crawler verwenden die Regeln des `X-Robots-Tag`-Headers, um anzupassen, wie Webseiten oder andere Ressourcen in den Suchergebnissen präsentiert werden.

Indexierungsregeln werden in einem `X-Robots-Tag`-Header oder einem [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) HTML-Element (oft als "robots tag" bezeichnet) definiert und werden entdeckt, wenn eine URL gecrawlt wird. Das Festlegen von Indexierungsregeln in einem HTTP-Header ist nützlich für nicht-HTML-Dokumente wie Bilder, PDFs oder andere Medien.

> [!NOTE]
> Nur kooperative Roboter befolgen diese Regeln, und ein Crawler muss zuerst auf die Ressource zugreifen, um Header und Meta-Elemente zu lesen (siehe [Interaktion mit robots.txt](#interaktion_mit_robots.txt)). Wenn Sie den Bandbreitenverbrauch durch Crawler verhindern möchten, ist eine restriktive {{Glossary("robots.txt", "robots.txt")}}-Datei effektiver als Indexierungsregeln, da sie Ressourcen vom Crawlen blockiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Indexierungsregeln als kommaseparierte Liste:

```http
X-Robots-Tag: <indexing-rule>
X-Robots-Tag: <indexing-rule>, …, <indexing-ruleN>
```

Ein optionaler `<bot-name>:` gibt den User Agent an, auf den die nachfolgenden Regeln angewendet werden sollen:

```http
X-Robots-Tag: <indexing-rule>, <bot-name>: <indexing-rule>
X-Robots-Tag: <bot-name>: <indexing-rule>, …, <indexing-ruleN>
```

Siehe [Spezifizieren von User Agents](#spezifizieren_von_user_agents) für ein Beispiel.

## Direktiven

Jede der folgenden Indexierungsregeln kann verwendet werden:

- `all`
  - : Keine Einschränkungen für das Indexieren oder Anzeigen in den Suchergebnissen. Diese Regel ist der Standardwert und hat keine Wirkung, wenn sie explizit aufgelistet wird.
- `noindex`
  - : Diese Seite, Medien oder Ressource nicht in den Suchergebnissen anzeigen. Wenn sie weggelassen wird, kann die Seite, Medien oder Ressource indiziert und in Suchergebnissen angezeigt werden.
- `nofollow`
  - : Den Links auf dieser Seite nicht folgen. Wenn sie weggelassen wird, können Suchmaschinen die Links auf der Seite verwenden, um jene verlinkten Seiten zu entdecken.
- `none`
  - : Entspricht `noindex, nofollow`.
- `nosnippet`
  - : Keinen Textausschnitt oder Video-Vorschau in den Suchergebnissen für diese Seite anzeigen. Ein statisches Bild-Thumbnail (falls verfügbar) kann dennoch sichtbar sein. Wenn sie weggelassen wird, können Suchmaschinen einen Textausschnitt und eine Video-Vorschau basierend auf auf der Seite gefundenen Informationen generieren. Um bestimmte Abschnitte Ihres Inhalts aus Suchergebnis-Snippets auszuschließen, verwenden Sie das [`data-nosnippet` HTML-Attribut](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#data-nosnippet-attr).
- `indexifembedded`
  - : Eine Suchmaschine darf den Inhalt einer Seite indexieren, wenn er durch iframes oder ähnliche HTML-Elemente in eine andere Seite eingebettet ist, trotz einer `noindex`-Regel. `indexifembedded` hat nur dann eine Wirkung, wenn es von `noindex` begleitet wird.
- `max-snippet: <number>`
  - : Verwenden Sie maximal `<number>` Zeichen als Textausschnitt für dieses Suchergebnis. Wird ignoriert, wenn keine gültige `<number>` angegeben ist.
- `max-image-preview: <setting>`
  - : Die maximale Größe einer Bildvorschau für diese Seite in Suchergebnissen. Wenn weggelassen, können Suchmaschinen eine Bildvorschau in der Standardgröße anzeigen. Wenn Sie nicht möchten, dass Suchmaschinen größere Thumbnail-Bilder verwenden, geben Sie einen `max-image-preview`-Wert von `standard` oder `none` an. Mögliche Werte sind:
    - `none`
      - : Keine Bildvorschau soll angezeigt werden.
    - `standard`
      - : Eine Standard-Bildvorschau darf angezeigt werden.
    - `large`
      - : Eine größere Bildvorschau, bis zu der Breite des Viewports, darf angezeigt werden.
- `max-video-preview: <number>`
  - : Verwenden Sie maximal `<number>` Sekunden als Video-Ausschnitt für Videos auf dieser Seite in Suchergebnissen. Wenn weggelassen, können Suchmaschinen einen Video-Ausschnitt in Suchergebnissen anzeigen, und die Suchmaschine entscheidet, wie lange eine Vorschau sein kann. Wird ignoriert, wenn keine gültige `<number>` angegeben ist. Besondere Werte sind:
    - `0`
      - : Maximal darf ein statisches Bild gemäß der `max-image-preview`-Einstellung verwendet werden.
    - `-1`
      - : Keine Videolängenbegrenzung.
- `notranslate`
  - : Kein Übersetzen dieser Seite in Suchergebnissen anbieten. Wenn weggelassen, können Suchmaschinen den Titel und das Snippet des Suchergebnisses in die Sprache der Suchanfrage übersetzen.
- `noimageindex`
  - : Die Bilder auf dieser Seite nicht indexieren. Wenn weggelassen, können die Bilder auf der Seite indiziert und in Suchergebnissen angezeigt werden.
- `unavailable_after: <date/time>`

  - : Ersucht darum, diese Seite nach dem angegebenen `<date/time>` nicht mehr in Suchergebnissen anzuzeigen. Wird ignoriert, wenn kein gültiges `<date/time>` angegeben ist. Ein Datum muss in einem Format wie {{RFC("822")}}, {{RFC("850")}}, oder ISO 8601 angegeben werden.

    Standardmäßig gibt es kein Ablaufdatum für Inhalte. Wenn weggelassen, kann diese Seite unbefristet in Suchergebnissen angezeigt werden. Crawler sollen die Crawlingrate der URL nach dem angegebenen Datum und Uhrzeit erheblich reduzieren.

## Beschreibung

Indexierungsregeln via `<meta name="robots">` und `X-Robots-Tag` werden entdeckt, wenn eine URL gecrawlt wird. Die meisten Crawler unterstützen Regeln im `X-Robots-Tag` HTTP-Header, die in einem `<meta name="robots">`-Element verwendet werden können.

Bei widersprüchlichen Roboterregeln innerhalb von `X-Robots-Tag` oder zwischen dem `X-Robots-Tag` HTTP-Header und dem `<meta name="robots">`-Element gilt die restriktivere Regel. Zum Beispiel, wenn eine Seite sowohl `max-snippet:50` als auch `nosnippet`-Regeln hat, wird die `nosnippet`-Regel angewendet. Indexierungsregeln werden nicht entdeckt oder angewendet, wenn Pfade durch eine `robots.txt`-Datei vom Crawlen blockiert sind.

Einige Werte schließen sich gegenseitig aus, wie `index` und `noindex`, oder `follow` und `nofollow`. In diesen Fällen ist das Verhalten des Crawlers undefiniert und kann variieren.

### Interaktion mit robots.txt

Wenn eine Ressource durch eine `robots.txt`-Datei vom Crawlen blockiert ist, dann werden Informationen über Indexierungs- oder Bereitstellungsregeln, die durch `<meta name="robots">` oder den `X-Robots-Tag` HTTP-Header spezifiziert werden, nicht erkannt und daher ignoriert.

Eine Seite, die vom Crawlen blockiert ist, kann dennoch indexiert werden, wenn sie von einem anderen Dokument referenziert wird (siehe die [`nofollow`](#nofollow)-Direktive). Wenn Sie eine Seite aus den Suchindizes entfernen möchten, funktioniert `X-Robots-Tag: noindex` in der Regel, aber ein Roboter muss die Seite zuerst erneut besuchen, um die `X-Robots-Tag`-Regel zu erkennen.

## Beispiele

### Verwendung von X-Robots-Tag

Der folgende `X-Robots-Tag`-Header fügt `noindex` hinzu, was Crawler auffordert, diese Seite, Medien oder Ressource nicht in Suchergebnissen anzuzeigen:

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

### Spezifizieren von User Agents

Es ist möglich zu spezifizieren, auf welchen User Agent die Regeln angewendet werden sollen. Das folgende Beispiel enthält zwei `X-Robots-Tag`-Header, die `googlebot` auffordern, den Links auf dieser Seite nicht zu folgen, und dass ein fiktiver `BadBot`-Crawler die Seite nicht indexiert oder Links darauf folgt:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow
X-Robots-Tag: googlebot: nofollow
```

In der unten stehenden Antwort sind dieselben Indexierungsregeln definiert, jedoch in einem einzigen Header. Jede Indexierungsregel gilt für den hinter ihr angegebenen User Agent:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow, googlebot: nofollow
```

In Situationen, in denen mehrere Crawler zusammen mit unterschiedlichen Regeln angegeben sind, wird die Suchmaschine die Summe der negativen Regeln verwenden. Zum Beispiel:

```http
X-Robots-Tag: nofollow
X-Robots-Tag: googlebot: noindex
```

Die Seite mit diesen Headern wird als mit einer `noindex, nofollow`-Regel interpretiert, wenn sie von `googlebot` gecrawlt wird.

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation.

## Siehe auch

- {{Glossary("robots.txt", "robots.txt")}}
- {{Glossary("Search_engine", "Suchmaschine")}}
- [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) HTML-Element ("Robots-Tag")
- [robots.txt-Konfiguration](/de/docs/Public/Web/Security/Practical_implementation_guides/Robots_txt) Sicherheitsleitfaden
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [Verwendung des X-Robots-Tag HTTP-Headers](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#xrobotstag) auf developers.google.com
