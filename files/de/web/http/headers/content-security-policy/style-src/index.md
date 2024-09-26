---
title: "CSP: style-src"
slug: Web/HTTP/Headers/Content-Security-Policy/style-src
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
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
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Rückfall</th>
      <td>
        Ja. Wenn diese Direktive fehlt, sucht der User-Agent nach der
        <code>default-src</code> Direktive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `style-src`-Richtlinie erlaubt sein:

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src <source> <source>;
```

### Quellen

`<source>` kann einer der Werte sein, die unter [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführt sind.

Beachten Sie, dass dieses gleiche Set von Werten in allen {{Glossary("fetch directive", "fetch directives")}} (und einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verletzungsfälle

Angesichts dieses CSP-Headers:

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

sowie Stile, die unter Verwendung des {{HTTPHeader("Link")}} Headers geladen werden:

```http
Link: <https://not-example.com/styles/stylesheet.css>;rel=stylesheet
```

Inline-Stilattribute werden ebenfalls blockiert:

```html
<div style="display:none">Foo</div>
```

Sowie Stile, die in JavaScript angewendet werden, indem das `style`-Attribut direkt gesetzt wird oder indem {{domxref("CSSStyleDeclaration.cssText", "cssText")}} gesetzt wird:

```js
document.querySelector("div").setAttribute("style", "display:none;");
document.querySelector("div").style.cssText = "display:none;";
```

Stileigenschaften, die direkt auf der {{domxref("HTMLElement/style", "style")}}-Eigenschaft des Elements gesetzt werden, werden jedoch nicht blockiert, was es Nutzern ermöglicht, Stile sicher über JavaScript zu manipulieren:

```js
document.querySelector("div").style.display = "none";
```

Diese Art der Manipulationen kann verhindert werden, indem JavaScript über die {{CSP("script-src")}} CSP-Direktive verboten wird.

### Unsichere Inline-Stile

> [!NOTE]
> Das Verbot von Inline-Stilen und Inline-Skripten ist einer der größten Sicherheitsgewinne, die CSP bietet. Wenn es jedoch absolut notwendig ist, sie zu verwenden, gibt es einige Mechanismen, die sie erlauben.

Um Inline-Stile zu erlauben, können `'unsafe-inline'`, ein Nonce-Quelle oder ein Hash-Quelle, die mit dem Inline-Block übereinstimmt, angegeben werden. Die folgende Content Security Policy erlaubt Inline-Stile wie das {{HTMLElement("style")}}-Element und das `style`-Attribut auf jedem Element:

```http
Content-Security-Policy: style-src 'unsafe-inline';
```

Das folgende {{HTMLElement("style")}}-Element und `style`-Attribut sind durch die Richtlinie erlaubt:

```html
<style>
  #inline-style {
    background: red;
  }
</style>

<div style="display:none">Foo</div>
```

Sie können eine Nonce-Quelle verwenden, um nur bestimmte Inline-Stilblöcke zu erlauben. Sie müssen einen zufälligen Nonce-Wert (mittels eines kryptographisch sicheren Zufallstoken-Generators) erzeugen und ihn in die Richtlinie aufnehmen. Es ist wichtig zu beachten, dass dieser Nonce-Wert dynamisch generiert werden muss, da er für jede HTTP-Anfrage einzigartig sein muss:

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

Alternativ können Sie Hashes aus Ihren Inline-Stilen erstellen. CSP unterstützt sha256, sha384 und sha512. Die **binäre** Form des Hashs muss mit base64 codiert werden. Sie können den Hash einer Zeichenkette über die Befehlszeile mit dem `openssl`-Programm erhalten:

```bash
echo -n "#inline-style { background: red; }" | openssl dgst -sha256 -binary | openssl enc -base64
```

Sie können eine Hash-Quelle verwenden, um nur bestimmte Inline-Stilblöcke zu erlauben:

```http
Content-Security-Policy: style-src 'sha256-ozBpjL6dxO8fsS4u6fwG1dFDACYvpNxYeBA6tzR+FY8='
```

Beim Generieren des Hashs sollten Sie die {{HTMLElement("style")}}-Tags nicht einschließen, und beachten Sie, dass Groß- und Kleinschreibung sowie Leerzeichen, einschließlich führender oder nachfolgender Leerzeichen, eine Rolle spielen.

```html
<style>
  #inline-style {
    background: red;
  }
</style>
```

### Unsichere Stilausdrücke

Der `'unsafe-eval'` Quellenausdruck steuert mehrere Stilmethode, die Stil-Deklarationen aus Zeichenketten erstellen. Wenn `'unsafe-eval'` nicht mit der `style-src` Direktive angegeben ist, werden die folgenden Methoden blockiert und haben keine Wirkung:

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
