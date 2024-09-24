---
title: 208 Bereits Berichtet
slug: Web/HTTP/Status/208
l10n:
  sourceCommit: 3f68a9604259dfa862dd741dc88ebc8fb5fa10fe
---

{{HTTPSidebar}}

Der HTTP-**`208 Bereits Berichtet`** [erfolgreicher Antwortstatus](/de/docs/Web/HTTP/Status#successful_responses) Code wird in einer {{HTTPStatus("207", "207 Multi-Status")}}-Antwort verwendet, um Speicherplatz zu sparen und Konflikte zu vermeiden. Diese Antwort wird ausschließlich im Zusammenhang mit Web Distributed Authoring and Versioning ({{Glossary("WebDAV")}}) verwendet.

Wenn dieselbe Ressource mehrmals mit unterschiedlichen Pfaden angefordert wird (zum Beispiel als Teil einer Sammlung), wird nur die erste mit {{HTTPStatus("200")}} gemeldet. Antworten für alle anderen Bindungen melden diesen `208`-Statuscode, sodass keine Konflikte entstehen und die Antwort kürzer bleibt.

> [!NOTE]
> Die Fähigkeit, eine Ressource an mehrere Pfade zu _binden_, ist eine Erweiterung des {{Glossary("WebDAV")}}-Protokolls (sie kann von Webanwendungen empfangen werden, die auf einen WebDAV-Server zugreifen). Browser, die auf Webseiten zugreifen, werden diesen Statuscode nie antreffen.

## Status

```plain
208 Already Reported
```

## Beispiele

### Erhalten eines `208` in einer `207 Multi-Status`-Antwort

Das folgende ist ein Beispiel für eine `207 Multi-Status`-Antwort von einem WebDAV-Server, welche eine `208`-Antwort beinhaltet. Beachten Sie das `208` im letzten `<D:status>`-Element, welches anzeigt, dass die Ressource namens `Loop Demo` bereits früher in der `207`-Antwort gemeldet wurde.

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
- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
