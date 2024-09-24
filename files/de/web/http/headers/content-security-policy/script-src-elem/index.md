---
title: "CSP: script-src-elem"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src-elem
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Das HTTP-{{HTTPHeader("Content-Security-Policy")}}-(CSP)-**`script-src-elem`**-Direktiv gibt gültige Quellen für JavaScript-{{HTMLElement("script")}}-Elemente an.

Dieses Direktive gibt nur gültige Quellen in `<script>`-Elementen an (sowohl für Skriptanfragen als auch für Skriptblöcke). Es gilt nicht für andere JavaScript-Quellen, die Skriptausführung auslösen können, wie z.B. Inline-Skript-Ereignishandler (`onclick`), Skriptausführungsmethoden [basierend auf der "unsafe-eval"-Prüfung](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_eval_expressions) und [XSLT-Stylesheets](/de/docs/Web/XSLT). (Gültige Quellen können für alle JavaScript-Skriptquellen mit {{CSP("script-src")}} oder nur für Inline-Skript-Handler mit {{CSP("script-src-attr")}} angegeben werden.)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja.
        Wenn dieses Direktive fehlt, sucht der User Agent nach dem {{CSP("script-src")}}-Direktiv. Wenn beide fehlen, wird auf das <code>default-src</code>-Direktiv zurückgegriffen.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `script-src-elem`-Richtlinie zugelassen werden:

```http
Content-Security-Policy: script-src-elem <source>;
Content-Security-Policy: script-src-elem <source> <source>;
```

`script-src-elem` kann in Verbindung mit {{CSP("script-src")}} verwendet werden:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-elem <source>;
```

### Quellen

`<source>` kann einer der Werte sein, die in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgelistet sind.

Beachten Sie, dass diese gleiche Menge an Werten in allen {{Glossary("fetch directive", "fetch directives")}} (und in einer [Reihe anderer Direktivs](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verstoßfall

Angenommen, dieser CSP-Header wird verwendet:

```http
Content-Security-Policy: script-src-elem https://example.com/
```

… wird das folgende Skript blockiert und nicht geladen oder ausgeführt:

```html
<script src="https://not-example.com/js/library.js"></script>
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("script")}}
- {{CSP("script-src")}}
- {{CSP("script-src-attr")}}
