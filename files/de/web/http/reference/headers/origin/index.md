---
title: Origin header
short-title: Origin
slug: Web/HTTP/Reference/Headers/Origin
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Der HTTP-**`Origin`**-{{Glossary("request_header", "Anforderungsheader")}} gibt den {{Glossary("origin", "Ursprung")}} ([Schema](/de/docs/Web/URI/Reference/Schemes), Hostname und Port) an, der die Anforderung _verursacht_ hat. Wenn ein Benutzeragent Ressourcen anfordern muss, die in eine Seite eingebunden sind oder von Skripten, die er ausführt, abgerufen werden, kann der Ursprung der Seite in die Anforderung aufgenommen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Der Ursprung ist "datenschutzempfindlich" oder ist ein {{Glossary("Origin#opaque_origin", "nicht transparenter Ursprung")}} (spezifische Fälle sind im Abschnitt [Beschreibung](#beschreibung) aufgeführt).
- `<scheme>`
  - : Das verwendete Protokoll.
    In der Regel handelt es sich um das HTTP-Protokoll oder seine gesicherte Version HTTPS.
- `<hostname>`
  - : Der Domainname oder die IP-Adresse des Ursprungsservers.
- `<port>` {{optional_inline}}
  - : Portnummer, auf der der Server lauscht.
    Wenn kein Port angegeben ist, wird der Standardport für den angeforderten Dienst aus dem Schema impliziert (z.B. `80` für eine HTTP-URL).

## Beschreibung

Der `Origin`-Header ähnelt dem {{HTTPHeader("Referer")}}-Header, gibt jedoch nicht den Pfad preis und kann `null` sein. Er wird verwendet, um den Sicherheitskontext für die Ursprungsanforderung bereitzustellen, außer in Fällen, in denen die Ursprungsinformation sensibel oder unnötig wäre.

Generell fügen Benutzeragenten den `Origin`-Anforderungsheader hinzu bei:

- {{Glossary("CORS", "Cross-Origin")}}-Anforderungen.
- [Same-Origin](/de/docs/Web/Security/Defenses/Same-origin_policy)-Anforderungen, außer bei {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anforderungen (d.h. sie werden bei Same-Origin-{{HTTPMethod("POST")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("PATCH")}}- und {{HTTPMethod("DELETE")}}-Anforderungen hinzugefügt).

Es gibt einige Ausnahmen von den obigen Regeln; beispielsweise wird der `Origin`-Header nicht hinzugefügt, wenn eine Cross-Origin-{{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anforderung im [no-cors-Modus](/de/docs/Web/API/Request/mode#value) durchgeführt wird.

Der `Origin`-Header-Wert kann in mehreren Fällen `null` sein, einschließlich (nicht erschöpfend):

- Ursprünge, deren [Schema](/de/docs/Web/URI/Reference/Schemes) nicht `http`, `https`, `ftp`, `ws`, `wss` oder `gopher` ist (einschließlich `blob`, `file` und `data`).
- Cross-Origin-Bilder und Mediendaten, einschließlich der in {{HTMLElement("img")}}, {{HTMLElement("video")}} und {{HTMLElement("audio")}}-Elementen.
- Dokumente, die programmgesteuert mit [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) erstellt wurden, aus einer `data:`-URL generiert oder die keinen erstellenden Browsing-Kontext haben.
- Weiterleitungen über Ursprünge hinweg.
- Dokumente, die mit der {{HTTPHeader("Content-Security-Policy")}}-Richtlinie `sandbox` bedient werden und deren Wert `allow-same-origin` nicht enthält.
- {{HTMLElement("iframe", "iframes")}} mit einem Sandbox-Attribut, dessen Wert `allow-same-origin` nicht enthält.
- Antworten, die Netzwerkfehler sind.
- {{HTTPHeader("Referrer-Policy")}}-Richtlinie auf `no-referrer` gesetzt für nicht-`cors`-Anforderungsmodi (z.B. einfache Formularübertragungen).

> [!NOTE]
> Eine detailliertere Auflistung von Fällen, in denen `null` zurückgegeben werden kann, finden Sie auf Stack Overflow: [When do browsers send the Origin header? When do browsers set the origin to null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802)

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
- [When do browsers send the Origin header? When do browsers set the origin to null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802) (Stack Overflow)
