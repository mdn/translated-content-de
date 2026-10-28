---
title: X-Frame-Options header
short-title: X-Frame-Options
slug: Web/HTTP/Reference/Headers/X-Frame-Options
l10n:
  sourceCommit: a4ff34eef85ccb654c5c3af7974caba396e8adcf
---

> [!NOTE]
> Umfassendere Möglichkeiten als dieser Header bietet die Direktive {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} in einem {{HTTPHeader("Content-Security-Policy")}}-Header.

Der HTTP-{{Glossary("response_header", "Response-Header")}} **`X-Frame-Options`** gibt an, ob ein Browser das Dokument in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} darstellen darf. Websites können damit [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe und bestimmte [Cross-Site-Leaks](/de/docs/Web/Security/Attacks/XS-Leaks) verhindern, indem sie sicherstellen, dass ihre Inhalte nicht in andere Websites eingebettet werden.

Wenn dieser Header nicht gesendet wird und die Website keine anderen Mechanismen zur Einschränkung der Einbettung implementiert hat (etwa die CSP-Direktive {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}), erlaubt der Browser anderen Websites, das Dokument einzubetten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
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
  - : Das Dokument kann unabhängig vom Ursprung in keinem Frame geladen werden. Sowohl die Einbettung mit gleichem als auch mit anderem Ursprung wird blockiert.
- `SAMEORIGIN`
  - : Das Dokument kann nur eingebettet werden, wenn alle übergeordneten Frames denselben {{Glossary("origin", "Ursprung")}} wie die Seite selbst haben.
- `ALLOW-FROM origin` {{deprecated_inline}}
  - : Diese Direktive ist veraltet. Moderne Browser ignorieren Response-Header mit dieser Direktive vollständig. Verwenden Sie stattdessen die Direktive {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} des HTTP-Headers {{HTTPHeader("Content-Security-Policy")}}.

## Beispiele

> [!WARNING]
> Das Festlegen von `X-Frame-Options` innerhalb des Elements {{HTMLElement("meta")}} (z. B. `<meta http-equiv="X-Frame-Options" content="deny">`) hat keine Wirkung. `X-Frame-Options` wird nur über HTTP-Header durchgesetzt, wie die folgenden Beispiele zeigen.

### Apache konfigurieren

Damit Apache den Header `X-Frame-Options` für alle Seiten sendet, fügen Sie Folgendes zur Konfiguration Ihrer Website hinzu:

```apacheconf
Header always set X-Frame-Options "SAMEORIGIN"
```

Damit Apache `X-Frame-Options` auf `DENY` setzt, fügen Sie Folgendes zur Konfiguration Ihrer Website hinzu:

```apacheconf
Header set X-Frame-Options "DENY"
```

### Nginx konfigurieren

Damit Nginx den Header `X-Frame-Options` sendet, fügen Sie Folgendes zu Ihrer http-, server- oder location-Konfiguration hinzu:

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

Sie können den Header `X-Frame-Options` wie folgt auf `DENY` setzen:

```nginx
add_header X-Frame-Options DENY always;
```

### IIS konfigurieren

Damit IIS den Header `X-Frame-Options` sendet, fügen Sie Folgendes zur Datei `Web.config` Ihrer Website hinzu:

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

Weitere Informationen finden Sie im [Microsoft-Supportartikel zum Festlegen dieser Konfiguration über die Benutzeroberfläche des IIS-Managers](https://support.microsoft.com/en-us/edge/security/mitigating-framesniffing-with-the-x-frame-options-header).

### HAProxy konfigurieren

Damit HAProxy den Header `X-Frame-Options` sendet, fügen Sie Folgendes zu Ihrer Frontend-, Listen- oder Backend-Konfiguration hinzu:

```plain
rspadd X-Frame-Options:\ SAMEORIGIN
```

In neueren Versionen können Sie alternativ Folgendes verwenden:

```plain
http-response set-header X-Frame-Options SAMEORIGIN
```

### Express konfigurieren

Um `X-Frame-Options` mithilfe von [Helmet](https://helmet.js.org/) auf `SAMEORIGIN` zu setzen, fügen Sie Folgendes zu Ihrer Serverkonfiguration hinzu:

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

- Die Direktive {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} von {{HTTPHeader("Content-Security-Policy")}}
- [Schutzmaßnahmen gegen Clickjacking – IEBlog](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Clickjacking mit X-Frame-Options bekämpfen – IEInternals](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
