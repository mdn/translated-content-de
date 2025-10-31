---
title: Web-Performance Best Practices & Tipps
short-title: Best Practices & Tipps
slug: Learn_web_development/Extensions/Performance/Best_practices
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{PreviousMenu("Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Es gibt viele [Gründe](https://web.dev/learn/performance/why-speed-matters), warum Ihre Website so gut wie möglich performen sollte. Im Folgenden finden Sie eine kurze Übersicht über Best Practices, Tools und APIs mit Links, die weitere Informationen zu jedem Thema bereitstellen.

## Best Practices

- Beginnen Sie damit, den [kritischen Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path) des Browsers zu lernen. Wenn Sie dies kennen, können Sie die Leistung der Website verbessern.
- Verwenden Sie _Resource Hints_ wie [`rel=preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), [`rel=dns-prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch), [`rel=prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch), [`rel=preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload).
- Halten Sie die Größe von JavaScript auf einem [Minimum](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4). Verwenden Sie nur so viel JavaScript wie für die aktuelle Seite nötig.
- [CSS](/de/docs/Learn_web_development/Extensions/Performance/CSS) Leistungsfaktoren
- Nutzen Sie {{Glossary("HTTP_2", "HTTP/2")}} auf Ihrem Server (oder CDN).
- Verwenden Sie ein CDN für Ressourcen, was die Ladezeiten erheblich reduzieren kann.
- Komprimieren Sie Ihre Ressourcen mit [gzip](https://www.gnu.org/software/gzip/), [Brotli](https://github.com/google/brotli) und [Zopfli](https://github.com/google/zopfli).
- Bildoptimierung (verwenden Sie CSS-Animationen oder SVGs, wenn möglich).
- Lazy Loading von Teilen Ihrer Anwendung außerhalb des Viewports. Wenn Sie dies tun, haben Sie einen Backup-Plan für SEO (z.B. vollständige Seiten für Bot-Traffic rendern), indem Sie das Attribut [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading) bei dem {{HTMLElement("img")}} Element verwenden.
- Es ist auch wichtig zu verstehen, was Ihren Benutzern wirklich wichtig ist. Es könnte nicht die absolute Zeit sein, sondern die [Wahrnehmung der Benutzer](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance).

## Schnelle Erfolge

### CSS

Web-Performance dreht sich alles um Benutzererfahrung und wahrgenommene Performance. Wie wir im Dokument über den [kritischen Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path) gelernt haben, ist das Verknüpfen von CSS mit einem traditionellen Link-Tag mit `rel="stylesheet"` synchron und blockiert das Rendering. Optimieren Sie das Rendering Ihrer Seite, indem Sie blockierendes CSS entfernen.

Um CSS asynchron zu laden, kann man den Medientyp auf `print` setzen und dann auf `all` ändern, sobald es geladen ist. Dies erfordert JavaScript, daher ist es wichtig, einen `<noscript>` Tag mit einem traditionellen Fallback einzuschließen.

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

Der Nachteil dieses Ansatzes ist das Auftreten von ungestaltetem Text (FOUT). Der einfachste Weg, dies zu beheben, ist das Inline-Styling von CSS, das für alle Inhalte erforderlich ist, die oberhalb des Folds gerendert werden, oder was Sie im Browser-Viewport sehen, bevor Sie scrollen. Diese Stile verbessern die wahrgenommene Performance, da das CSS keine Dateianfrage benötigt.

```html
<style>
  /* Insert your CSS here */
</style>
```

### JavaScript

Vermeiden Sie JavaScript-Blockierungen, indem Sie die Attribute [`async`](/de/docs/Web/HTML/Reference/Elements/script) oder [`defer`](/de/docs/Web/HTML/Reference/Elements/script) verwenden oder JavaScript-Assets nach den DOM-Elementen der Seite verlinken. JavaScript blockiert nur das Rendering von Elementen, die nach dem Script-Tag im DOM-Baum erscheinen.

### Web-Fonts

EOT- und TTF-Formate sind standardmäßig nicht komprimiert. Wenden Sie Komprimierung wie GZIP oder Brotli auf diese Dateitypen an. Verwenden Sie WOFF und WOFF2. Diese Formate haben eine eingebaute Komprimierung.

Verwenden Sie innerhalb von @font-face font-display: swap. Durch die Verwendung von font display swap blockiert der Browser das Rendering nicht und verwendet die definierten Backup-Systemschriften. Optimieren Sie das [Schriftgewicht](/de/docs/Web/CSS/Reference/Properties/font-weight), um mit der Web-Schriftart so genau wie möglich übereinzustimmen.

#### Web-Fonts für Symbole

Vermeiden Sie nach Möglichkeit Web-Fonts für Symbole und verwenden Sie komprimierte SVGs. Um weiter zu optimieren, betten Sie Ihre SVG-Daten innerhalb des HTML-Markups ein, um HTTP-Anfragen zu vermeiden.

## Tools

- Lernen Sie, die [Firefox Dev Tools](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) zu verwenden, um Ihr Site-Profil zu erstellen.
- [PageSpeed Insights](https://pagespeed.web.dev/) kann Ihre Seite analysieren und einige allgemeine Hinweise zur Leistungsverbesserung geben.
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) kann Ihnen eine detaillierte Analyse vieler Aspekte Ihrer Seite geben, einschließlich Leistung, SEO und Zugänglichkeit.
- Testen Sie die Geschwindigkeit Ihrer Seite mit [WebPageTest.org](https://www.webpagetest.org/), wo Sie verschiedene reale Gerätetypen und Standorte verwenden können.
- Versuchen Sie den [Chrome User Experience Report](https://developer.chrome.com/docs/crux/), der quantifizierte Nutzer-Metriken liefert.
- Definieren Sie ein [Performance-Budget](/de/docs/Web/Performance/Guides/Performance_budgets).

### APIs

- Erfassen Sie Nutzermetriken mit der [boomerang](https://github.com/akamai/boomerang) Bibliothek.
- Oder erfassen Sie direkt mit [window.performance.timing](/de/docs/Web/API/Performance/timing).

### Dinge, die man nicht tun sollte (schlechte Praktiken)

- Alles herunterladen
- Unkomprimierte Mediendateien verwenden

## Siehe auch

- <https://github.com/filamentgroup/loadCSS>
