---
title: Firefox 108 Versionshinweise für Entwickler
short-title: Firefox 108
slug: Mozilla/Firefox/Releases/108
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 108, die Entwickler betreffen. Firefox 108 wurde am 13. Dezember 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("source")}}-Element unterstützt die Attribute [`height`](/de/docs/Web/HTML/Reference/Elements/source#height) und [`width`](/de/docs/Web/HTML/Reference/Elements/source#width), wenn es ein untergeordnetes Element eines {{HTMLElement("picture")}}-Elements ist. Diese Funktionalität kann über die Einstellung `dom.picture_source_dimension_attributes.enabled` konfiguriert werden, die jetzt standardmäßig auf `true` gesetzt ist ([Firefox Fehler 1795953](https://bugzil.la/1795953)).

### CSS

- [Trigonometrische Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#trigonometric_functions) sind jetzt mit der Voreinstellung `layout.css.trig.enabled`, die standardmäßig auf `true` gesetzt ist, aktiviert. Dies ermöglicht die Verwendung der Funktionen `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()` und `atan2()` ([Firefox Fehler 1774589](https://bugzil.la/1774589), [Firefox Fehler 1787070](https://bugzil.la/1787070)).
- Der CSS-Typ [`<calc-constant>`](/de/docs/Web/CSS/Reference/Values/calc-keyword) ist implementiert worden, um gut bekannte Konstanten wie `pi` und `e` innerhalb von [mathematischen Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) zu erlauben ([Firefox Fehler 1682444](https://bugzil.la/1682444), [Firefox Fehler 1787070](https://bugzil.la/1787070)).
- Längeneinheiten für Container-Abfragen werden nun über die Einstellung `layout.css.container-queries.enabled` unterstützt, die standardmäßig auf `false` gesetzt ist. Wenn diese Einstellung auf `true` gesetzt wird, können die Längeneinheiten `cqw`, `cqh`, `cqi`, `cqb`, `cqmin` und `cqmax` verwendet werden, die relativ zur Größe eines Abfragecontainers sind. Weitere Informationen zu diesen Einheiten finden Sie in der Dokumentation zu [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units) ([Firefox Fehler 1744231](https://bugzil.la/1744231)).
- Die Eigenschaft [`font-variant-emoji`](/de/docs/Web/CSS/Reference/Properties/font-variant-emoji) wird jetzt über die Einstellung `layout.css.font-variant-emoji.enabled`, die standardmäßig auf `false` gesetzt ist, unterstützt. Diese Eigenschaft ermöglicht es, einen Standarddarstellungsstil für die Anzeige von Emojis festzulegen ([Firefox Fehler 1461589](https://bugzil.la/1461589)).

### JavaScript

Keine bemerkenswerten Änderungen

### HTTP

- Die Direktiven des [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) HTTP-Headers [`style-src-elem`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src-elem) und [`style-src-attr`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src-attr) werden nun unterstützt. Ein Server kann diese verwenden, um gültige Quellen für Stylesheet-`<style>`-Elemente und `<link>`-Elemente mit `rel="stylesheet"` sowie für Stile, die auf einzelne Elemente angewendet werden, anzugeben ([Firefox Fehler 1529338](https://bugzil.la/1529338)).
- Die Direktiven des [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) HTTP-Headers [`script-src-elem`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-elem) und [`script-src-attr`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-attr) werden nun unterstützt. Ein Server kann diese verwenden, um gültige Quellen für JavaScript-`<script>`-Elemente und für Inline-Skript-Ereignishandler wie `onclick` anzugeben ([Firefox Fehler 1529337](https://bugzil.la/1529337)).
- Verstöße gegen die [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) werden jetzt mit den Eigenschaften `effective-directive` und `status-code` in Berichten dokumentiert. Weitere Informationen finden Sie unter [Verstoßbericht-Syntax](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax) ([Firefox Fehler 1192684](https://bugzil.la/1192684)).

### APIs

- [Import Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) werden jetzt unterstützt. Import Maps bieten Flexibilität und zusätzliche Kontrolle darüber, wie Browser Modul-Spezifizierer auflösen, wenn [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) importiert werden. ([Firefox Fehler 1795647](https://bugzil.la/1795647)).

#### Media, WebRTC und Web Audio

- Die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) ist jetzt in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar. Aufrufe von [`navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) werden Benutzer mit aktiven MIDI-Geräten auffordern, eine [Site Permission Add-On](https://support.mozilla.org/en-US/kb/site-permission-add-ons) zu installieren, die erforderlich ist, um die API zu aktivieren. Weitere Informationen finden Sie unter [Firefox Fehler 1795025](https://bugzil.la/1795025).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Nach einer [Änderung in der Spezifikation](https://github.com/w3c/webdriver-bidi/pull/259) wurde die Protokoll-Eintragsebene `"warning"` in `"warn"` umbenannt ([Firefox Fehler 1797115](https://bugzil.la/1797115)).
- Bei der Verwendung von `script.evaluate` und `script.callFunction` mit einem Sandkastennamen, der einer leeren Zeichenkette entspricht, wird die Auswertung nun mit dem Standardbereich durchgeführt ([Firefox Fehler 1793589](https://bugzil.la/1793589)).
- Unterstützung für das `browsingContext.domContentLoaded`-Ereignis wurde hinzugefügt ([Firefox Fehler 1756610](https://bugzil.la/1756610)).

#### Marionette

- Unterstützung für die Eigenschaften `tiltX`, `tiltY` und `twist` von Zeigeraktionen für `WebDriver:PerformActions` wurde hinzugefügt ([Firefox Fehler 1793832](https://bugzil.la/1793832)).
- Ein Fehler wurde behoben, bei dem `WebDriver:GetElementText` den Text eines Elements für schönformatierte XML nicht zurückgab ([Firefox Fehler 1794099](https://bugzil.la/1794099)).
- `HTMLDocument` wird nicht mehr als `WebElement`-Referenz serialisiert ([Firefox Fehler 1793920](https://bugzil.la/1793920)).
- `WebDriver:NewWindow` öffnet jetzt ein Fenster mit einem `about:blank`-Tab anstelle von `about:newtab` ([Firefox Fehler 1533058](https://bugzil.la/1533058)).

## Änderungen für Add-on-Entwickler

- Firefox gibt jetzt eine Warnung aus, wenn eine Erweiterung installiert wird, deren [Versionsnummer](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) nicht dem empfohlenen Format entspricht ([Firefox Fehler 1793925](https://bugzil.la/1793925)).
