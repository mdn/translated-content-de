---
title: Aktualisieren von Add-ons für Firefox 9
slug: Mozilla/Firefox/Releases/9/Updating_add-ons
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Firefox 9 hat nicht viele Änderungen, die Kompatibilitätsprobleme für Add-on-Entwickler darstellen sollten. Es gibt jedoch ein paar mögliche Punkte, die Sie überraschen könnten, daher werfen wir einen Blick darauf.

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on auf [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) verteilt wird, wurde es von einem automatisierten Tool zur Überprüfung der Kompatibilität geprüft. Add-ons, die keine APIs verwenden, die sich in Firefox 8 geändert haben und keine Binärkomponenten beinhalten (die für jede größere Firefox-Version neu kompiliert werden müssen), wurden auf AMO automatisch aktualisiert, um anzuzeigen, dass sie in Firefox 9 funktionieren.

Sie sollten also zunächst AMO besuchen und prüfen, ob Ihr Add-on überhaupt überarbeitet werden muss.

> [!NOTE]
> Sie sollten Ihr Add-on dennoch in Firefox 9 testen, auch wenn es automatisch aktualisiert wurde. Es gibt Randfälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen notwendig sind, kommen Sie zurück zu dieser Seite und lesen Sie weiter.

## Bootstrapped-Add-ons können verzögert geladene Skripte entfernen

Wenn Ihr Add-on `nsIChromeFrameMessageManager.loadFrameScript()` mit gesetztem verzögerten Ladeflag verwendet, wird das Skript in jedem ab diesem Zeitpunkt erstellten Frame geladen. Das ist großartig, aber bis Firefox 9 gab es keine Möglichkeit, das Laden des Skripts zu stoppen, sodass es weiter passiert, selbst nachdem Ihr Add-on heruntergefahren wurde.

Ab Firefox 9 sollten Sie die neue Methode `nsIChromeFrameMessageManager.removeDelayedFrameScript()` aufrufen, um das Laden Ihres Skripts in neu erstellten Frames zu stoppen. Sie tun dies beispielsweise so:

```js
browser.messageManager.removeDelayedFrameScript(
  "chrome://myextension/content/somescript.js",
);
```

## Änderungen an Schnittstellen

- Das `nsIURL` Interface wurde etwas geändert. Das Attribut `nsIURL.param` wurde entfernt, und die Methode `nsIURLParser.parsePath()` hat zwei Argumente weniger als zuvor.
- Zwei Methoden wurden aus `nsIBrowserHistory` entfernt: `registerOpenPage()` und `unregisterOpenPage()`. Diese Methoden waren veraltet.
- Die Methode `nsIEditorSpellCheck.saveDefaultDictionary()` wurde entfernt, um die Unterstützung von per-Website-Rechtschreibprüfungseinstellungen zu ermöglichen. Außerdem nimmt `nsIEditorSpellCheck.updateCurrentDictionary()` keinen Parameter mehr an.
- Das `nsIGlobalHistory3` Interface wurde entfernt. Seine Funktionalität war für Add-ons nur von begrenztem (falls überhaupt) Nutzen, daher sollte dies niemanden betreffen.
- Mehrere spezialisierte Kanalattribute wurden in das Basis-`nsIChannel` Interface integriert. Dies sollte die Kompatibilität überhaupt nicht beeinflussen, da diese Schnittstellen ohnehin von `nsIChannel` erben.

## Änderungen an Einstellungen

Die Einstellungen `geo.wifi.*` haben keine Standardwerte mehr, obwohl sie berücksichtigt werden, wenn sie existieren. Wenn Ihr Code diese liest, ohne den Fall zu berücksichtigen, dass sie nicht existieren, müssen Sie Ihren Code aktualisieren, um den Ausnahmefall zu behandeln, der ausgelöst wird, wenn sie nicht vorhanden sind.

## Änderungen in XPConnect

`nodePrincipal` und `baseURIObject` wurden von `nsDOMClassInfo` zu `XrayWrapper` verschoben. Dies sollte nicht viele Add-ons betreffen, da es nur ein Problem wäre, wenn sie versuchen, auf diese Eigenschaften auf DOM-{{ domxref("Node") }}-Objekten von nicht privilegiertem Skript aus zuzugreifen, die XPConnect-Berechtigungen mit `enablePrivilege()` angefordert haben.

## Änderungen im DOM

- Die längst veraltete Methode `Navigator.taintEnabled()` wurde entfernt. Diese hat seit langem nichts mehr Nützliches getan, wurde aber oft in Skripten zur Browsererkennung verwendet, da sie Netscape-spezifisch war. Das Aufrufen dieser Methode löst ab Firefox 9 eine Ausnahme aus.
- Ereignishandler sind jetzt als Standard-IDL-Interfaces implementiert. In den meisten Fällen wird dies keine Auswirkungen auf Sie haben, aber [es gibt Ausnahmen](/de/docs/Web/Events/Event_handlers#event_handler_changes_in_firefox_9).

## Weitere Änderungen, die die binäre Kompatibilität beeinflussen könnten

Diese Änderungen sind bemerkenswert, da sie binäre XPCOM-Komponenten beeinflussen können. Diese müssen ohnehin neu erstellt werden, da dies für jede Hauptversion von Firefox erforderlich ist, könnten jedoch Kompilierfehler einführen, daher sind sie besonders erwähnenswert.

- Das `nsIDOMHTMLDocument` Interface hat jetzt ein neues `scripts` Attribut, das das {{ domxref("Document.scripts") }} Attribut implementiert.
- Die Methode `nsIJumpListShortcut.iconImageUri()` wurde hinzugefügt, um es zu ermöglichen, Favicons für Jump-List-URI-Einträge unter Windows festzulegen.

## Änderungen am Theme

Das `pending` Attribut wurde dem `<tab>` Element hinzugefügt. Wenn dieses Attribut vorhanden ist, befindet sich der Tab im Prozess der Wiederherstellung durch den Sitzungsdienst. Sie können dies verwenden, um den Tab während des Wiederherstellungsprozesses zu stylen. Es ist erwähnenswert, dass, wenn der Benutzer die Einstellung "Tabs erst beim Auswählen laden" aktiviert hat, das `pending` Attribut auf Tabs gesetzt wird, bis sie geladen werden.

Ebenso haben Tabs jetzt auch ein `unread` Attribut; diese Eigenschaft, falls vorhanden, zeigt an, dass sich der Tab seit dem letzten Mal, als er der aktive Tab war, geändert hat. Sie können dies verwenden, um Tabs anders zu stylen, wenn sie sich seit dem letzten Betrachten durch den Benutzer geändert haben. Dies ist auch bei Tabs vorhanden, die während der aktuellen Sitzung noch nicht angesehen wurden.
