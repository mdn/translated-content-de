---
title: Lazy Loading
slug: Web/Performance/Lazy_loading
l10n:
  sourceCommit: b692821c494fd3a25dd883b6fe14998fa2621f7b
---

{{QuickLinksWithSubPages("Web/Performance")}}

**Lazy Loading** ist eine Strategie, um Ressourcen als nicht blockierend (nicht kritisch) zu identifizieren und diese nur bei Bedarf zu laden. Es ist ein Weg, die Länge des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Critical_rendering_path) zu verkürzen, was zu einer reduzierten Ladezeit der Seite führt.

Lazy Loading kann zu verschiedenen Zeitpunkten in der Anwendung erfolgen, passiert aber typischerweise bei Benutzerinteraktionen wie Scrollen und Navigation.

## Übersicht

Mit der Weiterentwicklung des Webs haben wir enorme Zunahmen in der Anzahl und Größe der an Benutzer gesendeten Ressourcen erlebt.
Zwischen 2011 und 2019 stieg das Mediangewicht von Ressourcen von **~100KB** auf **~400KB** für Desktop und von **~50KB** auf **~350KB** für Mobilgeräte. Während sich die Bildgröße auf dem Desktop von **~250KB** auf **~900KB** und auf Mobilgeräten von **~100KB** auf **~850KB** erhöhte.

Eine der Methoden, die wir nutzen können, um dieses Problem zu lösen, ist die Verkürzung der Länge des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Critical_rendering_path), indem wir Ressourcen, die nicht kritisch für das erste Rendering sind, lazy loaden.
Ein praktisches Beispiel wäre, wenn Sie auf der Startseite einer E-Commerce-Website landen, die einen Link zu einer Warenkorb-Seite/Sektion enthält, und keine der Ressourcen der Warenkorb-Seite (wie JavaScript, CSS und Bilder) **bis** zur Navigation geladen werden.

## Strategien

Lazy Loading kann auf mehrere Ressourcen und durch verschiedene Strategien angewendet werden.

### Allgemein

#### Code-Splitting

JavaScript, CSS und HTML können in kleinere Teile aufgeteilt werden. Dies ermöglicht das Senden des minimal erforderlichen Codes, um den Wert sofort bereitzustellen, was die Seitenladezeiten verbessert. Der Rest kann bei Bedarf geladen werden.

- Entry Point Splitting: trennt Code nach Einstiegspunkten in der App
- Dynamisches Splitting: trennt Code, wo [dynamic import()](/de/docs/Web/JavaScript/Reference/Operators/import)-Ausdrücke verwendet werden

### JavaScript

#### Script Type Module

Ein beliebiges Script-Tag mit `type="module"` wird als [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und standardmäßig verzögert.

### CSS

Standardmäßig wird CSS als [render blocking](/de/docs/Web/Performance/Critical_rendering_path)-Ressource behandelt, sodass der Browser keinen verarbeiteten Inhalt rendert, bis das [CSSOM](/de/docs/Web/API/CSS_Object_Model) erstellt ist. CSS muss dünn, so schnell wie möglich geliefert werden, und die Verwendung von Medientypen und -abfragen wird empfohlen, um das Rendering zu entblocken.

```html
<link href="style.css" rel="stylesheet" media="all" />
<link href="portrait.css" rel="stylesheet" media="(orientation:portrait)" />
<link href="print.css" rel="stylesheet" media="print" />
```

Es ist möglich, einige [CSS-Optimierungen](/de/docs/Learn/Performance/CSS) durchzuführen, um dies zu erreichen.

### Schriftarten

Standardmäßig werden Schriftanforderungen verzögert, bis der Rendertree erstellt ist, was zu verzögertem Text-Rendering führen kann.

Es ist möglich, das Standardverhalten zu überschreiben und Webfont-Ressourcen mit `<link rel="preload">`, dem [CSS-`font-display`-Deskriptor](/de/docs/Web/CSS/@font-face/font-display) und der [Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) vorzuladen.

Siehe auch: [Element Link](/de/docs/Web/HTML/Element/link).

### Bilder und Iframes

Sehr häufig enthalten Webseiten viele Bilder, die zum Datenverbrauch beitragen und beeinflussen, wie schnell eine Seite geladen werden kann. Die meisten dieser Bilder sind außerhalb des Bildschirms ([nicht kritisch](/de/docs/Web/Performance/Critical_rendering_path)) und erfordern eine Benutzerinteraktion, wie z. B. Scrollen, um sie anzuzeigen.

#### Loading-Attribut

Das [`loading`](/de/docs/Web/HTML/Element/img#loading) Attribut bei einem {{HTMLElement("img")}}-Element oder das [`loading`](/de/docs/Web/HTML/Element/iframe#loading) Attribut bei einem {{HTMLElement("iframe")}} kann verwendet werden, um den Browser anzuweisen, das Laden von außerhalb des Bildschirms befindlichen Bildern/Iframes so lange zu verzögern, bis der Benutzer in die Nähe scrollt.
Dies ermöglicht es nicht-kritischen Ressourcen, nur bei Bedarf geladen zu werden, was potenziell die anfänglichen Seitenladezeiten beschleunigt und die Netzwerknutzung reduziert.

```html
<img loading="lazy" src="image.jpg" alt="..." />
<iframe loading="lazy" src="video-player.html" title="..."></iframe>
```

Das `load`-Ereignis wird ausgelöst, wenn der voreilig geladene Inhalt vollständig geladen wurde. Zu diesem Zeitpunkt ist es möglich (oder sogar wahrscheinlich), dass es innerhalb des {{Glossary("visual_viewport", "visual viewport")}} noch lazy-geladene Bilder oder Iframes gibt, die noch nicht geladen wurden.

Sie können feststellen, ob ein gegebenes Bild vollständig geladen ist, indem Sie den Wert seiner booleschen [`complete`](/de/docs/Web/API/HTMLImageElement/complete)-Eigenschaft überprüfen.

#### Intersection Observer API

[Intersection Observers](/de/docs/Web/API/IntersectionObserver) ermöglichen es dem Benutzer zu wissen, wann ein beobachtetes Element den Viewport des Browsers betritt oder verlässt.

#### Ereignishandler

Wenn Browser-Kompatibilität entscheidend ist, gibt es einige Optionen:

- [polyfill intersection observer](https://github.com/w3c/IntersectionObserver)
- Rückgriff auf Scroll-, Größenänderungs- oder Ausrichtungsänderungs-Ereignishandler, um festzustellen, ob sich ein bestimmtes Element im Viewport befindet

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Render blocking CSS](https://web.dev/articles/critical-rendering-path/render-blocking-css)
- [Browser-level image lazy loading for the web](https://web.dev/articles/browser-level-image-lazy-loading)
