---
title: <meta name="robots">
short-title: robots
slug: Web/HTML/Reference/Elements/meta/name/robots
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{HTMLSidebar}}

Der **`robots`** Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta#name)-Attribut des {{htmlelement("meta")}} Elements definiert das Crawl-Verhalten, das kooperative Crawler (oder "Roboter") mit der Seite verwenden sollen. Falls angegeben, definieren Sie Crawl-Direktiven unter Verwendung eines [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attributs im `<meta>`-Element in Form einer durch Kommas getrennten Liste von einer oder mehreren Regeln.

Zum Beispiel kann ein `noindex`-Wert verwendet werden, um Crawler darauf hinzuweisen, dass eine Seite von ihren Suchindizes ausgeschlossen werden sollte:

```html
<meta name="robots" content="noindex" />
```

> [!NOTE]
> Nur kooperative Roboter befolgen diese Regeln.
> Ein Crawler muss dennoch auf die Ressource zugreifen, um Header und Meta-Elemente zu lesen (siehe [X-Robots-Tag: Interaction with robots.txt](/de/docs/Web/HTTP/Reference/Headers/X-Robots-Tag#interaction_with_robots.txt)).
> Wenn Sie den Bandbreitenverbrauch von Crawlern verhindern möchten, ist eine restriktive {{Glossary("robots.txt", "robots.txt")}}-Datei effektiver als Indexierungsregeln, da sie Ressourcen vollständig vor dem Crawlen schützt.

## Nutzungshinweise

Ein `<meta name="robots">` Element kann die folgenden zusätzlichen Attribute haben:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Das `content`-Attribut muss definiert werden, und sein Wert legt das Indexierungs- und Crawling-Verhalten für kooperative Suchmaschinenroboter fest.
    Akzeptiert eines oder mehrere der folgenden Schlüsselwörter als durch Kommas getrennte Liste:
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
        Verwendung durch: [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965067987211-415685194&rd=1).
    - `none`
      - : Entspricht `noindex, nofollow`.
        Verwendung durch: [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965074074862-574753619&rd=1).
    - `noarchive`
      - : Fordert, dass die Suchmaschine den Seiteninhalt nicht zwischenspeichert.
        Verwendung durch: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).
    - `nosnippet`
      - : Verhindert das Anzeigen jeglicher Seitenbeschreibung in den Suchmaschinenergebnissen.
        Verwendung durch: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).
    - `noimageindex`
      - : Fordert, dass diese Seite nicht als verweisende Seite eines indizierten Bildes erscheint.
        Verwendung durch: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).
    - `nocache`
      - : Synonym von `noarchive`.
        Verwendung durch: [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).

## Beschreibung

Es gibt mehrere wichtige Überlegungen, die beim Setzen eines `robots`-Meta-Werts beachtet werden sollten:

- Nur kooperative Roboter befolgen diese Regeln. Sie verhindern nicht, dass böswillige Akteure wie E-Mail-Adressensammler die Direktiven ignorieren.
- Wenn im `<meta>`-Tag definiert, müssen Roboter dennoch auf die Seite zugreifen, um diese Regeln zu lesen. Erwägen Sie zur Reduzierung der Bandbreite die Verwendung einer [robots.txt-Datei](/de/docs/Web/Security/Practical_implementation_guides/Robots_txt).
- Das `<meta name="robots">`-Tag und `robots.txt` erfüllen unterschiedliche Rollen: `robots.txt` steuert das Crawling, während das `robots`-Meta-Tag das Indexierungs- und andere Verhalten beeinflusst.
- Eine von `robots.txt` blockierte Seite kann dennoch indiziert werden, wenn sie von anderen Quellen verlinkt ist.
- Die `noindex`-Direktive wird erst wirksam, nachdem der Roboter die Seite erneut besucht hat; stellen Sie also sicher, dass `robots.txt` dies nicht verhindert.
- Einige Werte, wie `index` vs. `noindex` oder `follow` vs. `nofollow`, schließen sich gegenseitig aus. Das Verhalten ist undefiniert, wenn widersprüchliche Werte verwendet werden.
- Roboter wie Google, Yahoo und Bing unterstützen diese Direktiven auch im HTTP-Header {{HTTPHeader("X-Robots-Tag")}}, was nützlich ist für nicht-HTML-Inhalte wie PDFs oder Bilder.

## Beispiele

### Verwendung eines robots-Schlüsselworts

Das folgende Beispiel verwendet `nofollow`, um zu verlangen, dass ein Crawler Links auf einer Seite nicht folgt, und `noindex`, um zu verlangen, dass die Seite aus der Indexierung ausgeschlossen wird:

```html
<meta name="robots" content="nofollow, noindex" />
```

## Spezifikationen

Obwohl es kein Teil einer speziellen Spezifikation ist, ist es eine faktisch standardisierte Methode zur Kommunikation mit Suchbots, Webcrawlern und ähnlichen Benutzeragenten.

## Browser-Kompatibilität

Diese Funktion ist für Crawler gedacht, daher gilt "Browser"-Kompatibilität nicht.

## Siehe auch

- {{httpheader("X-Robots-Tag")}} HTTP-Header
- [robots.txt-Konfiguration](/de/docs/Web/Security/Practical_implementation_guides/Robots_txt) Leitfaden
- {{Glossary("robots.txt", "robots.txt")}} Glossareintrag
- {{Glossary("Search_engine", "Suchmaschine")}} Glossareintrag
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [WHATWG Wiki MetaExtensions Seite](https://wiki.whatwg.org/wiki/MetaExtensions)
- [Verwendung des robots-Meta-Tags](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#robotsmeta) auf developers.google.com
