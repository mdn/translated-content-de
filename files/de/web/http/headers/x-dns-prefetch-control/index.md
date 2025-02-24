---
title: X-DNS-Prefetch-Control
slug: Web/HTTP/Headers/X-DNS-Prefetch-Control
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{Non-standard_header}}

Der HTTP **`X-DNS-Prefetch-Control`** {{Glossary("response_header", "Antwort-Header")}} steuert das DNS-Prefetching, ein Feature, bei dem Browser proaktiv die Domainnamen-Auflösung für Links durchführen, denen der Benutzer möglicherweise folgen möchte, sowie URLs für im Dokument referenzierte Elemente, einschließlich Bilder, CSS, JavaScript und so weiter.

Die Absicht ist, dass das Prefetching im Hintergrund durchgeführt wird, sodass die {{Glossary("DNS", "DNS")}}-Auflösung abgeschlossen ist, wenn die referenzierten Elemente vom Browser benötigt werden. Dies verringert die Latenzzeit, wenn der Benutzer zum Beispiel auf einen Link klickt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Aktiviert DNS-Prefetching. Dies ist das Verhalten der Browser, wenn sie das Feature unterstützen und dieser Header nicht vorhanden ist.
- `off`
  - : Deaktiviert DNS-Prefetching. Dies ist nützlich, wenn Sie die Links auf den Seiten nicht kontrollieren oder wissen, dass Sie keine Informationen an diese Domains weitergeben möchten.

## Beschreibung

DNS-Anfragen sind in Bezug auf die Bandbreite sehr klein, aber die Latenz kann ziemlich hoch sein, insbesondere in mobilen Netzwerken. Durch das spekulative Prefetching von DNS-Ergebnissen kann die Latenz erheblich reduziert werden, z. B. wenn der Benutzer auf den Link klickt. In einigen Fällen kann die Latenz um eine Sekunde verringert werden.

Die Implementierung dieses Prefetchings in einigen Browsern ermöglicht es, dass die Domainnamen-Auflösung parallel zur (statt seriell mit der) eigentlichen Fetching des Seiteninhalts erfolgt. Auf diese Weise verursacht der hoch-latenzbehaftete Prozess der Domainnamen-Auflösung keine Verzögerung beim Abrufen von Inhalten.

Die Ladezeiten von Seiten – insbesondere in mobilen Netzwerken – können auf diese Weise messbar verbessert werden. Wenn die Domainnamen für Bilder im Voraus aufgelöst werden können, bevor die Bilder angefordert werden, können Seiten, die viele Bilder laden, eine Verbesserung der Ladezeit der Bilder um 5% oder mehr erfahren.

### Konfigurieren des Prefetchings im Browser

Im Allgemeinen müssen Sie nichts tun, um Prefetching zu verwalten. Der Benutzer kann jedoch das Prefetching deaktivieren. In Firefox kann dies durch Setzen der `network.dns.disablePrefetch`-Präferenz auf `true` erfolgen.

Außerdem wird standardmäßig das Prefetching von eingebetteten Link-Hostnamen nicht bei über {{Glossary("HTTPS", "HTTPS")}} geladenen Dokumenten durchgeführt. In Firefox kann dies geändert werden, indem die Präferenz `network.dns.disablePrefetchFromHTTPS` auf `false` gesetzt wird.

## Beispiele

### Ein- und Ausschalten des Prefetchings

Sie können den `X-DNS-Prefetch-Control`-Header serverseitig senden oder mithilfe des `http-equiv`-Attributs auf dem {{HTMLElement("meta")}}-Element von einzelnen Dokumenten aus, wie folgt:

```html
<meta http-equiv="x-dns-prefetch-control" content="off" />
```

Sie können diese Einstellung umkehren, indem Sie `content` auf `"on"` setzen.

### Erzwingen der Auflösung bestimmter Hostnamen

Sie können die Auflösung bestimmter Hostnamen erzwingen, ohne spezifische Anker mit diesem Hostnamen bereitzustellen, indem Sie das `rel`-Attribut auf dem {{HTMLElement("link")}}-Element mit einem [Link-Typ](/de/docs/Web/HTML/Attributes/rel) von `dns-prefetch` verwenden:

```html
<link rel="dns-prefetch" href="https://www.mozilla.org" />
```

In diesem Beispiel wird der Domainname `www.mozilla.org` vorab aufgelöst.

Ebenso kann das Link-Element verwendet werden, um Hostnamen aufzulösen, ohne eine vollständige URL bereitzustellen, sondern nur, indem der Hostname mit zwei Schrägstrichen vorangestellt wird:

```html
<link rel="dns-prefetch" href="//www.mozilla.org" />
```

Erzwungenes Prefetching von Hostnamen kann nützlich sein, beispielsweise auf der Startseite einer Website, um die Vorabauflösung von Domainnamen zu erzwingen, die häufig auf der gesamten Website referenziert werden, auch wenn sie nicht auf der Startseite selbst verwendet werden. Dies wird die Gesamtleistung der Site verbessern, auch wenn die Leistung der Startseite möglicherweise nicht betroffen ist.

## Spezifikationen

Teil keiner aktuellen Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DNS Prefetching für Firefox (Blogbeitrag)](https://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html)
- [Wie Google Chrome die Kontrolle über das DNS-Prefetching handhabt](https://www.chromium.org/developers/design-documents/dns-prefetching/)
