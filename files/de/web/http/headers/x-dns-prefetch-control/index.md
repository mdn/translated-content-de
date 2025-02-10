---
title: X-DNS-Prefetch-Control
slug: Web/HTTP/Headers/X-DNS-Prefetch-Control
l10n:
  sourceCommit: 6bef243050a1f49bf5b7f37e9c4552f7aa30e24d
---

{{HTTPSidebar}}{{Non-standard_header}}

Der HTTP **`X-DNS-Prefetch-Control`** {{Glossary("response_header", "Response-Header")}} steuert das DNS Prefetching, eine Funktion, bei der Browser proaktiv eine Namensauflösung für Domänen durchführen, die der Benutzer möglicherweise aufrufen möchte, sowie für URLs von Elementen, die im Dokument referenziert werden, einschließlich Bildern, CSS, JavaScript und so weiter.

Das Ziel ist, dass das Prefetching im Hintergrund erfolgt, sodass die {{Glossary("DNS", "DNS")}}-Auflösung abgeschlossen ist, wenn die referenzierten Elemente vom Browser benötigt werden. Dies reduziert die Latenzzeit, beispielsweise wenn der Benutzer auf einen Link klickt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-DNS-Prefetch-Control: on
X-DNS-Prefetch-Control: off
```

### Direktiven

- `on`
  - : Aktiviert das DNS Prefetching. Dies ist das Verhalten, das Browser ausführen, wenn sie die Funktion unterstützen und dieser Header nicht vorhanden ist.
- `off`
  - : Deaktiviert das DNS Prefetching. Dies ist nützlich, wenn Sie die Links auf den Seiten nicht kontrollieren oder sicherstellen möchten, dass keine Informationen an diese Domänen weitergegeben werden.

## Beschreibung

DNS-Anfragen sind in Bezug auf Bandbreite sehr klein, aber die Latenzzeit kann besonders in mobilen Netzwerken sehr hoch sein. Durch spekulatives Vorauflösen von DNS-Ergebnissen kann die Latenzzeit erheblich reduziert werden, z. B. wenn der Benutzer auf einen Link klickt. In manchen Fällen kann die Verzögerung um eine Sekunde reduziert werden.

Die Implementierung dieses Prefetchings in einigen Browsern erlaubt es, die Namensauflösung der Domäne parallel (anstatt seriell) zum Abrufen des tatsächlichen Seiteninhalts auszuführen. Dadurch verursacht der hochverzögerte Namensauflösungsprozess keine Verzögerung beim Abrufen der Inhalte.

Seitenladezeiten – insbesondere in mobilen Netzwerken – können durch diese Methode messbar verbessert werden. Wenn die Domänennamen für Bilder vorab aufgelöst werden können, bevor die Bilder angefordert werden, können Seiten mit vielen Bildern eine Verbesserung der Ladezeit um 5 % oder mehr erzielen.

### Prefetching im Browser konfigurieren

Im Allgemeinen müssen Sie nichts tun, um das Prefetching zu verwalten. Der Benutzer kann jedoch das Prefetching deaktivieren. In Firefox kann dies durch Setzen der Einstellung `network.dns.disablePrefetch` auf `true` erfolgen.

Standardmäßig wird das Prefetching von eingebetteten Link-Hostnamen bei Dokumenten, die über {{Glossary("HTTPS", "HTTPS")}} geladen werden, nicht durchgeführt. In Firefox kann dies geändert werden, indem die Einstellung `network.dns.disablePrefetchFromHTTPS` auf `false` gesetzt wird.

## Beispiele

### Aktivieren und Deaktivieren von Prefetching

Sie können den `X-DNS-Prefetch-Control` Header entweder serverseitig senden oder aus einzelnen Dokumenten heraus mit dem [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut auf dem {{HTMLElement("meta")}}-Element wie folgt verwenden:

```html
<meta http-equiv="x-dns-prefetch-control" content="off" />
```

Sie können diese Einstellung umkehren, indem Sie den Wert von `content` auf `"on"` setzen.

### Erzwungene Auflösung spezifischer Hostnamen

Sie können die Auflösung spezifischer Hostnamen erzwingen, ohne spezifische Anker mit diesem Hostnamen bereitzustellen, indem Sie das [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attribut auf dem {{HTMLElement("link")}}-Element mit einem [Link-Typ](/de/docs/Web/HTML/Attributes/rel) von `dns-prefetch` verwenden:

```html
<link rel="dns-prefetch" href="https://www.mozilla.org" />
```

In diesem Beispiel wird der Domänenname `www.mozilla.org` vorab aufgelöst.

Ähnlich kann das link-Element verwendet werden, um Hostnamen aufzulösen, ohne eine vollständige URL bereitzustellen, indem der Hostname nur mit zwei Slashes vorangestellt wird:

```html
<link rel="dns-prefetch" href="//www.mozilla.org" />
```

Erzwungenes Prefetching von Hostnamen könnte beispielsweise auf der Startseite einer Website nützlich sein, um die Namensauflösung von Domänen zu erzwingen, die häufig auf der gesamten Website verwendet werden, auch wenn sie auf der Startseite selbst nicht verwendet werden. Dies wird die Gesamtleistung der Website verbessern, selbst wenn die Leistung der Startseite nicht beeinträchtigt wird.

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DNS Prefetching für Firefox (Blogpost)](https://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html)
- [Wie Google Chrome die Steuerung des DNS Prefetching behandelt](https://www.chromium.org/developers/design-documents/dns-prefetching/)
