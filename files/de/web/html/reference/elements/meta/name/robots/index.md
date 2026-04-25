---
title: '`<meta name="robots">` HTML-Attributwert'
short-title: robots
slug: Web/HTML/Reference/Elements/meta/name/robots
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

Der **`robots`** Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name) Attribut des {{htmlelement("meta")}} Elements (oft als "robots tag" bezeichnet) definiert das Crawling- und Indexierungsverhalten, das Web-{{Glossary("Crawler", "Crawler")}} bei der Seite verwenden sollten.
Wenn angegeben, definieren Sie Anweisungen für Crawler im [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content) Attribut des `<meta>` Elements als kommagetrennte Liste von einer oder mehreren Regeln.

Zum Beispiel kann ein `noindex` Wert verwendet werden, um den Crawlern anzudeuten, dass eine Seite von deren Suchindizes ausgeschlossen werden soll:

```html
<meta name="robots" content="noindex" />
```

> [!NOTE]
> Nur kooperative Roboter befolgen diese Regeln.
> Ein Crawler muss dennoch auf die Ressource zugreifen, um Header und Metaelemente zu lesen (siehe [X-Robots-Tag: Interaction with robots.txt](/de/docs/Web/HTTP/Reference/Headers/X-Robots-Tag#interaction_with_robots.txt)).
> Wenn Sie den Bandbreitenverbrauch von Crawlern verhindern möchten, ist eine restriktive {{Glossary("robots.txt", "robots.txt")}} Datei wirksamer als Indexierungsregeln, da sie Ressourcen vollständig vom Crawling ausschließt.

## Verwendungshinweise

Ein `<meta name="robots">` Element kann die folgenden zusätzlichen Attribute haben:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Das `content` Attribut muss definiert sein und sein Wert setzt das Indexierungs- und Crawling-Verhalten für kooperative Suchmaschinenroboter fest. Akzeptiert einen oder mehrere der folgenden Schlüsselwörter als kommagetrennte Liste:
    - `index`
      - : Erlaubt dem Roboter, die Seite zu indexieren. Dies ist das Standardverhalten. Wird von allen großen Crawlern verwendet.
    - `noindex`
      - : Fordert den Roboter auf, die Seite nicht zu indexieren. Wird von allen großen Crawlern verwendet.
    - `follow`
      - : Erlaubt dem Roboter, Links auf der Seite zu folgen. Dies ist das Standardverhalten. Wird von allen großen Crawlern verwendet.
    - `nofollow`
      - : Fordert den Roboter auf, den Links auf der Seite nicht zu folgen. Wird von allen großen Crawlern verwendet.
    - `all`
      - : Entspricht `index, follow`. Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965067987211-415685194&rd=1).
    - `none`
      - : Entspricht `noindex, nofollow`. Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965074074862-574753619&rd=1).
    - `noarchive`
      - : Fordert, dass die Suchmaschine den Seiteninhalt nicht cached. Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).
    - `nosnippet`
      - : Verhindert die Anzeige einer Beschreibung der Seite in den Suchmaschinenergebnissen. Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).
    - `noimageindex`
      - : Fordert, dass diese Seite nicht als Verweisseite eines indizierten Bildes erscheint. Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).
    - `nocache`
      - : Synonym von `noarchive`. Verwendet von: [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).

## Beschreibung

Es gibt mehrere wichtige Überlegungen, die beim Setzen eines `robots` Meta-Wertes zu beachten sind:

- Nur kooperative Roboter befolgen diese Regeln. Sie verhindern nicht, dass böswillige Akteure, wie E-Mail-Ernteprogramme, die Anweisungen ignorieren.
- Wenn sie in einem `<meta>` Tag definiert sind, müssen Roboter dennoch auf die Seite zugreifen, um diese Regeln zu lesen. Um den Bandbreitenverbrauch zu reduzieren, sollten Sie stattdessen die Verwendung einer [robots.txt Datei](/de/docs/Web/Security/Practical_implementation_guides/Robots_txt) in Betracht ziehen.
- Der `<meta name="robots">` Tag und `robots.txt` haben unterschiedliche Rollen: `robots.txt` steuert das Crawling, während das `robots` Meta-Tag die Indexierung und anderes Verhalten beeinflusst.
- Eine Seite, die durch `robots.txt` blockiert ist, kann dennoch indiziert werden, wenn sie von anderen Quellen verlinkt wird.
- Die `noindex` Anweisung wird erst wirksam, nachdem der Roboter die Seite erneut besucht hat, stellen Sie also sicher, dass `robots.txt` dies nicht verhindert.
- Einige Werte, wie `index` vs. `noindex` oder `follow` vs. `nofollow`, schließen sich gegenseitig aus. Das Verhalten ist undefiniert, wenn widersprüchliche Werte verwendet werden.
- Roboter wie Google, Yahoo und Bing unterstützen diese Anweisungen auch im HTTP-Header {{HTTPHeader("X-Robots-Tag")}}, was für nicht-HTML-Inhalte wie PDFs oder Bilder nützlich ist.

## Beispiele

### Verwendung eines Robots-Schlüsselworts

Das folgende Beispiel verwendet `nofollow`, um zu verlangen, dass ein Crawler keine Links auf einer Seite verfolgt, und `noindex`, um zu verlangen, dass die Seite von der Indexierung ausgeschlossen wird:

```html
<meta name="robots" content="nofollow, noindex" />
```

## Spezifikationen

Obwohl es nicht Teil irgendeiner Spezifikation ist, ist es eine De-facto-Standardmethode zur Kommunikation mit Such-Bots, Web-Crawlern und ähnlichen Benutzeragenten.

## Browser-Kompatibilität

Dieses Feature ist für Crawler gedacht, daher ist "Browser-Kompatibilität" nicht anwendbar.

## Siehe auch

- HTTP-Header {{httpheader("X-Robots-Tag")}}
- [robots.txt Konfiguration](/de/docs/Web/Security/Practical_implementation_guides/Robots_txt) Leitfaden
- {{Glossary("robots.txt", "robots.txt")}} Glossareintrag
- {{Glossary("Search_engine", "Suchmaschine")}} Glossareintrag
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [WHATWG Wiki MetaExtensions Seite](https://wiki.whatwg.org/wiki/MetaExtensions)
- [Verwendung des robots Meta-Tags](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#robotsmeta) auf developers.google.com
