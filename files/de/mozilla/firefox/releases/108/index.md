---
title: Firefox 108 für Entwickler
slug: Mozilla/Firefox/Releases/108
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 108, die Entwickler betreffen werden. Firefox 108 wurde am 13. Dezember 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("source")}}-Element unterstützt die Attribute [`height`](/de/docs/Web/HTML/Element/source#height) und [`width`](/de/docs/Web/HTML/Element/source#width), wenn es ein Kind eines {{HTMLElement("picture")}}-Elements ist.
  Diese Funktionalität kann über die Einstellung `dom.picture_source_dimension_attributes.enabled` konfiguriert werden, die jetzt standardmäßig auf `true` gesetzt ist ([Firefox Bug 1795953](https://bugzil.la/1795953)).

### CSS

- [Trigonometrische Funktionen](/de/docs/Web/CSS/CSS_Functions#trigonometric_functions) sind jetzt mit der Einstellung `layout.css.trig.enabled` standardmäßig auf `true` aktiviert.
  Dies ermöglicht die Verwendung von `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()` und `atan2()` Funktionen ([Firefox Bug 1774589](https://bugzil.la/1774589), [Firefox Bug 1787070](https://bugzil.la/1787070)).
- Der CSS-Typ [`<calc-constant>`](/de/docs/Web/CSS/calc-keyword) ist implementiert, um bekannte Konstanten wie `pi` und `e` innerhalb von [Mathematikfunktionen](/de/docs/Web/CSS/CSS_Functions#math_functions) zu ermöglichen ([Firefox Bug 1682444](https://bugzil.la/1682444), [Firefox Bug 1787070](https://bugzil.la/1787070)).
- Längeneinheiten für Containerabfragen werden jetzt über die Einstellung `layout.css.container-queries.enabled` unterstützt, die standardmäßig auf `false` gesetzt ist.
  Durch Einstellen dieser Einstellung auf `true` können die Längeneinheiten `cqw`, `cqh`, `cqi`, `cqb`, `cqmin` und `cqmax` verwendet werden, die relativ zur Größe eines Abfragecontainers sind.
  Weitere Informationen zu diesen Einheiten finden Sie in der Dokumentation zu [CSS Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units) ([Firefox Bug 1744231](https://bugzil.la/1744231)).
- Die Eigenschaft [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji) wird jetzt über die Einstellung `layout.css.font-variant-emoji.enabled` unterstützt, die standardmäßig auf `false` gesetzt ist. Diese Eigenschaft ermöglicht es Ihnen, einen Standarddarstellungsstil für die Anzeige von Emojis festzulegen ([Firefox Bug 1461589](https://bugzil.la/1461589)).

### JavaScript

Keine bemerkenswerten Änderungen

### HTTP

- Die HTTP Header-Direktiven [`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy) [`style-src-elem`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src-elem) und [`style-src-attr`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src-attr) werden nun unterstützt.
  Ein Server kann diese verwenden, um gültige Quellen für Stylesheet `<style>`-Elemente und `<link>`-Elemente mit `rel="stylesheet"`, sowie für an einzelnen Elementen angewandte Stile anzugeben ([Firefox Bug 1529338](https://bugzil.la/1529338)).
- Die HTTP Header-Direktiven [`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy) [`script-src-elem`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-elem) und [`script-src-attr`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-attr) werden nun unterstützt.
  Ein Server kann diese verwenden, um gültige Quellen für JavaScript `<script>`-Elemente und für Inline-Skript-Event-Handler wie `onclick` anzugeben ([Firefox Bug 1529337](https://bugzil.la/1529337)).
- Berichte über Verstöße gegen die [`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy) enthalten nun die Eigenschaften `effective-directive` und `status-code`.
  Weitere Informationen finden Sie unter [Syntax des Verstoßberichts](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri#violation_report_syntax) ([Firefox Bug 1192684](https://bugzil.la/1192684)).

### APIs

- [Import maps](/de/docs/Web/HTML/Element/script/type/importmap) werden jetzt unterstützt.
  Import Maps bieten Flexibilität und zusätzliche Kontrolle darüber, wie Browser Modulspezifizierer beim Importieren von [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) auflösen.
  ([Firefox Bug 1795647](https://bugzil.la/1795647)).

#### Medien, WebRTC und Web Audio

- Die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) ist jetzt in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar.
  Anfragen an [`navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) werden Benutzer mit aktiven MIDI-Geräten auffordern, ein [Site Permission Add-On](https://support.mozilla.org/en-US/kb/site-permission-add-ons) zu installieren, das zur Aktivierung der API erforderlich ist.
  Weitere Informationen finden Sie unter [Firefox Bug 1795025](https://bugzil.la/1795025).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Nach einer [Änderung in der Spezifikation](https://github.com/w3c/webdriver-bidi/pull/259) wurde das Logeintrag-Level `"warning"` in `"warn"` umbenannt ([Firefox Bug 1797115](https://bugzil.la/1797115)).
- Wenn `script.evaluate` und `script.callFunction` mit einem Sandbox-Namen verwendet werden, der einem leeren String entspricht, wird die Auswertung nun im Standardbereich durchgeführt ([Firefox Bug 1793589](https://bugzil.la/1793589)).
- Unterstützung für das Ereignis `browsingContext.domContentLoaded` hinzugefügt ([Firefox Bug 1756610](https://bugzil.la/1756610)).

#### Marionette

- Unterstützung für die `tiltX`, `tiltY` und `twist` Eigenschaften von Zeigeraktionen für `WebDriver:PerformActions` hinzugefügt ([Firefox Bug 1793832](https://bugzil.la/1793832)).
- Ein Fehler wurde behoben, bei dem `WebDriver:GetElementText` den Elementtext für prettified XML nicht zurückgegeben hat ([Firefox Bug 1794099](https://bugzil.la/1794099)).
- `HTMLDocument` wird nicht mehr als `WebElement`-Referenz serialisiert ([Firefox Bug 1793920](https://bugzil.la/1793920)).
- `WebDriver:NewWindow` öffnet nun ein Fenster mit einem `about:blank` Tab anstelle von `about:newtab` ([Firefox Bug 1533058](https://bugzil.la/1533058)).

## Änderungen für Add-on-Entwickler

- Firefox gibt nun eine Warnung aus, wenn eine Erweiterung installiert wird, deren [Versionsnummer](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) nicht dem empfohlenen Format folgt ([Firefox Bug 1793925](https://bugzil.la/1793925)).

## Ältere Versionen

{{Firefox_for_developers}}