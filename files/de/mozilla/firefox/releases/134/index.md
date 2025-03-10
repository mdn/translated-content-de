---
title: Firefox 134 für Entwickler
slug: Mozilla/Firefox/Releases/134
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 134, die Entwickler betreffen. Firefox 134 wurde am [7. Januar 2025](https://whattrainisitnow.com/release/?version=134) veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die CSS-Eigenschaften {{CSSXRef("align-self")}} und {{CSSXRef("justify-self")}} sowie die CSS-Kurzschreibweise {{CSSXRef("place-self")}} werden nun für [absolut positionierte](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#absolute_positioning) Elemente unterstützt. ([Firefox-Bug 1920160](https://bugzil.la/1920160)).

### JavaScript

- Unterstützung für die statische Methode {{jsxref("RegExp.escape()")}}, die verwendet werden kann, um alle potenziellen Regex-Syntaxzeichen in einem String zu maskieren und einen neuen String zurückzugeben, der sicher als [literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktor verwendet werden kann. ([Firefox-Bug 1918235](https://bugzil.la/1918235)).
- Die {{jsxref("Promise.try()")}} Komfortmethode wird jetzt unterstützt.
  Die Methode nimmt einen Callback jeglicher Art (eine Funktion, die synchron oder asynchron zurückgibt oder eine Ausnahme auslöst) und kapselt dessen Ergebnis in einem {{jsxref("Promise")}}.
  Dies ermöglicht es, Promise-Semantik ({{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) zu verwenden, um das Ergebnis von Methoden jeglicher Art zu behandeln. ([Firefox-Bug 1917879](https://bugzil.la/1917879) und [Firefox-Bug 1905364](https://bugzil.la/1905364)).

### APIs

- Die statische Methode [`PushManager.supportedContentEncodings`](/de/docs/Web/API/PushManager/supportedContentEncodings_static) wird nun unterstützt, um die erlaubten Algorithmen zum Verschlüsseln der Nutzlast einer [Push-Nachricht](/de/docs/Web/API/Push_API) zu erhalten. ([Firefox-Bug 1497430](https://bugzil.la/1497430)).
- [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) erlaubt jetzt das Setzen des Wertes, selbst während ein automatisiertes Ereignis geplant ist: Vorher wurde die Operation in solchen Zeiten stillschweigend ignoriert. ([Firefox-Bug 1308435](https://bugzil.la/1308435)).
- Die Methode [`ReadableStreamBYOBReader.read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read) hat ein neues Argument [`options.min`](/de/docs/Web/API/ReadableStreamBYOBReader/read#min), das verwendet werden kann, um die minimale Anzahl von Elementen zu spezifizieren, die bei jedem Aufruf zurückgegeben werden sollen. Dies kann beispielsweise verwendet werden, um unnötige Iterationen zu vermeiden, wenn mit Datenstrukturen gearbeitet wird, deren Datengröße bekannt ist. ([Firefox-Bug 1864406](https://bugzil.la/1864406)).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC Simulcast von bildschirmgeteiltem Video mit dem [VP8-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) wird jetzt unterstützt (Simulcast von anderen Videoquellen war schon lange möglich). Genauer gesagt können [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Objekte für Bildschirm- und Fensteraufnahme (zum Beispiel von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)) jetzt als mehrere Simulcast-Schichten codiert werden, wenn VP8 verwendet wird. ([Firefox-Bug 1692873](https://bugzil.la/1692873)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Implementiert den `browser.getClientWindows`-Befehl, der Informationen über die aktuell geöffneten Browserfenster abrufen lässt ([Firefox-Bug 1855025](https://bugzil.la/1855025)).
- Unterstützung für die Felder `initiatorType` und `destination` zu allen Netzwerkereignissen hinzugefügt ([Firefox-Bug 1904892](https://bugzil.la/1904892) und [Firefox-Bug 1933331](https://bugzil.la/1933331)). Diese ermöglichen es, zu verstehen, warum und wie die Anfrage erstellt wurde.
- Das Ereignis `browsingContext.navigationStarted` wird nicht mehr ausgelöst, wenn die initiale about:blank-Seite für einen neuen Top-Level-Browsing-Kontext geladen wird ([Firefox-Bug 1922014](https://bugzil.la/1922014)).
- Ein Fehler wurde behoben, bei dem die `requestTime` von Netzwerkereignissen manchmal auf 0 gesetzt war ([Firefox-Bug 1930849](https://bugzil.la/1930849)).
- Der Befehl `browsingContext.traverseHistory` kann jetzt nur noch mit Top-Level-Browsing-Kontexten verwendet werden ([Firefox-Bug 1924859](https://bugzil.la/1924859)).
- Die Zuverlässigkeit von Befehlen, die während einer Navigation gesendet werden, wurde verbessert, zum Beispiel wenn ein Browserkontext ersetzt wird ([Firefox-Bug 1927073](https://bugzil.la/1927073)).

#### Marionette

- Die Befehle `Addon:Install` und `Addon:Uninstall` sind jetzt für GeckoView (Firefox für Android) verfügbar ([Firefox-Bug 1806135](https://bugzil.la/1806135)).
- Der Befehl `Addon:Install` kann jetzt verwendet werden, um Erweiterungen zu installieren, die im privaten Modus aktiviert sind ([Firefox-Bug 1810718](https://bugzil.la/1810718)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 134 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`. Weitere solcher Features finden Sie auf der [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **`Intl.DurationFormat`** (Nightly-Version): {{jsxref("Intl.DurationFormat")}} ermöglicht die lokalsensitive Formatierung von Dauern. ([Firefox-Bug 1648139](https://bugzil.la/1648139)).
- **`autocorrect`**: <code>dom.forms.autocorrect</code>.
  Das HTML-Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) und die [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect) Eigenschaft erlauben die Autokorrektur in editierbaren Textelementen, einschließlich: der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen, die das Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gesetzt haben ([Firefox-Bug 1725806](https://bugzil.la/1725806)).

## Ältere Versionen

{{Firefox_for_developers}}
