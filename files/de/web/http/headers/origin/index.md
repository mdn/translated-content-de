---
title: Ursprung
slug: Web/HTTP/Headers/Origin
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{HTTPSidebar}}

Der **`Origin`**-Anforderungsheader gibt den {{glossary("origin")}} (Schema, Hostname und Port) an, der die Anfrage _verursacht_ hat. Zum Beispiel, wenn ein User-Agent Ressourcen anfordern muss, die in einer Seite enthalten sind oder von Skripten abgerufen werden, die er ausführt, dann kann der Ursprung der Seite in die Anfrage einbezogen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja</td>
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

  - : Der Ursprung ist "datenschutzsensitiv" oder ein _undurchsichtiger Ursprung_, wie es durch die HTML-Spezifikation definiert ist (spezifische Fälle sind im Abschnitt [Beschreibung](#beschreibung) aufgeführt).

- `<scheme>`
  - : Das verwendete Protokoll.
    Üblicherweise ist es das HTTP-Protokoll oder seine sichere Version, HTTPS.
- `<hostname>`
  - : Der Domainname oder die IP-Adresse des Ursprungsservers.
- `<port>` {{optional_inline}}
  - : Portnummer, auf der der Server lauscht.
    Wenn kein Port angegeben ist, wird der Standardport für den angeforderten Dienst impliziert (z.B. "80" für eine HTTP-URL).

## Beschreibung

Der `Origin`-Header ähnelt dem {{HTTPHeader("Referer")}}-Header, gibt jedoch keinen Pfad preis und kann `null` sein. Er wird verwendet, um den "Sicherheitskontext" für die Ursprung-Anfrage bereitzustellen, außer in Fällen, in denen die Ursprungsinformationen sensibel oder unnötig wären.

Im Allgemeinen fügen User-Agenten den `Origin`-Anforderungsheader hinzu zu:

- {{Glossary("CORS", "cross origin")}}-Anfragen.
- [gleichherkunfts-](/de/docs/Web/Security/Same-origin_policy-Anfragen, außer für {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfragen (d.h. sie werden zu gleichherkunfts-{{HTTPMethod("POST")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("PATCH")}} und {{HTTPMethod("DELETE")}}-Anfragen hinzugefügt).

Es gibt einige Ausnahmen zu den oben genannten Regeln; zum Beispiel wird der `Origin`-Header nicht hinzugefügt, wenn eine {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfrage in [kein-CORS-Modus](/de/docs/Web/API/Request/mode#value) gemacht wird.

Der `Origin`-Header-Wert kann in einer Reihe von Fällen `null` sein, einschließlich (nicht erschöpfend):

- Ursprünge, deren Schema nicht `http`, `https`, `ftp`, `ws`, `wss` oder `gopher` ist (einschließlich `blob`, `file` und `data`).
- Cross-Origins Images und Mediendaten, einschließlich der in `<img>`, `<video>` und `<audio>` Elementen.
- Dokumente, die programmgesteuert mit `createDocument()` erstellt wurden, aus einer `data:` URL generiert wurden oder keinen erstellenden Browsing-Kontext haben.
- Weiterleitungen über Ursprünge hinweg.
- iframes mit einem Sandbox-Attribut, das nicht den Wert `allow-same-origin` enthält.
- Antworten, die Netzwerkfehler sind.
- [`Referrer-Policy`](/de/docs/Web/HTTP/Headers/Referrer-Policy) auf `no-referrer` gesetzt für nicht-`cors`-Anfragemodi (z.B. einfache Formularübermittlungen).

> [!NOTE]
> Es gibt eine detailliertere Auflistung von Fällen, die `null` zurückgeben können, auf Stack Overflow: [When do browsers send the Origin header? When do browsers set the origin to null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802)

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
- [When do browsers send the Origin header? When do browsers set the origin to null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802) (Stack Overflow)
