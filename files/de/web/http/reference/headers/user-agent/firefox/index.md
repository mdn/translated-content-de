---
title: Referenz für den Benutzeragenten-String von Firefox
slug: Web/HTTP/Reference/Headers/User-Agent/Firefox
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Dieses Dokument beschreibt den Benutzeragenten-String, der in Firefox 4 und später sowie in Anwendungen verwendet wird, die auf Gecko 2.0 und später basieren. Für eine Aufschlüsselung der Änderungen am String in Gecko 2.0 siehe [Final User Agent string for Firefox 4](https://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/) (Blogbeitrag). Siehe auch dieses Dokument zur [Analyse von Benutzeragenten](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) und diesen [Hacks Blogbeitrag](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/).

## Allgemeine Form

Der UA-String von Firefox selbst ist in vier Komponenten aufgeteilt:

`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version`

- `Mozilla/5.0` ist das allgemeine Token, das angibt, dass der Browser mit Mozilla kompatibel ist, und ist heute bei fast jedem Browser üblich.
- `platform` beschreibt die native Plattform, auf der der Browser läuft (z. B. Windows, Mac, Linux oder Android), und ob es sich um ein Mobiltelefon handelt. Firefox OS Telefone geben `Mobile` an; das Web ist die Plattform. Beachten Sie, dass `platform` aus mehreren durch `;`-getrennten Tokens bestehen kann. Siehe unten für weitere Details und Beispiele.

- `rv:gecko-version` gibt die Release-Version von Gecko an (wie `17.0`).
- `Gecko/gecko-trail` zeigt an, dass der Browser auf Gecko basiert.
- Auf dem Desktop ist `gecko-trail` der feste String `20100101`.
- `Firefox/firefox-version` gibt an, dass der Browser Firefox ist, und gibt die Version an (wie `17.0`).
- Ab Firefox 10 auf mobilen Geräten ist `gecko-trail` dasselbe wie `firefox-version`.

> [!NOTE]
> Der empfohlene Weg, um nach Gecko-basierten Browsern zu suchen (wenn Sie _müssen_ auf die Browser-Engine und nicht auf die Feature-Erkennung achten), ist die Anwesenheit der Strings `Gecko` und `rv:`, da einige andere Browser ein `like Gecko`-Token einschließen.

Bei anderen Produkten, die auf Gecko basieren, kann der String eine von zwei Formen annehmen, wobei die Tokens die gleiche Bedeutung haben, außer den unten genannten:

`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail appname/appversion`
`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version appname/appversion`

- `appname/appversion` gibt den Anwendungsnamen und die Version an. Zum Beispiel könnte dies `Camino/2.1.1` oder `SeaMonkey/2.7.1` sein.
- `Firefox/firefox-version` ist ein optionales Kompatibilitätstoken, das einige Gecko-basierte Browser einfügen können, um maximale Kompatibilität mit Websites zu erreichen, die Firefox erwarten. `firefox-version` wird im Allgemeinen die gleichwertige Firefox-Version darstellen, die der angegebenen Gecko-Version entspricht. Einige Gecko-basierte Browser können sich entscheiden, dieses Token nicht zu verwenden; aus diesem Grund sollten Sniffer nach Gecko und nicht nach Firefox suchen!

## Indikatoren für Handy und Tablet

Der Teil `platform` des UA-Strings gibt an, ob Firefox auf einem Handy- oder Tablet-Gerät läuft. Wenn Firefox auf einem Gerät ausgeführt wird, das den Handy-Formfaktor hat, befindet sich ein `Mobile;`-Token im `platform`-Teil des UA-Strings. Wenn Firefox auf einem Tablet-Gerät ausgeführt wird, befindet sich stattdessen ein `Tablet;`-Token im `platform`-Teil des UA-Strings. Zum Beispiel:

```plain
Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0
Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0
```

> [!NOTE]
> Die Versionsnummern sind nicht relevant. Vermeiden Sie Schlussfolgerungen auf Material basierend auf diesen.

Der bevorzugte Weg, um Inhalte an einen Geräteformfaktor anzupassen, ist die Verwendung von CSS Media Queries. Wenn Sie jedoch UA-Sniffing verwenden, um Inhalte an einen Geräteformfaktor anzupassen, suchen Sie bitte nach **Mobi** (um Opera Mobile einzuschließen, das "Mobi" verwendet) für den Handy-Formfaktor und **nehmen Sie nicht** an, dass es einen Zusammenhang zwischen "Android" und dem Geräteformfaktor gibt. Auf diese Weise funktioniert Ihr Code, wenn/verwendet Firefox andere Handy/Tablet-Betriebssysteme oder Android für Laptops einsetzt. Verwenden Sie auch die Touch-Erkennung, um Touch-Geräte zu finden, anstatt nach "Mobi" oder "Tablet" zu suchen, da es Touch-Geräte geben kann, die keine Tablets sind.

> [!NOTE]
> Firefox OS-Geräte identifizieren sich ohne jeden Hinweis auf ein Betriebssystem; zum Beispiel: "Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0". Das Web ist die Plattform.

## Windows

Windows-Benutzeragenten haben die folgenden Variationen, wobei _x.y_ die Version von Windows NT ist (zum Beispiel Windows NT 6.1).

| Windows-Version                     | Gecko-Benutzeragenten-String                                                      |
| ----------------------------------- | --------------------------------------------------------------------------------- |
| Windows NT auf x86 oder aarch64 CPU | Mozilla/5.0 (Windows NT _x_._y_; rv:10.0) Gecko/20100101 Firefox/10.0             |
| Windows NT auf x64 CPU              | Mozilla/5.0 (Windows NT _x_._y_; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0 |

## macOS

Hierbei ist _x.y_ die Version von macOS (zum Beispiel macOS 10.15). Ab Firefox 87 begrenzt Firefox die gemeldete macOS-Versionsnummer auf 10.15, sodass macOS 11.0 Big Sur und später als „10.15“ im User-Agent-String angegeben werden. ARM-basierte Macs werden im User-Agent-String als „Intel“ gemeldet.

| Mac OS X-Version                       | Gecko-Benutzeragenten-String                                                       |
| -------------------------------------- | ---------------------------------------------------------------------------------- |
| Mac OS X auf x86, x86_64, oder aarch64 | Mozilla/5.0 (Macintosh; Intel Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0 |
| Mac OS X auf PowerPC                   | Mozilla/5.0 (Macintosh; PPC Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0   |

## Linux

Linux ist eine vielfältigere Plattform. Ihre Linux-Distribution kann eine Erweiterung enthalten, die Ihren Benutzeragenten ändert. Nachfolgend sind einige gängige Beispiele aufgeführt.

| Linux-Version                | Gecko-Benutzeragenten-String                                         |
| ---------------------------- | -------------------------------------------------------------------- |
| Linux-Desktop auf i686 CPU   | Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0   |
| Linux-Desktop auf x86_64 CPU | Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0 |

## Firefox für Android

Firefox für Android enthält die Android-Version als Teil des _platform_-Tokens. Für eine erhöhte Interoperabilität wird, wenn der Browser auf einer Version unter 4 läuft, 4.4 gemeldet. Android-Versionen 4 und höher melden die Version genau. Beachten Sie, dass das gleiche Gecko mit den gleichen Fähigkeiten an alle Android-Versionen ausgeliefert wird.

| Formfaktor | Gecko-Benutzeragenten-String                                       |
| ---------- | ------------------------------------------------------------------ |
| Handy      | Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0 |
| Tablet     | Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0 |

## Focus für Android

Ab Version 1 wird Focus von Android WebView angesteuert und verwendet das folgende Benutzeragenten-String-Format:

```plain
Mozilla/5.0 (Linux; <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Version/4.0 Focus/<focus version> Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
```

Tablet-Versionen auf WebView spiegeln Mobile wider, enthalten jedoch kein `Mobile`-Token.

Ab Version 6 können Benutzer in eine GeckoView-basierte Focus für Android-Version mit einer versteckten Voreinstellung wechseln. Diese verwendet einen GeckoView-UA-String, um die Gecko-Kompatibilität zu bewerben.

| Focus-Version (Rendering-Engine) | Benutzeragenten-String                                                                                                                 |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (WebView Mobile)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36 |
| 1.0 (WebView Tablet)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Safari/537.36        |
| 6.0 (GeckoView)                  | Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0                                                                     |

Der Klar-Benutzeragent ist derselbe wie [Focus](#focus_für_ios).

## Firefox für iOS

Firefox für iOS verwendet den standardmäßigen Mobile Safari UA-String, mit einem zusätzlichen **FxiOS/\<version>**-Token auf iPod und iPhone, ähnlich wie [Chrome für iOS sich identifiziert](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/ios/user_agent.md).

| Formfaktor | Firefox für iOS-Benutzeragenten-String                                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| iPod       | Mozilla/5.0 (iPod touch; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4 |
| iPhone     | Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4     |
| iPad       | Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15                       |

Auf dem iPad erscheint der Benutzeragenten-String identisch wie Safari. Für verschiedene Probleme im Zusammenhang mit der Nicht-Aufnahme von `FxiOS` auf iOS siehe [mozilla-mobile/firefox-ios#6620](https://github.com/mozilla-mobile/firefox-ios/issues/6620).

## Focus für iOS

Version 7 von Focus für iOS verwendet einen Benutzeragenten-String mit dem folgenden Format:

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/7.0.4 Mobile/16B91 Safari/605.1.15
```

Hinweis: Dieser Benutzeragent wurde von einem iPhone XR-Simulator abgerufen und kann auf dem Gerät unterschiedlich sein.

## Firefox für Fire TV

Version 3 (und wahrscheinlich früher) von Firefox für Fire TV verwendet einen Benutzeragenten-String mit folgendem Format:

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefox-version> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox TV-Version | Benutzeragenten-String                                                                                                             |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| v3.0               | Mozilla/5.0 (Linux; Android 7.1.2) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/3.0 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox für Echo Show

Ab Version 1.1 verwendet Firefox für Echo Show einen Benutzeragenten-String mit folgendem Format:

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefox-version> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox für Echo Show-Version | Benutzeragenten-String                                                                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| v1.1                          | Mozilla/5.0 (Linux; Android 5.1.1) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.1 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox OS

| Formfaktor       | Gecko-Benutzeragenten-String                                      |
| ---------------- | ----------------------------------------------------------------- |
| Handy            | Mozilla/5.0 (Mobile; rv:26.0) Gecko/26.0 Firefox/26.0             |
| Tablet           | Mozilla/5.0 (Tablet; rv:26.0) Gecko/26.0 Firefox/26.0             |
| TV               | Mozilla/5.0 (TV; rv:44.0) Gecko/44.0 Firefox/44.0                 |
| Gerätespezifisch | Mozilla/5.0 (Mobile; **_nnnn;_** rv:26.0) Gecko/26.0 Firefox/26.0 |

### Gerätespezifische Benutzeragenten-Strings

Obwohl es von Mozilla **stark entmutigt** wird, fügen einige Handyhersteller leider ein Token in den Benutzeragenten-String ihres Geräts ein, das die Geräte-ID repräsentiert. Falls dies der Fall ist, sieht der Firefox OS-UA-String wie der gerätespezifische String in der obigen Tabelle aus, wobei **_nnnn;_** der Herstellungscode des Geräts ist (siehe [Leitlinien](https://wiki.mozilla.org/B2G/User_Agent/Device_Model_Inclusion_Requirements)). Einige davon, die wir bemerkt haben, sind von der Form "**NexusOne;**", "**ZTEOpen;**" oder "**Open C;**" (beachten Sie, dass das Setzen eines Leerzeichens ebenfalls entmutigt wird). Diese Informationen stellen wir bereit, um Ihnen bei Ihrer Benutzeragentenerkennung zu helfen, aber Mozilla rät von der Erkennung einer Geräte-ID in Benutzeragenten-Strings ab.

Hier ist ein JavaScript-Regulärer-Ausdruck, der alle Mobilgeräte erkennt, einschließlich Geräte mit einer Geräte-ID in ihrem Benutzeragenten-String:

```js
/mobi/i;
```

Das `i` macht es Groß-/Kleinschreibung unsensitiv, und `mobi` trifft auf alle mobilen Browser zu.

### Versionsnummer von Firefox OS

Obwohl die Versionsnummer für Firefox OS nicht im Benutzeragenten-String enthalten ist, ist es möglich, Versionsinformationen aus der Gecko-Versionsnummer im Benutzeragenten-String abzuleiten.

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
> Es ist leicht, die Entsprechungen zu finden, indem man sich die [Mercurial-Repository-Namen](https://hg.mozilla.org/releases) ansieht: Repositories, die mit `mozilla-b2g` beginnen, sind die Release-Repositories für Firefox OS und haben sowohl Firefox OS- als auch Gecko-Versionen in ihren Namen.

Firefox OS hat eine vierstellige Versionsnummer: `X.X.X.Y`. Die ersten zwei Ziffern gehören zum Mozilla-Produktteam und bezeichnen Versionen mit neuen Funktionen (z. B.: v1.1, 1.2, usw.). Die dritte Ziffer wird mit regulären Versions-Tags (etwa alle 6 Wochen) für Sicherheitsupdates inkrementiert, und die vierte gehört dem OEM.

## Siehe auch

- Empfehlungen zum [Sniffing des Benutzeragenten-Strings für plattformübergreifende Unterstützung](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
- [`navigator.userAgent`](/de/docs/Web/API/Window/navigator)
