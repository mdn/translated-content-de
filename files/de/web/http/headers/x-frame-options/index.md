---
title: X-Frame-Options
slug: Web/HTTP/Headers/X-Frame-Options
l10n:
  sourceCommit: 2b44e3e665ceb5f4336089695aa5f617b1baf33c
---

{{HTTPSidebar}}{{deprecated_header}}

> [!WARNING]
> Anstelle dieses Headers verwenden Sie die {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Direktive in einem {{HTTPHeader("Content-Security-Policy")}} Header.

Der **`X-Frame-Options`** [HTTP](/de/docs/Web/HTTP) Response-Header kann verwendet werden, um anzuzeigen, ob es einem Browser erlaubt sein sollte, eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} darzustellen. Websites können dies verwenden, um [Clickjacking](/de/docs/Web/Security/Types_of_attacks#click-jacking) Angriffe zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht in andere Websites eingebettet werden.

Die hinzugefügte Sicherheit wird nur bereitgestellt, wenn der Benutzer, der auf das Dokument zugreift, einen Browser verwendet, der `X-Frame-Options` unterstützt.

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

Es gibt zwei mögliche Direktiven für `X-Frame-Options`:

```http
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
```

### Direktiven

Wenn Sie `DENY` angeben, wird der Versuch des Browsers, die Seite in einem Frame zu laden, fehlschlagen, egal ob von anderen Seiten geladen oder von derselben Seite. Andererseits, wenn Sie `SAMEORIGIN` angeben, können Sie die Seite dennoch in einem Frame verwenden, solange die Seite, die sie in einem Frame einbettet, dieselbe ist wie die, die die Seite bereitstellt.

- `DENY`
  - : Die Seite kann in keinem Frame angezeigt werden, unabhängig von der Seite, die dies versucht.
- `SAMEORIGIN` {{deprecated_inline}}
  - : Die Seite kann nur angezeigt werden, wenn alle übergeordneten Frames denselben Ursprung wie die Seite selbst haben.
- `ALLOW-FROM origin` {{deprecated_inline}}
  - : Dies ist eine veraltete Direktive. Moderne Browser, die Antwort-Header mit dieser Direktive empfangen, ignorieren den Header vollständig. Der {{HTTPHeader("Content-Security-Policy")}} HTTP-Header verfügt über eine {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Direktive, die Sie stattdessen verwenden sollten.

## Beispiele

> [!WARNING]
> Das Setzen von `X-Frame-Options` innerhalb des {{HTMLElement("meta")}} Elements (z.B., `<meta http-equiv="X-Frame-Options" content="deny">`) hat keine Wirkung. `X-Frame-Options` wird nur über HTTP-Header durchgesetzt, wie in den nachfolgenden Beispielen gezeigt.

### Konfiguration von Apache

Um Apache so zu konfigurieren, dass der `X-Frame-Options` Header für alle Seiten gesendet wird, fügen Sie dies zur Konfiguration Ihrer Website hinzu:

```apacheconf
Header always set X-Frame-Options "SAMEORIGIN"
```

Um Apache so zu konfigurieren, dass `X-Frame-Options` auf `DENY` gesetzt wird, fügen Sie dies zur Konfiguration Ihrer Website hinzu:

```apacheconf
Header set X-Frame-Options "DENY"
```

### Konfiguration von Nginx

Um Nginx so zu konfigurieren, dass der `X-Frame-Options` Header gesendet wird, fügen Sie dies entweder Ihrer http, server oder location Konfiguration hinzu:

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

Sie können den `X-Frame-Options` Header auf `DENY` setzen, indem Sie folgendes verwenden:

```nginx
add_header X-Frame-Options DENY always;
```

### Konfiguration von IIS

Um IIS so zu konfigurieren, dass der `X-Frame-Options` Header gesendet wird, fügen Sie dies zur `Web.config` Datei Ihrer Website hinzu:

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

Für weitere Informationen, lesen Sie den [Microsoft Support-Artikel über das Setzen dieser Konfiguration mittels IIS Manager](https://support.microsoft.com/en-US/office/mitigating-framesniffing-with-the-x-frame-options-header-1911411b-b51e-49fd-9441-e8301dcdcd79) Benutzeroberfläche.

### Konfiguration von HAProxy

Um HAProxy so zu konfigurieren, dass der `X-Frame-Options` Header gesendet wird, fügen Sie dies Ihrer Frontend-, Listen- oder Backend-Konfiguration hinzu:

```plain
rspadd X-Frame-Options:\ SAMEORIGIN
```

Alternativ, in neueren Versionen:

```plain
http-response set-header X-Frame-Options SAMEORIGIN
```

### Konfiguration von Express

Um `X-Frame-Options` auf `SAMEORIGIN` mit [Helmet](https://helmetjs.github.io/) zu setzen, fügen Sie folgendes zur Serverkonfiguration hinzu:

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
- [Clickjacking-Verteidigung - IEBlog](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Clickjacking mit X-Frame-Options bekämpfen - IEInternals](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
