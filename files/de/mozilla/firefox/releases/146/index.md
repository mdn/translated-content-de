---
title: Firefox 146 Versionshinweise für Entwickler (Beta)
short-title: Firefox 146 (Beta)
slug: Mozilla/Firefox/Releases/146
l10n:
  sourceCommit: b8c529c15748a4cca768d8f2bca6b148bb1dd4c9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 146, die Entwickler betreffen.
Firefox 146 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [9. Dezember 2025](https://whattrainisitnow.com/release/?version=146) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte entfernen Sie die Kommentare bei allen Überschriften, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernt -->

<!-- ### MathML -->

<!-- #### Entfernt -->

<!-- ### SVG -->

<!-- #### Entfernt -->

### CSS

- Die {{cssxref("color_value/contrast-color()")}} [CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wird jetzt unterstützt. Diese Funktion nimmt einen {{cssxref("color_value","color")}}-Wert und gibt eine kontrastierende Farbe zurück, die mindestens den [WCAG AA Mindestkontrast](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) sicherstellt.
  ([Firefox Fehler 1682439](https://bugzil.la/1682439)).

- Die {{cssxref("text-decoration-inset")}}-Eigenschaft wird jetzt unterstützt, was es ermöglicht, die Start- und Endpunkte einer {{cssxref("text-decoration")}} eines Elements anzupassen, sodass sie verkürzt, verlängert oder ihre Position relativ zum gerenderten Text verschoben werden kann.
  ([Firefox Fehler 1979915](https://bugzil.la/1979915), [Firefox Fehler 1997157](https://bugzil.la/1997157), [Firefox Fehler 1993043](https://bugzil.la/1993043)).

- Die {{cssxref("@scope")}} [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird jetzt standardmäßig unterstützt. Dies ermöglicht es Ihnen, Elemente in bestimmten DOM-Subbäumen auszuwählen, Elemente präzise zu selektieren, ohne übermäßig spezifische Selektoren schreiben zu müssen, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu eng an die DOM-Struktur zu koppeln. ([Firefox Fehler 1991105](https://bugzil.la/1991105)).

- Das veraltete [`-webkit-fill-available`](/de/docs/Web/CSS/Reference/Webkit_extensions#-webkit-prefixed_property_values) Schlüsselwort wird jetzt als Wert für die CSS-Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} unterstützt, um die Web-Kompatibilität zu verbessern.
  Dieses Schlüsselwort ist ein Alias für das kürzlich standardisierte `stretch` Schlüsselwort (d.h. [`width: stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch) und [`height: stretch`](/de/docs/Web/CSS/Reference/Properties/height#stretch)), das in Firefox noch nicht unterstützt wird.
  ([Firefox Fehler 1988938](https://bugzil.la/1988938), [Firefox Fehler 1789477](https://bugzil.la/1789477)).

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

- {{WebExtAPIRef("browsingData.removeLocalStorage")}} und {{WebExtAPIRef("browsingData.remove")}} (wenn `localStorage` in {{WebExtAPIRef("browsingData.DataTypeSet")}} gesetzt ist) löschen jetzt Objekte aus dem [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). ([Firefox Fehler 1886894](https://bugzil.la/1886894))

<!-- ### Entfernt -->

<!-- ### Sonstiges -->

## Experimentelle Web-Features

Diese Features werden in Firefox 146 bereitgestellt, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere derartige Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).
