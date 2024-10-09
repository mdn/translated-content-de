---
title: Firefox User-Agent-String-Referenz
slug: Web/HTTP/Headers/User-Agent/Firefox
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTTPSidebar}}

Dieses Dokument beschreibt die User-Agent-String, die in Firefox 4 und später sowie in Anwendungen auf Basis von Gecko 2.0 und später verwendet wird. Eine Aufschlüsselung der Änderungen am String in Gecko 2.0 finden Sie im [Endgültigen User-Agent-String für Firefox 4](https://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/) (Blog-Beitrag). Siehe auch dieses Dokument über [User-Agent-Sniffing](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent) und diesen [Hacks-Blogbeitrag](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/).

## Allgemeine Form

Der UA-String von Firefox selbst ist in vier Komponenten unterteilt:

`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version`

- `Mozilla/5.0` ist das allgemeine Token, das besagt, dass der Browser mit Mozilla kompatibel ist, und ist heute bei fast jedem Browser üblich.
- `platform` beschreibt die native Plattform, auf der der Browser läuft (z.B. Windows, Mac, Linux oder Android) und ob es sich um ein Mobiltelefon handelt oder nicht. Firefox OS-Telefone geben `Mobile` an; das Web ist die Plattform. Beachten Sie, dass `platform` aus mehreren durch `;` getrennten Tokens bestehen kann. Siehe unten für weitere Details und Beispiele.

- `rv:gecko-version` gibt die Versionsnummer des Gecko-Releases an (zum Beispiel `17.0`).
- `Gecko/gecko-trail` zeigt an, dass der Browser auf Gecko basiert.
- Auf Desktops ist `gecko-trail` die feste Zeichenfolge `20100101`.
- `Firefox/firefox-version` gibt an, dass der Browser Firefox ist und bietet die Version an (zum Beispiel `17.0`).
- Ab Firefox 10 auf mobilen Geräten ist `gecko-trail` identisch mit `firefox-version`.

> [!NOTE]
> Der empfohlene Weg zur Erkennung von Gecko-basierten Browsern (wenn Sie _müssen_ den Browser-Engine schnüffeln, anstatt eine Funktionsdetektion zu verwenden) ist durch das Vorhandensein der Zeichenfolgen `Gecko` und `rv:`, da einige andere Browser ein `like Gecko`-Token enthalten.

Für andere auf Gecko basierende Produkte kann der String eine von zwei Formen annehmen, wobei die Tokens die gleiche Bedeutung haben, außer den unten angegebenen:

`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail appname/appversion`
`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version appname/appversion`

- `appname/appversion` gibt den Anwendungsnamen und die Version an. Dies könnte zum Beispiel `Camino/2.1.1` oder `SeaMonkey/2.7.1` sein.
- `Firefox/firefox-version` ist ein optionales Kompatibilitätstoken, das einige Gecko-basierte Browser eventuell integrieren, um maximale Kompatibilität mit Websites zu erreichen, die Firefox erwarten. `firefox-version` wird im Allgemeinen die entsprechende Firefox-Version für die angegebene Gecko-Version darstellen. Einige Gecko-basierte Browser verzichten möglicherweise auf die Verwendung dieses Tokens; aus diesem Grund sollten Sniffer nach Gecko — nicht nach Firefox — suchen!

## Mobil- und Tablet-Indikatoren

Der `platform`-Teil des UA-Strings gibt an, ob Firefox auf einem Gerät in Telefon- oder Tablet-Größe läuft. Wenn Firefox auf einem Gerät läuft, das die Telefonform hat, gibt es ein `Mobile;`-Token im `platform`-Teil des UA-Strings. Wenn Firefox auf einem Tablet-Gerät läuft, gibt es stattdessen ein `Tablet;`-Token im `platform`-Teil des UA-Strings. Zum Beispiel:

```plain
Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0
Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0
```

> [!NOTE]
> Die Versionsnummern sind nicht relevant. Vermeiden Sie das Ableiten von Material auf Grundlage dieser.

Der bevorzugte Weg, um Inhalte auf eine Geräteform abzustimmen, ist die Verwendung von CSS Media Queries. Wenn Sie jedoch UA-Sniffing verwenden, um Inhalte auf eine Geräteform abzustimmen, suchen Sie bitte nach **Mobi** (um Opera Mobile einzuschließen, das "Mobi" verwendet) für die Telefonform und nehmen Sie **keine** Korrelation zwischen "Android" und der Geräteform an. Auf diese Weise wird Ihr Code funktionieren, wenn/als Firefox auf anderen Telefon-/Tablet-Betriebssystemen veröffentlicht wird oder Android auf Laptops verwendet wird. Bitte verwenden Sie auch Touch-Erkennung, um Touch-Geräte zu finden, anstatt nach "Mobi" oder "Tablet" zu suchen, da es möglicherweise Touch-Geräte gibt, die keine Tablets sind.

> [!NOTE]
> Firefox OS-Geräte identifizieren sich ohne jegliche Angabe eines Betriebssystems; zum Beispiel: "Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0". Das Web ist die Plattform.

## Windows

Windows User Agents haben die folgenden Variationen, wobei _x.y_ die Windows NT-Version ist (zum Beispiel Windows NT 6.1).

| Windows-Version                     | Gecko-User-Agent-String                                                           |
| ----------------------------------- | --------------------------------------------------------------------------------- |
| Windows NT auf x86 oder aarch64 CPU | Mozilla/5.0 (Windows NT _x_._y_; rv:10.0) Gecko/20100101 Firefox/10.0             |
| Windows NT auf x64 CPU              | Mozilla/5.0 (Windows NT _x_._y_; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0 |

## MacOS

Hierbei ist _x.y_ die Version von macOS (zum Beispiel macOS 10.15). Ab Firefox 87 begrenzt Firefox die gemeldete macOS-Version auf 10.15, sodass macOS 11.0 Big Sur und spätere Versionen in der User-Agent-String als "10.15" gemeldet werden. ARM-basierte Macs werden im User-Agent-String als "Intel" gemeldet.

| Mac OS X-Version                      | Gecko-User-Agent-String                                                            |
| ------------------------------------- | ---------------------------------------------------------------------------------- |
| Mac OS X auf x86, x86_64 oder aarch64 | Mozilla/5.0 (Macintosh; Intel Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0 |
| Mac OS X auf PowerPC                  | Mozilla/5.0 (Macintosh; PPC Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0   |

## Linux

Linux ist eine vielfältigere Plattform. Ihre Linux-Distribution könnte eine Erweiterung enthalten, die Ihren User-Agent ändert. Einige häufige Beispiele werden unten angegeben.

| Linux-Version                | Gecko-User-Agent-String                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| Linux-Desktop auf i686 CPU   | Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0   |
| Linux-Desktop auf x86_64 CPU | Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0 |

## Firefox für Android

Firefox für Android enthält die Android-Version als Teil des _platform_-Tokens. Für eine höhere Interoperabilität wird, wenn der Browser auf einer Version unter 4 läuft, 4.4 gemeldet. Android-Versionen ab 4 und höher melden die Version korrekt. Beachten Sie, dass das gleiche Gecko — mit den gleichen Fähigkeiten — für alle Android-Versionen geliefert wird.

| Formfaktor | Gecko-User-Agent-String                                            |
| ---------- | ------------------------------------------------------------------ |
| Telefon    | Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0 |
| Tablet     | Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0 |

## Focus für Android

Ab Version 1 basiert Focus auf Android WebView und verwendet das folgende User-Agent-String-Format:

```plain
Mozilla/5.0 (Linux; <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Version/4.0 Focus/<focus version> Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
```

Tablet-Versionen auf WebView spiegeln mobile Geräte wider, enthalten jedoch kein `Mobile`-Token.

Ab Version 6 können Nutzer sich für die Verwendung einer GeckoView-basierten Focus für Android mit einer versteckten Einstellung entscheiden: Es verwendet einen GeckoView-UA-String, um Gecko-Kompatibilität zu bewerben.

| Focus-Version (Rendering-Engine) | User-Agent-String                                                                                                                      |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (WebView Mobile)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36 |
| 1.0 (WebView Tablet)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Safari/537.36        |
| 6.0 (GeckoView)                  | Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0                                                                     |

Der Klar-User-Agent ist derselbe wie [Focus](#focus_für_ios).

## Firefox für iOS

Firefox für iOS verwendet den standardmäßigen Mobile Safari UA-String mit einem zusätzlichen **FxiOS/\<version>**-Token auf iPod und iPhone, ähnlich wie [Chrome für iOS sich identifiziert](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/ios/user_agent.md).

| Formfaktor | Firefox für iOS-User-Agent-String                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| iPod       | Mozilla/5.0 (iPod touch; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4 |
| iPhone     | Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4     |
| iPad       | Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15                       |

Auf iPad erscheint der User-Agent-String identisch wie Safari. Für verschiedene Probleme im Zusammenhang mit dem Fehlen von `FxiOS` auf iOS, siehe [mozilla-mobile/firefox-ios#6620](https://github.com/mozilla-mobile/firefox-ios/issues/6620).

## Focus für iOS

Version 7 von Focus für iOS verwendet einen User-Agent-String mit dem folgenden Format:

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/7.0.4 Mobile/16B91 Safari/605.1.15
```

Hinweis: Dieser User-Agent wurde von einem iPhone XR-Simulator abgerufen und könnte auf einem echten Gerät anders sein.

## Firefox für Fire TV

Version 3 (und vermutlich frühere) von Firefox für Fire TV verwenden einen User-Agent-String mit dem folgenden Format:

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefox-version> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox-TV-Version | User-Agent-String                                                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| v3.0               | Mozilla/5.0 (Linux; Android 7.1.2) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/3.0 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox für Echo Show

Ab Version 1.1 verwendet Firefox für Echo Show einen User-Agent-String mit dem folgenden Format:

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

Obwohl es von Mozilla **strengstens untersagt** ist, fügen einige Gerätehersteller leider ein Token in den UA-String ihres Geräts ein, das ihre Geräte-ID darstellt. Falls dies der Fall ist, sieht der Firefox OS-UA-String wie der gerätespezifische String in der obigen Tabelle aus, wobei **_nnnn;_** der Herstellercode für das Gerät ist (siehe [Richtlinien](https://wiki.mozilla.org/B2G/User_Agent/Device_Model_Inclusion_Requirements)). Einige, die wir bemerkt haben, sind von der Form "**NexusOne;**", "**ZTEOpen;**" oder "**Open C;**" (beachten Sie, dass das Einfügen von Leerzeichen ebenfalls nicht empfohlen wird). Wir stellen diese Informationen bereit, um Ihnen bei Ihrer UA-Erkennungslogik zu helfen, jedoch rät Mozilla von der Erkennung einer Geräte-ID in UA-Strings ab.

Hier ist ein JavaScript-Regulärer Ausdruck, der alle mobilen Geräte erkennt, einschließlich Geräte mit einer Geräte-ID in ihrem UA-String:

```js
/mobi/i;
```

Das `i` macht es nicht unterscheidend zwischen Groß- und Kleinschreibung und `mobi` passt zu allen mobilen Browsern.

### Firefox OS-Versionsnummer

Während die Versionsnummer für Firefox OS nicht im UA-String enthalten ist, ist es möglich, Versionsinformationen aus der Gecko-Versionsnummer im UA-String abzuleiten.

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
> Es ist leicht, die Zusammenhänge zu erkennen, indem man sich die [Mercurial-Repository-Namen](https://hg.mozilla.org/releases) ansieht: Repositories, die mit `mozilla-b2g` beginnen, sind die Veröffentlichungsrepositories für Firefox OS und haben sowohl die Firefox OS- als auch die Gecko-Versionen in ihren Namen.

Firefox OS hat eine vierstellige Versionsnummer: `X.X.X.Y`. Die ersten beiden Ziffern werden vom Mozilla-Produktteam verwaltet und bezeichnen Versionen mit neuen Funktionen (z.B.: v1.1, 1.2, usw.). Die dritte Ziffer wird mit regulären Versionstags (ungefähr alle 6 Wochen) für Sicherheitsupdates erhöht, und die vierte gehört dem OEM.

## Siehe auch

- Empfehlungen zum [Sniffing des UA-Strings für Browser-übergreifende Unterstützung](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- [`navigator.userAgent`](/de/docs/Web/API/Window/navigator)
