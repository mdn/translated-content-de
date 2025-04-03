---
title: Referenz zur User-Agent-Zeichenkette von Firefox
slug: Web/HTTP/Reference/Headers/User-Agent/Firefox
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTTPSidebar}}

Dieses Dokument beschreibt die User-Agent-Zeichenkette, die in Firefox 4 und höher sowie in Anwendungen, die auf Gecko 2.0 und höher basieren, verwendet wird. Für eine Aufschlüsselung der Änderungen an der Zeichenkette in Gecko 2.0 siehe [Final User Agent string for Firefox 4](https://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/) (Blogeintrag). Siehe auch dieses Dokument zum [User-Agent-Sniffing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) und diesen [Hacks-Blogeintrag](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/).

## Allgemeine Form

Die UA-Zeichenkette von Firefox selbst besteht aus vier Komponenten:

`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version`

- `Mozilla/5.0` ist das allgemeine Token, das besagt, dass der Browser mit Mozilla kompatibel ist, und ist heute bei fast jedem Browser üblich.
- `platform` beschreibt die native Plattform, auf der der Browser läuft (z.B. Windows, Mac, Linux oder Android), und ob es sich um ein Mobiltelefon handelt oder nicht. Bei Firefox OS-Telefonen steht `Mobile`; das Web ist die Plattform. Beachten Sie, dass `platform` aus mehreren durch `;` getrennten Token bestehen kann. Einzelheiten und Beispiele finden Sie unten.

- `rv:gecko-version` zeigt die Versionsnummer der Gecko-Veröffentlichung (z.B. `17.0`) an.
- `Gecko/gecko-trail` gibt an, dass der Browser auf Gecko basiert.
- Auf dem Desktop ist `gecko-trail` die feste Zeichenkette `20100101`.
- `Firefox/firefox-version` zeigt an, dass der Browser Firefox ist, und gibt die Version an (z.B. `17.0`).
- Ab Firefox 10 auf Mobilgeräten ist `gecko-trail` identisch mit `firefox-version`.

> [!NOTE]
> Die empfohlene Methode, Gecko-basierte Browser zu erkennen (wenn Sie _unbedingt_ nach der Browser-Engine schnüffeln müssen, anstatt die Merkmals-Erkennung zu verwenden), besteht in der Erkennung der `Gecko`- und `rv:` Zeichenketten, da einige andere Browser ein `like Gecko`-Token enthalten.

Für andere Produkte, die auf Gecko basieren, kann die Zeichenkette eine von zwei Formen annehmen, wobei die Token die gleiche Bedeutung haben, außer bei den unten genannten:

`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail appname/appversion`
`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version appname/appversion`

- `appname/appversion` gibt den Namen und die Version der Anwendung an. Beispielsweise könnte dies `Camino/2.1.1` oder `SeaMonkey/2.7.1` sein.
- `Firefox/firefox-version` ist ein optionales Kompatibilitätstoken, das einige Gecko-basierte Browser möglicherweise aufnehmen, um maximale Kompatibilität mit Websites zu erreichen, die Firefox erwarten. `firefox-version` wird im Allgemeinen die entsprechende Firefox-Veröffentlichung repräsentieren, die der angegebenen Gecko-Version entspricht. Einige Gecko-basierte Browser entscheiden sich möglicherweise dafür, dieses Token nicht zu verwenden; aus diesem Grund sollten Sniffer nach Gecko suchen — nicht nach Firefox!

## Indikatoren für Mobil- und Tabletgeräte

Der `platform` Teil der UA-Zeichenkette zeigt an, ob Firefox auf einem Gerät mit Telefon- oder Tabletgröße läuft. Wenn Firefox auf einem Gerät läuft, das das Telefon-Formfaktor hat, gibt es ein `Mobile;` Token im `platform` Teil der UA-Zeichenkette. Wenn Firefox auf einem Tabletgerät läuft, gibt es stattdessen ein `Tablet;` Token im `platform` Teil der UA-Zeichenkette. Zum Beispiel:

```plain
Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0
Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0
```

> [!NOTE]
> Die Versionsnummern sind nicht relevant. Vermeiden Sie es, Materialien auf deren Grundlage abzuleiten.

Die bevorzugte Methode, um Inhalte auf einen Geräte-Formfaktor auszurichten, ist die Verwendung von CSS-Media Queries. Falls Sie jedoch UA-Sniffing verwenden, um Inhalte auf einen Geräte-Formfaktor auszurichten, suchen Sie nach **Mobi** (um Opera Mobile einzuschließen, das "Mobi" verwendet) für den Telefon-Formfaktor und gehen Sie nicht von einer Korrelation zwischen "Android" und dem Geräte-Formfaktor aus. Auf diese Weise funktioniert Ihr Code, wenn/wann Firefox auf anderen Telefon/Tablet-Betriebssystemen erscheint oder Android für Laptops verwendet wird. Bitte verwenden Sie auch die Berührungs-Erkennung, um Touchgeräte zu finden, anstatt nach "Mobi" oder "Tablet" zu suchen, da es Touchgeräte geben kann, die keine Tablets sind.

> [!NOTE]
> Firefox OS-Geräte identifizieren sich ohne Angabe eines Betriebssystems; zum Beispiel: "Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0". Das Web ist die Plattform.

## Windows

Windows-User-Agents haben die folgenden Variationen, wobei _x.y_ die Windows NT-Version ist (zum Beispiel, Windows NT 6.1).

| Windows-Version                     | Gecko User Agent-Zeichenkette                                                     |
| ----------------------------------- | --------------------------------------------------------------------------------- |
| Windows NT auf x86 oder aarch64 CPU | Mozilla/5.0 (Windows NT _x_._y_; rv:10.0) Gecko/20100101 Firefox/10.0             |
| Windows NT auf x64 CPU              | Mozilla/5.0 (Windows NT _x_._y_; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0 |

## macOS

Hierbei ist _x.y_ die Version von macOS (beispielsweise macOS 10.15). Ab Firefox 87 begrenzt Firefox die angegebene macOS-Versionsnummer auf 10.15, so dass macOS 11.0 Big Sur und später als "10.15" in der User-Agent-Zeichenkette angezeigt werden. Macs mit ARM-Basis werden als "Intel" in der User-Agent-Zeichenkette angezeigt.

| Mac OS X-Version                      | Gecko User Agent-Zeichenkette                                                      |
| ------------------------------------- | ---------------------------------------------------------------------------------- |
| Mac OS X auf x86, x86_64 oder aarch64 | Mozilla/5.0 (Macintosh; Intel Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0 |
| Mac OS X auf PowerPC                  | Mozilla/5.0 (Macintosh; PPC Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0   |

## Linux

Linux ist eine vielfältigere Plattform. Ihre Linux-Distribution könnte eine Erweiterung enthalten, die Ihren User-Agent ändert. Einige häufige Beispiele werden unten aufgeführt.

| Linux-Version                | Gecko User Agent-Zeichenkette                                        |
| ---------------------------- | -------------------------------------------------------------------- |
| Linux-Desktop auf i686 CPU   | Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0   |
| Linux-Desktop auf x86_64 CPU | Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0 |

## Firefox für Android

Firefox für Android enthält die Android-Version als Teil des _platform_ Tokens. Für eine größere Interoperabilität meldet der Browser, wenn er auf einer Version unter 4 läuft, die Version 4.4. Android-Versionen 4 und höher geben die Version genau an. Beachten Sie, dass das gleiche Gecko mit den gleichen Fähigkeiten auf allen Android-Versionen ausgeliefert wird.

| Formfaktor | Gecko User Agent-Zeichenkette                                      |
| ---------- | ------------------------------------------------------------------ |
| Telefon    | Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0 |
| Tablet     | Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0 |

## Focus für Android

Seit Version 1 wird Focus von Android WebView betrieben und verwendet das folgende User-Agent-Zeichenkettenformat:

```plain
Mozilla/5.0 (Linux; <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Version/4.0 Focus/<focus version> Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
```

Tablet-Versionen auf WebView spiegeln Mobilgeräte wider, enthalten jedoch kein `Mobile`-Token.

Ab Version 6 können Benutzer sich entscheiden, einen GeckoView-basierten Focus für Android mit einer versteckten Präferenz zu verwenden: Er verwendet eine GeckoView-UA-Zeichenkette, um Gecko-Kompatibilität zu bewerben.

| Focus-Version (Rendering-Engine) | User Agent-Zeichenkette                                                                                                                |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (WebView Mobile)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36 |
| 1.0 (WebView Tablet)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Safari/537.36        |
| 6.0 (GeckoView)                  | Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0                                                                     |

Der Klar-User-Agent ist derselbe wie bei [Focus](#focus_für_ios).

## Firefox für iOS

Firefox für iOS verwendet die Standard-Mobile-Safari-UA-Zeichenkette mit einem zusätzlichen **FxiOS/\<version>**-Token auf iPod und iPhone, ähnlich wie [Chrome für iOS sich identifiziert](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/ios/user_agent.md).

| Formfaktor | Firefox für iOS User Agent-Zeichenkette                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| iPod       | Mozilla/5.0 (iPod touch; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4 |
| iPhone     | Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4     |
| iPad       | Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15                       |

Auf dem iPad erscheint die User-Agent-Zeichenkette genauso wie Safari. Für verschiedene Probleme im Zusammenhang mit der Nichtaufnahme von `FxiOS` auf iOS siehe [mozilla-mobile/firefox-ios#6620](https://github.com/mozilla-mobile/firefox-ios/issues/6620).

## Focus für iOS

Version 7 von Focus für iOS verwendet eine User Agent-Zeichenkette mit folgendem Format:

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/7.0.4 Mobile/16B91 Safari/605.1.15
```

Hinweis: Dieser User Agent wurde von einem iPhone XR Simulator abgerufen und kann auf dem Gerät abweichen.

## Firefox für Fire TV

Version 3 (und wahrscheinlich frühere) von Firefox für Fire TV verwenden eine User Agent-Zeichenkette mit folgendem Format:

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefox-version> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox TV-Version | User Agent-Zeichenkette                                                                                                            |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| v3.0               | Mozilla/5.0 (Linux; Android 7.1.2) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/3.0 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox für Echo Show

Ab Version 1.1 verwendet Firefox für Echo Show eine User Agent-Zeichenkette mit folgendem Format:

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefox-version> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox für Echo Show-Version | User Agent-Zeichenkette                                                                                                            |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| v1.1                          | Mozilla/5.0 (Linux; Android 5.1.1) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.1 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox OS

| Formfaktor       | Gecko User Agent-Zeichenkette                                     |
| ---------------- | ----------------------------------------------------------------- |
| Telefon          | Mozilla/5.0 (Mobile; rv:26.0) Gecko/26.0 Firefox/26.0             |
| Tablet           | Mozilla/5.0 (Tablet; rv:26.0) Gecko/26.0 Firefox/26.0             |
| TV               | Mozilla/5.0 (TV; rv:44.0) Gecko/44.0 Firefox/44.0                 |
| Gerätespezifisch | Mozilla/5.0 (Mobile; **_nnnn;_** rv:26.0) Gecko/26.0 Firefox/26.0 |

### Gerätespezifische User Agent-Zeichenfolgen

Obwohl es von Mozilla **dringend abgeraten** wird, fügen einige Gerätehersteller leider ein Token in die UA-Zeichenkette ihres Geräts ein, das die Geräte-ID darstellt. In diesem Fall sieht die Firefox OS-UA-Zeichenkette wie die gerätespezifische Zeichenkette in der obigen Tabelle aus, wobei **_nnnn;_** der Hersteller-Code für das Gerät ist (siehe [Richtlinien](https://wiki.mozilla.org/B2G/User_Agent/Device_Model_Inclusion_Requirements)). Einige davon, die wir bemerkt haben, sind von der Form "**NexusOne;**", "**ZTEOpen;**" oder "**Open C;**" (beachten Sie, dass das Einfügen von Leerzeichen ebenfalls unerwünscht ist). Wir stellen diese Informationen zur Verfügung, um Ihre UA-Erkennungslogik zu unterstützen, aber Mozilla rät davon ab, die Geräte-ID in UA-Zeichenfolgen zu erkennen.

Hier ist ein JavaScript-Regulärer Ausdruck, der alle mobilen Geräte erkennt, einschließlich Geräte mit einer Geräte-ID in ihrer UA-Zeichenkette:

```js
/mobi/i;
```

Das `i` macht es case-insensitive, und `mobi` passt zu allen mobilen Browsern.

### Firefox OS-Versionsnummer

Obwohl die Versionsnummer für Firefox OS nicht in der UA-Zeichenkette enthalten ist, ist es möglich, Versionsinformationen aus der Gecko-Versionsnummer in der UA-Zeichenkette abzuleiten.

| Firefox OS-Versionsnummer | Gecko-Versionsnummer |
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
> Es ist einfach, die Übereinstimmungen zu finden, indem man sich die [Mercurial-Repository-Namen](https://hg.mozilla.org/releases) ansieht: Repositories, die mit `mozilla-b2g` beginnen, sind die Release-Repositories für Firefox OS und enthalten sowohl Firefox OS- als auch Gecko-Versionen in ihren Namen.

Firefox OS hat eine vierstellige Versionsnummer: `X.X.X.Y`. Die ersten beiden Ziffern werden von dem Mozilla-Produktionsteam verwaltet und bezeichnen Versionen mit neuen Funktionen (z.B.: v1.1, 1.2, etc.). Die dritte Ziffer wird bei regelmäßigen Versionstags (alle 6 Wochen) für Sicherheitsupdates erhöht, und die vierte gehört zu dem OEM.

## Siehe auch

- Empfehlungen zum [Sniffen der UA-Zeichenkette für plattformübergreifende Unterstützung](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
- [`navigator.userAgent`](/de/docs/Web/API/Window/navigator)
