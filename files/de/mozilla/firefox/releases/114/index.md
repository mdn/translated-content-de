---
title: Firefox 114 Versionshinweise für Entwickler
short-title: Firefox 114
slug: Mozilla/Firefox/Releases/114
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 114, die Entwickler betreffen. Firefox 114 wurde am 6. Juni 2023 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Ein Problem wurde behoben, bei dem der [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ARIA-Rollen auf Elementen nicht korrekt anzeigte, was sich darauf auswirkte, wie [Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/landmark_role) dargestellt wurden. Rollen, die nicht ARIA zugeordnet werden können, verwenden einen Gecko-internen Rollennamen ([Firefox-Bug 1572512](https://bugzil.la/1572512)).

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die [`:lang()`](/de/docs/Web/CSS/:lang) Pseudo-Klasse verwendet jetzt String-Matching-Semantiken (einschließlich `*` Platzhalter) zum Abgleichen von Sprachcodes anstelle von Präfix-Matching-Semantiken. Zusätzlich werden jetzt durch Kommata getrennte Listen von Sprachen unterstützt, um mehrere Sprachen abzugleichen ([Firefox-Bug 1121792](https://bugzil.la/1121792)).
- Die [`-webkit-text-security`](/de/docs/Web/CSS/Reference/Properties/-webkit-text-security) Eigenschaft, die es erlaubt, Zeichen durch Formen zu ersetzen, wird jetzt unterstützt. Sie können jetzt die Darstellung der Textsicherheit mit dieser Eigenschaft steuern ([Firefox-Bug 1826629](https://bugzil.la/1826629)).
- Die Konstanten `infinity` und `NaN` werden jetzt innerhalb der [`calc()`](/de/docs/Web/CSS/calc) Funktion unterstützt ([Firefox-Bug 1830759](https://bugzil.la/1830759)).

### JavaScript

- [Workers](/de/docs/Web/API/Web_Workers_API) unterstützen jetzt das Laden von [ECMAScript Modulen](/de/docs/Web/JavaScript/Guide/Modules). Sie können Module in Worker laden, indem Sie die `{type: "module"}` Option in den [`Worker`](/de/docs/Web/API/Worker/Worker#type) und [`SharedWorker` Konstruktoren](/de/docs/Web/API/SharedWorker/SharedWorker#type) angeben. Worker-Skripte können Module auch statisch oder dynamisch mit [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) und [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) importieren ([Firefox-Bug 1812591](https://bugzil.la/1812591)).
- [Worklets](/de/docs/Web/API/Worklet) können jetzt [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) verwenden, um [ECMAScript/JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) statisch zu importieren ([Firefox-Bug 1812591](https://bugzil.la/1812591)).

### SVG

- Das [`crossorigin`](/de/docs/Web/SVG/Reference/Attribute/crossorigin) Attribut wird jetzt in [`image`](/de/docs/Web/SVG/Reference/Element/image) und [`feImage`](/de/docs/Web/SVG/Reference/Element/feImage) Elementen unterstützt ([Firefox-Bug 1240357](https://bugzil.la/1240357)).

### APIs

- [`Window.print()`](/de/docs/Web/API/Window/print) öffnet jetzt einen Druckdialog auf Firefox für Android, wodurch das aktuelle Dokument gedruckt werden kann ([Firefox-Bug 1809922](https://bugzil.la/1809922)).
- Die [WebTransport API](/de/docs/Web/API/WebTransport_API) wird jetzt unterstützt, einschließlich der folgenden Schnittstellen: [`WebTransport`](/de/docs/Web/API/WebTransport), [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream), [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream), [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream), [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream), [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) und [`WebTransportError`](/de/docs/Web/API/WebTransportError). Weitere Informationen finden Sie in [Firefox-Bug 1692754](https://bugzil.la/1692754), [Firefox-Bug 1818754](https://bugzil.la/1818754) und [Firefox-Bug 1791835](https://bugzil.la/1791835).

- [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) kann jetzt verwendet werden, um jegliche `supports()` Bedingungen zu erhalten, die angegeben wurden, als die {{cssxref("@import")}} [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) verwendet wurde ([Firefox-Bug 1829590](https://bugzil.la/1829590)).

#### Entfernungen

- Die veraltete und nicht standardisierte `mozImageSmoothingEnabled` Eigenschaft wurde dauerhaft entfernt. Siehe die [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) Eigenschaft für Abstimmung von Skalierten Bildern ([Firefox-Bug 1228850](https://bugzil.la/1228850)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die Befehle `input.performActions` und `input.releaseActions` hinzugefügt, die zur Emulation von Benutzereingaben für die Interaktion mit Elementen auf Webseiten verwendet werden können. Ähnlich wie in Marionette werden alle verfügbaren Eingabequellen der WebDriver-Spezifikation unterstützt, die `key`, `pointer` und `wheel` sind ([Firefox-Bug 1832380](https://bugzil.la/1832380)).
- Unterstützung für benutzerdefinierte Browser-zu-Client-Nachrichten hinzugefügt, die es ermöglichen, ein `script.message` Ereignis innerhalb eines Skripts zu senden, das zuvor über `script.addPreloadScript` installiert wurde ([Firefox-Bug 1824187](https://bugzil.la/1824187)).
- Unterstützung für den `serializationOptions` Parameter für `script.evaluate` und `script.callFunction` hinzugefügt, um die `RemoteValue` Serialisierung anzupassen ([Firefox-Bug 1824953](https://bugzil.la/1824953)).
- Ein Problem wurde behoben, bei dem sowohl die `script.evaluate` als auch die `script.callFunction` Befehle den Stack-Trace nicht einbeziehen und die Ausnahme-Details für eine abgelehnte Promise nicht korrekt aufbauen konnten ([Firefox-Bug 1829630](https://bugzil.la/1829630)).
- Ein Problem wurde behoben, bei dem die `browsingContext.domContentLoaded` und `browsingContext.load` Ereignisse die korrekte `url` nicht meldeten, wenn die Seite einen \<base> Metatag definierte ([Firefox-Bug 1825634](https://bugzil.la/1825634)).

#### Marionette

- Ein Problem wurde behoben, bei dem der Befehl `WebDriver:GetComputedRole` die WAI-ARIA-Rollen nicht korrekt zurückgab ([Firefox-Bug 1822112](https://bugzil.la/1822112)).
- Ein Problem wurde behoben, bei dem Modifikationstasten nicht zurückgesetzt wurden, wenn sie innerhalb des gleichen `WebDriver:ElementSendKeys` Befehls erneut verwendet wurden ([Firefox-Bug 1776190](https://bugzil.la/1776190)).

## Änderungen für Add-on-Entwickler

### Entfernungen

- Die Unterstützung für [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) in den Manifest-Schlüsseln [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action), [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui), [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) und [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) wird für Manifest V3 Erweiterungen nicht mehr unterstützt ([Firefox-Bug 1827910](https://bugzil.la/1827910)). Siehe [Manifest v3 Migration](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) für Informationen über den Übergang von `browser_style` in Manifest V3 Erweiterungen.
