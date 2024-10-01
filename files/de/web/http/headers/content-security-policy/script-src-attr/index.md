---
title: "CSP: script-src-attr"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src-attr
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der HTTP-Header {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-attr`**-Direktive gibt gültige Quellen für JavaScript-Inline-Event-Handler an.

Diese Direktive legt nur gültige Quellen für Inline-Script-Event-Handler wie `onclick` fest.
Sie gilt nicht für andere JavaScript-Quellen, die das Ausführen von Skripten auslösen können, wie URLs, die direkt in {{HTMLElement("script")}}-Elemente geladen werden und [XSLT-Stile](/de/docs/Web/XSLT).
(Gültige Quellen können für alle JavaScript-Skriptquellen mit {{CSP("script-src")}} oder nur für `<script>`-Elemente mit {{CSP("script-src-elem")}} angegeben werden.)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Direktive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja.
        Wenn diese Direktive fehlt, sucht der User Agent nach der {{CSP("script-src")}}-Direktive, und falls beide fehlen, erfolgt ein Fallback zur <code>default-src</code>-Direktive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Es können eine oder mehrere Quellen für die `script-src-attr`-Richtlinie erlaubt werden:

```http
Content-Security-Policy: script-src-attr <source>;
Content-Security-Policy: script-src-attr <source> <source>;
```

`script-src-attr` kann in Verbindung mit {{CSP("script-src")}} verwendet werden und überschreibt diese Direktive für Prüfungen an Inline-Handlern:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-attr <source>;
```

### Quellen

`<source>` kann einer der in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführten Werte sein.

Beachten Sie, dass dieselbe Menge von Werten in allen {{Glossary("fetch_directive", "Fetch-Direktiven")}} (und einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verletzungsfall

Angenommen, dieser CSP-Header:

```http
Content-Security-Policy: script-src-attr 'none'
```

…der folgende Inline-Event-Handler wird blockiert und nicht geladen oder ausgeführt:

```html
<button id="btn" onclick="doSomething()"></button>
```

Beachten Sie, dass Sie Inline-Event-Handler generell durch Aufrufe von [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) ersetzen sollten:

```js
document.getElementById("btn").addEventListener("click", doSomething);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("script")}}
- {{CSP("script-src")}}
- {{CSP("script-src-elem")}}
