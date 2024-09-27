---
title: Accept-Post
slug: Web/HTTP/Headers/Accept-Post
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Accept-Post`** Antwort-HTTP-Header gibt an, welche [Medientypen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) vom Server für HTTP-Post-Anfragen akzeptiert werden.

**`Accept-Post`** als Antwort auf eine beliebige Methode bedeutet, dass `POST` auf der angeforderten Ressource erlaubt ist (jedes Dokument-/Medienformat im Header zeigt weiter an, dass dieses Dokumentformat erlaubt ist).

Beispielsweise könnte ein Server, der eine `POST`-Anfrage mit einem nicht unterstützten Medientyp erhält, mit {{HTTPStatus("415")}} `Unsupported Media Type` antworten und einen **`Accept-Post`**-Header referenzieren, der auf einen oder mehrere unterstützte Medientypen verweist.

> [!NOTE]
>
> - Ein IANA-Register führt [eine Liste offizieller Inhaltskodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> - Die Kodierungen `bzip` und `bzip2` sind nicht standardisiert, können aber in einigen Fällen verwendet werden, einschließlich der Unterstützung älterer Systeme.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Response-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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
> Der `Accept-Post`-Header gibt einen Medientypbereich auf dieselbe Weise an wie {{HTTPHeader("Accept")}}, außer dass er kein Vorzugsmodell (d. h. keine `q`-Argumente) hat. Dies liegt daran, dass `Accept-Post` ein Antwort-Header ist, während `Accept` ein Anfrage-Header ist.

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

Browser-Kompatibilität ist für diesen Header nicht relevant (der Header wird vom Server gesendet, und die Spezifikation definiert kein Clientverhalten).

## Siehe auch

- HTTP-Methode {{HTTPMethod("POST")}}
- HTTP Semantik und Kontext {{RFC("7231", "POST", "4.3.3")}}
