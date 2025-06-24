---
title: rel=preload
slug: Web/HTML/Reference/Attributes/rel/preload
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{HTMLSidebar}}

Der `preload`-Wert des [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attributs des {{htmlelement("link")}}-Elements ermöglicht es Ihnen, Abrufanforderungen im HTML-`<head>` zu deklarieren. Sie geben dabei Ressourcen an, die Ihre Seite sehr bald benötigen wird und die Sie frühzeitig im Seitenlebenszyklus laden möchten, bevor der Haupt-Rendering-Prozess des Browsers einsetzt. Dies stellt sicher, dass sie früher verfügbar sind und weniger wahrscheinlich das Rendering der Seite blockieren, wodurch die Leistung verbessert wird. Auch wenn der Name das Wort _load_ enthält, wird das Skript nicht geladen und ausgeführt, sondern nur zum Herunterladen und Caching mit höherer Priorität geplant.

## Die Grundlagen

Normalerweise verwenden Sie `<link>`, um eine CSS-Datei zu laden, die Ihre Seite stylt:

```html
<link rel="stylesheet" href="styles/main.css" />
```

Hier verwenden wir jedoch einen `rel`-Wert von `preload`, wodurch `<link>` zu einem Preloader für jede gewünschte Ressource wird. Sie müssen auch Folgendes angeben:

- Den Pfad zur Ressource im [`href`](/de/docs/Web/HTML/Reference/Elements/link#href)-Attribut.
- Den Ressourcentyp im [`as`](/de/docs/Web/HTML/Reference/Elements/link#as)-Attribut.

Ein Beispiel könnte so aussehen (siehe unser [JS- und CSS-Beispielcode](https://github.com/mdn/html-examples/tree/main/link-rel-preload/js-and-css) und [auch live](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)):

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

Hier laden wir unsere CSS- und JavaScript-Dateien vor, damit sie verfügbar sind, sobald sie für das Rendering der Seite benötigt werden. Dieses Beispiel ist trivial, da der Browser wahrscheinlich die `<link rel="stylesheet">`- und `<script>`-Elemente im selben HTML-Chunk wie die Preloads entdeckt. Die Vorteile sind jedoch viel deutlicher zu erkennen, je später die Ressourcen entdeckt und je größer sie sind. Zum Beispiel:

- Ressourcen, die in CSS referenziert werden, wie Schriftarten oder Bilder.
- Ressourcen, die von JavaScript angefordert werden können, wie importierte Skripte.

`preload` hat auch andere Vorteile. Durch die Verwendung von `as`, um den Typ des zu ladenden Inhalts anzugeben, kann der Browser:

- Die Ressource im Cache für zukünftige Anforderungen speichern und gegebenenfalls wiederverwenden.
- Die korrekte [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) auf die Ressource anwenden.
- Die korrekten {{HTTPHeader("Accept")}}-Anforderungsheader dafür festlegen.

### Welche Arten von Inhalten können vorgeladen werden?

Viele Inhaltsarten können vorgeladen werden. Die möglichen Werte des `as`-Attributs sind:

- `fetch`: Eine Ressource, die über eine Fetch- oder XHR-Anforderung abgerufen wird, wie z. B. ein ArrayBuffer, WebAssembly-Binärdatei oder JSON-Datei.
- `font`: Schriftdatei.
- `image`: Bilddatei.
- `script`: JavaScript-Datei.
- `style`: CSS-Stylesheet.
- `track`: WebVTT-Datei.

> [!NOTE]
> Das Vorladen von `font` und `fetch` erfordert das Setzen des `crossorigin`-Attributs; siehe [CORS-fähige Abrufe](#cors-fähige_abrufe) unten.

> [!NOTE]
> Es gibt im HTML-Standard ausführlichere Informationen zu diesen Werten und den Web-Features, die sie erwarten zu konsumieren — siehe [Link-Type "preload"](https://html.spec.whatwg.org/#match-preload-type). Beachten Sie auch, dass die vollständige Liste der Werte, die das `as`-Attribut annehmen kann, durch die Fetch-Spezifikation geregelt wird — siehe [Anfrageziele](https://fetch.spec.whatwg.org/#concept-request-destination).

## Einbinden eines MIME-Typs

`<link>`-Elemente können ein [`type`](/de/docs/Web/HTML/Reference/Elements/link#type)-Attribut akzeptieren, das den MIME-Typ der Ressource enthält, auf den das Element verweist. Dies ist besonders nützlich beim Vorladen von Ressourcen — der Browser nutzt den Wert des `type`-Attributs, um festzustellen, ob er diese Ressource unterstützt, und lädt sie nur dann herunter, wenn dies der Fall ist, andernfalls ignoriert er sie.

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

Der Code im obigen Beispiel bewirkt, dass das `image/avif`-Bild nur in unterstützenden Browsern vorgeladen wird – und für Benutzer, die `image/avif`-Unterstützung in ihren Browsern haben, wird das `image/avif`-Bild tatsächlich verwendet (da es die erste angegebene {{htmlelement("source")}} ist). Dadurch wird der Download des Bildes hoffentlich für Benutzer, die `image/avif`-Unterstützung in ihren Browsern haben, kleiner.

Beachten Sie, dass für Benutzer, deren Browser sowohl `image/avif`- als auch `image/webp`-Unterstützung haben, in diesem Code ein `<link rel="preload" href="flower.webp" as="image" type="image/webp">`-Element ebenfalls angegeben wäre, dann würden _beide_ Bilder, `image/avif` und `image/webp`, vorgeladen — auch wenn nur eines davon tatsächlich verwendet wird.

Daher wird das Vorladen für mehrere Typen derselben Ressource nicht empfohlen. Stattdessen ist es am besten, das Vorladen nur für den Typ anzugeben, den die Mehrheit Ihrer Benutzer tatsächlich verwenden wird. Deshalb legt der Code im obigen Beispiel kein Vorladen für das `image/webp`-Bild fest.

Das Fehlen des Vorladens verhindert jedoch nicht, dass das `image/webp`-Bild von denjenigen verwendet wird, die es benötigen: Für Benutzer, deren Browser keine `image/avif`-Unterstützung, aber `image/webp`-Unterstützung haben, bewirkt der Code im obigen Beispiel immer noch, dass das `image/webp`-Bild verwendet wird — jedoch ohne es für die Mehrheit der anderen Benutzer unnötig ebenfalls vorzuladen.

## CORS-fähige Abrufe

Beim Vorladen von Ressourcen, die mit aktiviertem [CORS](/de/docs/Web/HTTP/Guides/CORS) abgerufen werden (z. B. [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [Schriftarten](/de/docs/Web/CSS/@font-face)) ist besondere Sorgfalt bei der Einstellung des [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/link#crossorigin)-Attributs auf Ihrem [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element erforderlich. Das Attribut muss so gesetzt werden, dass es mit dem CORS- und Anmeldeinformationen-Modus der Ressource übereinstimmt, auch wenn der Abruf nicht über Fachdomäne hinweggreift.

Wie oben erwähnt, ist ein interessanter Fall, wo dies zutrifft, Schriftdateien. Aus verschiedenen Gründen müssen diese im anonymen CORS-Modus abgerufen werden (siehe [Schriftabrufanforderungen](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

Lassen Sie uns diesen Fall als Beispiel verwenden. Sie können den vollständigen [Beispielcode auf GitHub ansehen](https://github.com/mdn/html-examples/tree/main/link-rel-preload/fonts) ([auch live zu sehen](https://mdn.github.io/html-examples/link-rel-preload/fonts/)):

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

Wir geben nicht nur die MIME-Typ-Hinweise in den `type`-Attributen an, sondern auch das `crossorigin`-Attribut, um sicherzustellen, dass der CORS-Modus des Preloads mit der späteren Anfrage der Schriftressource übereinstimmt.

## Einbinden von Medien

Eine nette Funktion von `<link>`-Elementen ist ihre Fähigkeit, [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attribute zu akzeptieren. Diese können [Medientypen](/de/docs/Web/CSS/@media#media_types) oder vollständig ausgearbeitete [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) akzeptieren, was Ihnen ermöglicht, responsives Vorladen zu verwenden!

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

Wir fügen `media`-Attribute zu unseren `<link>`-Elementen hinzu, sodass ein schmales Bild vorgeladen wird, falls der Benutzer ein schmales Viewport hat, und ein breiteres Bild geladen wird, wenn er ein breiteres Viewport besitzt. Wir verwenden [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) / [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) dazu (siehe [Media Queries testen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) für mehr dazu).

Dies macht es viel wahrscheinlicher, dass die Schrift beim Rendern der Seite verfügbar ist, wodurch FOUT (Flash of Unstyled Text) reduziert wird.

Dies muss sich nicht auf Bilder oder sogar auf Dateien desselben Typs beschränken — denken Sie groß! Vielleicht könnten Sie ein vereinfachtes SVG-Diagramm vorladen und anzeigen, wenn der Benutzer auf einem schmalen Bildschirm ist, wo Bandbreite und CPU potenziell mehr eingeschränkt sind, oder ein komplexes JavaScript vorladen und verwenden, um ein interaktives 3D-Modell zu rendern, wenn die Ressourcen des Benutzers reichlich vorhanden sind.

## Skripting und Preloads

> [!NOTE]
> Verwenden Sie [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload), wenn Sie mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) arbeiten.

Eine weitere praktische Sache an diesen Preloads ist, dass Sie diese mit einem Skript ausführen können. Zum Beispiel erstellen wir hier eine Instanz von [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) und fügen sie dann dem DOM hinzu:

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

Das bedeutet, dass der Browser die `myscript.js`-Datei vorladen wird, diese aber noch nicht verwendet. Um sie zu verwenden, könnten Sie dies tun:

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

Dies ist nützlich, wenn Sie ein Skript vorladen, aber die Ausführung genau dann verzögern möchten, wenn Sie es benötigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="preload">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) von Yoav Weiss
