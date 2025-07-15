---
title: Firefox 134 für Entwickler
short-title: Firefox 134
slug: Mozilla/Firefox/Releases/134
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 134, die Entwickler betreffen. Firefox 134 wurde am [7. Januar 2025](https://whattrainisitnow.com/release/?version=134) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die CSS-Eigenschaften {{CSSXRef("align-self")}} und {{CSSXRef("justify-self")}} sowie die Kurzform-Eigenschaft {{CSSXRef("place-self")}} werden jetzt für [absolut positionierte](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#absolute_positioning) Elemente unterstützt. ([Firefox-Bug 1920160](https://bugzil.la/1920160)).

### JavaScript

- Unterstützung für die statische Methode {{jsxref("RegExp.escape()")}}, die verwendet werden kann, um potenzielle Regex-Syntaxzeichen in einem String zu escapen und einen neuen String zurückzugeben, der als [Literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktor sicher verwendet werden kann. ([Firefox-Bug 1918235](https://bugzil.la/1918235)).
- Die Komfortmethode {{jsxref("Promise.try()")}} wird jetzt unterstützt.
  Diese Methode nimmt einen Callback jeglicher Art (eine Funktion, die synchron oder asynchron zurückgibt oder wirft) und verpackt ihr Ergebnis in einem {{jsxref("Promise")}}.
  Dies ermöglicht es, Promise-Semantiken ({{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) zu nutzen, um das Ergebnis von Methoden jedweder Art zu behandeln. ([Firefox-Bug 1917879](https://bugzil.la/1917879) und [Firefox-Bug 1905364](https://bugzil.la/1905364)).

### APIs

- Die [`PushManager.supportedContentEncodings`](/de/docs/Web/API/PushManager/supportedContentEncodings_static) statische Methode wird jetzt unterstützt, um die erlaubten Algorithmen zur Verschlüsselung der Nutzdaten einer [Push-Nachricht](/de/docs/Web/API/Push_API) abzurufen. ([Firefox-Bug 1497430](https://bugzil.la/1497430)).
- [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) erlaubt es nun, den Wert auch während der Zeit, in der ein automatisiertes Ereignis geplant ist, zu setzen: zuvor wurde dieser Vorgang in solchen Zeiten stillschweigend ignoriert. ([Firefox-Bug 1308435](https://bugzil.la/1308435)).
- Die Methode [`ReadableStreamBYOBReader.read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read) hat ein neues Argument [`options.min`](/de/docs/Web/API/ReadableStreamBYOBReader/read#min), das verwendet werden kann, um die minimale Anzahl von Elementen anzugeben, die bei jedem Aufruf zurückgegeben werden sollen. Dies kann beispielsweise verwendet werden, um unnötige Iterationen zu vermeiden, wenn mit Datenstrukturen gearbeitet wird, die eine bekannte Datenmenge haben. ([Firefox-Bug 1864406](https://bugzil.la/1864406)).

#### DOM

#### Media, WebRTC und Web Audio

- WebRTC Simulcast von bildschirmgeteiltem Video mit dem [VP8-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) wird jetzt unterstützt (Simulcast von anderen Videoquellen ist bereits seit langem aktiviert). Genauer gesagt können [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Objekte für Bildschirm- und Fensteraufnahmen (zum Beispiel von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)) jetzt als mehrere Simulcast-Ebenen kodiert werden, wenn VP8 verwendet wird. ([Firefox-Bug 1692873](https://bugzil.la/1692873)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Implementierung des `browser.getClientWindows` Befehls, der es ermöglicht, Informationen über die derzeit geöffneten Browserfenster abzurufen ([Firefox-Bug 1855025](https://bugzil.la/1855025))
- Unterstützung für die Felder `initiatorType` und `destination` für alle Netzwerkereignisse hinzugefügt ([Firefox-Bug 1904892](https://bugzil.la/1904892) und [Firefox-Bug 1933331](https://bugzil.la/1933331)). Diese ermöglichen es, zu verstehen, warum und wie die Anforderung erstellt wurde.
- Das `browsingContext.navigationStarted` Ereignis wird nicht mehr ausgelöst, wenn die initiale about:blank Seite für einen neuen Top-Level-Browsing-Kontext geladen wird ([Firefox-Bug 1922014](https://bugzil.la/1922014))
- Ein Fehler wurde behoben, bei dem die `requestTime` von Netzwerkereignissen manchmal auf 0 gesetzt wurde ([Firefox-Bug 1930849](https://bugzil.la/1930849))
- Der `browsingContext.traverseHistory` Befehl kann jetzt nur noch mit Top-Level-Browsing-Kontexten verwendet werden ([Firefox-Bug 1924859](https://bugzil.la/1924859))
- Verbesserte Zuverlässigkeit von Kommandos, die während einer Navigation gesendet werden, zum Beispiel wenn ein Browsing-Kontext ersetzt wird ([Firefox-Bug 1927073](https://bugzil.la/1927073)).

#### Marionette

- Die Kommandos `Addon:Install` und `Addon:Uninstall` sind jetzt für GeckoView (Firefox für Android) verfügbar ([Firefox-Bug 1806135](https://bugzil.la/1806135)).
- Der Befehl `Addon:Install` kann jetzt verwendet werden, um Erweiterungen zu installieren, die im privaten Modus aktiviert sind ([Firefox-Bug 1810718](https://bugzil.la/1810718))

## Experimentelle Web-Features

Diese Features sind neu in Firefox 134 verfügbar, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`. Weitere solche Features finden Sie auf der [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **`Intl.DurationFormat`** (Nightly-Release): {{jsxref("Intl.DurationFormat")}} ermöglicht die lokalisierungsabhängige Formatierung von Zeitspannen. ([Firefox-Bug 1648139](https://bugzil.la/1648139)).
- **`autocorrect`**: <code>dom.forms.autocorrect</code>.
  Das HTML-Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) und die Eigenschaft [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect) erlauben die Autokorrektur in bearbeitbaren Textelementen, einschließlich: der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen, die das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut gesetzt haben ([Firefox-Bug 1725806](https://bugzil.la/1725806)).
