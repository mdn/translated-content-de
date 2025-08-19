---
title: Firefox 141 für Entwickler
short-title: Firefox 141 (Stabil)
slug: Mozilla/Firefox/Releases/141
l10n:
  sourceCommit: 74e7902b0875b6378d77df6d2d925a2d09d19f5d
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 141, die Entwickler betreffen.
Firefox 141 wurde am [22. Juli 2025](https://whattrainisitnow.com/release/?version=141) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) und die entsprechende Eigenschaft [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) werden jetzt teilweise auf Firefox Android unterstützt ([Firefox-Bug 1887878](https://bugzil.la/1887878)).
  Das Attribut kann gesetzt werden, um anzugeben, dass ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file) Element die Auswahl von Verzeichnissen anstelle von Dateien ermöglichen soll.
  Beachten Sie, dass die zurückgegebenen Datei-Einträge für den ausgewählten Ordner immer einen leeren String in ([`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)) enthalten, was bedeutet, dass die Verwendung von `webkitdirectory` nicht für Anwendungsfälle geeignet ist, bei denen Informationen über die Verzeichnisstruktur benötigt werden ([Firefox-Bug 1973726](https://bugzil.la/1973726)).

### CSS

- Die CSS-Eigenschaft {{CSSXRef("font-variant-emoji")}} ermöglicht es Ihnen, einen Standard-Präsentationsstil für die Darstellung von Emojis festzulegen ([Firefox-Bug 1954214](https://bugzil.la/1954214)).

### JavaScript

- Die Zugriﬀseigenschaft [`variants`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants) wird jetzt auf {{jsxref("Intl.Locale")}} Instanzen unterstützt.
  Diese Eigenschaft gibt die Variants, die mit einer Locale verbunden sind, als String von Bindestrich (`-`) getrennten Identifikatoren zurück.
  Sie bietet eine robustere Möglichkeit, Varianten-Subtags eines Sprachidentifikators zu erhalten und zu setzen, im Gegensatz zum manuellen Parsen oder Ändern eines Locale-Strings ([Firefox-Bug 1970161](https://bugzil.la/1970161)).
- Die API für das explizite [Ressourcenmanagement](/de/docs/Web/JavaScript/Guide/Resource_management), die die Deklarationen {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}}, die Objekte {{jsxref("DisposableStack")}}, {{jsxref("AsyncDisposableStack")}}, und {{jsxref("SuppressedError")}}, sowie die bekannten Symbole {{jsxref("Symbol.dispose")}} und {{jsxref("Symbol.asyncDispose")}} umfasst, wird jetzt unterstützt. Diese Funktionen sorgen für eine automatische Bereinigung von Ressourcen wie Dateihandles oder Stream-Readern, wenn sie aus dem Gültigkeitsbereich fallen, reduzieren Lecks und vereinfachen die Fehlerbehandlung ([Firefox-Bug 1967744](https://bugzil.la/1967744)).

### HTTP

- Die Direktive [`"cache"`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) des {{httpheader("Clear-Site-Data")}} Antwort-Headers löscht jetzt den {{Glossary("bfcache", "bfcache")}} (Rückwärts-Vorwärts-Cache).
  Dies ermöglicht einer Website sicherzustellen, dass, falls jemand nach dem Abmelden eines Benutzers zurück navigiert, private Details, die während der ersten Sitzung sichtbar waren, nicht preisgegeben werden. ([Firefox-Bug 1930501](https://bugzil.la/1930501)).

### APIs

- Die Eigenschaft [`persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) der [`PointerEvent`](/de/docs/Web/API/PointerEvent) Schnittstelle wird jetzt unterstützt. Dies gibt jedem Zeigegerät, das mit dem Bildschirm interagiert, eine einzigartige ID, die für die Sitzung besteht. Es bietet eine zuverlässige Möglichkeit, mehrere Zeigegeräte (wie Stifte), die gleichzeitig mit dem Bildschirm interagieren, zu identifizieren. ([Firefox-Bug 1968400](https://bugzil.la/1968400)).
- Die Eigenschaft [`scrollMargin`](/de/docs/Web/API/IntersectionObserver/scrollMargin) der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Schnittstelle wird jetzt unterstützt. Sie fügt allen geschachtelten {{Glossary("scroll_container", "Scroll-Containern")}} innerhalb des Wurzelelements des Observers einen Rand hinzu, wodurch Ziele in diesen Elementen beobachtet werden können, bevor (oder nachdem) sie in den Sichtbereich gescrollt werden—anstatt nur, wenn sie zum ersten Mal sichtbar werden. ([Firefox-Bug 1860030](https://bugzil.la/1860030)).
- Das Attribut [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy) der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle und das entsprechende [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby) Attribut des {{htmlelement("dialog")}} Elements werden unterstützt.
  Entwickler können diese verwenden, um festzulegen, welche Mechanismen ein Dialog schließen können, wie Benutzerinteraktionen außerhalb des Dialogs („Light Dismiss“) oder programmatisches Schließen.
  ([Firefox-Bug 1964078](https://bugzil.la/1964078)).
- Die Methoden [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle nehmen jetzt ein Argument [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) an, und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) auch das Argument [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2). ([Firefox-Bug 1936411](https://bugzil.la/1936411)).
  - [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) stellt eine Beziehung zwischen einem Popover und seinem Aufrufer (Steuerelement) her.
    Ähnlich wie das entsprechende deklarative Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget), macht dies das Popover für Tastaturbenutzer zugänglicher (siehe [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)). Es erstellt auch eine implizite Verankerungsreferenz zwischen den beiden, die eine natürlichere Positionierung von Popovers relativ zu ihren Steuerelementen ermöglicht (siehe [Popover-Verankerungspositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning)).
  - Die Argumente [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2) für `togglePopover()` können verwendet werden, um das Popover gezwungen zu öffnen oder zu schließen, und werden ignoriert, wenn das Popover bereits im gezwungenen Zustand ist.
    Im Gegensatz zu `showPopover()` und `hidePopover()` löst dies keine Ausnahme aus, wenn das Popover bereits im Zielzustand ist.
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API) wird jetzt vollständig auf Windows unterstützt, in allen Kontexten außer für Service Worker. Dies ermöglicht es Entwicklern, Berechnungen und Grafikwiedergaben mithilfe der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) eines Benutzercomputers durchzuführen. ([Firefox-Bug 1972486](https://bugzil.la/1972486)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die experimentelle CDP-Implementierung (Chrome DevTools Protocol) wurde aus Firefox entfernt. Mit ihr wurde auch die Unterstützung für die `remote.active-protocols` Präferenz entfernt. Mehr Details zu diesem Thema finden Sie in der [Firefox Developer Experience](https://fxdx.dev/cdp-retirement-in-firefox/) ([Firefox-Bug 1882096](https://bugzil.la/1882096)).
- Die temporäre Präferenz `remote.system-access-check.enabled` wurde entfernt. Diese Präferenz kann nicht mehr verwendet werden, um Systemzugriffsprüfungen zu deaktivieren, wenn WebDriver im Chrome-Bereich von Firefox während Tests verwendet wird ([Firefox-Bug 1955007](https://bugzil.la/1955007)).

#### WebDriver BiDi

- Unterstützung für das "proxy"-Argument des `browser.createUserContext` Befehls hinzugefügt. Dies ermöglicht es Clients, entweder einen "direkten" oder "manuellen" Proxy beim Erstellen eines Benutzerkontextes (z.B. Firefox Container) einzurichten. Unterstützung für zusätzliche Proxy-Typen wird später hinzugefügt ([Firefox-Bug 1967653](https://bugzil.la/1967653)).
- Das neue Event `browsingContext.historyUpdated` wurde implementiert, das ausgelöst wird, wenn `history.pushState()`, `history.replaceState()` oder `document.open()` innerhalb des Kontexts einer Webseite aufgerufen wird ([Firefox-Bug 1906051](https://bugzil.la/1906051)).
- Die Fehlermeldung verbessert, die angezeigt wird, wenn versucht wird, eine nicht gepackte, unsignierte Web-Erweiterung dauerhaft zu installieren ([Firefox-Bug 1958723](https://bugzil.la/1958723)).
- Die Befehle `browsingContext.navigate` und `browsingContext.reload` wurden aktualisiert, um auf das Event `browsingContext.navigationCommitted` zu warten, wenn die "Warte"-Bedingung "none" verwendet wird ([Firefox-Bug 1967469](https://bugzil.la/1967469)).
- Die WebDriver BiDi-Cookie-APIs wurden aktualisiert, um den "Standard"-Wert in der "sameSite"-Eigenschaft zu unterstützen, um auf jüngste Änderungen in der Plattform-API zu reagieren, die es nicht mehr erlauben, ein Cookie mit "sameSite=None" und "secure=false" auf HTTP-Seiten zu setzen ([Firefox-Bug 1971488](https://bugzil.la/1971488)).

#### Marionette

- Um unnötige 200ms Verzögerungen bei jedem Aufruf von `WebDriver:ElementClick` - auch wenn keine Navigation erfolgt - zu vermeiden, haben wir das Klicken-und-Warten-Timeout für eine mögliche Navigation auf 50ms für Rückwärtskompatibilität gesenkt. Das [Timeout ist jetzt auch konfigurierbar](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-timeout) und [kann vollständig deaktiviert werden](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-enabled) von Benutzern durch eine Präferenz ([Firefox-Bug 1972271](https://bugzil.la/1972271)).
- Unterstützung in Marionette für die Interaktion mit CHIPS-Cookies (Cookies Having Independent Partitioned State) hinzugefügt ([Firefox-Bug 1972830](https://bugzil.la/1972830)).

## Änderungen für Add-on-Entwickler

- Fügt die Methode {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} hinzu, um die bevorzugten Sprachregionen des Betriebssystems abzurufen. Dies ergänzt {{WebExtAPIRef('i18n.getAcceptLanguages')}}, das Details zu den im Browser festgelegten Sprachregionen zurückgibt. ([Firefox-Bug 1888486](https://bugzil.la/1888486))

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 141 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Präferenz und setzen Sie sie auf `true`.
Sie können weitere solche Funktionen auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) finden.

- **`:active-view-transition`** (Nightly): `dom.viewTransitions.enabled`

  Die CSS-{{CSSXRef(":active-view-transition")}} Pseudoklasse ermöglicht es Ihnen, Inhalte zu stylen, während ein [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) in einer Single-Page-App (SPA) stattfindet. ([Firefox-Bug 1956140](https://bugzil.la/1956140)).
