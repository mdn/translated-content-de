---
title: X-DNS-Prefetch-Control header
short-title: X-DNS-Prefetch-Control
slug: Web/HTTP/Reference/Headers/X-DNS-Prefetch-Control
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Non-standard_header}}

Der HTTP **`X-DNS-Prefetch-Control`** {{Glossary("response_header", "Antwort-Header")}} steuert das DNS-Prefetching, eine Funktion, bei der Browser proaktiv die Auflösung von Domain-Namen für Links durchführen, denen der Nutzer möglicherweise folgen möchte, sowie für URLs von Elementen, die im Dokument referenziert werden, einschließlich Bilder, CSS, JavaScript und so weiter.

Die Absicht ist, dass das Prefetching im Hintergrund erfolgt, sodass die {{Glossary("DNS", "DNS")}}-Auflösung abgeschlossen ist, wenn die referenzierten Elemente vom Browser benötigt werden. Dies verringert die Latenzzeit, wenn der Nutzer beispielsweise auf einen Link klickt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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
  - : Aktiviert das DNS-Prefetching. Dies ist das Verhalten, das Browser unterstützen, wenn dieser Header nicht vorhanden ist.
- `off`
  - : Deaktiviert das DNS-Prefetching. Dies ist nützlich, wenn Sie die Links auf den Seiten nicht kontrollieren oder wissen, dass Sie keine Informationen an diese Domains weiterleiten möchten.

## Beschreibung

DNS-Anfragen sind in Bezug auf die Bandbreite sehr klein, aber die Latenzzeit kann ziemlich hoch sein, besonders in Mobilfunknetzen. Durch spekulatives Prefetching von DNS-Ergebnissen kann die Latenzzeit erheblich verringert werden, zum Beispiel wenn der Nutzer auf einen Link klickt. In einigen Fällen kann die Latenzzeit um eine Sekunde reduziert werden.

Die Implementierung dieses Prefetchings in einigen Browsern ermöglicht die Domain-Namen-Auflösung parallel (anstelle von seriell) mit dem Abrufen der eigentlichen Seiteninhalte. Auf diese Weise verursacht der hochlatente Prozess der Domain-Namen-Auflösung keine Verzögerung beim Abrufen von Inhalten.

Die Ladezeiten von Seiten – insbesondere in Mobilfunknetzen – können auf diese Weise messbar verbessert werden. Wenn die Domain-Namen für Bilder im Voraus aufgelöst werden können, bevor die Bilder angefordert werden, können Seiten, die viele Bilder laden, eine Verbesserung von 5 % oder mehr in der Ladezeit der Bilder sehen.

### Konfiguration des Prefetchings im Browser

Im Allgemeinen müssen Sie nichts tun, um das Prefetching zu verwalten. Der Nutzer möchte jedoch möglicherweise das Prefetching deaktivieren. In Firefox kann dies durch Setzen der Einstellung `network.dns.disablePrefetch` auf `true` erfolgen.

Außerdem wird das Prefetching von eingebetteten Link-Hostnamen standardmäßig nicht auf Dokumenten durchgeführt, die über {{Glossary("HTTPS", "HTTPS")}} geladen werden. In Firefox kann dies durch Setzen der Einstellung `network.dns.disablePrefetchFromHTTPS` auf `false` geändert werden.

## Beispiele

### Aktivieren und Deaktivieren des Prefetchings

Sie können den `X-DNS-Prefetch-Control`-Header serverseitig senden oder aus einzelnen Dokumenten mithilfe des [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attributs im {{HTMLElement("meta")}}-Element, wie folgt:

```html
<meta http-equiv="x-dns-prefetch-control" content="off" />
```

Sie können diese Einstellung rückgängig machen, indem Sie `content` auf `"on"` setzen.

### Forcieren der Auflösung bestimmter Hostnames

Sie können die Auflösung bestimmter Hostnames erzwingen, ohne spezifische Anker mit diesem Hostnamen bereitzustellen, indem Sie das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut im {{HTMLElement("link")}}-Element mit einem [Linktyp](/de/docs/Web/HTML/Reference/Attributes/rel) von `dns-prefetch` verwenden:

```html
<link rel="dns-prefetch" href="https://www.mozilla.org" />
```

In diesem Beispiel wird der Domain-Name `www.mozilla.org` vorausgelöst.

Ähnlich kann das Link-Element verwendet werden, um Hostnames aufzulösen, ohne eine vollständige URL bereitzustellen, indem nur der Hostname mit zwei Schrägstrichen vorangestellt wird:

```html
<link rel="dns-prefetch" href="//www.mozilla.org" />
```

Erzwungenes Prefetching von Hostnames könnte beispielsweise auf der Startseite einer Website nützlich sein, um die Vorauslösung von Domain-Namen zu erzwingen, die häufig auf der gesamten Website referenziert werden, auch wenn sie auf der Startseite selbst nicht verwendet werden. Dies wird die Gesamtleistung der Website verbessern, auch wenn die Leistung der Startseite möglicherweise nicht betroffen ist.

## Spezifikationen

Kein Teil einer aktuellen Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DNS Prefetching für Firefox (Blog-Post)](https://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html)
- [Google Chrome verwaltet DNS-Prefetching-Steuerung](https://www.chromium.org/developers/design-documents/dns-prefetching/)
