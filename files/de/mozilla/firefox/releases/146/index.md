---
title: Firefox 146 Versionshinweise für Entwickler (Beta)
short-title: Firefox 146 (Beta)
slug: Mozilla/Firefox/Releases/146
l10n:
  sourceCommit: 08f01e6cd0103ac0a472f9e3cf2482bb9fc2f25a
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 146, die Entwickler betreffen.
Firefox 146 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [9. Dezember 2025](https://whattrainisitnow.com/release/?version=146) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte alle Überschriften, für die Sie Notizen schreiben, auskommentieren -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernt -->

<!-- ### MathML -->

<!-- #### Entfernt -->

<!-- ### SVG -->

<!-- #### Entfernt -->

### CSS

- Das veraltete Schlüsselwort [`-webkit-fill-available`](/de/docs/Web/CSS/Reference/Webkit_extensions#-webkit-prefixed_property_values) wird nun als Wert für die CSS-Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} unterstützt, um die Web-Kompatibilität zu verbessern.
  Dieses Schlüsselwort ist ein Alias für das kürzlich standardisierte Schlüsselwort `stretch` (d.h. [`width: stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch) und [`height: stretch`](/de/docs/Web/CSS/Reference/Properties/height#stretch)), das in Firefox noch nicht unterstützt wird.
  ([Firefox-Bug 1988938](https://bugzil.la/1988938), [Firefox-Bug 1789477](https://bugzil.la/1789477)).

<!-- #### Entfernt -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernt -->

<!-- ### HTTP -->

<!-- #### Entfernt -->

<!-- ### Sicherheit -->

<!-- #### Entfernt -->

<!-- ### APIs -->

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernt -->

<!-- ### WebAssembly -->

<!-- #### Entfernt -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("browsingData.removeLocalStorage")}} und {{WebExtAPIRef("browsingData.remove")}} (wenn `localStorage` in {{WebExtAPIRef("browsingData.DataTypeSet")}} gesetzt ist) löschen nun Objekte aus [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). ([Firefox-Bug 1886894](https://bugzil.la/1886894))

<!-- ### Entfernt -->

<!-- ### Sonstiges -->

## Experimentelle Webfeatures

Diese Funktionen sind in Firefox 146 enthalten, aber standardmäßig deaktiviert.
Um diese auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
