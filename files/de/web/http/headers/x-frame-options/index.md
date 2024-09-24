---
title: X-Frame-Options
slug: Web/HTTP/Headers/X-Frame-Options
l10n:
  sourceCommit: 8cc49c5d27c6a29ccb6ea295a33693650656fb01
---

{{HTTPSidebar}}

> [!WARNING]
> Anstelle dieses Headers verwenden Sie die {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}-Direktive in einem {{HTTPHeader("Content-Security-Policy")}}-Header.

Der **`X-Frame-Options`** [HTTP](/de/docs/Web/HTTP)-Antwortheader kann verwendet werden, um anzugeben, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf. Seiten können dies nutzen, um [Clickjacking](/de/docs/Web/Security/Types_of_attacks#click-jacking)-Angriffe zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht in andere Seiten eingebettet werden.

Die zusätzliche Sicherheit wird nur bereitgestellt, wenn der Benutzer, der auf das Dokument zugreift, einen Browser verwendet, der `X-Frame-Options` unterstützt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
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

Wenn Sie `DENY` angeben, schlägt der Versuch des Browsers fehl, die Seite in einem Frame zu laden, unabhängig davon, ob sie von anderen Seiten geladen wird oder nicht. Auf der anderen Seite, wenn Sie `SAMEORIGIN` angeben, können Sie die Seite immer noch in einem Frame verwenden, solange die Seite, die sie in einem Frame einbindet, dieselbe ist wie diejenige, die die Seite bereitstellt.

- `DENY`
  - : Die Seite kann in keinem Frame angezeigt werden, unabhängig von der versuchenden Seite.
- `SAMEORIGIN`
  - : Die Seite kann nur angezeigt werden, wenn alle übergeordneten Frames denselben Ursprung wie die Seite selbst haben.
- `ALLOW-FROM origin` {{deprecated_inline}}
  - : Dies ist eine veraltete Direktive. Moderne Browser, die Antwort-Header mit dieser Direktive antreffen, werden den Header vollständig ignorieren. Der {{HTTPHeader("Content-Security-Policy")}} HTTP-Header hat eine {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}-Direktive, die Sie stattdessen verwenden sollten.

## Beispiele

> [!WARNING]
> Das Setzen von `X-Frame-Options` innerhalb des {{HTMLElement("meta")}}-Elements (z.B. `<meta http-equiv="X-Frame-Options" content="deny">`) hat keine Wirkung. `X-Frame-Options` wird nur über HTTP-Header durchgesetzt, wie in den folgenden Beispielen gezeigt.

### Konfiguration von Apache

Um Apache so zu konfigurieren, dass der `X-Frame-Options`-Header für alle Seiten gesendet wird, fügen Sie dies zu Ihrer Site-Konfiguration hinzu:

```apacheconf
Header always set X-Frame-Options "SAMEORIGIN"
```

Um Apache so zu konfigurieren, dass `X-Frame-Options` auf `DENY` gesetzt wird, fügen Sie dies zu Ihrer Site-Konfiguration hinzu:

```apacheconf
Header set X-Frame-Options "DENY"
```

### Konfiguration von Nginx

Um Nginx so zu konfigurieren, dass der `X-Frame-Options`-Header gesendet wird, fügen Sie dies entweder zu Ihrer http-, server- oder location-Konfiguration hinzu:

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

Sie können den `X-Frame-Options`-Header auf `DENY` setzen, indem Sie folgendes verwenden:

```nginx
add_header X-Frame-Options DENY always;
```

### Konfiguration von IIS

Um IIS zu konfigurieren, den `X-Frame-Options`-Header zu senden, fügen Sie dies zu Ihrer `Web.config`-Datei der Site hinzu:

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

Für weitere Informationen, siehe den [Microsoft Supportartikel zur Konfiguration dieser Einstellung mittels der IIS-Manager-Oberfläche](https://support.microsoft.com/en-US/office/mitigating-framesniffing-with-the-x-frame-options-header-1911411b-b51e-49fd-9441-e8301dcdcd79).

### Konfiguration von HAProxy

Um HAProxy so zu konfigurieren, dass der `X-Frame-Options`-Header gesendet wird, fügen Sie dies zu Ihrer front-end-, listen- oder backend-Konfiguration hinzu:

```plain
rspadd X-Frame-Options:\ SAMEORIGIN
```

Alternativ, in neueren Versionen:

```plain
http-response set-header X-Frame-Options SAMEORIGIN
```

### Konfiguration von Express

Um `X-Frame-Options` auf `SAMEORIGIN` zu setzen, verwenden Sie [Helmet](https://helmetjs.github.io/) und fügen Sie folgendes zu Ihrer Server-Konfiguration hinzu:

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

- {{HTTPHeader("Content-Security-Policy")}}-Direktive {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}
- [ClickJacking-Abwehr - IEBlog](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Bekämpfung von ClickJacking mit X-Frame-Options - IEInternals](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
