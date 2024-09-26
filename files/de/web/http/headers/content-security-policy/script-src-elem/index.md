---
title: "CSP: script-src-elem"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src-elem
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-elem`**-Direktive legt gültige Quellen für JavaScript-{{HTMLElement("script")}}-Elemente fest.

Diese Direktive spezifiziert nur gültige Quellen in `<script>`-Elementen (sowohl Skriptanfragen als auch -blöcke). Sie gilt nicht für andere JavaScript-Quellen, die Skriptausführung auslösen können, wie inline-Skript-Event-Handler (`onclick`), Skriptausführungsmethoden [mit der Prüfung "unsafe-eval"](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_eval_expressions), und [XSLT Stylesheets](/de/docs/Web/XSLT). (Gültige Quellen können für alle JavaScript-Skriptquellen mit {{CSP("script-src")}} oder nur für Inline-Skript-Handler mit {{CSP("script-src-attr")}} spezifiziert werden.)

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
      <th scope="row">{{CSP("default-src")}} Rückfall</th>
      <td>
        Ja. Wenn diese Direktive fehlt, sucht der Benutzeragent nach der {{CSP("script-src")}}-Direktive, und wenn beide fehlen, fällt er auf die <code>default-src</code>-Direktive zurück.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Einer oder mehrere Quellen können für die `script-src-elem`-Richtlinie erlaubt werden:

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

`<source>` kann einer der in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführten Werte sein.

Bitte beachten Sie, dass dieser gleiche Satz von Werten in allen {{Glossary("fetch directive", "fetch directives")}} (und einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verletzungsfall

Angenommen, dieser CSP-Header:

```http
Content-Security-Policy: script-src-elem https://example.com/
```

…das folgende Skript wird blockiert und wird nicht geladen oder ausgeführt:

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
