---
title: Firefox 108 für Entwickler
slug: Mozilla/Firefox/Releases/108
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 108, die Entwickler betreffen werden. Firefox 108 wurde am 13. Dezember 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("source")}}-Element unterstützt die Attribute [`height`](/de/docs/Web/HTML/Reference/Elements/source#height) und [`width`](/de/docs/Web/HTML/Reference/Elements/source#width), wenn es ein Kind eines {{HTMLElement("picture")}}-Elements ist.
  Diese Funktionalität kann über die Einstellung `dom.picture_source_dimension_attributes.enabled` konfiguriert werden, die nun standardmäßig auf `true` gesetzt ist ([Firefox Fehler 1795953](https://bugzil.la/1795953)).

### CSS

- [Trigonometrische Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#trigonometric_functions) sind nun mit der Einstellung `layout.css.trig.enabled`, die standardmäßig auf `true` gesetzt ist, aktiviert.
  Dadurch ist die Verwendung der Funktionen `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()` und `atan2()` möglich ([Firefox Fehler 1774589](https://bugzil.la/1774589), [Firefox Fehler 1787070](https://bugzil.la/1787070)).
- Der CSS [`<calc-constant>`](/de/docs/Web/CSS/calc-keyword)-Typ wurde implementiert, um die Verwendung von bekannten Konstanten wie `pi` und `e` innerhalb von [mathematischen Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) zu ermöglichen ([Firefox Fehler 1682444](https://bugzil.la/1682444), [Firefox Fehler 1787070](https://bugzil.la/1787070)).
- Container-Abfragelängen-Einheiten werden jetzt über die Einstellung `layout.css.container-queries.enabled` unterstützt, die standardmäßig auf `false` gesetzt ist.
  Wenn diese Einstellung auf `true` gesetzt wird, ist die Verwendung der Längeneinheiten `cqw`, `cqh`, `cqi`, `cqb`, `cqmin` und `cqmax` möglich, die relativ zur Größe eines Abfragecontainers sind.
  Weitere Informationen zu diesen Einheiten finden Sie in der [CSS Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units)-Dokumentation ([Firefox Fehler 1744231](https://bugzil.la/1744231)).
- Die Eigenschaft [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji) wird nun über die Einstellung `layout.css.font-variant-emoji.enabled` unterstützt, die standardmäßig auf `false` gesetzt ist. Diese Eigenschaft ermöglicht es Ihnen, einen Standarddarstellungsstil für die Anzeige von Emojis festzulegen ([Firefox Fehler 1461589](https://bugzil.la/1461589)).

### JavaScript

Keine bemerkenswerten Änderungen

### HTTP

- Die Direktiven des [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-HTTP-Headers [`style-src-elem`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src-elem) und [`style-src-attr`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src-attr) werden nun unterstützt.
  Ein Server kann diese verwenden, um gültige Quellen für CSS-`<style>`-Elemente und `<link>`-Elemente mit `rel="stylesheet"`, sowie für Stile, die auf einzelne Elemente angewendet werden, anzugeben ([Firefox Fehler 1529338](https://bugzil.la/1529338)).
- Die Direktiven des [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-HTTP-Headers [`script-src-elem`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-elem) und [`script-src-attr`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-attr) werden nun unterstützt.
  Ein Server kann diese verwenden, um gültige Quellen für JavaScript-`<script>`-Elemente und für Inline-Skript-Ereignishandler wie `onclick` anzugeben ([Firefox Fehler 1529337](https://bugzil.la/1529337)).
- Verstöße gegen die [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) enthalten nun die Eigenschaften `effective-directive` und `status-code`.
  Weitere Informationen finden Sie in der [Syntax der Verstoßberichte](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax) ([Firefox Fehler 1192684](https://bugzil.la/1192684)).

### APIs

- [Importmaps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) werden nun unterstützt.
  Importmaps bieten Flexibilität und zusätzliche Kontrolle darüber, wie Browser Modulspezifizierungen beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) auflösen.
  ([Firefox Fehler 1795647](https://bugzil.la/1795647)).

#### Medien, WebRTC und Web Audio

- Die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) ist nun in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar.
  Aufrufe von [`navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) werden Benutzer mit aktiven MIDI-Geräten auffordern, ein [Site Permission Add-On](https://support.mozilla.org/en-US/kb/site-permission-add-ons) zu installieren, das zur Aktivierung der API erforderlich ist.
  Weitere Informationen finden Sie im [Firefox Fehler 1795025](https://bugzil.la/1795025).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Nach einer [Änderung in der Spezifikation](https://github.com/w3c/webdriver-bidi/pull/259) wurde das Protokollstufe `"warning"` in `"warn"` umbenannt ([Firefox Fehler 1797115](https://bugzil.la/1797115)).
- Wenn `script.evaluate` und `script.callFunction` mit einem Sandkastennamen gleich einem leeren String verwendet werden, erfolgt die Auswertung nun im Standardreich ([Firefox Fehler 1793589](https://bugzil.la/1793589)).
- Unterstützung für das Ereignis `browsingContext.domContentLoaded` hinzugefügt ([Firefox Fehler 1756610](https://bugzil.la/1756610)).

#### Marionette

- Unterstützung für die Eigenschaften `tiltX`, `tiltY` und `twist` von Zeigeraktionen für `WebDriver:PerformActions` hinzugefügt ([Firefox Fehler 1793832](https://bugzil.la/1793832)).
- Ein Fehler wurde behoben, bei dem `WebDriver:GetElementText` den Elementtext für schön formatierte XML nicht zurückgab ([Firefox Fehler 1794099](https://bugzil.la/1794099)).
- `HTMLDocument` wird nicht mehr als `WebElement`-Referenz serialisiert ([Firefox Fehler 1793920](https://bugzil.la/1793920)).
- `WebDriver:NewWindow` öffnet nun ein Fenster mit einem `about:blank` Tab anstelle von `about:newtab` ([Firefox Fehler 1533058](https://bugzil.la/1533058)).

## Änderungen für Add-on-Entwickler

- Firefox gibt jetzt eine Warnung aus, wenn eine Erweiterung installiert wird, deren [Versionsnummer](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) nicht dem empfohlenen Format entspricht ([Firefox Fehler 1793925](https://bugzil.la/1793925)).

## Ältere Versionen

{{Firefox_for_developers}}
