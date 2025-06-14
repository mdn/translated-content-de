---
title: <meta name="robots">
short-title: robots
slug: Web/HTML/Reference/Elements/meta/name/robots
l10n:
  sourceCommit: 0b8f00bb9ece33c6964eea886b2f7db8711d7b62
---

{{HTMLSidebar}}

Der **`robots`** Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut des {{htmlelement("meta")}}-Elements definiert das Crawl-Verhalten, das kooperative Crawler (oder "Roboter") mit der Seite verwenden sollten.
Falls spezifiziert, definieren Sie die Crawl-Direktiven mit einem [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut im `<meta>`-Element als kommagetrennte Liste von einem oder mehreren Regeln.

Zum Beispiel, um Crawlern zu signalisieren, dass eine Seite von ihren Suchindizes ausgeschlossen werden soll, kann der Wert `noindex` verwendet werden:

```html
<meta name="robots" content="noindex" />
```

> [!NOTE]
> Nur kooperative Roboter befolgen diese Regeln.
> Ein Crawler muss dennoch auf die Ressource zugreifen, um Header und Meta-Elemente zu lesen (siehe [X-Robots-Tag: Interaction with robots.txt](/de/docs/Web/HTTP/Reference/Headers/X-Robots-Tag#interaction_with_robots.txt)).
> Wenn Sie den Bandbreitenverbrauch durch Crawler verhindern möchten, ist eine restriktive {{Glossary("robots.txt", "robots.txt")}} Datei effektiver als Indexierungsregeln, da sie Ressourcen vollständig vor dem Crawlen blockiert.

## Verwendungshinweise

Ein `<meta name="robots">`-Element kann die folgenden zusätzlichen Attribute haben:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Das `content` Attribut muss definiert sein, und sein Wert legt das Indexierungs- und Crawl-Verhalten für kooperative Suchmaschinenroboter fest.
    Akzeptiert eines oder mehrere der folgenden Schlüsselwörter als kommagetrennte Liste:
    - `index`
      - : Erlaubt dem Roboter, die Seite zu indexieren. Dies ist das Standardverhalten.
        Wird von allen großen Crawlern verwendet.
    - `noindex`
      - : Fordert den Roboter auf, die Seite nicht zu indexieren.
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
      - : Fordert die Suchmaschine auf, den Page-Content nicht zwischenspeichern.
        Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).
    - `nosnippet`
      - : Verhindert die Anzeige einer Beschreibung der Seite in den Suchmaschinenergebnissen.
        Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).
    - `noimageindex`
      - : Fordert, dass diese Seite nicht als Verweis-Seite eines indizierten Bildes erscheint.
        Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).
    - `nocache`
      - : Synonym von `noarchive`.
        Verwendet von: [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).

## Beschreibung

Es gibt mehrere wichtige Überlegungen bei der Festlegung eines `robots` Meta-Werts:

- Nur kooperative Roboter befolgen diese Regeln. Sie verhindern nicht, dass böswillige Akteure wie E-Mail-Erntemaschinen die Direktiven ignorieren.
- Falls in einem `<meta>`-Tag definiert, müssen Roboter dennoch auf die Seite zugreifen, um diese Regeln zu lesen. Um Bandbreite zu reduzieren, ziehen Sie in Betracht, eine [robots.txt Datei](/de/docs/Web/Security/Practical_implementation_guides/Robots_txt) zu verwenden.
- Das `<meta name="robots">` Tag und `robots.txt` erfüllen unterschiedliche Rollen: `robots.txt` steuert das Crawlen, während das `robots` Meta-Tag das Indexierungs- und andere Verhalten beeinflusst.
- Eine durch `robots.txt` blockierte Seite kann dennoch indiziert werden, wenn sie von anderen Quellen verlinkt wird.
- Die `noindex` Direktive tritt nur in Kraft, nachdem der Roboter die Seite erneut besucht hat, stellen Sie also sicher, dass `robots.txt` dies nicht verhindert.
- Einige Werte, wie `index` vs. `noindex` oder `follow` vs. `nofollow`, schließen sich gegenseitig aus. Das Verhalten ist nicht definiert, wenn widersprüchliche Werte verwendet werden.
- Roboter wie Google, Yahoo und Bing unterstützen auch diese Direktiven im HTTP-Header {{HTTPHeader("X-Robots-Tag")}}, was für nicht-HTML-Inhalte wie PDFs oder Bilder nützlich ist.

## Beispiele

### Verwendung eines robots-Schlüsselworts

Das folgende Beispiel verwendet `nofollow`, um zu fordern, dass ein Crawler den Links auf einer Seite nicht folgt, und `noindex`, um zu fordern, dass die Seite von der Indexierung ausgeschlossen wird:

```html
<meta name="robots" content="nofollow, noindex" />
```

## Spezifikationen

Obwohl nicht Teil irgendeiner Spezifikation, ist dies eine de-facto Standardmethode zur Kommunikation mit Suchbots, Webcrawlern und ähnlichen Benutzeragenten.

## Browser-Kompatibilität

Diese Funktion ist für Crawler gedacht, daher trifft "Browser"-Kompatibilität nicht zu.

## Siehe auch

- {{httpheader("X-Robots-Tag")}} HTTP-Header
- [robots.txt Konfiguration](/de/docs/Web/Security/Practical_implementation_guides/Robots_txt) Leitfaden
- {{Glossary("robots.txt", "robots.txt")}} Glossareintrag
- {{Glossary("Search_engine", "Suchmaschine")}} Glossareintrag
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [WHATWG Wiki MetaExtensions Seite](https://wiki.whatwg.org/wiki/MetaExtensions)
- [Verwendung des robots Meta-Tags](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#robotsmeta) auf developers.google.com
