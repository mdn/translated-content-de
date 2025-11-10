---
title: "Content-Security-Policy: script-src-elem-Direktive"
short-title: script-src-elem
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-elem
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-elem`**-Direktive gibt gültige Quellen für JavaScript-{{HTMLElement("script")}}-Elemente an.

Diese Direktive spezifiziert nur gültige Quellen in `<script>`-Elementen (sowohl für Skriptanfragen als auch für Skriptblöcke).
Sie gilt nicht für andere JavaScript-Quellen, die eine Skriptausführung auslösen können, wie z.B. Inline-Skriptereignishandler (`onclick`), Skriptausführungsmethoden [abhängig von der "unsafe-eval"-Prüfung](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_eval_expressions), und [XSLT Stylesheets](/de/docs/Web/XML/XSLT).
(Gültige Quellen für alle JavaScript-Skriptquellen können mit {{CSP("script-src")}} angegeben werden, oder nur für Inline-Skripthandler mit {{CSP("script-src-attr")}}.)

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
        Wenn diese Direktive fehlt, sucht der User-Agent nach der {{CSP("script-src")}}-Direktive, und wenn beide fehlen, fällt er auf die <code>default-src</code>-Direktive zurück.
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
  - : Es dürfen keine Ressourcen dieses Typs geladen werden. Die einfachen Anführungszeichen sind zwingend erforderlich.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _Source-Expression_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Source-Expressions übereinstimmen. Für diese Direktive sind alle in [Fetch-Direktivensyntax](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) aufgelisteten Source-Expression-Werte anwendbar, mit Ausnahme von [`'unsafe-hashes'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes).

`script-src-elem` kann in Verbindung mit {{CSP("script-src")}} verwendet werden:

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

…das folgende Skript wird blockiert und nicht geladen oder ausgeführt:

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
