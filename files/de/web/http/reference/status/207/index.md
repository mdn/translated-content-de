---
title: 207 Multi-Status
slug: Web/HTTP/Reference/Status/207
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`207 Multi-Status`** [erfolgreiche Antwort](/de/docs/Web/HTTP/Reference/Status#successful_responses) zeigt eine Mischung von Antworten an.
Diese Antwort wird ausschließlich im Kontext von Web Distributed Authoring and Versioning ({{Glossary("WebDAV", "WebDAV")}}) verwendet.

Der Antwortkörper ist eine `text/xml` oder `application/xml` HTTP-Entität mit einem `multistatus`-Root-Element, das individuelle Antwortcodes auflistet.

> [!NOTE]
> Browser, die auf Webseiten zugreifen, werden diesen Statuscode niemals antreffen.
> Die Fähigkeit, eine _Sammlung von Ressourcen_ zurückzugeben, ist Teil des {{Glossary("WebDAV", "WebDAV")}}-Protokolls und wird nur von Webanwendungen angetroffen, die auf einen WebDAV-Server zugreifen.

## Status

```http
207 Multi-Status
```

## Beispiele

### Erhalten einer `207`-Antwort in einem WebDAV-Kontext

Das folgende Beispiel zeigt eine `207`-Antwort, die ein {{Glossary("WebDAV", "WebDAV")}}-Server an einen Client sendet.
Es gibt ein `multistatus`-Root-Element mit Details zu den einzelnen Sammlungen:

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

- {{HTTPStatus("204")}}
- {{HTTPStatus("403")}}
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
