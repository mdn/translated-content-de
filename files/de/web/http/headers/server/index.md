---
title: Server
slug: Web/HTTP/Headers/Server
l10n:
  sourceCommit: 8c36614793c9feadf8fea07fd10b6372be4fd179
---

{{HTTPSidebar}}

Der **`Server`**-Header beschreibt die Software, die vom Ursprungsserver verwendet wurde, um die Anfrage zu bearbeiten und eine Antwort zu generieren.

Die Vorteile der Angabe des Servertyps und der Version über diesen Header bestehen darin, dass sie bei der Analyse hilft und aufzeigt, wie verbreitet bestimmte Interoperabilitätsprobleme sind. Historisch gesehen haben Clients die Serverversionsinformationen verwendet, um bekannte Einschränkungen zu vermeiden, wie z.B. inkonsistente Unterstützung für [Range-Anfragen](/de/docs/Web/HTTP/Range_requests) in bestimmten Softwareversionen.

> [!WARNING]
> Das Vorhandensein dieses Headers in Antworten, insbesondere wenn er detaillierte Implementierungsdetails über die Server-Software enthält, kann bekannte Schwachstellen leichter erkennbar machen.

Zu viele Details im `Server`-Header sind aus den oben genannten Gründen zur Antwortlatenz und Sicherheit nicht empfehlenswert. Es ist umstritten, ob das Verschleiern der Informationen in diesem Header einen großen Vorteil bietet, da das Fingerprinting von Server-Software auch auf andere Weise möglich ist. Allgemein ist ein robusterer Ansatz zur Serversicherheit sicherzustellen, dass die Software regelmäßig aktualisiert oder gegen bekannte Schwachstellen gepatcht wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>[Response header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Headername](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
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
    Normalerweise in einem Format ähnlich {{HTTPHeader('User-Agent')}}.

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
- [Prevent information disclosure via HTTP headers](https://owasp.org/www-project-secure-headers/index.html#prevent-information-disclosure-via-http-headers) - OWASP Secure Headers Project
