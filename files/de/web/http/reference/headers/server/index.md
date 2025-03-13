---
title: Server
slug: Web/HTTP/Reference/Headers/Server
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-**`Server`**-{{Glossary("response_header", "Antwortheader")}} beschreibt die Software, die vom Ursprungsserver verwendet wurde, der die Anfrage bearbeitet und eine Antwort generiert hat.

Die Vorteile der Bekanntmachung des Servertyps und der Version über diesen Header bestehen darin, dass es bei der Analyse hilft und aufzeigt, wie verbreitet spezifische Interoperabilitätsprobleme sind. Historisch gesehen haben Clients die Serverversionsinformationen verwendet, um bekannte Einschränkungen zu vermeiden, wie zum Beispiel inkonsistente Unterstützung von [Range-Anfragen](/de/docs/Web/HTTP/Guides/Range_requests) in bestimmten Softwareversionen.

> [!WARNING]
> Die Anwesenheit dieses Headers in Antworten, insbesondere wenn er detaillierte Implementierungsinformationen über die Serversoftware enthält, kann es einfacher machen, bekannte Schwachstellen zu erkennen.

Zu viele Details im `Server`-Header werden aufgrund der oben genannten Sicherheits- und Latenzgründe nicht empfohlen. Es ist fraglich, ob das Verschleiern der Informationen in diesem Header viel Nutzen bringt, da das Erkennen der Serversoftware durch andere Methoden möglich ist. Generell ist ein robusterer Ansatz zur Serversicherheit, die Software regelmäßig zu aktualisieren oder gegen bekannte Schwachstellen zu patchen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrageheader")}}</th>
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
- [Verhindern von Informationsoffenlegung über HTTP-Header](https://owasp.org/www-project-secure-headers/index.html#prevent-information-disclosure-via-http-headers) - OWASP Secure Headers Project
