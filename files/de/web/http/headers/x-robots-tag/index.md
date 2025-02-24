---
title: X-Robots-Tag
slug: Web/HTTP/Headers/X-Robots-Tag
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der **`X-Robots-Tag`** {{Glossary("response_header", "Response-Header")}} definiert, wie {{Glossary("Crawler", "Crawler")}} URLs indexieren sollen.
Obwohl es nicht Teil einer Spezifikation ist, ist es eine De-facto-Standardmethode zur Kommunikation mit Suchbots, Web-Crawlern und ähnlichen Benutzeragenten.
Suchbezogene Crawler verwenden die Regeln aus dem `X-Robots-Tag`-Header, um anzupassen, wie Webseiten oder andere Ressourcen in Suchergebnissen dargestellt werden.

Indexierungsregeln, die über `<meta name="robots">`-Elemente und `X-Robots-Tag`-Header definiert sind, werden entdeckt, wenn eine URL gecrawlt wird.
Das Angeben von Indexierungsregeln in einem HTTP-Header ist nützlich für Nicht-HTML-Dokumente wie Bilder, PDFs oder andere Medien.

> [!NOTE]
> Nur kooperative Roboter befolgen diese Regeln, und ein Crawler muss die Ressource dennoch aufrufen, um Header und Meta-Elemente zu lesen (siehe [Interaktion mit robots.txt](#interaktion_mit_robots.txt)).
> Wenn Sie den Bandbreitenverbrauch durch Crawler verhindern möchten, ist eine restriktive [robots.txt]-Datei(/de/docs/Glossary/robots.txt) effizienter als Indexierungsregeln, da sie Ressourcen vollständig vom Crawlen ausschließt.

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

Eine oder mehrere Indexierungsregeln als kommagetrennte Liste:

```http
X-Robots-Tag: <indexing-rule>
X-Robots-Tag: <indexing-rule>, …, <indexing-ruleN>
```

Ein optionales `<bot-name>:` spezifiziert den Benutzeragenten, auf den die nachfolgenden Regeln angewendet werden sollen:

```http
X-Robots-Tag: <indexing-rule>, <bot-name>: <indexing-rule>
X-Robots-Tag: <bot-name>: <indexing-rule>, …, <indexing-ruleN>
```

Siehe [Festlegen von Benutzeragenten](#festlegen_von_benutzeragenten) für ein Beispiel.

## Direktiven

Es können beliebige der folgenden Indexierungsregeln verwendet werden:

- `all`
  - : Keine Einschränkungen für das Indexieren oder die Anzeige in Suchergebnissen.
    Diese Regel ist der Standardwert und hat keine Wirkung, wenn sie ausdrücklich aufgeführt wird.
- `noindex`
  - : Diese Seite, Medien oder Ressource nicht in Suchergebnissen anzeigen.
    Wird sie weggelassen, kann die Seite, das Medium oder die Ressource indexiert und in Suchergebnissen angezeigt werden.
- `nofollow`
  - : Die Links auf dieser Seite nicht verfolgen.
    Wird sie weggelassen, können Suchmaschinen die Links auf der Seite verwenden, um die verlinkten Seiten zu entdecken.
- `none`
  - : Entspricht `noindex, nofollow`.
- `nosnippet`
  - : Keinen Textausschnitt oder Videovorschau in den Suchergebnissen für diese Seite anzeigen.
    Ein statisches Bildthumbnail (falls verfügbar) kann weiterhin sichtbar sein.
    Wird sie weggelassen, können Suchmaschinen einen Textausschnitt und eine Videovorschau basierend auf Informationen auf der Seite generieren.
    Um bestimmte Bereiche Ihres Inhalts aus den Suchergebnis-Snippets auszuschließen, verwenden Sie das [`data-nosnippet` HTML-Attribut](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#data-nosnippet-attr).
- `indexifembedded`
  - : Eine Suchmaschine darf den Inhalt einer Seite indexieren, wenn er über iframes oder ähnliche HTML-Elemente in eine andere Seite eingebettet ist, trotz einer `noindex`-Regel.
    `indexifembedded` hat nur dann eine Wirkung, wenn es von `noindex` begleitet wird.
- `max-snippet: <number>`
  - : Verwenden Sie maximal `<number>` Zeichen als Textausschnitt für dieses Suchergebnis.
    Wird ignoriert, wenn keine gültige `<number>` angegeben ist.
- `max-image-preview: <setting>`
  - : Die maximale Größe einer Bildvorschau für diese Seite in Suchergebnissen.
    Wird sie weggelassen, können Suchmaschinen eine Bildvorschau der Standardgröße anzeigen.
    Wenn Sie nicht möchten, dass Suchmaschinen größere Thumbnails verwenden, geben Sie einen `max-image-preview`-Wert von `standard` oder `none` an. Werte umfassen:
    - `none`
      - : Es soll keine Bildvorschau angezeigt werden.
    - `standard`
      - : Eine Standardbildvorschau darf angezeigt werden.
    - `large`
      - : Eine größere Bildvorschau, bis zur Breite des Viewports, darf angezeigt werden.
- `max-video-preview: <number>`
  - : Verwenden Sie maximal `<number>` Sekunden als Videoausschnitt für Videos auf dieser Seite in Suchergebnissen.
    Wird sie weggelassen, können Suchmaschinen ein Videoausschnitt in den Suchergebnissen anzeigen, und die Suchmaschine entscheidet, wie lange eine Vorschau angezeigt werden darf.
    Ignoriert, wenn keine gültige `<number>` angegeben ist.
    Besondere Werte sind:
    - `0`
      - : Es darf höchstens ein statisches Bild verwendet werden, gemäß der `max-image-preview`-Einstellung.
    - `-1`
      - : Keine Videolängenbegrenzung.
- `notranslate`
  - : Keine Übersetzung dieser Seite in Suchergebnissen anbieten.
    Wird sie weggelassen, können Suchmaschinen den Titel und den Ausschnitt des Suchergebnisses in die Sprache der Suchanfrage übersetzen.
- `noimageindex`
  - : Bilder auf dieser Seite nicht indexieren.
    Wird sie weggelassen, können Bilder auf der Seite indexiert und in Suchergebnissen angezeigt werden.
- `unavailable_after: <date/time>`

  - : Ersucht darum, diese Seite nach dem angegebenen `<date/time>` nicht mehr in Suchergebnissen anzuzeigen.
    Ignoriert, wenn kein gültiges `<date/time>` angegeben ist.
    Ein Datum muss in einem Format wie {{RFC("822")}}, {{RFC("850")}} oder ISO 8601 angegeben sein.

    Standardmäßig gibt es kein Ablaufdatum für Inhalte.
    Wird sie weggelassen, kann diese Seite unbegrenzt in Suchergebnissen angezeigt werden.
    Crawler sollten die Crawling-Rate der URL nach dem angegebenen Datum und der Uhrzeit erheblich reduzieren.

## Beschreibung

Indexierungsregeln über `<meta name="robots">` und `X-Robots-Tag` werden entdeckt, wenn eine URL gecrawlt wird.
Die meisten Crawler unterstützen Regeln im `X-Robots-Tag`-HTTP-Header, die in einem `<meta name="robots">`-Element verwendet werden können.

Im Falle widersprüchlicher Robot-Regeln innerhalb des `X-Robots-Tag` oder zwischen dem `X-Robots-Tag`-HTTP-Header und dem `<meta name="robots">`-Element gilt die restriktivere Regel.
Beispielsweise, wenn eine Seite sowohl `max-snippet:50` als auch `nosnippet`-Regeln hat, wird die `nosnippet`-Regel angewendet.
Indexierungsregeln werden nicht entdeckt oder angewendet, wenn Pfade durch eine `robots.txt`-Datei vom Crawling ausgeschlossen sind.

Einige Werte schließen sich gegenseitig aus, wie `index` und `noindex`, oder `follow` und `nofollow`.
In diesen Fällen ist das Verhalten des Crawlers undefiniert und kann variieren.

### Interaktion mit robots.txt

Wenn eine Ressource durch eine `robots.txt`-Datei vom Crawling ausgeschlossen ist, werden Informationen über Indexierungs- oder Serviceregeln, die mit `<meta name="robots">` oder dem `X-Robots-Tag`-HTTP-Header angegeben sind, nicht erkannt und daher ignoriert.

Eine Seite, die vom Crawling ausgeschlossen ist, kann dennoch indexiert werden, wenn sie von einem anderen Dokument referenziert wird (siehe die [`nofollow`](#nofollow)-Richtlinie).
Wenn Sie eine Seite aus den Suchindizes entfernen möchten, funktioniert `X-Robots-Tag: noindex` normalerweise, aber ein Roboter muss die Seite zuerst erneut besuchen, um die `X-Robots-Tag`-Regel zu erkennen.

## Beispiele

### Verwendung von X-Robots-Tag

Der folgende `X-Robots-Tag`-Header fügt `noindex` hinzu, um Crawler zu bitten, diese Seite, Medien oder Ressource nicht in Suchergebnissen anzuzeigen:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noindex
```

### Mehrere Header

Die folgende Antwort enthält zwei `X-Robots-Tag`-Header, von denen jeder eine Indexierungsregel spezifiziert:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noimageindex
X-Robots-Tag: unavailable_after: Wed, 03 Dec 2025 13:09:53 GMT
```

### Festlegen von Benutzeragenten

Es ist möglich zu spezifizieren, auf welchen Benutzeragenten die Regeln angewendet werden sollen.
Das folgende Beispiel enthält zwei `X-Robots-Tag`-Header, die `googlebot` bitten, die Links auf dieser Seite nicht zu verfolgen und dass ein fiktiver `BadBot`-Crawler die Seite nicht indexiert oder irgendwelche Links darauf verfolgt:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow
X-Robots-Tag: googlebot: nofollow
```

In der folgenden Antwort sind dieselben Indexierungsregeln definiert, aber in einem einzigen Header.
Jede Indexierungsregel gilt für den dahinter angegebenen Benutzeragenten:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow, googlebot: nofollow
```

In Situationen, in denen mehrere Crawler zusammen mit unterschiedlichen Regeln angegeben sind, verwendet die Suchmaschine die Summe der negativen Regeln.
Zum Beispiel:

```http
X-Robots-Tag: nofollow
X-Robots-Tag: googlebot: noindex
```

Die Seite, die diese Header enthält, wird als `noindex, nofollow`-Regel interpretiert, wenn sie von `googlebot` gecrawlt wird.

## Spezifikationen

Gehört zu keiner aktuellen Spezifikation.

## Siehe auch

- {{Glossary("Robots.txt", "Robots.txt")}}
- {{Glossary("Search_engine", "Suchmaschine")}}
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [Verwenden des X-Robots-Tag-HTTP-Headers](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#xrobotstag) auf developers.google.com
