---
title: rel=preload
slug: Web/HTML/Attributes/rel/preload
l10n:
  sourceCommit: aee2bd82de11cb7331134e48e8bd548bbedafcc5
---

{{HTMLSidebar}}

Der `preload`-Wert des {{htmlelement("link")}}-Elements im [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attribut ermöglicht es Ihnen, Abrufanforderungen im HTML-{{htmlelement("head")}} zu deklarieren. Sie geben Ressourcen an, die Ihre Seite sehr bald benötigt und die Sie früh im Seitenlebenszyklus laden möchten, bevor die Haupt-Rendering-Mechanismen der Browser in Gang kommen. Dies stellt sicher, dass sie früher verfügbar sind und weniger wahrscheinlich das Rendering der Seite blockieren, was die Leistung verbessert. Obwohl der Name den Begriff _load_ enthält, lädt und führt es das Skript nicht aus, sondern plant lediglich, es mit höherer Priorität herunterzuladen und im Cache zu speichern.

## Die Grundlagen

Am häufigsten verwenden Sie `<link>`, um eine CSS-Datei zu laden, um Ihre Seite zu gestalten:

```html
<link rel="stylesheet" href="styles/main.css" />
```

Hier verwenden wir jedoch einen `rel`-Wert von `preload`, der `<link>` in einen Preloader für jede gewünschte Ressource verwandelt. Sie müssen auch Folgendes angeben:

- Den Pfad zur Ressource im [`href`](/de/docs/Web/HTML/Element/link#href)-Attribut.
- Den Ressourcentyp im [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut.

Ein einfaches Beispiel könnte wie folgt aussehen (siehe unser [JS- und CSS-Beispielcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/js-and-css), und [ebenfalls live](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)):

```html
<head>
  <meta charset="utf-8" />
  <title>JS und CSS Preload-Beispiel</title>

  <link rel="preload" href="style.css" as="style" />
  <link rel="preload" href="main.js" as="script" />

  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <h1>Bouncing Balls</h1>
  <canvas></canvas>

  <script src="main.js" defer></script>
</body>
```

Hier laden wir unsere CSS- und JavaScript-Dateien vor, sodass sie verfügbar sind, sobald sie später für das Rendering der Seite erforderlich sind. Dieses Beispiel ist trivial, da der Browser die `<link rel="stylesheet">`- und `<script>`-Elemente im selben HTML-Abschnitt wie die Preloads wahrscheinlich erkennt. Die Vorteile sind jedoch viel deutlicher sichtbar, je später Ressourcen erkannt werden und je größer sie sind. Zum Beispiel:

- Ressourcen, die innerhalb von CSS referenziert sind, wie Schriftarten oder Bilder.
- Ressourcen, die JavaScript anfordern kann, wie importierte Skripte.

`preload` hat auch andere Vorteile. Die Verwendung von `as`, um den Typ des zu ladenden Inhalts anzugeben, ermöglicht es dem Browser:

- Im Cache für zukünftige Anforderungen zu speichern und die Ressource bei Bedarf wiederzuverwenden.
- Die richtige [Content Security Policy](/de/docs/Web/HTTP/CSP) auf die Ressource anzuwenden.
- Die richtigen {{HTTPHeader("Accept")}}-Anforderungsheader dafür festzulegen.

### Welche Inhaltstypen können vorgeladen werden?

Viele Inhaltstypen können vorgeladen werden. Die möglichen Werte des `as`-Attributs sind:

- `fetch`: Ressource, die durch eine Fetch- oder XHR-Anfrage abgerufen wird, wie ArrayBuffer, WebAssembly-Binärdatei oder JSON-Datei.
- `font`: Schriftartdatei.
- `image`: Bilddatei.
- `script`: JavaScript-Datei.
- `style`: CSS-Stylesheet.
- `track`: WebVTT-Datei.

> **Note:** `font` und `fetch` benötigen das `crossorigin`-Attribut zum Vorladen; siehe [CORS-fähige Abrufe](#cors-fähige_abrufe) unten.

> [!NOTE]
> Weitere Details zu diesen Werten und den Web-Features, unter denen sie konsumiert werden sollen, finden Sie in der HTML-Spezifikation — siehe [Linktyp "preload"](https://html.spec.whatwg.org/#match-preload-type). Beachten Sie auch, dass die vollständige Liste der Werte, die das `as`-Attribut annehmen kann, durch die Fetch-Spezifikation geregelt ist — siehe [Anfragedestinationen](https://fetch.spec.whatwg.org/#concept-request-destination).

## Ein MIME-Typ angeben

`<link>`-Elemente können ein [`type`](/de/docs/Web/HTML/Element/link#type)-Attribut akzeptieren, das den MIME-Typ der vom Element referenzierten Ressource enthält. Dies ist besonders nützlich beim Vorladen von Ressourcen — der Browser verwendet den `type`-Attributwert, um herauszufinden, ob er diese Ressource unterstützt, und lädt sie nur herunter, wenn ja, oder ignoriert sie andernfalls.

```html
<head>
  <meta charset="utf-8" />
  <title>Bild-Preload-Beispiel</title>

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

Der Code im obigen Beispiel bewirkt, dass das `image/avif`-Bild nur in unterstützten Browsern vorgeladen wird — und für Benutzer, die `image/avif`-Unterstützung in ihren Browsern haben, wird das `image/avif`-Bild tatsächlich verwendet (weil es die erste angegebene {{htmlelement("source")}} ist). Dadurch wird der Bilddownload hoffentlich für Benutzer kleiner, die `image/avif`-Unterstützung in ihren Browsern haben.

Beachten Sie, dass für Benutzer, deren Browser sowohl `image/avif`- als auch `image/webp`-Unterstützung haben, wenn in diesem Code ein `<link rel="preload" href="flower.webp" as="image" type="image/webp">`-Element ebenfalls angegeben wäre, dann _beide_ Bilder, `image/avif` und `image/webp`, vorgeladen würden — auch wenn nur eines tatsächlich verwendet würde.

Daher wird das Vorladen mehrerer Typen derselben Ressource nicht empfohlen. Stattdessen ist es am besten, das Vorladen nur für den Typ zu spezifizieren, den die Mehrheit Ihrer Benutzer tatsächlich verwenden wird. Aus diesem Grund spezifiziert der Code im obigen Beispiel kein Vorladen für das `image/webp`-Bild.

Das Fehlen des Vorladens verhindert jedoch nicht, dass das `image/webp`-Bild tatsächlich von denen verwendet wird, die es benötigen: Für Benutzer, deren Browser `image/avif` nicht unterstützen, aber `image/webp` unterstützen, wird das `image/webp`-Bild durch den Code im obigen Beispiel dennoch verwendet — jedoch ohne es ebenfalls unnötig für die Mehrheit der anderen Benutzer vorzuladen.

## CORS-fähige Abrufe

Beim Vorladen von Ressourcen, die mit aktiviertem [CORS](/de/docs/Web/HTTP/CORS) abgerufen werden (z. B. [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [Schriften](/de/docs/Web/CSS/@font-face)), muss besonders darauf geachtet werden, das [`crossorigin`](/de/docs/Web/HTML/Element/link#crossorigin)-Attribut auf Ihrem [`<link>`](/de/docs/Web/HTML/Element/link)-Element zu setzen. Das Attribut muss so gesetzt werden, dass es zum CORS- und Anmeldemodus der Ressource passt, selbst wenn der Abruf nicht ursprungsübergreifend ist.

Wie oben erwähnt, ist ein interessanter Fall, auf den dies zutrifft, Schriftartdateien. Aus verschiedenen Gründen müssen diese im anonymen CORS-Modus abgerufen werden (siehe [Anforderungen zum Schriftabruf](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

Sehen wir uns diesen Fall als Beispiel an. Sie können den vollständigen [Beispielcode auf GitHub](https://github.com/mdn/html-examples/tree/main/link-rel-preload/fonts) ([sehen Sie es auch live](https://mdn.github.io/html-examples/link-rel-preload/fonts/)) ansehen:

```html
<head>
  <meta charset="utf-8" />
  <title>Webschrift-Beispiel</title>

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

Wir geben nicht nur MIME-Typ-Hinweise in den `type`-Attributen an, sondern auch das `crossorigin`-Attribut, um sicherzustellen, dass der CORS-Modus des Preloads der endgültigen Schriftartanforderung entspricht.

## Medien einbeziehen

Ein nettes Feature von `<link>`-Elementen ist ihre Fähigkeit, [`media`](/de/docs/Web/HTML/Element/link#media)-Attribute zu akzeptieren. Diese können [Medientypen](/de/docs/Web/CSS/@media#media_types) oder umfassende [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) annehmen, was es Ihnen ermöglicht, responsives Preloading zu nutzen!

Sehen wir uns ein Beispiel an (sehen Sie es auf GitHub — [Quellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/media), [Live-Beispiel](https://mdn.github.io/html-examples/link-rel-preload/media/)):

```html
<head>
  <meta charset="utf-8" />
  <title>Responsives Preload-Beispiel</title>

  <link
    rel="preload"
    href="bg-image-narrow.png"
    as="image"
    media="(max-width: 600px)" />
  <link
    rel="preload"
    href="bg-image-wide.png"
    as="image"
    media="(min-width: 601px)" />

  <link rel="stylesheet" href="main.css" />
</head>
<body>
  <header>
    <h1>Meine Seite</h1>
  </header>

  <script>
    const mediaQueryList = window.matchMedia("(max-width: 600px)");
    const header = document.querySelector("header");

    if (mediaQueryList.matches) {
      header.style.backgroundImage = "url(bg-image-narrow.png)";
    } else {
      header.style.backgroundImage = "url(bg-image-wide.png)";
    }
  </script>
</body>
```

Wir fügen `media`-Attribute in unsere `<link>`-Elemente ein, sodass ein schmales Bild vorgeladen wird, wenn der Benutzer ein schmales Ansichtsfenster hat, und ein breiteres Bild geladen wird, wenn er ein breites Ansichtsfenster hat. Wir verwenden {{domxref("Window.matchMedia")}} / {{domxref("MediaQueryList")}}, um dies zu erreichen (siehe [Media Queries testen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) für mehr).

Dies erhöht die Wahrscheinlichkeit, dass die Schriftart für das Seitenrendering verfügbar ist, und reduziert FOUT (Flash of Unstyled Text).

Dies muss nicht auf Bilder oder sogar Dateien desselben Typs beschränkt sein — denken Sie groß! Sie könnten beispielsweise ein einfaches SVG-Diagramm vorladen und anzeigen, wenn der Benutzer auf einem schmalen Bildschirm ist, wo Bandbreite und CPU potenziell begrenzt sind, oder eine komplexe JavaScript-Komponente vorladen und dann verwenden, um ein interaktives 3D-Modell darzustellen, wenn die Ressourcen des Benutzers umfangreicher sind.

## Skripting und Preloads

> [!NOTE]
> Verwenden Sie [`<link rel="modulepreload">`](/de/docs/Web/HTML/Attributes/rel/modulepreload), wenn Sie mit [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) arbeiten.

Eine weitere schöne Sache an diesen Preloads ist, dass Sie sie mit Skripten ausführen können. Zum Beispiel erstellen wir hier eine {{domxref("HTMLLinkElement")}}-Instanz und hängen sie an die DOM an:

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

Das bedeutet, dass der Browser die `myscript.js`-Datei vorlädt, sie aber noch nicht tatsächlich verwendet. Um sie zu verwenden, könnten Sie dies tun:

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

Das ist nützlich, wenn Sie ein Skript vorladen wollen, die Ausführung aber erst dann durchgeführt werden soll, wenn Sie es tatsächlich benötigen.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading) für einen Vergleich von `<link rel="preload">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) von Yoav Weiss
