---
title: rel=preload
slug: Web/HTML/Reference/Attributes/rel/preload
l10n:
  sourceCommit: 7acfa06975b187f5dd640c19d4a10f76badcb094
---

Der `preload`-Wert des `rel`-Attributs des {{htmlelement("link")}}-Elements ermöglicht es Ihnen, Abrufanforderungen im HTML-{{htmlelement("head")}} zu deklarieren, wobei Ressourcen angegeben werden, die Ihre Seite sehr bald benötigt und deren Laden Sie frühzeitig im Seitenlebenszyklus starten möchten, bevor die Hauptwiedergabemotorik der Browser aktiviert wird. Das sorgt dafür, dass sie früher verfügbar sind und die Darstellung der Seite weniger wahrscheinlich blockieren, was die Leistung verbessert. Obwohl der Name den Begriff _load_ enthält, lädt und führt er das Skript nicht aus, sondern plant nur, es mit höherer Priorität herunterzuladen und im Cache zu speichern.

## Die Grundlagen

Am häufigsten verwenden Sie `<link>`, um eine CSS-Datei zu laden, die Ihre Seite gestaltet:

```html
<link rel="stylesheet" href="styles/main.css" />
```

Hier verwenden wir jedoch einen `rel`-Wert von `preload`, der `<link>` zu einem Vorlader für jede gewünschte Ressource macht. Sie müssen auch angeben:

