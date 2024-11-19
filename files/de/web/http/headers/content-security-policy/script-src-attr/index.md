---
title: "CSP: script-src-attr"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src-attr
l10n:
  sourceCommit: 6368e2b112a343fa00ae1a8cf51ceb0b0b845834
---

{{HTTPSidebar}}

Das HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-attr`**-Direktive gibt gültige Quellen für JavaScript-Inline-Event-Handler an.

Diese Direktive legt nur gültige Quellen für Inline-Skript-Event-Handler wie `onclick` fest.
Sie gilt nicht für andere JavaScript-Quellen, die die Skriptausführung auslösen können, wie URLs, die direkt in {{HTMLElement("script")}}-Elemente und [XSLT-Stylesheets](/de/docs/Web/XSLT) geladen werden.
(Gültige Quellen können für alle JavaScript-Skriptquellen mit {{CSP("script-src")}} angegeben werden, oder nur für `<script>`-Elemente mit {{CSP("script-src-elem")}}.)

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
        Wenn diese Direktive fehlt, sucht der User-Agent nach der {{CSP("script-src")}}-Direktive, und wenn beide fehlen, wird auf die <code>default-src</code>-Direktive zurückgegriffen.
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

  - : Eine durch Leerzeichen getrennte Liste von _Quellen-Ausdrucks-Werten_. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellen-Ausdrücke übereinstimmen. Für diese Direktive sind die folgenden Quellen-Ausdruckswerte anwendbar:

    - [`'unsafe-hashes'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-hashes)
    - [`'unsafe-inline'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-inline)
    - [`'report-sample'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#report-sample)

`script-src-attr` kann zusammen mit {{CSP("script-src")}} verwendet werden und wird diese Direktive bei Überprüfungen von Inline-Handlern überschreiben:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-attr <source>;
```

## Beispiele

### Verletzungsfall

Angenommen dieses CSP-Header:

```http
Content-Security-Policy: script-src-attr 'none'
```

…wird der folgende Inline-Event-Handler blockiert und nicht geladen oder ausgeführt:

```html
<button id="btn" onclick="doSomething()"></button>
```

Beachten Sie, dass Sie im Allgemeinen Inline-Event-Handler durch Aufrufe von [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) ersetzen sollten:

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
