---
title: Firefox 142 für Entwickler
short-title: Firefox 142 (Beta)
slug: Mozilla/Firefox/Releases/142
l10n:
  sourceCommit: 0bbc83440e89ae434a8d798453511e82de79a356
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 142, die Entwickler betreffen. Firefox 142 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [19. August 2025](https://whattrainisitnow.com/release/?version=142) veröffentlicht.

> [!NOTE]
> Die Release-Hinweise zu dieser Firefox-Version sind noch in Arbeit.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

### HTML

<!-- No notable changes. -->

#### Entfernungen

- Das {{HTMLElement('object')}}-Element unterstützt nicht mehr das veraltete `codebase`-Attribut. Verwenden Sie stattdessen das [`data`](/de/docs/Web/HTML/Reference/Elements/object#data)-Attribut. (Weitere Details finden Sie im [Firefox Bug 1973900](https://bugzil.la/1973900)).

<!-- ### CSS -->

<!-- No notable changes. -->

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

#### DOM

- Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) wird jetzt unterstützt, sodass Entwickler ausgewählte Textbereiche über Schatten-DOM-Grenzen hinweg genau abrufen können. Darüber hinaus wurden die Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) der [`Selection`](/de/docs/Web/API/Selection)-Schnittstelle so geändert, dass sie Knoten innerhalb eines Shadow-Roots akzeptieren. ([Firefox Bug 1903870](https://bugzil.la/1903870)).
- Die Eigenschaft [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) wird jetzt unterstützt, sodass Entwickler den Fortschritt einer Animation verfolgen und anzeigen können. ([Firefox Bug 1834878](https://bugzil.la/1834878)).
- Die Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles) erfordert nicht mehr, dass [`fill`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) bei einer Animation gesetzt ist, um die berechneten Stile nach Abschluss der Animation zu übernehmen. Beachten Sie, dass Sie, bis mehr Browser diese Änderung unterstützen, weiterhin `fill` setzen sollten. ([Firefox Bug 1973203](https://bugzil.la/1973203)).

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- In Nightly erstellte Cookies mit {{WebExtAPIRef("cookies.set()")}} werden nun überprüft, und ungültige Cookies werden abgelehnt. Die Implementierung in Nightly dient zur Überwachung möglicher Probleme. Die Absicht ist, die Validierung in allen Kanälen in einer zukünftigen Version durchzusetzen. ([Firefox Bug 1976197](https://bugzil.la/1976197))
- Fügt die Ereignisse {{WebExtAPIRef("browserAction.onUserSettingsChanged")}} und {{WebExtAPIRef("action.onUserSettingsChanged")}} hinzu, die Änderungen an den benutzerspezifischen Einstellungen überwachen, die die Aktionen einer Erweiterung beeinflussen. ([Firefox Bug 1828220](https://bugzil.la/1828220))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Web-Features

- **`anchor-size()`** (Nightly): `layout.css.anchor-positioning.enabled`

  Die CSS-{{CSSXRef("anchor-size")}}-Funktion ermöglicht das Setzen von Größe, Position und Margen eines ankerpositionierten Elements relativ zu den Abmessungen der Ankerelemente. ([Firefox Bug 1972610](https://bugzil.la/1972610)).

Diese Funktionen werden in Firefox 142 ausgeliefert, sind aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).
