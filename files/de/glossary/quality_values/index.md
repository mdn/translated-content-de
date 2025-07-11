---
title: Qualitätswerte
slug: Glossary/Quality_values
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Qualitätswerte**, auch bekannt als _q-Werte_ und _q-Faktoren_, werden verwendet, um die Reihenfolge der Priorität von Werten in einer kommagetrennten Liste zu beschreiben. Es handelt sich um eine spezielle Syntax, die in einigen [HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers) und in HTML erlaubt ist.

Die Wichtigkeit eines Wertes wird durch das Suffix `';q='` gekennzeichnet, gefolgt von einem Wert zwischen `0` und `1`, mit bis zu drei Dezimalstellen. Der höchste Wert steht für die höchste Priorität. Wenn keine Angabe erfolgt, ist der Standardwert `1`.

## Beispiele

Die folgende Syntax

```http
text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
```

zeigt die Reihenfolge der Priorität an:

| Wert                                    | Priorität |
| --------------------------------------- | --------- |
| `text/html` und `application/xhtml+xml` | `1.0`     |
| `application/xml`                       | `0.9`     |
| `*/*`                                   | `0.8`     |

Wenn für die ersten beiden Werte keine Priorität definiert ist, ist die Reihenfolge in der Liste unerheblich. Dennoch haben bei gleicher Qualität spezifischere Werte Vorrang vor weniger spezifischen:

```http
text/html;q=0.8,text/*;q=0.8,*/*;q=0.8
```

| Wert        | Priorität                             |
| ----------- | ------------------------------------- |
| `text/html` | `0.8` (aber vollständig spezifiziert) |
| `text/*`    | `0.8` (teilweise spezifiziert)        |
| `*/*`       | `0.8` (nicht spezifiziert)            |

Einige Syntaxen, wie die von {{HTTPHeader("Accept")}}, erlauben zusätzliche Spezifikatoren wie `text/html;level=1`. Diese erhöhen die Spezifität des Wertes. Ihre Verwendung ist äußerst selten.

## Weitere Informationen

- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), die q-Werte in ihrer Syntax verwenden: {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("TE")}}.
- [Definitionen der Header-Felder.](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)
