---
title: Accept-Patch
slug: Web/HTTP/Headers/Accept-Patch
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Accept-Patch`** HTTP-Antwort-Header gibt an, welchen Medientyp der Server in einer PATCH-Anfrage verstehen kann.

**`Accept-Patch`** als Antwort auf eine beliebige Methode bedeutet, dass PATCH auf der durch die Request-URI identifizierten Ressource erlaubt ist. Zwei häufige Fälle führen dazu:

Ein Server, der eine PATCH-Anfrage mit einem nicht unterstützten Medientyp erhält, könnte mit {{HTTPStatus("415")}} `Unsupported Media Type` antworten und einen `Accept-Patch`-Header zurückgeben, der einen oder mehrere unterstützte Medientypen referenziert.

> [!NOTE]
> Ein IANA-Register führt [eine Liste von Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Accept-Patch: application/example, text/example
Accept-Patch: text/example;charset=utf-8
Accept-Patch: application/merge-patch+json
```

## Direktiven

Keine

## Beispiele

```http
Accept-Patch: application/example, text/example

Accept-Patch: text/example;charset=utf-8

Accept-Patch: application/merge-patch+json
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Die Browser-Kompatibilität ist für diesen Header nicht relevant (der Header wird vom Server gesendet und die Spezifikation definiert kein Clientverhalten).

## Siehe auch

- Http-Methode {{HTTPMethod("PATCH")}}
- HTTP-Semantik und Kontext {{RFC("7231", "PUT", "4.3.4")}}
