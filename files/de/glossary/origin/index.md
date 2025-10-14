---
title: Origin
slug: Glossary/Origin
l10n:
  sourceCommit: 231152e9a749aaeba8de45f4cc712845a470dda9
---

Der **Origin** von Webinhalten wird durch das _Schema_ (Protokoll), den _Hostname_ (Domain) und den _Port_ der {{Glossary("URL", "URL")}} definiert, die zum Zugriff verwendet wird. Zwei Objekte haben nur dann denselben Origin, wenn Schema, Hostname und Port übereinstimmen.

Einige Operationen sind auf Inhalte mit demselben Origin beschränkt, und diese Einschränkung kann mit {{Glossary("CORS", "CORS")}} aufgehoben werden.

## Opaquer Origin

Ein opaker Origin ist ein spezieller browserinterner Wert, der den echten Ursprung einer Ressource verschleiert (opake Im Ursprünge werden immer als `null` serialisiert). Sie werden vom Browser verwendet, um die Isolation von Ressourcen zu gewährleisten, da sie niemals als gleich zu einem anderen Origin betrachtet werden, einschließlich anderer opaker Ursprünge.

Opake Ursprünge werden in Fällen angewendet, in denen der echte Ursprung einer Ressource sensibel ist, nicht sicher für Sicherheitsüberprüfungen verwendet werden kann oder nicht existiert. Eine Ressource mit einem opaken Origin hat im {{httpheader("Origin")}} HTTP-Header von Anfragen den Wert [`null`](/de/docs/Web/HTTP/Reference/Headers/Origin#null). Sie wird auch bei Überprüfungen auf denselben Origin mit anderen Ressourcen fehlschlagen und ist somit auf jene Operationen beschränkt, die für Cross-Origin-Ressourcen verfügbar sind.

Häufige Fälle, in denen opake Ursprünge verwendet werden, sind:

- Ein Dokument innerhalb eines iframes, das das [sandbox](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) Attribut gesetzt hat und nicht das `allow-same-origin` Flag enthält.
- `file:` URLs werden normalerweise als opake Ursprünge behandelt, damit Dateien auf dem Dateisystem einander nicht lesen können.
- Dokumente, die programmatisch mithilfe von APIs wie [`DOMImplementation.createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) erstellt werden.

## Beispiele

Diese haben denselben Origin, da sie dasselbe Schema (`http`) und denselben Hostname (`example.com`) besitzen, und der unterschiedliche Dateipfad keine Rolle spielt:

- `http://example.com/app1/index.html`
- `http://example.com/app2/index.html`

Diese haben denselben Origin, da ein Server standardmäßig HTTP-Inhalte über Port 80 liefert:

- `http://example.com:80`
- `http://example.com`

Diese haben nicht denselben Origin, da sie unterschiedliche Schemata verwenden:

- `http://example.com/app1`
- `https://example.com/app2`

Diese haben nicht denselben Origin, da sie unterschiedliche Hostnames verwenden:

- `http://example.com`
- `http://www.example.com`
- `http://myapp.example.com`

Diese haben nicht denselben Origin, da sie unterschiedliche Ports verwenden:

- `http://example.com`
- `http://example.com:8080`

## Siehe auch

- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
- Verwandte Glossareinträge:
  - {{Glossary("Site", "Site")}}
- [HTML-Spezifikation: Origin](https://html.spec.whatwg.org/multipage/origin.html#origin)
