---
title: User-Agent
slug: Web/HTTP/Headers/User-Agent
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **User-Agent** ist ein {{Glossary("request header")}}, der eine charakteristische Zeichenkette darstellt. Diese ermöglicht es Servern und Netzwerk-Partnern, die Anwendung, das Betriebssystem, den Anbieter und/oder die Version des anfordernden {{Glossary("user agent")}} zu identifizieren.

> [!WARNING]
> Bitte lesen Sie [Browser-Erkennung mithilfe des User-Agent](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent), um zu verstehen, warum es in der Regel eine schlechte Idee ist, verschiedenen Browsern unterschiedliche Webseiten oder Dienste anzubieten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
User-Agent: <product> / <product-version> <comment>
```

Übliches Format für Webbrowser:

```http
User-Agent: Mozilla/5.0 (<system-information>) <platform> (<platform-details>) <extensions>
```

### Direktiven

- \<product>
  - : Ein Produktbezeichner — der Name oder der Entwicklungscode.
- \<product-version>
  - : Versionsnummer des Produkts.
- \<comment>
  - : Null oder mehr Kommentare, die weitere Details enthalten. Zum Beispiel Informationen zu Unterprodukten.

## Firefox UA-String

Weitere Informationen zu User-Agent-Strings auf Firefox- und Gecko-Basis finden Sie unter [Firefox Benutzeragenten-String-Referenz](/de/docs/Web/HTTP/Headers/User-Agent/Firefox). Der UA-String von Firefox besteht aus 4 Komponenten:

```plain
Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion
```

1. `Mozilla/5.0` ist das allgemeine Token, das besagt, dass der Browser mit Mozilla kompatibel ist. Aus historischen Gründen senden heutzutage fast alle Browser diesen.
2. **_platform_** beschreibt die native Plattform, auf der der Browser läuft (Windows, Mac, Linux, Android usw.) und ob es sich um ein Mobiltelefon handelt. {{Glossary("Firefox OS")}}-Telefone geben `Mobile` an — das Web ist die Plattform. Beachten Sie, dass **_platform_** aus mehreren mit "`;`" getrennten Tokens bestehen kann. Siehe unten für weitere Details und Beispiele.
3. **rv:_geckoversion_** zeigt die Veröffentlichungsnummer von Gecko an (z. B. "_17.0_"). In neueren Browsern ist **_geckoversion_** identisch mit **_firefoxversion_**.
4. **_Gecko/geckotrail_** zeigt an, dass der Browser auf Gecko basiert. (Auf dem Desktop ist **_geckotrail_** immer der feste String `20100101`.)
5. **_Firefox/firefoxversion_** zeigt an, dass der Browser Firefox ist und gibt die Version an (z. B. "_17.0_").

### Beispiele

```plain
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Chrome UA-String

Der User-Agent-String von Chrome (oder Chromium/Blink-basierten Engines) ähnelt dem von Firefox. Zur Kompatibilität werden Zeichenfolgen wie `KHTML, like Gecko` und `Safari` hinzugefügt.

### Beispiele

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

## Opera UA-String

Der Opera-Browser basiert ebenfalls auf der Blink-Engine, weshalb er fast genauso aussieht wie der Chrome-UA-String, jedoch um `"OPR/<version>"` ergänzt wird.

### Beispiele

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41
```

Ältere, auf Presto basierende Opera-Versionen verwendeten:

```plain
Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00
Opera/9.60 (Windows NT 6.0; U; en) Presto/2.1.1
```

## Microsoft Edge UA-String

Der Edge-Browser basiert ebenfalls auf der Blink-Engine. Er fügt `"Edg/<version>"` hinzu.

### Beispiele

```plain
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59
```

## Safari UA-String

In diesem Beispiel ist der User-Agent-String die mobile Version von Safari. Er enthält das Wort `"Mobile"`.

### Beispiele

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1
```

## Crawler- und Bot-UA-Strings

### Beispiele

```plain
Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
```

```plain
Mozilla/5.0 (compatible; YandexAccessibilityBot/3.0; +http://yandex.com/bots)
```

## Bibliotheks- und Netz-Tool UA-Strings

### Beispiele

```plain
curl/7.64.1
```

```plain
PostmanRuntime/7.26.5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [User-Agent-Erkennung, Geschichte und Checkliste](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/)
- [Firefox Benutzeragenten-String-Referenz](/de/docs/Web/HTTP/Headers/User-Agent/Firefox)
- [Browser-Erkennung mithilfe des User-Agent](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- [Client Hints](/de/docs/Web/HTTP/Client_hints)
