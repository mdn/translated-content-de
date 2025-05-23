---
title: "Content-Security-Policy: default-src Direktive"
short-title: default-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/default-src
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`default-src`** Direktive dient als Fallback für die anderen CSP {{Glossary("fetch_directive", "Fetch-Direktiven")}}. Für jede der folgenden Direktiven, die nicht vorhanden sind, sucht der Benutzeragent nach der `default-src` Direktive und verwendet diesen Wert:

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

```http
Content-Security-Policy: default-src 'none';
Content-Security-Policy: default-src <source-expression-list>;
```

Diese Direktive kann einen der folgenden Werte haben:

- `'none'`
  - : Keine Ressourcen dürfen geladen werden. Die Anführungszeichen sind zwingend erforderlich.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _source expression_ Werten. Ressourcen dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind alle in [Fetch-Direktiv-Syntax](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) aufgeführten Quellausdrücke anwendbar.

## Beispiele

### Kein Vererben mit default-src

Wenn andere Direktiven angegeben sind, beeinflusst `default-src` diese nicht. Der folgende Header:

```http
Content-Security-Policy: default-src 'self'; script-src https://example.com
```

ist identisch mit:

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

### Firefox `default-src: none` SVG-Sprite Blockierungsproblem

> [!NOTE]
> Dieses Problem wurde in Firefox 132 behoben; siehe [Bug 1773976](https://bugzil.la/1773976).

Beim Erstellen einer CSP kann man mit `default-src 'none'` beginnen, um jegliches Laden von Ressourcen zu sperren, und dann weitere Direktiven hinzufügen, um die Richtlinie zu öffnen und nur die benötigten Ressourcen zu laden. Zum Beispiel, um nur das Laden von Bildern aus demselben Ursprung zu erlauben:

```http
Content-Security-Policy: default-src 'none'; img-src 'self'
```

Es gibt jedoch ein Problem hier. Wenn Sie SVG-Sprites einbetten, die in externen Dateien über das [`<use>`](/de/docs/Web/SVG/Reference/Element/use) Element definiert sind, zum Beispiel:

```svg
<svg>
  <use href="/images/icons.svg#icon"/>
</svg>
```

werden Ihre SVG-Bilder in Firefox blockiert, wenn Sie eine `default-src 'none'` Richtlinie festgelegt haben. Firefox behandelt das SVG nicht als eingebettetes Bild wie andere Browser, daher erlaubt `img-src 'self'` deren Laden nicht. Sie müssen `default-src 'self'` verwenden, wenn Sie möchten, dass Ihre externen Sprites in Firefox geladen werden.

Alternativ, wenn die `default-src 'none'` Richtlinie ein strenges Erfordernis ist, können Sie die SVG-Sprites direkt in die HTML-Seite einbetten:

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
  - {{Glossary("Reporting_directive", "Bericht-Direktive")}}
  - [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests)
  - [`block-all-mixed-content`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/block-all-mixed-content)
