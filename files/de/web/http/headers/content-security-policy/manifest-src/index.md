---
title: "CSP: manifest-src"
slug: Web/HTTP/Headers/Content-Security-Policy/manifest-src
l10n:
  sourceCommit: be48127d1f16af543287cbc54a9d4c6834ce1e30
---

{{HTTPSidebar}}

Die HTTP
{{HTTPHeader("Content-Security-Policy")}}`: manifest-src`
Direktive gibt an, welches [Manifest](/de/docs/Web/Manifest) auf die Ressource angewendet werden kann.

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
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Direktive nicht vorhanden ist, sucht der Benutzeragent nach der
        <code>default-src</code> Direktive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: manifest-src 'none';
Content-Security-Policy: manifest-src <source-expression-list>;
```

Diese Direktive kann einen der folgenden Werte haben:

- `'none'`
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _Quellausdruck_ Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie einem der angegebenen Quellausdrücke entsprechen.

    Quellausdrücke werden als Schlüsselwortwerte oder URL-Muster angegeben: die Syntax für jeden Quellausdruck ist in [CSP-Quellwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources) angegeben.

## Beispiele

### Verstöße

Angenommen, dieser CSP-Header wird verwendet:

```http
Content-Security-Policy: manifest-src https://example.com/
```

Das folgende {{HTMLElement("link")}} wird blockiert und nicht geladen:

```html
<link rel="manifest" href="https://not-example.com/manifest" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- [Web-App-Manifest](/de/docs/Web/Manifest)
- {{HTMLElement("link")}}
