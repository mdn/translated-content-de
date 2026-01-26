---
title: Server header
short-title: Server
slug: Web/HTTP/Reference/Headers/Server
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP-**`Server`**-{{Glossary("response_header", "Antwortheader")}} beschreibt die Software, die vom Ursprungsserver verwendet wurde, um die Anfrage zu bearbeiten und eine Antwort zu generieren.

Der Vorteil, den Servertyp und die Version über diesen Header zu veröffentlichen, besteht darin, dass dies bei der Analyse hilft und dabei, wie weit verbreitet spezifische Interoperabilitätsprobleme sind.
Historisch gesehen haben Clients die Serverversionsinformationen verwendet, um bekannte Einschränkungen zu vermeiden, wie z. B. inkonsistente Unterstützung für [Range Requests](/de/docs/Web/HTTP/Guides/Range_requests) in bestimmten Softwareversionen.

> [!WARNING]
> Die Anwesenheit dieses Headers in Antworten, insbesondere wenn er detaillierte Implementierungsdetails über die Serversoftware enthält, kann es erleichtern, bekannte Schwachstellen zu erkennen.

Zu viel Detail im `Server`-Header wird aus Antwortverzögerungs- und aus den oben genannten Sicherheitsgründen nicht empfohlen.
Es ist umstritten, ob die Verschleierung der Informationen in diesem Header wirklich einen großen Nutzen bringt, da die Erkennung der Serversoftware auch auf andere Weise möglich ist.
Generell ist ein robusterer Ansatz zur Serversicherheit, sicherzustellen, dass die Software regelmäßig aktualisiert oder gegen bekannte Schwachstellen gepatcht wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
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
- [Verhindern der Informationsoffenlegung über HTTP-Header](https://owasp.org/www-project-secure-headers/index.html#prevent-information-disclosure-via-http-headers) - OWASP Secure Headers Project
