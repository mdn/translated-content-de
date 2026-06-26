---
title: Arbeiten mit documentId
slug: Mozilla/Add-ons/WebExtensions/Work_with_documentId
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Eine `documentId` ist eine UUID-Zeichenfolge, die ein einzigartiges Dokument identifiziert, das in einem Tab oder Frame geladen ist. Dieser Leitfaden erklärt, was `documentId` ist, warum es nützlich ist und wie es in den WebExtension-APIs verwendet wird.

## Tabs, Frames und Dokumente

Ein Browser-Tab, identifiziert durch eine `tabId`, ist der oberste Container für Webinhalte. Innerhalb eines Tabs können Inhalte in mehrere Frames strukturiert werden: der Hauptframe (äußerster), der eine `frameId` von `0` hat, und alle verschachtelten [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe)-Elemente, die jeweils eine `frameId` haben. Da die oberste `frameId` `0` ist, kann `frameId` nicht verwendet werden, um alle Frames über alle Tabs hinweg eindeutig zu identifizieren.

Jeder Frame enthält ein Dokument, die HTML-Seite, die unter einer URL geladen wird. Die Beziehung zwischen diesen drei Konzepten ist:

- Ein **Tab** enthält ein oder mehrere **Frames**.
- Ein **Frame** enthält ein **Dokument**.
- Wenn ein Frame zu einer neuen URL navigiert, wird sein Dokument ersetzt, aber der gleiche Frame und somit die gleiche `frameId` bleibt bestehen.

Das bedeutet, dass die Kombination aus `tabId` und `frameId` einen Frame (einen stabilen Browsing-Kontext) identifiziert, aber nicht das darin geladene Dokument.

Dokumente und Frames sind auch in Nicht-Tab-Kontexten vorhanden, einschließlich, aber nicht beschränkt auf:

