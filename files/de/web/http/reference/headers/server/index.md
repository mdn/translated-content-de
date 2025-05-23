---
title: Server header
short-title: Server
slug: Web/HTTP/Reference/Headers/Server
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Server`**-{{Glossary("response_header", "Antwort-Header")}} beschreibt die Software, die vom Ursprungsserver verwendet wurde, um die Anfrage zu bearbeiten und eine Antwort zu generieren.

Die Vorteile, den Servertyp und die Version über diesen Header zu veröffentlichen, liegen darin, dass es bei der Analyse hilft und aufzeigt, wie weit verbreitet bestimmte Interoperabilitätsprobleme sind. Historisch gesehen haben Clients die Serverversionsinformationen genutzt, um bekannte Einschränkungen zu vermeiden, wie z.B. inkonsistente Unterstützung von [Range-Abrufen](/de/docs/Web/HTTP/Guides/Range_requests) in bestimmten Softwareversionen.

> [!WARNING]
> Die Präsenz dieses Headers in Antworten, insbesondere wenn er detaillierte Implementierungsinformationen über die Server-Software enthält, könnte es einfacher machen, bekannte Schwachstellen zu erkennen.

Zu viele Details im `Server`-Header werden aus Gründen der Antwortlatenz und aus dem oben genannten Sicherheitsgrund nicht empfohlen. Es ist umstritten, ob das Verschleiern der Informationen in diesem Header viel Nutzen bringt, da die Fingerabdruckerkennung von Serversoftware auf anderen Wegen möglich ist. Generell ist es eine robustere Herangehensweise an die Serversicherheit, sicherzustellen, dass die Software regelmäßig gegen bekannte Schwachstellen aktualisiert oder gepatcht wird.

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
  - : Ein Name der Software oder des Produkts, das die Anfrage bearbeitet hat. Üblicherweise in einem Format ähnlich dem von {{HTTPHeader('User-Agent')}}.

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
