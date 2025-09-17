---
title: Firefox 143 für Entwickler
short-title: Firefox 143 (Stable)
slug: Mozilla/Firefox/Releases/143
l10n:
  sourceCommit: 4a54946791694e14bf3742f3f327bbea44c698c8
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 143, die Entwickler betreffen.
Firefox 143 wurde am [16. September 2025](https://whattrainisitnow.com/release/?version=143) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`type="color"`](/de/docs/Web/HTML/Reference/Elements/input/color) {{HTMLElement("input")}}-Element akzeptiert jetzt nicht nur HEX-Farben wie `#ff6699`, sondern auch alle CSS [`<color>`](/de/docs/Web/CSS/color_value)-Werte, zum Beispiel `oklab(50% 0.1 0.1 / 0.5)`. ([Firefox Bug 1965029](https://bugzil.la/1965029)).

### CSS

- Das {{cssxref("::details-content")}} Pseudo-Element ist nun standardmäßig aktiviert. Es ermöglicht Ihnen, den Inhalt des {{htmlElement("details")}}-Elements zu gestalten.
  ([Firefox Bug 1941406](https://bugzil.la/1941406)).
- Das {{cssxref("::marker")}} Pseudo-Element kann nun verwendet werden, um ein Listenelement zu gestalten, das mit dem {{cssxref("::before")}} oder dem {{cssxref("::after")}} Pseudo-Element erstellt wurde. Dies wird mit den Selektoren [`::before::marker`](/de/docs/Web/CSS/::before#beforemarker_nested_pseudo-elements) und [`::after::marker`](/de/docs/Web/CSS/::after#aftermarker_nested_pseudo-elements) erreicht.
  ([Firefox Bug 1980215](https://bugzil.la/1980215)).
- Die Mehrfach-Durchlauf-Rasterschienenanpassung ist nun standardmäßig aktiviert und folgt dem Algorithmus, der in der CSS Grid-Spezifikation beschrieben ist. Im Mehrfach-Durchlauf-Algorithmus werden zuerst die Spalten und dann die Zeilen dimensioniert; Prozentwerte werden aufgelöst, nachdem die Größe des Containers bekannt ist. Mit dieser Standardunterstützung werden [prozentbasierte](/de/docs/Web/CSS/grid-template-rows#percentage) Zeilenschienen und Rasterelemente mit Seitenverhältnissen nun in mehr Fällen korrekt dimensioniert.
  ([Firefox Bug 1957244](https://bugzil.la/1957244)).

### JavaScript

Keine nennenswerten Änderungen.

### APIs

#### Entfernungen

- Die veraltete Eigenschaft [`CompositionEvent.locale`](/de/docs/Web/API/CompositionEvent/locale) wird nicht mehr unterstützt.
  ([Firefox Bug 1700969](https://bugzil.la/1700969)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Aktualisiert das `browsingContext.contextCreated` Ereignis, damit es für alle offenen Kontexte ausgelöst wird, wenn das Ereignis abonniert wird ([Firefox Bug 1754273](https://bugzil.la/1754273)).
- Neue Befehle für das `network`-Modul zur Aktivierung der Aufzeichnung von Netzdaten implementiert:
  - `network.addDataCollector` fügt einen Netzdaten-Sammler zu `contexts`, `userContexts` oder global hinzu. Der Sammler wird Netzdaten entsprechend den bereitgestellten `dataTypes` aufzeichnen. Derzeit wird nur der "response"-Datentyp unterstützt. Eine `maxEncodedDataSize` muss ebenfalls angegeben werden, Netzdaten, die diese Größe überschreiten, werden nicht aufgezeichnet ([Firefox Bug 1971778](https://bugzil.la/1971778)).
  - `network.removeDataCollector` entfernt einen zuvor hinzugefügten Netzdaten-Sammler ([Firefox Bug 1971781](https://bugzil.la/1971781)).
  - `network.getData` ruft die gesammelten Daten für eine angegebene `request`-ID, `dataType` und optional `collector`-ID ab. Bei Angabe einer `collector`-ID können Clients auch das `disown`-Flag übergeben, um die Netzdaten vom Sammler freizugeben. Beachten Sie, dass Daten gelöscht werden, wenn sie von keinem Sammler mehr beansprucht werden ([Firefox Bug 1971780](https://bugzil.la/1971780)).
  - `network.disownData` gibt die Daten für eine angegebene `request`-ID und `dataType` von der bereitgestellten `collector`-ID frei ([Firefox Bug 1971779](https://bugzil.la/1971779)).
- Ein Fehler wurde behoben, bei dem `emulation.setLocaleOverride` die Überschreibung nicht auf neu erstellte Cross-Origin-Iframes angewandt hat ([Firefox Bug 1978533](https://bugzil.la/1978533)).
- Ein Fehler wurde behoben, bei dem mehrere Befehle wie `session.subscribe` fehlschlugen, wenn ein Tab entladen war ([Firefox Bug 1949037](https://bugzil.la/1949037)).
- Das `browsingContext.navigationCommitted` Ereignis wurde so korrigiert, dass die `url`-Eigenschaft jetzt grundlegende Authentifizierungsdaten enthält. ([Firefox Bug 1980137](https://bugzil.la/1980137)).

## Änderungen für Add-on-Entwickler

- Hinzufügung von {{WebExtAPIRef("storage.StorageArea.getKeys()")}}. Diese Methode gibt ein Array zurück, das alle Schlüssel in einem Speicherbereich enthält. Es ist für alle Speicherbereiche verfügbar, das heißt {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, und {{WebExtAPIRef("storage.managed", "managed")}}. ([Firefox Bug 1910669](https://bugzil.la/1910669))
- Die Auswahl eines Erweiterungsvorschlags in der Adressleiste (Omnibox) durch den Benutzer, eine Aktion, die {{WebExtAPIRef("omnibox.onInputEntered")}} auslöst, wird jetzt als [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) betrachtet. Neben der Aktivierung der APIs, die eine Benutzeraktion erfordern, gewährt die Auswahl eines Erweiterungsvorschlags in der Adressleiste auch die Berechtigung `"activeTab"`.

## Experimentelle Webfunktionen

- **`text-autospace`**: `layout.css.text-autospace.enabled`

  Die **`text-autospace`** CSS-Eigenschaft ermöglicht es Ihnen, den Abstand festzulegen, der zwischen chinesischen/japanischen/koreanischen (CJK) und nicht-CJK-Zeichen angewendet wird. Derzeit werden diese Werte nur geparst und haben keinen Einfluss auf die Ausgabe. ([Firefox Bug 1869577](https://bugzil.la/1869577)).

- **WebGPU external textures**: `dom.webgpu.external-texture.enable`

  Die [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture) Schnittstelle und die Methode [`GPUDevice.importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture) werden unterstützt, um externe Texturen aus Videoframes oder Elementen zu importieren. ([Firefox Bug 1979100](https://bugzil.la/1979100)).

Diese Funktionen werden in Firefox 143 bereitgestellt, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie diese auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
