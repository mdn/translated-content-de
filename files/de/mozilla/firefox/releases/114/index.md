---
title: Firefox 114 für Entwickler
slug: Mozilla/Firefox/Releases/114
l10n:
  sourceCommit: f6d38a35950a07266a18518506a7fc20b358492c
---

{{FirefoxSidebar}}

Dieser Artikel stellt Informationen über die Änderungen in Firefox 114 bereit, die Entwickler betreffen. Firefox 114 wurde am 06. Juni 2023 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Ein Problem wurde behoben, bei dem der [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ARIA-Rollen auf Elementen nicht korrekt anzeigte, was die Darstellung von [landmark roles](/de/docs/Web/Accessibility/ARIA/Roles/landmark_role) beeinträchtigte.
  Rollen, die nicht auf ARIA abgebildet werden können, verwenden einen internen Gecko-Rollennamen ([Firefox-Bug 1572512](https://bugzil.la/1572512)).

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die [`:lang()`](/de/docs/Web/CSS/:lang) Pseudo-Klasse verwendet jetzt String-Abgleichsemantik (einschließlich `*` Platzhalterzeichen) für den Abgleich von Sprachcodes anstelle von Präfix-Abgleichsemantik.
  Darüber hinaus werden jetzt kommagetrennte Listen von Sprachen unterstützt, um mehrere Sprachen abzugleichen ([Firefox-Bug 1121792](https://bugzil.la/1121792)).
- Die [`-webkit-text-security`](/de/docs/Web/CSS/-webkit-text-security) Eigenschaft, die es Ihnen ermöglicht, Zeichen durch Formen zu ersetzen, wird jetzt unterstützt. Sie können jetzt das Rendering der Textsicherheit mit dieser Eigenschaft steuern ([Firefox-Bug 1826629](https://bugzil.la/1826629)).
- Die Konstanten `infinity` und `NaN` werden jetzt innerhalb der [`calc()`](/de/docs/Web/CSS/calc) Funktion unterstützt ([Firefox-Bug 1830759](https://bugzil.la/1830759)).

### JavaScript

- [Workers](/de/docs/Web/API/Web_Workers_API) unterstützen jetzt das Laden von [ECMAScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules).
  Sie können Module in Worker laden, indem Sie die Option `{type: "module"}` beim [`Worker`](/de/docs/Web/API/Worker/Worker#type) und [`SharedWorker` Konstruktoren](/de/docs/Web/API/SharedWorker/SharedWorker#type) angeben.
  Worker-Skripte können Module auch statisch oder dynamisch mit [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) bzw. [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) importieren ([Firefox-Bug 1812591](https://bugzil.la/1812591)).
- [Worklets](/de/docs/Web/API/Worklet) können jetzt [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) verwenden, um [ECMAscript/JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) statisch zu importieren ([Firefox-Bug 1812591](https://bugzil.la/1812591)).

### SVG

- Das [`crossorigin`](/de/docs/Web/SVG/Attribute/crossorigin) Attribut wird jetzt in [`image`](/de/docs/Web/SVG/Element/image) und [`feImage`](/de/docs/Web/SVG/Element/feImage) Elementen unterstützt ([Firefox-Bug 1240357](https://bugzil.la/1240357)).

### APIs

- [`Window.print()`](/de/docs/Web/API/Window/print) öffnet jetzt einen Druckdialog in Firefox für Android, der es ermöglicht, das aktuelle Dokument zu drucken ([Firefox-Bug 1809922](https://bugzil.la/1809922)).
- Die [WebTransport API](/de/docs/Web/API/WebTransport_API) wird jetzt unterstützt, die folgende Schnittstellen umfasst: [`WebTransport`](/de/docs/Web/API/WebTransport), [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream), [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream), [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream), [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream), [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) und [`WebTransportError`](/de/docs/Web/API/WebTransportError).
  Weitere Informationen finden Sie unter [Firefox-Bug 1692754](https://bugzil.la/1692754), [Firefox-Bug 1818754](https://bugzil.la/1818754) und [Firefox-Bug 1791835](https://bugzil.la/1791835).

- [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) kann jetzt verwendet werden, um alle `supports()` Bedingungen zu erhalten, die bei der Verwendung der {{cssxref("@import")}} [at-rule](/de/docs/Web/CSS/At-rule) angegeben wurden ([Firefox-Bug 1829590](https://bugzil.la/1829590)).

#### Entfernungen

- Die veraltete und nicht standardisierte `mozImageSmoothingEnabled` Eigenschaft wurde dauerhaft entfernt.
  Sehen Sie sich die [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) Eigenschaft für Glättung in skalierten Bildern an ([Firefox-Bug 1228850](https://bugzil.la/1228850)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die Befehle `input.performActions` und `input.releaseActions` hinzugefügt, die verwendet werden können, um Benutzereingaben zur Interaktion mit Elementen auf Webseiten zu emulieren. Ähnlich wie bei Marionette werden alle verfügbaren Eingabequellen der WebDriver-Spezifikation unterstützt, nämlich `key`, `pointer` und `wheel` ([Firefox-Bug 1832380](https://bugzil.la/1832380)).
- Unterstützung für benutzerdefinierte Nachrichten von Browser zu Client hinzugefügt, die es ermöglichen, ein `script.message` Ereignis aus einem zuvor über `script.addPreloadScript` installierten Skript zu senden ([Firefox-Bug 1824187](https://bugzil.la/1824187)).
- Unterstützung für den `serializationOptions` Parameter für `script.evaluate` und `script.callFunction` hinzugefügt, um die `RemoteValue` Serialisierung anzupassen ([Firefox-Bug 1824953](https://bugzil.la/1824953)).
- Ein Problem wurde behoben, bei dem sowohl die Befehle `script.evaluate` als auch `script.callFunction` den Stack-Trace nicht einschlossen und die Exception-Details eines abgelehnten Promise nicht korrekt erstellten ([Firefox-Bug 1829630](https://bugzil.la/1829630)).
- Ein Problem wurde behoben, bei dem die `browsingContext.domContentLoaded` und `browsingContext.load` Ereignisse nicht die richtige `url` meldeten, wenn die Seite einen `<base>` Meta-Tag definierte ([Firefox-Bug 1825634](https://bugzil.la/1825634)).

#### Marionette

- Ein Problem wurde behoben, bei dem der Befehl `WebDriver:GetComputedRole` die WAI-ARIA-Rollen nicht korrekt zurückgab ([Firefox-Bug 1822112](https://bugzil.la/1822112)).
- Ein Problem wurde behoben, bei dem Modifikatortasten nicht zurückgesetzt wurden, wenn sie innerhalb desselben `WebDriver:ElementSendKeys` Befehls erneut verwendet wurden ([Firefox-Bug 1776190](https://bugzil.la/1776190)).

## Änderungen für Add-on-Entwickler

### Entfernungen

- Die Unterstützung für [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) in den Manifest-Schlüsseln [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action), [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui), [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) und [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) ist für Manifest V3-Erweiterungen veraltet ([Firefox-Bug 1827910](https://bugzil.la/1827910)). Informationen über den Übergang von `browser_style` in Manifest V3-Erweiterungen finden Sie unter [Manifest v3 migration](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration).

## Ältere Versionen

{{Firefox_for_developers}}
