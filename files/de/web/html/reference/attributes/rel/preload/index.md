---
title: rel="preload"
slug: Web/HTML/Reference/Attributes/rel/preload
l10n:
  sourceCommit: 8799c26ef12a653ea2ab7d22a958fb46a649ca60
---

Der `preload`-Wert des {{htmlelement("link")}}-Elements im [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut ermöglicht es Ihnen, Abrufanforderungen im `<head>`-Abschnitt des HTML zu deklarieren. Sie geben damit Ressourcen an, die Ihre Seite sehr bald benötigt und deren Laden Sie frühzeitig im Seitenlebenszyklus starten möchten, bevor die Haupt-Rendering-Mechanik des Browsers startet. Dies stellt sicher, dass sie früher verfügbar sind und weniger wahrscheinlich das Rendering der Seite blockieren, was die Leistung verbessert. Obwohl der Name den Begriff _load_ enthält, lädt und führt er das Skript nicht aus, sondern plant lediglich dessen Download und Zwischenspeicherung mit höherer Priorität.

## Die Grundlagen

Üblicherweise verwenden Sie `<link>`, um eine CSS-Datei zu laden, mit der Ihre Seite gestaltet wird:

```html
<link rel="stylesheet" href="styles/main.css" />
```

Hier jedoch verwenden wir einen `rel`-Wert von `preload`, der `<link>` in einen Vorlader für beliebige Ressourcen verwandelt, die wir möchten. Sie müssen auch angeben:

- Den Pfad zur Ressource im [`href`](/de/docs/Web/HTML/Reference/Elements/link#href)-Attribut.
- Den Typ der Ressource im [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut.

Ein Beispiel könnte so aussehen (siehe unser [JS- und CSS-Beispielquellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/js-and-css), und [auch live](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)):

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

Hier laden wir unsere CSS- und JavaScript-Dateien vor, sodass sie verfügbar sind, sobald sie für das spätere Rendering der Seite benötigt werden. Dieses Beispiel ist trivial, da der Browser wahrscheinlich die `<link rel="stylesheet">`- und `<script>`-Elemente im selben HTML-Abschnitt wie die Vorladungen entdeckt. Die Vorteile werden jedoch viel deutlicher sichtbar, je später die Ressourcen entdeckt werden und je größer sie sind. Zum Beispiel:

- Ressourcen, die innerhalb von CSS referenziert werden, wie Schriftarten oder Bilder.
- Ressourcen, die von JavaScript angefordert werden können, wie importierte Skripte.

`preload` bietet auch andere Vorteile. Die Verwendung von `as`, um den Typ des vorzuladenden Inhalts anzugeben, ermöglicht es dem Browser:

- Die Ressource für zukünftige Anfragen im Cache zu speichern und bei Bedarf wiederzuverwenden.
- Die korrekte [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) auf die Ressource anzuwenden.
- Die richtigen {{HTTPHeader("Accept")}}-Anforderungsheader dafür festzulegen.

### Welche Arten von Inhalten können vorgeladen werden?

Viele Arten von Inhalten können vorgeladen werden. Die möglichen Werte für das `as`-Attribut sind:

- `fetch`: Ressource, die mit einer Fetch- oder XHR-Anfrage abgerufen wird, wie z.B. ein ArrayBuffer, ein WebAssembly-Binärformat oder eine JSON-Datei.
- `font`: Schriftart-Datei.
- `image`: Bilddatei.
- `script`: JavaScript-Datei.
- `style`: CSS-Stylesheet.
- `track`: WebVTT-Datei.

> [!NOTE]
> Für das Vorladen von `font` und `fetch` muss das `crossorigin`-Attribut gesetzt werden; siehe [CORS-fähige Abrufe](#cors-fähige_abrufe) unten.

> [!NOTE]
> Weitere Details zu diesen Werten und den Web-Funktionen, für die sie vorgesehen sind, finden Sie in der HTML-Spezifikation — siehe [Link-Typ "preload"](https://html.spec.whatwg.org/#match-preload-type). Beachten Sie auch, dass die vollständige Liste der Werte, die das `as`-Attribut annehmen kann, durch die Fetch-Spezifikation geregelt wird — siehe [Anfrageziele](https://fetch.spec.whatwg.org/#concept-request-destination).

## Eingabe eines MIME-Typs

`<link>`-Elemente können ein [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribut akzeptieren, das den MIME-Typ der Ressource enthält, auf die das Element verweist. Dies ist besonders nützlich, wenn Ressourcen vorgeladen werden — der Browser verwendet den Wert des `type`-Attributs, um zu überprüfen, ob er diese Ressource unterstützt, und lädt sie nur herunter, wenn dies der Fall ist, andernfalls ignoriert er sie.

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

Der Code im obigen Beispiel bewirkt, dass das Bild `image/avif` nur in unterstützten Browsern vorgeladen wird — und für Benutzer, die Unterstützung für `image/avif` in ihren Browsern haben, bewirkt, dass tatsächlich das `image/avif`-Bild verwendet wird (da es die erste {{htmlelement("source")}} ist, die angegeben ist). Das macht den Bilddownload hoffentlich kleiner für Benutzer, die Unterstützung für `image/avif` in ihren Browsern haben.

Beachten Sie, dass für Benutzer, deren Browser sowohl `image/avif` als auch `image/webp` Unterstützung haben, wenn in diesem Code auch ein `<link rel="preload" href="flower.webp" as="image" type="image/webp">`-Element angegeben wäre, dann _beide_ `image/avif`- und `image/webp`-Bilder vorgeladen würden — obwohl nur eines davon tatsächlich verwendet würde.

Daher wird abgeraten, das Vorladen für mehrere Typen derselben Ressource anzugeben. Stattdessen ist es am besten, das Vorladen nur für den Typ anzugeben, den die Mehrheit Ihrer Benutzer wahrscheinlich tatsächlich nutzen wird. Deshalb spezifiziert der Code im obigen Beispiel nicht das Vorladen des `image/webp`-Bildes.

Das Fehlen des Vorladens verhindert jedoch nicht, dass das `image/webp`-Bild tatsächlich von denjenigen verwendet wird, die es benötigen: Für Benutzer, deren Browser keine Unterstützung für `image/avif` haben, aber `image/webp` unterstützen, führt der Code im obigen Beispiel dazu, dass das `image/webp`-Bild verwendet wird — ohne es jedoch auch unnötig für die Mehrheit anderer Benutzer vorzulegen.

## CORS-fähige Abrufe

Beim Vorladen von Ressourcen, die mit aktiviertem [CORS](/de/docs/Web/HTTP/Guides/CORS) abgerufen werden (z.B. [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [Schriften](/de/docs/Web/CSS/Reference/At-rules/@font-face)), muss besonderes Augenmerk auf das Setzen des [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/link#crossorigin)-Attributs an Ihrem [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element gelegt werden. Das Attribut muss entsprechend dem CORS-Modus und dem Anmeldedatenmodus der Ressource eingestellt werden, auch wenn der Abruf nicht über Ursprungskreuzungen erfolgt.

Wie oben erwähnt, ist ein interessanter Fall, auf den dies zutrifft, Schriftdateien. Aus verschiedenen Gründen müssen diese im Anonym-Modus CORS abgerufen werden (siehe [Schriftabrufanforderungen](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

Lassen Sie uns diesen Fall als Beispiel verwenden. Sie können den vollständigen [Beispielquellcode auf GitHub](https://github.com/mdn/html-examples/tree/main/link-rel-preload/fonts) ansehen ([auch live ansehen](https://mdn.github.io/html-examples/link-rel-preload/fonts/)):

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

Wir geben nicht nur die MIME-Typ-Hinweise in den `type`-Attributen an, sondern wir stellen auch das `crossorigin`-Attribut bereit, um sicherzustellen, dass der CORS-Modus des Vorladens dem späteren Schriftressourcen-Anforderung entspricht.

## Einschließen von Medien

Ein schönes Feature von `<link>`-Elementen ist ihre Fähigkeit, [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attribute zu akzeptieren. Diese können [Medientypen](/de/docs/Web/CSS/Reference/At-rules/@media#media_types) oder vollständige [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) akzeptieren, was Ihnen ermöglicht, responsives Vorladen durchzuführen!

Betrachten wir ein Beispiel (siehe es auf GitHub — [Quellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/media), [Live-Beispiel](https://mdn.github.io/html-examples/link-rel-preload/media/)):

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

Wir fügen `media`-Attribute in unsere `<link>`-Elemente ein, sodass ein schmales Bild vorgeladen wird, wenn der Benutzer ein schmales Ansichtsfenster hat, und ein breiteres Bild geladen wird, wenn er ein breites Ansichtsfenster hat. Wir verwenden [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) / [`MediaQueryList`](/de/docs/Web/API/MediaQueryList), um dies zu erreichen (siehe [Media Queries testen](/de/docs/Web/CSS/Guides/Media_queries/Testing) für mehr).

Diese Technik gilt auch für andere Ressourcentypen. Beispielsweise trägt beim Einsatz mit Schriften das Vorladen dazu bei, dass die Schriftart zum Renderzeitpunkt verfügbar ist, wodurch die Wahrscheinlichkeit eines ungestalteten Textflackerns (FOUT) verringert wird.

Dies muss sich nicht auf Bilder oder sogar Dateien desselben Typs beschränken — denken Sie groß! Möglicherweise könnten Sie ein vereinfachtes SVG-Diagramm vorladen und anzeigen, falls der Benutzer auf einem schmalen Bildschirm ist, wo Bandbreite und CPU potenziell eingeschränkter sind, oder ein komplexes Stück JavaScript vorladen, das dann verwendet wird, um ein interaktives 3D-Modell zu rendern, wenn die Ressourcen des Benutzers reichlich sind.

## Scripting und Vorladungen

> [!NOTE]
> Verwenden Sie [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload), wenn Sie mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) arbeiten.

Ein weiterer Vorteil dieser Vorladungen ist, dass Sie sie mit einem Skript ausführen können.
Zum Beispiel erstellen wir hier eine Instanz von [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) und fügen diese dann an das DOM an:

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

Dies bedeutet, dass der Browser die `myscript.js`-Datei vorlädt, sie jedoch noch nicht tatsächlich verwendet. Um sie zu verwenden, könnten Sie das tun:

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

Dies ist nützlich, wenn Sie ein Skript vorladen wollen, die Ausführung jedoch auf genau den Zeitpunkt verzögern möchten, wenn Sie es benötigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="preload">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) von Yoav Weiss
