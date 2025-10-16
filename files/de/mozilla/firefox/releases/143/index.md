---
title: Firefox 143 Versionshinweise für Entwickler
short-title: Firefox 143
slug: Mozilla/Firefox/Releases/143
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 143, die Entwickler betreffen.
Firefox 143 wurde am [16. September 2025](https://whattrainisitnow.com/release/?version=143) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [<code>type="color"</code>](/de/docs/Web/HTML/Reference/Elements/input/color) {{HTMLElement("input")}}-Element akzeptiert nun nicht nur HEX-Farben wie `#ff6699`, sondern auch alle CSS-[\<color\>]-Werte, zum Beispiel `oklab(50% 0.1 0.1 / 0.5)`. ([Firefox Bug 1965029](https://bugzil.la/1965029)).

### CSS

- Das {{cssxref("::details-content")}}-Pseudo-Element ist nun standardmäßig aktiviert. Es ermöglicht Ihnen, den Inhalt des {{htmlElement("details")}}-Elements zu stylen.
  ([Firefox Bug 1941406](https://bugzil.la/1941406)).
- Das {{cssxref("::marker")}}-Pseudo-Element kann jetzt verwendet werden, um ein Listenelement zu stylen, das mit dem {{cssxref("::before")}} oder dem {{cssxref("::after")}}-Pseudo-Element erstellt wurde. Dies wird durch die [`::before::marker`](/de/docs/Web/CSS/::before#beforemarker_nested_pseudo-elements) und [`::after::marker`](/de/docs/Web/CSS/::after#aftermarker_nested_pseudo-elements)-Selektoren erreicht.
  ([Firefox Bug 1980215](https://bugzil.la/1980215)).
- Mulitpass-Gittergrößenanpassung ist jetzt standardmäßig aktiviert und folgt dem Algorithmus, wie er in der CSS-Grid-Spezifikation beschrieben ist. Im Multipass-Algorithmus werden zuerst die Spalten und dann die Zeilen dimensioniert; Prozentangaben werden gelöst, nachdem die Containergröße bekannt ist. Mit dieser Standardunterstützung werden [Prozentsatz-basierte](/de/docs/Web/CSS/grid-template-rows#percentage) Zeilenspuren und Gitterelemente mit Seitenverhältnissen jetzt in mehr Fällen korrekt dimensioniert.
  ([Firefox Bug 1957244](https://bugzil.la/1957244)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### Entfernungen

- Die veraltete [`CompositionEvent.locale`](/de/docs/Web/API/CompositionEvent/locale)-Eigenschaft wird nicht mehr unterstützt.
  ([Firefox Bug 1700969](https://bugzil.la/1700969)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das Ereignis `browsingContext.contextCreated` wurde aktualisiert, um für alle offenen Kontexte ausgelöst zu werden, wenn auf das Ereignis abonniert wird ([Firefox Bug 1754273](https://bugzil.la/1754273)).
- Neue Befehle für das `network`-Modul implementiert, um das Aufzeichnen von Netzwerkdaten zu ermöglichen:
  - `network.addDataCollector` fügt einen Netzwerk-Datensammler zu `contexts`, `userContexts` oder global hinzu. Der Sammler wird Netzwerkdaten aufzeichnen, die den bereitgestellten `dataTypes` entsprechen. Derzeit wird nur der "response"-Datentyp unterstützt. Eine `maxEncodedDataSize` muss ebenfalls bereitgestellt werden, Netzwerkdaten, die diese Größe überschreiten, werden nicht aufgezeichnet ([Firefox Bug 1971778](https://bugzil.la/1971778)).
  - `network.removeDataCollector` entfernt einen zuvor hinzugefügten Netzwerk-Datensammler ([Firefox Bug 1971781](https://bugzil.la/1971781)).
  - `network.getData` ruft die gesammelten Daten für eine bereitgestellte `request`-ID, `dataType` und optional `collector`-ID ab. Bei Angabe einer `collector`-ID können Clients auch das `disown`-Flag übergeben, um die Netzwerkdaten vom Sammler freizugeben. Beachten Sie, dass Daten gelöscht werden, wenn sie nicht mehr von einem Sammler verwaltet werden ([Firefox Bug 1971780](https://bugzil.la/1971780)).
  - `network.disownData` gibt die Daten für eine gegebene `request`-ID und `dataType` von der bereitgestellten `collector`-ID frei ([Firefox Bug 1971779](https://bugzil.la/1971779)).
- Ein Fehler wurde behoben, bei dem `emulation.setLocaleOverride` die Überschreibung in neu erstellten Cross-Origin-Iframes nicht angewendet hat ([Firefox Bug 1978533](https://bugzil.la/1978533)).
- Ein Fehler wurde behoben, bei dem mehrere Befehle wie `session.subscribe` fehlschlagen würden, wenn irgendein Tab entladen war ([Firefox Bug 1949037](https://bugzil.la/1949037)).
- Das `browsingContext.navigationCommitted`-Ereignis wurde behoben, sodass die `url`-Eigenschaft jetzt Anmeldeinformationen für die Basisauthentifizierung enthält. ([Firefox Bug 1980137](https://bugzil.la/1980137)).

## Änderungen für Add-on-Entwickler

- Hinzufügung von {{WebExtAPIRef("storage.StorageArea.getKeys()")}}. Diese Methode gibt ein Array zurück, das alle Schlüssel in einem Speicherbereich enthält. Es steht für alle Speicherbereiche zur Verfügung, also {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, und {{WebExtAPIRef("storage.managed", "managed")}}. ([Firefox Bug 1910669](https://bugzil.la/1910669))
- Die Benutzerauswahl eines Erweiterungsvorschlags in der Adressleiste (Omnibox), eine Aktion, die {{WebExtAPIRef("omnibox.onInputEntered")}} auslöst, wird jetzt als [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) betrachtet. Zusätzlich zur Aktivierung der APIs, die eine Benutzeraktion erfordern, gewährt die Auswahl eines Erweiterungsvorschlags in der Adressleiste auch die Berechtigung `"activeTab"`.

## Experimentelle Web-Features

- **`text-autospace`**: `layout.css.text-autospace.enabled`

  Die **`text-autospace`**-CSS-Eigenschaft ermöglicht es Ihnen, den Raum zu spezifizieren, der zwischen chinesischen/japanischen/koreanischen (CJK) und nicht-CJK-Zeichen angewendet wird. Derzeit werden diese Werte nur geparst und haben keinen Effekt auf die Ausgabe. ([Firefox Bug 1869577](https://bugzil.la/1869577)).

- **WebGPU external textures**: `dom.webgpu.external-texture.enable`

  Die [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Schnittstelle und die [`GPUDevice.importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture)-Methode werden unterstützt, um externe Texturen aus Videorahmen oder Elementen zu importieren. ([Firefox Bug 1979100](https://bugzil.la/1979100)).

Diese Funktionen werden in Firefox 143 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features)-Seite.
