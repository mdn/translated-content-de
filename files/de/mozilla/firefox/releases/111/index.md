---
title: Versionshinweise zu Firefox 111 für Entwickler
short-title: Firefox 111
slug: Mozilla/Firefox/Releases/111
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 111, die Entwickler betreffen. Firefox 111 wurde am 14. März 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) globale Attribut wird jetzt standardmäßig unterstützt. Der Standardwert für das Attribut ist `none`, sodass keine Großschreibung erfolgt ([Firefox-Bug 1692007](https://bugzil.la/1692007)).
- Das [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate) globale Attribut wird jetzt unterstützt ([Firefox-Bug 1418449](https://bugzil.la/1418449)).

### CSS

- CSS-Farbfunktionen `color()`, `lab()`, `lch()`, `oklab()` und `oklch()` werden jetzt unterstützt.
  Diese Funktionen sind standardmäßig deaktiviert und können durch Setzen der Präferenz `layout.css.more_color_4.enabled` auf true aktiviert werden.
  Weitere Informationen finden Sie in der Dokumentation zum [CSS-Farbwert](/de/docs/Web/CSS/color_value) ([Firefox-Bug 1352757](https://bugzil.la/1352757) und [Firefox-Bug 1128204](https://bugzil.la/1128204)).

### JavaScript

Keine bedeutenden Änderungen.

### SVG

- Die Werte `context-stroke` und `context-fill` werden jetzt innerhalb von `<marker>` Elementen unterstützt.
  Weitere Informationen zur Verwendung dieser Werte mit `fill` und `stroke` Eigenschaften finden Sie in der Dokumentation zum [`<marker>`](/de/docs/Web/SVG/Reference/Element/marker) ([Firefox-Bug 752638](https://bugzil.la/752638)).

### HTTP

- Der HTTP [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) Header wird bei Cross-Origin-Weiterleitungen entfernt.
  Siehe [Firefox-Bug 1802086](https://bugzil.la/1802086) für weitere Details.

### APIs

- Das [Origin-eigene Dateisystem (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) wird jetzt bei Verwendung der [File System API](/de/docs/Web/API/File_System_API) unterstützt.
  Die Daten in diesem Dateisystem sind ursprungsspezifisch: Für den Zugriff auf Dateien sind keine Berechtigungsaufforderungen erforderlich, und das Löschen von Daten für die Seite/den Ursprung löscht den Speicher.
  Auf das OPFS wird mit der Methode [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) zugegriffen, indem `navigator.storage.getDirectory()` in einem Worker oder dem Hauptthread aufgerufen wird.
  Weitere Details finden Sie im [Firefox-Bug 1785123](https://bugzil.la/1785123).
- Der HTTP [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) Header wird aus [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Anfragen entfernt, die Cross-Origin umgeleitet werden (`fetch()` Header können von Entwicklern unter Verwendung des [`option.headers`](/de/docs/Web/API/RequestInit#headers) Arguments hinzugefügt werden).
  Weitere Details finden Sie im [Firefox-Bug 1802086](https://bugzil.la/1802086).
- Der Wert `none` des `options.imageOrientation` Parameters, der an [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) übergeben wird, wurde in `from-image` umbenannt.
  Dies soll besser mit der Bedeutung der entsprechenden CSS [`image-orientation`](/de/docs/Web/CSS/Reference/Properties/image-orientation) Eigenschaft übereinstimmen ([Firefox-Bug 1809740](https://bugzil.la/1809740)).

#### DOM

- Der [`FormData`](/de/docs/Web/API/FormData) Konstruktor akzeptiert jetzt einen zweiten optionalen `submitter` Parameter, um eine Absendetaste anzugeben. Wenn der Button einen Namen hat oder ein Bildknopf ist, trägt er zum Datensatz des Formulars bei. Dies macht es möglich, ein [`FormData`](/de/docs/Web/API/FormData) Objekt mit demselben Datensatz wie eine herkömmliche Formularübermittlung, die durch den Button ausgelöst wird, zu erstellen. Siehe [Firefox-Bug 1812696](https://bugzil.la/1812696) für weitere Details.

#### Medien, WebRTC und Web Audio

- [`RTCInboundRtpStreamStats.trackIdentifier`](/de/docs/Web/API/RTCInboundRtpStreamStats/trackIdentifier) wird jetzt unterstützt.
  Dies ermöglicht es Entwicklern, `inbound-rtp` Statistiken mit einem bestimmten Track zu verknüpfen, wenn [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) verwendet wird.
  (Weitere Informationen finden Sie im [Firefox-Bug 1804676](https://bugzil.la/1804676).)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Verhaltensweisen für den Umgang mit abgelaufenen Elementprüfungen wurden basierend auf der kürzlich aktualisierten klassischen WebDriver-Spezifikation geändert. Siehe [Firefox-Bug 1808894](https://bugzil.la/1808894) für weitere Details.

#### Marionette

- Ein Problem wurde behoben, bei dem das Zurückgeben eines `ShadowRoot` von `WebDriver:ExecuteScript` einen `cyclic object value` Fehler verursachte. Siehe [Firefox-Bug 1764594](https://bugzil.la/1764594) für weitere Details.

## Änderungen für Add-on-Entwickler

- `matchDiacritics` wurde zur {{WebExtAPIRef("Find.find")}} API hinzugefügt. Diese Option ermöglicht es, bei der Suche zwischen Akzentbuchstaben und ihren Basisbuchstaben zu unterscheiden. Wenn beispielsweise auf `true` gesetzt, findet die Suche nach "résumé" kein Übereinstimmung für "resume" [Firefox-Bug 1680606](https://bugzil.la/1680606).
- {{WebExtAPIRef("search.query")}} wurde hinzugefügt und bietet API-Kompatibilität mit Chromium-basierten Browsern [Firefox-Bug 1804357](https://bugzil.la/1804357).
- Die `disposition` Eigenschaft wurde zu {{WebExtAPIRef("search.search")}} hinzugefügt, wodurch Ergebnisse in einem neuen Tab oder Fenster angezeigt werden können [Firefox-Bug 1811274](https://bugzil.la/1811274).
