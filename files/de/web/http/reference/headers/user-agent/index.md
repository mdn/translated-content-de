---
title: User-Agent header
short-title: User-Agent
slug: Web/HTTP/Reference/Headers/User-Agent
l10n:
  sourceCommit: 0b852c3f5c46b69a57d23e860a833f6830951793
---

Der HTTP-**User-Agent**-{{Glossary("request_header", "Request-Header")}} ist eine charakteristische Zeichenkette, die es Servern und Netzwerkpartnern ermöglicht, die Anwendung, das Betriebssystem, den Anbieter und/oder die Version des anfragenden {{Glossary("user_agent", "User-Agent")}} zu identifizieren.

> [!WARNING]
> Lesen Sie [Browser-Erkennung mit dem User-Agent](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent), um zu erfahren, warum das Bereitstellen von unterschiedlichen Inhalten für verschiedene Browser meist eine schlechte Idee ist.

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
  - : Ein Produktidentifikator — sein Name oder Entwicklungs-Codename.
- `<product-version>`
  - : Versionsnummer des Produkts.
- `<comment>`
  - : Null oder mehr Kommentare, die weitere Details enthalten. Zum Beispiel Informationen über Unterprodukte.

## User-Agent-Reduktion

Die im `User-Agent`-Header offengelegte Information hat historisch gesehen Bedenken hinsichtlich der [Privatsphäre](/de/docs/Web/Privacy) geweckt — sie kann verwendet werden, um einen bestimmten User-Agent zu identifizieren und somit für {{Glossary("fingerprinting", "Fingerprinting")}} genutzt werden. Um solche Bedenken zu mindern, bieten [unterstützende Browser](#browser-kompatibilität) einen reduzierten Satz an Informationen in ihrem `User-Agent`-Header an und in damit verbundenen API-Funktionen wie [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent), [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.platform`](/de/docs/Web/API/Navigator/platform).

Zum Beispiel könnte die `User-Agent`-Zeichenkette für Chrome unter Android vorher so ausgesehen haben:

```plain
Mozilla/5.0 (Linux; Android 16; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.12.45 Mobile Safari/537.36
```

Nach dem User-Agent-Reduktions-Update sieht sie jetzt so aus:

```plain
Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36
```

- Die Plattformversion ist immer ein fixer Wert, in diesem Fall `Android 10`.
- Das Gerätemodell ist immer ein fixer Wert, in diesem Fall `K`.
- Die Hauptversionsnummer von Chrome wird korrekt angezeigt, aber die Nebenversionsnummern werden immer als Nullen gezeigt — `0.0.0`.

Server, die mehr Informationen benötigen, können diese über [User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints) anfordern. Nach der ersten Verbindung kann der Server einen {{httpheader("Accept-CH")}}-Antwort-Header senden, der die gewünschten Datenpunkte beschreibt, und der Client kann dann die Daten über [`Sec-CH-UA-*`](/de/docs/Web/HTTP/Reference/Headers#user_agent_client_hints)-Header zurücksenden. Diese Informationen können auch über die [User-Agent-Client-Hints-API](/de/docs/Web/API/User-Agent_Client_Hints_API) abgerufen werden.

Weitere ausführliche Informationen, einschließlich einer Anleitung zum Abrufen weiterer Informationen nach Bedarf, finden Sie unter [User-Agent Reduktion](/de/docs/Web/HTTP/Guides/User-agent_reduction). Sie können auch Beispiele für reduzierte `User-Agent`-Zeichenketten in den folgenden Abschnitten finden.

## Firefox UA-Zeichenkette

Für weitere Informationen zu Firefox- und Gecko-basierten User-Agent-Zeichenketten, siehe die [Firefox User-Agent-Zeichenkettenreferenz](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox). Die UA-Zeichenkette von Firefox ist in 4 Komponenten unterteilt:

```plain
Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version
```

1. `Mozilla/5.0` ist das allgemeine Token, das angibt, dass der Browser mit Mozilla kompatibel ist. Aus historischen Gründen sendet dies heute fast jeder Browser.
2. **_platform_** beschreibt die native Plattform, auf der der Browser läuft (Windows, Mac, Linux, Android usw.) und ob es sich um ein Mobiltelefon handelt. Beachten Sie, dass **_platform_** aus mehreren durch `;` getrennten Tokens bestehen kann. Weitere Details und Beispiele sind unten zu finden.
3. **rv:_gecko-version_** gibt die Release-Version von Gecko an (zum Beispiel "_17.0_"). In neueren Browsern ist **_gecko-version_** identisch mit **_firefox-version_**.
4. **_Gecko/gecko-trail_** gibt an, dass der Browser auf Gecko basiert. (Auf dem Desktop ist **_gecko-trail_** immer der feste String `20100101`.)
5. **_Firefox/firefox-version_** gibt an, dass es sich um den Firefox-Browser handelt und liefert die Version (zum Beispiel "_17.0_").

Beispiele für Desktop:

```plain
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0

Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Chrome UA-Zeichenkette

Die User-Agent-Zeichenkette von Chrome (oder Chromium/Blink-basierten Engines) ist der von Firefox ähnlich. Aus Kompatibilitätsgründen fügt es Zeichenketten wie `KHTML, like Gecko` und `Safari` hinzu. Es fügt `"CriOS/<version>"` auf dem iPhone hinzu.

Beispiele für Desktop:

```plain
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36

Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36
```

Beispiel für Android-Telefon:

```plain
Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36
```

## Opera UA-Zeichenkette

Der Opera-Browser basiert ebenfalls auf der Blink-Engine, weshalb er fast genauso aussieht wie die Chrome UA-Zeichenkette, aber `"OPR/<version>"` auf dem Desktop und Android hinzufügt sowie `"OPT/<version>"` auf dem iPhone. Für Vorabversionen enthält Opera auch eine Beschreibung der jeweiligen Browser-Edition in Klammern, zum Beispiel `(Edition developer)`.

Beispiele für Desktop:

```plain
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36 OPR/124.0.0.0 (Edition developer)

Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36 OPR/124.0.0.0 (Edition developer)
```

Beispiel für Android-Telefon:

```plain
Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 OPR/92.0.0.0
```

## Microsoft Edge UA-Zeichenkette

Der Edge-Browser basiert ebenfalls auf der Blink-Engine. Er fügt `"Edg/<version>"` auf Desktop-Plattformen hinzu, `"EdgA/<version>"` auf Android und `"EdgiOS/<version>"` auf dem iPhone.

Beispiele für Desktop:

```plain
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0

Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0
```

Beispiel für Android-Telefon:

```plain
Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Mobile Safari/537.36 EdgA/141.0.0.0
```

## Safari UA-Zeichenkette

Safari basiert auf der WebKit-Engine, seine UA-Zeichenkette ist jedoch ähnlich den Blink-basierten Browsern. Es neigt dazu, eine `Version/xxx`-Zeichenfolge vor der eigentlichen Engine-Build-Version hinzuzufügen, um die Ausgabeversion des Browsers anzuzeigen, die im Gegensatz zu Blink-basierten Browsern anders ist. Im Fall von iPhone (Mobile) Safari enthält die Zeichenkette auch `Mobile`.

> [!NOTE]
> Zum Zeitpunkt des Schreibens basieren Nicht-Apple-iPhone-Browser (wie Firefox, Chrome und Edge) immer noch auf WebKit, daher sind ihre UA-Zeichenketten der von Safari ähnlich.

Beispiel für Desktop:

```plain
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Safari/605.1.15
```

Beispiel für iPhone:

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Mobile/15E148 Safari/604.1
```

## Beispiele vor der User-Agent-Reduktion

Dieser Abschnitt bietet einige Beispiele für UA-Zeichenketten in älteren Browserversionen vor der Einführung der User-Agent-Reduktion:

Google Chrome:

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

Microsoft Edge:

```plain
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59
```

Opera:

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41
```

Ältere, auf Presto basierende Opera-Versionen verwendeten eine Struktur wie diese:

```plain
Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00

Opera/9.60 (Windows NT 6.0; U; en) Presto/2.1.1
```

## Crawler- und Bot-UA-Zeichenketten

### Beispiele

```plain
Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
```

```plain
Mozilla/5.0 (compatible; YandexAccessibilityBot/3.0; +http://yandex.com/bots)
```

## Bibliotheks- und Netzwerk-Tool-UA-Zeichenketten

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
- [Firefox User-Agent-Zeichenkettenreferenz](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox)
- [Browser-Erkennung mit dem User-Agent](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
- [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)
