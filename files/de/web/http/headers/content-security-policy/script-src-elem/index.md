---
title: "CSP: script-src-elem"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src-elem
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-elem`** Direktive legt gültige Quellen für JavaScript-{{HTMLElement("script")}}-Elemente fest.

Diese Direktive legt nur gültige Quellen in `<script>`-Elementen fest (sowohl Script-Anfragen als auch -Blöcke). Sie gilt nicht für andere JavaScript-Quellen, die die Ausführung von Skripten auslösen können, wie z.B. inline Skript-Event-Handler (`onclick`), Skript-Ausführungsmethoden [gesteuert durch die "unsafe-eval"-Überprüfung](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_eval_expressions) und [XSLT-Stylesheets](/de/docs/Web/XSLT). (Gültige Quellen können für alle JavaScript-Skriptquellen mit {{CSP("script-src")}} oder nur für inline Skript-Handler mit {{CSP("script-src-attr")}} angegeben werden.)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>[Fetch-Direktive](/de/docs/Glossary/Fetch_directive)</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja.
        Wenn diese Direktive fehlt, sucht der User-Agent nach der {{CSP("script-src")}} Direktive, und wenn beide fehlen, fällt er auf die <code>default-src</code> Direktive zurück.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Für die Richtlinie `script-src-elem` können eine oder mehrere Quellen erlaubt werden:

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

`<source>` kann einer der in den [CSP-Quellenwerten](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführten Werte sein.

Beachten Sie, dass dieser gleiche Satz von Werten in allen [Fetch-Direktiven](/de/docs/Glossary/fetch_directive) (und einer [Reihe anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Fall eines Verstoßes

Angenommen, dieser CSP-Header:

```http
Content-Security-Policy: script-src-elem https://example.com/
```

…wird das folgende Script blockiert und nicht geladen oder ausgeführt:

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
