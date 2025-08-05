---
title: rel=preload
slug: Web/HTML/Reference/Attributes/rel/preload
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Der `preload`-Wert des Attributes [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) des {{htmlelement("link")}}-Elements ermöglicht es Ihnen, Abrufe im `<head>` des HTML-Dokuments zu deklarieren und Ressourcen anzugeben, die Ihre Seite sehr bald benötigen wird. Diese sollen früh im Seitenlebenszyklus geladen werden, bevor die Haupt-Rendering-Mechanismen des Browsers aktiv werden. Dies stellt sicher, dass sie frühzeitig verfügbar sind und weniger dazu neigen, das Rendern der Seite zu blockieren, wodurch die Leistung verbessert wird. Auch wenn der Name den Begriff _laden_ enthält, lädt und führt es das Skript nicht aus, sondern plant lediglich das Herunterladen und Zwischenspeichern mit höherer Priorität.

## Die Grundlagen

Normalerweise verwendet man `<link>` um eine CSS-Datei zu laden, um die Seite zu gestalten:

```html
<link rel="stylesheet" href="styles/main.css" />
```

Hier verwenden wir jedoch einen `rel`-Wert von `preload`, der `<link>` in einen Preloader für jede gewünschte Ressource verwandelt. Sie müssen auch angeben:

