---
title: X-DNS-Prefetch-Control header
short-title: X-DNS-Prefetch-Control
slug: Web/HTTP/Reference/Headers/X-DNS-Prefetch-Control
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{Non-standard_header}}

Der HTTP **`X-DNS-Prefetch-Control`** {{Glossary("response_header", "Antwort-Header")}} steuert das DNS-Prefetching, eine Funktion, bei der Browser proaktiv die Namensauflösung von Domains für Links durchführen, denen der Benutzer möglicherweise folgen möchte, sowie die URLs für im Dokument referenzierte Elemente, einschließlich Bilder, CSS, JavaScript usw.

Die Absicht ist, dass das Prefetching im Hintergrund durchgeführt wird, sodass die {{Glossary("DNS", "DNS")}}-Auflösung abgeschlossen ist, wenn die referenzierten Elemente vom Browser benötigt werden.
Dies reduziert die Latenz, wenn der Benutzer beispielsweise auf einen Link klickt.

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

### Direktiven

- `on`
  - : Aktiviert das DNS-Prefetching. Dies ist das Verhalten von Browsern, die diese Funktion unterstützen, wenn dieser Header nicht vorhanden ist.
- `off`
  - : Deaktiviert das DNS-Prefetching. Dies ist nützlich, wenn Sie die Links auf den Seiten nicht kontrollieren oder wissen, dass Sie keine Informationen an diese Domains weitergeben möchten.

## Beschreibung

DNS-Anfragen sind in Bezug auf Bandbreite sehr klein, aber die Latenz kann ziemlich hoch sein,
insbesondere in mobilen Netzwerken. Durch spekulatives Prefetching von DNS-Ergebnissen kann die
Latenz zu bestimmten Zeiten erheblich reduziert werden, z. B. wenn der Benutzer auf den Link klickt. In einigen
Fällen kann die Latenz um eine Sekunde verringert werden.

Die Implementierung dieses Prefetchings in einigen Browsern ermöglicht es, dass die Namensauflösung
parallel (anstatt seriell) zum Abruf des eigentlichen Seiteninhalts durchgeführt wird. Dadurch verursacht der
hochlatenzbehaftete Namensauflösungsprozess keine Verzögerung beim Abrufen von Inhalten.

Die Ladezeiten von Seiten – insbesondere in mobilen Netzwerken – können auf diese Weise messbar verbessert werden. Wenn die Domain-Namen für Bilder im Voraus aufgelöst werden können, bevor die Bilder angefordert werden, können Seiten, die viele Bilder laden, eine Verbesserung der Ladezeit von 5 % oder mehr erfahren.

### Konfigurieren des Prefetchings im Browser

Im Allgemeinen müssen Sie nichts tun, um das Prefetching zu verwalten. Der Benutzer könnte jedoch
wünschen, das Prefetching zu deaktivieren. In Firefox kann dies durch Setzen der
`network.dns.disablePrefetch`-Einstellung auf `true` erfolgen.

Standardmäßig wird auch das Prefetching der eingebetteten Link-Hostnamen bei über {{Glossary("HTTPS", "HTTPS")}} geladenen Dokumenten nicht durchgeführt. In Firefox kann dies durch Setzen der
`network.dns.disablePrefetchFromHTTPS`-Einstellung auf `false` geändert werden.

## Beispiele

### Ein- und Ausschalten des Prefetchings

Sie können den `X-DNS-Prefetch-Control`-Header serverseitig senden oder von
einzelnen Dokumenten aus unter Verwendung des [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv) Attributs im {{HTMLElement("meta")}}-Element, folgendermaßen:

```html
<meta http-equiv="x-dns-prefetch-control" content="off" />
```

Sie können diese Einstellung rückgängig machen, indem Sie `content` auf `"on"` setzen.

### Erzwingen der Suche nach bestimmten Hostnamen

Sie können die Suche nach bestimmten Hostnamen erzwingen, ohne spezifische Anker mit
diesem Hostnamen bereitzustellen, indem Sie das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) Attribut im
{{HTMLElement("link")}}-Element mit einem [Linktyp](/de/docs/Web/HTML/Reference/Attributes/rel) von `dns-prefetch` verwenden:

```html
<link rel="dns-prefetch" href="https://www.mozilla.org" />
```

In diesem Beispiel wird der Domain-Name `www.mozilla.org` vorab aufgelöst.

Auf ähnliche Weise kann das Link-Element verwendet werden, um Hostnamen ohne Angabe einer
vollständigen URL aufzulösen, indem dem Hostnamen nur zwei Schrägstriche vorangestellt werden:

```html
<link rel="dns-prefetch" href="//www.mozilla.org" />
```

Erzwungenes Prefetching von Hostnamen kann nützlich sein, beispielsweise auf der Homepage einer Website,
um die Vorauflösung von Domain-Namen zu erzwingen, die häufig auf der gesamten Website referenziert werden, obwohl
sie nicht auf der Homepage selbst verwendet werden. Dies wird die Gesamtleistung der Website verbessern,
auch wenn die Leistung der Homepage möglicherweise nicht beeinflusst wird.

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DNS Prefetching für Firefox (Blogbeitrag)](https://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html)
- [Google Chrome handelt DNS-Prefetching-Steuerung](https://www.chromium.org/developers/design-documents/dns-prefetching/)
