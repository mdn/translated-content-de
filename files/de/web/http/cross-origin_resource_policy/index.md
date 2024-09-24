---
title: Cross-Origin-Ressourcenrichtlinie (CORP)
slug: Web/HTTP/Cross-Origin_Resource_Policy
l10n:
  sourceCommit: bb23abe84f0f4da3cf5d72a66d356cf5f9e3cfa2
---

{{HTTPSidebar}}

**Cross-Origin-Ressourcenrichtlinie** ist eine Richtlinie, die durch den [`Cross-Origin-Resource-Policy` HTTP-Header](/de/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy) festgelegt wird. Sie ermöglicht es Websites und Anwendungen, sich gegen bestimmte Anfragen von anderen Ursprüngen zu schützen (wie solche, die mit Elementen wie `<script>` und `<img>` ausgeführt werden), um spekulative Seitenkanalangriffe zu mindern, wie [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>), sowie Cross-Site Script Inclusion-Angriffe.

CORP ist eine zusätzliche Sicherheitsschicht neben der standardmäßigen {{Glossary("same-origin policy")}}. Die Cross-Origin-Ressourcenrichtlinie ergänzt [Cross-Origin Read Blocking](https://fetch.spec.whatwg.org/#corb) (CORB), einen Mechanismus, der standardmäßig einige Cross-Origin-Lesungen verhindert.

> [!NOTE]
> Die Richtlinie ist nur für [`no-cors`](https://fetch.spec.whatwg.org/#concept-request-mode) Anfragen wirksam, die standardmäßig für CORS-aufgeführte Methoden/Header ausgeführt werden.

Da diese Richtlinie über einen _[Antwort-Header](/de/docs/Glossary/Response_header)_ ausgedrückt wird, wird die tatsächliche Anfrage nicht verhindert – vielmehr verhindert der Browser, dass das _Ergebnis_ geleakt wird, indem er den Antwortinhalt entfernt.

## Verwendung

> [!NOTE]
> Aufgrund eines [Bugs in Chrome](https://crbug.com/1074261) kann das Setzen der Cross-Origin-Ressourcenrichtlinie das Rendern von PDFs beeinträchtigen und verhindern, dass Besucher über die erste Seite einiger PDFs hinaus lesen können. Seien Sie vorsichtig bei der Verwendung dieses Headers in einer Produktionsumgebung.

Webanwendungen setzen eine Cross-Origin-Ressourcenrichtlinie über den {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP-Antwort-Header, der einen von drei Werten akzeptiert:

- `same-site`

  - : Nur Anfragen von der gleichen _{{Glossary("Site")}}_ können die Ressource lesen.

    > [!WARNING]
    > Dies ist weniger sicher als ein {{Glossary("origin")}}. Der [Algorithmus zur Überprüfung, ob zwei Ursprünge dieselbe Site sind](https://html.spec.whatwg.org/multipage/origin.html#same-site) ist im HTML-Standard definiert und beinhaltet die Überprüfung der _registrierbaren Domäne_.

- `same-origin`
  - : Nur Anfragen vom gleichen _{{Glossary("origin")}}_ (d. h. Schema + Host + Port) können die Ressource lesen.
- `cross-origin`
  - : Anfragen von jedem _{{Glossary("origin")}}_ (sowohl gleiche Site als auch Cross-Site) können die Ressource lesen. Dies ist nützlich, wenn COEP verwendet wird (siehe unten).

```http
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

Während einer Überprüfung der Cross-Origin-Ressourcenrichtlinie wird, wenn der Header gesetzt ist, der Browser `no-cors` Anfragen, die von einem anderen Ursprung/Site gespeichert wurden, ablehnen.

## Beziehung zur Cross-Origin-Einbettungsrichtlinie (COEP)

Der {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP-Antwort-Header, wenn er auf ein Dokument angewendet wird, kann verwendet werden, um zu verlangen, dass Unterressourcen entweder gleichursprünglich mit dem Dokument sind oder mit einem {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP-Antwort-Header geliefert werden, um anzugeben, dass sie eingebettet werden können. Aus diesem Grund existiert der Wert `cross-origin`.

## Geschichte

Das Konzept wurde ursprünglich 2012 vorgeschlagen (als `From-Origin`), aber im Q2 2018 [wiederbelebt](https://github.com/whatwg/fetch/issues/687) und in Safari und Chromium implementiert.

Anfang 2018 wurden zwei Seitenkanalhardware-Schwachstellen, bekannt als _Meltdown_ und _Spectre_, offengelegt. Diese Schwachstellen ermöglichten die Offenlegung sensibler Daten aufgrund einer Rennbedingung, die als Teil der spekulativen Ausführungsfunktionalität entstanden ist, die zur Leistungsverbesserung entwickelt wurde.

Als Reaktion darauf veröffentlichte Chromium [Cross-Origin Read Blocking](https://fetch.spec.whatwg.org/#corb), das bestimmte Ressourcen (vom `Content-Type` HTML, JSON und XML) automatisch vor Cross-Origin-Lesungen schützt. Wenn die Anwendung keine [`no-sniff` Direktive](/de/docs/Web/HTTP/Headers/X-Content-Type-Options) bereitstellt, versucht Chromium, den `Content-Type` zu erraten und den Schutz dennoch anzuwenden.

`Cross-Origin-Resource-Policy` ist ein Opt-in-Antwort-Header, der _jede_ Ressource schützen kann; es ist nicht erforderlich, dass Browser MIME-Typen schnüffeln.

## Spezifikationen

{{Specifications}}

## Unterstützung durch Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP-Header
