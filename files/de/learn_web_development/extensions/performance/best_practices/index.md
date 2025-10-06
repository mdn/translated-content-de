---
title: Web Performance Best Practices & Tipps
short-title: Best Practices & Tipps
slug: Learn_web_development/Extensions/Performance/Best_practices
l10n:
  sourceCommit: f85d2e26b062decf7a2bb9179c3a93003f4067a9
---

{{PreviousMenu("Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Es gibt viele [Gründe](https://web.dev/learn/performance/why-speed-matters), warum Ihre Website so gut wie möglich funktionieren sollte. Nachfolgend finden Sie einen kurzen Überblick über Best Practices, Tools und APIs, mit Links zu weiteren Informationen zu jedem Thema.

## Best Practices

- Beginnen Sie mit dem Lernen des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Guides/Critical_rendering_path) des Browsers. Dieses Wissen wird Ihnen helfen, die Leistung der Website zu verbessern.
- Verwenden Sie _Ressourcenhinweise_ wie [`rel=preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), [`rel=dns-prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch), [`rel=prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch), [`rel=preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload).
- Halten Sie die Größe von JavaScript auf einem [Minimum](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4). Verwenden Sie nur so viel JavaScript, wie für die aktuelle Seite benötigt wird.
- [CSS](/de/docs/Learn_web_development/Extensions/Performance/CSS)-Leistungsfaktoren
- Verwenden Sie {{Glossary("HTTP_2", "HTTP/2")}} auf Ihrem Server (oder CDN).
- Verwenden Sie ein CDN für Ressourcen, die die Ladezeiten erheblich verkürzen können.
- Komprimieren Sie Ihre Ressourcen mit [gzip](https://www.gnu.org/software/gzip/), [Brotli](https://github.com/google/brotli) und [Zopfli](https://github.com/google/zopfli).
- Bildoptimierung (verwenden Sie CSS-Animation, oder SVG, wenn möglich).
- Lazy-Loading von Teilen Ihrer Anwendung außerhalb des Viewports. Wenn ja, haben Sie einen Backup-Plan für SEO (z.B. vollständige Seite für Bot-Traffic rendern); zum Beispiel durch Verwendung des [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading)-Attributs am {{HTMLElement("img")}}-Element.
- Es ist auch entscheidend zu erkennen, was für Ihre Benutzer wirklich wichtig ist. Es könnte nicht die absolute Zeitmessung sein, sondern die [Benutzerwahrnehmung](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance).

## Schnelle Erfolge

### CSS

Web-Performance dreht sich um Benutzererfahrung und wahrgenommene Leistung. Wie wir im Dokument zum [kritischen Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path) gelernt haben, wird bei der Verknüpfung von CSS mit einem traditionellen Link-Tag mit `rel="stylesheet"` das Rendering synchron blockiert. Optimieren Sie das Rendering Ihrer Seite, indem Sie blockierendes CSS entfernen.

Um CSS asynchron zu laden, können Sie den Medientyp auf `print` setzen und dann nach dem Laden auf `all` ändern. Dies erfordert JavaScript, daher ist es wichtig, ein `<noscript>`-Tag mit einem traditionellen Fallback einzuschließen.

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

Der Nachteil dieses Ansatzes ist das Auftreten eines Blitzes von ungestaltetem Text (FOUT). Der einfachste Weg, dies zu beheben, besteht darin, CSS inline zu platzieren, das für alle Inhalte erforderlich ist, die oberhalb der Falzlinie gerendert werden, oder was Sie im Browser-Viewport sehen, bevor Sie scrollen. Diese Styles verbessern die wahrgenommene Leistung, da das CSS keinen Dateianfrage benötigt.

```html
<style>
  /* Insert your CSS here */
</style>
```

### JavaScript

Vermeiden Sie JavaScript-Blockierungen, indem Sie die Attribute [`async`](/de/docs/Web/HTML/Reference/Elements/script) oder [`defer`](/de/docs/Web/HTML/Reference/Elements/script) verwenden, oder verlinken Sie JavaScript-Assets nach den DOM-Elementen der Seite. JavaScript blockiert nur das Rendering für Elemente, die nach dem Script-Tag im DOM-Baum erscheinen.

### Web Fonts

EOT- und TTF-Formate sind standardmäßig nicht komprimiert. Wenden Sie Kompression wie GZIP oder Brotli für diese Dateitypen an. Verwenden Sie WOFF und WOFF2. Diese Formate haben eine eingebaute Kompression.

Verwenden Sie innerhalb von @font-face `font-display: swap`. Indem Sie `font-display: swap` verwenden, blockiert der Browser das Rendering nicht und verwendet die definierten Backupsystem-Schriftarten. Optimieren Sie das [Schriftgewicht](/de/docs/Web/CSS/font-weight), um der Web-Schriftart so nahe wie möglich zu kommen.

#### Icon-Webfonts

Vermeiden Sie wenn möglich Icon-Webfonts und verwenden Sie komprimierte SVGs. Um weiter zu optimieren, betten Sie Ihre SVG-Daten innerhalb des HTML-Markups ein, um HTTP-Anfragen zu vermeiden.

## Werkzeuge

- Lernen Sie, die [Firefox Dev Tools](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) zu verwenden, um Ihr Website-Profiling durchzuführen.
- [PageSpeed Insights](https://pagespeed.web.dev/) kann Ihre Seite analysieren und einige allgemeine Tipps zur Leistungsverbesserung geben.
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) kann Ihnen eine detaillierte Aufschlüsselung vieler Aspekte Ihrer Website inklusive Leistung, SEO und Zugänglichkeit geben.
- Testen Sie die Geschwindigkeit Ihrer Seite mit [WebPageTest.org](https://www.webpagetest.org/), wo Sie verschiedene reale Gerätetypen und Standorte verwenden können.
- Versuchen Sie den [Chrome User Experience Report](https://developer.chrome.com/docs/crux/), der reale Benutzermetriken quantifiziert.
- Definieren Sie ein [Leistungsbudget](/de/docs/Web/Performance/Guides/Performance_budgets).

### APIs

- Sammeln Sie Benutzermetriken mit der [boomerang](https://github.com/akamai/boomerang) Bibliothek.
- Oder sammeln Sie direkt mit [window.performance.timing](/de/docs/Web/API/Performance/timing).

### Dinge, die man nicht tun sollte (schlechte Praktiken)

- Alles herunterladen
- Nicht komprimierte Mediendateien verwenden

## Siehe auch

- <https://github.com/filamentgroup/loadCSS>
