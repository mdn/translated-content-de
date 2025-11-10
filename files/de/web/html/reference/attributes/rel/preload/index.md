---
title: rel=preload
slug: Web/HTML/Reference/Attributes/rel/preload
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der `preload`-Wert des `rel`-Attributs des {{htmlelement("link")}}-Elements ermöglicht es Ihnen, Abrufe im HTML-{{htmlelement("head")}} zu deklarieren. Hierbei werden Ressourcen angegeben, die Ihre Seite sehr bald benötigt, die Sie früh im Lebenszyklus der Seite laden möchten, noch bevor das Haupt-Rendering des Browsers beginnt. Dies stellt sicher, dass sie früher verfügbar sind und weniger wahrscheinlich den Seitenaufbau blockieren, was die Leistung verbessert. Obwohl der Name den Begriff _load_ (laden) enthält, wird das Skript nicht geladen und ausgeführt, sondern nur zum Download und zur Prioritätenspeicherung geplant.

## Die Grundlagen

In der Regel verwenden Sie `<link>`, um eine CSS-Datei zu laden und Ihre Seite zu stylen:

```html
<link rel="stylesheet" href="styles/main.css" />
```

Hier jedoch werden wir einen `rel`-Wert von `preload` verwenden, der `<link>` in einen Preloader für jede gewünschte Ressource verwandelt. Sie müssen außerdem angeben:

