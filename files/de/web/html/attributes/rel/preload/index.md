---
title: rel=preload
slug: Web/HTML/Attributes/rel/preload
l10n:
  sourceCommit: 4d3605197ea5c6407aacca2a80cc27a398f04fc8
---

{{HTMLSidebar}}

Der `preload`-Wert des `rel`-Attributs des {{htmlelement("link")}}-Elements ermöglicht es Ihnen, Abrufanforderungen im HTML-{{htmlelement("head")}} zu deklarieren und dabei Ressourcen anzugeben, die Ihre Seite sehr bald benötigen wird. Diese möchten Sie früh im Seitenlebenszyklus laden, bevor die Haupt-Rendering-Maschinerie der Browser startet. Dies stellt sicher, dass sie früher verfügbar sind und weniger wahrscheinlich das Rendering der Seite blockieren, was die Leistung verbessert. Obwohl der Name den Begriff _load_ enthält, lädt und führt es das Skript nicht aus, sondern plant nur das Herunterladen und Zwischenspeichern mit höherer Priorität.

## Die Grundlagen

In der Regel verwenden Sie `<link>`, um eine CSS-Datei zu laden, um Ihre Seite zu gestalten:

```html
<link rel="stylesheet" href="styles/main.css" />
```

Hier verwenden wir jedoch einen `rel`-Wert von `preload`, der `<link>` in einen Vorlader für jede Ressource verwandelt, die wir möchten. Sie müssen auch angeben:

