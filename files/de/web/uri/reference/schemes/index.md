---
title: URI-Schemata
short-title: Scheme
slug: Web/URI/Reference/Schemes
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
---

Das **Schema** eines URI ist der erste Teil des URI, vor dem `:`-Zeichen. Es gibt an, welches Protokoll der Browser verwenden muss, um die Ressource abzurufen. Das Schema kann beeinflussen, wie der Rest des URI strukturiert und interpretiert wird.

## Syntax

```url
protocol:
```

- `protocol`
  - : Eine Zeichenfolge, die das zu verwendende Protokoll identifiziert. Sie sollte nur aus alphanumerischen Zeichen sowie den Zeichen `+`, `-` und `.` bestehen. Gängige Schemata sind:
    - [`blob`](/de/docs/Web/API/URL/createObjectURL_static)
      - : Binary Large Object; ein Zeiger auf ein großes Objekt im Speicher
    - [`data`](/de/docs/Web/URI/Reference/Schemes/data)
      - : Daten, die direkt in der URL eingebettet sind
    - `file`
      - : Host-spezifische Dateinamen
    - `ftp`
      - : {{Glossary("FTP", "File Transfer Protocol")}}
    - `http` / `https`
      - : [Hypertext Transfer Protocol](/de/docs/Web/HTTP) (und sichere Verbindungen)
    - [`javascript`](/de/docs/Web/URI/Reference/Schemes/javascript)
      - : In die URL eingebetteter JavaScript-Code
    - `mailto`
      - : E-Mail-Adresse
    - [`resource`](/de/docs/Web/URI/Reference/Schemes/resource) {{Non-standard_inline}}
      - : Zum Laden interner Ressourcen von Firefox und Firefox-Browsererweiterungen
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

`http` ist das _Schema_ der URL, das angibt, welches Protokoll der Browser verwenden muss. In der Regel ist es das HTTP-Protokoll oder seine gesicherte Version, HTTPS. Das Web erfordert `http` oder `https`, aber Browser können URIs mit anderen Schemas öffnen, etwa solche, die mit `mailto:` (um ein Mail-Programm zu öffnen) oder `ftp:` (für Dateiübertragungen) beginnen.

Beim Verwenden von URLs in {{Glossary("HTML", "HTML")}}-Inhalten verwenden Sie im Allgemeinen nur einige dieser URL-Schemata. Beim Verweisen auf Subressourcen — das sind Dateien, die als Teil eines größeren Dokuments geladen werden — sollten Sie nur die HTTP- und HTTPS-Schemata verwenden. Immer mehr Browser entfernen aus Sicherheitsgründen die Unterstützung für die Verwendung von FTP zum Laden von Subressourcen.

FTP ist auf der obersten Ebene immer noch akzeptabel (z. B. direkt in die URL-Leiste des Browsers eingegeben oder als Ziel eines Links), obwohl einige Browser das Laden von FTP-Inhalten an eine andere Anwendung übergeben können.

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
- [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data)
- [Ressourcen-URLs](/de/docs/Web/URI/Reference/Schemes/resource)
- [IANA-Liste der URI-Schemata](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
