---
title: "CSP: default-src"
slug: Web/HTTP/Headers/Content-Security-Policy/default-src
l10n:
  sourceCommit: c6b08a226f356baa26ed37a9d8ed12196244d02e
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`default-src`**-Direktive dient als Fallback für die anderen CSP-{{Glossary("fetch directive", "fetch directives")}}. Für jede der folgenden, nicht vorhandenen Direktiven sucht der Benutzeragent nach der `default-src`-Direktive und verwendet diesen Wert:

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
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `default-src`-Richtlinie erlaubt werden:

```http
Content-Security-Policy: default-src <source>;
Content-Security-Policy: default-src <source> <source>;
```

### Quellen

`<source>` kann einer der Werte sein, die in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführt sind.

Beachten Sie, dass dieses gleiche Set von Werten in allen {{Glossary("fetch directive", "fetch directives")}} (und einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Keine Vererbung mit default-src

Wenn andere Direktiven angegeben sind, beeinflusst `default-src` diese nicht. Der folgende Header:

```http
Content-Security-Policy: default-src 'self'; script-src https://example.com
```

entspricht:

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

CSP-Richtlinien empfehlen oft, mit `default-src 'none'` zu beginnen, um das Laden aller Ressourcen zu sperren, und dann weitere Direktiven hinzuzufügen, um die Richtlinie zu öffnen, sodass Sie nur die Ressourcen laden, die Sie benötigen. Zum Beispiel, um das Laden von Bildern derselben Quelle zu erlauben:

```http
Content-Security-Policy: default-src 'none'; img-src 'self'
```

Hier gibt es jedoch ein Problem. Wenn Sie SVG-Sprites einbetten, die über das [`<use>`](/de/docs/Web/SVG/Element/use)-Element in externen Dateien definiert sind, zum Beispiel:

```svg
<svg>
  <use href="/images/icons.svg#icon"/>
</svg>
```

werden Ihre SVG-Bilder in Firefox blockiert, wenn Sie eine `default-src 'none'`-Politik festgelegt haben. Firefox behandelt das SVG nicht als eingebettetes Bild wie andere Browser, daher reicht `img-src 'self'` nicht aus, um sie zu laden. Sie müssen `default-src 'self'` verwenden, wenn Sie möchten, dass Ihre externen Sprites in Firefox geladen werden (siehe [Bug 1773976](https://bugzilla.mozilla.org/show_bug.cgi?id=1773976) und [dieses CSP-Spezifikationsproblem](https://github.com/w3c/webappsec-csp/issues/199) für weitere Informationen).

Alternativ können Sie, wenn die `default-src 'none'`-Richtlinie zwingend erforderlich ist, die SVG-Sprites im HTML-Dokument inline einfügen:

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

  - {{Glossary("Fetch directive")}}
  - {{Glossary("Document directive")}}
  - {{Glossary("Navigation directive")}}
  - {{Glossary("Reporting directive")}}
  - [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests)
  - [`block-all-mixed-content`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content)