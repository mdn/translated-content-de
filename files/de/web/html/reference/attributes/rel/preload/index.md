---
title: '`rel="preload"` HTML-Attributswert'
short-title: preload
slug: Web/HTML/Reference/Attributes/rel/preload
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

Der `preload`-Wert des {{htmlelement("link")}}-Elements im [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut ermöglicht es Ihnen, Abrufanforderungen im HTML-{{htmlelement("head")}} zu deklarieren und Ressourcen anzugeben, die Ihre Seite sehr bald benötigen wird, die Sie früh im Seitenlebenszyklus laden möchten, bevor die Haupt-Rendering-Maschine des Browsers einsetzt. Dies stellt sicher, dass sie früher verfügbar sind und die Darstellung der Seite weniger wahrscheinlich blockieren, was die Leistung verbessert. Obwohl der Name den Begriff _load_ enthält, lädt er das Skript nicht und führt es nicht aus, sondern plant lediglich, es mit höherer Priorität herunterzuladen und im Cache zu speichern.

## Die Grundlagen

Normalerweise verwenden Sie `<link>`, um eine CSS-Datei zu laden, um Ihre Seite zu stylen:

```html
<link rel="stylesheet" href="styles/main.css" />
```

Hier jedoch verwenden wir einen `rel`-Wert von `preload`, der `<link>` in einen Preloader für jede gewünschte Ressource verwandelt. Sie müssen auch angeben:

- Den Pfad zur Ressource im [`href`](/de/docs/Web/HTML/Reference/Elements/link#href)-Attribut.
- Den Typ der Ressource im [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut.

Ein Beispiel könnte so aussehen (siehe unser [JS und CSS Beispielquellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/js-and-css) und [auch live](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)):

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

Hier laden wir unsere CSS- und JavaScript-Dateien vor, damit sie verfügbar sind, sobald sie für das Rendern der Seite später benötigt werden. Dieses Beispiel ist trivial, da der Browser wahrscheinlich die `<link rel="stylesheet">`- und `<script>`-Elemente im selben HTML-Abschnitt wie die Preloads entdeckt, aber die Vorteile sind viel klarer zu erkennen, je später Ressourcen entdeckt werden und je größer sie sind. Zum Beispiel:

- Ressourcen, die von innerhalb der CSS referenziert werden, wie Schriftarten oder Bilder.
- Ressourcen, die von JavaScript angefordert werden können, wie importierte Skripte.

`preload` hat auch andere Vorteile. Die Verwendung von `as`, um die Art des vorzuladenden Inhalts anzugeben, ermöglicht es dem Browser:

- Im Cache für zukünftige Anfragen zu speichern und die Ressource bei Bedarf wiederzuverwenden.
- Die korrekte [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) auf die Ressource anzuwenden.
- Die korrekten {{HTTPHeader("Accept")}}-Request-Header für sie festzulegen.

### Welche Arten von Inhalten können vorgeladen werden?

Viele Inhaltsarten können vorgeladen werden. Die möglichen `as`-Attributwerte sind:

- `fetch`: Ressource, die durch eine Fetch- oder XHR-Anfrage abgerufen werden soll, wie ein ArrayBuffer, WebAssembly-Binärdatei oder eine JSON-Datei.
- `font`: Schriftartdatei.
- `image`: Bilddatei.
- `script`: JavaScript-Datei.
- `style`: CSS-Stylesheet.
- `track`: WebVTT-Datei.

> [!NOTE]
> `font`- und `fetch`-Preloading erfordert, dass das `crossorigin`-Attribut gesetzt ist; siehe [CORS-fähige Abrufe](#cors-fähige_abrufe) unten.

> [!NOTE]
> Es gibt mehr Details zu diesen Werten und den Webfunktionen, die sie erwarten, im HTML-Standard — siehe [Linktyp "preload"](https://html.spec.whatwg.org/#match-preload-type). Beachten Sie auch, dass die vollständige Liste der Werte, die das `as`-Attribut annehmen kann, durch die Fetch-Spezifikation geregelt wird — siehe [Anforderungsziele](https://fetch.spec.whatwg.org/#concept-request-destination).

## Einschließen eines MIME-Typs

`<link>`-Elemente können ein [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribut akzeptieren, das den MIME-Typ der Ressource enthält, auf die das Element verweist. Dies ist besonders nützlich beim Vorladen von Ressourcen – der Browser verwendet den `type`-Attributwert, um herauszufinden, ob er diese Ressource unterstützt, und lädt sie nur herunter, wenn dies der Fall ist, ignoriert sie andernfalls.

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

Der Code im obigen Beispiel führt dazu, dass das `image/avif`-Bild nur in unterstützenden Browsern vorgeladen wird – und für Benutzer, die `image/avif`-Unterstützung in ihren Browsern haben, wird das `image/avif`-Bild tatsächlich verwendet (da es die erste angegebene {{htmlelement("source")}} ist). Das macht den Bilddownload hoffentlich kleiner für Benutzer, die `image/avif`-Unterstützung in ihren Browsern haben.

Beachten Sie, dass für Benutzer, deren Browser sowohl `image/avif`- als auch `image/webp`-Unterstützung haben, wenn in diesem Code ein `<link rel="preload" href="flower.webp" as="image" type="image/webp">`-Element ebenfalls angegeben wäre, dann _beide_ die `image/avif`- und `image/webp`-Bilder vorgeladen werden — obwohl nur eines tatsächlich verwendet würde.

Daher wird das Angeben des Vorladens für mehrere Typen derselben Ressource nicht empfohlen. Stattdessen ist es die beste Praxis, das Vorladen nur für den Typ anzugeben, den die Mehrheit Ihrer Benutzer wahrscheinlich tatsächlich verwenden wird. Deshalb gibt der Code im obigen Beispiel das Vorladen für das `image/webp`-Bild nicht an.

Das Fehlen eines Vorladens verhindert jedoch nicht, dass das `image/webp`-Bild von denen verwendet wird, die es benötigen: Für Benutzer, deren Browser keine `image/avif`-Unterstützung, aber `image/webp`-Unterstützung haben, bewirkt der Code im obigen Beispiel, dass das `image/webp`-Bild verwendet wird – jedoch ohne es auch unnötig für die Mehrheit der anderen Benutzer vorzulegen.

## CORS-fähige Abrufe

Beim Vorladen von Ressourcen, die mit [CORS](/de/docs/Web/HTTP/Guides/CORS) aktiviert (z.B. [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [Schriftarten](/de/docs/Web/CSS/Reference/At-rules/@font-face)) abgerufen werden, muss darauf geachtet werden, das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/link#crossorigin)-Attribut auf Ihrem [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element zu setzen. Das Attribut muss gesetzt werden, um dem CORS- und Anmeldemodus der Ressource zu entsprechen, selbst wenn der Abruf nicht über Cross-Origin erfolgt.

Wie oben erwähnt, ist ein interessanter Fall, bei dem dies zutrifft, Schriftartdateien. Aus verschiedenen Gründen müssen diese im anonymen-CORS-Modus abgerufen werden (siehe [Anforderungen für das Abrufen von Schriftarten](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

Verwenden wir diesen Fall als Beispiel. Sie können den vollständigen [Beispielquellcode auf GitHub](https://github.com/mdn/html-examples/tree/main/link-rel-preload/fonts) ([sehen Sie ihn auch live](https://mdn.github.io/html-examples/link-rel-preload/fonts/)):

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

Wir geben nicht nur MIME-Typ-Hinweise in den `type`-Attributen an, sondern auch das `crossorigin`-Attribut, um sicherzustellen, dass der CORS-Modus des Preloads dem letztendlichen Font-Ressourcenanforderung entspricht.

## Medien einschließen

Eine tolle Eigenschaft von `<link>`-Elementen ist ihre Fähigkeit, [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attribute zu akzeptieren. Diese können [Medientypen](/de/docs/Web/CSS/Reference/At-rules/@media#media_types) oder vollständige [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) annehmen, sodass Sie responsives Vorladen durchführen können!

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

Wir fügen `media`-Attribute auf unseren `<link>`-Elementen hinzu, so dass ein schmales Bild vorgeladen wird, wenn der Benutzer einen schmalen Viewport hat, und ein breiteres Bild geladen wird, wenn sie einen breiten Viewport haben. Wir verwenden [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) / [`MediaQueryList`](/de/docs/Web/API/MediaQueryList), um dies zu tun (siehe [Testing media queries](/de/docs/Web/CSS/Guides/Media_queries/Testing) für mehr).

Diese Technik gilt auch für andere Ressourcentypen. Zum Beispiel, wenn sie mit Schriftarten verwendet wird, macht das Vorladen es wahrscheinlicher, dass die Schriftart zur Renderzeit verfügbar ist, was die Wahrscheinlichkeit eines Blitzeffekts ohne formatierten Text (FOUT) verringert.

Dies muss sich nicht auf Bilder oder sogar Dateien desselben Typs beschränken – denken Sie groß! Sie könnten vielleicht ein vereinfachtes SVG-Diagramm vorladen und anzeigen, wenn der Benutzer auf einem schmalen Bildschirm ist, wo Bandbreite und CPU potenziell eingeschränkter sind, oder ein komplexes Stück JavaScript vorladen und dann verwenden, um ein interaktives 3D-Modell zu rendern, wenn die Ressourcen des Benutzers reichlicher sind.

## Skripting und Preloads

> [!NOTE]
> Verwenden Sie [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload), wenn Sie mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) arbeiten.

Eine weitere schöne Sache an diesen Preloads ist, dass Sie sie mit einem Skript ausführen können.
Zum Beispiel erstellen wir hier eine Instanz von [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) und fügen sie dann dem DOM hinzu:

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

Das bedeutet, dass der Browser die Datei `myscript.js` vorladen wird, sie aber noch nicht tatsächlich verwendet. Um sie zu verwenden, könnten Sie dies tun:

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

Dies ist nützlich, wenn Sie ein Skript vorladen möchten, dessen Ausführung aber erst bei Bedarf erfolgen soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="preload">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) von Yoav Weiss
