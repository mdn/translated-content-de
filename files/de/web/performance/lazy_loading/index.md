---
title: Lazy Loading
slug: Web/Performance/Lazy_loading
l10n:
  sourceCommit: e050b876063f44bde9bf011a2dfc94c0d90ca863
---

{{QuickLinksWithSubPages("Web/Performance")}}

**Lazy Loading** ist eine Strategie, um Ressourcen als nicht blockierend (nicht kritisch) zu identifizieren und diese nur bei Bedarf zu laden. Dies ist eine Möglichkeit, die Länge des [kritischen Renderpfads](/de/docs/Web/Performance/Critical_rendering_path) zu verkürzen, was in reduzierten Ladezeiten der Seite resultiert.

Lazy Loading kann zu verschiedenen Zeitpunkten in der Anwendung erfolgen, es passiert jedoch typischerweise bei einigen Benutzerinteraktionen wie Scrollen und Navigation.

## Übersicht

Mit der Entwicklung des Webs haben wir enorme Zunahmen in der Anzahl und Größe der an Benutzer gesendeten Elemente beobachtet.
Zwischen 2011 und 2019 stieg das mittlere Ressourcen-Gewicht von **\~100KB** auf **\~400KB** für Desktops und von **\~50KB** auf **\~350KB** für mobile Geräte. Während die Bildgröße auf Desktops von **\~250KB** auf **\~900KB** und auf mobilen Geräten von **\~100KB** auf **\~850KB** gestiegen ist.

Eine der Methoden, die wir verwenden können, um dieses Problem zu bekämpfen, besteht darin, die Länge des [kritischen Renderpfads](/de/docs/Web/Performance/Critical_rendering_path) zu verkürzen, indem Ressourcen, die für das erste Rendering nicht kritisch sind, erst bei Bedarf geladen werden.
Ein praktisches Beispiel wäre, wenn Sie auf der Startseite einer E-Commerce-Website landen, die einen Link zu einer Warenkorbseite/-sektion enthält, und keine der Ressourcen der Warenkorbseite (wie JavaScript, CSS und Bilder) heruntergeladen wird, **bis** Sie dorthin navigieren.

## Strategien

Lazy Loading kann auf mehrere Ressourcen und durch mehrere Strategien angewendet werden.

### Allgemein

#### Code-Splitting

JavaScript, CSS und HTML können in kleinere Teile aufgeteilt werden. Dies ermöglicht es, den minimal erforderlichen Code im Voraus zu senden, um einen Wert bereitzustellen, was die Ladezeiten der Seite verbessert. Der Rest kann bei Bedarf geladen werden.

- Eintragspunkt-Splitting: Teilt den Code nach Eintragspunkt(en) in der App
- Dynamisches Splitting: Trennt den Code dort, wo [dynamic import()](/de/docs/Web/JavaScript/Reference/Operators/import) Ausdrücke verwendet werden

### JavaScript

#### Script Typ Modul

Jedes Script-Tag mit `type="module"` wird als [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und standardmäßig verzögert.

### CSS

Standardmäßig wird CSS als [renderblockierende](/de/docs/Web/Performance/Critical_rendering_path) Ressource behandelt, sodass der Browser keine verarbeiteten Inhalte rendert, bis das [CSSOM](/de/docs/Web/API/CSS_Object_Model) erstellt ist. CSS muss schlank sein, so schnell wie möglich geliefert werden, und die Verwendung von Medientypen und Abfragen wird empfohlen, um das Rendering zu entblocken.

```html
<link href="style.css" rel="stylesheet" media="all" />
<link href="portrait.css" rel="stylesheet" media="(orientation:portrait)" />
<link href="print.css" rel="stylesheet" media="print" />
```

Es ist möglich, einige [CSS-Optimierungen](/de/docs/Learn/Performance/CSS) vorzunehmen, um dies zu erreichen.

### Schriften

Standardmäßig werden Schriftanforderungen verzögert, bis der Renderbaum erstellt ist, was zu verzögertem Text-Rendering führen kann.

Es ist möglich, das Standardverhalten zu überschreiben und Webschrift-Ressourcen mit `<link rel="preload">`, der [CSS font-display Eigenschaft](/de/docs/Web/CSS/@font-face/font-display) und der [Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) vorzuladen.

Siehe auch: [Element Link](/de/docs/Web/HTML/Element/link).

### Bilder und iframes

Sehr oft enthalten Webseiten viele Bilder, die zum Datenverbrauch und zur Ladegeschwindigkeit einer Seite beitragen. Die meisten dieser Bilder sind außerhalb des Bildschirms ([nicht-kritisch](/de/docs/Web/Performance/Critical_rendering_path)) und erfordern eine Benutzerinteraktion, wie Scrollen, um sie anzuzeigen.

#### Ladeattribut

Das [`loading`](/de/docs/Web/HTML/Element/img#loading) Attribut auf einem {{HTMLElement("img")}} Element oder das [`loading`](/de/docs/Web/HTML/Element/iframe#loading) Attribut auf einem {{HTMLElement("iframe")}}, kann verwendet werden, um dem Browser zu instruieren, das Laden von Bildern/iframes zu verzögern, die außerhalb des Bildschirms sind, bis der Benutzer in deren Nähe scrollt.
Dies ermöglicht es, nicht-kritische Ressourcen nur bei Bedarf zu laden, was potenziell die anfänglichen Ladezeiten beschleunigt und die Netzwerkauslastung reduziert.

```html
<img loading="lazy" src="image.jpg" alt="..." />
<iframe loading="lazy" src="video-player.html" title="..."></iframe>
```

Das `load`-Ereignis wird ausgelöst, wenn der eifrig geladene Inhalt vollständig geladen ist. Zu diesem Zeitpunkt ist es vollständig möglich (oder sogar wahrscheinlich), dass es innerhalb des {{Glossary("visual viewport")}} noch bilder oder iframes gibt, die noch nicht geladen sind.

Sie können feststellen, ob ein gegebenes Bild das Laden abgeschlossen hat, indem Sie den Wert seiner booleschen {{domxref("HTMLImageElement.complete", "complete")}} Eigenschaft überprüfen.

#### Intersection Observer API

[Intersection Observers](/de/docs/Web/API/IntersectionObserver) erlauben es dem Benutzer zu wissen, wann ein beobachtetes Element den Viewport des Browsers betritt oder verlässt.

#### Ereignis-Handler

Wenn Browser-Kompatibilität entscheidend ist, gibt es einige Optionen:

- [polyfill intersection observer](https://github.com/w3c/IntersectionObserver)
- Rückfall auf Scroll-, Resize- oder Orientierungsänderungs-Ereignishandler, um zu bestimmen, ob ein bestimmtes Element im Viewport ist

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Render blockierendes CSS](https://web.dev/articles/critical-rendering-path/render-blocking-css)
- [Browser-Level Bilder-Lazy-Loading für das Web](https://web.dev/articles/browser-level-image-lazy-loading)
