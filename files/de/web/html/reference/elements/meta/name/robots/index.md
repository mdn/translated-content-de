---
title: <meta name="robots">
short-title: robots
slug: Web/HTML/Reference/Elements/meta/name/robots
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Der **`robots`** Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut des {{htmlelement("meta")}}-Elements (oft als "robots tag" bezeichnet) definiert das Crawl- und Indexierungsverhalten, das Web-{{Glossary("Crawler", "Crawler")}} für die Seite verwenden sollen. Falls angegeben, definieren Sie Anweisungen für Crawler im [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut des `<meta>`-Elements als kommagetrennte Liste von einer oder mehreren Regeln.

Zum Beispiel, um Crawler darauf hinzuweisen, dass eine Seite von deren Suchindizes ausgeschlossen werden soll, kann ein `noindex` Wert verwendet werden:

```html
<meta name="robots" content="noindex" />
```

> [!NOTE]
> Nur kooperative Roboter befolgen diese Regeln.
> Ein Crawler muss dennoch auf die Ressource zugreifen, um Header und Meta-Elemente zu lesen (siehe [X-Robots-Tag: Interaction with robots.txt](/de/docs/Web/HTTP/Reference/Headers/X-Robots-Tag#interaction_with_robots.txt)).
> Falls Sie den Bandbreitenverbrauch durch Crawler verhindern möchten, ist eine restriktive {{Glossary("robots.txt", "robots.txt")}}-Datei effektiver als Indexierungsregeln, da sie Ressourcen vollständig vor dem Crawlen blockiert.

## Verwendungshinweise

Ein `<meta name="robots">`-Element kann die folgenden zusätzlichen Attribute haben:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Das `content`-Attribut muss definiert werden, und sein Wert legt das Indexierungs- und Crawlingverhalten für kooperative Suchmaschinenroboter fest.
    Akzeptiert eines oder mehrere der folgenden Schlüsselwörter als kommagetrennte Liste:
    - `index`
      - : Erlaubt dem Roboter, die Seite zu indizieren. Dies ist das Standardverhalten.
        Wird von allen großen Crawlern verwendet.
    - `noindex`
      - : Fordert den Roboter auf, die Seite nicht zu indizieren.
        Wird von allen großen Crawlern verwendet.
    - `follow`
      - : Erlaubt dem Roboter, Links auf der Seite zu folgen. Dies ist das Standardverhalten.
        Wird von allen großen Crawlern verwendet.
    - `nofollow`
      - : Fordert den Roboter auf, den Links auf der Seite nicht zu folgen.
        Wird von allen großen Crawlern verwendet.
    - `all`
      - : Entspricht `index, follow`.
        Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965067987211-415685194&rd=1).
    - `none`
      - : Entspricht `noindex, nofollow`.
        Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965074074862-574753619&rd=1).
    - `noarchive`
      - : Fordert die Suchmaschine auf, den Seiteninhalt nicht zwischenzuspeichern.
        Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).
    - `nosnippet`
      - : Verhindert die Anzeige einer Seitenbeschreibung in den Suchergebnissen.
        Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).
    - `noimageindex`
      - : Fordert, dass diese Seite nicht als verweisende Seite eines indizierten Bildes erscheint.
        Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).
    - `nocache`
      - : Synonym für `noarchive`.
        Verwendet von: [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).

## Beschreibung

Es gibt mehrere wichtige Überlegungen zu beachten, wenn Sie einen `robots` Meta-Wert festlegen:

- Nur kooperative Roboter befolgen diese Regeln. Sie werden böswillige Akteure wie E-Mail-Ernter nicht daran hindern, die Anweisungen zu ignorieren.
- Wenn sie in einem `<meta>`-Tag definiert sind, müssen Roboter dennoch auf die Seite zugreifen, um diese Regeln zu lesen. Um Bandbreite zu sparen, ziehen Sie stattdessen die Verwendung einer [robots.txt-Datei](/de/docs/Web/Security/Practical_implementation_guides/Robots_txt) in Betracht.
- Das `<meta name="robots">`-Tag und `robots.txt` erfüllen unterschiedliche Rollen: `robots.txt` steuert das Crawling, während das `robots` Meta-Tag die Indexierung und andere Verhaltensweisen beeinflusst.
- Eine von `robots.txt` blockierte Seite kann trotzdem indiziert werden, wenn sie von anderen Quellen verlinkt ist.
- Die `noindex`-Anweisung wird erst wirksam, nachdem der Roboter die Seite erneut besucht hat, daher stellen Sie sicher, dass `robots.txt` dies nicht verhindert.
- Einige Werte, wie `index` vs. `noindex` oder `follow` vs. `nofollow`, sind gegenseitig ausschließend. Das Verhalten ist undefiniert, wenn widersprüchliche Werte verwendet werden.
- Roboter wie Google, Yahoo und Bing unterstützen diese Anweisungen auch im HTTP-Header {{HTTPHeader("X-Robots-Tag")}}, was für nicht-HTML-Inhalte wie PDFs oder Bilder nützlich ist.

## Beispiele

### Verwendung eines robots-Schlüsselworts

Das folgende Beispiel verwendet `nofollow`, um zu fordern, dass ein Crawler den Links auf einer Seite nicht folgt, und `noindex`, um zu fordern, dass die Seite von der Indexierung ausgeschlossen wird:

```html
<meta name="robots" content="nofollow, noindex" />
```

## Spezifikationen

Obwohl es nicht Teil irgendeiner Spezifikation ist, handelt es sich um eine De-facto-Standardmethode zur Kommunikation mit Suchbots, Webcrawlern und ähnlichen Benutzeragenten.

## Browser-Kompatibilität

Dieses Feature ist für Crawler gedacht, daher ist "Browser"-Kompatibilität nicht anwendbar.

## Siehe auch

- {{httpheader("X-Robots-Tag")}} HTTP-Header
- [robots.txt-Konfiguration](/de/docs/Web/Security/Practical_implementation_guides/Robots_txt) Leitfaden
- {{Glossary("robots.txt", "robots.txt")}} Glossareintrag
- {{Glossary("Search_engine", "Suchmaschine")}} Glossareintrag
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [WHATWG Wiki MetaExtensions-Seite](https://wiki.whatwg.org/wiki/MetaExtensions)
- [Verwendung des Robots-Meta-Tags](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#robotsmeta) auf developers.google.com
