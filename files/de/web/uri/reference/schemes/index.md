---
title: URI-Schemata
short-title: Scheme
slug: Web/URI/Reference/Schemes
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Das **Schema** einer URI ist der erste Teil der URI, vor dem `:`-Zeichen. Es gibt an, welches Protokoll der Browser verwenden muss, um die Ressource abzurufen. Das Schema kann beeinflussen, wie der Rest der URI strukturiert und interpretiert wird.

## Syntax

```url
protocol:
```

- `protocol`
  - : Eine Zeichenfolge, die das zu verwendende Protokoll identifiziert. Es sollte nur aus alphanumerischen Zeichen sowie den Zeichen `+`, `-` und `.` bestehen. Häufige Schemata sind:
    - [`blob`](/de/docs/Web/URI/Reference/Schemes/blob)
      - : Binary Large Object; ein Zeiger auf ein großes Objekt im Arbeitsspeicher
    - [`data`](/de/docs/Web/URI/Reference/Schemes/data)
      - : Direkt in der URL eingebettete Daten
    - `file`
      - : Hostspezifische Dateinamen
    - `ftp`
      - : {{Glossary("FTP", "File Transfer Protocol")}}
    - `http` / `https`
      - : [Hypertext Transfer Protocol](/de/docs/Web/HTTP) (und sichere Verbindungen)
    - [`javascript`](/de/docs/Web/URI/Reference/Schemes/javascript)
      - : In der URL eingebetteter JavaScript-Code
    - `mailto`
      - : E-Mail-Adresse
    - [`resource`](/de/docs/Web/URI/Reference/Schemes/resource) {{Non-standard_inline}}
      - : Für Firefox und Firefox-Browser-Erweiterungen zum Laden interner Ressourcen
    - `ssh`
      - : Secure Shell
    - `tel`
      - : Telefon
    - [`urn`](/de/docs/Web/URI/Reference/Schemes/urn)
      - : Uniform Resource Names
    - `view-source`
      - : Quellcode der Ressource
    - `ws` / `wss`
      - : [WebSocket-Verbindungen](/de/docs/Web/API/WebSockets_API) (und sichere Verbindungen)

## Beschreibung

Betrachten Sie die folgende URL:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

`http` ist das _Schema_ der URL und gibt an, welches Protokoll der Browser verwenden muss. In der Regel ist es das HTTP-Protokoll oder dessen sichere Version, HTTPS. Das Web erfordert `http` oder `https`, aber Browser können URIs mit anderen Schemas öffnen, wie z.B. solche, die mit `mailto:` beginnen (um ein E-Mail-Programm zu öffnen) oder `ftp:` (Dateiübertragungen).

Beim Verwenden von URLs in {{Glossary("HTML", "HTML")}}-Inhalten werden in der Regel nur wenige dieser URL-Schemata verwendet. Beim Verweisen auf Unterressourcen – also Dateien, die als Teil eines größeren Dokuments geladen werden – sollten Sie nur die HTTP- und HTTPS-Schemata verwenden. Zunehmend entfernen Browser die Unterstützung für die Verwendung von FTP zum Laden von Unterressourcen aus Sicherheitsgründen.

FTP ist auf der obersten Ebene (wie z.B. direkt in die URL-Leiste des Browsers eingegeben oder als Ziel eines Links) immer noch akzeptabel, obwohl einige Browser das Laden von FTP-Inhalten an eine andere Anwendung delegieren können.

## Beispiele

### Verschiedene URI-Schemata

Das folgende Beispiel zeigt verschiedene URI-Formate basierend auf dem URI-Schema.

```url
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
mailto:help@supercyberhelpdesk.info
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data)
- [Resource-URLs](/de/docs/Web/URI/Reference/Schemes/resource)
- [IANA-Liste der URI-Schemata](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
