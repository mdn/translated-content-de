---
title: 208 Already Reported
slug: Web/HTTP/Status/208
l10n:
  sourceCommit: 3f68a9604259dfa862dd741dc88ebc8fb5fa10fe
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`208 Already Reported`** für [erfolgreiche Antworten](/de/docs/Web/HTTP/Status#successful_responses) wird in einer {{HTTPStatus("207", "207 Multi-Status")}}-Antwort verwendet, um Platz zu sparen und Konflikte zu vermeiden. Diese Antwort wird ausschließlich im Kontext des Web Distributed Authoring and Versioning ({{Glossary("WebDAV", "WebDAV")}}) verwendet.

Wenn dieselbe Ressource mehrmals angefordert wird (z. B. als Teil einer Sammlung) mit unterschiedlichen Pfaden, wird nur die erste mit {{HTTPStatus("200")}} gemeldet. Antworten für alle anderen Bindungen werden mit diesem `208`-Statuscode gemeldet, damit keine Konflikte entstehen und die Antwort kürzer bleibt.

> [!NOTE]
> Die Möglichkeit, eine Ressource an mehrere Pfade zu _binden_, ist eine Erweiterung des {{Glossary("WebDAV", "WebDAV")}}-Protokolls (sie kann von Webanwendungen empfangen werden, die auf einen WebDAV-Server zugreifen).
> Browser, die auf Webseiten zugreifen, werden diesen Statuscode nie sehen.

## Status

```plain
208 Already Reported
```

## Beispiele

### Empfangen eines `208` in einer `207 Multi-Status`-Antwort

Das Folgende ist eine Beispielantwort `207 Multi-Status` von einem WebDAV-Server, die eine `208`-Antwort beinhaltet. Beachten Sie das `208` im letzten `<D:status>`-Element, welches anzeigt, dass die Ressource namens `Loop Demo` bereits früher in der `207`-Antwort berichtet wurde.

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
- [HTTP-Methoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
