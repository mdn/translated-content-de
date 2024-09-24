---
title: "CSP: script-src-attr"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src-attr
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Die HTTP-Direktive {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-attr`** gibt gültige Quellen für JavaScript-Inline-Ereignishandler an.

Diese Direktive legt nur gültige Quellen für Inline-Skriptereignishandler wie `onclick` fest. Sie gilt nicht für andere JavaScript-Quellen, die die Skriptausführung auslösen können, wie z.B. URLs, die direkt in {{HTMLElement("script")}}-Elemente geladen werden, und [XSLT-Stylesheets](/de/docs/Web/XSLT). (Gültige Quellen können für alle JavaScript-Skriptquellen mit {{CSP("script-src")}} angegeben werden oder nur für `<script>`-Elemente mit {{CSP("script-src-elem")}}.)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Direktiventyp</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Rückfall</th>
      <td>
        Ja.
        Wenn diese Direktive nicht vorhanden ist, sucht der Benutzeragent nach der Direktive {{CSP("script-src")}}, und wenn beide nicht vorhanden sind, fällt er auf die <code>default-src</code>-Direktive zurück.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `script-src-attr`-Richtlinie zugelassen werden:

```http
Content-Security-Policy: script-src-attr <source>;
Content-Security-Policy: script-src-attr <source> <source>;
```

`script-src-attr` kann in Verbindung mit {{CSP("script-src")}} verwendet werden und wird diese Direktive für Überprüfungen an Inline-Handlern überschreiben:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-attr <source>;
```

### Quellen

`<source>` kann einer der Werte sein, die in [CSP Source Values](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführt sind.

Beachten Sie, dass dieser Satz von Werten in allen {{Glossary("fetch directive", "fetch directives")}} (und einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verletzungsfall

Angenommen, dieser CSP-Header ist gesetzt:

```http
Content-Security-Policy: script-src-attr 'none'
```

…der folgende Inline-Ereignishandler wird blockiert und nicht geladen oder ausgeführt:

```html
<button id="btn" onclick="doSomething()"></button>
```

Beachten Sie, dass Inline-Ereignishandler generell durch {{domxref("EventTarget.addEventListener", "addEventListener")}}-Aufrufe ersetzt werden sollten:

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
