---
title: X-Frame-Options
slug: Web/HTTP/Headers/X-Frame-Options
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

> [!NOTE]
> Für umfassendere Optionen als die, die von diesem Header angeboten werden, sehen Sie sich die {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Direktive in einem {{HTTPHeader("Content-Security-Policy")}} Header an.

Der HTTP **`X-Frame-Options`** {{Glossary("response_header", "Antwort-Header")}} kann verwendet werden, um anzugeben, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf. Webseiten können dies verwenden, um [Clickjacking](/de/docs/Web/Security/Types_of_attacks#clickjacking) Angriffe zu vermeiden, indem sichergestellt wird, dass ihre Inhalte nicht in andere Seiten eingebettet werden.

Die zusätzliche Sicherheit wird nur geboten, wenn der Nutzer, der auf das Dokument zugreift, einen Browser verwendet, der `X-Frame-Options` unterstützt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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

Wenn Sie `DENY` angeben, wird der Versuch des Browsers, die Seite in einem Frame zu laden, nicht nur scheitern, wenn sie von anderen Seiten geladen wird, sondern auch, wenn der Versuch von derselben Seite unternommen wird. Wenn Sie hingegen `SAMEORIGIN` angeben, können Sie die Seite immer noch in einem Frame verwenden, solange die Seite, die sie in einem Frame einschließt, dieselbe ist wie diejenige, die die Seite bereitstellt.

- `DENY`
  - : Die Seite kann in keinem Frame angezeigt werden, unabhängig von der Seite, die dies versucht.
- `SAMEORIGIN`
  - : Die Seite kann nur angezeigt werden, wenn alle übergeordneten Frames denselben Ursprung wie die Seite selbst haben.
- `ALLOW-FROM origin` {{deprecated_inline}}
  - : Dies ist eine veraltete Direktive. Moderne Browser, die Antwort-Header mit dieser Direktive finden, ignorieren den Header vollständig. Der {{HTTPHeader("Content-Security-Policy")}} HTTP-Header hat eine {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Direktive, die Sie stattdessen verwenden sollten.

## Beispiele

> [!WARNING] > `X-Frame-Options` im {{HTMLElement("meta")}} Element festzulegen (zum Beispiel `<meta http-equiv="X-Frame-Options" content="deny">`) hat keine Wirkung. `X-Frame-Options` wird nur über HTTP-Header erzwungen, wie in den folgenden Beispielen gezeigt.

### Konfigurieren von Apache

Um Apache zu konfigurieren, den `X-Frame-Options` Header für alle Seiten zu senden, fügen Sie dies zur Konfiguration Ihrer Seite hinzu:

```apacheconf
Header always set X-Frame-Options "SAMEORIGIN"
```

Um Apache so zu konfigurieren, dass `X-Frame-Options` auf `DENY` gesetzt wird, fügen Sie dies zur Konfiguration Ihrer Seite hinzu:

```apacheconf
Header set X-Frame-Options "DENY"
```

### Konfigurieren von Nginx

Um Nginx zu konfigurieren, den `X-Frame-Options` Header zu senden, fügen Sie dies entweder zu Ihrer http-, server- oder location-Konfiguration hinzu:

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

Sie können den `X-Frame-Options` Header auf `DENY` setzen, indem Sie:

```nginx
add_header X-Frame-Options DENY always;
```

### Konfigurieren von IIS

Um IIS zu konfigurieren, den `X-Frame-Options` Header zu senden, fügen Sie dies zur `Web.config` Datei Ihrer Seite hinzu:

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

Weitere Informationen finden Sie im [Microsoft Support-Artikel zum Einstellen dieser Konfiguration mit der IIS Manager](https://support.microsoft.com/en-US/office/mitigating-framesniffing-with-the-x-frame-options-header-1911411b-b51e-49fd-9441-e8301dcdcd79) Benutzeroberfläche.

### Konfigurieren von HAProxy

Um HAProxy zu konfigurieren, den `X-Frame-Options` Header zu senden, fügen Sie dies zu Ihrer Frontend-, Listen- oder Backend-Konfiguration hinzu:

```plain
rspadd X-Frame-Options:\ SAMEORIGIN
```

Alternativ, in neueren Versionen:

```plain
http-response set-header X-Frame-Options SAMEORIGIN
```

### Konfigurieren von Express

Um `X-Frame-Options` auf `SAMEORIGIN` mit [Helmet](https://helmetjs.github.io/) zu setzen, fügen Sie dies zu Ihrer Serverkonfiguration hinzu:

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
- [Maßnahmen gegen ClickJacking - IEBlog](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Bekämpfung von ClickJacking mit X-Frame-Options - IEInternals](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
