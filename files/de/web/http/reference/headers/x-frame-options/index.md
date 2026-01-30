---
title: X-Frame-Options header
short-title: X-Frame-Options
slug: Web/HTTP/Reference/Headers/X-Frame-Options
l10n:
  sourceCommit: d1ce18e6f04a0015c00f8a4d6dcaa954447bc882
---

> [!NOTE]
> Für umfassendere Optionen als die durch diesen Header angebotenen, siehe die {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Direktive in einem {{HTTPHeader("Content-Security-Policy")}} Header.

Der HTTP **`X-Frame-Options`** {{Glossary("response_header", "Antwort-Header")}} kann verwendet werden um anzuzeigen, ob ein Browser das Dokument in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf. Websites können dies nutzen, um [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Angriffe und einige [Cross-Site-Leaks](/de/docs/Web/Security/Attacks/XS-Leaks) zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht in andere Sites eingebettet werden.

Wird dieser Header nicht gesendet und hat die Website keine anderen Mechanismen zur Einschränkung des Einbettens implementiert (wie die {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} CSP-Direktive), wird der Browser anderen Sites erlauben, dieses Dokument einzubetten.

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
  - : Das Dokument kann in keinem Frame geladen werden, unabhängig von der Herkunft (sowohl das Einbetten aus gleicher als auch aus fremder Herkunft wird blockiert).
- `SAMEORIGIN`
  - : Das Dokument kann nur eingebettet werden, wenn alle Vorfahren-Frames die gleiche {{Glossary("origin", "Herkunft")}} wie die Seite selbst haben.
- `ALLOW-FROM origin` {{deprecated_inline}}
  - : Dies ist eine veraltete Direktive. Moderne Browser, die Antwort-Header mit dieser Direktive vorfinden, werden den Header vollständig ignorieren. Der {{HTTPHeader("Content-Security-Policy")}} HTTP-Header hat eine {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Direktive, die stattdessen verwendet werden sollte.

## Beispiele

> [!WARNING]
> Das Setzen von `X-Frame-Options` innerhalb des {{HTMLElement("meta")}} Elements (z.B. `<meta http-equiv="X-Frame-Options" content="deny">`) hat keine Wirkung. `X-Frame-Options` wird nur über HTTP-Header durchgesetzt, wie in den untenstehenden Beispielen angezeigt.

### Apache konfigurieren

Um Apache so zu konfigurieren, dass es den `X-Frame-Options` Header für alle Seiten sendet, fügen Sie dies zur Konfiguration Ihrer Website hinzu:

```apacheconf
Header always set X-Frame-Options "SAMEORIGIN"
```

Um Apache so zu konfigurieren, dass `X-Frame-Options` auf `DENY` gesetzt wird, fügen Sie dies zur Konfiguration Ihrer Website hinzu:

```apacheconf
Header set X-Frame-Options "DENY"
```

### Nginx konfigurieren

Um Nginx so zu konfigurieren, dass der `X-Frame-Options` Header gesendet wird, fügen Sie dies entweder der http-, server-, oder location-Konfiguration hinzu:

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

Sie können den `X-Frame-Options` Header auf `DENY` setzen, indem Sie:

```nginx
add_header X-Frame-Options DENY always;
```

### IIS konfigurieren

Um IIS so zu konfigurieren, dass der `X-Frame-Options` Header gesendet wird, fügen Sie dies zu Ihrer `Web.config` Datei hinzu:

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

Für weitere Informationen, siehe den [Microsoft Support-Artikel zur Einstellung dieser Konfiguration über die IIS-Manager Benutzeroberfläche](https://support.microsoft.com/en-US/office/mitigating-framesniffing-with-the-x-frame-options-header-1911411b-b51e-49fd-9441-e8301dcdcd79).

### HAProxy konfigurieren

Um HAProxy so zu konfigurieren, dass der `X-Frame-Options` Header gesendet wird, fügen Sie dies Ihrer Frontend-, Listen- oder Backend-Konfiguration hinzu:

```plain
rspadd X-Frame-Options:\ SAMEORIGIN
```

Alternativ, in neueren Versionen:

```plain
http-response set-header X-Frame-Options SAMEORIGIN
```

### Express konfigurieren

Um `X-Frame-Options` auf `SAMEORIGIN` mithilfe von [Helmet](https://helmetjs.github.io/) zu setzen, fügen Sie Folgendes zu Ihrer Server-Konfiguration hinzu:

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
- [ClickJacking Abwehrmaßnahmen - IEBlog](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [ClickJacking mit X-Frame-Options bekämpfen - IEInternals](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
