---
title: "Content-Security-Policy: style-src Richtlinie"
short-title: style-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/style-src
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src`** Direktive gibt gültige Quellen für Stylesheets an.

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
    <tr>
      <th scope="row">{{CSP("default-src")}} Rückfall</th>
      <td>
        Ja. Wenn diese Direktive fehlt, sucht der Benutzeragent nach der
        <code>default-src</code> Direktive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: style-src 'none';
Content-Security-Policy: style-src <source-expression-list>;
```

Diese Direktive kann einen der folgenden Werte haben:

- `'none'`
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _Source Expression_ Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Source Expressions übereinstimmen. Für diese Direktive sind die folgenden Source Expression Werte anwendbar:
    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)
    - [`'unsafe-inline'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-inline)
    - [`'unsafe-hashes'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes)
    - [`'nonce-<nonce_value>'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#nonce-nonce_value)
    - [`'<hash_algorithm>-<hash_value>'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#hash_algorithm-hash_value)
    - [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample)

    Beachten Sie, dass die Spezifikation auch [`'unsafe-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) als gültigen Source Expression Wert einschließt, um die CSSOM-Methoden zu erlauben, die CSS-Strings parsen und einfügen, einschließlich der `insertRule()` Methoden und der `cssText` Setter auf verschiedenen Schnittstellen, wie [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) und [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText). Allerdings blockiert derzeit kein Browser diese Methoden, sodass es keinen Grund gibt, `unsafe-eval` anzuwenden.

## Beispiele

### Verstoßfälle

Angenommen, dieser CSP-Header:

```http
Content-Security-Policy: style-src https://example.com/
```

blockiert die folgenden Stylesheets und wird nicht geladen:

```html
<link href="https://not-example.com/styles/main.css" rel="stylesheet" />

<style>
  #inline-style {
    background: red;
  }
</style>

<style>
  @import "https://not-example.com/styles/print.css" print;
</style>
```

sowie die mit dem {{HTTPHeader("Link")}} Header geladenen Styles:

```http
Link: <https://not-example.com/styles/stylesheet.css>;rel=stylesheet
```

Inline-Stilattributen werden ebenfalls blockiert:

```html
<div style="display:none">Foo</div>
```

Ebenso wie Stile, die in JavaScript angewendet werden, indem das `style` Attribut direkt gesetzt wird, oder indem [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) gesetzt wird:

```js
document.querySelector("div").setAttribute("style", "display:none;");
document.querySelector("div").style.cssText = "display:none;";
```

Jedoch werden Stil-Eigenschaften, die direkt auf der [`style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft des Elements gesetzt werden, nicht blockiert, was es Nutzern ermöglicht, sicher mit JavaScript Stile zu manipulieren:

```js
document.querySelector("div").style.display = "none";
```

Diese Arten von Manipulationen können verhindert werden, indem JavaScript über die {{CSP("script-src")}} CSP-Direktive nicht erlaubt wird.

### Unsichere Inline-Stile

> [!NOTE]
> Das Verbieten von Inline-Stilen und Inline-Skripten ist einer der größten Sicherheitsvorteile, die CSP bietet. Wenn Sie jedoch unbedingt Inline-Stile verwenden müssen, gibt es einige Mechanismen, die dies erlauben.

Um Inline-Stile zu erlauben, kann `'unsafe-inline'`, eine Nonce-Quelle oder eine Hash-Quelle angegeben werden, die mit dem Inline-Block übereinstimmt. Die folgende Content Security Policy erlaubt Inline-Stile wie das {{HTMLElement("style")}} Element und das `style` Attribut an jedem Element:

```http
Content-Security-Policy: style-src 'unsafe-inline';
```

Das folgende {{HTMLElement("style")}} Element und das `style` Attribut werden durch die Richtlinie erlaubt:

```html
<style>
  #inline-style {
    background: red;
  }
</style>

<div style="display:none">Foo</div>
```

Sie können eine Nonce-Quelle verwenden, um nur bestimmte Inline-Stilblöcke zuzulassen. Sie müssen einen zufälligen {{Glossary("Nonce", "Nonce")}} Wert (verwendend ein kryptographisch sicheres zufälliges Token-Generator) generieren und in die Richtlinie aufnehmen. Es ist wichtig zu beachten, dass dieser Nonce-Wert dynamisch generiert werden muss, da er für jede HTTP-Anfrage einzigartig sein muss:

```http
Content-Security-Policy: style-src 'nonce-2726c7f26c'
```

Sie müssen denselben Nonce auf dem {{HTMLElement("style")}} Element setzen:

```html
<style nonce="2726c7f26c">
  #inline-style {
    background: red;
  }
</style>
```

Alternativ können Sie Hashes aus Ihren Inline-Stilen erstellen. CSP unterstützt sha256, sha384 und sha512. Die **binäre** Form des Hashes muss mit Base64 codiert werden. Sie können den Hash eines Strings über die Befehlszeile mit dem `openssl` Programm erhalten:

```bash
echo -n "#inline-style { background: red; }" | openssl dgst -sha256 -binary | openssl enc -base64
```

Sie können eine Hash-Quelle verwenden, um nur bestimmte Inline-Stilblöcke zuzulassen:

```http
Content-Security-Policy: style-src 'sha256-ozBpjL6dxO8fsS4u6fwG1dFDACYvpNxYeBA6tzR+FY8='
```

Beim Generieren des Hashs nicht die {{HTMLElement("style")}} Tags einbeziehen und beachten, dass Groß- und Kleinschreibung sowie Leerzeichen wichtig sind, einschließlich führender oder nachfolgender Leerzeichen.

```html
<style>
  #inline-style {
    background: red;
  }
</style>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("style-src-elem")}}
- {{CSP("style-src-attr")}}
- {{HTTPHeader("Link")}} Header
- {{HTMLElement("style")}}, {{HTMLElement("link")}}
- {{cssxref("@import")}}
- [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
- [`CSSGroupingRule.insertRule()`](/de/docs/Web/API/CSSGroupingRule/insertRule)
- [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)
