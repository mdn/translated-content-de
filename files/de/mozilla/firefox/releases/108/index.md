---
title: Firefox 108 Versionshinweise für Entwickler
short-title: Firefox 108
slug: Mozilla/Firefox/Releases/108
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 108, die Entwickler betreffen werden. Firefox 108 wurde am 13. Dezember 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("source")}}-Element unterstützt die Attribute [`height`](/de/docs/Web/HTML/Reference/Elements/source#height) und [`width`](/de/docs/Web/HTML/Reference/Elements/source#width), wenn es ein Kind eines {{HTMLElement("picture")}}-Elements ist. Diese Funktionalität kann über die Einstellung `dom.picture_source_dimension_attributes.enabled` konfiguriert werden, die jetzt standardmäßig auf `true` gesetzt ist ([Firefox-Bug 1795953](https://bugzil.la/1795953)).

### CSS

- [Trigonometrische Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#trigonometric_functions) sind jetzt aktiviert, wenn die Einstellung `layout.css.trig.enabled` standardmäßig auf `true` gesetzt ist. Dies ermöglicht die Verwendung der Funktionen `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()` und `atan2()` ([Firefox-Bug 1774589](https://bugzil.la/1774589), [Firefox-Bug 1787070](https://bugzil.la/1787070)).
- Der CSS-Typ [`<calc-constant>`](/de/docs/Web/CSS/Reference/Values/calc-keyword) wurde implementiert, um bekannte Konstanten wie `pi` und `e` innerhalb von [mathematischen Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) zu ermöglichen ([Firefox-Bug 1682444](https://bugzil.la/1682444), [Firefox-Bug 1787070](https://bugzil.la/1787070)).
- Container-Abfrage-Längeneinheiten werden jetzt über die Einstellung `layout.css.container-queries.enabled` unterstützt, die standardmäßig auf `false` gesetzt ist. Wenn Sie diese Einstellung auf `true` setzen, können Sie die Einheiten `cqw`, `cqh`, `cqi`, `cqb`, `cqmin` und `cqmax` verwenden, die relativ zur Größe eines Abfrage-Containers sind. Weitere Informationen zu diesen Einheiten finden Sie in der Dokumentation zu [CSS-Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries#container_query_length_units) ([Firefox-Bug 1744231](https://bugzil.la/1744231)).
- Die Eigenschaft [`font-variant-emoji`](/de/docs/Web/CSS/Reference/Properties/font-variant-emoji) wird jetzt über die Einstellung `layout.css.font-variant-emoji.enabled` unterstützt, die standardmäßig auf `false` gesetzt ist. Diese Eigenschaft ermöglicht es, einen Standardpräsentationsstil für die Anzeige von Emojis festzulegen ([Firefox-Bug 1461589](https://bugzil.la/1461589)).

### JavaScript

Keine bemerkenswerten Änderungen

### HTTP

- Die HTTP Header-Direktiven [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) [`style-src-elem`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src-elem) und [`style-src-attr`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src-attr) werden jetzt unterstützt. Ein Server kann diese verwenden, um gültige Quellen für `<style>`-Elemente und `<link>`-Elemente mit `rel="stylesheet"` und für Stile, die auf einzelne Elemente angewendet werden, anzugeben ([Firefox-Bug 1529338](https://bugzil.la/1529338)).
- Die HTTP Header-Direktiven [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) [`script-src-elem`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-elem) und [`script-src-attr`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-attr) werden jetzt unterstützt. Ein Server kann diese verwenden, um gültige Quellen für `<script>`-Elemente und für Inline-Skript-Event-Handler wie `onclick` anzugeben ([Firefox-Bug 1529337](https://bugzil.la/1529337)).
- Berichte über Verstöße gegen die [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) enthalten jetzt `effective-directive` und `status-code`-Eigenschaften. Weitere Informationen finden Sie unter [Verstoßbericht-Syntax](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax) ([Firefox-Bug 1192684](https://bugzil.la/1192684)).

### APIs

- [Import Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) werden jetzt unterstützt. Import Maps bieten Flexibilität und zusätzliche Kontrolle darüber, wie Browser Modul-Spezifizierer beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) auflösen. ([Firefox-Bug 1795647](https://bugzil.la/1795647)).

#### Medien, WebRTC und Web Audio

- Die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) ist jetzt in [sicherem Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar. Aufrufe von [`navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) werden Benutzer mit aktiven MIDI-Geräten dazu auffordern, ein [Site-Berechtigungs-Add-On](https://support.mozilla.org/en-US/kb/site-permission-add-ons) zu installieren, das erforderlich ist, um die API zu aktivieren. Weitere Informationen finden Sie unter [Firefox-Bug 1795025](https://bugzil.la/1795025).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Nach einer [Änderung in der Spezifikation](https://github.com/w3c/webdriver-bidi/pull/259) wurde das Protokoll-Eintragslevel `"warning"` in `"warn"` umbenannt ([Firefox-Bug 1797115](https://bugzil.la/1797115)).
- Beim Verwenden von `script.evaluate` und `script.callFunction` mit einem Sandbox-Namen, der einem leeren String entspricht, erfolgt die Auswertung nun mit dem Standardbereich ([Firefox-Bug 1793589](https://bugzil.la/1793589)).
- Unterstützung für das `browsingContext.domContentLoaded`-Ereignis hinzugefügt ([Firefox-Bug 1756610](https://bugzil.la/1756610)).

#### Marionette

- Unterstützung für die Eigenschaften `tiltX`, `tiltY` und `twist` von Zeigeraktionen für `WebDriver:PerformActions` hinzugefügt ([Firefox-Bug 1793832](https://bugzil.la/1793832)).
- Ein Fehler wurde behoben, bei dem `WebDriver:GetElementText` den Elementtext für schön formatiertes XML nicht zurückgab ([Firefox-Bug 1794099](https://bugzil.la/1794099)).
- `HTMLDocument` wird nicht mehr als `WebElement`-Referenz serialisiert ([Firefox-Bug 1793920](https://bugzil.la/1793920)).
- `WebDriver:NewWindow` öffnet jetzt ein Fenster mit einem `about:blank` Tab anstelle von `about:newtab` ([Firefox-Bug 1533058](https://bugzil.la/1533058)).

## Änderungen für Add-on-Entwickler

- Firefox gibt jetzt eine Warnung aus, wenn eine Erweiterung installiert wird, deren [Versionsnummer](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) nicht dem empfohlenen Format entspricht ([Firefox-Bug 1793925](https://bugzil.la/1793925)).
