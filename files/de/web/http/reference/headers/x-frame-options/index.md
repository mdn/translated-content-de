---
title: X-Frame-Options header
short-title: X-Frame-Options
slug: Web/HTTP/Reference/Headers/X-Frame-Options
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

> [!NOTE]
> Für umfassendere Optionen als die in diesem Header angebotenen, siehe die {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}-Direktive in einem {{HTTPHeader("Content-Security-Policy")}}-Header.

Der HTTP **`X-Frame-Options`** {{Glossary("response_header", "Response-Header")}} kann verwendet werden, um anzugeben, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf. Websites können dies nutzen, um [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht in andere Seiten eingebettet werden.

Die zusätzliche Sicherheit wird nur bereitgestellt, wenn der Benutzer, der das Dokument aufruft, einen Browser verwendet, der `X-Frame-Options` unterstützt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
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
  - : Die Seite kann in keinem Frame angezeigt werden, unabhängig von der Website, die versucht, dies zu tun. Sowohl der Versuch des Browsers, die Seite in einem Frame zu laden, wird fehlschlagen, wenn er von anderen Seiten geladen wird, als auch der Versuch, dies von derselben Seite aus zu tun, wird scheitern.
- `SAMEORIGIN`
  - : Die Seite kann nur angezeigt werden, wenn alle übergeordneten Frames vom gleichen Ursprung wie die Seite selbst stammen. Sie können die Seite weiterhin in einem Frame verwenden, solange die Seite, die sie in einem Frame einschließt, dieselbe ist wie die, die die Seite bereitstellt.
- `ALLOW-FROM origin` {{deprecated_inline}}
  - : Dies ist eine veraltete Direktive. Moderne Browser, die Antwort-Header mit dieser Direktive erkennen, werden den Header vollständig ignorieren. Der {{HTTPHeader("Content-Security-Policy")}} HTTP-Header verfügt über eine {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}-Direktive, die Sie stattdessen verwenden sollten.

## Beispiele

> [!WARNING]
> Das Festlegen von `X-Frame-Options` im {{HTMLElement("meta")}}-Element (z. B. `<meta http-equiv="X-Frame-Options" content="deny">`) hat keine Wirkung. `X-Frame-Options` wird nur über HTTP-Header durchgesetzt, wie in den unten stehenden Beispielen gezeigt.

### Konfiguration von Apache

Um Apache so zu konfigurieren, dass er den `X-Frame-Options`-Header für alle Seiten sendet, fügen Sie dies zur Konfiguration Ihrer Website hinzu:

```apacheconf
Header always set X-Frame-Options "SAMEORIGIN"
```

Um Apache so zu konfigurieren, dass `X-Frame-Options` auf `DENY` gesetzt wird, fügen Sie dies zur Konfiguration Ihrer Website hinzu:

```apacheconf
Header set X-Frame-Options "DENY"
```

### Konfiguration von Nginx

Um Nginx so zu konfigurieren, dass er den `X-Frame-Options`-Header sendet, fügen Sie dies entweder Ihrer http-, server- oder location-Konfiguration hinzu:

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

Sie können den `X-Frame-Options`-Header mit dem Wert `DENY` setzen:

```nginx
add_header X-Frame-Options DENY always;
```

### Konfiguration von IIS

Um IIS so zu konfigurieren, dass er den `X-Frame-Options`-Header sendet, fügen Sie dies zur `Web.config`-Datei Ihrer Website hinzu:

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

Weitere Informationen finden Sie im [Microsoft-Supportartikel zur Konfiguration dieser Einstellung über die IIS-Manager-Oberfläche](https://support.microsoft.com/en-US/office/mitigating-framesniffing-with-the-x-frame-options-header-1911411b-b51e-49fd-9441-e8301dcdcd79).

### Konfiguration von HAProxy

Um HAProxy so zu konfigurieren, dass er den `X-Frame-Options`-Header sendet, fügen Sie dies Ihrer frontend-, listen- oder backend-Konfiguration hinzu:

```plain
rspadd X-Frame-Options:\ SAMEORIGIN
```

Alternativ in neueren Versionen:

```plain
http-response set-header X-Frame-Options SAMEORIGIN
```

### Konfiguration von Express

Um `X-Frame-Options` mit dem Wert `SAMEORIGIN` mithilfe von [Helmet](https://helmetjs.github.io/) zu setzen, fügen Sie Folgendes zur Serverkonfiguration hinzu:

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
