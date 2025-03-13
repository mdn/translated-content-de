---
title: Qualitätswerte
slug: Glossary/Quality_values
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{GlossarySidebar}}

**Qualitätswerte**, oder _q-Werte_ und _q-Faktoren_, werden verwendet, um die Prioritätsreihenfolge von Werten in einer kommagetrennten Liste zu beschreiben. Es ist eine spezielle Syntax, die in einigen [HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers) und in HTML erlaubt ist.

Die Bedeutung eines Wertes wird durch den Suffix `';q='` gekennzeichnet, der unmittelbar von einem Wert zwischen `0` und `1` inklusive, mit bis zu drei Dezimalstellen, gefolgt wird. Der höchste Wert kennzeichnet die höchste Priorität. Wenn nicht vorhanden, ist der Standardwert `1`.

## Beispiele

Die folgende Syntax

```http
text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
```

zeigt die Prioritätsreihenfolge an:

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

Einige Syntaxen, wie die von {{HTTPHeader("Accept")}}, erlauben zusätzliche Spezifizierer wie `text/html;level=1`. Diese erhöhen die Spezifität des Wertes. Ihre Verwendung ist äußerst selten.

## Weitere Informationen

- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), die q-Werte in ihrer Syntax verwenden: {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("TE")}}.
- [Definition der Header-Felder.](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)
