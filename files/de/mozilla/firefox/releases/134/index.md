---
title: Firefox 134 für Entwickler
slug: Mozilla/Firefox/Releases/134
l10n:
  sourceCommit: e6f5295f5cf1d8fc390b4a77c4cbafe9ab030923
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 134, die Entwickler betreffen. Firefox 134 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [7. Januar 2025](https://whattrainisitnow.com/release/?version=134) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

### HTML

#### Entfernt

### CSS

#### Entfernt

### JavaScript

- Unterstützung für die statische Methode {{jsxref("RegExp.escape()")}}, die verwendet werden kann, um potenzielle reguläre Ausdrucks-Syntaxzeichen in einem String zu escapen. Sie gibt einen neuen String zurück, der sicher als [Literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)-Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor verwendet werden kann. ([Firefox-Bug 1918235](https://bugzil.la/1918235)).
- Die Komfortmethode {{jsxref("Promise.try()")}} wird nun unterstützt. Diese Methode nimmt einen Callback beliebiger Art (eine Funktion, die entweder synchron oder asynchron zurückgibt oder eine Ausnahme auslöst) und verpackt ihr Ergebnis in einem {{jsxref("Promise")}}. Dies ermöglicht es Ihnen, Promisesemantik ({{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) zu verwenden, um das Ergebnis jeder Art von Methode zu verarbeiten. ([Firefox-Bug 1917879](https://bugzil.la/1917879) und [Firefox-Bug 1905364](https://bugzil.la/1905364)).

#### Entfernt

### SVG

#### Entfernt

### HTTP

#### Entfernt

### Sicherheit

#### Entfernt

### APIs

- Die statische Methode [`PushManager.supportedContentEncodings`](/de/docs/Web/API/PushManager/supportedContentEncodings_static) wird nun unterstützt, um die erlaubten Algorithmen für die Verschlüsselung der Nutzlast einer [Push-Nachricht](/de/docs/Web/API/Push_API) zu erhalten. ([Firefox-Bug 1497430](https://bugzil.la/1497430)).
- [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) erlaubt nun das Setzen des Wertes, auch während ein automatisiertes Ereignis geplant ist: Zuvor wurde die Operation in diesen Zeiten still ignoriert. ([Firefox-Bug 1308435](https://bugzil.la/1308435)).

#### DOM

#### Medien, WebRTC und Web Audio

#### Entfernt

### WebAssembly

#### Entfernt

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

### Entfernt

### Sonstiges

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 134 integriert, jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der Seite `about:config` und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der [Seite für experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`Intl.DurationFormat`** (Nightly-Release): {{jsxref("Intl.DurationFormat")}} ermöglicht die lokalisierungssensitive Formatierung von Zeitdauern. ([Firefox-Bug 1648139](https://bugzil.la/1648139)).
- **`autocorrect`**: <code>dom.forms.autocorrect</code>. Das HTML-Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) und die Eigenschaft [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect) ermöglichen die Autokorrektur in bearbeitbaren Textelementen, einschließlich der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen, die das Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gesetzt haben ([Firefox-Bug 1725806](https://bugzil.la/1725806)).

## Ältere Versionen

{{Firefox_for_developers}}