- [Sidebars](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
- [Popups, die an Erweiterungsschaltflächen angehängt sind](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
- [Devtools-Panels](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels)
- [Hintergrundseiten](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts)

## Operationen mit Tab- und Frame-IDs

Viele WebExtension-APIs verwenden `tabId` und `frameId`, um zu identifizieren, wo eine Operation ausgeführt werden soll:

- **Skript- und CSS-Injektion**: {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}}, und {{WebExtAPIRef("scripting.removeCSS()")}} akzeptieren eine `tabId` und optionale `frameIds` in ihrem {{WebExtAPIRef("scripting.InjectionTarget")}}, um anzugeben, wo injiziert werden soll.
- **Benutzerskript-Injektion**: {{WebExtAPIRef("userScripts.execute()")}} nimmt `tabId` und `frameIds` in seinem `target`.
- **Messaging**: {{WebExtAPIRef("tabs.sendMessage()")}} und {{WebExtAPIRef("tabs.connect()")}} akzeptieren eine `tabId` und eine optionale `frameId`, um eine Nachricht an ihren Empfänger zu senden.
- **Frame-Informationen**: {{WebExtAPIRef("webNavigation.getFrame()")}} und {{WebExtAPIRef("webNavigation.getAllFrames()")}} verwenden `tabId` und `frameId`, um Frame-Details zu suchen oder aufzulisten.
- **Ereignisse**: Navigationsevents ({{WebExtAPIRef("webNavigation.onCommitted")}}, {{WebExtAPIRef("webNavigation.onCompleted")}} und andere), Anfrageereignisse ({{WebExtAPIRef("webRequest.onBeforeRequest")}} und andere), und {{WebExtAPIRef("proxy.onRequest")}} beinhalten alle `tabId` und `frameId`, um zu identifizieren, wo ein Event aufgetreten ist.

Da `frameId` den Frame anstelle seines Inhalts identifiziert, besteht ein potenzielles Race-Condition-Risiko. Nachdem Ihre Erweiterung die `tabId` und `frameId` erhalten hat, kann sich das geladene Dokument ändern, sodass die nachfolgende Operation der Erweiterung nicht mehr das beabsichtigte Dokument anvisiert. `documentId` wurde eingeführt, um dieses Problem zu lösen.

## Was ist eine documentId?

Eine `documentId` wird jedem Dokument zugewiesen, wenn es geladen wird, und bleibt über die gesamte Lebensdauer des Dokuments konstant. Wenn ein Frame zu einer neuen URL navigiert, behält er seine `frameId`, erhält aber eine neue `documentId`. Dies unterscheidet `documentId` von `frameId`: Eine `frameId` identifiziert den Browsing-Kontext (das Frame-Element selbst), während eine `documentId` das geladene Dokument innerhalb dieses Kontexts identifiziert.

Die `documentId` behandelt korrekt Sonderfälle, die `frameId` nicht unterscheiden kann:

- **Navigationen**: Jeder neue Dokumenten-Ladevorgang, einschließlich Cross-Origin-Navigationen, erhält eine neue `documentId`, obwohl die `frameId` unverändert bleibt.
- **Reloads**: Ein Neuladen der Seite erzeugt eine neue `documentId`, was auf ein frisches Dokument hinweist.
- **[`history.pushState()`](/de/docs/Web/API/History/pushState) und Fragment-Updates**: Diese erzeugen kein neues Dokument, sodass die `documentId` unverändert bleibt.

Da sich die ID bei jedem Dokumenten-Ladevorgang ändert, bleibt die von Ihrer Erweiterung für ein Dokument erhaltene ID nur für dieses Dokument gültig. Wenn der Frame navigiert ist, passt die `documentId` nicht mehr. Wenn Ihre Erweiterung ein Skript injiziert oder eine Nachricht mit der dokumentierten ID nach der Navigation sendet, schlägt die Operation fehl, anstatt stillschweigend das falsche Dokument zu adressieren.

Wenn ein Dokument aus dem {{Glossary("bfcache", "Vorwärts-/Rückwärtscache (bfcache)")}} wiederhergestellt wird, wird auch seine ursprüngliche `documentId` wiederhergestellt.

## Wie erhält man eine documentId?

Es gibt mehrere Möglichkeiten, eine `documentId` zu erhalten:

- Rufen Sie {{WebExtAPIRef("runtime.getDocumentId()")}} mit einem `window` oder Frame-Element innerhalb eines Inhaltsskripts auf.
- Lesen Sie die `documentId` oder `parentDocumentId`-Eigenschaft in den Ergebnissen von {{WebExtAPIRef("webNavigation.getFrame()")}} oder {{WebExtAPIRef("webNavigation.getAllFrames()")}}.
- Lesen Sie die `documentId` oder `parentDocumentId` von Ereignisdetails in {{WebExtAPIRef("webNavigation")}}-Ereignissen (für Ereignisse, bei denen das Dokument des Navigationziels bekannt ist, wenn das Ereignis ausgelöst wird).
- Lesen Sie die `documentId` aus Ereignisdetails von {{WebExtAPIRef("webRequest")}}-Ereignissen.
- Lesen Sie die `documentId` aus {{WebExtAPIRef("runtime.MessageSender")}}, wenn Sie Nachrichten mit {{WebExtAPIRef("runtime.onMessage")}}, {{WebExtAPIRef("runtime.onConnect")}} und verwandten Listenern empfangen.
- Lesen Sie die `documentId` aus den Ergebnissen von {{WebExtAPIRef("runtime.getContexts()")}}.

## Verwendung von documentId zur Zieladresse von Dokumenten

Wenn Sie eine `documentId` haben, können Sie diese verwenden, um dieses Dokument anzusteuern:

- **Skript- und CSS-Injektion**: Verwenden Sie `documentIds` in {{WebExtAPIRef("scripting.InjectionTarget")}} mit {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}}, um in spezifische Dokumente zu injizieren.
- **Benutzerskript-Injektion**: Setzen Sie `documentIds` im `target`-Parameter von {{WebExtAPIRef("userScripts.execute()")}}.
- **Messaging**: Übergeben Sie `documentId` im `options`-Parameter von {{WebExtAPIRef("tabs.connect()")}} oder {{WebExtAPIRef("tabs.sendMessage()")}}, um an ein Dokument in einem Tab zu senden.
- **Frame-Suche**: Übergeben Sie `documentId` an {{WebExtAPIRef("webNavigation.getFrame()")}} als Alternative zu `tabId` und `frameId`. Wenn Sie auch `tabId` und `frameId` angeben, wird der Frame nur zurückgegeben, wenn alle drei übereinstimmen.

## APIs, die documentId unterstützen

