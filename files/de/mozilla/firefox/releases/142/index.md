---
title: Firefox 142 für Entwickler
short-title: Firefox 142 (Beta)
slug: Mozilla/Firefox/Releases/142
l10n:
  sourceCommit: 32bfbcb61a6a2b046e597a44cc117fac441c26a2
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 142, die Entwickler betreffen.
Firefox 142 ist die aktuelle [Betaversion von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [19. August 2025](https://whattrainisitnow.com/release/?version=142) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Anmerkungen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklertools -->

### HTML

<!-- Keine bemerkenswerten Änderungen. -->

#### Entfernungen

- Das {{HTMLElement('object')}}-Element unterstützt das veraltete `codebase`-Attribut nicht mehr. Verwenden Sie stattdessen das [`data`](/de/docs/Web/HTML/Reference/Elements/object#data)-Attribut. (Siehe [Firefox Fehler 1973900](https://bugzil.la/1973900) für weitere Details.)

<!-- ### CSS -->

<!-- Keine bemerkenswerten Änderungen. -->

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

#### DOM

- Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) wird jetzt unterstützt, wodurch Entwickler ausgewählte Textbereiche über Schatten-DOM-Grenzen hinweg genau abrufen können. Zusätzlich wurden die Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) der [`Selection`](/de/docs/Web/API/Selection)-Schnittstelle so modifiziert, dass sie Knoten innerhalb eines Schattenwurzel akzeptieren. ([Firefox Fehler 1903870](https://bugzil.la/1903870)).

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} in Nightly erstellt wurden, werden jetzt validiert, und ungültige Cookies werden abgelehnt. Die Implementierung in Nightly dient der Überwachung potenzieller Probleme. Die Absicht ist, die Validierung in einer zukünftigen Version in allen Kanälen durchzusetzen. ([Firefox Fehler 1976197](https://bugzil.la/1976197))

<!-- ### Entfernungen -->

<!-- ### Andere -->

## Experimentelle Web-Features

- **`anchor-size()`** (Nightly): `layout.css.anchor-positioning.enabled`

  Die CSS-Funktion {{CSSXRef("anchor-size")}} ermöglicht das Setzen von Größe, Position und Rändern eines ankerpositionierten Elements relativ zu den Abmessungen von Ankerelementen. ([Firefox Fehler 1972610](https://bugzil.la/1972610)).

Diese Features sind in Firefox 142 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).
