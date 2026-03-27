---
title: Beste Praktiken & Tipps zur Web-Performance
short-title: Beste Praktiken & Tipps
slug: Learn_web_development/Extensions/Performance/Best_practices
l10n:
  sourceCommit: 8db892b3e7ca294621898441e7db2481e0e6d939
---

{{PreviousMenu("Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Es gibt viele [Gründe](https://web.dev/learn/performance/why-speed-matters), warum Ihre Website so gut wie möglich performen sollte.
Nachfolgend finden Sie einen kurzen Überblick über bewährte Praktiken, Tools, APIs sowie Links, die weitere Informationen zu jedem Thema bieten.

## Beste Praktiken

- Beginnen Sie mit dem Erlernen des [kritischen Rendering-Pfades](/de/docs/Web/Performance/Guides/Critical_rendering_path) des Browsers. Wenn Sie diesen verstehen, können Sie die Performance Ihrer Website verbessern.
- Verwenden Sie _Resource Hints_ wie [`rel=preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), [`rel=dns-prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch), [`rel=prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch), [`rel=preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload).
- Halten Sie die Größe von JavaScript auf ein [Minimum](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4). Verwenden Sie nur so viel JavaScript, wie für die aktuelle Seite erforderlich ist.
- [CSS](/de/docs/Learn_web_development/Extensions/Performance/CSS) Performance-Faktoren
- Verwenden Sie {{Glossary("HTTP_2", "HTTP/2")}} auf Ihrem Server (oder CDN).
- Nutzen Sie ein CDN für Ressourcen, was die Ladezeiten erheblich reduzieren kann.
- Komprimieren Sie Ihre Ressourcen mit [gzip](https://www.gnu.org/software/gzip/), [Brotli](https://github.com/google/brotli) und [Zopfli](https://github.com/google/zopfli).
- Bildoptimierung (verwenden Sie CSS-Animationen oder SVG, wenn möglich).
- Lazy Loading von Teilen Ihrer Anwendung außerhalb des Viewports. Wenn Sie dies tun, haben Sie einen Backup-Plan für SEO (z. B. vollständige Seite für Bot-Traffic rendern); zum Beispiel durch Verwendung des [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading) Attributes auf dem {{HTMLElement("img")}} Element, oder ähnlich auf {{HTMLElement("iframe")}}, {{HTMLElement("video")}}, {{HTMLElement("audio")}} Elementen.
- Es ist auch wichtig, zu erkennen, was wirklich für Ihre Benutzer wichtig ist. Es könnte nicht die absolute Zeit sein, sondern [Benutzerwahrnehmung](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance).

## Schnelle Erfolge

### CSS

Web-Performance dreht sich um Benutzererfahrung und wahrgenommene Leistung. Wie wir im Dokument über den [kritischen Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path) gelernt haben, blockiert das Verknüpfen von CSS mit einem traditionellen Link-Tag mit `rel="stylesheet"` das Rendering synchron. Optimieren Sie das Rendering Ihrer Seite, indem Sie blockierendes CSS entfernen.

Um CSS asynchron zu laden, können Sie den Medientyp auf `print` setzen und dann auf `all` ändern, sobald es geladen ist. Dies erfordert JavaScript, daher ist es wichtig, einen `<noscript>`-Tag mit einer traditionellen Fallback-Option einzuschließen.

```html
<link
  id="my-stylesheet"
  rel="stylesheet"
  href="/path/to/my.css"
  media="print" />
<noscript><link rel="stylesheet" href="/path/to/my.css" /></noscript>
```

```js
const stylesheet = document.getElementById("my-stylesheet");
stylesheet.addEventListener("load", () => {
  stylesheet.media = "all";
});
```

Der Nachteil dieser Methode ist der Flash of Unstyled Text (FOUT). Der einfachste Weg, dies zu beheben, besteht darin, CSS, das für Inhalte erforderlich ist, die oberhalb des Folds dargestellt werden, inline zu definieren, oder was Sie im Browser-Viewport sehen, bevor gescrollt wird. Diese Styles verbessern die wahrgenommene Leistung, da das CSS keine Dateianfrage benötigt.

```html
<style>
  /* Insert your CSS here */
</style>
```

### JavaScript

Vermeiden Sie blockierendes JavaScript durch die Nutzung der Attribute [`async`](/de/docs/Web/HTML/Reference/Elements/script) oder [`defer`](/de/docs/Web/HTML/Reference/Elements/script), oder verknüpfen Sie JavaScript-Ressourcen nach den DOM-Elementen der Seite. JavaScript blockiert das Rendering nur für Elemente, die nach dem Script-Tag im DOM-Baum erscheinen.

### Webfonts

EOT und TTF-Formate sind standardmäßig nicht komprimiert. Wenden Sie Kompression wie GZIP oder Brotli für diese Dateitypen an. Verwenden Sie WOFF und WOFF2. Diese Formate verfügen über eine eingebaute Kompression.

Innerhalb von @font-face verwenden Sie font-display: swap. Durch die Nutzung von Font-Display-Swap blockiert der Browser das Rendering nicht und verwendet die definierten systemeigenen Fallback-Schriftarten. Optimieren Sie das [Schriftgewicht](/de/docs/Web/CSS/Reference/Properties/font-weight), um so gut wie möglich mit der Webfont-Schriftart übereinzustimmen.

#### Icon-Webfonts

Wenn möglich, vermeiden Sie Icon-Webfonts und verwenden Sie komprimierte SVGs. Um weiter zu optimieren, betten Sie Ihre SVG-Daten innerhalb des HTML-Markups ein, um HTTP-Anfragen zu vermeiden.

## Tools

- Lernen Sie, die [Firefox Dev Tools](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) zu nutzen, um Ihre Seite zu profilieren.
- [PageSpeed Insights](https://pagespeed.web.dev/) kann Ihre Seite analysieren und einige allgemeine Hinweise zur Verbesserung der Performance geben.
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) kann Ihnen eine detaillierte Übersicht vieler Aspekte Ihrer Seite einschließlich Performance, SEO und Zugänglichkeit geben.
- Testen Sie die Geschwindigkeit Ihrer Seite mit [WebPageTest.org](https://www.webpagetest.org/), wo Sie verschiedene echte Gerätetypen und Standorte verwenden können.
- Probieren Sie den [Chrome User Experience Report](https://developer.chrome.com/docs/crux/), der reale Benutzerkennzahlen quantifiziert.
- Definieren Sie ein [Performance-Budget](/de/docs/Web/Performance/Guides/Performance_budgets).

### APIs

- Sammeln Sie Benutzerkennzahlen mit dem [boomerang](https://github.com/akamai/boomerang) Bibliothek.
- Oder sammeln Sie direkt mit [window.performance.timing](/de/docs/Web/API/Performance/timing)

### Dinge, die Sie nicht tun sollten (schlechte Praktiken)

- Alles herunterladen
- Unkomprimierte Mediendateien verwenden

## Siehe auch

- <https://github.com/filamentgroup/loadCSS>
