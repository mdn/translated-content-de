---
title: Firefox 134 für Entwickler
slug: Mozilla/Firefox/Releases/134
l10n:
  sourceCommit: 21036cf99313278b34685c4a8227593b06e76624
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

- Unterstützung für die statische Methode {{jsxref("RegExp.escape()")}}, die verwendet werden kann, um potenzielle Regex-Syntaxzeichen in einem String zu entkommen, und einen neuen String zurückgibt, der sicher als [literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktor verwendet werden kann. ([Firefox Bug 1918235](https://bugzil.la/1918235)).
- Die praktische Methode {{jsxref("Promise.try()")}} wird nun unterstützt. Die Methode nimmt einen Callback beliebiger Art (eine Funktion, die synchron oder asynchron zurückgibt oder wirft) und verpackt ihr Ergebnis in ein {{jsxref("Promise")}}. Dies ermöglicht es Ihnen, Promise-Semantiken ({{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) zu verwenden, um das Ergebnis von Methoden beliebiger Art zu verarbeiten. ([Firefox Bug 1917879](https://bugzil.la/1917879) und [Firefox Bug 1905364](https://bugzil.la/1905364)).

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die statische Methode [`PushManager.supportedContentEncodings`](/de/docs/Web/API/PushManager/supportedContentEncodings_static) wird nun unterstützt, um die erlaubten Algorithmen zum Verschlüsseln der Nutzlast einer [Push-Nachricht](/de/docs/Web/API/Push_API) zu erhalten. ([Firefox Bug 1497430](https://bugzil.la/1497430)).
- [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) erlaubt es jetzt, den Wert auch während der Zeit zu setzen, in der ein automatisiertes Ereignis geplant ist: bisher wäre der Vorgang zu diesen Zeiten stillschweigend ignoriert worden. ([Firefox Bug 1308435](https://bugzil.la/1308435)).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC-Simulcasting von bildschirmfreigegebenen Videos mit dem [VP8-Codec](/de/docs/Web/Media/Formats/Video_codecs#vp8) wird jetzt unterstützt (Simulcasting von anderen Videoquellen ist schon lange aktiviert). Genauer gesagt können [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Objekte für Bildschirm- und Fensteraufnahme (zum Beispiel von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)), nun als mehrere Simulcast-Schichten kodiert werden, wenn VP8 verwendet wird. ([Firefox Bug 1692873](https://bugzil.la/1692873)).

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

## Experimentelle Web-Funktionalitäten

Diese Funktionen sind neu in Firefox 134 enthalten, jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der Seite `about:config` und setzen Sie diese auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`Intl.DurationFormat`** (Nightly-Version): {{jsxref("Intl.DurationFormat")}} ermöglicht das lokalisierungssensitive Formatieren von Zeitdauern. ([Firefox Bug 1648139](https://bugzil.la/1648139)).
- **`autocorrect`**: <code>dom.forms.autocorrect</code>. Das HTML-Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) und die Eigenschaft [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect) ermöglichen die Autokorrektur in editierbaren Textelementen, einschließlich: der meisten Arten von textbasierten `input` Elementen, `textarea` Elementen und Elementen mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) ([Firefox Bug 1725806](https://bugzil.la/1725806)).

## Ältere Versionen

{{Firefox_for_developers}}
