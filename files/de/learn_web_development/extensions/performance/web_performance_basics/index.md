---
title: Web-Performance-Ressourcen
slug: Learn_web_development/Extensions/Performance/Web_Performance_Basics
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenu("Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Es gibt viele [Gründe](https://web.dev/learn/performance/why-speed-matters), warum Ihre Website so gut wie möglich funktionieren sollte. Im Folgenden finden Sie eine kurze Übersicht über bewährte Methoden, Tools und APIs mit Links, die zu weiteren Informationen über jedes Thema führen.

## Bewährte Methoden

- Beginnen Sie mit dem Erlernen des [kritischen Render-Pfades](/de/docs/Web/Performance/Guides/Critical_rendering_path) des Browsers. Diese Kenntnis wird Ihnen helfen, die Leistung der Website zu verbessern.
- Verwenden Sie _Ressourcenhinweise_ wie [`rel=preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), [`rel=dns-prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch), [`rel=prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch), [`rel=preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload).
- Halten Sie die Größe von JavaScript auf ein [Minimum](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4). Verwenden Sie nur so viel JavaScript, wie für die aktuelle Seite benötigt wird.
- [CSS](/de/docs/Learn_web_development/Extensions/Performance/CSS)-Performance-Faktoren
- Verwenden Sie {{Glossary("HTTP_2", "HTTP/2")}} auf Ihrem Server (oder CDN).
- Verwenden Sie ein CDN für Ressourcen, was die Ladezeiten erheblich reduzieren kann.
- Komprimieren Sie Ihre Ressourcen mit [gzip](https://www.gnu.org/software/gzip/), [Brotli](https://github.com/google/brotli) und [Zopfli](https://github.com/google/zopfli).
- Bildoptimierung (verwenden Sie CSS-Animationen oder SVG, wenn möglich).
- Verzögertes Laden von Teilen Ihrer Anwendung außerhalb des Viewports. Wenn Sie dies tun, haben Sie einen Backup-Plan für SEO (z.B. volle Seite für Bot-Traffic rendern); zum Beispiel durch Verwendung des [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading)-Attributs am {{HTMLElement("img")}}-Element.
- Es ist auch wichtig zu erkennen, was für Ihre Nutzer wirklich wichtig ist. Es könnten nicht die absoluten Zeiten sein, sondern die [Wahrnehmung der Benutzer](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance).

## Schnelle Erfolge

### CSS

Web-Performance dreht sich um Benutzererfahrung und wahrgenommene Leistung. Wie wir im Dokument über den [kritischen Render-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path) gelernt haben, ist das Verlinken von CSS mit einem traditionellen Link-Tag mit `rel="stylesheet"` synchron und blockiert das Rendering. Optimieren Sie das Rendering Ihrer Seite durch das Entfernen von blockierendem CSS.

Um CSS asynchron zu laden, kann man den Medientyp auf Druck setzen und dann auf Alle ändern, sobald es geladen ist. Das folgende Snippet enthält ein `onload`-Attribut, das JavaScript erfordert, daher ist es wichtig, ein `noscript`-Tag mit einem traditionellen Fallback einzuschließen.

```html
<link
  rel="stylesheet"
  href="/path/to/my.css"
  media="print"
  onload="this.media='all'" />
<noscript><link rel="stylesheet" href="/path/to/my.css" /></noscript>
```

Der Nachteil dieses Ansatzes ist das Blitzen von ungestyltem Text (FOUT). Der einfachste Weg, dies zu beheben, besteht darin, CSS in den Code einzubetten, das für alle Inhalte erforderlich ist, die über der Falzlinie gerendert werden, also das, was Sie im Browser-Viewport sehen, bevor Sie scrollen. Diese Styles verbessern die wahrgenommene Leistung, da das CSS keine Dateianforderung erfordert.

```html
<style>
  /* Insert your CSS here */
</style>
```

### JavaScript

Vermeiden Sie blockierendes JavaScript, indem Sie die Attribute [async](/de/docs/Web/HTML/Reference/Elements/script) oder [defer](/de/docs/Web/HTML/Reference/Elements/script) verwenden oder JavaScript-Ressourcen nach den DOM-Elementen der Seite verknüpfen. JavaScript blockiert nur das Rendering für Elemente, die nach dem `script`-Tag im DOM-Baum erscheinen.

### Web-Schriften

EOT- und TTF-Formate sind standardmäßig nicht komprimiert. Wenden Sie Komprimierung wie GZIP oder Brotli für diese Dateitypen an. Verwenden Sie WOFF und WOFF2. Diese Formate haben eingebaute Komprimierung.

Innerhalb von `@font-face` verwenden Sie `font-display: swap`. Durch die Verwendung von `font-display: swap` blockiert der Browser das Rendering nicht und verwendet die definierten Backup-Systemschriftarten. Optimieren Sie das [Schriftgewicht](/de/docs/Web/CSS/font-weight), um der Web-Schriftart möglichst nahe zu kommen.

#### Icon-Schriftarten

Vermeiden Sie, wenn möglich, Icon-Schriftarten und verwenden Sie komprimierte SVGs. Um noch weiter zu optimieren, betten Sie Ihre SVG-Daten innerhalb des HTML-Markups ein, um HTTP-Anfragen zu vermeiden.

## Tools

- Lernen Sie, die [Firefox Dev Tools](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) zu verwenden, um Ihr Site-Profil zu erstellen.
- [PageSpeed Insights](https://pagespeed.web.dev/) kann Ihre Seite analysieren und einige allgemeine Hinweise zur Leistungsverbesserung geben.
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) kann Ihnen einen detaillierten Überblick über viele Aspekte Ihrer Website geben, einschließlich Performance, SEO und Barrierefreiheit.
- Testen Sie die Geschwindigkeit Ihrer Seite mit [WebPageTest.org](https://www.webpagetest.org/), wo Sie verschiedene reale Gerätetypen und Standorte verwenden können.
- Probieren Sie den [Chrome User Experience Report](https://developer.chrome.com/docs/crux/) aus, der reale Nutzermetriken quantifiziert.
- Definieren Sie ein [Performance-Budget](/de/docs/Web/Performance/Guides/Performance_budgets).

### APIs

- Sammeln Sie Nutzermetriken mit der [boomerang](https://github.com/akamai/boomerang)-Bibliothek.
- Oder sammeln Sie direkt mit [window.performance.timing](/de/docs/Web/API/Performance/timing)

### Dinge, die man vermeiden sollte (schlechte Praktiken)

- Alles herunterladen
- Unkomprimierte Mediendateien verwenden

## Siehe auch

- <https://github.com/filamentgroup/loadCSS>
