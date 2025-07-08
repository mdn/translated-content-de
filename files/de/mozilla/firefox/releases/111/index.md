---
title: Firefox 111 für Entwickler
slug: Mozilla/Firefox/Releases/111
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 111, die Entwickler betreffen. Firefox 111 wurde am 14. März 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) wird jetzt standardmäßig unterstützt. Der Standardwert für das Attribut ist `none`, sodass keine Großschreibung erfolgt ([Firefox-Bug 1692007](https://bugzil.la/1692007)).
- Das globale Attribut [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate) wird jetzt unterstützt ([Firefox-Bug 1418449](https://bugzil.la/1418449)).

### CSS

- CSS-Farbfunktionen `color()`, `lab()`, `lch()`, `oklab()` und `oklch()` werden jetzt unterstützt.
  Diese Funktionen sind standardmäßig deaktiviert und können aktiviert werden, indem die Einstellung `layout.css.more_color_4.enabled` auf true gesetzt wird.
  Für weitere Informationen siehe die Dokumentation zu [CSS color value](/de/docs/Web/CSS/color_value) ([Firefox-Bug 1352757](https://bugzil.la/1352757) und [Firefox-Bug 1128204](https://bugzil.la/1128204)).

### JavaScript

Keine nennenswerten Änderungen.

### SVG

- Die Werte `context-stroke` und `context-fill` werden jetzt innerhalb von `<marker>`-Elementen unterstützt.
  Weitere Informationen zur Verwendung dieser Werte mit den Eigenschaften `fill` und `stroke` finden Sie in der [`<marker>`](/de/docs/Web/SVG/Reference/Element/marker) Dokumentation ([Firefox-Bug 752638](https://bugzil.la/752638)).

### HTTP

- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) wird bei cross-origin Weiterleitungen entfernt.
  Siehe [Firefox-Bug 1802086](https://bugzil.la/1802086) für weitere Details.

### APIs

- Das [Origin Private File System (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) wird nun unterstützt, wenn die [File System API](/de/docs/Web/API/File_System_API) verwendet wird.
  Die Daten in diesem Dateisystem sind origin-spezifisch: Es sind keine Berechtigungsaufforderungen erforderlich, um auf die Dateien zuzugreifen, und das Löschen von Daten für die Seite/Origin löscht den Speicher.
  Auf das OPFS wird mit der Methode [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) zugegriffen, indem `navigator.storage.getDirectory()` in einem Worker oder dem Hauptthread aufgerufen wird.
  Siehe [Firefox-Bug 1785123](https://bugzil.la/1785123) für weitere Details.
- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) wird aus [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Anfragen entfernt, die cross-origin weitergeleitet werden (`fetch()`-Header können von Entwicklern mit dem Argument [`option.headers`](/de/docs/Web/API/RequestInit#headers) hinzugefügt werden).
  Siehe [Firefox-Bug 1802086](https://bugzil.la/1802086) für weitere Details.
- Der Wert `none` des Parameters `options.imageOrientation`, der an [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) übergeben wird, wurde in `from-image` umbenannt.
  Dies soll die Bedeutung der gleichwertigen CSS-Eigenschaft [`image-orientation`](/de/docs/Web/CSS/image-orientation) besser widerspiegeln. ([Firefox-Bug 1809740](https://bugzil.la/1809740)).

#### DOM

- Der Konstruktor [`FormData`](/de/docs/Web/API/FormData) akzeptiert jetzt einen zweiten optionalen `submitter`-Parameter, um eine Sende-Schaltfläche zu spezifizieren. Wenn die Schaltfläche einen Namen hat oder eine Bild-Schaltfläche ist, wird sie zum Formularsatz beitragen. Dies ermöglicht es, ein [`FormData`](/de/docs/Web/API/FormData)-Objekt mit dem gleichen Datenbestand wie eine herkömmliche Formularübermittlung zu erstellen, die durch die Schaltfläche ausgelöst wird. Siehe [Firefox-Bug 1812696](https://bugzil.la/1812696) für weitere Details.

#### Media, WebRTC und Web Audio

- [`RTCInboundRtpStreamStats.trackIdentifier`](/de/docs/Web/API/RTCInboundRtpStreamStats#trackidentifier) wird jetzt unterstützt.
  Dies ermöglicht Entwicklern, `inbound-rtp`-Statistiken mit einem bestimmten Track zu verknüpfen, wenn [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) verwendet wird.
  (Für weitere Informationen siehe [Firefox-Bug 1804676](https://bugzil.la/1804676).)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Verhaltensweisen für das Überprüfen von veralteten Elementen wurden basierend auf der kürzlich aktualisierten WebDriver classic specification geändert. Siehe [Firefox-Bug 1808894](https://bugzil.la/1808894) für weitere Details.

#### Marionette

- Ein Problem wurde behoben, bei dem die Rückgabe eines ShadowRoot von `WebDriver:ExecuteScript` einen `cyclic object value`-Fehler verursachte. Siehe [Firefox-Bug 1764594](https://bugzil.la/1764594) für weitere Details.

## Änderungen für Add-on-Entwickler

- `matchDiacritics` wurde zur {{WebExtAPIRef("Find.find")}} API hinzugefügt. Diese Option ermöglicht es, bei der Suche zwischen Buchstaben mit und ohne Akzent zu unterscheiden. Beispielsweise führt die Suche nach "résumé" bei aktivierter Option nicht zu einem Treffer für "resume" [Firefox-Bug 1680606](https://bugzil.la/1680606).
- {{WebExtAPIRef("search.query")}} wurde hinzugefügt, um die Such-API-Kompatibilität mit Chromium-basierten Browsern bereitzustellen [Firefox-Bug 1804357](https://bugzil.la/1804357).
- Die `disposition`-Eigenschaft wurde zu {{WebExtAPIRef("search.search")}} hinzugefügt, um Ergebnisse in einem neuen Tab oder Fenster anzuzeigen [Firefox-Bug 1811274](https://bugzil.la/1811274).

## Ältere Versionen

{{Firefox_for_developers}}
