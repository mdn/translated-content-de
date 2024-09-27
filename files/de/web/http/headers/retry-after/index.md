---
title: Retry-After
slug: Web/HTTP/Headers/Retry-After
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Retry-After`** Antwort-HTTP-Header gibt an, wie lange der Benutzer-Agent warten sollte, bevor er eine Folgeanfrage stellt. Es gibt drei Hauptfälle, in denen dieser Header verwendet wird:

- Wenn er mit einer {{HTTPStatus(503)}} (Service Unavailable) Antwort gesendet wird, zeigt dies an, wie lange der Dienst voraussichtlich nicht verfügbar ist.
- Wenn er mit einer {{HTTPStatus(429)}} (Too Many Requests) Antwort gesendet wird, zeigt dies an, wie lange man warten sollte, bevor eine neue Anfrage gestellt wird.
- Wenn er mit einer Umleitungsantwort, wie zum Beispiel {{HTTPStatus(301)}} (Moved Permanently), gesendet wird, zeigt dies die Mindestzeit an, die der Benutzer-Agent warten soll, bevor die umgeleitete Anfrage gestellt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Retry-After: <http-date>
Retry-After: <delay-seconds>
```

## Direktiven

- \<http-date>
  - : Ein Datum, nach dem erneut versucht werden soll. Siehe den {{HTTPHeader("Date")}} Header für weitere Details zum HTTP-Datumsformat.
- \<delay-seconds>
  - : Eine nicht-negative dezimale Ganzzahl, die die Sekunden angibt, die nach Empfang der Antwort gewartet werden sollen.

## Beispiele

### Umgang mit geplantem Wartungsmodus

Die Unterstützung des `Retry-After` Headers bei Clients und Servern ist noch uneinheitlich. Einige Crawler und Spider, wie der Googlebot, beachten jedoch den `Retry-After` Header. Es ist nützlich, diesen zusammen mit einer {{HTTPStatus(503)}} (Service Unavailable) Antwort zu senden, damit Suchmaschinen Ihre Seite weiter indizieren, wenn der Wartungsmodus beendet ist.

```http
Retry-After: Wed, 21 Oct 2015 07:28:00 GMT
Retry-After: 120
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Google Webmaster Blog: How to deal with planned site downtime](https://webmasters.googleblog.com/2011/01/how-to-deal-with-planned-site-downtime.html)
- {{HTTPStatus(503)}} (Service Unavailable)
- {{HTTPStatus(301)}} (Moved Permanently)
