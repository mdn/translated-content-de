---
title: Firefox 85 für Entwickler
slug: Mozilla/Firefox/Releases/85
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 85, die Entwickler betreffen werden. Firefox 85 wurde am 26. Januar 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [January brings us Firefox 85](https://hacks.mozilla.org/2021/01/january-brings-us-firefox-85/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Entwickler können jetzt den [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-common-pseudo-classes) verwenden, um die {{cssxref(":focus-visible")}} Pseudo-Klasse für das aktuell ausgewählte Element zu toggeln (zusätzlich zu den zuvor unterstützten Pseudo-Klassen: {{cssxref(":hover")}}, {{cssxref(":active")}}, {{cssxref(":focus")}}, {{cssxref(":focus-within")}} und {{cssxref(":visited")}}). ([Firefox bug 1617608](https://bugzil.la/1617608)).

### HTML

- [`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload) ist jetzt aktiviert. ([Firefox bug 1626997](https://bugzil.la/1626997)).

#### Entfernt

- Das {{HTMLElement("menuitem")}} HTML-Element ist nicht mehr verfügbar — es wurde hinter dem `dom.menuitem.enabled Flag` versteckt. ([Firefox bug 1680596](https://bugzil.la/1680596)).

### CSS

- Die {{cssxref(":focus-visible")}} Pseudo-Klasse ist jetzt aktiviert. ([Firefox bug 1445482](https://bugzil.la/1445482)).
- Der `pinch-zoom` Wert für die {{cssxref("touch-action")}} Eigenschaft ist jetzt aktiviert. ([Firefox bug 1329241](https://bugzil.la/1329241)).

### JavaScript

- Die `collation` Eigenschaft kann jetzt in den Optionen angegeben werden, die dem [`Intl.Collator()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) übergeben werden ([Firefox bug 1670062](https://bugzil.la/1670062)). Dies ermöglicht es Entwicklern, Code mit größerer Klarheit zu schreiben:

  ```js
  // Alte Methode
  let pinyin = new Intl.Collator(["zh-u-co-pinyin"]);
  // Neue Methode
  let pinyin = new Intl.Collator("zh", { collation: "pinyin" });
  ```

### Plugins

- Flash-Unterstützung wurde vollständig aus Firefox entfernt ([Firefox bug 1675349](https://bugzil.la/1675349)).

### APIs

_Keine Änderungen._

### WebDriver Konformität (Marionette)

- Ein mögliches Timeout beim Laden einer Seite wurde behoben, wenn `WebDriver:ElementClick`
  für einen Link aufgerufen wird, dessen `target` nicht `_blank` ist ([Firefox bug 1678455](https://bugzil.la/1678455)).
- Die Verwendung von Web-Element-Referenzen in anderen als den ursprünglich betrachteten Browserverläufen gibt nun korrekt einen `no such element` Fehler zurück, statt eines `stale element reference` Fehlers ([Firefox bug 1684827](https://bugzil.la/1684827)).

#### Bekannte Fehler

- WebDriver-Befehle nach einem Aufruf von `WebDriver:SwitchToFrame` können mit einem "no such window" Fehler fehlschlagen, wenn der Inhalt des Rahmens noch nicht vollständig geladen ist ([Firefox bug 1691348](https://bugzil.la/1691348)).
- Nach einer [cross-group Seitennavigation](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) kann der Zugriff auf ein zuvor abgerufenes Element möglicherweise nicht immer einen "stale element" Fehler auslösen und kann auch zu einem "no such element" Fehler führen. Um dies zu verhindern, setzen Sie die `marionette.actors.enabled` Einstellung auf `false` ([Firefox bug 1690308](https://bugzil.la/1690308)).

## Änderungen für Add-on-Entwickler

_Keine Änderungen._

## Ältere Versionen

{{Firefox_for_developers}}
