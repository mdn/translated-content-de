---
title: URI-Schemata
slug: Web/URI/Schemes
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

Das **Schema** einer URI ist der erste Teil der URI, vor dem `:`-Zeichen. Es gibt an, welches Protokoll der Browser verwenden muss, um die Ressource abzurufen. Das Schema kann beeinflussen, wie der restliche Teil der URI strukturiert und interpretiert wird.

## Syntax

```url
protocol:
```

- protocol
  - : Eine Zeichenfolge, die das zu verwendende Protokoll identifiziert. Es sollte nur aus alphanumerischen Zeichen und den Zeichen `+`, `-` und `.` bestehen. Häufige Schemata sind:
    - [`blob`](/de/docs/Web/API/URL/createObjectURL_static)
      - : Binary Large Object; ein Zeiger auf ein großes Objekt im Speicher
    - [`data`](/de/docs/Web/URI/Schemes/data)
      - : Direkt in die URL eingebettete Daten
    - `file`
      - : Host-spezifische Dateinamen
    - `ftp`
      - : {{Glossary("FTP", "File Transfer Protocol")}}
    - `http` / `https`
      - : Hypertext-Übertragungsprotokoll (Sicher) ({{glossary("HTTP")}}/{{glossary("HTTPS")}})
    - [`javascript`](/de/docs/Web/URI/Schemes/javascript)
      - : In die URL eingebetteter JavaScript-Code
    - `mailto`
      - : Elektronische Mail-Adresse
    - [`resource`](/de/docs/Web/URI/Schemes/resource) {{Non-standard_inline}}
      - : Firefox und Firefox-Browsererweiterungen, um Ressourcen intern zu laden
    - `ssh`
      - : Secure Shell
    - `tel`
      - : Telefon
    - `urn`
      - : Einheitliche Ressourcen-Namen
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
