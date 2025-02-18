---
title: URI-Schemata
short-title: Scheme
slug: Web/URI/Reference/Schemes
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

Das **Schema** einer URI ist der erste Teil der URI vor dem `:`-Zeichen.
Es gibt an, welches Protokoll der Browser verwenden muss, um die Ressource abzurufen.
Das Schema kann beeinflussen, wie der restliche Teil der URI strukturiert und interpretiert wird.

## Syntax

```url
protocol:
```

- `protocol`
  - : Eine Zeichenfolge, die das zu verwendende Protokoll identifiziert.
    Sie sollte nur aus alphanumerischen Zeichen sowie den Zeichen `+`, `-` und `.` bestehen.
    Übliche Schemata sind:
    - [`blob`](/de/docs/Web/API/URL/createObjectURL_static)
      - : Binary Large Object; ein Verweis auf ein großes Objekt im Speicher
    - [`data`](/de/docs/Web/URI/Reference/Schemes/data)
      - : Direkt in die URL eingebettete Daten
    - `file`
      - : Host-spezifische Dateinamen
    - `ftp`
      - : {{Glossary("FTP", "File Transfer Protocol")}}
    - `http` / `https`
      - : Hypertext-Transfer-Protokoll (und sichere Verbindungen) ({{Glossary("HTTP", "HTTP")}}/{{Glossary("HTTPS", "HTTPS")}})
    - [`javascript`](/de/docs/Web/URI/Reference/Schemes/javascript)
      - : In der URL eingebetteter JavaScript-Code
    - `mailto`
      - : Elektronische Mailadresse
    - [`resource`](/de/docs/Web/URI/Reference/Schemes/resource) {{Non-standard_inline}}
      - : Ressourcen in Firefox und Firefox-Erweiterungen intern laden
    - `ssh`
      - : Secure Shell
    - `tel`
      - : Telefon
    - `urn`
      - : Uniform Resource Names
    - `view-source`
      - : Quellcode der Ressource
    - `ws` / `wss`
      - : [WebSocket-Verbindungen](/de/docs/Web/API/WebSockets_API) (und sichere Verbindungen)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data)
- [Ressourcen-URLs](/de/docs/Web/URI/Reference/Schemes/resource)
- [IANA-Liste der URI-Schemata](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
