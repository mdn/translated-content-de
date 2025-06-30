---
title: X-DNS-Prefetch-Control header
short-title: X-DNS-Prefetch-Control
slug: Web/HTTP/Reference/Headers/X-DNS-Prefetch-Control
l10n:
  sourceCommit: a33c2c8081a1df867a0a334afc560057b2124bad
---

{{HTTPSidebar}}{{Non-standard_header}}

Der HTTP-Response-Header **`X-DNS-Prefetch-Control`** steuert das DNS-Prefetching, eine Funktion, bei der Browser proaktiv die Auflösung von Domainnamen für Links durchführen, denen der Benutzer möglicherweise folgen möchte, sowie für URLs von Elementen, die im Dokument referenziert werden, einschließlich Bilder, CSS, JavaScript und so weiter.

Die Absicht ist, dass das Prefetching im Hintergrund durchgeführt wird, sodass die {{Glossary("DNS", "DNS")}}-Auflösung abgeschlossen ist, wenn die referenzierten Elemente vom Browser benötigt werden.
Dies reduziert die Latenzzeit, wenn der Benutzer beispielsweise auf einen Link klickt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
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
  - : Aktiviert das DNS-Prefetching. Das ist das, was Browser tun, wenn sie die Funktion unterstützen, wenn dieser Header nicht vorhanden ist.
- `off`
  - : Deaktiviert das DNS-Prefetching. Dies ist nützlich, wenn Sie die Links auf den Seiten nicht kontrollieren oder wissen, dass Sie keine Informationen an diese Domains preisgeben möchten.

## Beschreibung

DNS-Anfragen sind in Bezug auf Bandbreite sehr klein, aber die Latenzzeit kann ziemlich hoch sein, insbesondere in Mobilfunknetzen. Durch spekulatives Prefetching von DNS-Ergebnissen kann die Latenzzeit in bestimmten Fällen, wie zum Beispiel beim Klicken des Benutzers auf den Link, erheblich reduziert werden. In einigen Fällen kann die Latenzzeit um eine Sekunde reduziert werden.

Die Implementierung dieses Prefetchings in einigen Browsern ermöglicht es, dass die Auflösung von Domainnamen parallel (anstatt seriell) zum Laden der tatsächlichen Seiteninhalte erfolgt. Auf diese Weise verursacht der Hochlatenzprozess der Domainnamenauflösung keine Verzögerung beim Laden von Inhalten.

Ladezeiten von Seiten – insbesondere in Mobilfunknetzen – können auf diese Weise messbar verbessert werden. Wenn die Domainnamen von Bildern im Voraus aufgelöst werden können, bevor die Bilder angefordert werden, können Seiten, die viele Bilder laden, eine Verbesserung von 5% oder mehr bei der Ladezeit der Bilder sehen.

### Konfiguration des Prefetchings im Browser

Im Allgemeinen müssen Sie nichts tun, um das Prefetching zu verwalten. Der Benutzer kann jedoch das Prefetching deaktivieren. In Firefox kann dies durch Setzen der `network.dns.disablePrefetch`-Einstellung auf `true` erfolgen.

Auch das Prefetching von eingebetteten Link-Hostnamen wird standardmäßig nicht bei Dokumenten durchgeführt, die über {{Glossary("HTTPS", "HTTPS")}} geladen werden. In Firefox kann dies geändert werden, indem die `network.dns.disablePrefetchFromHTTPS`-Einstellung auf `false` gesetzt wird.

## Beispiele

### Prefetching aktivieren und deaktivieren

Sie können den `X-DNS-Prefetch-Control`-Header entweder serverseitig senden oder von einzelnen Dokumenten aus mithilfe des [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attributs im {{HTMLElement("meta")}}-Element wie folgt verwenden:

```html
<meta http-equiv="x-dns-prefetch-control" content="off" />
```

Sie können diese Einstellung ändern, indem Sie `content` auf `"on"` setzen.

### Erzwingen der Abfrage bestimmter Hostnamen

Sie können die Abfrage bestimmter Hostnamen erzwingen, ohne spezifische Anker zu diesen Hostnamen bereitzustellen, indem Sie das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut im {{HTMLElement("link")}}-Element mit einem [link type](/de/docs/Web/HTML/Reference/Attributes/rel) von `dns-prefetch` verwenden:

```html
<link rel="dns-prefetch" href="https://www.mozilla.org" />
```

In diesem Beispiel wird der Domainname `www.mozilla.org` vorab aufgelöst.

Ähnlich kann das Link-Element verwendet werden, um Hostnamen aufzulösen, ohne eine vollständige URL anzugeben, indem der Hostname nur mit zwei Schrägstrichen angegeben wird:

```html
<link rel="dns-prefetch" href="//www.mozilla.org" />
```

Erzwungenes Prefetching von Hostnamen kann nützlich sein, zum Beispiel auf der Homepage einer Website, um die Vorabauflösung von Domainnamen zu erzwingen, die häufig auf der gesamten Website referenziert werden, auch wenn sie auf der Homepage selbst nicht verwendet werden. Dies verbessert die Gesamtleistung der Website, auch wenn die Leistung der Homepage nicht betroffen sein mag.

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DNS Prefetching für Firefox (Blogpost)](https://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html)
- [Google Chrome behandelt DNS Prefetching Control](https://www.chromium.org/developers/design-documents/dns-prefetching/)
