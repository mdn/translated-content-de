---
title: Firefox 85 für Entwickler
slug: Mozilla/Firefox/Releases/85
l10n:
  sourceCommit: 25544baf59024e6b33879f4b303acf4539a94415
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 85, die Entwickler betreffen. Firefox 85 wurde am 26. Januar 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [January brings us Firefox 85](https://hacks.mozilla.org/2021/01/january-brings-us-firefox-85/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwickler-Tools

- Entwickler können jetzt den [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-common-pseudo-classes) verwenden, um die Pseudo-Klasse {{cssxref(":focus-visible")}} für das aktuell ausgewählte Element umzuschalten (zusätzlich zu den zuvor unterstützten Pseudo-Klassen: {{cssxref(":hover")}}, {{cssxref(":active")}} und {{cssxref(":focus")}}, {{cssxref(":focus-within")}}, und {{cssxref(":visited")}}). ([Firefox Fehler 1617608](https://bugzil.la/1617608)).

### HTML

- [`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload) ist jetzt aktiviert. ([Firefox Fehler 1626997](https://bugzil.la/1626997)).

#### Entfernungen

- Das `<menuitem>` HTML-Element ist nicht mehr verfügbar — es wurde hinter der Einstellung `dom.menuitem.enabled flag` verborgen. ([Firefox Fehler 1680596](https://bugzil.la/1680596)).

### CSS

- Die Pseudo-Klasse {{cssxref(":focus-visible")}} ist jetzt aktiviert. ([Firefox Fehler 1445482](https://bugzil.la/1445482)).
- Der Wert `pinch-zoom` für die Eigenschaft {{cssxref("touch-action")}} ist jetzt aktiviert. ([Firefox Fehler 1329241](https://bugzil.la/1329241)).

### JavaScript

- Die `collation` Eigenschaft kann jetzt in den Optionen angegeben werden, die an den [`Intl.Collator()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) übergeben werden ([Firefox Fehler 1670062](https://bugzil.la/1670062)). Dies ermöglicht es Entwicklern, Code mit größerer Klarheit zu schreiben:

  ```js
  // Old method
  let pinyin = new Intl.Collator(["zh-u-co-pinyin"]);
  // New method
  let pinyin = new Intl.Collator("zh", { collation: "pinyin" });
  ```

### Plugins

- Die Unterstützung für Flash wurde vollständig aus Firefox entfernt ([Firefox Fehler 1675349](https://bugzil.la/1675349)).

### APIs

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Ein potenzielles Time-out-Problem beim Seitenladen wurde behoben, wenn `WebDriver:ElementClick`
  für einen Link mit einem `target`, der nicht `_blank` ist, aufgerufen wird ([Firefox Fehler 1678455](https://bugzil.la/1678455)).
- Die Verwendung von Web-Element-Referenzen auf anderen Browsing-Kontexten als dem Ursprünglichen gibt nun korrekt einen `no such element` Fehler anstelle eines `stale element reference` Fehlers zurück ([Firefox Fehler 1684827](https://bugzil.la/1684827)).

#### Bekannte Fehler

- WebDriver-Befehle, die einem Aufruf von `WebDriver:SwitchToFrame` folgen, können mit einem "no such window"-Fehler fehlschlagen, wenn der Inhalt des Frames noch nicht vollständig geladen ist ([Firefox Fehler 1691348](https://bugzil.la/1691348)).
- Nach einer [Seiten-Navigation zwischen Gruppen](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) könnte das Zugreifen auf ein zuvor abgerufenes Element möglicherweise nicht immer einen "stale element"-Fehler auslösen und kann auch zu einem "no such element"-Fehler führen. Um dies zu verhindern, setzen Sie die `marionette.actors.enabled` Einstellung auf `false` ([Firefox Fehler 1690308](https://bugzil.la/1690308)).

## Änderungen für Add-on-Entwickler

_Keine Änderungen._

## Ältere Versionen

{{Firefox_for_developers}}
