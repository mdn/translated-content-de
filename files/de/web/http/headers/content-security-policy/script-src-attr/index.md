---
title: "CSP: script-src-attr"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src-attr
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-attr`**-Header gibt gültige Quellen für JavaScript-Inline-Event-Handler an.

Diese Direktive spezifiziert nur gültige Quellen für Inline-Skript-Event-Handler wie `onclick`.
Sie gilt nicht für andere JavaScript-Quellen, die die Skriptausführung auslösen können, wie URLs, die direkt in {{HTMLElement("script")}}-Elemente und [XSLT-Stylesheets](/de/docs/Web/XSLT) geladen werden.
(Gültige Quellen können für alle JavaScript-Skriptquellen mit {{CSP("script-src")}} oder nur für `<script>`-Elemente mit {{CSP("script-src-elem")}} angegeben werden.)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>[Fetch-Direktive](/de/docs/Glossary/Fetch_directive)</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja.
        Falls diese Direktive fehlt, prüft der User-Agent auf die {{CSP("script-src")}}-Direktive, und falls auch diese fehlt, erfolgt ein Fallback auf die <code>default-src</code>-Direktive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `script-src-attr`-Richtlinie erlaubt werden:

```http
Content-Security-Policy: script-src-attr <source>;
Content-Security-Policy: script-src-attr <source> <source>;
```

`script-src-attr` kann in Verbindung mit {{CSP("script-src")}} verwendet werden und überschreibt diese Direktive für Prüfungen von Inline-Handlern:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-attr <source>;
```

### Quellen

`<source>` kann einer der in den [CSP-Quellenwerten](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführten Werte sein.

Bitte beachten Sie, dass dieser gleiche Satz von Werten in allen [Fetch-Direktiven](/de/docs/Glossary/fetch_directive) (und einer [Reihe anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verletzungsfall

Gegeben dieser CSP-Header:

```http
Content-Security-Policy: script-src-attr 'none'
```

…wird der folgende Inline-Event-Handler blockiert und nicht geladen oder ausgeführt:

```html
<button id="btn" onclick="doSomething()"></button>
```

Beachten Sie, dass Sie Inline-Event-Handler im Allgemeinen durch Aufrufe von [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) ersetzen sollten:

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
