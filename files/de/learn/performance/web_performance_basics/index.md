---
title: Web-Performance-Ressourcen
slug: Learn/Performance/Web_Performance_Basics
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenu("Learn/Performance/business_case_for_performance", "Learn/Performance")}}

Es gibt viele [Gründe](https://web.dev/learn/performance/why-speed-matters), warum Ihre Website so gut wie möglich performen sollte. Im Folgenden finden Sie einen schnellen Überblick über Best Practices, Tools und APIs mit Links zu weiteren Informationen zu jedem Thema.

## Best Practices

- Beginnen Sie mit dem Erlernen des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Critical_rendering_path) des Browsers. Wenn Sie diesen kennen, können Sie verstehen, wie Sie die Leistung der Website verbessern können.
- Verwendung von _Ressourcenhinweisen_ wie [`rel=preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect), [`rel=dns-prefetch`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch), [`rel=prefetch`](/de/docs/Web/HTML/Attributes/rel/prefetch), [`rel=preload`](/de/docs/Web/HTML/Attributes/rel/preload).
- Halten Sie die Größe von JavaScript auf ein [Minimum](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4). Verwenden Sie nur so viel JavaScript, wie für die aktuelle Seite erforderlich ist.
- [CSS](/de/docs/Learn/Performance/CSS)-Leistungsfaktoren
- Verwenden Sie {{Glossary("HTTP_2", "HTTP/2")}} auf Ihrem Server (oder CDN).
- Nutzen Sie ein CDN für Ressourcen, um die Ladezeiten erheblich zu reduzieren.
- Komprimieren Sie Ihre Ressourcen mit [gzip](https://www.gnu.org/software/gzip/), [Brotli](https://github.com/google/brotli) und [Zopfli](https://github.com/google/zopfli).
- Bildoptimierung (verwenden Sie CSS-Animationen oder SVG, wenn möglich).
- Lazy Loading von Teilen Ihrer Anwendung außerhalb des Viewports. Wenn Sie dies tun, haben Sie einen Backup-Plan für SEO (z.B. vollständige Seite für Bot-Verkehr rendern); zum Beispiel durch die Verwendung des [`loading`](/de/docs/Web/HTML/Element/img#loading) Attributs auf dem {{HTMLElement("img")}}-Element.
- Es ist auch entscheidend zu erkennen, was für Ihre Benutzer wirklich wichtig ist. Vielleicht ist nicht das absolute Timing entscheidend, sondern die [Wahrnehmung des Benutzers](/de/docs/Learn/Performance/Perceived_performance).

## Schnelle Gewinne

### CSS

Web-Performance dreht sich um Benutzererfahrung und wahrgenommene Leistung. Wie wir im Dokument über den [kritischen Rendering-Pfad](/de/docs/Web/Performance/Critical_rendering_path) gelernt haben, ist das Verknüpfen von CSS mit einem traditionellen Link-Tag mit rel="stylesheet" synchron und blockiert das Rendering. Optimieren Sie das Rendering Ihrer Seite, indem Sie blockierendes CSS entfernen.

Um CSS asynchron zu laden, kann man den Medientyp auf Druck setzen und nach dem Laden auf alle ändern. Das folgende Snippet enthält ein onload-Attribut, das JavaScript erfordert, daher ist es wichtig, ein noscript-Tag mit einem traditionellen Fallback einzufügen.

```html
<link
  rel="stylesheet"
  href="/path/to/my.css"
  media="print"
  onload="this.media='all'" />
<noscript><link rel="stylesheet" href="/path/to/my.css" /></noscript>
```

Der Nachteil dieses Ansatzes ist das Aufblitzen von nicht gestyltem Text (FOUT). Der einfachste Weg, dies zu beheben, besteht darin, CSS direkt einzufügen, das für alle Inhalte erforderlich ist, die über dem Falz gerendert werden, oder das, was Sie im Browser-Viewport sehen, bevor Sie scrollen. Diese Styles verbessern die wahrgenommene Leistung, da das CSS keine Dateianforderung benötigt.

```html
<style>
  /* Hier CSS einfügen */
</style>
```

### JavaScript

Vermeiden Sie das Blockieren von JavaScript, indem Sie die Attribute [async](/de/docs/Web/HTML/Element/script) oder [defer](/de/docs/Web/HTML/Element/script) verwenden oder JavaScript-Assets nach den DOM-Elementen der Seite verknüpfen. JavaScript blockiert nur das Rendering von Elementen, die nach dem Skript-Tag im DOM-Baum erscheinen.

### Web Fonts

EOT- und TTF-Formate sind standardmäßig nicht komprimiert. Wenden Sie Kompression wie GZIP oder Brotli für diese Dateitypen an. Verwenden Sie WOFF und WOFF2. Diese Formate haben eine eingebaute Kompression.

Verwenden Sie innerhalb von @font-face `font-display: swap`. Durch die Verwendung von `font-display: swap` blockiert der Browser das Rendering nicht und verwendet die definierten System-Backup-Schriften. Optimieren Sie [Schriftgewicht](/de/docs/Web/CSS/font-weight), um möglichst nah an die Web-Schrift heranzukommen.

#### Icon-Webfonts

Wenn möglich, vermeiden Sie Icon-Webfonts und verwenden Sie komprimierte SVGs. Um weiter zu optimieren, integrieren Sie Ihre SVG-Daten direkt in das HTML-Markup, um HTTP-Anforderungen zu vermeiden.

## Tools

- Lernen Sie die Nutzung der [Firefox Dev Tools](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), um Ihre Seite zu profilieren.
- [PageSpeed Insights](https://pagespeed.web.dev/) kann Ihre Seite analysieren und einige allgemeine Hinweise zur Leistungsverbesserung geben.
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) kann Ihnen eine detaillierte Aufschlüsselung vieler Aspekte Ihrer Seite geben, einschließlich Leistung, SEO und Zugänglichkeit.
- Testen Sie die Geschwindigkeit Ihrer Seite mit [WebPageTest.org](https://www.webpagetest.org/), wo Sie verschiedene reale Gerätetypen und -standorte verwenden können.
- Versuchen Sie den [Chrome User Experience Report](https://developer.chrome.com/docs/crux/), der reale Benutzermetriken quantifiziert.
- Definieren Sie ein [Leistungsbudget](/de/docs/Web/Performance/Performance_budgets).

### APIs

- Sammeln Sie Benutzermetriken mit der [boomerang](https://github.com/akamai/boomerang) Bibliothek.
- Oder sammeln Sie direkt mit [window.performance.timing](/de/docs/Web/API/Performance/timing).

### Dinge, die man nicht tun sollte (schlechte Praktiken)

- Alles herunterladen
- Ungerenderte Mediendateien verwenden

## Siehe auch

- <https://github.com/filamentgroup/loadCSS>