- Den Pfad zur Ressource im [`href`](/de/docs/Web/HTML/Reference/Elements/link#href)-Attribut.
- Den Ressourcentyp im [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut.

Ein Beispiel könnte so aussehen (siehe unser [JS und CSS Beispiel](https://github.com/mdn/html-examples/tree/main/link-rel-preload/js-and-css), und [auch live](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)):

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

Hier laden wir unsere CSS- und JavaScript-Dateien vor, sodass sie verfügbar sind, sobald sie für das Rendern der Seite später benötigt werden. Dieses Beispiel ist trivial, da der Browser wahrscheinlich die `<link rel="stylesheet">` und `<script>`-Elemente im selben HTML-Abschnitt wie die Preloads entdeckt, aber die Vorteile werden viel klarer, je später Ressourcen entdeckt werden und je größer sie sind. Zum Beispiel:

- Ressourcen, die aus CSS heraus referenziert werden, wie Schriften oder Bilder.
- Ressourcen, die von JavaScript angefordert werden können, wie importierte Skripte.

`preload` hat auch andere Vorteile. Durch die Verwendung von `as`, um den zu preladenden Inhaltstyp zu spezifizieren, kann der Browser:

- Die Ressource im Cache für zukünftige Anfragen speichern und bei Bedarf wiederverwenden.
- Die korrekte [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) auf die Ressource anwenden.
- Die richtigen {{HTTPHeader("Accept")}}-Request-Header für die Ressource setzen.

### Welche Inhaltsarten können vorgeladen werden?

Viele Inhaltstypen können vorgeladen werden. Die möglichen `as`-Attributwerte sind:

- `fetch`: Ressource, die durch einen Fetch- oder XHR-Request abgerufen wird, wie ein ArrayBuffer, WebAssembly-Binärdatei oder JSON-Datei.
- `font`: Schriftdatei.
- `image`: Bilddatei.
- `script`: JavaScript-Datei.
- `style`: CSS-Stylesheet.
- `track`: WebVTT-Datei.

> [!NOTE]
> Das Preloading von `font` und `fetch` erfordert, dass das `crossorigin`-Attribut gesetzt wird; siehe [CORS-enabled fetches](#cors-fähige_fetches) weiter unten.

> [!NOTE]
> Mehr Details zu diesen Werten und den Web-Features, für die sie vorgesehen sind, finden Sie in der HTML-Spezifikation — siehe [Link-Typ "preload"](https://html.spec.whatwg.org/#match-preload-type). Beachten Sie auch, dass die vollständige Liste der Werte, die das `as`-Attribut annehmen kann, durch die Fetch-Spezifikation geregelt wird — siehe [request destinations](https://fetch.spec.whatwg.org/#concept-request-destination).

## Einschluss eines MIME-Typs

`<link>`-Elemente können ein `type`-Attribut annehmen, das den MIME-Typ der Ressource enthält, auf den das Element verweist. Dies ist besonders nützlich beim Preloading von Ressourcen — der Browser verwendet den `type`-Attributwert, um herauszufinden, ob er diese Ressource unterstützt, und wird sie nur dann herunterladen, wenn dies der Fall ist, andernfalls wird sie ignoriert.

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

Der Code im obigen Beispiel bewirkt, dass das `image/avif`-Bild nur in unterstützenden Browsern vorgeladen wird — und für Nutzer, die `image/avif`-Unterstützung in ihren Browsern haben, dass das `image/avif`-Bild tatsächlich verwendet wird (da es das erste angegebene {{htmlelement("source")}} ist). Dadurch wird der Bild-Download hoffentlich kleiner für Nutzer, die `image/avif`-Unterstützung in ihren Browsern haben.

Beachten Sie, dass für Nutzer, deren Browser sowohl `image/avif` als auch `image/webp` unterstützen, wenn im Code auch ein `<link rel="preload" href="flower.webp" as="image" type="image/webp">`-Element spezifiziert wäre, dann _beide_ die `image/avif`- und `image/webp`-Bilder vorgeladen würden — obwohl tatsächlich nur eines von ihnen verwendet werden würde.

Daher wird das Preloading mehrerer Typen derselben Ressource nicht empfohlen. Stattdessen ist die beste Praxis, das Preloading nur für den Typ zu spezifizieren, den die Mehrheit Ihrer Nutzer wahrscheinlich tatsächlich verwenden wird. Deshalb spezifiziert der Code im obigen Beispiel kein Preloading für das `image/webp`-Bild.

Das Fehlen von Preloads verhindert jedoch nicht, dass das `image/webp`-Bild tatsächlich von denjenigen verwendet wird, die es benötigen: Für Nutzer, deren Browser `image/avif`-Unterstützung nicht hat, aber `image/webp`-Unterstützung hat, wird im obigen Beispielcode dennoch das `image/webp`-Bild verwendet — aber ohne es auch für die Mehrheit der anderen Nutzer unnötig vorzulegen.

## CORS-fähige Fetches

Beim Preloading von Ressourcen, die mit aktivierten [CORS](/de/docs/Web/HTTP/Guides/CORS) abgerufen werden (z.B. [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [Fonts](/de/docs/Web/CSS/Reference/At-rules/@font-face)), müssen besondere Vorsichtsmaßnahmen getroffen werden, um das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/link#crossorigin)-Attribut in Ihr [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element aufzunehmen. Das Attribut muss so eingestellt werden, dass es dem CORS- und Anmelde-Modus der Ressource entspricht, selbst wenn der Abruf nicht websiteübergreifend erfolgt.

Wie oben erwähnt, ist ein interessanter Fall, in dem dies zutrifft, die Schriftdaten. Aus verschiedenen Gründen müssen diese im anonymen CORS-Modus abgerufen werden (siehe [Anforderungen beim Schriftenabruf](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

Lassen Sie uns diesen Fall als Beispiel verwenden. Der vollständige Quellenkode ist auf [GitHub verfügbar](https://github.com/mdn/html-examples/tree/main/link-rel-preload/fonts) ([live Beispiel ansehen](https://mdn.github.io/html-examples/link-rel-preload/fonts/)):

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

Wir geben nicht nur MIME-Typ-Hinweise in den `type`-Attributen an, sondern stellen auch das `crossorigin`-Attribut bereit, um sicherzustellen, dass der Preload-CORS-Modus dem endgültigen Schriftressourcen-Abruf entspricht.

## Einschluss von Medien

Eine schöne Funktion von `<link>`-Elementen ist deren Fähigkeit, [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attribute anzunehmen. Diese können [Medientypen](/de/docs/Web/CSS/Reference/At-rules/@media#media_types) oder vollständige [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) akzeptieren, was Ihnen ermöglicht, responsives Preloading durchzuführen!

Schauen wir uns ein Beispiel an (siehe es auf GitHub — [Quellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/media), [live Beispiel](https://mdn.github.io/html-examples/link-rel-preload/media/)):

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

Wir fügen `media`-Attribute in unsere `<link>`-Elemente ein, sodass ein schmales Bild vorgeladen wird, wenn der Nutzer ein schmales Viewport hat, und ein breiteres Bild, wenn sie ein weites Viewport haben. Wir verwenden [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) / [`MediaQueryList`](/de/docs/Web/API/MediaQueryList), um dies durchzuführen (siehe [Testen von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Testing) für mehr Informationen).

Diese Technik kann auch auf andere Ressourcentypen angewendet werden. Beispielsweise sorgt Preloading bei Schriften dafür, dass die Schrift mit größerer Wahrscheinlichkeit zur Renderzeit verfügbar ist, wodurch die Chance eines Flashs von ungestyltem Text (FOUT) reduziert wird.

Dies muss nicht auf Bilder oder sogar Dateien desselben Typs beschränkt sein — denken Sie groß! Vielleicht könnten Sie ein vereinfachtes SVG-Diagramm preladen und anzeigen, wenn der Nutzer einen schmalen Bildschirm hat, wo Bandbreite und CPU potenziell begrenzter sind, oder ein komplexes Stück JavaScript preladen und verwenden, um ein interaktives 3D-Modell darzustellen, wenn die Ressourcen des Nutzers reichlicher sind.

## Skripting und Preloads

> [!NOTE]
> Verwenden Sie [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload), wenn Sie mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) arbeiten.

Ein weiterer Vorteil dieser Preloads ist, dass Sie sie mit einem Skript ausführen können. Zum Beispiel, erstellen wir eine Instanz von [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) und fügen sie dann dem DOM hinzu:

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

Das bedeutet, dass der Browser die Datei `myscript.js` vorlädt, aber noch nicht tatsächlich verwendet. Um sie zu verwenden, könnten Sie Folgendes tun:

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

Dies ist nützlich, wenn Sie ein Skript vorladen möchten, aber die Ausführung bis genau zu dem Zeitpunkt verzögern möchten, an dem Sie es benötigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculative loading](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="preload">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) von Yoav Weiss
