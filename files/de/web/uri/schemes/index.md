---
title: URI-Schemata
slug: Web/URI/Schemes
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

Das **Schema** einer URI ist der erste Teil der URI, vor dem `:` Zeichen. Es zeigt an, welches Protokoll der Browser verwenden muss, um die Ressource abzurufen. Das Schema kann beeinflussen, wie der Rest der URI strukturiert und interpretiert wird.

## Syntax

```url
protocol:
```

- Protokoll
  - : Eine Zeichenfolge, die das zu verwendende Protokoll identifiziert. Es sollte nur aus alphanumerischen Zeichen und den Zeichen `+`, `-` und `.` bestehen. Gängige Schemata sind:
    - [`blob`](/de/docs/Web/API/URL/createObjectURL_static)
      - : Binary Large Object; ein Zeiger auf ein großes Objekt im Speicher
    - [`data`](/de/docs/Web/URI/Schemes/data)
      - : Direkt in die URL eingebettete Daten
    - `file`
      - : Host-spezifische Dateinamen
    - `ftp`
      - : [File Transfer Protocol](/de/docs/Glossary/FTP)
    - `http` / `https`
      - : Hypertext-Übertragungsprotokoll (Sicher) ([HTTP](/de/docs/Glossary/HTTP)/[HTTPS](/de/docs/Glossary/HTTPS))
    - [`javascript`](/de/docs/Web/URI/Schemes/javascript)
      - : In die URL eingebetteter JavaScript-Code
    - `mailto`
      - : Elektronische Mailadresse
    - [`resource`](/de/docs/Web/URI/Schemes/resource) {{Non-standard_inline}}
      - : Firefox und Firefox-Browsererweiterungen zum internen Laden von Ressourcen
    - `ssh`
      - : Secure Shell
    - `tel`
      - : Telefon
    - `urn`
      - : Uniform Resource Names
    - `view-source`
      - : Quellcode der Ressource
    - `ws` / `wss`
      - : [WebSocket-Verbindungen (Sicher)](/de/docs/Web/API/WebSockets_API)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Daten-URLs](/de/docs/Web/URI/Schemes/data)
- [Ressourcen-URLs](/de/docs/Web/URI/Schemes/resource)
- [IANA-Liste der URI-Schemata](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
