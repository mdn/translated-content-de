---
title: Firefox 111 für Entwickler
short-title: Firefox 111
slug: Mozilla/Firefox/Releases/111
l10n:
  sourceCommit: 74e7902b0875b6378d77df6d2d925a2d09d19f5d
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 111, die Entwickler betreffen. Firefox 111 wurde am 14. März 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) wird jetzt standardmäßig unterstützt. Der Standardwert für das Attribut ist `none`, sodass keine Großschreibung erfolgt ([Firefox Bug 1692007](https://bugzil.la/1692007)).
- Das globale Attribut [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate) wird nun unterstützt ([Firefox Bug 1418449](https://bugzil.la/1418449)).

### CSS

- CSS-Farbfunktionen `color()`, `lab()`, `lch()`, `oklab()` und `oklch()` werden jetzt unterstützt.
  Diese Funktionen sind standardmäßig deaktiviert und können aktiviert werden, indem die Einstellung `layout.css.more_color_4.enabled` auf true gesetzt wird.
  Weitere Informationen finden Sie in der Dokumentation zu [CSS-Farbwerten](/de/docs/Web/CSS/color_value) ([Firefox Bug 1352757](https://bugzil.la/1352757) und [Firefox Bug 1128204](https://bugzil.la/1128204)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Die Werte `context-stroke` und `context-fill` werden jetzt innerhalb von `<marker>`-Elementen unterstützt.
  Weitere Informationen zur Verwendung dieser Werte mit den Eigenschaften `fill` und `stroke` finden Sie in der Dokumentation zu [`<marker>`](/de/docs/Web/SVG/Reference/Element/marker) ([Firefox Bug 752638](https://bugzil.la/752638)).

### HTTP

- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) wird bei Redirects über unterschiedliche Ursprünge entfernt.
  Weitere Details finden Sie in [Firefox Bug 1802086](https://bugzil.la/1802086).

### APIs

- Das [origin-spezifische Dateisystem (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) wird jetzt bei Verwendung der [File System API](/de/docs/Web/API/File_System_API) unterstützt.
  Die Daten in diesem Dateisystem sind ursprungsspezifisch: Berechtigungsabfragen sind nicht erforderlich, um auf Dateien zuzugreifen, und das Löschen von Daten für die Seite/den Ursprung löscht den Speicher.
  Auf das OPFS wird mit der Methode [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) zugegriffen, indem `navigator.storage.getDirectory()` in einem Worker oder dem Haupt-Thread aufgerufen wird.
  Weitere Details finden Sie in [Firefox Bug 1785123](https://bugzil.la/1785123).
- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization) wird von [`fetch()`](/de/docs/Web/API/Window/fetch)- und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen entfernt, die umgelagert werden zwischen Ursprüngen (`fetch()`-Header können von Entwicklern mit dem Argument [`option.headers`](/de/docs/Web/API/RequestInit#headers) hinzugefügt werden).
  Weitere Details finden Sie in [Firefox Bug 1802086](https://bugzil.la/1802086).
- Der Wert `none` des Parameters `options.imageOrientation`, der an [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) übergeben wird, wurde in `from-image` umbenannt.
  Dies soll besser die Bedeutung der entsprechenden CSS-Eigenschaft [`image-orientation`](/de/docs/Web/CSS/image-orientation) widerspiegeln. ([Firefox Bug 1809740](https://bugzil.la/1809740)).

#### DOM

- Der Konstruktor [`FormData`](/de/docs/Web/API/FormData) akzeptiert jetzt einen zweiten optionalen Parameter `submitter`, um eine Abschick-Schaltfläche zu spezifizieren. Wenn die Schaltfläche einen Namen hat oder eine Bild-Schaltfläche ist, wird sie zum Formulardatensatz beitragen. Dies macht es möglich, ein [`FormData`](/de/docs/Web/API/FormData)-Objekt mit demselben Datensatz zu erstellen wie bei einer normalen Formularübermittlung, die durch die Schaltfläche ausgelöst wird. Weitere Informationen finden Sie in [Firefox Bug 1812696](https://bugzil.la/1812696).

#### Medien, WebRTC und Web Audio

- [`RTCInboundRtpStreamStats.trackIdentifier`](/de/docs/Web/API/RTCInboundRtpStreamStats/trackIdentifier) wird jetzt unterstützt.
  Dies ermöglicht es Entwicklern, `inbound-rtp`-Statistiken einem bestimmten Track zuzuordnen, wenn [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) verwendet wird.
  (Weitere Informationen finden Sie in [Firefox Bug 1804676](https://bugzil.la/1804676).)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das Verhalten für die Handhabung von Überprüfungen veralteter Elemente wurde gemäß der kürzlich aktualisierten WebDriver-Klassik-Spezifikation geändert. Weitere Informationen finden Sie in [Firefox Bug 1808894](https://bugzil.la/1808894).

#### Marionette

- Es wurde ein Problem behoben, bei dem die Rückgabe eines ShadowRoot aus `WebDriver:ExecuteScript` zu einem `cyclic object value`-Fehler führte. Weitere Informationen finden Sie in [Firefox Bug 1764594](https://bugzil.la/1764594).

## Änderungen für Add-on-Entwickler

- `matchDiacritics` wurde der {{WebExtAPIRef("Find.find")}}-API hinzugefügt. Diese Option ermöglicht es, zwischen akzentuierten Buchstaben und ihren Basisbuchstaben zu unterscheiden. Zum Beispiel findet eine Suche nach "résumé" kein Ergebnis für "resume", wenn auf `true` gesetzt [Firefox Bug 1680606](https://bugzil.la/1680606).
- {{WebExtAPIRef("search.query")}} wurde hinzugefügt, um die Kompatibilität der Such-API mit Chromium-basierten Browsern bereitzustellen [Firefox Bug 1804357](https://bugzil.la/1804357).
- Die Eigenschaft `disposition` wurde zu {{WebExtAPIRef("search.search")}} hinzugefügt, was es ermöglicht, Ergebnisse in einem neuen Tab oder Fenster anzuzeigen [Firefox Bug 1811274](https://bugzil.la/1811274).
