---
title: Ressourcen zur Web-Leistung
slug: Learn_web_development/Extensions/Performance/Web_Performance_Basics
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Es gibt viele [Gründe](https://web.dev/learn/performance/why-speed-matters), warum Ihre Website so gut wie möglich performant sein sollte. Nachfolgend finden Sie einen kurzen Überblick über Best Practices, Tools und APIs mit Links, die weitere Informationen zu jedem Thema bieten.

## Best Practices

- Beginnen Sie damit, den [kritischen Renderpfad](/de/docs/Web/Performance/Critical_rendering_path) des Browsers zu lernen. Wenn Sie dies verstehen, können Sie die Leistung der Website verbessern.
- Verwenden Sie _Resource Hints_ wie `rel=preconnect`, `rel=dns-prefetch`, `rel=prefetch`, `rel=preload`.
- Halten Sie die Größe von JavaScript so [minimal](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4) wie möglich. Verwenden Sie nur so viel JavaScript, wie für die aktuelle Seite erforderlich ist.
- [CSS](/de/docs/Learn_web_development/Extensions/Performance/CSS) Leistungsfaktoren
- Verwenden Sie {{Glossary("HTTP_2", "HTTP/2")}} auf Ihrem Server (oder CDN).
- Verwenden Sie ein CDN für Ressourcen, um die Ladezeiten erheblich zu verkürzen.
- Komprimieren Sie Ihre Ressourcen mit [gzip](https://www.gnu.org/software/gzip/), [Brotli](https://github.com/google/brotli) und [Zopfli](https://github.com/google/zopfli).
- Bildoptimierung (verwenden Sie CSS-Animationen oder SVG, wenn möglich).
- Verzögertes Laden von Teilen Ihrer Anwendung außerhalb des Viewports. Wenn Sie dies tun, haben Sie einen Backup-Plan für SEO (z. B. vollständige Seitenränder für Bot-Verkehr); zum Beispiel durch die Verwendung des `loading`-Attributs auf dem {{HTMLElement("img")}} Element.
- Es ist auch entscheidend zu verstehen, was für Ihre Nutzer wirklich wichtig ist. Es muss nicht die absolute Zeit sein, sondern die [Wahrnehmung der Nutzer](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance).

## Schnelle Erfolge

### CSS

Web-Leistung dreht sich um Benutzererfahrung und wahrgenommene Leistung. Wie wir im Dokument zum [kritischen Renderpfad](/de/docs/Web/Performance/Critical_rendering_path) gelernt haben, ist das Verknüpfen von CSS mit einem traditionellen Link-Tag mit `rel="stylesheet"` synchron und blockiert das Rendering. Optimieren Sie das Rendering Ihrer Seite, indem Sie blockierendes CSS entfernen.

Um CSS asynchron zu laden, kann man den Medientyp auf "print" setzen und dann auf "all" ändern, sobald es geladen ist. Das folgende Snippet enthält ein Onload-Attribut, das JavaScript erfordert, daher ist es wichtig, ein Noscript-Tag mit einem traditionellen Fallback einzuschließen.

```html
<link
  rel="stylesheet"
  href="/path/to/my.css"
  media="print"
  onload="this.media='all'" />
<noscript><link rel="stylesheet" href="/path/to/my.css" /></noscript>
```

Der Nachteil dieses Ansatzes ist der Flash of Unstyled Text (FOUT). Der einfachste Weg, dies zu beheben, besteht darin, CSS Inline einzufügen, das für jeden oben sichtbaren Inhalt benötigt wird, oder was Sie im Browser-Viewport sehen, bevor Sie scrollen. Diese Styles verbessern die wahrgenommene Leistung, da das CSS keine Dateianfrage erfordert.

```html
<style>
  /* Insert your CSS here */
</style>
```

### JavaScript

Vermeiden Sie blockierendes JavaScript, indem Sie die `async`- oder `defer`-Attribute verwenden oder JavaScript-Ressourcen nach den DOM-Elementen der Seite verknüpfen. JavaScript blockiert nur das Rendering für Elemente, die nach dem Skript-Tag im DOM-Baum erscheinen.

### Web Fonts

EOT- und TTF-Formate sind standardmäßig nicht komprimiert. Wenden Sie Kompression wie GZIP oder Brotli für diese Dateitypen an. Verwenden Sie WOFF und WOFF2. Diese Formate haben eine eingebaute Kompression.

Innerhalb von `@font-face` verwenden Sie `font-display: swap`. Durch die Verwendung von Font Display Swap blockiert der Browser das Rendering nicht und verwendet die definierten Ersatzsystem-Schriftarten. Optimieren Sie das [Schriftgewicht](/de/docs/Web/CSS/font-weight), um so nah wie möglich an die Web-Schriftart heranzukommen.

#### Icon Web Fonts

Vermeiden Sie Icon-Webfonts, wenn möglich, und verwenden Sie komprimierte SVGs. Um weiter zu optimieren, betten Sie Ihre SVG-Daten innerhalb des HTML-Markups ein, um HTTP-Anfragen zu vermeiden.

## Tools

- Lernen Sie, die [Firefox Dev Tools](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) zu nutzen, um Ihre Seite zu profilieren.
- [PageSpeed Insights](https://pagespeed.web.dev/) kann Ihre Seite analysieren und allgemeine Hinweise zur Leistungsverbesserung geben.
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) kann Ihnen eine detaillierte Aufschlüsselung vieler Aspekte Ihrer Seite einschließlich Leistung, SEO und Zugänglichkeit geben.
- Testen Sie die Geschwindigkeit Ihrer Seite mit [WebPageTest.org](https://www.webpagetest.org/), wo Sie verschiedene reale Gerätetypen und Standorte verwenden können.
- Probieren Sie den [Chrome User Experience Report](https://developer.chrome.com/docs/crux/) aus, der reale Benutzermetriken quantifiziert.
- Definieren Sie ein [Leistungsbudget](/de/docs/Web/Performance/Performance_budgets).

### APIs

- Sammeln Sie Benutzermetriken mit der [boomerang](https://github.com/akamai/boomerang) Bibliothek.
- Oder sammeln Sie diese direkt mit `window.performance.timing`.

### Things not to do (schlechte Praktiken)

- Alles herunterladen
- Unkomprimierte Mediendateien verwenden

## Siehe auch

- <https://github.com/filamentgroup/loadCSS>
