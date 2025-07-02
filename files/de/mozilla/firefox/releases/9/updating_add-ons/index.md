---
title: Aktualisieren von Add-ons für Firefox 9
slug: Mozilla/Firefox/Releases/9/Updating_add-ons
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 9 bringt nicht viele Änderungen mit sich, die Kompatibilitätsprobleme für Add-on-Entwickler darstellen sollten. Es gibt jedoch ein paar mögliche Stolpersteine, die wir uns ansehen sollten.

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on auf [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) verteilt wird, wurde es von einem automatischen Kompatibilitätsüberprüfungstool geprüft. Add-ons, die keine in Firefox 8 geänderten APIs verwenden und keine binären Komponenten enthalten (die für jede größere Firefox-Version neu kompiliert werden müssen), wurden auf AMO automatisch aktualisiert, um anzuzeigen, dass sie in Firefox 9 funktionieren.

Sie sollten daher zunächst AMO besuchen und prüfen, ob Ihr Add-on überhaupt bearbeitet werden muss.

> [!NOTE]
> Sie sollten Ihr Add-on in Firefox 9 trotzdem testen, auch wenn es automatisch aktualisiert wurde. Es gibt Grenzfälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen erforderlich sind, kehren Sie zu dieser Seite zurück und lesen Sie weiter.

## Bootstrap-Add-ons können verzögert geladene Skripte entfernen

Wenn Ihr Add-on `nsIChromeFrameMessageManager.loadFrameScript()` mit gesetztem Verzögerungs-Flag verwendet, wird das Skript ab diesem Zeitpunkt in jeden neu erstellten Frame geladen. Das ist großartig, aber bis Firefox 9 gab es keine Möglichkeit, das Laden des Skripts zu stoppen, sodass es auch nach dem Herunterfahren Ihres Add-ons weiterhin geladen wurde.

Ab Firefox 9 sollten Sie die neue Methode `nsIChromeFrameMessageManager.removeDelayedFrameScript()` aufrufen, um das Laden Ihres Skripts in neu erstellten Frames zu stoppen. Sie machen dies beispielsweise so:

```js
browser.messageManager.removeDelayedFrameScript(
  "chrome://my-extension/content/some-script.js",
);
```

## Schnittstellenänderungen

- Die `nsIURL`-Schnittstelle wurde etwas verändert. Das Attribut `nsIURL.param` wurde entfernt und die Methode `nsIURLParser.parsePath()` hat zwei Argumente weniger als zuvor.
- Zwei Methoden wurden aus `nsIBrowserHistory` entfernt: `registerOpenPage()` und `unregisterOpenPage()`. Diese Methoden waren veraltet.
- Die Methode `nsIEditorSpellCheck.saveDefaultDictionary()` wurde im Rahmen der Unterstützung von seitenbezogenen Rechtschreibprüfungseinstellungen entfernt. Außerdem nimmt `nsIEditorSpellCheck.updateCurrentDictionary()` keinen Parameter mehr an.
- Die `nsIGlobalHistory3`-Schnittstelle wurde entfernt. Ihre Funktionalität war für Add-ons von begrenztem (wenn überhaupt) Nutzen, daher sollte dies niemanden betreffen.
- Die Eigenschaften mehrerer spezialisierter Kanal-Schnittstellen wurden in die Basis-Schnittstelle `nsIChannel` integriert. Dies sollte die Kompatibilität nicht beeinträchtigen, da diese Schnittstellen ohnehin von `nsIChannel` erben.

## Präferenzänderungen

Die `geo.wifi.*`-Präferenzen haben keine Standardwerte mehr, obwohl sie beachtet werden, wenn sie existieren. Wenn Ihr Code diese liest, ohne den Fall zu behandeln, dass sie nicht existieren, müssen Sie Ihren Code aktualisieren, um mit der Ausnahme umzugehen, die geworfen wird, wenn sie nicht vorhanden sind.

## Änderungen an XPConnect

`nodePrincipal` und `baseURIObject` wurden von `nsDOMClassInfo` nach `XrayWrapper` verschoben. Dies sollte nur wenige Add-ons beeinflussen, da es nur ein Problem wäre, wenn sie versuchen, auf diese Eigenschaften bei DOM-Objekten [`Node`](/de/docs/Web/API/Node) zuzugreifen, von unprivilegierten Skripten aus, die mit `enablePrivilege()` XPConnect-Berechtigungen angefordert haben.

## Änderungen im DOM

- Die lange veraltete Methode `Navigator.taintEnabled()` wurde entfernt. Sie hat seit sehr langer Zeit nichts Sinnvolles mehr getan, wurde aber oft in Browser-Erkennungsskripten verwendet, da sie Netscape-spezifisch war. Der Aufruf dieser Methode wirft ab Firefox 9 eine Ausnahme.
- Ereignisbehandler werden nun als standardisierte IDL-Schnittstellen implementiert. In den meisten Fällen betrifft Sie das nicht, aber [es gibt Ausnahmen](/de/docs/Web/Events/Event_handlers#event_handler_changes_in_firefox_9).

## Weitere Änderungen, die die binäre Kompatibilität betreffen könnten

Diese Änderungen sind bemerkenswert, da sie binäre XPCOM-Komponenten betreffen könnten. Diese müssen ohnehin neu kompiliert werden, da das für jede größere Firefox-Version erforderlich ist, könnten jedoch während der Kompilierung zu Fehlern führen, weshalb sie besonders beachtet werden sollten.

- Die `nsIDOMHTMLDocument`-Schnittstelle hat jetzt ein neues `scripts`-Attribut, das das Attribut [`Document.scripts`](/de/docs/Web/API/Document/scripts) implementiert.
- Die Methode `nsIJumpListShortcut.iconImageUri()` wurde hinzugefügt, um die Einrichtung von Favicons bei Sprunglisteneinträgen auf Windows zu ermöglichen.

## Änderungen im Thema

Das Attribut `pending` wurde dem `<tab>`-Element hinzugefügt. Wenn dieses Attribut vorhanden ist, befindet sich der Tabulator im Prozess der Wiederherstellung durch den Sitzungs-Store-Dienst. Sie können dies verwenden, um den Tab während des Wiederherstellungsprozesses zu gestalten. Es ist erwähnenswert, dass, wenn der Benutzer die Option "Tabs erst bei Auswahl laden" aktiviert hat, das `pending`-Attribut auf Tabs gesetzt wird, bis sie geladen werden.

Ähnlich dazu haben Tabs jetzt auch ein `unread`-Attribut; wenn dieses Attribut vorhanden ist, gibt es an, dass sich der Tab seit dem letzten Mal, als er aktiv war, verändert hat. Sie können dies verwenden, um Tabs anders zu gestalten, wenn sie sich seit dem letzten Blick des Benutzers darauf verändert haben. Dies ist auch bei Tabs der Fall, die während der aktuellen Sitzung noch nicht betrachtet wurden.
