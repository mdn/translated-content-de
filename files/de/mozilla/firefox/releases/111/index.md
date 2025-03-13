---
title: Firefox 111 für Entwickler
slug: Mozilla/Firefox/Releases/111
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 111, die Entwickler betreffen. Firefox 111 wurde am 14. März 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize) wird jetzt standardmäßig unterstützt. Der Standardwert des Attributs ist `none`, sodass keine Großschreibung erfolgt ([Firefox-Bug 1692007](https://bugzil.la/1692007)).
- Das globale Attribut [`translate`](/de/docs/Web/HTML/Global_attributes/translate) wird nun unterstützt ([Firefox-Bug 1418449](https://bugzil.la/1418449)).

### CSS

- Die CSS-Farbfunktionen `color()`, `lab()`, `lch()`, `oklab()` und `oklch()` werden jetzt unterstützt.
  Diese Funktionen sind standardmäßig deaktiviert und können durch Setzen der Einstellung `layout.css.more_color_4.enabled` auf true aktiviert werden.
  Weitere Informationen finden Sie in der Dokumentation zu [CSS-Farbwerten](/de/docs/Web/CSS/color_value) ([Firefox-Bug 1352757](https://bugzil.la/1352757) und [Firefox-Bug 1128204](https://bugzil.la/1128204)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Die Werte `context-stroke` und `context-fill` werden nun innerhalb von `<marker>`-Elementen unterstützt.
  Weitere Informationen zur Verwendung dieser Werte mit den Eigenschaften `fill` und `stroke` finden Sie in der Dokumentation zu [`<marker>`](/de/docs/Web/SVG/Element/marker) ([Firefox-Bug 752638](https://bugzil.la/752638)).

### HTTP

- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) wird bei Cross-Origin-Redirects entfernt.
  Siehe [Firefox-Bug 1802086](https://bugzil.la/1802086) für weitere Details.

### APIs

- Das [Origin Private File System (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) wird nun bei Verwendung der [File System API](/de/docs/Web/API/File_System_API) unterstützt.
  Die Daten in diesem Dateisystem sind ursprungsspezifisch: Es sind keine Berechtigungsabfragen erforderlich, um auf Dateien zuzugreifen, und das Löschen von Daten für die Site/den Ursprung löscht den Speicher.
  Das OPFS wird mit der Methode [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) zugänglich, indem `navigator.storage.getDirectory()` in einem Worker oder dem Haupt-Thread aufgerufen wird.
  Weitere Details finden Sie im [Firefox-Bug 1785123](https://bugzil.la/1785123).
- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) wird aus [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Anfragen entfernt, die Cross-Origin umgeleitet werden (entwicklerseitig können `fetch()`-Header über das [`option.headers`](/de/docs/Web/API/Window/fetch#headers) Argument hinzugefügt werden).
  Weitere Details finden Sie im [Firefox-Bug 1802086](https://bugzil.la/1802086).
- Der `none` Wert des `options.imageOrientation` Parameters, der an [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) übergeben wird, wurde in `from-image` umbenannt.
  Dies entspricht besser der Bedeutung der gleichwertigen CSS-Eigenschaft [`image-orientation`](/de/docs/Web/CSS/image-orientation). ([Firefox-Bug 1809740](https://bugzil.la/1809740)).

#### DOM

- Der [`FormData`](/de/docs/Web/API/FormData) Konstruktor akzeptiert nun einen zweiten optionalen `submitter` Parameter, um einen Absende-Button anzugeben. Wenn der Button einen Namen hat oder ein Bildbutton ist, trägt er zum Formular-Datensatz bei. Dies ermöglicht es, ein [`FormData`](/de/docs/Web/API/FormData) Objekt mit demselben Datensatz wie eine normale Formularübermittlung zu erstellen, die durch den Button ausgelöst wird. Weitere Details finden Sie im [Firefox-Bug 1812696](https://bugzil.la/1812696).

#### Medien, WebRTC und Web Audio

- [`RTCInboundRtpStreamStats.trackIdentifier`](/de/docs/Web/API/RTCInboundRtpStreamStats#trackidentifier) wird nun unterstützt.
  Dies ermöglicht es Entwicklern, `inbound-rtp` Statistiken mit einem bestimmten Track zu verknüpfen, wenn [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) verwendet wird.
  (Für weitere Informationen siehe [Firefox-Bug 1804676](https://bugzil.la/1804676).)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Geänderte Verhaltensweisen für die Behandlung von Überprüfungen veralteter Elemente basierend auf kürzlich aktualisierten WebDriver-Klassikspezifikationen. Weitere Details finden Sie im [Firefox-Bug 1808894](https://bugzil.la/1808894).

#### Marionette

- Ein Problem wurde behoben, bei dem das Zurückgeben eines ShadowRoot von `WebDriver:ExecuteScript` einen `cyclic object value` Fehler verursacht. Weitere Details finden Sie im [Firefox-Bug 1764594](https://bugzil.la/1764594).

## Änderungen für Add-on-Entwickler

- `matchDiacritics` wurde zur {{WebExtAPIRef("Find.find")}} API hinzugefügt. Diese Option ermöglicht es, bei Suchen zwischen Buchstaben mit Akzenten und ihren Grundbuchstaben zu unterscheiden. Wenn zum Beispiel `true` gesetzt ist, findet eine Suche nach "résumé" kein Ergebnis für "resume" [Firefox-Bug 1680606](https://bugzil.la/1680606).
- {{WebExtAPIRef("search.query")}} wurde hinzugefügt und bietet API-Suchkompatibilität mit Chromium-basierten Browsern [Firefox-Bug 1804357](https://bugzil.la/1804357).
- Die Eigenschaft `disposition` wurde zu {{WebExtAPIRef("search.search")}} hinzugefügt, wodurch die Ergebnisse in einem neuen Tab oder Fenster angezeigt werden können [Firefox-Bug 1811274](https://bugzil.la/1811274).

## Ältere Versionen

{{Firefox_for_developers}}
