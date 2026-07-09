---
title: X-Frame-Options header
short-title: X-Frame-Options
slug: Web/HTTP/Reference/Headers/X-Frame-Options
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

> [!NOTE]
> Für umfassendere Optionen als die, die von diesem Header angeboten werden, siehe die {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Direktive in einem {{HTTPHeader("Content-Security-Policy")}} Header.

Der HTTP **`X-Frame-Options`** {{Glossary("response_header", "Antwort-Header")}} kann verwendet werden, um anzugeben, ob ein Browser das Dokument in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf. Websites können dies nutzen, um [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Angriffe und einige [Cross-Site Leaks](/de/docs/Web/Security/Attacks/XS-Leaks) zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht in andere Seiten eingebettet werden.

Wenn dieser Header nicht gesendet wird und die Website keine anderen Mechanismen zur Einschränkung des Einbettens implementiert hat (wie die {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} CSP-Direktive), dann erlaubt der Browser anderen Seiten, dieses Dokument einzubetten.

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
  - : Das Dokument kann in keinem Rahmen geladen werden, unabhängig von der Herkunft (sowohl gleich- als auch herkunftsübergreifendes Einbetten wird blockiert).
- `SAMEORIGIN`
  - : Das Dokument kann nur eingebettet werden, wenn alle übergeordneten Rahmen dieselbe {{Glossary("origin", "Herkunft")}} wie die Seite selbst haben.
- `ALLOW-FROM origin` {{deprecated_inline}}
  - : Dies ist eine veraltete Direktive. Moderne Browser ignorieren Kopfzeilen mit dieser Direktive vollständig. Der {{HTTPHeader("Content-Security-Policy")}} HTTP-Header hat eine {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Direktive, die Sie stattdessen verwenden sollten.

## Beispiele

> [!WARNING]
> Das Setzen von `X-Frame-Options` innerhalb des {{HTMLElement("meta")}} Elements (z.B. `<meta http-equiv="X-Frame-Options" content="deny">`) hat keine Wirkung. `X-Frame-Options` wird nur über HTTP-Header durchgesetzt, wie in den Beispielen unten gezeigt.

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

Um Nginx so zu konfigurieren, dass der `X-Frame-Options`-Header gesendet wird, fügen Sie dies entweder zur http-, Server- oder Standortkonfiguration hinzu:

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

Sie können den `X-Frame-Options`-Header auf `DENY` setzen, indem Sie folgendes verwenden:

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

Für weitere Informationen siehe den [Microsoft Support-Artikel zur Konfiguration über die IIS Manager-Benutzeroberfläche](https://support.microsoft.com/en-US/security/mitigating-framesniffing-with-the-x-frame-options-header).

### Konfiguration von HAProxy

Um HAProxy so zu konfigurieren, dass der `X-Frame-Options`-Header gesendet wird, fügen Sie dies Ihrer Frontend-, Listen- oder Backend-Konfiguration hinzu:

```plain
rspadd X-Frame-Options:\ SAMEORIGIN
```

Alternativ in neueren Versionen:

```plain
http-response set-header X-Frame-Options SAMEORIGIN
```

### Konfiguration von Express

Um `X-Frame-Options` auf `SAMEORIGIN` zu setzen, verwenden Sie [Helmet](https://helmet.js.org/) und fügen folgendes zur Serverkonfiguration hinzu:

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
- [ClickJacking-Verteidigungen - IEBlog](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Bekämpfung von ClickJacking mit X-Frame-Options - IEInternals](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
