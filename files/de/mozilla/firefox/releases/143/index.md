---
title: Firefox 143 für Entwickler
short-title: Firefox 143 (Beta)
slug: Mozilla/Firefox/Releases/143
l10n:
  sourceCommit: 63ee77640b37923473f9363e0749a0851578bf5a
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 143, die Entwickler betreffen.
Firefox 143 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [16. September 2025](https://whattrainisitnow.com/release/?version=143) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

### CSS

- Das {{cssxref("::details-content")}} Pseudoelement ist jetzt standardmäßig aktiviert. Es ermöglicht Ihnen, den Inhalt des {{htmlElement("details")}} Elements zu stylen.
  ([Firefox Bug 1941406](https://bugzil.la/1941406)).
- Die Multi-Pass-Gitterstrecken-Berechnung ist jetzt standardmäßig aktiviert und folgt dem Algorithmus, der in der CSS Grid-Spezifikation beschrieben ist. Im Multi-Pass-Algorithmus werden zuerst die Spalten und dann die Zeilen dimensioniert; Prozentwerte werden aufgelöst, nachdem die Größe des Containers bekannt ist. Mit dieser standardmäßigen Unterstützung werden [prozentbasierte](/de/docs/Web/CSS/grid-template-rows#percentage) Zeilenstrecken und Gitterelemente mit Seitenverhältnissen nun in mehr Fällen korrekt dimensioniert.
  ([Firefox Bug 1957244](https://bugzil.la/1957244)).

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

#### Entfernt

- Die veraltete [`CompositionEvent.locale`](/de/docs/Web/API/CompositionEvent/locale) Eigenschaft wird nicht mehr unterstützt.
  ([Firefox Bug 1700969](https://bugzil.la/1700969)).

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Hinzufügung von {{WebExtAPIRef("storage.StorageArea.getKeys()")}}. Diese Methode gibt ein Array zurück, das alle Schlüssel in einem Speicherbereich enthält. Sie ist für alle Speicherbereiche verfügbar, also {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, und {{WebExtAPIRef("storage.managed", "managed")}}. ([Firefox Bug 1910669](https://bugzil.la/1910669))
- Die Auswahl eines Erweiterungsvorschlags in der Adressleiste (omnibox) durch den Benutzer, eine Aktion, die {{WebExtAPIRef("omnibox.onInputEntered")}} auslöst, wird jetzt als [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) betrachtet. Zusätzlich zur Aktivierung der APIs, die eine Benutzeraktion erfordern, gewährt die Auswahl eines Erweiterungsvorschlags in der Adressleiste auch die Berechtigung `"activeTab"`.

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Webfunktionen

- **`text-autospace`**: `layout.css.text-autospace.enabled`

  Die **`text-autospace`** CSS-Eigenschaft ermöglicht es, den Abstand zwischen chinesischen/japanischen/koreanischen (CJK) und nicht-CJK-Zeichen zu spezifizieren. Derzeit werden diese Werte nur geparst und haben keine Auswirkungen auf die Ausgabe. ([Firefox Bug 1869577](https://bugzil.la/1869577)).

Diese Funktionen sind in Firefox 143 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
