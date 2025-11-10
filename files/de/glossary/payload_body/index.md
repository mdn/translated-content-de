---
title: Nutzlastkörper
slug: Glossary/Payload_body
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In HTTP-Nachrichten war der **Nutzlastkörper** oder die **Nutzlast** die in einem Nachrichtenkörper übertragene Ressourcenrepräsentation, die von jeglicher [Transfer-Codierung](/de/docs/Web/HTTP/Reference/Headers/Transfer-Encoding) befreit wurde. Ohne Transfer-Codierung sind der _Nutzlastkörper_ und der _Nachrichtenkörper_ identisch. Repräsentationsdaten könnten auch in HTTP-Headern übertragen werden, aber solche Daten würden nicht als "Nutzlast" betrachtet.

Seit {{RFC("9110")}} ersetzt das Wort **Inhalt** das Wort **Nutzlast**. Siehe {{Glossary("HTTP_Content", "**HTTP-Inhalt**")}}.

## Siehe auch

- {{Glossary("Content_header", "Inhalts-Header")}}
- [RFC 9110, Abschnitt 6.4: Inhalt](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4) (setzt [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3) Payload Semantics außer Kraft)
  - [Änderungen von RFC 7231](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
