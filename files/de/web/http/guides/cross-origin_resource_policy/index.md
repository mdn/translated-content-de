---
title: Cross-Origin Resource Policy (CORP)
slug: Web/HTTP/Guides/Cross-Origin_Resource_Policy
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**Cross-Origin Resource Policy** ist eine Richtlinie, die durch den [`Cross-Origin-Resource-Policy` HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy) festgelegt wird. Sie ermöglicht es Websites und Anwendungen, einen Schutz gegen bestimmte Anfragen von anderen Ursprüngen (wie solche, die mit Elementen wie `<script>` und `<img>` gesendet werden) zu nutzen. Dies dient dazu, spekulative Seitenkanalangriffe, wie [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>), sowie Cross-Site Script Inclusion-Angriffe zu mindern.

CORP ist eine zusätzliche Schutzschicht über die standardmäßige {{Glossary("same-origin_policy", "Same-Origin-Policy")}} hinaus. Cross-Origin Resource Policy ergänzt das [Cross-Origin Read Blocking](https://fetch.spec.whatwg.org/#corb) (CORB), das ein Mechanismus ist, um einige Cross-Origin-Lesezugriffe standardmäßig zu verhindern.

> [!NOTE]
> Die Richtlinie ist nur wirksam für [`no-cors`](https://fetch.spec.whatwg.org/#concept-request-mode)-Anfragen, die standardmäßig für CORS-Whitelist-Methoden/Header gesendet werden.

Da diese Richtlinie über einen _{{Glossary("Response_header", "Response-Header")}}_ ausgedrückt wird, wird die eigentliche Anfrage nicht verhindert. Vielmehr verhindert der Browser, dass das _Ergebnis_ durch das Entfernen des Antwortinhalts durchsickert.

## Verwendung

> [!NOTE]
> Aufgrund eines [Fehlers in Chrome](https://crbug.com/1074261) kann das Setzen von Cross-Origin-Resource-Policy das PDF-Rendering beeinträchtigen, was verhindern kann, dass Besucher über die erste Seite einiger PDFs hinauslesen können. Seien Sie vorsichtig bei der Verwendung dieses Headers in einer Produktionsumgebung.

Webanwendungen setzen eine Cross-Origin Resource Policy über den {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP-Response-Header, der einen von drei Werten akzeptiert:

- `same-site`
  - : Nur Anfragen von derselben _{{Glossary("Site", "Seite")}}_ können die Ressource lesen.

    > [!WARNING]
    > Dies ist weniger sicher als ein {{Glossary("origin", "Ursprung")}}. Der [Algorithmus zur Überprüfung, ob zwei Ursprünge dieselbe Seite sind](https://html.spec.whatwg.org/multipage/origin.html#same-site) ist im HTML-Standard definiert und beinhaltet die Überprüfung der _registrierbaren Domain_.

- `same-origin`
  - : Nur Anfragen vom selben _{{Glossary("origin", "Ursprung")}}_ (d.h. Schema + Host + Port) können die Ressource lesen.
- `cross-origin`
  - : Anfragen von jedem _{{Glossary("origin", "Ursprung")}}_ (sowohl same-site als auch cross-site) können die Ressource lesen. Dies ist nützlich, wenn COEP verwendet wird (siehe unten).

```http
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

Während der Überprüfung der Cross-Origin Resource Policy verweigert der Browser, falls der Header gesetzt ist, `no-cors`-Anfragen, die von einem anderen Ursprung/Seite stammen.

## Beziehung zur Cross-Origin Embedder Policy (COEP)

Der {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP-Response-Header kann, wenn er auf ein Dokument angewendet wird, verwendet werden, um zu verlangen, dass Unterressourcen entweder vom selben Ursprung wie das Dokument stammen oder dass sie mit einem {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP-Response-Header kommen, um anzuzeigen, dass sie mit der Einbettung einverstanden sind. Dies ist der Grund, warum der Wert `cross-origin` existiert.

## Geschichte

Das Konzept wurde ursprünglich im Jahr 2012 (als `From-Origin`) vorgeschlagen, aber im zweiten Quartal 2018 [wiederbelebt](https://github.com/whatwg/fetch/issues/687) und in Safari und Chromium implementiert.

Anfang 2018 wurden zwei Seitenkanal-Hardware-Schwachstellen bekannt, die als _Meltdown_ und _Spectre_ bekannt sind. Diese Schwachstellen ermöglichten die Offenlegung sensibler Daten aufgrund einer Race Condition, die im Rahmen der spekulativen Ausführungsfunktionalität auftrat, die zur Leistungsverbesserung entwickelt wurde.

Als Reaktion darauf wurde von Chromium [Cross-Origin Read Blocking](https://fetch.spec.whatwg.org/#corb) ausgeliefert, das automatisch bestimmte Ressourcen (der `Content-Type` HTML, JSON und XML) vor Cross-Origin-Lesezugriffen schützt. Wenn die Anwendung keine [`no-sniff`-Anweisung](/de/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options) bereitstellt, wird Chromium versuchen, den `Content-Type` zu erraten und den Schutz trotzdem anzuwenden.

`Cross-Origin-Resource-Policy` ist ein optionaler Response-Header, der _jede_ Ressource schützen kann; es ist nicht notwendig, dass Browser MIME-Typen erraten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP-Header
