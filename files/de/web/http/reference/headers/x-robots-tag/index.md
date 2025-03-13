---
title: X-Robots-Tag
slug: Web/HTTP/Reference/Headers/X-Robots-Tag
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der **`X-Robots-Tag`** {{Glossary("response_header", "Antwort-Header")}} definiert, wie {{Glossary("Crawler", "Crawler")}} URLs indexieren sollen.
Obwohl er nicht Teil einer offiziellen Spezifikation ist, ist er eine de-facto-standardisierte Methode zur Kommunikation mit Suchmaschinen-Bots, Web-Crawlern und ähnlichen User-Agenten.
Suchbezogene Crawler verwenden die Regeln aus dem `X-Robots-Tag`-Header, um festzulegen, wie Webseiten oder andere Ressourcen in den Suchergebnissen präsentiert werden.

Indizierungsregeln, die über `<meta name="robots">`-Elemente und `X-Robots-Tag`-Header definiert sind, werden entdeckt, wenn eine URL gecrawlt wird. Das Angeben von Indizierungsregeln in einem HTTP-Header ist nützlich für nicht-HTML-Dokumente wie Bilder, PDFs oder andere Medien.

> [!NOTE]
> Nur kooperative Roboter befolgen diese Regeln, und ein Crawler muss dennoch die Ressource aufrufen, um Header und Meta-Elemente zu lesen (siehe [Interaktion mit robots.txt](#interaktion_mit_robots.txt)).
> Wenn Sie den Bandbreitenverbrauch durch Crawler verhindern möchten, ist eine restriktive {{Glossary("robots.txt", "robots.txt")}}-Datei effektiver als Indizierungsregeln, da sie das vollständige Crawlen von Ressourcen blockiert.

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

Eine oder mehrere Indizierungsregeln als kommaseparierte Liste:

```http
X-Robots-Tag: <indexing-rule>
X-Robots-Tag: <indexing-rule>, …, <indexing-ruleN>
```

Ein optionaler `<bot-name>:` spezifiziert den User-Agent, auf den die nachfolgenden Regeln angewendet werden sollen:

```http
X-Robots-Tag: <indexing-rule>, <bot-name>: <indexing-rule>
X-Robots-Tag: <bot-name>: <indexing-rule>, …, <indexing-ruleN>
```

Siehe [Spezifizieren von User-Agents](#spezifizieren_von_user-agents) für ein Beispiel.

## Direktiven

Jede der folgenden Indizierungsregeln kann verwendet werden:

- `all`
  - : Keine Einschränkungen für das Indizieren oder Anzeigen in den Suchergebnissen.
    Diese Regel ist der Standardwert und hat keine Wirkung, wenn sie explizit aufgeführt wird.
- `noindex`
  - : Diese Seite, das Medium oder die Ressource nicht in Suchergebnissen anzeigen.
    Wenn nicht angegeben, können die Seite, das Medium oder die Ressource indiziert und in Suchergebnissen angezeigt werden.
- `nofollow`
  - : Die Links auf dieser Seite nicht verfolgen.
    Wenn nicht angegeben, können Suchmaschinen die Links auf der Seite verwenden, um diese verlinkten Seiten zu entdecken.
- `none`
  - : Entspricht `noindex, nofollow`.
- `nosnippet`
  - : Keinen Textausschnitt oder Video-Vorschau in den Suchergebnissen für diese Seite anzeigen.
    Ein statisches Bildminiaturbild (falls verfügbar) kann noch sichtbar sein.
    Wenn nicht angegeben, können Suchmaschinen einen Textausschnitt und eine Video-Vorschau basierend auf Informationen auf der Seite erstellen.
    Um bestimmte Abschnitte Ihres Inhalts von der Anzeige in Suchergebnis-Ausschnitten auszuschließen, verwenden Sie das [`data-nosnippet` HTML-Attribut](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#data-nosnippet-attr).
- `indexifembedded`
  - : Eine Suchmaschine darf den Inhalt einer Seite indizieren, wenn er in eine andere Seite durch `iframes` oder ähnliche HTML-Elemente eingebettet ist, trotz einer `noindex`-Regel.
    `indexifembedded` hat nur eine Wirkung, wenn es von `noindex` begleitet wird.
- `max-snippet: <number>`
  - : Verwenden Sie maximal `<number>` Zeichen als Textausschnitt für dieses Suchergebnis.
    Wird ignoriert, wenn keine gültige `<number>` angegeben ist.
- `max-image-preview: <setting>`
  - : Die maximale Größe einer Bildvorschau für diese Seite in Suchergebnissen.
    Wenn nicht angegeben, können Suchmaschinen eine Bildvorschau in Standardgröße anzeigen.
    Wenn Sie nicht möchten, dass Suchmaschinen größere Miniaturbilder verwenden, geben Sie einen `max-image-preview`-Wert von `standard` oder `none` an. Werte umfassen:
    - `none`
      - : Es soll keine Bildvorschau angezeigt werden.
    - `standard`
      - : Eine Standard-Bildvorschau kann angezeigt werden.
    - `large`
      - : Eine größere Bildvorschau, bis zur Breite des Ansichtsfensters, kann angezeigt werden.
- `max-video-preview: <number>`
  - : Verwenden Sie maximal `<number>` Sekunden als Videoausschnitt für Videos auf dieser Seite in Suchergebnissen.
    Wenn nicht angegeben, können Suchmaschinen einen Videoausschnitt in Suchergebnissen anzeigen, und die Suchmaschine entscheidet, wie lange eine Vorschau sein darf.
    Wird ignoriert, wenn keine gültige `<number>` angegeben ist.
    Besondere Werte sind wie folgt:
    - `0`
      - : Es darf höchstens ein statisches Bild verwendet werden, gemäß der `max-image-preview`-Einstellung.
    - `-1`
      - : Keine Videolängenbeschränkung.
- `notranslate`
  - : Keine Übersetzung dieser Seite in Suchergebnissen anbieten.
    Wenn nicht angegeben, können Suchmaschinen den Suchergebnistitel und den Ausschnitt in die Sprache der Suchanfrage übersetzen.
- `noimageindex`
  - : Bilder auf dieser Seite nicht indizieren.
    Wenn nicht angegeben, können Bilder auf der Seite indiziert und in Suchergebnissen angezeigt werden.
- `unavailable_after: <date/time>`

  - : Fordert an, dass diese Seite nach dem angegebenen `<date/time>` nicht mehr in Suchergebnissen angezeigt wird.
    Wird ignoriert, wenn kein gültiges `<date/time>` angegeben ist.
    Ein Datum muss in einem Format wie {{RFC("822")}}, {{RFC("850")}}, oder ISO 8601 angegeben werden.

    Standardmäßig gibt es kein Ablaufdatum für Inhalte.
    Wenn nicht angegeben, kann diese Seite unbegrenzt in Suchergebnissen angezeigt werden.
    Crawler sollen die Crawl-Rate der URL nach dem angegebenen Datum und der Zeit erheblich verringern.

## Beschreibung

Indizierungsregeln via `<meta name="robots">` und `X-Robots-Tag` werden identifiziert, wenn eine URL gecrawlt wird.
Die meisten Crawler unterstützen Regeln im `X-Robots-Tag` HTTP-Header, die in einem `<meta name="robots">`-Element verwendet werden können.

Im Falle von widersprüchlichen Robot-Regeln innerhalb des `X-Robots-Tag` oder zwischen dem `X-Robots-Tag` HTTP-Header und dem `<meta name="robots">`-Element gilt die restriktivere Regel.
Wenn eine Seite beispielsweise sowohl `max-snippet:50` als auch `nosnippet`-Regeln aufweist, wird die Regel `nosnippet` angewendet.
Indizierungsregeln werden nicht entdeckt oder angewendet, wenn Pfade durch eine `robots.txt`-Datei vom Crawlen ausgeschlossen sind.

Einige Werte schließen sich gegenseitig aus, wie `index` und `noindex`, oder `follow` und `nofollow`.
In diesen Fällen ist das Verhalten des Crawlers undefiniert und kann variieren.

### Interaktion mit robots.txt

Wenn eine Ressource durch eine `robots.txt`-Datei vom Crawlen ausgeschlossen wird, dann werden alle Informationen über Indizierungs- oder Anzeigeregeln, die mit `<meta name="robots">` oder dem `X-Robots-Tag` HTTP-Header spezifiziert werden, nicht erkannt und daher ignoriert.

Eine Seite, die vom Crawlen ausgeschlossen ist, kann dennoch indiziert werden, wenn sie von einem anderen Dokument referenziert wird (siehe die [`nofollow`](#nofollow)-Direktive).
Wenn Sie eine Seite aus Suchindizes entfernen möchten, funktioniert `X-Robots-Tag: noindex` in der Regel, aber ein Robot muss die Seite zuerst erneut besuchen, um die `X-Robots-Tag`-Regel zu erkennen.

## Beispiele

### Verwendung von X-Robots-Tag

Der folgende `X-Robots-Tag`-Header fügt `noindex` hinzu, wobei Crawler gebeten werden, diese Seite, Medien oder Ressource nicht in Suchergebnissen anzuzeigen:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noindex
```

### Mehrere Header

Die folgende Antwort hat zwei `X-Robots-Tag`-Header, von denen jeder eine Indizierungsregel enthält:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noimageindex
X-Robots-Tag: unavailable_after: Wed, 03 Dec 2025 13:09:53 GMT
```

### Spezifizieren von User-Agents

Es ist möglich, anzugeben, auf welchen User-Agent die Regeln angewendet werden sollen.
Das folgende Beispiel enthält zwei `X-Robots-Tag`-Header, die festlegen, dass `googlebot` die Links auf dieser Seite nicht verfolgen soll und dass ein fiktiver `BadBot`-Crawler die Seite nicht indizieren oder die Links darauf verfolgen soll:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow
X-Robots-Tag: googlebot: nofollow
```

In der unten stehenden Antwort sind die gleichen Indizierungsregeln definiert, jedoch in einem einzigen Header.
Jede Indizierungsregel gilt für den hinter ihr angegebenen User-Agent:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow, googlebot: nofollow
```

In Situationen, in denen mehrere Crawler mit unterschiedlichen Regeln angegeben sind, verwendet die Suchmaschine die Summe der negativen Regeln. Zum Beispiel:

```http
X-Robots-Tag: nofollow
X-Robots-Tag: googlebot: noindex
```

Die Seite mit diesen Headern wird interpretiert, als hätte sie eine `noindex, nofollow`-Regel, wenn sie von `googlebot` gecrawlt wird.

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation.

## Siehe auch

- {{Glossary("Robots.txt", "Robots.txt")}}
- {{Glossary("Search_engine", "Suchmaschine")}}
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [Verwendung des X-Robots-Tag HTTP-Headers](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#xrobotstag) auf developers.google.com
