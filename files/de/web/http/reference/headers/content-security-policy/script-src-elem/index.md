---
title: "Content-Security-Policy: script-src-elem-Direktive"
short-title: script-src-elem
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-elem
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-elem`**-Direktive spezifiziert gültige Quellen für JavaScript-{{HTMLElement("script")}}-Elemente.

Diese Direktive gibt nur gültige Quellen in `<script>`-Elementen an (sowohl Skriptanfragen als auch Blöcke).
Sie gilt nicht für andere JavaScript-Quellen, die die Skriptausführung auslösen können, wie z.B. Inline-Skript-Ereignishandler (`onclick`), Skriptausführungsmethoden [die der Prüfung "unsafe-eval" unterliegen](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_eval_expressions), und [XSLT-Stylesheets](/de/docs/Web/XML/XSLT).
(Gültige Quellen können für alle JavaScript-Skriptquellen mit {{CSP("script-src")}} angegeben werden oder nur für Inline-Skripthandler mit {{CSP("script-src-attr")}}.)

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
        Falls diese Direktive fehlt, wird der User-Agent die {{CSP("script-src")}}-Direktive suchen, und wenn beide fehlen, auf die <code>default-src</code>-Direktive zurückfallen.
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
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _Quell-Ausdrücken_. Ressourcen dieses Typs können geladen werden, wenn sie mit einem der angegebenen Quell-Ausdrücke übereinstimmen. Für diese Direktive sind alle der in der [Fetch-Direktiv-Syntax](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) aufgeführten Quell-Ausdrücke anwendbar, mit Ausnahme von [`'unsafe-hashes'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes).

`script-src-elem` kann in Verbindung mit {{CSP("script-src")}} verwendet werden:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-elem <source>;
```

## Beispiele

### Verletzungsfall

Bei folgendem CSP-Header:

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
