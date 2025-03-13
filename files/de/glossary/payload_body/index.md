---
title: Nutzlastkörper
slug: Glossary/Payload_body
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{GlossarySidebar}}

In HTTP-Nachrichten war der **Nutzlastkörper** oder **Nutzlast** die Ressourcen-Darstellung, die in einem Nachrichtenkörper übertragen wurde, ohne jegliche [Transfer-Encoding](/de/docs/Web/HTTP/Reference/Headers/Transfer-Encoding). Ohne Transfer-Encoding sind der _Nutzlastkörper_ und der _Nachrichtenkörper_ identisch. Darstellungsdaten könnten auch in HTTP-Headern übertragen werden, aber solche Daten würden nicht als "Nutzlast" betrachtet werden.

Seit {{RFC("9110")}} ersetzt das Wort **Inhalt** das Wort **Nutzlast**. Siehe {{Glossary("HTTP_Content", "**HTTP-Inhalt**")}}.

## Siehe auch

- {{Glossary("Content_header", "Inhalts-Header")}}
- [RFC 9110, Abschnitt 6.4: Inhalt](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4) (setzt [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3) Payload-Semantik außer Kraft)
  - [Änderungen von RFC 7231](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
