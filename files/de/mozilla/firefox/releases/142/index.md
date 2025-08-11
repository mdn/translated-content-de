---
title: Firefox 142 für Entwickler
short-title: Firefox 142 (Beta)
slug: Mozilla/Firefox/Releases/142
l10n:
  sourceCommit: 13b1751dae0b2b2d5eff03ff6b4e913fe1f274da
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 142, die Entwickler betreffen.
Firefox 142 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [19. August 2025](https://whattrainisitnow.com/release/?version=142) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Version von Firefox sind noch in Arbeit.

## Änderungen für Webentwickler

### HTML

#### Entfernung

- Das {{HTMLElement('object')}}-Element unterstützt nicht mehr das veraltete `codebase` Attribut. Verwenden Sie stattdessen das [`data`](/de/docs/Web/HTML/Reference/Elements/object#data) Attribut. (Weitere Details finden Sie im [Firefox-Fehler 1973900](https://bugzil.la/1973900).)

### APIs

#### DOM

- Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) wird nun unterstützt und ermöglicht es Entwicklern, ausgewählte Textbereiche über Shadow-DOM-Grenzen genau zu erfassen. Zusätzlich wurden die Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) der [`Selection`](/de/docs/Web/API/Selection) Schnittstelle dahingehend geändert, dass sie Knoten innerhalb eines Shadow Roots akzeptieren. ([Firefox-Fehler 1903870](https://bugzil.la/1903870)).
- Die Eigenschaft [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) wird jetzt unterstützt und ermöglicht es Entwicklern, den Fortschritt durch eine Animation zu verfolgen und anzuzeigen. ([Firefox-Fehler 1834878](https://bugzil.la/1834878)).
- Die Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles) erfordert nicht mehr, dass [`fill`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) auf einer Animation gesetzt sein muss, um die berechneten Stile nach Abschluss der Animation zu übernehmen. Beachten Sie, dass Sie `fill` weiterhin setzen sollten, bis mehr Browser diese Änderung unterstützen. ([Firefox-Fehler 1973203](https://bugzil.la/1973203)).

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} in Nightly erstellt wurden, werden nun validiert, und ungültige Cookies werden abgelehnt. Die Implementierung in Nightly dient der Überwachung eventueller Probleme. Ziel ist es, die Validierung in allen Kanälen in einer zukünftigen Version durchzusetzen. ([Firefox-Fehler 1976197](https://bugzil.la/1976197))
- Fügt die Ereignisse {{WebExtAPIRef("browserAction.onUserSettingsChanged")}} und {{WebExtAPIRef("action.onUserSettingsChanged")}} hinzu, die auf Änderungen der von Benutzern festgelegten Einstellungen reagieren, die die Aktion einer Erweiterung betreffen. ([Firefox-Fehler 1828220](https://bugzil.la/1828220))

## Experimentelle Web-Features

- **`anchor-size()`** (Nightly): `layout.css.anchor-positioning.enabled`

  Die CSS-Funktion {{CSSXRef("anchor-size")}} ermöglicht das Festlegen der Größe, Position und Ränder eines anker-basierten Elements relativ zu den Dimensionen der Ankerelemente. ([Firefox-Fehler 1972610](https://bugzil.la/1972610)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** (Nightly): `security.integrity_policy.enabled`

  Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt unterstützt. Diese ermöglichen es Websites, entweder [Garantien zur Integrität von Subressourcen](/de/docs/Web/Security/Subresource_Integrity) für Skripte durchzusetzen oder Verstöße gegen die Richtlinie lediglich zu melden.
  ([Firefox-Fehler 1976656](https://bugzil.la/1976656)).

Diese Features sind in Firefox 142 enthalten, jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Präferenz auf der `about:config`-Seite und setzen Sie diese auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).
