---
title: X-DNS-Prefetch-Control
slug: Web/HTTP/Headers/X-DNS-Prefetch-Control
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}{{Non-standard_header}}

Der **`X-DNS-Prefetch-Control`** HTTP-Antwort-Header steuert
das DNS-Prefetching, eine Funktion, bei der Browser proaktiv die Domainnamenauflösung
für Links durchführen, denen der Benutzer möglicherweise folgen möchte, sowie für URLs von Elementen, auf die im Dokument verwiesen wird, einschließlich Bilder, CSS, JavaScript usw.

Dieses Prefetching wird im Hintergrund durchgeführt, so dass das {{Glossary("DNS", "DNS")}}
vermutlich aufgelöst ist, wenn die referenzierten Elemente benötigt werden. Dies reduziert
die Latenz, wenn der Benutzer auf einen Link klickt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-DNS-Prefetch-Control: on
X-DNS-Prefetch-Control: off
```

### Direktiven

- on
  - : Aktiviert DNS-Prefetching. Dies ist, was Browser tun, wenn sie die Funktion unterstützen und dieser Header nicht vorhanden ist.
- off
  - : Deaktiviert DNS-Prefetching. Dies ist nützlich, wenn Sie die Links auf den Seiten nicht kontrollieren können oder wissen, dass Sie keine Informationen an diese Domains weitergeben möchten.

## Beschreibung

DNS-Anfragen sind in Bezug auf die Bandbreite sehr klein, aber die Latenz kann besonders in mobilen Netzwerken recht hoch sein. Durch spekulatives Prefetching der DNS-Ergebnisse kann die Latenz erheblich reduziert werden, insbesondere, wenn der Benutzer auf einen Link klickt. In einigen Fällen kann die Latenz um eine Sekunde reduziert werden.

Die Implementierung dieses Prefetchings in einigen Browsern ermöglicht es, die Auflösung von Domainnamen parallel (anstatt seriell) zum Abrufen des tatsächlichen Seiteninhalts durchzuführen. Dadurch verursacht der hochgradige Latenzprozess der Domainnamenauflösung keine Verzögerung beim Abrufen von Inhalten.

Seitenladezeiten können auf diese Weise – insbesondere in mobilen Netzwerken – messbar verbessert werden. Wenn die Domainnamen für Bilder im Voraus aufgelöst werden können, sehen Seiten, die viele Bilder laden, eine Verbesserung der Ladezeiten um 5 % oder mehr.

### Konfiguration des Prefetchens im Browser

Im Allgemeinen müssen Sie nichts tun, um Prefetching zu verwalten. Allerdings möchte der Benutzer möglicherweise das Prefetching deaktivieren. In Firefox kann dies durch Setzen der Einstellung `network.dns.disablePrefetch` auf `true` erreicht werden.

Auch wird standardmäßig das Prefetching von eingebetteten Link-Hostnamen nicht bei Dokumenten durchgeführt, die über {{Glossary("HTTPS", "HTTPS")}} geladen werden. In Firefox kann dies geändert werden, indem die Einstellung `network.dns.disablePrefetchFromHTTPS` auf `false` gesetzt wird.

## Beispiele

### Prefetching aktivieren und deaktivieren

Sie können den `X-DNS-Prefetch-Control`-Header serverseitig senden oder aus einzelnen Dokumenten heraus, indem Sie das [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv) Attribut auf dem {{HTMLElement("meta")}}-Element wie folgt verwenden:

```html
<meta http-equiv="x-dns-prefetch-control" content="off" />
```

Sie können diese Einstellung umkehren, indem Sie `content` auf `"on"` setzen.

### Erzwungenes Nachschlagen spezifischer Hostnamen

Sie können das Nachschlagen spezifischer Hostnamen erzwingen, ohne spezifische Anker zu verwenden, die diesen Hostnamen nutzen, indem Sie das [`rel`](/de/docs/Web/HTML/Element/link#rel) Attribut auf dem {{HTMLElement("link")}}-Element mit einem [Link-Typ](/de/docs/Web/HTML/Attributes/rel) von `dns-prefetch` verwenden:

```html
<link rel="dns-prefetch" href="https://www.mozilla.org" />
```

In diesem Beispiel wird der Domainname `www.mozilla.org` vorab aufgelöst.

Ähnlich kann das Link-Element verwendet werden, um Hostnamen zu aufzulösen, ohne eine vollständige URL bereitzustellen, jedoch indem nur der Hostname mit zwei Schrägstrichen vorangestellt wird:

```html
<link rel="dns-prefetch" href="//www.mozilla.org" />
```

Erzwungenes Prefetching von Hostnamen kann nützlich sein, beispielsweise auf der Startseite einer Website, um die Vorausauflösung von Domainnamen zu erzwingen, die häufig auf der gesamten Website referenziert werden, obwohl sie selbst auf der Startseite nicht verwendet werden. Dies verbessert die Gesamtleistung der Seite, auch wenn die Leistung der Startseite selbst nicht betroffen ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DNS Prefetching für Firefox (Blogbeitrag)](https://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html)
- [Wie Google Chrome die Steuerung des DNS-Prefetchings behandelt](https://www.chromium.org/developers/design-documents/dns-prefetching/)
