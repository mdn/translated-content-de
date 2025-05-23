---
title: "Content-Security-Policy: style-src-Direktive"
short-title: style-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/style-src
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src`**-Direktive gibt gültige Quellen für Stylesheets an.

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
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Direktive fehlt, sucht der Benutzeragent nach der
        <code>default-src</code>-Direktive.
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
  - : Es dürfen keine Ressourcen dieses Typs geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind die folgenden Quellausdruckswerte anwendbar:

    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)
    - [`'unsafe-inline'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-inline)
    - [`'unsafe-hashes'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes)
    - [`'nonce-<nonce_value>'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#nonce-nonce_value)
    - [`'<hash_algorithm>-<hash_value>'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#hash_algorithm-hash_value)
    - [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample)

    Beachten Sie, dass die Spezifikation auch [`'unsafe-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) als gültigen Quellenausdruckswert enthält, um die CSSOM-Methoden zu erlauben, die CSS-Strings parsen und einfügen, einschließlich der `insertRule()`-Methoden und `cssText`-Setter auf verschiedenen Schnittstellen, wie [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) und [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText). Derzeit blockiert jedoch kein Browser diese Methoden, sodass es nicht notwendig ist, `unsafe-eval` anzuwenden.

## Beispiele

### Verletzungsfälle

Gegeben ist dieser CSP-Header:

```http
Content-Security-Policy: style-src https://example.com/
```

die folgenden Stylesheets werden blockiert und nicht geladen:

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

ebenso wie Styles, die über den {{HTTPHeader("Link")}}-Header geladen werden:

```http
Link: <https://not-example.com/styles/stylesheet.css>;rel=stylesheet
```

Inline-Style-Attribute werden ebenfalls blockiert:

```html
<div style="display:none">Foo</div>
```

Genauso wie Styles, die in JavaScript durch direktes Setzen des `style`-Attributes angewendet werden, oder durch Setzen von [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText):

```js
document.querySelector("div").setAttribute("style", "display:none;");
document.querySelector("div").style.cssText = "display:none;";
```

Stil-Eigenschaften, die direkt auf der [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements gesetzt werden, werden jedoch nicht blockiert und ermöglichen es Benutzern, Styles sicher über JavaScript zu manipulieren:

```js
document.querySelector("div").style.display = "none";
```

Diese Arten von Manipulationen können verhindert werden, indem JavaScript über die {{CSP("script-src")}} CSP-Direktive disallowiert wird.

### Unsichere Inline-Styles

> [!NOTE]
> Das Verbot von Inline-Styles und Inline-Skripten ist einer der größten Sicherheitsgewinne, die CSP bietet. Wenn Sie es jedoch absolut verwenden müssen, gibt es einige Mechanismen, die dies erlauben.

Um Inline-Styles zu erlauben, können `'unsafe-inline'`, eine nonce-Quelle oder eine Hash-Quelle angegeben werden, die zu dem Inline-Block passt. Die folgende Content-Security-Policy erlaubt Inline-Styles wie das {{HTMLElement("style")}}-Element und das `style`-Attribut auf jedem Element:

```http
Content-Security-Policy: style-src 'unsafe-inline';
```

Das folgende {{HTMLElement("style")}}-Element und `style`-Attribut wird durch die Richtlinie erlaubt:

```html
<style>
  #inline-style {
    background: red;
  }
</style>

<div style="display:none">Foo</div>
```

Sie können eine Nonce-Quelle verwenden, um nur bestimmte Inline-Style-Blöcke zuzulassen. Sie müssen einen zufälligen Nonce-Wert generieren (unter Verwendung eines kryptografisch sicheren Zufalls-Token-Generators) und ihn in die Richtlinie aufnehmen. Es ist wichtig zu beachten, dass dieser Nonce-Wert dynamisch generiert werden muss, da er für jede HTTP-Anfrage eindeutig sein muss:

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

Alternativ können Sie Hashes Ihrer Inline-Styles erstellen. CSP unterstützt sha256, sha384 und sha512. Die **binäre** Form des Hashs muss mit Base64 kodiert werden. Sie können den Hash eines Strings in der Befehlszeile über das `openssl`-Programm erhalten:

```bash
echo -n "#inline-style { background: red; }" | openssl dgst -sha256 -binary | openssl enc -base64
```

Sie können eine Hash-Quelle verwenden, um nur bestimmte Inline-Style-Blöcke zuzulassen:

```http
Content-Security-Policy: style-src 'sha256-ozBpjL6dxO8fsS4u6fwG1dFDACYvpNxYeBA6tzR+FY8='
```

Beim Generieren des Hashs sollten die {{HTMLElement("style")}}-Tags nicht enthalten sein und beachten Sie, dass Groß- und Kleinschreibung sowie Leerzeichen, einschließlich führender oder nachfolgender Leerzeichen, von Bedeutung sind.

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
