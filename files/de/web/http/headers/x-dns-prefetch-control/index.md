---
title: X-DNS-Prefetch-Control
slug: Web/HTTP/Headers/X-DNS-Prefetch-Control
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{HTTPSidebar}}{{Non-standard_header}}

Der **`X-DNS-Prefetch-Control`** HTTP-Antwort-Header steuert das DNS-Prefetching, ein Feature, bei dem Browser proaktiv die Namensauflösung von Domains sowohl für Links, denen der Benutzer möglicherweise folgen möchte, als auch für URLs von Elementen, die im Dokument referenziert werden, durchführen, einschließlich Bilder, CSS, JavaScript und so weiter.

Dieses Prefetching wird im Hintergrund durchgeführt, sodass der {{glossary("DNS")}} wahrscheinlich gelöst wurde, bevor die referenzierten Elemente benötigt werden. Dies reduziert die Latenzzeit, wenn der Benutzer auf einen Link klickt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Typ des Headers</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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
  - : Aktiviert das DNS-Prefetching. Dies ist das Standardverhalten von Browsern, wenn sie dieses Feature unterstützen und der Header nicht vorhanden ist.
- off
  - : Deaktiviert das DNS-Prefetching. Dies ist nützlich, wenn Sie die Links auf den Seiten nicht kontrollieren oder wissen, dass Sie keine Informationen an diese Domains leaken möchten.

## Beschreibung

DNS-Anfragen sind in Bezug auf die Bandbreite sehr klein, aber die Latenz kann, insbesondere in mobilen Netzwerken, ziemlich hoch sein. Durch spekulatives Prefetching von DNS-Ergebnissen kann die Latenzzeit zu bestimmten Zeiten, wie zum Beispiel wenn der Benutzer auf einen Link klickt, erheblich reduziert werden. In einigen Fällen kann die Latenz um eine Sekunde verringert werden.

Die Implementierung dieses Prefetchings in einigen Browsern ermöglicht es, dass die Namensauflösung der Domains parallel (statt seriell) zum Abrufen des eigentlichen Seiteninhalts abläuft. Dadurch verursacht der Prozess der Namensauflösung mit hoher Latenz keine Verzögerung beim Abrufen von Inhalten.

Ladezeiten von Seiten – insbesondere in mobilen Netzwerken – können auf diese Weise messbar verbessert werden. Wenn die Domainnamen für Bilder vor dem Anfordern der Bilder aufgelöst werden können, können Seiten, die viele Bilder laden, eine Verbesserung der Ladezeit der Bilder um 5 % oder mehr feststellen.

### Konfiguration des Prefetchings im Browser

Im Allgemeinen müssen Sie nichts tun, um das Prefetching zu verwalten. Der Benutzer kann jedoch wünschen, das Prefetching zu deaktivieren. In Firefox kann dies durch Setzen der `network.dns.disablePrefetch`-Einstellung auf `true` erfolgen.

Außerdem wird das Prefetching von eingebetteten Link-Hostnamen standardmäßig bei Dokumenten, die über {{glossary("HTTPS")}} geladen werden, nicht durchgeführt. In Firefox kann dies durch Setzen der `network.dns.disablePrefetchFromHTTPS`-Einstellung auf `false` geändert werden.

## Beispiele

### Ein- und Ausschalten des Prefetchings

Sie können den `X-DNS-Prefetch-Control`-Header serverseitig senden oder aus einzelnen Dokumenten unter Verwendung des [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attributes auf dem {{HTMLElement("meta")}}-Element wie folgt verwenden:

```html
<meta http-equiv="x-dns-prefetch-control" content="off" />
```

Sie können diese Einstellung umkehren, indem Sie `content` auf "`on`" setzen.

### Erzwingen der Namensauflösung bestimmter Hostnamen

Sie können die Namensauflösung bestimmter Hostnamen erzwingen, ohne explizit Anker zu verwenden, die diesen Hostnamen verwenden, indem Sie das [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attribut auf dem {{HTMLElement("link")}}-Element mit einem [Linktyp](/de/docs/Web/HTML/Attributes/rel) von `dns-prefetch` verwenden:

```html
<link rel="dns-prefetch" href="https://www.mozilla.org" />
```

In diesem Beispiel wird der Domainname `www.mozilla.org` vorab aufgelöst.

Ähnlich kann das Link-Element verwendet werden, um Hostnamen aufzulösen, ohne eine vollständige URL bereitzustellen, sondern nur, indem der Hostname mit zwei Schrägstrichen vorangestellt wird:

```html
<link rel="dns-prefetch" href="//www.mozilla.org" />
```

Erzwungenes Prefetching von Hostnamen kann zum Beispiel auf der Startseite einer Website nützlich sein, um die Namensauflösung von Domainnamen zu erzwingen, die häufig auf der gesamten Website referenziert werden, obwohl sie auf der Startseite selbst nicht verwendet werden. Dies verbessert die Gesamtleistung der Website, obwohl die Leistung der Startseite möglicherweise nicht betroffen ist.

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [DNS Prefetching für Firefox (Blog-Beitrag)](https://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html)
- [Google Chrome behandelt die Kontrolle des DNS-Prefetching](https://www.chromium.org/developers/design-documents/dns-prefetching/)
