---
title: X-DNS-Prefetch-Control
slug: Web/HTTP/Reference/Headers/X-DNS-Prefetch-Control
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}{{Non-standard_header}}

Der HTTP-**`X-DNS-Prefetch-Control`**-{{Glossary("response_header", "Antwort-Header")}} steuert das DNS-Prefetching. Dabei handelt es sich um eine Funktion, bei der Browser proaktiv eine Domainnamensauflösung für Links durchführen, die der Benutzer eventuell anklicken möchte, sowie für URLs von Elementen, die im Dokument referenziert werden, einschließlich Bilder, CSS, JavaScript und Ähnliches.

Die Absicht ist, dass das Prefetching im Hintergrund durchgeführt wird, sodass die {{Glossary("DNS", "DNS")}}-Auflösung abgeschlossen ist, wenn die referenzierten Elemente vom Browser benötigt werden. Dies reduziert die Latenzzeit, wenn der Benutzer beispielsweise auf einen Link klickt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Unzulässiger Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-DNS-Prefetch-Control: on
X-DNS-Prefetch-Control: off
```

### Anweisungen

- `on`
  - : Aktiviert DNS-Prefetching. Dies ist das, was Browser tun, wenn sie die Funktion unterstützen und dieser Header nicht vorhanden ist.
- `off`
  - : Deaktiviert DNS-Prefetching. Dies ist nützlich, wenn Sie die Links auf den Seiten nicht kontrollieren oder wissen, dass Sie keine Informationen an diese Domains weitergeben möchten.

## Beschreibung

DNS-Anfragen sind im Hinblick auf die Bandbreite sehr klein, aber die Latenzzeit kann ziemlich hoch sein, insbesondere in Mobilfunknetzen. Durch das spekulative Vorabladen von DNS-Ergebnissen kann die Latenzzeit zu bestimmten Zeiten erheblich reduziert werden, zum Beispiel, wenn der Benutzer auf einen Link klickt. In einigen Fällen kann die Latenzzeit um eine Sekunde reduziert werden.

Die Implementierung dieses Prefetchings in einigen Browsern ermöglicht die Domainnamensauflösung parallel zur (anstatt seriell zur) tatsächlichen Seiteninhaltsabfrage. Auf diese Weise verursacht der hochverzögerte Domainnamensauflösungsprozess keine Verzögerung beim Abrufen der Inhalte.

Die Ladezeiten von Seiten – insbesondere in Mobilfunknetzen – können auf diese Weise messbar verbessert werden. Wenn die Domainnamen für Bilder im Voraus aufgelöst werden können, bevor die Bilder angefordert werden, können Seiten, die viele Bilder laden, eine Verbesserung der Ladezeit von 5 % oder mehr erreichen.

### Konfigurierung des Prefetchings im Browser

Im Allgemeinen müssen Sie nichts unternehmen, um das Prefetching zu verwalten. Der Benutzer kann jedoch das Prefetching deaktivieren wollen. In Firefox kann dies durch Setzen der Einstellung `network.dns.disablePrefetch` auf `true` erreicht werden.

Außerdem wird standardmäßig kein Prefetching von eingebetteten Link-Hostnamen bei Dokumenten durchgeführt, die über {{Glossary("HTTPS", "HTTPS")}} geladen werden. In Firefox kann diese Einstellung durch Setzen der Einstellung `network.dns.disablePrefetchFromHTTPS` auf `false` geändert werden.

## Beispiele

### Prefetching aktivieren und deaktivieren

Sie können den `X-DNS-Prefetch-Control`-Header entweder serverseitig senden oder von einzelnen Dokumenten aus mit dem `http-equiv`-Attribut des {{HTMLElement("meta")}}-Elements setzen, so:

```html
<meta http-equiv="x-dns-prefetch-control" content="off" />
```

Sie können diese Einstellung rückgängig machen, indem Sie `content` auf `"on"` setzen.

### Erzwingen der Auflösung bestimmter Hostnamen

Sie können die Auflösung bestimmter Hostnamen erzwingen, ohne spezifische Anker zu verwenden, die diesen Hostnamen verwenden, indem Sie das `rel`-Attribut des {{HTMLElement("link")}}-Elements mit einem [Link-Typ](/de/docs/Web/HTML/Reference/Attributes/rel) von `dns-prefetch` verwenden:

```html
<link rel="dns-prefetch" href="https://www.mozilla.org" />
```

In diesem Beispiel wird der Domainname `www.mozilla.org` voraufgelöst.

Ähnlich kann das Link-Element verwendet werden, um Hostnamen aufzulösen, ohne eine vollständige URL anzugeben, indem einfach der Hostname mit zwei Schrägstrichen vorangestellt wird:

```html
<link rel="dns-prefetch" href="//www.mozilla.org" />
```

Erzwungenes Prefetching von Hostnamen kann nützlich sein, zum Beispiel auf der Startseite einer Website, um die Vorauflösung von Domainnamen zu erzwingen, die häufig auf der gesamten Website referenziert werden, auch wenn sie nicht auf der Startseite selbst verwendet werden. Dies verbessert die Gesamtleistung der Website, auch wenn die Leistung der Startseite möglicherweise nicht beeinflusst wird.

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DNS Prefetching for Firefox (Blogeintrag)](https://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html)
- [Wie Google Chrome die Kontrolle des DNS-Prefetchings handhabt](https://www.chromium.org/developers/design-documents/dns-prefetching/)
