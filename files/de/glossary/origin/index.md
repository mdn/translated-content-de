---
title: Ursprung
slug: Glossary/Origin
l10n:
  sourceCommit: 39381e0841cf574bf72f02c68d22babc19f89127
---

Der **Ursprung** von Webinhalt wird durch das _Schema_ (Protokoll), den _Hostname_ (Domain) und den _Port_ der {{Glossary("URL", "URL")}} definiert, die zum Zugriff darauf verwendet wird. Zwei Objekte haben nur dann denselben Ursprung, wenn Schema, Hostname und Port übereinstimmen.

Einige Operationen sind auf Inhalte mit demselben Ursprung beschränkt, und diese Beschränkung kann durch {{Glossary("CORS", "CORS")}} aufgehoben werden.

## Opaquer Ursprung

Ein opaker Ursprung ist eine spezielle Art von browserinternem Wert, der den wahren Ursprung einer Ressource verschleiert (opake Ursprünge werden immer als `null` serialisiert). Sie werden vom Browser verwendet, um die Isolation von Ressourcen sicherzustellen, da sie niemals als gleich mit einem anderen Ursprung angesehen werden — einschließlich anderer opaker Ursprünge.

Opake Ursprünge werden in Fällen angewendet, in denen der wahre Ursprung einer Ressource sensibel ist, nicht sicher für Sicherheitsüberprüfungen verwendet werden kann oder nicht existiert. Eine Ressource mit einem opaken Ursprung wird in Anfragen ihren {{httpheader("Origin")}} HTTP-Header auf [`null`](/de/docs/Web/HTTP/Reference/Headers/Origin#null) gesetzt haben. Sie wird auch bei Überprüfungen auf denselben Ursprung mit jeder anderen Ressource scheitern und ist daher nur auf diejenigen Operationen beschränkt, die für Cross-Origin-Ressourcen verfügbar sind.

Häufige Fälle, in denen opake Ursprünge verwendet werden, sind:

- Ein Dokument innerhalb eines iframes, das das [sandbox](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) Attribut gesetzt hat und nicht das `allow-same-origin` Flag enthält.
- `file:` URLs werden in der Regel als opake Ursprünge behandelt, damit Dateien im Dateisystem nicht gegenseitig gelesen werden können.
- Dokumente, die programmatisch unter Verwendung von APIs wie [`DOMImplementation.createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) erstellt werden.

## Beispiele

Diese haben denselben Ursprung, da sie dasselbe Schema (`http`) und denselben Hostname (`example.com`) haben, und der unterschiedliche Dateipfad spielt keine Rolle:

- `http://example.com/app1/index.html`
- `http://example.com/app2/index.html`

Diese haben denselben Ursprung, da ein Server HTTP-Inhalte standardmäßig über Port 80 liefert:

- `http://example.com:80`
- `http://example.com`

Diese haben nicht denselben Ursprung, da sie unterschiedliche Schemata verwenden:

- `http://example.com/app1`
- `https://example.com/app2`

Diese haben nicht denselben Ursprung, da sie unterschiedliche Hostnamen verwenden:

- `http://example.com`
- `http://www.example.com`
- `http://myapp.example.com`

Diese haben nicht denselben Ursprung, da sie unterschiedliche Ports verwenden:

- `http://example.com`
- `http://example.com:8080`

## Siehe auch

- [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
- Zugehörige Glossarbegriffe:
  - {{Glossary("Site", "Site")}}
- [HTML-Spezifikation: Ursprung](https://html.spec.whatwg.org/multipage/origin.html#origin)
