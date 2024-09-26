---
title: Firefox user agent string Referenz
slug: Web/HTTP/Headers/User-Agent/Firefox
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Dieses Dokument beschreibt den User-Agent-String, der in Firefox 4 und späteren Versionen sowie in Anwendungen basierend auf Gecko 2.0 und später verwendet wird. Für eine Aufschlüsselung der Änderungen am String in Gecko 2.0 siehe [Final User Agent string for Firefox 4](https://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/) (Blogartikel). Siehe auch dieses Dokument über [User-Agent-Sniffing](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent) und diesen [Hacks-Blogartikel](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/).

## Allgemeine Form

Der UA-String von Firefox selbst ist in vier Komponenten unterteilt:

`Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion`

- `Mozilla/5.0` ist das allgemeine Token, das besagt, dass der Browser mit Mozilla kompatibel ist, und ist heute bei fast jedem Browser üblich.
- `platform` beschreibt die native Plattform, auf der der Browser ausgeführt wird (z.B. Windows, Mac, Linux oder Android), und ob es sich um ein Mobiltelefon handelt. Firefox OS-Telefone sagen `Mobile`; das Web ist die Plattform. Beachten Sie, dass `platform` aus mehreren durch `;` getrennten Tokens bestehen kann. Siehe unten für weitere Details und Beispiele.

- `rv:geckoversion` zeigt die Release-Version von Gecko an (zum Beispiel `17.0`).
- `Gecko/geckotrail` zeigt an, dass der Browser auf Gecko basiert.
- Auf dem Desktop ist `geckotrail` der feste String `20100101`.
- `Firefox/firefoxversion` gibt an, dass der Browser Firefox ist, und liefert die Version (zum Beispiel `17.0`).
- Ab Firefox 10 auf mobilen Geräten ist `geckotrail` gleich `firefoxversion`.

> [!NOTE]
> Die empfohlene Methode, um Gecko-basierte Browser zu erkennen (wenn es _notwendig_ ist, die Browser-Engine zu erkennen, anstatt eine Feature-Erkennung zu verwenden), ist das Vorhandensein der Strings `Gecko` und `rv:`, da einige andere Browser ein `like Gecko`-Token enthalten.

Für andere Produkte, die auf Gecko basieren, kann der String eine von zwei Formen annehmen, wobei die Tokens die gleiche Bedeutung haben, außer den unten erläuterten:

`Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail appname/appversion`
`Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion appname/appversion`

- `appname/appversion` gibt den Anwendungsnamen und die Version an. Zum Beispiel könnte dies `Camino/2.1.1` oder `SeaMonkey/2.7.1` sein.
- `Firefox/firefoxversion` ist ein optionales Kompatibilitätstoken, das einige Gecko-basierte Browser möglicherweise verwenden, um maximale Kompatibilität mit Websites zu erreichen, die Firefox erwarten. `firefoxversion` wird in der Regel die entsprechende Firefox-Version repräsentieren, die der gegebenen Gecko-Version entspricht. Einige Gecko-basierte Browser entscheiden sich möglicherweise gegen die Verwendung dieses Tokens; aus diesem Grund sollten Erkennungsmechanismen nach Gecko suchen — nicht nach Firefox!

## Indikatoren für Mobile und Tablet

Der `platform`-Teil des UA-Strings zeigt an, ob Firefox auf einem Telefon- oder Tablet-Gerät läuft. Wenn Firefox auf einem Gerät mit dem Formfaktor eines Telefons läuft, gibt es ein `Mobile;`-Token im `platform`-Teil des UA-Strings. Wenn Firefox auf einem Tablet-Gerät läuft, gibt es stattdessen ein `Tablet;`-Token im `platform`-Teil des UA-Strings. Zum Beispiel:

```plain
Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0
Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0
```

> [!NOTE]
> Die Versionsnummern sind nicht relevant. Vermeiden Sie es, Inhalte basierend auf diesen zu erschließen.

Der bevorzugte Weg, Inhalte für eine Geräteform zu kennzeichnen, besteht darin, CSS Media Queries zu verwenden. Wenn Sie jedoch UA-Sniffing verwenden, um Inhalte für eine Geräteform zu kennzeichnen, suchen Sie bitte nach **Mobi** (um auch Opera Mobile einzuschließen, das "Mobi" verwendet) für den Telefon-Formfaktor und nehmen Sie **keine** Korrelation zwischen "Android" und dem Geräteformfaktor an. Auf diese Weise funktioniert Ihr Code, wenn/wenn Firefox auf anderen Telefon-/Tablet-Betriebssystemen verfügbar ist oder Android für Laptops verwendet wird. Verwenden Sie bitte auch Touch-Erkennung, um Touch-Geräte zu finden, anstatt nach "Mobi" oder "Tablet" zu suchen, da es Touch-Geräte geben kann, die keine Tablets sind.

> [!NOTE]
> Firefox OS-Geräte identifizieren sich ohne jegliche Betriebssystemangabe; zum Beispiel: "Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0". Das Web ist die Plattform.

## Windows

Windows-User-Agents haben die folgenden Variationen, wobei _x.y_ die Windows NT-Version ist (zum Beispiel Windows NT 6.1).

| Windows-Version                      | Gecko User-Agent-String                                                           |
| ------------------------------------ | --------------------------------------------------------------------------------- |
| Windows NT auf x86- oder aarch64-CPU | Mozilla/5.0 (Windows NT _x_._y_; rv:10.0) Gecko/20100101 Firefox/10.0             |
| Windows NT auf x64-CPU               | Mozilla/5.0 (Windows NT _x_._y_; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0 |

## MacOS

Hierbei ist _x.y_ die Version von macOS (zum Beispiel macOS 10.15). Ab Firefox 87 begrenzt Firefox die gemeldete macOS-Versionsnummer auf 10.15, sodass macOS 11.0 Big Sur und später als "10.15" im User-Agent-String gemeldet werden. ARM-basierte Macs werden als "Intel" im User-Agent-String gemeldet.

| Mac OS X-Version                      | Gecko User-Agent-String                                                            |
| ------------------------------------- | ---------------------------------------------------------------------------------- |
| Mac OS X auf x86, x86_64 oder aarch64 | Mozilla/5.0 (Macintosh; Intel Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0 |
| Mac OS X auf PowerPC                  | Mozilla/5.0 (Macintosh; PPC Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0   |

## Linux

Linux ist eine diversere Plattform. Ihre Linux-Distribution könnte eine Erweiterung enthalten, die Ihren User-Agent ändert. Einige häufige Beispiele sind unten aufgeführt.

| Linux-Version                | Gecko User-Agent-String                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| Linux-Desktop auf i686-CPU   | Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0   |
| Linux-Desktop auf x86_64-CPU | Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0 |

## Firefox für Android

Firefox für Android enthält die Android-Version als Teil des _platform_-Tokens. Für eine erhöhte Interoperabilität meldet der Browser, wenn er auf einer Version unter 4 läuft, 4.4. Android-Versionen 4 und höher melden die Version genau. Beachten Sie, dass dasselbe Gecko mit denselben Fähigkeiten für alle Android-Versionen ausgeliefert wird.

| Formfaktor | Gecko User-Agent-String                                            |
| ---------- | ------------------------------------------------------------------ |
| Telefon    | Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0 |
| Tablet     | Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0 |

## Focus für Android

Ab Version 1 wird Focus von Android WebView betrieben und verwendet das folgende User-Agent-String-Format:

```plain
Mozilla/5.0 (Linux; <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Version/4.0 Focus/<focusversion> Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
```

Tablet-Versionen auf WebView spiegeln Mobilgeräte wider, enthalten jedoch kein `Mobile`-Token.

Ab Version 6 können Benutzer eine GeckoView-basierte Focus für Android-Version mit einer versteckten Einstellung aktivieren: sie verwendet einen GeckoView-UA-String, um Gecko-Kompatibilität anzuzeigen.

| Focus-Version (Rendering Engine) | User-Agent-String                                                                                                                      |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (WebView Mobil)              | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36 |
| 1.0 (WebView Tablet)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Safari/537.36        |
| 6.0 (GeckoView)                  | Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0                                                                     |

Der Klar-User-Agent ist derselbe wie [Focus](#focus_für_ios).

## Firefox für iOS

Firefox für iOS verwendet den Standard Mobile Safari UA-String mit einem zusätzlichen **FxiOS/\<version>**-Token auf iPod und iPhone, ähnlich wie [Chrome für iOS sich identifiziert](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/ios/user_agent.md).

| Formfaktor | Firefox für iOS User-Agent-String                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| iPod       | Mozilla/5.0 (iPod touch; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4 |
| iPhone     | Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4     |
| iPad       | Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15                       |

Auf dem iPad erscheint der User-Agent-String identisch wie Safari. Für verschiedene Probleme im Zusammenhang mit dem Fehlen von `FxiOS` auf iOS siehe [mozilla-mobile/firefox-ios#6620](https://github.com/mozilla-mobile/firefox-ios/issues/6620).

## Focus für iOS

Version 7 von Focus für iOS verwendet einen User-Agent-String mit dem folgenden Format:

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/7.0.4 Mobile/16B91 Safari/605.1.15
```

Hinweis: Dieser User-Agent wurde von einem iPhone XR-Simulator abgerufen und kann auf dem Gerät unterschiedlich sein.

## Firefox für Fire TV

Version 3 (und wahrscheinlich früher) von Firefox für Fire TV verwenden einen User-Agent-String mit dem folgenden Format:

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefoxversion> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox TV-Version | User-Agent-String                                                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| v3.0               | Mozilla/5.0 (Linux; Android 7.1.2) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/3.0 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox für Echo Show

Ab Version 1.1 verwendet Firefox für Echo Show einen User-Agent-String mit dem folgenden Format:

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefoxversion> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox für Echo Show-Version | User-Agent-String                                                                                                                  |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| v1.1                          | Mozilla/5.0 (Linux; Android 5.1.1) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.1 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox OS

| Formfaktor        | Gecko User-Agent-String                                           |
| ----------------- | ----------------------------------------------------------------- |
| Telefon           | Mozilla/5.0 (Mobile; rv:26.0) Gecko/26.0 Firefox/26.0             |
| Tablet            | Mozilla/5.0 (Tablet; rv:26.0) Gecko/26.0 Firefox/26.0             |
| TV                | Mozilla/5.0 (TV; rv:44.0) Gecko/44.0 Firefox/44.0                 |
| Gerätesspezifisch | Mozilla/5.0 (Mobile; **_nnnn;_** rv:26.0) Gecko/26.0 Firefox/26.0 |

### Gerätesspezifische User-Agent-Strings

Obwohl es von Mozilla **stark abgelehnt** wird, fügen einige Handyhersteller leider ein Token in den UA-String ihres Geräts ein, das deren Geräte-ID darstellt. Wenn dies der Fall ist, sieht der Firefox OS UA-String aus wie der gerätespezifische String in der obigen Tabelle, wobei **_nnnn;_** der Hersteller-Code für das Gerät ist (siehe [Richtlinien](https://wiki.mozilla.org/B2G/User_Agent/Device_Model_Inclusion_Requirements)). Einige der von uns bemerkten Formen sind "**NexusOne;**", "**ZTEOpen;**" oder "**Open C;**" (beachten Sie, dass es auch nicht empfohlen wird, Leerzeichen zu verwenden). Wir stellen diese Informationen zur Verfügung, um Ihre UA-Erkennung zu unterstützen, aber Mozilla lehnt die Erkennung einer Geräte-ID in UA-Strings ab.

Hier ist ein JavaScript-Regulärausdruck, der alle Mobilgeräte erkennt, einschließlich Geräte mit Geräte-ID in ihrem UA-String:

```js
/mobi/i;
```

Das `i` macht es nicht case-sensitive, und `mobi` passt zu allen mobilen Browsern.

### Firefox OS-Versionsnummer

Obwohl die Versionsnummer für Firefox OS nicht im UA-String enthalten ist, ist es möglich, Versionsinformationen aus der Gecko-Versionsnummer im UA-String abzuleiten.

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
> Die Zuordnungen lassen sich leicht finden, indem Sie sich die [Mercurial-Repository-Namen](https://hg.mozilla.org/releases) anschauen: Repositories, die mit `mozilla-b2g` beginnen, sind die Release-Repositories für Firefox OS und enthalten sowohl Firefox OS- als auch Gecko-Versionsnummern in ihren Namen.

Firefox OS hat eine vierstellige Versionsnummer: `X.X.X.Y`. Die ersten beiden Ziffern werden vom Mozilla Produktteam verwaltet und kennzeichnen Versionen mit neuen Features (z.B.: v1.1, 1.2, etc.). Die dritte Ziffer wird mit regelmäßigen Versionstags (etwa alle 6 Wochen) für Sicherheitsupdates erhöht, und die vierte wird vom OEM verwaltet.

## Siehe auch

- Empfehlungen zum [Erkennen des UA-Strings für plattformübergreifende Unterstützung](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- [`navigator.userAgent`](/de/docs/Web/API/Window/navigator)
