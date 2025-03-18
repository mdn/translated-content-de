---
title: Firefox 111 für Entwickler
slug: Mozilla/Firefox/Releases/111
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 111, die Entwickler betreffen. Firefox 111 wurde am 14. März 2023 veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

- Das globale Attribut [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize) wird jetzt standardmäßig unterstützt. Der Standardwert für das Attribut ist `none`, sodass keine Großschreibung erfolgt ([Firefox-Bug 1692007](https://bugzil.la/1692007)).
- Das globale Attribut [`translate`](/de/docs/Web/HTML/Global_attributes/translate) wird jetzt unterstützt ([Firefox-Bug 1418449](https://bugzil.la/1418449)).

### CSS

- CSS-Farbfunktionen `color()`, `lab()`, `lch()`, `oklab()` und `oklch()` werden jetzt unterstützt.
  Diese Funktionen sind standardmäßig deaktiviert und können durch das Setzen der Präferenz `layout.css.more_color_4.enabled` auf true aktiviert werden.
  Weitere Informationen finden Sie in der [CSS-Farbwert](/de/docs/Web/CSS/color_value) Dokumentation ([Firefox-Bug 1352757](https://bugzil.la/1352757) und [Firefox-Bug 1128204](https://bugzil.la/1128204)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Die Werte `context-stroke` und `context-fill` werden jetzt innerhalb von `<marker>`-Elementen unterstützt.
  Weitere Informationen zur Verwendung dieser Werte mit `fill` und `stroke` Eigenschaften finden Sie in der [`<marker>`](/de/docs/Web/SVG/Reference/Element/marker) Dokumentation ([Firefox-Bug 752638](https://bugzil.la/752638)).

### HTTP

- Der HTTP [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) Header wird bei Cross-Origin-Weiterleitungen entfernt.
  Weitere Details finden Sie unter [Firefox-Bug 1802086](https://bugzil.la/1802086).

### APIs

- Das [Origin private file system (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) wird jetzt bei der Verwendung der [File System API](/de/docs/Web/API/File_System_API) unterstützt.
  Die Daten in diesem Dateisystem sind ursprungsspezifisch: Es sind keine Berechtigungsprompten erforderlich, um auf Dateien zuzugreifen, und das Löschen von Daten für die Website/den Ursprung löscht den Speicher.
  Auf das OPFS wird mit der Methode [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) zugegriffen, indem `navigator.storage.getDirectory()` in einem Worker oder im Haupt-Thread aufgerufen wird.
  Weitere Details finden Sie unter [Firefox-Bug 1785123](https://bugzil.la/1785123).
- Der HTTP [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) Header wird aus [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Anfragen entfernt, die Cross-Origin weitergeleitet werden (`fetch()`-Header können von Entwicklern mit dem [`option.headers`](/de/docs/Web/API/Window/fetch#headers)-Argument hinzugefügt werden).
  Weitere Details finden Sie unter [Firefox-Bug 1802086](https://bugzil.la/1802086).
- Der Wert `none` des `options.imageOrientation` Parameters, der an [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) übergeben wird, wurde in `from-image` umbenannt.
  Dies dient dazu, die Bedeutung der entsprechenden CSS [`image-orientation`](/de/docs/Web/CSS/image-orientation) Eigenschaft besser abzugleichen. ([Firefox-Bug 1809740](https://bugzil.la/1809740)).

#### DOM

- Der [`FormData`](/de/docs/Web/API/FormData) Konstruktor akzeptiert jetzt einen zweiten optionalen `submitter` Parameter, um eine Sende-Schaltfläche zu spezifizieren. Falls die Schaltfläche einen Namen hat oder eine Bildschaltfläche ist, wird sie zum Datensatz des Formulars beitragen. Dies ermöglicht das Erstellen eines [`FormData`](/de/docs/Web/API/FormData) Objekts mit dem gleichen Datensatz wie ein normales Formular, das durch die Schaltfläche bei der Einreichung ausgelöst wurde. Weitere Details finden Sie unter [Firefox-Bug 1812696](https://bugzil.la/1812696).

#### Medien, WebRTC und Web Audio

- [`RTCInboundRtpStreamStats.trackIdentifier`](/de/docs/Web/API/RTCInboundRtpStreamStats#trackidentifier) wird jetzt unterstützt.
  Dies ermöglicht es Entwicklern, `inbound-rtp` Statistiken mit einem bestimmten Track zu verknüpfen, wenn [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) verwendet wird.
  (Weitere Informationen finden Sie unter [Firefox-Bug 1804676](https://bugzil.la/1804676).)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Geändertes Verhalten bei der Behandlung von "stale elements"-Überprüfungen, basierend auf der kürzlich aktualisierten WebDriver-Standard-Spezifikation. Weitere Details finden Sie unter [Firefox-Bug 1808894](https://bugzil.la/1808894).

#### Marionette

- Ein Problem wurde behoben, bei dem das Zurückgeben eines ShadowRoot von `WebDriver:ExecuteScript` einen `cyclic object value` Fehler verursachte. Weitere Details finden Sie unter [Firefox-Bug 1764594](https://bugzil.la/1764594).

## Änderungen für Add-on-Entwickler

- `matchDiacritics` wurde zu der {{WebExtAPIRef("Find.find")}} API hinzugefügt. Diese Option ermöglicht es, bei Suchen zwischen Buchstaben mit und ohne Akzent zu unterscheiden. Wenn diese Option auf `true` gesetzt ist, findet eine Suche nach "résumé" keinen Treffer für "resume" [Firefox-Bug 1680606](https://bugzil.la/1680606).
- {{WebExtAPIRef("search.query")}} wurde hinzugefügt und bietet API-Kompatibilität mit Chromium-basierten Browsern [Firefox-Bug 1804357](https://bugzil.la/1804357).
- Die Eigenschaft `disposition` wurde zu {{WebExtAPIRef("search.search")}} hinzugefügt, um Ergebnisse in einem neuen Tab oder Fenster anzuzeigen [Firefox-Bug 1811274](https://bugzil.la/1811274).

## Ältere Versionen

{{Firefox_for_developers}}
