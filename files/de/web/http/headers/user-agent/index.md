---
title: User-Agent
slug: Web/HTTP/Headers/User-Agent
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTTPSidebar}}

Der **User-Agent** {{Glossary("request_header", "Request Header")}} ist eine charakteristische Zeichenkette, die es Servern und Netzwerk-Peers ermöglicht, die Anwendung, das Betriebssystem, den Anbieter und/oder die Version des anfragenden {{Glossary("user_agent", "User Agents")}} zu identifizieren.

> [!WARNING]
> Bitte lesen Sie [Browser-Erkennung mittels User-Agent](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent), um zu verstehen, warum es in der Regel eine schlechte Idee ist, verschiedene Webseiten oder Dienste für verschiedene Browser bereitzustellen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
User-Agent: <product> / <product-version> <comment>
```

Allgemeines Format für Webbrowser:

```http
User-Agent: Mozilla/5.0 (<system-information>) <platform> (<platform-details>) <extensions>
```

### Direktiven

- \<product>
  - : Ein Produktbezeichner — sein Name oder Entwicklungscode.
- \<product-version>
  - : Versionsnummer des Produkts.
- \<comment>
  - : Null oder mehr Kommentare, die weitere Details enthalten. Zum Beispiel Informationen über Unterprodukte.

## Firefox UA-String

Weitere Informationen zu User-Agent-Strings, die auf Firefox und Gecko basieren, finden Sie in der [Firefox User-Agent-String-Referenz](/de/docs/Web/HTTP/Headers/User-Agent/Firefox). Der UA-String von Firefox ist in 4 Komponenten unterteilt:

```plain
Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version
```

1. `Mozilla/5.0` ist das allgemeine Token, das besagt, dass der Browser mit Mozilla kompatibel ist. Aus historischen Gründen senden es heutzutage fast alle Browser.
2. **_platform_** beschreibt die native Plattform, auf der der Browser läuft (Windows, Mac, Linux, Android usw.) und ob es sich um ein Mobiltelefon handelt. {{Glossary("Firefox_OS", "Firefox OS")}}-Telefone sagen `Mobile` — das Web ist die Plattform. Beachten Sie, dass **_platform_** aus mehreren durch `;` getrennten Tokens bestehen kann. Weitere Details und Beispiele finden Sie unten.
3. **rv:_gecko-version_** gibt die Release-Version von Gecko an (wie "_17.0_"). In neueren Browsern ist **_gecko-version_** identisch mit **_firefox-version_**.
4. **_Gecko/gecko-trail_** zeigt an, dass der Browser auf Gecko basiert. (Auf dem Desktop ist **_gecko-trail_** immer die feste Zeichenfolge `20100101`.)
5. **_Firefox/firefox-version_** zeigt an, dass der Browser Firefox ist und gibt die Version an (wie "_17.0_").

### Beispiele

```plain
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Chrome UA-String

Der User-Agent-String von Chrome (oder Chromium/Blink-basierten Engines) ähnelt dem von Firefox. Für die Kompatibilität fügt er Zeichenfolgen wie `KHTML, like Gecko` und `Safari` hinzu.

### Beispiele

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

## Opera UA-String

Der Opera-Browser basiert ebenfalls auf der Blink-Engine, weshalb er fast genauso aussieht wie der Chrome-UA-String, aber `"OPR/<version>"` hinzufügt.

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

In diesem Beispiel ist der User-Agent-String die Version von mobilem Safari. Er enthält das Wort `"Mobile"`.

### Beispiele

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1
```

## Crawler und Bot UA-Strings

### Beispiele

```plain
Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
```

```plain
Mozilla/5.0 (compatible; YandexAccessibilityBot/3.0; +http://yandex.com/bots)
```

## Bibliotheken- und Netz-Tool UA-Strings

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
- [Firefox User-Agent-String-Referenz](/de/docs/Web/HTTP/Headers/User-Agent/Firefox)
- [Browser-Erkennung mittels User-Agent](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
