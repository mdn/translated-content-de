---
title: Cross-Origin Resource Policy (CORP)
slug: Web/HTTP/Guides/Cross-Origin_Resource_Policy
l10n:
  sourceCommit: d5c3db4df1e063769b8113567f4558ad4298b00b
---

**Cross-Origin Resource Policy** ist eine Richtlinie, die durch den [`Cross-Origin-Resource-Policy` HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy) festgelegt wird. Sie ermöglicht es Websites und Anwendungen, sich vor bestimmten Anfragen von anderen Origin zu schützen (z. B. solche, die mit Elementen wie `<script>` und `<img>` gestellt werden), um spekulative Seitenkanal-Attacken wie [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>) sowie Cross-Site Script Inclusion-Angriffe zu mildern. CORP ist eine zusätzliche Schutzschicht über die standardmäßige {{Glossary("same-origin_policy", "Same-Origin-Policy")}} hinaus.

> [!NOTE]
> Die Richtlinie ist nur effektiv für [`no-cors`](https://fetch.spec.whatwg.org/#concept-request-mode) Anfragen, die standardmäßig für CORS-sichere Methoden/Headers ausgeführt werden.

Da diese Richtlinie über einen _{{Glossary("Response_header", "Antwort-Header")}}_ ausgedrückt wird, wird die tatsächliche Anfrage nicht verhindert, sondern der Browser verhindert, dass das _Ergebnis_ geleakt wird, indem er den Antwortkörper entfernt.

## Nutzung

> [!NOTE]
> Aufgrund eines [Bugs in Chrome](https://crbug.com/1074261) kann die Einstellung von Cross-Origin-Resource-Policy das Rendern von PDFs stören, was Besucher daran hindert, über die erste Seite einiger PDFs hinaus zu lesen. Seien Sie vorsichtig, diesen Header in einer Produktionsumgebung zu verwenden.

Webanwendungen setzen eine Cross-Origin Resource Policy über den {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP-Antwort-Header, der einen von drei Werten annimmt:

- `same-site`
  - : Nur Anfragen von der gleichen _{{Glossary("Site", "Site")}}_ können die Ressource lesen.

    > [!WARNING]
    > Dies ist weniger sicher als eine {{Glossary("origin", "Origin")}}. Der [Algorithmus zum Überprüfen, ob zwei Origins gleiche Site sind](https://html.spec.whatwg.org/multipage/origin.html#same-site) wird im HTML-Standard definiert und beinhaltet die Überprüfung der _registrierbaren Domain_.

- `same-origin`
  - : Nur Anfragen von der gleichen _{{Glossary("origin", "Origin")}}_ (d.h. Schema + Host + Port) können die Ressource lesen.
- `cross-origin`
  - : Anfragen von jeder _{{Glossary("origin", "Origin")}}_ (sowohl gleiche Site als auch übergreifende Site) können die Ressource lesen. Dies ist nützlich, wenn COEP verwendet wird (siehe unten).

```http
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

Während einer Cross-Origin-Resource-Policy-Überprüfung, wenn der Header gesetzt ist, wird der Browser `no-cors` Anfragen, die von einer anderen Origin/Site gestellt werden, ablehnen.

## Beziehung zur Cross-Origin Embedder Policy (COEP)

Der {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP-Antwort-Header, wenn er bei einem Dokument verwendet wird, kann verwendet werden, um Subressourcen zu verlangen, entweder dieselbe Origin wie das Dokument zu haben oder mit einem {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP-Antwort-Header zu kommen, der angibt, dass sie einverstanden sind, eingebettet zu werden. Deshalb existiert der Wert `cross-origin`.

## Geschichte

Das Konzept wurde ursprünglich im Jahr 2012 (als `From-Origin`-Header) vorgeschlagen, aber [wieder aufgelebt](https://github.com/whatwg/fetch/issues/687) im zweiten Quartal 2018 und in Safari und Chromium implementiert.

Anfang 2018 wurden zwei Seitenkanal-Hardware-Schwachstellen bekannt, die als _Meltdown_ und _Spectre_ bekannt sind. Diese Schwachstellen ermöglichten die Offenlegung sensibler Daten aufgrund einer Race-Bedingung, die als Teil der spekulativen Ausführungsfunktionalität auftrat, die zur Steigerung der Leistung entwickelt wurde.

Die Cross-Origin Resource Policy wurde als direkter Weg entwickelt, um unerwünschte `no-cors` Cross-Origin-Anfragen zu blockieren. Dies ist eine effektive Verteidigung gegen Spectre-ähnliche Angriffe, da der Browser den Körper von gegebenen Antworten entfernt, bevor ein Angreifer darauf zugreifen kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP Header
