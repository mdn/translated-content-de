---
title: X-Frame-Options header
short-title: X-Frame-Options
slug: Web/HTTP/Reference/Headers/X-Frame-Options
l10n:
  sourceCommit: 8a74d8feac267c1ddc37a4a8bc61e9aa8db75b12
---

> [!NOTE]
> Für umfassendere Optionen als die, die dieser Header bietet, schauen Sie sich die {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Direktive im {{HTTPHeader("Content-Security-Policy")}} Header an.

Der HTTP **`X-Frame-Options`** {{Glossary("response_header", "Antwort-Header")}} kann verwendet werden, um anzugeben, ob ein Browser das Dokument in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf. Websites können dies verwenden, um [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe und einige [Cross-Site Leaks](/de/docs/Web/Security/Attacks/XS-Leaks) zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht in andere Websites eingebettet werden.

Wenn dieser Header nicht gesendet wird und die Website keine anderen Mechanismen implementiert hat, um das Einbetten einzuschränken (wie die {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} CSP-Direktive), dann ermöglicht der Browser anderen Websites, dieses Dokument einzubetten.

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
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
```

### Direktiven

- `DENY`
  - : Das Dokument kann in keinem Frame geladen werden, unabhängig von der Herkunft (sowohl gleichartige als auch übergreifende Einbettung wird blockiert).
- `SAMEORIGIN`
  - : Das Dokument kann nur eingebettet werden, wenn alle übergeordneten Frames denselben {{Glossary("origin", "Ursprung")}} wie die Seite selbst haben.
- `ALLOW-FROM origin` {{deprecated_inline}}
  - : Dies ist eine veraltete Direktive. Moderne Browser, die Antwort-Header mit dieser Direktive finden, ignorieren den Header komplett. Der {{HTTPHeader("Content-Security-Policy")}} HTTP-Header hat eine {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Direktive, die stattdessen verwendet werden sollte.

## Beispiele

> [!WARNING]
> Das Setzen von `X-Frame-Options` innerhalb des {{HTMLElement("meta")}} Elements (z.B. `<meta http-equiv="X-Frame-Options" content="deny">`) hat keine Wirkung. `X-Frame-Options` wird nur über HTTP-Header durchgesetzt, wie in den unten stehenden Beispielen gezeigt.

### Konfiguration von Apache

Um Apache zu konfigurieren, den `X-Frame-Options` Header für alle Seiten zu senden, fügen Sie dies zu Ihrer Website-Konfiguration hinzu:

```apacheconf
Header always set X-Frame-Options "SAMEORIGIN"
```

Um Apache zu konfigurieren, `X-Frame-Options` auf `DENY` zu setzen, fügen Sie dies zu Ihrer Website-Konfiguration hinzu:

```apacheconf
Header set X-Frame-Options "DENY"
```

### Konfiguration von Nginx

Um Nginx zu konfigurieren, den `X-Frame-Options` Header zu senden, fügen Sie dies entweder zu Ihrer http-, Server- oder Standortkonfiguration hinzu:

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

Sie können den `X-Frame-Options` Header auf `DENY` setzen mit:

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

Für weitere Informationen sehen Sie den [Microsoft Supportartikel über das Setzen dieser Konfiguration mit der IIS Manager Benutzeroberfläche](https://support.microsoft.com/en-US/security/mitigating-framesniffing-with-the-x-frame-options-header).

### Konfiguration von HAProxy

Um HAProxy zu konfigurieren, den `X-Frame-Options` Header zu senden, fügen Sie dies zu Ihrer Frontend-, Listen- oder Backend-Konfiguration hinzu:

```plain
rspadd X-Frame-Options:\ SAMEORIGIN
```

Alternativ in neueren Versionen:

```plain
http-response set-header X-Frame-Options SAMEORIGIN
```

### Konfiguration von Express

Um `X-Frame-Options` auf `SAMEORIGIN` mit [Helmet](https://helmetjs.github.io/) zu setzen, fügen Sie Folgendes zu Ihrer Serverkonfiguration hinzu:

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

- {{HTTPHeader("Content-Security-Policy")}} Direktive {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}
- [ClickJacking Verteidigungen - IEBlog](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Bekämpfung von ClickJacking mit X-Frame-Options - IEInternals](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
