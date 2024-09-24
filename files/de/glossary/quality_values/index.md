---
title: Qualitätswerte
slug: Glossary/Quality_values
l10n:
  sourceCommit: 5090082ff453369e1b9c44bf2bc975a00614114a
---

{{GlossarySidebar}}

**Qualitätswerte**, oder _q-Werte_ und _q-Faktoren_, werden verwendet, um die Reihenfolge der Priorität von Werten in einer kommagetrennten Liste zu beschreiben. Es handelt sich um eine spezielle Syntax, die in einigen [HTTP-Headern](/de/docs/Web/HTTP/Headers) und in HTML erlaubt ist.

Die Wichtigkeit eines Wertes wird durch das Suffix `';q='` angezeigt, dem unmittelbar ein Wert zwischen `0` und `1` folgt, einschließlich bis zu drei Dezimalstellen, wobei der höchste Wert die höchste Priorität anzeigt. Wenn er nicht vorhanden ist, beträgt der Standardwert `1`.

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

Wenn für die ersten beiden Werte keine Priorität definiert ist, ist die Reihenfolge in der Liste irrelevant. Dennoch haben bei gleicher Qualität spezifischere Werte Vorrang gegenüber weniger spezifischen:

```http
text/html;q=0.8,text/*;q=0.8,*/*;q=0.8
```

| Wert         | Priorität                    |
| ------------ | ---------------------------- |
| `text/html`  | `0.8` (aber vollständig spezifiziert) |
| `text/*`     | `0.8` (teilweise spezifiziert)       |
| `*/*`        | `0.8` (nicht spezifiziert)           |

Einige Syntaxe, wie die von {{HTTPHeader("Accept")}}, erlauben zusätzliche Spezifizierer wie `text/html;level=1`. Diese erhöhen die Spezifität des Wertes. Ihre Verwendung ist äußerst selten.

## Mehr Informationen

- [HTTP-Header, die q-Werte in ihrer Syntax verwenden:](/de/docs/Web/HTTP/Headers) {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("TE")}}, {{HTTPHeader("Want-Digest")}}.
- [Definitionen von Header-Feldern.](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)
