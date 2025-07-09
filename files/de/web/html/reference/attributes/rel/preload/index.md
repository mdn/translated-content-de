---
title: rel=preload
slug: Web/HTML/Reference/Attributes/rel/preload
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Der `preload`-Wert des {{htmlelement("link")}}-Elements im [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut ermöglicht es Ihnen, Abrufanfragen im HTML-{{htmlelement("head")}} zu deklarieren, Ressourcen anzugeben, die Ihre Seite sehr bald benötigt und deren Laden Sie früh im Seitenlebenszyklus starten möchten, noch bevor die Haupt-Rendering-Mechanismen der Browser aktiviert werden. Dies stellt sicher, dass sie früher verfügbar sind und weniger wahrscheinlich das Rendern der Seite blockieren, was die Leistung verbessert. Auch wenn der Name den Begriff _load_ enthält, wird das Skript nicht geladen und ausgeführt, sondern nur zum Herunterladen und Zwischenspeichern mit höherer Priorität eingeplant.

## Die Grundlagen

Sie verwenden `<link>` am häufigsten, um eine CSS-Datei zu laden, um Ihre Seite zu gestalten:

```html
<link rel="stylesheet" href="styles/main.css" />
```

Hier verwenden wir jedoch einen `rel`-Wert von `preload`, der `<link>` in einen Preloader für jede gewünschte Ressource verwandelt. Sie müssen auch angeben:

- Den Pfad zur Ressource im [`href`](/de/docs/Web/HTML/Reference/Elements/link#href)-Attribut.
- Den Ressourcentyp im [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut.

Ein Beispiel könnte so aussehen (siehe unser [Beispiel für JS und CSS](https://github.com/mdn/html-examples/tree/main/link-rel-preload/js-and-css), und [auch live](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)):

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

Hier laden wir unsere CSS- und JavaScript-Dateien vor, sodass sie verfügbar sind, sobald sie für das Rendern der Seite später benötigt werden. Dieses Beispiel ist trivial, da der Browser wahrscheinlich die `<link rel="stylesheet">`- und `<script>`-Elemente im gleichen HTML-Block wie die Preloads entdeckt, aber die Vorteile können viel deutlicher gesehen werden, je später die Ressourcen entdeckt werden und je größer sie sind. Zum Beispiel:

- Ressourcen, die von innerhalb von CSS referenziert werden, wie Schriften oder Bilder.
- Ressourcen, die von JavaScript angefordert werden können, wie importierte Skripte.

`preload` hat auch weitere Vorteile. Durch die Verwendung von `as`, um den Typ des zu ladenden Inhalts anzugeben, kann der Browser:

- Im Cache speichern für zukünftige Anfragen, die Ressource bei Bedarf wiederverwenden.
- Die korrekte [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) auf die Ressource anwenden.
- Die richtigen {{HTTPHeader("Accept")}}-Anforderungsheader dafür setzen.

### Welche Arten von Inhalten können vorgeladen werden?

Viele Inhaltsarten können vorgeladen werden. Die möglichen `as`-Attributwerte sind:

- `fetch`: Ressource, die durch eine fetch- oder XHR-Anfrage aufgerufen wird, wie ein ArrayBuffer, WebAssembly-Binärdatei oder JSON-Datei.
- `font`: Schriftdatei.
- `image`: Bilddatei.
- `script`: JavaScript-Datei.
- `style`: CSS-Stylesheet.
- `track`: WebVTT-Datei.

> [!NOTE]
> `font` und `fetch`-Preloading erfordert, dass das `crossorigin`-Attribut gesetzt ist; siehe [CORS-fähige Abrufe](#cors-fähige_abrufe) unten.

> [!NOTE]
> Es gibt mehr Details über diese Werte und die Web-Funktionen, die sie erwarten, in der HTML-Spezifikation — siehe [Link-Typ "preload"](https://html.spec.whatwg.org/#match-preload-type). Beachten Sie auch, dass die vollständige Liste der Werte, die das `as`-Attribut annehmen kann, durch die Fetch-Spezifikation geregelt ist — siehe [Anforderungsziele](https://fetch.spec.whatwg.org/#concept-request-destination).

## Einschließen eines MIME-Typs

`<link>`-Elemente können ein [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribut enthalten, das den MIME-Typ der Ressource angibt, auf die das Element verweist. Dies ist besonders nützlich, wenn Ressourcen vorgeladen werden — der Browser verwendet den `type`-Attributwert, um herauszufinden, ob er diese Ressource unterstützt, und wird sie nur herunterladen, wenn dies der Fall ist, andernfalls ignoriert er sie.

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

Der Code im obigen Beispiel führt dazu, dass das `image/avif`-Bild nur in Browsern vorgeladen wird, die es unterstützen, und für Benutzer, die `image/avif`-Unterstützung in ihren Browsern haben, wird das `image/avif`-Bild tatsächlich verwendet (da es das erste spezifizierte {{htmlelement("source")}} ist). Das macht den Bilddownload hoffentlich kleiner für Benutzer, die `image/avif`-Unterstützung in ihren Browsern haben.

Beachten Sie, dass bei Benutzern, deren Browser sowohl `image/avif`- als auch `image/webp`-Unterstützung haben und im Code ein `<link rel="preload" href="flower.webp" as="image" type="image/webp">`-Element ebenfalls angegeben würde, dann _sowohl_ die `image/avif`- als auch die `image/webp`-Bilder vorgeladen würden — auch wenn nur eines von ihnen tatsächlich verwendet würde.

Daher wird empfohlen, Preloading für mehrere Typen derselben Ressource zu vermeiden. Stattdessen ist es am besten, das Preloading nur für den Typ anzugeben, den die Mehrheit Ihrer Benutzer wahrscheinlich tatsächlich nutzen wird. Deshalb spezifiziert der Code im obigen Beispiel kein Preloading für das `image/webp`-Bild.

Das Fehlen von Preloading verhindert jedoch nicht, dass das `image/webp`-Bild tatsächlich von denen verwendet wird, die es benötigen: Für Benutzer, deren Browser keine `image/avif`-Unterstützung, aber `image/webp`-Unterstützung haben, sorgt der Code im obigen Beispiel dafür, dass das `image/webp`-Bild verwendet wird — jedoch ohne es auch unnötig für die Mehrheit der anderen Benutzer vorzuladen.

## CORS-fähige Abrufe

Beim Preloading von Ressourcen, die mit aktiviertem [CORS](/de/docs/Web/HTTP/Guides/CORS) abgerufen werden (z.B. [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [Schriften](/de/docs/Web/CSS/@font-face)), muss besondere Sorgfalt darauf verwendet werden, das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/link#crossorigin)- Attribut im [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) -Element zu setzen. Das Attribut muss so gesetzt werden, dass es dem CORS- und Anmeldemodus der Ressource entspricht, auch wenn der Abruf nicht fremdherkunftlich ist.

Wie oben erwähnt, ist ein interessanter Fall, in dem dies zutrifft, Schriftdateien. Aus verschiedenen Gründen müssen diese im anonymen Modus CORS abgerufen werden (siehe [Schriftabrufanforderungen](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

Lassen Sie uns diesen Fall als Beispiel verwenden. Sie können den vollständigen [Beispielquellcode auf GitHub](https://github.com/mdn/html-examples/tree/main/link-rel-preload/fonts) ansehen ([auch live](https://mdn.github.io/html-examples/link-rel-preload/fonts/)):

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

Wir geben nicht nur die MIME-Typ-Hinweise in den `type`-Attributen an, sondern auch das `crossorigin`-Attribut, um sicherzustellen, dass der CORS-Modus des Preloads dem der eigentlichen Schriftressourcen-Anfrage entspricht.

## Einschließen von Medien

Ein nettes Merkmal von `<link>`-Elementen ist ihre Fähigkeit, [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attribute anzunehmen. Diese können [Medientypen](/de/docs/Web/CSS/@media#media_types) oder vollständige [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) annehmen, sodass Sie reaktionsfähiges Preloading durchführen können!

Schauen wir uns ein Beispiel an (siehe es auf GitHub — [Quellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/media), [Live-Beispiel](https://mdn.github.io/html-examples/link-rel-preload/media/)):

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
      header.style.backgroundImage = "url(bg-image-narrow.png)";
    } else {
      header.style.backgroundImage = "url(bg-image-wide.png)";
    }
  </script>
</body>
```

Wir fügen `media`-Attribute zu unseren `<link>`-Elementen hinzu, damit ein schmales Bild vorgeladen wird, wenn der Benutzer ein schmales Ansichtsfenster hat, und ein breiteres Bild geladen wird, wenn er ein breites Ansichtsfenster hat. Wir verwenden [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) / [`MediaQueryList`](/de/docs/Web/API/MediaQueryList), um dies zu tun (siehe [Testen von Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) für mehr).

Dies macht es viel wahrscheinlicher, dass die Schriftart für das Seitenrendering verfügbar ist und reduziert so FOUT (Flash of Unstyled Text).

Dies muss sich nicht auf Bilder oder sogar Dateien desselben Typs beschränken — denken Sie groß! Sie könnten beispielsweise ein vereinfachtes SVG-Diagramm vorladen und anzeigen, wenn der Benutzer ein schmales Bildschirm hat, wo die Bandbreite und CPU möglicherweise eingeschränkt sind, oder ein komplexes Stück JavaScript vorladen und dann verwenden, um ein interaktives 3D-Modell zu rendern, wenn die Ressourcen des Benutzers reichlich vorhanden sind.

## Skripting und Preloads

> [!NOTE]
> Verwenden Sie [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload), wenn Sie mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) arbeiten.

Ein weiteres nettes Merkmal dieser Preloads ist, dass Sie sie mit Skript ausführen können. Zum Beispiel erstellen wir hier eine [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Instanz und hängen sie dann an das DOM an:

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

Dies bedeutet, dass der Browser die `myscript.js`-Datei vorlädt, aber noch nicht tatsächlich verwendet. Um sie zu verwenden, könnten Sie dies tun:

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

Dies ist nützlich, wenn Sie ein Skript vorladen möchten, aber die Ausführung erst genau dann verzögern möchten, wenn Sie es benötigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculative Loading](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="preload">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) von Yoav Weiss
