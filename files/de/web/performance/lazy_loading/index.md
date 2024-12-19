---
title: Lazy loading
slug: Web/Performance/Lazy_loading
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubPages("Web/Performance")}}

**Lazy loading** ist eine Strategie, um Ressourcen als nicht blockierend (nicht kritisch) zu identifizieren und diese nur bei Bedarf zu laden. Es ist eine Möglichkeit, die Länge des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Critical_rendering_path) zu verkürzen, was zu verkürzten Seitenladezeiten führt.

Lazy loading kann zu verschiedenen Zeitpunkten in der Anwendung auftreten, findet jedoch typischerweise bei einigen Benutzerinteraktionen wie Scrollen und Navigation statt.

## Überblick

Mit der Entwicklung des Webs haben wir enorme Zuwächse in der Anzahl und Größe der an Benutzer gesendeten Assets festgestellt. Zwischen 2011 und 2019 stieg das mittlere Ressourcen-Gewicht von **\~100KB** auf **\~400KB** für Desktop und von **\~50KB** auf **\~350KB** für mobile Geräte. Während die Bildgröße von **\~250KB** auf **\~900KB** auf Desktop und von **\~100KB** auf **\~850KB** auf mobilen Geräten zugenommen hat.

Eine der Methoden, um dieses Problem zu lösen, besteht darin, die Länge des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Critical_rendering_path) zu verkürzen, indem nicht kritische Ressourcen für das erste Rendering durch Lazy loading geladen werden. Ein praktisches Beispiel wäre, wenn Sie auf die Startseite einer E-Commerce-Website gelangen und auf einen Warenkorbbereich verlinken, und keine der Ressourcen der Warenkorbseite (wie JavaScript, CSS und Bilder) heruntergeladen werden, **bis** Sie dorthin navigieren.

## Strategien

Lazy loading kann auf mehrere Ressourcen und durch verschiedene Strategien angewendet werden.

### Allgemein

#### Code-Splittung

JavaScript, CSS und HTML können in kleinere Teile gesplittet werden. Dies ermöglicht es, den minimal erforderlichen Code zu liefern, um direkt einen Nutzen zu bieten und die Seitenladezeiten zu verbessern. Der Rest kann bei Bedarf geladen werden.

- Einstiegspunkt-Splittung: trennt Code nach Einstiegspunkten in der App
- Dynamische Splittung: trennt Code, wo [dynamische Import()]-Ausdrücke(/de/docs/Web/JavaScript/Reference/Operators/import) verwendet werden

### JavaScript

#### Skript-Typ-Modul

Jedes Skript-Tag mit `type="module"` wird als ein [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und standardmäßig verzögert.

### CSS

Standardmäßig wird CSS als [renderblockierende](/de/docs/Web/Performance/Critical_rendering_path) Ressource behandelt, sodass der Browser keinen verarbeiteten Inhalt rendert, bis das [CSSOM](/de/docs/Web/API/CSS_Object_Model) erstellt ist. CSS muss schlank sein, so schnell wie möglich geliefert werden, und die Verwendung von Medientypen und Abfragen wird empfohlen, um das Rendern zu ermöglichen.

```html
<link href="style.css" rel="stylesheet" media="all" />
<link href="portrait.css" rel="stylesheet" media="(orientation:portrait)" />
<link href="print.css" rel="stylesheet" media="print" />
```

Es ist möglich, einige [CSS-Optimierungen](/de/docs/Learn_web_development/Extensions/Performance/CSS) durchzuführen, um dies zu erreichen.

### Schriften

Standardmäßig werden Schriftanforderungen verzögert, bis der Rendering-Baum erstellt ist, was zu verzögertem Textrendering führen kann.

Es ist möglich, das Standardverhalten zu überschreiben und Web-Schriftressourcen mit `<link rel="preload">`, dem [CSS `font-display` Deskriptor](/de/docs/Web/CSS/@font-face/font-display) und der [Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) vorzuladen.

Siehe auch: [Element Link](/de/docs/Web/HTML/Element/link).

### Bilder und iframes

Sehr oft enthalten Webseiten viele Bilder, die zum Datenverbrauch und zur Ladegeschwindigkeit der Seite beitragen. Die meisten dieser Bilder sind außerhalb des Bildschirms ([nicht kritisch](/de/docs/Web/Performance/Critical_rendering_path)) und erfordern eine Benutzerinteraktion, wie Scrollen, um sie anzuzeigen.

#### Laden-Attribut

Das [`loading`](/de/docs/Web/HTML/Element/img#loading) Attribut auf einem {{HTMLElement("img")}} Element oder das [`loading`]-Attribut(/de/docs/Web/HTML/Element/iframe#loading) auf einem {{HTMLElement("iframe")}} kann verwendet werden, um den Browser anzuweisen, das Laden von Bildern/iframes zu verzögern, die sich außerhalb des Bildschirms befinden, bis der Benutzer in deren Nähe scrollt. Dies ermöglicht es nicht kritischen Ressourcen nur dann zu laden, wenn sie benötigt werden, was potenziell die anfänglichen Seitenladezeiten beschleunigt und den Netzwerknutzung reduziert.

```html
<img loading="lazy" src="image.jpg" alt="..." />
<iframe loading="lazy" src="video-player.html" title="..."></iframe>
```

Das `load`-Ereignis wird ausgelöst, wenn der Inhalt, der schnell geladen wurde, vollständig geladen ist. Zu diesem Zeitpunkt ist es durchaus möglich (oder wahrscheinlich), dass es im {{Glossary("visual_viewport", "visuellen Ansichtsfenster")}} noch nicht geladene lazy-geladene Bilder oder iframes gibt.

Sie können feststellen, ob ein gegebenes Bild das Laden abgeschlossen hat, indem Sie den Wert seiner booleschen [`complete`](complete) Eigenschaft überprüfen.

#### Intersection Observer API

[Intersection Observers](/de/docs/Web/API/IntersectionObserver) ermöglichen es dem Benutzer zu wissen, wann ein beobachtetes Element das Ansichtsfenster des Browsers betritt oder verlässt.

#### Ereignishandler

Wenn Browser-Kompatibilität entscheidend ist, gibt es einige Optionen:

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver)
- Rückfall auf Scroll-, Resize- oder Orientierungsänderungs-Ereignishandler, um festzustellen, ob ein bestimmtes Element im Ansichtsfenster ist

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Render blockierende CSS](https://web.dev/articles/critical-rendering-path/render-blocking-css)
- [Browser-level image lazy loading for the web](https://web.dev/articles/browser-level-image-lazy-loading)
