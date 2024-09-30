---
title: Server
slug: Web/HTTP/Headers/Server
l10n:
  sourceCommit: 8c36614793c9feadf8fea07fd10b6372be4fd179
---

{{HTTPSidebar}}

Der **`Server`**-Header beschreibt die Software, die vom Ursprungsserver verwendet wurde, um die Anfrage zu bearbeiten und eine Antwort zu erzeugen.

Die Vorteile, den Servertyp und die Version über diesen Header bekanntzugeben, liegen darin, dass es bei der Analyse und der Identifizierung der Verbreitung spezifischer Interoperabilitätsprobleme hilft. Historisch haben Clients die Versionsinformationen des Servers genutzt, um bekannte Einschränkungen zu umgehen, wie zum Beispiel die inkonsistente Unterstützung von [Range-Anfragen](/de/docs/Web/HTTP/Range_requests) in bestimmten Softwareversionen.

> [!WARNING]
> Die Anwesenheit dieses Headers in Antworten, besonders wenn er detaillierte Implementierungsdetails zur Server-Software enthält, kann es erleichtern, bekannte Sicherheitslücken zu erkennen.

Zu viele Details im `Server`-Header werden aufgrund der oben genannten Gründe zur Antwortlatenz und Sicherheit nicht empfohlen. Es ist umstritten, ob das Verschleiern der Informationen in diesem Header viel Nutzen bietet, da das Fingerabdrucknehmen von Server-Software auch auf andere Weise möglich ist. Generell ist ein robusterer Ansatz zur Serversicherheit, sicherzustellen, dass die Software regelmäßig aktualisiert oder gegen bekannte Schwachstellen gepatcht wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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
    Normalerweise in einem Format ähnlich dem {{HTTPHeader('User-Agent')}}.

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
- [Vermeidung der Informationsweitergabe über HTTP-Header](https://owasp.org/www-project-secure-headers/index.html#prevent-information-disclosure-via-http-headers) - OWASP Secure Headers Project
