---
title: Firefox 86 Versionshinweise für Entwickler
short-title: Firefox 86
slug: Mozilla/Firefox/Releases/86
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen zu Änderungen in Firefox 86, die Entwickler betreffen werden. Firefox 86 wurde am 23. Februar 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [A Fabulous February Firefox — 86!](https://hacks.mozilla.org/2021/02/a-fabulous-february-firefox-86/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklertools

- Die `cd()` [Konsolen-Hilfsfunktion](https://firefox-source-docs.mozilla.org/devtools-user/web_console/helpers/index.html), die in Firefox 74 als veraltet markiert wurde, wurde nun entfernt. Das `<iframe>` Kontext-Auswahlwerkzeug, das in [Working with iframes](https://firefox-source-docs.mozilla.org/devtools-user/working_with_iframes/index.html) beschrieben wird, erfüllt denselben Zweck, ist aber viel besser! Weitere Informationen finden Sie in [Firefox Bug 1607741](https://bugzil.la/1607741).
- Die verschiedenen {{cssxref("margin")}} und {{cssxref("padding")}} Kurz- und Langform-Eigenschaften sind jetzt als inaktiv auf internen Tabellenelementen markiert, da sie keine Auswirkung auf diese haben. ([Firefox Bug 1551569](https://bugzil.la/1551569)).
- Die {{cssxref("order")}} Eigenschaft wurde zuvor fälschlicherweise als inaktiv für Raster-Elemente markiert. Dies wurde in [Firefox Bug 1579017](https://bugzil.la/1579017) behoben.

### HTML

_Keine Änderungen._

### SVG

- SVG-Filter können jetzt das {{SVGElement("feComposite")}} Element mit dem [`lighter` Operator](/de/docs/Web/SVG/Reference/Attribute/operator#fecomposite) ([Firefox Bug 1518099](https://bugzil.la/1518099)) verwenden. Dieser Operator summiert die Pixel von zwei Quellgrafiken.

### CSS

- Die {{cssxref(":autofill")}} Pseudoklasse ist jetzt aktiviert, mit `-webkit-autofill` als Alias ([Firefox Bug 1685675](https://bugzil.la/1685675)) und ([Firefox Bug 1475316](https://bugzil.la/1475316)).
- Die {{cssxref("list-style-image")}} Eigenschaft akzeptiert jetzt jedes gültige {{cssxref("image")}} ([Firefox Bug 1685078](https://bugzil.la/1685078)).

### JavaScript

- Das [`Intl.DisplayNames`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames) eingebaute Objekt wurde standardmäßig aktiviert. Dies ermöglicht die konsistente Übersetzung von Sprach-, Regions- und Skriptanzeigennamen:

  ```js
  // Get English currency code display names
  let currencyNames = new Intl.DisplayNames(["en"], { type: "currency" });
  // Get currency names
  currencyNames.of("USD"); // "US Dollar"
  currencyNames.of("EUR"); // "Euro"
  ```

  Weitere Informationen finden Sie in [Firefox Bug 1654116](https://bugzil.la/1654116).

### APIs

#### DOM

- [`Window.name`](/de/docs/Web/API/Window/name) wird jetzt auf einen leeren String zurückgesetzt, wenn ein Tab eine Seite von einer anderen Domain lädt, und wird wiederhergestellt, wenn die ursprüngliche Seite neu geladen wird (z. B. durch Drücken der „Zurück“-Taste). Dies verhindert, dass eine nicht vertrauenswürdige Seite auf Informationen zugreift, die die vorherige Seite möglicherweise in der Eigenschaft gespeichert hat (potenziell könnte die neue Seite auch solche Daten ändern, die dann von der ursprünglichen Seite gelesen werden könnten, wenn sie neu geladen wurde). Weitere Informationen finden Sie in [Firefox Bug 1685089](https://bugzil.la/1685089).
- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) unterstützt jetzt die `signal` Option. Diese Option ermöglicht es, ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) an die Methode zu übergeben. Das `AbortSignal` kann später verwendet werden, um den Listener durch Aufruf von `abort()` zu entfernen. Weitere Informationen finden Sie in [Firefox Bug 1679204](https://bugzil.la/1679204).

### WebDriver-Konformität (Marionette)

- `WebDriver:ElementClick` wurde aktualisiert, um vor dem eigentlichen `click` Ereignis ein `mousemove` Ereignis zu synthetisieren ([Firefox Bug 1684002](https://bugzil.la/1684002)).

#### Bekannte Fehler

- WebDriver-Befehle nach einem Aufruf von `WebDriver:SwitchToFrame` können mit einem „Kein solches Fenster“-Fehler fehlschlagen, wenn der Inhalt des Frames noch nicht vollständig geladen ist ([Firefox Bug 1691348](https://bugzil.la/1691348)).
- Nach einer [Cross-Group-Seitennavigation](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) kann der Zugriff auf ein zuvor abgerufenes Element nicht immer einen „Obsoletes Element“-Fehler auslösen und kann auch zu einem „Kein solches Element“-Fehler führen. Um dies zu verhindern, setzen Sie die `marionette.actors.enabled` Präferenz auf `false` ([Firefox Bug 1690308](https://bugzil.la/1690308)).

#### Entfernungen

- Unterstützung für die veralteten Befehle `Marionette:ActionChain` und `Marionette:MultiAction` wurde entfernt ([Firefox Bug 1683755](https://bugzil.la/1683755)).

## Änderungen für Add-on-Entwickler

- [Hostberechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) gewähren jetzt Zugriff auf privilegierte Teile der [tabs-API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) ([Firefox Bug 1679688](https://bugzil.la/1679688)).
- `focused: false` wird jetzt ignoriert, wenn es als Option in einem [`windows.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/create) Aufruf gesetzt wird ([Firefox Bug 1253129](https://bugzil.la/1253129)).
- {{WebExtAPIRef("identity.getRedirectURL")}} unterstützt jetzt eine Loopback-Adresse, siehe [Abrufen der Umleitungs-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) für Details ([Firefox Bug 1614919](https://bugzil.la/1614919)).
- Die Seiten-ID wird jetzt als Teil von {{WebExtAPIRef("history.onTitleChanged")}} zurückgegeben ([Firefox Bug 1678611](https://bugzil.la/1678611)).
