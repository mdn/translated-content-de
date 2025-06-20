---
title: <meta name="robots">
short-title: robots
slug: Web/HTML/Reference/Elements/meta/name/robots
l10n:
  sourceCommit: a3693d282028046f4e0dadf0b1aa068b407d1158
---

{{HTMLSidebar}}

Der **`robots`**-Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attributs des {{htmlelement("meta")}}-Elements (häufig als "Robots-Tag" bezeichnet) definiert das Crawl- und Indexierungsverhalten, das Web-{{Glossary("Crawler", "Crawler")}} mit der Seite verwenden sollten. Wenn angegeben, definieren Sie Anweisungen für Crawler im [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut des `<meta>`-Elements als kommaseparierte Liste von einer oder mehreren Regeln.

Zum Beispiel, um Crawler darauf hinzuweisen, dass eine Seite aus ihren Suchindizes ausgeschlossen werden sollte, kann ein `noindex`-Wert verwendet werden:

```html
<meta name="robots" content="noindex" />
```

> [!NOTE]
> Nur kooperative Roboter befolgen diese Regeln.
> Ein Crawler muss trotzdem auf die Ressource zugreifen, um Header und Meta-Elemente zu lesen (siehe [X-Robots-Tag: Interaction with robots.txt](/de/docs/Web/HTTP/Reference/Headers/X-Robots-Tag#interaction_with_robots.txt)).
> Wenn Sie den Bandbreitenverbrauch durch Crawler verhindern möchten, ist eine restriktive {{Glossary("robots.txt", "robots.txt")}}-Datei effektiver als Indexierungsregeln, da sie Ressourcen ganz vom Crawling ausschließt.

## Nutzungsnotizen

Ein `<meta name="robots">`-Element kann die folgenden zusätzlichen Attribute haben:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Das `content`-Attribut muss definiert sein, und sein Wert legt das Indexierungs- und Crawlverhalten für kooperative Suchmaschinenroboter fest.
    Akzeptiert eines oder mehrere der folgenden Schlüsselwörter als kommaseparierte Liste:
    - `index`
      - : Erlaubt dem Roboter, die Seite zu indexieren. Dies ist das Standardverhalten.
        Wird von allen großen Crawlern verwendet.
    - `noindex`
      - : Bitte den Roboter, die Seite nicht zu indexieren.
        Wird von allen großen Crawlern verwendet.
    - `follow`
      - : Erlaubt dem Roboter, Links auf der Seite zu folgen. Dies ist das Standardverhalten.
        Wird von allen großen Crawlern verwendet.
    - `nofollow`
      - : Bitte den Roboter, Links auf der Seite nicht zu folgen.
        Wird von allen großen Crawlern verwendet.
    - `all`
      - : Entspricht `index, follow`.
        Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965067987211-415685194&rd=1).
    - `none`
      - : Entspricht `noindex, nofollow`.
        Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965074074862-574753619&rd=1).
    - `noarchive`
      - : Bitte die Suchmaschine, den Seiteninhalt nicht im Cache zu speichern.
        Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).
    - `nosnippet`
      - : Verhindert die Anzeige einer Beschreibung der Seite in den Suchmaschinenergebnissen.
        Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).
    - `noimageindex`
      - : Bitte, dass diese Seite nicht als verweisende Seite eines indizierten Bildes erscheint.
        Verwendet von: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).
    - `nocache`
      - : Synonym für `noarchive`.
        Verwendet von: [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).

## Beschreibung

Es gibt einige wichtige Überlegungen, die bei der Einstellung eines `robots`-Meta-Werts zu beachten sind:

- Nur kooperative Roboter befolgen diese Regeln. Sie verhindern nicht, dass böswillige Akteure wie E-Mail-Harvester die Anweisungen ignorieren.
- Wenn in einem `<meta>`-Tag definiert, müssen Roboter die Seite trotzdem aufrufen, um diese Regeln zu lesen. Um die Bandbreite zu reduzieren, sollten Sie stattdessen eine [robots.txt-Datei](/de/docs/Web/Security/Practical_implementation_guides/Robots_txt) verwenden.
- Das `<meta name="robots">`-Tag und die `robots.txt`-Datei erfüllen unterschiedliche Rollen: `robots.txt` steuert das Crawling, während das `robots`-Meta-Tag die Indexierung und anderes Verhalten beeinflusst.
- Eine durch `robots.txt` blockierte Seite kann trotzdem indiziert werden, wenn sie von anderen Quellen verlinkt wird.
- Die `noindex`-Direktive wird erst wirksam, nachdem der Roboter die Seite erneut besucht hat, daher sollten Sie sicherstellen, dass `robots.txt` dies nicht verhindert.
- Einige Werte, wie `index` vs. `noindex` oder `follow` vs. `nofollow`, schließen sich gegenseitig aus. Das Verhalten ist undefined, wenn widersprüchliche Werte verwendet werden.
- Roboter wie Google, Yahoo und Bing unterstützen diese Direktiven auch im HTTP-Header {{HTTPHeader("X-Robots-Tag")}}, was für nicht-HTML-Inhalte wie PDFs oder Bilder nützlich ist.

## Beispiele

### Verwendung eines Robots-Schlüsselworts

Das folgende Beispiel verwendet `nofollow`, um anzufordern, dass ein Crawler keine Links auf einer Seite verfolgt, und `noindex`, um anzufordern, dass die Seite von der Indexierung ausgeschlossen wird:

```html
<meta name="robots" content="nofollow, noindex" />
```

## Spezifikationen

Obwohl nicht Teil einer Spezifikation, ist es eine de-facto Standardmethode zur Kommunikation mit Suchmaschinen-Bots, Web-Crawlern und ähnlichen User Agents.

## Browser-Kompatibilität

Dieses Merkmal ist für Crawler zur Beachtung vorgesehen, daher ist "Browser"-Kompatibilität nicht anwendbar.

## Siehe auch

- {{httpheader("X-Robots-Tag")}} HTTP-Header
- [robots.txt-Konfiguration](/de/docs/Web/Security/Practical_implementation_guides/Robots_txt) Leitfaden
- {{Glossary("robots.txt", "robots.txt")}} Glossareintrag
- {{Glossary("Search_engine", "Suchmaschine")}} Glossareintrag
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [WHATWG Wiki MetaExtensions-Seite](https://wiki.whatwg.org/wiki/MetaExtensions)
- [Verwendung des Robots-Meta-Tags](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#robotsmeta) auf developers.google.com
