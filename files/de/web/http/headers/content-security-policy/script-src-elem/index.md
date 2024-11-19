---
title: "CSP: script-src-elem"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src-elem
l10n:
  sourceCommit: 6368e2b112a343fa00ae1a8cf51ceb0b0b845834
---

{{HTTPSidebar}}

Der HTTP-Header {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-elem`**-Direktive gibt gültige Quellen für JavaScript-{{HTMLElement("script")}}-Elemente an.

Diese Direktive spezifiziert nur gültige Quellen in `<script>`-Elementen (sowohl Skriptanfragen als auch Blockierungen).
Sie gilt nicht für andere JavaScript-Quellen, die Skriptausführung auslösen können, wie Inline-Skript-Ereignishandler (`onclick`), Skriptausführungsmethoden [beschränkt durch den Check "unsafe-eval"](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_eval_expressions) und [XSLT-Stylesheets](/de/docs/Web/XSLT).
(Gültige Quellen können für alle JavaScript-Skriptquellen mit {{CSP("script-src")}} oder nur für Inline-Skripthandler mit {{CSP("script-src-attr")}} angegeben werden.)

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
      <th scope="row">{{CSP("default-src")}} Rückfall</th>
      <td>
        Ja.
        Ist diese Direktive nicht vorhanden, sucht der Benutzeragent nach der {{CSP("script-src")}}-Direktive und fällt, wenn beide fehlen, auf die <code>default-src</code>-Direktive zurück.
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

  - : Eine durch Leerzeichen getrennte Liste von _Source Expression_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Source Expressions übereinstimmen. Für diese Direktive sind alle in der [Fetch-Direktiven-Syntax](/de/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directive_syntax) aufgeführten Source Expression-Werte anwendbar, mit Ausnahme von [`'unsafe-hashes'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-hashes).

`script-src-elem` kann zusammen mit {{CSP("script-src")}} verwendet werden:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-elem <source>;
```

## Beispiele

### Verletzungsfall

Angenommen, dieser CSP-Header:

```http
Content-Security-Policy: script-src-elem https://example.com/
```

…wird das folgende Skript blockiert und nicht geladen oder ausgeführt:

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
