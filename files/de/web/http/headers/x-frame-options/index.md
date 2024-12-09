---
title: X-Frame-Options
slug: Web/HTTP/Headers/X-Frame-Options
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}{{deprecated_header}}

> [!WARNING]
> Anstelle dieses Headers verwenden Sie die {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Anweisung in einem {{HTTPHeader("Content-Security-Policy")}} Header.

Der HTTP **`X-Frame-Options`** {{Glossary("response_header", "Antwort-Header")}} kann verwendet werden, um anzugeben, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf. Websites können dies nutzen, um [Clickjacking](/de/docs/Web/Security/Types_of_attacks#click-jacking)-Angriffe zu vermeiden, indem sie sicherstellen, dass ihr Inhalt nicht in andere Websites eingebettet wird.

Die zusätzliche Sicherheit wird nur geboten, wenn der Benutzer, der auf das Dokument zugreift, einen Browser verwendet, der `X-Frame-Options` unterstützt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Es gibt zwei mögliche Anweisungen für `X-Frame-Options`:

```http
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
```

### Anweisungen

Wenn Sie `DENY` angeben, wird nicht nur der Versuch, die Seite in einem Frame zu laden, scheitern, wenn sie von anderen Websites geladen wird, sondern auch Versuche, dies von derselben Website aus zu tun, werden fehlschlagen. Wenn Sie hingegen `SAMEORIGIN` angeben, können Sie die Seite in einem Frame verwenden, solange die Seite, die sie in einem Frame einbettet, dieselbe ist wie die, die die Seite selbst bereitstellt.

- `DENY`
  - : Die Seite kann in keinem Frame angezeigt werden, unabhängig von der Website, die versucht, dies zu tun.
- `SAMEORIGIN` {{deprecated_inline}}
  - : Die Seite kann nur angezeigt werden, wenn alle Vorfahren-Frames denselben Ursprung haben wie die Seite selbst.
- `ALLOW-FROM origin` {{deprecated_inline}}
  - : Dies ist eine veraltete Anweisung. Moderne Browser, die Antwort-Header mit dieser Anweisung vorfinden, ignorieren den Header vollständig. Der {{HTTPHeader("Content-Security-Policy")}} HTTP-Header enthält eine {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Anweisung, die Sie stattdessen verwenden sollten.

## Beispiele

> [!WARNING]
> Das Setzen von `X-Frame-Options` innerhalb des {{HTMLElement("meta")}} Elements (z. B. `<meta http-equiv="X-Frame-Options" content="deny">`) hat keine Wirkung. `X-Frame-Options` wird nur über HTTP-Header durchgesetzt, wie in den folgenden Beispielen gezeigt.

### Konfiguration von Apache

Um Apache so zu konfigurieren, dass es den `X-Frame-Options` Header für alle Seiten sendet, fügen Sie dies zur Konfiguration Ihrer Website hinzu:

```apacheconf
Header always set X-Frame-Options "SAMEORIGIN"
```

Um Apache so zu konfigurieren, dass `X-Frame-Options` auf `DENY` gesetzt wird, fügen Sie dies zur Konfiguration Ihrer Website hinzu:

```apacheconf
Header set X-Frame-Options "DENY"
```

### Konfiguration von Nginx

Um Nginx so zu konfigurieren, dass es den `X-Frame-Options` Header sendet, fügen Sie dies entweder Ihrer http-, Server- oder Standortkonfiguration hinzu:

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

Sie können den `X-Frame-Options` Header auf `DENY` setzen, indem Sie:

```nginx
add_header X-Frame-Options DENY always;
```

### Konfiguration von IIS

Um IIS so zu konfigurieren, dass es den `X-Frame-Options` Header sendet, fügen Sie dies zur `Web.config` Datei Ihrer Website hinzu:

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

Für weitere Informationen lesen Sie den [Microsoft Support Artikel zur Konfiguration mittels der Benutzeroberfläche des IIS Managers](https://support.microsoft.com/en-US/office/mitigating-framesniffing-with-the-x-frame-options-header-1911411b-b51e-49fd-9441-e8301dcdcd79).

### Konfiguration von HAProxy

Um HAProxy so zu konfigurieren, dass es den `X-Frame-Options` Header sendet, fügen Sie dies Ihrer Frontend-, Listen-, oder Back-End-Konfiguration hinzu:

```plain
rspadd X-Frame-Options:\ SAMEORIGIN
```

Alternativ in neueren Versionen:

```plain
http-response set-header X-Frame-Options SAMEORIGIN
```

### Konfiguration von Express

Um `X-Frame-Options` auf `SAMEORIGIN` zu setzen, verwenden Sie [Helmet](https://helmetjs.github.io/) und fügen Sie folgendes zu Ihrer Serverkonfiguration hinzu:

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

- {{HTTPHeader("Content-Security-Policy")}} Anweisung {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}
- [ClickJacking-Abwehrmaßnahmen - IEBlog](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Bekämpfung von ClickJacking mit X-Frame-Options - IEInternals](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
