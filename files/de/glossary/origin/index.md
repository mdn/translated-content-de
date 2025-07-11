---
title: Ursprung
slug: Glossary/Origin
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Der **Ursprung** von Webinhalten wird durch das _Schema_ (Protokoll), den _Hostnamen_ (Domain) und den _Port_ der {{Glossary("URL", "URL")}} definiert, die zum Zugriff darauf verwendet wird. Zwei Objekte haben denselben Ursprung nur dann, wenn Schema, Hostname und Port übereinstimmen.

Einige Operationen sind auf Inhalte mit demselben Ursprung beschränkt, und diese Einschränkung kann mithilfe von {{Glossary("CORS", "CORS")}} aufgehoben werden.

## Beispiele

Diese haben denselben Ursprung, weil sie dasselbe Schema (`http`) und denselben Hostnamen (`example.com`) haben; der unterschiedliche Dateipfad spielt keine Rolle:

- `http://example.com/app1/index.html`
- `http://example.com/app2/index.html`

Diese haben denselben Ursprung, weil ein Server standardmäßig Inhalte über Port 80 mit HTTP liefert:

- `http://example.com:80`
- `http://example.com`

Diese haben nicht denselben Ursprung, weil sie unterschiedliche Schemas verwenden:

- `http://example.com/app1`
- `https://example.com/app2`

Diese haben nicht denselben Ursprung, weil sie unterschiedliche Hostnamen verwenden:

- `http://example.com`
- `http://www.example.com`
- `http://myapp.example.com`

Diese haben nicht denselben Ursprung, weil sie unterschiedliche Ports verwenden:

- `http://example.com`
- `http://example.com:8080`

## Siehe auch

- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
- Verwandte Glossarbegriffe:
  - {{Glossary("Site", "Site")}}
- [HTML-Spezifikation: origin](https://html.spec.whatwg.org/multipage/origin.html#origin)
