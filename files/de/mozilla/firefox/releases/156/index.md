---
title: Firefox 156 – Versionshinweise für Entwickler (Beta)
short-title: Firefox 156 (Beta)
slug: Mozilla/Firefox/Releases/156
l10n:
  sourceCommit: fb3b56f801565812abdb36d5adbbcadb10ab5fae
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 156, die Entwickler betreffen.
Firefox 156 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [15. September 2026](https://whattrainisitnow.com/release/?version=156) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version befinden sich noch in Bearbeitung.

<!-- Autoren: Bitte entfernen Sie die Kommentierung aller Überschriften, für die Sie Hinweise verfassen. -->

## Änderungen für Webentwickler

<!-- ### Entwicklertools -->

<!-- ### HTML -->

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- Das nicht standardisierte Pseudoelement {{cssxref("::-webkit-scrollbar")}} wird jetzt auf jeder Website in {{cssxref("@supports")}}-Bedingungen als nicht unterstützt gemeldet. Daher gibt `@supports selector(::-webkit-scrollbar)` `false` zurück und `@supports not (selector(::-webkit-scrollbar))` gibt `true` zurück. Dies schließt die Websites ein, die in der in [Firefox 155](/de/docs/Mozilla/Firefox/Releases/155#css) eingeführten Einstellung `layout.css.fake-webkit-scrollbar.enabled-domains` aufgeführt sind. Firefox wendet auf diesen Websites weiterhin Regeln für `::-webkit-scrollbar` an, meldet das Pseudoelement jedoch nicht mehr als unterstützt. Websites verwenden diese Prüfung als Signal dafür, dass die gesamte Familie `::-webkit-scrollbar-*` unterstützt wird, Firefox unterstützt jedoch die anderen Pseudoelemente dieser Familie nicht. Websites, die ihre standardmäßigen Scrollbar-Stile hinter `@supports not (selector(::-webkit-scrollbar))` absichern, erhalten diese Stile nun in Firefox. ([Firefox-Bug 2062782](https://bugzil.la/2062782)).

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

<!-- ### APIs -->

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemeines

- Marionette und RemoteAgent verwenden jetzt beide einen benutzerdefinierten Exit-Code (69), wenn ihr Server nicht gestartet werden kann. ([Firefox-Bug 2040974](https://bugzil.la/2040974)).
- Das Timing von Zwischenereignissen für Aktionen mit einer Dauer von mehr als 0 wurde verbessert, um näher an einem Intervall von 16 ms zu liegen und eine Verlängerung der Gesamtdauer zu vermeiden, selbst wenn der Content-Prozess überlastet ist. ([Firefox-Bug 2054442](https://bugzil.la/2054442)).

#### WebDriver BiDi

- `browsingContext.startScreencast` wählt jetzt zuverlässig einen gültigen Download-Ordner aus und sollte keinen Fehler mehr auslösen, wenn der Standard-Download-Ordner (`DfltDwnld`) nicht verfügbar ist. ([Firefox-Bug 2066782](https://bugzil.la/2066782)).

#### Marionette

- Der Befehl `WebDriver:GetElementTagName` wurde an die [neuesten Spezifikationsänderungen](https://github.com/w3c/webdriver/pull/1968) angepasst und gibt jetzt den [qualifizierten Namen](https://dom.spec.whatwg.org/#concept-element-qualified-name) des DOM-Elements zurück. Dieser Befehl wandelte den Rückgabewert zuvor immer in Kleinbuchstaben um. In der Praxis ist diese Änderung für HTML-Elemente abwärtskompatibel, für Elemente mit einem groß-/kleinschreibungssensitiven qualifizierten Namen, wie SVG-Elemente, handelt es sich jedoch um eine nicht abwärtskompatible Änderung. ([Firefox-Bug 2026697](https://bugzil.la/2026697)).

## Änderungen für Add-on-Entwickler

- Der Manifest-Schlüssel [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) fügt die Eigenschaft `backgrounds_area` hinzu. Diese Eigenschaft ermöglicht es einem Theme, festzulegen, wo seine Hintergrundbilder und Farbverläufe gezeichnet werden. Bei der Einstellung `"window"` werden sie über das gesamte Browserfenster hinweg gezeichnet, während `"top_toolbars"` sie auf die horizontalen Symbolleisten am oberen Rand des Fensters beschränkt. Wenn `backgrounds_area` weggelassen oder auf `"auto"` gesetzt wird, wählt Firefox den Bereich anhand von `properties.additional_backgrounds_alignment` aus. ([Firefox-Bug 2059526](https://bugzil.la/2059526))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Webfeatures

Diese Features werden mit Firefox 156 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).
