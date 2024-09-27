---
title: Lazy loading
slug: Web/Performance/Lazy_loading
l10n:
  sourceCommit: e050b876063f44bde9bf011a2dfc94c0d90ca863
---

{{QuickLinksWithSubPages("Web/Performance")}}

**Lazy Loading** ist eine Strategie, um Ressourcen als nicht blockierend (nicht kritisch) zu identifizieren und diese nur bei Bedarf zu laden. Es ist eine Möglichkeit, die Länge des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Critical_rendering_path) zu verkürzen, was in kürzeren Ladezeiten der Seite resultiert.

Lazy Loading kann zu verschiedenen Zeitpunkten in der Anwendung stattfinden, typischerweise jedoch bei bestimmten Benutzerinteraktionen wie dem Scrollen und Navigieren.

## Übersicht

Mit der Entwicklung des Webs haben wir enorme Anstiege in der Anzahl und Größe der an Nutzer gesendeten Inhalte beobachtet. Zwischen 2011 und 2019 ist das durchschnittliche Ressourcen-Gewicht von **\~100KB** auf **\~400KB** für Desktop und von **\~50KB** auf **\~350KB** für Mobilgeräte gestiegen. Während die Bildgröße für Desktop von **\~250KB** auf **\~900KB** und für Mobilgeräte von **\~100KB** auf **\~850KB** gestiegen ist.

Eine der Methoden, mit denen wir dieses Problem angehen können, ist die Verkürzung des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Critical_rendering_path), indem Ressourcen, die für das erste Rendern nicht kritisch sind, verzögert geladen werden. Ein praktisches Beispiel ist, wenn Sie auf die Startseite eines E-Commerce-Seite landen, die einen Link zu einem Warenkorb-Bereich enthält, und keine der Ressourcen der Warenkorb-Seite (wie JavaScript, CSS und Bilder) heruntergeladen werden, **bis** Sie dorthin navigieren.

## Strategien

Lazy Loading kann auf verschiedene Ressourcen und durch verschiedene Strategien angewendet werden.

### Allgemein

#### Code-Splitting

JavaScript, CSS und HTML können in kleinere Teile aufgeteilt werden. Dies ermöglicht es, den minimal erforderlichen Code sofort bereitzustellen, um einen Wert zu liefern, und verbessert die Ladezeiten der Seite. Der Rest kann bei Bedarf geladen werden.

- Entry Point Splitting: trennt Code nach Einstiegspunkt(en) in der Anwendung
- Dynamische Trennung: trennt Code dort, wo [dynamische `import()`](/de/docs/Web/JavaScript/Reference/Operators/import)-Ausdrücke verwendet werden

### JavaScript

#### Skripttyp Modul

Jedes `script`-Tag mit `type="module"` wird als [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und standardmäßig verzögert.

### CSS

Standardmäßig wird CSS als [render-blockierende](/de/docs/Web/Performance/Critical_rendering_path) Ressource behandelt, sodass der Browser keinen verarbeiteten Inhalt rendert, bis das [CSSOM](/de/docs/Web/API/CSS_Object_Model) erstellt ist. CSS muss schlank sein, so schnell wie möglich ausgeliefert werden, und die Verwendung von Medien-Typen und -Abfragen wird empfohlen, um das Rendern nicht zu blockieren.

```html
<link href="style.css" rel="stylesheet" media="all" />
<link href="portrait.css" rel="stylesheet" media="(orientation:portrait)" />
<link href="print.css" rel="stylesheet" media="print" />
```

Es ist möglich, einige [CSS-Optimierungen](/de/docs/Learn/Performance/CSS) durchzuführen, um dies zu erreichen.

### Schriftarten

Standardmäßig werden Schriftanforderungen verzögert, bis der Renderbaum erstellt ist, was zu verzögertem Text-Rendering führen kann.

Es ist möglich, das Standardverhalten zu überschreiben und Web-Schriftressourcen mit `<link rel="preload">`, der [CSS `font-display` Eigenschaft](/de/docs/Web/CSS/@font-face/font-display) und der [Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) vorzuladen.

Siehe auch: [Element Link](/de/docs/Web/HTML/Element/link).

### Bilder und iframes

Sehr häufig enthalten Webseiten viele Bilder, die zur Datennutzung und zur Ladegeschwindigkeit einer Seite beitragen. Die meisten dieser Bilder befinden sich außerhalb des Bildschirms ([nicht kritisch](/de/docs/Web/Performance/Critical_rendering_path)), was eine Benutzerinteraktion erfordert, wie das Scrollen, um sie anzuzeigen.

#### Loading-Attribut

Das [`loading`](/de/docs/Web/HTML/Element/img#loading)-Attribut auf einem {{HTMLElement("img")}}-Element oder das [`loading`](/de/docs/Web/HTML/Element/iframe#loading)-Attribut auf einem {{HTMLElement("iframe")}} kann verwendet werden, um dem Browser anzuweisen, das Laden von Bildern/iframes zu verzögern, die sich außerhalb des Bildschirms befinden, bis der Benutzer in deren Nähe scrollt. Dies ermöglicht das Laden nicht kritischer Ressourcen nur bei Bedarf, was die anfänglichen Seitenladezeiten möglicherweise beschleunigen und die Netzwerknutzung reduzieren kann.

```html
<img loading="lazy" src="image.jpg" alt="..." />
<iframe loading="lazy" src="video-player.html" title="..."></iframe>
```

Das `load`-Ereignis wird ausgelöst, wenn der vorschnell geladene Inhalt vollständig geladen ist. Zu diesem Zeitpunkt ist es durchaus möglich (oder sogar wahrscheinlich), dass sich innerhalb des [visuellen Ansichtsfensters](/de/docs/Glossary/visual_viewport) noch nicht geladene, verzögert geladene Bilder oder iframes befinden.

Sie können feststellen, ob ein bestimmtes Bild das Laden abgeschlossen hat, indem Sie den Wert seiner Boolean-Eigenschaft [`complete`](/de/docs/Web/API/HTMLImageElement/complete) überprüfen.

#### Intersection Observer API

[Intersection Observers](/de/docs/Web/API/IntersectionObserver) ermöglichen es dem Benutzer zu wissen, wann ein beobachtetes Element das Ansichtsfenster des Browsers betritt oder verlässt.

#### Event-Handler

Wenn die Browser-Kompatibilität entscheidend ist, gibt es einige Optionen:

- [Intersection Observer Polyfill](https://github.com/w3c/IntersectionObserver)
- Rückfall auf Scroll-, Resize- oder Orientation-Change-Event-Handler, um festzustellen, ob ein bestimmtes Element im Ansichtsfenster ist

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Render-blockierendes CSS](https://web.dev/articles/critical-rendering-path/render-blocking-css)
- [Browser-basierte Bild-Lazy-Loading für das Web](https://web.dev/articles/browser-level-image-lazy-loading)
