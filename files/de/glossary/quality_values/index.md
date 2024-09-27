---
title: Qualitätswerte
slug: Glossary/Quality_values
l10n:
  sourceCommit: 5090082ff453369e1b9c44bf2bc975a00614114a
---

{{GlossarySidebar}}

**Qualitätswerte**, oder _q-Werte_ und _q-Faktoren_, werden verwendet, um die Prioritätenreihenfolge von Werten in einer durch Kommas getrennten Liste zu beschreiben. Es handelt sich um eine spezielle Syntax, die in einigen [HTTP-Headern](/de/docs/Web/HTTP/Headers) und in HTML erlaubt ist.

Die Wichtigkeit eines Wertes wird durch den Suffix `';q='` angegeben, gefolgt von einem Wert zwischen `0` und `1` inklusive, mit bis zu drei Dezimalstellen. Der höchste Wert zeigt die höchste Priorität an. Wenn nicht vorhanden, ist der Standardwert `1`.

## Beispiele

Die folgende Syntax

```http
text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
```

gibt die Prioritätenreihenfolge an:

| Wert                                    | Priorität |
| --------------------------------------- | --------- |
| `text/html` und `application/xhtml+xml` | `1.0`     |
| `application/xml`                       | `0.9`     |
| `*/*`                                   | `0.8`     |

Wenn für die ersten beiden Werte keine Priorität definiert ist, ist die Reihenfolge in der Liste irrelevant. Dennoch haben bei gleicher Qualität spezifischere Werte Vorrang vor weniger spezifischen:

```http
text/html;q=0.8,text/*;q=0.8,*/*;q=0.8
```

| Wert        | Priorität                             |
| ----------- | ------------------------------------- |
| `text/html` | `0.8` (aber vollständig spezifiziert) |
| `text/*`    | `0.8` (teilweise spezifiziert)        |
| `*/*`       | `0.8` (nicht spezifiziert)            |

Einige Syntaxen, wie die des {{HTTPHeader("Accept")}}, erlauben zusätzliche Spezifikatoren wie `text/html;level=1`. Diese erhöhen die Spezifität des Wertes. Ihre Verwendung ist extrem selten.

## Weitere Informationen

- [HTTP-Header](/de/docs/Web/HTTP/Headers), die q-Werte in ihrer Syntax verwenden: {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("TE")}}, {{HTTPHeader("Want-Digest")}}.
- [Definitionen von Headerfeldern.](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)
