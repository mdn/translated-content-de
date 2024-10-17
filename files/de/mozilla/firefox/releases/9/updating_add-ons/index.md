---
title: Aktualisierung von Add-ons für Firefox 9
slug: Mozilla/Firefox/Releases/9/Updating_add-ons
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{FirefoxSidebar}}

Firefox 9 bringt nur wenige Änderungen mit sich, die Kompatibilitätsprobleme für Add-on-Entwickler darstellen könnten. Es gibt jedoch einige potenzielle Punkte, die Sie überraschen könnten, daher schauen wir uns diese genauer an.

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on über [addons.mozilla.org](https://addons.mozilla.org/de/firefox/) (AMO) verteilt wird, wurde es von einem automatisierten Kompatibilitätsprüfungs-Tool überprüft. Add-ons, die keine in Firefox 8 geänderten APIs nutzen und keine binären Komponenten besitzen (die für jede wichtige Firefox-Version neu kompiliert werden müssen), sind auf AMO automatisch aktualisiert worden, um anzuzeigen, dass sie mit Firefox 9 funktionieren.

Sie sollten daher zunächst AMO besuchen und überprüfen, ob an Ihrem Add-on überhaupt gearbeitet werden muss.

> [!NOTE]
> Sie sollten Ihr Add-on dennoch auf Firefox 9 testen, auch wenn es automatisch aktualisiert wurde. Es gibt Randfälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen erforderlich sind, kehren Sie zu dieser Seite zurück und lesen Sie weiter.

## Bootstrapped-Add-ons können verzögert geladene Skripte entfernen

Wenn Ihr Add-on `nsIChromeFrameMessageManager.loadFrameScript()` mit dem verzögerten Ladeflag verwendet, wird das Skript in jeden ab diesem Zeitpunkt erstellten Frame geladen. Dies ist großartig, allerdings gab es bis Firefox 9 keine Möglichkeit, das Laden des Skripts zu stoppen, sodass es auch nach dem Herunterfahren Ihres Add-ons weiterhin geladen wurde.

Ab Firefox 9 sollten Sie die neue Methode `nsIChromeFrameMessageManager.removeDelayedFrameScript()` aufrufen, um das Laden Ihres Skripts in neu erstellten Frames zu stoppen. Sie gehen dazu beispielsweise folgendermaßen vor:

```js
browser.messageManager.removeDelayedFrameScript(
  "chrome://my-extension/content/some-script.js",
);
```

## Schnittstellenänderungen

- Die `nsIURL`-Schnittstelle wurde etwas verändert. Das `nsIURL.param`-Attribut wurde entfernt, und die Methode `nsIURLParser.parsePath()` hat zwei Argumente weniger als zuvor.
- Zwei Methoden wurden aus `nsIBrowserHistory` entfernt: `registerOpenPage()` und `unregisterOpenPage()`. Diese Methoden waren veraltet.
- Die Methode `nsIEditorSpellCheck.saveDefaultDictionary()` wurde als Teil der Unterstützung von site-spezifischen Rechtschreibprüfungseinstellungen entfernt. Außerdem nimmt `nsIEditorSpellCheck.updateCurrentDictionary()` keinen Parameter mehr entgegen.
- Die `nsIGlobalHistory3`-Schnittstelle wurde entfernt. Ihre Funktionalität war für Add-ons von begrenztem (wenn überhaupt vorhandenen) Nutzen, daher sollte dies niemanden betreffen.
- Mehrere Attribute der spezialisierten Kanäle wurden in die Basisschnittstelle `nsIChannel` zusammengeführt. Dies sollte die Kompatibilität überhaupt nicht beeinträchtigen, da diese Schnittstellen ohnehin von `nsIChannel` erben.

## Präferenzänderungen

Die `geo.wifi.*`-Präferenzen haben keine Standardwerte mehr, obwohl sie respektiert werden, wenn sie vorhanden sind. Wenn Ihr Code diese liest, ohne den Fall zu behandeln, dass sie nicht vorhanden sind, müssen Sie Ihren Code aktualisieren, um die Ausnahme zu handhaben, die geworfen wird, wenn sie nicht existieren.

## XPConnect-Änderungen

`nodePrincipal` und `baseURIObject` wurden von `nsDOMClassInfo` zu `XrayWrapper` verschoben. Dies sollte die meisten Add-ons nicht betreffen, da es nur dann ein Problem darstellen würde, wenn sie versuchen, auf diese Eigenschaften von DOM [`Node`](/de/docs/Web/API/Node)-Objekten aus einem nicht privilegierten Skript zuzugreifen, das XPConnect-Berechtigungen mit `enablePrivilege()` angefordert hat.

## DOM-Änderungen

- Die längst veraltete Methode `Navigator.taintEnabled()` wurde entfernt. Sie hat seit sehr langer Zeit nichts mehr Nützliches getan, wurde aber oft in Browser-Erkennungsskripten verwendet, da sie spezifisch für Netscape war. Einen Aufruf dieser Methode zu machen, wirft ab Firefox 9 eine Ausnahme.
- Ereignis-Handler werden jetzt als Standard IDL-Schnittstellen implementiert. In den meisten Fällen betrifft Sie das nicht, aber [es gibt Ausnahmen](/de/docs/Web/Events/Event_handlers#event_handler_changes_in_firefox_9).

## Andere Änderungen, die die binäre Kompatibilität betreffen könnten

Diese Änderungen sind bemerkenswert, da sie binäre XPCOM-Komponenten betreffen könnten. Diese müssen ohnehin neu kompiliert werden, da dies für jede Hauptversion von Firefox erforderlich ist, könnten jedoch zu Kompilierungsfehlern führen, daher lohnt es sich, diese besonders zu beachten.

- Die `nsIDOMHTMLDocument`-Schnittstelle verfügt jetzt über ein neues `scripts`-Attribut, das das [`Document.scripts`](/de/docs/Web/API/Document/scripts)-Attribut implementiert.
- Die Methode `nsIJumpListShortcut.iconImageUri()` wurde hinzugefügt, um es zu ermöglichen, Favicons auf Jump-List-URI-Einträgen unter Windows festzulegen.

## Themenänderungen

Das `pending`-Attribut wurde dem `<tab>`-Element hinzugefügt. Wenn dieses Attribut vorhanden ist, befindet sich der Tab im Wiederherstellungsprozess durch den Sitzungswiederherstellungsdienst. Sie können dies nutzen, um den Tab während des Wiederherstellungsverfahrens zu stylen. Es ist bemerkenswert, dass, wenn der Benutzer die Präferenz "Tabs nicht laden, bis sie ausgewählt werden" aktiviert hat, das `pending`-Attribut auf Tabs gesetzt wird, bis sie geladen werden.

Ähnlich haben Tabs nun auch ein `unread`-Attribut; diese Eigenschaft deutet an, dass der Tab seit dem letzten Aktivenzustand geändert wurde. Sie können dies nutzen, um Tabs anders zu gestalten, wenn sie geändert wurden, seit der Benutzer sie zuletzt angesehen hat. Dies ist auch bei Tabs vorhanden, die während der aktuellen Sitzung noch nicht betrachtet wurden.
