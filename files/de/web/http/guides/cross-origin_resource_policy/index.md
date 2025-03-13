---
title: Cross-Origin Resource Policy (CORP)
slug: Web/HTTP/Guides/Cross-Origin_Resource_Policy
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

**Cross-Origin Resource Policy** ist eine Richtlinie, die durch den [`Cross-Origin-Resource-Policy` HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy) festgelegt wird und es Websites und Anwendungen ermöglicht, sich gegen bestimmte Anfragen von anderen Ursprüngen zu schützen (wie solche, die mit Elementen wie `<script>` und `<img>` erstellt werden), um spekulative Seitenkanalangriffe wie [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>) sowie Cross-Site Script Inclusion-Angriffe zu mildern.

CORP ist eine zusätzliche Schutzschicht über die standardmäßige {{Glossary("same-origin_policy", "Same-Origin-Richtlinie")}} hinaus. Cross-Origin Resource Policy ergänzt [Cross-Origin Read Blocking](https://fetch.spec.whatwg.org/#corb) (CORB), ein Mechanismus, der standardmäßig einige Cross-Origin-Lesezugriffe verhindert.

> [!NOTE]
> Die Richtlinie ist nur bei [`no-cors`](https://fetch.spec.whatwg.org/#concept-request-mode) Anfragen wirksam, die standardmäßig für CORS-gesicherte Methoden/Header ausgegeben werden.

Da diese Richtlinie über einen _{{Glossary("Response_header", "Response-Header")}}_ ausgedrückt wird, wird die eigentliche Anfrage nicht verhindert – vielmehr verhindert der Browser, dass das _Ergebnis_ durchsickert, indem er den Antwortkörper entfernt.

## Nutzung

> [!NOTE]
> Aufgrund eines [Bugs in Chrome](https://crbug.com/1074261) kann das Einstellen von Cross-Origin-Resource-Policy die PDF-Darstellung beeinträchtigen und verhindern, dass Besucher über die erste Seite einiger PDFs hinauslesen können. Seien Sie vorsichtig bei der Verwendung dieses Headers in einer Produktionsumgebung.

Webanwendungen setzen eine Cross-Origin Resource Policy über den {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP-Antwortheader, der einen von drei Werten akzeptiert:

- `same-site`

  - : Nur Anfragen von derselben _{{Glossary("Site", "Site")}}_ können die Ressource lesen.

    > [!WARNING]
    > Dies ist weniger sicher als ein {{Glossary("origin", "origin")}}. Der [Algorithmus zum Prüfen, ob zwei Ursprünge dieselbe Site sind](https://html.spec.whatwg.org/multipage/origin.html#same-site) ist im HTML-Standard definiert und bezieht das _registrierbare Domain_ ein.

- `same-origin`
  - : Nur Anfragen vom selben _{{Glossary("origin", "origin")}}_ (d.h. Schema + Host + Port) können die Ressource lesen.
- `cross-origin`
  - : Anfragen von jedem _{{Glossary("origin", "origin")}}_ (sowohl same-site als auch cross-site) können die Ressource lesen. Dies ist nützlich, wenn COEP verwendet wird (siehe unten).

```http
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

Während einer Kontrolle der Cross-Origin Resource Policy, wenn der Header gesetzt ist, wird der Browser `no-cors` Anfragen, die von einem anderen Ursprung/Site stammen, ablehnen.

## Beziehung zur Cross-Origin Embedder Policy (COEP)

Der {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP-Antwortheader kann, wenn er in einem Dokument verwendet wird, verlangen, dass Unterressourcen entweder gleichherkunft mit dem Dokument sind oder mit einem {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP-Antwortheader kommen, um anzuzeigen, dass sie mit der Einbettung einverstanden sind. Deshalb existiert der Wert `cross-origin`.

## Geschichte

Das Konzept wurde ursprünglich 2012 (als `From-Origin`) vorgeschlagen, aber im Q2 2018 [wiederbelebt](https://github.com/whatwg/fetch/issues/687) und in Safari und Chromium implementiert.

Anfang 2018 wurden zwei Seitenkanal-Hardware-Schwachstellen namens _Meltdown_ und _Spectre_ bekanntgemacht. Diese Schwachstellen ermöglichten die Offenlegung sensibler Daten aufgrund einer Rennbedingung, die als Teil der spekulativen Ausführungsfunktionalität entstand, die entwickelt wurde, um die Leistung zu verbessern.

Als Reaktion darauf hat Chromium [Cross-Origin Read Blocking](https://fetch.spec.whatwg.org/#corb) eingeführt, das automatisch bestimmte Ressourcen (von `Content-Type` HTML, JSON und XML) gegen Cross-Origin-Lesezugriffe schützt. Wenn die Anwendung keine [`no-sniff` Direktive](/de/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options) ausgibt, wird Chromium versuchen, den `Content-Type` zu erraten und den Schutz trotzdem anzuwenden.

`Cross-Origin-Resource-Policy` ist ein Opt-in Antwortheader, der _jede_ Ressource schützen kann; es ist nicht notwendig, dass Browser MIME-Typen untersuchen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP Header
