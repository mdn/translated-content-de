---
title: Firefox 92 Versionshinweise für Entwickler
short-title: Firefox 92
slug: Mozilla/Firefox/Releases/92
l10n:
  sourceCommit: d7a0ef33dfce20818a160557b5a72d6565cec254
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 92, die Entwickler betreffen werden. Firefox 92 wurde am 7. September 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Time for a review of Firefox 92](https://hacks.mozilla.org/2021/09/time-for-a-review-of-firefox-92/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

Keine Änderungen

### CSS

- Die Schlüsselwörter `avoid-page` und `avoid-column` werden jetzt für die {{cssxref("break-inside")}} Eigenschaft unterstützt ([Firefox-Bug 1722945](https://bugzil.la/1722945)).
- Die Zwei-Werte-Syntax für die {{cssxref("font-size-adjust")}} Eigenschaft wird jetzt unterstützt ([Firefox-Bug 1720131](https://bugzil.la/1720131)).
- Der {{cssxref("@font-face/size-adjust")}} Deskriptor wird jetzt unterstützt ([Firefox-Bug 1720131](https://bugzil.la/1720131)).
- Die CSS {{cssxref("accent-color")}} Eigenschaft wurde implementiert ([Firefox-Bug 1722031](https://bugzil.la/1722031)).
- Der `system-ui` Wert wird jetzt für die {{cssxref("font-family")}} Eigenschaft unterstützt ([Firefox-Bug 1226042](https://bugzil.la/1226042)).

### JavaScript

- {{jsxref("Object.hasOwn()")}} kann verwendet werden, um zu testen, ob eine Eigenschaft auf einem Objekt definiert oder geerbt wurde ([Firefox-Bug 1721149](https://bugzil.la/1721149)).
- Das standardmäßige Speicherlimit von 5 MB ist jetzt für jeden Ursprung verfügbar. Das Limit bezog sich zuvor auf eine gesamte Domain-Gruppe (auch bekannt als {{Glossary("registrable_domain", "registrable domain")}}; z.B. `*.wikipedia.org`). ([Firefox-Bug 1064466](https://bugzil.la/1064466)).
- Speicherlimits für [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) werden jetzt mit der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) und [`Cache`](/de/docs/Web/API/Cache) geteilt ([Firefox-Bug 742822](https://bugzil.la/742822)).

### HTTP

- Firefox wird automatisch eine HTTP-Anfrage auf HTTPS hochstufen, wenn ein verwendbarer {{Glossary("HTTPS_RR", "HTTPS RR")}} verfügbar ist. Es wird auch die in einem _HTTPS RR_ bereitgestellten Informationen nutzen, um den Prozess der Herstellung von HTTPS-Verbindungen zu optimieren—dies ist konzeptuell ähnlich zur Verwendung des {{HTTPHeader("Alt-Svc")}} Headers. ([Firefox-Bug 1721132](https://bugzil.la/1721132)).

### APIs

- Die `disabledFeatures` statische Eigenschaft wurde für Custom Elements implementiert ([Firefox-Bug 1723396](https://bugzil.la/1723396)).

#### DOM

- Die [Imperative Slotting API](/de/docs/Web/API/HTMLSlotElement) (Teil der [Shadow DOM API](/de/docs/Web/API/Web_components/Using_shadow_DOM)) wurde implementiert. ([Firefox-Bug 1705141](https://bugzil.la/1705141))
- Sie können jetzt Änderungen an Textselektionen in {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} überwachen, indem Sie auf `selectionchange` Ereignisse in [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) und [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event) hören ([Firefox-Bug 1648944](https://bugzil.la/1648944)).

#### Medien, WebRTC und Web Audio

- Der Zugriff auf Audioausgabegeräte, wie Lautsprecher und Kopfhörer, wird jetzt durch die [speaker-selection](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) Feature-Policy geschützt ([Firefox-Bug 1577199](https://bugzil.la/1577199)).

### WebDriver-Konformität (Marionette)

- Verbesserte Unterstützung für die `webSocketUrl` Fähigkeit, die jetzt die WebDriver BiDi Websocket-URL zurückgibt, wenn `true` übergeben wurde und wenn BiDi unterstützt wird. ([Firefox-Bug 1692984](https://bugzil.la/1692984)).

## Änderungen für Add-on-Entwickler

- Unterstützung für `cookieStoreId` wurde zu {{WebExtAPIRef('downloads.download')}}, {{WebExtAPIRef('downloads.DownloadQuery')}} und {{WebExtAPIRef('downloads.DownloadItem')}} hinzugefügt. Die Ergänzung zu den Typen {{WebExtAPIRef('downloads.DownloadQuery')}} und {{WebExtAPIRef('downloads.DownloadItem')}} bietet Unterstützung in {{WebExtAPIRef('downloads.search')}} und {{WebExtAPIRef('downloads.erase')}}. Web-Erweiterungen können jetzt Downloads mit spezifischen Cookie-Stores, wie Container-Tabs ([contextual identities](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)), assoziieren. ([Firefox-Bug 1669566](https://bugzil.la/1669566))
