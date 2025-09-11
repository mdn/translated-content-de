---
title: Firefox 143 für Entwickler
short-title: Firefox 143 (Beta)
slug: Mozilla/Firefox/Releases/143
l10n:
  sourceCommit: d7dbc6e313598190c59538ef4630b97c55cdb9f0
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 143, die Entwickler betreffen.
Firefox 143 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [16. September 2025](https://whattrainisitnow.com/release/?version=143) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

- Das [`type="color"`](/de/docs/Web/HTML/Reference/Elements/input/color) {{HTMLElement("input")}}-Element akzeptiert jetzt nicht nur HEX-Farben wie `#ff6699`, sondern auch alle CSS [`<color>`](/de/docs/Web/CSS/color_value)-Werte, zum Beispiel `oklab(50% 0.1 0.1 / 0.5)`. ([Firefox-Bug 1965029](https://bugzil.la/1965029)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

### CSS

- Das {{cssxref("::details-content")}}-Pseudo-Element ist nun standardmäßig aktiviert. Es ermöglicht das Styling des Inhalts des {{htmlElement("details")}}-Elements.
  ([Firefox-Bug 1941406](https://bugzil.la/1941406)).
- Mehrpass-Rastergrößenanpassung ist nun standardmäßig aktiviert und folgt dem Algorithmus in der CSS Grid-Spezifikation. Im Mehrpass-Algorithmus werden zuerst die Spalten und dann die Zeilen dimensioniert; Prozentwerte werden aufgelöst, nachdem die Größe des Containers bekannt ist. Mit dieser Standardunterstützung werden [prozentbasierte](/de/docs/Web/CSS/grid-template-rows#percentage) Zeilentracks und Rasterelemente mit Seitenverhältnissen nun in mehr Fällen korrekt dimensioniert.
  ([Firefox-Bug 1957244](https://bugzil.la/1957244)).

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

#### Entfernungen

- Die veraltete [`CompositionEvent.locale`](/de/docs/Web/API/CompositionEvent/locale)-Eigenschaft wird nicht mehr unterstützt.
  ([Firefox-Bug 1700969](https://bugzil.la/1700969)).

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Aktualisiert das `browsingContext.contextCreated`-Ereignis, um für alle offenen Kontexte beim Abonnieren des Ereignisses ausgelöst zu werden ([Firefox-Bug 1754273](https://bugzil.la/1754273)).
- Implementierte neue Befehle für das `network`-Modul, um die Aufzeichnung von Netzwerkdaten zu ermöglichen:
  - `network.addDataCollector` fügt einen Netzwerkdatensammler zu `contexts`, `userContexts` oder global hinzu. Der Sammler wird Netzwerkdaten aufzeichnen, die den bereitgestellten `dataTypes` entsprechen. Derzeit wird nur der Datentyp "response" unterstützt. Ein `maxEncodedDataSize` muss ebenfalls angegeben werden, Netzwerkdaten, die diese Größe überschreiten, werden nicht aufgezeichnet ([Firefox-Bug 1971778](https://bugzil.la/1971778)).
  - `network.removeDataCollector` entfernt einen zuvor hinzugefügten Netzwerkdatensammler ([Firefox-Bug 1971781](https://bugzil.la/1971781)).
  - `network.getData` ruft die gesammelten Daten für eine bereitgestellte `request`-ID, `dataType` und optional `collector`-ID ab. Bei Angabe einer `collector`-ID können Clients auch das `disown`-Flag übergeben, um die Netzwerkdaten vom Sammler freizugeben. Beachten Sie, dass Daten gelöscht werden, wenn sie nicht mehr von einem Sammler gehalten werden ([Firefox-Bug 1971780](https://bugzil.la/1971780)).
  - `network.disownData` gibt die Daten für eine gegebene `request`-ID und `dataType` von der bereitgestellten `collector`-ID frei ([Firefox-Bug 1971779](https://bugzil.la/1971779)).
- Behebte einen Fehler, bei dem `emulation.setLocaleOverride` die Überschreibung nicht auf neu erstellte Cross-Origin-Iframes anwendete ([Firefox-Bug 1978533](https://bugzil.la/1978533)).
- Behebte einen Fehler, bei dem mehrere Befehle wie `session.subscribe` fehlschlugen, wenn ein Tab entladen wurde ([Firefox-Bug 1949037](https://bugzil.la/1949037)).
- Korrigierte das `browsingContext.navigationCommitted`-Ereignis, sodass die `url`-Eigenschaft nun Basic-Auth-Credentials enthält. ([Firefox-Bug 1980137](https://bugzil.la/1980137)).

## Änderungen für Add-on-Entwickler

- Hinzufügung von {{WebExtAPIRef("storage.StorageArea.getKeys()")}}. Diese Methode gibt ein Array zurück, das alle Schlüssel in einem Speicherbereich enthält. Es ist für alle Speicherbereiche verfügbar, das heißt {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, und {{WebExtAPIRef("storage.managed", "managed")}}. ([Firefox-Bug 1910669](https://bugzil.la/1910669))
- Die Auswahl eines Erweiterungsvorschlags in der Adressleiste (Omnibox) durch den Benutzer, eine Aktion, die {{WebExtAPIRef("omnibox.onInputEntered")}} auslöst, wird jetzt als [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) angesehen. Zusätzlich zur Aktivierung der APIs, die eine Benutzeraktion erfordern, gewährt die Auswahl eines Erweiterungsvorschlags in der Adressleiste auch die Berechtigung `"activeTab"`.

<!-- ### Entfernungen -->

<!-- ### Andere -->

## Experimentelle Webfunktionen

- **`text-autospace`**: `layout.css.text-autospace.enabled`

  Die **`text-autospace`** CSS-Eigenschaft erlaubt es, den Abstand zwischen chinesischen/japanischen/koreanischen (CJK) und nicht-CJK-Zeichen festzulegen. Derzeit werden diese Werte nur analysiert und haben keine Auswirkungen auf die Ausgabe. ([Firefox-Bug 1869577](https://bugzil.la/1869577)).

Diese Funktionen sind in Firefox 143 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).
