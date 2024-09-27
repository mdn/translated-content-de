---
title: Cross-Origin Resource Policy (CORP)
slug: Web/HTTP/Cross-Origin_Resource_Policy
l10n:
  sourceCommit: bb23abe84f0f4da3cf5d72a66d356cf5f9e3cfa2
---

{{HTTPSidebar}}

**Cross-Origin Resource Policy** ist eine Richtlinie, die durch den [`Cross-Origin-Resource-Policy` HTTP-Header](/de/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy) festgelegt wird und es Websites und Anwendungen ermöglicht, sich gegen bestimmte Anfragen von anderen Ursprüngen (wie diejenigen, die mit Elementen wie `<script>` und `<img>` gesendet werden) zu schützen, um spekulative Seitenkanal-Angriffe wie [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>) sowie Cross-Site Script Inclusion-Angriffe zu mindern.

CORP stellt eine zusätzliche Schutzschicht über die standardmäßige [Same-Origin-Policy](/de/docs/Glossary/same-origin_policy) hinaus dar. Cross-Origin Resource Policy ergänzt [Cross-Origin Read Blocking](https://fetch.spec.whatwg.org/#corb) (CORB), einen Mechanismus, der standardmäßig einige Cross-Origin-Lesungen verhindert.

> [!NOTE]
> Die Richtlinie ist nur für [`no-cors`](https://fetch.spec.whatwg.org/#concept-request-mode) Anfragen wirksam, die standardmäßig für CORS-safelisted Methoden/Headers ausgeführt werden.

Da diese Richtlinie über einen _[Response-Header](/de/docs/Glossary/Response_header)_ ausgedrückt wird, wird die eigentliche Anfrage nicht verhindert – vielmehr verhindert der Browser, dass das _Ergebnis_ durch das Entfernen des Antwortinhalts offengelegt wird.

## Nutzung

> [!NOTE]
> Aufgrund eines [Bugs in Chrome](https://crbug.com/1074261) kann das Setzen von Cross-Origin-Resource-Policy das PDF-Rendering beeinträchtigen und verhindern, dass Besucher über die erste Seite einiger PDFs hinauslesen können. Seien Sie vorsichtig bei der Verwendung dieses Headers in einer Produktionsumgebung.

Webanwendungen setzen eine Cross-Origin Resource Policy über den {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP-Response-Header, der einen von drei Werten akzeptiert:

- `same-site`

  - : Nur Anfragen von der gleichen _[Site](/de/docs/Glossary/Site)_ können die Ressource lesen.

    > [!WARNING]
    > Dies ist weniger sicher als ein [origin](/de/docs/Glossary/origin). Der [Algorithmus zur Überprüfung, ob zwei Ursprünge derselbe Site sind](https://html.spec.whatwg.org/multipage/origin.html#same-site) ist im HTML-Standard definiert und umfasst die Überprüfung der _registrable domain_.

- `same-origin`
  - : Nur Anfragen vom gleichen _[origin](/de/docs/Glossary/origin)_ (d.h. Schema + Host + Port) können die Ressource lesen.
- `cross-origin`
  - : Anfragen von jedem _[origin](/de/docs/Glossary/origin)_ (sowohl same-site als auch cross-site) können die Ressource lesen. Dies ist nützlich, wenn COEP verwendet wird (siehe unten).

```http
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

Während einer Cross-Origin-Ressourcenrichtlinienprüfung, wenn der Header gesetzt ist, wird der Browser `no-cors` Anfragen, die von einem anderen Ursprung/Site ausgehen, ablehnen.

## Beziehung zur Cross-Origin Embedder Policy (COEP)

Der {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP-Response-Header kann bei Dokumenten verwendet werden, um zu verlangen, dass Subressourcen entweder gleichursprünglich mit dem Dokument sind oder mit einem {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP-Response-Header versehen sind, um anzuzeigen, dass sie eingebettet werden dürfen. Aus diesem Grund existiert der `cross-origin` Wert.

## Geschichte

Das Konzept wurde ursprünglich 2012 (als `From-Origin`) vorgeschlagen, aber [wiederbelebt](https://github.com/whatwg/fetch/issues/687) im zweiten Quartal 2018 und in Safari und Chromium implementiert.

Anfang 2018 wurden zwei Seitenkanal-Hardware-Schwachstellen bekannt, bekannt als _Meltdown_ und _Spectre_. Diese Schwachstellen ermöglichten die Offenlegung sensibler Daten aufgrund einer Rennbedingung, die als Teil der spekulativen Ausführung auftrat, die zur Leistungsverbesserung entwickelt wurde.

Als Reaktion darauf veröffentlichte Chromium [Cross-Origin Read Blocking](https://fetch.spec.whatwg.org/#corb), das bestimmte Ressourcen (von `Content-Type` HTML, JSON und XML) automatisch gegen Cross-Origin-Lesungen schützt. Wenn die Anwendung keine [`no-sniff`-Direktive](/de/docs/Web/HTTP/Headers/X-Content-Type-Options) bereitstellt, versucht Chromium, den `Content-Type` zu erraten und den Schutz trotzdem anzuwenden.

`Cross-Origin-Resource-Policy` ist ein Opt-in-Response-Header, der _jede_ Ressource schützen kann; es besteht keine Notwendigkeit für Browser, MIME-Typen zu überprüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP Header
