---
title: Ursprung
slug: Glossary/Origin
l10n:
  sourceCommit: 7ff752fba26e0bb950998bb5476157ff96c7d314
---

Der **Ursprung** von Webinhalten wird durch das _Schema_ (Protokoll), den _Hostnamen_ (Domain) und den _Port_ der {{Glossary("URL", "URL")}} definiert, die zum Zugriff verwendet wird. Zwei Objekte haben denselben Ursprung nur dann, wenn das Schema, der Hostname und der Port übereinstimmen.

Einige Operationen sind auf Inhalte mit demselben Ursprung beschränkt, und diese Einschränkung kann durch {{Glossary("CORS", "CORS")}} aufgehoben werden.

## Opaquer Ursprung

Ein opaker Ursprung ist eine spezielle Art von internem Browserwert, der den wahren Ursprung einer Ressource verbirgt (opake Ursprünge werden immer als `null` serialisiert). Sie werden vom Browser verwendet, um die Ressourcentrennung sicherzustellen, da sie nie als gleich zu einem anderen Ursprung betrachtet werden — einschließlich anderer opaker Ursprünge.

Opake Ursprünge werden in Fällen angewendet, in denen der wahre Ursprung einer Ressource sensibel ist, nicht sicher für Sicherheitsüberprüfungen verwendet werden kann oder nicht existiert. Eine Ressource mit einem opaken Ursprung wird ihren {{httpheader("Origin")}} HTTP-Header in Anfragen auf [`null`](/de/docs/Web/HTTP/Reference/Headers/Origin#null) setzen. Sie wird auch bei Prüfungen auf denselben Ursprung mit jeder anderen Ressource fehlschlagen und ist daher auf diejenigen Operationen beschränkt, die für ressourcenübergreifende Vorgänge verfügbar sind.

Häufige Anwendungsfälle für opake Ursprünge sind:

- Ein Dokument innerhalb eines iframes, das das [sandbox](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox)-Attribut gesetzt hat und nicht das `allow-same-origin`-Flag enthält.
- `file:` URLs werden in der Regel als opake Ursprünge behandelt, sodass Dateien im Dateisystem einander nicht lesen können.
- Dokumente, die programmatisch unter Verwendung von APIs wie [`DOMImplementation.createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) erstellt werden.

## Beispiele

Diese haben denselben Ursprung, da sie dasselbe Schema (`http`) und denselben Hostname (`example.com`) haben, und der unterschiedliche Dateipfad ist nicht relevant:

- `http://example.com/app1/index.html`
- `http://example.com/app2/index.html`

Diese haben denselben Ursprung, weil ein Server HTTP-Inhalte standardmäßig über Port 80 liefert:

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

- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
- Verwandte Glossarbegriffe:
  - {{Glossary("Site", "Site")}}
- [HTML-Spezifikation: Ursprung](https://html.spec.whatwg.org/multipage/origin.html#origin)
