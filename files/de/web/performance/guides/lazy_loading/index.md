---
title: Lazy Loading
slug: Web/Performance/Guides/Lazy_loading
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

**Lazy Loading** ist eine Strategie zur Identifizierung von Ressourcen als nicht-blockierend (nicht kritisch) und dazu, diese nur bei Bedarf zu laden. Es ist eine Möglichkeit, die Länge des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Guides/Critical_rendering_path) zu verkürzen, was zu verkürzten Ladezeiten der Seite führt.

Lazy Loading kann zu verschiedenen Zeitpunkten in der Anwendung erfolgen, tritt aber typischerweise bei bestimmten Benutzerinteraktionen wie Scrollen und Navigation auf.

## Überblick

Im Zuge der Entwicklung des Webs haben wir einen enormen Anstieg der Anzahl und Größe von an Nutzer gesendeten Assets erlebt. Zwischen 2011 und 2019 stieg das mittlere Ressourcen-Gewicht von **\~100KB** auf **\~400KB** für Desktop und von **\~50KB** auf **\~350KB** für Mobilgeräte. Während die Bildgröße von **\~250KB** auf **\~900KB** auf Desktop und von **\~100KB** auf **\~850KB** auf Mobilgeräte gestiegen ist.

Eine der Methoden, mit denen wir dieses Problem anpacken können, ist die Verkürzung der [kritischen Rendering-Pfade](/de/docs/Web/Performance/Guides/Critical_rendering_path) durch Lazy Loading von Ressourcen, die nicht kritisch für das erste Rendern sind. Ein praktisches Beispiel wäre, wenn Sie auf der Startseite einer E-Commerce-Website landen, auf der ein Link zu einer Warenkorbseite/-sektion vorhanden ist, und keine der Ressourcen der Warenkorbseite (wie JavaScript, CSS und Bilder) heruntergeladen werden, **bis** Sie dorthin navigieren.

## Strategien

Lazy Loading kann auf mehrere Ressourcen und durch verschiedene Strategien angewendet werden.

### Allgemein

#### Code Splitting

JavaScript, CSS und HTML können in kleinere Teile aufgeteilt werden. Dies ermöglicht es, den minimal erforderlichen Code sofort zu senden, um Nutzen zu bieten, und verbessert die Seitenladezeiten. Der Rest kann bei Bedarf geladen werden.

- Entry Point Splitting: trennt Code nach Einstiegspunkt(en) in der App
- Dynamisches Splitting: trennt Code dort, wo [dynamische import()](/de/docs/Web/JavaScript/Reference/Operators/import) Ausdrücke verwendet werden

### JavaScript

#### Script Type Module

Jedes Skript-Tag mit `type="module"` wird als [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und ist standardmäßig verzögert.

### CSS

Standardmäßig wird CSS als eine [render-blockierende](/de/docs/Web/Performance/Guides/Critical_rendering_path) Ressource behandelt, sodass der Browser keinen verarbeiteten Inhalt rendert, bis das [CSSOM](/de/docs/Web/API/CSS_Object_Model) konstruiert ist. CSS muss schlank, so schnell wie möglich geliefert werden, und die Nutzungsmedientypen und Anfragen sind so zu gestalten, dass das Rendering nicht blockiert wird.

```html
<link href="style.css" rel="stylesheet" media="all" />
<link href="portrait.css" rel="stylesheet" media="(orientation:portrait)" />
<link href="print.css" rel="stylesheet" media="print" />
```

Es ist möglich, einige [CSS-Optimierungen](/de/docs/Learn_web_development/Extensions/Performance/CSS) durchzuführen, um dies zu erreichen.

### Schriftarten

Standardmäßig werden Schriftanforderungen verzögert, bis der Rendertree konstruiert ist, was zu verzögertem Text-Rendering führen kann.

Es ist möglich, das Standardverhalten zu überschreiben und Webschriften mit `<link rel="preload">`, dem [CSS `font-display` Deskriptor](/de/docs/Web/CSS/Reference/At-rules/@font-face/font-display), und der [Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) vorzuladen.

Siehe auch: [Element Link](/de/docs/Web/HTML/Reference/Elements/link).

### Bilder und iframes

Sehr oft enthalten Webseiten viele Bilder, die zur Datennutzung und zur Ladegeschwindigkeit einer Seite beitragen. Die meisten dieser Bilder sind außerhalb des Sichtbereichs ([nicht kritisch](/de/docs/Web/Performance/Guides/Critical_rendering_path)) und erfordern eine Benutzerinteraktion wie Scrollen, um sie anzuzeigen.

#### Ladeattribut

Das [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading) Attribut an einem {{HTMLElement("img")}} Element oder das [`loading`](/de/docs/Web/HTML/Reference/Elements/iframe#loading) Attribut an einem {{HTMLElement("iframe")}} kann verwendet werden, um den Browser anzuweisen, das Laden von Bildern/iframes, die außerhalb des Sichtbereichs liegen, zu verzögern, bis der Nutzer in deren Nähe scrollt. Dadurch können nicht-kritische Ressourcen nur bei Bedarf geladen werden, was die anfänglichen Ladezeiten der Seite potenziell beschleunigt und die Netzwerkverwendung reduziert.

```html
<img loading="lazy" src="image.jpg" alt="..." />
<iframe loading="lazy" src="video-player.html" title="..."></iframe>
```

Das `load` Ereignis wird ausgelöst, wenn alle Inhalte, die eifrig geladen wurden, alle geladen sind. Zu diesem Zeitpunkt ist es durchaus möglich (oder sogar wahrscheinlich), dass es lazily-geladene Bilder oder iframes im {{Glossary("visual_viewport", "visuellen Viewport")}} gibt, die noch nicht geladen wurden.

Sie können feststellen, ob ein bestimmtes Bild vollständig geladen ist, indem Sie den Wert seiner booleschen [`complete`](/de/docs/Web/API/HTMLImageElement/complete) Eigenschaft prüfen.

#### Intersection Observer API

[Intersection Observers](/de/docs/Web/API/IntersectionObserver) ermöglichen es dem Nutzer zu wissen, wann ein beobachtetes Element den Viewport des Browsers betritt oder verlässt.

#### Ereignishandler

Wenn Browser-Kompatibilität entscheidend ist, gibt es einige Optionen:

- [polyfill intersection observer](https://github.com/w3c/IntersectionObserver)
- Rückfall auf Scroll-, Resize- oder Orientierungsänderungsereignishandler, um festzustellen, ob sich ein bestimmtes Element im Viewport befindet

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Render-blockierende CSS](https://web.dev/articles/critical-rendering-path/render-blocking-css)
- [Browser-Level Image Lazy Loading für das Web](https://web.dev/articles/browser-level-image-lazy-loading)
