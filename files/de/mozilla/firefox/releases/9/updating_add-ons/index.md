---
title: Aktualisierung von Add-ons für Firefox 9
slug: Mozilla/Firefox/Releases/9/Updating_add-ons
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Firefox 9 enthält nicht viele Änderungen, die für Add-on-Entwickler Kompatibilitätsprobleme verursachen sollten. Es gibt jedoch einige mögliche Punkte, die Sie beachten sollten, also lassen Sie uns einen Blick darauf werfen.

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on über [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) verteilt wird, wurde es von einem automatisierten Tool zur Überprüfung der Kompatibilität geprüft. Add-ons, die keine in Firefox 8 geänderten APIs verwenden und keine binären Komponenten haben (die für jede größere Firefox-Version neu kompiliert werden müssen), wurden auf AMO automatisch aktualisiert, um anzuzeigen, dass sie in Firefox 9 funktionieren.

Sie sollten also zunächst AMO besuchen und prüfen, ob Ihr Add-on überhaupt Anpassungen benötigt.

> [!NOTE]
> Sie sollten Ihr Add-on trotzdem in Firefox 9 testen, auch wenn es automatisch aktualisiert wurde. Es gibt spezielle Fälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen erforderlich sind, kommen Sie bitte auf diese Seite zurück und lesen Sie weiter.

## Initialisierte Add-ons können verzögert geladene Skripte entfernen

Wenn Ihr Add-on `nsIChromeFrameMessageManager.loadFrameScript()` mit dem verzögerten Ladeflag verwendet, wird das Skript in jedem ab diesem Zeitpunkt erstellten Frame geladen. Dies ist vorteilhaft, allerdings gab es bis Firefox 9 keine Möglichkeit, das Laden des Skripts zu stoppen, sodass es weiterhin geladen würde, selbst nachdem Ihr Add-on heruntergefahren wurde.

Ab Firefox 9 sollten Sie die neue Methode `nsIChromeFrameMessageManager.removeDelayedFrameScript()` aufrufen, um das Laden Ihres Skripts in neu erstellten Frames zu stoppen. Sie tun dies zum Beispiel folgendermaßen:

```js
browser.messageManager.removeDelayedFrameScript(
  "chrome://myextension/content/somescript.js",
);
```

## Schnittstellenänderungen

- Die `nsIURL`-Schnittstelle wurde etwas geändert. Das Attribut `nsIURL.param` wurde entfernt, und die Methode `nsIURLParser.parsePath()` hat zwei Argumente weniger als zuvor.
- Zwei Methoden wurden aus `nsIBrowserHistory` entfernt: `registerOpenPage()` und `unregisterOpenPage()`. Diese Methoden waren veraltet.
- Die Methode `nsIEditorSpellCheck.saveDefaultDictionary()` wurde entfernt, um die Unterstützung von Rechtschreibprüfungen pro Website zu ermöglichen. Außerdem nimmt `nsIEditorSpellCheck.updateCurrentDictionary()` kein Argument mehr an.
- Die Schnittstelle `nsIGlobalHistory3` wurde entfernt. Ihre Funktionalität war für Add-ons von begrenztem (wenn überhaupt) Nutzen, sodass dies niemanden betreffen sollte.
- Die Eigenschaftenattribute mehrerer spezialisierter Kanäle wurden in die Basisschnittstelle `nsIChannel` integriert. Das sollte die Kompatibilität überhaupt nicht beeinträchtigen, da diese Schnittstellen ohnehin von `nsIChannel` erben.

## Änderungen an den Einstellungen

Die `geo.wifi.*`-Einstellungen haben keine Standardwerte mehr, sie werden jedoch beachtet, wenn sie vorhanden sind. Wenn Ihr Code diese liest, ohne den Fall zu berücksichtigen, dass sie nicht existieren, müssen Sie Ihren Code aktualisieren, um den Ausnahmefall zu behandeln, der ausgelöst wird, wenn sie nicht vorhanden sind.

## XPConnect-Änderungen

`nodePrincipal` und `baseURIObject` wurden von `nsDOMClassInfo` zu `XrayWrapper` verschoben. Dies sollte nicht viele Add-ons betreffen, da es nur ein Problem wäre, wenn sie versuchen, auf diese Eigenschaften bei DOM [`Node`](/de/docs/Web/API/Node)-Objekten aus nicht privilegierten Skripten zuzugreifen, die XPConnect-Berechtigungen mit `enablePrivilege()` angefordert haben.

## DOM-Änderungen

- Die lange veraltete Methode `Navigator.taintEnabled()` wurde entfernt. Diese hat seit langem nichts Nützliches mehr bewirkt, wurde aber häufig in Skripten zur Browsererkennung verwendet, da sie Netscape-spezifisch war. Das Aufrufen dieser Methode löst ab Firefox 9 eine Ausnahme aus.
- Event-Handler werden jetzt als standardmäßige IDL-Schnittstellen implementiert. In den meisten Fällen wird dies keine Auswirkungen auf Sie haben, aber [es gibt Ausnahmen](/de/docs/Web/Events/Event_handlers#event_handler_changes_in_firefox_9).

## Weitere Änderungen, die die binäre Kompatibilität betreffen können

Diese Änderungen sind bemerkenswert, da sie binäre XPCOM-Komponenten betreffen können. Diese müssen ohnehin neu kompiliert werden, da dies bei jeder wichtigen Veröffentlichung von Firefox erforderlich ist, könnten aber zu Kompilierungsfehlern führen, daher sollten sie besonders beachtet werden.

- Die `nsIDOMHTMLDocument`-Schnittstelle hat jetzt ein neues `scripts`-Attribut, das das [`Document.scripts`](/de/docs/Web/API/Document/scripts)-Attribut implementiert.
- Die Methode `nsIJumpListShortcut.iconImageUri()` wurde hinzugefügt, um es zu ermöglichen, Favicons auf Jump-List-URI-Einträgen unter Windows festzulegen.

## Theme-Änderungen

Das Attribut `pending` wurde dem `<tab>`-Element hinzugefügt. Wenn dieses Attribut vorhanden ist, wird der Tab gerade durch den Sitzungswiederherstellungsdienst wiederhergestellt. Sie können dieses Attribut verwenden, um den Tab während des Wiederherstellungsvorgangs zu stylen. Es ist erwähnenswert, dass, wenn der Benutzer die Einstellung "Tabs erst laden, wenn sie ausgewählt sind" aktiviert hat, das `pending`-Attribut auf Tabs gesetzt wird, bis sie geladen werden.

Ähnlich dazu haben Tabs jetzt auch ein `unread`-Attribut; diese Eigenschaft gibt an, dass sich der Tab seit dem letzten Mal, als er aktiv war, geändert hat. Sie können dies verwenden, um Tabs unterschiedlich zu stylen, wenn sie sich geändert haben, seit der Benutzer sie das letzte Mal angesehen hat. Dies ist auch bei Tabs der Fall, die während der aktuellen Sitzung noch nicht betrachtet wurden.
