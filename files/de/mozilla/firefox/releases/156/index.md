---
title: Versionshinweise zu Firefox 156 für Entwickler (Beta)
short-title: Firefox 156 (Beta)
slug: Mozilla/Firefox/Releases/156
l10n:
  sourceCommit: 15cab338c83330f0efe31cd18bfbcbbbfb28e56f
---

Dieser Artikel enthält Informationen zu den Änderungen in Firefox 156, die Entwickler betreffen.
Firefox 156 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [15. September 2026](https://whattrainisitnow.com/release/?version=156) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### CSS -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

<!-- ### APIs -->

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Marionette und RemoteAgent verwenden nun beide einen benutzerdefinierten Exit-Code (69), wenn ihr Server nicht gestartet werden kann. ([Firefox-Bug 2040974](https://bugzil.la/2040974)).
- Das Timing von Zwischenereignissen für Aktionen mit einer Dauer größer als 0 wurde verbessert, damit es näher an einem Intervall von 16 ms liegt und die Gesamtdauer nicht erhöht wird, selbst wenn der Content-Prozess überlastet ist. ([Firefox-Bug 2054442](https://bugzil.la/2054442)).

#### WebDriver BiDi

- `browsingContext.startScreencast` wählt nun sicher einen gültigen Download-Ordner aus und sollte keinen Fehler mehr auslösen, wenn der Standard-Download-Ordner (`DfltDwnld`) nicht verfügbar ist. ([Firefox-Bug 2066782](https://bugzil.la/2066782)).

#### Marionette

- Der Befehl `WebDriver:GetElementTagName` wurde aktualisiert, um den [neuesten Spezifikationsänderungen](https://github.com/w3c/webdriver/pull/1968) zu entsprechen, und gibt nun den [qualifizierten Namen](https://dom.spec.whatwg.org/#concept-element-qualified-name) des DOM-Elements zurück. Dieser Befehl wandelte den Rückgabewert zuvor immer in Kleinschreibung um. In der Praxis ist diese Änderung für HTML-Elemente abwärtskompatibel, für Elemente mit einem groß- und kleinschreibungssensitiven qualifizierten Namen, etwa SVG-Elemente, handelt es sich jedoch um eine nicht abwärtskompatible Änderung. ([Firefox-Bug 2026697](https://bugzil.la/2026697)).

## Änderungen für Add-on-Entwickler

- Der Manifest-Schlüssel [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) fügt die Eigenschaft `backgrounds_area` hinzu. Diese Eigenschaft ermöglicht einem Theme, festzulegen, wo seine Hintergrundbilder und Farbverläufe gezeichnet werden. Die Einstellung `"window"` zeichnet sie über das gesamte Browserfenster, während `"top_toolbars"` sie auf die horizontalen Symbolleisten am oberen Rand des Fensters beschränkt. Wenn `backgrounds_area` ausgelassen oder auf `"auto"` gesetzt wird, wählt Firefox den Bereich anhand von `properties.additional_backgrounds_alignment` aus. ([Firefox-Bug 2059526](https://bugzil.la/2059526))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Webfeatures

Diese Features werden mit Firefox 156 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).
