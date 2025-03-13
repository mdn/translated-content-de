---
title: rel=preload
slug: Web/HTML/Attributes/rel/preload
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTMLSidebar}}

Der `preload` Wert des {{htmlelement("link")}}-Elements im [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attribut ermöglicht Ihnen, Fetch-Anfragen im `head`-Bereich des HTML-Dokuments zu deklarieren. Dabei geben Sie Ressourcen an, die Ihre Seite sehr bald benötigen wird und die Sie frühzeitig im Seiten-Lebenszyklus laden möchten, bevor die Haupt-Rendering-Mechanismen der Browser starten. Dadurch sind sie früher verfügbar und blockieren weniger wahrscheinlich das Rendering der Seite, wodurch die Leistung verbessert wird. Obwohl der Name den Begriff _Laden_ enthält, lädt es das Skript nicht und führt es nicht aus, sondern plant nur, es mit höherer Priorität herunterzuladen und im Cache zu speichern.

## Die Grundlagen

Normalerweise verwenden Sie `<link>`, um eine CSS-Datei zu laden, um Ihre Seite zu gestalten:

```html
<link rel="stylesheet" href="styles/main.css" />
```

Hier verwenden wir jedoch einen `rel`-Wert von `preload`, wodurch `<link>` in einen Preloader für jede beliebige Ressource verwandelt, die wir benötigen. Sie müssen auch folgendes angeben:

- Den Pfad zur Ressource im [`href`](/de/docs/Web/HTML/Element/link#href)-Attribut.
- Den Typ der Ressource im [`as`](/de/docs/Web/HTML/Element/link#as)-Attribut.

Ein Beispiel könnte so aussehen (siehe unser [JS und CSS Beispielquelle](https://github.com/mdn/html-examples/tree/main/link-rel-preload/js-and-css) und [auch live](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)):

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

Hier laden wir unsere CSS- und JavaScript-Dateien vor, damit sie verfügbar sind, sobald sie später für das Rendern der Seite benötigt werden. Dieses Beispiel ist trivial, da der Browser die `<link rel="stylesheet">` und `<script>`-Elemente wahrscheinlich im selben HTML-Block wie die Preloads entdeckt, aber die Vorteile zeigen sich viel deutlicher, wenn die Ressourcen später entdeckt werden und größer sind. Zum Beispiel:

- Ressourcen, die von innerhalb von CSS referenziert werden, wie Schriftarten oder Bilder.
- Ressourcen, die durch JavaScript angefordert werden können, wie importierte Skripte.

`preload` hat auch andere Vorteile. Die Verwendung von `as`, um den Typ des vorzuladenden Inhalts anzugeben, ermöglicht dem Browser:

- Speicherung im Cache für zukünftige Anfragen zur Wiederverwendung der Ressource bei Bedarf.
- Anwendung der korrekten [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) auf die Ressource.
- Setzen der korrekten {{HTTPHeader("Accept")}}-Request-Header dafür.

### Welche Arten von Inhalten können vorgeladen werden?

Viele Arten von Inhalten können vorgeladen werden. Die möglichen `as`-Attributwerte sind:

- `fetch`: Ressource, auf die durch eine Fetch- oder XHR-Anfrage zugegriffen wird, wie ein ArrayBuffer, WebAssembly-Binärdatei oder eine JSON-Datei.
- `font`: Schriftart-Datei.
- `image`: Bilddatei.
- `script`: JavaScript-Datei.
- `style`: CSS-Stylesheet.
- `track`: WebVTT-Datei.

> **Hinweis:** `font` und `fetch` Preloading erfordert, dass das `crossorigin`-Attribut gesetzt ist; siehe [CORS-fähige Fetches](#cors-fähige_fetches) unten.

> [!NOTE]
> Weitere Details zu diesen Werten und den Webfeatures, die konsumiert werden sollen, finden Sie in der HTML-Spezifikation — siehe [Link-Typ "preload"](https://html.spec.whatwg.org/#match-preload-type). Beachten Sie auch, dass die vollständige Liste der Werte, die das `as`-Attribut annehmen kann, durch die Fetch-Spezifikation bestimmt wird — siehe [Anfrageziele](https://fetch.spec.whatwg.org/#concept-request-destination).

## Einbeziehen eines MIME-Typs

`<link>`-Elemente können ein [`type`](/de/docs/Web/HTML/Element/link#type)-Attribut akzeptieren, das den MIME-Typ der Ressource enthält, auf die das Element verweist. Dies ist besonders nützlich beim Vorladen von Ressourcen — der Browser verwendet den `type`-Attributwert, um herauszufinden, ob er diese Ressource unterstützt, und wird sie nur herunterladen, wenn dies der Fall ist, andernfalls ignoriert er sie.

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

Der Code im obigen Beispiel führt dazu, dass das `image/avif`-Bild nur in unterstützenden Browsern vorgeladen wird — und für Benutzer, die `image/avif`-Unterstützung in ihren Browsern haben, wird das `image/avif`-Bild tatsächlich verwendet (da es als erste {{htmlelement("source")}}-Angabe spezifiziert ist). Das macht den Bilddownload hoffentlich kleiner für Benutzer, die `image/avif`-Unterstützung in ihren Browsern haben.

Beachten Sie, dass für Benutzer, deren Browser sowohl `image/avif` als auch `image/webp` unterstützen, wenn in diesem Code ein `<link rel="preload" href="flower.webp" as="image" type="image/webp">`-Element auch spezifiziert würde, dann _beide_ das `image/avif`- und das `image/webp`-Bilder vorgeladen würden — obwohl nur eines von ihnen tatsächlich verwendet würde.

Daher wird das Spezifizieren des Vorladens für mehrere Typen derselben Ressource nicht empfohlen. Stattdessen ist es am besten, das Vorladen nur für den Typ zu spezifizieren, den die Mehrheit Ihrer Benutzer wahrscheinlich tatsächlich verwenden wird. Deshalb spezifiziert der Code im obigen Beispiel kein Vorladen für das `image/webp`-Bild.

Das Fehlen des Vorladens verhindert jedoch nicht, dass das `image/webp`-Bild tatsächlich von denen verwendet wird, die es benötigen: Für Benutzer, deren Browser keine `image/avif`-Unterstützung, aber `image/webp`-Unterstützung haben, wird der Code im obigen Beispiel tatsächlich das `image/webp`-Bild verwenden — jedoch ohne es auch unnötigerweise für die Mehrheit der anderen Benutzer vorzuspielen.

## CORS-fähige Fetches

Beim Vorladen von Ressourcen, die mit aktivierter [CORS](/de/docs/Web/HTTP/Guides/CORS) abgerufen werden (z. B. [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [Schriftarten](/de/docs/Web/CSS/@font-face)), muss besonders darauf geachtet werden, das [`crossorigin`](/de/docs/Web/HTML/Element/link#crossorigin)-Attribut Ihres [`<link>`](/de/docs/Web/HTML/Element/link)-Elements korrekt einzustellen. Das Attribut muss so gesetzt sein, dass es mit dem CORS- und Anmeldemodus der Ressource übereinstimmt, selbst wenn der Fetch nicht Cross-Origin ist.

Wie oben erwähnt, ist ein interessanter Fall, in dem dies zutrifft, Schriftart-Dateien. Aus verschiedenen Gründen müssen diese im anonymen CORS-Modus abgerufen werden (siehe [Anforderungen für Schriftartenfetching](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

Lassen Sie uns diesen Fall als Beispiel verwenden. Sie können den vollständigen [Beispielquellcode auf GitHub](https://github.com/mdn/html-examples/tree/main/link-rel-preload/fonts) einsehen ([auch live](https://mdn.github.io/html-examples/link-rel-preload/fonts/)):

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

Wir geben nicht nur die MIME-Typ Hinweise in den `type`-Attributen an, sondern stellen auch das `crossorigin`-Attribut bereit, um sicherzustellen, dass der CORS-Modus des Preloads mit der endgültigen Schriftarten-Ressourcenanfrage übereinstimmt.

## Einbeziehen von Medien

Ein schönes Feature von `<link>`-Elementen ist die Fähigkeit, [`media`](/de/docs/Web/HTML/Element/link#media)-Attribute zu akzeptieren. Diese können [Medientypen](/de/docs/Web/CSS/@media#media_types) oder vollwertige [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) akzeptieren, sodass Sie responsives Vorladen durchführen können!

Schauen wir uns ein Beispiel an (sehen Sie es auf GitHub — [Quellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/media), [live Beispiel](https://mdn.github.io/html-examples/link-rel-preload/media/)):

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

Wir fügen `media`-Attribute zu unseren `<link>`-Elementen hinzu, damit ein schmales Bild vorgeladen wird, wenn der Benutzer ein schmales Viewport hat, und ein breiteres Bild geladen wird, wenn sie ein breites Viewport haben. Wir verwenden [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) / [`MediaQueryList`](/de/docs/Web/API/MediaQueryList), um dies zu tun (siehe [Testen von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) für mehr).

Das erhöht die Wahrscheinlichkeit, dass die Schriftart für das Seitenrendering verfügbar ist, und reduziert FOUT (flash of unstyled text).

Dies muss sich nicht auf Bilder oder sogar Dateien desselben Typs beschränken — denken Sie groß! Sie könnten vielleicht ein vereinfachtes SVG-Diagramm vorladen und anzeigen, wenn der Benutzer auf einem schmalen Bildschirm ist, wo Bandbreite und CPU möglicherweise begrenzter sind, oder ein komplexes JavaScript vorladen, um damit ein interaktives 3D-Modell darzustellen, wenn die Ressourcen des Benutzers reichlich vorhanden sind.

## Scripting und Preloads

> [!NOTE]
> Verwenden Sie [`<link rel="modulepreload">`](/de/docs/Web/HTML/Attributes/rel/modulepreload), wenn Sie mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) arbeiten.

Ein weiterer Vorteil dieser Preloads ist, dass Sie sie mit Skripten ausführen können. Zum Beispiel erstellen wir hier eine Instanz von [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement), die dann zum DOM hinzugefügt wird:

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

Dies ist nützlich, wenn Sie ein Skript vorladen, die Ausführung jedoch genau dann verzögern möchten, wenn Sie es benötigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculative Loading](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="preload">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) von Yoav Weiss
