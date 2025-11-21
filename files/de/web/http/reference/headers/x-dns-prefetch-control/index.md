---
title: X-DNS-Prefetch-Control header
short-title: X-DNS-Prefetch-Control
slug: Web/HTTP/Reference/Headers/X-DNS-Prefetch-Control
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{Non-standard_header}}

Der HTTP-**`X-DNS-Prefetch-Control`**-{{Glossary("response_header", "Antwort-Header")}} steuert das DNS-Prefetching, eine Funktion, bei der Browser proaktiv die Namensauflösung für Links ausführen, denen der Benutzer möglicherweise folgen möchte, sowie für URLs von Objekten, die im Dokument referenziert werden, einschließlich Bilder, CSS, JavaScript usw.

Die Absicht ist, dass das Prefetching im Hintergrund erfolgt, sodass die {{Glossary("DNS", "DNS")}}-Auflösung abgeschlossen ist, wenn die referenzierten Elemente vom Browser benötigt werden. Dies reduziert die Latenz, wenn der Benutzer beispielsweise auf einen Link klickt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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
  - : Aktiviert DNS-Prefetching. Dies tun Browser, wenn sie die Funktion unterstützen und dieser Header nicht vorhanden ist.
- `off`
  - : Deaktiviert DNS-Prefetching. Dies ist nützlich, wenn Sie die Links auf den Seiten nicht kontrollieren oder wissen, dass Sie keine Informationen an diese Domains weitergeben möchten.

## Beschreibung

DNS-Anfragen sind hinsichtlich der Bandbreite sehr klein, aber die Latenz kann ziemlich hoch sein, insbesondere in Mobilfunknetzen. Durch spekulatives Prefetching von DNS-Ergebnissen kann die Latenz zu bestimmten Zeiten erheblich reduziert werden, etwa wenn der Benutzer auf den Link klickt. In einigen Fällen kann die Latenz um eine Sekunde reduziert werden.

Die Implementierung dieses Prefetchings in einigen Browsern ermöglicht es, dass die Namensauflösung parallel (statt seriell) zum tatsächlichen Abrufen des Seiteninhalts erfolgt. Dadurch verursacht der hoch Latenz behaftete Prozess der Namensauflösung keine Verzögerung beim Abrufen von Inhalten.

Die Ladezeiten von Seiten – insbesondere in Mobilfunknetzen – können auf diese Weise messbar verbessert werden. Wenn die Domainnamen für Bilder im Voraus aufgelöst werden können, bevor die Bilder angefordert werden, können Seiten, die viele Bilder laden, eine Verbesserung von 5 % oder mehr in der Ladezeit der Bilder erfahren.

### Konfiguration des Prefetchings im Browser

Im Allgemeinen müssen Sie nichts tun, um das Prefetching zu verwalten. Der Benutzer kann jedoch das Prefetching deaktivieren. In Firefox kann dies durch Setzen der `network.dns.disablePrefetch`-Einstellung auf `true` erreicht werden.

Außerdem erfolgt standardmäßig kein Prefetching von eingebetteten Link-Hostnamen in Dokumenten, die über {{Glossary("HTTPS", "HTTPS")}} geladen werden. In Firefox kann dies durch Setzen der `network.dns.disablePrefetchFromHTTPS`-Einstellung auf `false` geändert werden.

## Beispiele

### Aktivieren und Deaktivieren von Prefetching

Sie können den `X-DNS-Prefetch-Control`-Header entweder serverseitig senden oder aus einzelnen Dokumenten heraus verwenden, indem Sie das [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attribut im {{HTMLElement("meta")}}-Element verwenden, wie folgt:

```html
<meta http-equiv="x-dns-prefetch-control" content="off" />
```

Sie können diese Einstellung rückgängig machen, indem Sie `content` auf `"on"` setzen.

### Erzwingen der Auflösung bestimmter Hostnamen

Sie können die Auflösung bestimmter Hostnamen erzwingen, ohne spezifische Anker mit diesem Hostnamen bereitzustellen, indem Sie das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut im {{HTMLElement("link")}}-Element mit einem [Link-Typ](/de/docs/Web/HTML/Reference/Attributes/rel) von `dns-prefetch` verwenden:

```html
<link rel="dns-prefetch" href="https://www.mozilla.org" />
```

In diesem Beispiel wird der Domainname `www.mozilla.org` vorab aufgelöst.

Ebenso kann das link-Element verwendet werden, um Hostnamen zu lösen, ohne eine vollständige URL bereitzustellen, sondern nur, indem der Hostname mit zwei Schrägstrichen vorangestellt wird:

```html
<link rel="dns-prefetch" href="//www.mozilla.org" />
```

Erzwungenes Prefetching von Hostnamen könnte nützlich sein, zum Beispiel auf der Startseite einer Website, um die Vorauserlösung von Domainnamen zu erzwingen, die häufig auf der gesamten Website referenziert werden, auch wenn sie nicht auf der Startseite selbst verwendet werden. Dies wird die Gesamtleistung der Website verbessern, auch wenn die Leistung der Startseite möglicherweise nicht betroffen ist.

## Spezifikationen

Teil keiner aktuellen Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DNS-Prefetching für Firefox (Blogbeitrag)](https://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html)
- [Google Chrome behandelt DNS-Prefetching-Steuerung](https://www.chromium.org/developers/design-documents/dns-prefetching/)
