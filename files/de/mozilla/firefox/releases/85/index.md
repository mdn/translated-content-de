---
title: Firefox 85 für Entwickler
slug: Mozilla/Firefox/Releases/85
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 85, die Entwickler betreffen werden. Firefox 85 wurde am 26. Januar 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [January brings us Firefox 85](https://hacks.mozilla.org/2021/01/january-brings-us-firefox-85/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Entwickler können jetzt den [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-common-pseudo-classes) verwenden, um die {{cssxref(":focus-visible")}} Pseudoklasse für das aktuell ausgewählte Element umzuschalten (zusätzlich zu den zuvor unterstützten Pseudoklassen: {{cssxref(":hover")}}, {{cssxref(":active")}} und {{cssxref(":focus")}}, {{cssxref(":focus-within")}}, und {{cssxref(":visited")}}). ([Firefox Bug 1617608](https://bugzil.la/1617608)).

### HTML

- [`<link rel="preload">`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) ist jetzt aktiviert. ([Firefox Bug 1626997](https://bugzil.la/1626997)).

#### Entfernungen

- Das `<menuitem>` HTML-Element ist nicht mehr verfügbar — es wurde hinter dem `dom.menuitem.enabled flag` versteckt. ([Firefox Bug 1680596](https://bugzil.la/1680596)).

### CSS

- Die {{cssxref(":focus-visible")}} Pseudoklasse ist jetzt aktiviert. ([Firefox Bug 1445482](https://bugzil.la/1445482)).
- Der `pinch-zoom` Wert für die {{cssxref("touch-action")}} Eigenschaft ist jetzt aktiviert. ([Firefox Bug 1329241](https://bugzil.la/1329241)).

### JavaScript

- Die `collation` Eigenschaft kann jetzt in den Optionen angegeben werden, die dem [`Intl.Collator()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) übergeben werden ([Firefox Bug 1670062](https://bugzil.la/1670062)). Dies ermöglicht es Entwicklern, Code mit größerer Klarheit zu schreiben:

  ```js
  // Old method
  let pinyin = new Intl.Collator(["zh-u-co-pinyin"]);
  // New method
  let pinyin = new Intl.Collator("zh", { collation: "pinyin" });
  ```

### Plugins

- Flash-Unterstützung wurde vollständig aus Firefox entfernt ([Firefox Bug 1675349](https://bugzil.la/1675349)).

### APIs

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Ein potenzieller Timeout bei Seitenladungen wurde behoben, wenn `WebDriver:ElementClick` für einen Link mit einem `target` ungleich `_blank` aufgerufen wird ([Firefox Bug 1678455](https://bugzil.la/1678455)).
- Die Verwendung von Web-Element-Referenzen auf anderen Browsing-Kontexten als dem Ursprünglichen gibt nun korrekt einen `no such element` Fehler anstelle eines `stale element reference` Fehlers zurück ([Firefox Bug 1684827](https://bugzil.la/1684827)).

#### Bekannte Fehler

- WebDriver-Befehle nach einem Aufruf von `WebDriver:SwitchToFrame` können mit einem "no such window" Fehler fehlschlagen, wenn der Inhalt des Frames noch nicht vollständig geladen ist ([Firefox Bug 1691348](https://bugzil.la/1691348)).
- Nach einer [Cross-Group-Seitennavigation](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) kann der Zugriff auf ein zuvor abgerufenes Element manchmal keinen "stale element" Fehler auslösen und stattdessen zu einem "no such element" Fehler führen. Um dies zu verhindern, setzen Sie die `marionette.actors.enabled` Präferenz auf `false` ([Firefox Bug 1690308](https://bugzil.la/1690308)).

## Änderungen für Add-on-Entwickler

_Keine Änderungen._

## Ältere Versionen

{{Firefox_for_developers}}
