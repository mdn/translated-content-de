---
title: Lazy loading
slug: Web/Performance/Lazy_loading
l10n:
  sourceCommit: e050b876063f44bde9bf011a2dfc94c0d90ca863
---

{{QuickLinksWithSubPages("Web/Performance")}}

**Lazy loading** ist eine Strategie, um Ressourcen als nicht blockierend (nicht kritisch) zu identifizieren und diese nur bei Bedarf zu laden. Es ist eine Möglichkeit, die Länge des [kritischen Rendering-Pfades](/de/docs/Web/Performance/Critical_rendering_path) zu verkürzen, was zu reduzierten Ladezeiten der Seite führt.

Lazy loading kann zu verschiedenen Zeitpunkten in der Anwendung auftreten, geschieht jedoch typischerweise bei bestimmten Benutzerinteraktionen wie Scrollen und Navigation.

## Überblick

Mit der Entwicklung des Webs haben wir enorme Zunahmen in der Anzahl und Größe der an Benutzer gesendeten Ressourcen festgestellt. Zwischen 2011 und 2019 stieg die mittlere Ressourcenmenge von **\~100KB** auf **\~400KB** für Desktop und von **\~50KB** auf **\~350KB** für Mobilgeräte. Während die Bildgröße auf Desktop von **\~250KB** auf **\~900KB** und auf Mobilgeräten von **\~100KB** auf **\~850KB** zunahm.

Eine der Methoden, die wir verwenden können, um dieses Problem anzugehen, ist die Verkürzung der Länge des [kritischen Rendering-Pfades](/de/docs/Web/Performance/Critical_rendering_path) durch Lazy Loading von Ressourcen, die nicht kritisch für das erste Rendering sind. Ein praktisches Beispiel wäre, wenn Sie auf der Startseite einer E-Commerce-Seite landen, die einen Link zu einem Warenkorbseite/-abschnitt enthält, und keine der Ressourcen der Warenkorbseite (wie JavaScript, CSS und Bilder) **bis** Sie dorthin navigieren, heruntergeladen werden.

## Strategien

Lazy loading kann auf mehrere Ressourcen und durch verschiedene Strategien angewendet werden.

### Allgemein

#### Codeaufteilung

JavaScript, CSS und HTML können in kleinere Teile aufgeteilt werden. Dies ermöglicht das Senden des minimalen Codes, der erforderlich ist, um sofort einen Wert zu liefern, und verbessert die Ladezeiten der Seite. Der Rest kann bei Bedarf geladen werden.

- Einstiegspunkt-Aufteilung: trennt Code nach Einstiegspunkt(en) in der App
- Dynamische Aufteilung: trennt Code dort, wo [dynamic import()](/de/docs/Web/JavaScript/Reference/Operators/import) Ausdrücke verwendet werden

### JavaScript

#### Skripttyp-Modul

Jedes Skripttag mit `type="module"` wird standardmäßig als [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und verzögert ausgeführt.

### CSS

Standardmäßig wird CSS als [renderblockierende](/de/docs/Web/Performance/Critical_rendering_path) Ressource behandelt, sodass der Browser keinen verarbeiteten Inhalt rendert, bis das [CSSOM](/de/docs/Web/API/CSS_Object_Model) erstellt ist. CSS muss schlank sein, so schnell wie möglich geliefert werden, und die Verwendung von Medientypen und -abfragen wird empfohlen, um das Rendern zu entblockieren.

```html
<link href="style.css" rel="stylesheet" media="all" />
<link href="portrait.css" rel="stylesheet" media="(orientation:portrait)" />
<link href="print.css" rel="stylesheet" media="print" />
```

Es ist möglich, einige [CSS-Optimierungen](/de/docs/Learn/Performance/CSS) durchzuführen, um dies zu erreichen.

### Schriften

Standardmäßig werden Schriftanforderungen verzögert, bis der Rendering-Baum erstellt ist, was zu verzögertem Text-Rendering führen kann.

Es ist möglich, das Standardverhalten zu überschreiben und Webfont-Ressourcen mit `<link rel="preload">`, der [CSS font-display Eigenschaft](/de/docs/Web/CSS/@font-face/font-display) und der [Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) vorzuladieren.

Siehe auch: [Link-Element](/de/docs/Web/HTML/Element/link).

### Bilder und iframes

Sehr oft enthalten Webseiten viele Bilder, die zur Datennutzung beitragen und beeinflussen, wie schnell eine Seite geladen werden kann. Die meisten dieser Bilder sind außerhalb des Bildschirms ([nicht kritisch](/de/docs/Web/Performance/Critical_rendering_path)), und erfordern eine Benutzerinteraktion wie Scrollen, um sie anzuzeigen.

#### Ladeattribut

Das [`loading`](/de/docs/Web/HTML/Element/img#loading) Attribut auf einem {{HTMLElement("img")}}-Element oder das [`loading`](/de/docs/Web/HTML/Element/iframe#loading) Attribut auf einem {{HTMLElement("iframe")}} kann verwendet werden, um dem Browser mitzuteilen, das Laden von Bildern/iframes, die außerhalb des Bildschirms sind, zu verzögern, bis der Benutzer in deren Nähe scrollt. Dies ermöglicht es, nicht kritische Ressourcen nur bei Bedarf zu laden, was potenziell die anfänglichen Ladezeiten der Seite beschleunigt und die Netzwerknutzung reduziert.

```html
<img loading="lazy" src="image.jpg" alt="..." />
<iframe loading="lazy" src="video-player.html" title="..."></iframe>
```

Das `load`-Ereignis wird ausgelöst, wenn der vorschnell geladene Inhalt vollständig geladen ist. Zu diesem Zeitpunkt ist es durchaus möglich (oder sogar wahrscheinlich), dass es lazily geladene Bilder oder iframes im [visuellen Viewport](/de/docs/Glossary/visual_viewport) gibt, die noch nicht geladen wurden.

Sie können feststellen, ob ein bestimmtes Bild das Laden abgeschlossen hat, indem Sie den Wert seiner booleschen [`complete`](/de/docs/Web/API/HTMLImageElement/complete) Eigenschaft überprüfen.

#### Intersection Observer API

[Intersection Observers](/de/docs/Web/API/IntersectionObserver) ermöglicht es dem Benutzer zu wissen, wann ein beobachtetes Element den Viewport des Browsers betritt oder verlässt.

#### Ereignishandler

Wenn Browser-Kompatibilität entscheidend ist, gibt es einige Optionen:

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver) verwenden
- Rückgriff auf Scroll-, Resize- oder Orientierungsänderungs-Ereignishandler, um festzustellen, ob sich ein bestimmtes Element im Viewport befindet

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Renderblockierende CSS](https://web.dev/articles/critical-rendering-path/render-blocking-css)
- [Browserseitiges Lazy Loading von Bildern für das Web](https://web.dev/articles/browser-level-image-lazy-loading)
