---
title: Firefox 86 für Entwickler
slug: Mozilla/Firefox/Releases/86
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 86, die Entwickler betreffen werden. Firefox 86 wurde am 23. Februar 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [A Fabulous February Firefox — 86!](https://hacks.mozilla.org/2021/02/a-fabulous-february-firefox-86/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die `cd()` [Webkonsolen-Hilfsfunktion](https://firefox-source-docs.mozilla.org/devtools-user/web_console/helpers/index.html), die in Firefox 74 als veraltet markiert wurde, wurde nun entfernt. Das `<iframe>`-Kontextauswahlwerkzeug, das in [Arbeiten mit iframes](https://firefox-source-docs.mozilla.org/devtools-user/working_with_iframes/index.html) beschrieben wird, erfüllt den gleichen Zweck, ist aber viel besser! Für weitere Informationen siehe [Firefox Fehler 1607741](https://bugzil.la/1607741).
- Die verschiedenen {{cssxref("margin")}}- und {{cssxref("padding")}}-Kurz- und Langform-Eigenschaften sind nun als inaktiv bei internen Tabellenelementen markiert, da sie auf diese keine Wirkung haben. ([Firefox Fehler 1551569](https://bugzil.la/1551569)).
- Die {{cssxref("order")}}-Eigenschaft war zuvor fälschlicherweise als inaktiv für Gitter-Elemente markiert. Dies wurde in [Firefox Fehler 1579017](https://bugzil.la/1579017) behoben.

### HTML

_Keine Änderungen._

### SVG

- SVG-Filter können nun das {{SVGElement("feComposite")}}-Element mit dem [`lighter`-Operator](/de/docs/Web/SVG/Attribute/operator#fecomposite) verwenden ([Firefox Fehler 1518099](https://bugzil.la/1518099)). Dieser Operator summiert die Pixel zweier Quellgrafiken.

### CSS

- Die {{cssxref(":autofill")}}-Pseudoklasse ist nun aktiviert, mit `-webkit-autofill` als Alias ([Firefox Fehler 1685675](https://bugzil.la/1685675)) und ([Firefox Fehler 1475316](https://bugzil.la/1475316)).
- Die {{cssxref("list-style-image")}}-Eigenschaft akzeptiert nun jedes gültige {{cssxref("image")}} ([Firefox Fehler 1685078](https://bugzil.la/1685078)).

### JavaScript

- Das eingebaute Objekt [`Intl.DisplayNames`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames) ist nun standardmäßig aktiviert. Dies ermöglicht die konsistente Übersetzung von Sprach-, Regions- und Skriptdarstellungsnamen:

  ```js
  // Get English currency code display names
  let currencyNames = new Intl.DisplayNames(["en"], { type: "currency" });
  // Get currency names
  currencyNames.of("USD"); // "US Dollar"
  currencyNames.of("EUR"); // "Euro"
  ```

  Für weitere Informationen siehe [Firefox Fehler 1654116](https://bugzil.la/1654116).

### APIs

#### DOM

- [`Window.name`](/de/docs/Web/API/Window/name) wird nun auf einen leeren String zurückgesetzt, wenn ein Tab eine Seite von einer anderen Domain lädt, und wiederhergestellt, wenn die ursprüngliche Seite neu geladen wird (z. B. durch Auswählen der "Zurück"-Taste). Dies verhindert, dass eine nicht vertrauenswürdige Seite auf Informationen zugreift, die die vorherige Seite möglicherweise in der Eigenschaft gespeichert hat (möglicherweise könnte die neue Seite solche Daten auch ändern, die dann von der Originalseite gelesen werden könnten, wenn sie neu geladen wird). Für weitere Informationen siehe [Firefox Fehler 1685089](https://bugzil.la/1685089).
- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) unterstützt nun die `signal`-Option. Diese Option erlaubt es, ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) der Methode zu übergeben. Das `AbortSignal` kann später verwendet werden, um den Listener durch Aufruf von `abort()` zu entfernen. Für weitere Informationen siehe [Firefox Fehler 1679204](https://bugzil.la/1679204).

### WebDriver-Konformität (Marionette)

- `WebDriver:ElementClick` wurde aktualisiert, um ein `mousemove`-Ereignis vor dem eigentlichen `click`-Ereignis zu synthetisieren ([Firefox Fehler 1684002](https://bugzil.la/1684002)).

#### Bekannte Fehler

- WebDriver-Befehle, die einem Aufruf von `WebDriver:SwitchToFrame` folgen, können mit einem Fehler "kein solches Fenster" fehlschlagen, wenn der Inhalt des Frames noch nicht vollständig geladen ist ([Firefox Fehler 1691348](https://bugzil.la/1691348)).
- Nach einer [Cross-Group-Seitennavigation](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) könnte der Zugriff auf ein zuvor abgerufenes Element nicht immer einen "stale element"-Fehler auslösen, und kann auch zu einem "no such element"-Fehler führen. Um dies zu verhindern, setzen Sie die `marionette.actors.enabled`-Einstellung auf `false` ([Firefox Fehler 1690308](https://bugzil.la/1690308)).

#### Entfernungen

- Unterstützung für die veralteten `Marionette:ActionChain`- und `Marionette:MultiAction`-Befehle entfernt ([Firefox Fehler 1683755](https://bugzil.la/1683755)).

## Änderungen für Add-on-Entwickler

- [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) gewähren nun Zugriff auf privilegierte Teile der [tabs API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) ([Firefox Fehler 1679688](https://bugzil.la/1679688)).
- `focused: false` wird nun ignoriert, wenn es als Option in einem [`windows.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/create)-Aufruf gesetzt ist ([Firefox Fehler 1253129](https://bugzil.la/1253129)).
- {{WebExtAPIRef("identity.getRedirectURL")}} unterstützt nun eine Loopback-Adresse, siehe [Abrufen der Umleitungs-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) für Details ([Firefox Fehler 1614919](https://bugzil.la/1614919)).
- Die Seiten-ID wird nun als Teil von {{WebExtAPIRef("history.onTitleChanged")}} zurückgegeben ([Firefox Fehler 1678611](https://bugzil.la/1678611)).

## Ältere Versionen

{{Firefox_for_developers}}
