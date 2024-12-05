---
title: Firefox 134 für Entwickler
slug: Mozilla/Firefox/Releases/134
l10n:
  sourceCommit: 2682b7e331038a76a8476c1ff899659215097747
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 134, die Entwickler betreffen. Firefox 134 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [7. Januar 2025](https://whattrainisitnow.com/release/?version=134) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernt

### CSS

- Die CSS-Eigenschaften {{CSSXRef("align-self")}} und {{CSSXRef("justify-self")}} sowie die CSS-Kurzschreibweise {{CSSXRef("place-self")}} werden jetzt für [absolut positionierte](/de/docs/Learn/CSS/CSS_layout/Positioning#absolute_positioning) Elemente unterstützt. ([Firefox Bug 1920160](https://bugzil.la/1920160)).

#### Entfernt

### JavaScript

- Unterstützung für die statische Methode {{jsxref("RegExp.escape()")}}, die verwendet werden kann, um alle potenziellen Regex-Syntax-Zeichen in einem String zu escapen und einen neuen String zurückzugeben, der sicher als [literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktor verwendet werden kann. ([Firefox Bug 1918235](https://bugzil.la/1918235)).
- Die bequeme Methode {{jsxref("Promise.try()")}} wird jetzt unterstützt. Diese Methode nimmt einen beliebigen Callback an (eine Funktion, die synchron oder asynchron zurückgibt oder wirft) und verpackt das Ergebnis in einem {{jsxref("Promise")}}. Dies ermöglicht die Verwendung von Promise-Semantiken ({{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}), um das Ergebnis einer beliebigen Methode zu verarbeiten. ([Firefox Bug 1917879](https://bugzil.la/1917879) und [Firefox Bug 1905364](https://bugzil.la/1905364)).

#### Entfernt

### SVG

#### Entfernt

### HTTP

#### Entfernt

### Sicherheit

#### Entfernt

### APIs

- Die statische Methode [`PushManager.supportedContentEncodings`](/de/docs/Web/API/PushManager/supportedContentEncodings_static) wird jetzt unterstützt, um die erlaubten Algorithmen zur Verschlüsselung der Nutzlast einer [Push-Nachricht](/de/docs/Web/API/Push_API) abzurufen. ([Firefox Bug 1497430](https://bugzil.la/1497430)).
- [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) erlaubt jetzt das Setzen des Wertes auch während einer automatisierten Ereignisplanung: zuvor wurde die Operation in diesen Zeiten stillschweigend ignoriert. ([Firefox Bug 1308435](https://bugzil.la/1308435)).
- Die Methode [`ReadableStreamBYOBReader.read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read) hat ein neues Argument [`options.min`](/de/docs/Web/API/ReadableStreamBYOBReader/read#min), das verwendet werden kann, um die minimale Anzahl der bei jedem Aufruf zurückzugebenden Elemente festzulegen. Dies könnte beispielsweise verwendet werden, um unnötige Iterationen bei der Arbeit mit Datenstrukturen mit bekannter Datenmenge zu vermeiden. ([Firefox Bug 1864406](https://bugzil.la/1864406)).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC Simulcast von bildschirmgeteilten Videos mit dem [VP8-Codec](/de/docs/Web/Media/Formats/Video_codecs#vp8) wird jetzt unterstützt (Simulcast aus anderen Videoquellen ist schon lange verfügbar). Genauer gesagt können [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Objekte für Bildschirm- und Fensteraufnahmen (zum Beispiel von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)) jetzt als mehrere Simulcast-Layer kodiert werden, wenn VP8 verwendet wird. ([Firefox Bug 1692873](https://bugzil.la/1692873)).

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

## Experimentelle Web-Features

Diese Features sind neu in Firefox 134 hinzugekommen, aber standardmäßig deaktiviert. Um sie zu testen, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie diese auf `true`. Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`Intl.DurationFormat`** (Nightly-Version): {{jsxref("Intl.DurationFormat")}} ermöglicht die lokalsensitive Formatierung von Dauern. ([Firefox Bug 1648139](https://bugzil.la/1648139)).
- **`autocorrect`**: <code>dom.forms.autocorrect</code>.
  Das HTML-Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) und die Eigenschaft [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect) erlauben die Autokorrektur in bearbeitbaren Textelementen, einschließlich: der meisten Arten von Text {{htmlelement("input")}} Elementen, {{htmlelement("textarea")}} Elementen und Elementen mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut ([Firefox Bug 1725806](https://bugzil.la/1725806)).

## Ältere Versionen

{{Firefox_for_developers}}
