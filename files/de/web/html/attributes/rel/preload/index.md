---
title: rel=preload
slug: Web/HTML/Attributes/rel/preload
l10n:
  sourceCommit: aee2bd82de11cb7331134e48e8bd548bbedafcc5
---

{{HTMLSidebar}}

Der `preload`-Wert des `{{htmlelement("link")}}`-Elements im [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attribut erlaubt es Ihnen, Abrufanforderungen im HTML-`{{htmlelement("head")}}` zu deklarieren und dabei Ressourcen anzugeben, die Ihre Seite sehr bald benötigen wird und die Sie frühzeitig im Seitenlebenszyklus laden möchten, bevor die Haupt-Render-Maschine der Browser einsetzt. Dies stellt sicher, dass sie früher verfügbar sind und mit geringerer Wahrscheinlichkeit das Rendern der Seite blockieren, was die Leistung verbessert. Obwohl der Name den Begriff _load_ enthält, lädt und führt er das Skript nicht aus, sondern plant lediglich, es mit höherer Priorität herunterzuladen und im Cache zu speichern.

## Die Grundlagen

Am häufigsten verwenden Sie `<link>`, um eine CSS-Datei zu laden, um Ihre Seite zu gestalten:

```html
<link rel="stylesheet" href="styles/main.css" />
```

Hier allerdings verwenden wir einen `rel`-Wert von `preload`, der `<link>` in einen Vorlader für eine beliebige Ressource verwandelt, die wir möchten. Sie müssen ebenfalls angeben:

- Den Pfad zur Ressource im [`href`](/de/docs/Web/HTML/Element/link#href)-Attribut.
- Den Typ der Ressource im [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut.

Ein einfaches Beispiel könnte so aussehen (siehe unser [JS und CSS Beispielquellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/js-and-css), und [auch live](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)):

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

Hier laden wir unsere CSS- und JavaScript-Dateien vor, damit sie verfügbar sind, sobald sie später für das Rendern der Seite benötigt werden. Dieses Beispiel ist trivial, da der Browser wahrscheinlich die `<link rel="stylesheet">` und `<script>`-Elemente im selben HTML-Block wie die Preloads entdeckt, aber die Vorteile können viel deutlicher sehen, je später die Ressourcen entdeckt werden und je größer sie sind. Zum Beispiel:

- Ressourcen, die innerhalb von CSS angesprochen werden, wie Schriften oder Bilder.
- Ressourcen, die von JavaScript angefordert werden können, wie importierte Skripte.

`preload` hat auch andere Vorteile. Durch die Angabe von `as`, um den Typ des Inhalts anzugeben, der vorgeladen werden soll, kann der Browser:

- Die Ressource im Cache für zukünftige Anforderungen speichern und bei Bedarf wiederverwenden.
- Die korrekte [Content Security Policy](/de/docs/Web/HTTP/CSP) auf die Ressource anwenden.
- Die richtigen {{HTTPHeader("Accept")}}-Anforderungsheader dafür setzten.

### Welche Arten von Inhalten können vorgeladen werden?

Viele Inhaltstypen können vorgeladen werden. Mögliche `as`-Attributwerte sind:

- `fetch`: Ressource, die von einem Fetch- oder XHR-Request abgerufen wird, wie ein ArrayBuffer, WebAssembly-Binärformat oder eine JSON-Datei.
- `font`: Schriftdatei.
- `image`: Bilddatei.
- `script`: JavaScript-Datei.
- `style`: CSS-Stylesheet.
- `track`: WebVTT-Datei.

> **Hinweis:** `font` und `fetch` Preloading erfordert das Setzen des `crossorigin`-Attributs; siehe [CORS-fähige Abfragen](#cors-fähige_abfragen) unten.

> [!NOTE]
> Es gibt mehr Details zu diesen Werten und den Web-Features, die sie erwarten, im HTML-Spezifikation — siehe [Link-Typ "preload"](https://html.spec.whatwg.org/#match-preload-type). Beachten Sie auch, dass die vollständige Liste der Werte, die das `as`-Attribut annehmen kann, von der Fetch-Spezifikation geregelt wird — siehe [Anfrageziele](https://fetch.spec.whatwg.org/#concept-request-destination).

## Einschließen eines MIME-Typs

`<link>`-Elemente können ein [`type`](/de/docs/Web/HTML/Element/link#type)-Attribut akzeptieren, das den MIME-Typ der Ressource enthält, auf die das Element verweist. Dies ist besonders nützlich beim Vorladen von Ressourcen — der Browser wird den `type`-Attributwert verwenden, um herauszufinden, ob er diese Ressource unterstützt, und wird sie nur herunterladen, wenn dies der Fall ist, andernfalls ignoriert er sie.

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

Der Code im obigen Beispiel bewirkt, dass das `image/avif`-Bild nur in unterstützenden Browsern vorgeladen wird — und für Benutzer, die `image/avif`-Unterstützung in ihren Browsern haben, bewirkt er, dass das `image/avif`-Bild tatsächlich verwendet wird (da es zuerst im `{{htmlelement("source")}}`-Tag angegeben ist). Das macht den Bilddownload hoffentlich kleiner für Benutzer, die `image/avif`-Unterstützung haben.

Beachten Sie, dass für Benutzer, deren Browser sowohl `image/avif`- als auch `image/webp`-Unterstützung haben, wenn in diesem Code auch ein `<link rel="preload" href="flower.webp" as="image" type="image/webp">`-Element angegeben wäre, dann _beide_ Bilder `image/avif` und `image/webp` vorgeladen würden — auch wenn nur eines tatsächlich verwendet würde.

Daher wird das Vorladen mehrerer Typen derselben Ressource nicht empfohlen. Stattdessen ist es am besten, das Vorladen nur für den Typ zu spezifizieren, den die Mehrheit Ihrer Benutzer tatsächlich nutzen wird. Deshalb wird im obigen Beispiel das Vorladen für das `image/webp`-Bild nicht spezifiziert.

Das Fehlen des Vorladens verhindert jedoch nicht, dass das `image/webp`-Bild von denjenigen verwendet wird, die es benötigen: für Benutzer, deren Browser keine `image/avif`-Unterstützung, aber `image/webp`-Unterstützung haben, sorgt der Code im obigen Beispiel immer noch dafür, dass das `image/webp`-Bild verwendet wird — aber es geschieht, ohne es auch unnötig für die Mehrheit anderer Benutzer vorzula den.

## CORS-fähige Abfragen

Beim Vorladen von Ressourcen, die mit aktiviertem [CORS](/de/docs/Web/HTTP/CORS) abgerufen werden (z. B. [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [Schriften](/de/docs/Web/CSS/@font-face)), muss darauf geachtet werden, dass das [`crossorigin`](/de/docs/Web/HTML/Element/link#crossorigin)-Attribut auf Ihrem `<link>`-Element gesetzt ist. Das Attribut muss so gesetzt werden, dass es dem CORS- und Anmeldemodus der Ressource entspricht, auch wenn die Abrufoperation nicht von unterschiedlichen Ursprünge kommt.

Wie oben erwähnt, ist ein interessanter Fall, in dem dies zutrifft, Schriftdateien. Aus verschiedenen Gründen müssen diese im anonymen CORS-Modus abgerufen werden (siehe [Font-Abforderungserfordernisse](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

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

Nicht nur geben wir MIME-Typ-Hinweise in den `type`-Attributen an, sondern wir stellen auch das `crossorigin`-Attribut bereit, um sicherzustellen, dass der CORS-Modus des Preloads mit der endgültigen Schriftressourcenanforderung übereinstimmt.

## Einschließen von Medien

Ein schönes Merkmal von `<link>`-Elementen ist ihre Fähigkeit, [`media`](/de/docs/Web/HTML/Element/link#media)-Attribute zu akzeptieren. Diese können [Medientypen](/de/docs/Web/CSS/@media#media_types) oder ausgefeilte [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) annehmen und ermöglichen Ihnen ein responsives Vorladen!

Schauen wir uns ein Beispiel an (sehen Sie es auf GitHub — [Quellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/media), [Live-Beispiel](https://mdn.github.io/html-examples/link-rel-preload/media/)):

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

Wir fügen `media`-Attribute zu unseren `<link>`-Elementen hinzu, so dass ein schmales Bild vorgeladen wird, wenn der Benutzer ein schmales Viewport hat, und ein breiteres Bild geladen wird, wenn er ein weites Viewport hat. Wir verwenden [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) / [`MediaQueryList`](/de/docs/Web/API/MediaQueryList), um dies zu tun (siehe [Überprüfen von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) für mehr).

Dies erhöht die Wahrscheinlichkeit, dass die Schrift für das Seitenrendering verfügbar ist, und reduziert FOUT (Flash of Unstyled Text).

Dies muss sich nicht auf Bilder oder sogar Dateien desselben Typs beschränken — denken Sie groß! Sie könnten vielleicht eine einfache SVG-Diagramm vorladen und anzeigen, wenn der Benutzer auf einem schmalen Bildschirm ist, wo Bandbreite und CPU möglicherweise begrenzter sind, oder ein komplexes JavaScript-Stück vorladen und dann verwenden, um ein interaktives 3D-Modell zu rendern, wenn die Ressourcen des Benutzers reichlich sind.

## Scripting und Preloads

> [!NOTE]
> Verwenden Sie [`<link rel="modulepreload">`](/de/docs/Web/HTML/Attributes/rel/modulepreload) stattdessen, wenn Sie mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) arbeiten.

Eine weitere schöne Sache bei diesen Preloads ist, dass Sie sie mit einem Skript ausführen können.
Beispielsweise erstellen wir hier eine Instanz von [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) und fügen sie dann dem DOM hinzu:

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

Das bedeutet, dass der Browser die Datei `myscript.js` vorlädt, aber noch nicht tatsächlich verwendet. Um sie zu verwenden, könnten Sie dies tun:

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

Dies ist nützlich, wenn Sie ein Skript vorladen möchten, die Ausführung aber genau zu dem Zeitpunkt verschieben möchten, an dem Sie es benötigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading) für einen Vergleich von `<link rel="preload">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) von Yoav Weiss
