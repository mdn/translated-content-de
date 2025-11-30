---
title: Ursprung
slug: Glossary/Origin
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Der **Ursprung** von Webinhalten wird durch das _Schema_ (Protokoll), den _Hostname_ (Domain) und den _Port_ der {{Glossary("URL", "URL")}} definiert, die zum Zugriff verwendet wird. Zwei Objekte haben nur dann den gleichen Ursprung, wenn Schema, Hostname und Port übereinstimmen.

Einige Vorgänge sind auf Inhalte mit demselben Ursprung beschränkt, und diese Beschränkung kann mithilfe von {{Glossary("CORS", "CORS")}} aufgehoben werden.

## Undurchsichtiger Ursprung

Ein undurchsichtiger Ursprung ist ein spezieller, browserinterner Wert, der den wahren Ursprung einer Ressource verschleiert (undurchsichtige Ursprünge werden immer als `null` serialisiert). Sie werden vom Browser verwendet, um die Isolation von Ressourcen sicherzustellen, da sie niemals als gleich zu einem anderen Ursprung betrachtet werden — einschließlich anderer undurchsichtiger Ursprünge.

Undurchsichtige Ursprünge werden in Fällen angewendet, in denen der tatsächliche Ursprung einer Ressource sensibel ist, nicht sicher für Sicherheitsprüfungen verwendet werden kann oder nicht existiert.
Eine Ressource mit einem undurchsichtigen Ursprung wird in Anfragen den {{httpheader("Origin")}} HTTP-Header auf [`null`](/de/docs/Web/HTTP/Reference/Headers/Origin#null) gesetzt haben.
Sie wird auch bei gleichen Ursprungsprüfungen mit einer anderen Ressource fehlschlagen und daher auf nur jene Vorgänge beschränkt sein, die für Ursprünge über Kreuz verfügbar sind.

Häufige Fälle, in denen undurchsichtige Ursprünge verwendet werden, umfassen:

- Ein Dokument innerhalb eines iframes, das das [sandbox](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox)-Attribut gesetzt hat und nicht das `allow-same-origin`-Flag enthält.
- `file:` URLs werden in der Regel als undurchsichtige Ursprünge behandelt, damit Dateien im Dateisystem sich nicht gegenseitig lesen können.
- Dokumente, die programmgesteuert mit APIs wie [`DOMImplementation.createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) erstellt werden.

## Beispiele

Diese haben denselben Ursprung, da sie das gleiche Schema (`http`) und den gleichen Hostname (`example.com`) haben, und der unterschiedliche Dateipfad spielt keine Rolle:

- `http://example.com/app1/index.html`
- `http://example.com/app2/index.html`

Diese haben denselben Ursprung, da ein Server HTTP-Inhalte standardmäßig über Port 80 liefert:

- `http://example.com:80`
- `http://example.com`

Diese haben nicht denselben Ursprung, da sie unterschiedliche Schemas verwenden:

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

- [Same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
- Verwandte Glossarbegriffe:
  - {{Glossary("Site", "Site")}}
- [HTML-Spezifikation: origin](https://html.spec.whatwg.org/multipage/origin.html#origin)
