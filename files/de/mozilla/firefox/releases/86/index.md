---
title: Firefox 86 für Entwickler
slug: Mozilla/Firefox/Releases/86
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel informiert über die Änderungen in Firefox 86, die Entwickler betreffen werden. Firefox 86 wurde am 23. Februar 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [A Fabulous February Firefox — 86!](https://hacks.mozilla.org/2021/02/a-fabulous-february-firefox-86/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die `cd()` [Hilfsfunktion der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/helpers/index.html), die in Firefox 74 veraltet war, wurde nun entfernt. Das `<iframe>`-Kontextauswahl-Tool, beschrieben in [Arbeiten mit iframes](https://firefox-source-docs.mozilla.org/devtools-user/working_with_iframes/index.html), erfüllt den gleichen Zweck, ist jedoch viel besser! Weitere Informationen finden Sie in [Firefox-Bug 1607741](https://bugzil.la/1607741).
- Die verschiedenen {{cssxref("margin")}} und {{cssxref("padding")}} Kurz- und Langformeigenschaften sind nun bei internen Tabellenelementen als inaktiv markiert, da sie dort keine Wirkung haben. ([Firefox-Bug 1551569](https://bugzil.la/1551569)).
- Die {{cssxref("order")}}-Eigenschaft war zuvor fälschlicherweise als inaktiv für Gitterobjekte markiert. Dies wurde in [Firefox-Bug 1579017](https://bugzil.la/1579017) behoben.

### HTML

_Keine Änderungen._

### SVG

- SVG-Filter können nun das {{SVGElement("feComposite")}}-Element mit dem [`lighter`-Operator](/de/docs/Web/SVG/Reference/Attribute/operator#fecomposite) verwenden ([Firefox-Bug 1518099](https://bugzil.la/1518099)). Dieser Operator summiert die Pixel von zwei Quellgrafiken.

### CSS

- Die {{cssxref(":autofill")}}-Pseudoklasse ist jetzt aktiviert, mit `-webkit-autofill` als Alias ([Firefox-Bug 1685675](https://bugzil.la/1685675)) und ([Firefox-Bug 1475316](https://bugzil.la/1475316)).
- Die {{cssxref("list-style-image")}}-Eigenschaft akzeptiert nun jedes gültige {{cssxref("image")}} ([Firefox-Bug 1685078](https://bugzil.la/1685078)).

### JavaScript

- Das eingebaute Objekt [`Intl.DisplayNames`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames) wurde standardmäßig aktiviert. Dies ermöglicht die konsistente Übersetzung von Sprach-, Regions- und Skriptanzeigennamen:

  ```js
  // Get English currency code display names
  let currencyNames = new Intl.DisplayNames(["en"], { type: "currency" });
  // Get currency names
  currencyNames.of("USD"); // "US Dollar"
  currencyNames.of("EUR"); // "Euro"
  ```

  Weitere Informationen finden Sie in [Firefox-Bug 1654116](https://bugzil.la/1654116).

### APIs

#### DOM

- [`Window.name`](/de/docs/Web/API/Window/name) wird nun auf einen leeren String zurückgesetzt, wenn ein Tab eine Seite von einer anderen Domain lädt und wird wiederhergestellt, wenn die ursprüngliche Seite neu geladen wird (z.B. durch Auswahl des "Zurück"-Buttons). Dies verhindert, dass eine nicht vertrauenswürdige Seite auf Informationen zugreift, die die vorherige Seite möglicherweise in der Eigenschaft gespeichert hat (eventuell könnte die neue Seite solche Daten auch ändern, die dann von der ursprünglichen Seite gelesen werden könnten, wenn diese neu geladen wurde). Weitere Informationen finden Sie in [Firefox-Bug 1685089](https://bugzil.la/1685089).
- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) unterstützt jetzt die `signal`-Option. Diese Option ermöglicht es, ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) an die Methode zu übergeben. Das `AbortSignal` kann später verwendet werden, um den Listener durch Aufrufen von `abort()` zu entfernen. Weitere Informationen finden Sie in [Firefox-Bug 1679204](https://bugzil.la/1679204).

### WebDriver-Konformität (Marionette)

- `WebDriver:ElementClick` wurde aktualisiert, um ein `mousemove`-Ereignis vor dem eigentlichen `click`-Ereignis zu synthetisieren ([Firefox-Bug 1684002](https://bugzil.la/1684002)).

#### Bekannte Fehler

- WebDriver-Befehle, die einem Aufruf von `WebDriver:SwitchToFrame` folgen, können mit einem "no such window"-Fehler fehlschlagen, wenn der Inhalt des Frames noch nicht vollständig geladen ist ([Firefox-Bug 1691348](https://bugzil.la/1691348)).
- Nach einer [Navigation zwischen Gruppen](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) kann der Zugriff auf ein zuvor abgerufenes Element nicht immer einen "stale element"-Fehler auslösen und kann auch zu einem "no such element"-Fehler führen. Um dies zu verhindern, setzen Sie die `marionette.actors.enabled`-Einstellung auf `false` ([Firefox-Bug 1690308](https://bugzil.la/1690308)).

#### Entfernungen

- Unterstützung für die veralteten Befehle `Marionette:ActionChain` und `Marionette:MultiAction` wurde entfernt ([Firefox-Bug 1683755](https://bugzil.la/1683755)).

## Änderungen für Add-on-Entwickler

- [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) gewähren jetzt Zugriff auf privilegierte Teile der [tabs API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) ([Firefox-Bug 1679688](https://bugzil.la/1679688)).
- `focused: false` wird jetzt ignoriert, wenn es als Option in einem [`windows.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/create)-Aufruf gesetzt ist ([Firefox-Bug 1253129](https://bugzil.la/1253129)).
- {{WebExtAPIRef("identity.getRedirectURL")}} unterstützt jetzt eine Loopback-Adresse, siehe [Erhalten der Redirect-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) für Details ([Firefox-Bug 1614919](https://bugzil.la/1614919)).
- Die Seiten-ID wird nun als Teil von {{WebExtAPIRef("history.onTitleChanged")}} zurückgegeben ([Firefox-Bug 1678611](https://bugzil.la/1678611)).

## Ältere Versionen

{{Firefox_for_developers}}
