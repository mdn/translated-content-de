---
title: Referenz zur Firefox User-Agent-Zeichenkette
short-title: Firefox UA-Zeichenkette
slug: Web/HTTP/Reference/Headers/User-Agent/Firefox
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Dieses Dokument beschreibt die User-Agent-Zeichenkette, die in Firefox 4 und späteren Versionen sowie in Anwendungen, die auf Gecko 2.0 und später basieren, verwendet wird. Für einen Überblick über die Änderungen der Zeichenkette in Gecko 2.0 siehe [Endgültige User-Agent-Zeichenkette für Firefox 4](https://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/) (Blogbeitrag). Siehe auch dieses Dokument über das [User-Agent-Sniffing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) und diesen [Hacks-Blogbeitrag](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/).

## Allgemeine Form

Die UA-Zeichenkette von Firefox selbst ist in vier Komponenten unterteilt:

`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version`

- `Mozilla/5.0` ist das allgemeine Token, das anzeigt, dass der Browser mit Mozilla kompatibel ist, und ist heute bei fast jedem Browser üblich.
- `platform` beschreibt die native Plattform, auf der der Browser läuft (z.B. Windows, Mac, Linux oder Android), und ob es sich um ein Mobiltelefon handelt. Firefox OS-Telefone sagen `Mobile`; das Web ist die Plattform. Beachten Sie, dass `platform` aus mehreren durch `;` getrennten Tokens bestehen kann. Siehe unten für weitere Details und Beispiele.
- `rv:gecko-version` zeigt die Veröffentlichungsversion von Gecko an (wie `17.0`).
- `Gecko/gecko-trail` weist darauf hin, dass der Browser auf Gecko basiert.
- Auf Desktop ist `gecko-trail` die feste Zeichenkette `20100101`.
- `Firefox/firefox-version` zeigt an, dass der Browser Firefox ist, und gibt die Version an (wie `17.0`).
- Ab Firefox 10 auf Mobilgeräten ist `gecko-trail` dasselbe wie `firefox-version`.

> [!NOTE]
> Die empfohlene Methode zum Sniffen für Gecko-basierte Browser (falls Sie _müssen_ den Browser-Engine sniffen, anstatt Funktionsdetektion zu verwenden) ist durch das Vorhandensein der `Gecko`- und `rv:`-Zeichenketten, da einige andere Browser ein `like Gecko`-Token enthalten.

Bei anderen auf Gecko basierenden Produkten kann die Zeichenkette eine von zwei Formen annehmen, wobei die Tokens die gleiche Bedeutung haben, außer denen, die unten aufgeführt sind:

`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail app-name/app-version`
`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version app-name/app-version`

- `app-name/app-version` gibt den Anwendungsnamen und die Version an. Zum Beispiel könnte dies `Camino/2.1.1` oder `SeaMonkey/2.7.1` sein.
- `Firefox/firefox-version` ist ein optionales Kompatibilitätstoken, das einige auf Gecko basierende Browser möglicherweise einbauen, um maximale Kompatibilität mit Websites zu erreichen, die Firefox erwarten. `firefox-version` wird im Allgemeinen die entsprechende Firefox-Version darstellen, die zu der angegebenen Gecko-Version gehört. Einige Gecko-basierte Browser entscheiden sich möglicherweise gegen die Verwendung dieses Tokens; aus diesem Grund sollten Sniffer nach Gecko suchen — nicht nach Firefox!

## Mobile- und Tablet-Indikatoren

Der `platform`-Teil der UA-Zeichenkette zeigt an, ob Firefox auf einem Telefon oder Tablet läuft. Wenn Firefox auf einem Gerät im Telefonsformfaktor läuft, gibt es ein `Mobile;`-Token im `platform`-Teil der UA-Zeichenkette. Wenn Firefox auf einem Tablet läuft, gibt es stattdessen ein `Tablet;`-Token im `platform`-Teil der UA-Zeichenkette. Zum Beispiel:

```plain
Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0
Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0
```

> [!NOTE]
> Die Versionsnummern sind nicht relevant. Vermeiden Sie es, aus diesen Schlüsse zu ziehen.

Die bevorzugte Methode, um Inhalte auf einen Geräteformfaktor auszurichten, ist die Verwendung von CSS Media Queries. Wenn jedoch UA-Sniffing verwendet wird, um Inhalte auf einen Geräteformfaktor auszurichten, suchen Sie bitte nach **Mobi** (um auch Opera Mobile einzuschließen, das "Mobi" verwendet) für den Telefonsformfaktor und unterlassen Sie jegliche Annahme einer Korrelation zwischen "Android" und dem Geräteformfaktor. Auf diese Weise wird Ihr Code funktionieren, falls/wenn Firefox auf anderen Telefon-/Tablet-Betriebssystemen ausgeliefert wird oder Android für Laptops verwendet wird. Verwenden Sie außerdem Touch-Detektion, um Touch-Geräte zu finden, anstatt nach "Mobi" oder "Tablet" zu suchen, da es Touch-Geräte geben kann, die keine Tablets sind.

> [!NOTE]
> Firefox OS-Geräte identifizieren sich ohne Angabe eines Betriebssystems; zum Beispiel: "Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0". Das Web ist die Plattform.

## Windows

Windows-User-Agents haben folgende Variationen, wobei _x.y_ die Windows NT-Version ist (zum Beispiel Windows NT 6.1).

| Windows-Version        | Gecko User-Agent-Zeichenkette                                                     |
| ---------------------- | --------------------------------------------------------------------------------- |
| Windows NT auf x86-CPU | Mozilla/5.0 (Windows NT _x_._y_; rv:10.0) Gecko/20100101 Firefox/10.0             |
| Windows NT auf x64-CPU | Mozilla/5.0 (Windows NT _x_._y_; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0 |

> [!NOTE]
> Eine aarch64-CPU wird als x86_64 unter Windows 11 und als x86 unter Windows 10 gemeldet (da es keine x64-Emulation unterstützt).
> Siehe [Bugzilla #1763310](https://bugzil.la/1763310).

## macOS

Hierbei ist _x.y_ die Version von macOS (zum Beispiel macOS 10.15). Beginnend mit Firefox 87 begrenzt Firefox die gemeldete macOS-Versionsnummer auf 10.15, sodass macOS 11.0 Big Sur und später als "10.15" in der User-Agent-Zeichenkette gemeldet werden. Macs mit ARM-basierten Prozessoren werden in der User-Agent-Zeichenkette als "Intel" gemeldet.

| macOS-Version                         | Gecko User-Agent-Zeichenkette                                                      |
| ------------------------------------- | ---------------------------------------------------------------------------------- |
| Mac OS X auf x86, x86_64 oder aarch64 | Mozilla/5.0 (Macintosh; Intel Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0 |
| Mac OS X auf PowerPC                  | Mozilla/5.0 (Macintosh; PPC Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0   |

## Linux

Linux ist eine vielfältigere Plattform. Ihre Linux-Distribution kann eine Erweiterung enthalten, die Ihren User-Agent ändert. Ein paar gängige Beispiele finden Sie unten.

| Linux-Version                | Gecko User-Agent-Zeichenkette                                        |
| ---------------------------- | -------------------------------------------------------------------- |
| Linux-Desktop auf i686 CPU   | Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0   |
| Linux-Desktop auf x86_64 CPU | Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0 |

> [!NOTE]
> In Firefox 127.0 und später wird 32-Bit x86 nun als x86_64 in der User-Agent-Zeichenkette von Firefox, [`navigator.platform`](/de/docs/Web/API/Navigator/platform) und [`navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) gemeldet (siehe [Firefox 127.0 Release Notes](https://www.mozilla.org/de/firefox/127.0/releasenotes/)).

## Firefox für Android

Firefox für Android enthält die Android-Version als Teil des _platform_-Tokens. Für erhöhte Interoperabilität wird, wenn der Browser auf einer Version unter 4 läuft, 4.4 gemeldet. Android-Versionen ab 4 berichten die Version genau. Beachten Sie, dass dasselbe Gecko — mit denselben Fähigkeiten — für alle Android-Versionen ausgeliefert wird.

| Formfaktor | Gecko User-Agent-Zeichenkette                                      |
| ---------- | ------------------------------------------------------------------ |
| Telefon    | Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0 |
| Tablet     | Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0 |

## Focus für Android

Ab Version 1 wird Focus von Android WebView betrieben und verwendet das folgende User-Agent-Zeichenkettenformat:

```plain
Mozilla/5.0 (Linux; <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Version/4.0 Focus/<focus version> Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
```

Tablet-Versionen auf WebView spiegeln mobile Versionen wider, enthalten jedoch kein `Mobile`-Token.

Ab Version 6 können Benutzer sich für die Verwendung eines GeckoView-basierten Focus für Android mit einer versteckten Voreinstellung entscheiden: Es wird eine GeckoView-UA-Zeichenkette verwendet, um Gecko-Kompatibilität zu bewerben.

| Focus-Version (Rendering-Engine) | User-Agent-Zeichenkette                                                                                                                |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (WebView Mobile)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36 |
| 1.0 (WebView Tablet)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Safari/537.36        |
| 6.0 (GeckoView)                  | Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0                                                                     |

Der Klar-User-Agent ist derselbe wie [Focus](#focus_für_ios).

## Firefox für iOS

Firefox für iOS verwendet die Standard-Mobile-Safari-UA-Zeichenkette mit einem zusätzlichen **FxiOS/\<version>** Token auf iPod und iPhone, ähnlich wie [Chrome für iOS sich selbst identifiziert](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/ios/user_agent.md).

| Formfaktor | Firefox für iOS User-Agent-Zeichenkette                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| iPod       | Mozilla/5.0 (iPod touch; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4 |
| iPhone     | Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4     |
| iPad       | Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15                       |

Auf dem iPad erscheint die User-Agent-Zeichenkette identisch wie Safari. Für verschiedene Probleme im Zusammenhang mit der Nichtaufnahme von `FxiOS` auf iOS siehe [mozilla-mobile/firefox-ios#6620](https://github.com/mozilla-mobile/firefox-ios/issues/6620).

## Focus für iOS

Version 7 von Focus für iOS verwendet eine User-Agent-Zeichenkette mit folgendem Format:

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/7.0.4 Mobile/16B91 Safari/605.1.15
```

Hinweis: Dieser User-Agent wurde von einem iPhone XR-Simulator abgerufen und kann auf dem Gerät unterschiedlich sein.

## Firefox für Fire TV

Version 3 (und wahrscheinlich frühere) von Firefox für Fire TV verwenden eine User-Agent-Zeichenkette mit folgendem Format:

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefox-version> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox TV-Version | User-Agent-Zeichenkette                                                                                                            |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| v3.0               | Mozilla/5.0 (Linux; Android 7.1.2) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/3.0 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox für Echo Show

Ab Version 1.1 verwendet Firefox für Echo Show eine User-Agent-Zeichenkette mit folgendem Format:

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefox-version> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox für Echo Show Version | User-Agent-Zeichenkette                                                                                                            |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| v1.1                          | Mozilla/5.0 (Linux; Android 5.1.1) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.1 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox OS

| Formfaktor       | Gecko User-Agent-Zeichenkette                                     |
| ---------------- | ----------------------------------------------------------------- |
| Telefon          | Mozilla/5.0 (Mobile; rv:26.0) Gecko/26.0 Firefox/26.0             |
| Tablet           | Mozilla/5.0 (Tablet; rv:26.0) Gecko/26.0 Firefox/26.0             |
| TV               | Mozilla/5.0 (TV; rv:44.0) Gecko/44.0 Firefox/44.0                 |
| Gerätespezifisch | Mozilla/5.0 (Mobile; **_nnnn;_** rv:26.0) Gecko/26.0 Firefox/26.0 |

### Gerätespezifische User-Agent-Zeichenketten

Obwohl es von Mozilla **stark entmutigt** wird, fügen einige Gerätehersteller leider ein Token in die UA-Zeichenkette ihres Geräts ein, das ihre Geräte-ID darstellt. Wenn dies der Fall ist, sieht die UA-Zeichenkette von Firefox OS wie die gerätespezifische Zeichenkette in der obigen Tabelle aus, wobei **_nnnn;_** der Herstellercode für das Gerät ist (siehe [Richtlinien](https://wiki.mozilla.org/B2G/User_Agent/Device_Model_Inclusion_Requirements)). Einige bemerkte Formen sind "**NexusOne;**", "**ZTEOpen;**" oder "**Open C;**" (beachten Sie, dass auch das Setzen eines Leerzeichens entmutigt wird). Wir stellen diese Informationen zur Verfügung, um Ihre UA-Erkennungslogik zu unterstützen, aber Mozilla rät von der Erkennung einer Geräte-ID in UA-Zeichenketten ab.

Hier ist ein JavaScript-Regulärer Ausdruck, der alle mobilen Geräte erkennt, einschließlich Geräte mit einer Geräte-ID in ihrer UA-Zeichenkette:

```js
/mobi/i;
```

Das `i` macht ihn groß-/klein-schreibungsempfindlich und `mobi` passt auf alle mobilen Browser.

### Firefox OS-Versionsnummer

Obwohl die Versionsnummer von Firefox OS nicht in der UA-Zeichenkette enthalten ist, ist es möglich, Versionsinformationen aus der Gecko-Versionsnummer in der UA-Zeichenkette abzuleiten.

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
> Die Entsprechungen lassen sich leicht finden, indem man sich die [Mercurial-Repository-Namen](https://hg-edge.mozilla.org/releases) ansieht: Repositories, die mit `mozilla-b2g` beginnen, sind die Release-Repositories für Firefox OS und haben sowohl Firefox OS- als auch Gecko-Versionen in ihren Namen.

Firefox OS hat eine vierstellige Versionsnummer: `X.X.X.Y`. Die ersten beiden Ziffern werden vom Mozilla-Produktionsteam verwaltet und kennzeichnen Versionen mit neuen Funktionen (z.B.: v1.1, 1.2, etc.). Die dritte Ziffer wird bei regulären Versionstags (etwa alle 6 Wochen) für Sicherheitsupdates erhöht, und die vierte wird vom OEM verwaltet.

## Siehe auch

- Empfehlungen zum [Sniffen der UA-Zeichenkette für plattformübergreifende Unterstützung](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
- [`navigator.userAgent`](/de/docs/Web/API/Window/navigator)
