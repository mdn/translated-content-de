---
title: "CSP: script-src-attr"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-attr
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Die HTTP-Richtlinie {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-attr`** legt gültige Quellen für JavaScript-Inline-Event-Handler fest.

Diese Richtlinie legt nur gültige Quellen für Inline-Skript-Event-Handler wie `onclick` fest.
Sie gilt nicht für andere JavaScript-Quellen, die Skriptausführung auslösen können, wie URLs, die direkt in {{HTMLElement("script")}}-Elemente und [XSLT-Stylesheets](/de/docs/Web/XML/XSLT) geladen werden.
(Gültige Quellen können für alle JavaScript-Skriptquellen mit {{CSP("script-src")}} oder nur für `<script>`-Elemente mit {{CSP("script-src-elem")}} festgelegt werden.)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Richtlinientyp</th>
      <td>{{Glossary("Fetch_directive", "Abrufrichtlinie")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja.
        Ist diese Richtlinie nicht vorhanden, sucht der User-Agent nach der {{CSP("script-src")}}-Richtlinie, und wenn beide fehlen, wird auf die <code>default-src</code>-Richtlinie zurückgegriffen.
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
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _Source-Expressions_. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einer der angegebenen Source-Expressions übereinstimmen. Für diese Richtlinie sind folgende Source-Expressions anwendbar:

    - [`'unsafe-hashes'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes)
    - [`'unsafe-inline'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-inline)
    - [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample)

`script-src-attr` kann in Verbindung mit {{CSP("script-src")}} verwendet werden und wird diese Richtlinie für Prüfungen von Inline-Handlern überschreiben:

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

… dann wird der folgende Inline-Event-Handler blockiert und weder geladen noch ausgeführt:

```html
<button id="btn" onclick="doSomething()"></button>
```

Beachten Sie, dass Sie im Allgemeinen Inline-Event-Handler durch [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe ersetzen sollten:

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
