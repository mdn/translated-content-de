---
title: Firefox 83 für Entwickler
slug: Mozilla/Firefox/Releases/83
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 83, die Entwickler betreffen werden. Firefox 83 wurde am 17. November 2020 veröffentlicht.

> [!NOTE]
> Siehe auch [Firefox 83 is upon us](https://hacks.mozilla.org/2020/11/firefox-83-is-upon-us/) auf Mozilla Hacks

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Bei der Verwendung des `:screenshot` [Hilfsbefehls](https://firefox-source-docs.mozilla.org/devtools-user/web_console/helpers/index.html) in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wird der `--dpr` Parameter nicht mehr ignoriert, wenn ein Vollbild-Screenshot mit `--fullpage` aufgenommen wird ([Firefox Fehler 1645284](https://bugzil.la/1645284)).
- Entwickler können das `scroll` Abzeichen im [Seiten-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) verwenden, um [scrollbare Überläufe zu debuggen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html). Die Auswahl des Abzeichens hebt Elemente hervor, die Überlauf _verursachen_, und markiert sie mit dem `overflow` Abzeichen ([Firefox Fehler 1669129](https://bugzil.la/1669129)).

### HTML/XML

- Das `crossorigin` Attribut wird nun für `<link rel=icon>` unterstützt ([Firefox Fehler 1661075](https://bugzil.la/1661075)).
- Das `displaystyle` [Attribut](/de/docs/Web/MathML/Reference/Attribute) ist jetzt für alle MathML-Elemente implementiert ([Firefox Fehler 1666075](https://bugzil.la/1666075)).

### CSS

- Das vorangestellte `:-moz-any()` ist jetzt zum Standard {{CSSxRef(":is", ":is()")}} CSS-Pseudoklassenfunktion aliasiert ([Firefox Fehler 1666086](https://bugzil.la/1666086)).
- Wir haben Unterstützung für [CSS konische Verläufe](/de/docs/Web/CSS/gradient/conic-gradient) hinzugefügt ([Firefox Fehler 1632351](https://bugzil.la/1632351)) und ([Firefox Fehler 1175958](https://bugzil.la/1175958)).

### JavaScript

- [`Intl[@@toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) wurde hinzugefügt und gibt einen Standardwert von `Intl` zurück (eine aktuelle Ergänzung zur ECMA-Spezifikation). ([Firefox Fehler 1670053](https://bugzil.la/1670053))

### HTTP

_Keine Änderungen._

### APIs

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Wir haben die vorläufige Unterstützung für `WebDriver:SwitchToShadowRoot` entfernt, die noch nicht zur WebDriver-Spezifikation hinzugefügt wurde ([Firefox Fehler 1662468](https://bugzil.la/1662468)).
- Wir haben einen Fehler in `WebDriver:Back` und `WebDriver:Forward` behoben, der dazu führte, dass Marionette hängen blieb, wenn die Navigation aus einem [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) ausgelöst wurde, das entfernt wird ([Firefox Fehler 1672758](https://bugzil.la/1672758)).

## Änderungen für Add-on-Entwickler

_Keine Änderungen._

## Ältere Versionen

{{Firefox_for_developers}}
