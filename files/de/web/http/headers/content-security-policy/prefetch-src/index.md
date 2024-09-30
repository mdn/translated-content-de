---
title: "CSP: prefetch-src"
slug: Web/HTTP/Headers/Content-Security-Policy/prefetch-src
l10n:
  sourceCommit: f3e3823253fceeb2bb53fcbaf68d3c568e3d20b1
---

{{HTTPSidebar}}{{Deprecated_Header}}{{Non-standard_header}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`prefetch-src`** Direktive spezifiziert gültige Ressourcen, die vorab geladen oder vorab gerendert werden dürfen.

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
        Ja. Wenn diese Direktive fehlt, wird der User Agent nach der
        <code>default-src</code> Direktive suchen.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `prefetch-src` Richtlinie erlaubt werden:

```http
Content-Security-Policy: prefetch-src <source>;
Content-Security-Policy: prefetch-src <source> <source>;
```

### Quellen

`<source>` kann jeder der in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgelisteten Werte sein.

Beachten Sie, dass dieser gleiche Satz von Werten in allen [Fetch-Direktiven](/de/docs/Glossary/fetch_directive) (und einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiel

### Vorab geladene Ressourcen stimmen nicht mit dem Header überein

Gegeben ist eine Seite mit der folgenden Content Security Policy:

```http
Content-Security-Policy: prefetch-src https://example.com/
```

Abrufe für den folgenden Code werden Netzwerkfehler zurückgeben, da die angegebenen URLs nicht mit der Quellliste von `prefetch-src` übereinstimmen:

```html
<link rel="prefetch" href="https://example.org/" />
<link rel="prerender" href="https://example.org/" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
