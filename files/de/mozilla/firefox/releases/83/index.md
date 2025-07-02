---
title: Firefox 83 für Entwickler
slug: Mozilla/Firefox/Releases/83
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 83, die Entwickler betreffen werden. Firefox 83 wurde am 17. November 2020 veröffentlicht.

> [!NOTE]
> Siehe auch [Firefox 83 ist da](https://hacks.mozilla.org/2020/11/firefox-83-is-upon-us/) auf Mozilla Hacks

## Änderungen für Webentwickler

### Entwicklertools

- Bei der Verwendung des `:screenshot` [Hilfsbefehls](https://firefox-source-docs.mozilla.org/devtools-user/web_console/helpers/index.html) in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wird der `--dpr` Parameter nicht mehr ignoriert, wenn ein Vollbild-Screenshot mit `--fullpage` gemacht wird ([Firefox Bug 1645284](https://bugzil.la/1645284)).
- Entwickler können das `scroll` Badge im [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) verwenden, um [scrollbarer Überlauf zu debuggen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html). Beim Auswählen des Badges werden Elemente, die Überlauf verursachen, hervorgehoben und mit dem `overflow` Badge markiert ([Firefox Bug 1669129](https://bugzil.la/1669129)).

### HTML/XML

- Das `crossorigin` Attribut wird jetzt für `<link rel=icon>` unterstützt ([Firefox Bug 1661075](https://bugzil.la/1661075)).
- Das `displaystyle` [Attribut](/de/docs/Web/MathML/Reference/Attribute) ist jetzt für alle MathML-Elemente implementiert ([Firefox Bug 1666075](https://bugzil.la/1666075)).

### CSS

- Die herstellerpräfixierte `:-moz-any()` ist nun als Alias zur standardmäßigen {{CSSxRef(":is", ":is()")}} CSS-Pseudoklassen-Funktion verfügbar ([Firefox Bug 1666086](https://bugzil.la/1666086)).
- Wir haben Unterstützung für [CSS Kegelgradienten](/de/docs/Web/CSS/gradient/conic-gradient) hinzugefügt ([Firefox Bug 1632351](https://bugzil.la/1632351)) und ([Firefox Bug 1175958](https://bugzil.la/1175958)).

### JavaScript

- [`Intl[@@toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) wurde hinzugefügt, zurückgebend einen Standardwert von `Intl` (neue Ergänzung zur ECMA-Spezifikation). ([Firefox Bug 1670053](https://bugzil.la/1670053))

### HTTP

_Keine Änderungen._

### APIs

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Vorläufige Unterstützung für `WebDriver:SwitchToShadowRoot` wurde entfernt, da dies noch nicht zur WebDriver-Spezifikation hinzugefügt wurde ([Firefox Bug 1662468](https://bugzil.la/1662468)).
- Ein Fehler in `WebDriver:Back` und `WebDriver:Forward` wurde behoben, der dazu führte, dass Marionette hängen blieb, wenn die Navigation innerhalb eines [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), das entfernt wurde, ausgelöst wurde ([Firefox Bug 1672758](https://bugzil.la/1672758)).

## Änderungen für Add-on-Entwickler

_Keine Änderungen._

## Ältere Versionen

{{Firefox_for_developers}}
