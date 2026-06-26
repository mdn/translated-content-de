---
title: 226 IM Used
slug: Web/HTTP/Reference/Status/226
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`226 IM Used`** [erfolgreiche Antwort](/de/docs/Web/HTTP/Reference/Status#successful_responses) zeigt an, dass der Server ein {{Glossary("delta", "Delta")}} als Antwort auf eine {{HTTPMethod("GET")}}-Anfrage zurückgibt. Es wird im Kontext von _HTTP-Delta-Codierungen_ verwendet.

IM steht für _instance manipulation_, was sich auf den Algorithmus bezieht, der ein _Delta_ generiert. Bei der Delta-Codierung sendet ein Client eine {{HTTPMethod("GET")}}-Anfrage mit zwei Headern: `A-IM:`, der eine Präferenz für einen Differenzierungsalgorithmus angibt, und {{HTTPHeader("If-None-Match")}}, der die Version einer Ressource angibt, die er besitzt. Der Server antwortet mit Deltas im Vergleich zu einem gegebenen Basisdokument, anstatt das gesamte Dokument zu übermitteln. Diese Antwort verwendet den `226`-Statuscode, einen `IM:`-Header, der den verwendeten Differenzierungsalgorithmus beschreibt, und kann einen `Delta-Base:`-Header mit dem {{HTTPHeader("ETag")}} enthalten, der dem Basisdokument zugeordnet ist, das mit dem Delta verbunden ist.

> [!WARNING]
> Die geringe Unterstützung für HTTP-Delta-Codierungen bedeutet, dass es nur wenige Implementierungen gibt. Stattdessen verlassen sich die meisten Systeme ausschließlich auf [Komprimierungsmethoden](/de/docs/Web/HTTP/Guides/Compression), um die Bandbreite zu reduzieren, obwohl eine Kombination aus Komprimierung und Delta-Codierungen möglich ist.
>
> Selbst wenn Client und Server Delta-Codierungen unterstützen, tun dies möglicherweise nicht Proxys oder Caches, und die Komplexität der Hinzufügung von HTTP-Delta-Codierungen zu einem System kann die Vorteile überwiegen.

## Status

```http
226 IM Used
```

## Beispiele

### Erhalten einer `208` mit dem `vcdiff`-Delta-Algorithmus

In der folgenden `GET`-Anfrage fordert ein Client eine Ressource an und hat eine zwischengespeicherte Version mit dem ETag `abcd123`. Der `A-IM:`-Header gibt eine Präferenz für die Delta-Algorithmen `vcdiff` und `diffe` an:

```http
GET /resource.txt HTTP/1.1
Host: example.com
A-IM: vcdiff, diffe
If-None-Match: "abcd123"
```

Angenommen, der Server unterstützt Delta-Codierungen, antwortet er mit der Differenz seit der Version mit dem ETag `abcd123`. Der `IM`-Header zeigt an, dass der `vcdiff`-Algorithmus verwendet wird, und der `Delta-Base:`-Header zeigt an, dass die Differenz auf einer Ressource mit dem ETag `abcd123` basiert.

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
- [Syndikation-Feed-Deltas helfen, die Bandbreitenkosten für Abonnements zu reduzieren](https://www.ctrl.blog/entry/feed-delta-updates.html) (2017)
