---
title: 208 Already Reported
slug: Web/HTTP/Reference/Status/208
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`208 Bereits berichtet`** [erfolgreicher Antwort](/de/docs/Web/HTTP/Reference/Status#successful_responses) wird in einer {{HTTPStatus("207", "207 Multi-Status")}}-Antwort verwendet, um Platz zu sparen und Konflikte zu vermeiden.
Diese Antwort wird ausschließlich im Kontext von Web Distributed Authoring and Versioning ({{Glossary("WebDAV", "WebDAV")}}) verwendet.

Wenn dieselbe Ressource mehrmals (zum Beispiel als Teil einer Sammlung) mit verschiedenen Pfaden angefordert wird, wird nur die erste Anfrage mit {{HTTPStatus("200")}} gemeldet.
Antworten für alle anderen Bindungen werden mit diesem `208`-Statuscode gemeldet, sodass keine Konflikte entstehen und die Antwort kürzer bleibt.

> [!NOTE]
> Die Fähigkeit, eine Ressource an mehrere Pfade zu _binden_, ist eine Erweiterung des {{Glossary("WebDAV", "WebDAV")}}-Protokolls (es kann von Webanwendungen empfangen werden, die auf einen WebDAV-Server zugreifen).
> Browser, die auf Webseiten zugreifen, werden diesen Statuscode nie erhalten.

## Status

```http
208 Already Reported
```

## Beispiele

### Erhalt einer `208` in einer `207 Multi-Status`-Antwort

Das folgende ist eine Beispielantwort eines WebDAV-Servers für `207 Multi-Status`, die eine `208`-Antwort enthält.
Beachten Sie die `208` im letzten `<D:status>`-Element, die anzeigt, dass die Ressource namens `Loop Demo` zuvor in der `207`-Antwort gemeldet wurde.

```http
HTTP/1.1 207 Multi-Status
Content-Type: application/xml; charset="utf-8"
Content-Length: 1241

<?xml version="1.0" encoding="utf-8" ?>
<D:multistatus xmlns:D="DAV:">
  <D:response>
    <D:href>http://www.example.com/Coll/</D:href>
    <D:propstat>
      <D:prop>
        <D:displayname>Loop Demo</D:displayname>
        <D:resource-id>
          <D:href>urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf8</D:href>
        </D:resource-id>
      </D:prop>
      <D:status>HTTP/1.1 200 OK</D:status>
    </D:propstat>
  </D:response>
  <D:response>
    <D:href>http://www.example.com/Coll/Foo</D:href>
    <D:propstat>
      <D:prop>
        <D:displayname>Bird Inventory</D:displayname>
        <D:resource-id>
          <D:href>urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf9</D:href>
        </D:resource-id>
      </D:prop>
      <D:status>HTTP/1.1 200 OK</D:status>
    </D:propstat>
  </D:response>
  <D:response>
    <D:href>http://www.example.com/Coll/Bar</D:href>
    <D:propstat>
      <D:prop>
        <D:displayname>Loop Demo</D:displayname>
        <D:resource-id>
          <D:href>urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf8</D:href>
        </D:resource-id>
      </D:prop>
      <D:status>HTTP/1.1 208 Already Reported</D:status>
    </D:propstat>
  </D:response>
</D:multistatus>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPStatus("200")}}
- {{HTTPStatus("508", "508 Loop Detected")}}
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
