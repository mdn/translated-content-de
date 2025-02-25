---
title: Web Performance Ressourcen
slug: Learn_web_development/Extensions/Performance/Web_Performance_Basics
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Es gibt viele [Gründe](https://web.dev/learn/performance/why-speed-matters), warum Ihre Website so gut wie möglich performen sollte. Unten finden Sie eine schnelle Übersicht über Best Practices, Tools, APIs mit Links, die weitere Informationen zu jedem Thema bieten.

## Best Practices

- Beginnen Sie mit dem Lernen des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Guides/Critical_rendering_path) des Browsers. Dieses Wissen wird Ihnen helfen, die Leistung der Website zu verbessern.
- Verwenden Sie _Resource Hints_ wie [`rel=preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect), [`rel=dns-prefetch`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch), [`rel=prefetch`](/de/docs/Web/HTML/Attributes/rel/prefetch), [`rel=preload`](/de/docs/Web/HTML/Attributes/rel/preload).
- Halten Sie die Größe von JavaScript auf ein [Minimum](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4). Verwenden Sie nur so viel JavaScript, wie für die aktuelle Seite notwendig ist.
- [CSS](/de/docs/Learn_web_development/Extensions/Performance/CSS) Leistungsfaktoren
- Verwenden Sie {{Glossary("HTTP_2", "HTTP/2")}} auf Ihrem Server (oder CDN).
- Nutzen Sie ein CDN für Ressourcen, um die Ladezeiten signifikant zu reduzieren.
- Komprimieren Sie Ihre Ressourcen mit [gzip](https://www.gnu.org/software/gzip/), [Brotli](https://github.com/google/brotli) und [Zopfli](https://github.com/google/zopfli).
- Bildoptimierung (verwenden Sie CSS-Animationen oder SVG, wenn möglich).
- Lazy Loading von Teilen Ihrer Anwendung außerhalb des Viewports. Wenn Sie dies tun, haben Sie einen Backup-Plan für SEO (z. B. vollständige Seite für Bot-Traffic rendern); beispielsweise durch Verwendung des [`loading`](/de/docs/Web/HTML/Element/img#loading) Attributs am {{HTMLElement("img")}} Element.
- Es ist auch wichtig zu erkennen, was Ihren Nutzern wirklich wichtig ist. Es geht möglicherweise nicht um absolute Zeit, sondern um [Benutzerwahrnehmung](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance).

## Schnelle Erfolge

### CSS

Web-Performance dreht sich um Benutzererfahrung und wahrgenommene Leistung. Wie wir im Dokument über den [kritischen Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path) gelernt haben, ist das Verlinken von CSS mit einem traditionellen Link-Tag mit rel="stylesheet" synchron und blockiert das Rendering. Optimieren Sie das Rendering Ihrer Seite, indem Sie blockierendes CSS entfernen.

Um CSS asynchron zu laden, kann man den Medientyp zunächst auf drucken setzen und dann auf alles ändern, wenn es geladen ist. Das folgende Snippet enthält ein onload-Attribut, das JavaScript erfordert, daher ist es wichtig, ein noscript-Tag mit einem herkömmlichen Fallback einzubinden.

```html
<link
  rel="stylesheet"
  href="/path/to/my.css"
  media="print"
  onload="this.media='all'" />
<noscript><link rel="stylesheet" href="/path/to/my.css" /></noscript>
```

Der Nachteil dieses Ansatzes ist das Aufblitzen ungestalteten Textes (FOUT). Der einfachste Weg, dies zu beheben, ist, CSS inline einzubinden, das für jeglichen Inhalt benötigt wird, der oberhalb der Falte gerendert wird, oder was Sie im Browser-Viewport sehen, bevor Sie scrollen. Diese Stile verbessern die wahrgenommene Leistung, da das CSS keine Dateianfrage erfordert.

```html
<style>
  /* Insert your CSS here */
</style>
```

### JavaScript

Vermeiden Sie JavaScript-Blockierungen durch Verwendung der [async](/de/docs/Web/HTML/Element/script) oder [defer](/de/docs/Web/HTML/Element/script) Attribute, oder verlinken Sie JavaScript-Ressourcen nach den DOM-Elementen der Seite. JavaScript blockiert nur das Rendering für Elemente, die im DOM-Baum nach dem Script-Tag erscheinen.

### Web Fonts

EOT- und TTF-Formate sind standardmäßig nicht komprimiert. Wenden Sie Komprimierungen wie GZIP oder Brotli für diese Dateitypen an. Verwenden Sie WOFF und WOFF2. Diese Formate haben eingebaute Komprimierung.

Verwenden Sie innerhalb von @font-face font-display: swap. Durch die Verwendung von Font-Display-Swap blockiert der Browser das Rendering nicht und verwendet die definierten Backup-Systemschriftarten. Optimieren Sie das [Schriftgewicht](/de/docs/Web/CSS/font-weight), um die Web-Schriftart so genau wie möglich zu treffen.

#### Icon Web Fonts

Vermeiden Sie, wenn möglich, Icon-Web-Schriftarten und verwenden Sie komprimierte SVGs. Um weiter zu optimieren, integrieren Sie Ihre SVG-Daten innerhalb der HTML-Markierung, um HTTP-Anfragen zu vermeiden.

## Tools

- Lernen Sie, die [Firefox Dev Tools](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) zu nutzen, um Ihr Profil zu erstellen.
- [PageSpeed Insights](https://pagespeed.web.dev/) kann Ihre Seite analysieren und einige allgemeine Hinweise zur Leistungsverbesserung geben.
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) kann Ihnen eine detaillierte Übersicht über viele Aspekte Ihrer Seite, einschließlich Performance, SEO und Zugänglichkeit, geben.
- Testen Sie die Geschwindigkeit Ihrer Seite mit [WebPageTest.org](https://www.webpagetest.org/), wo Sie verschiedene reale Gerätetypen und Standorte nutzen können.
- Probieren Sie den [Chrome User Experience Report](https://developer.chrome.com/docs/crux/) aus, der reale Nutzdaten quantifiziert.
- Definieren Sie ein [Performance-Budget](/de/docs/Web/Performance/Guides/Performance_budgets).

### APIs

- Sammeln Sie Nutzerkennzahlen mit der [boomerang](https://github.com/akamai/boomerang) Bibliothek.
- Oder sammeln Sie direkt mit [window.performance.timing](/de/docs/Web/API/Performance/timing).

### Dinge, die Sie nicht tun sollten (schlechte Praktiken)

- Alles herunterladen
- Unkomprimierte Mediendateien verwenden

## Siehe auch

- <https://github.com/filamentgroup/loadCSS>
