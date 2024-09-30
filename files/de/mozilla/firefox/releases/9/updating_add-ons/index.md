---
title: Aktualisieren von Add-ons für Firefox 9
slug: Mozilla/Firefox/Releases/9/Updating_add-ons
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Firefox 9 bringt nicht viele Änderungen mit sich, die für Add-on-Entwickler zu Kompatibilitätsproblemen führen könnten. Es gibt jedoch einige potenzielle Punkte, die Stolpersteine sein könnten, daher schauen wir sie uns im Detail an.

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on auf [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) verteilt wird, wurde es von einem automatisierten Kompatibilitätsprüfungstool überprüft. Add-ons, die keine geänderten APIs in Firefox 8 verwenden und keine binären Komponenten enthalten (die für jede größere Firefox-Version neu kompiliert werden müssen), wurden auf AMO automatisch aktualisiert, um anzuzeigen, dass sie in Firefox 9 funktionieren.

Sie sollten also zuerst AMO besuchen und prüfen, ob Ihr Add-on überhaupt Arbeit erfordert.

> [!NOTE]
> Sie sollten Ihr Add-on dennoch in Firefox 9 testen, auch wenn es automatisch aktualisiert wurde. Es gibt Randfälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen erforderlich sind, kehren Sie zu dieser Seite zurück und lesen Sie weiter.

## Add-ons mit schnellem Start können verzögerte Ladeskripte entfernen

Wenn Ihr Add-on `nsIChromeFrameMessageManager.loadFrameScript()` mit gesetztem verzögert-Laden-Flag verwendet, wird das Skript in jeden ab diesem Zeitpunkt erstellten Frame geladen. Das ist großartig, außer dass es bis Firefox 9 keine Möglichkeit gab, das Laden des Skripts zu stoppen, sodass es auch nach dem Herunterfahren Ihres Add-ons weiterhin geladen wurde.

Ab Firefox 9 sollten Sie die neue Methode `nsIChromeFrameMessageManager.removeDelayedFrameScript()` aufrufen, um das Laden Ihres Skripts in neu erstellten Frames zu stoppen. Zum Beispiel so:

```js
browser.messageManager.removeDelayedFrameScript(
  "chrome://myextension/content/somescript.js",
);
```

## Schnittstellenänderungen

- Die `nsIURL`-Schnittstelle wurde etwas verändert. Das Attribut `nsIURL.param` wurde entfernt, und die Methode `nsIURLParser.parsePath()` hat zwei Argumente weniger als zuvor.
- Zwei Methoden wurden aus `nsIBrowserHistory` entfernt: `registerOpenPage()` und `unregisterOpenPage()`. Diese Methoden waren veraltet.
- Die Methode `nsIEditorSpellCheck.saveDefaultDictionary()` wurde im Rahmen des Supports für pro-Seite-Rechtschreibprüfungseinstellungen entfernt. Außerdem nimmt `nsIEditorSpellCheck.updateCurrentDictionary()` keinen Parameter mehr an.
- Die `nsIGlobalHistory3`-Schnittstelle wurde entfernt. Ihre Funktionen waren für Add-ons von begrenztem (falls überhaupt) Nutzen, daher sollte dies niemanden betreffen.
- Die Attribute der Eigenschaften mehrerer spezialisierter Kanäle wurden in die Basis- `nsIChannel`-Schnittstelle zusammengeführt. Dies sollte die Kompatibilität überhaupt nicht beeinträchtigen, da diese Schnittstellen ohnehin von `nsIChannel` erben.

## Einstellungsänderungen

Die `geo.wifi.*`-Einstellungen haben keine Standardwerte mehr, obwohl sie berücksichtigt werden, wenn sie vorhanden sind. Wenn Ihr Code diese liest, ohne den Fall zu behandeln, dass sie nicht existieren, müssen Sie Ihren Code aktualisieren, um die Ausnahme zu bewältigen, die ausgelöst wird, wenn sie nicht vorhanden sind.

## XPConnect Änderungen

`nodePrincipal` und `baseURIObject` wurden von `nsDOMClassInfo` zu `XrayWrapper` verschoben. Dies sollte viele Add-ons nicht betreffen, da es nur ein Problem wäre, wenn sie versuchen, auf diese Eigenschaften bei DOM-`Node`-Objekten von einem nicht privilegierten Skript zuzugreifen, das XPConnect-Berechtigungen mit `enablePrivilege()` angefordert hat.

## DOM Änderungen

- Die längst überholte Methode `Navigator.taintEnabled()` wurde entfernt. Diese hat seit langer Zeit nichts Nützliches mehr getan, wurde aber oft in Browser-Erkennungsskripten verwendet, da sie Netscape-spezifisch war. Das Aufrufen dieser Methode führt ab Firefox 9 zu einer Ausnahme.
- Ereignishandler sind jetzt als standardmäßige IDL-Schnittstellen implementiert. In den meisten Fällen wird dies keinen Einfluss auf Sie haben, aber [es gibt Ausnahmen](/de/docs/Web/Events/Event_handlers#event_handler_changes_in_firefox_9).

## Weitere Änderungen, die die binäre Kompatibilität beeinflussen können

Diese Änderungen sind bemerkenswert, da sie binäre XPCOM-Komponenten beeinflussen können. Diese müssen ohnehin neu kompiliert werden, da dies für jede Hauptversion von Firefox erforderlich ist, könnten jedoch zu Kompilierfehlern führen, daher sollten sie besonders beachtet werden.

- Die `nsIDOMHTMLDocument`-Schnittstelle hat jetzt ein neues `scripts`-Attribut, das das [`Document.scripts`](/de/docs/Web/API/Document/scripts)-Attribut implementiert.
- Die Methode `nsIJumpListShortcut.iconImageUri()` wurde hinzugefügt, um die Möglichkeit zu schaffen, Favicons bei Jump List URI-Einträgen unter Windows einzurichten.

## Designänderungen

Das `pending`-Attribut wurde dem `<tab>`-Element hinzugefügt. Wenn dieses Attribut vorhanden ist, wird der Tab gerade vom Sitzungswiederherstellungsdienst wiederhergestellt. Sie können dies verwenden, um den Tab während des Wiederherstellungsprozesses zu gestalten. Es ist erwähnenswert, dass, wenn die Einstellung "Tabs nicht laden, bis sie ausgewählt sind" aktiviert ist, das `pending`-Attribut auf Tabs gesetzt wird, bis sie geladen sind.

Ähnlich haben Tabs jetzt auch ein `unread`-Attribut; diese Eigenschaft zeigt, falls vorhanden, an, dass sich der Tab seit dem letzten Mal, als er der aktive Tab war, geändert hat. Sie können dies verwenden, um Tabs, die sich geändert haben, seit der Benutzer sie zuletzt angesehen hat, anders zu gestalten. Dies ist auch bei Tabs vorhanden, die während der aktuellen Sitzung noch nicht angesehen wurden.
