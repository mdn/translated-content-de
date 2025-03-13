---
title: "CSP: default-src"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/default-src
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP)-**`default-src`**-Direktive dient als Rückfalllösung für die anderen CSP-{{Glossary("fetch_directive", "Abrufdirektiven")}}. Für jede der folgenden Direktiven, die fehlen, sucht der Benutzeragent nach der `default-src`-Direktive und verwendet diesen Wert dafür:

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
      <td>{{Glossary("Fetch_directive", "Abrufdirektive")}}</td>
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
  - : Es dürfen keine Ressourcen geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _Quellausdruck_-Werten. Ressourcen dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind alle der in der [Abrufdirektiven-Syntax](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) aufgeführten Quellausdruckswerte anwendbar.

## Beispiele

### Keine Vererbung mit default-src

Wenn andere Direktiven spezifiziert sind, beeinflusst `default-src` diese nicht. Der folgende Header:

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

> [!NOTE]
> Dieses Problem wurde in Firefox 132 behoben; siehe [Bug 1773976](https://bugzil.la/1773976).

Wenn Sie eine CSP erstellen, können Sie mit `default-src 'none'` beginnen, um das Laden aller Ressourcen zu sperren, und dann weitere Direktiven hinzufügen, um die Richtlinie zu öffnen, sodass Sie nur die benötigten Ressourcen laden können. Um beispielsweise das Laden von Bildern gleicher Herkunft zu erlauben:

```http
Content-Security-Policy: default-src 'none'; img-src 'self'
```

Hier gibt es jedoch ein Problem. Wenn Sie SVG-Sprites verwenden, die in externen Dateien durch das [`<use>`](/de/docs/Web/SVG/Element/use)-Element eingebettet sind, zum Beispiel:

```svg
<svg>
  <use href="/images/icons.svg#icon"/>
</svg>
```

werden Ihre SVG-Bilder in Firefox blockiert, wenn Sie eine `default-src 'none'`-Richtlinie haben. Firefox behandelt die SVG nicht als eingebettetes Bild wie andere Browser, daher wird `img-src 'self'` sie nicht laden lassen. Sie müssen `default-src 'self'` verwenden, wenn Sie möchten, dass Ihre externen Sprites in Firefox geladen werden.

Alternativ, wenn die `default-src 'none'`-Richtlinie eine zwingende Anforderung ist, können Sie die SVG-Sprites inline in die HTML-Seite einfügen:

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

  - {{Glossary("Fetch_directive", "Abrufdirektive")}}
  - {{Glossary("Document_directive", "Dokumentdirektive")}}
  - {{Glossary("Navigation_directive", "Navigationsdirektive")}}
  - {{Glossary("Reporting_directive", "Berichterstattungsdirektive")}}
  - [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests)
  - [`block-all-mixed-content`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/block-all-mixed-content)
