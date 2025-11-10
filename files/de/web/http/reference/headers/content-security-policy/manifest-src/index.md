---
title: "Content-Security-Policy: manifest-src Direktive"
short-title: manifest-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/manifest-src
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die HTTP
{{HTTPHeader("Content-Security-Policy")}} **`manifest-src`**
Direktive gibt an, welches [Manifest](/de/docs/Web/Progressive_web_apps/Manifest) auf die Ressource angewendet werden kann.

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
        Ja. Wenn diese Direktive fehlt, sucht der Benutzeragent nach der
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
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind zwingend erforderlich.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _Quell-Ausdruck_-Werten. Ressourcen dieses Typs können geladen werden, wenn sie mit einem der angegebenen Quell-Ausdrücke übereinstimmen. Für diese Direktive sind die folgenden Quell-Ausdruck-Werte anwendbar:
    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Beispiele

### Verletzungsfälle

Angenommen, dieser CSP-Header:

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
- [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest)
- {{HTMLElement("link")}}
