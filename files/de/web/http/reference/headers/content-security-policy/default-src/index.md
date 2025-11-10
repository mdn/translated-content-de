---
title: "Content-Security-Policy: Direktive `default-src`"
short-title: default-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/default-src
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`default-src`**-Direktive dient als Rückfalloption für die anderen CSP-{{Glossary("fetch_directive", "Fetch-Direktiven")}}. Für jede der folgenden Direktiven, die nicht vorhanden ist, sucht der User-Agent nach der `default-src`-Direktive und verwendet diesen Wert:

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
  - : Keine Ressourcen dürfen geladen werden. Die einfachen Anführungszeichen sind verpflichtend.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _Quell-Ausdruck_-Werten. Ressourcen dürfen geladen werden, wenn sie mit einem der gegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind alle Quellausdruckswerte, die in der [Syntax der Fetch-Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) aufgelistet sind, anwendbar.

## Beispiele

### Keine Vererbung mit default-src

Wenn andere Direktiven spezifiziert sind, beeinflusst `default-src` diese nicht. Der folgende Header:

```http
Content-Security-Policy: default-src 'self'; script-src https://example.com
```

ist gleichbedeutend mit:

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

> [!NOTE]
> Dieses Problem wurde in Firefox 132 behoben; siehe [Bug 1773976](https://bugzil.la/1773976).

Beim Erstellen einer CSP können Sie mit `default-src 'none'` beginnen, um das Laden aller Ressourcen zu sperren und dann weitere Direktiven hinzufügen, um die Richtlinie zu öffnen, sodass nur die notwendigen Ressourcen geladen werden können. Um beispielsweise das Laden von Bildern nur aus derselben Herkunft zu erlauben:

```http
Content-Security-Policy: default-src 'none'; img-src 'self'
```

Allerdings gibt es hier ein Problem. Wenn Sie SVG-Sprites, die in externen Dateien definiert sind, über das [`<use>`](/de/docs/Web/SVG/Reference/Element/use)-Element einbetten, beispielsweise:

```svg
<svg>
  <use href="/images/icons.svg#icon"/>
</svg>
```

werden Ihre SVG-Bilder in Firefox blockiert, wenn Sie eine `default-src 'none'`-Richtlinie festgelegt haben. Firefox behandelt das SVG nicht als eingebettetes Bild wie andere Browser, daher erlaubt `img-src 'self'` deren Laden nicht. Sie müssen `default-src 'self'` verwenden, wenn Ihre externen Sprites in Firefox geladen werden sollen.

Alternativ können Sie, wenn die `default-src 'none'` Richtlinie zwingend erforderlich ist, die SVG-Sprites im HTML-Dokument inline einfügen:

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
- CSP-Direktiven (<https://w3c.github.io/webappsec-csp/#csp-directives>):
  - {{Glossary("Fetch_directive", "Fetch-Direktive")}}
  - {{Glossary("Document_directive", "Dokument-Direktive")}}
  - {{Glossary("Navigation_directive", "Navigations-Direktive")}}
  - {{Glossary("Reporting_directive", "Bericht-Direktive")}}
  - [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests)
  - [`block-all-mixed-content`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/block-all-mixed-content)
