---
title: Firefox 138 für Entwickler
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: a749ea1190553e0c875119b829d824ff34507256
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 138, die Entwickler betreffen.
Firefox 138 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

### HTML

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

- Die statische Methode {{jsxref("Error.captureStackTrace()")}} wird jetzt unterstützt. Diese installiert Stack-Trace-Informationen auf einem bereitgestellten Objekt als die Eigenschaft {{jsxref("Error.stack")}}. Der Hauptanwendungsfall ist es, einen Stack-Trace auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist. ([Firefox Bug 1950508](https://bugzil.la/1950508)).
- Die statische Methode {{jsxref("Error.isError()")}} kann jetzt verwendet werden, um zu überprüfen, ob ein Objekt eine Instanz von {{jsxref("Error")}} oder einer [`DOMException`](/de/docs/Web/API/DOMException) ist. Dies ist zuverlässiger als die Verwendung von `instanceof` für denselben Zweck. ([Firefox Bug 1952249](https://bugzil.la/1952249)).

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC-Anwendungen können jetzt eine Präferenz dafür festlegen, ob bei einer Netzwerkverschlechterung die Bildrate oder die Auflösung priorisiert werden soll, wenn beide nicht auf den konfigurierten Stufen gehalten werden können.
  Der Wert wird mit der [`degradationPreference`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) Eigenschaft im Parameterobjekt gesetzt, das an die [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) Methode der `RTCRtpSender`-Schnittstelle übergeben wird.
  Er kann auch aus dem Objekt gelesen werden, das von der [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#degradationpreference) Methode zurückgegeben wird.
  ([Firefox Bug 1329847](https://bugzil.la/1329847)).

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Unterstützung für `page_action` als {{WebExtAPIRef("menus.ContextType")}} im {{WebExtAPIRef("menus")}} API für Manifest V3 Erweiterungen bereitgestellt. Dies bietet Manifest V3 Erweiterungen die gleiche Fähigkeit wie Manifest V2 Erweiterungen, Menüeinträge zu `page_action` hinzuzufügen. ([Firefox Bug 1951166](https://bugzil.la/1951166))
- Die {{WebExtAPIRef("contextualIdentities")}} API ist in Firefox für Android nicht mehr definiert. Zuvor war sie definiert, aber fehlerhaft. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die Berechtigung `contextualIdentities` wird in Firefox für Android jetzt nicht mehr erkannt. Zuvor aktivierte sie eine fehlerhafte Version des "Containers"-Features. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3 Version der {{WebExtAPIRef("userScripts")}} API ist nun auf Firefox für Android verfügbar. ([Firefox Bug 1949955](https://bugzil.la/1949955))
- Die {{WebExtAPIRef("alarms.create")}} API gibt jetzt ein Promise anstelle von undefined zurück. ([Firefox Bug 1869171](https://bugzil.la/1869171))

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Features sind neu in Firefox 138 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **::details-content CSS-Pseudoelement:** `layout.css.details-content.enabled`.
  Das CSS-{{cssxref("::details-content")}} Pseudoelement ermöglicht es Ihnen, den Inhalt des {{htmlElement("details")}} Elements zu stylen ([Firefox Bug 1901037](https://bugzil.la/1901037)).
- **`MutationEvent` auf dem Weg zur Entfernung**: [`MutationEvent`](/de/docs/Web/API/MutationEvent) und seine zugehörigen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`,`DOMAttrModified`) sind jetzt standardmäßig in Firefox Nightly deaktiviert. ([Firefox Bug 1951772](https://bugzil.la/1951772)).

## Ältere Versionen

{{Firefox_for_developers}}
