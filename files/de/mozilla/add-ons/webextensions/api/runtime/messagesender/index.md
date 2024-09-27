---
title: runtime.MessageSender
slug: Mozilla/Add-ons/WebExtensions/API/runtime/MessageSender
l10n:
  sourceCommit: d82c19fea93f7b36787c6d84af600c955c2732d5
---

{{AddonSidebar}}

Ein Objekt, das Informationen über den Absender einer Nachricht oder Verbindungsanfrage enthält, die an den {{WebExtAPIRef("runtime.onMessage()")}} Listener übergeben wird.

Es ist auch eine Eigenschaft von {{WebExtAPIRef("runtime.Port")}}, jedoch nur in der `Port`-Instanz, die an die {{WebExtAPIRef("runtime.onConnect()")}} oder {{WebExtAPIRef("runtime.onConnectExternal()")}} Listener übergeben wird.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `documentId` {{optional_inline}}
  - : `string`. Eine UUID des Dokuments, das die Verbindung geöffnet hat.
- `documentLifecycle` {{optional_inline}}
  - : `string`. Der Lebenszykluszustand des Dokuments, das die Verbindung geöffnet hat, als der Port erstellt wurde. Beachten Sie, dass sich der Lebenszykluszustand des Dokuments seit der Erstellung des Ports geändert haben kann.
- `frameId` {{optional_inline}}
  - : `integer`. Der Frame, der die Verbindung geöffnet hat. Null für oberste Frames, positiv für untergeordnete Frames. Dies wird nur gesetzt, wenn `tab` gesetzt ist.
- `id` {{optional_inline}}
  - : `string`. Die ID der Erweiterung, die die Nachricht gesendet hat, wenn die Nachricht von einer Erweiterung gesendet wurde. Wenn der Absender eine ID explizit mittels des [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssels in der manifest.json festgelegt hat, dann hat `id` diesen Wert. Andernfalls hat es die generierte ID für den Absender.
- `origin` {{optional_inline}}
  - : `string`. Der Ursprung der Seite oder des Frames, der die Verbindung geöffnet hat. Er kann sich von der `url`-Eigenschaft unterscheiden (z.B. about:blank) oder undurchsichtig sein (z.B. sandboxed iframes). Dies ist nützlich, um festzustellen, ob der Ursprung vertrauenswürdig ist, wenn dies nicht offensichtlich aus der URL hervorgeht.
- `tab` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.Tab')}}. Der {{WebExtAPIRef('tabs.Tab')}}, der die Verbindung geöffnet hat. Diese Eigenschaft ist nur vorhanden, wenn die Verbindung von einem Tab (einschließlich Inhaltsskripten) aus geöffnet wurde.
- `tlsChannelId` {{optional_inline}}
  - : `string`. Die TLS-Kanal-ID der Seite oder des Frames, der die Verbindung geöffnet hat, falls von der Erweiterung angefordert und verfügbar.
- `url` {{optional_inline}}

  - : `string`. Die URL der Seite oder des Frames, die das Skript hostet, das die Nachricht gesendet hat.

    Wenn der Absender ein Skript ist, das in einer Erweiterungsseite (wie einer [Hintergrundseite](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts), einer [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) oder einem [Browser-Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Page-Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) Pop-up) ausgeführt wird, hat die URL die Form `"moz-extension://<extension-internal-id>/path/to/page.html"`. Wenn der Absender ein Hintergrundskript ist und Sie keine Hintergrundseite eingebunden haben, ist sie `"moz-extension://<extension-internal-id>/_generated_background_page.html"`.

    Wenn der Absender ein Skript ist, das in einer Webseite ausgeführt wird (einschließlich Inhalts- und normaler Seitenskripte), dann ist `url` die URL der Webseite. Wenn das Skript in einem iframe ausgeführt wird, ist `url` die URL des iframes.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-MessageSender) API von Chromium. Diese Dokumentation stammt von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
