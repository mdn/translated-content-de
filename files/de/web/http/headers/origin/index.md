---
title: Origin
slug: Web/HTTP/Headers/Origin
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{HTTPSidebar}}

Der HTTP **`Origin`** {{Glossary("request_header", "Request-Header")}} gibt den {{Glossary("origin", "Origin")}} ([Scheme](/de/docs/Web/URI/Reference/Schemes), Hostname und Port) an, der die Anfrage _verursacht_ hat. Zum Beispiel, wenn ein User-Agent Ressourcen anfordern muss, die in einer Seite enthalten sind oder von Skripten abgerufen werden, die er ausführt, kann der Origin der Seite in der Anfrage enthalten sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Origin: null
Origin: <scheme>://<hostname>
Origin: <scheme>://<hostname>:<port>
```

## Direktiven

- `null`
  - : Der Origin ist "datenschutzsensibel" oder ein _undurchsichtiger Origin_ (opaque origin), wie in der HTML-Spezifikation definiert (spezifische Fälle sind im [Beschreibung](#beschreibung)-Abschnitt aufgeführt).
- `<scheme>`
  - : Das verwendete Protokoll.
    Üblicherweise handelt es sich um das HTTP-Protokoll oder dessen sichere Version HTTPS.
- `<hostname>`
  - : Der Domainname oder die IP-Adresse des Origin-Servers.
- `<port>` {{optional_inline}}
  - : Die Portnummer, auf der der Server lauscht.
    Wenn kein Port angegeben ist, wird der Standardport des angeforderten Dienstes anhand des Schemas impliziert (z. B. `80` für eine HTTP-URL).

## Beschreibung

Der `Origin`-Header ähnelt dem Header {{HTTPHeader("Referer")}}, gibt jedoch nicht den Pfad an und kann `null` sein. Er wird verwendet, um den Sicherheitskontext für die Origin-Anfrage bereitzustellen, außer in Fällen, in denen die Origin-Informationen sensibel oder unnötig wären.

Im Allgemeinen fügen User-Agents den `Origin`-Request-Header hinzu bei:

- {{Glossary("CORS", "Cross-Origin")}}-Anfragen.
- [Same-Origin](/de/docs/Web/Security/Same-origin_policy)-Anfragen, außer bei {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfragen (d.h., sie werden zu Same-Origin {{HTTPMethod("POST")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("PATCH")}} und {{HTTPMethod("DELETE")}}-Anfragen hinzugefügt).

Es gibt einige Ausnahmen von den oben genannten Regeln; z. B., wenn eine Cross-Origin-{{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfrage im [no-cors-Modus](/de/docs/Web/API/Request/mode#value) gestellt wird, wird der `Origin`-Header nicht hinzugefügt.

Der Wert des `Origin`-Headers kann in verschiedenen Fällen `null` sein, einschließlich (nicht abschließend):

- Origins, deren [Scheme](/de/docs/Web/URI/Reference/Schemes) nicht eines der folgenden ist: `http`, `https`, `ftp`, `ws`, `wss` oder `gopher` (einschließlich `blob`, `file` und `data`).
- Cross-Origin-Bilder und Mediendaten, einschließlich der in {{HTMLElement("img")}}, {{HTMLElement("video")}} und {{HTMLElement("audio")}} enthaltenen.
- Dokumente, die programmatisch mit [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) erstellt wurden, aus einer `data:`-URL generiert wurden oder die keinen übergeordneten Browsing-Kontext haben.
- Umleitungen über verschiedene Origins hinweg.
- {{HTMLElement("iframe", "iframes")}} mit einem `sandbox`-Attribut, das nicht den Wert `allow-same-origin` enthält.
- Antworten, die Netzwerkfehler sind.
- {{HTTPHeader("Referrer-Policy")}} ist auf `no-referrer` eingestellt für Anfragemodi, die nicht `cors` sind (z. B. einfache Formularübertragungen).

> [!NOTE]
> Es gibt eine detailliertere Liste von Fällen, in denen der Wert `null` zurückgegeben wird, auf Stack Overflow: [When do browsers send the Origin header? When do browsers set the origin to null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802)

## Beispiele

```http
Origin: https://developer.mozilla.org
```

```http
Origin: https://developer.mozilla.org:80
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Referer")}}
- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
- [When do browsers send the Origin header? When do browsers set the origin to null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802) (Stack Overflow)
