---
title: "Content-Security-Policy: style-src directive"
short-title: style-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/style-src
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src`** Direktive spezifiziert gültige Quellen für Stylesheets.

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
      <th scope="row">{{CSP("default-src")}} Rückgriff</th>
      <td>
        Ja. Wenn diese Direktive fehlt, sucht der User Agent nach der
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

  - : Eine durch Leerzeichen getrennte Liste von _Quellausdrücken_. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind die folgenden Quellausdruckswerte anwendbar:

    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)
    - [`'unsafe-inline'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-inline)
    - [`'unsafe-hashes'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes)
    - [`'nonce-<nonce_value>'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#nonce-nonce_value)
    - [`'<hash_algorithm>-<hash_value>'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#hash_algorithm-hash_value)
    - [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample)

    Beachten Sie, dass die Spezifikation auch [`'unsafe-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) als gültigen Quellausdruckswert einschließt, um CSSOM-Methoden zuzulassen, die CSS-Strings parsen und einfügen, einschließlich der `insertRule()`-Methoden und der `cssText`-Setter auf verschiedenen Schnittstellen, wie [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) und [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText). Derzeit blockiert jedoch kein Browser diese Methoden, sodass es nicht notwendig ist, `unsafe-eval` anzuwenden.

## Beispiele

### Verletzungsfälle

Angenommen, dieser CSP-Header ist gesetzt:

```http
Content-Security-Policy: style-src https://example.com/
```

werden die folgenden Stylesheets blockiert und nicht geladen:

```html
<link href="https://not-example.com/styles/main.css" rel="stylesheet" />

<style>
  #inline-style {
    background: red;
  }
</style>

<style>
  @import url("https://not-example.com/styles/print.css") print;
</style>
```

ebenso wie Stile, die über den {{HTTPHeader("Link")}}-Header geladen werden:

```http
Link: <https://not-example.com/styles/stylesheet.css>;rel=stylesheet
```

Inline-Stilattribute werden ebenfalls blockiert:

```html
<div style="display:none">Foo</div>
```

Ebenso wie Stile, die in JavaScript durch Setzen des `style`-Attributs direkt oder durch Setzen von [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) angewendet werden:

```js
document.querySelector("div").setAttribute("style", "display:none;");
document.querySelector("div").style.cssText = "display:none;";
```

Jedoch werden Stileigenschaften, die direkt auf der [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements gesetzt werden, nicht blockiert, was es Benutzern ermöglicht, Stile sicher über JavaScript zu manipulieren:

```js
document.querySelector("div").style.display = "none";
```

Diese Art von Manipulationen kann verhindert werden, indem JavaScript über die {{CSP("script-src")}} CSP-Direktive nicht zugelassen wird.

### Unsichere Inline-Stile

> [!NOTE]
> Das Verbot von Inline-Stilen und Inline-Skripten ist einer der größten Sicherheitsvorteile, die CSP bietet. Wenn Sie es jedoch unbedingt verwenden müssen, gibt es einige Mechanismen, die sie zulassen.

Um Inline-Stile zuzulassen, können `'unsafe-inline'`, eine Nonce-Quelle oder eine Hash-Quelle, die mit dem Inline-Block übereinstimmt, spezifiziert werden.
Die folgende Content-Security-Policy erlaubt Inline-Stile wie das {{HTMLElement("style")}}-Element und das `style`-Attribut auf jedem Element:

```http
Content-Security-Policy: style-src 'unsafe-inline';
```

Das folgende {{HTMLElement("style")}}-Element und das `style`-Attribut werden durch die Richtlinie zugelassen:

```html
<style>
  #inline-style {
    background: red;
  }
</style>

<div style="display:none">Foo</div>
```

Sie können eine Nonce-Quelle verwenden, um nur bestimmte Inline-Stilblöcke zuzulassen.
Sie müssen einen zufälligen Nonce-Wert generieren (mithilfe eines kryptografisch sicheren zufälligen Token-Generators) und ihn in die Richtlinie einschließen.
Es ist wichtig, zu beachten, dass dieser Nonce-Wert dynamisch generiert werden muss, da er für jede HTTP-Anfrage einzigartig sein muss:

```http
Content-Security-Policy: style-src 'nonce-2726c7f26c'
```

Sie müssen denselben Nonce auf dem {{HTMLElement("style")}}-Element setzen:

```html
<style nonce="2726c7f26c">
  #inline-style {
    background: red;
  }
</style>
```

Alternativ können Sie Hashes aus Ihren Inline-Stilen erstellen. CSP unterstützt sha256, sha384 und sha512. Die **binäre** Form des Hashs muss mit Base64 kodiert werden. Sie können den Hash einer Zeichenkette in der Befehlszeile über das `openssl`-Programm erhalten:

```bash
echo -n "#inline-style { background: red; }" | openssl dgst -sha256 -binary | openssl enc -base64
```

Sie können eine Hash-Quelle verwenden, um nur bestimmte Inline-Stilblöcke zuzulassen:

```http
Content-Security-Policy: style-src 'sha256-ozBpjL6dxO8fsS4u6fwG1dFDACYvpNxYeBA6tzR+FY8='
```

Beim Erzeugen des Hashs sollten Sie die {{HTMLElement("style")}}-Tags nicht einschließen und beachten, dass Groß-/Kleinschreibung und Leerzeichen, einschließlich führender oder nachfolgender Leerzeichen, eine Rolle spielen.

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
- {{HTTPHeader("Link")}}-Header
- {{HTMLElement("style")}}, {{HTMLElement("link")}}
- {{cssxref("@import")}}
- [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
- [`CSSGroupingRule.insertRule()`](/de/docs/Web/API/CSSGroupingRule/insertRule)
- [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)
