---
title: Accept-Post
slug: Web/HTTP/Headers/Accept-Post
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{HTTPSidebar}}

Der **`Accept-Post`** Antwort-HTTP-Header gibt an, welche [Medientypen](/de/docs/Web/HTTP/MIME_types) vom Server für HTTP-POST-Anfragen akzeptiert werden.

**`Accept-Post`** als Antwort auf eine beliebige Methode bedeutet, dass `POST` auf die angeforderte Ressource erlaubt ist (jedes Dokument-/Medienformat im Header zeigt weiter an, dass das Dokumentformat erlaubt ist).

Beispielsweise könnte ein Server, der eine `POST`-Anfrage mit einem nicht unterstützten Medientyp erhält, mit {{HTTPStatus("415")}} `Unsupported Media Type` und einem **`Accept-Post`** Header antworten, der einen oder mehrere unterstützte Medientypen angibt.

> [!NOTE]
>
> - Ein IANA-Register führt [eine Liste von offiziellen Inhaltskodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> - Die Kodierungen `bzip` und `bzip2` sind nicht standardisiert, können aber in einigen Fällen, einschließlich der Unterstützung von Altsystemen, verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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
> Der `Accept-Post` Header spezifiziert einen Medienbereich auf die gleiche Weise wie {{HTTPHeader("Accept")}}, allerdings ohne Präferenzanzeige (d.h. ohne `q`-Argumente). Dies liegt daran, dass `Accept-Post` ein Antwort-Header ist, während `Accept` ein Anfrage-Header ist.

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

Browser-Kompatibilität ist für diesen Header nicht relevant (Header wird vom Server gesendet, und die Spezifikation definiert kein Verhalten des Clients).

## Siehe auch

- HTTP-Methode {{HTTPMethod("POST")}}
- HTTP-Semantik und Kontext {{RFC("7231", "POST", "4.3.3")}}
