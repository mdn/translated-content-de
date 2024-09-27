---
title: "CSP: style-src"
slug: Web/HTTP/Headers/Content-Security-Policy/style-src
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der HTTP-Header {{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src`** Direktiv legt gültige Quellen für Stylesheets fest.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>[Fetch directive](/de/docs/Glossary/Fetch_directive)</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn dieses Direktive fehlt, sucht der Benutzeragent nach dem
        <code>default-src</code> Direktive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Für die `style-src`-Richtlinie können eine oder mehrere Quellen erlaubt sein:

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src <source> <source>;
```

### Quellen

`<source>` kann jeder der in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgelisteten Werte sein.

Beachten Sie, dass diese gleiche Menge von Werten in allen [Fetch-Direktiven](/de/docs/Glossary/fetch_directive) (und einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verletzungsfälle

Angenommen, dieser CSP-Header ist gegeben:

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

sowie Styles, die mit dem {{HTTPHeader("Link")}}-Header geladen werden:

```http
Link: <https://not-example.com/styles/stylesheet.css>;rel=stylesheet
```

Inline-Stilattributen werden ebenfalls blockiert:

```html
<div style="display:none">Foo</div>
```

Ebenso wie Styles, die in JavaScript angewendet werden, indem das `style`-Attribut direkt gesetzt wird oder indem [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) gesetzt wird:

```js
document.querySelector("div").setAttribute("style", "display:none;");
document.querySelector("div").style.cssText = "display:none;";
```

Styles-Eigenschaften, die direkt auf der [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements gesetzt werden, werden jedoch nicht blockiert, sodass Benutzer Stile sicher über JavaScript manipulieren können:

```js
document.querySelector("div").style.display = "none";
```

Diese Arten von Manipulationen können durch das Blockieren von JavaScript über die {{CSP("script-src")}} CSP-Direktive verhindert werden.

### Unsichere Inline-Stile

> [!NOTE]
> Das Blockieren von Inline-Stilen und Inline-Skripten ist einer der größten Sicherheitsgewinne, die CSP bietet. Wenn Sie sie jedoch unbedingt verwenden müssen, gibt es einige Mechanismen, die dies ermöglichen.

Um Inline-Stile zu erlauben, kann `'unsafe-inline'`, eine Nonce-Quelle oder eine Hash-Quelle angegeben werden, die dem Inline-Block entspricht.
Die folgende Content-Security-Policy erlaubt Inline-Stiles wie das {{HTMLElement("style")}}-Element und das `style`-Attribut an beliebigen Elementen:

```http
Content-Security-Policy: style-src 'unsafe-inline';
```

Das folgende {{HTMLElement("style")}}-Element und `style`-Attribut wird von der Richtlinie erlaubt:

```html
<style>
  #inline-style {
    background: red;
  }
</style>

<div style="display:none">Foo</div>
```

Sie können eine Nonce-Quelle verwenden, um nur bestimmte Inline-Stile zuzulassen.
Sie müssen einen zufälligen Nonce-Wert generieren (unter Verwendung eines kryptografisch sicheren Zufallstoken-Generators) und ihn in die Richtlinie einbinden.
Es ist wichtig zu beachten, dass dieser Nonce-Wert dynamisch generiert werden muss, da er für jede HTTP-Anfrage einzigartig sein muss:

```http
Content-Security-Policy: style-src 'nonce-2726c7f26c'
```

Sie müssen denselben Nonce für das {{HTMLElement("style")}}-Element setzen:

```html
<style nonce="2726c7f26c">
  #inline-style {
    background: red;
  }
</style>
```

Alternativ können Sie Hashes Ihrer Inline-Stile erstellen. CSP unterstützt sha256, sha384 und sha512. Die **binäre** Form des Hashes muss mit Base64 codiert werden. Sie können den Hash eines Strings auf der Kommandozeile mit dem `openssl`-Programm erhalten:

```bash
echo -n "#inline-style { background: red; }" | openssl dgst -sha256 -binary | openssl enc -base64
```

Sie können eine Hash-Quelle verwenden, um nur bestimmte Inline-Stilblöcke zuzulassen:

```http
Content-Security-Policy: style-src 'sha256-ozBpjL6dxO8fsS4u6fwG1dFDACYvpNxYeBA6tzR+FY8='
```

Beim Erzeugen des Hashs, schließen Sie die {{HTMLElement("style")}}-Tags nicht ein und beachten Sie, dass Groß-/Kleinschreibung und Leerzeichen, einschließlich führender oder nachfolgender Leerzeichen, eine Rolle spielen.

```html
<style>
  #inline-style {
    background: red;
  }
</style>
```

### Unsichere Stil-Ausdrücke

Der `'unsafe-eval'` Quellen-Ausdruck steuert mehrere Stil-Methoden, die Stil-Deklarationen aus Strings erzeugen. Wenn `'unsafe-eval'` nicht mit der `style-src`-Direktive angegeben wird, werden die folgenden Methoden blockiert und haben keine Wirkung:

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
