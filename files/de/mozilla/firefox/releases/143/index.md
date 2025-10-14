---
title: Firefox 143 für Entwickler
short-title: Firefox 143
slug: Mozilla/Firefox/Releases/143
l10n:
  sourceCommit: e3e93db9247ff7a0e8c43bf9bab2f5386559be23
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 143, die Entwickler betreffen.
Firefox 143 wurde am [16. September 2025](https://whattrainisitnow.com/release/?version=143) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`type="color"`](/de/docs/Web/HTML/Reference/Elements/input/color) {{HTMLElement("input")}}-Element akzeptiert jetzt nicht nur HEX-Farben wie `#ff6699`, sondern auch alle CSS-[`<color>`](/de/docs/Web/CSS/color_value)-Werte, zum Beispiel `oklab(50% 0.1 0.1 / 0.5)`. ([Firefox Fehler 1965029](https://bugzil.la/1965029)).

### CSS

- Das {{cssxref("::details-content")}} Pseudoelement ist jetzt standardmäßig aktiviert. Es ermöglicht, den Inhalt des {{htmlElement("details")}}-Elements zu stylen.
  ([Firefox Fehler 1941406](https://bugzil.la/1941406)).
- Das {{cssxref("::marker")}} Pseudoelement kann jetzt verwendet werden, um ein Listenelement zu stylen, das mithilfe des {{cssxref("::before")}} oder {{cssxref("::after")}} Pseudoelements erstellt wurde. Dies wird durch die [`::before::marker`](/de/docs/Web/CSS/::before#beforemarker_nested_pseudo-elements) und [`::after::marker`](/de/docs/Web/CSS/::after#aftermarker_nested_pseudo-elements) Selektoren erreicht.
  ([Firefox Fehler 1980215](https://bugzil.la/1980215)).
- Multi-Pass-Raster-Track-Sizing ist jetzt standardmäßig aktiviert und folgt dem Algorithmus, der in der CSS Grid-Spezifikation beschrieben ist. Im Multi-Pass-Algorithmus werden zuerst die Spalten und dann die Zeilen dimensioniert; Prozentwerte werden aufgelöst, nachdem die Containergröße bekannt ist. Mit dieser standardmäßigen Unterstützung werden [prozentbasierte](/de/docs/Web/CSS/grid-template-rows#percentage) Zeilentracks und Rasterelemente mit Seitenverhältnissen nun in mehr Fällen korrekt dimensioniert.
  ([Firefox Fehler 1957244](https://bugzil.la/1957244)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### Entfernungen

- Die veraltete [`CompositionEvent.locale`](/de/docs/Web/API/CompositionEvent/locale)-Eigenschaft wird nicht mehr unterstützt.
  ([Firefox Fehler 1700969](https://bugzil.la/1700969)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Aktualisiert das `browsingContext.contextCreated`-Ereignis, um für alle offenen Kontexte ausgegeben zu werden, wenn das Ereignis abonniert wird ([Firefox Fehler 1754273](https://bugzil.la/1754273)).
- Neue Befehle für das `network`-Modul implementiert, um Netzwerkdaten aufzuzeichnen:
  - `network.addDataCollector` fügt einen Netzwerkdaten-Sammler zu `contexts`, `userContexts` oder global hinzu. Der Sammler wird Netzwerkdaten aufzeichnen, die den bereitgestellten `dataTypes` entsprechen. Derzeit wird nur der Datentyp "response" unterstützt. Eine `maxEncodedDataSize` muss ebenfalls angegeben werden, Netzwerkdaten, die diese Größe überschreiten, werden nicht aufgezeichnet ([Firefox Fehler 1971778](https://bugzil.la/1971778)).
  - `network.removeDataCollector` entfernt einen zuvor hinzugefügten Netzwerkdaten-Sammler ([Firefox Fehler 1971781](https://bugzil.la/1971781)).
  - `network.getData` ruft die gesammelten Daten für eine angegebene `request`-ID, `dataType` und optional `collector`-ID ab. Wenn eine `collector`-ID angegeben wird, können Clients auch das `disown`-Flag übergeben, um die Netzwerkdaten vom Sammler freizugeben. Beachten Sie, dass die Daten gelöscht werden, wenn sie nicht mehr von einem Sammler besessen werden ([Firefox Fehler 1971780](https://bugzil.la/1971780)).
  - `network.disownData` gibt die Daten für eine gegebene `request`-ID und `dataType` von der bereitgestellten `collector`-ID frei ([Firefox Fehler 1971779](https://bugzil.la/1971779)).
- Ein Fehler wurde behoben, bei dem `emulation.setLocaleOverride` das Override für neu erstellte Cross-Origin-Iframes nicht angewendet hat ([Firefox Fehler 1978533](https://bugzil.la/1978533)).
- Ein Fehler wurde behoben, bei dem mehrere Befehle wie `session.subscribe` fehlschlugen, wenn ein Tab entladen wurde ([Firefox Fehler 1949037](https://bugzil.la/1949037)).
- Das `browsingContext.navigationCommitted`-Ereignis wurde so angepasst, dass die `url`-Eigenschaft jetzt grundlegende Authentifizierungsinformationen enthält. ([Firefox Fehler 1980137](https://bugzil.la/1980137)).

## Änderungen für Add-On-Entwickler

- Hinzufügen von {{WebExtAPIRef("storage.StorageArea.getKeys()")}}. Diese Methode gibt ein Array zurück, das alle Schlüssel in einem Speicherbereich enthält. Sie ist für alle Speicherbereiche verfügbar, das heißt {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, und {{WebExtAPIRef("storage.managed", "managed")}}. ([Firefox Fehler 1910669](https://bugzil.la/1910669))
- Die Benutzer-Auswahl eines Erweiterungsvorschlags in der Adressleiste (Omnibox), eine Aktion, die {{WebExtAPIRef("omnibox.onInputEntered")}} auslöst, wird jetzt als [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) betrachtet. Zusätzlich zur Aktivierung der APIs, die eine Benutzeraktion erfordern, gewährt die Auswahl eines Erweiterungsvorschlags in der Adressleiste auch die Berechtigung `"activeTab"`.

## Experimentelle Webfunktionen

- **`text-autospace`**: `layout.css.text-autospace.enabled`

  Die **`text-autospace`** CSS-Eigenschaft ermöglicht es Ihnen, den zwischen chinesischen/japanischen/koreanischen (CJK) und nicht-CJK-Zeichen angewendeten Abstand zu spezifizieren. Derzeit werden diese Werte nur geparst und es gibt keinen Effekt auf die Ausgabe. ([Firefox Fehler 1869577](https://bugzil.la/1869577)).

- **Externe WebGPU-Texturen**: `dom.webgpu.external-texture.enable`

  Die [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Schnittstelle und die [`GPUDevice.importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture)-Methode werden unterstützt, um externe Texturen aus Videoframes oder Elementen zu importieren. ([Firefox Fehler 1979100](https://bugzil.la/1979100)).

Diese Funktionen sind in Firefox 143 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der [Seite über experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
