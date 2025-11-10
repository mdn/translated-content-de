---
title: Firefox 134 Versionshinweise für Entwickler
short-title: Firefox 134
slug: Mozilla/Firefox/Releases/134
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 134, die Entwickler betreffen. Firefox 134 wurde am [7. Januar 2025](https://whattrainisitnow.com/release/?version=134) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die CSS-Eigenschaften {{CSSXRef("align-self")}} und {{CSSXRef("justify-self")}} sowie die CSS-Abkürzungseigenschaft {{CSSXRef("place-self")}} werden nun für [absolut positionierte](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#absolute_positioning) Elemente unterstützt. ([Firefox Fehler 1920160](https://bugzil.la/1920160)).

### JavaScript

- Unterstützung für die statische Methode {{jsxref("RegExp.escape()")}}, die verwendet werden kann, um alle potenziellen Zeichen der Regex-Syntax in einem String zu maskieren und einen neuen String zurückzugeben, der sicher als [literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktor verwendet werden kann. ([Firefox Fehler 1918235](https://bugzil.la/1918235)).
- Die Komfortmethode {{jsxref("Promise.try()")}} wird nun unterstützt.
  Die Methode nimmt einen beliebigen Callback (eine Funktion, die zurückgibt oder wirft, synchron oder asynchron) und umschließt dessen Ergebnis in ein {{jsxref("Promise")}}.
  Dies ermöglicht die Verwendung von Promise-Semantiken ({{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}), um das Ergebnis jeder Art von Methode zu bearbeiten. ([Firefox Fehler 1917879](https://bugzil.la/1917879) und [Firefox Fehler 1905364](https://bugzil.la/1905364)).

### APIs

- Die statische Methode [`PushManager.supportedContentEncodings`](/de/docs/Web/API/PushManager/supportedContentEncodings_static) wird nun unterstützt, um die erlaubten Algorithmen für das Verschlüsseln der Nutzdaten einer [Push-Nachricht](/de/docs/Web/API/Push_API) zu erhalten. ([Firefox Fehler 1497430](https://bugzil.la/1497430)).
- [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) erlaubt nun, den Wert zu setzen, selbst während ein automatisiertes Ereignis geplant ist: Bisher wurde die Operation in diesen Zeiten still ignoriert. ([Firefox Fehler 1308435](https://bugzil.la/1308435)).
- Die Methode [`ReadableStreamBYOBReader.read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read) hat ein neues Argument [`options.min`](/de/docs/Web/API/ReadableStreamBYOBReader/read#min), das verwendet werden kann, um die minimale Anzahl von Elementen anzugeben, die bei jedem Aufruf zurückgegeben werden sollen. Dies könnte beispielsweise verwendet werden, um unnötige Iterationen zu vermeiden, wenn mit Datenstrukturen gearbeitet wird, die eine bekannte Datengröße haben. ([Firefox Fehler 1864406](https://bugzil.la/1864406)).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC Simulcast von bildschirmgeteiltem Video mit dem [VP8-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) wird nun unterstützt (Simulcast von anderen Videoquellen ist seit langem aktiviert). Genauer gesagt können [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte für Bildschirm- und Fensterausgabe (zum Beispiel von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)) nun kodiert werden, um mehrere Simulcast-Schichten zu nutzen, wenn VP8 verwendet wird. ([Firefox Fehler 1692873](https://bugzil.la/1692873)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Implementiert den `browser.getClientWindows` Befehl, der es ermöglicht, Informationen über die aktuell geöffneten Browserfenster abzurufen ([Firefox Fehler 1855025](https://bugzil.la/1855025))
- Unterstützung für die Felder `initiatorType` und `destination` für alle Netzwerkevents hinzugefügt ([Firefox Fehler 1904892](https://bugzil.la/1904892) und [Firefox Fehler 1933331](https://bugzil.la/1933331)). Sie ermöglichen es zu verstehen, warum und wie die Anfrage erstellt wurde.
- Das `browsingContext.navigationStarted` Ereignis wird nicht mehr ausgelöst, wenn die anfängliche about:blank-Seite für einen neuen obersten Browsing-Kontext geladen wird ([Firefox Fehler 1922014](https://bugzil.la/1922014))
- Ein Fehler wurde behoben, bei dem die `requestTime` von Netzwerkevents manchmal auf 0 gesetzt wurde ([Firefox Fehler 1930849](https://bugzil.la/1930849))
- Der `browsingContext.traverseHistory` Befehl kann jetzt nur noch mit obersten Browsing-Kontexten verwendet werden ([Firefox Fehler 1924859](https://bugzil.la/1924859))
- Die Zuverlässigkeit von während einer Navigation gesendeten Befehlen wurde verbessert, beispielsweise wenn ein Browsing-Kontext ersetzt wird ([Firefox Fehler 1927073](https://bugzil.la/1927073)).

#### Marionette

- Die Befehle `Addon:Install` und `Addon:Uninstall` sind jetzt für GeckoView (Firefox für Android) verfügbar ([Firefox Fehler 1806135](https://bugzil.la/1806135)).
- Der Befehl `Addon:Install` kann jetzt verwendet werden, um Erweiterungen zu installieren, die im Privaten Modus aktiv sind ([Firefox Fehler 1810718](https://bugzil.la/1810718))

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 134 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite für [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`Intl.DurationFormat`** (Nightly-Veröffentlichung): {{jsxref("Intl.DurationFormat")}} ermöglicht die lokalisierungssensitive Formatierung von Zeitspannen. ([Firefox Fehler 1648139](https://bugzil.la/1648139)).
- **`autocorrect`**: <code>dom.forms.autocorrect</code>.
  Das HTML-Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) und die Eigenschaft [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect) ermöglichen die Autokorrektur in editierbaren Textelementen, einschließlich: der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen, die das Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt haben ([Firefox Fehler 1725806](https://bugzil.la/1725806)).
