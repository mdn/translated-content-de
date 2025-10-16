---
title: Firefox 141 Versionshinweise für Entwickler
short-title: Firefox 141
slug: Mozilla/Firefox/Releases/141
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 141, die Entwickler betreffen.
Firefox 141 wurde am [22. Juli 2025](https://whattrainisitnow.com/release/?version=141) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) und die entsprechende Eigenschaft [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) werden jetzt teilweise auf Firefox Android unterstützt ([Firefox-Bug 1887878](https://bugzil.la/1887878)).
  Das Attribut kann gesetzt werden, um anzugeben, dass ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element die Auswahl von Verzeichnissen anstelle von Dateien ermöglichen soll.
  Beachten Sie, dass die zurückgegebenen Dateieinträge für den ausgewählten Ordner immer eine leere Zeichenkette in ([`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)) enthalten, was bedeutet, dass die Verwendung von `webkitdirectory` für Anwendungsfälle, bei denen Informationen über die Verzeichnisstruktur benötigt werden, nicht geeignet ist ([Firefox-Bug 1973726](https://bugzil.la/1973726)).

### CSS

- Die CSS-Eigenschaft {{CSSXRef("font-variant-emoji")}} ermöglicht es Ihnen, einen Standarddarstellungsstil für die Anzeige von Emojis festzulegen ([Firefox-Bug 1954214](https://bugzil.la/1954214)).

### JavaScript

- Die Zugriffsoroperty [`variants`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants) wird jetzt auf {{jsxref("Intl.Locale")}} Instanzen unterstützt.
  Diese Eigenschaft gibt die Varianten, die mit einer Lokalisierung verbunden sind, als eine Zeichenkette von Bindestrichen (`-`) getrennten Kennungen zurück.
  Sie bietet eine robustere Möglichkeit, Variantenuntertags eines Sprachkennzeichens zu erhalten und festzulegen, im Gegensatz zum manuellen Parsen oder Ändern eines Lokalisierungsstrings ([Firefox-Bug 1970161](https://bugzil.la/1970161)).
- Die explizite [Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)-API, die die Deklarationen {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}}, die Objekte {{jsxref("DisposableStack")}}, {{jsxref("AsyncDisposableStack")}} und {{jsxref("SuppressedError")}}, sowie die wohlbekannten Symbole {{jsxref("Symbol.dispose")}} und {{jsxref("Symbol.asyncDispose")}} beinhaltet, wird jetzt unterstützt. Diese Funktionen gewährleisten die automatische Bereinigung von Ressourcen wie Dateihandles oder Stream-Readern, wenn sie außer Reichweite sind, was Lecks reduziert und die Fehlerbehandlung vereinfacht ([Firefox-Bug 1967744](https://bugzil.la/1967744)).

### HTTP

- Die Direktive [`"cache"`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) des Antwort-Headers {{httpheader("Clear-Site-Data")}} löscht jetzt den {{Glossary("bfcache", "bfcache")}} (Rückwärts-Vorwärts-Cache).
  Dadurch kann eine Website sicherstellen, dass, wenn jemand nach dem Abmelden eines Benutzers zurück navigiert, private Details, die während der anfänglichen Sitzung sichtbar waren, nicht exponiert werden. ([Firefox-Bug 1930501](https://bugzil.la/1930501)).

### APIs

- Die Eigenschaft [`persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) der Schnittstelle [`PointerEvent`](/de/docs/Web/API/PointerEvent) wird jetzt unterstützt. Dies gibt jedem Zeigegerät, das mit dem Bildschirm interagiert, eine eindeutige ID, die für die Sitzung erhalten bleibt. Es bietet eine zuverlässige Möglichkeit, mehrere Zeigegeräte (wie Stifte), die gleichzeitig mit dem Bildschirm interagieren, zu identifizieren. ([Firefox-Bug 1968400](https://bugzil.la/1968400)).
- Die Eigenschaft [`scrollMargin`](/de/docs/Web/API/IntersectionObserver/scrollMargin) der Schnittstelle [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) wird jetzt unterstützt. Sie fügt allen geschachtelten {{Glossary("scroll_container", "Scrollcontainer")}} innerhalb des Wurzelelements des Beobachters einen Abstand hinzu, der es ermöglicht, Ziele innerhalb dieser Elemente zu beobachten, bevor (oder nachdem) sie ins Sichtfeld gescrollt werden – anstatt nur, wenn sie das erste Mal sichtbar werden. ([Firefox-Bug 1860030](https://bugzil.la/1860030)).
- Das Attribut [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy) der Schnittstelle [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) und das entsprechende Attribut [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby) des {{htmlelement("dialog")}}-Elements werden unterstützt.
  Entwickler können diese verwenden, um festzulegen, welche Mechanismen einen Dialog schließen können, wie beispielsweise die Benutzerinteraktion außerhalb des Dialogs ("leichtes Ausblenden") oder programmatisches Schließen.
  ([Firefox-Bug 1964078](https://bugzil.la/1964078)).
- Die Methoden [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) der Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) akzeptieren jetzt ein [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source)-Argument, und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) akzeptiert auch das [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force)- oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2)-Argument. ([Firefox-Bug 1936411](https://bugzil.la/1936411)).
  ([Firefox-Bug 1936411](https://bugzil.la/1936411))
  - [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) stellt eine Beziehung zwischen einem Popover und seinem Aufrufer (Steuerelement) her.
    Auf dieselbe Weise wie das entsprechende deklarative Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) macht dies das Popover für Tastaturbenutzer zugänglicher (siehe [Popover-Zugänglichkeitseigenschaften](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)). Es schafft auch eine implizite Ankerreferenz zwischen den beiden, die eine natürlichere Positionierung von Popovers relativ zu ihren Steuerungen ermöglicht (siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning)).
  - Die Argumente [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2) für `togglePopover()` können verwendet werden, um das Popover geöffnet oder geschlossen zu erzwingen, und sie werden ignoriert, wenn das Popover bereits im erzwungenen Zustand ist.
    Im Gegensatz zu `showPopover()` und `hidePopover()` wird hierbei keine Ausnahme ausgelöst, wenn sich das Popover bereits im Zielzustand befindet.
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API) wird jetzt vollständig auf Windows unterstützt, in allen Kontexten außer für Service Worker. Dies ermöglicht es Entwicklern, Berechnungen und Grafiken mit der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Computers eines Benutzers auszuführen. ([Firefox-Bug 1972486](https://bugzil.la/1972486)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die experimentelle CDP (Chrome DevTools Protocol)-Implementierung wurde aus Firefox entfernt. Damit einhergehend wurde auch die Unterstützung für die Einstellung `remote.active-protocols` entfernt. Weitere Details zu diesem Thema finden Sie unter [Firefox Developer Experience](https://fxdx.dev/cdp-retirement-in-firefox/) ([Firefox-Bug 1882096](https://bugzil.la/1882096)).
- Die temporäre Einstellung `remote.system-access-check.enabled` wurde entfernt. Diese Einstellung kann nicht mehr verwendet werden, um Systemzugriffskontrollen zu deaktivieren, wenn WebDriver im Chrom-Bereich von Firefox während der Tests verwendet wird ([Firefox-Bug 1955007](https://bugzil.la/1955007)).

#### WebDriver BiDi

- Unterstützung für das "proxy" Argument des Befehls `browser.createUserContext` hinzugefügt. Dies ermöglicht es Clients, entweder einen "Direkt-" oder "Manuellen"-Proxy bei der Erstellung eines Benutzerkontextes (d.h. Firefox Container) einzurichten. Unterstützung für weitere Proxytypen wird später hinzugefügt ([Firefox-Bug 1967653](https://bugzil.la/1967653)).
- Das neue Ereignis `browsingContext.historyUpdated` implementiert, das ausgelöst wird, wenn `history.pushState()`, `history.replaceState()` oder `document.open()` im Kontext einer Webseite aufgerufen wird ([Firefox-Bug 1906051](https://bugzil.la/1906051)).
- Die Fehlermeldung verbessert, die angezeigt wird, wenn versucht wird, eine nicht gepackte, nicht signierte Web-Erweiterung dauerhaft zu installieren ([Firefox-Bug 1958723](https://bugzil.la/1958723)).
- Die Befehle `browsingContext.navigate` und `browsingContext.reload` aktualisiert, um auf das Ereignis `browsingContext.navigationCommitted` zu warten, wenn die "wait"-Bedingung "none" verwendet wird ([Firefox-Bug 1967469](https://bugzil.la/1967469)).
- Die WebDriver BiDi-Cookie-APIs aktualisiert, um "default" Wert im "sameSite"-Eigenschaft zu unterstützen, um aktuelle Änderungen in der Plattform-API zu adressieren, die nicht mehr erlauben, ein Cookie mit "sameSite=None" und "secure=false" auf HTTP-Seiten zu setzen ([Firefox-Bug 1971488](https://bugzil.la/1971488)).

#### Marionette

- Um unnötige 200ms Verzögerungen für jeden Aufruf von `WebDriver:ElementClick` zu vermeiden - selbst wenn keine Navigation erfolgt - haben wir das Klick-und-Warten-Timeout für eine potenzielle Navigation auf 50 ms für die Abwärtskompatibilität reduziert. Das [Timeout ist jetzt auch konfigurierbar](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-timeout) und [kann von Benutzern vollständig deaktiviert werden](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-enabled) durch eine Einstellung ([Firefox-Bug 1972271](https://bugzil.la/1972271)).
- Unterstützung für die Interaktion mit CHIPS-Cookies (Cookies Having Independent Partitioned State) in Marionette hinzugefügt ([Firefox-Bug 1972830](https://bugzil.la/1972830)).

## Änderungen für Add-On-Entwickler

- Fügt die Methode {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} hinzu, um die bevorzugten Gebietsschemas des Betriebssystems abzurufen. Dies ergänzt {{WebExtAPIRef('i18n.getAcceptLanguages')}}, die Details zu den im Browser eingestellten Gebietsschemas zurückgibt. ([Firefox-Bug 1888486](https://bugzil.la/1888486))
- Fügt die Möglichkeit hinzu, Ergebnisse in {{WebExtAPIRef('tabs.onUpdated')}} nach Cookie Store ID zu filtern. ([Firefox-Bug 1960011](https://bugzil.la/1960011))

## Experimentelle Web-Features

Diese Features sind in Firefox 141 verfügbar, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`:active-view-transition`** (Nightly): `dom.viewTransitions.enabled`

  Die CSS-Pseudoklasse {{CSSXRef(":active-view-transition")}} erlaubt es Ihnen, Inhalt zu stylen, während eine [View-Transition](/de/docs/Web/API/View_Transition_API) in einer Single-Page-App (SPA) stattfindet. ([Firefox-Bug 1956140](https://bugzil.la/1956140)).
