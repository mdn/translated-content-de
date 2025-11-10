---
title: 226 IM Used
slug: Web/HTTP/Reference/Status/226
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`226 IM Used`** für [erfolgreiche Antworten](/de/docs/Web/HTTP/Reference/Status#successful_responses) zeigt an, dass der Server ein {{Glossary("delta", "Delta")}} als Antwort auf eine {{HTTPMethod("GET")}}-Anfrage zurückgibt. Er wird im Kontext von _HTTP-Delta-Kodierungen_ verwendet.

IM steht für _Instance Manipulation_, was sich auf den Algorithmus bezieht, der ein _Delta_ generiert. Bei der Delta-Kodierung sendet ein Client eine {{HTTPMethod("GET")}}-Anfrage mit zwei Headern: `A-IM:`, der eine Präferenz für einen Differenzierungsalgorithmus angibt, und {{HTTPHeader("If-None-Match")}}, der die Version einer Ressource angibt, die der Client besitzt. Der Server antwortet mit Deltas relativ zu einem gegebenen Basisdokument, anstatt das Dokument vollständig zu senden. Diese Antwort verwendet den Statuscode `226`, einen `IM:`-Header, der den verwendeten Differenzierungsalgorithmus beschreibt, und kann einen `Delta-Base:`-Header mit dem {{HTTPHeader("ETag")}} enthalten, der mit dem Basisdokument verbunden ist, auf das sich das Delta bezieht.

> [!WARNING]
> Die geringe Unterstützung für HTTP-Delta-Kodierungen bedeutet, dass es nur wenige Implementierungen gibt. Stattdessen verlassen sich die meisten Systeme ausschließlich auf [Kompressionsmethoden](/de/docs/Web/HTTP/Guides/Compression), um die Bandbreite zu reduzieren, obwohl eine Kombination aus Kompression und Delta-Kodierungen möglich ist.
>
> Selbst wenn der Client und der Server Delta-Kodierungen unterstützen, könnten Proxys oder Caches dies nicht tun, und die Komplexität, HTTP-Delta-Kodierungen zu einem System hinzuzufügen, könnte die Vorteile überwiegen.

## Status

```http
226 IM Used
```

## Beispiele

### Empfang eines `208` mit dem `vcdiff`-Delta-Algorithmus

In der folgenden `GET`-Anfrage fordert ein Client eine Ressource an und hat eine zwischengespeicherte Version mit dem ETag `abcd123`. Der `A-IM:`-Header gibt eine Präferenz für die Delta-Algorithmen `vcdiff` und `diffe` an:

```http
GET /resource.txt HTTP/1.1
Host: example.com
A-IM: vcdiff, diffe
If-None-Match: "abcd123"
```

Angenommen, der Server unterstützt Delta-Kodierungen, antwortet er mit dem Unterschied seit der Version mit dem ETag `abcd123`. Der `IM`-Header zeigt an, dass der `vcdiff`-Algorithmus verwendet wird, und der `Delta-Base:`-Header gibt an, dass das Delta auf einer Ressource mit dem ETag `abcd123` basiert.

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
- [Syndikations-Feed-Deltas helfen, die Abonnement-Bandbreitenkosten zu senken](https://www.ctrl.blog/entry/feed-delta-updates.html) (2017)
