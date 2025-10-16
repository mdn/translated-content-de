---
title: Firefox 111 Versionshinweise für Entwickler
short-title: Firefox 111
slug: Mozilla/Firefox/Releases/111
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 111, die Entwickler betreffen. Firefox 111 wurde am 14. März 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) wird jetzt standardmäßig unterstützt. Der Standardwert für das Attribut ist `none`, sodass keine Großschreibung erfolgt ([Firefox-Bug 1692007](https://bugzil.la/1692007)).
- Das globale Attribut [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate) wird jetzt unterstützt ([Firefox-Bug 1418449](https://bugzil.la/1418449)).

### CSS

- Die CSS-Farb-Funktionen `color()`, `lab()`, `lch()`, `oklab()` und `oklch()` werden jetzt unterstützt.
  Diese Funktionen sind standardmäßig deaktiviert und können aktiviert werden, indem die Einstellung `layout.css.more_color_4.enabled` auf true gesetzt wird.
  Weitere Informationen finden Sie in der [CSS-Farbwert](/de/docs/Web/CSS/color_value) Dokumentation ([Firefox-Bug 1352757](https://bugzil.la/1352757) und [Firefox-Bug 1128204](https://bugzil.la/1128204)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Die Werte `context-stroke` und `context-fill` werden nun innerhalb von `<marker>`-Elementen unterstützt.
  Weitere Informationen zur Verwendung dieser Werte mit den Eigenschaften `fill` und `stroke` finden Sie in der [`<marker>`](/de/docs/Web/SVG/Reference/Element/marker) Dokumentation ([Firefox-Bug 752638](https://bugzil.la/752638)).

### HTTP

- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) wird aus Cross-Origin-Redirects entfernt.
  Siehe [Firefox-Bug 1802086](https://bugzil.la/1802086) für weitere Details.

### APIs

- Das [origin private file system (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) wird jetzt unterstützt, wenn die [File System API](/de/docs/Web/API/File_System_API) verwendet wird.
  Die Daten in diesem Dateisystem sind herkunftsspezifisch: Es sind keine Berechtigungen erforderlich, um auf Dateien zuzugreifen, und beim Löschen von Daten für die Seite/Quelle wird der Speicher gelöscht.
  Auf das OPFS wird mit der Methode [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) zugegriffen, indem `navigator.storage.getDirectory()` in einem Worker oder dem Hauptthread aufgerufen wird.
  Siehe [Firefox-Bug 1785123](https://bugzil.la/1785123) für weitere Details.
- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) wird bei [`fetch()`](/de/docs/Web/API/Window/fetch)- und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen, die cross-origin umgeleitet werden, entfernt (für `fetch()`-Header können Entwickler das Argument [`option.headers`](/de/docs/Web/API/RequestInit#headers) verwenden).
  Siehe [Firefox-Bug 1802086](https://bugzil.la/1802086) für weitere Details.
- Der Wert `none` des `options.imageOrientation`-Parameters, der an [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) übergeben wird, wurde in `from-image` umbenannt.
  Dies soll besser der Bedeutung der gleichwertigen CSS-Eigenschaft [`image-orientation`](/de/docs/Web/CSS/image-orientation) entsprechen. ([Firefox-Bug 1809740](https://bugzil.la/1809740))

#### DOM

- Der [`FormData`](/de/docs/Web/API/FormData)-Konstruktor akzeptiert jetzt einen zweiten optionalen `submitter` Parameter, um einen Submit-Button anzugeben. Wenn der Button einen Namen hat oder ein Bild-Button ist, wird er zum Formulardatensatz beitragen. Dies macht es möglich, ein [`FormData`](/de/docs/Web/API/FormData)-Objekt mit dem gleichen Datensatz zu erstellen, wie es eine standardmäßige Formularübermittlung durch den Button erzeugen würde. Siehe [Firefox-Bug 1812696](https://bugzil.la/1812696) für weitere Details.

#### Media, WebRTC und Web Audio

- [`RTCInboundRtpStreamStats.trackIdentifier`](/de/docs/Web/API/RTCInboundRtpStreamStats/trackIdentifier) wird jetzt unterstützt.
  Dies ermöglicht es Entwicklern, `inbound-rtp`-Statistiken mit einer bestimmten Spur zu verknüpfen, wenn [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) verwendet wird.
  (Für weitere Informationen siehe [Firefox-Bug 1804676](https://bugzil.la/1804676).)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Es wurden Verhaltensänderungen bei der Behandlung von Überprüfungen veralteter Elemente basierend auf kürzlich aktualisierten WebDriver-Klassikspezifikationen vorgenommen. Siehe [Firefox-Bug 1808894](https://bugzil.la/1808894) für weitere Details.

#### Marionette

- Ein Problem wurde behoben, bei dem das Zurückgeben eines ShadowRoot von `WebDriver:ExecuteScript` einen `cyclic object value` Fehler verursacht. Siehe [Firefox-Bug 1764594](https://bugzil.la/1764594) für weitere Details.

## Änderungen für Add-on-Entwickler

- `matchDiacritics` wurde zur {{WebExtAPIRef("Find.find")}} API hinzugefügt. Diese Option ermöglicht es, Suchen zu unterscheiden zwischen Buchstaben mit Akzenten und ihren Basenbuchstaben. Zum Beispiel wird bei Einstellung auf `true` beim Suchen nach "résumé" kein Treffer für "resume" gefunden [Firefox-Bug 1680606](https://bugzil.la/1680606).
- {{WebExtAPIRef("search.query")}} wurde hinzugefügt, um Such-API-Kompatibilität mit auf Chromium basierenden Browsern bereitzustellen [Firefox-Bug 1804357](https://bugzil.la/1804357).
- Die `disposition` Eigenschaft wurde {{WebExtAPIRef("search.search")}} hinzugefügt und ermöglicht es, Ergebnisse in einem neuen Tab oder Fenster anzuzeigen [Firefox-Bug 1811274](https://bugzil.la/1811274).
