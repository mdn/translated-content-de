---
title: "CSP: style-src"
slug: Web/HTTP/Headers/Content-Security-Policy/style-src
l10n:
  sourceCommit: 7f6eed1f5aeddfb4755a89f1aa7aba396e4e0b15
---

{{HTTPSidebar}}

Die HTTP-Richtlinie {{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src`** gibt gültige Quellen für Stylesheets an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Richtlinientyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Richtlinie fehlt, sucht der Benutzeragent nach der
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

  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind die folgenden Quellausdrücke anwendbar:

    - [`<host-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#self)
    - [`'unsafe-inline'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-inline)
    - [`'unsafe-hashes'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-hashes)
    - [`'nonce-<nonce_value>'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#nonce-nonce_value)
    - [`'<hash_algorithm>-<hash_value>'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#hash_algorithm-hash_value)
    - [`'report-sample'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#report-sample)

    Beachten Sie, dass die Spezifikation auch [`'unsafe-eval'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-eval) als gültigen Quellausdruckswert enthält, um Methoden des CSSOM zu erlauben, die CSS-Strings parsen und einfügen, einschließlich der `insertRule()`-Methoden und der `cssText`-Setter in verschiedenen Schnittstellen wie [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) und [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText). Allerdings blockiert derzeit kein Browser diese Methoden, daher ist es nicht notwendig, `unsafe-eval` anzuwenden.

## Beispiele

### Verletzungsfälle

Angenommen, dieser CSP-Header ist gegeben:

```http
Content-Security-Policy: style-src https://example.com/
```

Die folgenden Stylesheets werden blockiert und nicht geladen:

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

Auch Inline-Style-Attribute werden blockiert:

```html
<div style="display:none">Foo</div>
```

Sowie Styles, die in JavaScript angewendet werden, indem das `style`-Attribut direkt gesetzt wird oder indem [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) gesetzt wird:

```js
document.querySelector("div").setAttribute("style", "display:none;");
document.querySelector("div").style.cssText = "display:none;";
```

Allerdings werden Stil-Eigenschaften, die direkt auf der [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements gesetzt werden, nicht blockiert, sodass es Benutzern erlaubt ist, über JavaScript sicher Stile zu manipulieren:

```js
document.querySelector("div").style.display = "none";
```

Diese Arten von Manipulationen können durch das Verbieten von JavaScript über die {{CSP("script-src")}} CSP-Direktive verhindert werden.

### Unsichere Inline-Styles

> [!NOTE]
> Das Verbot von Inline-Styles und -Skripten ist einer der größten Sicherheitsvorteile, die CSP bietet. Wenn Sie jedoch unbedingt Inline-Styles verwenden müssen, gibt es einige Mechanismen, die dies ermöglichen.

Um Inline-Styles zu erlauben, können `'unsafe-inline'`, eine Nonce-Quelle oder eine Hash-Quelle spezifiziert werden, die mit dem Inline-Block übereinstimmt. Die folgende Content Security Policy erlaubt Inline-Styles wie das {{HTMLElement("style")}}-Element und das `style`-Attribut auf jedem Element:

```http
Content-Security-Policy: style-src 'unsafe-inline';
```

Das folgende {{HTMLElement("style")}}-Element und `style`-Attribut werden durch die Richtlinie erlaubt:

```html
<style>
  #inline-style {
    background: red;
  }
</style>

<div style="display:none">Foo</div>
```

Sie können eine Nonce-Quelle verwenden, um nur bestimmte Inline-Style-Blöcke zu erlauben. Sie müssen einen zufälligen Nonce-Wert generieren (mithilfe eines kryptografisch sicheren Zufallstoken-Generators) und ihn in die Richtlinie aufnehmen. Es ist wichtig zu beachten, dass dieser Nonce-Wert dynamisch generiert werden muss, da er für jede HTTP-Anfrage einzigartig sein muss:

```http
Content-Security-Policy: style-src 'nonce-2726c7f26c'
```

Sie müssen denselben Nonce auf das {{HTMLElement("style")}}-Element setzen:

```html
<style nonce="2726c7f26c">
  #inline-style {
    background: red;
  }
</style>
```

Alternativ können Sie Hashes aus Ihren Inline-Styles erstellen. CSP unterstützt sha256, sha384 und sha512. Die **binäre** Form des Hashs muss mit Base64 kodiert werden. Sie können den Hash eines Strings über die Kommandozeile mit dem `openssl` Programm erhalten:

```bash
echo -n "#inline-style { background: red; }" | openssl dgst -sha256 -binary | openssl enc -base64
```

Sie können eine Hash-Quelle verwenden, um nur bestimmte Inline-Style-Blöcke zu erlauben:

```http
Content-Security-Policy: style-src 'sha256-ozBpjL6dxO8fsS4u6fwG1dFDACYvpNxYeBA6tzR+FY8='
```

Beim Erstellen des Hashs schließen Sie die {{HTMLElement("style")}}-Tags nicht ein, und beachten Sie, dass Groß-/Kleinschreibung und Leerzeichen wichtig sind, einschließlich führender und nachfolgender Leerzeichen.

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
