---
title: Server
slug: Web/HTTP/Headers/Server
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP **`Server`** {{Glossary("response_header", "Antwort-Header")}} beschreibt die Software, die vom Ursprungsserver verwendet wurde, der die Anfrage bearbeitet und eine Antwort generiert hat.

Die Vorteile der Bekanntgabe des Server-Typs und der Version über diesen Header liegen darin, dass sie bei der Analyse helfen und aufzeigen, wie weit verbreitet bestimmte Interoperabilitätsprobleme sind.
Historisch gesehen haben Clients die Server-Versionsinformationen verwendet, um bekannte Einschränkungen zu vermeiden, wie z.B. inkonsistente Unterstützung für [Range-Anfragen](/de/docs/Web/HTTP/Range_requests) in bestimmten Softwareversionen.

> [!WARNING]
> Das Vorhandensein dieses Headers in Antworten, insbesondere wenn er detaillierte Implementierungsdetails über die Server-Software enthält, kann es erleichtern, bekannte Schwachstellen zu erkennen.

Zu viele Details im `Server`-Header werden aus Gründen der Antwortlatenz und der oben genannten Sicherheitsgründe nicht empfohlen. Es ist fraglich, ob das Verbergen der Informationen in diesem Header viel Nutzen bringt, da die Fingerabdrücke der Server-Software auch auf andere Weise erfasst werden können. Im Allgemeinen ist ein robusterer Ansatz für die Serversicherheit, sicherzustellen, dass die Software regelmäßig aktualisiert oder gegen bekannte Schwachstellen gepatcht wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Server: <product>
```

## Direktiven

- `<product>`
  - : Der Name der Software oder des Produkts, das die Anfrage bearbeitet hat.
    Normalerweise in einem Format ähnlich dem von {{HTTPHeader('User-Agent')}}.

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
- [Verhindern der Informationsweitergabe über HTTP-Header](https://owasp.org/www-project-secure-headers/index.html#prevent-information-disclosure-via-http-headers) - OWASP Secure Headers Project
