---
title: runtime.MessageSender
slug: Mozilla/Add-ons/WebExtensions/API/runtime/MessageSender
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{AddonSidebar}}

Ein Objekt, das Informationen über den Absender einer Nachricht oder einer Verbindungsanfrage enthält, die an den {{WebExtAPIRef("runtime.onMessage()")}} Listener übergeben wird.

Es ist auch eine Eigenschaft von {{WebExtAPIRef("runtime.Port")}}, jedoch nur in der `Port` Instanz, die an die {{WebExtAPIRef("runtime.onConnect()")}} oder {{WebExtAPIRef("runtime.onConnectExternal()")}} Listener übergeben wird.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `documentId` {{optional_inline}}
  - : `string`. Eine UUID des Dokuments, das die Verbindung geöffnet hat.
- `documentLifecycle` {{optional_inline}}
  - : `string`. Der Lebenszykluszustand des Dokuments, das die Verbindung geöffnet hat, als der Port erstellt wurde. Beachten Sie, dass sich der Lebenszykluszustand des Dokuments geändert haben kann, seit der Port erstellt wurde.
- `frameId` {{optional_inline}}
  - : `integer`. Das Frame, das die Verbindung geöffnet hat. Null für oberste Frames, positiv für untergeordnete Frames. Dies wird nur gesetzt, wenn `tab` gesetzt ist.
- `id` {{optional_inline}}
  - : `string`. Die ID der Erweiterung, die die Nachricht gesendet hat, falls die Nachricht von einer Erweiterung gesendet wurde. Wenn der Absender eine ID explizit über den Schlüssel [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) in manifest.json gesetzt hat, dann hat `id` diesen Wert. Ansonsten hat es die generierte ID des Absenders.
- `origin` {{optional_inline}}
  - : `string`. Der Ursprung der Seite oder des Frames, das die Verbindung geöffnet hat. Es kann vom `url`-Attribut abweichen (z. B. about:blank) oder undurchsichtig sein (z. B. sandboxed iframes). Dies ist nützlich, um zu bestimmen, ob der Ursprung vertrauenswürdig ist, falls dies nicht offensichtlich aus der URL hervorgeht.
- `tab` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.Tab')}}. Der {{WebExtAPIRef('tabs.Tab')}} der die Verbindung geöffnet hat. Diese Eigenschaft ist nur vorhanden, wenn die Verbindung von einem Tab (einschließlich Inhaltsskripten) geöffnet wurde.
- `tlsChannelId` {{optional_inline}}
  - : `string`. Die TLS-Kanal-ID der Seite oder des Frames, die die Verbindung geöffnet hat, falls von der Erweiterung angefordert und verfügbar.
- `url` {{optional_inline}}

  - : `string`. Die URL der Seite oder des Frames, die das Skript hostet, das die Nachricht gesendet hat.

    Wenn der Absender ein Skript ist, das in einer Erweiterungsseite läuft (zum Beispiel ein [Hintergrundseite](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts), eine [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) oder ein Popup einer [Browseraktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Seitenaktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)), hat die URL die Form `"moz-extension://<extension-internal-id>/path/to/page.html"`. Wenn der Absender ein Hintergrundskript ist und Sie keine Hintergrundseite eingeschlossen haben, ist sie `"moz-extension://<extension-internal-id>/_generated_background_page.html"`.

    Wenn der Absender ein Skript ist, das in einer Webseite läuft (einschließlich Inhalts- und normalen Seitenskripten), dann ist `url` die URL der Webseite. Wenn das Skript in einem iframe ausgeführt wird, ist `url` die URL des iframes.

- `userScriptWorldId` {{optional_inline}}
  - : `string`. Die `worldId` der `USER_SCRIPT` Welt, die die Nachricht gesendet hat. Nur vorhanden in {{WebExtAPIRef("runtime.onUserScriptMessage")}} und in [`port.sender`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port#sender) für {{WebExtAPIRef("runtime.onUserScriptConnect")}}.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-MessageSender) API von Chromium. Diese Dokumentation stammt aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
