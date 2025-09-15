---
title: Firefox 143 für Entwickler
short-title: Firefox 143 (Beta)
slug: Mozilla/Firefox/Releases/143
l10n:
  sourceCommit: e0b7decf92065fa9d10fb6dac152933416d6f6e5
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 143, die Entwickler betreffen.
Firefox 143 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [16. September 2025](https://whattrainisitnow.com/release/?version=143) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

## Änderungen für Webentwickler

- Das [`type="color"`](/de/docs/Web/HTML/Reference/Elements/input/color) {{HTMLElement("input")}}-Element akzeptiert jetzt nicht nur HEX-Farben wie `#ff6699`, sondern auch alle CSS [`<color>`](/de/docs/Web/CSS/color_value)-Werte, zum Beispiel `oklab(50% 0.1 0.1 / 0.5)`. ([Firefox Bug 1965029](https://bugzil.la/1965029)).

### CSS

- Das {{cssxref("::details-content")}}-Pseudoelement ist jetzt standardmäßig aktiviert. Es ermöglicht Ihnen, den Inhalt des {{htmlElement("details")}}-Elements zu stylen.
  ([Firefox Bug 1941406](https://bugzil.la/1941406)).
- Das {{cssxref("::marker")}}-Pseudoelement kann jetzt verwendet werden, um ein Listenelement zu stylen, das mit dem {{cssxref("::before")}}- oder dem {{cssxref("::after")}}-Pseudoelement erstellt wurde. Dies wird mit den Selektoren [`::before::marker`](/de/docs/Web/CSS/::before#beforemarker_nested_pseudo-elements) und [`::after::marker`](/de/docs/Web/CSS/::after#aftermarker_nested_pseudo-elements) erreicht.
  ([Firefox Bug 1980215](https://bugzil.la/1980215)).
- Die mehrfach durchlaufende Rastergrößenanpassung ist jetzt standardmäßig aktiviert und folgt dem Algorithmus, der in der CSS-Grid-Spezifikation beschrieben ist. Im mehrfach durchlaufenden Algorithmus werden zuerst die Spalten und dann die Zeilen dimensioniert; Prozentwerte werden aufgelöst, nachdem die Größe des Containers bekannt ist. Mit dieser standardmäßigen Unterstützung werden jetzt [prozentsatzbasierte](/de/docs/Web/CSS/grid-template-rows#percentage) Zeilenraster und Rasterelemente mit Seitenverhältnissen in mehr Fällen korrekt dimensioniert.
  ([Firefox Bug 1957244](https://bugzil.la/1957244)).

### APIs

#### Entfernungen

- Die veraltete [`CompositionEvent.locale`](/de/docs/Web/API/CompositionEvent/locale)-Eigenschaft wird nicht mehr unterstützt.
  ([Firefox Bug 1700969](https://bugzil.la/1700969)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das `browsingContext.contextCreated`-Ereignis wurde aktualisiert, um für alle offenen Kontexte beim Abonnieren des Ereignisses ausgelöst zu werden ([Firefox Bug 1754273](https://bugzil.la/1754273)).
- Neue Befehle für das `network`-Modul implementiert, um die Aufzeichnung von Netzwerkdaten zu ermöglichen:
  - `network.addDataCollector` fügt einen Netzwerkdaten-Sammler zu `contexts`, `userContexts` oder global hinzu. Der Sammler zeichnet Netzwerkdaten entsprechend den bereitgestellten `dataTypes` auf. Derzeit wird nur der Datentyp "response" unterstützt. Eine `maxEncodedDataSize` muss ebenfalls angegeben werden, Netzwerkdaten, die diese Größe überschreiten, werden nicht aufgezeichnet ([Firefox Bug 1971778](https://bugzil.la/1971778)).
  - `network.removeDataCollector` entfernt einen zuvor hinzugefügten Netzwerkdaten-Sammler ([Firefox Bug 1971781](https://bugzil.la/1971781)).
  - `network.getData` ruft die für eine bereitgestellte `request`-ID, `dataType` und optional `collector`-ID gesammelten Daten ab. Bei der Angabe einer `collector`-ID können Clients auch das `disown`-Flag setzen, um die Netzwerkdaten vom Sammler freizugeben. Beachten Sie, dass Daten gelöscht werden, wenn sie nicht mehr im Besitz eines Sammlers sind ([Firefox Bug 1971780](https://bugzil.la/1971780)).
  - `network.disownData` gibt die Daten für eine bestimmte `request`-ID und `dataType` von der bereitgestellten `collector`-ID frei ([Firefox Bug 1971779](https://bugzil.la/1971779)).
- Ein Fehler behoben, bei dem `emulation.setLocaleOverride` den Überschreiben nicht auf neu erstellte, cross-origin Iframes angewendet hat ([Firefox Bug 1978533](https://bugzil.la/1978533)).
- Ein Fehler behoben, bei dem mehrere Befehle wie `session.subscribe` fehlschlugen, wenn ein Tab entladen war ([Firefox Bug 1949037](https://bugzil.la/1949037)).
- Das `browsingContext.navigationCommitted`-Ereignis wurde behoben, so dass die `url`-Eigenschaft jetzt Basic-Auth-Credentials enthält. ([Firefox Bug 1980137](https://bugzil.la/1980137)).

## Änderungen für Add-on-Entwickler

- Hinzufügung von {{WebExtAPIRef("storage.StorageArea.getKeys()")}}. Diese Methode gibt ein Array zurück, das alle Schlüssel in einem Speicherbereich enthält. Sie ist für alle Speicherbereiche verfügbar, das sind {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, und {{WebExtAPIRef("storage.managed", "managed")}}. ([Firefox Bug 1910669](https://bugzil.la/1910669))
- Die Auswahl eines Erweiterungsvorschlags in der Adressleiste (Omnibox) durch Benutzer, eine Aktion, die {{WebExtAPIRef("omnibox.onInputEntered")}} auslöst, wird jetzt als [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) betrachtet. Neben der Aktivierung der APIs, die eine Benutzeraktion erfordern, gewährt die Auswahl eines Erweiterungsvorschlags in der Adressleiste auch die `"activeTab"`-Berechtigung.

## Experimentelle Web-Funktionen

- **`text-autospace`**: `layout.css.text-autospace.enabled`

  Die CSS-Eigenschaft **`text-autospace`** ermöglicht es Ihnen, den Abstand zwischen chinesischen/japanischen/koreanischen (CJK) und nicht-CJK-Zeichen festzulegen. Derzeit werden diese Werte nur geparst und es gibt keine Auswirkungen auf die Ausgabe. ([Firefox Bug 1869577](https://bugzil.la/1869577)).

- **WebGPU externe Texturen**: `dom.webgpu.external-texture.enable`

  Die [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Schnittstelle und die [`GPUDevice.importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture)-Methode werden unterstützt, um externe Texturen aus Videoframes oder -elementen zu importieren. ([Firefox Bug 1979100](https://bugzil.la/1979100)).

Diese Funktionen werden in Firefox 143 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
