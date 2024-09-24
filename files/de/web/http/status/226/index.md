---
title: 226 IM Verwendet
slug: Web/HTTP/Status/226
l10n:
  sourceCommit: ddc0d10f9df181bd034e99b9a93488ee47414dfd
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`226 IM Verwendet`** [erfolgreiche Antwort](/de/docs/Web/HTTP/Status#successful_responses) zeigt an, dass der Server ein {{Glossary("delta")}} als Antwort auf eine {{HTTPMethod("GET")}}-Anfrage zurückgibt.
Es wird im Kontext von _HTTP-Delta-Kodierungen_ verwendet.

IM steht für _Instance Manipulation_, was sich auf den Algorithmus bezieht, der ein _Delta_ erzeugt.
Bei der Delta-Kodierung sendet ein Client eine {{HTTPMethod("GET")}}-Anfrage mit zwei Headern: `A-IM:`, der eine Präferenz für einen Differenzierungsalgorithmus angibt, und {{HTTPHeader("If-None-Match")}}, die die Version einer Ressource spezifiziert, die er hat.
Der Server antwortet mit Deltas relativ zu einem gegebenen Basisdokument anstatt dem vollständigen Dokument.
Diese Antwort verwendet den Statuscode `226`, einen `IM:`-Header, der den verwendeten Differenzierungsalgorithmus beschreibt, und kann einen `Delta-Base:`-Header mit dem {{HTTPHeader("ETag")}} enthalten, der dem Basisdokument zugeordnet ist, auf dem das Delta basiert.

> [!WARNING]
> Schlechte Unterstützung für HTTP-Delta-Kodierungen bedeutet, dass es nur wenige Implementierungen gibt.
> Stattdessen verlassen sich die meisten Systeme ausschließlich auf [Komprimierungsmethoden](/de/docs/Web/HTTP/Compression), um die Bandbreite zu reduzieren, obwohl eine Kombination von Komprimierung und Delta-Kodierungen möglich ist.
>
> Selbst wenn der Client und der Server Delta-Kodierungen unterstützen, tun dies möglicherweise nicht alle Proxys oder Caches, und die Komplexität der Hinzufügung von HTTP-Delta-Kodierungen zu einem System könnte die Vorteile überwiegen.

## Status

```plain
226 IM Used
```

## Beispiele

### Erhalt eines `208` mit dem `vcdiff`-Delta-Algorithmus

In der folgenden `GET`-Anfrage fordert ein Client eine Ressource an und hat eine zwischengespeicherte Version mit dem ETag `abcd123`.
Der Header `A-IM:` gibt eine Präferenz für `vcdiff` und `diffe` Delta-Algorithmen an:

```http
GET /resource.txt HTTP/1.1
Host: example.com
A-IM: vcdiff, diffe
If-None-Match: "abcd123"
```

Angenommen, der Server unterstützt Delta-Kodierungen, antwortet er mit dem Unterschied seit der Version mit dem ETag `abcd123`.
Der `IM`-Header zeigt an, dass der `vcdiff`-Algorithmus verwendet wird, und der `Delta-Base:`-Header gibt an, dass der Unterschied auf einer Ressource mit dem ETag `abcd123` basiert.

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
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [Syndication-Feed-Deltas helfen, die Abonnement-Bandbreitenkosten zu reduzieren](https://www.ctrl.blog/entry/feed-delta-updates.html) (2017)
