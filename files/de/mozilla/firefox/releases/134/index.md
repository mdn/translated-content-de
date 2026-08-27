---
title: Firefox 134 Versionshinweise für Entwickler
short-title: Firefox 134
slug: Mozilla/Firefox/Releases/134
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 134, die Entwickler betreffen. Firefox 134 wurde am [7. Januar 2025](https://whattrainisitnow.com/release/?version=134) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die CSS-Eigenschaften {{CSSXRef("align-self")}} und {{CSSXRef("justify-self")}} sowie die CSS-Kurzschrift-Eigenschaft {{CSSXRef("place-self")}} werden jetzt für [absolute positionierte](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#absolute_positioning) Elemente unterstützt. ([Firefox Bug 1920160](https://bugzil.la/1920160)).

### JavaScript

- Unterstützung für die statische Methode {{jsxref("RegExp.escape()")}}, die verwendet werden kann, um potenzielle reguläre Ausdruckssyntax-Zeichen in einem String zu escapen, und dabei einen neuen String zurückgibt, der sicher als [Literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)-Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor verwendet werden kann. ([Firefox Bug 1918235](https://bugzil.la/1918235)).
- Die bequeme Methode {{jsxref("Promise.try()")}} wird jetzt unterstützt.
  Die Methode nimmt einen Callback beliebiger Art (eine Funktion, die synchron oder asynchron zurückgibt oder wirft) und verpackt ihr Ergebnis in ein {{jsxref("Promise")}}.
  Dies ermöglicht die Verwendung von Promise-Semantiken ({{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}), um das Ergebnis jeder Art von Methode zu verarbeiten. ([Firefox Bug 1917879](https://bugzil.la/1917879) und [Firefox Bug 1905364](https://bugzil.la/1905364)).

### APIs

- Die statische Methode [`PushManager.supportedContentEncodings`](/de/docs/Web/API/PushManager/supportedContentEncodings_static) wird jetzt unterstützt, um die erlaubten Algorithmen zum Verschlüsseln der Nutzlast einer [Push-Nachricht](/de/docs/Web/API/Push_API) abzurufen. ([Firefox Bug 1497430](https://bugzil.la/1497430)).
- [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) erlaubt es jetzt, den Wert auch während der Zeit zu setzen, in der ein automatisiertes Ereignis geplant ist: bisher wurde der Vorgang in diesen Zeiten stillschweigend ignoriert. ([Firefox Bug 1308435](https://bugzil.la/1308435)).
- Die Methode [`ReadableStreamBYOBReader.read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read) hat ein neues Argument [`options.min`](/de/docs/Web/API/ReadableStreamBYOBReader/read#min), mit dem die minimale Anzahl von Elementen angegeben werden kann, die bei jedem Aufruf zurückgegeben werden sollen. Dies kann beispielsweise verwendet werden, um unnötige Iterationen zu vermeiden, wenn mit Datenstrukturen gearbeitet wird, die eine bekannte Datengröße haben. ([Firefox Bug 1864406](https://bugzil.la/1864406)).

#### DOM

#### Media, WebRTC und Web Audio

- WebRTC-Simulcast von bildschirmfreigegebenem Video mit dem [VP8 Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) wird jetzt unterstützt (Simulcast aus anderen Videoquellen ist schon lange aktiviert). Präziser gesagt, können [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte für Bildschirm- und Fensteraufnahmen (zum Beispiel von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)) jetzt als mehrere Simulcast-Schichten kodiert werden, wenn VP8 verwendet wird. ([Firefox Bug 1692873](https://bugzil.la/1692873)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Implementiert den Befehl `browser.getClientWindows`, der es ermöglicht, Informationen über die derzeit geöffneten Browserfenster abzurufen ([Firefox Bug 1855025](https://bugzil.la/1855025))
- Unterstützung für die Felder `initiatorType` und `destination` zu allen Netzwerkevents hinzugefügt ([Firefox Bug 1904892](https://bugzil.la/1904892) und [Firefox Bug 1933331](https://bugzil.la/1933331)). Sie ermöglichen das Verständnis dafür, warum und wie die Anfrage erstellt wurde.
- Das Event `browsingContext.navigationStarted` wird nicht mehr ausgelöst, wenn die initiale about:blank Seite für einen neuen Top-Level Browsing-Kontext geladen wird ([Firefox Bug 1922014](https://bugzil.la/1922014))
- Wir haben einen Fehler behoben, bei dem die `requestTime` von Netzwerkevents manchmal auf 0 gesetzt wurde ([Firefox Bug 1930849](https://bugzil.la/1930849))
- Der Befehl `browsingContext.traverseHistory` kann jetzt nur mit Top-Level Browsing-Kontexten verwendet werden ([Firefox Bug 1924859](https://bugzil.la/1924859))
- Die Zuverlässigkeit von Befehlen, die während einer Navigation gesendet werden, wurde verbessert, zum Beispiel wenn ein Browsing-Kontext ersetzt wird ([Firefox Bug 1927073](https://bugzil.la/1927073)).

#### Marionette

- Die Befehle `Addon:Install` und `Addon:Uninstall` sind jetzt für GeckoView (Firefox für Android) verfügbar ([Firefox Bug 1806135](https://bugzil.la/1806135)).
- Der Befehl `Addon:Install` kann jetzt verwendet werden, um Erweiterungen zu installieren, die im Modus für privates Surfen aktiviert sind ([Firefox Bug 1810718](https://bugzil.la/1810718)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 134 eingeführt, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`Intl.DurationFormat`** (Nightly-Version): {{jsxref("Intl.DurationFormat")}} ermöglicht die lokalsensitive Formatierung von Zeitdauern. ([Firefox Bug 1648139](https://bugzil.la/1648139)).
- **`autocorrect`**: <code>dom.forms.autocorrect</code>.
  Das HTML-Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) und die Eigenschaft [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect) erlauben die Autokorrektur in editierbaren Textelementen, einschließlich: der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen, die das Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt haben ([Firefox Bug 1725806](https://bugzil.la/1725806)).
