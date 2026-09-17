---
title: 226 IM Used
slug: Web/HTTP/Reference/Status/226
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

Der HTTP-Statuscode **`226 IM Used`** für [erfolgreiche Antworten](/de/docs/Web/HTTP/Reference/Status#successful_responses) zeigt an, dass der Server als Antwort auf eine {{HTTPMethod("GET")}}-Anfrage ein {{Glossary("delta", "Delta")}} zurückgibt.
Er wird im Kontext von _HTTP-Delta-Kodierungen_ verwendet.

IM steht für _instance manipulation_ und bezieht sich auf den Algorithmus, der ein _Delta_ erzeugt.
Bei der Delta-Kodierung sendet ein Client eine {{HTTPMethod("GET")}}-Anfrage mit zwei Headern: `A-IM:`, der eine Präferenz für einen Differenzalgorithmus angibt, und {{HTTPHeader("If-None-Match")}}, der die Version einer Ressource angibt, die er besitzt.
Der Server antwortet mit Deltas relativ zu einem bestimmten Basisdokument statt mit dem vollständigen Dokument.
Diese Antwort verwendet den Statuscode `226`, einen `IM:`-Header, der den verwendeten Differenzalgorithmus beschreibt, und kann einen `Delta-Base:`-Header mit dem {{HTTPHeader("ETag")}} enthalten, der dem mit dem Delta verknüpften Basisdokument entspricht.

> [!WARNING]
> Die geringe Unterstützung für HTTP-Delta-Kodierungen bedeutet, dass es nur wenige Implementierungen gibt.
> Stattdessen verlassen sich die meisten Systeme ausschließlich auf [Komprimierungsmethoden](/de/docs/Web/HTTP/Guides/Compression), um die Bandbreite zu reduzieren, obwohl eine Kombination aus Komprimierung und Delta-Kodierungen möglich ist.
>
> Selbst wenn Client und Server Delta-Kodierungen unterstützen, gilt dies möglicherweise nicht für Proxys oder Caches, und die Komplexität, HTTP-Delta-Kodierungen zu einem System hinzuzufügen, kann die Vorteile überwiegen.

## Status

```http
226 IM Used
```

## Beispiele

### Empfangen eines `208` mit dem `vcdiff`-Delta-Algorithmus

In der folgenden `GET`-Anfrage fordert ein Client eine Ressource an und besitzt eine zwischengespeicherte Version mit dem ETag `abcd123`.
Der `A-IM:`-Header gibt eine Präferenz für die Delta-Algorithmen `vcdiff` und `diffe` an:

```http
GET /resource.txt HTTP/1.1
Host: example.com
A-IM: vcdiff, diffe
If-None-Match: "abcd123"
```

Angenommen, der Server unterstützt Delta-Kodierungen, antwortet er mit der Differenz seit der Version mit dem ETag `abcd123`.
Der `IM`-Header gibt an, dass der `vcdiff`-Algorithmus verwendet wird, und der `Delta-Base:`-Header gibt an, dass die Differenz auf einer Ressource mit dem ETag `abcd123` basiert.

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
- [Deltas von Syndication-Feeds helfen, Bandbreitenkosten für Abonnements zu senken](https://www.ctrl.blog/entry/feed-delta-updates/) (2017)
