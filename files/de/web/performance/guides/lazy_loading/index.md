---
title: Lazy Loading
slug: Web/Performance/Guides/Lazy_loading
l10n:
  sourceCommit: 7d467ece2b269b661f61e56c29e44291aaba3085
---

**Lazy Loading** ist eine Strategie, bei der Ressourcen als nicht blockierend (nicht kritisch) eingestuft und erst bei Bedarf geladen werden. Dadurch lässt sich der [kritische Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path) verkürzen, was die Ladezeit einer Seite reduziert.

Lazy Loading kann zu verschiedenen Zeitpunkten während der Nutzung einer Anwendung erfolgen, typischerweise jedoch bei Nutzerinteraktionen wie Scrollen oder Navigation.

## Überblick

Mit der Entwicklung des Webs haben sowohl die Anzahl als auch die Größe der an Nutzer übertragenen Ressourcen stark zugenommen.
Zwischen 2011 und 2019 stieg die mittlere Größe der Ressourcen auf Desktop-Geräten von **\~100 KB** auf **\~400 KB** und auf Mobilgeräten von **\~50 KB** auf **\~350 KB**. Die Bildgröße stieg auf Desktop-Geräten von **\~250 KB** auf **\~900 KB** und auf Mobilgeräten von **\~100 KB** auf **\~850 KB**.

Eine Möglichkeit, diesem Problem zu begegnen, besteht darin, den [kritischen Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path) zu verkürzen: Ressourcen, die für das erste Rendern nicht erforderlich sind, werden erst bei Bedarf geladen.
Ein praktisches Beispiel ist die Startseite eines Online-Shops mit einem Link zum Warenkorb. Die Ressourcen der Warenkorbseite, etwa JavaScript, CSS und Bilder, werden **erst dann** heruntergeladen, wenn Sie dorthin navigieren.

## Strategien

Lazy Loading lässt sich auf verschiedene Ressourcen und mit unterschiedlichen Strategien anwenden.

### Allgemein

#### Code-Splitting

JavaScript, CSS und HTML können in kleinere Teile aufgeteilt werden. So wird zunächst nur der Code übertragen, der unmittelbar benötigt wird, was die Ladezeit der Seite verbessert. Der Rest kann bei Bedarf geladen werden.

- Aufteilung nach Einstiegspunkten: Trennt den Code nach den Einstiegspunkten der Anwendung.
- Dynamische Aufteilung: Trennt den Code an Stellen, an denen Ausdrücke mit [dynamischem `import()`](/de/docs/Web/JavaScript/Reference/Operators/import) verwendet werden.

### JavaScript

#### Skripttyp „module“

Jedes `script`-Tag mit `type="module"` wird als [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) behandelt und standardmäßig verzögert ausgeführt.

### CSS

Standardmäßig gilt CSS als [Rendering-blockierende](/de/docs/Web/Performance/Guides/Critical_rendering_path) Ressource. Der Browser rendert daher keine verarbeiteten Inhalte, bevor das [CSSOM](/de/docs/Web/API/CSS_Object_Model) erstellt wurde. CSS sollte möglichst schlank sein und so schnell wie möglich bereitgestellt werden. Außerdem empfiehlt sich die Verwendung von Medientypen und Media Queries, um das Rendering nicht unnötig zu blockieren.

```html
<link href="style.css" rel="stylesheet" media="all" />
<link href="portrait.css" rel="stylesheet" media="(orientation:portrait)" />
<link href="print.css" rel="stylesheet" media="print" />
```

Dafür können auch [CSS-Optimierungen](/de/docs/Learn_web_development/Extensions/Performance/CSS) vorgenommen werden.

### Schriftarten

Standardmäßig werden Anfragen nach Schriftarten verzögert, bis der Renderbaum erstellt wurde. Dadurch kann sich die Darstellung von Text verzögern.

Dieses Standardverhalten lässt sich überschreiben: Webfont-Ressourcen können mit `<link rel="preload">`, dem [CSS-Deskriptor `font-display`](/de/docs/Web/CSS/Reference/At-rules/@font-face/font-display) und der [Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) vorgeladen werden.

Siehe auch: [Element `link`](/de/docs/Web/HTML/Reference/Elements/link).

### Bilder, iframes, Videos und Audio

Webseiten enthalten häufig viele Bilder, die das übertragene Datenvolumen und die Ladezeit beeinflussen. Die meisten dieser Bilder befinden sich zunächst außerhalb des sichtbaren Bereichs und sind damit [nicht kritisch](/de/docs/Web/Performance/Guides/Critical_rendering_path). Um sie zu sehen, ist eine Nutzerinteraktion wie Scrollen erforderlich. Auch viele iframes, Videos und Audioelemente befinden sich anfangs außerhalb des sichtbaren Bereichs.

#### Attribut `loading`

Mit dem Attribut [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading) eines {{HTMLElement("img")}}-, {{HTMLElement("iframe")}}-, {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Elements können Sie den Browser anweisen, das Laden verknüpfter Ressourcen zu verzögern, solange sich die Elemente außerhalb des sichtbaren Bereichs befinden – bis der Nutzer in ihre Nähe scrollt.
So werden nicht kritische Ressourcen nur bei Bedarf geladen. Das kann die anfängliche Ladezeit der Seite verkürzen und die Netzwerknutzung reduzieren.

```html
<img loading="lazy" src="image.jpg" alt="..." />
<iframe loading="lazy" src="video-player.html" title="..."></iframe>
<video
  loading="lazy"
  src="video.mp4"
  poster="poster.jpg"
  width="640"
  height="360"
  controls></video>
<audio loading="lazy" src="audio.mp3" controls></audio>
```

Ein verzögert geladenes `<audio>`-Element benötigt das Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/audio#controls): Ohne dieses Attribut wird das Element nicht angezeigt. Es gelangt daher nie in die Nähe des Viewports, und die Audiodatei wird nicht geladen.

Das Ereignis `load` wird ausgelöst, sobald alle ohne Verzögerung geladenen Inhalte vollständig geladen sind. Zu diesem Zeitpunkt können sich im {{Glossary("visual_viewport", "visuellen Viewport")}} noch verzögert geladene Bilder, iframes, Videos oder Audioelemente befinden, die nicht geladen wurden.

Ob ein bestimmtes Bild vollständig geladen wurde, können Sie anhand des Werts seiner booleschen Eigenschaft [`complete`](/de/docs/Web/API/HTMLImageElement/complete) feststellen.

#### Intersection Observer API

Mit [Intersection Observers](/de/docs/Web/API/IntersectionObserver) können Sie feststellen, wann ein beobachtetes Element in den Viewport des Browsers eintritt oder ihn verlässt.

#### Event-Handler

Wenn die Browser-Kompatibilität entscheidend ist, gibt es mehrere Möglichkeiten:

- Einen [Polyfill für Intersection Observer](https://github.com/w3c/IntersectionObserver) verwenden.
- Alternativ Event-Handler für Scroll-, Resize- oder Orientierungsänderungsereignisse verwenden, um festzustellen, ob sich ein bestimmtes Element im Viewport befindet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Rendering-blockierendes CSS](https://web.dev/articles/critical-rendering-path/render-blocking-css)
- [Lazy Loading von Bildern auf Browser-Ebene für das Web](https://web.dev/articles/browser-level-image-lazy-loading)
- [Es ist Zeit, iframes außerhalb des sichtbaren Bereichs verzögert zu laden!](https://web.dev/articles/iframe-lazy-loading)
