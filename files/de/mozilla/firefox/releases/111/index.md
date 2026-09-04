---
title: Firefox 111 Versionshinweise für Entwickler
short-title: Firefox 111
slug: Mozilla/Firefox/Releases/111
l10n:
  sourceCommit: 6030ef1aadf967b80e2c79c3d3463cccc8ea0c95
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 111, die Entwickler betreffen. Firefox 111 wurde am 14. März 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) wird nun standardmäßig unterstützt. Der Standardwert für das Attribut ist `none`, sodass keine Großschreibung erfolgt ([Firefox Bug 1692007](https://bugzil.la/1692007)).
- Das globale Attribut [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate) wird nun unterstützt ([Firefox Bug 1418449](https://bugzil.la/1418449)).

### CSS

- CSS-Farb-Funktionen `color()`, `lab()`, `lch()`, `oklab()` und `oklch()` werden jetzt unterstützt.
  Diese Funktionen sind standardmäßig deaktiviert und können aktiviert werden, indem die Einstellung `layout.css.more_color_4.enabled` auf true gesetzt wird.
  Weitere Informationen finden Sie in der [CSS Farbwert](/de/docs/Web/CSS/Reference/Values/color_value) Dokumentation ([Firefox Bug 1352757](https://bugzil.la/1352757) und [Firefox Bug 1128204](https://bugzil.la/1128204)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Die Werte `context-stroke` und `context-fill` werden jetzt innerhalb von `<marker>`-Elementen unterstützt.
  Weitere Informationen zur Verwendung dieser Werte mit `fill`- und `stroke`-Eigenschaften finden Sie in der [`<marker>`](/de/docs/Web/SVG/Reference/Element/marker) Dokumentation ([Firefox Bug 752638](https://bugzil.la/752638)).

### HTTP

- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) wird bei Cross-Origin-Weiterleitungen entfernt.
  Weitere Details finden Sie im [Firefox Bug 1802086](https://bugzil.la/1802086).

### APIs

- Das [Origin Private File System (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) wird jetzt unterstützt, wenn die [File System API](/de/docs/Web/API/File_System_API) verwendet wird.
  Die Daten in diesem Dateisystem sind ursprungsspezifisch: Berechtigungsanfragen sind nicht erforderlich, um auf Dateien zuzugreifen, und das Löschen von Daten für die Seite/den Ursprung löscht den Speicher.
  Auf das OPFS wird mit der Methode [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) zugegriffen, indem `navigator.storage.getDirectory()` in einem Worker oder dem Haupt-Thread aufgerufen wird.
  Weitere Details finden Sie im [Firefox Bug 1785123](https://bugzil.la/1785123).
- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) wird bei [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Anfragen, die Cross-Origin weitergeleitet werden, entfernt (`fetch()`-Header können von Entwicklern mit dem [`option.headers`](/de/docs/Web/API/RequestInit#headers) Argument hinzugefügt werden).
  Weitere Details finden Sie im [Firefox Bug 1802086](https://bugzil.la/1802086).
- Der Wert `none` des `options.imageOrientation`-Parameters, der an [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) übergeben wird, wurde in `from-image` umbenannt.
  Dies soll besser die Bedeutung der äquivalenten CSS [`image-orientation`](/de/docs/Web/CSS/Reference/Properties/image-orientation) Eigenschaft widerspiegeln. ([Firefox Bug 1809740](https://bugzil.la/1809740)).

#### DOM

- Der [`FormData`](/de/docs/Web/API/FormData) Konstruktor akzeptiert jetzt einen zweiten optionalen `submitter` Parameter, um einen Sende-Button zu spezifizieren. Wenn der Button einen Namen hat oder ein Bildbutton ist, wird er zu dem Formulardatensatz beitragen. Damit ist es möglich, ein [`FormData`](/de/docs/Web/API/FormData) Objekt mit demselben Datensatz wie eine von dem Button ausgelöste Standardformularübermittlung zu erstellen. Weitere Details finden Sie im [Firefox Bug 1812696](https://bugzil.la/1812696).

#### Media, WebRTC und Web Audio

- [`RTCInboundRtpStreamStats.trackIdentifier`](/de/docs/Web/API/RTCInboundRtpStreamStats/trackIdentifier) wird jetzt unterstützt.
  Dies ermöglicht es Entwicklern, `inbound-rtp` Statistiken mit einem bestimmten Track zu verknüpfen, wenn sie [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) verwenden.
  (Weitere Informationen finden Sie im [Firefox Bug 1804676](https://bugzil.la/1804676).)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Verhaltensweisen für die Behandlung von Stale-Element-Prüfungen wurden basierend auf der kürzlich aktualisierten klassischen WebDriver-Spezifikation geändert. Weitere Informationen finden Sie im [Firefox Bug 1808894](https://bugzil.la/1808894).

#### Marionette

- Ein Problem wurde behoben, bei dem das Zurückgeben eines ShadowRoot von `WebDriver:ExecuteScript` einen `cyclic object value`-Fehler verursacht. Weitere Informationen finden Sie im [Firefox Bug 1764594](https://bugzil.la/1764594).

## Änderungen für Add-on Entwickler

- `matchDiacritics` wurde zur {{WebExtAPIRef("Find.find")}} API hinzugefügt. Diese Option ermöglicht es, bei der Suche zwischen Buchstaben mit Akzenten und ihren Basisbuchstaben zu unterscheiden. Wenn sie auf `true` gesetzt ist, wird z.B. bei der Suche nach "résumé" kein Treffer für "resume" gefunden [Firefox Bug 1680606](https://bugzil.la/1680606).
- {{WebExtAPIRef("search.query")}} wurde hinzugefügt und bietet Such-API-Kompatibilität mit Chromium-basierten Browsern [Firefox Bug 1804357](https://bugzil.la/1804357).
- Die `disposition` Eigenschaft wurde zu {{WebExtAPIRef("search.search")}} hinzugefügt, sodass Ergebnisse in einem neuen Tab oder Fenster angezeigt werden können [Firefox Bug 1811274](https://bugzil.la/1811274).
