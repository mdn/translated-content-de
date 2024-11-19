---
title: "CSP: default-src"
slug: Web/HTTP/Headers/Content-Security-Policy/default-src
l10n:
  sourceCommit: 6368e2b112a343fa00ae1a8cf51ceb0b0b845834
---

{{HTTPSidebar}}

Die HTTP-Richtlinie {{HTTPHeader("Content-Security-Policy")}} (CSP) **`default-src`** dient als Fallback für die anderen CSP-{{Glossary("fetch_directive", "Abrufrichtlinien")}}. Für jede der folgenden, nicht vorhandenen Richtlinien sucht der Benutzeragent nach der `default-src`-Richtlinie und verwendet diesen Wert:

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
      <th scope="row">Richtlinientyp</th>
      <td>{{Glossary("Fetch_directive", "Abrufrichtlinie")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: default-src 'none';
Content-Security-Policy: default-src <source-expression-list>;
```

Diese Richtlinie kann einen der folgenden Werte haben:

- `'none'`
  - : Es dürfen keine Ressourcen geladen werden. Die einfachen Anführungszeichen sind zwingend erforderlich.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Ressourcen dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Richtlinie sind alle Quellausdrücke, die in der [Abrufrichtliniensyntax](/de/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directive_syntax) aufgeführt sind, anwendbar.

## Beispiele

### Keine Vererbung mit default-src

Wenn andere Richtlinien angegeben sind, beeinflusst `default-src` diese nicht. Der folgende Header:

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

### Firefox-Problem mit SVG-Sprite-Blockierung bei `default-src: none`

CSP-Richtlinien empfehlen oft, mit `default-src 'none'` zu starten, um das Laden aller Ressourcen zu blockieren, und dann weitere Richtlinien hinzuzufügen, um die Richtlinie zu lockern und nur die benötigten Ressourcen zu laden. Zum Beispiel, um nur das Laden von Bildern derselben Herkunft zu erlauben:

```http
Content-Security-Policy: default-src 'none'; img-src 'self'
```

Es gibt jedoch ein Problem. Wenn Sie SVG-Sprites, die in externen Dateien über das [`<use>`](/de/docs/Web/SVG/Element/use)-Element definiert sind, einbetten, z.B.:

```svg
<svg>
  <use href="/images/icons.svg#icon"/>
</svg>
```

werden Ihre SVG-Bilder in Firefox blockiert, wenn Sie eine `default-src 'none'`-Richtlinie gesetzt haben. Firefox behandelt das SVG nicht wie ein eingebettetes Bild wie andere Browser, daher wird `img-src 'self'` diese nicht laden. Sie müssen `default-src 'self'` verwenden, wenn Sie möchten, dass Ihre externen Sprites in Firefox geladen werden (siehe [Bug 1773976](https://bugzil.la/1773976) und [dieses CSP-Spezifikationsproblem](https://github.com/w3c/webappsec-csp/issues/199) für weitere Informationen).

Alternativ, wenn die `default-src 'none'`-Richtlinie eine feste Anforderung ist, können Sie die SVG-Sprites in die HTML-Seite einfügen:

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
- CSP-Richtlinien (<https://www.w3.org/TR/CSP/#csp-directives>):

  - {{Glossary("Fetch_directive", "Abrufrichtlinie")}}
  - {{Glossary("Document_directive", "Dokumentenrichtlinie")}}
  - {{Glossary("Navigation_directive", "Navigationsrichtlinie")}}
  - {{Glossary("Reporting_directive", "Berichterstattungsrichtlinie")}}
  - [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests)
  - [`block-all-mixed-content`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content)
