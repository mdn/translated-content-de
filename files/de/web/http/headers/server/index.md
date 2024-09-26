---
title: Server
slug: Web/HTTP/Headers/Server
l10n:
  sourceCommit: 8c36614793c9feadf8fea07fd10b6372be4fd179
---

{{HTTPSidebar}}

Der **`Server`**-Header beschreibt die Software, die vom Ursprungsserver verwendet wurde, um die Anfrage zu bearbeiten und eine Antwort zu generieren.

Die Vorteile der Veröffentlichung des Servertyps und der Version über diesen Header bestehen darin, dass dies bei der Analyse und Identifizierung, wie weit verbreitet bestimmte Interoperabilitätsprobleme sind, hilft. Historisch gesehen haben Clients die Serverversionsinformationen verwendet, um bekannte Einschränkungen zu vermeiden, wie z.B. inkonsistente Unterstützung von [Range-Anfragen](/de/docs/Web/HTTP/Range_requests) in bestimmten Softwareversionen.

> [!WARNING]
> Die Anwesenheit dieses Headers in Antworten, insbesondere wenn er detaillierte Implementierungsdetails der Server-Software enthält, kann es erleichtern, bekannte Schwachstellen zu erkennen.

Zu viele Details im `Server`-Header werden aus Latenz- und Sicherheitsgründen nicht empfohlen. Es ist umstritten, ob das Verschleiern der Informationen in diesem Header viel Nutzen bringt, da das Erstellen von Fingerabdrücken von Server-Software auf andere Weise möglich ist. Im Allgemeinen ist ein stabilerer Ansatz zur Serversicherheit, sicherzustellen, dass die Software regelmäßig aktualisiert oder gegen bekannte Schwachstellen gepatcht wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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
  - : Ein Name der Software oder des Produkts, das die Anfrage bearbeitet hat. Üblicherweise in einem Format ähnlich wie {{HTTPHeader('User-Agent')}}.

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
