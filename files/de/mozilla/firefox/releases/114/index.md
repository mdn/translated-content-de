---
title: Firefox 114 für Entwickler
slug: Mozilla/Firefox/Releases/114
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 114, die Entwickler betreffen. Firefox 114 wurde am 06. Juni 2023 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Ein Problem wurde behoben, bei dem der [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ARIA-Rollen auf Elementen nicht korrekt anzeigte, was die Anzeige von [landmark roles](/de/docs/Web/Accessibility/ARIA/Reference/Roles/landmark_role) beeinflusste.
  Rollen, die nicht auf ARIA abgebildet werden können, verwenden einen internen Gecko-Rollennamen ([Firefox-Bug 1572512](https://bugzil.la/1572512)).

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die [`:lang()`](/de/docs/Web/CSS/:lang)-Pseudoklasse verwendet nun Zeichenfolgen-Matching-Semantik (einschließlich `*`-Platzhalter) für das Matching von Sprachcodes anstelle von Präfix-Matching-Semantik.
  Außerdem werden nun Komma-getrennte Listen von Sprachen unterstützt, um mehrere Sprachen abzugleichen ([Firefox-Bug 1121792](https://bugzil.la/1121792)).
- Die [`-webkit-text-security`](/de/docs/Web/CSS/-webkit-text-security)-Eigenschaft, mit der Sie Zeichen durch Formen ersetzen können, wird jetzt unterstützt. Sie können nun die Darstellung der Textsicherheit mit dieser Eigenschaft steuern ([Firefox-Bug 1826629](https://bugzil.la/1826629)).
- Die Konstanten `infinity` und `NaN` werden jetzt innerhalb der [`calc()`](/de/docs/Web/CSS/calc)-Funktion unterstützt ([Firefox-Bug 1830759](https://bugzil.la/1830759)).

### JavaScript

- [Workers](/de/docs/Web/API/Web_Workers_API) unterstützen jetzt das Laden von [ECMAScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules).
  Sie können Module in Workers laden, indem Sie die Option `{type: "module"}` in den [`Worker`](/de/docs/Web/API/Worker/Worker#type)- und [`SharedWorker`-Konstruktoren](/de/docs/Web/API/SharedWorker/SharedWorker#type) angeben.
  Worker-Skripte können Module auch statisch oder dynamisch mit [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) und [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) importieren ([Firefox-Bug 1812591](https://bugzil.la/1812591)).
- [Worklets](/de/docs/Web/API/Worklet) können jetzt [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) verwenden, um [ECMAScript/JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) statisch zu importieren ([Firefox-Bug 1812591](https://bugzil.la/1812591)).

### SVG

- Das [`crossorigin`](/de/docs/Web/SVG/Reference/Attribute/crossorigin)-Attribut wird nun in den [`image`](/de/docs/Web/SVG/Reference/Element/image)- und [`feImage`](/de/docs/Web/SVG/Reference/Element/feImage)-Elementen unterstützt ([Firefox-Bug 1240357](https://bugzil.la/1240357)).

### APIs

- [`Window.print()`](/de/docs/Web/API/Window/print) öffnet nun einen Druckdialog in Firefox für Android, sodass das aktuelle Dokument gedruckt werden kann ([Firefox-Bug 1809922](https://bugzil.la/1809922)).
- Die [WebTransport-API](/de/docs/Web/API/WebTransport_API) wird nun unterstützt und umfasst die folgenden Schnittstellen: [`WebTransport`](/de/docs/Web/API/WebTransport), [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream), [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream), [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream), [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream), [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) und [`WebTransportError`](/de/docs/Web/API/WebTransportError).
  Für weitere Informationen siehe [Firefox-Bug 1692754](https://bugzil.la/1692754), [Firefox-Bug 1818754](https://bugzil.la/1818754) und [Firefox-Bug 1791835](https://bugzil.la/1791835).

- [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) kann nun verwendet werden, um alle angegebenen Bedingungen in `supports()` zu erhalten, die bei der Verwendung der {{cssxref("@import")}}-Regel [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) spezifiziert wurden ([Firefox-Bug 1829590](https://bugzil.la/1829590)).

#### Entfernungen

- Die veraltete und nicht standardmäßige `mozImageSmoothingEnabled`-Eigenschaft wurde dauerhaft entfernt.
  Siehe die [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)-Eigenschaft für das Glätten in skalierten Bildern ([Firefox-Bug 1228850](https://bugzil.la/1228850)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die Befehle `input.performActions` und `input.releaseActions` hinzugefügt, die verwendet werden können, um Benutzereingaben zur Interaktion mit Elementen auf Webseiten zu emulieren. Ähnlich wie bei Marionette werden alle verfügbaren Eingabequellen der WebDriver-Spezifikation unterstützt, darunter `key`, `pointer` und `wheel` ([Firefox-Bug 1832380](https://bugzil.la/1832380)).
- Unterstützung für benutzerdefinierte Browser-zu-Client-Nachrichten hinzugefügt, die es ermöglichen, ein `script.message`-Ereignis aus einem zuvor über `script.addPreloadScript` installierten Skript zu senden ([Firefox-Bug 1824187](https://bugzil.la/1824187)).
- Unterstützung für den Parameter `serializationOptions` für `script.evaluate` und `script.callFunction` hinzugefügt, um die Serialisierung von `RemoteValue` anzupassen ([Firefox-Bug 1824953](https://bugzil.la/1824953)).
- Ein Problem behoben, bei dem die Befehle `script.evaluate` und `script.callFunction` den Stack-Trace nicht einschlossen und die Ausnahmeinformationen für ein abgelehntes Promise nicht korrekt aufbauten ([Firefox-Bug 1829630](https://bugzil.la/1829630)).
- Ein Problem behoben, bei dem die Ereignisse `browsingContext.domContentLoaded` und `browsingContext.load` die korrekte `url` nicht berichteten, wenn die Seite einen `<base>`-Meta-Tag definierte ([Firefox-Bug 1825634](https://bugzil.la/1825634)).

#### Marionette

- Ein Problem behoben, bei dem der Befehl `WebDriver:GetComputedRole` die WAI-ARIA-Rollen nicht korrekt zurückgab ([Firefox-Bug 1822112](https://bugzil.la/1822112)).
- Ein Problem behoben, bei dem Modifikatortasten nicht zurückgesetzt wurden, wenn sie innerhalb desselben `WebDriver:ElementSendKeys`-Befehls erneut verwendet wurden ([Firefox-Bug 1776190](https://bugzil.la/1776190)).

## Änderungen für Add-on-Entwickler

### Entfernungen

- Unterstützung für [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) in den Manifest-Schlüsseln [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action), [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui), [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) und [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) ist für Manifest V3-Erweiterungen veraltet ([Firefox-Bug 1827910](https://bugzil.la/1827910)). Siehe [Manifest v3 Migration](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) für Informationen über das Übergangsverfahren von `browser_style` in Manifest V3-Erweiterungen.

## Ältere Versionen

{{Firefox_for_developers}}
