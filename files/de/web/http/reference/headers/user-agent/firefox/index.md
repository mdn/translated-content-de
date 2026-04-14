---
title: Firefox User-Agent-String Referenz
short-title: Firefox UA-String
slug: Web/HTTP/Reference/Headers/User-Agent/Firefox
l10n:
  sourceCommit: 0bd99260a605fec40b453f2e6178f15b0b2a6c03
---

Dieses Dokument beschreibt den User-Agent-String, der in Firefox 4 und später sowie in Anwendungen, die auf Gecko 2.0 und später basieren, verwendet wird. Für eine Aufschlüsselung der Änderungen am String in Gecko 2.0 siehe [Final User Agent string for Firefox 4](https://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/) (Blogbeitrag). Siehe auch dieses Dokument über [User-Agent-Erkennung](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) und diesen [Hacks-Blogbeitrag](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/).

## Allgemeine Form

Der UA-String von Firefox selbst ist in vier Komponenten unterteilt:

`Mozilla/5.0 (plattform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version`

- `Mozilla/5.0` ist das allgemeine Token, das aussagt, dass der Browser mit Mozilla kompatibel ist und heute bei fast jedem Browser üblich ist.
- `plattform` beschreibt die native Plattform, auf der der Browser läuft (z.B. Windows, Mac, Linux oder Android) und ob es sich um ein Mobiltelefon handelt oder nicht. Firefox OS-Telefone sagen `Mobile`; das Web ist die Plattform. Beachten Sie, dass `plattform` aus mehreren durch `;` getrennten Tokens bestehen kann. Weitere Details und Beispiele finden Sie unten.

- `rv:gecko-version` gibt die Release-Version von Gecko an (z.B. `17.0`).
- `Gecko/gecko-trail` zeigt, dass der Browser auf Gecko basiert.
- Auf dem Desktop ist `gecko-trail` der feste String `20100101`.
- `Firefox/firefox-version` gibt an, dass der Browser Firefox ist und liefert die Version (z.B. `17.0`).
- Ab Firefox 10 auf mobilen Geräten ist `gecko-trail` identisch mit `firefox-version`.

> [!NOTE]
> Der empfohlene Weg, um Gecko-basierte Browser zu erkennen (falls Sie _unbedingt_ nach der Browser-Engine und nicht durch Feature-Erkennung suchen müssen), ist das Vorhandensein der Strings `Gecko` und `rv:`, da einige andere Browser ein `like Gecko`-Token enthalten.

Für andere Produkte, die auf Gecko basieren, kann der String eine von zwei Formen annehmen, wobei die Tokens die gleiche Bedeutung haben, außer die unten genannten:

`Mozilla/5.0 (plattform; rv:gecko-version) Gecko/gecko-trail app-name/app-version`
`Mozilla/5.0 (plattform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version app-name/app-version`

- `app-name/app-version` gibt den Namen und die Version der Anwendung an. Zum Beispiel könnte dies `Camino/2.1.1` oder `SeaMonkey/2.7.1` sein.
- `Firefox/firefox-version` ist ein optionales Kompatibilitäts-Token, das einige Gecko-basierte Browser einbeziehen können, um maximale Kompatibilität mit Websites zu erreichen, die Firefox erwarten. `firefox-version` wird im Allgemeinen die äquivalente Firefox-Veröffentlichung darstellen, die der angegebenen Gecko-Version entspricht. Einige Gecko-basierte Browser entscheiden sich möglicherweise dagegen, dieses Token zu verwenden; aus diesem Grund sollten Erkennungsverfahren nach Gecko – nicht nach Firefox – suchen!

## Mobile- und Tablet-Indikatoren

Der `plattform`-Teil des UA-Strings gibt an, ob Firefox auf einem telefon- oder tabletgroßen Gerät läuft. Wenn Firefox auf einem Gerät mit Telefonformfaktor läuft, gibt es ein `Mobile;`-Token im `plattform`-Teil des UA-Strings. Wenn Firefox auf einem Tablet-Gerät läuft, gibt es stattdessen ein `Tablet;`-Token im `plattform`-Teil des UA-Strings. Zum Beispiel:

```plain
Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0
Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0
```

> [!NOTE]
> Die Versionsnummern sind nicht relevant. Vermeiden Sie es, daraus Schlüsse zu ziehen.

Der bevorzugte Weg, um Inhalte gezielt für einen Geräteformfaktor anzupassen, ist die Verwendung von CSS-Media-Queries. Falls Sie jedoch UA-Erkennung verwenden, um Inhalte gezielt für einen Geräteformfaktor anzupassen, suchen Sie bitte nach **Mobi** (um Opera Mobile einzuschließen, das "Mobi" verwendet) für den Telefonformfaktor und nehmen Sie **keine** Korrelation zwischen "Android" und dem Geräteformfaktor an. Auf diese Weise funktioniert Ihr Code, wenn Firefox auf anderen Smartphones/Tablets Betriebssystemen erscheint oder Android für Laptops verwendet wird. Verwenden Sie außerdem Touch-Erkennung, um Touch-Geräte zu finden, anstatt "Mobi" oder "Tablet" zu suchen, da es Touch-Geräte geben kann, die keine Tablets sind.

> [!NOTE]
> Firefox OS-Geräte identifizieren sich ohne Betriebssystemangabe; zum Beispiel: "Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0". Das Web ist die Plattform.

## Windows

Windows-User-Agents haben die folgenden Variationen, wobei _x.y_ die Windows NT-Version ist (zum Beispiel, Windows NT 6.1).

| Windows-Version        | Gecko-User-Agent-String                                                           |
| ---------------------- | --------------------------------------------------------------------------------- |
| Windows NT auf x86 CPU | Mozilla/5.0 (Windows NT _x_._y_; rv:10.0) Gecko/20100101 Firefox/10.0             |
| Windows NT auf x64 CPU | Mozilla/5.0 (Windows NT _x_._y_; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0 |

> [!NOTE]
> Eine aarch64 CPU wird als x86_64 auf Windows 11 und als x86 auf Windows 10 gemeldet (da es keine x64-Emulation unterstützt).
> Siehe [Bugzilla #1763310](https://bugzil.la/1763310).

## macOS

Hierbei ist _x.y_ die Version von macOS (zum Beispiel, macOS 10.15). Ab Firefox 87 begrenzt Firefox die gemeldete macOS-Versionsnummer auf 10.15, sodass macOS 11.0 Big Sur und spätere Versionen als "10.15" im User-Agent-String gemeldet werden. Macs mit ARM-Prozessoren werden im User-Agent-String als "Intel" gemeldet.

| Mac OS X-Version                      | Gecko-User-Agent-String                                                            |
| ------------------------------------- | ---------------------------------------------------------------------------------- |
| Mac OS X auf x86, x86_64 oder aarch64 | Mozilla/5.0 (Macintosh; Intel Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0 |
| Mac OS X auf PowerPC                  | Mozilla/5.0 (Macintosh; PPC Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0   |

## Linux

Linux ist eine vielfältigere Plattform. Ihre Linux-Distribution könnte eine Erweiterung enthalten, die Ihren User-Agent ändert. Einige häufige Beispiele sind unten gegeben.

| Linux-Version                | Gecko-User-Agent-String                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| Linux-Desktop auf i686 CPU   | Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0   |
| Linux-Desktop auf x86_64 CPU | Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0 |

> [!NOTE]
> In Firefox 127.0 und später wird 32-bit x86 nun als x86_64 im User-Agent-String von Firefox, [`navigator.platform`](/de/docs/Web/API/Navigator/platform), und [`navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) gemeldet (siehe [Firefox 127.0 Release Notes](https://www.firefox.com/en-US/firefox/127.0/releasenotes/)).

## Firefox für Android

Firefox für Android enthält die Android-Version als Teil des _plattform_-Tokens. Für erhöhte Interoperabilität meldet der Browser, wenn er auf einer Version unter 4 läuft, 4.4. Android-Versionen 4 und höher melden die Version genau. Beachten Sie, dass das gleiche Gecko, mit den gleichen Fähigkeiten, an alle Android-Versionen ausgeliefert wird.

| Formfaktor | Gecko-User-Agent-String                                            |
| ---------- | ------------------------------------------------------------------ |
| Telefon    | Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0 |
| Tablet     | Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0 |

## Focus für Android

Ab Version 1 wird Focus von Android WebView betrieben und verwendet das folgende User-Agent-String-Format:

```plain
Mozilla/5.0 (Linux; <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Version/4.0 Focus/<focus version> Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
```

Tablet-Versionen auf WebView spiegeln mobile Versionen wider, enthalten jedoch kein `Mobile`-Token.

Ab Version 6 können Benutzer sich für ein GeckoView-basiertes Focus für Android über eine versteckte Voreinstellung entscheiden: Es verwendet einen GeckoView UA-String, um Gecko-Kompatibilität zu bewerben.

| Focus-Version (Rendering-Engine) | User-Agent-String                                                                                                                      |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (WebView Mobile)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36 |
| 1.0 (WebView Tablet)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Safari/537.36        |
| 6.0 (GeckoView)                  | Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0                                                                     |

Der Klar-User-Agent ist derselbe wie [Focus](#focus_für_ios).

## Firefox für iOS

Firefox für iOS verwendet den standardmäßigen Mobile Safari UA-String, mit einem zusätzlichen **FxiOS/\<version>**-Token auf iPod und iPhone, ähnlich wie sich [Chrome für iOS identifiziert](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/ios/user_agent.md).

| Formfaktor | Firefox für iOS-User-Agent-String                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| iPod       | Mozilla/5.0 (iPod touch; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4 |
| iPhone     | Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4     |
| iPad       | Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15                       |

Auf dem iPad erscheint der User-Agent-String identisch wie Safari. Für verschiedene Probleme im Zusammenhang mit der Nichtaufnahme von `FxiOS` auf iOS siehe [mozilla-mobile/firefox-ios#6620](https://github.com/mozilla-mobile/firefox-ios/issues/6620).

## Focus für iOS

Version 7 von Focus für iOS verwendet einen User-Agent-String mit folgendem Format:

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/7.0.4 Mobile/16B91 Safari/605.1.15
```

Hinweis: Dieser User-Agent wurde aus einem iPhone XR-Simulator abgerufen und kann auf Geräten unterschiedlich sein.

## Siehe auch

- Empfehlungen für die [Erkennung des UA-Strings für plattformübergreifende Unterstützung](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
- [`navigator.userAgent`](/de/docs/Web/API/Window/navigator)
