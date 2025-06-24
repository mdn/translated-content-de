---
title: "Content-Security-Policy: manifest-src Direktive"
short-title: manifest-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/manifest-src
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

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
      <th scope="row">{{CSP("default-src")}} Rückfall</th>
      <td>
        Ja. Wenn diese Direktive fehlt, wird der Benutzeragent nach der
        <code>default-src</code> Direktive suchen.
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
  - : Es dürfen keine Ressourcen dieses Typs geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind folgende Quellausdruckswerte anwendbar:
    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Beispiele

### Verletzungsfälle

Bei folgendem CSP-Header:

```http
Content-Security-Policy: manifest-src https://example.com/
```

Wird das folgende {{HTMLElement("link")}} blockiert und nicht geladen:

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
