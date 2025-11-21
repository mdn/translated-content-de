---
title: X-Frame-Options header
short-title: X-Frame-Options
slug: Web/HTTP/Reference/Headers/X-Frame-Options
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

> [!NOTE]
> Für umfassendere Optionen als die, die durch diesen Header angeboten werden, siehe die {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Direktive in einem {{HTTPHeader("Content-Security-Policy")}} Header.

Der HTTP **`X-Frame-Options`** {{Glossary("response_header", "Antwort-Header")}} kann verwendet werden, um anzugeben, ob ein Browser erlaubt werden soll, eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} darzustellen. Websites können dies nutzen, um [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Angriffe zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht in andere Websites eingebettet werden.

Die zusätzliche Sicherheit wird nur bereitgestellt, wenn der Benutzer, der auf das Dokument zugreift, einen Browser verwendet, der `X-Frame-Options` unterstützt.

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
  - : Die Seite kann in keinem Frame angezeigt werden, unabhängig von der Website, die versucht, dies zu tun. Nicht nur wird der Versuch des Browsers, die Seite in einem Frame zu laden, fehlschlagen, wenn sie von anderen Websites geladen wird; auch Versuche, dies von derselben Website zu tun, werden fehlschlagen.
- `SAMEORIGIN`
  - : Die Seite kann nur angezeigt werden, wenn alle übergeordneten Frames denselben {{Glossary("origin", "Ursprung")}} wie die Seite selbst haben. Sie können die Seite weiterhin in einem Frame verwenden, solange die Seite, die sie in einem Frame einbettet, dieselbe ist, die die Seite liefert.
- `ALLOW-FROM origin` {{deprecated_inline}}
  - : Dies ist eine veraltete Direktive. Moderne Browser, die Antwort-Header mit dieser Direktive vorfinden, werden den Header vollständig ignorieren. Der {{HTTPHeader("Content-Security-Policy")}} HTTP-Header hat eine {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Direktive, die Sie stattdessen verwenden sollten.

## Beispiele

> [!WARNING]
> Das Setzen von `X-Frame-Options` innerhalb des {{HTMLElement("meta")}} Elements (z.B. `<meta http-equiv="X-Frame-Options" content="deny">`) hat keine Wirkung. `X-Frame-Options` wird nur über HTTP-Header erzwungen, wie in den folgenden Beispielen gezeigt.

### Apache konfigurieren

Um Apache zu konfigurieren, den `X-Frame-Options` Header für alle Seiten zu senden, fügen Sie dies zur Konfiguration Ihrer Website hinzu:

```apacheconf
Header always set X-Frame-Options "SAMEORIGIN"
```

Um Apache zu konfigurieren, `X-Frame-Options` auf `DENY` zu setzen, fügen Sie dies zur Konfiguration Ihrer Website hinzu:

```apacheconf
Header set X-Frame-Options "DENY"
```

### Nginx konfigurieren

Um Nginx zu konfigurieren, den `X-Frame-Options` Header zu senden, fügen Sie dies entweder Ihrer http-, server- oder location-Konfiguration hinzu:

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

Sie können den `X-Frame-Options` Header auf `DENY` setzen mit:

```nginx
add_header X-Frame-Options DENY always;
```

### IIS konfigurieren

Um IIS zu konfigurieren, den `X-Frame-Options` Header zu senden, fügen Sie dies der `Web.config` Datei Ihrer Website hinzu:

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

Für weitere Informationen siehe den [Microsoft Support-Artikel über die Konfiguration mit der IIS Manager Benutzeroberfläche](https://support.microsoft.com/de-DE/office/mitigating-framesniffing-with-the-x-frame-options-header-1911411b-b51e-49fd-9441-e8301dcdcd79).

### HAProxy konfigurieren

Um HAProxy zu konfigurieren, den `X-Frame-Options` Header zu senden, fügen Sie dies Ihrer Frontend-, Listen- oder Backend-Konfiguration hinzu:

```plain
rspadd X-Frame-Options:\ SAMEORIGIN
```

Alternativ in neueren Versionen:

```plain
http-response set-header X-Frame-Options SAMEORIGIN
```

### Express konfigurieren

Um `X-Frame-Options` auf `SAMEORIGIN` mit [Helmet](https://helmetjs.github.io/) zu setzen, fügen Sie Folgendes zur Serverkonfiguration hinzu:

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
- [ClickJacking Defenses - IEBlog](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Combating ClickJacking with X-Frame-Options - IEInternals](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
