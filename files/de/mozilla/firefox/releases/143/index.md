---
title: Firefox 143 Versionshinweise für Entwickler
short-title: Firefox 143
slug: Mozilla/Firefox/Releases/143
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 143, die Entwickler betreffen.
Firefox 143 wurde am [16. September 2025](https://whattrainisitnow.com/release/?version=143) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`type="color"`](/de/docs/Web/HTML/Reference/Elements/input/color) {{HTMLElement("input")}}-Element akzeptiert jetzt nicht nur HEX-Farben wie `#ff6699`, sondern auch alle CSS-[`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Werte, zum Beispiel `oklab(50% 0.1 0.1 / 0.5)`. ([Firefox-Bug 1965029](https://bugzil.la/1965029)).

### CSS

- Das {{cssxref("::details-content")}}-Pseudoelement ist jetzt standardmäßig aktiviert. Es ermöglicht die Gestaltung des Inhalts des {{htmlElement("details")}}-Elements.
  ([Firefox-Bug 1941406](https://bugzil.la/1941406)).
- Das {{cssxref("::marker")}}-Pseudoelement kann jetzt verwendet werden, um ein Listenelement zu gestalten, das mithilfe des {{cssxref("::before")}}- oder {{cssxref("::after")}}-Pseudoelements erstellt wurde. Dies wird durch die Selektoren [`::before::marker`](/de/docs/Web/CSS/Reference/Selectors/::before#beforemarker_nested_pseudo-elements) und [`::after::marker`](/de/docs/Web/CSS/Reference/Selectors/::after#aftermarker_nested_pseudo-elements) erreicht.
  ([Firefox-Bug 1980215](https://bugzil.la/1980215)).
- Das Multi-Pass-Gitterspurensizing ist jetzt standardmäßig aktiviert und folgt dem im CSS Grid-Spezifikation beschriebenen Algorithmus. Im Multi-Pass-Algorithmus werden zuerst die Spalten und dann die Zeilen bemessen; Prozentwerte werden aufgelöst, nachdem die Containergröße bekannt ist. Mit dieser Standardunterstützung werden [prozentbasierte](/de/docs/Web/CSS/Reference/Properties/grid-template-rows#percentage) Zeilenabstands und -gitterelemente mit Seitenverhältnissen jetzt in mehr Fällen korrekt bemessen.
  ([Firefox-Bug 1957244](https://bugzil.la/1957244)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### Entfernungen

- Die veraltete [`CompositionEvent.locale`](/de/docs/Web/API/CompositionEvent/locale)-Eigenschaft wird nicht mehr unterstützt.
  ([Firefox-Bug 1700969](https://bugzil.la/1700969)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das `browsingContext.contextCreated`-Ereignis wurde aktualisiert, sodass es für alle offenen Kontexte bei der Anmeldung zum Ereignis ausgelöst wird ([Firefox-Bug 1754273](https://bugzil.la/1754273)).
- Neue Befehle für das `network`-Modul implementiert, um Netzwerkdaten aufzuzeichnen:
  - `network.addDataCollector` fügt einen Netzwerkdatensammler zu `contexts`, `userContexts` oder global hinzu. Der Sammler zeichnet Netzwerkdaten entsprechend den bereitgestellten `dataTypes` auf. Derzeit wird nur der Datentyp "response" unterstützt. Es muss auch eine `maxEncodedDataSize` angegeben werden, Netzwerkdaten, die diese Größe überschreiten, werden nicht aufgezeichnet ([Firefox-Bug 1971778](https://bugzil.la/1971778)).
  - `network.removeDataCollector` entfernt einen zuvor hinzugefügten Netzwerkdatensammler ([Firefox-Bug 1971781](https://bugzil.la/1971781)).
  - `network.getData` ruft die gesammelten Daten für eine bereitgestellte `request`-ID, `dataType` und optional `collector`-ID ab. Bei Angabe einer `collector`-ID können Clients auch das `disown`-Flag übergeben, um die Netzdaten vom Sammler freizugeben. Beachten Sie, dass Daten gelöscht werden, wenn sie von keinem Sammler mehr im Besitz sind ([Firefox-Bug 1971780](https://bugzil.la/1971780)).
  - `network.disownData` gibt die Daten für eine angegebene `request`-ID und `dataType` von der bereitgestellten `collector`-ID frei ([Firefox-Bug 1971779](https://bugzil.la/1971779)).
- Ein Fehler wurde behoben, bei dem `emulation.setLocaleOverride` die Überschreibung nicht auf neu erstellte Cross-Origin-Iframes angewendet hat ([Firefox-Bug 1978533](https://bugzil.la/1978533)).
- Ein Fehler wurde behoben, bei dem mehrere Befehle wie `session.subscribe` fehlschlugen, wenn ein Tab entladen war ([Firefox-Bug 1949037](https://bugzil.la/1949037)).
- Das `browsingContext.navigationCommitted`-Ereignis wurde korrigiert, sodass die `url`-Eigenschaft jetzt Basic-Auth-Zugangsdaten enthält. ([Firefox-Bug 1980137](https://bugzil.la/1980137)).

## Änderungen für Add-on-Entwickler

- Hinzufügung von {{WebExtAPIRef("storage.StorageArea.getKeys()")}}. Diese Methode gibt ein Array zurück, das alle Schlüssel in einem Speicherbereich enthält. Es ist für alle Speicherbereiche verfügbar, also {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}} und {{WebExtAPIRef("storage.managed", "managed")}}. ([Firefox-Bug 1910669](https://bugzil.la/1910669))
- Die Auswahl eines Erweiterungsvorschlags in der Adressleiste (Omnibox) durch den Benutzer, eine Aktion, die {{WebExtAPIRef("omnibox.onInputEntered")}} auslöst, wird nun als [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) betrachtet. Zusätzlich zur Aktivierung der APIs, die eine Benutzeraktion erfordern, gewährt die Auswahl eines Erweiterungsvorschlags in der Adressleiste auch die Berechtigung `"activeTab"`.

## Experimentelle Webfunktionen

- **`text-autospace`**: `layout.css.text-autospace.enabled`

  Die **`text-autospace`**-CSS-Eigenschaft ermöglicht es, den Zwischenraum zwischen chinesischen/japanischen/koreanischen (CJK) und Nicht-CJK-Zeichen zu spezifizieren. Derzeit werden diese Werte nur geparst und haben keinen Effekt auf die Ausgabe. ([Firefox-Bug 1869577](https://bugzil.la/1869577)).

- **WebGPU external textures**: `dom.webgpu.external-texture.enable`

  Die [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Schnittstelle und die Methode [`GPUDevice.importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture) werden unterstützt, um externe Texturen aus Videobildern oder -elementen zu importieren. ([Firefox-Bug 1979100](https://bugzil.la/1979100)).

Diese Funktionen werden in Firefox 143 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie diese auf `true`.
Sie können weitere solche Funktionen auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) finden.
