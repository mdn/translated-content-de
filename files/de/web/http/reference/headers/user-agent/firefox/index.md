---
title: Referenz für den User-Agent-String von Firefox
slug: Web/HTTP/Reference/Headers/User-Agent/Firefox
l10n:
  sourceCommit: 86e10756ee3144be47a9eae900ba7e8f08bea85f
---

{{HTTPSidebar}}

Dieses Dokument beschreibt den User-Agent-String, der in Firefox 4 und späteren Versionen sowie in Anwendungen auf Basis von Gecko 2.0 und später verwendet wird. Für eine Aufschlüsselung der Änderungen am String in Gecko 2.0 siehe [Final User Agent string for Firefox 4](https://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/) (Blogeintrag). Siehe auch dieses Dokument über [User-Agent-Sniffing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) und diesen [Hacks Blogeintrag](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/).

## Allgemeine Form

Der User-Agent-String von Firefox selbst ist in vier Komponenten unterteilt:

`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version`

- `Mozilla/5.0` ist das allgemeine Token, das angibt, dass der Browser mit Mozilla kompatibel ist, und ist heutzutage bei fast jedem Browser üblich.
- `platform` beschreibt die native Plattform, auf der der Browser läuft (z.B. Windows, Mac, Linux oder Android), und ob es sich um ein Mobiltelefon handelt oder nicht. Firefox OS-Telefone geben `Mobile` an; das Web ist die Plattform. Beachten Sie, dass `platform` aus mehreren durch `;`-getrennten Tokens bestehen kann. Siehe unten für weitere Details und Beispiele.

- `rv:gecko-version` gibt die Release-Version von Gecko an (wie `17.0`).
- `Gecko/gecko-trail` zeigt an, dass der Browser auf Gecko basiert.
- Auf dem Desktop ist `gecko-trail` der feste String `20100101`.
- `Firefox/firefox-version` zeigt an, dass der Browser Firefox ist, und gibt die Version an (wie `17.0`).
- Ab Firefox 10 auf mobilen Geräten ist `gecko-trail` identisch mit `firefox-version`.

> [!NOTE]
> Die empfohlene Methode zum Erkennen von Gecko-basierten Browsern (falls Sie _zwingend_ nach der Browser-Engine schnüffeln müssen und Feature-Detection nicht verwenden können) besteht darin, nach den Strings `Gecko` und `rv:` zu suchen, da einige andere Browser ein `like Gecko`-Token enthalten.

Für andere auf Gecko basierende Produkte kann der String eine von zwei Formen annehmen, wobei die Tokens die gleiche Bedeutung haben außer den unten erwähnten:

`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail app-name/app-version`
`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version app-name/app-version`

- `app-name/app-version` gibt den Anwendungsnamen und die Version an. Dies könnte zum Beispiel `Camino/2.1.1` oder `SeaMonkey/2.7.1` sein.
- `Firefox/firefox-version` ist ein optionales Kompatibilitätstoken, das einige Gecko-basierte Browser möglicherweise einbinden, um maximale Kompatibilität mit Websites zu erreichen, die Firefox erwarten. `firefox-version` wird im Allgemeinen die äquivalente Firefox-Version darstellen, die der angegebenen Gecko-Version entspricht. Einige Gecko-basierte Browser entscheiden sich möglicherweise dagegen, dieses Token zu verwenden; aus diesem Grund sollten Sniffer nach Gecko suchen – nicht nach Firefox!

## Mobile und Tablet-Indikatoren

Der `platform`-Teil des User-Agent-Strings zeigt an, ob Firefox auf einem Handy- oder Tablet-Gerät ausgeführt wird. Wenn Firefox auf einem Gerät mit Handy-Formfaktor läuft, befindet sich ein `Mobile;`-Token im `platform`-Teil des User-Agent-Strings. Wenn Firefox auf einem Tablet-Gerät läuft, befindet sich stattdessen ein `Tablet;`-Token im `platform`-Teil des User-Agent-Strings. Zum Beispiel:

```plain
Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0
Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0
```

> [!NOTE]
> Die Versionsnummern sind nicht relevant. Vermeiden Sie es, Materialien auf deren Grundlage abzuleiten.

Die bevorzugte Methode, um Inhalte auf ein Geräteformfaktor abzuzielen, ist die Verwendung von CSS Media Queries. Wenn Sie jedoch User-Agent-Sniffing verwenden, um Inhalte auf ein Geräteformfaktor abzuzielen, achten Sie darauf, **Mobi** zu suchen (einschließlich Opera Mobile, das "Mobi" verwendet) für den Handy-Formfaktor, und gehen Sie **nicht** davon aus, dass "Android" mit einem Geräteformfaktor korreliert. Auf diese Weise funktioniert Ihr Code, falls/wenn Firefox auf anderen Handy/Tablet-Betriebssystemen läuft oder Android für Laptops verwendet wird. Verwenden Sie außerdem Touch-Erkennung, um Touch-Geräte zu identifizieren, anstatt nach "Mobi" oder "Tablet" zu suchen, da es Touch-Geräte geben könnte, die keine Tablets sind.

> [!NOTE]
> Firefox OS-Geräte identifizieren sich ohne Angabe eines Betriebssystems; zum Beispiel: "Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0". Das Web ist die Plattform.

## Windows

Windows User-Agents haben die folgenden Variationen, wobei _x.y_ die Windows NT-Version ist (zum Beispiel Windows NT 6.1).

| Windows Version        | Gecko User-Agent-String                                                           |
| ---------------------- | --------------------------------------------------------------------------------- |
| Windows NT auf x86 CPU | Mozilla/5.0 (Windows NT _x_._y_; rv:10.0) Gecko/20100101 Firefox/10.0             |
| Windows NT auf x64 CPU | Mozilla/5.0 (Windows NT _x_._y_; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0 |

> [!NOTE]
> Eine aarch64-CPU wird als x86_64 auf Windows 11 und als x86 auf Windows 10 gemeldet (da es keine x64-Emulation unterstützt).
> Siehe [Bugzilla #1763310](https://bugzil.la/1763310).

## macOS

Hierbei ist _x.y_ die Version von macOS (zum Beispiel macOS 10.15). Ab Firefox 87 begrenzt Firefox die gemeldete macOS-Versionsnummer auf 10.15, sodass macOS 11.0 Big Sur und später als "10.15" im User-Agent-String gemeldet werden. ARM-basierte Macs werden im User-Agent-String als "Intel" gemeldet.

| Mac OS X Version                      | Gecko User-Agent-String                                                            |
| ------------------------------------- | ---------------------------------------------------------------------------------- |
| Mac OS X auf x86, x86_64 oder aarch64 | Mozilla/5.0 (Macintosh; Intel Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0 |
| Mac OS X auf PowerPC                  | Mozilla/5.0 (Macintosh; PPC Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0   |

## Linux

Linux ist eine vielfältigere Plattform. Ihre Linux-Distribution könnte eine Erweiterung enthalten, die Ihren User-Agent ändert. Einige gängige Beispiele werden unten gegeben.

| Linux Version                | Gecko User-Agent-String                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| Linux-Desktop auf i686 CPU   | Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0   |
| Linux-Desktop auf x86_64 CPU | Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0 |

> [!NOTE]
> Ab Firefox 127.0 und später wird 32-Bit x86 nun als x86_64 im User-Agent-String von Firefox, [`navigator.platform`](/de/docs/Web/API/Navigator/platform) und [`navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) gemeldet (siehe [Firefox 127.0 Release Notes](https://www.mozilla.org/en-US/firefox/127.0/releasenotes/)).

## Firefox für Android

Firefox für Android enthält die Android-Version als Teil des _platform_-Tokens. Zur Erhöhung der Interoperabilität meldet der Browser, wenn er auf einer Version unterhalb von 4 läuft, Version 4.4. Android-Versionen 4 und höher melden die Version genau. Beachten Sie, dass dasselbe Gecko – mit denselben Fähigkeiten – für alle Android-Versionen ausgeliefert wird.

| Formfaktor | Gecko User-Agent-String                                            |
| ---------- | ------------------------------------------------------------------ |
| Telefon    | Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0 |
| Tablet     | Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0 |

## Focus für Android

Ab Version 1 wird Focus von Android WebView betrieben und verwendet das folgende User-Agent-String-Format:

```plain
Mozilla/5.0 (Linux; <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Version/4.0 Focus/<focus version> Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
```

WebView-Tablet-Versionen spiegeln Mobile wider, enthalten aber kein `Mobile`-Token.

Ab Version 6 können Benutzer die Verwendung eines auf GeckoView basierenden Focus für Android mit einer versteckten Voreinstellung aktivieren: es verwendet einen GeckoView-UA-String, um Gecko-Kompatibilität zu bewerben.

| Focus Version (Rendering Engine) | User Agent-String                                                                                                                      |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (WebView Mobile)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36 |
| 1.0 (WebView Tablet)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Safari/537.36        |
| 6.0 (GeckoView)                  | Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0                                                                     |

Der Klar-User-Agent ist derselbe wie [Focus](#focus_für_ios).

## Firefox für iOS

Firefox für iOS verwendet den standardmäßigen Mobile Safari UA-String mit einem zusätzlichen **FxiOS/\<version>**-Token auf iPod und iPhone, ähnlich wie sich [Chrome für iOS identifiziert](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/ios/user_agent.md).

| Formfaktor | Firefox für iOS User-Agent-String                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| iPod       | Mozilla/5.0 (iPod touch; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4 |
| iPhone     | Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4     |
| iPad       | Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15                       |

Auf dem iPad erscheint der User-Agent-String genau wie Safari. Für verschiedene Probleme im Zusammenhang mit der Nichtaufnahme von `FxiOS` auf iOS, siehe [mozilla-mobile/firefox-ios#6620](https://github.com/mozilla-mobile/firefox-ios/issues/6620).

## Focus für iOS

Version 7 von Focus für iOS verwendet einen User-Agent-String mit dem folgenden Format:

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/7.0.4 Mobile/16B91 Safari/605.1.15
```

Hinweis: dieser User-Agent wurde von einem iPhone XR-Simulator abgerufen und kann auf dem Gerät abweichen.

## Firefox für Fire TV

Version 3 (und wahrscheinlich frühere) von Firefox für Fire TV verwenden einen User-Agent-String mit dem folgenden Format:

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefox-version> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox TV Version | User Agent-String                                                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| v3.0               | Mozilla/5.0 (Linux; Android 7.1.2) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/3.0 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox für Echo Show

Ab Version 1.1 verwendet Firefox für Echo Show einen User-Agent-String mit dem folgenden Format:

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefox-version> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox für Echo Show Version | User-Agent-String                                                                                                                  |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| v1.1                          | Mozilla/5.0 (Linux; Android 5.1.1) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.1 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox OS

| Formfaktor       | Gecko User-Agent-String                                           |
| ---------------- | ----------------------------------------------------------------- |
| Telefon          | Mozilla/5.0 (Mobile; rv:26.0) Gecko/26.0 Firefox/26.0             |
| Tablet           | Mozilla/5.0 (Tablet; rv:26.0) Gecko/26.0 Firefox/26.0             |
| Fernseher        | Mozilla/5.0 (TV; rv:44.0) Gecko/44.0 Firefox/44.0                 |
| Gerätespezifisch | Mozilla/5.0 (Mobile; **_nnnn;_** rv:26.0) Gecko/26.0 Firefox/26.0 |

### Gerätespezifische User-Agent-Strings

Obwohl es von Mozilla **strengstens nicht empfohlen** wird, fügen einige Handy-Hersteller leider ein Token in den User-Agent-String ihres Geräts ein, das die Geräte-ID angibt. Falls dies der Fall ist, sieht der Firefox OS-User-Agent-String wie der gerätespezifische in der obigen Tabelle aus, wobei **_nnnn;_** der vom Hersteller vergebene Code für das Gerät ist (siehe [Richtlinien](https://wiki.mozilla.org/B2G/User_Agent/Device_Model_Inclusion_Requirements)). Einige, die uns aufgefallen sind, haben die Form "**NexusOne;**", "**ZTEOpen;**" oder "**Open C;**" (beachten Sie, dass das Setzen von Leerzeichen ebenfalls nicht empfohlen wird). Wir stellen diese Information bereit, um Ihnen bei der UA-Erkennungslogik zu helfen, aber Mozilla rät von der Erkennung einer Geräte-ID in UA-Strings ab.

Hier ist ein JavaScript-Regulärausdruck, der alle mobilen Geräte erkennt, einschließlich Geräte mit einer Geräte-ID in ihrem UA-String:

```js
/mobi/i;
```

Das `i` macht es groß-/kleinschreibungsunabhängig und `mobi` passt auf alle mobilen Browser.

### Firefox OS Versionsnummer

Obwohl die Versionsnummer für Firefox OS nicht im User-Agent-String enthalten ist, ist es möglich, aus der im User-Agent-String vorhandenen Gecko-Versionsnummer Versionsinformationen abzuleiten.

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
> Es ist einfach, die Entsprechungen durch Betrachten der [Mercurial-Repository-Namen](https://hg-edge.mozilla.org/releases) zu finden: Repositories, die mit `mozilla-b2g` beginnen, sind die Release-Repositories für Firefox OS und enthalten sowohl Firefox OS- als auch Gecko-Versionen in ihren Namen.

Firefox OS hat eine vierstellige Versionsnummer: `X.X.X.Y`. Die ersten beiden Ziffern gehören dem Mozilla-Produktteam und bezeichnen Versionen mit neuen Funktionen (z.B.: v1.1, 1.2, etc.). Die dritte Ziffer wird bei regulären Versionstags (etwa alle 6 Wochen) für Sicherheitsupdates inkrementiert, und die vierte gehört dem OEM.

## Siehe auch

- Empfehlungen zur [Sniffing des UA-Strings für plattformübergreifende Unterstützung](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
- [`navigator.userAgent`](/de/docs/Web/API/Window/navigator)
