---
title: '`rel="preload"` HTML-Attributwert'
short-title: preload
slug: Web/HTML/Reference/Attributes/rel/preload
l10n:
  sourceCommit: fc7c0c6df803d5ce26e7b2a72725a7d021ed0694
---

Der `preload`-Wert des {{htmlelement("link")}}-Elements im [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut ermöglicht es Ihnen, Abrufanforderungen im HTML-{{htmlelement("head")}} zu deklarieren, wobei Ressourcen spezifiziert werden, die Ihre Seite sehr bald benötigen wird und die Sie frühzeitig im Seitenlebenszyklus laden möchten, bevor der Haupt-Rendering-Mechanismus der Browser einsetzt. Dies stellt sicher, dass sie früher verfügbar sind und weniger wahrscheinlich das Rendern der Seite blockieren, was die Leistung verbessert. Auch wenn der Name den Begriff _load_ enthält, wird das Skript nicht geladen und ausgeführt, sondern nur für den Download und das Caching mit höherer Priorität geplant.

## Die Grundlagen

Sie verwenden `<link>` am häufigsten, um eine CSS-Datei zu laden, um Ihre Seite zu stylen:

```html
<link rel="stylesheet" href="styles/main.css" />
```

Hier werden wir jedoch einen `rel`-Wert von `preload` verwenden, der `<link>` in einen Preloader für jede gewünschte Ressource verwandelt. Sie müssen auch Folgendes angeben:

- Den Pfad zur Ressource im [`href`](/de/docs/Web/HTML/Reference/Elements/link#href)-Attribut.
- Den Typ der Ressource im [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut.

Ein Beispiel könnte so aussehen (siehe unser [JS und CSS Beispielquelle](https://github.com/mdn/html-examples/tree/main/link-rel-preload/js-and-css), und [auch live](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)):

```html
<head>
  <meta charset="utf-8" />
  <title>JS and CSS preload example</title>

  <link rel="preload" href="style.css" as="style" />
  <link rel="preload" href="main.js" as="script" />

  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <h1>bouncing balls</h1>
  <canvas></canvas>

  <script src="main.js" defer></script>
</body>
```

Hier laden wir unsere CSS- und JavaScript-Dateien vor, damit sie verfügbar sind, sobald sie später für das Rendering der Seite benötigt werden. Dieses Beispiel ist trivial, da der Browser wahrscheinlich die `<link rel="stylesheet">`- und `<script>`-Elemente im gleichen HTML-Abschnitt wie die Vorladungen entdeckt, aber die Vorteile sind viel eindeutig erkennbar, je später die Ressourcen entdeckt werden und je größer sie sind. Zum Beispiel:

- Ressourcen, die von innerhalb von CSS verwiesen werden, wie Schriftarten oder Bilder.
- Ressourcen, die durch JavaScript angefordert werden können, wie importierte Skripte.

`preload` hat auch andere Vorteile. Die Verwendung von `as`, um den Inhaltstyp der vorzuladenden Datei anzugeben, ermöglicht es dem Browser:

- Im Cache für zukünftige Anfragen zu speichern und die Ressource bei Bedarf wiederzuverwenden.
- Die richtige [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) auf die Ressource anzuwenden.
- Die richtigen {{HTTPHeader("Accept")}}-Header für die Anfrage zu setzen.

### Welche Arten von Inhalten können vorgeladen werden?

Viele Inhaltstypen können vorgeladen werden. Die möglichen Werte des `as`-Attributs sind:

- `fetch`: Ressource, die durch eine Fetch- oder XHR-Anfrage abgerufen wird, wie ArrayBuffer, WebAssembly-Binärdatei oder JSON-Datei.
- `font`: Schriftartendatei.
- `image`: Bilddatei.
- `script`: JavaScript-Datei.
- `style`: CSS-Stylesheet.
- `track`: WebVTT-Datei.

> [!NOTE]
> `font` und `fetch` erfordern, dass das `crossorigin`-Attribut gesetzt ist; siehe [CORS-aktivierte Abrufe](#cors-aktivierte_abrufe) unten.

> [!NOTE]
> Es gibt mehr Details über diese Werte und die Web-Funktionen, von denen sie erwartet werden, dass sie konsumiert werden, in der HTML-Spezifikation — siehe [Link Typ "preload"](https://html.spec.whatwg.org/multipage/links.html#link-type-preload). Beachten Sie auch, dass die vollständige Liste der Werte, die das `as`-Attribut annehmen kann, durch die HTML-Spezifikation geregelt ist — siehe [Link Typ "preload" Zielorte](https://html.spec.whatwg.org/multipage/links.html#preload-destination).

## Einfügen eines MIME-Typs

`<link>`-Elemente können ein [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribut akzeptieren, das den MIME-Typ der Ressource enthält, auf die das Element verweist. Dies ist besonders nützlich beim Vorladen von Ressourcen — der Browser verwendet den `type`-Attributwert, um festzustellen, ob er diese Ressource unterstützt, und lädt sie nur herunter, wenn dies der Fall ist, ignoriert sie andernfalls.

```html
<head>
  <meta charset="utf-8" />
  <title>Image preload example</title>

  <link rel="preload" href="flower.avif" as="image" type="image/avif" />
</head>
<body>
  <picture>
    <source src="flower.avif" type="image/avif" />
    <source src="flower.webp" type="image/webp" />
    <img src="flower.jpg" />
  </picture>
</body>
```

Der Code im obigen Beispiel bewirkt, dass das `image/avif`-Bild nur in unterstützenden Browsern vorgeladen wird — und für Benutzer, die Unterstützung für `image/avif` in ihren Browsern haben, bewirkt, dass das `image/avif`-Bild tatsächlich verwendet wird (da es als erstes {{htmlelement("source")}} angegeben ist). Das macht den Bilddownload hoffentlich kleiner für Benutzer, die Unterstützung für `image/avif` in ihren Browsern haben.

Beachten Sie, dass für Benutzer, deren Browser sowohl `image/avif`- als auch `image/webp`-Unterstützung haben, wenn in diesem Code auch ein `<link rel="preload" href="flower.webp" as="image" type="image/webp">`-Element angegeben wäre, dann _beide_ die `image/avif`- und `image/webp`-Bilder vorgeladen würden — obwohl nur eines tatsächlich verwendet würde.

Daher wird empfohlen, das Vorladen für mehrere Typen derselben Ressource zu vermeiden. Stattdessen ist es am besten, das Vorladen nur für den Typ zu spezifizieren, den die Mehrheit Ihrer Benutzer wahrscheinlich tatsächlich verwenden wird. Deshalb spezifiziert der Code im obigen Beispiel nicht das Vorladen für das `image/webp`-Bild.

Das Fehlen des Vorladens verhindert jedoch nicht, dass das `image/webp`-Bild von denen tatsächlich verwendet wird, die es benötigen: Für Benutzer, deren Browser keine Unterstützung für `image/avif`, aber Unterstützung für `image/webp` haben, bewirkt der Code im obigen Beispiel immer noch, dass das `image/webp`-Bild verwendet wird — aber es tut dies, ohne es auch unnötig für die Mehrheit der anderen Benutzer vorzuladen.

## CORS-aktivierte Abrufe

Beim Vorladen von Ressourcen, die mit aktiviertem [CORS](/de/docs/Web/HTTP/Guides/CORS) abgerufen werden (z.B. [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [Fonts](/de/docs/Web/CSS/Reference/At-rules/@font-face)), muss besonders darauf geachtet werden, das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/link#crossorigin)-Attribut auf Ihrem [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element zu setzen. Das Attribut muss so eingestellt werden, dass es dem CORS- und Anmeldemodus der Ressource entspricht, auch wenn der Abruf nicht cross-origin ist.

Wie oben erwähnt, ist eine interessante Fallgruppe, auf die dies zutrifft, Schriftartendateien. Aus verschiedenen Gründen müssen diese im anonymen CORS-Modus abgerufen werden (siehe [Font Fetching Anforderungen](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

Lassen Sie uns diesen Fall als Beispiel verwenden. Sie können den vollständigen [Beispielquellcode auf GitHub](https://github.com/mdn/html-examples/tree/main/link-rel-preload/fonts) (auch [live ansehen](https://mdn.github.io/html-examples/link-rel-preload/fonts/)) sehen:

```html
<head>
  <meta charset="utf-8" />
  <title>Web font example</title>

  <link
    rel="preload"
    href="fonts/cicle_fina-webfont.woff2"
    as="font"
    type="font/woff2"
    crossorigin />
  <link
    rel="preload"
    href="fonts/zantroke-webfont.woff2"
    as="font"
    type="font/woff2"
    crossorigin />

  <link href="style.css" rel="stylesheet" />
</head>
<body>
  …
</body>
```

Wir geben nicht nur die MIME-Typ-Hinweise in den `type`-Attributen an, sondern auch das `crossorigin`-Attribut, um sicherzustellen, dass der CORS-Modus des Vorladens mit der späteren Anforderung der Schriftartressource übereinstimmt.

## Einfügen von Medien

Ein nettes Feature von `<link>`-Elementen ist ihre Fähigkeit, [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attribute zu akzeptieren. Diese können [Medientypen](/de/docs/Web/CSS/Reference/At-rules/@media#media_types) oder vollständige [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) akzeptieren, was es Ihnen ermöglicht, responsives Vorladen zu nutzen!

Werfen wir einen Blick auf ein Beispiel (siehe es auf GitHub — [Quellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/media), [Live-Beispiel](https://mdn.github.io/html-examples/link-rel-preload/media/)):

```html
<head>
  <meta charset="utf-8" />
  <title>Responsive preload example</title>

  <link
    rel="preload"
    href="bg-image-narrow.png"
    as="image"
    media="(width <= 600px)" />
  <link
    rel="preload"
    href="bg-image-wide.png"
    as="image"
    media="(width > 600px)" />

  <link rel="stylesheet" href="main.css" />
</head>
<body>
  <header>
    <h1>My site</h1>
  </header>

  <script>
    const mediaQueryList = window.matchMedia("(width <= 600px)");
    const header = document.querySelector("header");

    if (mediaQueryList.matches) {
      header.style.backgroundImage = 'url("bg-image-narrow.png")';
    } else {
      header.style.backgroundImage = 'url("bg-image-wide.png")';
    }
  </script>
</body>
```

Wir fügen `media`-Attribute zu unseren `<link>`-Elementen hinzu, damit ein schmales Bild vorgeladen wird, wenn der Benutzer ein schmales Ansichtsfenster hat, und ein breiteres Bild geladen wird, wenn er ein breites Ansichtsfenster hat. Wir verwenden [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) / [`MediaQueryList`](/de/docs/Web/API/MediaQueryList), um dies zu tun (siehe [Testing Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Testing) für mehr).

Diese Technik kann auch auf andere Ressourcentypen angewendet werden. Zum Beispiel macht es bei Verwendung mit Schriftarten das Vorladen wahrscheinlicher, dass die Schriftart zur Renderzeit verfügbar ist, was die Wahrscheinlichkeit einer Blitzziffer ohne Stil (FOUT) verringert.

Dies muss nicht auf Bilder oder sogar Dateien desselben Typs beschränkt sein — denken Sie groß! Vielleicht könnten Sie ein vereinfachtes SVG-Diagramm vorladen und anzeigen, wenn der Benutzer auf einem schmalen Bildschirm ist, wo Bandbreite und CPU potenziell begrenzter sind, oder ein komplexes JavaScript-Stück vorladen und dann verwenden, um ein interaktives 3D-Modell anzuzeigen, wenn die Ressourcen des Benutzers reichlich vorhanden sind.

## Skripting und Vorladungen

> [!NOTE]
> Verwenden Sie [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload), wenn Sie mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) arbeiten.

Ein weiterer Vorteil dieser Vorladungen ist, dass Sie sie mit Skripten ausführen können.
Zum Beispiel erstellen wir hier eine [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Instanz und fügen sie dann dem DOM hinzu:

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

Dies bedeutet, dass der Browser die `myscript.js`-Datei vorlädt, sie jedoch noch nicht verwendet. Um sie zu verwenden, könnten Sie dies tun:

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

Dies ist nützlich, wenn Sie ein Skript vorladen möchten, aber die Ausführung genau dann aufschieben möchten, wenn Sie es benötigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="preload">` und anderen ähnlichen Leistungsverbesserungsfeatures.
- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) von Yoav Weiss
