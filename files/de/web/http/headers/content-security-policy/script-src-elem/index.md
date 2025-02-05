---
title: "CSP: script-src-elem"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src-elem
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{HTTPSidebar}}

Die HTTP-Header-{{HTTPHeader("Content-Security-Policy")}}-Richtlinie (CSP) **`script-src-elem`** gibt gültige Quellen für JavaScript-{{HTMLElement("script")}}-Elemente an.

Diese Richtlinie spezifiziert nur gültige Quellen in `<script>`-Elementen (sowohl Skriptanfragen als auch Blöcke).
Sie gilt nicht für andere JavaScript-Quellen, die eine Skriptausführung auslösen können, wie z. B. Inline-Skriptereignishandler (`onclick`), Skriptausführungsmethoden [abhängig von der "unsafe-eval"-Prüfung](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_eval_expressions) und [XSLT-Stylesheets](/de/docs/Web/XML/XSLT).
(Gültige Quellen können für alle JavaScript-Skriptquellen mit {{CSP("script-src")}} oder nur für Inline-Skripthandler mit {{CSP("script-src-attr")}} angegeben werden.)

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
      <th scope="row">{{CSP("default-src")}}-Fallback</th>
      <td>
        Ja.
        Wenn diese Richtlinie fehlt, sucht der User-Agent nach der {{CSP("script-src")}}-Richtlinie. Wenn beide fehlen, wird auf die <code>default-src</code>-Richtlinie zurückgegriffen.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: script-src-elem 'none';
Content-Security-Policy: script-src-elem <source-expression-list>;
```

Diese Richtlinie kann einen der folgenden Werte aufweisen:

- `'none'`
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind zwingend erforderlich.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _Source-Expression_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Source-Expressions übereinstimmen. Für diese Richtlinie sind alle im [Fetch-Richtlinien-Syntax](/de/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directive_syntax) aufgeführten Source-Expression-Werte anwendbar, mit Ausnahme von [`'unsafe-hashes'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-hashes).

`script-src-elem` kann in Verbindung mit {{CSP("script-src")}} verwendet werden:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-elem <source>;
```

## Beispiele

### Verletzungsfall

Angenommen, dieser CSP-Header ist gesetzt:

```http
Content-Security-Policy: script-src-elem https://example.com/
```

…dann wird das folgende Skript blockiert und nicht geladen oder ausgeführt:

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
