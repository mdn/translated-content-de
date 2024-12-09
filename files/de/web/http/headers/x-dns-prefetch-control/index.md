---
title: X-DNS-Prefetch-Control
slug: Web/HTTP/Headers/X-DNS-Prefetch-Control
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}{{Non-standard_header}}

Der HTTP **`X-DNS-Prefetch-Control`** {{Glossary("response_header", "Response-Header")}} steuert das DNS-Prefetching, eine Funktion, bei der Browser proaktiv die Domainnamen-Auflösung für Links durchführen, denen der Benutzer möglicherweise folgen möchte, sowie für URLs von Elementen, die im Dokument referenziert werden, einschließlich Bilder, CSS, JavaScript usw.

Ziel ist, dass das Prefetching im Hintergrund erfolgt, sodass die {{Glossary("DNS", "DNS")}}-Auflösung abgeschlossen ist, wenn die referenzierten Elemente vom Browser benötigt werden. Dies reduziert die Latenz, wenn der Benutzer beispielsweise auf einen Link klickt.

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
  - : Aktiviert DNS-Prefetching. Dies ist das Verhalten von Browsern, wenn sie diese Funktion unterstützen und der Header nicht vorhanden ist.
- `off`
  - : Deaktiviert DNS-Prefetching. Dies ist nützlich, wenn Sie keine Kontrolle über die Links auf den Seiten haben oder wenn Sie wissen, dass Sie keine Informationen an diese Domains weiterleiten möchten.

## Beschreibung

DNS-Anfragen sind in Bezug auf die Bandbreite sehr klein, aber die Latenz kann ziemlich hoch sein, insbesondere in Mobilfunknetzen. Durch spekulatives Prefetching von DNS-Ergebnissen kann die Latenz zu bestimmten Zeiten signifikant reduziert werden, wie z.B. wenn der Benutzer auf einen Link klickt. In einigen Fällen kann die Latenz um eine Sekunde reduziert werden.

Die Implementierung dieses Prefetchings in einigen Browsern ermöglicht die parallele Domainnamensauflösung (anstatt seriell) mit dem Abrufen von tatsächlichen Seiteninhalten. Dadurch verursacht der hochlatenzartige Domainnamensauflösungsprozess keine Verzögerung beim Abrufen von Inhalten.

Seitenladezeiten – insbesondere in Mobilfunknetzen – können auf diese Weise messbar verbessert werden. Wenn die Domänennamen für Bilder vor dem Anfordern der Bilder aufgelöst werden können, können Seiten, die viele Bilder laden, eine Verbesserung der Ladezeiten um 5% oder mehr feststellen.

### Konfigurieren des Prefetchings im Browser

Im Allgemeinen müssen Sie nichts tun, um Prefetching zu verwalten. Der Benutzer kann jedoch Prefetching deaktivieren. In Firefox kann dies durch Setzen der `network.dns.disablePrefetch`-Einstellung auf `true` erfolgen.

Außerdem wird das Prefetching von eingebetteten Link-Hostnamen standardmäßig nicht bei Dokumenten durchgeführt, die über {{Glossary("HTTPS", "HTTPS")}} geladen werden. In Firefox kann dies geändert werden, indem die `network.dns.disablePrefetchFromHTTPS`-Einstellung auf `false` gesetzt wird.

## Beispiele

### Aktivierung und Deaktivierung des Prefetchings

Sie können den `X-DNS-Prefetch-Control`-Header serverseitig senden oder von einzelnen Dokumenten unter Verwendung des [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv) Attributs auf dem {{HTMLElement("meta")}} Element setzen, wie folgt:

```html
<meta http-equiv="x-dns-prefetch-control" content="off" />
```

Sie können diese Einstellung rückgängig machen, indem Sie `content` auf `"on"` setzen.

### Erzwingen der Suche nach bestimmten Hostnamen

Sie können die Suche nach bestimmten Hostnamen erzwingen, ohne spezifische Anker zu diesen Hostnamen bereitzustellen, indem Sie das [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attribut auf dem {{HTMLElement("link")}} Element mit einem [Link-Typ](/de/docs/Web/HTML/Attributes/rel) von `dns-prefetch` verwenden:

```html
<link rel="dns-prefetch" href="https://www.mozilla.org" />
```

In diesem Beispiel wird der Domainname `www.mozilla.org` vorher aufgelöst.

Ähnlich kann das Link-Element verwendet werden, um Hostnamen zu lösen, ohne eine vollständige URL bereitzustellen, sondern nur durch Voranstellen des Hostnamens mit zwei Schrägstrichen:

```html
<link rel="dns-prefetch" href="//www.mozilla.org" />
```

Erzwungenes Prefetching von Hostnamen kann beispielsweise auf der Startseite einer Website nützlich sein, um die Vorauflösung von Domainnamen zu erzwingen, die häufig auf der gesamten Website referenziert werden, obwohl sie auf der Startseite selbst nicht genutzt werden. Dies wird die Gesamtleistung der Website verbessern, obwohl die Leistung der Startseite möglicherweise nicht betroffen ist.

## Browser-Kompatibilität

{{Compat}}

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation.

## Siehe auch

- [DNS Prefetching für Firefox (Blog-Post)](https://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html)
- [Google Chrome handhabt DNS-Prefetching-Kontrolle](https://www.chromium.org/developers/design-documents/dns-prefetching/)
