---
title: Firefox-User-Agent-String-Referenz
slug: Web/HTTP/Reference/Headers/User-Agent/Firefox
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{HTTPSidebar}}

Dieses Dokument beschreibt den User-Agent-String, der in Firefox 4 und späteren Versionen sowie in Anwendungen, die auf Gecko 2.0 und später basieren, verwendet wird. Eine Aufschlüsselung der Änderungen im String in Gecko 2.0 finden Sie im [Final User Agent string for Firefox 4](https://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/) (Blog-Post). Siehe auch dieses Dokument über [User-Agent-Erkennung](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) und diesen [Hacks-Blogpost](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/).

## Allgemeines Format

Der UA-String von Firefox selbst ist in vier Komponenten unterteilt:

`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version`

- `Mozilla/5.0` ist das allgemeine Token, das besagt, dass der Browser mit Mozilla kompatibel ist, und ist heute bei fast jedem Browser üblich.
- `platform` beschreibt die native Plattform, auf der der Browser läuft (z.B. Windows, Mac, Linux oder Android), und ob es sich um ein Mobiltelefon handelt. Firefox OS-Telefone geben `Mobile` an; das Web ist die Plattform. Beachten Sie, dass `platform` aus mehreren durch `;` getrennten Tokens bestehen kann. Weitere Details und Beispiele finden Sie unten.

- `rv:gecko-version` gibt die Release-Version von Gecko an (wie z.B. `17.0`).
- `Gecko/gecko-trail` gibt an, dass der Browser auf Gecko basiert.
- Auf dem Desktop ist `gecko-trail` der feste String `20100101`.
- `Firefox/firefox-version` gibt an, dass der Browser Firefox ist, und bietet die Version (wie z.B. `17.0`).
- Ab Firefox 10 auf Mobilgeräten ist `gecko-trail` identisch mit der `firefox-version`.

> [!NOTE]
> Die empfohlene Methode zum Erkennen von auf Gecko basierenden Browsern (wenn Sie _müssen_ den Browser-Engine erkennen, anstatt Feature-Erkennung zu verwenden) ist durch das Vorhandensein der Strings `Gecko` und `rv:`, da einige andere Browser ein `like Gecko`-Token enthalten.

Für andere Produkte, die auf Gecko basieren, kann der String eine von zwei Formen annehmen, wobei die Tokens die gleiche Bedeutung haben, außer denen, die unten angegeben sind:

`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail app-name/app-version`
`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version app-name/app-version`

- `app-name/app-version` gibt den Anwendungsnamen und die Version an. Zum Beispiel könnte dies `Camino/2.1.1` oder `SeaMonkey/2.7.1` sein.
- `Firefox/firefox-version` ist ein optionales Kompatibilitätstoken, das einige auf Gecko basierende Browser möglicherweise einfügen, um maximale Kompatibilität mit Websites zu erreichen, die Firefox erwarten. `firefox-version` wird im Allgemeinen das entsprechende Firefox-Release darstellen, das zur angegebenen Gecko-Version gehört. Einige auf Gecko basierende Browser entscheiden sich möglicherweise dagegen, dieses Token zu verwenden; aus diesem Grund sollten Erkennungsskripte nach Gecko suchen — nicht nach Firefox!

## Mobil- und Tablet-Indikatoren

Der `platform`-Teil des UA-Strings zeigt an, ob Firefox auf einem telefon- oder tabletgroßen Gerät ausgeführt wird. Wenn Firefox auf einem Gerät mit Telefonformfaktor läuft, befindet sich ein `Mobile;`-Token im `platform`-Teil des UA-Strings. Wenn Firefox auf einem Tablet-Gerät läuft, befindet sich stattdessen ein `Tablet;`-Token im `platform`-Teil des UA-Strings. Zum Beispiel:

```plain
Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0
Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0
```

> [!NOTE]
> Die Versionsnummern sind nicht relevant. Vermeiden Sie, Material basierend auf diesen abzuleiten.

Die bevorzugte Methode, um Inhalte für einen Geräteformfaktor anzupassen, ist die Verwendung von CSS-Media-Queries. Wenn Sie jedoch UA-Erkennung verwenden, um Inhalte an einen Geräteformfaktor anzupassen, suchen Sie nach **Mobi** (um Opera Mobile einzuschließen, das "Mobi" verwendet) für den Telefonformfaktor und gehen Sie **nicht** davon aus, dass es eine Korrelation zwischen "Android" und dem Geräteformfaktor gibt. Auf diese Weise wird Ihr Code funktionieren, wenn/wenn Firefox auf anderen Telefon-/Tablet-Betriebssystemen läuft oder Android für Laptops verwendet wird. Außerdem verwenden Sie bitte Berührungsdetektion, um Touch-Geräte zu finden, anstatt nach "Mobi" oder "Tablet" zu suchen, da es möglicherweise Touch-Geräte gibt, die keine Tablets sind.

> [!NOTE]
> Firefox OS-Geräte identifizieren sich ohne Betriebssystemangabe; beispielsweise: "Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0". Das Web ist die Plattform.

## Windows

Windows-User-Agents haben die folgenden Varianten, wobei _x.y_ die Windows NT-Version ist (z.B. Windows NT 6.1).

| Windows-Version        | Gecko-User-Agent-String                                                           |
| ---------------------- | --------------------------------------------------------------------------------- |
| Windows NT auf x86-CPU | Mozilla/5.0 (Windows NT _x_._y_; rv:10.0) Gecko/20100101 Firefox/10.0             |
| Windows NT auf x64-CPU | Mozilla/5.0 (Windows NT _x_._y_; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0 |

> [!NOTE]
> Eine aarch64-CPU wird als x86_64 auf Windows 11 und als x86 auf Windows 10 gemeldet (da sie keine x64-Emulation unterstützt).
> Siehe [Bugzilla #1763310](https://bugzil.la/1763310).

## macOS

Hier ist _x.y_ die Version von macOS (z.B. macOS 10.15). Ab Firefox 87 begrenzt Firefox die gemeldete macOS-Versionsnummer auf 10.15, sodass macOS 11.0 Big Sur und später als "10.15" im User-Agent-String gemeldet werden. ARM-basierte Macs werden als "Intel" im User-Agent-String gemeldet.

| Mac OS X-Version                      | Gecko-User-Agent-String                                                            |
| ------------------------------------- | ---------------------------------------------------------------------------------- |
| Mac OS X auf x86, x86_64 oder aarch64 | Mozilla/5.0 (Macintosh; Intel Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0 |
| Mac OS X auf PowerPC                  | Mozilla/5.0 (Macintosh; PPC Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0   |

## Linux

Linux ist eine vielfältigere Plattform. Ihre Linux-Distribution könnte eine Erweiterung enthalten, die Ihren User-Agent ändert. Einige häufige Beispiele sind unten aufgeführt.

| Linux-Version                | Gecko-User-Agent-String                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| Linux-Desktop auf i686-CPU   | Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0   |
| Linux-Desktop auf x86_64-CPU | Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0 |

> [!NOTE]
> In Firefox 127.0 und später wird 32-Bit x86 nun als x86_64 im User-Agent-String von Firefox, [`navigator.platform`](/de/docs/Web/API/Navigator/platform) und [`navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) gemeldet (siehe [Firefox 127.0 Release Notes](https://www.mozilla.org/en-US/firefox/127.0/releasenotes/)).

## Firefox für Android

Firefox für Android enthält die Android-Version als Teil des _platform_-Tokens. Für bessere Interoperabilität, wenn der Browser auf einer Version unter 4 läuft, wird Version 4.4 gemeldet. Android-Versionen 4 und höher berichten die Version genau. Beachten Sie, dass das gleiche Gecko — mit denselben Fähigkeiten — auf allen Android-Versionen ausgeliefert wird.

| Formfaktor | Gecko-User-Agent-String                                            |
| ---------- | ------------------------------------------------------------------ |
| Telefon    | Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0 |
| Tablet     | Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0 |

## Focus für Android

Ab Version 1 wird Focus von Android WebView betrieben und verwendet das folgende User-Agent-String-Format:

```plain
Mozilla/5.0 (Linux; <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Version/4.0 Focus/<focus version> Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
```

Tablet-Versionen auf WebView spiegeln Mobilgeräte wider, enthalten jedoch kein `Mobile`-Token.

Ab Version 6 können Benutzer in eine auf GeckoView basierende Focus-Version für Android wechseln, die mit einer versteckten Einstellung aktiviert werden kann: Sie verwendet einen GeckoView-UA-String, um Gecko-Kompatibilität zu bewerben.

| Focus-Version (Rendering Engine) | User-Agent-String                                                                                                                      |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (WebView Mobile)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36 |
| 1.0 (WebView Tablet)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Safari/537.36        |
| 6.0 (GeckoView)                  | Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0                                                                     |

Der Klar-User-Agent ist der gleiche wie [Focus](#focus_für_ios).

## Firefox für iOS

Firefox für iOS verwendet den standardmäßigen Mobile Safari-UA-String, mit einem zusätzlichen **FxiOS/\<version>**-Token auf iPod und iPhone, ähnlich wie [Chrome für iOS sich selbst identifiziert](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/ios/user_agent.md).

| Formfaktor | Firefox für iOS User-Agent-String                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| iPod       | Mozilla/5.0 (iPod touch; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4 |
| iPhone     | Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4     |
| iPad       | Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15                       |

Auf dem iPad erscheint der User-Agent-String identisch wie Safari. Für verschiedene Probleme im Zusammenhang mit der Nichtaufnahme von `FxiOS` auf iOS, siehe [mozilla-mobile/firefox-ios#6620](https://github.com/mozilla-mobile/firefox-ios/issues/6620).

## Focus für iOS

Version 7 von Focus für iOS verwendet einen User-Agent-String mit dem folgenden Format:

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/7.0.4 Mobile/16B91 Safari/605.1.15
```

Hinweis: Dieser User-Agent wurde von einem iPhone XR-Simulator abgerufen und kann auf dem Gerät unterschiedlich sein.

## Firefox für Fire TV

Version 3 (und wahrscheinlich frühere) von Firefox für Fire TV verwenden einen User-Agent-String mit folgendem Format:

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefox-version> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox TV-Version | User-Agent- String                                                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| v3.0               | Mozilla/5.0 (Linux; Android 7.1.2) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/3.0 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox für Echo Show

Ab Version 1.1 verwendet Firefox für Echo Show einen User-Agent-String mit folgendem Format:

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefox-version> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox für Echo Show-Version | User-Agent-String                                                                                                                  |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| v1.1                          | Mozilla/5.0 (Linux; Android 5.1.1) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.1 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox OS

| Formfaktor       | Gecko-User-Agent-String                                           |
| ---------------- | ----------------------------------------------------------------- |
| Telefon          | Mozilla/5.0 (Mobile; rv:26.0) Gecko/26.0 Firefox/26.0             |
| Tablet           | Mozilla/5.0 (Tablet; rv:26.0) Gecko/26.0 Firefox/26.0             |
| TV               | Mozilla/5.0 (TV; rv:44.0) Gecko/44.0 Firefox/44.0                 |
| Gerätespezifisch | Mozilla/5.0 (Mobile; **_nnnn;_** rv:26.0) Gecko/26.0 Firefox/26.0 |

### Gerätespezifische User-Agent-Strings

Obwohl es von Mozilla **stark abgeraten** wird, fügen einige Gerätehersteller leider ein Token in den UA-String ihres Geräts ein, das deren Geräte-ID repräsentiert. In diesem Fall sieht der Firefox-OS-UA-String wie der gerätespezifische String in der obigen Tabelle aus, wobei **_nnnn;_** der Herstellercode für das Gerät ist (siehe [Richtlinien](https://wiki.mozilla.org/B2G/User_Agent/Device_Model_Inclusion_Requirements)). Einige der beobachteten Formen sind "NexusOne;", "ZTEOpen;" oder "Open C;" (beachten Sie, dass auch das Einfügen von Leerzeichen nicht empfohlen wird). Wir stellen diese Informationen zur Verfügung, um Ihre UA-Erkennung zu unterstützen, aber Mozilla rät davon ab, die Erkennung einer Geräte-ID in UA-Strings zu verwenden.

Hier ist ein JavaScript-Regulärer-Ausdruck, der alle mobilen Geräte erkennt, einschließlich Geräte mit einer Geräte-ID in ihrem UA-String:

```js
/mobi/i;
```

Das `i` macht ihn case-insensitive, und `mobi` passt auf alle mobilen Browser.

### Firefox OS-Versionsnummer

Während die Versionsnummer für Firefox OS nicht im UA-String enthalten ist, ist es möglich, Versionsinformationen aus der im UA-String enthaltenen Gecko-Versionsnummer abzuleiten.

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
> Es ist einfach, die Entsprechungen zu finden, indem man sich die [Mercurial-Repository-Namen](https://hg-edge.mozilla.org/releases) anschaut: Repositories, die mit `mozilla-b2g` beginnen, sind die Release-Repositories für Firefox OS und haben sowohl Firefox OS- als auch Gecko-Versionen in ihren Namen.

Firefox OS hat eine vierstellige Versionsnummer: `X.X.X.Y`. Die ersten zwei Ziffern werden vom Mozilla-Produktionsteam verwaltet und kennzeichnen Versionen mit neuen Features (z.B. v1.1, 1.2 usw.). Die dritte Ziffer wird regelmäßig mit Versionstags (etwa alle 6 Wochen) für Sicherheitsupdates erhöht, und die vierte gehört dem OEM.

## Siehe auch

- Empfehlungen zur [Erkennung des UA-Strings für plattformübergreifende Unterstützung](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
- [`navigator.userAgent`](/de/docs/Web/API/Window/navigator)
