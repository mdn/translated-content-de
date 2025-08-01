---
title: Firefox 142 für Entwickler
short-title: Firefox 142 (Beta)
slug: Mozilla/Firefox/Releases/142
l10n:
  sourceCommit: 933dc286637998da88bb11f7f4f452ea6d57c9b1
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 142, die sich auf Entwickler auswirken.
Firefox 142 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [19. August 2025](https://whattrainisitnow.com/release/?version=142) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte heben Sie alle Überschriften hervor, für die Sie Anmerkungen schreiben -->

## Änderungen für Web-Entwickler

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Removals -->

<!-- ### CSS -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

#### DOM

- Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) wird nun unterstützt und ermöglicht es Entwicklern, ausgewählte Textbereiche genau über Shadow-DOM-Grenzen hinweg zu erfassen. Darüber hinaus wurden die Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) der [`Selection`](/de/docs/Web/API/Selection)-Schnittstelle geändert, um Knoten innerhalb eines Shadow-Root zu akzeptieren. ([Firefox Bug 1903870](https://bugzil.la/1903870)).

<!-- #### Media, WebRTC, und Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-On-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} im Nightly erstellt werden, werden nun validiert, und ungültige Cookies werden abgelehnt. Die Implementierung im Nightly dient dazu, eventuelle Probleme zu überwachen. Die Absicht ist, die Validierung in einer zukünftigen Veröffentlichung in allen Kanälen durchzusetzen. ([Firefox Bug 1976197](https://bugzil.la/1976197))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Web-Funktionen

- **`anchor-size()`** (Nightly): `layout.css.anchor-positioning.enabled`

  Die CSS-Funktion {{CSSXRef("anchor-size")}} ermöglicht es, die Größe, Position und Ränder eines anchor-positionierten Elements relativ zu den Dimensionen der Ankerelemente festzulegen. ([Firefox Bug 1972610](https://bugzil.la/1972610)).

Diese Funktionen sind in Firefox 142 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Präferenz auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
