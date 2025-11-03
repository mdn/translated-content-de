---
title: "Content-Security-Policy: script-src-attr-Direktive"
short-title: script-src-attr
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-attr
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-attr`**-Direktive gibt gültige Quellen für JavaScript-Inline-Event-Handler an.

Diese Direktive legt nur gültige Quellen für Inline-Skript-Event-Handler wie `onclick` fest. Sie gilt nicht für andere JavaScript-Quellen, die die Ausführung von Skripten auslösen können, wie z.B. URLs, die direkt in {{HTMLElement("script")}}-Elemente geladen werden und [XSLT-Stylesheets](/de/docs/Web/XML/XSLT). (Gültige Quellen können für alle JavaScript-Skriptquellen mit {{CSP("script-src")}} angegeben werden oder nur für `<script>`-Elemente mit {{CSP("script-src-elem")}}.)

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
      <th scope="row">{{CSP("default-src")}}-Fallback</th>
      <td>
        Ja.
        Ist diese Direktive nicht vorhanden, sucht der User-Agent nach der {{CSP("script-src")}}-Direktive, und falls beide fehlen, wird auf die <code>default-src</code>-Direktive zurückgegriffen.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: script-src-attr 'none';
Content-Security-Policy: script-src-attr <source-expression-list>;
```

Diese Direktive kann einen der folgenden Werte haben:

- `'none'`
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind folgende Quellausdruckswerte anwendbar:
    - [`'unsafe-hashes'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes)
    - [`'unsafe-inline'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-inline)
    - [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample)

`script-src-attr` kann in Verbindung mit {{CSP("script-src")}} verwendet werden und wird diese Direktive für Überprüfungen von Inline-Handlern überschreiben:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-attr <source>;
```

## Beispiele

### Verstoßfall

Angenommen, dieser CSP-Header:

```http
Content-Security-Policy: script-src-attr 'none'
```

…der folgende Inline-Event-Handler wird blockiert und nicht geladen oder ausgeführt:

```html
<button id="btn" onclick="doSomething()">Click me</button>
```

Beachten Sie, dass Sie Inline-Event-Handler im Allgemeinen durch [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe ersetzen sollten:

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
