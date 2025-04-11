---
title: Lazy Loading
slug: Web/Performance/Guides/Lazy_loading
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**Lazy Loading** ist eine Strategie, um Ressourcen als nicht-blockierend (nicht-kritisch) zu identifizieren und diese nur bei Bedarf zu laden. Es ist eine Möglichkeit, die Länge des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Guides/Critical_rendering_path) zu verkürzen, was zu reduzierten Ladezeiten der Seite führt.

Lazy Loading kann zu unterschiedlichen Zeitpunkten in der Anwendung erfolgen, typischerweise jedoch bei Benutzerinteraktionen wie Scrollen und Navigation.

## Überblick

Mit der Entwicklung des Webs haben wir enorme Zunahmen in der Anzahl und Größe der an Nutzer gesendeten Assets erlebt. Zwischen 2011 und 2019 hat sich das mediane Ressourcen-Gewicht von **\~100KB** auf **\~400KB** für Desktop und von **\~50KB** auf **\~350KB** für Mobile erhöht. Während die Bildgröße von **\~250KB** auf **\~900KB** auf Desktop und von **\~100KB** auf **\~850KB** auf Mobile gestiegen ist.

Eine der Methoden, die wir verwenden können, um dieses Problem zu lösen, ist die Verkürzung der Länge des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Guides/Critical_rendering_path) durch Lazy Loading von Ressourcen, die nicht kritisch für das erste Rendern sind. Ein praktisches Beispiel wäre, wenn Sie auf die Startseite einer E-Commerce-Seite mit einem Link zu einer Warenkorb-Seite/Abschnitt gelangen und keine der Ressourcen der Warenkorb-Seite (wie JavaScript, CSS und Bilder) **bis** zur Navigation dorthin heruntergeladen werden.

## Strategien

Lazy Loading kann auf mehrere Ressourcen und durch mehrere Strategien angewendet werden.

### Allgemein

#### Code Splitting

JavaScript, CSS und HTML können in kleinere Teile aufgeteilt werden. Dies ermöglicht das Senden des minimal erforderlichen Codes, um sofort einen Mehrwert zu bieten und die Ladezeiten der Seite zu verbessern. Der Rest kann bei Bedarf geladen werden.

- Entry Point Splitting: trennt Code nach Einstiegspunkt(en) in der App
- Dynamic Splitting: trennt Code, wo [dynamic import()](/de/docs/Web/JavaScript/Reference/Operators/import)-Ausdrücke verwendet werden

### JavaScript

#### Script Type Module

Jedes Script-Tag mit `type="module"` wird als [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und standardmäßig verzögert.

### CSS

Per Voreinstellung wird CSS als eine [Render-blockierende](/de/docs/Web/Performance/Guides/Critical_rendering_path) Ressource betrachtet, sodass der Browser keinen verarbeiteten Inhalt rendert, bis das [CSSOM](/de/docs/Web/API/CSS_Object_Model) konstruiert ist. CSS muss dünn, so schnell wie möglich geliefert und die Medienarten und Abfragen sollten eingesetzt werden, um das Rendern freizugeben.

```html
<link href="style.css" rel="stylesheet" media="all" />
<link href="portrait.css" rel="stylesheet" media="(orientation:portrait)" />
<link href="print.css" rel="stylesheet" media="print" />
```

Es ist möglich, einige [CSS-Optimierungen](/de/docs/Learn_web_development/Extensions/Performance/CSS) vorzunehmen, um dies zu erreichen.

### Schriften

Standardmäßig werden Schriftanforderungen verzögert, bis der Rendertree erstellt ist, was zu verzögertem Text-Rendering führen kann.

Es ist möglich, das Standardverhalten zu überschreiben und Web-Schriftressourcen vorzubereiten, indem `<link rel="preload">`, der [CSS `font-display` Deskriptor](/de/docs/Web/CSS/@font-face/font-display) und die [Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) verwendet werden.

Siehe auch: [Element Link](/de/docs/Web/HTML/Reference/Elements/link).

### Bilder und Iframes

Webseiten enthalten sehr oft viele Bilder, die zum Datenverbrauch und zur Geschwindigkeit des Seitenladens beitragen. Die meisten dieser Bilder sind außerhalb des Bildschirms ([nicht-kritisch](/de/docs/Web/Performance/Guides/Critical_rendering_path)) und erfordern eine Benutzerinteraktion, wie das Scrollen, um sie anzuzeigen.

#### Loading-Attribut

Das [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading)-Attribut auf einem {{HTMLElement("img")}}-Element oder das [`loading`](/de/docs/Web/HTML/Reference/Elements/iframe#loading)-Attribut auf einem {{HTMLElement("iframe")}} kann verwendet werden, um dem Browser anzuweisen, das Laden von Bildern/Iframes zu verzögern, die sich außerhalb des Bildschirms befinden, bis der Benutzer in ihre Nähe scrollt. Dies ermöglicht es, nicht-kritische Ressourcen nur bei Bedarf zu laden, wodurch die anfänglichen Seitenladezeiten potenziell beschleunigt und die Netzwerknutzung reduziert werden.

```html
<img loading="lazy" src="image.jpg" alt="..." />
<iframe loading="lazy" src="video-player.html" title="..."></iframe>
```

Das `load`-Ereignis tritt auf, wenn der Inhalt, der schnell geladen wurde, vollständig geladen ist. Zu diesem Zeitpunkt ist es durchaus möglich (oder sogar wahrscheinlich), dass es sich im {{Glossary("visual_viewport", "visuellen Viewport")}} noch nicht geladene Bilder oder Iframes befinden, die lazy geladen werden.

Sie können feststellen, ob ein bestimmtes Bild fertig geladen ist, indem Sie den Wert seiner booleanischen [`complete`](/de/docs/Web/API/HTMLImageElement/complete)-Eigenschaft überprüfen.

#### Intersection Observer API

[Intersection Observers](/de/docs/Web/API/IntersectionObserver) ermöglichen es dem Benutzer zu wissen, wann ein beobachtetes Element in den oder aus dem Viewport des Browsers eintritt oder diesen verlässt.

#### Ereignishandler

Wenn die Browser-Kompatibilität entscheidend ist, gibt es einige Optionen:

- [polyfill Intersection Observer](https://github.com/w3c/IntersectionObserver)
- Rückgriff auf Scroll-, Resize- oder Orientierungsänderungs-Ereignishandler, um festzustellen, ob ein bestimmtes Element im Viewport ist

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Render-blockierende CSS](https://web.dev/articles/critical-rendering-path/render-blocking-css)
- [Browser-level image lazy loading for the web](https://web.dev/articles/browser-level-image-lazy-loading)
