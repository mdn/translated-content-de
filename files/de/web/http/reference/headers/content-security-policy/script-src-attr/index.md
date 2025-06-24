---
title: "Content-Security-Policy: script-src-attr Richtlinie"
short-title: script-src-attr
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-attr
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-attr`** Richtlinie gibt gültige Quellen für JavaScript Inline-Ereignishandler an.

Diese Richtlinie spezifiziert nur gültige Quellen für Inline-Skript-Ereignishandler wie `onclick`.
Sie gilt nicht für andere JavaScript-Quellen, die Skriptausführung auslösen können, wie z. B. URLs, die direkt in {{HTMLElement("script")}} Elemente geladen werden und [XSLT-Stile](/de/docs/Web/XML/XSLT).
(Gültige Quellen können für alle JavaScript-Skriptquellen mit {{CSP("script-src")}} oder nur für `<script>` Elemente mit {{CSP("script-src-elem")}} spezifiziert werden.)

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
      <th scope="row">{{CSP("default-src")}} Rückfall</th>
      <td>
        Ja.
        Wenn diese Richtlinie fehlt, sucht der Benutzeragent nach der {{CSP("script-src")}} Richtlinie, und wenn beide fehlen, wird auf die <code>default-src</code> Richtlinie zurückgegriffen.
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
  - : Es dürfen keine Ressourcen dieses Typs geladen werden. Die einfachen Anführungszeichen sind zwingend erforderlich.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _Quellausdruck_ Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie einem der angegebenen Quellausdrücke entsprechen. Für diese Richtlinie sind die folgenden Quellausdruckswerte anwendbar:
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

Bei diesem CSP-Header:

```http
Content-Security-Policy: script-src-attr 'none'
```

…wird der folgende Inline-Ereignishandler blockiert und nicht geladen oder ausgeführt:

```html
<button id="btn" onclick="doSomething()"></button>
```

Beachten Sie, dass Sie Inline-Ereignishandler im Allgemeinen durch [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) Aufrufe ersetzen sollten:

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
