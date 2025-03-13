---
title: "CSP: script-src-elem"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-elem
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-elem`** Direktive gibt gültige Quellen für JavaScript {{HTMLElement("script")}}-Elemente an.

Diese Direktive legt nur gültige Quellen in `<script>`-Elementen fest (sowohl Skriptanforderungen als auch -blöcke).
Sie bezieht sich nicht auf andere JavaScript-Quellen, die Skriptausführung auslösen können, wie Inline-Skript-Ereignishandler (`onclick`), Skriptausführungsmethoden [begrenzt durch die "unsafe-eval"-Überprüfung](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_eval_expressions), und [XSLT Stile](/de/docs/Web/XML/XSLT).
(Gültige Quellen können für alle JavaScript-Skriptquellen mit {{CSP("script-src")}}, oder nur für Inline-Skripthandler mit {{CSP("script-src-attr")}} festgelegt werden.)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Art der Direktive</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Direktive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja.
        Sollte diese Direktive fehlen, sucht der User-Agent nach der {{CSP("script-src")}} Direktive und fällt, wenn beide fehlen, auf die <code>default-src</code>-Direktive zurück.
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

  - : Eine durch Leerzeichen getrennte Liste von _source expression_ Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind alle Quellausdruckswerte, die in der [Fetch-Direktivsyntax](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) aufgelistet sind, anwendbar, mit Ausnahme von [`'unsafe-hashes'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes).

`script-src-elem` kann in Verbindung mit {{CSP("script-src")}} verwendet werden:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-elem <source>;
```

## Beispiele

### Fall von Verstoß

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
