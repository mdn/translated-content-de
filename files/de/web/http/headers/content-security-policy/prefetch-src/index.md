---
title: "CSP: prefetch-src"
slug: Web/HTTP/Headers/Content-Security-Policy/prefetch-src
l10n:
  sourceCommit: f3e3823253fceeb2bb53fcbaf68d3c568e3d20b1
---

{{HTTPSidebar}}{{Deprecated_Header}}{{Non-standard_header}}

Das HTTP-Header {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`prefetch-src`** Direktive legt gültige Ressourcen fest, die vorgeladen oder vorgerendert werden dürfen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Richtlinientyp</th>
      <td>[Fetch-Direktive](/de/docs/Glossary/Fetch_directive)</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Ist diese Direktive nicht vorhanden, sucht der Benutzeragent nach der
        <code>default-src</code> Direktive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Für die `prefetch-src` Richtlinie können eine oder mehrere Quellen erlaubt werden:

```http
Content-Security-Policy: prefetch-src <source>;
Content-Security-Policy: prefetch-src <source> <source>;
```

### Quellen

`<source>` kann einer der Werte sein, die in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgelistet sind.

Beachten Sie, dass diese gleiche Menge an Werten in allen [Fetch-Direktiven](/de/docs/Glossary/fetch_directive) (und einer [Reihe anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiel

### Prefetch-Ressourcen stimmen nicht mit Header überein

Gegeben eine Seite mit der folgenden Content Security Policy:

```http
Content-Security-Policy: prefetch-src https://example.com/
```

Abrufe für den folgenden Code werden Netzwerkfehler zurückgeben, da die bereitgestellten URLs nicht mit der Quellliste von `prefetch-src` übereinstimmen:

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
