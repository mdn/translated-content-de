---
title: User-Agent
slug: Web/HTTP/Reference/Headers/User-Agent
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **User-Agent** {{Glossary("request_header", "Request-Header")}} ist eine charakteristische Zeichenkette, die es Servern und Netzwerk-Partnern ermöglicht, die Anwendung, das Betriebssystem, den Anbieter und/oder die Version des anfragenden {{Glossary("user_agent", "User-Agents")}} zu identifizieren.

> [!WARNING]
> Siehe [Browser-Erkennung anhand des User-Agents](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent), um zu erfahren, warum die Bereitstellung unterschiedlicher Inhalte für unterschiedliche Browser in der Regel eine schlechte Idee ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
  - : Ein Produktbezeichner — sein Name oder Entwicklungscode.
- `<product-version>`
  - : Versionsnummer des Produkts.
- `<comment>`
  - : Null oder mehr Kommentare mit weiteren Details. Zum Beispiel Informationen zu Unterprodukten.

## Firefox UA-String

Weitere Informationen zu User-Agent-Strings, die auf Firefox und Gecko basieren, finden Sie in der [Firefox User-Agent-String-Referenz](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox). Der UA-String von Firefox ist in 4 Komponenten unterteilt:

```plain
Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version
```

1. `Mozilla/5.0` ist der allgemeine Token, der angibt, dass der Browser Mozilla-kompatibel ist. Aus historischen Gründen sendet heute fast jeder Browser ihn.
2. **_platform_** beschreibt die native Plattform, auf der der Browser läuft (Windows, Mac, Linux, Android usw.) und ob es sich um ein Mobiltelefon handelt. {{Glossary("Firefox_OS", "Firefox OS")}}-Telefone geben `Mobile` an — das Web ist die Plattform. Beachten Sie, dass **_platform_** aus mehreren durch `;` getrennten Token bestehen kann. Siehe unten für weitere Details und Beispiele.
3. **rv:_gecko-version_** gibt die Release-Version von Gecko an (zum Beispiel "_17.0_"). In neueren Browsern ist **_gecko-version_** identisch mit **_firefox-version_**.
4. **_Gecko/gecko-trail_** weist darauf hin, dass der Browser auf Gecko basiert. (Auf dem Desktop ist **_gecko-trail_** immer die feste Zeichenkette `20100101`.)
5. **_Firefox/firefox-version_** zeigt an, dass es sich um den Firefox-Browser handelt und liefert die Version (zum Beispiel "_17.0_").

### Beispiele

```plain
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Chrome UA-String

Der User-Agent-String von Chrome (oder Chromium/Blink-basierte Engines) ist dem von Firefox ähnlich. Aus Kompatibilitätsgründen fügt er Zeichenfolgen wie `KHTML, like Gecko` und `Safari` hinzu.

### Beispiele

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

## Opera UA-String

Der Opera-Browser basiert ebenfalls auf der Blink-Engine, weshalb er fast identisch mit dem Chrome UA-String aussieht, aber `"OPR/<version>"` hinzufügt.

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
- [Firefox User-Agent-String-Referenz](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox)
- [Browser-Erkennung anhand des User-Agents](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
- [Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints)
