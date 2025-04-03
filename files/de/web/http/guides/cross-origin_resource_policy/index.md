---
title: Cross-Origin Resource Policy (CORP)
slug: Web/HTTP/Guides/Cross-Origin_Resource_Policy
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTTPSidebar}}

Die **Cross-Origin Resource Policy** ist eine Richtlinie, die durch den [`Cross-Origin-Resource-Policy` HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy) festgelegt wird. Sie ermöglicht es Websites und Anwendungen, sich gegen bestimmte Anfragen von anderen Ursprüngen (wie die, die durch Elemente wie `<script>` und `<img>` ausgegeben werden) zu schützen, um spekulative Seitenkanalangriffe, wie [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>), sowie Cross-Site Script Inclusion-Angriffe zu mildern.

CORP ist eine zusätzliche Schutzschicht über die standardmäßige {{Glossary("same-origin_policy", "Same-Origin-Policy")}} hinaus. Cross-Origin Resource Policy ergänzt [Cross-Origin Read Blocking](https://fetch.spec.whatwg.org/#corb) (CORB), einen Mechanismus, der standardmäßig einige Cross-Origin-Lesevorgänge verhindert.

> [!NOTE]
> Die Richtlinie ist nur für [`no-cors`](https://fetch.spec.whatwg.org/#concept-request-mode)-Anfragen wirksam, die standardmäßig für CORS-safelisted Methoden/Headers ausgegeben werden.

Da diese Richtlinie über einen _{{Glossary("Response_header", "Response Header")}}_ ausgedrückt wird, wird die tatsächliche Anfrage nicht verhindert. Vielmehr verhindert der Browser, dass das _Ergebnis_ durch das Entfernen des Antworttextes offengelegt wird.

## Verwendung

> [!NOTE]
> Aufgrund eines [Bugs in Chrome](https://crbug.com/1074261) kann das Setzen von Cross-Origin-Resource-Policy das Rendern von PDFs beeinträchtigen, wodurch Besucher daran gehindert werden, über die erste Seite hinaus zu lesen. Seien Sie vorsichtig bei der Verwendung dieses Headers in einer Produktionsumgebung.

Webanwendungen setzen eine Cross-Origin Resource Policy über den {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP-Response-Header, der einen von drei Werten akzeptiert:

- `same-site`

  - : Nur Anfragen von der gleichen _{{Glossary("Site", "Site")}}_ können die Ressource lesen.

    > [!WARNING]
    > Dies ist weniger sicher als ein {{Glossary("origin", "Origin")}}. Der [Algorithmus zur Überprüfung, ob zwei Ursprünge dieselbe Site sind](https://html.spec.whatwg.org/multipage/origin.html#same-site) ist im HTML-Standard definiert und beinhaltet die Überprüfung der _registrierbaren Domain_.

- `same-origin`
  - : Nur Anfragen vom gleichen _{{Glossary("origin", "Origin")}}_ (d.h. Schema + Host + Port) können die Ressource lesen.
- `cross-origin`
  - : Anfragen von jedem _{{Glossary("origin", "Origin")}}_ (sowohl gleiche Site als auch unterschiedliche Site) können die Ressource lesen. Dies ist nützlich, wenn COEP verwendet wird (siehe unten).

```http
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

Während einer Cross-Origin-Resource-Policy-Überprüfung lehnt der Browser `no-cors`-Anfragen von einem anderen Ursprung/Site ab, wenn der Header gesetzt ist.

## Beziehung zur Cross-Origin Embedder Policy (COEP)

Der {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP-Response-Header kann verwendet werden, um von einem Dokument aus zu verlangen, dass Unterressourcen entweder gleichen Ursprungs mit dem Dokument sind oder mit einem {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP-Response-Header kommen, um anzuzeigen, dass sie eingebettet werden dürfen. Aus diesem Grund existiert der Wert `cross-origin`.

## Geschichte

Das Konzept wurde ursprünglich 2012 vorgeschlagen (als `From-Origin`), aber im zweiten Quartal 2018 [wiederbelebt](https://github.com/whatwg/fetch/issues/687) und in Safari und Chromium implementiert.

Anfang 2018 wurden zwei Hardware-Sicherheitslücken, bekannt als _Meltdown_ und _Spectre_, offengelegt. Diese Schwachstellen ermöglichten die Offenlegung sensibler Daten aufgrund eines Race-Conditions-Problems, das durch die spekulative Ausführungsfunktionalität entstand, die zur Leistungsverbesserung entwickelt wurde.

Als Reaktion darauf implementierte Chromium das [Cross-Origin Read Blocking](https://fetch.spec.whatwg.org/#corb), das bestimmte Ressourcen (`Content-Type` HTML, JSON und XML) automatisch vor Cross-Origin-Lesungen schützt. Wenn die Anwendung keine [`no-sniff` Direktive](/de/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options) bereitstellt, wird Chromium versuchen, den `Content-Type` zu erraten und trotzdem den Schutz anzuwenden.

`Cross-Origin-Resource-Policy` ist ein Opt-in-Response-Header, der _jede_ Ressource schützen kann; es ist nicht erforderlich, dass Browser MIME-Typen erraten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP-Header
