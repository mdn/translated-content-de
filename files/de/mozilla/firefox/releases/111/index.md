---
title: Firefox 111 für Entwickler
slug: Mozilla/Firefox/Releases/111
l10n:
  sourceCommit: 58d79e9c2206e0a604cd4d7f6fba5181262af420
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 111, die Entwickler betreffen. Firefox 111 wurde am 14. März 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize) wird nun standardmäßig unterstützt. Der Standardwert für das Attribut ist `none`, sodass keine Großschreibung erfolgt ([Firefox-Bug 1692007](https://bugzil.la/1692007)).
- Das globale Attribut [`translate`](/de/docs/Web/HTML/Global_attributes/translate) wird nun unterstützt ([Firefox-Bug 1418449](https://bugzil.la/1418449)).

### CSS

- CSS-Farb-Funktionen `color()`, `lab()`, `lch()`, `oklab()` und `oklch()` werden jetzt unterstützt.
  Diese Funktionen sind standardmäßig deaktiviert und können aktiviert werden, indem die Einstellung `layout.css.more_color_4.enabled` auf true gesetzt wird.
  Weitere Informationen finden Sie in der Dokumentation zu [CSS-Farbwerten](/de/docs/Web/CSS/color_value) ([Firefox-Bug 1352757](https://bugzil.la/1352757) und [Firefox-Bug 1128204](https://bugzil.la/1128204)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Die Werte `context-stroke` und `context-fill` werden jetzt innerhalb von `<marker>`-Elementen unterstützt.
  Weitere Informationen zur Verwendung dieser Werte mit den Eigenschaften `fill` und `stroke` finden Sie in der [`<marker>`](/de/docs/Web/SVG/Element/marker) Dokumentation ([Firefox-Bug 752638](https://bugzil.la/752638)).

### HTTP

- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Headers/Authorization) wird bei Redirects über Ursprung hinweg entfernt.
  Siehe [Firefox-Bug 1802086](https://bugzil.la/1802086) für weitere Details.

### APIs

- Das [Origin private file system (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) wird jetzt bei der Verwendung der [File System API](/de/docs/Web/API/File_System_API) unterstützt.
  Die Daten in diesem Dateisystem sind ursprungsspezifisch: Für den Dateizugriff sind keine Berechtigungsabfragen erforderlich, und das Löschen von Daten für die Seite/den Ursprung entfernt den Speicher.
  Auf das OPFS wird mit der Methode [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) zugegriffen, indem `navigator.storage.getDirectory()` in einem Worker oder im Hauptthread aufgerufen wird.
  Siehe [Firefox-Bug 1785123](https://bugzil.la/1785123) für weitere Details.
- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Headers/Authorization) wird von [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen entfernt, die über Ursprung hinweg umgeleitet werden (`fetch()`-Header können von Entwicklern mithilfe des [`option.headers`](/de/docs/Web/API/Window/fetch#headers) Arguments hinzugefügt werden).
  Siehe [Firefox-Bug 1802086](https://bugzil.la/1802086) für weitere Details.
- Der Wert `none` des Parameters `options.imageOrientation`, der an [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) übergeben wird, wurde in `from-image` umbenannt.
  Dies soll besser der Bedeutung der gleichwertigen CSS-Eigenschaft [`image-orientation`](/de/docs/Web/CSS/image-orientation) entsprechen. ([Firefox-Bug 1809740](https://bugzil.la/1809740)).

#### DOM

- Der Konstruktor [`FormData`](/de/docs/Web/API/FormData) akzeptiert jetzt einen zweiten optionalen `submitter`-Parameter, um eine Absende-Schaltfläche zu spezifizieren. Wenn die Schaltfläche einen Namen hat oder eine Bild-Schaltfläche ist, wird sie zum Formular-Datensatz beitragen. Dies ermöglicht es, ein [`FormData`](/de/docs/Web/API/FormData)-Objekt mit dem gleichen Datensatz wie ein Standard-Formularversand zu erstellen, der durch die Schaltfläche ausgelöst wird. Siehe [Firefox-Bug 1812696](https://bugzil.la/1812696) für weitere Details.

#### Medien, WebRTC und Web Audio

- [`RTCInboundRtpStreamStats.trackIdentifier`](/de/docs/Web/API/RTCInboundRtpStreamStats#trackidentifier) wird nun unterstützt.
  Dies ermöglicht es Entwicklern, `inbound-rtp`-Statistiken mit einer bestimmten Spur zu verknüpfen, wenn [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) verwendet wird.
  (Weitere Informationen finden Sie unter [Firefox-Bug 1804676](https://bugzil.la/1804676).)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Verhaltensweisen für das Überprüfen von veralteten Elementen wurden basierend auf den kürzlich aktualisierten WebDriver-klassischen Spezifikationen geändert. Siehe [Firefox-Bug 1808894](https://bugzil.la/1808894) für weitere Details.

#### Marionette

- Ein Problem wurde behoben, bei dem das Zurückgeben eines `ShadowRoot` von `WebDriver:ExecuteScript` einen `cyclic object value`-Fehler verursachte. Siehe [Firefox-Bug 1764594](https://bugzil.la/1764594) für weitere Details.

## Änderungen für Add-on-Entwickler

- `matchDiacritics` wurde zur {{WebExtAPIRef("Find.find")}} API hinzugefügt. Diese Option ermöglicht es, bei der Suche zwischen Buchstaben mit Akzent und ihren Grundbuchstaben zu unterscheiden. Zum Beispiel wird bei der Einstellung `true` die Suche nach "résumé" kein Treffer für "resume" liefern [Firefox-Bug 1680606](https://bugzil.la/1680606).
- {{WebExtAPIRef("search.query")}} wurde hinzugefügt und bietet Such-API-Kompatibilität mit auf Chromium basierenden Browsern [Firefox-Bug 1804357](https://bugzil.la/1804357).
- Die `disposition`-Eigenschaft wurde zur {{WebExtAPIRef("search.search")}} hinzugefügt, wodurch Ergebnisse in einem neuen Tab oder Fenster angezeigt werden können [Firefox-Bug 1811274](https://bugzil.la/1811274).

## Ältere Versionen

{{Firefox_for_developers}}
