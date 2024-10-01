---
title: "CSP: style-src"
slug: Web/HTTP/Headers/Content-Security-Policy/style-src
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src`** Direktive gibt gültige Quellen für Stylesheets an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktiv-Typ</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Direktive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Direktive fehlt, wird der User-Agent nach der
        <code>default-src</code> Direktive suchen.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `style-src` Richtlinie erlaubt werden:

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src <source> <source>;
```

### Quellen

`<source>` kann jeder der in [CSP Source Values](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführten Werte sein.

Beachten Sie, dass dieselbe Menge von Werten in allen {{Glossary("fetch_directive", "Fetch-Direktiven")}} (und einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

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

sowie Styles, die mit dem {{HTTPHeader("Link")}} Header geladen werden:

```http
Link: <https://not-example.com/styles/stylesheet.css>;rel=stylesheet
```

Inline-Stilattribute werden ebenfalls blockiert:

```html
<div style="display:none">Foo</div>
```

Ebenso wie Stile, die in JavaScript durch direktes Setzen des `style` Attributs oder durch Setzen von [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) angewendet werden:

```js
document.querySelector("div").setAttribute("style", "display:none;");
document.querySelector("div").style.cssText = "display:none;";
```

Stil-Eigenschaften, die direkt auf der [`style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft des Elements gesetzt sind, werden jedoch nicht blockiert, sodass Benutzer sicher Stile über JavaScript manipulieren können:

```js
document.querySelector("div").style.display = "none";
```

Diese Art der Manipulation kann durch das Verbieten von JavaScript über die {{CSP("script-src")}} CSP-Direktive verhindert werden.

### Unsichere Inline-Stile

> [!NOTE]
> Das Verbot von Inline-Stilen und Inline-Skripten ist einer der größten Sicherheitsvorteile, die CSP bietet. Wenn Sie sie jedoch unbedingt verwenden müssen, gibt es einige Mechanismen, die sie zulassen.

Um Inline-Stile zu erlauben, kann `'unsafe-inline'`, eine Nonce-Quelle oder eine Hash-Quelle angegeben werden, die mit dem Inline-Block übereinstimmt. Die folgende Content Security Policy erlaubt Inline-Stile wie das {{HTMLElement("style")}} Element und das `style` Attribut an jedem Element:

```http
Content-Security-Policy: style-src 'unsafe-inline';
```

Das folgende {{HTMLElement("style")}} Element und das `style` Attribut werden von der Richtlinie erlaubt:

```html
<style>
  #inline-style {
    background: red;
  }
</style>

<div style="display:none">Foo</div>
```

Sie können eine Nonce-Quelle verwenden, um nur spezifische Inline-Stilblöcke zuzulassen. Sie müssen einen zufälligen Nonce-Wert generieren (unter Verwendung eines kryptographisch sicheren Zufallstoken-Generators) und ihn in die Richtlinie aufnehmen. Wichtig ist, dass dieser Nonce-Wert dynamisch generiert werden muss, da er für jede HTTP-Anfrage einzigartig sein muss:

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

Alternativ können Sie Hashes Ihrer Inline-Stile erstellen. CSP unterstützt sha256, sha384 und sha512. Die **binäre** Form des Hashes muss mit Base64 kodiert sein. Sie können den Hash eines Strings in der Befehlszeile über das `openssl` Programm erhalten:

```bash
echo -n "#inline-style { background: red; }" | openssl dgst -sha256 -binary | openssl enc -base64
```

Sie können eine Hash-Quelle nutzen, um nur bestimmte Inline-Stilblöcke zuzulassen:

```http
Content-Security-Policy: style-src 'sha256-ozBpjL6dxO8fsS4u6fwG1dFDACYvpNxYeBA6tzR+FY8='
```

Beim Generieren des Hashes sollten Sie die {{HTMLElement("style")}} Tags nicht einbeziehen, und beachten, dass Großschreibung und Leerzeichen eine Rolle spielen, einschließlich führender oder nachstehender Leerzeichen.

```html
<style>
  #inline-style {
    background: red;
  }
</style>
```

### Unsichere Ausdrücke für Stile

Der `'unsafe-eval'` Quellenausdruck steuert mehrere Stilmethoden, die Stildeklarationen aus Strings erstellen. Wenn `'unsafe-eval'` nicht mit der `style-src` Direktive angegeben ist, sind die folgenden Methoden blockiert und haben keine Wirkung:

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
- {{HTTPHeader("Link")}} Header
- {{HTMLElement("style")}}, {{HTMLElement("link")}}
- {{cssxref("@import")}}
- [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
- [`CSSGroupingRule.insertRule()`](/de/docs/Web/API/CSSGroupingRule/insertRule)
- [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)
