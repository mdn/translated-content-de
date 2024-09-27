---
title: Firefox 111 für Entwickler
slug: Mozilla/Firefox/Releases/111
l10n:
  sourceCommit: c0e43030605b6f12bc4d550c0d5b8bf8a633eff3
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 111, die Entwickler betreffen. Firefox 111 wurde am 14. März 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)-Globale-Attribut wird nun standardmäßig unterstützt. Der Standardwert für das Attribut ist `none`, sodass keine Großschreibung erfolgt ([Firefox Bug 1692007](https://bugzil.la/1692007)).
- Das [`translate`](/de/docs/Web/HTML/Global_attributes/translate)-Globale-Attribut wird nun unterstützt ([Firefox Bug 1418449](https://bugzil.la/1418449)).

### CSS

- CSS-Farbfunktionen wie `color()`, `lab()`, `lch()`, `oklab()` und `oklch()` werden nun unterstützt.
  Diese Funktionen sind standardmäßig deaktiviert und können aktiviert werden, indem die Präferenz `layout.css.more_color_4.enabled` auf true gesetzt wird.
  Weitere Informationen finden Sie in der [CSS color value](/de/docs/Web/CSS/color_value)-Dokumentation ([Firefox Bug 1352757](https://bugzil.la/1352757) und [Firefox Bug 1128204](https://bugzil.la/1128204)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Die Werte `context-stroke` und `context-fill` werden nun innerhalb von `<marker>`-Elementen unterstützt.
  Weitere Informationen zur Verwendung dieser Werte mit den `fill`- und `stroke`-Eigenschaften finden Sie in der [`<marker>`](/de/docs/Web/SVG/Element/marker)-Dokumentation ([Firefox Bug 752638](https://bugzil.la/752638)).

### HTTP

- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Headers/Authorization) wird bei Cross-Origin-Umleitungen entfernt.
  Weitere Details finden Sie im [Firefox Bug 1802086](https://bugzil.la/1802086).

### APIs

- Das [Origin Private File System (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) wird nun bei der Nutzung der [File System API](/de/docs/Web/API/File_System_API) unterstützt.
  Die Daten in diesem Dateisystem sind ursprungsspezifisch: Es sind keine Berechtigungsanfragen erforderlich, um auf Dateien zuzugreifen, und das Löschen von Daten für die Seite/den Ursprung löscht den Speicher.
  Auf das OPFS wird mit der Methode [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) zugegriffen, indem `navigator.storage.getDirectory()` in einem Worker oder dem Haupt-Thread aufgerufen wird.
  Weitere Details finden Sie im [Firefox Bug 1785123](https://bugzil.la/1785123).
- Der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Headers/Authorization) wird aus [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen entfernt, die Cross-Origin umgeleitet werden (`fetch()`-Header können von Entwicklern mithilfe des [`option.headers`](/de/docs/Web/API/Window/fetch#headers)-Arguments hinzugefügt werden).
  Weitere Details finden Sie im [Firefox Bug 1802086](https://bugzil.la/1802086).
- Der Wert `none` des Parameters `options.imageOrientation`, der an [`createImageBitmap()`](/de/docs/Web/API/createImageBitmap) übergeben wird, wurde in [`from-image`](/de/docs/Web/API/createImageBitmap#from-image) umbenannt.
  Dies soll die Bedeutung der entsprechenden CSS-Eigenschaft [`image-orientation`](/de/docs/Web/CSS/image-orientation) besser widerspiegeln. ([Firefox Bug 1809740](https://bugzil.la/1809740)).

#### DOM

- Der [`FormData`](/de/docs/Web/API/FormData)-Konstruktor akzeptiert nun einen zweiten optionalen `submitter`-Parameter, um einen Absendeschalter anzugeben. Wenn der Button einen Namen hat oder ein Bild-Button ist, trägt er zum Datensatz des Formulars bei. Dies ermöglicht es, ein [`FormData`](/de/docs/Web/API/FormData)-Objekt mit dem gleichen Datensatz zu erstellen, wie es durch eine normale Formularübermittlung ausgelöst durch den Button geschehen würde. Weitere Details finden Sie im [Firefox Bug 1812696](https://bugzil.la/1812696).

#### Medien, WebRTC und Web Audio

- [`RTCInboundRtpStreamStats.trackIdentifier`](/de/docs/Web/API/RTCInboundRtpStreamStats#trackidentifier) wird nun unterstützt.
  Dies ermöglicht es Entwicklern, `inbound-rtp`-Statistiken mit einer bestimmten Spur zu verknüpfen, wenn [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) verwendet wird.
  (Weitere Informationen finden Sie im [Firefox Bug 1804676](https://bugzil.la/1804676).)

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Es wurden Änderungen im Verhalten der Prüfung auf veraltete Elemente basierend auf der kürzlich aktualisierten WebDriver-Classic-Spezifikation vorgenommen. Weitere Details finden Sie im [Firefox Bug 1808894](https://bugzil.la/1808894).

#### Marionette

- Ein Problem wurde behoben, bei dem die Rückgabe einer `ShadowRoot` von `WebDriver:ExecuteScript` einen `cyclic object value`-Fehler verursachte. Weitere Details finden Sie im [Firefox Bug 1764594](https://bugzil.la/1764594).

## Änderungen für Add-on-Entwickler

- `matchDiacritics` wurde zur {{WebExtAPIRef("Find.find")}}-API hinzugefügt. Diese Option ermöglicht es, bei der Suche zwischen Buchstaben mit Akzent und deren Grundbuchstaben zu unterscheiden. Wenn zum Beispiel `true` gesetzt ist, findet die Suche nach "résumé" keine Übereinstimmung mit "resume" [Firefox Bug 1680606](https://bugzil.la/1680606).
- {{WebExtAPIRef("search.query")}} wurde hinzugefügt und bietet Kompatibilität der Such-API mit Chromium-basierten Browsern [Firefox Bug 1804357](https://bugzil.la/1804357).
- Die Eigenschaft `disposition` wurde zu {{WebExtAPIRef("search.search")}} hinzugefügt, damit Ergebnisse in einem neuen Tab oder Fenster angezeigt werden können [Firefox Bug 1811274](https://bugzil.la/1811274).

## Ältere Versionen

{{Firefox_for_developers}}
