---
title: Firefox 134 für Entwickler
slug: Mozilla/Firefox/Releases/134
l10n:
  sourceCommit: eb20babb96149f98bcbf7817b58e305c5297f2e1
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 134, die Entwickler betreffen. Firefox 134 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [7. Januar 2025](https://whattrainisitnow.com/release/?version=134) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

#### Entfernungen

### CSS

- Die CSS-Eigenschaften {{CSSXRef("align-self")}} und {{CSSXRef("justify-self")}} sowie die CSS-Kurzschreibweise {{CSSXRef("place-self")}} werden jetzt für [absolut positionierte](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#absolute_positioning) Elemente unterstützt. ([Firefox-Bug 1920160](https://bugzil.la/1920160)).

#### Entfernungen

### JavaScript

- Unterstützung für die statische Methode {{jsxref("RegExp.escape()")}}, die verwendet werden kann, um alle potenziellen Regex-Syntaxzeichen in einem String zu maskieren und einen neuen String zurückzugeben, der sicher als [Literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktor verwendet werden kann. ([Firefox-Bug 1918235](https://bugzil.la/1918235)).
- Die praktische Methode {{jsxref("Promise.try()")}} wird jetzt unterstützt.
  Die Methode nimmt einen Callback jeglicher Art (eine Funktion, die zurückgibt oder wirft, synchron oder asynchron) und verpackt dessen Ergebnis in ein {{jsxref("Promise")}}.
  Dies ermöglicht es Ihnen, Promise-Semantik ({{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) zu verwenden, um das Ergebnis jeder Art von Methode zu behandeln. ([Firefox-Bug 1917879](https://bugzil.la/1917879) und [Firefox-Bug 1905364](https://bugzil.la/1905364)).

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die statische Methode [`PushManager.supportedContentEncodings`](/de/docs/Web/API/PushManager/supportedContentEncodings_static) wird jetzt unterstützt, um die erlaubten Algorithmen zum Verschlüsseln der Nutzlast einer [Push-Nachricht](/de/docs/Web/API/Push_API) abzurufen. ([Firefox-Bug 1497430](https://bugzil.la/1497430)).
- [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) erlaubt jetzt das Setzen des Wertes, selbst während ein automatisiertes Ereignis geplant ist: zuvor wurde diese Operation in solchen Zeiten stillschweigend ignoriert. ([Firefox-Bug 1308435](https://bugzil.la/1308435)).
- Die Methode [`ReadableStreamBYOBReader.read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read) hat ein neues Argument [`options.min`](/de/docs/Web/API/ReadableStreamBYOBReader/read#min), mit dem die minimale Anzahl von Elementen angegeben werden kann, die bei jedem Aufruf zurückgegeben werden sollen. Dies könnte beispielsweise verwendet werden, um unnötige Iterationen zu vermeiden, wenn mit Datenstrukturen gearbeitet wird, die eine bekannte Datenmenge haben. ([Firefox-Bug 1864406](https://bugzil.la/1864406)).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC-Simulcasting von bildschirmgeteiltem Video mit dem [VP8-Codec](/de/docs/Web/Media/Formats/Video_codecs#vp8) wird jetzt unterstützt (Simulcasting von anderen Videoquellen ist bereits lange aktiviert). Genauer gesagt können [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Objekte für Bildschirm- und Fensteraufnahme (zum Beispiel, von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)) jetzt als mehrere Simulcast-Schichten kodiert werden, wenn VP8 verwendet wird. ([Firefox-Bug 1692873](https://bugzil.la/1692873)).

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

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 134 enthalten, sind aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`Intl.DurationFormat`** (Nightly-Version): {{jsxref("Intl.DurationFormat")}} ermöglicht die lokalsensitive Formatierung von Zeitdauern. ([Firefox-Bug 1648139](https://bugzil.la/1648139)).
- **`autocorrect`**: <code>dom.forms.autocorrect</code>.
  Das HTML-Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) und die [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect) Eigenschaft erlauben die Autokorrektur in editierbaren Textelementen, einschließlich: der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen, die das [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut gesetzt haben ([Firefox-Bug 1725806](https://bugzil.la/1725806)).

## Ältere Versionen

{{Firefox_for_developers}}
