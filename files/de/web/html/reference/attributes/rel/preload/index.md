---
title: rel=preload
slug: Web/HTML/Reference/Attributes/rel/preload
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{HTMLSidebar}}

Der `preload`-Wert des `rel`-Attributs des {{htmlelement("link")}}-Elements ermöglicht es, Abrufanforderungen im HTML-{{htmlelement("head")}} zu deklarieren, Ressourcen anzugeben, die Ihre Seite sehr bald benötigt und deren Laden Sie frühzeitig im Seitenlebenszyklus starten möchten, bevor der Haupt-Rendering-Mechanismus der Browser einsetzt. Dies stellt sicher, dass sie früher verfügbar sind und weniger wahrscheinlich das Rendern der Seite blockieren, wodurch die Leistung verbessert wird. Auch wenn der Name den Begriff _load_ enthält, wird das Skript nicht geladen und ausgeführt, sondern nur zum Herunterladen und Zwischenspeichern mit höherer Priorität geplant.

## Die Grundlagen

Am häufigsten verwenden Sie `<link>`, um eine CSS-Datei zu laden, um Ihre Seite zu gestalten:

```html
<link rel="stylesheet" href="styles/main.css" />
```

Hier werden wir jedoch einen `rel`-Wert von `preload` verwenden, der `<link>` in einen Vorlader für jede gewünschte Ressource verwandelt. Sie müssen auch Folgendes angeben:

- Den Pfad zur Ressource im [`href`](/de/docs/Web/HTML/Reference/Elements/link#href)-Attribut.
- Den Ressourcentyp im [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut.

Ein Beispiel könnte wie folgt aussehen (siehe unser [JS und CSS Beispiel](https://github.com/mdn/html-examples/tree/main/link-rel-preload/js-and-css), und [auch live](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)):

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

Hier laden wir unsere CSS- und JavaScript-Dateien vor, damit sie verfügbar sind, sobald sie später für das Seitenrendering benötigt werden. Dieses Beispiel ist trivial, da der Browser die `<link rel="stylesheet">`- und `<script>`-Elemente wahrscheinlich im gleichen HTML-Chunk wie die Preloads entdeckt, aber der Nutzen wird viel deutlicher, je später Ressourcen entdeckt werden und je größer sie sind. Ein Beispiel:

- Ressourcen, auf die von innerhalb von CSS verwiesen wird, wie Schriftarten oder Bilder.
- Ressourcen, die von JavaScript angefordert werden können, wie importierte Skripte.

`preload` hat auch andere Vorteile. Die Verwendung von `as` zur Angabe der Art des vorzuladenden Inhalts ermöglicht es dem Browser:

- Im Cache für zukünftige Anfragen zu speichern und die Ressource bei Bedarf wiederzuverwenden.
- Die korrekte [Inhalts-Sicherheitsrichtlinie](/de/docs/Web/HTTP/Guides/CSP) auf die Ressource anzuwenden.
- Die korrekten {{HTTPHeader("Accept")}}-Request-Header dafür festzulegen.

### Welche Arten von Inhalten können vorgeladen werden?

Viele Inhaltstypen können vorgeladen werden. Die möglichen `as`-Attributwerte sind:

- `fetch`: Ressource, die von einer Fetch- oder XHR-Anforderung aufgerufen wird, z.B. ein ArrayBuffer, eine WebAssembly-Binärdatei oder eine JSON-Datei.
- `font`: Schriftartdatei.
- `image`: Bilddatei.
- `script`: JavaScript-Datei.
- `style`: CSS-Stylesheet.
- `track`: WebVTT-Datei.

> [!NOTE]
> Das Vorladen von `font` und `fetch` erfordert das Setzen des `crossorigin`-Attributs; siehe [CORS-fähige Abrufe](#cors-fähige_abrufe) unten.

> [!NOTE]
> Weitere Details zu diesen Werten und den Web-Merkmalen, von denen sie konsumiert werden sollen, finden Sie in der HTML-Spezifikation — siehe [Linktyp "preload"](https://html.spec.whatwg.org/#match-preload-type). Beachten Sie auch, dass die vollständige Liste der Werte, die das `as`-Attribut annehmen kann, durch die Fetch-Spezifikation geregelt wird — siehe [Anforderungsziele](https://fetch.spec.whatwg.org/#concept-request-destination).

## Ein MIME-Typ einbeziehen

`<link>`-Elemente können ein [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribut akzeptieren, das den MIME-Typ der Ressource enthält, auf die das Element verweist. Dies ist besonders nützlich beim Vorladen von Ressourcen — der Browser verwendet den `type`-Attributwert, um herauszufinden, ob er diese Ressource unterstützt, und lädt sie nur herunter, wenn dies der Fall ist, andernfalls ignoriert er sie.

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

Der Code im obigen Beispiel bewirkt, dass das `image/avif`-Bild nur in unterstützenden Browsern vorgeladen wird — und für Benutzer, die `image/avif`-Unterstützung in ihren Browsern haben, wird das `image/avif`-Bild tatsächlich verwendet (da es die erste angegebene {{htmlelement("source")}} ist). Das sollte den Bilddownload hoffentlich kleiner für Benutzer machen, die `image/avif`-Unterstützung in ihren Browsern haben.

Beachten Sie, dass für Benutzer, deren Browser sowohl `image/avif` als auch `image/webp` unterstützen, wenn in diesem Code zusätzlich ein `<link rel="preload" href="flower.webp" as="image" type="image/webp">`-Element angegeben wäre, dann _beide_ Bilder `image/avif` und `image/webp` vorgeladen würden — auch wenn nur eines von ihnen tatsächlich verwendet würde.

Daher wird davon abgeraten, das Vorladen für mehrere Typen derselben Ressource anzugeben. Stattdessen ist die beste Praxis, das Vorladen nur für den Typ anzugeben, den die Mehrheit Ihrer Benutzer wahrscheinlich tatsächlich verwenden wird. Deshalb gibt der Code im obigen Beispiel das Vorladen für das `image/webp`-Bild nicht an.

Das Fehlen des Vorladens verhindert jedoch nicht, dass das `image/webp`-Bild tatsächlich verwendet wird: Für Benutzer, deren Browser keine `image/avif`-Unterstützung haben, aber `image/webp`-Unterstützung bieten, bewirkt der Code im obigen Beispiel dennoch, dass das `image/webp`-Bild verwendet wird — jedoch ohne es auch unnötig für die Mehrheit anderer Benutzer vorzulaдen.

## CORS-fähige Abrufe

Beim Vorladen von Ressourcen, die mit [CORS](/de/docs/Web/HTTP/Guides/CORS) aktiviert abgerufen werden (z.B. [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [Schriftarten](/de/docs/Web/CSS/@font-face)), muss besonders darauf geachtet werden, das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/link#crossorigin)-Attribut an Ihrem [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element zu setzen. Das Attribut muss so gesetzt werden, dass es zum CORS- und Anmeldemodus der Ressource passt, auch wenn der Abruf nicht über mehrere Domains erfolgt.

Wie oben erwähnt, gilt dies in einem interessanten Fall für Schriftartdateien. Aus verschiedenen Gründen müssen diese im anonymen CORS-Modus abgerufen werden (siehe [Schriftabruf-Anforderungen](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

Lassen Sie uns diesen Fall als Beispiel verwenden. Sie können den vollständigen [Beispielquellcode auf GitHub](https://github.com/mdn/html-examples/tree/main/link-rel-preload/fonts) sehen ([auch live](https://mdn.github.io/html-examples/link-rel-preload/fonts/)):

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

Wir geben nicht nur MIME-Typ-Hinweise in den `type`-Attributen an, sondern stellen auch das `crossorigin`-Attribut bereit, um sicherzustellen, dass der CORS-Modus des Preloads mit der eventualen Anfrage der Schriftartressource übereinstimmt.

## Medien einbeziehen

Ein nettes Feature von `<link>`-Elementen ist ihre Fähigkeit, [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attribute zu akzeptieren. Diese können [Medientypen](/de/docs/Web/CSS/@media#media_types) oder vollständige [Mediaqueries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) akzeptieren, die Ihnen erlauben, responsives Vorladen durchzuführen!

Schauen wir uns ein Beispiel an (sehen Sie es auf GitHub — [Quellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/media), [Live-Beispiel](https://mdn.github.io/html-examples/link-rel-preload/media/)):

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

Wir fügen `media`-Attribute zu unseren `<link>`-Elementen hinzu, sodass ein schmales Bild vorgeladen wird, wenn der Benutzer ein schmales Anzeigefenster hat, und ein breiteres Bild geladen wird, wenn er ein breites Anzeigefenster hat. Wir verwenden [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) / [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) dafür (siehe [Testen von Mediaqueries](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) für mehr).

Das macht es viel wahrscheinlicher, dass die Schriftart für das Seitenrendering verfügbar ist und reduziert das FOUT (Flash of Unstyled Text).

Dies muss nicht auf Bilder oder sogar Dateien desselben Typs beschränkt sein — denken Sie groß! Sie könnten vielleicht ein vereinfachtes SVG-Diagramm vorladen und anzeigen, wenn der Benutzer auf einem schmalen Bildschirm ist, wo Bandbreite und CPU möglicherweise eingeschränkter sind, oder ein komplexes JavaScript-Fragment vorladen und dann verwenden, um ein interaktives 3D-Modell zu rendern, wenn die Ressourcen des Benutzers reichlich vorhanden sind.

## Skripting und Preloads

> [!NOTE]
> Verwenden Sie [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload), wenn Sie mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) arbeiten.

Eine weitere schöne Sache an diesen Preloads ist, dass Sie sie mit Skripten ausführen können.
Zum Beispiel erstellen wir hier eine [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Instanz und fügen sie dann dem DOM hinzu:

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

Das bedeutet, dass der Browser die `myscript.js`-Datei vorladen wird, sie aber noch nicht tatsächlich verwendet. Um sie zu verwenden, könnten Sie dies tun:

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

Dies ist nützlich, wenn Sie ein Skript vorladen möchten, aber die Ausführung verzögern, bis Sie es genau benötigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="preload">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) von Yoav Weiss