Diese APIs unterstützen `documentId`.

### Abrufen einer documentId

- {{WebExtAPIRef("runtime.getDocumentId()")}} gibt die Dokument-UUID eines Zielsfensters oder Frame-Elements zurück.

### documentId in Rückgabewerten und Ereignisdetails

- {{WebExtAPIRef("runtime.getContexts()")}} gibt eine `documentId` für jeden Erweiterungskontext zurück und unterstützt eine `documentIds`-Filtereigenschaft.
- {{WebExtAPIRef("runtime.MessageSender")}} enthält `documentId`, verfügbar in {{WebExtAPIRef("runtime.onConnect")}}, {{WebExtAPIRef("runtime.onMessage")}}, {{WebExtAPIRef("runtime.onMessageExternal")}}, {{WebExtAPIRef("runtime.onConnectExternal")}}, {{WebExtAPIRef("runtime.onUserScriptMessage")}} und {{WebExtAPIRef("runtime.onUserScriptConnect")}}-Listenern.
- {{WebExtAPIRef("scripting.executeScript()")}} gibt `documentId` in jedem `InjectionResult` zurück.
- {{WebExtAPIRef("userScripts.execute()")}}-Ergebnisse enthalten `documentId`.
- {{WebExtAPIRef("webNavigation.getAllFrames()")}} gibt `documentId` und `parentDocumentId` für jeden Frame zurück.
- {{WebExtAPIRef("webNavigation.getFrame()")}} gibt `documentId` und `parentDocumentId` zurück.
- {{WebExtAPIRef("webNavigation.onCommitted")}}, {{WebExtAPIRef("webNavigation.onDOMContentLoaded")}}, {{WebExtAPIRef("webNavigation.onCompleted")}}, {{WebExtAPIRef("webNavigation.onErrorOccurred")}}, {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated")}} und {{WebExtAPIRef("webNavigation.onHistoryStateUpdated")}} beinhalten `documentId` und `parentDocumentId` in den Ereignisdetails. {{WebExtAPIRef("webNavigation.onBeforeNavigate")}} kann eine `parentDocumentId` haben, wenn ein Frame navigiert, aber keine `documentId`, da das Ereignis ausgelöst wird, bevor ein Dokument geladen wird.
- Alle `webRequest`-Ereignisse — {{WebExtAPIRef("webRequest.onBeforeRequest")}}, {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}}, {{WebExtAPIRef("webRequest.onSendHeaders")}}, {{WebExtAPIRef("webRequest.onHeadersReceived")}}, {{WebExtAPIRef("webRequest.onAuthRequired")}}, {{WebExtAPIRef("webRequest.onBeforeRedirect")}}, {{WebExtAPIRef("webRequest.onResponseStarted")}}, {{WebExtAPIRef("webRequest.onCompleted")}} und {{WebExtAPIRef("webRequest.onErrorOccurred")}} — beinhalten `documentId` und `parentDocumentId`, wenn zutreffend.
- {{WebExtAPIRef("proxy.RequestDetails")}} beinhaltet `documentId` und `parentDocumentId`, wenn zutreffend.
- {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug")}} beinhaltet `documentId`, wenn zutreffend.

### documentId für Zielanwendungen

- {{WebExtAPIRef("scripting.InjectionTarget")}} unterstützt `documentIds`, um spezifische Dokumente in {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}} anzusteuern.
- {{WebExtAPIRef("userScripts.execute()")}} `target` unterstützt `documentIds`.
- {{WebExtAPIRef("tabs.connect()")}} `options` unterstützt `documentId`, um ein spezifisches Dokument anzusteuern.
- {{WebExtAPIRef("tabs.sendMessage()")}} `options` unterstützt `documentId`, um ein spezifisches Dokument anzusteuern.
- {{WebExtAPIRef("webNavigation.getFrame()")}} akzeptiert `documentId` als Alternative zu `tabId` und `frameId`.

## Zukünftige Entwicklungen

Die [WebExtensions Community Group (WECG)](https://github.com/w3c/webextensions) diskutiert die Möglichkeit, die Anforderung zu lockern, `tabId` zusammen mit `documentId` beim Ansteuern von Dokumenten bereitzustellen. Siehe [WECG issue #91](https://github.com/w3c/webextensions/issues/91) für die Diskussion.
