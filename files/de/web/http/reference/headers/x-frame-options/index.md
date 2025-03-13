---
title: X-Frame-Options
slug: Web/HTTP/Reference/Headers/X-Frame-Options
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

> [!NOTE]
> Für umfassendere Optionen als die dieses Headers bietet, siehe die {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Direktive in einem {{HTTPHeader("Content-Security-Policy")}} Header.

Der HTTP-**`X-Frame-Options`**-{{Glossary("response_header", "Antwort-Header")}} kann verwendet werden, um anzugeben, ob ein Browser erlaubt ist, eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} darzustellen. Websites können dies nutzen, um [Clickjacking](/de/docs/Web/Security/Types_of_attacks#clickjacking)-Angriffe zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht in andere Sites eingebettet werden.

Die zusätzliche Sicherheit wird nur bereitgestellt, wenn der Benutzer, der auf das Dokument zugreift, einen Browser verwendet, der `X-Frame-Options` unterstützt.

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

Es gibt zwei mögliche Direktiven für `X-Frame-Options`:

```http
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
```

### Direktiven

Wenn Sie `DENY` angeben, wird nicht nur der Versuch des Browsers, die Seite in einem Rahmen zu laden, fehlschlagen, wenn sie von anderen Sites geladen wird, sondern auch, wenn sie von derselben Site geladen wird. Wenn Sie hingegen `SAMEORIGIN` angeben, können Sie die Seite weiterhin in einem Rahmen verwenden, solange die Site, die sie in einem Rahmen einbettet, dieselbe ist wie die, von der die Seite bereitgestellt wird.

- `DENY`
  - : Die Seite kann nicht in einem Rahmen angezeigt werden, unabhängig von der Site, die versucht, dies zu tun.
- `SAMEORIGIN`
  - : Die Seite kann nur angezeigt werden, wenn alle übergeordneten Rahmen denselben Ursprung wie die Seite selbst haben.
- `ALLOW-FROM origin` {{deprecated_inline}}
  - : Dies ist eine veraltete Direktive. Moderne Browser, die Antwort-Header mit dieser Direktive vorfinden, ignorieren den Header vollständig. Der {{HTTPHeader("Content-Security-Policy")}} HTTP-Header verfügt über eine {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Direktive, die Sie stattdessen verwenden sollten.

## Beispiele

> [!WARNING]
> Das Setzen von `X-Frame-Options` innerhalb des {{HTMLElement("meta")}} Elements (z.B. `<meta http-equiv="X-Frame-Options" content="deny">`) hat keine Wirkung. `X-Frame-Options` wird nur über HTTP-Header erzwungen, wie in den folgenden Beispielen gezeigt.

### Konfiguration von Apache

Um Apache so zu konfigurieren, dass der `X-Frame-Options`-Header für alle Seiten gesendet wird, fügen Sie dies zur Konfiguration Ihrer Site hinzu:

```apacheconf
Header always set X-Frame-Options "SAMEORIGIN"
```

Um Apache so zu konfigurieren, dass `X-Frame-Options` auf `DENY` gesetzt wird, fügen Sie dies zur Konfiguration Ihrer Site hinzu:

```apacheconf
Header set X-Frame-Options "DENY"
```

### Konfiguration von Nginx

Um Nginx so zu konfigurieren, dass der `X-Frame-Options`-Header gesendet wird, fügen Sie dies Ihrer http-, server- oder location-Konfiguration hinzu:

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

Sie können den `X-Frame-Options`-Header auf `DENY` setzen, indem Sie folgendes verwenden:

```nginx
add_header X-Frame-Options DENY always;
```

### Konfiguration von IIS

Um IIS so zu konfigurieren, dass der `X-Frame-Options`-Header gesendet wird, fügen Sie dies zur `Web.config`-Datei Ihrer Site hinzu:

```xml
<system.webServer>
  …
  <httpProtocol>
    <customHeaders>
      <add name="X-Frame-Options" value="SAMEORIGIN" />
    </customHeaders>
  </httpProtocol>
  …
</system.webServer>
```

Weitere Informationen finden Sie im [Microsoft Support-Artikel zum Setzen dieser Konfiguration mit der IIS Manager Benutzeroberfläche](https://support.microsoft.com/en-US/office/mitigating-framesniffing-with-the-x-frame-options-header-1911411b-b51e-49fd-9441-e8301dcdcd79).

### Konfiguration von HAProxy

Um HAProxy so zu konfigurieren, dass der `X-Frame-Options`-Header gesendet wird, fügen Sie dies Ihrer Front-End-, Listen- oder Backend-Konfiguration hinzu:

```plain
rspadd X-Frame-Options:\ SAMEORIGIN
```

Alternativ in neueren Versionen:

```plain
http-response set-header X-Frame-Options SAMEORIGIN
```

### Konfiguration von Express

Um `X-Frame-Options` mit [Helmet](https://helmetjs.github.io/) auf `SAMEORIGIN` zu setzen, fügen Sie folgendes zu Ihrer Server-Konfiguration hinzu:

```js
const helmet = require("helmet");
const app = express();
app.use(
  helmet({
    xFrameOptions: { action: "sameorigin" },
  }),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}} Direktive {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}
- [ClickJacking-Verteidigung - IEBlog](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Bekämpfung von ClickJacking mit X-Frame-Options - IEInternals](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
