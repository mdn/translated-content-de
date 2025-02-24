---
title: User-Agent
slug: Web/HTTP/Headers/User-Agent
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **User-Agent** {{Glossary("request_header", "Request-Header")}} ist eine charakteristische Zeichenkette, die es Servern und Netzwerkteilnehmern ermöglicht, die Anwendung, das Betriebssystem, den Anbieter und/oder die Version des anfordernden {{Glossary("user_agent", "User-Agent")}} zu identifizieren.

> [!WARNING]
> Sehen Sie sich [Browser-Erkennung unter Verwendung des User-Agents](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent) an, um zu verstehen, warum das Bereitstellen unterschiedlicher Inhalte für verschiedene Browser normalerweise eine schlechte Idee ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
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

- `<product>`
  - : Ein Produktbezeichner – sein Name oder Entwicklungscode.
- `<product-version>`
  - : Versionsnummer des Produkts.
- `<comment>`
  - : Null oder mehr Kommentare, die weitere Details enthalten. Zum Beispiel Informationen zu Unterprodukten.

## Firefox UA-Zeichenkette

Weitere Informationen zu Firefox- und Gecko-basierten User-Agent-Zeichenketten finden Sie im [Firefox-User-Agent-Zeichenketten-Referenz](/de/docs/Web/HTTP/Headers/User-Agent/Firefox). Die UA-Zeichenkette von Firefox ist in 4 Komponenten unterteilt:

```plain
Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version
```

1. `Mozilla/5.0` ist das allgemeine Token, das besagt, dass der Browser mit Mozilla kompatibel ist. Aus historischen Gründen senden fast alle heutigen Browser dies.
2. **_platform_** beschreibt die native Plattform, auf der der Browser ausgeführt wird (Windows, Mac, Linux, Android usw.), und ob es sich um ein Mobiltelefon handelt. {{Glossary("Firefox_OS", "Firefox OS")}}-Telefone geben `Mobile` an – das Web ist die Plattform. Beachten Sie, dass **_platform_** aus mehreren durch `;` getrennten Tokens bestehen kann. Siehe unten für weitere Details und Beispiele.
3. **rv:_gecko-version_** gibt die Release-Version von Gecko an (zum Beispiel "_17.0_"). In neueren Browsern ist **_gecko-version_** dieselbe wie **_firefox-version_**.
4. **_Gecko/gecko-trail_** zeigt an, dass der Browser auf Gecko basiert. (Auf dem Desktop ist **_gecko-trail_** immer die feste Zeichenfolge `20100101`.)
5. **_Firefox/firefox-version_** zeigt an, dass der Browser Firefox ist und gibt die Version an (zum Beispiel "_17.0_").

### Beispiele

```plain
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Chrome UA-Zeichenkette

Die User-Agent-Zeichenkette von Chrome (oder Chromium/Blink-basierten Engines) ähnelt der von Firefox. Aus Kompatibilitätsgründen fügt es Zeichenfolgen wie `KHTML, like Gecko` und `Safari` hinzu.

### Beispiele

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

## Opera UA-Zeichenkette

Der Opera-Browser basiert ebenfalls auf der Blink-Engine, weshalb er fast genauso aussieht wie die Chrome UA-Zeichenkette, aber `"OPR/<version>"` hinzufügt.

### Beispiele

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41
```

Ältere, auf Presto basierende Opera-Versionen verwendeten:

```plain
Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00
Opera/9.60 (Windows NT 6.0; U; en) Presto/2.1.1
```

## Microsoft Edge UA-Zeichenkette

Der Edge-Browser basiert ebenfalls auf der Blink-Engine. Er fügt `"Edg/<version>"` hinzu.

### Beispiele

```plain
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59
```

## Safari UA-Zeichenkette

In diesem Beispiel ist die User-Agent-Zeichenkette die Version des mobilen Safari. Sie enthält das Wort `"Mobile"`.

### Beispiele

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1
```

## Crawler und Bot UA-Zeichenketten

### Beispiele

```plain
Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
```

```plain
Mozilla/5.0 (compatible; YandexAccessibilityBot/3.0; +http://yandex.com/bots)
```

## Bibliothek und Net-Tool UA-Zeichenketten

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
- [Firefox-User-Agent-Zeichenketten-Referenz](/de/docs/Web/HTTP/Headers/User-Agent/Firefox)
- [Browser-Erkennung unter Verwendung des User-Agents](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
