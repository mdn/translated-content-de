---
title: Web Performance-Ressourcen
slug: Learn/Performance/Web_Performance_Basics
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenu("Learn/Performance/business_case_for_performance", "Learn/Performance")}}

Es gibt viele [Gründe](https://web.dev/learn/performance/why-speed-matters), warum Ihre Website so gut wie möglich performen sollte. Nachfolgend finden Sie eine kurze Übersicht über bewährte Praktiken, Tools und APIs mit Links zu weiteren Informationen zu jedem Thema.

## Best Practices

- Beginnen Sie damit, den [Critical Rendering Path](/de/docs/Web/Performance/Critical_rendering_path) des Browsers zu erlernen. Das Wissen darüber hilft Ihnen, die Leistung der Website zu verbessern.
- Verwenden Sie _Resource Hints_ wie [`rel=preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect), [`rel=dns-prefetch`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch), [`rel=prefetch`](/de/docs/Web/HTML/Attributes/rel/prefetch), [`rel=preload`](/de/docs/Web/HTML/Attributes/rel/preload).
- Halten Sie die Größe von JavaScript auf einem [Minimum](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4). Verwenden Sie nur so viel JavaScript, wie für die aktuelle Seite erforderlich ist.
- [CSS](/de/docs/Learn/Performance/CSS)-Leistungsfaktoren
- Verwenden Sie {{Glossary("HTTP_2", "HTTP/2")}} auf Ihrem Server (oder CDN).
- Nutzen Sie ein CDN für Ressourcen, das die Ladezeiten erheblich reduzieren kann.
- Komprimieren Sie Ihre Ressourcen mit [gzip](https://www.gnu.org/software/gzip/), [Brotli](https://github.com/google/brotli) und [Zopfli](https://github.com/google/zopfli).
- Bildoptimierung (verwenden Sie nach Möglichkeit CSS-Animation oder SVG).
- Verwenden Sie Lazy Loading für Teile Ihrer Anwendung außerhalb des Viewports. Wenn Sie dies tun, haben Sie einen Backup-Plan für SEO (z.B. gesamte Seite für Bot-Traffic rendern); z.B. durch Verwendung des [`loading`](/de/docs/Web/HTML/Element/img#loading)-Attributs im {{HTMLElement("img")}}-Element.
- Es ist auch wichtig zu erkennen, was für Ihre Nutzer wirklich wichtig ist. Es geht möglicherweise nicht um absolute Zeiten, sondern um die [Wahrnehmung der Nutzer](/de/docs/Learn/Performance/Perceived_performance).

## Schnelle Erfolge

### CSS

Web-Performance dreht sich um Benutzererfahrung und wahrgenommene Leistung. Wie wir im Dokument zum [Critical Rendering Path](/de/docs/Web/Performance/Critical_rendering_path) gelernt haben, ist das Verknüpfen von CSS mit einem traditionellen Link-Tag mit rel="stylesheet" synchron und blockiert das Rendering. Optimieren Sie das Rendering Ihrer Seite, indem Sie blockierendes CSS entfernen.

Um CSS asynchron zu laden, kann man den Medientyp auf „Druck“ setzen und dann auf „alle“ ändern, sobald es geladen ist. Das folgende Snippet enthält ein onload-Attribut, das JavaScript erfordert, daher ist es wichtig, ein noscript-Tag mit einem traditionellen Fallback einzuschließen.

```html
<link
  rel="stylesheet"
  href="/path/to/my.css"
  media="print"
  onload="this.media='all'" />
<noscript><link rel="stylesheet" href="/path/to/my.css" /></noscript>
```

Der Nachteil bei diesem Ansatz ist der Flash of Unstyled Text (FOUT). Der einfachste Weg, dies zu beheben, besteht darin, CSS inline zu verwenden, das für jeden Inhalt erforderlich ist, der über der Falzlinie gerendert wird, oder was Sie im Browser-Viewport sehen, bevor Sie scrollen. Diese Styles verbessern die wahrgenommene Leistung, da das CSS keine Dateianforderung erfordert.

```html
<style>
  /* Insert your CSS here */
</style>
```

### JavaScript

Vermeiden Sie das Blockieren von JavaScript, indem Sie die [async](/de/docs/Web/HTML/Element/script) oder [defer](/de/docs/Web/HTML/Element/script)-Attribute verwenden oder JavaScript-Dateien nach den DOM-Elementen der Seite verknüpfen. JavaScript blockiert nur das Rendering für Elemente, die nach dem Script-Tag im DOM-Baum erscheinen.

### Web Fonts

EOT- und TTF-Formate sind standardmäßig nicht komprimiert. Wenden Sie Komprimierung wie GZIP oder Brotli für diese Dateitypen an. Verwenden Sie WOFF und WOFF2. Diese Formate haben eine integrierte Komprimierung.

Innerhalb von @font-face verwenden Sie font-display: swap. Durch die Verwendung von font display swap blockiert der Browser das Rendering nicht und verwendet die definierten Backup-Systemschriften. Optimieren Sie das [Schriftgewicht](/de/docs/Web/CSS/font-weight), um der Webschriftart möglichst nahe zu kommen.

#### Icon-Webschriften

Vermeiden Sie, wenn möglich, Icon-Webschriften und verwenden Sie komprimierte SVGs. Um weiter zu optimieren, betten Sie Ihre SVG-Daten in das HTML-Markup ein, um HTTP-Anfragen zu vermeiden.

## Tools

- Lernen Sie, die [Firefox Dev Tools](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) zu nutzen, um Ihre Website zu profilieren.
- [PageSpeed Insights](https://pagespeed.web.dev/) kann Ihre Seite analysieren und einige allgemeine Hinweise zur Leistungsverbesserung geben.
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) kann Ihnen eine detaillierte Analyse vieler Aspekte Ihrer Website geben, einschließlich Leistung, SEO und Barrierefreiheit.
- Testen Sie die Geschwindigkeit Ihrer Seite mit [WebPageTest.org](https://www.webpagetest.org/), wo Sie verschiedene reale Gerätetypen und Standorte nutzen können.
- Probieren Sie den [Chrome User Experience Report](https://developer.chrome.com/docs/crux/) aus, der tatsächliche Nutzermetriken quantifiziert.
- Definieren Sie ein [Performance-Budget](/de/docs/Web/Performance/Performance_budgets).

### APIs

- Sammeln Sie Benutzermetriken mit der [boomerang](https://github.com/akamai/boomerang)-Bibliothek.
- Oder sammeln Sie diese direkt mit [window.performance.timing](/de/docs/Web/API/Performance/timing).

### Dinge, die man nicht tun sollte (schlechte Praktiken)

- Alles herunterladen
- Unkomprimierte Mediendateien verwenden

## Siehe auch

- <https://github.com/filamentgroup/loadCSS>
