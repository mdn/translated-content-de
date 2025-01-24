---
title: X-Frame-Options
slug: Web/HTTP/Headers/X-Frame-Options
l10n:
  sourceCommit: 783ca8234faec6d8cf0da09d438dc9bdd2b2747e
---

{{HTTPSidebar}}

> [!NOTE]
> Für umfassendere Optionen als die, die durch diesen Header angeboten werden, siehe die {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Direktive in einem {{HTTPHeader("Content-Security-Policy")}} Header.

Der HTTP **`X-Frame-Options`** {{Glossary("response_header", "Antwort-Header")}} kann verwendet werden, um anzugeben, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf. Websites können dies nutzen, um [Clickjacking](/de/docs/Web/Security/Types_of_attacks#clickjacking) Angriffe zu vermeiden, indem sie sicherstellen, dass ihre Inhalte nicht in andere Seiten eingebettet werden.

Die zusätzliche Sicherheit wird nur geboten, wenn der Nutzer, der auf das Dokument zugreift, einen Browser verwendet, der `X-Frame-Options` unterstützt.

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

Es gibt zwei mögliche Direktiven für `X-Frame-Options`:

```http
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
```

### Direktiven

Wenn Sie `DENY` angeben, wird nicht nur der Versuch des Browsers, die Seite in einem Frame zu laden, fehlschlagen, wenn sie von anderen Seiten geladen wird, sondern auch, wenn sie von derselben Seite geladen wird. Andererseits können Sie, wenn Sie `SAMEORIGIN` angeben, die Seite weiterhin in einem Frame verwenden, solange die Seite, die sie in einem Frame einfügt, dieselbe ist wie die, die die Seite bereitstellt.

- `DENY`
  - : Die Seite kann in keinem Frame angezeigt werden, unabhängig von der Seite, die den Versuch unternimmt.
- `SAMEORIGIN`
  - : Die Seite kann nur angezeigt werden, wenn alle Vorfahren-Frames dieselbe Herkunft wie die Seite selbst haben.
- `ALLOW-FROM origin` {{deprecated_inline}}
  - : Dies ist eine veraltete Direktive. Moderne Browser, die auf Antwort-Header mit dieser Direktive stoßen, werden den Header vollständig ignorieren. Der {{HTTPHeader("Content-Security-Policy")}} HTTP-Header hat eine {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} Direktive, die Sie stattdessen verwenden sollten.

## Beispiele

> [!WARNING]
> Das Setzen von `X-Frame-Options` innerhalb des {{HTMLElement("meta")}} Elements (z.B. `<meta http-equiv="X-Frame-Options" content="deny">`) hat keine Wirkung. `X-Frame-Options` wird nur über HTTP-Header durchgesetzt, wie in den folgenden Beispielen gezeigt.

### Konfigurieren von Apache

Um Apache zu konfigurieren, den `X-Frame-Options` Header für alle Seiten zu senden, fügen Sie dies in die Konfiguration Ihrer Website ein:

```apacheconf
Header always set X-Frame-Options "SAMEORIGIN"
```

Um Apache zu konfigurieren, `X-Frame-Options` auf `DENY` zu setzen, fügen Sie dies in die Konfiguration Ihrer Website ein:

```apacheconf
Header set X-Frame-Options "DENY"
```

### Konfigurieren von Nginx

Um Nginx zu konfigurieren, den `X-Frame-Options` Header zu senden, fügen Sie dies in die http-, server- oder location-Konfiguration ein:

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

Sie können den `X-Frame-Options` Header auf `DENY` setzen, indem Sie Folgendes verwenden:

```nginx
add_header X-Frame-Options DENY always;
```

### Konfigurieren von IIS

Um IIS zu konfigurieren, den `X-Frame-Options` Header zu senden, fügen Sie dies in die `Web.config` Datei Ihrer Website ein:

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

Weitere Informationen finden Sie im [Microsoft Support-Artikel zur Konfiguration dieser Einstellung mit der Benutzeroberfläche des IIS Managers](https://support.microsoft.com/en-US/office/mitigating-framesniffing-with-the-x-frame-options-header-1911411b-b51e-49fd-9441-e8301dcdcd79).

### Konfigurieren von HAProxy

Um HAProxy zu konfigurieren, den `X-Frame-Options` Header zu senden, fügen Sie dies in Ihre Frontend-, Listen- oder Backend-Konfiguration ein:

```plain
rspadd X-Frame-Options:\ SAMEORIGIN
```

Alternativ in neueren Versionen:

```plain
http-response set-header X-Frame-Options SAMEORIGIN
```

### Konfigurieren von Express

Um `X-Frame-Options` mit [Helmet](https://helmetjs.github.io/) auf `SAMEORIGIN` zu setzen, fügen Sie Folgendes in Ihre Serverkonfiguration ein:

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
- [ClickJacking Defenses - IEBlog](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Combating ClickJacking with X-Frame-Options - IEInternals](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
