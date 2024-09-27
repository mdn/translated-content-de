---
title: Web-Performance-Ressourcen
slug: Learn/Performance/Web_Performance_Basics
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenu("Learn/Performance/business_case_for_performance", "Learn/Performance")}}

Es gibt viele [Gründe](https://web.dev/learn/performance/why-speed-matters), warum Ihre Website so gut wie möglich funktionieren sollte.
Im Folgenden finden Sie eine kurze Übersicht über bewährte Methoden, Tools, APIs mit Links, die weitere Informationen zu jedem Thema bieten.

## Best Practices

- Beginnen Sie damit, den [kritischen Rendering-Pfad](/de/docs/Web/Performance/Critical_rendering_path) des Browsers zu erlernen. Dies zu wissen wird Ihnen helfen, die Leistung der Website zu verbessern.
- Verwendung von _Resource Hints_ wie [`rel=preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect), [`rel=dns-prefetch`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch), [`rel=prefetch`](/de/docs/Web/HTML/Attributes/rel/prefetch), [`rel=preload`](/de/docs/Web/HTML/Attributes/rel/preload).
- Halten Sie die Größe von JavaScript auf ein [Minimum](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4). Verwenden Sie nur so viel JavaScript, wie für die aktuelle Seite benötigt wird.
- [CSS](/de/docs/Learn/Performance/CSS)-Leistungsfaktoren
- Verwenden Sie [HTTP/2](/de/docs/Glossary/HTTP_2) auf Ihrem Server (oder CDN).
- Nutzen Sie ein CDN für Ressourcen, was die Ladezeiten erheblich reduzieren kann.
- Komprimieren Sie Ihre Ressourcen mit [gzip](https://www.gnu.org/software/gzip/), [Brotli](https://github.com/google/brotli) und [Zopfli](https://github.com/google/zopfli).
- Bildoptimierung (verwenden Sie CSS-Animation oder SVG, wenn möglich).
- Lazy Loading von Teilen Ihrer Anwendung außerhalb des Viewports. Wenn Sie dies tun, haben Sie einen Backup-Plan für SEO (z.B. vollständige Seitendarstellung für Bot-Traffic), beispielsweise durch Verwendung des [`loading`](/de/docs/Web/HTML/Element/img#loading) Attributs auf dem {{HTMLElement("img")}} Element.
- Es ist auch wichtig zu verstehen, was Ihren Benutzern wirklich wichtig ist. Es geht möglicherweise nicht um absolute Zeiten, sondern um die [Benutzerwahrnehmung](/de/docs/Learn/Performance/Perceived_performance).

## Schnelle Erfolge

### CSS

Web-Performance dreht sich um Benutzererfahrung und wahrgenommene Leistung. Wie wir im Dokument über den [kritischen Rendering-Pfad](/de/docs/Web/Performance/Critical_rendering_path) gelernt haben, blockiert das Verknüpfen von CSS mit einem herkömmlichen Link-Tag mit rel="stylesheet" das Rendern synchron. Optimieren Sie das Rendern Ihrer Seite, indem Sie blockierendes CSS entfernen.

Um CSS asynchron zu laden, kann man den Medientyp auf Drucken setzen und dann auf Alles wechseln, sobald es geladen ist. Das folgende Snippet enthält ein onload-Attribut, das JavaScript erfordert, daher ist es wichtig, ein noscript-Tag mit einer herkömmlichen Rückfallebene einzuschließen.

```html
<link
  rel="stylesheet"
  href="/path/to/my.css"
  media="print"
  onload="this.media='all'" />
<noscript><link rel="stylesheet" href="/path/to/my.css" /></noscript>
```

Der Nachteil dieses Ansatzes ist das Flash of Unstyled Text (FOUT). Der einfachste Weg, dies zu beheben, besteht darin, CSS inline einzufügen, das für Inhalte erforderlich ist, die oberhalb des Faltbereichs gerendert werden, oder was Sie im Browser-Viewport sehen, bevor Sie scrollen. Diese Stile verbessern die wahrgenommene Leistung, da das CSS keine Dateianfragen erfordert.

```html
<style>
  /* Insert your CSS here */
</style>
```

### JavaScript

Vermeiden Sie JavaScript-Blockierung durch die Verwendung der [async](/de/docs/Web/HTML/Element/script) oder [defer](/de/docs/Web/HTML/Element/script) Attribute oder verknüpfen Sie JavaScript-Ressourcen nach den DOM-Elementen der Seite. JavaScript blockiert das Rendern nur für Elemente, die nach dem Skript-Tag im DOM-Baum erscheinen.

### Web Fonts

EOT- und TTF-Formate sind standardmäßig nicht komprimiert. Wenden Sie Kompression wie GZIP oder Brotli auf diese Dateitypen an. Verwenden Sie WOFF und WOFF2. Diese Formate haben Kompression eingebaut.

Verwenden Sie innerhalb von @font-face `font-display: swap`. Durch die Verwendung von `font-display: swap` blockiert der Browser nicht das Rendern und verwendet die definierten Backup-Systemschriftarten. Optimieren Sie das [Schriftgewicht](/de/docs/Web/CSS/font-weight), um den Webfont so genau wie möglich anzupassen.

#### Icon Web Fonts

Vermeiden Sie, wenn möglich, Icon Web Fonts und verwenden Sie komprimierte SVGs. Um weiter zu optimieren, betten Sie Ihre SVG-Daten innerhalb von HTML-Markup ein, um HTTP-Anfragen zu vermeiden.

## Tools

- Lernen Sie, die [Firefox Dev Tools](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) zu verwenden, um Ihre Seite zu profilieren.
- [PageSpeed Insights](https://pagespeed.web.dev/) kann Ihre Seite analysieren und einige allgemeine Hinweise zur Verbesserung der Leistung geben.
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) kann Ihnen eine detaillierte Analyse vieler Aspekte Ihrer Website geben, einschließlich Leistung, SEO und Zugänglichkeit.
- Testen Sie die Geschwindigkeit Ihrer Seite mit [WebPageTest.org](https://www.webpagetest.org/), wo Sie verschiedene reale Gerätetypen und Standorte verwenden können.
- Probieren Sie den [Chrome User Experience Report](https://developer.chrome.com/docs/crux/) aus, der reale Nutzermetriken quantifiziert.
- Definieren Sie ein [Performance-Budget](/de/docs/Web/Performance/Performance_budgets).

### APIs

- Sammeln Sie Benutzermetriken mithilfe der [boomerang](https://github.com/akamai/boomerang) Bibliothek.
- Oder sammeln Sie direkt mit [window.performance.timing](/de/docs/Web/API/Performance/timing)

### Dinge, die Sie nicht tun sollten (schlechte Praktiken)

- Alles herunterladen
- Unkomprimierte Mediendateien verwenden

## Siehe auch

- <https://github.com/filamentgroup/loadCSS>
