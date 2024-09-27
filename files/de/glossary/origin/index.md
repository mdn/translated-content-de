---
title: Origin
slug: Glossary/Origin
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Der **Origin** von Webinhalten wird durch das _Schema_ (Protokoll), den _Hostname_ (Domain) und den _Port_ der [URL](/de/docs/Glossary/URL) definiert, die zum Zugriff darauf verwendet wird. Zwei Objekte haben nur dann denselben Origin, wenn Schema, Hostname und Port übereinstimmen.

Einige Operationen sind auf Inhalte mit demselben Origin beschränkt, und diese Einschränkung kann mit [CORS](/de/docs/Glossary/CORS) aufgehoben werden.

## Beispiele

Diese URLs haben denselben Origin, weil sie dasselbe Schema (`http`) und denselben Hostnamen (`example.com`) haben, und der unterschiedliche Dateipfad keine Rolle spielt:

- `http://example.com/app1/index.html`
- `http://example.com/app2/index.html`

Diese URLs haben denselben Origin, weil ein Server HTTP-Inhalte standardmäßig über Port 80 liefert:

- `http://example.com:80`
- `http://example.com`

Diese URLs haben nicht denselben Origin, weil sie unterschiedliche Schemas verwenden:

- `http://example.com/app1`
- `https://example.com/app2`

Diese URLs haben nicht denselben Origin, weil sie unterschiedliche Hostnamen verwenden:

- `http://example.com`
- `http://www.example.com`
- `http://myapp.example.com`

Diese URLs haben nicht denselben Origin, weil sie unterschiedliche Ports verwenden:

- `http://example.com`
- `http://example.com:8080`

## Siehe auch

- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
- Verwandte Glossarbegriffe:
  - [Site](/de/docs/Glossary/Site)
- [HTML-Spezifikation: origin](https://html.spec.whatwg.org/multipage/origin.html#origin)
