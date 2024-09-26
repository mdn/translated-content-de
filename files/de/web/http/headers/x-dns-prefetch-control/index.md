---
title: X-DNS-Prefetch-Control
slug: Web/HTTP/Headers/X-DNS-Prefetch-Control
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}{{Non-standard_header}}

Der **`X-DNS-Prefetch-Control`** HTTP-Response-Header steuert das DNS-Prefetching, eine Funktion, bei der Browser proaktiv die Auflösung von Domainnamen für Links, die der Benutzer möglicherweise folgt, sowie für URLs von Elementen, auf die im Dokument verwiesen wird, wie Bilder, CSS, JavaScript und so weiter, durchführen.

Dieses Prefetching wird im Hintergrund ausgeführt, sodass wahrscheinlich das {{glossary("DNS")}} bis zu dem Zeitpunkt gelöst ist, an dem die referenzierten Elemente benötigt werden. Dies reduziert die Latenz, wenn der Benutzer auf einen Link klickt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
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
  - : Aktiviert das DNS-Prefetching. Dies ist das Verhalten, das Browser an den Tag legen, wenn dieses Header nicht vorhanden ist.
- off
  - : Deaktiviert das DNS-Prefetching. Dies ist nützlich, wenn Sie die Links auf den Seiten nicht kontrollieren oder wissen, dass Sie keine Informationen an diese Domains preisgeben möchten.

## Beschreibung

DNS-Anfragen sind in Bezug auf die Bandbreite sehr klein, aber die Latenz kann ziemlich hoch sein, besonders in Mobilfunknetzen. Durch das spekulative Prefetching von DNS-Ergebnissen kann die Latenz zu bestimmten Zeiten, z.B. wenn der Benutzer auf den Link klickt, erheblich reduziert werden. In einigen Fällen kann die Latenz um eine Sekunde reduziert werden.

Die Implementierung dieses Prefetchings in einigen Browsern ermöglicht, dass die Auflösung von Domainnamen parallel zur (anstatt seriell mit) tatsächlichen Inhaltsabruf erfolgt. Dadurch führt der Prozess der hochlatenzhaften Domainnamenauflösung zu keiner Verzögerung beim Abrufen von Inhalten.

Seitenladezeiten – besonders in Mobilfunknetzen – können auf diese Weise messbar verbessert werden. Wenn die Domainnamen für Bilder im Voraus aufgelöst werden können, bevor die Bilder angefordert werden, können Seiten, die viele Bilder laden, eine Verbesserung von 5 % oder mehr in der Ladezeit der Bilder feststellen.

### Konfigurieren des Prefetchings im Browser

Im Allgemeinen benötigen Sie nichts zur Verwaltung des Prefetchings zu tun. Der Benutzer möchte jedoch möglicherweise das Prefetching deaktivieren. In Firefox kann dies durch Setzen der `network.dns.disablePrefetch`-Einstellung auf `true` erfolgen.

Auch wird das Prefetching von eingebetteten Link-Hostnamen standardmäßig nicht für über {{glossary("HTTPS")}} geladene Dokumente durchgeführt. In Firefox kann dies durch Setzen der `network.dns.disablePrefetchFromHTTPS`-Einstellung auf `false` geändert werden.

## Beispiele

### Aktivieren und Deaktivieren von Prefetching

Sie können den `X-DNS-Prefetch-Control`-Header entweder serverseitig senden oder von einzelnen Dokumenten aus nutzen, indem Sie das [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut im {{HTMLElement("meta")}}-Element verwenden, so:

```html
<meta http-equiv="x-dns-prefetch-control" content="off" />
```

Sie können diese Einstellung umkehren, indem Sie `content` auf `"on"` setzen.

### Erzwingen der Auflösung spezifischer Hostnamen

Sie können die Auflösung spezifischer Hostnamen erzwingen, ohne spezielle Anker mit diesem Hostnamen bereitzustellen, indem Sie das [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attribut im {{HTMLElement("link")}}-Element mit einem [Linktyp](/de/docs/Web/HTML/Attributes/rel) von `dns-prefetch` verwenden:

```html
<link rel="dns-prefetch" href="https://www.mozilla.org" />
```

In diesem Beispiel wird der Domainname `www.mozilla.org` vorab aufgelöst.

Ähnlich kann das Link-Element verwendet werden, um Hostnamen aufzulösen, ohne eine vollständige URL bereitzustellen, sondern nur durch das Voranstellen des Hostnamens mit zwei Schrägstrichen:

```html
<link rel="dns-prefetch" href="//www.mozilla.org" />
```

Erzwungenes Prefetching von Hostnamen könnte nützlich sein, beispielsweise auf der Startseite einer Website, um die Vorauflösung von Domainnamen zu erzwingen, die häufig auf der gesamten Seite referenziert werden, obwohl sie auf der Startseite selbst nicht verwendet werden. Dies verbessert die Gesamtleistung der Website, auch wenn die Leistung der Startseite vielleicht nicht betroffen ist.

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [DNS Prefetching für Firefox (Blog-Beitrag)](https://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html)
- [Google Chrome handles DNS prefetching control](https://www.chromium.org/developers/design-documents/dns-prefetching/)
