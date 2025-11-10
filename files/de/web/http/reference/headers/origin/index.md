---
title: Origin header
short-title: Origin
slug: Web/HTTP/Reference/Headers/Origin
l10n:
  sourceCommit: 932ec571065343d237db0c14869099bc83921041
---

Der HTTP **`Origin`** {{Glossary("request_header", "Request-Header")}} gibt den {{Glossary("origin", "Ursprung")}} ([Schema](/de/docs/Web/URI/Reference/Schemes), Hostname und Port) an, der die Anfrage _verursacht_ hat.
Zum Beispiel, wenn ein User-Agent Ressourcen anfordern muss, die in einer Seite enthalten sind oder durch ausgeführte Skripte abgerufen werden, könnte der Ursprung der Seite in der Anfrage enthalten sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
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
  - : Der Ursprung ist "datenschutzempfindlich" oder ein {{Glossary("Origin#opaque_origin", "opaker Ursprung")}} (spezifische Fälle sind im Abschnitt [Beschreibung](#beschreibung) aufgeführt).
- `<scheme>`
  - : Das verwendete Protokoll.
    In der Regel ist dies das HTTP-Protokoll oder seine gesicherte Version HTTPS.
- `<hostname>`
  - : Der Domain-Name oder die IP-Adresse des Ursprungsservers.
- `<port>` {{optional_inline}}
  - : Portnummer, unter der der Server lauscht.
    Wenn kein Port angegeben ist, wird der Standardport für den angeforderten Dienst aus dem Schema abgeleitet (z.B. `80` für eine HTTP-URL).

## Beschreibung

Der `Origin`-Header ist dem {{HTTPHeader("Referer")}}-Header ähnlich, gibt aber nicht den Pfad preis und kann `null` sein.
Er wird verwendet, um den Sicherheitskontext für die Ursprungsanfrage bereitzustellen, außer in Fällen, in denen die Herkunftsinformationen sensibel oder unnötig wären.

Im Allgemeinen fügen Benutzeragenten den `Origin`-Request-Header zu:

- {{Glossary("CORS", "cross-origin")}}-Anfragen hinzu.
- [same-origin](/de/docs/Web/Security/Same-origin_policy)-Anfragen, außer für {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfragen (d.h. sie werden zu same-origin {{HTTPMethod("POST")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("PATCH")}} und {{HTTPMethod("DELETE")}} Anfragen hinzugefügt).

Es gibt einige Ausnahmen zu den oben genannten Regeln; zum Beispiel, wenn eine cross-origin {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfrage im [no-cors Modus](/de/docs/Web/API/Request/mode#value) gestellt wird, wird der `Origin`-Header nicht hinzugefügt.

Der Wert des `Origin`-Headers kann in mehreren Fällen `null` sein, einschließlich (nicht abschließend):

- Ursprünge, deren [Schema](/de/docs/Web/URI/Reference/Schemes) nicht `http`, `https`, `ftp`, `ws`, `wss` oder `gopher` ist (einschließlich `blob`, `file` und `data`).
- Cross-origin-Bilder und Mediendaten, einschließlich der in {{HTMLElement("img")}}, {{HTMLElement("video")}} und {{HTMLElement("audio")}}-Elementen.
- Dokumente, die programmgesteuert mit [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) erstellt wurden, aus einer `data:`-URL generiert wurden oder die keinen Erstellertabrahmen haben.
- Weiterleitungen zwischen Ursprüngen.
- Dokumente, die mit der {{HTTPHeader("Content-Security-Policy")}}-Direktive `sandbox` bedient werden, deren Wert nicht `allow-same-origin` enthält.
- {{HTMLElement("iframe", "iframes")}} mit einem sandbox-Attribut, dessen Wert nicht `allow-same-origin` enthält.
- Antworten, die Netzwerkfehler sind.
- {{HTTPHeader("Referrer-Policy")}} ist auf `no-referrer` für nicht-`cors`-Anfragemodi gesetzt (z.B. normale Formularübermittlungen).

> [!NOTE]
> Es gibt eine detailliertere Auflistung von Fällen, die `null` zurückgeben können, auf Stack Overflow: [Wann senden Browser den Origin-Header? Wann setzen Browser den Ursprung auf null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802)

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
- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
- [Wann senden Browser den Origin-Header? Wann setzen Browser den Ursprung auf null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802) (Stack Overflow)
