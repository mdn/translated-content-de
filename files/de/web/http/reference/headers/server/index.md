---
title: Server header
short-title: Server
slug: Web/HTTP/Reference/Headers/Server
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Server`**{{Glossary("response_header", "Antwort-Header")}} beschreibt die Software, die vom Ursprungsserver verwendet wurde, um die Anfrage zu bearbeiten und eine Antwort zu generieren.

Der Vorteil der Angabe des Servertyps und der Version über diesen Header besteht darin, dass er bei der Analyse hilft und aufzeigt, wie weit verbreitet bestimmte Interoperabilitätsprobleme sind. Historisch gesehen haben Clients die Serverversionsinformationen verwendet, um bekannte Einschränkungen zu umgehen, wie zum Beispiel inkonsistente Unterstützung für [Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) in bestimmten Softwareversionen.

> [!WARNING]
> Die Anwesenheit dieses Headers in Antworten, insbesondere wenn er detaillierte Implementierungsdetails über die Server-Software enthält, kann es einfacher machen, bekannte Schwachstellen zu erkennen.

Zu viele Details im `Server`-Header sind aus Gründen der Antwortlatenz und der oben genannten Sicherheitsgründe nicht ratsam. Es ist umstritten, ob die Verschleierung der Informationen in diesem Header viel Nutzen bringt, da das Fingerprinting von Server-Software auch auf andere Weise möglich ist. Im Allgemeinen ist ein robusterer Ansatz für die Serversicherheit sicherzustellen, dass die Software regelmäßig aktualisiert oder gegen bekannte Schwachstellen gepatcht wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Ein Name der Software oder des Produkts, das die Anfrage bearbeitet hat. Üblicherweise in einem Format ähnlich zu {{HTTPHeader('User-Agent')}}.

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
- [Verhindern von Informationsoffenlegung über HTTP-Header](https://owasp.org/www-project-secure-headers/index.html#prevent-information-disclosure-via-http-headers) - OWASP Secure Headers Project
