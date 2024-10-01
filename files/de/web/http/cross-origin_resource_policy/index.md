---
title: Cross-Origin Resource Policy (CORP)
slug: Web/HTTP/Cross-Origin_Resource_Policy
l10n:
  sourceCommit: bb23abe84f0f4da3cf5d72a66d356cf5f9e3cfa2
---

{{HTTPSidebar}}

**Cross-Origin Resource Policy** ist eine Richtlinie, die durch den [`Cross-Origin-Resource-Policy` HTTP-Header](/de/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy) festgelegt wird. Diese ermöglicht es Websites und Anwendungen, sich gegen bestimmte Anfragen von anderen Ursprüngen (wie solche, die mit Elementen wie `<script>` und `<img>` verwendet werden) zu schützen, um spekulative Seitenkanalangriffe wie [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>) sowie Cross-Site Script Inclusion-Angriffe zu mildern.

CORP ist eine zusätzliche Schutzschicht über die Standard-{{Glossary("same-origin_policy", "Same-Origin-Policy")}} hinaus. Cross-Origin Resource Policy ergänzt [Cross-Origin Read Blocking](https://fetch.spec.whatwg.org/#corb) (CORB), ein Mechanismus, um einige Cross-Origin-Lesevorgänge standardmäßig zu verhindern.

> [!NOTE]
> Die Richtlinie ist nur wirksam für [`no-cors`](https://fetch.spec.whatwg.org/#concept-request-mode)-Anfragen, die standardmäßig für CORS-safelisted Methoden/Headers gesendet werden.

Da diese Richtlinie über einen _{{Glossary("Response_header", "Response-Header")}}_ ausgedrückt wird, wird die tatsächliche Anfrage nicht verhindert – stattdessen verhindert der Browser, dass das _Ergebnis_ durchsickert, indem er den Antworttext entfernt.

## Verwendung

> [!NOTE]
> Aufgrund eines [Bugs in Chrome](https://crbug.com/1074261) kann das Setzen des Cross-Origin-Resource-Policy Headers die PDF-Darstellung stören und verhindern, dass Besucher über die erste Seite einiger PDFs hinauslesen können. Seien Sie vorsichtig mit der Verwendung dieses Headers in einer Produktivumgebung.

Webanwendungen setzen eine Cross-Origin Resource Policy über den {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP-Response-Header, der einen von drei Werten akzeptiert:

- `same-site`

  - : Nur Anfragen von derselben _{{Glossary("Site", "Site")}}_ können die Ressource lesen.

    > [!WARNING]
    > Dies ist weniger sicher als ein {{Glossary("origin", "Origin")}}. Der [Algorithmus, um zu überprüfen, ob zwei Ursprünge auf derselben Seite sind](https://html.spec.whatwg.org/multipage/origin.html#same-site), ist im HTML-Standard definiert und enthält eine Überprüfung der _registrierbaren Domain_.

- `same-origin`
  - : Nur Anfragen vom selben _{{Glossary("origin", "Origin")}}_ (d. h. Schema + Host + Port) können die Ressource lesen.
- `cross-origin`
  - : Anfragen von jedem _{{Glossary("origin", "Origin")}}_ (sowohl same-site als auch cross-site) können die Ressource lesen. Dies ist nützlich, wenn COEP verwendet wird (siehe unten).

```http
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

Während einer Cross-Origin-Resource-Policy-Prüfung, wenn der Header gesetzt ist, wird der Browser `no-cors` Anfragen ablehnen, die von einem anderen Origin/Site gesendet werden.

## Beziehung zur cross-origin embedder policy (COEP)

Der {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP-Response-Header kann, wenn er auf ein Dokument angewendet wird, verwendet werden, um zu verlangen, dass Subressourcen entweder gleiches Origin mit dem Dokument haben oder mit einem {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP-Response-Header kommen, um anzuzeigen, dass sie eingebettet werden dürfen. Aus diesem Grund existiert der `cross-origin` Wert.

## Geschichte

Das Konzept wurde ursprünglich 2012 vorgeschlagen (als `From-Origin`), aber im Q2 von 2018 [wiederbelebt](https://github.com/whatwg/fetch/issues/687) und in Safari und Chromium implementiert.

Anfang 2018 wurden zwei Seitenkanal-Hardware-Schwachstellen namens _Meltdown_ und _Spectre_ offengelegt. Diese Schwachstellen ermöglichten die Offenlegung sensibler Daten aufgrund einer Rennbedingung, die als Teil der spekulativen Ausführungsfunktion entstand, die darauf abzielt, die Leistung zu verbessern.

Als Reaktion veröffentlichte Chromium [Cross-Origin Read Blocking](https://fetch.spec.whatwg.org/#corb), das automatisch bestimmte Ressourcen (vom `Content-Type` HTML, JSON und XML) gegen Cross-Origin-Lesevorgänge schützt. Wenn die Anwendung keine [`no-sniff`-Direktive](/de/docs/Web/HTTP/Headers/X-Content-Type-Options) bereitstellt, wird Chromium versuchen, den `Content-Type` zu raten und den Schutz trotzdem anzuwenden.

`Cross-Origin-Resource-Policy` ist ein Opt-in-Response-Header, der jede Ressource schützen kann; es ist nicht notwendig, dass Browser MIME-Typen schnüffeln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP-Header
