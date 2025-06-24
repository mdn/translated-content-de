---
title: "Content-Security-Policy: `script-src-elem`-Direktive"
short-title: script-src-elem
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-elem
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}}-Direktive **`script-src-elem`** legt gültige Quellen für JavaScript-`<script>`-Elemente fest.

Diese Direktive spezifiziert nur gültige Quellen in `<script>`-Elementen (sowohl Skriptanforderungen als auch -blöcke). Sie gilt nicht für andere JavaScript-Quellen, die Script-Ausführung auslösen können, wie zum Beispiel Inlinescript-Ereignishandler (`onclick`), Script-Ausführungsmethoden [eingeschränkt durch die "unsafe-eval"-Prüfung](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_eval_expressions) und [XSLT-Stylesheets](/de/docs/Web/XML/XSLT). (Gültige Quellen können für alle JavaScript-Skriptquellen mit {{CSP("script-src")}} spezifiziert werden oder nur für Inline-Scripthandler mit {{CSP("script-src-attr")}}.)

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
        Ist diese Direktive nicht vorhanden, sucht der Benutzeragent nach der {{CSP("script-src")}}-Direktive, und wenn beide nicht vorhanden sind, wird auf die <code>default-src</code>-Direktive zurückgegriffen.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: script-src-elem 'none';
Content-Security-Policy: script-src-elem <source-expression-list>;
```

Diese Direktive kann einen der folgenden Werte haben:

- `'none'`
  - : Es dürfen keine Ressourcen dieses Typs geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind alle in der [Fetch-Direktiv-Syntax](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) aufgelisteten Source Expression-Werte gültig, mit Ausnahme von [`'unsafe-hashes'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes).

`script-src-elem` kann in Verbindung mit {{CSP("script-src")}} verwendet werden:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-elem <source>;
```

## Beispiele

### Verstoßcase

Angenommen, dieser CSP-Header:

```http
Content-Security-Policy: script-src-elem https://example.com/
```

…so wird das folgende Skript blockiert und nicht geladen oder ausgeführt:

```html
<script src="https://not-example.com/js/library.js"></script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("script")}}
- {{CSP("script-src")}}
- {{CSP("script-src-attr")}}
