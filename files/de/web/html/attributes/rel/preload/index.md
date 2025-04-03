---
title: rel=preload
slug: Web/HTML/Attributes/rel/preload
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

Der `preload`-Wert des `rel`-Attributs des {{htmlelement("link")}}-Elements ermöglicht es Ihnen, Abrufe im HTML-{{htmlelement("head")}}-Bereich zu deklarieren und Ressourcen anzugeben, die Ihre Seite sehr bald benötigen wird. Sie möchten diese Ressourcen frühzeitig im Seitenlebenszyklus laden, bevor die Haupt-Rendering-Mechanismen der Browser greifen. Dies stellt sicher, dass sie früher verfügbar sind und weniger wahrscheinlich den Seitenaufbau blockieren, wodurch die Leistung verbessert wird. Obwohl der Name das Wort _load_ enthält, wird das Skript nicht geladen und ausgeführt, sondern nur zum Herunterladen und Cachen mit höherer Priorität eingeplant.

## Die Grundlagen

Üblicherweise verwenden Sie `<link>`, um eine CSS-Datei zu laden, um Ihre Seite zu stylen:

```html
<link rel="stylesheet" href="styles/main.css" />
```

Hier jedoch verwenden wir einen `rel`-Wert von `preload`, der `<link>` in einen Preloader für jede gewünschte Ressource umwandelt. Sie müssen auch Folgendes spezifizieren:

