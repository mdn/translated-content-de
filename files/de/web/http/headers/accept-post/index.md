---
title: Accept-Post
slug: Web/HTTP/Headers/Accept-Post
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Accept-Post`** HTTP-Antwortheader gibt an, welche [Medientypen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) vom Server für HTTP-Post-Anfragen akzeptiert werden.

**`Accept-Post`** als Antwort auf eine beliebige Methode bedeutet, dass `POST` auf die angeforderte Ressource erlaubt ist (jede Dokument-/Medienformatangabe im Header zeigt ferner an, dass das Dokumentenformat erlaubt ist).

Zum Beispiel könnte ein Server, der eine `POST`-Anfrage mit einem nicht unterstützten Medientyp erhält, mit {{HTTPStatus("415")}} `Unsupported Media Type` antworten und einen **`Accept-Post`**-Header zurückgeben, der auf einen oder mehrere unterstützte Medientypen verweist.

> [!NOTE]
>
> - Ein IANA-Register führt [eine Liste offizieller Inhaltscodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> - Die `bzip`- und `bzip2`-Codierungen sind nicht standardisiert, können jedoch in einigen Fällen verwendet werden, einschließlich Unterstützung für ältere Systeme.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
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
Accept-Post: <MIME_type>/<MIME_subtype>
Accept-Post: <MIME_type>/*
Accept-Post: */*
```

> [!NOTE]
> Der `Accept-Post`-Header spezifiziert einen Medienbereich auf dieselbe Weise wie {{HTTPHeader("Accept")}}, mit der Ausnahme, dass er keinen Präferenzbegriff (d.h. keine `q`-Argumente) besitzt. Dies liegt daran, dass `Accept-Post` ein Antwortheader ist, während `Accept` ein Anforderungsheader ist.

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

Die Browser-Kompatibilität ist für diesen Header nicht relevant (der Header wird vom Server gesendet, und die Spezifikation definiert kein Verhalten auf der Clientseite).

## Siehe auch

- Http-Methode {{HTTPMethod("POST")}}
- HTTP Semantik und Kontext {{RFC("7231", "POST", "4.3.3")}}
