---
title: Server header
short-title: Server
slug: Web/HTTP/Reference/Headers/Server
l10n:
  sourceCommit: a4ff34eef85ccb654c5c3af7974caba396e8adcf
---

Der HTTP-{{Glossary("response_header", "Antwort-Header")}} **`Server`** beschreibt die Software, die der Ursprungsserver verwendet hat, um die Anfrage zu verarbeiten und eine Antwort zu erzeugen.

Die Angabe von Servertyp und -version über diesen Header hilft bei Analysen und dabei, die Verbreitung bestimmter Interoperabilitätsprobleme zu ermitteln.
In der Vergangenheit haben Clients die Versionsinformationen des Servers genutzt, um bekannte Einschränkungen zu umgehen, etwa die uneinheitliche Unterstützung von [Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) in bestimmten Softwareversionen.

> [!WARNING]
> Wenn dieser Header in Antworten enthalten ist, können bekannte Sicherheitslücken leichter erkannt werden – insbesondere, wenn er detaillierte Angaben zur Implementierung der Serversoftware enthält.

Zu viele Details im `Server`-Header sind wegen möglicher Auswirkungen auf die Antwortlatenz und aus dem oben genannten Sicherheitsgrund nicht ratsam.
Ob das Verschleiern der Informationen in diesem Header einen nennenswerten Vorteil bietet, ist umstritten, da sich Serversoftware auch auf andere Weise identifizieren lässt.
Ein robusterer Ansatz für die Serversicherheit besteht im Allgemeinen darin, die Software regelmäßig zu aktualisieren oder bekannte Sicherheitslücken durch Patches zu schließen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Server: <product>
```

## Direktiven

- `<product>`
  - : Der Name der Software oder des Produkts, die bzw. das die Anfrage verarbeitet hat.
    Üblicherweise in einem Format ähnlich dem von {{HTTPHeader('User-Agent')}}.

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
- [Offenlegung von Informationen über HTTP-Header verhindern](https://secure-headers-project.owasp.org/best-practices/#prevent-information-disclosure-via-http-headers) – OWASP Secure Headers Project
