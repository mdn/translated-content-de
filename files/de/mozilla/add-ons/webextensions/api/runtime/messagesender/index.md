---
title: runtime.MessageSender
slug: Mozilla/Add-ons/WebExtensions/API/runtime/MessageSender
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ein Objekt, das Informationen über den Absender einer Nachricht oder einer Verbindungsanfrage enthält, die an den {{WebExtAPIRef("runtime.onMessage()")}}-Listener übergeben wird.

Es ist auch eine Eigenschaft von {{WebExtAPIRef("runtime.Port")}}, jedoch nur in der `Port`-Instanz, die an die {{WebExtAPIRef("runtime.onConnect()")}}- oder {{WebExtAPIRef("runtime.onConnectExternal()")}}-Listener übergeben wird.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `documentId` {{optional_inline}}
  - : `string`. Eine UUID des Dokuments, das die Verbindung geöffnet hat.
- `documentLifecycle` {{optional_inline}}
  - : `string`. Der Lebenszykluszustand des Dokuments, das die Verbindung geöffnet hat, als der Port erstellt wurde. Beachten Sie, dass sich der Lebenszykluszustand des Dokuments seit der Erstellung des Ports geändert haben kann.
- `frameId` {{optional_inline}}
  - : `integer`. Der Rahmen, der die Verbindung geöffnet hat. Null für Top-Level-Rahmen, positiv für untergeordnete Rahmen. Dies wird nur gesetzt, wenn `tab` gesetzt ist.
- `id` {{optional_inline}}
  - : `string`. Die ID der Erweiterung, die die Nachricht gesendet hat, falls die Nachricht von einer Erweiterung gesendet wurde. Wenn der Absender eine ID ausdrücklich mithilfe des [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)-Schlüssels in manifest.json gesetzt hat, dann hat `id` diesen Wert. Andernfalls hat es die ID, die für den Absender generiert wurde.
- `origin` {{optional_inline}}
  - : `string`. Der Ursprung der Seite oder des Rahmens, der die Verbindung geöffnet hat. Er kann sich von der `url`-Eigenschaft unterscheiden (z. B. about:blank) oder undurchsichtig sein (z. B. wennrames). Dies ist nützlich, um zu erkennen, ob dem Ursprung vertraut werden kann, wenn dies nicht aus der URL ersichtlich ist.
- `tab` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.Tab')}}. Der {{WebExtAPIRef('tabs.Tab')}}, der die Verbindung geöffnet hat. Diese Eigenschaft ist nur vorhanden, wenn die Verbindung von einem Tab geöffnet wurde (einschließlich Content-Skripten).
- `tlsChannelId` {{optional_inline}}
  - : `string`. Die TLS-Kanal-ID der Seite oder des Rahmens, der die Verbindung geöffnet hat, falls von der Erweiterung angefordert und verfügbar.
- `url` {{optional_inline}}

  - : `string`. Die URL der Seite oder des Rahmens, der das Skript hostet, das die Nachricht gesendet hat.

    Wenn der Absender ein Skript ist, das in einer Erweiterungsseite ausgeführt wird (wie eine [Hintergrundseite](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts), eine [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) oder ein [Browser-Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Page-Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) Popup), hat die URL die Form `"moz-extension://<extension-internal-id>/path/to/page.html"`. Wenn der Absender ein Hintergrundskript ist und Sie keine Hintergrundseite eingeschlossen haben, ist es `"moz-extension://<extension-internal-id>/_generated_background_page.html"`.

    Wenn der Absender ein Skript ist, das auf einer Webseite ausgeführt wird (einschließlich Content- und normaler Seitenskripte), dann ist `url` die URL der Webseite. Wenn das Skript in einem iframe ausgeführt wird, ist `url` die URL des iframes.

- `userScriptWorldId` {{optional_inline}}
  - : `string`. Die `worldId` der `USER_SCRIPT`-Welt, die die Nachricht gesendet hat. Nur in {{WebExtAPIRef("runtime.onUserScriptMessage")}} und in [`port.sender`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port#sender) für {{WebExtAPIRef("runtime.onUserScriptConnect")}} vorhanden.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-MessageSender) API. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
