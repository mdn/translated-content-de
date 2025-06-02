---
title: Webperformance-Ressourcen
slug: Learn_web_development/Extensions/Performance/Web_Performance_Basics
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{PreviousMenu("Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Es gibt viele [Gründe](https://web.dev/learn/performance/why-speed-matters), warum Ihre Website so gut wie möglich funktionieren sollte. Im Folgenden finden Sie eine kurze Übersicht über Best Practices, Tools, APIs mit Links, die weitere Informationen zu jedem Thema bieten.

## Best Practices

- Beginnen Sie damit, den [kritischen Renderingpfad](/de/docs/Web/Performance/Guides/Critical_rendering_path) des Browsers zu erlernen. Das Wissen darüber wird Ihnen helfen, zu verstehen, wie Sie die Leistung der Website verbessern können.
- Verwenden Sie _Resource Hints_ wie [`rel=preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), [`rel=dns-prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch), [`rel=prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch), [`rel=preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload).
- Halten Sie die Größe von JavaScript [minimal](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4). Verwenden Sie nur so viel JavaScript, wie für die aktuelle Seite erforderlich ist.
- [CSS](/de/docs/Learn_web_development/Extensions/Performance/CSS)-Leistungsfaktoren
- Verwenden Sie {{Glossary("HTTP_2", "HTTP/2")}} auf Ihrem Server (oder CDN).
- Nutzen Sie ein CDN für Ressourcen, was die Ladezeiten erheblich reduzieren kann.
- Komprimieren Sie Ihre Ressourcen mit [gzip](https://www.gnu.org/software/gzip/), [Brotli](https://github.com/google/brotli) und [Zopfli](https://github.com/google/zopfli).
- Bildoptimierung (verwenden Sie CSS-Animationen oder SVG, wenn möglich).
- Verzögertes Laden von Teilen Ihrer Anwendung außerhalb des Viewports. Wenn Sie dies tun, haben Sie einen Backup-Plan für SEO (z. B. vollständiges Rendern der Seite für Bot-Traffic); zum Beispiel durch die Verwendung des [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading)-Attributs im {{HTMLElement("img")}}-Element.
- Es ist auch wichtig zu verstehen, was für Ihre Nutzer wirklich wichtig ist. Es geht möglicherweise nicht um absolute Zeiten, sondern um die [Wahrnehmung der Nutzer](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance).

## Schnellgewinne

### CSS

Webperformance dreht sich um Benutzererfahrung und wahrgenommene Leistung. Wie wir im Dokument zum [kritischen Renderingpfad](/de/docs/Web/Performance/Guides/Critical_rendering_path) gelernt haben, ist das Verlinken von CSS mit einem traditionellen Link-Tag mit `rel="stylesheet"` synchron und blockiert das Rendering. Optimieren Sie das Rendering Ihrer Seite, indem Sie blockierendes CSS entfernen.

Um CSS asynchron zu laden, kann man den Medientyp auf `print` setzen und dann nach dem Laden auf `all` umstellen. Dies erfordert JavaScript, daher ist es wichtig, ein `<noscript>`-Tag mit einer traditionellen Fallback-Lösung einzubinden.

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

Der Nachteil bei dieser Methode ist das Aufblitzen ungestylten Textes (FOUT). Der einfachste Weg, dies zu beheben, ist, CSS inline einzubinden, das für jeden Inhalt benötigt wird, der über dem Falz gerendert wird, oder was im Browser-Viewport vor dem Scrollen zu sehen ist. Diese Stile verbessern die wahrgenommene Leistung, da das CSS keine Dateianfrage erfordert.

```html
<style>
  /* Insert your CSS here */
</style>
```

### JavaScript

Vermeiden Sie das Blockieren von JavaScript, indem Sie die Attribute [`async`](/de/docs/Web/HTML/Reference/Elements/script) oder [`defer`](/de/docs/Web/HTML/Reference/Elements/script) verwenden oder JavaScript-Ressourcen nach den DOM-Elementen der Seite verlinken. JavaScript blockiert nur das Rendering von Elementen, die nach dem Skripttag im DOM-Baum erscheinen.

### Web Fonts

EOT- und TTF-Formate sind standardmäßig nicht komprimiert. Wenden Sie Kompression wie GZIP oder Brotli auf diese Dateitypen an. Verwenden Sie WOFF und WOFF2. Diese Formate haben die Kompression eingebaut.

Verwenden Sie innerhalb von @font-face `font-display: swap`. Durch die Verwendung von `font-display: swap` blockiert der Browser das Rendering nicht und verwendet die definierten systemeigenen Schriftarten als Backup. Optimieren Sie das [Schriftgewicht](/de/docs/Web/CSS/font-weight), um es so genau wie möglich an die Web-Schriftart anzupassen.

#### Symbol-Webfonts

Vermeiden Sie, wenn möglich, Symbol-Webfonts und verwenden Sie komprimierte SVGs. Um weiter zu optimieren, können Sie Ihre SVG-Daten innerhalb des HTML-Markups einbetten, um HTTP-Anfragen zu vermeiden.

## Tools

- Lernen Sie, die [Firefox Dev Tools](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) zu verwenden, um Ihre Website zu profilieren.
- [PageSpeed Insights](https://pagespeed.web.dev/) kann Ihre Seite analysieren und allgemeine Hinweise zur Verbesserung der Leistung geben.
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) kann Ihnen eine detaillierte Aufschlüsselung vieler Aspekte Ihrer Website bieten, einschließlich Leistung, SEO und Zugänglichkeit.
- Testen Sie die Geschwindigkeit Ihrer Seite mit [WebPageTest.org](https://www.webpagetest.org/), wo Sie verschiedene reale Gerätetypen und Standorte verwenden können.
- Versuchen Sie den [Chrome User Experience Report](https://developer.chrome.com/docs/crux/), der reale Nutzermetriken quantifiziert.
- Definieren Sie ein [Performance-Budget](/de/docs/Web/Performance/Guides/Performance_budgets).

### APIs

- Sammeln Sie Nutzermetriken mit der [boomerang](https://github.com/akamai/boomerang)-Bibliothek.
- Oder sammeln Sie direkt mit [window.performance.timing](/de/docs/Web/API/Performance/timing).

### Dinge, die Sie nicht tun sollten (schlechte Praktiken)

- Alles herunterladen
- Unkomprimierte Mediendateien verwenden

## Siehe auch

- <https://github.com/filamentgroup/loadCSS>
