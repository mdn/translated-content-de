---
title: "urn: URLs"
short-title: "urn:"
slug: Web/URI/Reference/Schemes/urn
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
---

Ein Uniform Resource Name (URN) ist ein URI, der eine Ressource durch einen Namen in einem bestimmten Namensraum identifiziert. URNs bieten weltweit eindeutige Namen für Ressourcen, im Gegensatz zu Informationen über ihren Standort (URL).

## Syntax

Ein URN besteht minimal aus einem Namespace Identifier (NID) und einem Namespace Specific String (NSS):

```url
urn:<NID>:<NSS>
```

## Komponenten

- `<NID>`
  - : Ein NID (Namespace Identifier) ist ein nicht case-sensitiver Identifier für den Namensraum (z.B. sind `ISBN` und `isbn` gleichwertig).
    NIDs werden von [Registern wie IANA](https://www.iana.org/assignments/urn-namespaces/urn-namespaces.xhtml) verwaltet, und ihre Auflösung hängt vom spezifischen Namensraum ab.
    Zum Beispiel wird die Auflösung des `ISBN` NID von den Systemen der [International ISBN Agency](https://www.isbn-international.org/) gehandhabt.
- `<NSS>`
  - : Der NSS (Namespace Specific String) ist ein innerhalb eines URN-Namensraums eindeutiger String.
    Die Kombination aus dem NID (einzigartig im gesamten "urn"-Schema) und dem NSS stellt sicher, dass der resultierende URN weltweit eindeutig ist.

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
