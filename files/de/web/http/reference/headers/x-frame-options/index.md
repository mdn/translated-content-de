---
title: X-Frame-Options header
short-title: X-Frame-Options
slug: Web/HTTP/Reference/Headers/X-Frame-Options
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

> [!NOTE]
> Umfangreichere Optionen als die von diesem Header angebotenen finden Sie in der Direktive {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} eines {{HTTPHeader("Content-Security-Policy")}}-Headers.

Der HTTP-**`X-Frame-Options`**-{{Glossary("response_header", "Antwort-Header")}} kann verwendet werden, um anzugeben, ob ein Browser das Dokument in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf. Websites können dies verwenden, um [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe und einige [Cross-Site-Leaks](/de/docs/Web/Security/Attacks/XS-Leaks) zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht in andere Websites eingebettet werden.

Wenn dieser Header nicht gesendet wird und die Website keine anderen Mechanismen zur Einschränkung der Einbettung implementiert hat (wie etwa die CSP-Direktive {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}), erlaubt der Browser anderen Websites, dieses Dokument einzubetten.

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
  - : Das Dokument kann unabhängig von der Origin in keinem Frame geladen werden (sowohl Same-Origin- als auch Cross-Origin-Einbettungen werden blockiert).
- `SAMEORIGIN`
  - : Das Dokument kann nur eingebettet werden, wenn alle übergeordneten Frames dieselbe {{Glossary("origin", "Origin")}} wie die Seite selbst haben.
- `ALLOW-FROM origin` {{deprecated_inline}}
  - : Dies ist eine veraltete Direktive. Moderne Browser, die Antwort-Header mit dieser Direktive vorfinden, ignorieren den Header vollständig. Der HTTP-Header {{HTTPHeader("Content-Security-Policy")}} verfügt über eine Direktive {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}, die Sie stattdessen verwenden sollten.

## Beispiele

> [!WARNING]
> Das Setzen von `X-Frame-Options` innerhalb des {{HTMLElement("meta")}}-Elements (z. B. `<meta http-equiv="X-Frame-Options" content="deny">`) hat keine Wirkung. `X-Frame-Options` wird nur über HTTP-Header durchgesetzt, wie in den folgenden Beispielen gezeigt.

### Apache konfigurieren

Um Apache so zu konfigurieren, dass der `X-Frame-Options`-Header für alle Seiten gesendet wird, fügen Sie Folgendes zur Konfiguration Ihrer Website hinzu:

```apacheconf
Header always set X-Frame-Options "SAMEORIGIN"
```

Um Apache so zu konfigurieren, dass `X-Frame-Options` auf `DENY` gesetzt wird, fügen Sie Folgendes zur Konfiguration Ihrer Website hinzu:

```apacheconf
Header set X-Frame-Options "DENY"
```

### Nginx konfigurieren

Um Nginx so zu konfigurieren, dass der `X-Frame-Options`-Header gesendet wird, fügen Sie Folgendes entweder zu Ihrer http-, server- oder location-Konfiguration hinzu:

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

Sie können den `X-Frame-Options`-Header mit Folgendem auf `DENY` setzen:

```nginx
add_header X-Frame-Options DENY always;
```

### IIS konfigurieren

Um IIS so zu konfigurieren, dass der `X-Frame-Options`-Header gesendet wird, fügen Sie Folgendes zur Datei `Web.config` Ihrer Website hinzu:

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

Weitere Informationen finden Sie im [Microsoft-Supportartikel zum Festlegen dieser Konfiguration über die Benutzeroberfläche des IIS-Managers](https://support.microsoft.com/en-us/security/mitigating-framesniffing-with-the-x-frame-options-header).

### HAProxy konfigurieren

Um HAProxy so zu konfigurieren, dass der `X-Frame-Options`-Header gesendet wird, fügen Sie Folgendes zu Ihrer Frontend-, Listen- oder Backend-Konfiguration hinzu:

```plain
rspadd X-Frame-Options:\ SAMEORIGIN
```

Alternativ dazu in neueren Versionen:

```plain
http-response set-header X-Frame-Options SAMEORIGIN
```

### Express konfigurieren

Um `X-Frame-Options` mit [Helmet](https://helmet.js.org/) auf `SAMEORIGIN` zu setzen, fügen Sie Folgendes zu Ihrer Serverkonfiguration hinzu:

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
- [ClickJacking Defenses - IEBlog](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Combating ClickJacking with X-Frame-Options - IEInternals](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
