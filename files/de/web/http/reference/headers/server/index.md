---
title: Server header
short-title: Server
slug: Web/HTTP/Reference/Headers/Server
l10n:
  sourceCommit: 13ef67a4ffbdb929415dfa1b3d65ab1aa9ebe5da
---

Der HTTP-**`Server`**-{{Glossary("response_header", "Response-Header")}} beschreibt die Software, die vom Origin-Server verwendet wurde, der die Anfrage verarbeitet und eine Antwort erzeugt hat.

Die Angabe von Servertyp und -version über diesen Header unterstützt Analysen und hilft dabei, festzustellen, wie weitverbreitet bestimmte Interoperabilitätsprobleme sind.
Historisch gesehen haben Clients die Informationen zur Serverversion verwendet, um bekannte Einschränkungen zu vermeiden, beispielsweise inkonsistente Unterstützung für [Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) in bestimmten Softwareversionen.

> [!WARNING]
> Das Vorhandensein dieses Headers in Antworten, insbesondere wenn er detaillierte Implementierungsinformationen über die Serversoftware enthält, kann bekannte Sicherheitslücken leichter erkennbar machen.

Zu viele Details im `Server`-Header sind aufgrund der Antwortlatenz und des oben genannten Sicherheitsaspekts nicht empfehlenswert.
Es ist fraglich, ob das Verschleiern der Informationen in diesem Header einen großen Nutzen bietet, da die Identifizierung von Serversoftware über andere Methoden möglich ist.
Im Allgemeinen besteht ein robusterer Ansatz für die Serversicherheit darin, sicherzustellen, dass Software regelmäßig aktualisiert oder gegen bekannte Sicherheitslücken gepatcht wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Server: <product>
```

## Direktiven

- `<product>`
  - : Ein Name der Software oder des Produkts, die beziehungsweise das die Anfrage verarbeitet hat.
    Üblicherweise in einem ähnlichen Format wie {{HTTPHeader('User-Agent')}}.

## Beispiele

```http
Server: Apache/2.4.1 (Unix)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Allow")}}
- [HTTP Observatory](/en-US/observatory)
- [Verhinderung der Offenlegung von Informationen über HTTP-Header](https://owasp.github.io/www-project-secure-headers/best-practices/#prevent-information-disclosure-via-http-headers) – OWASP Secure Headers Project
