---
title: Firefox 85 Versionshinweise für Entwickler
short-title: Firefox 85
slug: Mozilla/Firefox/Releases/85
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 85, die Entwickler betreffen werden. Firefox 85 wurde am 26. Januar 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [January brings us Firefox 85](https://hacks.mozilla.org/2021/01/january-brings-us-firefox-85/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Entwickler können nun den [Seiten-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-common-pseudo-classes) verwenden, um die {{cssxref(":focus-visible")}} Pseudoklasse für das aktuell ausgewählte Element umzuschalten (zusätzlich zu den zuvor unterstützten Pseudoklassen: {{cssxref(":hover")}}, {{cssxref(":active")}}, {{cssxref(":focus")}}, {{cssxref(":focus-within")}} und {{cssxref(":visited")}}). ([Firefox Bug 1617608](https://bugzil.la/1617608)).

### HTML

- [`<link rel="preload">`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) ist jetzt aktiviert. ([Firefox Bug 1626997](https://bugzil.la/1626997)).

#### Entfernungen

- Das `<menuitem>` HTML-Element ist nicht mehr verfügbar — es wurde hinter dem `dom.menuitem.enabled` Flag verborgen. ([Firefox Bug 1680596](https://bugzil.la/1680596)).

### CSS

- Die {{cssxref(":focus-visible")}} Pseudoklasse ist jetzt aktiviert. ([Firefox Bug 1445482](https://bugzil.la/1445482)).
- Der `pinch-zoom` Wert für die {{cssxref("touch-action")}} Eigenschaft ist jetzt aktiviert. ([Firefox Bug 1329241](https://bugzil.la/1329241)).

### JavaScript

- Die `collation` Eigenschaft kann nun in den Optionen angegeben werden, die an den [`Intl.Collator()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) übergeben werden ([Firefox Bug 1670062](https://bugzil.la/1670062)). Dies ermöglicht es Entwicklern, Code mit größerer Klarheit zu schreiben:

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

### WebDriver Konformität (Marionette)

- Ein potenzielles Timeout beim Seitenladen wurde behoben, wenn `WebDriver:ElementClick` für einen Link mit einem `target` aufgerufen wird, das nicht `_blank` ist ([Firefox Bug 1678455](https://bugzil.la/1678455)).
- Die Verwendung von Web-Element-Referenzen in anderen Browsing-Kontexten als dem ursprünglichen liefert nun korrekt einen `kein solches Element` Fehler anstelle eines `veraltete Elementreferenz` Fehlers ([Firefox Bug 1684827](https://bugzil.la/1684827)).

#### Bekannte Fehler

- WebDriver-Befehle nach einem Aufruf von `WebDriver:SwitchToFrame` können mit einem "kein solches Fenster" Fehler fehlschlagen, wenn der Inhalt des Frames noch nicht vollständig geladen ist ([Firefox Bug 1691348](https://bugzil.la/1691348)).
- Nach einer [Gruppenübergreifenden Seitennavigation](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) kann der Zugriff auf ein zuvor abgerufenes Element nicht immer einen "veralteten Element" Fehler auslösen und kann auch zu einem "kein solches Element" Fehler führen. Um dies zu verhindern, setzen Sie die `marionette.actors.enabled` Präferenz auf `false` ([Firefox Bug 1690308](https://bugzil.la/1690308)).

## Änderungen für Add-on-Entwickler

_Keine Änderungen._
