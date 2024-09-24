---
title: "CSP: style-src"
slug: Web/HTTP/Headers/Content-Security-Policy/style-src
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}}-Richtlinie **`style-src`** gibt gültige Quellen für Stylesheets an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Richtlinientyp</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Richtlinie nicht vorhanden ist, sucht der User Agent nach der
        <code>default-src</code>-Richtlinie.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `style-src`-Richtlinie erlaubt werden:

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src <source> <source>;
```

### Quellen

`<source>` kann jeder der in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführten Werte sein.

Beachten Sie, dass dieser gleiche Satz von Werten in allen {{Glossary("fetch directive", "fetch directives")}} (und einer [Reihe anderer Richtlinien](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verstöße

Angenommen, dieser CSP-Header:

```http
Content-Security-Policy: style-src https://example.com/
```

blockiert die folgenden Stylesheets und sie werden nicht geladen:

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

sowie Stile, die über den {{HTTPHeader("Link")}}-Header geladen werden:

```http
Link: <https://not-example.com/styles/stylesheet.css>;rel=stylesheet
```

Inline-Stil-Attribute sind ebenfalls blockiert:

```html
<div style="display:none">Foo</div>
```

Ebenso wie Stile, die in JavaScript durch direktes Setzen des `style`-Attributs oder durch Setzen von {{domxref("CSSStyleDeclaration.cssText", "cssText")}} angewendet werden:

```js
document.querySelector("div").setAttribute("style", "display:none;");
document.querySelector("div").style.cssText = "display:none;";
```

Stileigenschaften, die direkt auf der {{domxref("HTMLElement/style", "style")}}-Eigenschaft des Elements gesetzt werden, werden jedoch nicht blockiert, sodass Benutzer Stile sicher über JavaScript manipulieren können:

```js
document.querySelector("div").style.display = "none";
```

Diese Art der Manipulation kann verhindert werden, indem JavaScript über die {{CSP("script-src")}}-CSP-Richtlinie verboten wird.

### Unsichere Inline-Stile

> [!NOTE]
> Das Verbot von Inline-Stilen und -Skripten ist einer der größten Sicherheitsvorteile, die CSP bietet. Wenn Sie sie jedoch unbedingt verwenden müssen, gibt es einige Mechanismen, die dies zulassen.

Um Inline-Stile zu erlauben, können `'unsafe-inline'`, eine nonce-Quelle oder eine Hash-Quelle, die mit dem Inline-Block übereinstimmt, angegeben werden.
Die folgende Content Security Policy erlaubt Inline-Stile wie das {{HTMLElement("style")}}-Element und das `style`-Attribut an jedem Element:

```http
Content-Security-Policy: style-src 'unsafe-inline';
```

Das folgende {{HTMLElement("style")}}-Element und das `style`-Attribut werden von der Richtlinie zugelassen:

```html
<style>
  #inline-style {
    background: red;
  }
</style>

<div style="display:none">Foo</div>
```

Sie können eine nonce-Quelle verwenden, um nur bestimmte Inline-Stilblöcke zuzulassen.
Sie müssen einen zufälligen nonce-Wert generieren (unter Verwendung eines kryptografisch sicheren Zufallstoken-Generators) und ihn in der Richtlinie angeben.
Es ist wichtig zu beachten, dass dieser nonce-Wert dynamisch generiert werden muss, da er für jede HTTP-Anfrage einzigartig sein muss:

```http
Content-Security-Policy: style-src 'nonce-2726c7f26c'
```

Sie müssen denselben nonce auf dem {{HTMLElement("style")}}-Element setzen:

```html
<style nonce="2726c7f26c">
  #inline-style {
    background: red;
  }
</style>
```

Alternativ können Sie Hashs aus Ihren Inline-Stilen erstellen. CSP unterstützt sha256, sha384 und sha512. Die **binäre** Form des Hashs muss mit Base64 kodiert werden. Sie können den Hash eines Strings in der Befehlszeile über das `openssl`-Programm erhalten:

```bash
echo -n "#inline-style { background: red; }" | openssl dgst -sha256 -binary | openssl enc -base64
```

Sie können eine Hash-Quelle verwenden, um nur bestimmte Inline-Stilblöcke zuzulassen:

```http
Content-Security-Policy: style-src 'sha256-ozBpjL6dxO8fsS4u6fwG1dFDACYvpNxYeBA6tzR+FY8='
```

Beim Generieren des Hashs sollten die {{HTMLElement("style")}}-Tags nicht eingeschlossen werden, und es ist zu beachten, dass Groß- und Kleinschreibung sowie Leerzeichen wichtig sind, einschließlich führender oder nachfolgender Leerzeichen.

```html
<style>
  #inline-style {
    background: red;
  }
</style>
```

### Unsichere Stil-Ausdrücke

Der `'unsafe-eval'`-Quellenausdruck steuert mehrere Stilmethoden, die Stildeklarationen aus Strings erstellen. Wenn `'unsafe-eval'` nicht mit der `style-src`-Richtlinie angegeben ist, werden die folgenden Methoden blockiert und haben keine Wirkung:

- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSGroupingRule.insertRule()")}}
- {{domxref("CSSStyleDeclaration.cssText")}}

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
- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSGroupingRule.insertRule()")}}
- {{domxref("CSSStyleDeclaration.cssText")}}
