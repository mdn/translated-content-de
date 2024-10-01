---
title: 226 IM Used
slug: Web/HTTP/Status/226
l10n:
  sourceCommit: ddc0d10f9df181bd034e99b9a93488ee47414dfd
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`226 IM Used`** für [erfolgreiche Antworten](/de/docs/Web/HTTP/Status#successful_responses) zeigt an, dass der Server ein {{Glossary("delta", "Delta")}} als Antwort auf eine {{HTTPMethod("GET")}}-Anfrage zurückgibt.
Er wird im Kontext von _HTTP-Delta-Codierungen_ verwendet.

IM steht für _Instance Manipulation_, was sich auf den Algorithmus zur Erstellung eines _Deltas_ bezieht.
Bei der Delta-Codierung sendet ein Client eine {{HTTPMethod("GET")}}-Anfrage mit zwei Headern: `A-IM:`, der eine Präferenz für einen Differenzierungsalgorithmus angibt, und {{HTTPHeader("If-None-Match")}}, der die Version einer Ressource spezifiziert, die er hat.
Der Server antwortet mit Deltas im Verhältnis zu einem gegebenen Basisdokument statt mit dem vollständigen Dokument.
Diese Antwort verwendet den Statuscode `226`, einen `IM:`-Header, der den verwendeten Differenzierungsalgorithmus beschreibt, und kann einen `Delta-Base:`-Header mit dem {{HTTPHeader("ETag")}} enthalten, der zum Basisdokument gehört, das mit dem Delta assoziiert ist.

> [!WARNING]
> Aufgrund der geringen Unterstützung für HTTP-Delta-Codierungen gibt es nur wenige Implementierungen.
> Stattdessen verlassen sich die meisten Systeme ausschließlich auf [Kompressionsmethoden](/de/docs/Web/HTTP/Compression), um die Bandbreite zu reduzieren, obwohl eine Kombination aus Kompression und Delta-Codierungen möglich ist.
>
> Selbst wenn der Client und der Server Delta-Codierungen unterstützen, könnten Proxies oder Caches dies nicht tun, und die Komplexität, HTTP-Delta-Codierungen in ein System zu integrieren, könnte die Vorteile überwiegen.

## Status

```plain
226 IM Used
```

## Beispiele

### Empfangen eines `208` mit dem `vcdiff`-Delta-Algorithmus

In der folgenden `GET`-Anfrage fordert ein Client eine Ressource an und verfügt über eine zwischengespeicherte Version mit dem ETag `abcd123`.
Der `A-IM:`-Header gibt eine Präferenz für die Delta-Algorithmen `vcdiff` und `diffe` an:

```http
GET /resource.txt HTTP/1.1
Host: example.com
A-IM: vcdiff, diffe
If-None-Match: "abcd123"
```

Vorausgesetzt, der Server unterstützt Delta-Codierungen, antwortet er mit dem Diff seit der Version mit dem ETag `abcd123`.
Der `IM`-Header zeigt an, dass der `vcdiff`-Algorithmus verwendet wird, und der `Delta-Base:`-Header gibt an, dass das Diff auf einer Ressource mit dem ETag `abcd123` basiert.

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
- [Delta-Updates von Syndikationsfeeds helfen, die Abonnement-Bandbreitenkosten zu senken](https://www.ctrl.blog/entry/feed-delta-updates.html) (2017)
