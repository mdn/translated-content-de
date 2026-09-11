---
title: "urn: URLs"
short-title: "urn:"
slug: Web/URI/Reference/Schemes/urn
l10n:
  sourceCommit: 8b0250d2e2bd4676046dbb441da91f7cefc32507
---

Ein Uniform Resource Name (URN) ist ein URI, der eine Ressource anhand ihres Namens in einem bestimmten Namespace identifiziert.
URNs stellen global eindeutige Namen für Ressourcen bereit, anstatt Informationen über ihren Standort (URL) bereitzustellen.

## Syntax

```url
urn:<NID>:<NSS>
```

- `<NID>`
  - : Eine NID (Namespace Identifier) ist ein nicht zwischen Groß- und Kleinschreibung unterscheidender Bezeichner für den Namespace (z. B. sind `ISBN` und `isbn` gleichwertig).
    NIDs werden von [Registern wie IANA](https://www.iana.org/assignments/urn-namespaces/urn-namespaces.xhtml) verwaltet, und ihre Auflösung hängt vom jeweiligen Namespace ab.
    Beispielsweise wird die Auflösung der `ISBN`-NID durch Systeme der [International ISBN Agency](https://www.isbn-international.org/) durchgeführt.
- `<NSS>`
  - : Die NSS (Namespace Specific String) ist eine innerhalb eines URN-Namespace eindeutige Zeichenfolge.
    Die Kombination aus NID (eindeutig im gesamten Schema „urn“) und NSS stellt sicher, dass der resultierende URN global eindeutig ist.

## Beispiele

### ISBN-URN

Diese ISBN entspricht dem Buch [Nineteen Eighty-Four von George Orwell](https://isbnsearch.org/isbn/9780141036144):

```url
urn:isbn:9780141036144
```

### IETF-URN

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
