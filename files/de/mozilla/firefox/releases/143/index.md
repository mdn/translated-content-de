---
title: Firefox 143 Versionshinweise für Entwickler
short-title: Firefox 143
slug: Mozilla/Firefox/Releases/143
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 143, die Entwickler betreffen. Firefox 143 wurde am [16. September 2025](https://whattrainisitnow.com/release/?version=143) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`type="color"`](/de/docs/Web/HTML/Reference/Elements/input/color) {{HTMLElement("input")}}-Element akzeptiert jetzt nicht nur HEX-Farben wie `#ff6699`, sondern auch alle CSS [`<color>`](/de/docs/Web/CSS/color_value) Werte, zum Beispiel `oklab(50% 0.1 0.1 / 0.5)`. ([Firefox Bug 1965029](https://bugzil.la/1965029)).

### CSS

- Das {{cssxref("::details-content")}} Pseudo-Element ist jetzt standardmäßig aktiviert. Es ermöglicht das Styling des Inhalts des {{htmlElement("details")}}-Elements.
  ([Firefox Bug 1941406](https://bugzil.la/1941406)).
- Das {{cssxref("::marker")}} Pseudo-Element kann jetzt verwendet werden, um ein Listenelement zu stylen, das mit dem {{cssxref("::before")}} oder dem {{cssxref("::after")}} Pseudo-Element erstellt wurde. Dies wird mit den Selektoren [`::before::marker`](/de/docs/Web/CSS/Reference/Selectors/::before#beforemarker_nested_pseudo-elements) und [`::after::marker`](/de/docs/Web/CSS/Reference/Selectors/::after#aftermarker_nested_pseudo-elements) erreicht.
  ([Firefox Bug 1980215](https://bugzil.la/1980215)).
- Multi-Pass Grid-Track-Sizing ist jetzt standardmäßig aktiviert und folgt dem Algorithmus, der in der CSS Grid Spezifikation beschrieben ist. Im Multi-Pass-Algorithmus werden zuerst Spalten, dann Zeilen dimensioniert; Prozentwerte werden aufgelöst, nachdem die Containergröße bekannt ist. Mit dieser standardmäßigen Unterstützung werden [prozentsatzbasierte](/de/docs/Web/CSS/Reference/Properties/grid-template-rows#percentage) Zeilenspuren und Grid-Items mit Seitenverhältnissen jetzt in mehr Fällen korrekt dimensioniert.
  ([Firefox Bug 1957244](https://bugzil.la/1957244)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### Entfernte Funktionen

- Die veraltete [`CompositionEvent.locale`](/de/docs/Web/API/CompositionEvent/locale) Eigenschaft wird nicht mehr unterstützt.
  ([Firefox Bug 1700969](https://bugzil.la/1700969)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das `browsingContext.contextCreated` Ereignis wurde aktualisiert, um für alle offenen Kontexte ausgelöst zu werden, wenn Sie das Ereignis abonnieren ([Firefox Bug 1754273](https://bugzil.la/1754273)).
- Neue Befehle für das `network` Modul implementiert, um Netzwerkdaten aufzuzeichnen:
  - `network.addDataCollector` fügt einen Netzwerkdaten-Kollektor zu `contexts`, `userContexts` oder global hinzu. Der Kollektor zeichnet Netzwerkdaten entsprechend den bereitgestellten `dataTypes` auf. Derzeit wird nur der "response" Datentyp unterstützt. Eine `maxEncodedDataSize` muss ebenfalls angegeben werden, Netzwerkdaten, die diese Größe überschreiten, werden nicht aufgezeichnet ([Firefox Bug 1971778](https://bugzil.la/1971778)).
  - `network.removeDataCollector` entfernt einen zuvor hinzugefügten Netzwerkdaten-Kollektor ([Firefox Bug 1971781](https://bugzil.la/1971781)).
  - `network.getData` ruft die für eine bereitgestellte `request` id, `dataType` und optional `collector` id gesammelten Daten ab. Wenn Sie eine `collector` id angeben, können Clients auch das `disown` Flag übergeben, um die Netzwerkdaten vom Kollektor freizugeben. Beachten Sie, dass Daten gelöscht werden, wenn sie von keinem Kollektor mehr behalten werden ([Firefox Bug 1971780](https://bugzil.la/1971780)).
  - `network.disownData` gibt die Daten für eine gegebene `request` id und `dataType` von der bereitgestellten `collector` id frei ([Firefox Bug 1971779](https://bugzil.la/1971779)).
- Ein Fehler wurde behoben, bei dem `emulation.setLocaleOverride` die Überschreibung bei neu erstellten Cross-Origin-Iframes nicht anwandte ([Firefox Bug 1978533](https://bugzil.la/1978533)).
- Ein Fehler wurde behoben, bei dem mehrere Befehle wie `session.subscribe` fehlschlugen, wenn ein Tab entladen wurde ([Firefox Bug 1949037](https://bugzil.la/1949037)).
- Das `browsingContext.navigationCommitted` Ereignis wurde so korrigiert, dass die `url` Eigenschaft jetzt Basis-Auth-Daten enthält. ([Firefox Bug 1980137](https://bugzil.la/1980137)).

## Änderungen für Add-on-Entwickler

- Hinzufügen von {{WebExtAPIRef("storage.StorageArea.getKeys()")}}. Diese Methode gibt ein Array zurück, das alle Schlüssel in einem Speicherbereich enthält. Sie ist für alle Speicherbereiche verfügbar, das heißt {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, und {{WebExtAPIRef("storage.managed", "managed")}}. ([Firefox Bug 1910669](https://bugzil.la/1910669))
- Die Auswahl eines Erweiterungsvorschlags in der Adressleiste (Omnibox) durch den Benutzer, eine Aktion, die {{WebExtAPIRef("omnibox.onInputEntered")}} auslöst, wird jetzt als [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) betrachtet. Zusätzlich zur Aktivierung der APIs, die eine Benutzeraktion erfordern, gewährt die Auswahl eines Erweiterungsvorschlags in der Adressleiste auch die `"activeTab"` Erlaubnis.

## Experimentelle Web-Features

- **`text-autospace`**: `layout.css.text-autospace.enabled`

  Die **`text-autospace`** CSS-Eigenschaft erlaubt es Ihnen, den zwischen chinesischen/japanischen/koreanischen (CJK) und nicht-CJK-Zeichen angewendeten Abstand anzugeben. Derzeit werden diese Werte nur geparst und haben keine Auswirkung auf die Ausgabe. ([Firefox Bug 1869577](https://bugzil.la/1869577)).

- **WebGPU externe Texturen**: `dom.webgpu.external-texture.enable`

  Das [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture) Interface und die Methode [`GPUDevice.importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture) werden unterstützt, um externe Texturen aus Videoframes oder Elementen zu importieren. ([Firefox Bug 1979100](https://bugzil.la/1979100)).

Diese Features sind in Firefox 143 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Features finden Sie auf der [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) Seite.
