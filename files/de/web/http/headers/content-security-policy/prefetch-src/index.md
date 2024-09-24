---
title: "CSP: prefetch-src"
slug: Web/HTTP/Headers/Content-Security-Policy/prefetch-src
l10n:
  sourceCommit: f3e3823253fceeb2bb53fcbaf68d3c568e3d20b1
---

{{HTTPSidebar}}{{Deprecated_Header}}{{Non-standard_header}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`prefetch-src`** Direktive gibt gültige Ressourcen an, die vorgeladen oder vorausgerendert werden dürfen.

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
        Ja. Wenn diese Direktive fehlt, sucht der Benutzeragent nach der
        <code>default-src</code> Direktive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `prefetch-src`-Richtlinie erlaubt werden:

```http
Content-Security-Policy: prefetch-src <source>;
Content-Security-Policy: prefetch-src <source> <source>;
```

### Quellen

`<source>` kann jeder der in [CSP-Quellwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgelisteten Werte sein.

Beachten Sie, dass dieselbe Menge von Werten in allen {{Glossary("fetch directive", "fetch directives")}} verwendet werden kann (und in einer [Reihe anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)).

## Beispiel

### Prefetch-Ressourcen stimmen nicht mit Header überein

Angenommen, eine Seite hat die folgende Content-Security-Policy:

```http
Content-Security-Policy: prefetch-src https://example.com/
```

Abrufvorgänge für den folgenden Code werden Netzwerkfehler zurückgeben, da die angegebenen URLs nicht mit der Quellliste von `prefetch-src` übereinstimmen:

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