- Den Pfad zur Ressource im [`href`](/de/docs/Web/HTML/Element/link#href)-Attribut.
- Den Ressourcentyp im [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut.

Ein Beispiel könnte so aussehen (siehe unser [JS und CSS Beispielcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/js-and-css), und [auch live](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)):

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

Hier laden wir unsere CSS- und JavaScript-Dateien vor, damit sie verfügbar sind, sobald sie später für das Rendering der Seite benötigt werden. Dieses Beispiel ist trivial, da der Browser wahrscheinlich die `<link rel="stylesheet">`- und `<script>`-Elemente im gleichen HTML-Abschnitt wie die Preloads entdeckt, aber die Vorteile können viel klarer gesehen werden, wenn die Ressourcen später entdeckt werden und größer sind. Zum Beispiel:

- Ressourcen, die von innerhalb von CSS referenziert werden, wie Schriften oder Bilder.
- Ressourcen, die von JavaScript angefordert werden können, wie importierte Skripte.

`preload` bietet auch andere Vorteile. Wenn `as` verwendet wird, um den Typ des vorzuladenden Inhalts anzugeben, ermöglicht dies dem Browser:

- Im Cache für zukünftige Anfragen zu speichern und die Ressource bei Bedarf wiederzuverwenden.
- Die richtige [Content Security Policy](/de/docs/Web/HTTP/CSP) auf die Ressource anzuwenden.
- Die richtigen {{HTTPHeader("Accept")}}-Anfrage-Header dafür zu setzen.

### Welche Arten von Inhalten können vorgeladen werden?

Viele Inhaltstypen können vorgeladen werden. Die möglichen Werte für das `as`-Attribut sind:

- `fetch`: Ressource, die durch eine Fetch- oder XHR-Anfrage abgerufen wird, wie ein ArrayBuffer, WebAssembly-Binärdatei oder JSON-Datei.
- `font`: Schriftdatei.
- `image`: Bilddatei.
- `script`: JavaScript-Datei.
- `style`: CSS-Stylesheet.
- `track`: WebVTT-Datei.

> **Hinweis:** `font` und `fetch` Preloading erfordert, dass das `crossorigin`-Attribut gesetzt wird; siehe [CORS-fähige Abrufe](#cors-fähige_abrufe) unten.

> [!NOTE]
> Weitere Details zu diesen Werten und den Web-Features, die sie erwarten, finden Sie in der HTML-Dokumentationsspezifikation — siehe [Linktyp "preload"](https://html.spec.whatwg.org/#match-preload-type). Beachten Sie ebenfalls, dass die vollständige Liste der Werte, die das `as`-Attribut annehmen kann, durch die Fetch-Spezifikation bestimmt wird — siehe [Anfrageziele](https://fetch.spec.whatwg.org/#concept-request-destination).

## Einbeziehen eines MIME-Typs

`<link>`-Elemente können ein [`type`](/de/docs/Web/HTML/Element/link#type)-Attribut akzeptieren, das den MIME-Typ der Ressource enthält, auf die das Element verweist. Dies ist besonders nützlich beim Vorladen von Ressourcen — der Browser verwendet den `type`-Attributwert, um herauszufinden, ob er diese Ressource unterstützt, und lädt sie nur herunter, wenn dies der Fall ist, ansonsten ignoriert er sie.

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

Der Code im obigen Beispiel führt dazu, dass das `image/avif`-Bild nur in unterstützenden Browsern vorgeladen wird — und für Benutzer, die `image/avif`-Unterstützung in ihren Browsern haben, führt es dazu, dass tatsächlich das `image/avif`-Bild verwendet wird (da es das erste spezifizierte {{htmlelement("source")}} ist). Dadurch wird der Bilddownload hoffentlich für Benutzer, die `image/avif`-Unterstützung in ihren Browsern haben, kleiner.

Beachten Sie, dass für Benutzer, deren Browser sowohl `image/avif`- als auch `image/webp`-Unterstützung haben, wenn in diesem Code ein `<link rel="preload" href="flower.webp" as="image" type="image/webp">`-Element ebenfalls angegeben wäre, dann würden sowohl die `image/avif`- als auch die `image/webp`-Bilder vorgeladen — obwohl nur eines von ihnen tatsächlich verwendet würde.

Daher wird das Spezifizieren des Preloadings für mehrere Typen der gleichen Ressource nicht empfohlen. Stattdessen ist es am besten, nur für den Typ das Preloading zu spezifizieren, den die Mehrheit Ihrer Benutzer wahrscheinlich tatsächlich verwenden wird. Deshalb wird im obigen Beispielcode nicht das Preloading für das `image/webp`-Bild angegeben.

Jedoch verhindert der Mangel an Vorladen nicht, dass das `image/webp`-Bild tatsächlich von denen verwendet wird, die es benötigen: für Benutzer, deren Browser `image/avif`-Unterstützung nicht haben, aber `image/webp`-Unterstützung haben, führt der Code im obigen Beispiel trotzdem dazu, dass das `image/webp`-Bild verwendet wird — jedoch ohne es auch unnötigerweise für die Mehrheit der anderen Benutzer vorzuschieben.

## CORS-fähige Abrufe

Beim Vorladen von Ressourcen, die mit aktiviertem [CORS](/de/docs/Web/HTTP/CORS) abgerufen werden (z.B. [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [Schriftarten](/de/docs/Web/CSS/@font-face)), muss darauf geachtet werden, das [`crossorigin`](/de/docs/Web/HTML/Element/link#crossorigin)-Attribut auf Ihrem [`<link>`](/de/docs/Web/HTML/Element/link) Element zu setzen. Das Attribut muss so gesetzt werden, dass es mit dem CORS- und Anmeldemodus der Ressource übereinstimmt, auch wenn der Abruf nicht cross-origin ist.

Wie oben erwähnt, ist ein interessanter Fall, auf den dies zutrifft, Schriftdateien. Aus verschiedenen Gründen müssen diese im anonymen CORS-Modus abgerufen werden (siehe [Schriftanforderungsanforderungen](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

Lassen Sie uns diesen Fall als Beispiel verwenden. Sie können den vollständigen [Beispiel-Code auf GitHub](https://github.com/mdn/html-examples/tree/main/link-rel-preload/fonts) ([sehen Sie es auch live](https://mdn.github.io/html-examples/link-rel-preload/fonts/)) sehen:

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

Wir bieten nicht nur MIME-Typ-Hinweise in den `type`-Attributen an, sondern auch das `crossorigin`-Attribut, um sicherzustellen, dass der Preload-CORS-Modus mit der eigentlichen Schriftressourcenanfrage übereinstimmt.

## Einbeziehen von Medien

Ein schönes Feature der `<link>`-Elemente ist ihre Fähigkeit, [`media`](/de/docs/Web/HTML/Element/link#media)-Attribute zu akzeptieren. Diese können [Medientypen](/de/docs/Web/CSS/@media#media_types) oder vollständige [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) akzeptieren, die es Ihnen ermöglichen, responsives Vorladen zu verwenden!

Sehen wir uns ein Beispiel an (siehe auf GitHub — [Quellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/media), [Live-Beispiel](https://mdn.github.io/html-examples/link-rel-preload/media/)):

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

Wir fügen `media`-Attribute zu unseren `<link>`-Elementen hinzu, sodass ein schmales Bild vorgeladen wird, wenn der Benutzer eine schmale Ansicht hat, und ein breiteres Bild geladen wird, wenn er eine breite Ansicht hat. Wir verwenden [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) / [`MediaQueryList`](/de/docs/Web/API/MediaQueryList), um dies zu tun (siehe [Testen von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) für mehr).

Dies macht es viel wahrscheinlicher, dass die Schrift für das Seitenrendering verfügbar ist, was das FOUT (Flash of Unstyled Text) reduziert.

Dies muss sich nicht auf Bilder oder sogar Dateien desselben Typs beschränken — denken Sie groß! Sie könnten vielleicht ein vereinfachtes SVG-Diagramm vorladen und anzeigen, wenn der Benutzer einen schmalen Bildschirm hat, bei dem die Bandbreite und CPU möglicherweise begrenzt ist, oder ein komplexes JavaScript-Modul vorladen und dann verwenden, um ein interaktives 3D-Modell zu rendern, wenn die Ressourcen des Benutzers reichlicher vorhanden sind.

## Skripting und Preloads

> [!NOTE]
> Verwenden Sie [`<link rel="modulepreload">`](/de/docs/Web/HTML/Attributes/rel/modulepreload), wenn Sie mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) arbeiten.

Ein weiterer Vorteil dieser Preloads ist, dass Sie sie mit Skripten ausführen können.
Zum Beispiel erstellen wir hier eine Instanz von [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) und fügen sie dann dem DOM hinzu:

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

Dies bedeutet, dass der Browser die `myscript.js`-Datei vorladen wird, sie jedoch noch nicht tatsächlich verwendet. Um sie zu verwenden, könnten Sie dies tun:

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

Dies ist nützlich, wenn Sie ein Skript vorladen, aber die Ausführung erst dann verzögern möchten, wenn Sie es genau benötigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading) für einen Vergleich von `<link rel="preload">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) von Yoav Weiss