- Den Pfad zur Ressource im [`href`](/de/docs/Web/HTML/Reference/Elements/link#href)-Attribut.
- Den Ressourcentyp im [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut.

Ein Beispiel könnte so aussehen (siehe unser [JS- und CSS-Beispielcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/js-and-css), und [auch live](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)):

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

Hier laden wir unsere CSS- und JavaScript-Dateien vor, damit sie verfügbar sind, sobald sie später für die Darstellung der Seite benötigt werden. Dieses Beispiel ist trivial, da der Browser die `<link rel="stylesheet">`- und `<script>`-Elemente wahrscheinlich im selben HTML-Abschnitt wie die Vorladungen entdeckt, aber die Vorteile sind viel deutlicher zu erkennen, je später Ressourcen entdeckt und je größer sie sind. Zum Beispiel:

- Ressourcen, die von innerhalb CSS verwiesen werden, wie Schriftarten oder Bilder.
- Ressourcen, die JavaScript anfordern kann, wie importierte Skripte.

`preload` bietet auch andere Vorteile. Durch die Verwendung von `as` zur Angabe des vorzuladenden Inhaltstyps kann der Browser:

- Die Ressource im Cache für zukünftige Anforderungen speichern und sie gegebenenfalls wiederverwenden.
- Die richtige [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) auf die Ressource anwenden.
- Die korrekten {{HTTPHeader("Accept")}}-Anforderungsheader dafür festlegen.

### Welche Arten von Inhalten können vorgeladen werden?

Viele Inhaltstypen können vorgeladen werden. Die möglichen `as`-Attributwerte sind:

- `fetch`: Ressource, die durch eine Fetch- oder XHR-Anfrage aufgerufen wird, wie ein ArrayBuffer, ein WebAssembly-Binärformat oder eine JSON-Datei.
- `font`: Schriftdatei.
- `image`: Bilddatei.
- `script`: JavaScript-Datei.
- `style`: CSS-Stylesheet.
- `track`: WebVTT-Datei.

> [!NOTE]
> `font`- und `fetch`-Vorladen erfordert, dass das `crossorigin`-Attribut gesetzt ist; siehe [CORS-aktivierte Abrufe](#cors-aktivierte_abrufe) unten.

> [!NOTE]
> Es gibt mehr Details zu diesen Werten und den Web-Funktionen, von denen erwartet wird, dass sie konsumiert werden, in der HTML-Spezifikation — siehe [Link-Typ "preload"](https://html.spec.whatwg.org/#match-preload-type). Beachten Sie auch, dass die vollständige Liste der Werte, die das `as`-Attribut annehmen kann, von der Fetch-Spezifikation geregelt wird — siehe [request destinations](https://fetch.spec.whatwg.org/#concept-request-destination).

## Ein MIME-Typ einschließen

`<link>`-Elemente können ein [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribut akzeptieren, das den MIME-Typ der Ressource enthält, auf die das Element zeigt. Dies ist besonders nützlich, wenn Ressourcen vorgeladen werden — der Browser verwendet den `type`-Attributwert, um herauszufinden, ob er diese Ressource unterstützt, und wird sie nur herunterladen, wenn dies der Fall ist, und sie ignorieren, wenn nicht.

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

Der Code im obigen Beispiel bewirkt, dass das Bild `image/avif` nur in unterstützenden Browsern vorgeladen wird — und bei Benutzern, die `image/avif`-Unterstützung in ihren Browsern haben, bewirkt das, dass das Bild `image/avif` tatsächlich verwendet wird (da es die erste {{htmlelement("source")}} ist, die angegeben wurde). Das macht den Bild-Download hoffentlich kleiner für Benutzer, die `image/avif`-Unterstützung in ihren Browsern haben.

Beachten Sie, dass bei Benutzern, deren Browser sowohl `image/avif`- als auch `image/webp`-Unterstützung haben, wenn in diesem Code auch ein `<link rel="preload" href="flower.webp" as="image" type="image/webp">`-Element angegeben wäre, dann _both_ die `image/avif`- und `image/webp`-Bilder vorgeladen werden würden — auch wenn nur eines von ihnen tatsächlich verwendet wird.

Daher wird empfohlen, das Vorladen für mehrere Typen derselben Ressource nicht anzugeben. Stattdessen ist es bewährte Praxis, das Vorladen nur für den Typ anzugeben, den die Mehrheit Ihrer Benutzer wahrscheinlich tatsächlich verwenden wird. Deshalb gibt der Code im obigen Beispiel nicht das Vorladen für das `image/webp`-Bild an.

Das Fehlen des Vorladens verhindert jedoch nicht, dass das `image/webp`-Bild tatsächlich von denen verwendet wird, die es benötigen: Bei Benutzern, deren Browser nicht `image/avif`-Unterstützung, aber `image/webp`-Unterstützung haben, bewirkt der Code im obigen Beispiel dennoch, dass das `image/webp`-Bild verwendet wird — jedoch ohne es unnötigerweise auch für die Mehrheit anderer Benutzer vorzuladen.

## CORS-aktivierte Abrufe

Wenn Ressourcen vorgeladen werden, die mit aktiviertem [CORS](/de/docs/Web/HTTP/Guides/CORS) abgerufen werden (z.B. [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [Schriftarten](/de/docs/Web/CSS/@font-face)), muss besonders darauf geachtet werden, das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/link#crossorigin)-Attribut im [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) zu setzen. Das Attribut muss so gesetzt sein, dass es dem CORS- und Anmeldeinformationen-Modus der Ressource entspricht, auch wenn der Abruf nicht über Origin-Grenzen hinweg erfolgt.

Wie oben erwähnt, ist eine interessante Fallbetrachtung, wo dies zutrifft, Schriftdateien. Aus verschiedenen Gründen müssen diese anonym im CORS-Modus abgerufen werden (siehe [Schriftabrufanforderungen](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

Lassen Sie uns diesen Fall als Beispiel verwenden. Sie können den vollständigen [Beispielcode auf GitHub](https://github.com/mdn/html-examples/tree/main/link-rel-preload/fonts) ansehen ([auch live ansehen](https://mdn.github.io/html-examples/link-rel-preload/fonts/)):

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

Wir geben nicht nur MIME-Typ-Hinweise in den `type`-Attributen an, sondern auch das `crossorigin`-Attribut, um sicherzustellen, dass der CORS-Modus des Preloads dem eventuellen Schriftressourcenanfoderung entspricht.

## Medien einbeziehen

Eine nette Funktion von `<link>`-Elementen ist ihre Fähigkeit, [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attribute zu akzeptieren. Diese können [Medientypen](/de/docs/Web/CSS/@media#media_types) oder vollständige [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) akzeptieren, sodass Sie responsive Vorlader verwenden können!

Sehen wir uns ein Beispiel an (sehen Sie es auf GitHub — [Quellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/media), [Live-Beispiel](https://mdn.github.io/html-examples/link-rel-preload/media/)):

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

Wir fügen `media`-Attribute in unsere `<link>`-Elemente ein, sodass ein schmales Bild vorgeladen wird, wenn der Benutzer ein schmales Viewport hat, und ein breiteres Bild geladen wird, wenn er ein breites Viewport hat. Wir verwenden [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) / [`MediaQueryList`](/de/docs/Web/API/MediaQueryList), um dies zu tun (siehe [Testing media queries](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) für mehr).

Diese Technik gilt auch für andere Ressourcentypen. Beispielsweise wird bei Verwendung mit Schriften das Vorladen wahrscheinlicher dazu führen, dass die Schriftzeit beim Rendern verfügbar ist, wodurch die Wahrscheinlichkeit eines unerwarteten Textanzeigefehls (FOUT) reduziert wird.

Dies muss nicht nur auf Bilder oder sogar Dateien desselben Typs beschränkt sein — denken Sie groß! Vielleicht könnten Sie ein vereinfachtes SVG-Diagramm vorladen und anzeigen, wenn der Benutzer sich auf einem engen Bildschirm befindet, wo Bandbreite und CPU möglicherweise stärker eingeschränkt sind, oder ein komplexes JavaScript-Stück vorladen und verwenden, um ein interaktives 3D-Modell zu rendern, wenn die Ressourcen des Benutzers reichlicher vorhanden sind.

## Skripting und Vorlader

> [!NOTE]
> Verwenden Sie [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload), wenn Sie mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) arbeiten.

Ein weiterer Vorteil dieser Vorlader ist, dass Sie sie mit Skripten ausführen können. Zum Beispiel erstellen wir hier eine Instanz von [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) und fügen sie dann dem DOM hinzu:

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

Das bedeutet, dass der Browser die Datei `myscript.js` vorladen wird, sie jedoch noch nicht tatsächlich verwendet. Um sie zu verwenden, könnten Sie dies tun:

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

Dies ist nützlich, wenn Sie ein Skript vorladen, aber die Ausführung auf einen genau festgelegten Moment verschieben möchten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculative loading](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="preload">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) von Yoav Weiss