- Den Pfad zur Ressource im [`href`](/de/docs/Web/HTML/Reference/Elements/link#href)-Attribut.
- Den Ressourcentyp im [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut.

Ein Beispiel könnte so aussehen (siehe unser [JS und CSS Beispielquellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/js-and-css), und [auch live](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)):

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

Hier laden wir unsere CSS- und JavaScript-Dateien vor, sodass sie verfügbar sind, sobald sie für das Rendern der Seite benötigt werden. Dieses Beispiel ist trivial, da der Browser wahrscheinlich dieselben `<link rel="stylesheet">` und `<script>`-Elemente im gleichen HTML-Abschnitt wie die Preloads entdeckt, aber die Vorteile sind viel klarer sichtbar, je später Ressourcen entdeckt und je größer sie sind. Zum Beispiel:

- Ressourcen, die innerhalb von CSS referenziert werden, wie Schriftarten oder Bilder.
- Ressourcen, die von JavaScript angefordert werden können, wie importierte Skripte.

`preload` hat auch andere Vorteile. Mit `as` den Typ des zu ladenden Inhalts anzugeben, ermöglicht es dem Browser:

- Die Ressource im Cache für zukünftige Anfragen zu speichern und sie gegebenenfalls erneut zu verwenden.
- Die richtige [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) auf die Ressource anzuwenden.
- Die korrekten {{HTTPHeader("Accept")}}-Anforderungsheader dafür zu setzen.

### Welche Inhaltsarten können vorgeladen werden?

Viele Inhaltsarten können vorgeladen werden. Die möglichen Werte für das `as`-Attribut sind:

- `fetch`: Ressource, die durch eine Fetch- oder XHR-Anforderung abgerufen wird, wie ein ArrayBuffer, WebAssembly-Binärdatei oder JSON-Datei.
- `font`: Schriftart-Datei.
- `image`: Bilddatei.
- `script`: JavaScript-Datei.
- `style`: CSS-Stylesheet.
- `track`: WebVTT-Datei.

> [!NOTE]
> `font` und `fetch`-Preloading erfordert, dass das `crossorigin`-Attribut gesetzt ist; siehe [CORS-aktivierte Abrufe](#cors-aktivierte_abrufe) unten.

> [!NOTE]
> Es gibt detailliertere Informationen zu diesen Werten und den Web-Features, die sie konsumieren sollen, in der HTML-Spezifikation — siehe [Linktyp "preload"](https://html.spec.whatwg.org/#match-preload-type). Beachten Sie auch, dass die vollständige Liste der Werte, die das `as`-Attribut annehmen kann, von der Fetch-Spezifikation geregelt wird — siehe [Request destinations](https://fetch.spec.whatwg.org/#concept-request-destination).

## Einbeziehung eines MIME-Typs

`<link>`-Elemente können ein [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribut akzeptieren, das den MIME-Typ der Ressource enthält, auf die das Element zeigt. Dies ist besonders nützlich beim Vorladen von Ressourcen — der Browser wird den `type`-Attributwert verwenden, um festzustellen, ob er diese Ressource unterstützt, und wird sie nur herunterladen, wenn dies der Fall ist, und ansonsten ignorieren.

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

Der Code im obigen Beispiel bewirkt, dass das `image/avif`-Bild nur in unterstützenden Browsern vorgeladen wird — und für Nutzer, die `image/avif`-Unterstützung in ihren Browsern haben, bewirkt es, dass das `image/avif`-Bild tatsächlich verwendet wird (da es die erste {{htmlelement("source")}} ist). Das macht den Bilddownload hoffentlich kleiner für Nutzer, die `image/avif`-Unterstützung in ihren Browsern haben.

Beachten Sie, dass für Nutzer, deren Browser sowohl `image/avif` als auch `image/webp`-Unterstützung haben, wenn in dem Code auch ein `<link rel="preload" href="flower.webp" as="image" type="image/webp">`-Element angegeben wäre, dann _beide_ die `image/avif`- und `image/webp`-Bilder vorgeladen würden — obwohl nur eines davon tatsächlich verwendet würde.

Daher wird davon abgeraten, Preloading für mehrere Typen derselben Ressource anzugeben. Stattdessen ist es am besten, das Preloading nur für den Typ anzugeben, den die Mehrheit Ihrer Benutzer wahrscheinlich tatsächlich verwenden wird. Aus diesem Grund gibt der Code im obigen Beispiel kein Preloading für das `image/webp`-Bild an.

Der Mangel an Preloading hindert jedoch nicht daran, dass das `image/webp`-Bild tatsächlich von denen verwendet wird, die es benötigen: Benutzer, deren Browser keine `image/avif`-Unterstützung haben, aber `image/webp`-Unterstützung haben, das `image/webp`-Bild wird in dem Beispielcode immer noch verwendet — jedoch ohne es unnötigerweise für die Mehrheit der anderen Benutzer vorzubaden.

## CORS-aktivierte Abrufe

Beim Vorladen von Ressourcen, die mit aktiviertem [CORS](/de/docs/Web/HTTP/Guides/CORS) abgerufen werden (z.B. [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [Schriftarten](/de/docs/Web/CSS/@font-face)), muss besonderes Augenmerk auf das Setzen des [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/link#crossorigin)-Attributs auf Ihrem [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element gelegt werden. Das Attribut muss auf den CORS- und Anmeldeinformationen-Modus der Ressource abgestimmt sein, selbst wenn der Abruf nicht Cross-Origin ist.

Wie oben erwähnt, ist ein interessanter Fall, auf den dies zutrifft, Schriftartdateien. Aus verschiedenen Gründen müssen diese im anonymen Modus mit CORS abgerufen werden (siehe [Font Fetching-Anforderungen](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

Nehmen wir diesen Fall als Beispiel. Sie können den vollständigen [Beispielquellcode auf GitHub](https://github.com/mdn/html-examples/tree/main/link-rel-preload/fonts) sehen ([auch live ansehen](https://mdn.github.io/html-examples/link-rel-preload/fonts/)):

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

Wir geben nicht nur die MIME-Typ-Hinweise in den `type`-Attributen an, sondern bieten auch das `crossorigin`-Attribut, um sicherzustellen, dass der CORS-Modus des Preloads mit dem endgültigen Schriftartressourcenanforderung übereinstimmt.

## Einbeziehung von Medien

Eine nette Funktion von `<link>`-Elementen ist die Fähigkeit, [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attribute zu akzeptieren. Diese können [Medientypen](/de/docs/Web/CSS/@media#media_types) oder vollwertige [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) akzeptieren, sodass Sie responsives Preloading durchführen können!

Werfen wir einen Blick auf ein Beispiel (siehe es auf GitHub — [Quellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/media), [Live-Example](https://mdn.github.io/html-examples/link-rel-preload/media/)):

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

Wir fügen `media`-Attribute zu unseren `<link>`-Elementen hinzu, damit ein schmales Bild vorgeladen wird, wenn der Benutzer ein schmales Viewport hat, und ein breiteres Bild geladen wird, wenn er ein breites Viewport hat. Wir verwenden dazu [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) / [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) (siehe [Testen von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) für mehr).

Dies erhöht die Wahrscheinlichkeit, dass die Schriftart für das Rendern der Seite verfügbar ist, wodurch FOUT (Flash of Unstyled Text) verringert wird.

Dies muss sich nicht auf Bilder oder sogar Dateien desselben Typs beschränken — denken Sie groß! Vielleicht können Sie ein vereinfachtes SVG-Diagramm vorladen und anzeigen, wenn der Benutzer ein schmales Bildschirmen hat, bei dem Bandbreite und CPU möglicherweise begrenzter sind, oder ein komplexes JavaScript-Stück vorladen, um dann ein interaktives 3D-Modell zu rendern, wenn die Ressourcen des Benutzers reichhaltiger sind.

## Skripting und Preloads

> [!NOTE]
> Verwenden Sie [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload), wenn Sie mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) arbeiten.

Ein weiterer Vorteil dieser Preloads ist, dass Sie sie mit Skript ausführen können. Zum Beispiel erstellen wir hier eine Instanz von [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) und hängen diese an das DOM an:

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

Dies bedeutet, dass der Browser die Datei `myscript.js` vorlädt, aber noch nicht tatsächlich verwendet. Um sie zu verwenden, könnten Sie dies tun:

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

Dies ist nützlich, wenn Sie ein Skript vorladen, die Ausführung jedoch genau dann verzögern möchten, wenn Sie es benötigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculative Ladeprozesse](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="preload">` und anderen ähnlichen Leistungssteigerungsfunktionen.
- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) von Yoav Weiss
