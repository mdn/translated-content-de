---
title: Firefox 111 für Entwickler
slug: Mozilla/Firefox/Releases/111
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 111, die Entwickler betreffen. Firefox 111 wurde am 14. März 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) wird jetzt standardmäßig unterstützt. Der Standardwert für das Attribut ist `none`, sodass keine Großschreibung erfolgt ([Firefox Bug 1692007](https://bugzil.la/1692007)).
- Das globale Attribut [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate) wird jetzt unterstützt ([Firefox Bug 1418449](https://bugzil.la/1418449)).

### CSS

- Die CSS-Farb-Funktionen `color()`, `lab()`, `lch()`, `oklab()` und `oklch()` werden jetzt unterstützt.
  Diese Funktionen sind standardmäßig deaktiviert und können durch Setzen der Einstellung `layout.css.more_color_4.enabled` auf true aktiviert werden.
  Weitere Informationen finden Sie in der [CSS-Farbwert](/de/docs/Web/CSS/color_value) Dokumentation ([Firefox Bug 1352757](https://bugzil.la/1352757) und [Firefox Bug 1128204](https://bugzil.la/1128204)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Die Werte `context-stroke` und `context-fill` werden jetzt innerhalb von `<marker>`-Elementen unterstützt.
  Weitere Informationen zur Verwendung dieser Werte mit `fill` und `stroke` Eigenschaften finden Sie in der [`<marker>`](/de/docs/Web/SVG/Reference/Element/marker) Dokumentation ([Firefox Bug 752638](https://bugzil.la/752638)).

### HTTP

- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) wird bei Cross-Origin-Redirects entfernt.
  Weitere Einzelheiten finden Sie unter [Firefox Bug 1802086](https://bugzil.la/1802086).

### APIs

- Das [Origin-private Dateisystem (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) wird jetzt bei der Verwendung der [Filesystem API](/de/docs/Web/API/File_System_API) unterstützt.
  Die Daten in diesem Dateisystem sind herkunftsbezogen: Berechtigungshinweise sind nicht erforderlich, um auf Dateien zuzugreifen, und das Löschen von Daten für die Seite/den Ursprung löscht den Speicher.
  Auf das OPFS wird mit der Methode [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) zugegriffen, indem `navigator.storage.getDirectory()` in einem Worker oder im Haupt-Thread aufgerufen wird.
  Weitere Einzelheiten finden Sie unter [Firefox Bug 1785123](https://bugzil.la/1785123).
- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) wird aus [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Anforderungen entfernt, die Cross-Origin umgeleitet werden (`fetch()`-Header können von Entwicklern unter Verwendung des [`option.headers`](/de/docs/Web/API/Window/fetch#headers) Arguments hinzugefügt werden).
  Weitere Einzelheiten finden Sie unter [Firefox Bug 1802086](https://bugzil.la/1802086).
- Der Wert `none` des Parameters `options.imageOrientation`, der an [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) übergeben wird, wurde in `from-image` umbenannt.
  Dies dient einer besseren Übereinstimmung mit der Bedeutung der gleichwertigen CSS-Eigenschaft [`image-orientation`](/de/docs/Web/CSS/image-orientation). ([Firefox Bug 1809740](https://bugzil.la/1809740)).

#### DOM

- Der [`FormData`](/de/docs/Web/API/FormData) Konstruktor akzeptiert jetzt einen zweiten optionalen `submitter` Parameter, um einen Submit-Button anzugeben. Wenn der Button einen Namen hat oder ein Bild-Button ist, wird er zum Formulardatensatz beitragen. Dies ermöglicht es, ein [`FormData`](/de/docs/Web/API/FormData) Objekt mit dem gleichen Datensatz zu erstellen, wie er durch eine normale Formularübermittlung, die durch den Button ausgelöst wird, übermittelt würde. Weitere Informationen finden Sie unter [Firefox Bug 1812696](https://bugzil.la/1812696).

#### Medien, WebRTC und Web Audio

- [`RTCInboundRtpStreamStats.trackIdentifier`](/de/docs/Web/API/RTCInboundRtpStreamStats#trackidentifier) wird jetzt unterstützt.
  Dies ermöglicht es Entwicklern, `inbound-rtp` Statistiken mit einem bestimmten Track zu verknüpfen, wenn [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) verwendet wird.
  (Weitere Informationen finden Sie unter [Firefox Bug 1804676](https://bugzil.la/1804676).)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Verhaltensweisen für die Behandlung von Prüfungen auf veraltete Elemente wurden auf Basis der kürzlich aktualisierten WebDriver-klassischen Spezifikation geändert. Weitere Einzelheiten finden Sie unter [Firefox Bug 1808894](https://bugzil.la/1808894).

#### Marionette

- Es wurde ein Problem behoben, bei dem die Rückgabe eines ShadowRoot von `WebDriver:ExecuteScript` einen `cyclic object value` Fehler verursacht. Weitere Einzelheiten finden Sie unter [Firefox Bug 1764594](https://bugzil.la/1764594).

## Änderungen für Add-on-Entwickler

- `matchDiacritics` wurde zur {{WebExtAPIRef("Find.find")}} API hinzugefügt. Diese Option ermöglicht es, Suchvorgänge zwischen akzentuierten Buchstaben und deren Grundbuchstaben zu unterscheiden. Zum Beispiel findet man bei gesetztem `true` für "résumé" keine Übereinstimmung mit "resume" [Firefox Bug 1680606](https://bugzil.la/1680606).
- {{WebExtAPIRef("search.query")}} wurde hinzugefügt, um API-Kompatibilität mit auf Chromium basierenden Browsern zu bieten [Firefox Bug 1804357](https://bugzil.la/1804357).
- Die Eigenschaft `disposition` wurde zu {{WebExtAPIRef("search.search")}} hinzugefügt, wodurch Ergebnisse in einem neuen Tab oder Fenster angezeigt werden können [Firefox Bug 1811274](https://bugzil.la/1811274).

## Ältere Versionen

{{Firefox_for_developers}}
