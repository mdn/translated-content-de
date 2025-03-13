---
title: 226 IM Used
slug: Web/HTTP/Reference/Status/226
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`226 IM Used`** für [erfolgreiche Antworten](/de/docs/Web/HTTP/Reference/Status#successful_responses) gibt an, dass der Server ein {{Glossary("delta", "Delta")}} als Antwort auf eine {{HTTPMethod("GET")}}-Anfrage zurückgibt.
Er wird im Kontext von _HTTP Delta-Kodierungen_ verwendet.

IM steht für _instance manipulation_ (Instanzmanipulation), was sich auf den Algorithmus bezieht, der ein _Delta_ erzeugt.
Bei der Delta-Kodierung sendet ein Client eine {{HTTPMethod("GET")}}-Anfrage mit zwei Headern: `A-IM:`, der eine Präferenz für einen Differenzierungsalgorithmus angibt, und {{HTTPHeader("If-None-Match")}}, der die Version einer Ressource spezifiziert, die er besitzt.
Der Server antwortet mit Deltas relativ zu einem gegebenen Basisdokument anstelle des vollständigen Dokuments.
Diese Antwort verwendet den Statuscode `226`, einen `IM:`-Header, der den verwendeten Differenzierungsalgorithmus beschreibt, und kann einen `Delta-Base:`-Header mit dem {{HTTPHeader("ETag")}} enthalten, der dem Delta zugeordneten Basisdokument entspricht.

> [!WARNING]
> Der geringe Support für HTTP Delta-Kodierungen führt dazu, dass es nur wenige Implementierungen gibt.
> Stattdessen verlassen sich die meisten Systeme ausschließlich auf [Kompressionsmethoden](/de/docs/Web/HTTP/Guides/Compression), um die Bandbreite zu reduzieren, obwohl eine Kombination aus Kompression und Delta-Kodierungen möglich ist.
>
> Selbst wenn sowohl Client als auch Server Delta-Kodierungen unterstützen, können Proxies oder Caches dies nicht tun, und die Komplexität des Hinzufügens von HTTP Delta-Kodierungen zu einem System könnte die Vorteile überwiegen.

## Status

```plain
226 IM Used
```

## Beispiele

### Empfang eines `208` mit dem `vcdiff` Delta-Algorithmus

In der folgenden `GET`-Anfrage fordert ein Client eine Ressource an und hat eine zwischengespeicherte Version mit dem ETag `abcd123`.
Der `A-IM:`-Header gibt eine Präferenz für die `vcdiff`- und `diffe`-Delta-Algorithmen an:

```http
GET /resource.txt HTTP/1.1
Host: example.com
A-IM: vcdiff, diffe
If-None-Match: "abcd123"
```

Angenommen, der Server unterstützt Delta-Kodierungen, antwortet er mit der Differenz seit der Version mit dem ETag `abcd123`.
Der `IM`-Header gibt an, dass der `vcdiff`-Algorithmus verwendet wird, und der `Delta-Base:`-Header zeigt, dass die Differenz auf einer Ressource mit dem ETag `abcd123` basiert.

```http
HTTP/1.1 226 IM Used
ETag: "5678a23"
IM: vcdiff
Content-Type: text/plain
Content-Length: 123
Delta-Base: abcd123

...
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPStatus("200")}}
- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [Syndikations-Feed-Deltas helfen, die Bandbreitenkosten von Abonnements zu senken](https://www.ctrl.blog/entry/feed-delta-updates.html) (2017)
