---
title: Server
slug: Web/HTTP/Headers/Server
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Server`** {{Glossary("response_header", "Antwort-Header")}} beschreibt die Software, die vom Ursprungsserver verwendet wurde, der die Anfrage bearbeitet und eine Antwort generiert hat.

Die Vorteile des Werbens für den Servertyp und die Version über diesen Header sind, dass er bei der Analyse hilft und aufzeigt, wie weit verbreitet spezifische Interoperabilitätsprobleme sind. Historisch gesehen haben Clients die Serverversionsinformationen verwendet, um bekannte Einschränkungen zu umgehen, wie beispielsweise die inkonsistente Unterstützung von [Range Requests](/de/docs/Web/HTTP/Range_requests) in bestimmten Softwareversionen.

> [!WARNING]
> Die Präsenz dieses Headers in Antworten, insbesondere wenn er detaillierte Implementierungsdetails über die Serversoftware enthält, kann es einfacher machen, bekannte Schwachstellen zu erkennen.

Zu viele Details im `Server`-Header sind aus Gründen der Antwortlatenz und der oben genannten Sicherheitsgründe nicht ratsam. Es ist umstritten, ob das Verschleiern der Informationen in diesem Header einen großen Nutzen bringt, da die Fingerabdruckerkennung von Serversoftware auch mit anderen Mitteln möglich ist. Im Allgemeinen ist ein robusterer Ansatz zur Serversicherheit, sicherzustellen, dass die Software regelmäßig aktualisiert oder gegen bekannte Schwachstellen gepatcht wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : Ein Name der Software oder des Produkts, das die Anfrage bearbeitet hat.
    In der Regel in einem Format ähnlich wie {{HTTPHeader('User-Agent')}}.

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
- [Vermeidung von Informationsoffenlegung über HTTP-Header](https://owasp.org/www-project-secure-headers/index.html#prevent-information-disclosure-via-http-headers) - OWASP Secure Headers Project
