---
title: Firefox 111 für Entwickler
slug: Mozilla/Firefox/Releases/111
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 111, die Entwickler betreffen. Firefox 111 wurde am 14. März 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) wird jetzt standardmäßig unterstützt. Der Standardwert für das Attribut ist `none`, sodass keine Großschreibung erfolgt ([Firefox Bug 1692007](https://bugzil.la/1692007)).
- Das globale Attribut [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate) wird jetzt unterstützt ([Firefox Bug 1418449](https://bugzil.la/1418449)).

### CSS

- CSS-Farbfunktionen `color()`, `lab()`, `lch()`, `oklab()` und `oklch()` werden jetzt unterstützt.
  Diese Funktionen sind standardmäßig deaktiviert und können durch Setzen der Präferenz `layout.css.more_color_4.enabled` auf true aktiviert werden.
  Weitere Informationen finden Sie in der Dokumentation zu [CSS-Farbwerten](/de/docs/Web/CSS/color_value) ([Firefox Bug 1352757](https://bugzil.la/1352757) und [Firefox Bug 1128204](https://bugzil.la/1128204)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Die Werte `context-stroke` und `context-fill` werden jetzt innerhalb von `<marker>`-Elementen unterstützt.
  Weitere Informationen zur Verwendung dieser Werte mit den Eigenschaften `fill` und `stroke` finden Sie in der Dokumentation zum [`<marker>`](/de/docs/Web/SVG/Reference/Element/marker) ([Firefox Bug 752638](https://bugzil.la/752638)).

### HTTP

- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) wird von Cross-Origin-Weiterleitungen entfernt.
  Weitere Details finden Sie in [Firefox Bug 1802086](https://bugzil.la/1802086).

### APIs

- Das [Origin Private File System (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) wird jetzt beim Verwenden der [File System API](/de/docs/Web/API/File_System_API) unterstützt.
  Die Daten in diesem Dateisystem sind ursprungsspezifisch: Es sind keine Berechtigungsanfragen erforderlich, um auf Dateien zuzugreifen, und das Löschen der Daten für die Seite/den Ursprung löscht den Speicher.
  Das OPFS wird mit der Methode [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) aufgerufen, indem `navigator.storage.getDirectory()` in einem Worker oder im Haupt-Thread aufgerufen wird.
  Weitere Details finden Sie in [Firefox Bug 1785123](https://bugzil.la/1785123).
- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) wird von Anfragen von [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) entfernt, die umgeleitet werden, wenn es sich um Cross-Origin-Anfragen handelt (`fetch()`-Header können von Entwicklern unter Verwendung des [`option.headers`](/de/docs/Web/API/Window/fetch#headers)-Arguments hinzugefügt werden).
  Weitere Details finden Sie in [Firefox Bug 1802086](https://bugzil.la/1802086).
- Der Wert `none` des Parameters `options.imageOrientation`, der an [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) übergeben wird, wurde in `from-image` umbenannt.
  Dies soll besser mit der Bedeutung der gleichwertigen CSS-Eigenschaft [`image-orientation`](/de/docs/Web/CSS/image-orientation) übereinstimmen. ([Firefox Bug 1809740](https://bugzil.la/1809740)).

#### DOM

- Der [`FormData`](/de/docs/Web/API/FormData)-Konstruktor akzeptiert jetzt einen zweiten optionalen `submitter`-Parameter zur Angabe eines Absende-Buttons. Wenn der Button einen Namen hat oder ein Bildbutton ist, wird er zum Formulardatensatz beitragen. Dies ermöglicht es, ein [`FormData`](/de/docs/Web/API/FormData)-Objekt mit demselben Datensatz wie eine gewöhnliche Formularübermittlung zu erstellen, die durch den Button ausgelöst wurde. Weitere Details finden Sie in [Firefox Bug 1812696](https://bugzil.la/1812696).

#### Medien, WebRTC und Web Audio

- [`RTCInboundRtpStreamStats.trackIdentifier`](/de/docs/Web/API/RTCInboundRtpStreamStats#trackidentifier) wird jetzt unterstützt.
  Dies ermöglicht es Entwicklern, `inbound-rtp`-Statistiken einem bestimmten Track zuzuordnen, wenn [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) verwendet wird.
  (Für weitere Informationen siehe [Firefox Bug 1804676](https://bugzil.la/1804676).)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Verhaltensweisen für die Behandlung von Überprüfungen nicht mehr existierender Elemente wurden basierend auf der kürzlich aktualisierten WebDriver-Klassik-Spezifikation geändert. Weitere Details finden Sie in [Firefox Bug 1808894](https://bugzil.la/1808894).

#### Marionette

- Ein Problem wurde behoben, bei dem das Zurückgeben eines ShadowRoot von `WebDriver:ExecuteScript` einen `cyclic object value`-Fehler verursacht. Weitere Details finden Sie in [Firefox Bug 1764594](https://bugzil.la/1764594).

## Änderungen für Add-on-Entwickler

- `matchDiacritics` wurde zur {{WebExtAPIRef("Find.find")}} API hinzugefügt. Diese Option ermöglicht es Suchen, zwischen akzentuierten Buchstaben und ihren Grundbuchstaben zu unterscheiden. Zum Beispiel findet eine Suche nach "résumé" keine Übereinstimmung für "resume", wenn der Wert auf `true` gesetzt ist [Firefox Bug 1680606](https://bugzil.la/1680606).
- {{WebExtAPIRef("search.query")}} wurde hinzugefügt, um die Kompatibilität der Such-API mit auf Chromium basierenden Browsern bereitzustellen [Firefox Bug 1804357](https://bugzil.la/1804357).
- Die Eigenschaft `disposition` wurde zur {{WebExtAPIRef("search.search")}} hinzugefügt, sodass Ergebnisse in einem neuen Tab oder Fenster angezeigt werden können [Firefox Bug 1811274](https://bugzil.la/1811274).

## Ältere Versionen

{{Firefox_for_developers}}
