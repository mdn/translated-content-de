---
title: runtime.MessageSender
slug: Mozilla/Add-ons/WebExtensions/API/runtime/MessageSender
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

{{AddonSidebar}}

Ein Objekt, das Informationen über den Absender einer Nachricht oder eine Verbindungsanfrage enthält, die an den {{WebExtAPIRef("runtime.onMessage()")}} Listener übergeben wird.

Es ist auch eine Eigenschaft von {{WebExtAPIRef("runtime.Port")}}, jedoch nur in der `Port`-Instanz, die in die {{WebExtAPIRef("runtime.onConnect()")}} oder {{WebExtAPIRef("runtime.onConnectExternal()")}} Listener übergeben wird.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `documentId` {{optional_inline}}
  - : `string`. Eine UUID des Dokuments, das die Verbindung geöffnet hat.
- `documentLifecycle` {{optional_inline}}
  - : `string`. Der Lebenszyklusstatus des Dokuments, das die Verbindung öffnete, als der Port erstellt wurde. Beachten Sie, dass sich der Lebenszyklusstatus des Dokuments seit der Erstellung des Ports geändert haben kann.
- `frameId` {{optional_inline}}
  - : `integer`. Der Frame, der die Verbindung öffnete. Null für Frames auf oberster Ebene, positiv für untergeordnete Frames. Dies wird nur festgelegt, wenn `tab` festgelegt ist.
- `id` {{optional_inline}}
  - : `string`. Die ID der Erweiterung, die die Nachricht gesendet hat, falls die Nachricht von einer Erweiterung gesendet wurde. Wenn der Absender eine ID explizit mit dem Schlüssel [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) in der manifest.json festgelegt hat, dann hat `id` diesen Wert. Andernfalls hat es die für den Absender generierte ID.
- `origin` {{optional_inline}}
  - : `string`. Der Ursprung der Seite oder des Frames, der die Verbindung öffnete. Dieser kann sich von der `url`-Eigenschaft unterscheiden (z.B. about:blank) oder undurchsichtig sein (z.B. sandboxed iframes). Dies ist nützlich, um festzustellen, ob der Ursprung vertrauenswürdig ist, wenn dies nicht aus der URL ersichtlich ist.
- `tab` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.Tab')}}. Die {{WebExtAPIRef('tabs.Tab')}}, die die Verbindung geöffnet hat. Diese Eigenschaft ist nur vorhanden, wenn die Verbindung von einem Tab (einschließlich Inhalts-Skripten) geöffnet wurde.
- `tlsChannelId` {{optional_inline}}
  - : `string`. Die TLS-Kanal-ID der Seite oder des Frames, der die Verbindung geöffnet hat, falls von der Erweiterung angefordert und verfügbar.
- `url` {{optional_inline}}

  - : `string`. Die URL der Seite oder des Frames, in dem das Skript läuft, welches die Nachricht gesendet hat.

    Wenn der Absender ein Skript ist, das in einer Erweiterungsseite läuft (wie eine [Hintergrundseite](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts), eine [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) oder ein [Browser Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Page Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) Popup), dann hat die URL die Form `"moz-extension://<extension-internal-id>/path/to/page.html"`. Wenn der Absender ein Hintergrundskript ist und Sie keine Hintergrundseite eingebunden haben, ist die URL `"moz-extension://<extension-internal-id>/_generated_background_page.html"`.

    Wenn der Absender ein Skript ist, das in einer Webseite läuft (einschließlich Inhalts- und normaler Seitenskripte), dann ist die `url` die URL der Webseite. Falls das Skript in einem Iframe läuft, ist `url` die URL des Iframes.

- `userScriptWorldId` {{optional_inline}}
  - : `string`. Die `worldId` der `USER_SCRIPT`-Welt, die die Nachricht gesendet hat. Nur vorhanden in {{WebExtAPIRef("runtime.onUserScriptMessage")}} und in {{WebExtAPIRef("port.sender")}} für {{WebExtAPIRef("runtime.onUserScriptConnect")}}.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-MessageSender) API. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
