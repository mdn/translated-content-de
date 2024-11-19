---
title: "CSP: style-src"
slug: Web/HTTP/Headers/Content-Security-Policy/style-src
l10n:
  sourceCommit: 6368e2b112a343fa00ae1a8cf51ceb0b0b845834
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src`** Direktive legt gültige Quellen für Stylesheets fest.

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

  - : Eine durch Leerzeichen getrennte Liste von _Quellausdrücken_. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind die folgenden Quellausdrücke anwendbar:

    - [`<host-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#self)
    - [`'unsafe-inline'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-inline)
    - [`'unsafe-hashes'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-hashes)
    - [`'nonce-<nonce_value>'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#nonce-nonce_value)
    - [`'<hash_algorithm>-<hash_value>'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#hash_algorithm-hash_value)
    - [`'report-sample'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#report-sample)

## Beispiele

### Verletzungsfälle

Angenommen, es gibt diesen CSP-Header:

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

ebenso wie Styles, die mit dem {{HTTPHeader("Link")}}-Header geladen werden:

```http
Link: <https://not-example.com/styles/stylesheet.css>;rel=stylesheet
```

Inline-Style-Attribute werden ebenfalls blockiert:

```html
<div style="display:none">Foo</div>
```

Ebenso wie Styles, die in JavaScript durch direktes Setzen des `style`-Attributs oder durch Setzen von [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) angewendet werden:

```js
document.querySelector("div").setAttribute("style", "display:none;");
document.querySelector("div").style.cssText = "display:none;";
```

Stil-Eigenschaften, die jedoch direkt auf der [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements gesetzt werden, werden nicht blockiert, sodass Benutzer sicher Stile über JavaScript manipulieren können:

```js
document.querySelector("div").style.display = "none";
```

Diese Arten der Manipulation können verhindert werden, indem JavaScript über die {{CSP("script-src")}}-CSP-Direktive verboten wird.

### Unsichere Inline-Stile

> [!NOTE]
> Das Verbot von Inline-Stilen und Inline-Skripten ist einer der größten Sicherheitsgewinne, die CSP bietet. Wenn Sie sie jedoch unbedingt verwenden müssen, gibt es einige Mechanismen, die dies ermöglichen.

Um Inline-Stile zu erlauben, können `'unsafe-inline'`, eine Nonce-Quelle oder eine Hash-Quelle, die zum Inline-Block passt, angegeben werden. Die folgende Content Security Policy erlaubt Inline-Stile wie das {{HTMLElement("style")}}-Element und das `style`-Attribut an jedem Element:

```http
Content-Security-Policy: style-src 'unsafe-inline';
```

Das folgende {{HTMLElement("style")}}-Element und das `style`-Attribut werden von der Richtlinie erlaubt:

```html
<style>
  #inline-style {
    background: red;
  }
</style>

<div style="display:none">Foo</div>
```

Sie können eine Nonce-Quelle verwenden, um nur bestimmte Inline-Style-Blöcke zuzulassen. Sie müssen einen zufälligen Nonce-Wert generieren (unter Verwendung eines kryptografisch sicheren Zufallstoken-Generators) und ihn in der Richtlinie aufnehmen. Es ist wichtig zu beachten, dass dieser Nonce-Wert dynamisch generiert werden muss, da er für jede HTTP-Anfrage eindeutig sein muss:

```http
Content-Security-Policy: style-src 'nonce-2726c7f26c'
```

Den gleichen Nonce müssen Sie auf das {{HTMLElement("style")}}-Element setzen:

```html
<style nonce="2726c7f26c">
  #inline-style {
    background: red;
  }
</style>
```

Alternativ können Sie Hashes Ihrer Inline-Stile erstellen. CSP unterstützt sha256, sha384 und sha512. Die **binäre** Form des Hashes muss mit base64 kodiert werden. Sie können den Hash eines Strings über die Befehlszeile mit dem `openssl`-Programm erhalten:

```bash
echo -n "#inline-style { background: red; }" | openssl dgst -sha256 -binary | openssl enc -base64
```

Sie können eine Hash-Quelle verwenden, um nur bestimmte Inline-Style-Blöcke zuzulassen:

```http
Content-Security-Policy: style-src 'sha256-ozBpjL6dxO8fsS4u6fwG1dFDACYvpNxYeBA6tzR+FY8='
```

Beim Generieren des Hashs sollten Sie die {{HTMLElement("style")}}-Tags nicht einschließen und beachten, dass Groß-/Kleinschreibung und Leerzeichen einschließlich führender oder nachfolgender Leerzeichen von Bedeutung sind.

```html
<style>
  #inline-style {
    background: red;
  }
</style>
```

### Unsichere Stillausdrücke

Der `'unsafe-eval'` Quellausdruck kontrolliert mehrere Stilmethoden, die Stildeklarationen aus Strings erstellen. Wenn `'unsafe-eval'` nicht mit der `style-src`-Direktive angegeben ist, werden die folgenden Methoden blockiert und haben keine Wirkung:

- [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
- [`CSSGroupingRule.insertRule()`](/de/docs/Web/API/CSSGroupingRule/insertRule)
- [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)

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
