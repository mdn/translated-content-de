---
title: Firefox 83 Versionshinweise für Entwickler
short-title: Firefox 83
slug: Mozilla/Firefox/Releases/83
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 83, die Entwickler betreffen werden. Firefox 83 wurde am 17. November 2020 veröffentlicht.

> [!NOTE]
> Siehe auch [Firefox 83 is upon us](https://hacks.mozilla.org/2020/11/firefox-83-is-upon-us/) auf Mozilla hacks

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Bei Verwendung des `:screenshot` [Hilfsbefehls](https://firefox-source-docs.mozilla.org/devtools-user/web_console/helpers/index.html) in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wird der Parameter `--dpr` nicht mehr ignoriert, wenn ein Vollbild-Screenshot mit `--fullpage` aufgenommen wird ([Firefox-Bug 1645284](https://bugzil.la/1645284)).
- Entwickler können das `scroll`-Badge im [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) verwenden, um [scrollbaren Überlauf zu debuggen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html). Durch Auswahl des Badges werden Elemente hervorgehoben, die Überlauf _verursachen_, und mit dem `overflow`-Badge markiert ([Firefox-Bug 1669129](https://bugzil.la/1669129)).

### HTML/XML

- Das `crossorigin`-Attribut wird jetzt für `<link rel=icon>` unterstützt ([Firefox-Bug 1661075](https://bugzil.la/1661075)).
- Das `displaystyle` [Attribut](/de/docs/Web/MathML/Reference/Attribute) wird jetzt für alle MathML-Elemente implementiert ([Firefox-Bug 1666075](https://bugzil.la/1666075)).

### CSS

- Das anbieterpräfixierte `:-moz-any()` ist nun auf die standardisierte {{CSSxRef(":is", ":is()")}} CSS-Pseudo-Klassen-Funktion aliased ([Firefox-Bug 1666086](https://bugzil.la/1666086)).
- Wir haben Unterstützung für [CSS konische Verläufe](/de/docs/Web/CSS/gradient/conic-gradient) hinzugefügt ([Firefox-Bug 1632351](https://bugzil.la/1632351)) und ([Firefox-Bug 1175958](https://bugzil.la/1175958)).

### JavaScript

- [`Intl[@@toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) wurde hinzugefügt und gibt einen Standardwert von `Intl` zurück (neue Ergänzung zur ECMA-Spezifikation). ([Firefox-Bug 1670053](https://bugzil.la/1670053))

### HTTP

_Keine Änderungen._

### APIs

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Wir haben die vorläufige Unterstützung für `WebDriver:SwitchToShadowRoot` entfernt, die noch nicht zur WebDriver-Spezifikation hinzugefügt wurde ([Firefox-Bug 1662468](https://bugzil.la/1662468)).
- Wir haben einen Fehler in `WebDriver:Back` und `WebDriver:Forward` behoben, der Marionette zum Hängen brachte, wenn die Navigation von einem [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) ausgelöst wurde, das entfernt wird ([Firefox-Bug 1672758](https://bugzil.la/1672758)).

## Änderungen für Add-on-Entwickler

_Keine Änderungen._
