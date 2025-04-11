---
title: rel=preload
slug: Web/HTML/Reference/Attributes/rel/preload
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Der `preload`-Wert des {{htmlelement("link")}}-Elements im [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut ermöglicht es Ihnen, Abrufanfragen im HTML-{{htmlelement("head")}} zu deklarieren. Damit können Sie Ressourcen angeben, die Ihre Seite sehr bald benötigt und die Sie früh im Seitenlebenszyklus laden möchten, noch bevor die Haupt-Rendering-Maschinen der Browser einsetzen. Das stellt sicher, dass sie früher verfügbar sind und die Seitendarstellung weniger wahrscheinlich blockieren, was die Leistung verbessert. Obwohl der Name den Begriff _load_ enthält, wird das Skript nicht geladen und ausgeführt, sondern nur der Download und das Caching mit höherer Priorität geplant.

## Die Grundlagen

Normalerweise verwenden Sie `<link>`, um eine CSS-Datei zu laden, um Ihre Seite zu gestalten:

```html
<link rel="stylesheet" href="styles/main.css" />
```

Hier jedoch verwenden wir einen `rel`-Wert von `preload`, wodurch `<link>` zu einem Preloader für jede Ressource wird, die wir möchten. Sie müssen auch Folgendes angeben:

- Den Pfad zur Ressource im [`href`](/de/docs/Web/HTML/Reference/Elements/link#href)-Attribut.
- Den Typ der Ressource im [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut.

Ein Beispiel könnte folgendermaßen aussehen (siehe unser [Beispielcode für JS und CSS](https://github.com/mdn/html-examples/tree/main/link-rel-preload/js-and-css), und [auch live](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)):

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

Hier laden wir unsere CSS- und JavaScript-Dateien vor, damit sie verfügbar sind, sobald sie für das Rendering der Seite benötigt werden. Dieses Beispiel ist trivial, da der Browser wahrscheinlich die `<link rel="stylesheet">`- und `<script>`-Elemente im gleichen HTML-Chunk wie die Preloads entdeckt, aber die Vorteile werden viel klarer, je später Ressourcen entdeckt und je größer sie sind. Zum Beispiel:

- Ressourcen, die aus CSS heraus aufgerufen werden, wie Schriften oder Bilder.
- Ressourcen, die von JavaScript angefordert werden können, wie importierte Skripte.

`preload` hat auch andere Vorteile. Mit `as` den Typ des zu ladenden Inhalts anzugeben ermöglicht dem Browser:

- Im Cache zu speichern für zukünftige Anforderungen, die Ressource bei Bedarf wiederzuverwenden.
- Die korrekte [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) auf die Ressource anzuwenden.
- Die korrekten {{HTTPHeader("Accept")}}-Request-Header dafür zu setzen.

### Welche Arten von Inhalten können vorgeladen werden?

Viele Arten von Inhalten können vorgeladen werden. Die möglichen Werte für das `as`-Attribut sind:

- `fetch`: Ressource, die durch eine Fetch- oder XHR-Anfrage abgerufen wird, wie ein ArrayBuffer, WebAssembly-Binärdatei oder eine JSON-Datei.
- `font`: Schriftdatei.
- `image`: Bilddatei.
- `script`: JavaScript-Datei.
- `style`: CSS-Stylesheet.
- `track`: WebVTT-Datei.

> **Note:** Das Vorladen von `font` und `fetch` erfordert, dass das `crossorigin`-Attribut gesetzt ist; siehe [CORS-aktivierte Abrufe](#cors-aktivierte_abrufe) unten.

> [!NOTE]
> Weitere Details zu diesen Werten und den Web-Features, für die sie gedacht sind, finden Sie in der HTML-Spezifikation — siehe [Linktyp "preload"](https://html.spec.whatwg.org/#match-preload-type). Beachten Sie auch, dass die vollständige Liste der Werte, die das `as`-Attribut annehmen kann, durch die Fetch-Spezifikation festgelegt ist — siehe [Request-Destinationen](https://fetch.spec.whatwg.org/#concept-request-destination).

## Einschließen eines MIME-Typs

`<link>`-Elemente können ein [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribut akzeptieren, das den MIME-Typ der Ressource enthält, auf die das Element verweist. Dies ist besonders nützlich beim Vorladen von Ressourcen — der Browser verwendet den Wert des `type`-Attributs, um festzustellen, ob er diese Ressource unterstützt, und lädt sie nur, wenn ja, andernfalls ignoriert er sie.

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

Der Code im obigen Beispiel bewirkt, dass das `image/avif`-Bild nur in unterstützenden Browsern vorgeladen wird — und bei Nutzern, deren Browser `image/avif` unterstützen, wird das `image/avif`-Bild tatsächlich verwendet (da es die erste angegebene {{htmlelement("source")}} ist). Das macht den Bilddownload hoffentlich kleiner für Nutzer, deren Browser `image/avif` unterstützen.

Beachten Sie, dass für Nutzer, deren Browser sowohl `image/avif` als auch `image/webp` unterstützen, wenn in diesem Code zusätzlich ein `<link rel="preload" href="flower.webp" as="image" type="image/webp">`-Element angegeben wäre, dann _beide_ Bilder, `image/avif` und `image/webp`, vorgeladen würden — obwohl nur eines davon tatsächlich verwendet wird.

Daher wird davon abgeraten, mehrfaches Vorladen für denselben Ressourcentyp zu spezifizieren. Stattdessen ist es am besten, das Vorladen nur für den Typ zu spezifizieren, den die Mehrheit Ihrer Nutzer tatsächlich verwenden wird. Daher gibt der Code im obigen Beispiel nicht an, das `image/webp`-Bild vorzuhalten.

Allerdings verhindert das Fehlen des Vorladens nicht, dass das `image/webp`-Bild von den Nutzern verwendet wird, die es benötigen: Für Nutzer, deren Browser keine `image/avif`-Unterstützung, aber `image/webp`-Unterstützung haben, sorgt der Code im obigen Beispiel dafür, dass das `image/webp`-Bild verwendet wird — aber ohne es auch für die Mehrheit der anderen Nutzer unnötig vorzuhalten.

## CORS-aktivierte Abrufe

Beim Vorladen von Ressourcen, die mit aktiviertem [CORS](/de/docs/Web/HTTP/Guides/CORS) abgerufen werden (z. B. [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [Schriften](/de/docs/Web/CSS/@font-face)), muss besonders darauf geachtet werden, das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/link#crossorigin)-Attribut am [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element festzulegen. Das Attribut muss so gesetzt werden, dass es dem CORS- und Anmeldedatenmodus der Ressource entspricht, auch wenn der Abruf nicht über Kreuz erfolgt.

Wie oben erwähnt, ist ein interessanter Fall, in dem das zutrifft, Schriftarten. Aus verschiedenen Gründen müssen diese im CORS-Anonymitätsmodus abgerufen werden (siehe [Anforderungen an Schriftabruf](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

Lassen Sie uns diesen Fall als Beispiel verwenden. Sie können den vollständigen [Beispielcode auf GitHub](https://github.com/mdn/html-examples/tree/main/link-rel-preload/fonts) ansehen ([siehe es auch live](https://mdn.github.io/html-examples/link-rel-preload/fonts/)):

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

Wir geben nicht nur die MIME-Typ-Hinweise in den `type`-Attributen an, sondern auch das `crossorigin`-Attribut, um sicherzustellen, dass der CORS-Modus des Preloads mit der endgültigen Anfrage nach der Schriftressource übereinstimmt.

## Einbinden von Medien

Ein schönes Merkmal von `<link>`-Elementen ist ihre Fähigkeit, [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attribute zu akzeptieren. Diese können [Medientypen](/de/docs/Web/CSS/@media#media_types) oder ausgeklügelte [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) akzeptieren und Ihnen ermöglichen, responsive Preloads durchzuführen!

Lassen Sie uns ein Beispiel betrachten (sehen Sie es auf GitHub — [Quellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/media), [Live-Beispiel](https://mdn.github.io/html-examples/link-rel-preload/media/)):

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

Wir fügen `media`-Attribute zu unseren `<link>`-Elementen hinzu, damit ein schmales Bild vorgeladen wird, wenn der Nutzer ein schmales Viewport hat, und ein breiteres Bild geladen wird, wenn er ein breites Viewport hat. Wir verwenden [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) / [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) dazu (siehe [Testen von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) für mehr Informationen).

Dies erhöht die Wahrscheinlichkeit, dass die Schriftart für das Seitenerendering verfügbar ist, und reduziert das FOUT (Flash of Unstyled Text).

Das muss sich nicht nur auf Bilder oder sogar Dateien desselben Typs beschränken — denken Sie groß! Sie könnten vielleicht eine vereinfachte SVG-Darstellung vorladen und anzeigen, wenn der Benutzer auf einem schmalen Bildschirm ist, wo Bandbreite und CPU möglicherweise begrenzt sind, oder ein komplexes JavaScript-Skript vorladen, um ein interaktives 3D-Modell darzustellen, wenn die Ressourcen des Benutzers umfangreicher sind.

## Skripting und Preloads

> [!NOTE]
> Verwenden Sie [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) stattdessen, wenn Sie mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) arbeiten.

Ein weiterer Vorteil dieser Preloads ist, dass Sie sie mit einem Skript ausführen können.
Zum Beispiel erstellen wir hier eine Instanz von [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) und fügen sie dann dem DOM hinzu:

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

Das bedeutet, dass der Browser die Datei `myscript.js` vorlädt, sie aber noch nicht verwendet. Um sie zu verwenden, könnten Sie Folgendes tun:

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

Dies ist nützlich, wenn Sie ein Skript vorladen, aber die Ausführung auf einen genaueren Zeitpunkt verschieben möchten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="preload">` und anderen ähnlichen Leistungsvorteilen.
- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) von Yoav Weiss
