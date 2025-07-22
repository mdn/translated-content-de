---
title: Firefox 142 für Entwickler
short-title: Firefox 142 (Nightly)
slug: Mozilla/Firefox/Releases/142
l10n:
  sourceCommit: 3178e192054bded810d61aecc360b16df23019e7
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 142, die Entwickler betreffen.
Firefox 142 ist die aktuelle [Nightly-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#nightly) und wird am [19. August 2025](https://whattrainisitnow.com/release/?version=141) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

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

- Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) wird jetzt unterstützt, sodass Entwickler ausgewählte Textbereiche genau über Shadow DOM-Grenzen hinweg erhalten können. Zusätzlich wurden die Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) der [`Selection`](/de/docs/Web/API/Selection)-Schnittstelle so geändert, dass sie Knoten innerhalb eines Shadow-Roots akzeptieren. ([Firefox Fehler 1903870](https://bugzil.la/1903870)).

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} in Nightly erstellt werden, werden jetzt validiert, und ungültige Cookies werden abgelehnt. Die Implementierung in Nightly dient dazu, mögliche Probleme zu überwachen. Ziel ist es, die Validierung in einer zukünftigen Version in allen Kanälen durchzusetzen. ([Firefox Fehler 1976197](https://bugzil.la/1976197))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 142 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
