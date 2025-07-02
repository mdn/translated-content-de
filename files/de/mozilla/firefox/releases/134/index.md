---
title: Firefox 134 für Entwickler
slug: Mozilla/Firefox/Releases/134
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 134, die Entwickler betreffen. Firefox 134 wurde am [7. Januar 2025](https://whattrainisitnow.com/release/?version=134) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die CSS-Eigenschaften {{CSSXRef("align-self")}} und {{CSSXRef("justify-self")}} sowie die Kurzform-Eigenschaft {{CSSXRef("place-self")}} werden jetzt für [absolut positionierte](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#absolute_positioning) Elemente unterstützt. ([Firefox-Bug 1920160](https://bugzil.la/1920160)).

### JavaScript

- Unterstützung für die {{jsxref("RegExp.escape()")}} statische Methode, die verwendet werden kann, um potenzielle Syntaxzeichen eines regulären Ausdrucks in einem String zu maskieren und einen neuen String zurückzugeben, der sicher als [literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktor verwendet werden kann. ([Firefox-Bug 1918235](https://bugzil.la/1918235)).
- Die {{jsxref("Promise.try()")}} Komfortmethode wird jetzt unterstützt. Die Methode nimmt einen Rückruf jeglicher Art (eine Funktion, die synchron oder asynchron zurückgibt oder auslöst) entgegen und verpackt ihr Ergebnis in einem {{jsxref("Promise")}}. Dies ermöglicht es Ihnen, Promise-Semantiken ({{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) zu verwenden, um das Ergebnis einer beliebigen Methode zu verarbeiten. ([Firefox-Bug 1917879](https://bugzil.la/1917879) und [Firefox-Bug 1905364](https://bugzil.la/1905364)).

### APIs

- Die statische Methode [`PushManager.supportedContentEncodings`](/de/docs/Web/API/PushManager/supportedContentEncodings_static) wird jetzt unterstützt, um die erlaubten Algorithmen zum Verschlüsseln der Nutzlast einer [Push-Nachricht](/de/docs/Web/API/Push_API) abzurufen. ([Firefox-Bug 1497430](https://bugzil.la/1497430)).
- [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) erlaubt es nun, den Wert auch dann zu setzen, wenn ein automatisiertes Ereignis geplant ist: zuvor wurde die Operation zu diesen Zeiten stillschweigend ignoriert. ([Firefox-Bug 1308435](https://bugzil.la/1308435)).
- Die Methode [`ReadableStreamBYOBReader.read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read) hat ein neues Argument [`options.min`](/de/docs/Web/API/ReadableStreamBYOBReader/read#min), das verwendet werden kann, um die minimale Anzahl an Elementen anzugeben, die bei jedem Aufruf zurückgegeben werden sollen. Dies könnte beispielsweise genutzt werden, um unnötige Iterationen zu vermeiden, wenn man mit Datenstrukturen arbeitet, die eine bekannte Datenmenge haben. ([Firefox-Bug 1864406](https://bugzil.la/1864406)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die WebRTC-Simulcast von bildschirmgeteiltem Video mit dem [VP8-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) wird jetzt unterstützt (Simulcast von anderen Videoquellen ist schon lange aktiviert). Genauer gesagt können [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte für Bildschirm- und Fensteraufnahme (zum Beispiel von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)) nun als mehrere Simulcast-Schichten kodiert werden, wenn sie VP8 verwenden. ([Firefox-Bug 1692873](https://bugzil.la/1692873)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Implementiert den `browser.getClientWindows` Befehl, der es ermöglicht, Informationen über die aktuell geöffneten Browserfenster abzurufen ([Firefox-Bug 1855025](https://bugzil.la/1855025))
- Unterstützung für die Felder `initiatorType` und `destination` für alle Netzwerkevents hinzugefügt ([Firefox-Bug 1904892](https://bugzil.la/1904892) und [Firefox-Bug 1933331](https://bugzil.la/1933331)). Sie ermöglichen es zu verstehen, warum und wie die Anfrage erstellt wurde.
- Das `browsingContext.navigationStarted` Ereignis wird nicht mehr ausgelöst, wenn die initiale about:blank-Seite für einen neuen Top-Level-Browsing-Kontext geladen wird ([Firefox-Bug 1922014](https://bugzil.la/1922014))
- Ein Fehler wurde behoben, bei dem die `requestTime` von Netzwerkevents manchmal auf 0 gesetzt wurde ([Firefox-Bug 1930849](https://bugzil.la/1930849))
- Der `browsingContext.traverseHistory` Befehl kann jetzt nur mit Top-Level-Browsing-Kontexten verwendet werden ([Firefox-Bug 1924859](https://bugzil.la/1924859))
- Die Zuverlässigkeit von Befehlen, die während einer Navigation gesendet werden, wurde verbessert, zum Beispiel wenn ein Browsing-Kontext ersetzt wird ([Firefox-Bug 1927073](https://bugzil.la/1927073)).

#### Marionette

- Die Befehle `Addon:Install` und `Addon:Uninstall` sind jetzt für GeckoView (Firefox für Android) verfügbar ([Firefox-Bug 1806135](https://bugzil.la/1806135)).
- Der Befehl `Addon:Install` kann jetzt verwendet werden, um Erweiterungen zu installieren, die im Privaten Modus aktiviert sind ([Firefox-Bug 1810718](https://bugzil.la/1810718))

## Experimentelle Web-Features

Diese Funktionen werden neu in Firefox 134 bereitgestellt, sind jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **`Intl.DurationFormat`** (Nightly-Version): {{jsxref("Intl.DurationFormat")}} ermöglicht die lokalisierungssensitive Formatierung von Zeitdauern. ([Firefox-Bug 1648139](https://bugzil.la/1648139)).
- **`autocorrect`**: <code>dom.forms.autocorrect</code>.
  Das HTML [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) Attribut und die [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect) Eigenschaft erlauben die Autokorrektur in bearbeitbaren Textelementen, einschließlich: der meisten Arten von text {{htmlelement("input")}} Elementen, {{htmlelement("textarea")}} Elementen und Elementen, die das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut gesetzt haben ([Firefox-Bug 1725806](https://bugzil.la/1725806)).

## Ältere Versionen

{{Firefox_for_developers}}
