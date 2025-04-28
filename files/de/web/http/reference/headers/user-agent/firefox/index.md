---
title: Referenz zur Firefox User-Agent-Zeichenkette
slug: Web/HTTP/Reference/Headers/User-Agent/Firefox
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{HTTPSidebar}}

Dieses Dokument beschreibt die User-Agent-Zeichenkette, die in Firefox 4 und später sowie in Anwendungen basierend auf Gecko 2.0 und später verwendet wird. Für eine Aufschlüsselung der Änderungen an der Zeichenkette in Gecko 2.0 siehe [Final User Agent string for Firefox 4](https://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/) (Blogbeitrag). Siehe auch dieses Dokument über [User-Agent-Erkennung](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) und diesen [Hacks-Blogbeitrag](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/).

## Allgemeines Format

Die UA-Zeichenkette von Firefox selbst wird in vier Komponenten unterteilt:

`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version`

- `Mozilla/5.0` ist das allgemeine Token, das besagt, dass der Browser mit Mozilla kompatibel ist, und dies ist heute bei fast jedem Browser üblich.
- `platform` beschreibt die native Plattform, auf der der Browser läuft (z.B. Windows, Mac, Linux oder Android), und ob es sich um ein Mobiltelefon handelt oder nicht. Firefox OS-Telefone zeigen `Mobile`; das Web ist die Plattform. Beachten Sie, dass `platform` aus mehreren durch `;` getrennten Token bestehen kann. Siehe unten für weitere Details und Beispiele.

- `rv:gecko-version` gibt die Veröffentlichungsversion von Gecko an (z. B. `17.0`).
- `Gecko/gecko-trail` zeigt an, dass der Browser auf Gecko basiert.
- Auf dem Desktop lautet `gecko-trail` die feste Zeichenkette `20100101`.
- `Firefox/firefox-version` gibt an, dass der Browser Firefox ist und liefert die Version (z. B. `17.0`).
- Ab Firefox 10 auf Mobilgeräten entspricht `gecko-trail` der `firefox-version`.

> [!NOTE]
> Der empfohlene Weg, Gecko-basierte Browser zu erkennen (wenn Sie _müssen_ den Browser-Engine erkennen anstelle der Funktionsaustastung), ist durch das Vorhandensein der `Gecko`- und `rv:`-Zeichenfolgen, da einige andere Browser ein `like Gecko`-Token enthalten.

Für andere Produkte, die auf Gecko basieren, kann die Zeichenkette eine von zwei Formen annehmen, wobei die Token dieselbe Bedeutung haben, außer den unten angegebenen:

`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail app-name/app-version`
`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version app-name/app-version`

- `app-name/app-version` zeigt den Anwendungsnamen und die Version an. Dies könnte zum Beispiel `Camino/2.1.1` oder `SeaMonkey/2.7.1` sein.
- `Firefox/firefox-version` ist ein optionales Kompatibilitätstoken, das einige Gecko-basierte Browser möglicherweise integrieren, um maximale Kompatibilität mit Websites zu erzielen, die Firefox erwarten. `firefox-version` wird im Allgemeinen die äquivalente Firefox-Version darstellen, die der gegebenen Gecko-Version entspricht. Einige Gecko-basierte Browser entscheiden sich möglicherweise nicht für die Verwendung dieses Tokens; aus diesem Grund sollten Erkennungsprogramme nach Gecko suchen — nicht nach Firefox!

## Indikatoren für Mobil- und Tablet-Geräte

Der `platform`-Teil der UA-Zeichenkette zeigt an, ob Firefox auf einem Telefon- oder Tablet-Gerät läuft. Wenn Firefox auf einem Gerät ausgeführt wird, das die Telefonform hat, gibt es ein `Mobile;`-Token im `platform`-Teil der UA-Zeichenkette. Wenn Firefox auf einem Tablet-Gerät läuft, gibt es stattdessen ein `Tablet;`-Token im `platform`-Teil der UA-Zeichenkette. Zum Beispiel:

```plain
Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0
Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0
```

> [!NOTE]
> Die Versionsnummern sind nicht relevant. Vermeiden Sie es, Rückschlüsse darauf zu ziehen.

Der bevorzugte Weg, um Inhalte an eine Geräteform anzupassen, ist die Verwendung von CSS Media Queries. Falls Sie jedoch UA-Sniffing nutzen, um Inhalte an eine Geräteform anzupassen, suchen Sie bitte nach **Mobi** (um Opera Mobile einzuschließen, das "Mobi" verwendet) für die Telefonform und nehmen Sie **nicht** an, dass "Android" irgendeinen Zusammenhang mit der Geräteform hat. Auf diese Weise funktioniert Ihr Code, falls/wenn Firefox auf anderen Telefon-/Tablet-Betriebssystemen angeboten wird oder Android für Laptops verwendet wird. Verwenden Sie außerdem bitte Touch-Erkennung, um Touch-Geräte zu finden, anstatt nach "Mobi" oder "Tablet" zu suchen, da es möglicherweise Touch-Geräte gibt, die keine Tablets sind.

> [!NOTE]
> Firefox OS-Geräte identifizieren sich, ohne ein spezifisches Betriebssystem anzugeben; zum Beispiel: "Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0". Das Web ist die Plattform.

## Windows

Windows User-Agents haben die folgenden Variationen, wobei _x.y_ die Windows NT-Version ist (zum Beispiel Windows NT 6.1).

| Windows-Version                     | Gecko User-Agent-Zeichenkette                                                     |
| ----------------------------------- | --------------------------------------------------------------------------------- |
| Windows NT auf x86 oder aarch64 CPU | Mozilla/5.0 (Windows NT _x_._y_; rv:10.0) Gecko/20100101 Firefox/10.0             |
| Windows NT auf x64 CPU              | Mozilla/5.0 (Windows NT _x_._y_; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0 |

## macOS

Hierbei ist _x.y_ die Version von macOS (zum Beispiel macOS 10.15). Ab Firefox 87 beschränkt Firefox die gemeldete macOS-Versionsnummer auf 10.15, sodass macOS 11.0 Big Sur und später als "10.15" in der User-Agent-Zeichenkette gemeldet werden. ARM-basierte Macs werden in der User-Agent-Zeichenkette als "Intel" angegeben.

| Mac OS X-Version                      | Gecko User-Agent-Zeichenkette                                                      |
| ------------------------------------- | ---------------------------------------------------------------------------------- |
| Mac OS X auf x86, x86_64 oder aarch64 | Mozilla/5.0 (Macintosh; Intel Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0 |
| Mac OS X auf PowerPC                  | Mozilla/5.0 (Macintosh; PPC Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0   |

## Linux

Linux ist eine vielfältigere Plattform. Ihre Linux-Distribution könnte eine Erweiterung enthalten, die Ihren User-Agent ändert. Einige gängige Beispiele sind unten aufgeführt.

| Linux-Version                | Gecko User-Agent-Zeichenkette                                        |
| ---------------------------- | -------------------------------------------------------------------- |
| Linux-Desktop auf i686 CPU   | Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0   |
| Linux-Desktop auf x86_64 CPU | Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0 |

## Firefox für Android

Firefox für Android enthält die Android-Version als Teil des _platform_-Tokens. Für eine erhöhte Interoperabilität wird, wenn der Browser auf einer Version unter 4 läuft, 4.4 gemeldet. Android-Versionen 4 und höher melden die Version korrekt. Beachten Sie, dass dasselbe Gecko — mit denselben Fähigkeiten — für alle Android-Versionen ausgeliefert wird.

| Formfaktor | Gecko User-Agent-Zeichenkette                                      |
| ---------- | ------------------------------------------------------------------ |
| Phone      | Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0 |
| Tablet     | Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0 |

## Focus für Android

Ab Version 1 wird Focus von Android WebView betrieben und verwendet das folgende User-Agent-Zeichenkettenformat:

```plain
Mozilla/5.0 (Linux; <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Version/4.0 Focus/<focus version> Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
```

Tablet-Versionen auf WebView erscheinen gleich wie auf Mobilgeräten, enthalten jedoch kein `Mobile`-Token.

Ab Version 6 können Benutzer die Verwendung eines GeckoView-basierten Focus für Android mit einer versteckten Voreinstellung aktivieren: dabei wird eine GeckoView-User-Agent-Zeichenkette zur Anzeige der Gecko-Kompatibilität verwendet.

| Focus-Version (Rendering-Engine) | User-Agent-Zeichenkette                                                                                                                |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (WebView Mobile)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36 |
| 1.0 (WebView Tablet)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Safari/537.36        |
| 6.0 (GeckoView)                  | Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0                                                                     |

Der Klar User-Agent ist derselbe wie bei [Focus](#focus_für_ios).

## Firefox für iOS

Firefox für iOS verwendet die Standardeinstellung für die Mobile Safari-User-Agent-Zeichenkette, mit einem zusätzlichen **FxiOS/\<version>**-Token auf iPod und iPhone, ähnlich wie [Chrome für iOS sich selbst identifiziert](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/ios/user_agent.md).

| Formfaktor | Firefox für iOS User-Agent-Zeichenkette                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| iPod       | Mozilla/5.0 (iPod touch; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4 |
| iPhone     | Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4     |
| iPad       | Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15                       |

Auf dem iPad erscheint die User-Agent-Zeichenkette identisch wie Safari. Für verschiedene Probleme im Zusammenhang mit der Nichtaufnahme von `FxiOS` auf iOS, siehe [mozilla-mobile/firefox-ios#6620](https://github.com/mozilla-mobile/firefox-ios/issues/6620).

## Focus für iOS

Version 7 von Focus für iOS verwendet eine User-Agent-Zeichenkette mit dem folgenden Format:

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/7.0.4 Mobile/16B91 Safari/605.1.15
```

Hinweis: Dieser User-Agent wurde von einem iPhone XR-Simulator abgerufen und könnte sich auf einem Gerät unterscheiden.

## Firefox für Fire TV

Version 3 (und wahrscheinlich frühere) von Firefox für Fire TV verwendet eine User-Agent-Zeichenkette mit dem folgenden Format:

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefox-version> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox TV-Version | User-Agent-Zeichenkette                                                                                                            |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| v3.0               | Mozilla/5.0 (Linux; Android 7.1.2) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/3.0 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox für Echo Show

Ab Version 1.1 verwendet Firefox für Echo Show eine User-Agent-Zeichenkette mit dem folgenden Format:

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefox-version> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox für Echo Show-Version | User-Agent-Zeichenkette                                                                                                            |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| v1.1                          | Mozilla/5.0 (Linux; Android 5.1.1) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.1 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox OS

| Formfaktor       | Gecko User-Agent-Zeichenkette                                     |
| ---------------- | ----------------------------------------------------------------- |
| Phone            | Mozilla/5.0 (Mobile; rv:26.0) Gecko/26.0 Firefox/26.0             |
| Tablet           | Mozilla/5.0 (Tablet; rv:26.0) Gecko/26.0 Firefox/26.0             |
| TV               | Mozilla/5.0 (TV; rv:44.0) Gecko/44.0 Firefox/44.0                 |
| Gerätespezifisch | Mozilla/5.0 (Mobile; **_nnnn;_** rv:26.0) Gecko/26.0 Firefox/26.0 |

### Gerätespezifische User-Agent-Zeichenfolgen

Obwohl es **stark abgeraten** wird von Mozilla, enthalten einige Gerätehersteller leider ein Token in der UA-Zeichenfolge ihres Geräts, das deren Geräte-ID darstellt. Wenn dies der Fall ist, sieht die Firefox OS UA-Zeichenkette aus wie die gerätespezifische Zeichenfolge in der obigen Tabelle, wobei **_nnnn;_** der Hersteller-Code für das Gerät ist (siehe [Richtlinien](https://wiki.mozilla.org/B2G/User_Agent/Device_Model_Inclusion_Requirements)). Einige von ihnen, welche wir bemerkt haben, sind von der Form "**NexusOne;**", "**ZTEOpen;**" oder "**Open C;**" (beachten Sie, dass auch von der Verwendung von Leerzeichen abgeraten wird). Wir stellen diese Information zur Verfügung, um Ihre UA-Erkennungslogik zu unterstützen, aber Mozilla rät von der Erkennung einer Geräte-ID in UA-Zeichenfolgen ab.

Hier ist ein JavaScript-Regulärer-Ausdruck, der alle mobilen Geräte erkennt, einschließlich Geräte mit einer Geräte-ID in ihrer UA-Zeichenfolge:

```js
/mobi/i;
```

Das `i` macht ihn case-insensitive, und `mobi` erfasst alle mobilen Browser.

### Firefox OS Versionsnummer

Während die Versionsnummer für Firefox OS nicht in der UA-Zeichenfolge enthalten ist, ist es möglich, Versionsinformationen aus der Gecko-Versionsnummer in der UA-Zeichenfolge abzuleiten.

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
> Es ist einfach, die Entsprechungen zu finden, indem man sich die [Mercurial-Repository-Namen](https://hg-edge.mozilla.org/releases) ansieht: Repositories, die mit `mozilla-b2g` beginnen, sind die Release-Repositories für Firefox OS und enthalten sowohl Firefox OS- als auch Gecko-Versionen in ihren Namen.

Firefox OS hat eine vierstellige Versionsnummer: `X.X.X.Y`. Die ersten beiden Ziffern gehören dem Mozilla-Produktionsteam und kennzeichnen Versionen mit neuen Funktionen (z. B.: v1.1, 1.2, usw.). Die dritte Ziffer wird mit regulären Versions-Tags erhöht (etwa alle 6 Wochen) für Sicherheitsupdates, und die vierte gehört dem OEM.

## Siehe auch

- Empfehlungen zum [Erkennen der UA-Zeichenkette für plattformübergreifende Unterstützung](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
- [`navigator.userAgent`](/de/docs/Web/API/Window/navigator)
