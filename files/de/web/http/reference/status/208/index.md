---
title: 208 Already Reported
slug: Web/HTTP/Reference/Status/208
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`208 Already Reported`** für [erfolgreiche Antworten](/de/docs/Web/HTTP/Reference/Status#successful_responses) wird in einer {{HTTPStatus("207", "207 Multi-Status")}}-Antwort verwendet, um Platz zu sparen und Konflikte zu vermeiden. Diese Antwort wird ausschließlich im Kontext von Web-basiertem verteilter Autorschaft und Versionierung ({{Glossary("WebDAV", "WebDAV")}}) genutzt.

Wenn dieselbe Ressource mehrmals (zum Beispiel als Teil einer Sammlung) mit unterschiedlichen Pfaden angefordert wird, wird nur die erste Anforderung mit {{HTTPStatus("200")}} gemeldet. Antworten für alle anderen Bindungen werden mit diesem `208`-Statuscode gemeldet, wodurch keine Konflikte entstehen und die Antwort kürzer bleibt.

> [!NOTE]
> Die Möglichkeit, eine Ressource an mehrere Pfade zu _binden_, ist eine Erweiterung des {{Glossary("WebDAV", "WebDAV")}}-Protokolls (es könnte von Webanwendungen empfangen werden, die auf einen WebDAV-Server zugreifen).
> Browser, die auf Webseiten zugreifen, werden diesen Statuscode niemals sehen.

## Status

```plain
208 Already Reported
```

## Beispiele

### Empfang eines `208` in einer `207 Multi-Status`-Antwort

Im Folgenden ist ein Beispiel für eine `207 Multi-Status`-Antwort von einem WebDAV-Server, die eine `208`-Antwort einschließt.
Beachten Sie den `208` im letzten `<D:status>`-Element, der darauf hinweist, dass die Ressource namens `Loop Demo` bereits früher in der `207`-Antwort gemeldet wurde.

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
- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
