---
title: Ursprung
slug: Glossary/Origin
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Der **Ursprung** von Webinhalten wird durch das _Schema_ (Protokoll), den _Hostname_ (Domain) und den _Port_ der verwendeten {{Glossary("URL")}} bestimmt. Zwei Objekte haben nur dann denselben Ursprung, wenn Schema, Hostname und Port übereinstimmen.

Einige Operationen sind auf Inhalte mit demselben Ursprung beschränkt, und diese Beschränkung kann durch die Verwendung von {{Glossary("CORS")}} aufgehoben werden.

## Beispiele

Diese haben denselben Ursprung, da sie das gleiche Schema (`http`) und den gleichen Hostname (`example.com`) haben, und der unterschiedliche Dateipfad spielt keine Rolle:

- `http://example.com/app1/index.html`
- `http://example.com/app2/index.html`

Diese haben denselben Ursprung, da ein Server HTTP-Inhalte standardmäßig über Port 80 bereitstellt:

- `http://example.com:80`
- `http://example.com`

Diese haben nicht denselben Ursprung, da sie unterschiedliche Schemata verwenden:

- `http://example.com/app1`
- `https://example.com/app2`

Diese haben nicht denselben Ursprung, da sie unterschiedliche Hostnames verwenden:

- `http://example.com`
- `http://www.example.com`
- `http://myapp.example.com`

Diese haben nicht denselben Ursprung, da sie unterschiedliche Ports verwenden:

- `http://example.com`
- `http://example.com:8080`

## Siehe auch

- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
- Verwandte Glossarbegriffe:
  - {{Glossary("Site")}}
- [HTML-Spezifikation: Ursprung](https://html.spec.whatwg.org/multipage/origin.html#origin)
