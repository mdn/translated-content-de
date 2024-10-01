---
title: Accept-Post
slug: Web/HTTP/Headers/Accept-Post
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Accept-Post`** Antwort-HTTP-Header gibt an, welche [Medientypen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) vom Server für HTTP-Post-Anfragen akzeptiert werden.

**`Accept-Post`** als Antwort auf eine beliebige Methode bedeutet, dass `POST` auf der angeforderten Ressource erlaubt ist (jedes Dokument/Medienformat im Header zeigt zusätzlich an, dass das Dokumentformat erlaubt ist).

Beispielsweise könnte ein Server, der eine `POST`-Anfrage mit einem nicht unterstützten Medientyp erhält, mit {{HTTPStatus("415")}} `Unsupported Media Type` antworten und einen **`Accept-Post`** Header zurückgeben, der auf einen oder mehrere unterstützte Medientypen verweist.

> [!NOTE]
>
> - Ein IANA-Register führt [eine Liste der offiziellen Inhaltskodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> - Die Kodierungen `bzip` und `bzip2` sind nicht standardisiert, können jedoch in manchen Fällen verwendet werden, einschließlich der Unterstützung älterer Systeme.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Accept-Post: <MIME_type>/<MIME_subtype>
Accept-Post: <MIME_type>/*
Accept-Post: */*
```

> [!NOTE]
> Der `Accept-Post`-Header gibt einen Medientypenbereich auf die gleiche Weise wie {{HTTPHeader("Accept")}} an, außer dass er keine Präferenz vorweist (d.h. keine `q`-Argumente). Dies liegt daran, dass `Accept-Post` ein Antwort-Header ist, während `Accept` ein Anfrage-Header ist.

## Direktiven

Keine.

## Beispiele

```http
Accept-Post: application/example, text/example
Accept-Post: image/webp
Accept-Post: */*
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Die Browser-Kompatibilität ist für diesen Header nicht relevant (der Header wird vom Server gesendet, und die Spezifikation definiert kein Client-Verhalten).

## Siehe auch

- HTTP-Methode {{HTTPMethod("POST")}}
- HTTP Semantik und Kontext {{RFC("7231", "POST", "4.3.3")}}
