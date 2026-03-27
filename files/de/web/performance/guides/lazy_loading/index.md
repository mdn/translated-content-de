---
title: Lazy Loading
slug: Web/Performance/Guides/Lazy_loading
l10n:
  sourceCommit: 8db892b3e7ca294621898441e7db2481e0e6d939
---

**Lazy Loading** ist eine Strategie zur Identifizierung von Ressourcen als nicht blockierend (nicht kritisch) und lädt diese nur bei Bedarf. Es ist eine Möglichkeit, die Länge des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Guides/Critical_rendering_path) zu verkürzen, was zu reduzierten Seitenladezeiten führt.

Lazy Loading kann zu verschiedenen Zeitpunkten in der Anwendung erfolgen, tritt jedoch typischerweise bei einigen Benutzerinteraktionen wie Scrollen und Navigation auf.

## Überblick

Mit der Entwicklung des Webs haben wir enorme Zunahmen in der Anzahl und Größe der an Benutzer gesendeten Ressourcen festgestellt. Zwischen 2011 und 2019 hat sich das mittlere Ressourcen-Gewicht von **\~100KB** auf **\~400KB** für Desktops und von **\~50KB** auf **\~350KB** für Mobilgeräte erhöht. Währenddessen stieg die Bildgröße von **\~250KB** auf **\~900KB** auf Desktops und von **\~100KB** auf **\~850KB** auf Mobilgeräten.

Eine Methode, die wir verwenden können, um dieses Problem zu bewältigen, besteht darin, die Länge des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Guides/Critical_rendering_path) zu verkürzen, indem Ressourcen, die für das erste Rendern nicht kritisch sind, lazy geladen werden. Ein praktisches Beispiel wäre, wenn Sie auf die Startseite einer E-Commerce-Website gelangen, die einen Link zu einer Warenkorbseite/-sektion hat und keine Ressourcen der Warenkorbseite (wie JavaScript, CSS und Bilder) heruntergeladen werden, **bis** Sie dorthin navigieren.

## Strategien

Lazy Loading kann auf mehrere Ressourcen und durch verschiedene Strategien angewendet werden.

### Allgemein

#### Code-Splitting

JavaScript, CSS und HTML können in kleinere Stücke aufgeteilt werden. Dies ermöglicht es, den minimal erforderlichen Code, um vorneweg Wert zu bieten, zu senden und die Seitenladezeiten zu verbessern. Der Rest kann bei Bedarf geladen werden.

- Einstiegspunkt-Splitting: trennt Code nach Einstiegspunkten in der App
- Dynamisches Splitting: trennt Code, wo [dynamic import()](/de/docs/Web/JavaScript/Reference/Operators/import) Ausdrücke verwendet werden

### JavaScript

#### Script Typ Modul

Jedes Script-Tag mit `type="module"` wird als ein [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und standardmäßig verzögert.

### CSS

Standardmäßig wird CSS als [render blockierend](/de/docs/Web/Performance/Guides/Critical_rendering_path) Ressource behandelt, sodass der Browser keinen bearbeiteten Inhalt rendert, bis das [CSSOM](/de/docs/Web/API/CSS_Object_Model) erstellt ist. CSS muss dünn sein, so schnell wie möglich geliefert werden, und die Verwendung von Medientypen und -abfragen wird empfohlen, um das Rendering zu entblocken.

```html
<link href="style.css" rel="stylesheet" media="all" />
<link href="portrait.css" rel="stylesheet" media="(orientation:portrait)" />
<link href="print.css" rel="stylesheet" media="print" />
```

Es ist möglich, einige [CSS-Optimierungen](/de/docs/Learn_web_development/Extensions/Performance/CSS) durchzuführen, um dies zu erreichen.

### Schriftarten

Standardmäßig werden Schriftanforderungen erst dann verzögert, bis der Rendertree erstellt ist, was zu verzögertem Text-Rendering führen kann.

Es ist möglich, das Standardverhalten zu überschreiben und Webfont-Ressourcen mit `<link rel="preload">`, dem [CSS `font-display` Deskriptor](/de/docs/Web/CSS/Reference/At-rules/@font-face/font-display), und der [Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) vorzuladen.

Siehe auch: [Element Link](/de/docs/Web/HTML/Reference/Elements/link).

### Bilder, Iframes, Videos und Audio

Webseiten enthalten sehr oft viele Bilder, die zum Datenverbrauch und zur Ladegeschwindigkeit einer Seite beitragen. Die meisten dieser Bilder sind außerhalb des sichtbaren Bereichs ([nicht-kritisch](/de/docs/Web/Performance/Guides/Critical_rendering_path)) und erfordern eine Benutzerinteraktion, wie das Scrollen, um sie zu sehen. Ähnlich können viele Iframes, Videos und Audiodateien zunächst außerhalb des sichtbaren Bereichs sein.

#### Laden-Attribut

Das [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading) Attribut an einem {{HTMLElement("img")}}, {{HTMLElement("iframe")}}, {{HTMLElement("video")}}, oder {{HTMLElement("audio")}} Element kann verwendet werden, um dem Browser anzuweisen, das Laden verknüpfter Ressourcen zu verzögern, wenn Elemente außerhalb des sichtbaren Bereichs sind, bis der Benutzer in deren Nähe scrollt.
Dies ermöglicht das Laden nicht-kritischer Ressourcen nur bei Bedarf, was möglicherweise erstmalige Seitenladezeiten verkürzt und die Netzwerkauslastung reduziert.

```html
<img loading="lazy" src="image.jpg" alt="..." />
<iframe loading="lazy" src="video-player.html" title="..."></iframe>
```

Das `load` Ereignis wird ausgelöst, wenn der eher geladene Inhalt vollständig geladen wurde. Zu diesem Zeitpunkt ist es durchaus möglich (oder sogar wahrscheinlich), dass es sich um lazy-geladene Bilder, Iframes, Videos oder Audiodateien innerhalb des {{Glossary("visual_viewport", "Sichtfensters")}} handelt, die noch nicht geladen wurden.

Sie können feststellen, ob ein gegebenes Bild das Laden abgeschlossen hat, indem Sie den Wert seiner Booleschen [`complete`](/de/docs/Web/API/HTMLImageElement/complete) Eigenschaft überprüfen.

#### Intersection Observer API

[Intersection Observers](/de/docs/Web/API/IntersectionObserver) ermöglichen es dem Benutzer zu wissen, wann ein beobachtetes Element das Viewport des Browsers betritt oder verlässt.

#### Ereignishandler

Wenn die Browser-Kompatibilität entscheidend ist, gibt es einige Optionen:

- [polyfill intersection observer](https://github.com/w3c/IntersectionObserver)
- Fallback zu Scroll-, Resize- oder Orientierungsänderungs-Ereignishandlern, um festzustellen, ob sich ein bestimmtes Element im Viewport befindet

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Render-Blockierende CSS](https://web.dev/articles/critical-rendering-path/render-blocking-css)
- [Browser-Ebene Bild Lazy Loading für das Web](https://web.dev/articles/browser-level-image-lazy-loading)
- [Es ist Zeit, offscreen Iframes lazy zu laden!](https://web.dev/articles/iframe-lazy-loading)
