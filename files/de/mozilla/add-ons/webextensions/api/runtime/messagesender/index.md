---
title: runtime.MessageSender
slug: Mozilla/Add-ons/WebExtensions/API/runtime/MessageSender
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Ein Objekt, das Informationen über den Absender einer Nachricht oder Verbindungsanfrage enthält, die an den {{WebExtAPIRef("runtime.onMessage()")}} Listener übergeben wird.

Verfügbar für:

- Verbindungen in den {{WebExtAPIRef("runtime.onConnect")}}, {{WebExtAPIRef("runtime.onConnectExternal")}}, und {{WebExtAPIRef("runtime.onUserScriptConnect")}} Listenern. Im {{WebExtAPIRef("runtime.onConnect()")}} und {{WebExtAPIRef("runtime.onConnectExternal()")}} Listener ist es eine Eigenschaft des `port` Arguments ({{WebExtAPIRef("runtime.Port")}}).
- Nachrichten in {{WebExtAPIRef("runtime.onMessage")}}, {{WebExtAPIRef("runtime.onMessageExternal")}}, und {{WebExtAPIRef("runtime.onUserScriptMessage")}} Listenern.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `documentId` {{optional_inline}}
  - : `string`. Eine UUID des Dokuments, das die Verbindung geöffnet hat. Weitere Informationen finden Sie im Artikel [Mit documentId arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `documentLifecycle` {{optional_inline}}
  - : `string`. Der Lebenszykluszustand des Dokuments, das die Verbindung geöffnet hat, als der Port erstellt wurde. Beachten Sie, dass sich der Lebenszykluszustand des Dokuments seit der Erstellung des Ports geändert haben kann.
- `frameId` {{optional_inline}}
  - : `integer`. Der Frame, der die Verbindung geöffnet hat. Null für oberste Frames, positiv für untergeordnete Frames. Dies wird nur gesetzt, wenn `tab` gesetzt ist.
- `id` {{optional_inline}}
  - : `string`. Die ID der Erweiterung, die die Nachricht gesendet hat, falls die Nachricht von einer Erweiterung gesendet wurde. Wenn der Absender eine ID explizit über den Schlüssel [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) in der manifest.json gesetzt hat, dann hat `id` diesen Wert. Andernfalls erhält es die für den Absender generierte ID.
- `origin` {{optional_inline}}
  - : `string`. Der Ursprung der Seite oder des Frames, der die Verbindung geöffnet hat. Er kann von der `url`-Eigenschaft abweichen (z.B. about:blank) oder undurchsichtig sein (z.B. sandboxed iframes). Dies ist nützlich, um festzustellen, ob der Ursprung vertrauenswürdig ist, wenn dies nicht offensichtlich aus der URL hervorgeht.
- `tab` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.Tab')}}. Der {{WebExtAPIRef('tabs.Tab')}}, der die Verbindung geöffnet hat. Diese Eigenschaft ist nur vorhanden, wenn die Verbindung von einem Tab aus geöffnet wurde (einschließlich Inhalts-Skripten).
- `tlsChannelId` {{optional_inline}}
  - : `string`. Die TLS-Kanal-ID der Seite oder des Frames, der die Verbindung geöffnet hat, wenn dies von der Erweiterung angefordert und verfügbar ist.
- `url` {{optional_inline}}
  - : `string`. Die URL der Seite oder des Frames, die das Skript beherbergt, das die Nachricht gesendet hat.

    Wenn der Absender ein Skript ist, das auf einer Erweiterungsseite ausgeführt wird (wie eine [Hintergrundseite](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts), eine [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) oder ein [Browser-Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Page-Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) Popup), hat die URL die Form `"moz-extension://<extension-internal-id>/path/to/page.html"`. Wenn der Absender ein Hintergrund-Skript ist und Sie keine Hintergrundseite eingeschlossen haben, ist sie `"moz-extension://<extension-internal-id>/_generated_background_page.html"`.

    Wenn der Absender ein Skript ist, das in einer Webseite ausgeführt wird (einschließlich Inhalts- und normaler Seitenskripten), dann ist `url` die URL der Webseite. Wenn das Skript in einem iframe ausgeführt wird, ist `url` die URL des iframes.

- `userScriptWorldId` {{optional_inline}}
  - : `string`. Die `worldId` der `USER_SCRIPT` Welt, die die Nachricht gesendet hat. Nur vorhanden in {{WebExtAPIRef("runtime.onUserScriptMessage")}} und in [`port.sender`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port#sender) für {{WebExtAPIRef("runtime.onUserScriptConnect")}}.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-MessageSender) API. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
