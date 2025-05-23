---
title: "Content-Security-Policy: script-src-attr Direktive"
short-title: script-src-attr
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-attr
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-attr`**-Direktive gibt gültige Quellen für JavaScript-Inline-Ereignishandler an.

Diese Direktive spezifiziert nur gültige Quellen für Inline-Skript-Ereignishandler wie `onclick`.
Sie gilt nicht für andere JavaScript-Quellen, die eine Skriptausführung auslösen können, wie URLs, die direkt in {{HTMLElement("script")}}-Elemente und [XSLT-Stylesheets](/de/docs/Web/XML/XSLT) geladen werden.
(Gültige Quellen können für alle JavaScript-Skriptquellen mit {{CSP("script-src")}} angegeben werden, oder nur für `<script>`-Elemente mit {{CSP("script-src-elem")}}.)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Direktiventyp</th>
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

  - : Eine durch Leerzeichen getrennte Liste von _Quellausdruck_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind die folgenden Quellausdruckswerte anwendbar:

    - [`'unsafe-hashes'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes)
    - [`'unsafe-inline'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-inline)
    - [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample)

`script-src-attr` kann in Verbindung mit {{CSP("script-src")}} verwendet werden und wird diese Direktive bei Prüfungen von Inline-Handlern überschreiben:

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

…wird der folgende Inline-Ereignishandler blockiert und nicht geladen oder ausgeführt:

```html
<button id="btn" onclick="doSomething()"></button>
```

Beachten Sie, dass Inline-Ereignishandler im Allgemeinen durch [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe ersetzt werden sollten:

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
