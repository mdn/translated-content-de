---
title: rel=preload
slug: Web/HTML/Reference/Attributes/rel/preload
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Der `preload`-Wert des [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attributs des {{htmlelement("link")}}-Elements ermöglicht es Ihnen, Abrufanforderungen im HTML-{{htmlelement("head")}} zu deklarieren. Damit können Sie Ressourcen spezifizieren, die Ihre Seite sehr bald benötigt und die Sie frühzeitig im Seitenlebenszyklus laden möchten, bevor die Haupt-Rendering-Maschine des Browsers einsetzt. Dies stellt sicher, dass sie früher verfügbar sind und weniger wahrscheinlich das Rendern der Seite blockieren, was die Leistung verbessert. Obwohl der Name den Begriff _load_ enthält, wird das Skript nicht geladen und ausgeführt; es wird nur zum Herunterladen und Zwischenspeichern mit höherer Priorität vorgemerkt.

## Die Grundlagen

Am häufigsten verwenden Sie `<link>`, um eine CSS-Datei zu laden, um Ihre Seite zu gestalten:

```html
<link rel="stylesheet" href="styles/main.css" />
```

Hier hingegen verwenden wir einen `rel`-Wert von `preload`, was `<link>` in einen Vorlader für jede gewünschte Ressource verwandelt. Sie müssen auch angeben:

- Den Pfad zur Ressource im [`href`](/de/docs/Web/HTML/Reference/Elements/link#href)-Attribut.
- Den Typ der Ressource im [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut.

Ein Beispiel könnte so aussehen (sehen Sie in unserem [JS- und CSS-Beispielquellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/js-and-css) und [auch live](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)):

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

Hier laden wir unsere CSS- und JavaScript-Dateien im Voraus, sodass sie verfügbar sind, sobald sie später für das Rendering der Seite benötigt werden. Dieses Beispiel ist trivial, da der Browser die `<link rel="stylesheet">`- und `<script>`-Elemente wahrscheinlich im selben Abschnitt des HTMLs wie die Vorladungen entdeckt. Die Vorteile werden jedoch viel deutlicher, je später die Ressourcen entdeckt werden und je größer sie sind. Zum Beispiel:

- Ressourcen, die von innerhalb von CSS referenziert werden, wie Schriftarten oder Bilder.
- Ressourcen, die durch JavaScript angefordert werden können, wie importierte Skripte.

`preload` hat auch andere Vorteile. Die Verwendung von `as`, um den Typ des vorzuladenden Inhalts zu spezifizieren, ermöglicht es dem Browser:

- Ressourcen im Cache für zukünftige Anforderungen zu speichern und bei Bedarf wiederzuverwenden.
- Die richtige [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) auf die Ressource anzuwenden.
- Die korrekten {{HTTPHeader("Accept")}}-Request-Header dafür zu setzen.

### Welche Arten von Inhalten können vorgeladen werden?

Viele Inhaltsarten können vorgeladen werden. Die möglichen `as`-Attributwerte sind:

- `fetch`: Ressource, die mit einer Fetch- oder XHR-Anforderung abgerufen wird, z.B. ein ArrayBuffer, WebAssembly-Binärdatei oder JSON-Datei.
- `font`: Schriftartdatei.
- `image`: Bilddatei.
- `script`: JavaScript-Datei.
- `style`: CSS-Stylesheet.
- `track`: WebVTT-Datei.

> [!NOTE]
> `font` und `fetch` Vorladungen erfordern, dass das `crossorigin`-Attribut gesetzt wird. Siehe [CORS-aktivierte Abrufe](#cors-aktivierte_abrufe) unten.

> [!NOTE]
> Es gibt detailliertere Informationen über diese Werte und die webbasierten Features, von denen sie erwartet werden, dass sie sie konsumieren, in der HTML-Spezifikation — siehe [Link-Typ "preload"](https://html.spec.whatwg.org/#match-preload-type). Beachten Sie auch, dass die vollständige Liste der Werte, die das `as`-Attribut annehmen kann, von der Fetch-Spezifikation geregelt wird — siehe [Anfrageziele](https://fetch.spec.whatwg.org/#concept-request-destination).

## Einbindung eines MIME-Typs

`<link>`-Elemente können ein [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribut akzeptieren, das den MIME-Typ der Ressource enthält, auf die das Element verweist. Dies ist besonders nützlich, wenn Ressourcen vorgeladen werden — der Browser verwendet den Wert des `type`-Attributs, um herauszufinden, ob er diese Ressource unterstützt, und lädt sie nur herunter, wenn dies der Fall ist, und ignoriert sie, wenn nicht.

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

Der Code im obigen Beispiel bewirkt, dass das `image/avif`-Bild nur in unterstützenden Browsern vorgeladen wird — und für Benutzer, die `image/avif`-Unterstützung in ihren Browsern haben, bewirkt, dass das `image/avif`-Bild tatsächlich verwendet wird (da es als erstes {{htmlelement("source")}} angegeben ist). Das macht den Bild-Download hoffentlich kleiner für Benutzer, die `image/avif`-Unterstützung in ihren Browsern haben.

Beachten Sie, dass für Benutzer, deren Browser sowohl `image/avif`- als auch `image/webp`-Unterstützung haben, wenn in diesem Code ein `<link rel="preload" href="flower.webp" as="image" type="image/webp">`-Element ebenfalls angegeben wäre, _beide_ `image/avif`- und `image/webp`-Bilder vorgeladen würden — obwohl nur eines davon tatsächlich verwendet würde.

Daher wird davon abgeraten, das Vorladen für mehrere Typen derselben Ressource zu spezifizieren. Stattdessen ist es am besten, das Vorladen nur für den Typ zu spezifizieren, den die Mehrheit Ihrer Benutzer wahrscheinlich tatsächlich verwenden wird. Aus diesem Grund spezifiziert der Code im obenstehenden Beispiel kein Vorladen für das `image/webp`-Bild.

Das Fehlen des Vorladens verhindert jedoch nicht, dass das `image/webp`-Bild tatsächlich von denjenigen verwendet wird, die es benötigen: Für Benutzer, deren Browser keine `image/avif`-Unterstützung haben, aber `image/webp`-Unterstützung, bewirkt der Code im obigen Beispiel dennoch, dass das `image/webp`-Bild verwendet wird — jedoch ohne es auch unnötigerweise für die Mehrheit der anderen Benutzer vorzulesen.

## CORS-aktivierte Abrufe

Beim Vorladen von Ressourcen, die mit [CORS](/de/docs/Web/HTTP/Guides/CORS) aktiviert abgerufen werden (z. B. [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [Schriftarten](/de/docs/Web/CSS/Reference/At-rules/@font-face)), müssen Sie das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/link#crossorigin)-Attribut auf Ihrem [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element setzen. Das Attribut muss so gesetzt werden, dass es dem CORS- und Anmeldemodus der Ressource entspricht, selbst wenn der Abruf nicht über die Ursprungsgrenze hinweg erfolgt.

Wie oben erwähnt, ist eine interessante Situation, auf die dies zutrifft, Schriftartdateien. Aus verschiedenen Gründen müssen diese mit CORS im anonymen Modus abgerufen werden (siehe [Anforderungen an das Schriftabrufen](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

Lassen Sie uns diesen Fall als Beispiel verwenden. Sie können den vollständigen [Beispielquellcode auf GitHub](https://github.com/mdn/html-examples/tree/main/link-rel-preload/fonts) sehen ([auch live ansehen](https://mdn.github.io/html-examples/link-rel-preload/fonts/)):

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

Wir geben nicht nur MIME-Typ-Hinweise in den `type`-Attributen an, sondern auch das `crossorigin`-Attribut, um sicherzustellen, dass der CORS-Modus des Vorladens mit der letztlichen Schriftressourcennachfrage übereinstimmt.

## Integration von Medien

Ein schönes Merkmal von `<link>`-Elementen ist ihre Fähigkeit, [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attribute zu akzeptieren. Diese können [Medientypen](/de/docs/Web/CSS/Reference/At-rules/@media#media_types) oder vollständige [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) akzeptieren, sodass Sie reaktionsfähiges Vorladen durchführen können!

Sehen wir uns ein Beispiel an (sehen Sie es auf GitHub — [Quellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/media), [live Beispiel](https://mdn.github.io/html-examples/link-rel-preload/media/)):

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

Wir fügen `media`-Attribute zu unseren `<link>`-Elementen hinzu, sodass ein schmales Bild vorgeladen wird, wenn der Benutzer ein schmales Viewport hat, und ein breiteres Bild geladen wird, wenn er ein breites Viewport hat. Wir verwenden [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) / [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) dafür (siehe [Testing media queries](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) für mehr).

Diese Technik gilt auch für andere Ressourcentypen. Zum Beispiel macht das Vorladen bei Schriftarten es wahrscheinlicher, dass die Schriftart zur Renderzeit verfügbar ist, wodurch die Chance eines unerwarteten Textflusses (FOUT) reduziert wird.

Dies muss sich jedoch nicht auf Bilder oder sogar Dateien desselben Typs beschränken — denken Sie groß! Vielleicht könnten Sie ein vereinfachtes SVG-Diagramm vorladen und anzeigen, wenn der Benutzer sich auf einem schmalen Bildschirm befindet, wo Bandbreite und CPU potenziell begrenzter sind, oder ein komplexes Stück JavaScript vorladen und es verwenden, um ein interaktives 3D-Modell zu rendern, wenn die Ressourcen des Benutzers reichlicher sind.

## Skripting und Vorladungen

> [!NOTE]
> Verwenden Sie [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) statt dessen, wenn Sie mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) arbeiten.

Ein weiterer Vorteil dieser Vorladungen ist, dass Sie sie mit Skript ausführen können. Zum Beispiel erstellen wir hier eine [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Instanz und fügen sie dann dem DOM hinzu:

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

Dies ist nützlich, wenn Sie ein Skript vorladen möchten, die Ausführung jedoch aufschieben, bis Sie es genau benötigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculative loading](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="preload">` und anderen ähnlichen Leistungsverbesserungsmerkmalen.
- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) von Yoav Weiss
