---
title: Firefox 85 für Entwickler
slug: Mozilla/Firefox/Releases/85
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 85, die sich auf Entwickler auswirken. Firefox 85 wurde am 26. Januar 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [January brings us Firefox 85](https://hacks.mozilla.org/2021/01/january-brings-us-firefox-85/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwickler-Tools

- Entwickler können jetzt den [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-common-pseudo-classes) verwenden, um die {{cssxref(":focus-visible")}} Pseudoklasse für das derzeit ausgewählte Element umzuschalten (zusätzlich zu den bisher unterstützten Pseudoklassen: {{cssxref(":hover")}}, {{cssxref(":active")}}, {{cssxref(":focus")}}, {{cssxref(":focus-within")}} und {{cssxref(":visited")}}). ([Firefox Bug 1617608](https://bugzil.la/1617608)).

### HTML

- [`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload) ist jetzt aktiviert. ([Firefox Bug 1626997](https://bugzil.la/1626997)).

#### Entfernungen

- Das {{HTMLElement("menuitem")}} HTML-Element ist nicht mehr verfügbar — es wurde hinter dem `dom.menuitem.enabled flag` versteckt. ([Firefox Bug 1680596](https://bugzil.la/1680596)).

### CSS

- Die {{cssxref(":focus-visible")}} Pseudoklasse ist jetzt aktiviert. ([Firefox Bug 1445482](https://bugzil.la/1445482)).
- Der `pinch-zoom` Wert für die {{cssxref("touch-action")}} Eigenschaft ist jetzt aktiviert. ([Firefox Bug 1329241](https://bugzil.la/1329241)).

### JavaScript

- Die `collation` Eigenschaft kann jetzt in den Optionen angegeben werden, die an den [`Intl.Collator()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) übergeben werden ([Firefox Bug 1670062](https://bugzil.la/1670062)). Dies ermöglicht es Entwicklern, Code mit größerer Klarheit zu schreiben:

  ```js
  // Old method
  let pinyin = new Intl.Collator(["zh-u-co-pinyin"]);
  // New method
  let pinyin = new Intl.Collator("zh", { collation: "pinyin" });
  ```

### Plugins

- Die Unterstützung für Flash wurde vollständig aus Firefox entfernt ([Firefox Bug 1675349](https://bugzil.la/1675349)).

### APIs

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Ein potenzielles Seitenlade-Zeitüberschreitungsproblem wurde behoben, wenn `WebDriver:ElementClick` für einen Link mit einem `target` aufgerufen wird, der nicht `_blank` ist ([Firefox Bug 1678455](https://bugzil.la/1678455)).
- Die Verwendung von Webelement-Referenzen in Browsing-Kontexten, die sich von dem ursprünglichen unterscheiden, gibt nun korrekt einen `no such element` Fehler zurück, anstatt einem `stale element reference` Fehler ([Firefox Bug 1684827](https://bugzil.la/1684827)).

#### Bekannte Bugs

- WebDriver-Befehle, die einem Aufruf von `WebDriver:SwitchToFrame` folgen, können mit einem "no such window" Fehler fehlschlagen, wenn der Inhalt des Frames noch nicht vollständig geladen wurde ([Firefox Bug 1691348](https://bugzil.la/1691348)).
- Nach einer [Cross-Group-Seitennavigation](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) kann der Zugriff auf ein zuvor abgerufenes Element nicht immer einen "stale element" Fehler auslösen und kann auch zu einem "no such element" Fehler führen. Um dies zu verhindern, setzen Sie die Einstellung `marionette.actors.enabled` auf `false` ([Firefox Bug 1690308](https://bugzil.la/1690308)).

## Änderungen für Addon-Entwickler

_Keine Änderungen._

## Ältere Versionen

{{Firefox_for_developers}}
