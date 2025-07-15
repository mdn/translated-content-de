---
title: Firefox 111 für Entwickler
short-title: Firefox 111
slug: Mozilla/Firefox/Releases/111
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel informiert über die Änderungen in Firefox 111, die Entwickler betreffen. Firefox 111 wurde am 14. März 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) wird jetzt standardmäßig unterstützt. Der Standardwert für das Attribut ist `none`, sodass keine Großschreibung erfolgt ([Firefox-Bug 1692007](https://bugzil.la/1692007)).
- Das globale Attribut [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate) wird jetzt unterstützt ([Firefox-Bug 1418449](https://bugzil.la/1418449)).

### CSS

- Die CSS-Farbfunktionsunterstützung für `color()`, `lab()`, `lch()`, `oklab()` und `oklch()` wurde hinzugefügt.
  Diese Funktionen sind standardmäßig deaktiviert und können aktiviert werden, indem die Einstellung `layout.css.more_color_4.enabled` auf true gesetzt wird.
  Weitere Informationen finden Sie in der [CSS-Farbwert](/de/docs/Web/CSS/color_value) Dokumentation ([Firefox-Bug 1352757](https://bugzil.la/1352757) und [Firefox-Bug 1128204](https://bugzil.la/1128204)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Die Werte `context-stroke` und `context-fill` werden nun innerhalb der `<marker>`-Elemente unterstützt.
  Weitere Informationen zur Verwendung dieser Werte mit den Eigenschaften `fill` und `stroke` finden Sie in der [`<marker>`](/de/docs/Web/SVG/Reference/Element/marker) Dokumentation ([Firefox-Bug 752638](https://bugzil.la/752638)).

### HTTP

- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) wird bei Cross-Origin-Weiterleitungen entfernt.
  Weitere Details finden Sie im [Firefox-Bug 1802086](https://bugzil.la/1802086).

### APIs

- Das [Origin Private File System (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) wird jetzt beim Verwenden der [File System API](/de/docs/Web/API/File_System_API) unterstützt.
  Die Daten in diesem Dateisystem sind ursprungspezifisch: Es sind keine Berechtigungsabfragen erforderlich, um auf Dateien zuzugreifen, und das Löschen von Daten für die Site/den Ursprung löscht den Speicher.
  Auf das OPFS wird mit der Methode [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) zugegriffen, indem `navigator.storage.getDirectory()` in einem Worker oder im Hauptthread aufgerufen wird.
  Weitere Details finden Sie im [Firefox-Bug 1785123](https://bugzil.la/1785123).
- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) wird bei Anfragen mit [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), die Cross-Origin weitergeleitet werden, entfernt (die `fetch()`-Header können von Entwicklern mit dem [`option.headers`](/de/docs/Web/API/RequestInit#headers)-Argument hinzugefügt werden).
  Weitere Details finden Sie im [Firefox-Bug 1802086](https://bugzil.la/1802086).
- Der Wert `none` des Parameters `options.imageOrientation`, der an [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) übergeben wird, wurde in `from-image` umbenannt.
  Dies soll die Bedeutung der entsprechenden CSS-Eigenschaft [`image-orientation`](/de/docs/Web/CSS/image-orientation) besser widerspiegeln. ([Firefox-Bug 1809740](https://bugzil.la/1809740)).

#### DOM

- Der [`FormData`](/de/docs/Web/API/FormData)-Konstruktor akzeptiert jetzt einen zweiten optionalen `submitter`-Parameter, um eine Sendetaste anzugeben. Wenn die Schaltfläche einen Namen hat oder eine Bildschaltfläche ist, wird sie zum Formulardatensatz beitragen. Dies ermöglicht es, ein [`FormData`](/de/docs/Web/API/FormData)-Objekt mit demselben Datensatz zu erstellen wie eine standardmäßige Formularübermittlung, die durch die Schaltfläche ausgelöst wird. Weitere Details finden Sie im [Firefox-Bug 1812696](https://bugzil.la/1812696).

#### Medien, WebRTC und Web Audio

- [`RTCInboundRtpStreamStats.trackIdentifier`](/de/docs/Web/API/RTCInboundRtpStreamStats#trackidentifier) wird jetzt unterstützt.
  Dies ermöglicht es Entwicklern, `inbound-rtp`-Statistiken bei der Verwendung von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) einem bestimmten Track zuzuordnen.
  (Weitere Informationen finden Sie im [Firefox-Bug 1804676](https://bugzil.la/1804676).)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Geändertes Verhalten bei der Überprüfung veralteter Elemente basierend auf der kürzlich aktualisierten WebDriver-Klassikspezifikation. Weitere Details finden Sie im [Firefox-Bug 1808894](https://bugzil.la/1808894).

#### Marionette

- Ein Problem wurde behoben, bei dem das Zurückgeben eines `ShadowRoot` von `WebDriver:ExecuteScript` einen `cyclic object value`-Fehler verursacht. Weitere Details finden Sie im [Firefox-Bug 1764594](https://bugzil.la/1764594).

## Änderungen für Add-on-Entwickler

- `matchDiacritics` wurde zur {{WebExtAPIRef("Find.find")}} API hinzugefügt. Diese Option ermöglicht Suchvorgänge, die zwischen Buchstaben mit Akzenten und ihren Grundbuchstaben unterscheiden. Zum Beispiel wird bei Einstellung auf `true`, die Suche nach "résumé" keine Übereinstimmung mit "resume" finden [Firefox-Bug 1680606](https://bugzil.la/1680606).
- {{WebExtAPIRef("search.query")}} wurde hinzugefügt und bietet Such-API-Kompatibilität mit Chromium-basierten Browsern [Firefox-Bug 1804357](https://bugzil.la/1804357).
- Die `disposition`-Eigenschaft wurde zu {{WebExtAPIRef("search.search")}} hinzugefügt und ermöglicht es, die Ergebnisse in einem neuen Tab oder Fenster anzuzeigen [Firefox-Bug 1811274](https://bugzil.la/1811274).
