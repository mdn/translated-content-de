---
title: rel=preload
slug: Web/HTML/Attributes/rel/preload
l10n:
  sourceCommit: aee2bd82de11cb7331134e48e8bd548bbedafcc5
---

{{HTMLSidebar}}

Der `preload`-Wert des Attributs [`rel`](/de/docs/Web/HTML/Element/link#rel) des {{htmlelement("link")}}-Elements ermöglicht es Ihnen, Abrufanforderungen im {{htmlelement("head")}} des HTMLs zu deklarieren und Ressourcen zu spezifizieren, die Ihre Seite sehr bald benötigen wird, damit diese früh im Seitenlebenszyklus geladen werden, bevor die Haupt-Rendering-Maschine des Browsers zum Einsatz kommt. Dies stellt sicher, dass sie früher verfügbar sind und die Seitendarstellung weniger blockieren, was die Leistung verbessert. Obwohl der Name den Begriff _load_ enthält, wird das Skript nicht geladen und ausgeführt, sondern nur zum Herunterladen und Zwischenspeichern mit höherer Priorität geplant.

## Die Grundlagen

Sie verwenden `<link>` am häufigsten, um eine CSS-Datei zu laden, um Ihre Seite zu stylen:

```html
<link rel="stylesheet" href="styles/main.css" />
```

Hier werden wir jedoch einen `rel`-Wert von `preload` verwenden, wodurch `<link>` zu einem Vorlader für jede gewünschte Ressource wird. Sie müssen auch Folgendes angeben:

- Den Pfad zur Ressource im Attribut [`href`](/de/docs/Web/HTML/Element/link#href).
- Den Ressourcentyp im Attribut [`as`](/de/docs/Web/HTML/Element/link#as).

Ein einfaches Beispiel könnte so aussehen (siehe unser [JS- und CSS-Beispielquellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/js-and-css), und [auch live](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)):

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

Hier laden wir unsere CSS- und JavaScript-Dateien vor, damit sie verfügbar sind, sobald sie für das Rendering der Seite benötigt werden. Dieses Beispiel ist trivial, da der Browser wahrscheinlich die `<link rel="stylesheet">`- und `<script>`-Elemente im selben HTML-Chunk wie die Preloads entdeckt, aber die Vorteile können viel deutlicher gesehen werden, je später die Ressourcen entdeckt und je größer sie sind. Zum Beispiel:

- Ressourcen, die innerhalb von CSS aufgerufen werden, wie Schriften oder Bilder.
- Ressourcen, die von JavaScript angefordert werden können, wie importierte Skripte.

`preload` hat auch andere Vorteile. Die Verwendung von `as`, um den Ressourcentyp zu spezifizieren, ermöglicht dem Browser:

- Die Ressource im Cache für zukünftige Anforderungen zu speichern und wiederzuverwenden, falls zutreffend.
- Die korrekte [Content-Security-Policy](/de/docs/Web/HTTP/CSP) auf die Ressource anzuwenden.
- Die korrekten {{HTTPHeader("Accept")}}-Anforderungsheader dafür zu setzen.

### Welche Arten von Inhalten können vorgeladen werden?

Viele Inhaltsarten können vorgeladen werden. Die möglichen `as`-Attributwerte sind:

- `fetch`: Ressource, die durch einen Fetch- oder XHR-Anfrage abgerufen werden soll, wie etwa ein ArrayBuffer, WebAssembly-Binärdatei oder JSON-Datei.
- `font`: Schriftdatei.
- `image`: Bilddatei.
- `script`: JavaScript-Datei.
- `style`: CSS-Stylesheet.
- `track`: WebVTT-Datei.

> **Hinweis:** `font` und `fetch` Vorladen erfordert das Setzen des `crossorigin` Attributs; siehe [CORS-fähige Abrufe](#cors-fähige_abrufe) unten.

> [!NOTE]
> Mehr Details über diese Werte und die erwarteten Web-Funktionen dazu gibt es in der HTML-Spezifikation — siehe [Linktyp "preload"](https://html.spec.whatwg.org/#match-preload-type). Beachten Sie auch, dass die vollständige Liste der Werte, die das `as`-Attribut annehmen kann, durch die Fetch-Spezifikation geregelt wird — siehe [Request-Destinationen](https://fetch.spec.whatwg.org/#concept-request-destination).

## Ein MIME-Typ einbeziehen

`<link>`-Elemente können ein [`type`](/de/docs/Web/HTML/Element/link#type) Attribut akzeptieren, das den MIME-Typ der Ressource enthält, auf die das Element verweist. Dies ist besonders nützlich beim Vorladen von Ressourcen — der Browser verwendet den `type`-Attributwert, um festzustellen, ob er diese Ressource unterstützt, und lädt sie nur, wenn dies der Fall ist, und ignoriert sie andernfalls.

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

Der Code im obigen Beispiel bewirkt, dass das `image/avif`-Bild nur in unterstützenden Browsern vorgeladen wird — und für Benutzer, die `image/avif`-Unterstützung in ihren Browsern haben, bewirkt, dass das `image/avif`-Bild tatsächlich verwendet wird (da es die erste angegebene {{htmlelement("source")}} ist). Dadurch wird das Bild hoffentlich kleiner heruntergeladen für Benutzer, die `image/avif`-Unterstützung in ihren Browsern haben.

Beachten Sie, dass für Benutzer, deren Browser sowohl `image/avif` als auch `image/webp`-Unterstützung haben, wenn in diesem Code auch ein `<link rel="preload" href="flower.webp" as="image" type="image/webp">`-Element spezifiziert wäre, dann würden _beide_, die `image/avif`- und `image/webp`-Bilder vorgeladen werden — obwohl letztlich nur eines davon tatsächlich verwendet würde.

Daher wird das Vorladen von mehreren Typen derselben Ressource nicht empfohlen. Stattdessen ist es am besten, das Vorladen nur für den Typ zu spezifizieren, den die Mehrheit Ihrer Benutzer wahrscheinlich tatsächlich verwenden wird. Aus diesem Grund gibt der Code im obigen Beispiel kein Vorladen für das `image/webp`-Bild an.

Jedoch verhindert das Fehlen von Vorladen nicht, dass das `image/webp`-Bild tatsächlich von denen verwendet wird, die es benötigen: für Benutzer, deren Browser keine `image/avif`-Unterstützung haben, aber `image/webp`-Unterstützung haben, verursacht der Code im obigen Beispiel dennoch, dass das `image/webp`-Bild verwendet wird — aber dies geschieht, ohne dass es auch unnötigerweise für die Mehrheit der anderen Benutzer vorgeladen wird.

## CORS-fähige Abrufe

Beim Vorladen von Ressourcen, die mit [CORS](/de/docs/Web/HTTP/CORS) aktiviert abgerufen werden (z.B. [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [Fonts](/de/docs/Web/CSS/@font-face)), muss das [`crossorigin`](/de/docs/Web/HTML/Element/link#crossorigin) Attribut auf Ihrem [`<link>`](/de/docs/Web/HTML/Element/link) Element gesetzt werden. Das Attribut muss gesetzt werden, um mit dem CORS-Modus und den Anmeldeinformationen der Ressource übereinzustimmen, selbst wenn der Abruf nicht über originübergreifend erfolgt.

Wie oben erwähnt, ist eine interessante Anwendungsfall die Schriftdaten. Aufgrund verschiedener Gründe müssen diese im anonymen Modus über CORS abgerufen werden (siehe [Font-Fetching-Anforderungen](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

Lassen Sie uns diesen Fall als Beispiel verwenden. Sie können den vollständigen [Beispielquellcode auf GitHub](https://github.com/mdn/html-examples/tree/main/link-rel-preload/fonts) ansehen ([sehen Sie ihn auch live](https://mdn.github.io/html-examples/link-rel-preload/fonts/)):

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

Wir geben nicht nur MIME-Typ-Hinweise in den `type`-Attributen an, sondern auch das `crossorigin`-Attribut, um sicherzustellen, dass der CORS-Modus des Vorladens mit der endgültigen Schriftressourcenanforderung übereinstimmt.

## Medien einbeziehen

Ein nettes Feature von `<link>`-Elementen ist ihre Fähigkeit, [`media`](/de/docs/Web/HTML/Element/link#media) Attribute zu akzeptieren. Diese können [Medientypen](/de/docs/Web/CSS/@media#media_types) oder vollständige [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) akzeptieren, sodass Sie responsives Vorladen durchführen können!

Sehen wir uns ein Beispiel an (sehen Sie es auf GitHub — [Quellcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/media), [live Beispiel](https://mdn.github.io/html-examples/link-rel-preload/media/)):

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

Wir fügen unseren `<link>`-Elementen `media`-Attribute hinzu, sodass ein schmales Bild vorgeladen wird, wenn der Benutzer ein schmales Ansichtsfenster hat, und ein breiteres Bild geladen wird, wenn er ein breites Ansichtsfenster hat. Wir verwenden [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) / [`MediaQueryList`](/de/docs/Web/API/MediaQueryList), um dies zu tun (siehe [Medienabfragen testen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) für mehr).

Dies macht es viel wahrscheinlicher, dass die Schriftart für das Rendern der Seite verfügbar ist, und reduziert FOUT (Flash of Unstyled Text).

Dies muss sich nicht auf Bilder oder sogar Dateien desselben Typs beschränken — denken Sie groß! Sie könnten beispielsweise eine einfache SVG-Grafik vorladen und anzeigen, wenn der Benutzer auf einem schmalen Bildschirm ist, wo Bandbreite und CPU möglicherweise eingeschränkter sind, oder ein komplexes Stück JavaScript vorladen und dann verwenden, um ein interaktives 3D-Modell zu rendern, wenn die Ressourcen des Benutzers umfangreicher sind.

## Scripting und Preloads

> [!NOTE]
> Verwenden Sie [`<link rel="modulepreload">`](/de/docs/Web/HTML/Attributes/rel/modulepreload), wenn Sie mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) arbeiten.

Ein weiterer Vorteil dieser Preloads ist, dass Sie sie mit Skripten ausführen können. Zum Beispiel erstellen wir hier eine Instanz von [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) und fügen sie dem DOM hinzu:

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

Das bedeutet, dass der Browser die `myscript.js`-Datei vorlädt, sie aber noch nicht verwendet. Um sie zu verwenden, könnten Sie dies tun:

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

Dies ist nützlich, wenn Sie ein Skript vorladen, aber die Ausführung genau dann verschieben möchten, wenn Sie es benötigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading) für einen Vergleich von `<link rel="preload">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
- [Preload: Wofür ist es gut?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) von Yoav Weiss
