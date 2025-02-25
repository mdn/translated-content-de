---
title: rel=preload
slug: Web/HTML/Attributes/rel/preload
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{HTMLSidebar}}

Der `preload` Wert des Attributs [`rel`](/de/docs/Web/HTML/Element/link#rel) des {{htmlelement("link")}} Elements ermöglicht Ihnen, Abrufanforderungen im HTML-{{htmlelement("head")}} zu deklarieren. Sie spezifizieren damit Ressourcen, die Ihre Seite sehr bald benötigen wird und die Sie früh im Lebenszyklus der Seite laden möchten, bevor die Hauptdarstellungsmechanismen der Browser aktiviert werden. Dies stellt sicher, dass sie früher verfügbar sind und weniger wahrscheinlich das Rendern der Seite blockieren, wodurch die Leistung verbessert wird. Obwohl der Name den Begriff _load_ enthält, lädt und führt es das Skript nicht aus, sondern plant nur, es mit höherer Priorität herunterzuladen und im Cache zu speichern.

## Die Grundlagen

Am häufigsten verwenden Sie `<link>`, um eine CSS-Datei zu laden, um Ihre Seite zu gestalten:

```html
<link rel="stylesheet" href="styles/main.css" />
```

Hier jedoch werden wir einen `rel` Wert von `preload` verwenden, was `<link>` in einen Preloader für jede gewünschte Ressource verwandelt. Sie müssen auch Folgendes angeben:

- Den Pfad zur Ressource im [`href`](/de/docs/Web/HTML/Element/link#href) Attribut.
- Den Ressourcentyp im [`as`](/de/docs/Web/HTML/Element/link#as) Attribut.

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

Hier laden wir unsere CSS- und JavaScript-Dateien vor, damit sie verfügbar sind, sobald sie später zum Rendern der Seite benötigt werden. Dieses Beispiel ist trivial, da der Browser wahrscheinlich die `<link rel="stylesheet">` und `<script>` Elemente im gleichen Teil des HTMLs wie die Preloads entdeckt, aber die Vorteile können viel deutlicher gesehen werden, je später Ressourcen entdeckt werden und je größer sie sind. Beispielsweise:

- Ressourcen, die von CSS aus verlinkt werden, wie Schriftarten oder Bilder.
- Ressourcen, die JavaScript anfordern kann, wie importierte Skripte.

`preload` hat auch andere Vorteile. Die Verwendung von `as`, um den Art des Inhalts anzugeben, der vorgeladen werden soll, ermöglicht es dem Browser:

- Im Cache für zukünftige Anfragen zu speichern, die Ressource bei Bedarf wiederzuverwenden.
- Die korrekte [Content Security Policy](/de/docs/Web/HTTP/CSP) auf die Ressource anzuwenden.
- Die korrekten {{HTTPHeader("Accept")}} Anfrage-Header für sie festzulegen.

### Welche Arten von Inhalten können vorgeladen werden?

Viele Inhaltstypen können vorgeladen werden. Die möglichen Werte des `as` Attributs sind:

- `fetch`: Ressource, die durch eine Fetch- oder XHR-Anfrage zugegriffen werden soll, wie ein ArrayBuffer, eine WebAssembly-Binärdatei oder eine JSON-Datei.
- `font`: Schriftartdatei.
- `image`: Bilddatei.
- `script`: JavaScript-Datei.
- `style`: CSS-Stylesheet.
- `track`: WebVTT-Datei.

> **Hinweis:** Das Vorladen von `font` und `fetch` erfordert das Setzen des `crossorigin` Attributs; siehe [CORS-fähige Abrufe](#cors-fähige_abrufe) unten.

> [!NOTE]
> Es gibt mehr Details über diese Werte und die Web-Features, von denen erwartet wird, dass sie im HTML-Spez - siehe [Link-Typ "preload"](https://html.spec.whatwg.org/#match-preload-type) - konsumiert werden. Beachten Sie auch, dass die vollständige Liste der Werte, die das `as` Attribut annehmen kann, von der Fetch-Spezifikation gesteuert wird - siehe [Request Destinations](https://fetch.spec.whatwg.org/#concept-request-destination).

## Einbinden eines MIME-Typs

`<link>` Elemente können ein [`type`](/de/docs/Web/HTML/Element/link#type) Attribut akzeptieren, das den MIME-Typ der Ressource enthält, auf die das Element zeigt. Dies ist besonders nützlich beim Vorladen von Ressourcen — der Browser verwendet den `type` Attributswert, um zu ermitteln, ob er diese Ressource unterstützt, und lädt sie nur herunter, wenn dies der Fall ist, ansonsten ignoriert er sie.

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

Der Code im obigen Beispiel bewirkt, dass das `image/avif` Bild nur in unterstützenden Browsern vorgeladen wird — und für Benutzer, die `image/avif` Unterstützung in ihren Browsern haben, das `image/avif` Bild tatsächlich verwendet wird (da es das erste angegebene {{htmlelement("source")}} ist). Das verkleinert hoffentlich den Bilddownload für Benutzer, die `image/avif` Unterstützung in ihren Browsern haben.

Beachten Sie, dass, wenn die Browser der Benutzer sowohl `image/avif` als auch `image/webp` Unterstützung haben, wenn in diesem Code auch ein `<link rel="preload" href="flower.webp" as="image" type="image/webp">` Element angegeben würde, dann _beide_ die `image/avif` und `image/webp` Bilder vorgeladen werden würden — obwohl nur eines davon tatsächlich verwendet werden würde.

Das Vorladen von mehreren Typen derselben Ressource wird daher nicht empfohlen. Stattdessen ist es am besten, das Vorladen nur für den Typ zu spezifizieren, den die Mehrheit Ihrer Benutzer wahrscheinlich tatsächlich verwenden wird. Deshalb spezifiziert der obige Code im Beispiel nicht das Vorladen für das `image/webp` Bild.

Das Fehlen des Vorladens verhindert jedoch nicht, dass das `image/webp` Bild tatsächlich von denen verwendet wird, die es benötigen: Für Benutzer, deren Browser keine `image/avif` Unterstützung, aber `image/webp` Unterstützung haben, bewirkt der Code im obigen Beispiel, dass das `image/webp` Bild verwendet wird — aber es geschieht, ohne es auch unnötig für die Mehrheit der anderen Benutzer vorzulegen.

## CORS-fähige Abrufe

Beim Vorladen von Ressourcen, die mit [CORS](/de/docs/Web/HTTP/CORS) aktiviert abgerufen werden (z. B. [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [Schriftarten](/de/docs/Web/CSS/@font-face)), muss darauf geachtet werden, das [`crossorigin`](/de/docs/Web/HTML/Element/link#crossorigin) Attribut am [`<link>`](/de/docs/Web/HTML/Element/link) Element zu setzen. Das Attribut muss so eingestellt werden, dass es mit dem CORS- und Anmeldemodus der Ressource übereinstimmt, selbst wenn der Abruf nicht grenzüberschreitend ist.

Wie oben erwähnt, gilt dies in einem interessanten Fall bei Schriftartdateien. Aus verschiedenen Gründen müssen diese im anonymen CORS-Modus abgerufen werden (siehe [Anforderungen an das Abrufen von Schriftarten](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

Lassen Sie uns diesen Fall als Beispiel verwenden. Sie können den vollständigen [Beispiel-Quellcode auf GitHub](https://github.com/mdn/html-examples/tree/main/link-rel-preload/fonts) ([auch live ansehen](https://mdn.github.io/html-examples/link-rel-preload/fonts/)) sehen:

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

Wir bieten nicht nur die MIME-Typ-Hinweise in den `type` Attributen an, sondern auch das `crossorigin` Attribut, um sicherzustellen, dass der CORS-Modus des Preloads mit der endgültigen Schriftartenanfrage übereinstimmt.

## Einbeziehung von Medien

Ein schönes Merkmal von `<link>` Elementen ist ihre Fähigkeit, [`media`](/de/docs/Web/HTML/Element/link#media) Attribute zu akzeptieren. Diese können [Medientypen](/de/docs/Web/CSS/@media#media_types) oder vollständige [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) akzeptieren, was es Ihnen ermöglicht, responsives Preloading zu betreiben!

Schauen wir uns ein Beispiel an (siehe es auf GitHub — [Quellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/media), [live Beispiel](https://mdn.github.io/html-examples/link-rel-preload/media/)):

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

Wir fügen `media` Attribute zu unseren `<link>` Elementen hinzu, sodass ein schmales Bild vorgeladen wird, wenn der Benutzer einen engen Viewport hat, und ein breiteres Bild geladen wird, wenn der Benutzer einen weiten Viewport hat. Wir verwenden [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) / [`MediaQueryList`](/de/docs/Web/API/MediaQueryList), um dies zu tun (siehe [Testen von Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) für mehr).

Dies erhöht die Wahrscheinlichkeit, dass die Schriftart für das Rendern der Seite verfügbar ist, und reduziert das unangenehme Umschalten ungestylter Texte (FOUT).

Dies muss sich nicht nur auf Bilder oder sogar auf Dateien desselben Typs beschränken – denken Sie groß! Sie könnten eventuell ein vereinfachtes SVG-Diagramm vorladen und anzeigen, wenn der Benutzer auf einem schmalen Bildschirm ist, wo Bandbreite und CPU potenziell begrenzter sind, oder ein komplexes JavaScript vorladen und eine interaktive 3D-Modelle nutzen, wenn die Ressourcen des Benutzers reichhaltiger sind.

## Skripting und Preloads

> [!NOTE]
> Verwenden Sie [`<link rel="modulepreload">`](/de/docs/Web/HTML/Attributes/rel/modulepreload), wenn Sie mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) arbeiten.

Ein weiterer Vorteil dieser Preloads ist, dass Sie sie mit Skripten ausführen können.
Zum Beispiel erstellen wir hier eine [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) Instanz und fügen sie dann dem DOM hinzu:

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

Dies bedeutet, dass der Browser die Datei `myscript.js` vorlädt, sie jedoch noch nicht tatsächlich verwendet. Um sie zu verwenden, könnten Sie dies tun:

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

Dies ist nützlich, wenn Sie ein Skript vorladen möchten, dessen Ausführung jedoch auf genau den Moment hinauszögern möchten, in dem Sie es benötigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculative loading](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="preload">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) von Yoav Weiss
