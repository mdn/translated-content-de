---
title: Server
slug: Web/HTTP/Headers/Server
l10n:
  sourceCommit: 8c36614793c9feadf8fea07fd10b6372be4fd179
---

{{HTTPSidebar}}

Der **`Server`**-Header beschreibt die Software, die vom Ursprungsserver verwendet wurde, um die Anfrage zu bearbeiten und eine Antwort zu erzeugen.

Die Vorteile der Bekanntgabe des Servertyps und der Version über diesen Header liegen darin, dass er bei der Analyse hilft und aufzeigt, wie weit verbreitet bestimmte Interoperabilitätsprobleme sind. Historisch gesehen haben Clients die Serverversionsinformationen genutzt, um bekannte Einschränkungen zu vermeiden, wie z.B. inkonsistente Unterstützung von [Bereichsanfragen](/de/docs/Web/HTTP/Range_requests) in bestimmten Softwareversionen.

> [!WARNING]
> Das Vorhandensein dieses Headers in Antworten, insbesondere wenn er detaillierte Implementierungsdetails über die Serversoftware enthält, kann die Erkennung bekannter Schwachstellen erleichtern.

Zu viele Details im `Server`-Header sind wegen der genannten Sicherheitsgründe und der Latenz der Antwort nicht ratsam. Es ist umstritten, ob die Verschleierung der Informationen in diesem Header von großem Nutzen ist, da die Identifizierung von Serversoftware auch auf andere Weise möglich ist. Im Allgemeinen ist ein robusterer Ansatz zur Serversicherheit, sicherzustellen, dass die Software regelmäßig aktualisiert oder gegen bekannte Schwachstellen gepatcht wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
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
    In der Regel in einem Format ähnlich dem {{HTTPHeader('User-Agent')}}.

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
- [Vermeidung von Informationslecks über HTTP-Header](https://owasp.org/www-project-secure-headers/index.html#prevent-information-disclosure-via-http-headers) - OWASP Secure Headers Project
