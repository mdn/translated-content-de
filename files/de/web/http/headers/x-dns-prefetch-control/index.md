---
title: X-DNS-Prefetch-Control
slug: Web/HTTP/Headers/X-DNS-Prefetch-Control
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}{{Non-standard_header}}

Der **`X-DNS-Prefetch-Control`** HTTP-Antwort-Header steuert
das DNS-Prefetching, ein Feature, bei dem Browser proaktiv die Auflösung von Domainnamen
für Links, die der Benutzer möglicherweise auswählt, sowie für URLs von im Dokument referenzierten Elementen, einschließlich Bilder, CSS, JavaScript usw., durchführen.

Dieses Prefetching wird im Hintergrund ausgeführt, sodass wahrscheinlich die [DNS](/de/docs/Glossary/DNS) bereits aufgelöst ist, wenn die referenzierten Elemente benötigt werden. Dies reduziert die Latenz, wenn der Benutzer auf einen Link klickt.

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
X-DNS-Prefetch-Control: on
X-DNS-Prefetch-Control: off
```

### Direktiven

- on
  - : Aktiviert DNS-Prefetching. Dies ist das, was Browser tun, falls sie das Feature unterstützen, wenn dieser Header nicht vorhanden ist.
- off
  - : Deaktiviert DNS-Prefetching. Dies ist nützlich, wenn Sie die Links auf den Seiten nicht kontrollieren oder wissen, dass Sie keine Informationen an diese Domains weitergeben möchten.

## Beschreibung

DNS-Anfragen sind in Bezug auf die Bandbreite sehr klein, aber die Latenz kann insbesondere in mobilen Netzwerken ziemlich hoch sein. Durch spekulatives Prefetching von DNS-Ergebnissen kann die Latenz zu bestimmten Zeiten, wie etwa wenn der Benutzer auf einen Link klickt, erheblich reduziert werden. In einigen Fällen kann die Latenz um eine Sekunde reduziert werden.

Die Implementierung dieses Prefetchings in einigen Browsern ermöglicht es, dass die Auflösung von Domainnamen parallel (anstatt seriell) zum Abrufen des tatsächlichen Seiteninhalts erfolgt. Dadurch verursacht der hochlatente Domainnamen-Auflösungsprozess keine Verzögerung beim Abrufen von Inhalten.

Die Ladezeiten von Seiten – insbesondere in mobilen Netzwerken – können auf diese Weise messbar verbessert werden. Wenn die Domainnamen für Bilder im Voraus aufgelöst werden können, bevor die Bilder angefordert werden, können Seiten, die viele Bilder laden, eine Verbesserung der Ladezeiten von mehr als 5 % sehen.

### Prefetching im Browser konfigurieren

Im Allgemeinen müssen Sie nichts tun, um das Prefetching zu verwalten. Der Benutzer kann jedoch das Prefetching deaktivieren. In Firefox kann dies durch Setzen der Einstellung `network.dns.disablePrefetch` auf `true` erfolgen.

Standardmäßig wird das Prefetching von eingebetteten Link-Hostnamen nicht auf Dokumenten durchgeführt, die über [HTTPS](/de/docs/Glossary/HTTPS) geladen wurden. In Firefox kann dies durch Setzen der Einstellung `network.dns.disablePrefetchFromHTTPS` auf `false` geändert werden.

## Beispiele

### Prefetching ein- und ausschalten

Sie können entweder den `X-DNS-Prefetch-Control` Header serverseitig senden oder von einzelnen Dokumenten aus über das [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv) Attribut im {{HTMLElement("meta")}} Element, wie folgt:

```html
<meta http-equiv="x-dns-prefetch-control" content="off" />
```

Sie können diese Einstellung umkehren, indem Sie `content` auf `"on"` setzen.

### Erzwungene Suche nach bestimmten Hostnamen

Sie können die Suche nach bestimmten Hostnamen erzwingen, ohne bestimmte Anker mit diesem Hostnamen bereitzustellen, indem Sie das [`rel`](/de/docs/Web/HTML/Element/link#rel) Attribut im {{HTMLElement("link")}} Element mit einem [Link-Typ](/de/docs/Web/HTML/Attributes/rel) von `dns-prefetch` verwenden:

```html
<link rel="dns-prefetch" href="https://www.mozilla.org" />
```

In diesem Beispiel wird der Domainname `www.mozilla.org` voraufgelöst.

Ebenso kann das Link-Element verwendet werden, um Hostnamen aufzulösen, ohne eine vollständige URL anzugeben, sondern indem dem Hostnamen zwei Schrägstriche vorangestellt werden:

```html
<link rel="dns-prefetch" href="//www.mozilla.org" />
```

Erzwungenes Prefetching von Hostnamen kann nützlich sein, zum Beispiel auf der Startseite einer Website, um die Vorauflösung von Domainnamen zu erzwingen, die häufig auf der gesamten Website referenziert werden, auch wenn sie nicht auf der Startseite selbst verwendet werden. Dies wird die Gesamtleistung der Website verbessern, auch wenn die Leistung der Startseite möglicherweise nicht betroffen ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DNS-Prefetching für Firefox (Blogbeitrag)](https://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html)
- [Wie Google Chrome die Steuerung des DNS-Prefetchings handhabt](https://www.chromium.org/developers/design-documents/dns-prefetching/)
