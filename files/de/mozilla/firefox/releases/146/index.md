---
title: Firefox 146 Versionshinweise für Entwickler (Beta)
short-title: Firefox 146 (Beta)
slug: Mozilla/Firefox/Releases/146
l10n:
  sourceCommit: 2a51ece82ecc2949f40a5cbfd183037a6df6256a
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 146, die Entwickler betreffen.
Firefox 146 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [9. Dezember 2025](https://whattrainisitnow.com/release/?version=146) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

## Änderungen für Webentwickler

### CSS

- Die Funktion {{cssxref("color_value/contrast-color()")}} wird nun unterstützt. Diese Funktion nimmt einen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Wert an und gibt eine kontrastierende Farbe zurück, die mindestens den [WCAG AA Mindestkontrast](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) sicherstellt.
  ([Firefox Bug 1682439](https://bugzil.la/1682439)).

- Der [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Datentyp unterstützt jetzt den `display-p3-linear` Farbraum. Dieses Farbraum ist dem {{Glossary("Color_space#display-p3", "`display-p3`")}} ähnlich, verwendet jedoch eine linear-light Transferfunktion und keine Gamma-Kodierung, was für eine höhere Präzision der dargestellten Farben sorgt.
  ([Firefox Bug 1996318](https://bugzil.la/1996318)).

- Die [`text-decoration-inset`](/de/docs/Web/CSS/Reference/Properties/text-decoration-inset) Eigenschaft wird jetzt unterstützt, was das Anpassen der Start- und Endpunkte der {{cssxref("text-decoration")}} eines Elements ermöglicht, sodass sie gekürzt, verlängert oder ihre Position im Verhältnis zum dargestellten Text verschoben werden kann.
  ([Firefox Bug 1979915](https://bugzil.la/1979915), [Firefox Bug 1997157](https://bugzil.la/1997157), [Firefox Bug 1993043](https://bugzil.la/1993043)).

- Die {{cssxref("@scope")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird jetzt standardmäßig unterstützt. Dies ermöglicht es, Elemente in bestimmten DOM-Subtrees auszuwählen, Elemente präzise zu zielen, ohne übermäßig spezifische Selektoren zu schreiben, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu eng mit der DOM-Struktur zu koppeln. ([Firefox Bug 1991105](https://bugzil.la/1991105)).

- Das Legacy-Schlüsselwort [`-webkit-fill-available`](/de/docs/Web/CSS/Reference/Webkit_extensions#-webkit-prefixed_property_values) wird nun als Wert für die CSS-Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} unterstützt, um die Webkompatibilität zu verbessern.
  Dieses Schlüsselwort ist ein Alias für das kürzlich standardisierte `stretch` Schlüsselwort (d.h. [`width: stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch) und [`height: stretch`](/de/docs/Web/CSS/Reference/Properties/height#stretch)), das in Firefox noch nicht unterstützt wird.
  ([Firefox Bug 1988938](https://bugzil.la/1988938), [Firefox Bug 1789477](https://bugzil.la/1789477)).

### JavaScript

- {{jsxref("WeakMap")}} und {{jsxref("WeakSet")}} akzeptieren jetzt {{jsxref("Symbol")}} Objekte als Schlüssel, außer diejenigen, die [registriert](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sind. ([Firefox Bug 1966745](https://bugzil.la/1966745)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("browsingData.removeLocalStorage")}} und {{WebExtAPIRef("browsingData.remove")}} (wenn `localStorage` in {{WebExtAPIRef("browsingData.DataTypeSet")}} gesetzt ist) löschen nun Objekte aus [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). ([Firefox Bug 1886894](https://bugzil.la/1886894))

## Experimentelle Web-Features

Diese Features sind in Firefox 146 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solche Funktionen finden Sie auf der [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **Navigation API** (Nightly): `dom.navigation.webidl.enabled`

  Nightly-Builds unterstützen jetzt die Navigation API, die die Möglichkeit bietet, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten. Sie kann auch die Einträge im Verlauf einer Anwendung untersuchen. Diese API ist ein Nachfolger früherer Webplattform-Features wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), welche deren Schwächen behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Applications (SPAs)")}} ausgerichtet ist.
  ([Firefox Bug 1979288](https://bugzil.la/1979288)).
