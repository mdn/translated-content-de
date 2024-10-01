---
title: X-Frame-Options
slug: Web/HTTP/Headers/X-Frame-Options
l10n:
  sourceCommit: 2b44e3e665ceb5f4336089695aa5f617b1baf33c
---

{{HTTPSidebar}}{{deprecated_header}}

> [!WARNING]
> Anstelle dieses Headers verwenden Sie die {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Direktive in einem {{HTTPHeader("Content-Security-Policy")}} Header.

Der **`X-Frame-Options`** [HTTP](/de/docs/Web/HTTP) Antwort-Header kann verwendet werden, um anzuzeigen, ob ein Browser erlaubt sein soll, eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} darzustellen. Websites können dies nutzen, um [Click-Jacking](/de/docs/Web/Security/Types_of_attacks#click-jacking) Angriffe zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht in andere Sites eingebettet werden.

Die zusätzliche Sicherheit wird nur geboten, wenn der Benutzer, der das Dokument aufruft, einen Browser verwendet, der `X-Frame-Options` unterstützt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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

Wenn Sie `DENY` angeben, wird nicht nur der Versuch des Browsers, die Seite in einem Frame zu laden, fehlschlagen, wenn sie von anderen Seiten geladen wird. Versuche, dies von der gleichen Site aus zu tun, scheitern ebenfalls. Wenn Sie jedoch `SAMEORIGIN` angeben, können Sie die Seite weiterhin in einem Frame verwenden, solange die Site, die sie in einem Frame einbettet, die gleiche ist wie die, die die Seite liefert.

- `DENY`
  - : Die Seite kann in keinem Frame dargestellt werden, unabhängig von der Site, die versucht, dies zu tun.
- `SAMEORIGIN` {{deprecated_inline}}
  - : Die Seite kann nur angezeigt werden, wenn alle übergeordneten Frames denselben Ursprung haben wie die Seite selbst.
- `ALLOW-FROM origin` {{deprecated_inline}}
  - : Dies ist eine veraltete Direktive. Moderne Browser, die Antwort-Header mit dieser Direktive finden, ignorieren den Header vollständig. Der {{HTTPHeader("Content-Security-Policy")}} HTTP-Header hat eine {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Direktive, die Sie stattdessen verwenden sollten.

## Beispiele

> [!WARNING]
> Das Setzen von `X-Frame-Options` im {{HTMLElement("meta")}} Element (z.B. `<meta http-equiv="X-Frame-Options" content="deny">`) hat keine Wirkung. `X-Frame-Options` wird nur über HTTP-Header durchgesetzt, wie in den folgenden Beispielen gezeigt.

### Apache konfigurieren

Um Apache so zu konfigurieren, dass der `X-Frame-Options` Header für alle Seiten gesendet wird, fügen Sie dies zur Konfiguration Ihrer Site hinzu:

```apacheconf
Header always set X-Frame-Options "SAMEORIGIN"
```

Um Apache so einzustellen, dass `X-Frame-Options` auf `DENY` gesetzt wird, fügen Sie dies zur Konfiguration Ihrer Site hinzu:

```apacheconf
Header set X-Frame-Options "DENY"
```

### Nginx konfigurieren

Um Nginx so zu konfigurieren, dass der `X-Frame-Options` Header gesendet wird, fügen Sie dies Ihrer http-, server- oder location-Konfiguration hinzu:

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

Sie können den `X-Frame-Options` Header auf `DENY` setzen, indem Sie folgendes verwenden:

```nginx
add_header X-Frame-Options DENY always;
```

### IIS konfigurieren

Um IIS so zu konfigurieren, dass der `X-Frame-Options` Header gesendet wird, fügen Sie dies zur `Web.config` Datei Ihrer Site hinzu:

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

Für weitere Informationen, siehe den [Microsoft-Supportartikel zur Konfiguration mit der IIS-Manager-Benutzeroberfläche](https://support.microsoft.com/en-US/office/mitigating-framesniffing-with-the-x-frame-options-header-1911411b-b51e-49fd-9441-e8301dcdcd79).

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

Um `X-Frame-Options` auf `SAMEORIGIN` mit [Helmet](https://helmetjs.github.io/) zu setzen, fügen Sie das Folgende zur Serverkonfiguration hinzu:

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

- {{HTTPHeader("Content-Security-Policy")}} Direktive {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}
- [ClickJacking Verteidigungen - IEBlog](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Bekämpfung von ClickJacking mit X-Frame-Options - IEInternals](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
