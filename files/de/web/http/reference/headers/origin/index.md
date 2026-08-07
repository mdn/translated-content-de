---
title: Origin header
short-title: Origin
slug: Web/HTTP/Reference/Headers/Origin
l10n:
  sourceCommit: 4db27688840b67e416373ea571d9e3a17bafa92d
---

Der HTTP **`Origin`** {{Glossary("request_header", "Request-Header")}} gibt den {{Glossary("origin", "Ursprung")}} ([Schema](/de/docs/Web/URI/Reference/Schemes), Hostname und Port) an, der die Anfrage _verursacht_ hat.
Wenn ein User-Agent beispielsweise Ressourcen anfordern muss, die in einer Seite enthalten sind oder von Skripten abgerufen werden, die er ausführt, kann der Ursprung der Seite in der Anfrage enthalten sein.

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
  - : Der Ursprung ist "datenschutzsensitiv" oder ein {{Glossary("Origin#opaque_origin", "undurchsichtiger Ursprung")}} (spezifische Fälle sind im [Beschreibung](#beschreibung) Abschnitt aufgeführt).
- `<scheme>`
  - : Das verwendete Protokoll.
    In der Regel handelt es sich um das HTTP-Protokoll oder seine gesicherte Version, HTTPS.
- `<hostname>`
  - : Der Domainname oder die IP-Adresse des Ursprungsservers.
- `<port>` {{optional_inline}}
  - : Portnummer, auf der der Server lauscht.
    Wenn kein Port angegeben ist, wird der Standardport für den angeforderten Dienst aus dem Schema impliziert (z.B. `80` für eine HTTP-URL).

## Beschreibung

Der `Origin`-Header ist dem {{HTTPHeader("Referer")}}-Header ähnlich, gibt aber nicht den Pfad an und kann `null` sein.
Er dient dazu, den Sicherheitskontext für die Ursprungsanfrage bereitzustellen, außer in Fällen, in denen die Ursprungsinformation sensibel oder unnötig wäre.

Im Allgemeinen fügen User-Agents den `Origin`-Request-Header hinzu zu:

- {{Glossary("CORS", "Cross-Origin")}} Anfragen.
- [Same-Origin](/de/docs/Web/Security/Defenses/Same-origin_policy) Anfragen außer {{HTTPMethod("GET")}} oder {{HTTPMethod("HEAD")}} Anfragen (d.h. sie werden zu Same-Origin {{HTTPMethod("POST")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("PATCH")}} und {{HTTPMethod("DELETE")}} Anfragen hinzugefügt).

Es gibt einige Ausnahmen von den oben genannten Regeln; zum Beispiel, wenn eine Cross-Origin {{HTTPMethod("GET")}} oder {{HTTPMethod("HEAD")}} Anfrage im [no-cors Modus](/de/docs/Web/API/Request/mode#value) gestellt wird, wird der `Origin`-Header nicht hinzugefügt.

Der `Origin`-Header-Wert kann in mehreren Fällen `null` sein, unter anderem (nicht erschöpfend):

- Ursprünge, deren [Schema](/de/docs/Web/URI/Reference/Schemes) nicht `http`, `https`, `ftp`, `ws`, `wss` oder `gopher` ist (einschließlich `blob`, `file` und `data`).
- Cross-Origin-Bilder und Mediendaten, einschließlich solcher in {{HTMLElement("img")}}, {{HTMLElement("video")}} und {{HTMLElement("audio")}} Elementen.
- Dokumente, die programmatisch mit [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) erstellt wurden, aus einer `data:` URL generiert wurden oder die keinen erzeugenden Browsing-Kontext haben.
- Umleitungen über Ursprünge hinweg.
- Dokumente, die mit der {{HTTPHeader("Content-Security-Policy")}} `sandbox` Direktive bedient werden, deren Wert `allow-same-origin` nicht enthält.
- {{HTMLElement("iframe", "iframes")}} mit einem `sandbox`-Attribut, dessen Wert `allow-same-origin` nicht enthält.
- Antworten, die Netzwerkfehler sind.
- Bestimmte {{HTTPHeader("Referrer-Policy")}} Werte, für Anfragen, die weder `GET` noch `HEAD` verwenden und nicht im `cors` Modus gemacht werden (z.B. grundlegende Formular-Posts).
  Siehe [Auswirkung auf den `Origin`-Header](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#effect_on_the_origin_header) für die Richtlinienwerte, die dies auslösen.

> [!NOTE]
> Eine detailliertere Auflistung von Fällen, die möglicherweise `null` zurückgeben, finden Sie auf Stack Overflow: [Wann senden Browser den Origin-Header? Wann setzen Browser den Ursprung auf null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802)

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
- [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
- [Wann senden Browser den Origin-Header? Wann setzen Browser den Ursprung auf null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802) (Stack Overflow)
