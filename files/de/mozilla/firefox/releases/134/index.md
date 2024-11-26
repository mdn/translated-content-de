---
title: Firefox 134 für Entwickler
slug: Mozilla/Firefox/Releases/134
l10n:
  sourceCommit: 3ee441723555f8e4622055361d367a88badf6326
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 134, die Entwickler betreffen. Firefox 134 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [7. Januar 2025](https://whattrainisitnow.com/release/?version=134) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

- Unterstützung für die statische Methode {{jsxref("RegExp.escape()")}}, die verwendet werden kann, um alle potenziellen Syntaxzeichen eines regulären Ausdrucks in einem Zeichenfolgen-Argument zu maskieren. Dies liefert eine neue Zeichenfolge, die sicher als [literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor verwendet werden kann. ([Firefox Bug 1918235](https://bugzil.la/1918235)).
- Die praktische Methode {{jsxref("Promise.try()")}} wird jetzt unterstützt. Diese Methode nimmt einen Rückruf jeder Art (eine Funktion, die entweder synchron oder asynchron zurückgibt oder auslöst) und verpackt dessen Ergebnis in ein {{jsxref("Promise")}}. Dies ermöglicht es, Promise-Semantiken ({{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) zu nutzen, um mit dem Ergebnis von Methoden jeder Art umzugehen. ([Firefox Bug 1917879](https://bugzil.la/1917879) und [Firefox Bug 1905364](https://bugzil.la/1905364)).
- {{jsxref("Intl.DurationFormat")}} wird unterstützt, was die lokalisierungssensitive Formatierung von Zeitdauern ermöglicht. ([Firefox Bug 1648139](https://bugzil.la/1648139)).

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die statische Methode [`PushManager.supportedContentEncodings`](/de/docs/Web/API/PushManager/supportedContentEncodings_static) wird jetzt unterstützt, um die erlaubten Algorithmen für die Verschlüsselung des Payloads einer [Push-Nachricht](/de/docs/Web/API/Push_API) zu erhalten. ([Firefox Bug 1497430](https://bugzil.la/1497430)).
- [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) erlaubt jetzt das Setzen des Wertes, selbst während eine automatisierte Veranstaltung geplant ist: Bisher wurde die Operation in diesen Zeiten stillschweigend ignoriert. ([Firefox Bug 1308435](https://bugzil.la/1308435)).

#### DOM

#### Medien, WebRTC und Web Audio

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

### Entfernungen

### Sonstiges

## Experimentelle Webfeatures

Diese Features sind neu in Firefox 134 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Features finden Sie auf der [Seite mit experimentellen Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`autocorrect`**: <code>dom.forms.autocorrect</code>.
  Das HTML-Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) und die [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect) Eigenschaft ermöglichen die Autovervollständigung in editierbaren Textelementen, einschließlich: der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen, die das Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gesetzt haben ([Firefox Bug 1725806](https://bugzil.la/1725806)).

## Ältere Versionen

{{Firefox_for_developers}}
