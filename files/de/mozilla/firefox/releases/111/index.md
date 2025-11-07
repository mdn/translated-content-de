---
title: Firefox 111 Versionshinweise für Entwickler
short-title: Firefox 111
slug: Mozilla/Firefox/Releases/111
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 111, die Entwickler betreffen. Firefox 111 wurde am 14. März 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) wird jetzt standardmäßig unterstützt. Der Standardwert für das Attribut ist `none`, sodass keine Großschreibung erfolgt ([Firefox Bug 1692007](https://bugzil.la/1692007)).
- Das globale Attribut [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate) wird nun unterstützt ([Firefox Bug 1418449](https://bugzil.la/1418449)).

### CSS

- CSS-Farb-Funktionen `color()`, `lab()`, `lch()`, `oklab()` und `oklch()` werden jetzt unterstützt. Diese Funktionen sind standardmäßig deaktiviert und können aktiviert werden, indem Sie die Einstellung `layout.css.more_color_4.enabled` auf true setzen. Weitere Informationen finden Sie in der [CSS-Farbwert](/de/docs/Web/CSS/Reference/Values/color_value) Dokumentation ([Firefox Bug 1352757](https://bugzil.la/1352757) und [Firefox Bug 1128204](https://bugzil.la/1128204)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Die Werte `context-stroke` und `context-fill` werden jetzt innerhalb von `<marker>`-Elementen unterstützt. Weitere Informationen zur Verwendung dieser Werte mit `fill` und `stroke` Eigenschaften finden Sie in der [`<marker>`](/de/docs/Web/SVG/Reference/Element/marker) Dokumentation ([Firefox Bug 752638](https://bugzil.la/752638)).

### HTTP

- Der HTTP [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) Header wird bei Cross-Origin-Weiterleitungen entfernt. Weitere Details finden Sie im [Firefox Bug 1802086](https://bugzil.la/1802086).

### APIs

- Das [Origin private file system (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) wird nun unterstützt, wenn Sie die [File System API](/de/docs/Web/API/File_System_API) verwenden. Die Daten in diesem Dateisystem sind ursprungspezifisch: Es sind keine Berechtigungsaufforderungen erforderlich, um auf Dateien zuzugreifen, und das Löschen von Daten für die Seite/den Ursprung löscht den Speicher. Auf das OPFS wird mit der Methode [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) zugegriffen, indem `navigator.storage.getDirectory()` in einem Worker oder im Hauptthread aufgerufen wird. Weitere Details finden Sie im [Firefox Bug 1785123](https://bugzil.la/1785123).
- Der HTTP [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) Header wird aus [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen entfernt, die cross-origin weitergeleitet werden (`fetch()` Header können von Entwicklern unter Verwendung des [`option.headers`](/de/docs/Web/API/RequestInit#headers) Arguments hinzugefügt werden). Weitere Details finden Sie im [Firefox Bug 1802086](https://bugzil.la/1802086).
- Der Wert `none` des `options.imageOrientation` Parameters, der an [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) übergeben wird, wurde in `from-image` umbenannt. Dies soll besser der Bedeutung der entsprechenden CSS [`image-orientation`](/de/docs/Web/CSS/Reference/Properties/image-orientation) Eigenschaft entsprechen. ([Firefox Bug 1809740](https://bugzil.la/1809740)).

#### DOM

- Der [`FormData`](/de/docs/Web/API/FormData) Konstruktor akzeptiert jetzt einen zweiten optionalen `submitter` Parameter, um eine Sende-Schaltfläche anzugeben. Wenn die Schaltfläche einen Namen hat oder eine Bild-Schaltfläche ist, wird sie zum Formulardaten-Set beitragen. Dies ermöglicht es, ein [`FormData`](/de/docs/Web/API/FormData) Objekt mit demselben Datensatz zu erstellen wie eine einfache Formularübermittlung, die durch die Schaltfläche ausgelöst wird. Weitere Details finden Sie im [Firefox Bug 1812696](https://bugzil.la/1812696).

#### Medien, WebRTC, und Web Audio

- [`RTCInboundRtpStreamStats.trackIdentifier`](/de/docs/Web/API/RTCInboundRtpStreamStats/trackIdentifier) wird jetzt unterstützt. Dies ermöglicht es Entwicklern, `inbound-rtp` Statistiken mit einem bestimmten Track zu verknüpfen, wenn [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) verwendet wird. (Weitere Informationen finden Sie im [Firefox Bug 1804676](https://bugzil.la/1804676).)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Veränderte das Verhalten zur Behandlung von Stale-Element-Prüfungen basierend auf kürzlich aktualisierten WebDriver-Classic-Spezifikationen. Weitere Details finden Sie im [Firefox Bug 1808894](https://bugzil.la/1808894).

#### Marionette

- Behebte ein Problem, bei dem das Zurückgeben eines ShadowRoot aus `WebDriver:ExecuteScript` einen `cyclic object value` Fehler verursacht. Weitere Details finden Sie im [Firefox Bug 1764594](https://bugzil.la/1764594).

## Änderungen für Add-on-Entwickler

- `matchDiacritics` wurde zur {{WebExtAPIRef("Find.find")}} API hinzugefügt. Diese Option ermöglicht es Suchvorgängen, zwischen Akzentbuchstaben und ihren Grundbuchstaben zu unterscheiden. Zum Beispiel findet eine Suche nach "résumé" bei gesetztem Wert `true` kein Ergebnis für "resume" [Firefox Bug 1680606](https://bugzil.la/1680606).
- {{WebExtAPIRef("search.query")}} wurde hinzugefügt und bietet Such-API-Kompatibilität mit Chromium-basierten Browsern [Firefox Bug 1804357](https://bugzil.la/1804357).
- Die `disposition` Eigenschaft wurde zu {{WebExtAPIRef("search.search")}} hinzugefügt, sodass die Ergebnisse in einem neuen Tab oder Fenster angezeigt werden können [Firefox Bug 1811274](https://bugzil.la/1811274).
