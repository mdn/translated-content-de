---
title: X-Frame-Options header
short-title: X-Frame-Options
slug: Web/HTTP/Reference/Headers/X-Frame-Options
l10n:
  sourceCommit: 86fa532a00024e7c85a4c0d6339adce8b1bd9f61
---

{{HTTPSidebar}}

> [!NOTE]
> Für umfassendere Optionen, als sie dieser Header bietet, siehe die {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}-Direktive im {{HTTPHeader("Content-Security-Policy")}}-Header.

Der HTTP **`X-Frame-Options`** {{Glossary("response_header", "Antwort-Header")}} kann verwendet werden, um anzuzeigen, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf. Websites können dies nutzen, um [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht in andere Seiten eingebettet werden.

Die erhöhte Sicherheit wird nur geboten, wenn der Benutzer, der auf das Dokument zugreift, einen Browser verwendet, der `X-Frame-Options` unterstützt.

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

Für `X-Frame-Options` gibt es zwei mögliche Direktiven:

```http
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
```

### Direktiven

Wenn Sie `DENY` angeben, wird der Versuch des Browsers, die Seite in einem Frame zu laden, fehlschlagen, selbst wenn sie von derselben Seite geladen wird. Andererseits, wenn Sie `SAMEORIGIN` angeben, können Sie die Seite weiterhin in einem Frame verwenden, solange die einbettende Seite dieselbe ist wie die, die die Seite liefert.

- `DENY`
  - : Die Seite kann in keinem Frame angezeigt werden, unabhängig von der Seite, die es versucht.
- `SAMEORIGIN`
  - : Die Seite kann nur angezeigt werden, wenn alle übergeordneten Frames denselben Ursprung wie die Seite selbst haben.
- `ALLOW-FROM origin` {{deprecated_inline}}
  - : Diese Direktive ist veraltet. Moderne Browser, die auf Antwort-Header mit dieser Direktive stoßen, ignorieren den Header vollständig. Der {{HTTPHeader("Content-Security-Policy")}} HTTP-Header enthält eine {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}-Direktive, die Sie stattdessen verwenden sollten.

## Beispiele

> [!WARNING]
> Das Setzen von `X-Frame-Options` im {{HTMLElement("meta")}}-Element (z.B. `<meta http-equiv="X-Frame-Options" content="deny">`) hat keine Wirkung. `X-Frame-Options` wird nur über HTTP-Header durchgesetzt, wie in den folgenden Beispielen gezeigt.

### Konfiguration von Apache

Um Apache so zu konfigurieren, dass der `X-Frame-Options`-Header für alle Seiten gesendet wird, fügen Sie dies zur Konfiguration Ihrer Website hinzu:

```apacheconf
Header always set X-Frame-Options "SAMEORIGIN"
```

Um Apache so zu konfigurieren, dass `X-Frame-Options` auf `DENY` gesetzt wird, fügen Sie dies zur Konfiguration Ihrer Website hinzu:

```apacheconf
Header set X-Frame-Options "DENY"
```

### Konfiguration von Nginx

Um Nginx so zu konfigurieren, dass der `X-Frame-Options`-Header gesendet wird, fügen Sie dies entweder zu Ihrer http-, server- oder location-Konfiguration hinzu:

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

Sie können den `X-Frame-Options`-Header auf `DENY` setzen mit:

```nginx
add_header X-Frame-Options DENY always;
```

### Konfiguration von IIS

Um IIS so zu konfigurieren, dass der `X-Frame-Options`-Header gesendet wird, fügen Sie dies zur `Web.config`-Datei Ihrer Website hinzu:

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

Weitere Informationen finden Sie im [Microsoft Support-Artikel zur Konfiguration über die IIS Manager-Benutzeroberfläche](https://support.microsoft.com/en-US/office/mitigating-framesniffing-with-the-x-frame-options-header-1911411b-b51e-49fd-9441-e8301dcdcd79).

### Konfiguration von HAProxy

Um HAProxy so zu konfigurieren, dass der `X-Frame-Options`-Header gesendet wird, fügen Sie dies zu Ihrer front-end, listen oder backend-Konfiguration hinzu:

```plain
rspadd X-Frame-Options:\ SAMEORIGIN
```

Alternativ in neueren Versionen:

```plain
http-response set-header X-Frame-Options SAMEORIGIN
```

### Konfiguration von Express

Um `X-Frame-Options` auf `SAMEORIGIN` mit [Helmet](https://helmetjs.github.io/) zu setzen, fügen Sie Folgendes zur Server-Konfiguration hinzu:

```js
import helmet from "helmet";

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

- {{HTTPHeader("Content-Security-Policy")}}-Direktive {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}
- [ClickJacking-Abwehr - IEBlog](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Bekämpfung von ClickJacking mit X-Frame-Options - IEInternals](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
