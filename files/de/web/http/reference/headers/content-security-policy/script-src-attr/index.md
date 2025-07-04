---
title: "Content-Security-Policy: script-src-attr Richtlinie"
short-title: script-src-attr
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-attr
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-attr`** Richtlinie legt gültige Quellen für JavaScript-Inline-Event-Handler fest.

Diese Richtlinie gibt nur gültige Quellen für Inline-Script-Event-Handler wie `onclick` an. Sie gilt nicht für andere JavaScript-Quellen, die Skriptausführung auslösen können, wie URLs, die direkt in {{HTMLElement("script")}}-Elemente geladen werden, und [XSLT-Stylesheets](/de/docs/Web/XML/XSLT).
(Gültige Quellen können für alle JavaScript-Skriptquellen mit {{CSP("script-src")}} festgelegt werden oder nur für `<script>`-Elemente mit {{CSP("script-src-elem")}}.)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Richtlinientyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Richtlinie")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja.
        Wenn diese Richtlinie fehlt, wird der User-Agent nach der {{CSP("script-src")}}-Richtlinie suchen, und wenn beide fehlen, auf die <code>default-src</code>-Richtlinie zurückgreifen.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: script-src-attr 'none';
Content-Security-Policy: script-src-attr <source-expression-list>;
```

Diese Richtlinie kann einen der folgenden Werte haben:

- `'none'`
  - : Es dürfen keine Ressourcen dieses Typs geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellen übereinstimmen. Für diese Richtlinie sind die folgenden Quellausdruckswerte anwendbar:
    - [`'unsafe-hashes'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes)
    - [`'unsafe-inline'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-inline)
    - [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample)

`script-src-attr` kann zusammen mit {{CSP("script-src")}} verwendet werden und wird diese Richtlinie für Prüfungen an Inline-Handlern überschreiben:

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

...wird der folgende Inline-Event-Handler blockiert und weder geladen noch ausgeführt:

```html
<button id="btn" onclick="doSomething()"></button>
```

Normalerweise sollten Sie Inline-Event-Handler durch Aufrufe von [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) ersetzen:

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
