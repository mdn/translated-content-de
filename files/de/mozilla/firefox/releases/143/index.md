---
title: "Firefox 143: Versionshinweise für Entwickler"
short-title: Firefox 143
slug: Mozilla/Firefox/Releases/143
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Dieser Artikel informiert über Änderungen in Firefox 143, die für Entwickler relevant sind.
Firefox 143 wurde am [16. September 2025](https://whattrainisitnow.com/release/?version=143) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("input")}}-Element mit [`type="color"`](/de/docs/Web/HTML/Reference/Elements/input/color) akzeptiert jetzt nicht nur HEX-Farben wie `#ff6699`, sondern auch alle CSS-[`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Werte, beispielsweise `oklab(50% 0.1 0.1 / 0.5)`. ([Firefox-Bug 1965029](https://bugzil.la/1965029)).

### CSS

- Das Pseudoelement {{cssxref("::details-content")}} ist jetzt standardmäßig aktiviert. Damit können Sie den Inhalt des {{htmlElement("details")}}-Elements gestalten.
  ([Firefox-Bug 1941406](https://bugzil.la/1941406)).
- Das Pseudoelement {{cssxref("::marker")}} kann jetzt verwendet werden, um einen Listeneintrag zu gestalten, der mit dem Pseudoelement {{cssxref("::before")}} oder {{cssxref("::after")}} erstellt wurde. Dazu dienen die Selektoren [`::before::marker`](/de/docs/Web/CSS/Reference/Selectors/::before#beforemarker_nested_pseudo-elements) und [`::after::marker`](/de/docs/Web/CSS/Reference/Selectors/::after#aftermarker_nested_pseudo-elements).
  ([Firefox-Bug 1980215](https://bugzil.la/1980215)).
- Die mehrstufige Größenberechnung für Grid-Tracks ist jetzt standardmäßig aktiviert und folgt dem Algorithmus der CSS-Grid-Spezifikation. Bei diesem Algorithmus werden zuerst die Spalten und dann die Zeilen dimensioniert; Prozentwerte werden aufgelöst, sobald die Größe des Containers bekannt ist. Dadurch werden [prozentbasierte](/de/docs/Web/CSS/Reference/Properties/grid-template-rows#percentage) Zeilen-Tracks und Grid-Elemente mit Seitenverhältnis nun in mehr Fällen korrekt dimensioniert.
  ([Firefox-Bug 1957244](https://bugzil.la/1957244)).

### JavaScript

Keine nennenswerten Änderungen.

### APIs

#### Entfallene Funktionen

- Die veraltete Eigenschaft [`CompositionEvent.locale`](/de/docs/Web/API/CompositionEvent/locale) wird nicht mehr unterstützt.
  ([Firefox-Bug 1700969](https://bugzil.la/1700969)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das Ereignis `browsingContext.contextCreated` wurde aktualisiert: Beim Abonnieren des Ereignisses wird es jetzt für alle geöffneten Kontexte ausgelöst ([Firefox-Bug 1754273](https://bugzil.la/1754273)).
- Für das Modul `network` wurden neue Befehle implementiert, mit denen sich Netzwerkdaten aufzeichnen lassen:
  - `network.addDataCollector` fügt einen Netzwerkdaten-Collector für `contexts`, `userContexts` oder global hinzu. Der Collector zeichnet Netzwerkdaten entsprechend den angegebenen `dataTypes` auf. Derzeit wird nur der Datentyp „response“ unterstützt. Außerdem muss `maxEncodedDataSize` angegeben werden; Netzwerkdaten, die diese Größe überschreiten, werden nicht aufgezeichnet ([Firefox-Bug 1971778](https://bugzil.la/1971778)).
  - `network.removeDataCollector` entfernt einen zuvor hinzugefügten Netzwerkdaten-Collector ([Firefox-Bug 1971781](https://bugzil.la/1971781)).
  - `network.getData` ruft die gesammelten Daten für eine angegebene `request`-ID, einen `dataType` und optional eine `collector`-ID ab. Wird eine `collector`-ID angegeben, können Clients zusätzlich das Flag `disown` übergeben, um die Netzwerkdaten aus dem Collector freizugeben. Die Daten werden gelöscht, sobald kein Collector mehr Zugriff darauf hat ([Firefox-Bug 1971780](https://bugzil.la/1971780)).
  - `network.disownData` gibt die Daten für eine bestimmte `request`-ID und einen `dataType` aus dem Collector mit der angegebenen `collector`-ID frei ([Firefox-Bug 1971779](https://bugzil.la/1971779)).
- Ein Fehler wurde behoben, durch den `emulation.setLocaleOverride` die Überschreibung nicht auf neu erstellte Cross-Origin-Iframes anwendete ([Firefox-Bug 1978533](https://bugzil.la/1978533)).
- Ein Fehler wurde behoben, durch den mehrere Befehle wie `session.subscribe` fehlschlugen, wenn ein Tab entladen war ([Firefox-Bug 1949037](https://bugzil.la/1949037)).
- Das Ereignis `browsingContext.navigationCommitted` wurde korrigiert, sodass die Eigenschaft `url` jetzt Anmeldedaten für die Basic-Authentifizierung enthält. ([Firefox-Bug 1980137](https://bugzil.la/1980137)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("storage.StorageArea.getKeys()")}} wurde hinzugefügt. Diese Methode gibt ein Array mit allen Schlüsseln eines Speicherbereichs zurück. Sie ist für alle Speicherbereiche verfügbar: {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}} und {{WebExtAPIRef("storage.managed", "managed")}}. ([Firefox-Bug 1910669](https://bugzil.la/1910669))
- Wenn ein Nutzer in der Adressleiste (Omnibox) einen Erweiterungsvorschlag auswählt, wird {{WebExtAPIRef("omnibox.onInputEntered")}} ausgelöst. Diese Auswahl gilt jetzt als [Nutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions). Dadurch werden APIs verfügbar, die eine Nutzeraktion voraussetzen. Außerdem erhält die Erweiterung die [Berechtigung `activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission).

## Experimentelle Webfunktionen

- **`text-autospace`**: `layout.css.text-autospace.enabled`

  Mit der CSS-Eigenschaft **`text-autospace`** können Sie den Abstand zwischen chinesischen, japanischen oder koreanischen (CJK) Zeichen und Nicht-CJK-Zeichen festlegen. Derzeit werden diese Werte lediglich geparst und wirken sich nicht auf die Ausgabe aus. ([Firefox-Bug 1869577](https://bugzil.la/1869577)).

- **Externe WebGPU-Texturen**: `dom.webgpu.external-texture.enable`

  Die Schnittstelle [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture) und die Methode [`GPUDevice.importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture) werden unterstützt, um externe Texturen aus Videoframes oder Elementen zu importieren. ([Firefox-Bug 1979100](https://bugzil.la/1979100)).

Diese Funktionen sind in Firefox 143 enthalten, aber standardmäßig deaktiviert.
Wenn Sie sie ausprobieren möchten, suchen Sie auf der Seite `about:config` nach der jeweiligen Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
