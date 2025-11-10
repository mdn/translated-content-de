---
title: X-Frame-Options header
short-title: X-Frame-Options
slug: Web/HTTP/Reference/Headers/X-Frame-Options
l10n:
  sourceCommit: d62b4091759dd4d6d407541575ff6738834830d3
---

> [!NOTE]
> Für umfassendere Optionen als die, die dieser Header bietet, siehe die {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}-Direktive in einem {{HTTPHeader("Content-Security-Policy")}}-Header.

Der HTTP **`X-Frame-Options`** {{Glossary("response_header", "Response-Header")}} kann verwendet werden, um anzugeben, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf. Websites können dies nutzen, um [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe zu vermeiden, indem sichergestellt wird, dass ihre Inhalte nicht in andere Websites eingebettet werden.

Die erhöhte Sicherheit wird nur geboten, wenn der Benutzer, der auf das Dokument zugreift, einen Browser verwendet, der `X-Frame-Options` unterstützt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
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
  - : Die Seite kann nicht in einem Frame angezeigt werden, unabhängig davon, welche Seite versucht, dies zu tun. Nicht nur wird der Versuch des Browsers, die Seite in einem Frame zu laden, fehlschlagen, wenn sie von anderen Seiten geladen wird, auch Versuche beim Laden von derselben Seite werden fehlschlagen.
- `SAMEORIGIN`
  - : Die Seite kann nur angezeigt werden, wenn alle übergeordneten Frames den gleichen {{Glossary("origin", "Origin")}} wie die Seite selbst haben. Sie können die Seite weiterhin in einem Frame verwenden, solange die Seite, die sie in einem Frame einbindet, dieselbe ist, die die Seite bereitstellt.
- `ALLOW-FROM origin` {{deprecated_inline}}
  - : Dies ist eine veraltete Direktive. Moderne Browser, die Antwort-Header mit dieser Direktive erhalten, ignorieren den Header vollständig. Der {{HTTPHeader("Content-Security-Policy")}} HTTP-Header besitzt eine {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}-Direktive, die stattdessen verwendet werden sollte.

## Beispiele

> [!WARNING]
> Das Setzen von `X-Frame-Options` innerhalb des {{HTMLElement("meta")}}-Elements (z.B. `<meta http-equiv="X-Frame-Options" content="deny">`) hat keine Wirkung. `X-Frame-Options` wird nur über HTTP-Header durchgesetzt, wie in den folgenden Beispielen gezeigt.

### Konfigurieren von Apache

Um Apache so zu konfigurieren, dass es den `X-Frame-Options`-Header für alle Seiten sendet, fügen Sie dies Ihrer Site-Konfiguration hinzu:

```apacheconf
Header always set X-Frame-Options "SAMEORIGIN"
```

Um Apache so zu konfigurieren, dass es `X-Frame-Options` auf `DENY` setzt, fügen Sie dies zur Konfiguration Ihrer Website hinzu:

```apacheconf
Header set X-Frame-Options "DENY"
```

### Konfigurieren von Nginx

Um Nginx so zu konfigurieren, dass es den `X-Frame-Options`-Header sendet, fügen Sie dies entweder zur http-, server- oder location-Konfiguration hinzu:

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

Sie können den `X-Frame-Options`-Header auf `DENY` setzen mit:

```nginx
add_header X-Frame-Options DENY always;
```

### Konfigurieren von IIS

Um IIS so zu konfigurieren, dass es den `X-Frame-Options`-Header sendet, fügen Sie dies Ihrer `Web.config`-Datei der Website hinzu:

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

Für weitere Informationen siehe den [Microsoft Support-Artikel zur Konfiguration mit der IIS Manager-Oberfläche](https://support.microsoft.com/en-US/office/mitigating-framesniffing-with-the-x-frame-options-header-1911411b-b51e-49fd-9441-e8301dcdcd79).

### Konfigurieren von HAProxy

Um HAProxy so zu konfigurieren, dass es den `X-Frame-Options`-Header sendet, fügen Sie dies Ihrer Frontend-, Listen- oder Backend-Konfiguration hinzu:

```plain
rspadd X-Frame-Options:\ SAMEORIGIN
```

Alternativ in neueren Versionen:

```plain
http-response set-header X-Frame-Options SAMEORIGIN
```

### Konfigurieren von Express

Um `X-Frame-Options` mit [Helmet](https://helmetjs.github.io/) auf `SAMEORIGIN` zu setzen, fügen Sie folgendes zur Konfiguration Ihres Servers hinzu:

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
- [ClickJacking-Abwehrmaßnahmen - IEBlog](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Bekämpfung von ClickJacking mit X-Frame-Options - IEInternals](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
