---
title: Firefox 114 für Entwickler
slug: Mozilla/Firefox/Releases/114
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen über die Änderungen in Firefox 114, die Entwickler betreffen. Firefox 114 wurde am 06. Juni 2023 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Es wurde ein Problem behoben, bei dem der [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ARIA-Rollen in Elementen nicht korrekt angezeigt hat, was die Darstellung der [landmark roles](/de/docs/Web/Accessibility/ARIA/Roles/landmark_role) beeinträchtigte.
  Rollen, die nicht mit ARIA abbildbar sind, verwenden einen internen Gecko-Rollennamen ([Firefox Bug 1572512](https://bugzil.la/1572512)).

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die [`:lang()`](/de/docs/Web/CSS/:lang)-Pseudoklasse verwendet jetzt String-Matching-Semantiken (einschließlich `*`-Wildcards), um Sprachcodes zuzuordnen, anstatt Präfix-Matching-Semantiken zu verwenden.
  Zusätzlich werden jetzt komma-separierte Listen von Sprachen unterstützt, um mehrere Sprachen abzugleichen ([Firefox Bug 1121792](https://bugzil.la/1121792)).
- Die [`-webkit-text-security`](/de/docs/Web/CSS/-webkit-text-security)-Eigenschaft, die es ermöglicht, Zeichen durch Formen zu ersetzen, wird jetzt unterstützt. Sie können mit dieser Eigenschaft die Darstellung der Textsicherheit steuern ([Firefox Bug 1826629](https://bugzil.la/1826629)).
- Die Konstanten `infinity` und `NaN` werden jetzt innerhalb der [`calc()`](/de/docs/Web/CSS/calc)-Funktion unterstützt ([Firefox Bug 1830759](https://bugzil.la/1830759)).

### JavaScript

- [Workers](/de/docs/Web/API/Web_Workers_API) unterstützen jetzt das Laden von [ECMAScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules).
  Sie können Module in Workers laden, indem Sie die Option `{type: "module"}` in den Konstruktoren [`Worker`](/de/docs/Web/API/Worker/Worker#type) und [`SharedWorker`](/de/docs/Web/API/SharedWorker/SharedWorker#type) spezifizieren.
  Worker-Skripte können Module auch statisch oder dynamisch mit [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) und [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) importieren ([Firefox Bug 1812591](https://bugzil.la/1812591)).
- [Worklets](/de/docs/Web/API/Worklet) können jetzt [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) verwenden, um [ECMAScript/JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) statisch zu importieren ([Firefox Bug 1812591](https://bugzil.la/1812591)).

### SVG

- Das [`crossorigin`](/de/docs/Web/SVG/Attribute/crossorigin)-Attribut wird jetzt in den [`image`](/de/docs/Web/SVG/Element/image)- und [`feImage`](/de/docs/Web/SVG/Element/feImage)-Elementen unterstützt ([Firefox Bug 1240357](https://bugzil.la/1240357)).

### APIs

- [`Window.print()`](/de/docs/Web/API/Window/print) öffnet jetzt einen Druckdialog in Firefox für Android, der das Drucken des aktuellen Dokuments ermöglicht ([Firefox Bug 1809922](https://bugzil.la/1809922)).
- Die [WebTransport API](/de/docs/Web/API/WebTransport_API) wird jetzt unterstützt, einschließlich der folgenden Schnittstellen: [`WebTransport`](/de/docs/Web/API/WebTransport), [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream), [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream), [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream), [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream), [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) und [`WebTransportError`](/de/docs/Web/API/WebTransportError).
  Weitere Informationen finden Sie in [Firefox Bug 1692754](https://bugzil.la/1692754), [Firefox Bug 1818754](https://bugzil.la/1818754) und [Firefox Bug 1791835](https://bugzil.la/1791835).

- [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) kann jetzt verwendet werden, um alle `supports()`-Bedingungen abzurufen, die mit der {{cssxref("@import")}}-Regel ([Firefox Bug 1829590](https://bugzil.la/1829590)) angegeben wurden.

#### Entfernungen

- Die veraltete und nicht standardisierte Eigenschaft `mozImageSmoothingEnabled` wurde dauerhaft entfernt.
  Siehe die [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)-Eigenschaft für Glättung in skalierter Grafik ([Firefox Bug 1228850](https://bugzil.la/1228850)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die Befehle `input.performActions` und `input.releaseActions` wurde hinzugefügt. Diese können verwendet werden, um Benutzereingaben zu emulieren, um mit Elementen auf Webseiten zu interagieren. Ähnlich wie bei Marionette werden alle verfügbaren Eingabequellen der WebDriver-Spezifikation unterstützt: `key`, `pointer` und `wheel` ([Firefox Bug 1832380](https://bugzil.la/1832380)).
- Unterstützung für benutzerdefinierte Nachrichten vom Browser zum Client wurde hinzugefügt. Damit kann ein `script.message`-Ereignis innerhalb eines zuvor über `script.addPreloadScript` hinzugefügten Skripts gesendet werden ([Firefox Bug 1824187](https://bugzil.la/1824187)).
- Unterstützung für den Parameter `serializationOptions` bei `script.evaluate` und `script.callFunction` wurde hinzugefügt, um die `RemoteValue`-Serialisierung anzupassen ([Firefox Bug 1824953](https://bugzil.la/1824953)).
- Es wurde ein Problem behoben, bei dem die Befehle `script.evaluate` und `script.callFunction` keinen Stack-Trace einschlossen und die Ausnahme-Details für ein abgelehntes Promise nicht korrekt erstellt wurden ([Firefox Bug 1829630](https://bugzil.la/1829630)).
- Es wurde ein Problem behoben, bei dem die `browsingContext.domContentLoaded`- und `browsingContext.load`-Ereignisse nicht die richtige `url` meldeten, wenn die Seite ein `<base>`-Meta-Tag definierte ([Firefox Bug 1825634](https://bugzil.la/1825634)).

#### Marionette

- Es wurde ein Problem behoben, bei dem der Befehl `WebDriver:GetComputedRole` die WAI-ARIA-Rollen nicht korrekt zurückgab ([Firefox Bug 1822112](https://bugzil.la/1822112)).
- Es wurde ein Problem behoben, bei dem Modifikatortasten nicht zurückgesetzt wurden, wenn sie innerhalb desselben `WebDriver:ElementSendKeys`-Befehls erneut verwendet wurden ([Firefox Bug 1776190](https://bugzil.la/1776190)).

## Änderungen für Add-on-Entwickler

### Entfernungen

- Die Unterstützung für [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) in den Manifest-Schlüsseln [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action), [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui), [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) und [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) wird für Manifest V3-Erweiterungen nicht mehr unterstützt ([Firefox Bug 1827910](https://bugzil.la/1827910)). Weitere Informationen zur Umstellung von `browser_style` in Manifest V3-Erweiterungen finden Sie in der [Manifest v3-Migration](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration).

## Ältere Versionen

{{Firefox_for_developers}}
