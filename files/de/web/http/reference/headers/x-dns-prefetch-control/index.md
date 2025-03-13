---
title: X-DNS-Prefetch-Control
slug: Web/HTTP/Reference/Headers/X-DNS-Prefetch-Control
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{Non-standard_header}}

Der HTTP-**`X-DNS-Prefetch-Control`**-{{Glossary("response_header", "Antwortheader")}} steuert das DNS-Prefetching, ein Feature, bei dem Browser proaktiv die Auflösung von Domainnamen für Links durchführen, denen der Benutzer möglicherweise folgen möchte, sowie für URLs von Elementen, die im Dokument referenziert sind, einschließlich Bilder, CSS, JavaScript usw.

Die Absicht ist, dass das Prefetching im Hintergrund durchgeführt wird, sodass die {{Glossary("DNS", "DNS")}}-Auflösung abgeschlossen ist, wenn die referenzierten Elemente vom Browser benötigt werden. Dies verringert die Latenzzeit, z. B. wenn der Benutzer auf einen Link klickt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : Aktiviert das DNS-Prefetching. Dies ist das Verhalten, wenn dieser Header nicht vorhanden ist, in Browsern, die diese Funktion unterstützen.
- `off`
  - : Deaktiviert das DNS-Prefetching. Dies ist nützlich, wenn Sie die Links auf den Seiten nicht kontrollieren oder wissen, dass Sie keine Informationen an diese Domains preisgeben möchten.

## Beschreibung

DNS-Anfragen sind im Hinblick auf die Bandbreite sehr klein, aber die Latenz kann ziemlich hoch sein, insbesondere in mobilen Netzwerken. Durch das spekulative Prefetching von DNS-Ergebnissen kann die Latenzzeit zu bestimmten Zeiten erheblich reduziert werden, wie z. B. wenn der Benutzer auf den Link klickt. In einigen Fällen kann die Latenzzeit um eine Sekunde reduziert werden.

Die Implementierung dieses Prefetchings in einigen Browsern ermöglicht es, dass die Domainnamen-Auflösung parallel (anstatt seriell) mit dem Abrufen der tatsächlichen Seiteninhalte erfolgt. Dadurch verursacht der Prozess der Domainnamen-Auflösung mit hoher Latenzzeit keine Verzögerung beim Abrufen von Inhalten.

Die Ladezeiten von Seiten - insbesondere in mobilen Netzwerken - können auf diese Weise messbar verbessert werden. Wenn die Domainnamen für Bilder im Voraus aufgelöst werden können, bevor die Bilder angefordert werden, können Seiten, die viele Bilder laden, eine Verbesserung von 5 % oder mehr in der Ladezeit von Bildern feststellen.

### Prefetching im Browser konfigurieren

Im Allgemeinen müssen Sie nichts unternehmen, um das Prefetching zu verwalten. Der Benutzer kann jedoch das Prefetching deaktivieren wollen. In Firefox kann dies durch Setzen der `network.dns.disablePrefetch`-Einstellung auf `true` geschehen.

Außerdem wird standardmäßig das Prefetching von eingebetteten Link-Hostnamen auf Dokumenten, die über {{Glossary("HTTPS", "HTTPS")}} geladen werden, nicht durchgeführt. In Firefox kann dies durch Setzen der `network.dns.disablePrefetchFromHTTPS`-Einstellung auf `false` geändert werden.

## Beispiele

### Prefetching ein- und ausschalten

Sie können den `X-DNS-Prefetch-Control`-Header serverseitig senden oder aus einzelnen Dokumenten heraus unter Verwendung des `http-equiv`-Attributes auf dem {{HTMLElement("meta")}}-Element setzen, wie folgt:

```html
<meta http-equiv="x-dns-prefetch-control" content="off" />
```

Sie können diese Einstellung umkehren, indem Sie `content` auf `"on"` setzen.

### Erzwingen der Auflösung spezifischer Hostnamen

Sie können die Auflösung spezifischer Hostnamen erzwingen, ohne spezifische Anker, die diesen Hostnamen verwenden, bereitzustellen, indem Sie das [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attribut auf dem {{HTMLElement("link")}}-Element mit einem [Link-Typ](/de/docs/Web/HTML/Attributes/rel) von `dns-prefetch` verwenden:

```html
<link rel="dns-prefetch" href="https://www.mozilla.org" />
```

In diesem Beispiel wird der Domainname `www.mozilla.org` vorab aufgelöst.

In ähnlicher Weise kann das Link-Element verwendet werden, um Hostnamen ohne Angabe einer vollständigen URL aufzulösen, jedoch nur, indem der Hostname mit zwei Schrägstrichen vorangestellt wird:

```html
<link rel="dns-prefetch" href="//www.mozilla.org" />
```

Erzwungenes Prefetching von Hostnamen könnte beispielsweise auf der Homepage einer Website nützlich sein, um die Vorabauflösung von Domainnamen zu erzwingen, die häufig auf der gesamten Website referenziert werden, auch wenn sie auf der Startseite selbst nicht verwendet werden. Dies wird die Gesamtleistung der Website verbessern, auch wenn die Leistung der Homepage möglicherweise nicht beeinflusst wird.

## Spezifikationen

Teil keiner aktuellen Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DNS Prefetching für Firefox (Blogbeitrag)](https://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html)
- [Wie Google Chrome das DNS-Prefetching steuert](https://www.chromium.org/developers/design-documents/dns-prefetching/)
