---
title: X-Robots-Tag header
short-title: X-Robots-Tag
slug: Web/HTTP/Reference/Headers/X-Robots-Tag
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{HTTPSidebar}}

Der **`X-Robots-Tag`** {{Glossary("response_header", "Antwort-Header")}} definiert, wie {{Glossary("Crawler", "Crawler")}} URLs indexieren sollen. Obwohl er nicht Teil einer Spezifikation ist, ist er eine de-facto Standardmethode zur Kommunikation mit Such-Bots, Web-Crawlern und ähnlichen Benutzeragenten. Crawling-Dienste verwenden die Regeln des `X-Robots-Tag`-Headers, um anzupassen, wie Webseiten oder andere Ressourcen in Suchergebnissen präsentiert werden.

Indexierungsregeln werden in einem `X-Robots-Tag`-Header oder einem [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) HTML-Element (oft als "robots tag" bezeichnet) definiert und werden entdeckt, wenn eine URL gecrawlt wird. Das Festlegen von Indexierungsregeln in einem HTTP-Header ist nützlich für Nicht-HTML-Dokumente wie Bilder, PDFs oder andere Medien.

> [!NOTE]
> Nur kooperative Roboter befolgen diese Regeln, und ein Crawler muss zuerst auf die Ressource zugreifen, um Header und Meta-Elemente zu lesen (siehe [Interaktion mit robots.txt](#interaktion_mit_robots.txt)). Wenn Sie den Bandbreitenverbrauch durch Crawler verhindern möchten, ist eine restriktive {{Glossary("robots.txt", "robots.txt")}}-Datei effektiver als Indexierungsregeln, da sie das Crawlen von Ressourcen blockiert.

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

Ein optionales `<bot-name>:` spezifiziert den Benutzeragenten, auf den die nächsten Regeln angewendet werden sollen:

```http
X-Robots-Tag: <indexing-rule>, <bot-name>: <indexing-rule>
X-Robots-Tag: <bot-name>: <indexing-rule>, …, <indexing-ruleN>
```

Siehe [Benutzeragenten spezifizieren](#benutzeragenten_spezifizieren) für ein Beispiel.

## Direktiven

Jede der folgenden Indexierungsregeln kann verwendet werden:

- `all`
  - : Keine Einschränkungen für die Indexierung oder Anzeige in Suchergebnissen. Diese Regel ist der Standardwert und hat keine Auswirkung, wenn sie ausdrücklich aufgelistet wird.
- `noindex`
  - : Diese Seite, Medien oder Ressource nicht in den Suchergebnissen anzeigen. Wenn ausgelassen, kann die Seite, das Medium oder die Ressource indexiert und in Suchergebnissen angezeigt werden.
- `nofollow`
  - : Die Links auf dieser Seite nicht folgen. Wenn ausgelassen, können Suchmaschinen die Links auf der Seite verwenden, um diese verlinkten Seiten zu entdecken.
- `none`
  - : Entspricht `noindex, nofollow`.
- `nosnippet`
  - : Kein Textausschnitt oder Video-Vorschau in den Suchergebnissen für diese Seite anzeigen. Ein statisches Bildthumbnail (falls verfügbar) kann noch sichtbar sein. Wenn ausgelassen, können Suchmaschinen basierend auf Informationen auf der Seite einen Textausschnitt und Video-Vorschau generieren. Um bestimmte Abschnitte Ihres Inhalts aus der Anzeige in Suchergebnis-Snippets auszuschließen, verwenden Sie das [`data-nosnippet` HTML-Attribut](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#data-nosnippet-attr).
- `indexifembedded`
  - : Eine Suchmaschine darf den Inhalt einer Seite indexieren, wenn er in eine andere Seite über `iframes` oder ähnliche HTML-Elemente eingebettet ist, trotz einer `noindex`-Regel. `indexifembedded` hat nur eine Wirkung, wenn es von `noindex` begleitet wird.
- `max-snippet: <number>`
  - : Verwenden Sie maximal `<number>` Zeichen als Textausschnitt für dieses Suchergebnis. Wird ignoriert, wenn keine gültige `<number>` angegeben ist.
- `max-image-preview: <setting>`
  - : Die maximale Größe einer Bildvorschau für diese Seite in einem Suchergebnis. Wenn ausgelassen, können Suchmaschinen eine Bildvorschau der Standardgröße anzeigen. Wenn Sie nicht möchten, dass Suchmaschinen größere Thumbnail-Bilder verwenden, geben Sie einen `max-image-preview` Wert von `standard` oder `none` an. Werte umfassen:
    - `none`
      - : Es soll keine Bildvorschau angezeigt werden.
    - `standard`
      - : Eine Standardbildvorschau kann angezeigt werden.
    - `large`
      - : Eine größere Bildvorschau, bis zur Breite des Ansichtsfensters, kann angezeigt werden.
- `max-video-preview: <number>`
  - : Verwenden Sie maximal `<number>` Sekunden als Videoausschnitt für Videos auf dieser Seite in den Suchergebnissen. Wenn ausgelassen, können Suchmaschinen einen Videoausschnitt in den Suchergebnissen anzeigen, und die Suchmaschine entscheidet, wie lange eine Vorschau sein darf. Wird ignoriert, wenn keine gültige `<number>` angegeben ist. Besondere Werte sind:
    - `0`
      - : Maximal kann ein statisches Bild verwendet werden, in Übereinstimmung mit der `max-image-preview`-Einstellung.
    - `-1`
      - : Keine Videolängenbeschränkung.
- `notranslate`
  - : Übersetzung dieser Seite in Suchergebnissen nicht anbieten. Wenn ausgelassen, können Suchmaschinen den Titel und den Ausschnitt des Suchergebnisses in die Sprache der Suchanfrage übersetzen.
- `noimageindex`
  - : Nicht die Bilder auf dieser Seite indexieren. Wenn ausgelassen, können Bilder auf der Seite indexiert und in Suchergebnissen angezeigt werden.
- `unavailable_after: <date/time>`
  - : Ersucht, diese Seite nach dem angegebenen `<date/time>` nicht mehr in den Suchergebnissen anzuzeigen. Wird ignoriert, wenn keine gültige `<date/time>` angegeben ist. Ein Datum muss in einem Format wie {{RFC("822")}}, {{RFC("850")}}, oder ISO 8601 angegeben werden.

    Standardmäßig gibt es kein Ablaufdatum für Inhalte. Wenn ausgelassen, kann diese Seite unbegrenzt in Suchergebnissen angezeigt werden. Crawler sollen die Crawling-Rate der URL nach dem angegebenen Datum und der Uhrzeit erheblich verringern.

## Beschreibung

Indexierungsregeln über `<meta name="robots">` und `X-Robots-Tag` werden entdeckt, wenn eine URL gecrawlt wird. Die meisten Crawler unterstützen Regeln im `X-Robots-Tag` HTTP-Header, die in einem `<meta name="robots">`-Element verwendet werden können.

Im Falle von widersprüchlichen Robot-Regeln innerhalb des `X-Robots-Tag` oder zwischen dem `X-Robots-Tag` HTTP-Header und dem `<meta name="robots">`-Element, gilt die restriktivere Regel. Zum Beispiel, wenn eine Seite sowohl `max-snippet:50` als auch `nosnippet` Regeln hat, wird die `nosnippet` Regel angewendet. Indexierungsregeln werden nicht entdeckt oder angewendet, wenn Pfade durch eine `robots.txt`-Datei vom Crawlen blockiert sind.

Einige Werte sind gegenseitig ausschließend, wie `index` und `noindex`, oder `follow` und `nofollow`. In diesen Fällen ist das Verhalten des Crawlers undefiniert und kann variieren.

### Interaktion mit robots.txt

Wenn eine Ressource durch eine `robots.txt`-Datei vom Crawlen blockiert ist, dann werden alle Informationen zu Indexierungs- oder Servieregeln, die mithilfe von `<meta name="robots">` oder dem `X-Robots-Tag` HTTP-Header spezifiziert sind, nicht entdeckt und daher ignoriert.

Eine Seite, die vom Crawlen blockiert ist, kann dennoch indexiert werden, wenn sie von einem anderen Dokument referenziert wird (siehe die [`nofollow`](#nofollow) Direktive). Wenn Sie eine Seite aus den Suchindizes entfernen möchten, funktioniert `X-Robots-Tag: noindex` in der Regel, aber ein Roboter muss die Seite zuerst erneut besuchen, um die `X-Robots-Tag`-Regel zu erkennen.

## Beispiele

### Verwendung von X-Robots-Tag

Der folgende `X-Robots-Tag`-Header fügt `noindex` hinzu und fordert Crawler auf, diese Seite, Medien oder Ressource nicht in den Suchergebnissen anzuzeigen:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noindex
```

### Mehrere Header

Die folgende Antwort hat zwei `X-Robots-Tag`-Header, jeweils mit einer spezifischen Indexierungsregel:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noimageindex
X-Robots-Tag: unavailable_after: Wed, 03 Dec 2025 13:09:53 GMT
```

### Benutzeragenten spezifizieren

Es ist möglich, den Benutzeragenten zu spezifizieren, auf den die Regeln angewendet werden sollen. Das folgende Beispiel enthält zwei `X-Robots-Tag`-Header, die `googlebot` auffordern, die Links auf dieser Seite nicht zu folgen und dass ein fiktiver `BadBot` Crawler die Seite weder indexiert noch irgendwelchen Links folgt:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow
X-Robots-Tag: googlebot: nofollow
```

In der unten stehenden Antwort sind dieselben Indexierungsregeln definiert, jedoch in einem einzigen Header. Jede Indexierungsregel gilt für den dahinter spezifizierten Benutzeragenten:

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

Die Seite mit diesen Headern wird als eine mit der Regel `noindex, nofollow` interpretiert, wenn sie von `googlebot` gecrawlt wird.

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation.

## Siehe auch

- {{Glossary("robots.txt", "robots.txt")}}
- {{Glossary("Search_engine", "Suchmaschine")}}
- [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) HTML-Element ("robots tag")
- [robots.txt-Konfiguration](/de/docs/Web/Security/Practical_implementation_guides/Robots_txt) Sicherheits-Leitfaden
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [Verwendung des X-Robots-Tag HTTP-Headers](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#xrobotstag) auf developers.google.com
