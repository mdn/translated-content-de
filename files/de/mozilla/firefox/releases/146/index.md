---
title: Firefox 146 Versionshinweise für Entwickler (Beta)
short-title: Firefox 146 (Beta)
slug: Mozilla/Firefox/Releases/146
l10n:
  sourceCommit: 2e0e3cb6bf69ea53e87390ed13077c1b97d0c139
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 146, die Entwickler betreffen.
Firefox 146 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [9. Dezember 2025](https://whattrainisitnow.com/release/?version=146) veröffentlicht.

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

### CSS

- Die {{cssxref("color_value/contrast-color()")}} [CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wird jetzt unterstützt. Diese Funktion nimmt einen {{cssxref("color_value","color")}}-Wert und liefert eine kontrastierende Farbe, die mindestens den [WCAG AA Mindestkontrast](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) gewährleistet.
  ([Firefox Bug 1682439](https://bugzil.la/1682439)).

- Die {{cssxref("text-decoration-inset")}}-Eigenschaft wird jetzt unterstützt, was es ermöglicht, die Anfangs- und Endpunkte einer {{cssxref("text-decoration")}} eines Elements anzupassen, sodass sie verkürzt, verlängert oder ihre Position in Bezug auf den gerenderten Text verschoben werden kann.
  ([Firefox Bug 1979915](https://bugzil.la/1979915), [Firefox Bug 1997157](https://bugzil.la/1997157), [Firefox Bug 1993043](https://bugzil.la/1993043)).

- Die {{cssxref("@scope")}} [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird jetzt standardmäßig unterstützt. Dies ermöglicht Ihnen das Auswählen von Elementen in bestimmten DOM-Teilbäumen, um Elemente präzise zu definieren, ohne übermäßig spezifische Selektoren schreiben zu müssen, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu eng an die DOM-Struktur zu koppeln. ([Firefox Bug 1991105](https://bugzil.la/1991105)).

- Das veraltete [`-webkit-fill-available`](/de/docs/Web/CSS/Reference/Webkit_extensions#-webkit-prefixed_property_values)-Schlüsselwort wird jetzt als Wert für die CSS {{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften unterstützt, um die Webkompatibilität zu verbessern.
  Dieses Schlüsselwort ist ein Alias für das kürzlich standardisierte `stretch`-Keyword (d.h. [`width: stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch) und [`height: stretch`](/de/docs/Web/CSS/Reference/Properties/height#stretch)), welches in Firefox noch nicht unterstützt wird.
  ([Firefox Bug 1988938](https://bugzil.la/1988938), [Firefox Bug 1789477](https://bugzil.la/1789477)).

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

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("browsingData.removeLocalStorage")}} und {{WebExtAPIRef("browsingData.remove")}} (wenn `localStorage` in {{WebExtAPIRef("browsingData.DataTypeSet")}} gesetzt ist) löschen nun Objekte aus [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). ([Firefox Bug 1886894](https://bugzil.la/1886894))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Web-Features

Diese Funktionen werden in Firefox 146 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Navigations-API** (Nightly): `dom.navigation.webidl.enabled`

  Nightly-Versionen unterstützen jetzt die Navigations-API, die die Möglichkeit bietet, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten. Sie kann auch die Historieneinträge einer Anwendung untersuchen. Diese ist der Nachfolger früherer Webplattform-Funktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), löst deren Mängel und ist speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Anwendungen (SPAs)")}} ausgerichtet.
  ([Firefox Bug 1979288](https://bugzil.la/1979288)).
