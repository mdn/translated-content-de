---
title: Referenz zur Firefox-User-Agent-Zeichenfolge
slug: Web/HTTP/Headers/User-Agent/Firefox
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{HTTPSidebar}}

Dieses Dokument beschreibt die User-Agent-Zeichenfolge, die in Firefox 4 und später und in Anwendungen basierend auf Gecko 2.0 und später verwendet wird. Für eine Aufschlüsselung der Änderungen an der Zeichenfolge in Gecko 2.0, sehen Sie sich den [Final User Agent string for Firefox 4](https://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/) (Blogbeitrag) an. Siehe auch dieses Dokument zum [User-Agent-Sniffing](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent) und diesen [Hacks Blog-Beitrag](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/).

## Allgemeine Form

Die UA-Zeichenfolge von Firefox selbst ist in vier Komponenten unterteilt:

`Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion`

- `Mozilla/5.0` ist das allgemeine Token, das aussagt, dass der Browser mit Mozilla kompatibel ist, und ist heute in fast jedem Browser üblich.
- `platform` beschreibt die native Plattform, auf der der Browser läuft (z. B. Windows, Mac, Linux oder Android) und ob es sich um ein Mobiltelefon handelt. Firefox OS Telefone sagen "`Mobile`"; das Web ist die Plattform. Beachten Sie, dass `platform` aus mehreren durch "; " getrennten Tokens bestehen kann. Siehe unten für weitere Details und Beispiele.

- `rv:geckoversion` zeigt die Release-Version von Gecko an (wie "`17.0`").
- `Gecko/geckotrail` zeigt an, dass der Browser auf Gecko basiert.
- Auf Desktop ist `geckotrail` die feste Zeichenfolge "`20100101`".
- `Firefox/firefoxversion` gibt an, dass der Browser Firefox ist, und stellt die Version bereit (wie "`17.0`").
- Ab Firefox 10 auf Mobilgeräten ist `geckotrail` dasselbe wie `firefoxversion`.

> [!NOTE]
> Die empfohlene Methode zum Sniffen für Gecko-basierte Browser (falls Sie _müssen_ auf die Browser-Engine anstatt auf Feature-Erkennung sniffen) ist die Suche nach den "`Gecko`" und "`rv:`" Zeichenfolgen, da einige andere Browser ein "`like Gecko`" Token enthalten.

Für andere auf Gecko basierende Produkte kann die Zeichenfolge eine von zwei Formen annehmen, wobei die Tokens die gleiche Bedeutung haben, mit Ausnahme der unten genannten:

`Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail appname/appversion`
`Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion appname/appversion`

- `appname/appversion` gibt den Anwendungsnamen und die Version an. Zum Beispiel könnte dies "`Camino/2.1.1`" oder "`SeaMonkey/2.7.1`" sein.
- `Firefox/firefoxversion` ist ein optionales Kompatibilitätstoken, das einige Gecko-basierte Browser wählen können, um maximalen Kompatibilität mit Websites zu erreichen, die Firefox erwarten. `firefoxversion` wird im Allgemeinen die entsprechende Firefox-Version darstellen, die der angegebenen Gecko-Version entspricht. Einige Gecko-basierte Browser können sich dafür entscheiden, dieses Token nicht zu verwenden; aus diesem Grund sollten Schnüffler nach Gecko suchen — nicht nach Firefox!

## Mobile und Tablet Indikatoren

Der `platform` Teil der UA-Zeichenfolge zeigt an, ob Firefox auf einem telefonierten oder tabletartigen Gerät läuft. Wenn Firefox auf einem Gerät läuft, das die Telefonform hat, gibt es ein `Mobile;`-Token im `platform` Teil der UA-Zeichenfolge. Wenn Firefox auf einem Tablet-Gerät läuft, gibt es stattdessen ein `Tablet;`-Token im `platform`-Teil der UA-Zeichenfolge. Zum Beispiel:

```plain
Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0
Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0
```

> [!NOTE]
> Die Versionsnummern sind nicht relevant. Vermeiden Sie es, Material auf ihnen zu basieren.

Die bevorzugte Methode, um Inhalte auf einen Geräteformfaktor auszurichten, ist die Verwendung von CSS-Media-Queries. Wenn Sie jedoch UA-Sniffing verwenden, um Inhalte auf einen Geräteformfaktor auszurichten, suchen Sie bitte nach **Mobi** (um Opera Mobile einzuschließen, das "Mobi" verwendet) für den Telefonformfaktor und nehmen Sie **keine** Korrelation zwischen "Android" und dem Geräteformfaktor an. Auf diese Weise funktioniert Ihr Code, wenn Firefox auf anderen Telefon-/Tablet-Betriebssystemen veröffentlicht wird oder Android für Laptops verwendet wird. Außerdem verwenden Sie bitte die Berührungserkennung, um Touchgeräte zu finden, anstatt nach "Mobi" oder "Tablet" zu suchen, da es möglicherweise Touchgeräte gibt, die keine Tablets sind.

> [!NOTE]
> Firefox OS Geräte identifizieren sich ohne jegliche Betriebssystemindikation; zum Beispiel: "Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0". Das Web ist die Plattform.

## Windows

Windows User Agents haben folgende Variationen, wobei _x.y_ die Windows NT-Version ist (zum Beispiel, Windows NT 6.1).

| Windows-Version                  | Gecko-User-Agent-Zeichenfolge                                                        |
| -------------------------------- | ---------------------------------------------------------------------------------- |
| Windows NT auf x86 oder aarch64 CPU | Mozilla/5.0 (Windows NT _x_._y_; rv:10.0) Gecko/20100101 Firefox/10.0             |
| Windows NT auf x64 CPU            | Mozilla/5.0 (Windows NT _x_._y_; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0 |

## MacOS

Hierbei ist _x.y_ die Version von macOS (zum Beispiel, macOS 10.15). Ab Firefox 87 begrenzt Firefox die gemeldete macOS-Versionsnummer auf 10.15, sodass macOS 11.0 Big Sur und später als "10.15" in der User-Agent-Zeichenfolge gemeldet werden. ARM-basierte Macs werden in der User-Agent-Zeichenfolge als "Intel" gemeldet.

| Mac OS X-Version                    | Gecko-User-Agent-Zeichenfolge                                                        |
| ----------------------------------- | ---------------------------------------------------------------------------------- |
| Mac OS X auf x86, x86_64 oder aarch64 | Mozilla/5.0 (Macintosh; Intel Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0 |
| Mac OS X auf PowerPC                 | Mozilla/5.0 (Macintosh; PPC Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0   |

## Linux

Linux ist eine vielfältigere Plattform. Ihre Linux-Distribution könnte eine Erweiterung enthalten, die Ihren User-Agent ändert. Einige häufige Beispiele sind unten angegeben.

| Linux-Version               | Gecko-User-Agent-Zeichenfolge                                              |
| --------------------------- | -------------------------------------------------------------------- |
| Linux-Desktop auf i686 CPU   | Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0   |
| Linux-Desktop auf x86_64 CPU | Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0 |

## Firefox für Android

Firefox für Android enthält die Android-Version als Teil des _platform_ Tokens. Für erhöhte Interoperabilität, wenn der Browser auf einer Version unter 4 läuft, wird er 4.4 melden. Android-Versionen 4 und darüber melden die Version genau. Beachten Sie, dass das gleiche Gecko—mit den gleichen Fähigkeiten—an alle Android-Versionen ausgeliefert wird.

| Formfaktor | Gecko-User-Agent-Zeichenfolge                                            |
| ----------- | ------------------------------------------------------------------ |
| Telefon       | Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0 |
| Tablet      | Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0 |

## Focus für Android

Seit Version 1 verwendet Focus Android WebView und benutzt das folgende User-Agent-Zeichenfolgenformat:

```plain
Mozilla/5.0 (Linux; <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Version/4.0 Focus/<focusversion> Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
```

Die Tablet-Versionen auf WebView spiegeln Mobilgeräte wider, enthalten aber kein `Mobile` Token.

Ab Version 6 können Benutzer in eine GeckoView-basierte Version von Focus für Android mit einer versteckten Präferenz wechseln: sie verwendet eine GeckoView UA-Zeichenfolge, um Gecko-Kompatibilität zu bewerben.

| Focus-Version (Rendering-Engine) | User-Agent-Zeichenfolge                                                                                                                      |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (WebView Mobil)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36 |
| 1.0 (WebView Tablet)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Safari/537.36        |
| 6.0 (GeckoView)                  | Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0                                                                     |

Der Klar-User-Agent ist identisch wie [Focus](#focus_für_ios).

## Firefox für iOS

Firefox für iOS verwendet die standardmäßige Mobile Safari UA-Zeichenfolge mit einem zusätzlichen **FxiOS/\<version>** Token auf iPod und iPhone, ähnlich wie [Chrome für iOS sich identifiziert](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/ios/user_agent.md).

| Formfaktor | Firefox für iOS User-Agent-Zeichenfolge                                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| iPod        | Mozilla/5.0 (iPod touch; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4 |
| iPhone      | Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4     |
| iPad        | Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15                       |

Auf dem iPad erscheint die User-Agent-Zeichenfolge identisch wie Safari. Für verschiedene Probleme im Zusammenhang mit der Nichtaufnahme von `FxiOS` auf iOS, siehe [mozilla-mobile/firefox-ios#6620](https://github.com/mozilla-mobile/firefox-ios/issues/6620).

## Focus für iOS

Version 7 von Focus für iOS verwendet eine User-Agent-Zeichenfolge mit dem folgenden Format:

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/7.0.4 Mobile/16B91 Safari/605.1.15
```

Hinweis: Diese User-Agent wurde von einem iPhone XR Simulator abgerufen und kann auf dem Gerät anders sein.

## Firefox für Fire TV

Version 3 (und wahrscheinlich früher) von Firefox für Fire TV verwenden eine User-Agent-Zeichenfolge mit folgendem Format:

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefoxversion> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox TV-Version | User-Agent-Zeichenfolge                                                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| v3.0               | Mozilla/5.0 (Linux; Android 7.1.2) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/3.0 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox für Echo Show

Seit Version 1.1 verwendet Firefox für Echo Show eine User-Agent-Zeichenfolge mit folgendem Format:

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefoxversion> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox für Echo Show-Version | User-Agent-Zeichenfolge                                                                                                                  |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| v1.1                          | Mozilla/5.0 (Linux; Android 5.1.1) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.1 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox OS

| Formfaktor     | Gecko-User-Agent-Zeichenfolge                                           |
| --------------- | ----------------------------------------------------------------- |
| Telefon           | Mozilla/5.0 (Mobile; rv:26.0) Gecko/26.0 Firefox/26.0             |
| Tablet          | Mozilla/5.0 (Tablet; rv:26.0) Gecko/26.0 Firefox/26.0             |
| TV              | Mozilla/5.0 (TV; rv:44.0) Gecko/44.0 Firefox/44.0                 |
| Geräte-spezifisch | Mozilla/5.0 (Mobile; **_nnnn;_** rv:26.0) Gecko/26.0 Firefox/26.0 |

### Gerät-spezifische User-Agent-Zeichenfolgen

Obwohl es **stark abgeraten** wird von Mozilla, fügen einige Handyhersteller leider ein Token in der UA-Zeichenfolge ihres Geräts hinzu, die ihre Geräte-ID darstellt. Falls dies der Fall ist, sieht die Firefox OS UA-Zeichenfolge wie die gerätespezifische Zeichenfolge in der obigen Tabelle aus, wobei **_nnnn;_** der Herstellercode für das Gerät ist (siehe [Richtlinien](https://wiki.mozilla.org/B2G/User_Agent/Device_Model_Inclusion_Requirements)). Einige davon, die wir bemerkt haben, haben die Form "**NexusOne;**", "**ZTEOpen;**" oder "**Open C;**" (beachten Sie, dass auch das Setzen von Leerzeichen nicht empfohlen wird). Wir stellen diese Informationen zur Unterstützung Ihrer UA-Erkennung logisch zur Verfügung, aber Mozilla rät davon ab, die Erkennung einer Geräte-ID in UA-Zeichenfolgen durchzuführen.

Hier ist ein JavaScript-Regulärer Ausdruck, der alle mobilen Geräte erkennt, einschließlich Geräte mit einer Geräte-ID in ihrer UA-Zeichenfolge:

```js
/mobi/i;
```

Das `i` macht es nicht zwischen Groß- und Kleinschreibung unterscheidend, und `mobi` passt auf alle mobilen Browser.

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
> Es ist einfach, die Entsprechungen durch einen Blick auf die [Mercurial-Repository-Namen](https://hg.mozilla.org/releases) zu finden: Repositories, die mit `mozilla-b2g` anfangen, sind die Release-Repositories für Firefox OS und enthalten sowohl Firefox OS als auch Gecko-Versionen in ihren Namen.

Firefox OS hat eine vierstellige Versionsnummer: `X.X.X.Y`. Die ersten beiden Ziffern werden von der Mozilla-Produktgruppe verwaltet und bezeichnen Versionen mit neuen Funktionen (z. B.: v1.1, 1.2, usw.). Die dritte Ziffer wird mit regulären Versionstags (etwa alle 6 Wochen) für Sicherheitsupdates erhöht, und die vierte gehört dem OEM.

## Siehe auch

- Empfehlungen zum [Sniffing der UA-Zeichenfolge für plattformübergreifende Unterstützung](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- [`navigator.userAgent`](/de/docs/Web/API/Window/navigator)
