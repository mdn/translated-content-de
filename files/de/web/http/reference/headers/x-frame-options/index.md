---
title: X-Frame-Options header
short-title: X-Frame-Options
slug: Web/HTTP/Reference/Headers/X-Frame-Options
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{HTTPSidebar}}

> [!NOTE]
> Für umfassendere Optionen als die, die durch diesen Header angeboten werden, siehe die {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}-Direktive in einem {{HTTPHeader("Content-Security-Policy")}}-Header.

Der HTTP **`X-Frame-Options`** {{Glossary("response_header", "Antwort-Header")}} kann verwendet werden, um anzugeben, ob ein Browser berechtigt ist, eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} darzustellen. Webseiten können dies nutzen, um [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe zu vermeiden, indem sichergestellt wird, dass ihre Inhalte nicht in andere Seiten eingebettet werden.

Die zusätzliche Sicherheit wird nur gewährt, wenn der Benutzer, der auf das Dokument zugreift, einen Browser verwendet, der `X-Frame-Options` unterstützt.

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

```http
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
```

### Direktiven

- `DENY`
  - : Die Seite kann nicht in einem Rahmen angezeigt werden, unabhängig von der Webseite, die versucht, dies zu tun. Versuche, die Seite in einem Rahmen von anderen Webseiten zu laden, schlagen ebenso fehl wie Versuche, dies von derselben Seite aus zu tun.
- `SAMEORIGIN`
  - : Die Seite kann nur angezeigt werden, wenn alle übergeordneten Rahmen die gleiche Herkunft haben wie die Seite selbst. Sie können die Seite weiterhin in einem Rahmen verwenden, solange die Webseite, die sie in einem Rahmen einfügt, dieselbe ist wie die, die die Seite bereitstellt.
- `ALLOW-FROM origin` {{deprecated_inline}}
  - : Dies ist eine veraltete Direktive. Moderne Browser, die Antwort-Header mit dieser Direktive erkennen, ignorieren den Header vollständig. Der {{HTTPHeader("Content-Security-Policy")}}-HTTP-Header verfügt über eine {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}-Direktive, die Sie stattdessen verwenden sollten.

## Beispiele

> [!WARNING]
> Das Setzen von `X-Frame-Options` innerhalb des {{HTMLElement("meta")}}-Elements (z. B., `<meta http-equiv="X-Frame-Options" content="deny">`) hat keine Wirkung. `X-Frame-Options` wird nur über HTTP-Header durchgesetzt, wie in den nachfolgenden Beispielen gezeigt.

### Konfiguration von Apache

Um Apache zu konfigurieren, den `X-Frame-Options`-Header für alle Seiten zu senden, fügen Sie dies der Konfiguration Ihrer Webseite hinzu:

```apacheconf
Header always set X-Frame-Options "SAMEORIGIN"
```

Um Apache zu konfigurieren, `X-Frame-Options` auf `DENY` zu setzen, fügen Sie dies der Konfiguration Ihrer Webseite hinzu:

```apacheconf
Header set X-Frame-Options "DENY"
```

### Konfiguration von Nginx

Um Nginx zu konfigurieren, den `X-Frame-Options`-Header zu senden, fügen Sie dies entweder Ihrer HTTP-, Server- oder Standortkonfiguration hinzu:

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

Sie können den `X-Frame-Options`-Header auf `DENY` setzen mit:

```nginx
add_header X-Frame-Options DENY always;
```

### Konfiguration von IIS

Um IIS zu konfigurieren, den `X-Frame-Options`-Header zu senden, fügen Sie dies Ihrer `Web.config`-Datei der Webseite hinzu:

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

Weitere Informationen finden Sie im [Microsoft-Supportartikel zu dieser Konfiguration über die IIS-Manager-Benutzeroberfläche](https://support.microsoft.com/en-US/office/mitigating-framesniffing-with-the-x-frame-options-header-1911411b-b51e-49fd-9441-e8301dcdcd79).

### Konfiguration von HAProxy

Um HAProxy zu konfigurieren, den `X-Frame-Options`-Header zu senden, fügen Sie dies Ihrer Frontend-, Listen- oder Backend-Konfiguration hinzu:

```plain
rspadd X-Frame-Options:\ SAMEORIGIN
```

Alternativ in neueren Versionen:

```plain
http-response set-header X-Frame-Options SAMEORIGIN
```

### Konfiguration von Express

Um `X-Frame-Options` auf `SAMEORIGIN` mit [Helmet](https://helmetjs.github.io/) zu setzen, fügen Sie das folgende Ihrer Serverkonfiguration hinzu:

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
