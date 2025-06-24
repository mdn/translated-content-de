---
title: Cross-Origin Resource Policy (CORP)
slug: Web/HTTP/Guides/Cross-Origin_Resource_Policy
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

**Cross-Origin Resource Policy** ist eine Richtlinie, die durch den [`Cross-Origin-Resource-Policy` HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy) festgelegt wird. Sie ermöglicht es Websites und Anwendungen, Schutz vor bestimmten Anfragen von anderen Ursprüngen (wie solchen, die mit Elementen wie `<script>` und `<img>` gestellt werden) zu aktivieren, um spekulative Seitenkanalangriffe wie [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>) sowie Cross-Site Script Inclusion-Angriffe zu mildern.

CORP ist eine zusätzliche Schutzschicht über die standardmäßige {{Glossary("same-origin_policy", "Same-Origin-Policy")}} hinaus. Die Cross-Origin Resource Policy ergänzt das [Cross-Origin Read Blocking](https://fetch.spec.whatwg.org/#corb) (CORB), ein Mechanismus, der standardmäßig einige Cross-Origin-Lesezugriffe verhindert.

> [!NOTE]
> Die Richtlinie ist nur wirksam für [`no-cors`](https://fetch.spec.whatwg.org/#concept-request-mode) Anfragen, die standardmäßig für CORS-safelisted Methoden/Header gestellt werden.

Da diese Richtlinie über einen _{{Glossary("Response_header", "Antwort-Header")}}_ ausgedrückt wird, wird die tatsächliche Anfrage nicht verhindert – vielmehr verhindert der Browser, dass das _Ergebnis_ durchsickert, indem der Antwortkörper entfernt wird.

## Verwendung

> [!NOTE]
> Aufgrund eines [Bugs in Chrome](https://crbug.com/1074261) kann die Einstellung von Cross-Origin-Resource-Policy das Rendern von PDFs beeinträchtigen, was verhindert, dass Besucher weiter als die erste Seite einiger PDFs lesen können. Seien Sie vorsichtig bei der Verwendung dieses Headers in produktiven Umgebungen.

Webanwendungen setzen eine Cross-Origin Resource Policy über den {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP-Antwort-Header, der einen von drei Werten akzeptiert:

- `same-site`

  - : Nur Anfragen von derselben _{{Glossary("Site", "Site")}}_ können die Ressource lesen.

    > [!WARNING]
    > Dies ist weniger sicher als ein {{Glossary("origin", "Ursprung")}}. Der [Algorithmus zur Überprüfung, ob zwei Ursprünge dieselbe Seite haben](https://html.spec.whatwg.org/multipage/origin.html#same-site) ist im HTML-Standard definiert und beinhaltet das Überprüfen der _registrierbaren Domain_.

- `same-origin`
  - : Nur Anfragen vom selben _{{Glossary("origin", "Ursprung")}}_ (d.h. Schema + Host + Port) können die Ressource lesen.
- `cross-origin`
  - : Anfragen von jedem _{{Glossary("origin", "Ursprung")}}_ (sowohl same-site als auch cross-site) können die Ressource lesen. Dies ist nützlich, wenn COEP verwendet wird (siehe unten).

```http
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

Während einer Cross-Origin-Resource-Policy-Prüfung, wenn der Header gesetzt ist, wird der Browser `no-cors` Anfragen von einem anderen Ursprung/Site ablehnen.

## Beziehung zur Cross-Origin-Embedder-Policy (COEP)

Der {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP-Antwort-Header kann, wenn er in einem Dokument verwendet wird, genutzt werden, um Unterressourcen zu erfordern, entweder denselben Ursprung wie das Dokument zu haben oder mit einem {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP-Antwort-Header zu kommen, um anzuzeigen, dass sie damit einverstanden sind, eingebettet zu werden. Dies ist der Grund, warum der `cross-origin` Wert existiert.

## Geschichte

Das Konzept wurde ursprünglich 2012 als `From-Origin` vorgeschlagen, aber im zweiten Quartal 2018 [wiederbelebt](https://github.com/whatwg/fetch/issues/687) und in Safari und Chromium implementiert.

Anfang 2018 wurden zwei Seitenkanal-Hardware-Schwachstellen namens _Meltdown_ und _Spectre_ offengelegt. Diese Schwachstellen ermöglichten die Offenlegung sensibler Daten aufgrund einer Race Condition, die Teil der spekulativen Ausführungsfunktionalität war, die zur Leistungsverbesserung entwickelt wurde.

Als Reaktion darauf hat Chromium das [Cross-Origin Read Blocking](https://fetch.spec.whatwg.org/#corb) bereitgestellt, das automatisch bestimmte Ressourcen (mit `Content-Type` HTML, JSON und XML) vor Cross-Origin-Lesezugriffen schützt. Wenn die Anwendung keine [`no-sniff`-Direktive](/de/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options) bereitstellt, versucht Chromium, den `Content-Type` zu erraten und den Schutz dennoch anzuwenden.

`Cross-Origin-Resource-Policy` ist ein opt-in Antwort-Header, der _jede_ Ressource schützen kann; es ist nicht erforderlich, dass Browser MIME-Typen sniffen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP-Header
