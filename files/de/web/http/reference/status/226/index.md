---
title: 226 IM Used
slug: Web/HTTP/Reference/Status/226
l10n:
  sourceCommit: 975650c2f6ea843d6f7cbc721aee5dbc1db907b2
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`226 IM Used`** für [erfolgreiche Antworten](/de/docs/Web/HTTP/Reference/Status#successful_responses) zeigt an, dass der Server ein {{Glossary("delta", "Delta")}} als Antwort auf eine {{HTTPMethod("GET")}}-Anfrage zurückgibt.
Er wird im Kontext von _HTTP-Deltacodierungen_ verwendet.

IM steht für _instance manipulation_, was sich auf den Algorithmus bezieht, der ein _Delta_ erzeugt.
Bei der Deltacodierung sendet ein Client eine {{HTTPMethod("GET")}}-Anfrage mit zwei Headern: `A-IM:`, was eine Präferenz für einen Differenzierungsalgorithmus anzeigt, und {{HTTPHeader("If-None-Match")}}, der die Version einer Ressource angibt, die er besitzt.
Der Server antwortet mit Deltas im Vergleich zu einem gegebenen Basisdokument, anstatt das Dokument vollständig zurückzugeben.
Diese Antwort verwendet den `226`-Statuscode, einen `IM:`-Header, der den verwendeten Differenzierungsalgorithmus beschreibt, und kann einen `Delta-Base:`-Header mit dem {{HTTPHeader("ETag")}} enthalten, das dem Basisdokument entspricht, das mit dem Delta verbunden ist.

> [!WARNING]
> Schlechte Unterstützung für HTTP-Deltacodierungen bedeutet, dass es nur wenige Implementierungen gibt.
> Stattdessen verlassen sich die meisten Systeme ausschließlich auf [Kompressionsmethoden](/de/docs/Web/HTTP/Guides/Compression), um die Bandbreite zu reduzieren, obwohl eine Kombination aus Kompression und Deltacodierungen möglich ist.
>
> Selbst wenn der Client und der Server Deltacodierungen unterstützen, könnten Proxys oder Caches dies nicht tun, und die Komplexität, HTTP-Deltacodierungen zu einem System hinzuzufügen, könnte die Vorteile überwiegen.

## Status

```http
226 IM Used
```

## Beispiele

### Empfang eines `208` mit dem `vcdiff` Delta-Algorithmus

In der folgenden `GET`-Anfrage fordert ein Client eine Ressource an und hat eine zwischengespeicherte Version mit dem ETag `abcd123`.
Der `A-IM:`-Header zeigt eine Präferenz für die `vcdiff` und `diffe` Delta-Algorithmen an:

```http
GET /resource.txt HTTP/1.1
Host: example.com
A-IM: vcdiff, diffe
If-None-Match: "abcd123"
```

Angenommen, der Server unterstützt Deltacodierungen, antwortet er mit der Differenz seit der Version mit dem ETag `abcd123`.
Der `IM`-Header gibt an, dass der `vcdiff`-Algorithmus verwendet wird, und der `Delta-Base:`-Header zeigt an, dass die Differenz auf einer Ressource mit dem ETag `abcd123` basiert.

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
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [Syndication-Feed-Deltas helfen, die Abonnement-Bandbreitenkosten zu reduzieren](https://www.ctrl.blog/entry/feed-delta-updates.html) (2017)
