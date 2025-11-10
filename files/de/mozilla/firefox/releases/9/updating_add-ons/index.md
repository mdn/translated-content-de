---
title: Aktualisierung von Add-ons für Firefox 9
slug: Mozilla/Firefox/Releases/9/Updating_add-ons
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Firefox 9 enthält nicht viele Änderungen, die Kompatibilitätsprobleme für Add-on-Entwickler darstellen sollten. Es gibt jedoch einige Punkte, die möglicherweise Probleme bereiten könnten, daher schauen wir sie uns an.

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on auf [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) verteilt wird, wurde es von einem automatischen Kompatibilitätsprüfungstool überprüft. Add-ons, die keine in Firefox 8 geänderten APIs nutzen und keine binären Komponenten enthalten (die für jede Hauptversion von Firefox neu kompiliert werden müssen), wurden auf AMO automatisch aktualisiert, um anzuzeigen, dass sie in Firefox 9 funktionieren.

Sie sollten also zunächst AMO besuchen und überprüfen, ob Ihr Add-on überhaupt überarbeitet werden muss.

> [!NOTE]
> Sie sollten Ihr Add-on dennoch in Firefox 9 testen, auch wenn es automatisch aktualisiert wurde. Es gibt Randfälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen erforderlich sind, kehren Sie auf diese Seite zurück und lesen Sie weiter.

## Bootstrap-Add-ons können verzögerte Ladeskripte entfernen

Wenn Ihr Add-on `nsIChromeFrameMessageManager.loadFrameScript()` mit dem gesetzten Delayed-Load-Flag verwendet, wird das Skript in jedem ab diesem Zeitpunkt erstellten Frame geladen. Das ist großartig, außer dass es bis Firefox 9 keine Möglichkeit gab, das Laden des Skripts zu stoppen, sodass es auch nach dem Herunterfahren Ihres Add-ons weiterhin geladen wurde.

Ab Firefox 9 sollten Sie die neue Methode `nsIChromeFrameMessageManager.removeDelayedFrameScript()` aufrufen, um das Laden Ihres Skripts in neu erstellten Frames zu stoppen. Sie tun dies zum Beispiel so:

```js
browser.messageManager.removeDelayedFrameScript(
  "chrome://my-extension/content/some-script.js",
);
```

## Schnittstellenänderungen

- Die `nsIURL`-Schnittstelle wurde etwas geändert. Das Attribut `nsIURL.param` wurde entfernt, und die Methode `nsIURLParser.parsePath()` hat zwei Argumente weniger als zuvor.
- Zwei Methoden wurden aus `nsIBrowserHistory` entfernt: `registerOpenPage()` und `unregisterOpenPage()`. Diese Methoden waren veraltet.
- Die Methode `nsIEditorSpellCheck.saveDefaultDictionary()` wurde im Rahmen der Unterstützung von websitespezifischen Rechtschreibprüfungs-Einstellungen entfernt. Außerdem nimmt `nsIEditorSpellCheck.updateCurrentDictionary()` jetzt keinen Parameter mehr entgegen.
- Die `nsIGlobalHistory3`-Schnittstelle wurde entfernt. Ihre Funktionalität war für Add-ons von begrenztem Nutzen (falls überhaupt), daher sollte dies niemanden beeinträchtigen.
- Mehrere Eigenschaftsattribute spezialisierter Kanäle wurden in die Basisschnittstelle `nsIChannel` integriert. Dies sollte die Kompatibilität nicht beeinträchtigen, da diese Schnittstellen ohnehin von `nsIChannel` erben.

## Präferenzänderungen

Die `geo.wifi.*`-Präferenzen haben keine Standardwerte mehr, obwohl sie berücksichtigt werden, wenn sie vorhanden sind. Wenn Ihr Code diese liest, ohne den Fall zu behandeln, dass sie nicht existieren, müssen Sie Ihren Code aktualisieren, um die Ausnahme zu behandeln, die geworfen wird, wenn sie nicht vorhanden sind.

## XPConnect-Änderungen

`nodePrincipal` und `baseURIObject` wurden von `nsDOMClassInfo` nach `XrayWrapper` verschoben. Dies sollte nicht viele Add-ons betreffen, da es nur ein Problem wäre, wenn versucht wird, auf diese Eigenschaften bei DOM-`Node`-Objekten von einem nicht privilegierten Skript aus zuzugreifen, das XPConnect-Berechtigungen über `enablePrivilege()` angefordert hat.

## DOM-Änderungen

- Die längst veraltete Methode `Navigator.taintEnabled()` wurde entfernt. Diese hat seit sehr langer Zeit nichts mehr Nützliches getan, wurde aber häufig in Browser-Erkennungsskripten verwendet, da sie spezifisch für Netscape war. Der Aufruf dieser Methode wirft ab Firefox 9 eine Ausnahme.
- Ereignis-Handler werden jetzt als standardmäßige IDL-Schnittstellen implementiert. In den meisten Fällen wird sich dies nicht auf Sie auswirken, es sei denn, Sie setzen oder greifen auf Ereignis-Handler auf DOM-Prototyp-Objekten zu. Jetzt können Sie beispielsweise `Window.prototype.onload` nicht mehr ändern.

## Andere Änderungen, die die binäre Kompatibilität betreffen können

Diese Änderungen sind bemerkenswert, da sie binäre XPCOM-Komponenten betreffen können. Diese müssen ohnehin neu kompiliert werden, da dies für jede Hauptversion von Firefox erforderlich ist, könnten jedoch zu Kompilierfehlern führen, daher sind sie besonders hervorzuheben.

- Die `nsIDOMHTMLDocument`-Schnittstelle hat nun ein neues `scripts`-Attribut, das das [`Document.scripts`](/de/docs/Web/API/Document/scripts) Attribut implementiert.
- Die Methode `nsIJumpListShortcut.iconImageUri()` wurde hinzugefügt, um es zu ermöglichen, Favicons für Sprunglisten-URI-Einträge unter Windows festzulegen.

## Themenänderungen

Das `pending`-Attribut wurde dem `<tab>`-Element hinzugefügt. Wenn dieses Attribut vorhanden ist, wird der Tab gerade vom Sitzungswiederherstellungsdienst wiederhergestellt. Sie können dies nutzen, um den Tab während des Wiederherstellungsprozesses zu gestalten. Es ist wichtig zu beachten, dass, wenn der Benutzer die Einstellung "Tabs erst beim Auswählen laden" aktiviert hat, das `pending`-Attribut auf Tabs gesetzt wird, bis sie geladen werden.

Ähnlich haben Tabs jetzt auch ein `unread`-Attribut; wenn dieses vorhanden ist, zeigt es an, dass sich der Tab geändert hat, seit er zuletzt der aktive Tab war. Sie können dies verwenden, um Tabs anders zu gestalten, wenn sie sich geändert haben, seit der Benutzer sie das letzte Mal angesehen hat. Dies ist auch bei Tabs der Fall, die während der aktuellen Sitzung noch nicht angesehen wurden.
