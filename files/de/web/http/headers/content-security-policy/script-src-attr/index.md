---
title: "CSP: script-src-attr"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src-attr
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Das HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-attr`**-Direktive gibt gültige Quellen für JavaScript Inline-Event-Handler an.

Diese Direktive spezifiziert nur gültige Quellen für Inline-Skript-Event-Handler wie `onclick`.
Sie gilt nicht für andere JavaScript-Quellen, die die Ausführung von Skripten auslösen können, wie URLs, die direkt in {{HTMLElement("script")}}-Elemente geladen werden, und [XSLT-Stylesheets](/de/docs/Web/XSLT).
(Gültige Quellen können für alle JavaScript-Skriptquellen mit {{CSP("script-src")}} angegeben werden oder nur für `<script>`-Elemente mit {{CSP("script-src-elem")}}.)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja.
        Wenn diese Direktive fehlt, sucht der User-Agent nach der {{CSP("script-src")}}-Direktive, und wenn beide fehlen, wird auf die <code>default-src</code>-Direktive zurückgegriffen.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `script-src-attr` Richtlinie erlaubt werden:

```http
Content-Security-Policy: script-src-attr <source>;
Content-Security-Policy: script-src-attr <source> <source>;
```

`script-src-attr` kann zusammen mit {{CSP("script-src")}} verwendet werden und wird diese Direktive bei Prüfungen von Inline-Handlern überschreiben:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-attr <source>;
```

### Quellen

`<source>` kann einer der Werte sein, die in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführt sind.

Beachten Sie, dass dieser gleiche Satz von Werten in allen {{Glossary("fetch directive", "fetch directives")}} (und einer [Reihe von anderen Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verstoßfall

Angenommen, dieser CSP-Header:

```http
Content-Security-Policy: script-src-attr 'none'
```

…wird der folgende Inline-Event-Handler blockiert und nicht geladen oder ausgeführt:

```html
<button id="btn" onclick="doSomething()"></button>
```

Beachten Sie, dass Sie im Allgemeinen Inline-Event-Handler durch {{domxref("EventTarget.addEventListener", "addEventListener")}}-Aufrufe ersetzen sollten:

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
