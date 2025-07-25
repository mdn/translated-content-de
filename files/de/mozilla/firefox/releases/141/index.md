---
title: Firefox 141 für Entwickler
short-title: Firefox 141 (Stable)
slug: Mozilla/Firefox/Releases/141
l10n:
  sourceCommit: bd4faec13d4e90c342bededd2378671311f186a0
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 141, die Entwickler betreffen.
Firefox 141 wurde am [22. Juli 2025](https://whattrainisitnow.com/release/?version=141) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) und die entsprechende Eigenschaft [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) werden jetzt teilweise auf Firefox Android unterstützt ([Firefox-Bug 1887878](https://bugzil.la/1887878)).
  Das Attribut kann festgelegt werden, um anzugeben, dass ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file) Element die Auswahl von Verzeichnissen anstelle von Dateien ermöglichen soll.
  Beachten Sie, dass die zurückgegebenen Dateieinträge für den ausgewählten Ordner immer eine leere Zeichenfolge in ([`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)) enthalten, was bedeutet, dass `webkitdirectory` nicht für Anwendungsfälle geeignet ist, bei denen Informationen über die Verzeichnisstruktur benötigt werden ([Firefox-Bug 1973726](https://bugzil.la/1973726)).

### CSS

- Die CSS-Eigenschaft {{CSSXRef("font-variant-emoji")}} ermöglicht es Ihnen, einen Standarddarstellungsstil für die Anzeige von Emojis festzulegen ([Firefox-Bug 1954214](https://bugzil.la/1954214)).

### JavaScript

- Die Zugriffs-Eigenschaft [`variants`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants) wird jetzt auf {{jsxref("Intl.Locale")}} Instanzen unterstützt.
  Diese Eigenschaft gibt die Varianten zurück, die mit einer Locale als Zeichenkette von Bindestrich (`-`) getrennten Identifikatoren verbunden sind.
  Sie bietet eine robustere Möglichkeit, um Variantensubtags eines Sprachidentifikators zu erhalten und zu setzen, im Vergleich zum manuellen Parsen oder Ändern einer Locale-Zeichenkette ([Firefox-Bug 1970161](https://bugzil.la/1970161)).

### HTTP

- Die Direktive [`"cache"`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) des Antwort-Headers {{httpheader("Clear-Site-Data")}} löscht jetzt den {{Glossary("bfcache", "bfcache")}} (Vorwärts-Rückwärts-Cache).
  Dies ermöglicht einer Website sicherzustellen, dass, wenn jemand nach dem Abmelden eines Nutzers rückwärts navigiert, keine privaten Details, die während der ursprünglichen Sitzung sichtbar waren, offengelegt werden. ([Firefox-Bug 1930501](https://bugzil.la/1930501)).

### APIs

- Die Eigenschaft [`persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) der Schnittstelle [`PointerEvent`](/de/docs/Web/API/PointerEvent) wird jetzt unterstützt. Dies gibt jedem Eingabegerät, das mit dem Bildschirm interagiert, eine eindeutige ID, die für die Sitzung bestehen bleibt. Es bietet eine zuverlässige Möglichkeit, mehrere Eingabegeräte (wie Stifte) zu identifizieren, die gleichzeitig mit dem Bildschirm interagieren. ([Firefox-Bug 1968400](https://bugzil.la/1968400)).
- Die Eigenschaft [`scrollMargin`](/de/docs/Web/API/IntersectionObserver/scrollMargin) der Schnittstelle [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) wird jetzt unterstützt. Sie fügt allen verschachtelten {{Glossary("scroll_container", "Scroll-Containern")}} innerhalb des Wurzelelements des Observers einen Rand hinzu, wodurch Ziele in diesen Elementen beobachtet werden können, bevor (oder nachdem) sie in den sichtbaren Bereich gescrollt werden – anstatt nur, wenn sie erstmals sichtbar werden. ([Firefox-Bug 1860030](https://bugzil.la/1860030)).
- Das Attribut [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy) der Schnittstelle [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) und das entsprechende Attribut [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby) des {{htmlelement("dialog")}} Elements werden unterstützt.
  Entwickler können diese verwenden, um anzugeben, welche Mechanismen einen Dialog schließen können, wie z.B. Benutzerinteraktion außerhalb des Dialogs ("leichtes Abweisen") oder programmatisches Schließen.
  ([Firefox-Bug 1964078](https://bugzil.la/1964078)).
- Die Methoden [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) der Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) nehmen nun ein Argument [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) nimmt auch das Argument [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2) an. ([Firefox-Bug 1936411](https://bugzil.la/1936411)).
  ([Firefox-Bug 1936411](https://bugzil.la/1936411))
  - [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) etabliert eine Beziehung zwischen einem Popover und seinem Aufrufer (Steuerelement).
    Wie das äquivalente deklarative Attribut, [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget), macht dies das Popover für Tastaturbenutzer besser zugänglich (siehe [Popover-Accessibility-Funktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)). Es erstellt auch eine implizite Ankerreferenz zwischen den beiden, was eine natürlichere Positionierung von Popovers relativ zu ihren Steuerelementen ermöglicht (siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning)).
  - Die Argumente [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2) für `togglePopover()` können verwendet werden, um das Popover gezwungenermaßen zu öffnen oder zu schließen, und werden ignoriert, wenn sich das Popover bereits im erzwungenen Zustand befindet.
    Im Gegensatz zu `showPopover()` und `hidePopover()` wirft dies keine Ausnahme, wenn sich das Popover bereits im Zielzustand befindet.
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API) wird nun vollständig auf Windows, in allen Kontexten außer für Service Worker, unterstützt. Dies ermöglicht es Entwicklern, Berechnungen und Grafik-Rendering mit der [Grafikprozessor-Einheit](https://de.wikipedia.org/wiki/Grafikprozessor) (GPU) eines Benutzercomputers durchzuführen. ([Firefox-Bug 1972486](https://bugzil.la/1972486)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die temporäre Einstellung `remote.system-access-check.enabled` wurde entfernt. Diese Einstellung kann nicht mehr verwendet werden, um Systemzugriffsüberprüfungen zu deaktivieren, wenn WebDriver im Chrome-Bereich von Firefox während Testläufen verwendet wird ([Firefox-Bug 1955007](https://bugzil.la/1955007)).

#### WebDriver BiDi

- Unterstützung für das "proxy"-Argument des `browser.createUserContext`-Befehls hinzugefügt. Dies erlaubt es Clients, entweder einen "direkten" oder "manuellen" Proxy beim Erstellen eines Benutzerkontextes (also Firefox Container) einzurichten. Unterstützung für zusätzliche Proxy-Typen wird später hinzugefügt ([Firefox-Bug 1967653](https://bugzil.la/1967653)).
- Das neue `browsingContext.historyUpdated`-Ereignis implementiert, das ausgelöst wird, wenn `history.pushState()`, `history.replaceState()` oder `document.open()` im Kontext einer Webseite aufgerufen wird ([Firefox-Bug 1906051](https://bugzil.la/1906051)).
- Die Fehlermeldung verbessert, die angezeigt wird, wenn versucht wird, eine entpackte, unsignierte Web-Erweiterung dauerhaft zu installieren ([Firefox-Bug 1958723](https://bugzil.la/1958723)).
- Die Befehle `browsingContext.navigate` und `browsingContext.reload` aktualisiert, um auf das `browsingContext.navigationCommitted`-Ereignis zu warten, wenn die Bedingung "wait" "none" verwendet wird ([Firefox-Bug 1967469](https://bugzil.la/1967469)).
- Die WebDriver BiDi Cookie-APIs aktualisiert, um "default"-Werte im "sameSite"-Eigentum zu unterstützen, um kürzliche Änderungen in der Plattform-API zu adressieren, die es nicht mehr erlauben würden, ein Cookie mit "sameSite=None" und "secure=false" auf HTTP-Seiten zu setzen ([Firefox-Bug 1971488](https://bugzil.la/1971488)).

#### Marionette

- Um unnötige 200ms-Verzögerungen für jeden Aufruf von `WebDriver:ElementClick` zu vermeiden – auch wenn keine Navigation erfolgt – wurde das Timeout für Klicken-und-Warten für eine potenzielle Navigation auf 50 ms für Rückwärtskompatibilität verringert. Das [Timeout ist jetzt auch konfigurierbar](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-timeout) und [kann vollständig deaktiviert](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-enabled) werden von Benutzern über eine Einstellung ([Firefox-Bug 1972271](https://bugzil.la/1972271)).
- Unterstützung in Marionette hinzugefügt für die Interaktion mit CHIPS-Cookies (Cookies Having Independent Partitioned State) ([Firefox-Bug 1972830](https://bugzil.la/1972830)).

## Änderungen für Add-on-Entwickler

- Fügt die Methode {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} hinzu, um die bevorzugten Locale des Betriebssystems abzurufen. Dies ergänzt {{WebExtAPIRef('i18n.getAcceptLanguages')}}, welche Details über die im Browser festgelegten Locale zurückgibt. ([Firefox-Bug 1888486](https://bugzil.la/1888486))

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 141 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **`:active-view-transition`** (Nightly): `dom.viewTransitions.enabled`

  Die CSS-Pseudoklasse {{CSSXRef(":active-view-transition")}} ermöglicht es Ihnen, Inhalte zu stylen, während ein [View-Transition](/de/docs/Web/API/View_Transition_API) in einer Single-Page-App (SPA) stattfindet. ([Firefox-Bug 1956140](https://bugzil.la/1956140)).