- Den Pfad zur Ressource im [`href`](/de/docs/Web/HTML/Element/link#href)-Attribut.
- Den Typ der Ressource im [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut.

Ein Beispiel könnte so aussehen (siehe unser [JS und CSS Beispielcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/js-and-css) und [auch live](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)):

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

Hier laden wir unsere CSS- und JavaScript-Dateien vor, damit sie verfügbar sind, sobald sie später beim Rendern der Seite benötigt werden. Dieses Beispiel ist trivial, da der Browser wahrscheinlich die `<link rel="stylesheet">`- und `<script>`-Elemente im selben HTML-Block wie die Preloads entdeckt, aber die Vorteile sind viel deutlicher, je später die Ressourcen entdeckt werden und je größer sie sind. Zum Beispiel:

- Ressourcen, die innerhalb von CSS referenziert werden, wie Schriftarten oder Bilder.
- Ressourcen, die JavaScript anfordern kann, wie importierte Skripte.

`preload` hat auch andere Vorteile. Durch die Verwendung von `as`, um den Typ des vorzuladenden Inhalts anzugeben, kann der Browser:

- Den Inhalt für zukünftige Anfragen im Cache speichern und die Ressource bei Bedarf wiederverwenden.
- Die korrekte [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) auf die Ressource anwenden.
- Die richtigen {{HTTPHeader("Accept")}}-Anforderungsheader dafür festlegen.

### Welche Arten von Inhalten können vorgeladen werden?

Viele Inhaltstypen können vorgeladen werden. Die möglichen Werte des `as`-Attributs sind:

- `fetch`: Ressourcen, die durch einen Fetch- oder XHR-Anfrage zugänglich gemacht werden, wie ein ArrayBuffer, WebAssembly-Binärdatei oder JSON-Datei.
- `font`: Schriftdatei.
- `image`: Bilddatei.
- `script`: JavaScript-Datei.
- `style`: CSS-Stylesheet.
- `track`: WebVTT-Datei.

> **Note:** `font` und `fetch` Preloading erfordern, dass das `crossorigin`-Attribut gesetzt wird; siehe [CORS-fähige Abrufe](#cors-fähige_abrufe) unten.

> [!NOTE]
> Weitere Details zu diesen Werten und den Web-Features, die sie konsumieren sollen, finden Sie in der HTML-Spezifikation — siehe [Linktyp "preload"](https://html.spec.whatwg.org/#match-preload-type). Beachten Sie auch, dass die vollständige Liste der Werte, die das `as`-Attribut annehmen kann, von der Fetch-Spezifikation bestimmt wird — siehe [Anfrageziele](https://fetch.spec.whatwg.org/#concept-request-destination).

## Ein MIME-Typ einschließen

`<link>`-Elemente können ein [`type`](/de/docs/Web/HTML/Element/link#type)-Attribut akzeptieren, das den MIME-Typ der Ressource enthält, auf die das Element verweist. Dies ist besonders nützlich beim Vorladen von Ressourcen — der Browser verwendet den Wert des `type`-Attributs, um zu ermitteln, ob er diese Ressource unterstützt und lädt sie nur dann herunter, wenn dies der Fall ist, andernfalls ignoriert er sie.

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

Der Code im obigen Beispiel bewirkt, dass das `image/avif`-Bild nur in unterstützenden Browsern vorgeladen wird — und für Benutzer, die `image/avif`-Support in ihren Browsern haben, bewirkt es, dass das `image/avif`-Bild tatsächlich verwendet wird (da es das erste angegebene {{htmlelement("source")}} ist). Das macht den Bilddownload hoffentlich kleiner für Benutzer, die `image/avif`-Support in ihren Browsern haben.

Beachten Sie, dass für Benutzer, deren Browser sowohl `image/avif`- als auch `image/webp`-Support haben, wenn in diesem Code auch ein `<link rel="preload" href="flower.webp" as="image" type="image/webp">`-Element angegeben wäre, dann _beide_ die `image/avif`- und `image/webp`-Bilder vorgeladen würden — obwohl nur eines davon tatsächlich verwendet würde.

Daher wird empfohlen, das Vorladen für mehrere Typen derselben Ressource zu vermeiden. Stattdessen ist es am besten, das Vorladen nur für den Typ zu spezifizieren, den die Mehrheit Ihrer Benutzer wahrscheinlich tatsächlich verwendet. Deshalb wird im obigen Beispielcode das Vorladen des `image/webp`-Bildes nicht angegeben.

Das Fehlen des Vorladens verhindert jedoch nicht, dass das `image/webp`-Bild tatsächlich von denen verwendet wird, die es benötigen: für Benutzer, deren Browser keinen `image/avif`-Support, aber `image/webp`-Support haben, bewirkt der Code im obigen Beispiel dennoch, dass das `image/webp`-Bild verwendet wird — jedoch ohne es für die Mehrheit der anderen Benutzer unnötig vorzuhalten.

## CORS-fähige Abrufe

Beim Vorladen von Ressourcen, die mit aktiviertem [CORS](/de/docs/Web/HTTP/Guides/CORS) abgerufen werden (z.B. [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [Schriftarten](/de/docs/Web/CSS/@font-face)), muss besonderes Augenmerk auf das Setzen des [`crossorigin`](/de/docs/Web/HTML/Element/link#crossorigin)-Attributs im [`<link>`](/de/docs/Web/HTML/Element/link)-Element gerichtet werden. Das Attribut muss so eingestellt sein, dass es mit dem CORS- und Anmeldemodus der Ressource übereinstimmt, selbst wenn der Abruf nicht herkunftsübergreifend ist.

Wie oben erwähnt, ist ein interessanter Fall, in dem dies zutrifft, Schriftdateien. Aus verschiedenen Gründen müssen diese im anonymen CORS-Modus abgerufen werden (siehe [Schriftabrufanforderungen](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

Lassen Sie uns diesen Fall als Beispiel verwenden. Sie finden den vollständigen [Beispielcode auf GitHub](https://github.com/mdn/html-examples/tree/main/link-rel-preload/fonts) ([auch live ansehen](https://mdn.github.io/html-examples/link-rel-preload/fonts/)):

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

Wir geben nicht nur die MIME-Typ-Hinweise in den `type`-Attributen an, sondern auch das `crossorigin`-Attribut, um sicherzustellen, dass der CORS-Modus des Preloads mit der eigentlichen Schriftanforderung übereinstimmt.

## Medien einbinden

Ein schönes Merkmal von `<link>`-Elementen ist ihre Fähigkeit, [`media`](/de/docs/Web/HTML/Element/link#media)-Attribute zu akzeptieren. Diese können [Medientypen](/de/docs/Web/CSS/@media#media_types) oder vollständige [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) akzeptieren und Ihnen so ein responsives Vorladen ermöglichen!

Lassen Sie uns ein Beispiel betrachten (siehe es auf GitHub — [Quellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/media), [live Beispiel](https://mdn.github.io/html-examples/link-rel-preload/media/)):

```html
<head>
  <meta charset="utf-8" />
  <title>Responsive preload example</title>

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
    <h1>My site</h1>
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

Wir fügen `media`-Attribute zu unseren `<link>`-Elementen hinzu, sodass ein schmales Bild vorgeladen wird, wenn der Benutzer einen schmalen Viewport hat, und ein breiteres Bild geladen wird, wenn er einen breiten Viewport hat. Wir verwenden [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) / [`MediaQueryList`](/de/docs/Web/API/MediaQueryList), um dies zu tun (siehe [Testen von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) für mehr).

Dadurch ist es viel wahrscheinlicher, dass die Schrift für das Seitenrendering verfügbar ist, und reduziert FOUT (Flash of Unstyled Text).

Dies muss sich nicht auf Bilder beschränken oder sogar auf Dateien desselben Typs — denken Sie groß! Sie könnten vielleicht ein vereinfachtes SVG-Diagramm vorladen und anzeigen, wenn der Benutzer auf einem schmalen Bildschirm ist, wo Bandbreite und CPU potenziell begrenzt sind, oder einen komplexen Block JavaScript vorladen und dann verwenden, um ein interaktives 3D-Modell zu rendern, wenn die Ressourcen des Benutzers reichlicher sind.

## Scripting und Preloads

> [!NOTE]
> Verwenden Sie [`<link rel="modulepreload">`](/de/docs/Web/HTML/Attributes/rel/modulepreload), wenn Sie mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) arbeiten.

Ein weiterer Vorteil dieser Preloads ist, dass Sie sie mit Skript ausführen können. Zum Beispiel erstellen wir hier eine Instanz von [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) und fügen sie dann dem DOM hinzu:

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

Dies bedeutet, dass der Browser die `myscript.js`-Datei vorlädt, sie aber noch nicht tatsächlich verwendet. Um sie zu verwenden, könnten Sie dies tun:

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

Dies ist nützlich, wenn Sie ein Skript vorladen, aber die Ausführung bis genau zu dem Zeitpunkt verzögern möchten, an dem Sie es benötigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="preload">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
- [Preload: Wofür ist es gut?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) von Yoav Weiss
