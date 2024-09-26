---
title: User-Agent
slug: Web/HTTP/Headers/User-Agent
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Der **User-Agent**-{{Glossary("request header")}} ist eine charakteristische Zeichenkette, die es Servern und Netzwerkpartnern ermöglicht, die Anwendung, das Betriebssystem, den Anbieter und/oder die Version des anfordernden {{Glossary("user agent")}} zu identifizieren.

> [!WARNING]
> Bitte lesen Sie [Browsererkennung mittels User-Agent](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent), um zu verstehen, warum es im Allgemeinen keine gute Idee ist, unterschiedliche Webseiten oder Dienste für verschiedene Browser bereitzustellen.

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

Allgemeines Format für Webbrowser:

```http
User-Agent: Mozilla/5.0 (<system-information>) <platform> (<platform-details>) <extensions>
```

### Direktiven

- \<product>
  - : Ein Produktidentifikator — sein Name oder Entwicklungscode.
- \<product-version>
  - : Versionsnummer des Produkts.
- \<comment>
  - : Null oder mehr Kommentare mit weiteren Details. Zum Beispiel, Informationen über Unterprodukte.

## Firefox UA-String

Weitere Informationen zu User-Agent-Strings bei Firefox- und Gecko-basierten Browsern finden Sie in der [Referenz für den Firefox User-Agent-String](/de/docs/Web/HTTP/Headers/User-Agent/Firefox). Der UA-String von Firefox ist in 4 Komponenten unterteilt:

```plain
Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion
```

1. `Mozilla/5.0` ist das allgemeine Token, das besagt, dass der Browser mit Mozilla kompatibel ist. Aus historischen Gründen senden heute fast alle Browser diesen Wert.
2. **_platform_** beschreibt die native Plattform, auf der der Browser läuft (Windows, Mac, Linux, Android, usw.) und ob es sich um ein Mobiltelefon handelt. {{Glossary("Firefox OS")}}-Telefone sagen `Mobile` — das Web ist die Plattform. Beachten Sie, dass **_platform_** aus mehreren durch `;` getrennten Tokens bestehen kann. Weitere Details und Beispiele siehe unten.
3. **rv:_geckoversion_** gibt die Veröffentlichungsnummer von Gecko an (z. B. "_17.0_"). In neueren Browsern ist **_geckoversion_** identisch mit **_firefoxversion_**.
4. **_Gecko/geckotrail_** zeigt an, dass der Browser auf Gecko basiert. (Auf dem Desktop ist **_geckotrail_** immer der feste String `20100101`.)
5. **_Firefox/firefoxversion_** zeigt an, dass der Browser Firefox ist und gibt die Version an (z. B. "_17.0_").

### Beispiele

```plain
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Chrome UA-String

Der User-Agent-String von Chrome (oder Chromium/Blink-basierten Engines) ist dem von Firefox ähnlich. Aus Kompatibilitätsgründen fügt er Strings wie `KHTML, like Gecko` und `Safari` hinzu.

### Beispiele

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

## Opera UA-String

Der Opera-Browser basiert ebenfalls auf der Blink-Engine, weshalb er fast genauso aussieht wie der Chrome UA-String, jedoch mit der Hinzufügung von `"OPR/<version>"`.

### Beispiele

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41
```

Ältere, Presto-basierte Opera-Versionen verwendeten:

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

In diesem Beispiel handelt es sich um den User-Agent-String der mobilen Safari-Version. Er enthält das Wort `"Mobile"`.

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

## Bibliothek- und Netztool-UA-Strings

### Beispiele

```plain
curl/7.64.1
```

```plain
PostmanRuntime/7.26.5
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [User-Agent-Erkennung, Geschichte und Checkliste](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/)
- [Referenz für den Firefox User-Agent-String](/de/docs/Web/HTTP/Headers/User-Agent/Firefox)
- [Browsererkennung mittels User-Agent](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
