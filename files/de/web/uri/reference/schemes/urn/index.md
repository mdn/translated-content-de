---
title: "urn: URLs"
short-title: "urn:"
slug: Web/URI/Reference/Schemes/urn
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

Ein Uniform Resource Name (URN) ist ein URI, der eine Ressource anhand eines Namens in einem bestimmten Namensraum identifiziert. URNs bieten global-eindeutige Namen für Ressourcen, im Gegensatz dazu geben sie keine Informationen über deren Standort (URL).

## Syntax

```url
urn:<NID>:<NSS>
```

- `<NID>`
  - : Ein NID (Namespace Identifier) ist ein nicht auf Groß- und Kleinschreibung empfindlicher Bezeichner für den Namensraum (z. B. sind `ISBN` und `isbn` gleichwertig). NIDs werden von [Registern wie IANA](https://www.iana.org/assignments/urn-namespaces/urn-namespaces.xhtml) verwaltet, und ihre Auflösung hängt vom spezifischen Namensraum ab. Beispielsweise wird die Auflösung des `ISBN` NID von den Systemen der [International ISBN Agency](https://www.isbn-international.org/) gehandhabt.
- `<NSS>`
  - : Das NSS (Namespace Specific String) ist ein innerhalb eines URN-Namensraums eindeutiger String. Die Kombination aus dem NID (eindeutig über das gesamte "urn"-Schema hinweg) und dem NSS stellt sicher, dass der resultierende URN global eindeutig ist.

## Beispiele

### ISBN URN

Diese ISBN entspricht dem Buch [1984 von George Orwell](https://isbnsearch.org/isbn/9780141036144):

```url
urn:isbn:9780141036144
```

### IETF URN

Dieser URN entspricht der IETF-Spezifikation {{rfc("7230", "Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing")}}:

```url
urn:ietf:rfc:7230
```

## Spezifikationen

{{specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [IANA-Liste der URI-Schemata](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
