---
title: Firefox 82 für Entwickler
slug: Mozilla/Firefox/Releases/82
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 82, die Entwickler betreffen werden. Firefox 82 wurde am 20. Oktober 2020 veröffentlicht.

> [!NOTE]
> Siehe auch [Coming through with Firefox 82](https://hacks.mozilla.org/2020/10/coming-through-with-firefox-82/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklertools

- Sie können jetzt [Server-sent Events inspizieren](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/inspecting_server-sent_events/index.html) mithilfe des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) ([Firefox Fehler 1640857](https://bugzil.la/1640857)).
- Das _Message_-Panel des Netzwerkmonitors wurde jetzt mit dem _Response_-Panel zusammengeführt – Nachrichten (z. B. von WebSockets oder server-sent Events) können nun direkt unter der Antwortliste angezeigt werden ([Firefox Fehler 1636421](https://bugzil.la/1636421)).

### HTML

- Der Farbwähler, der für [`<input type="color">`](/de/docs/Web/HTML/Element/input/color) verwendet wird, ist jetzt auf Windows über die Tastatur zugänglich ([Firefox Fehler 1526820](https://bugzil.la/1526820)).
- Das `allow-downloads` Flag für das [`<iframe sandbox>`](/de/docs/Web/HTML/Element/iframe) Attribut wird jetzt unterstützt ([Firefox Fehler 1656212](https://bugzil.la/1656212)).

### CSS

- Unterstützung für das neue {{CSSxRef("::file-selector-button", "::file-selector-button")}} Pseudoelement wurde hinzugefügt. Dieses Pseudoelement repräsentiert den Dateiauswahlknopf in einem [`<input type="file">`](/de/docs/Web/HTML/Element/input/file) Element ([Firefox Fehler 1635675](https://bugzil.la/1635675), [Firefox Fehler 1662478](https://bugzil.la/1662478)).
- Wir haben die Fehlerbehebung für die {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":where", ":where()")}} Pseudoklassen verbessert. Diese Pseudoklassen akzeptieren jetzt eine fehlertolerante Selektorliste, wobei ein ungültiger Selektor in der Liste nicht die gesamte Liste ungültig macht ([Firefox Fehler 1664718](https://bugzil.la/1664718)).
- `appearance: button` gilt jetzt nur noch für Schaltflächen; der `button` Wert von {{CSSxRef("appearance")}} verhält sich ansonsten als `auto` ([Firefox Fehler 1662703](https://bugzil.la/1662703)).

#### Entfernt

- Wir haben die proprietäre [`:-moz-user-disabled`](/de/docs/Web/CSS/:-moz-user-disabled) Pseudoklasse entfernt ([Firefox Fehler 1664432](https://bugzil.la/1664432)).

### HTTP

- Die `inline` Direktive des [`Content-Disposition`](/de/docs/Web/HTTP/Headers/Content-Disposition) Headers wird jetzt ignoriert, wenn das `download` Attribut des HTML [`<a>`](/de/docs/Web/HTML/Element/a) Elements angegeben ist (für [same-origin URLs](/de/docs/Web/Security/Same-origin_policy)). Beachten Sie, dass, falls angegeben, der `filename` des `Content-Disposition` Headers gegenüber einem im `download` Attribut angegebenen Dateinamen bevorzugt wird ([Firefox Fehler 1658877](https://bugzil.la/1658877)).

### APIs

#### Neue APIs

- Die [Media Session API](/de/docs/Web/API/Media_Session_API) ist jetzt standardmäßig aktiviert ([Firefox Fehler 1665496](https://bugzil.la/1665496)).

#### DOM

- [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) wird für verschachtelte/rekursive Aufrufe nicht mehr unterstützt, die jetzt `false` zurückgeben ([Firefox Fehler 1634262](https://bugzil.la/1634262)).
- [`Element.setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture) löst die `NotFoundError` Ausnahme aus, wenn die Zeiger-`id` ungültig ist, gemäß der [Spezifikation](https://w3c.github.io/pointerevents/#setting-pointer-capture) ([Firefox Fehler 1662124](https://bugzil.la/1662124)). Zuvor wurde fälschlicherweise eine `InvalidPointerId` Ausnahme ausgelöst.
- Die [`window.name`](/de/docs/Web/API/Window/name) Eigenschaft wird auf einen leeren String zurückgesetzt, wenn ein Tab eine Seite von einer anderen Domain lädt, und wiederhergestellt, wenn die ursprüngliche Seite neu geladen wird (z. B. über die "Zurück"-Schaltfläche). Dies verhindert, dass eine nicht vertrauenswürdige Seite auf Informationen zugreift, die die vorherige Seite möglicherweise in der Variablen gespeichert hat. Diese Änderung könnte Frameworks beeinträchtigen, die `window.name` für Cross-Domain-Messaging verwenden ([Firefox Fehler 444222](https://bugzil.la/444222)).

### WebDriver-Konformität (Marionette)

- Um eine realistischere Benutzernavigation zu simulieren, wurden alle unterstützten Navigationsbefehle in den übergeordneten Prozess verschoben ([Firefox Fehler 1612831](https://bugzil.la/1612831)).
- Wir haben die Überprüfungen für den aktuellen oder obersten Browserkontext für alle Befehle aktualisiert, um die Konformität mit der WebDriver-Spezifikation zu verbessern ([Firefox Fehler 1493108](https://bugzil.la/1493108)).
- Ein Fehler in `WebDriver:ElementClick` wurde behoben, der manchmal dazu führte, dass der Befehl zurückgegeben wurde, bevor das Klickereignis tatsächlich synthetisiert wurde ([Firefox Fehler 1394354](https://bugzil.la/1394354)).

## Änderungen für Add-on Entwickler

- Die Methoden [`tabs.captureTab()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab) und [`tabs.captureVisibleTab()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureVisibleTab) erfassen jetzt einen Bereich des relevanten Tab-Inhalts, der durch die `rect` Eigenschaft des bereitgestellten [`options`](/de/docs/Mozilla/Add-ons/WebExtensions/API/extensionTypes/ImageDetails) Objekts angegeben wird, oder den sichtbaren Bereich des Tabs, wenn diese Eigenschaft nicht angegeben ist ([Firefox Fehler 1636508](https://bugzil.la/1636508)). Zuvor war die `rect` Eigenschaft nicht verfügbar, und diese Methoden erfassten immer den sichtbaren Bereich des betreffenden Tabs.
- Der schreibgeschützte Zugriff auf `cookieStoreId` erfordert nicht mehr die `"cookies"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) ([Firefox Fehler 1662329](https://bugzil.la/1662329)).

## Ältere Versionen

{{Firefox_for_developers}}
