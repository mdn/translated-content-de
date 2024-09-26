---
title: Accept-Patch
slug: Web/HTTP/Headers/Accept-Patch
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Accept-Patch`** Antwort-HTTP-Header gibt an, welchen Medientyp der Server in einer PATCH-Anfrage versteht.

**`Accept-Patch`** als Antwort auf eine beliebige Methode bedeutet, dass PATCH auf die durch die Request-URI identifizierte Ressource erlaubt ist. Zwei häufige Fälle führen dazu:

Ein Server, der eine PATCH-Anfrage mit einem nicht unterstützten Medientyp erhält, könnte mit {{HTTPStatus("415")}} `Unsupported Media Type` antworten und einen Accept-Patch-Header zurückgeben, der einen oder mehrere unterstützte Medientypen angibt.

> [!NOTE]
> Ein IANA-Register führt [eine Liste von Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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

Die Browser-Kompatibilität ist für diesen Header nicht relevant (Header wird vom Server gesendet und die Spezifikation definiert kein Client-Verhalten).

## Siehe auch

- Http-Methode {{HTTPMethod("PATCH")}}
- HTTP Semantik und Kontext {{RFC("7231", "PUT", "4.3.4")}}
