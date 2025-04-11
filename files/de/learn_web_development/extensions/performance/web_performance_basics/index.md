---
title: Web-Performance-Ressourcen
slug: Learn_web_development/Extensions/Performance/Web_Performance_Basics
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Es gibt viele [Gründe](https://web.dev/learn/performance/why-speed-matters), warum Ihre Website so gut wie möglich funktionieren sollte.
Im Folgenden finden Sie eine kurze Übersicht über Best Practices, Tools, APIs mit Links, die weitere Informationen zu jedem Thema bieten.

## Best Practices

- Beginnen Sie damit, den [kritischen Renderingpfad](/de/docs/Web/Performance/Guides/Critical_rendering_path) des Browsers zu erlernen. Wenn Sie diesen kennen, können Sie besser verstehen, wie Sie die Leistung der Website verbessern können.
- Verwenden Sie _Resource Hints_ wie [`rel=preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), [`rel=dns-prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch), [`rel=prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch), [`rel=preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload).
- Halten Sie die Größe von JavaScript auf einem [Minimum](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4). Verwenden Sie nur so viel JavaScript, wie für die aktuelle Seite erforderlich ist.
- [CSS](/de/docs/Learn_web_development/Extensions/Performance/CSS)-Leistungsfaktoren
- Verwenden Sie {{Glossary("HTTP_2", "HTTP/2")}} auf Ihrem Server (oder CDN).
- Nutzen Sie ein CDN für Ressourcen, das die Ladezeiten erheblich verkürzen kann.
- Komprimieren Sie Ihre Ressourcen mit [gzip](https://www.gnu.org/software/gzip/), [Brotli](https://github.com/google/brotli) und [Zopfli](https://github.com/google/zopfli).
- Bildoptimierung (verwenden Sie CSS-Animationen oder SVG, wenn möglich).
- Lazy Loading von Teilen Ihrer Anwendung außerhalb des Viewports. Falls ja, haben Sie einen Backup-Plan für SEO (z. B. vollständige Seite für Bot-Traffic rendern); beispielsweise durch Verwenden des [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading)-Attributs am {{HTMLElement("img")}}-Element.
- Es ist auch wichtig zu erkennen, was für Ihre Benutzer wirklich wichtig ist. Es geht möglicherweise nicht um die absolute Zeit, sondern um die [Benutzerwahrnehmung](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance).

## Quick Wins

### CSS

Web-Performance dreht sich um Benutzererfahrung und wahrgenommene Leistung. Wie wir im Dokument zum [kritischen Renderingpfad](/de/docs/Web/Performance/Guides/Critical_rendering_path) gelernt haben, ist das Verknüpfen von CSS mit einem traditionellen Link-Tag mit rel="stylesheet" synchron und blockiert das Rendering. Optimieren Sie das Rendering Ihrer Seite, indem Sie blockierendes CSS entfernen.

Um CSS asynchron zu laden, kann man den Medientyp auf Print setzen und dann nach dem Laden auf All ändern. Das folgende Codebeispiel beinhaltet ein onload-Attribut und erfordert JavaScript, sodass es wichtig ist, einen noscript-Tag mit einem traditionellen Fallback hinzuzufügen.

```html
<link
  rel="stylesheet"
  href="/path/to/my.css"
  media="print"
  onload="this.media='all'" />
<noscript><link rel="stylesheet" href="/path/to/my.css" /></noscript>
```

Der Nachteil dieses Ansatzes ist der Flash von ungestaltetem Text (FOUT). Der einfachste Weg, dies zu beheben, besteht darin, CSS, das für Inhalte benötigt wird, die sich oberhalb der Falz befinden, oder was Sie im Browser-Viewport sehen, bevor Sie scrollen, inline einzubinden. Diese Stile werden die wahrgenommene Leistung verbessern, da das CSS keine Dateianforderung benötigt.

```html
<style>
  /* Insert your CSS here */
</style>
```

### JavaScript

Vermeiden Sie JavaScript-Blockierung, indem Sie die [async](/de/docs/Web/HTML/Reference/Elements/script)- oder [defer](/de/docs/Web/HTML/Reference/Elements/script)-Attribute verwenden oder JavaScript-Ressourcen nach den DOM-Elementen der Seite verlinken. JavaScript blockiert nur das Rendering für Elemente, die nach dem Skript-Tag im DOM-Baum erscheinen.

### Web Fonts

EOT- und TTF-Formate sind standardmäßig nicht komprimiert. Wenden Sie Kompression wie GZIP oder Brotli auf diese Dateitypen an. Verwenden Sie WOFF und WOFF2. Diese Formate haben eine eingebaute Kompression.

Innerhalb von @font-face verwenden Sie font-display: swap. Durch die Verwendung des Font-Display-Swap blockiert der Browser das Rendering nicht und verwendet die definierten Backup-Systemschriften. Optimieren Sie das [Schriftgewicht](/de/docs/Web/CSS/font-weight), um es so nah wie möglich an die Web-Schriftart anzupassen.

#### Icon Web Fonts

Vermeiden Sie, wenn möglich, Icon-Web-Schriftarten und verwenden Sie komprimierte SVGs. Um weiter zu optimieren, fügen Sie Ihre SVG-Daten innerhalb des HTML-Markups ein, um HTTP-Anfragen zu vermeiden.

## Tools

- Lernen Sie den Umgang mit den [Firefox Dev Tools](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), um Ihr Site-Profil zu erstellen.
- [PageSpeed Insights](https://pagespeed.web.dev/) kann Ihre Seite analysieren und gibt allgemeine Hinweise zur Leistungsverbesserung.
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) kann Ihnen eine detaillierte Aufschlüsselung vieler Aspekte Ihrer Seite einschließlich Leistung, SEO und Barrierefreiheit bieten.
- Testen Sie die Geschwindigkeit Ihrer Seite mit [WebPageTest.org](https://www.webpagetest.org/), wo Sie verschiedene reale Gerätetypen und Standorte verwenden können.
- Probieren Sie den [Chrome User Experience Report](https://developer.chrome.com/docs/crux/) aus, der tatsächliche Benutzermesswerte quantifiziert.
- Definieren Sie ein [Performance-Budget](/de/docs/Web/Performance/Guides/Performance_budgets).

### APIs

- Sammeln Sie Benutzerkennzahlen mit der [boomerang](https://github.com/akamai/boomerang)-Bibliothek.
- Oder sammeln Sie diese direkt mit [window.performance.timing](/de/docs/Web/API/Performance/timing)

### Dinge, die Sie nicht tun sollten (schlechte Praktiken)

- Alles herunterladen
- Unkomprimierte Mediendateien verwenden

## Siehe auch

- <https://github.com/filamentgroup/loadCSS>
