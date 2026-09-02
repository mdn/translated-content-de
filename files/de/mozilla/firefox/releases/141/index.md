---
title: Firefox 141 Versionshinweise für Entwickler
short-title: Firefox 141
slug: Mozilla/Firefox/Releases/141
l10n:
  sourceCommit: 324c613947adaa5e19ad0f409c5f4c535ee8cf6b
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 141, die Entwickler betreffen. Firefox 141 wurde am [22. Juli 2025](https://whattrainisitnow.com/release/?version=141) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) und die entsprechende Eigenschaft [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) werden jetzt teilweise auf Firefox Android unterstützt ([Firefox-Bug 1887878](https://bugzil.la/1887878)).
  Das Attribut kann gesetzt werden, um anzugeben, dass ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element die Auswahl von Verzeichnissen anstelle von Dateien anbieten soll.
  Beachten Sie, dass die zurückgegebenen Dateieinträge für den ausgewählten Ordner immer eine leere Zeichenkette in ([`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)) enthalten, was bedeutet, dass die Verwendung von `webkitdirectory` nicht für Anwendungsfälle geeignet ist, bei denen Informationen über die Verzeichnisstruktur benötigt werden ([Firefox-Bug 1973726](https://bugzil.la/1973726)).

### CSS

- Die CSS-Eigenschaft {{CSSXRef("font-variant-emoji")}} ermöglicht es Ihnen, einen Standarddarstellungsstil für die Anzeige von Emojis festzulegen ([Firefox-Bug 1954214](https://bugzil.la/1954214)).

### JavaScript

- Die Zugriffs-Eigenschaft [`variants`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants) wird nun auf {{jsxref("Intl.Locale")}}-Instanzen unterstützt. Diese Eigenschaft gibt die Varianten zurück, die einem Gebietsschema zugeordnet sind, als Eine Zeichenkette aus durch Bindestriche (`-`) getrennten Kennungen.
  Sie bietet eine robustere Möglichkeit, Variantentags eines Sprachkennzeichens zu erhalten und zu setzen, anstatt eine Gebietsschema-Zeichenkette manuell zu analysieren oder zu ändern ([Firefox-Bug 1970161](https://bugzil.la/1970161)).
- Die explizite [Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management) API, die die Deklarationen {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}}, die Objekte {{jsxref("DisposableStack")}}, {{jsxref("AsyncDisposableStack")}}, und {{jsxref("SuppressedError")}} und die wohlbekannten Symbole {{jsxref("Symbol.dispose")}} und {{jsxref("Symbol.asyncDispose")}}, wird nun unterstützt. Diese Funktionen sorgen für die automatische Bereinigung von Ressourcen wie Dateihandles oder Stream-Lesern, wenn sie außer Scope gehen, wodurch Lecks reduziert und die Fehlerbehandlung vereinfacht wird ([Firefox-Bug 1967744](https://bugzil.la/1967744)).

### HTTP

- Die Direktive [`"cache"`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) des Antwort-Headers {{httpheader("Clear-Site-Data")}} löscht nun den {{Glossary("bfcache", "bfcache")}} (Vorwärts-Rückwärts-Cache).
  Dies ermöglicht es einer Website sicherzustellen, dass, wenn jemand nach dem Abmelden eines Benutzers rückwärts navigiert, private Details, die während der ersten Sitzung sichtbar waren, nicht offengelegt werden. ([Firefox-Bug 1930501](https://bugzil.la/1930501)).

### APIs

- Die Eigenschaft [`persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) der Schnittstelle [`PointerEvent`](/de/docs/Web/API/PointerEvent) wird jetzt unterstützt. Dies gibt jedem Zeigegerät, das mit dem Bildschirm interagiert, eine eindeutige ID, die während der Sitzung bestehen bleibt. Es bietet eine zuverlässige Möglichkeit, mehrere Zeigegeräte (wie Stifte), die gleichzeitig mit dem Bildschirm interagieren, zu identifizieren. ([Firefox-Bug 1968400](https://bugzil.la/1968400)).
- Die Eigenschaft [`scrollMargin`](/de/docs/Web/API/IntersectionObserver/scrollMargin) der Schnittstelle [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) wird jetzt unterstützt. Sie fügt allen verschachtelten {{Glossary("scroll_container", "Scroll-Containern")}} innerhalb des Wurzelelements des Beobachters einen Rand hinzu, sodass Ziele innerhalb dieser Elemente beobachtet werden können, bevor (oder nachdem) sie in den Sichtbereich gescrollt werden – anstatt nur wenn sie erstmals sichtbar werden. ([Firefox-Bug 1860030](https://bugzil.la/1860030)).
- Das Attribut [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy) der [`HTMLDialogElement`]-Schnittstelle und das entsprechende Attribut [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby) des {{htmlelement("dialog")}}-Elements werden unterstützt.
  Entwickler können diese verwenden, um festzulegen, durch welche Mechanismen ein Dialog geschlossen werden kann, wie z. B. Benutzerinteraktion außerhalb des Dialogs ("leichtes Verwerfen") oder programmgesteuertes Schließen.
  ([Firefox-Bug 1964078](https://bugzil.la/1964078)).
- Die Methoden [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) der Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) akzeptieren jetzt ein [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source)-Argument, und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) akzeptiert auch das [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2)-Argument. ([Firefox-Bug 1936411](https://bugzil.la/1936411)).
  - [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) stellt eine Beziehung zwischen einem Popover und seinem Auslöser (Steuerelement) her.
    Ähnlich wie das entsprechende deklarative Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) macht es das Popover für Tastaturnutzer zugänglicher (siehe [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)). Es schafft auch eine implizite Anker-Referenz zwischen beiden, die eine natürlichere Positionierung von Popovers relativ zu ihren Bedienelementen ermöglicht (siehe [Popover-Anker-Positionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning)).
  - Die Argumente [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2) für `togglePopover()` können verwendet werden, um das Popover zu erzwingen, zu öffnen oder zu schließen, und wird ignoriert, wenn das Popover bereits im erzwungenen Zustand ist.
    Im Gegensatz zu `showPopover()` und `hidePopover()` wirft dies keine Ausnahme, wenn das Popover bereits im Zielzustand ist.
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API) wird jetzt vollständig auf Windows unterstützt, in allen Kontexten außer für Service-Arbeiter. Dies ermöglicht es Entwicklern, Berechnung und Grafik-Rendering unter Verwendung der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) eines Benutzers zu performen. ([Firefox-Bug 1972486](https://bugzil.la/1972486)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Entfernt die experimentelle CDP (Chrome DevTools Protocol) Implementierung aus Firefox. Damit wurde auch die Unterstützung für die `remote.active-protocols`-Präferenz entfernt. Weitere Details zu diesem Thema finden Sie auf [Firefox Developer Experience](https://fxdx.dev/cdp-retirement-in-firefox/) ([Firefox-Bug 1882096](https://bugzil.la/1882096)).
- Entfernt die temporäre `remote.system-access-check.enabled`-Präferenz. Diese Präferenz kann nicht mehr verwendet werden, um Systemzugriffstests zu deaktivieren, wenn WebDriver im Chrome-Bereich von Firefox während Tests verwendet wird ([Firefox-Bug 1955007](https://bugzil.la/1955007)).

#### WebDriver BiDi

- Unterstützung für das "proxy"-Argument des `browser.createUserContext`-Befehls hinzugefügt. Dies ermöglicht es Clients, entweder einen "direkten" oder "manuellen" Proxy einzurichten, wenn ein Benutzerkontext (d.h. Firefox-Container) erstellt wird. Unterstützung für zusätzliche Proxytypen wird später hinzugefügt ([Firefox-Bug 1967653](https://bugzil.la/1967653)).
- Das neue `browsingContext.historyUpdated`-Ereignis, das ausgelöst wird, wenn `history.pushState()`, `history.replaceState()` oder `document.open()` im Kontext einer Webseite aufgerufen wird, implementiert ([Firefox-Bug 1906051](https://bugzil.la/1906051)).
- Verbessert die Fehlermeldung, die angezeigt wird, wenn versucht wird, eine nicht verpackte, unsignierte Web-Erweiterung dauerhaft zu installieren ([Firefox-Bug 1958723](https://bugzil.la/1958723)).
- Aktualisierte die `browsingContext.navigate` und `browsingContext.reload` Befehle, um auf das `browsingContext.navigationCommitted`-Ereignis zu warten, wenn die "wait"-Bedingung "none" verwendet wird ([Firefox-Bug 1967469](https://bugzil.la/1967469)).
- Die WebDriver BiDi-Cookie-APIs wurden aktualisiert, um den "default"-Wert in der "sameSite"-Eigenschaft zu unterstützen, um auf die jüngsten Änderungen in der Plattform-API zu reagieren, die es nicht mehr erlauben würden, ein Cookie mit "sameSite=None" und "secure=false" auf HTTP-Seiten zu setzen ([Firefox-Bug 1971488](https://bugzil.la/1971488)).

#### Marionette

- Um unnötige 200 ms Verzögerungen bei jedem Aufruf von `WebDriver:ElementClick` zu vermeiden - selbst wenn keine Navigation erfolgt - haben wir das Timeout für Klick-und-Warte auf eine potenzielle Navigation auf 50 ms gesenkt, um die Rückwärtskompatibilität zu gewährleisten. Das [Timeout ist nun auch konfigurierbar](https://firefox-source-docs.mozilla.org/remote/marionette/Prefs.html#marionette-navigate-after-click-timeout) und [kann vollständig deaktiviert](https://firefox-source-docs.mozilla.org/remote/marionette/Prefs.html#marionette-navigate-after-click-enabled) werden von Benutzern durch eine Präferenz ([Firefox-Bug 1972271](https://bugzil.la/1972271)).
- Unterstützung in Marionette zum Interagieren mit CHIPS-Cookies (Cookies Having Independent Partitioned State) hinzugefügt ([Firefox-Bug 1972830](https://bugzil.la/1972830)).

## Änderungen für Add-on-Entwickler

- Fügt die Methode {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} hinzu, um die bevorzugten Gebietsschemas des Betriebssystems abzurufen. Dies ergänzt {{WebExtAPIRef('i18n.getAcceptLanguages')}}, die Details zu den im Browser gesetzten Gebietsschemas zurückgibt. ([Firefox-Bug 1888486](https://bugzil.la/1888486))
- Fügt die Möglichkeit hinzu, Ergebnisse in {{WebExtAPIRef('tabs.onUpdated')}} nach Cookie-Store-ID zu filtern. ([Firefox-Bug 1960011](https://bugzil.la/1960011))

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 141 bereitgestellt, sind jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Präferenz und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`:active-view-transition`** (Nightly): `dom.viewTransitions.enabled`

  Die CSS-Pseudo-Klasse {{CSSXRef(":active-view-transition")}} ermöglicht es Ihnen, Inhalte zu stylen, während eine [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) in einer Single-Page-App (SPA) stattfindet. ([Firefox-Bug 1956140](https://bugzil.la/1956140)).
