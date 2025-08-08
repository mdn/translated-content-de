---
title: Firefox 142 für Entwickler
short-title: Firefox 142 (Beta)
slug: Mozilla/Firefox/Releases/142
l10n:
  sourceCommit: 5287e9641d6814039ccfe19f1aa06274477f2a88
---

Dieser Artikel enthält Informationen zu den Änderungen in Firefox 142, die Entwickler betreffen.
Firefox 142 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und erscheint am [19. August 2025](https://whattrainisitnow.com/release/?version=142).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Werkzeuge -->

### HTML

<!-- Keine bemerkenswerten Änderungen. -->

#### Entfernungen

- Das {{HTMLElement('object')}}-Element unterstützt nicht mehr das veraltete `codebase`-Attribut. Verwenden Sie stattdessen das [`data`](/de/docs/Web/HTML/Reference/Elements/object#data)-Attribut. (Siehe [Firefox Bug 1973900](https://bugzil.la/1973900) für weitere Details.)

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

- Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) wird jetzt unterstützt und ermöglicht es Entwicklern, ausgewählte Textranges über Shadow DOM-Grenzen hinweg genau zu erfassen. Zusätzlich wurden die Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) der [`Selection`](/de/docs/Web/API/Selection)-Schnittstelle so modifiziert, dass sie Knoten innerhalb eines Shadow Root akzeptieren. ([Firefox Bug 1903870](https://bugzil.la/1903870)).
- Die Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles) erfordert nicht mehr, dass [`fill`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) auf einer Animation gesetzt wird, um die berechneten Styles nach Abschluss der Animation zu übernehmen. Beachten Sie, dass Sie `fill` weiterhin setzen sollten, bis mehr Browser diese Änderung unterstützen. ([Firefox Bug 1973203](https://bugzil.la/1973203)).

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} in Nightly erstellt wurden, werden jetzt validiert, und ungültige Cookies werden abgelehnt. Die Implementierung in Nightly dient der Überwachung potenzieller Probleme. Die Absicht ist, die Validierung in einer zukünftigen Version in allen Kanälen durchzusetzen. ([Firefox Bug 1976197](https://bugzil.la/1976197))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Web-Features

- **`anchor-size()`** (Nightly): `layout.css.anchor-positioning.enabled`

  Die CSS {{CSSXRef("anchor-size")}}-Funktion ermöglicht das Setzen der Größe, Position und Ränder von Elementen, die an Ankerelementen positioniert sind, relativ zu deren Abmessungen. ([Firefox Bug 1972610](https://bugzil.la/1972610)).

Diese Funktionen sind in Firefox 142 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie das entsprechende Präferenzfeld auf der `about:config`-Seite und setzen es auf `true`.
Weitere solcher Funktionen finden Sie auf der [Seite zu experimentellen Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
