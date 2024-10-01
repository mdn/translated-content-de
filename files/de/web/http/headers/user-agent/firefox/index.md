---
title: Referenz zur Firefox User-Agent-Zeichenkette
slug: Web/HTTP/Headers/User-Agent/Firefox
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Dieses Dokument beschreibt die User-Agent-Zeichenkette, die in Firefox 4 und später sowie Anwendungen basierend auf Gecko 2.0 und später verwendet wird. Für eine Aufschlüsselung der Änderungen an der Zeichenkette in Gecko 2.0 siehe [Final User Agent string for Firefox 4](https://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/) (Blogbeitrag). Siehe auch dieses Dokument zum [User-Agent-Sniffing](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent) und diesen [Hacks Blogbeitrag](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/).

## Allgemeine Form

Die UA-Zeichenkette von Firefox selbst ist in vier Komponenten unterteilt:

`Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion`

- `Mozilla/5.0` ist das allgemeine Token, das besagt, dass der Browser mit Mozilla kompatibel ist und ist heute bei fast jedem Browser üblich.
- `platform` beschreibt die native Plattform, auf der der Browser läuft (z.B. Windows, Mac, Linux oder Android), und ob es sich um ein Mobiltelefon handelt. Firefox OS-Telefone sagen `Mobile`; das Web ist die Plattform. Beachten Sie, dass `platform` aus mehreren durch `;` getrennten Tokens bestehen kann. Siehe unten für weitere Details und Beispiele.

- `rv:geckoversion` gibt die Release-Version von Gecko an (z.B. `17.0`).
- `Gecko/geckotrail` gibt an, dass der Browser auf Gecko basiert.
- Auf Desktop ist `geckotrail` die feste Zeichenkette `20100101`.
- `Firefox/firefoxversion` zeigt an, dass der Browser Firefox ist und gibt die Version an (z.B. `17.0`).
- Ab Firefox 10 mobil ist `geckotrail` dasselbe wie `firefoxversion`.

> [!NOTE]
> Die empfohlene Methode für das Sniffing von Gecko-basierten Browsern (falls Sie _den Browser-Engine_ statt der Feature-Erkennung sniffen müssen) besteht in der Anwesenheit der `Gecko`- und `rv:`-Zeichenketten, da einige andere Browser ein `like Gecko`-Token beinhalten.

Für andere Produkte, die auf Gecko basieren, kann die Zeichenkette eine von zwei Formen annehmen, wobei die Tokens die gleiche Bedeutung haben, außer den unten genannten:

`Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail appname/appversion`
`Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion appname/appversion`

- `appname/appversion` gibt den Namen und die Version der Anwendung an. Dies könnte zum Beispiel `Camino/2.1.1` oder `SeaMonkey/2.7.1` sein.
- `Firefox/firefoxversion` ist ein optionales Kompatibilitätstoken, das einige Gecko-basierte Browser einfügen können, um maximale Kompatibilität mit Websites zu erreichen, die Firefox erwarten. `firefoxversion` wird im Allgemeinen die äquivalente Firefox-Version repräsentieren, die der gegebenen Gecko-Version entspricht. Einige Gecko-basierte Browser könnten sich entscheiden, dieses Token nicht zu verwenden; aus diesem Grund sollten Sniffer nach Gecko und nicht nach Firefox suchen!

## Mobile und Tablet-Indikatoren

Der `platform`-Teil der UA-Zeichenkette gibt an, ob Firefox auf einem Telefon- oder Tablet-Gerät läuft. Wenn Firefox auf einem Gerät mit Telefon-Formfaktor läuft, gibt es ein `Mobile;`-Token im `platform`-Teil der UA-Zeichenkette. Wenn Firefox auf einem Tablet-Gerät läuft, gibt es stattdessen ein `Tablet;`-Token im `platform`-Teil der UA-Zeichenkette. Zum Beispiel:

```plain
Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0
Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0
```

> [!NOTE]
> Die Versionsnummern sind nicht relevant. Vermeiden Sie es, Material auf Basis dieser zu erschließen.

Der bevorzugte Weg, um Inhalte an einen Geräteformfaktor anzupassen, ist die Verwendung von CSS Media Queries. Falls Sie jedoch UA-Sniffing verwenden, um Inhalte an einen Geräteformfaktor anzupassen, achten Sie darauf, nach **Mobi** (um auch Opera Mobile einzubeziehen, welches "Mobi" verwendet) für den Telefon-Formfaktor zu suchen und **nicht** eine Verbindung zwischen "Android" und dem Geräteformfaktor anzunehmen. Auf diese Weise wird Ihr Code funktionieren, wenn/wenn Firefox auf anderen Telefon-/Tablet-Betriebssystemen erscheint oder Android für Laptops verwendet wird. Verwenden Sie bitte auch eine Berührungsdetektion, um Touchgeräte zu identifizieren, anstatt nach "Mobi" oder "Tablet" zu suchen, da es Touchgeräte geben kann, die keine Tablets sind.

> [!NOTE]
> Firefox OS-Geräte identifizieren sich ohne eine Betriebssystemangabe; zum Beispiel: "Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0". Das Web ist die Plattform.

## Windows

Windows User-Agents haben die folgenden Variationen, wobei _x.y_ die Windows NT-Version ist (z.B. Windows NT 6.1).

| Windows-Version                     | Gecko-User-Agent-Zeichenkette                                                     |
| ----------------------------------- | --------------------------------------------------------------------------------- |
| Windows NT auf x86 oder aarch64 CPU | Mozilla/5.0 (Windows NT _x_._y_; rv:10.0) Gecko/20100101 Firefox/10.0             |
| Windows NT auf x64 CPU              | Mozilla/5.0 (Windows NT _x_._y_; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0 |

## MacOS

Hier ist _x.y_ die Version von macOS (z.B. macOS 10.15). Ab Firefox 87 begrenzt Firefox die gemeldete macOS-Version auf 10.15, sodass macOS 11.0 Big Sur und später als "10.15" in der User-Agent-Zeichenkette gemeldet werden. ARM-basierte Macs werden als "Intel" in der User-Agent-Zeichenkette gemeldet.

| Mac OS X-Version                      | Gecko-User-Agent-Zeichenkette                                                      |
| ------------------------------------- | ---------------------------------------------------------------------------------- |
| Mac OS X auf x86, x86_64 oder aarch64 | Mozilla/5.0 (Macintosh; Intel Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0 |
| Mac OS X auf PowerPC                  | Mozilla/5.0 (Macintosh; PPC Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0   |

## Linux

Linux ist eine vielfältigere Plattform. Ihre Linux-Distribution könnte eine Erweiterung beinhalten, die Ihren User-Agent ändert. Einige häufige Beispiele sind unten aufgeführt.

| Linux-Version                | Gecko-User-Agent-Zeichenkette                                        |
| ---------------------------- | -------------------------------------------------------------------- |
| Linux-Desktop auf i686 CPU   | Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0   |
| Linux-Desktop auf x86_64 CPU | Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0 |

## Firefox für Android

Firefox für Android enthält die Android-Version als Teil des _platform_-Tokens. Für bessere Interoperabilität meldet der Browser, wenn er auf einer Version unter 4 läuft, die Version 4.4. Android-Versionen 4 und höher melden die Version genau. Beachten Sie, dass dasselbe Gecko — mit denselben Fähigkeiten — auf allen Android-Versionen ausgeliefert wird.

| Formfaktor | Gecko-User-Agent-Zeichenkette                                      |
| ---------- | ------------------------------------------------------------------ |
| Telefon    | Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0 |
| Tablet     | Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0 |

## Focus für Android

Ab Version 1 wird Focus von Android WebView unterstützt und verwendet das folgende User-Agent-Zeichenkettenformat:

```plain
Mozilla/5.0 (Linux; <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Version/4.0 Focus/<focusversion> Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
```

Tablet-Versionen auf WebView spiegeln die mobile Version wider, enthalten jedoch kein `Mobile`-Token.

Ab Version 6 können Benutzer sich für einen auf GeckoView basierenden Focus für Android entscheiden, indem sie eine versteckte Einstellung verwenden: Er nutzt eine GeckoView-UA-Zeichenkette, um Gecko-Kompatibilität zu werben.

| Focus-Version (Rendering-Engine) | User-Agent-Zeichenkette                                                                                                                |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (WebView Mobile)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36 |
| 1.0 (WebView Tablet)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Safari/537.36        |
| 6.0 (GeckoView)                  | Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0                                                                     |

Der Klar User-Agent ist derselbe wie bei [Focus](#focus_für_ios).

## Firefox für iOS

Firefox für iOS verwendet die Standard-Mobile-Safari-UA-Zeichenkette mit einem zusätzlichen **FxiOS/\<version>**-Token auf iPod und iPhone, ähnlich wie [Chrome für iOS sich selbst identifiziert](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/ios/user_agent.md).

| Formfaktor | Firefox für iOS User-Agent-Zeichenkette                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| iPod       | Mozilla/5.0 (iPod touch; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4 |
| iPhone     | Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4     |
| iPad       | Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15                       |

Auf dem iPad erscheint die User-Agent-Zeichenkette identisch zu Safari. Für verschiedene Probleme im Zusammenhang mit dem Nicht-Einschluss von `FxiOS` auf iOS siehe [mozilla-mobile/firefox-ios#6620](https://github.com/mozilla-mobile/firefox-ios/issues/6620).

## Focus für iOS

Version 7 von Focus für iOS verwendet eine User-Agent-Zeichenkette mit folgendem Format:

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/7.0.4 Mobile/16B91 Safari/605.1.15
```

Hinweis: Dieser User-Agent wurde aus einem iPhone XR-Simulator abgerufen und kann auf einem Gerät unterschiedlich sein.

## Firefox für Fire TV

Version 3 (und wahrscheinlich früher) von Firefox für Fire TV verwendet eine User-Agent-Zeichenkette mit folgendem Format:

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefoxversion> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox TV-Version | User-Agent-Zeichenkette                                                                                                            |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| v3.0               | Mozilla/5.0 (Linux; Android 7.1.2) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/3.0 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox für Echo Show

Ab Version 1.1 verwendet Firefox für Echo Show eine User-Agent-Zeichenkette mit folgendem Format:

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefoxversion> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox für Echo Show Version | User-Agent-Zeichenkette                                                                                                            |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| v1.1                          | Mozilla/5.0 (Linux; Android 5.1.1) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.1 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox OS

| Formfaktor       | Gecko-User-Agent-Zeichenkette                                     |
| ---------------- | ----------------------------------------------------------------- |
| Telefon          | Mozilla/5.0 (Mobile; rv:26.0) Gecko/26.0 Firefox/26.0             |
| Tablet           | Mozilla/5.0 (Tablet; rv:26.0) Gecko/26.0 Firefox/26.0             |
| TV               | Mozilla/5.0 (TV; rv:44.0) Gecko/44.0 Firefox/44.0                 |
| Gerät-spezifisch | Mozilla/5.0 (Mobile; **_nnnn;_** rv:26.0) Gecko/26.0 Firefox/26.0 |

### Gerät-spezifische User-Agent-Zeichenketten

Obwohl es von Mozilla **stark abgeraten** wird, fügen einige Gerätehersteller bedauerlicherweise ein Token in die User-Agent-Zeichenkette ihres Geräts ein, das deren Geräte-ID repräsentiert. Wenn dies der Fall ist, sieht die Firefox OS-UA-Zeichenkette aus wie die Gerät-spezifische Zeichenkette in der Tabelle oben, wobei **_nnnn;_** der Herstellercode für das Gerät ist (siehe [Richtlinien](https://wiki.mozilla.org/B2G/User_Agent/Device_Model_Inclusion_Requirements)). Einige von ihnen, die wir bemerkt haben, sind von der Form "**NexusOne;**", "**ZTEOpen;**" oder "**Open C;**" (beachten Sie, dass das Einfügen von Leerzeichen ebenfalls nicht empfohlen wird). Wir stellen diese Informationen zur Verfügung, um Ihnen bei Ihrer UA-Erkennung zu helfen, aber Mozilla rät von der Erkennung einer Geräte-ID in UA-Zeichenketten ab.

Hier ist ein JavaScript-Regulärer-Ausdruck, der alle mobilen Geräte erkennt, einschließlich Geräte mit einer Geräte-ID in ihrer UA-Zeichenkette:

```js
/mobi/i;
```

Das `i` macht es nicht auf Groß- und Kleinschreibung empfindlich, und `mobi` erkennt alle mobilen Browser.

### Firefox OS Versionsnummer

Obwohl die Versionsnummer für Firefox OS nicht in der UA-Zeichenkette enthalten ist, ist es möglich, Versionsinformationen von der Gecko-Versionsnummer abzuleiten, die in der UA-Zeichenkette vorhanden ist.

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
> Es ist einfach, die Entsprechungen zu finden, indem man sich die [Mercurial-Repository-Namen](https://hg.mozilla.org/releases) ansieht: Repositorys, die mit `mozilla-b2g` beginnen, sind die Release-Repositorys für Firefox OS und haben sowohl Firefox OS als auch Gecko-Versionen in ihren Namen.

Firefox OS hat eine vierstellige Versionsnummer: `X.X.X.Y`. Die ersten beiden Ziffern gehören zum Mozilla-Produktteam und kennzeichnen Versionen mit neuen Funktionen (z.B.: v1.1, 1.2, etc.). Die dritte Ziffer wird mit regulären Versionstags (etwa alle 6 Wochen) für Sicherheitsupdates inkrementiert, und die vierte gehört zum OEM.

## Siehe auch

- Empfehlungen zu [UA-Zeichenkette für plattformübergreifende Unterstützung sniffern](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- [`navigator.userAgent`](/de/docs/Web/API/Window/navigator)
