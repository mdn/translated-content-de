---
title: Firefox 114 Versionshinweise für Entwickler
short-title: Firefox 114
slug: Mozilla/Firefox/Releases/114
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 114, die Entwickler betreffen. Firefox 114 wurde am 06. Juni 2023 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Ein Problem wurde behoben, bei dem der [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ARIA-Rollen auf Elementen nicht korrekt anzeigte, was die Darstellung von [landmark roles](/de/docs/Web/Accessibility/ARIA/Reference/Roles/landmark_role) beeinflusste.
  Rollen, die nicht auf ARIA abbildbar sind, verwenden einen internen Gecko-Rollennamen ([Firefox-Fehler 1572512](https://bugzil.la/1572512)).

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die [`:lang()`](/de/docs/Web/CSS/Reference/Selectors/:lang) Pseudoklasse verwendet jetzt String-Matching-Semantik (einschließlich `*`-Wildcards), um Sprachcodes zu matchen, anstatt Präfix-Matching-Semantik.
  Zudem werden jetzt kommaseparierte Listen von Sprachen unterstützt, um mehrere Sprachen zu matchen ([Firefox-Fehler 1121792](https://bugzil.la/1121792)).
- Die [`-webkit-text-security`](/de/docs/Web/CSS/Reference/Properties/-webkit-text-security) Eigenschaft, die Ihnen erlaubt, Zeichen durch Formen zu ersetzen, wird jetzt unterstützt. Sie können nun die Darstellung der Textsicherheit mit dieser Eigenschaft steuern ([Firefox-Fehler 1826629](https://bugzil.la/1826629)).
- Die Konstanten `infinity` und `NaN` werden jetzt innerhalb der [`calc()`](/de/docs/Web/CSS/Reference/Values/calc) Funktion unterstützt ([Firefox-Fehler 1830759](https://bugzil.la/1830759)).

### JavaScript

- [Workers](/de/docs/Web/API/Web_Workers_API) unterstützen nun das Laden von [ECMAScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules).
  Sie können Module in Workers laden, indem Sie die Option `{type: "module"}` in den [`Worker`](/de/docs/Web/API/Worker/Worker#type) und [`SharedWorker` Konstruktoren](/de/docs/Web/API/SharedWorker/SharedWorker#type) angeben.
  Worker-Skripte können Module auch statisch oder dynamisch mittels [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) und [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) importieren ([Firefox-Fehler 1812591](https://bugzil.la/1812591)).
- [Worklets](/de/docs/Web/API/Worklet) können nun [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) verwenden, um [ECMAScript/JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) statisch zu importieren ([Firefox-Fehler 1812591](https://bugzil.la/1812591)).

### SVG

- Das [`crossorigin`](/de/docs/Web/SVG/Reference/Attribute/crossorigin) Attribut wird nun in [`image`](/de/docs/Web/SVG/Reference/Element/image) und [`feImage`](/de/docs/Web/SVG/Reference/Element/feImage) Elementen unterstützt ([Firefox-Fehler 1240357](https://bugzil.la/1240357)).

### APIs

- [`Window.print()`](/de/docs/Web/API/Window/print) öffnet nun einen Druckdialog auf Firefox für Android, was es ermöglicht, das aktuelle Dokument auszudrucken ([Firefox-Fehler 1809922](https://bugzil.la/1809922)).
- Die [WebTransport API](/de/docs/Web/API/WebTransport_API) wird nun unterstützt und umfasst folgende Schnittstellen: [`WebTransport`](/de/docs/Web/API/WebTransport), [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream), [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream), [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream), [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream), [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) und [`WebTransportError`](/de/docs/Web/API/WebTransportError).
  Für weitere Informationen siehe [Firefox-Fehler 1692754](https://bugzil.la/1692754), [Firefox-Fehler 1818754](https://bugzil.la/1818754), und [Firefox-Fehler 1791835](https://bugzil.la/1791835).

- [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) kann nun verwendet werden, um alle `supports()` Bedingungen zu erhalten, die beim Einsatz der {{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) angegeben wurden ([Firefox-Fehler 1829590](https://bugzil.la/1829590)).

#### Entfernungen

- Die veraltete und nicht standardisierte Eigenschaft `mozImageSmoothingEnabled` wurde dauerhaft entfernt.
  Siehe die [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) Eigenschaft für Glättung in skalierten Bildern ([Firefox-Fehler 1228850](https://bugzil.la/1228850)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die Befehle `input.performActions` und `input.releaseActions` wurde hinzugefügt, die verwendet werden können, um Benutzereingaben zur Interaktion mit Elementen auf Webseiten zu emulieren. Ähnlich wie bei Marionette werden alle verfügbaren Eingabequellen der WebDriver-Spezifikation unterstützt: `key`, `pointer` und `wheel` ([Firefox-Fehler 1832380](https://bugzil.la/1832380)).
- Unterstützung für benutzerdefinierte Browser-zu-Client-Meldungen wurde hinzugefügt, was es ermöglicht, ein `script.message` Ereignis aus einem zuvor mittels `script.addPreloadScript` installierten Skript zu senden ([Firefox-Fehler 1824187](https://bugzil.la/1824187)).
- Unterstützung für den `serializationOptions` Parameter für `script.evaluate` und `script.callFunction` wurde hinzugefügt, um die `RemoteValue` Serialisierung anzupassen ([Firefox-Fehler 1824953](https://bugzil.la/1824953)).
- Ein Problem wurde behoben, bei dem die Befehle `script.evaluate` und `script.callFunction` den Stack-Trace nicht enthielten und die Ausnahme-Details für ein abgelehntes Promise nicht korrekt erstellten ([Firefox-Fehler 1829630](https://bugzil.la/1829630)).
- Ein Problem wurde behoben, bei dem die Ereignisse `browsingContext.domContentLoaded` und `browsingContext.load` die `url` nicht korrekt meldeten, wenn die Seite ein `<base>` Metatag definierte ([Firefox-Fehler 1825634](https://bugzil.la/1825634)).

#### Marionette

- Ein Problem wurde behoben, bei dem der Befehl `WebDriver:GetComputedRole` die WAI-ARIA-Rollen nicht korrekt zurückgab ([Firefox-Fehler 1822112](https://bugzil.la/1822112)).
- Ein Problem wurde behoben, bei dem Modifikatortasten nicht zurückgesetzt wurden, wenn sie innerhalb desselben `WebDriver:ElementSendKeys` Befehls erneut verwendet wurden ([Firefox-Fehler 1776190](https://bugzil.la/1776190)).

## Änderungen für Add-on-Entwickler

### Entfernungen

- Unterstützung für [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) in den Manifest-Schlüsseln [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action), [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui), [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) und [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) ist für Manifest V3-Erweiterungen veraltet ([Firefox-Fehler 1827910](https://bugzil.la/1827910)). Weitere Informationen über den Übergang von `browser_style` in Manifest V3-Erweiterungen finden Sie unter [Manifest v3 migration](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration).
