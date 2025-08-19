---
title: Firefox User-Agent-Referenz
short-title: Firefox UA-String
slug: Web/HTTP/Reference/Headers/User-Agent/Firefox
l10n:
  sourceCommit: 74e7902b0875b6378d77df6d2d925a2d09d19f5d
---

Dieses Dokument beschreibt den User-Agent-String, der in Firefox 4 und später sowie in Anwendungen basierend auf Gecko 2.0 und später verwendet wird. Für eine Aufschlüsselung der Änderungen am String in Gecko 2.0 siehe [Final User Agent string for Firefox 4](https://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/) (Blogpost). Siehe auch dieses Dokument über [User-Agent-Sniffing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) und diesen [Hacks-Blogpost](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/).

## Allgemeine Form

Der UA-String von Firefox selbst ist in vier Komponenten unterteilt:

`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version`

- `Mozilla/5.0` ist das allgemeine Token, das angibt, dass der Browser mit Mozilla kompatibel ist, und ist heute bei fast jedem Browser üblich.
- `platform` beschreibt die native Plattform, auf der der Browser ausgeführt wird (z.B. Windows, Mac, Linux oder Android) und ob es sich um ein Mobiltelefon handelt. Firefox OS-Telefone sagen `Mobile`; das Web ist die Plattform. Beachten Sie, dass `platform` aus mehreren `;`-getrennten Token bestehen kann. Siehe unten für weitere Details und Beispiele.

- `rv:gecko-version` gibt die Release-Version von Gecko an (wie `17.0`).
- `Gecko/gecko-trail` zeigt an, dass der Browser auf Gecko basiert.
- Auf dem Desktop ist `gecko-trail` die feste Zeichenkette `20100101`.
- `Firefox/firefox-version` zeigt an, dass der Browser Firefox ist, und gibt die Version an (wie `17.0`).
- Ab Firefox 10 auf Mobilgeräten entspricht `gecko-trail` der `firefox-version`.

> [!NOTE]
> Die empfohlene Methode zum Sniffen von Gecko-basierten Browsern (falls Sie _wirklich_ auf die Browser-Engine sniffen müssen, anstatt Feature Detection zu verwenden) ist durch die Anwesenheit der Strings `Gecko` und `rv:`, da einige andere Browser ein `like Gecko`-Token einschließen.

Für andere Produkte, die auf Gecko basieren, kann der String eine von zwei Formen annehmen, wobei die Token dieselbe Bedeutung haben, außer den unten angegebenen:

`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail app-name/app-version`
`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version app-name/app-version`

- `app-name/app-version` gibt den Anwendungsnamen und die Version an. Dies könnte zum Beispiel `Camino/2.1.1` oder `SeaMonkey/2.7.1` sein.
- `Firefox/firefox-version` ist ein optionales Kompatibilitäts-Token, das einige auf Gecko basierende Browser einbauen können, um maximale Kompatibilität mit Websites zu erreichen, die Firefox erwarten. `firefox-version` wird im Allgemeinen die entsprechende Firefox-Version darstellen, die der angegebenen Gecko-Version entspricht. Einige auf Gecko basierende Browser entscheiden sich möglicherweise gegen die Verwendung dieses Tokens; daher sollten Sniffer nach Gecko - nicht nach Firefox - suchen!

## Indikatoren für Mobilgeräte und Tablets

Der `platform`-Teil des UA-Strings gibt an, ob Firefox auf einem Telefon oder einem Tablet ausgeführt wird. Wenn Firefox auf einem Gerät mit einer Telefon-Form ausgeführt wird, befindet sich ein `Mobile;`-Token im `platform`-Teil des UA-Strings. Wenn Firefox auf einem Tablet ausgeführt wird, befindet sich stattdessen ein `Tablet;`-Token im `platform`-Teil des UA-Strings. Zum Beispiel:

```plain
Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0
Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0
```

> [!NOTE]
> Die Versionsnummern sind nicht relevant. Vermeiden Sie es, darauf basierende Materialien abzuleiten.

Der bevorzugte Weg, um Inhalte auf eine Geräteform zu richten, ist die Verwendung von CSS Media Queries. Wenn Sie jedoch UA-Sniffing verwenden, um Inhalte auf eine Geräteform zu richten, suchen Sie bitte nach **Mobi** (um Opera Mobile einzuschließen, das "Mobi" verwendet) für die Telefonform und gehen Sie **nicht** von einer Korrelation zwischen "Android" und der Geräteform aus. Auf diese Weise wird Ihr Code funktionieren, wenn/wo Firefox auf anderen Telefon-/Tablet-Betriebssystemen oder Android für Laptops ausgeliefert wird. Bitte verwenden Sie auch die Erkennung von Berührungen, um Touch-Geräte zu finden, anstatt nach "Mobi" oder "Tablet" zu suchen, da es möglicherweise Touch-Geräte gibt, die keine Tablets sind.

> [!NOTE]
> Firefox OS-Geräte identifizieren sich ohne eine Betriebssystemangabe; zum Beispiel: "Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0". Das Web ist die Plattform.

## Windows

Windows-User-Agents haben die folgenden Variationen, wobei _x.y_ die Windows NT-Version ist (zum Beispiel Windows NT 6.1).

| Windows-Version        | Gecko User-Agent-String                                                           |
| ---------------------- | --------------------------------------------------------------------------------- |
| Windows NT auf x86 CPU | Mozilla/5.0 (Windows NT _x_._y_; rv:10.0) Gecko/20100101 Firefox/10.0             |
| Windows NT auf x64 CPU | Mozilla/5.0 (Windows NT _x_._y_; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0 |

> [!NOTE]
> Eine aarch64-CPU wird in Windows 11 als x86_64 und in Windows 10 als x86 (da es die x64-Emulation nicht unterstützt) gemeldet.
> Siehe [Bugzilla #1763310](https://bugzil.la/1763310).

## macOS

Hierbei ist _x.y_ die Version von macOS (zum Beispiel macOS 10.15). Ab Firefox 87 begrenzt Firefox die gemeldete macOS-Versionsnummer auf 10.15, sodass macOS 11.0 Big Sur und später als "10.15" in der User-Agent-Zeichenkette angegeben werden. ARM-basierte Macs werden in der User-Agent-Zeichenkette als "Intel" angegeben.

| Mac OS X-Version                       | Gecko User-Agent-String                                                            |
| -------------------------------------- | ---------------------------------------------------------------------------------- |
| Mac OS X auf x86, x86_64, oder aarch64 | Mozilla/5.0 (Macintosh; Intel Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0 |
| Mac OS X auf PowerPC                   | Mozilla/5.0 (Macintosh; PPC Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0   |

## Linux

Linux ist eine vielseitigere Plattform. Ihre Linux-Distribution könnte eine Erweiterung enthalten, die Ihren User-Agent ändert. Einige gängige Beispiele sind unten angegeben.

| Linux-Version                | Gecko User-Agent-String                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| Linux-Desktop auf i686 CPU   | Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0   |
| Linux-Desktop auf x86_64 CPU | Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0 |

> [!NOTE]
> In Firefox 127.0 und später wird 32-Bit-x86 jetzt in der User-Agent-Zeichenkette von Firefox als x86_64 gemeldet, [`navigator.platform`](/de/docs/Web/API/Navigator/platform) und [`navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) (siehe [Firefox 127.0 Release Notes](https://www.firefox.com/en-US/firefox/127.0/releasenotes/)).

## Firefox für Android

Firefox für Android enthält die Android-Version als Teil des _platform_-Tokens. Für erhöhte Interoperabilität, wenn der Browser auf einer Version unter 4 läuft, wird es als 4.4 gemeldet. Android-Versionen 4 und höher geben die Version korrekt an. Beachten Sie, dass dasselbe Gecko mit denselben Fähigkeiten für alle Versionen von Android ausgeliefert wird.

| Formfaktor | Gecko User-Agent-String                                            |
| ---------- | ------------------------------------------------------------------ |
| Telefon    | Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0 |
| Tablet     | Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0 |

## Focus für Android

Ab Version 1 wird Focus von Android WebView betrieben und verwendet das folgende User-Agent-String-Format:

```plain
Mozilla/5.0 (Linux; <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Version/4.0 Focus/<focus version> Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
```

Tablet-Varianten in WebView spiegeln Mobile wider, enthalten jedoch kein `Mobile`-Token.

Ab Version 6 können Benutzer eine GeckoView-basierte Focus für Android mit einer versteckten Einstellung nutzen: Es verwendet eine GeckoView-UA-Zeichenkette, um die Gecko-Kompatibilität zu bewerben.

| Focus-Version (Rendering Engine) | User-Agent-String                                                                                                                      |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (WebView Mobile)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36 |
| 1.0 (WebView Tablet)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Safari/537.36        |
| 6.0 (GeckoView)                  | Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0                                                                     |

Der Klar-User-Agent ist derselbe wie [Focus](#focus_für_ios).

## Firefox für iOS

Firefox für iOS verwendet die standardmäßige Mobile Safari UA-Zeichenkette mit einem zusätzlichen **FxiOS/\<version>**-Token auf iPod und iPhone, ähnlich wie [Chrome für iOS sich identifiziert](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/ios/user_agent.md).

| Formfaktor | Firefox für iOS User-Agent-String                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| iPod       | Mozilla/5.0 (iPod touch; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4 |
| iPhone     | Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4     |
| iPad       | Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15                       |

Auf dem iPad erscheint die User-Agent-Zeichenkette identisch wie Safari. Für verschiedene Probleme im Zusammenhang mit der Nichtaufnahme von `FxiOS` auf iOS siehe [mozilla-mobile/firefox-ios#6620](https://github.com/mozilla-mobile/firefox-ios/issues/6620).

## Focus für iOS

Version 7 von Focus für iOS verwendet eine User-Agent-Zeichenkette mit dem folgenden Format:

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/7.0.4 Mobile/16B91 Safari/605.1.15
```

Hinweis: Dieser User-Agent wurde von einem iPhone XR-Simulator abgerufen und kann sich auf dem Gerät unterscheiden.

## Firefox für Fire TV

Version 3 (und wahrscheinlich früher) von Firefox für Fire TV verwendet eine User-Agent-Zeichenkette mit dem folgenden Format:

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefox-version> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox TV-Version | User-Agent-String                                                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| v3.0               | Mozilla/5.0 (Linux; Android 7.1.2) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/3.0 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox für Echo Show

Ab Version 1.1 verwendet Firefox für Echo Show eine User-Agent-Zeichenkette mit dem folgenden Format:

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefox-version> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox für Echo Show-Version | User-Agent-String                                                                                                                  |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| v1.1                          | Mozilla/5.0 (Linux; Android 5.1.1) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.1 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox OS

| Formfaktor       | Gecko User-Agent-String                                           |
| ---------------- | ----------------------------------------------------------------- |
| Telefon          | Mozilla/5.0 (Mobile; rv:26.0) Gecko/26.0 Firefox/26.0             |
| Tablet           | Mozilla/5.0 (Tablet; rv:26.0) Gecko/26.0 Firefox/26.0             |
| TV               | Mozilla/5.0 (TV; rv:44.0) Gecko/44.0 Firefox/44.0                 |
| Gerät-spezifisch | Mozilla/5.0 (Mobile; **_nnnn;_** rv:26.0) Gecko/26.0 Firefox/26.0 |

### Gerät-spezifische User-Agent-Strings

Obwohl es von Mozilla **stark desillusioniert** wird, fügen einige Gerätehersteller bedauerlicherweise ein Token in den UA-String ihres Geräts ein, das ihre Geräte-ID darstellt. Falls dies der Fall ist, sieht der Firefox OS-UA-String so aus wie der gerätespezifische String in der obigen Tabelle, wobei **_nnnn;_** der Herstellercode für das Gerät ist (siehe [Richtlinien](https://wiki.mozilla.org/B2G/User_Agent/Device_Model_Inclusion_Requirements)). Einige von ihnen, die wir bemerkt haben, sind von der Form "**NexusOne;**", "**ZTEOpen;**" oder "**Open C;**" (beachten Sie, dass das Einfügen von Leerzeichen ebenfalls entmutigt wird). Wir stellen diese Informationen bereit, um Ihnen bei Ihrer UA-Erkennung zu helfen, aber Mozilla ermutigt nicht zur Erkennung einer Geräte-ID in UA-Strings.

Hier ist ein JavaScript-Regulärer Ausdruck, der alle mobilen Geräte erkennt, einschließlich Geräte mit einer Geräte-ID in ihrem UA-String:

```js
/mobi/i;
```

Das `i` macht es case-insensitive, und `mobi` passt zu allen mobilen Browsern.

### Firefox OS Versionsnummer

Während die Versionsnummer für Firefox OS nicht in der UA-Zeichenkette enthalten ist, ist es möglich, Versionsinformationen von der Gecko-Versionsnummer abzuleiten, die in der UA-Zeichenkette enthalten ist.

| Firefox OS Versionsnummer | Gecko Versionsnummer |
| ------------------------- | -------------------- |
| 1.0.1                     | 18.0                 |
| 1.1                       | 18.1                 |
| 1.2                       | 26.0                 |
| 1.3                       | 28.0                 |
| 1.4                       | 30.0                 |
| 2.0                       | 32.0                 |
| 2.1                       | 34.0                 |
| 2.2                       | 37                   |
| 2.5                       | 44                   |

> [!NOTE]
> Es ist einfach, die Entsprechungen zu finden, indem man sich die [Mercurial Repositories Namen](https://hg-edge.mozilla.org/releases) anschaut: Repositories, die mit `mozilla-b2g` beginnen, sind die Release-Repositories für Firefox OS und haben sowohl Firefox OS- als auch Gecko-Versionen in ihren Namen.

Firefox OS hat eine vierstellige Versionsnummer: `X.X.X.Y`. Die ersten beiden Ziffern werden vom Mozilla-Produktteam verwaltet und bezeichnen Versionen mit neuen Features (z.B.: v1.1, 1.2 etc.). Die dritte Ziffer wird mit regelmäßigen Versionstags (etwa alle 6 Wochen) für Sicherheitsupdates erhöht, und die vierte wird vom OEM verwaltet.

## Siehe auch

- Empfehlungen zum [Sniffing des UA-Strings für plattformübergreifende Unterstützung](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
- [`navigator.userAgent`](/de/docs/Web/API/Window/navigator)
