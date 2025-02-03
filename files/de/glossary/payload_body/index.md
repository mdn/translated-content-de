---
title: Nutzlastkörper
slug: Glossary/Payload_body
l10n:
  sourceCommit: 35fbd848ed51e184b70383fcf96fbe622a33c887
---

{{GlossarySidebar}}

In HTTP-Nachrichten war der **Nutzlastkörper** oder die **Nutzlast** die Repräsentation einer Ressource, die in einem Nachrichtentext übertragen wurde, abzüglich jeder [Transfercodierung](/de/docs/Web/HTTP/Headers/Transfer-Encoding). Ohne Transfercodierung sind der _Nutzlastkörper_ und der _Nachrichtentext_ identisch. Repräsentationsdaten könnten auch in HTTP-Headern übertragen werden, aber solche Daten würden nicht als "Nutzlast" betrachtet werden.

Seit {{RFC("9110")}} ersetzt das Wort **Inhalt** das Wort **Nutzlast**. Siehe {{Glossary("HTTP_Content", "**HTTP-Inhalt**")}}.

## Siehe auch

- {{Glossary("Content_header", "Inhalts-Header")}}
- [RFC 9110, Abschnitt 6.4: Inhalt](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4) (ersetzt [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3) Nutzlast-Semantik)
  - [Änderungen seit RFC 7231](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
