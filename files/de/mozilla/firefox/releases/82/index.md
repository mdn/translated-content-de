---
title: Firefox 82 für Entwickler
slug: Mozilla/Firefox/Releases/82
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 82, die Entwickler betreffen. Firefox 82 wurde am 20. Oktober 2020 veröffentlicht.

> [!NOTE]
> Siehe auch [Coming through with Firefox 82](https://hacks.mozilla.org/2020/10/coming-through-with-firefox-82/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklertools

- Sie können jetzt [Server-Sent Events inspizieren](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/inspecting_server-sent_events/index.html) mit dem [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) ([Firefox Bug 1640857](https://bugzil.la/1640857)).
- Das _Message_-Panel des Network Monitors wurde nun mit dem _Response_-Panel zusammengeführt — Nachrichten (z.B. von WebSockets oder Server-Sent Events) können jetzt direkt unter der Antwortliste angezeigt werden ([Firefox Bug 1636421](https://bugzil.la/1636421)).

### HTML

- Der Farbwähler, der für [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) verwendet wird, ist nun auf Windows über die Tastatur zugänglich ([Firefox Bug 1526820](https://bugzil.la/1526820)).
- Das `allow-downloads`-Flag für das Attribut [`<iframe sandbox>`](/de/docs/Web/HTML/Reference/Elements/iframe) wird jetzt unterstützt ([Firefox Bug 1656212](https://bugzil.la/1656212)).

### CSS

- Unterstützung für das neue {{CSSxRef("::file-selector-button", "::file-selector-button")}} Pseudoelement wurde hinzugefügt. Dieses Pseudoelement repräsentiert den Dateiauswahlknopf innerhalb eines [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file) Elements ([Firefox Bug 1635675](https://bugzil.la/1635675), [Firefox Bug 1662478](https://bugzil.la/1662478)).
- Wir haben die Fehlerkorrektur für die Pseudoklassen {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":where", ":where()")}} verbessert. Diese Pseudoklassen akzeptieren nun eine nachsichtige Selektorenliste, bei der ein ungültiger Selektor in der Liste nicht die gesamte Liste ungültig macht ([Firefox Bug 1664718](https://bugzil.la/1664718)).
- `appearance: button` gilt jetzt nur für Buttons; der `button`-Wert von {{CSSxRef("appearance")}} verhält sich ansonsten wie `auto` ([Firefox Bug 1662703](https://bugzil.la/1662703)).

#### Entfernungen

- Wir haben die proprietäre Pseudoklasse [`:-moz-user-disabled`](/de/docs/Web/CSS/:-moz-user-disabled) entfernt ([Firefox Bug 1664432](https://bugzil.la/1664432)).

### HTTP

- Die `inline`-Direktive des [`Content-Disposition`](/de/docs/Web/HTTP/Reference/Headers/Content-Disposition) Headers wird jetzt ignoriert, wenn das `download`-Attribut des HTML [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) Elements spezifiziert ist (für [gleichoriginäre URLs](/de/docs/Web/Security/Same-origin_policy)). Beachten Sie, dass, wenn spezifiziert, der im `Content-Disposition` Header angegebene `filename` gegenüber einem im `download`-Attribut angegebenen Dateinamen bevorzugt wird ([Firefox Bug 1658877](https://bugzil.la/1658877)).

### APIs

#### Neue APIs

- Die [Media Session API](/de/docs/Web/API/Media_Session_API) ist jetzt standardmäßig aktiviert ([Firefox Bug 1665496](https://bugzil.la/1665496)).

#### DOM

- [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) wird nicht mehr für verschachtelte/rekursive Aufrufe unterstützt, die nun `false` zurückgeben ([Firefox Bug 1634262](https://bugzil.la/1634262)).
- [`Element.setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture) löst die Ausnahme `NotFoundError` aus, wenn die Pointer-`id` ungültig ist, gemäß der [Spezifikation](https://w3c.github.io/pointerevents/#setting-pointer-capture) ([Firefox Bug 1662124](https://bugzil.la/1662124)). Zuvor wurde fälschlicherweise eine `InvalidPointerId`-Ausnahme ausgelöst.
- Die [`window.name`](/de/docs/Web/API/Window/name) Eigenschaft wird auf eine leere Zeichenkette zurückgesetzt, wenn ein Tab eine Seite von einer anderen Domain lädt, und wird wiederhergestellt, wenn die ursprüngliche Seite neu geladen wird (z.B. über die "Zurück"-Taste). Dies verhindert, dass eine nicht vertrauenswürdige Seite auf Informationen zugreift, die die vorherige Seite möglicherweise in der Variablen gespeichert hat. Diese Änderung könnte sich auf Frameworks auswirken, die `window.name` für Cross-Domain-Kommunikation verwenden ([Firefox Bug 444222](https://bugzil.la/444222)).

### WebDriver-Konformität (Marionette)

- Um eine realistischere Benutzer-Navigation zu simulieren, wurden alle unterstützten Navigationsbefehle in den übergeordneten Prozess verschoben ([Firefox Bug 1612831](https://bugzil.la/1612831)).
- Wir haben die Überprüfungen für den aktuellen oder obersten Browsing-Kontext für alle Befehle aktualisiert, um die Konformität mit der WebDriver-Spezifikation zu verbessern ([Firefox Bug 1493108](https://bugzil.la/1493108)).
- Ein Fehler in `WebDriver:ElementClick` wurde behoben, der manchmal dazu führte, dass der Befehl zurückgegeben wurde, bevor das Klick-Ereignis tatsächlich synthetisiert wurde ([Firefox Bug 1394354](https://bugzil.la/1394354)).

## Änderungen für Add-on-Entwickler

- Die Methoden [`tabs.captureTab()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab) und [`tabs.captureVisibleTab()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureVisibleTab) erfassen jetzt einen Bereich des Inhalts des relevanten Tabs, der durch die `rect`-Eigenschaft des bereitgestellten [`options`](/de/docs/Mozilla/Add-ons/WebExtensions/API/extensionTypes/ImageDetails) Objekts angegeben wird, oder den sichtbaren Bereich des Tabs, wenn diese Eigenschaft nicht bereitgestellt wird ([Firefox Bug 1636508](https://bugzil.la/1636508)). Zuvor war die `rect`-Eigenschaft nicht verfügbar, und diese Methoden erfassten immer den sichtbaren Bereich des relevanten Tabs.
- Der schreibgeschützte Zugriff auf `cookieStoreId` erfordert nicht mehr die `"cookies"`- [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) ([Firefox Bug 1662329](https://bugzil.la/1662329)).

## Ältere Versionen

{{Firefox_for_developers}}
