---
title: 208 Already Reported
slug: Web/HTTP/Reference/Status/208
l10n:
  sourceCommit: 975650c2f6ea843d6f7cbc721aee5dbc1db907b2
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`208 Already Reported`** für [erfolgreiche Antworten](/de/docs/Web/HTTP/Reference/Status#successful_responses) wird in einer {{HTTPStatus("207", "207 Multi-Status")}}-Antwort verwendet, um Platz zu sparen und Konflikte zu vermeiden. Diese Antwort wird ausschließlich im Kontext von Web Distributed Authoring and Versioning ({{Glossary("WebDAV", "WebDAV")}}) genutzt.

Wenn dieselbe Ressource mehrmals mit unterschiedlichen Pfaden angefordert wird (beispielsweise als Teil einer Sammlung), wird nur das erste Mal mit {{HTTPStatus("200")}} berichtet. Antworten für alle anderen Bindungen werden mit diesem `208`-Statuscode gemeldet, um keine Konflikte zu erzeugen und die Antwort kürzer zu halten.

> [!NOTE]
> Die Fähigkeit, eine Ressource an mehrere Pfade zu _binden_, ist eine Erweiterung des {{Glossary("WebDAV", "WebDAV")}}-Protokolls (es kann von Webanwendungen empfangen werden, die auf einen WebDAV-Server zugreifen).
> Browser, die auf Webseiten zugreifen, werden diesen Statuscode niemals antreffen.

## Status

```http
208 Already Reported
```

## Beispiele

### Empfang einer `208` in einer `207 Multi-Status` Antwort

Das folgende ist eine Beispielantwort `207 Multi-Status` von einem WebDAV-Server, die eine `208`-Antwort beinhaltet. Beachten Sie das `208` im letzten `<D:status>`-Element, welches anzeigt, dass die Ressource mit dem Namen `Loop Demo` bereits früher in der `207`-Antwort berichtet wurde.

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
