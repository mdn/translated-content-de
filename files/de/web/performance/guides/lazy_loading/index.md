---
title: Lazy Loading
slug: Web/Performance/Guides/Lazy_loading
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

**Lazy Loading** ist eine Strategie, um Ressourcen als nicht blockierend (nicht kritisch) zu identifizieren und diese nur bei Bedarf zu laden. Dies ist eine Möglichkeit, die Länge des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Guides/Critical_rendering_path) zu verkürzen, was zu reduzierten Ladezeiten für Seiten führt.

Lazy Loading kann zu unterschiedlichen Zeitpunkten in der Anwendung erfolgen, findet jedoch typischerweise bei bestimmten Benutzerinteraktionen wie Scrollen und Navigation statt.

## Überblick

Mit der Weiterentwicklung des Webs haben wir enorme Zunahmen bei der Anzahl und Größe der an die Nutzer gesendeten Assets erlebt. Zwischen 2011 und 2019 stieg das mittlere Ressourcengewicht von **\~100KB** auf **\~400KB** für Desktop und von **\~50KB** auf **\~350KB** für Mobilgeräte. Während die Bildgröße von **\~250KB** auf **\~900KB** auf Desktop und von **\~100KB** auf **\~850KB** auf Mobilgeräten zugenommen hat.

Eine der Methoden, die wir zur Lösung dieses Problems verwenden können, ist die Verkürzung der Länge des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Guides/Critical_rendering_path) durch Lazy Loading von Ressourcen, die nicht kritisch für das erste Rendern sind. Ein praktisches Beispiel wäre, wenn Sie auf der Startseite einer E-Commerce-Website landen, die einen Link zu einer Warenkorb-Seite/-Sektion enthält, und keine der Ressourcen der Warenkorb-Seite (wie JavaScript, CSS und Bilder) heruntergeladen wird, **bis** Sie dorthin navigieren.

## Strategien

Lazy Loading kann auf viele Ressourcen angewendet werden und durch verschiedene Strategien erfolgen.

### Allgemein

#### Code-Splitting

JavaScript, CSS und HTML können in kleinere Teile aufgeteilt werden. Dies ermöglicht das Senden des minimalen Codes, der erforderlich ist, um den Wert sofort bereitzustellen und die Ladezeiten zu verbessern. Der Rest kann bei Bedarf nachgeladen werden.

- Entry Point Splitting: trennt Code nach Einstiegspunkten in der Anwendung
- Dynamisches Splitting: trennt Code, wo [dynamic import()](/de/docs/Web/JavaScript/Reference/Operators/import)-Ausdrücke verwendet werden

### JavaScript

#### Script Type Module

Jedes Skript-Tag mit `type="module"` wird als [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und standardmäßig verzögert geladen.

### CSS

Standardmäßig wird CSS als [Render-Blocking](/de/docs/Web/Performance/Guides/Critical_rendering_path)-Ressource behandelt, sodass der Browser keinen verarbeiteten Inhalt rendert, bis das [CSSOM](/de/docs/Web/API/CSS_Object_Model) erstellt ist. CSS muss schlank sein, so schnell wie möglich geliefert werden, und es wird geraten, Medientypen und Abfragen zu verwenden, um das Rendering zu entblocken.

```html
<link href="style.css" rel="stylesheet" media="all" />
<link href="portrait.css" rel="stylesheet" media="(orientation:portrait)" />
<link href="print.css" rel="stylesheet" media="print" />
```

Es ist möglich, einige [CSS-Optimierungen](/de/docs/Learn_web_development/Extensions/Performance/CSS) durchzuführen, um dies zu erreichen.

### Schriften

Standardmäßig werden Schriftanforderungen verzögert, bis der Renderbaum erstellt ist, was zu verzögertem Text-Rendering führen kann.

Es ist möglich, das Standardverhalten zu überschreiben und Webfont-Ressourcen mit `<link rel="preload">`, dem [CSS `font-display` Descriptor](/de/docs/Web/CSS/@font-face/font-display), und der [Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) vorzuladen.

Siehe auch: [Element Link](/de/docs/Web/HTML/Element/link).

### Bilder und Iframes

Sehr oft enthalten Webseiten viele Bilder, die zur Datenverwendung beitragen und die Ladegeschwindigkeit einer Seite beeinflussen. Die meisten dieser Bilder befinden sich außerhalb des sichtbaren Bereichs ([nicht kritisch](/de/docs/Web/Performance/Guides/Critical_rendering_path)) und erfordern eine Benutzerinteraktion, wie Scrollen, um sie anzuzeigen.

#### Lade-Attribut

Das [`loading`](/de/docs/Web/HTML/Element/img#loading) Attribut auf einem {{HTMLElement("img")}}-Element oder das [`loading`](/de/docs/Web/HTML/Element/iframe#loading) Attribut auf einem {{HTMLElement("iframe")}} kann verwendet werden, um den Browser anzuweisen, das Laden von Bildern/Iframes, die sich außerhalb des sichtbaren Bereichs befinden, zu verschieben, bis der Benutzer in deren Nähe scrollt. Dies ermöglicht das Laden nicht kritischer Ressourcen nur bei Bedarf, wodurch möglicherweise die anfänglichen Seitenladezeiten beschleunigt und die Netzwerknutzung reduziert werden.

```html
<img loading="lazy" src="image.jpg" alt="..." />
<iframe loading="lazy" src="video-player.html" title="..."></iframe>
```

Das `load` Ereignis tritt ein, wenn der gierig geladene Inhalt vollständig geladen wurde. Zu diesem Zeitpunkt kann es durchaus vorkommen (oder ist sogar wahrscheinlich), dass es im {{Glossary("visual_viewport", "visual viewport")}} noch Bilder oder Iframes gibt, die Lazy Loaded werden und noch nicht geladen sind.

Sie können feststellen, ob ein bestimmtes Bild fertig geladen ist, indem Sie den Wert seiner Boolean-Eigenschaft [`complete`](/de/docs/Web/API/HTMLImageElement/complete) überprüfen.

#### Intersection Observer API

[Intersection Observers](/de/docs/Web/API/IntersectionObserver) ermöglichen es dem Benutzer zu wissen, wann ein beobachtetes Element den Viewport des Browsers betritt oder verlässt.

#### Ereignishandler

Wenn die Browser-Kompatibilität entscheidend ist, gibt es einige Optionen:

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver)
- Rückgriff auf Scroll-, Größenänderungs- oder Orientierungswechsel-Ereignishandler, um festzustellen, ob sich ein bestimmtes Element im Viewport befindet

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Render Blocking CSS](https://web.dev/articles/critical-rendering-path/render-blocking-css)
- [Browser-basierte Bild-Lazy-Loading für das Web](https://web.dev/articles/browser-level-image-lazy-loading)
