---
title: "CSP: default-src"
slug: Web/HTTP/Headers/Content-Security-Policy/default-src
l10n:
  sourceCommit: ed9ebd794add41de1f2e759502b73e8650afe56b
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`default-src`** Direktive dient als Fallback für die anderen CSP {{Glossary("fetch_directive", "Fetch-Direktiven")}}. Für jede der folgenden Direktiven, die nicht vorhanden ist, sucht der Benutzeragent nach der `default-src` Direktive und verwendet diesen Wert dafür:

- {{CSP("child-src")}}
- {{CSP("connect-src")}}
- {{CSP("font-src")}}
- {{CSP("frame-src")}}
- {{CSP("img-src")}}
- {{CSP("manifest-src")}}
- {{CSP("media-src")}}
- {{CSP("object-src")}}
- {{CSP("prefetch-src")}}
- {{CSP("script-src")}}
- {{CSP("script-src-elem")}}
- {{CSP("script-src-attr")}}
- {{CSP("style-src")}}
- {{CSP("style-src-elem")}}
- {{CSP("style-src-attr")}}
- {{CSP("worker-src")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Direktive")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

Ein oder mehrere Quellen können für die `default-src` Richtlinie erlaubt werden:

```http
Content-Security-Policy: default-src <source>;
Content-Security-Policy: default-src <source> <source>;
```

### Quellen

`<source>` kann einer der Werte sein, die in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgelistet sind.

Beachten Sie, dass dieser gleiche Satz von Werten in allen {{Glossary("fetch_directive", "Fetch-Direktiven")}} (und einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Keine Vererbung mit default-src

Wenn andere Direktiven spezifiziert sind, beeinflusst `default-src` diese nicht. Der folgende Header:

```http
Content-Security-Policy: default-src 'self'; script-src https://example.com
```

ist dasselbe wie:

```http
Content-Security-Policy: connect-src 'self';
                         font-src 'self';
                         frame-src 'self';
                         img-src 'self';
                         manifest-src 'self';
                         media-src 'self';
                         object-src 'self';
                         script-src https://example.com;
                         style-src 'self';
                         worker-src 'self'
```

### Firefox `default-src: none` SVG-Sprite-Blockierungsproblem

CSP-Richtlinien empfehlen oft, mit `default-src 'none'` zu beginnen, um alle Ressourcenladungen zu sperren, und dann weitere Direktiven hinzuzufügen, um die Richtlinie zu öffnen, damit Sie nur die Ressourcen laden, die Sie benötigen. Zum Beispiel, um das Laden von Bildern aus derselben Herkunft zu erlauben:

```http
Content-Security-Policy: default-src 'none'; img-src 'self'
```

Allerdings gibt es hier ein Problem. Wenn Sie SVG-Sprites, die in externen Dateien über das [`<use>`](/de/docs/Web/SVG/Element/use) Element definiert sind, einbetten, zum Beispiel:

```svg
<svg>
  <use href="/images/icons.svg#icon"/>
</svg>
```

werden Ihre SVG-Bilder in Firefox blockiert, wenn Sie eine `default-src 'none'` Richtlinie gesetzt haben. Firefox behandelt SVGs nicht als eingebettete Bilder wie andere Browser, daher wird `img-src 'self'` nicht erlauben, sie zu laden. Sie müssen `default-src 'self'` verwenden, wenn Sie möchten, dass Ihre externen Sprites in Firefox geladen werden (siehe [Bug 1773976](https://bugzil.la/1773976) und [dieses CSP-Spezifikationsproblem](https://github.com/w3c/webappsec-csp/issues/199) für weitere Informationen).

Alternativ, wenn die `default-src 'none'` Richtlinie eine harte Anforderung ist, können Sie die SVG-Sprites inline in die HTML-Seite einfügen:

```html
<body>
  <svg style="display: none">
    <symbol id="icon" viewBox="0 0 24 24">
      <path d="…" />
    </symbol>
  </svg>
  …
  <svg>
    <use href="#icon" />
  </svg>
</body>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- CSP-Direktiven (<https://www.w3.org/TR/CSP/#csp-directives>):

  - {{Glossary("Fetch_directive", "Fetch-Direktive")}}
  - {{Glossary("Document_directive", "Dokument-Direktive")}}
  - {{Glossary("Navigation_directive", "Navigations-Direktive")}}
  - {{Glossary("Reporting_directive", "Berichterstattungs-Direktive")}}
  - [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests)
  - [`block-all-mixed-content`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content)
