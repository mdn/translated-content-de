---
title: X-Frame-Options
slug: Web/HTTP/Headers/X-Frame-Options
l10n:
  sourceCommit: 2b44e3e665ceb5f4336089695aa5f617b1baf33c
---

{{HTTPSidebar}}{{deprecated_header}}

> [!WARNING]
> Anstelle dieses Headers verwenden Sie die {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Direktive im {{HTTPHeader("Content-Security-Policy")}} Header.

Der **`X-Frame-Options`** [HTTP](/de/docs/Web/HTTP) Antwort-Header kann verwendet werden, um anzuzeigen, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf. Webseiten können dies nutzen, um [Clickjacking](/de/docs/Web/Security/Types_of_attacks#click-jacking) Angriffe zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht in andere Seiten eingebettet werden.

Die zusätzliche Sicherheit wird nur bereitgestellt, wenn der Benutzer, der auf das Dokument zugreift, einen Browser verwendet, der `X-Frame-Options` unterstützt.

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

Es gibt zwei mögliche Direktiven für `X-Frame-Options`:

```http
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
```

### Direktiven

Wenn Sie `DENY` angeben, wird nicht nur der Versuch des Browsers, die Seite in einem Frame zu laden, fehlschlagen, wenn sie von anderen Seiten geladen wird, sondern auch, wenn sie von derselben Seite geladen wird. Wenn Sie dagegen `SAMEORIGIN` angeben, können Sie die Seite weiterhin in einem Frame verwenden, solange die Seite, die sie in einem Frame einfügt, dieselbe ist wie die, die die Seite bereitstellt.

- `DENY`
  - : Die Seite kann in keinem Frame angezeigt werden, unabhängig von der Website, die versucht, dies zu tun.
- `SAMEORIGIN` {{deprecated_inline}}
  - : Die Seite kann nur angezeigt werden, wenn alle übergeordneten Frames den gleichen Ursprung wie die Seite selbst haben.
- `ALLOW-FROM origin` {{deprecated_inline}}
  - : Dies ist eine veraltete Direktive. Moderne Browser, die Antwort-Header mit dieser Direktive antreffen, ignorieren den Header vollständig. Der {{HTTPHeader("Content-Security-Policy")}} HTTP-Header hat eine {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Direktive, die stattdessen verwendet werden sollte.

## Beispiele

> [!WARNING]
> Das Setzen von `X-Frame-Options` innerhalb des {{HTMLElement("meta")}} Elements (z. B. `<meta http-equiv="X-Frame-Options" content="deny">`) hat keine Wirkung. `X-Frame-Options` wird nur über HTTP-Header durchgesetzt, wie in den folgenden Beispielen gezeigt.

### Konfiguration von Apache

Um Apache zu konfigurieren, den `X-Frame-Options` Header für alle Seiten zu senden, fügen Sie dies zur Konfiguration Ihrer Website hinzu:

```apacheconf
Header always set X-Frame-Options "SAMEORIGIN"
```

Um Apache zu konfigurieren, `X-Frame-Options` auf `DENY` zu setzen, fügen Sie dies zur Konfiguration Ihrer Website hinzu:

```apacheconf
Header set X-Frame-Options "DENY"
```

### Konfiguration von Nginx

Um Nginx zu konfigurieren, den `X-Frame-Options` Header zu senden, fügen Sie dies entweder in Ihre http-, server- oder location-Konfiguration ein:

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

Sie können den `X-Frame-Options` Header mit folgendem setzen, um `DENY` zu verwenden:

```nginx
add_header X-Frame-Options DENY always;
```

### Konfiguration von IIS

Um IIS zu konfigurieren, den `X-Frame-Options` Header zu senden, fügen Sie dies zur `Web.config` Datei Ihrer Website hinzu:

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

Weitere Informationen finden Sie im [Microsoft Support-Artikel zur Konfiguration dieser Einstellung über die IIS Manager Benutzeroberfläche](https://support.microsoft.com/en-US/office/mitigating-framesniffing-with-the-x-frame-options-header-1911411b-b51e-49fd-9441-e8301dcdcd79).

### Konfiguration von HAProxy

Um HAProxy zu konfigurieren, den `X-Frame-Options` Header zu senden, fügen Sie dies zur Konfiguration Ihrer Front-End, Listen- oder Backend-Konfiguration hinzu:

```plain
rspadd X-Frame-Options:\ SAMEORIGIN
```

Alternativ in neueren Versionen:

```plain
http-response set-header X-Frame-Options SAMEORIGIN
```

### Konfiguration von Express

Um `X-Frame-Options` mit [Helmet](https://helmetjs.github.io/) auf `SAMEORIGIN` zu setzen, fügen Sie dies Ihrer Serverkonfiguration hinzu:

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
- [ClickJacking-Abwehrmaßnahmen - IEBlog](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Bekämpfung von ClickJacking mit X-Frame-Options - IEInternals](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
