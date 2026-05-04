---
title: '`<meta name="robots">` HTML-Attributwert'
short-title: robots
slug: Web/HTML/Reference/Elements/meta/name/robots
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

Der **`robots`**-Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name) Attribut des {{htmlelement("meta")}} Elements (oft als "robots tag" bezeichnet) definiert das Crawl- und Indexierungsverhalten, das Web-{{Glossary("Crawler", "Crawler")}} auf der Seite verwenden sollten.
Wenn angegeben, definieren Sie Anweisungen für Crawler im [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content) Attribut des `<meta>` Elements als eine durch Kommas getrennte Liste von einer oder mehreren Regeln.

Zum Beispiel kann ein `noindex` Wert verwendet werden, um Crawler darauf hinzuweisen, dass eine Seite von ihren Suchindizes ausgeschlossen werden sollte:

```html
<meta name="robots" content="noindex" />
```

> [!NOTE]
> Nur kooperative Roboter befolgen diese Regeln.
> Ein Crawler muss trotzdem auf die Ressource zugreifen, um Header und Meta-Elemente zu lesen (siehe [X-Robots-Tag: Interaktion mit robots.txt](/de/docs/Web/HTTP/Reference/Headers/X-Robots-Tag#interaction_with_robots.txt)).
> Wenn Sie den Bandbreitenverbrauch durch Crawler verhindern möchten, ist eine restriktive {{Glossary("robots.txt", "robots.txt")}} Datei effektiver als Indexierungsregeln, da sie den Zugriff auf Ressourcen vollständig blockiert.

## Nutzungshinweise

Ein `<meta name="robots">` Element kann die folgenden zusätzlichen Attribute haben:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Das `content` Attribut muss definiert sein, und sein Wert legt das Indexierungs- und Crawl-Verhalten für kooperative Suchmaschinenroboter fest.
    Es akzeptiert einen oder mehrere der folgenden Schlüsselwörter als durch Kommas getrennte Liste:
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
      - : Fordert den Roboter auf, die Links auf der Seite nicht zu verfolgen.
        Wird von allen großen Crawlern verwendet.
    - `all`
      - : Entspricht `index, follow`.
        Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965067987211-415685194&rd=1).
    - `none`
      - : Entspricht `noindex, nofollow`.
        Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965074074862-574753619&rd=1).
    - `noarchive`
      - : Fordert, dass die Suchmaschine den Seiteninhalt nicht im Cache speichert.
        Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmasters/help/robots-meta-tags-and-attributes-that-bing-supports-5198d240).
    - `nosnippet`
      - : Verhindert die Anzeige einer Beschreibung der Seite in Suchmaschinenergebnissen.
        Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Bing](https://www.bing.com/webmasters/help/robots-meta-tags-and-attributes-that-bing-supports-5198d240).
    - `noimageindex`
      - : Fordert, dass diese Seite nicht als verweisende Seite eines indizierten Bildes erscheint.
        Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).
    - `nocache`
      - : Synonym für `noarchive`.
        Verwendet von: [Bing](https://www.bing.com/webmasters/help/robots-meta-tags-and-attributes-that-bing-supports-5198d240).

## Beschreibung

Es gibt mehrere wichtige Überlegungen, die beim Festlegen eines `robots` Meta-Wertes zu beachten sind:

- Nur kooperative Roboter befolgen diese Regeln. Sie verhindern nicht, dass böswillige Akteure wie E-Mail-Sammler die Direktiven ignorieren.
- Wenn sie in einem `<meta>` Tag definiert sind, müssen Roboter dennoch auf die Seite zugreifen, um diese Regeln zu lesen. Um Bandbreitenverbrauch zu reduzieren, sollten Sie überlegen, stattdessen eine [robots.txt Datei](/de/docs/Web/Security/Practical_implementation_guides/Robots_txt) zu verwenden.
- Der `<meta name="robots">` Tag und die `robots.txt` dienen unterschiedlichen Zwecken: `robots.txt` steuert das Crawlen, während der `robots` Meta-Tag das Indexieren und andere Verhaltensweisen beeinflusst.
- Eine durch `robots.txt` blockierte Seite kann immer noch indiziert werden, wenn sie von anderen Quellen verlinkt wird.
- Die `noindex` Direktive wird erst wirksam, nachdem der Roboter die Seite erneut besucht hat, stellen Sie also sicher, dass `robots.txt` dies nicht verhindert.
- Einige Werte, wie `index` vs. `noindex` oder `follow` vs. `nofollow`, schließen sich gegenseitig aus. Das Verhalten ist undefiniert, wenn widersprüchliche Werte verwendet werden.
- Roboter wie Google, Yahoo und Bing unterstützen diese Direktiven auch im HTTP-Header {{HTTPHeader("X-Robots-Tag")}}, was für nicht-HTML-Inhalte wie PDFs oder Bilder nützlich ist.

## Beispiele

### Verwendung eines robots-Schlüsselwortes

Das folgende Beispiel verwendet `nofollow`, um einen Crawler aufzufordern, keine Links auf einer Seite zu verfolgen, und `noindex`, um zu verlangen, dass die Seite aus dem Index ausgeschlossen wird:

```html
<meta name="robots" content="nofollow, noindex" />
```

## Spezifikationen

Obwohl es nicht Teil einer Spezifikation ist, ist es eine de-facto Standardmethode, um mit Suchbots, Web-Crawlern und ähnlichen Benutzeragenten zu kommunizieren.

## Browser-Kompatibilität

Dieses Feature ist für Crawler gedacht, daher ist "Browser"-Kompatibilität nicht anwendbar.

## Siehe auch

- {{httpheader("X-Robots-Tag")}} HTTP-Header
- [robots.txt Konfiguration](/de/docs/Web/Security/Practical_implementation_guides/Robots_txt) Leitfaden
- {{Glossary("robots.txt", "robots.txt")}} Glossareintrag
- {{Glossary("Search_engine", "Suchmaschine")}} Glossareintrag
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [WHATWG Wiki MetaExtensions Seite](https://wiki.whatwg.org/wiki/MetaExtensions)
- [Verwendung des robots Meta-Tags](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#robotsmeta) auf developers.google.com
