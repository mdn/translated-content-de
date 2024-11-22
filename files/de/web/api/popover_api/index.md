---
title: Popover API
slug: Web/API/Popover_API
l10n:
  sourceCommit: e2ac6a94e71034b56a74142619e75e44140918e9
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus, um Popover-Inhalte über anderen Seiteninhalten anzuzeigen. Popover-Inhalte können entweder deklarativ mithilfe von HTML-Attributen oder über JavaScript gesteuert werden.

## Konzepte und Verwendung

Ein sehr häufiges Muster im Web ist das Anzeigen von Inhalten über anderen Inhalten, um die Aufmerksamkeit des Benutzers auf spezifische wichtige Informationen oder erforderliche Aktionen zu lenken. Diese Inhalte können verschiedene Namen haben — Overlays, Popups, Popovers, Dialoge usw. Wir werden sie in der gesamten Dokumentation als Popovers bezeichnen. Allgemein gesprochen, können diese sein:

- **modal**, was bedeutet, dass während ein Popover angezeigt wird, der Rest der Seite nicht interaktiv ist, bis das Popover auf irgendeine Weise bearbeitet wird (zum Beispiel wenn eine wichtige Auswahl getroffen wird).
- **nicht-modal**, was bedeutet, dass der Rest der Seite interaktiv bleibt, während das Popover angezeigt wird.

Popovers, die mit der Popover-API erstellt werden, sind immer nicht-modal. Wenn Sie ein modales Popover erstellen möchten, ist ein {{htmlelement("dialog")}}-Element der richtige Weg. Es gibt erhebliche Überschneidungen zwischen den beiden — Sie könnten zum Beispiel ein Popover erstellen wollen, das bestehen bleibt, aber es mit deklarativem HTML steuern. Sie können ein `<dialog>`-Element in ein Popover umwandeln (`<dialog popover>` ist vollkommen gültig), wenn Sie Popover-Steuerung mit Dialog-Semantik kombinieren möchten.

Typische Anwendungsfälle für die Popover-API umfassen benutzerinteraktive Elemente wie Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Formularvorschläge, Inhaltsauswahlen oder Lehr-UI.

Sie können Popovers auf zwei verschiedene Arten erstellen:

- Deklarativ, über eine Reihe neuer HTML-Attribute. Ein einfaches Popover mit einem Umschaltknopf kann mit folgendem Code erstellt werden:

  ```html
  <button popovertarget="mypopover">Toggle the popover</button>
  <div id="mypopover" popover>Popover content</div>
  ```

- Über eine JavaScript-API. Zum Beispiel kann [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) verwendet werden, um ein Popover zwischen gezeigt und versteckt umzuschalten.

Es gibt auch neue Ereignisse, um auf das Umschalten eines Popovers zu reagieren, und CSS-Features, die bei der Gestaltung von Popovers helfen. Alle neuen Funktionen sind unten aufgeführt.

Siehe [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) für einen ausführlichen Leitfaden zur Nutzung dieser API.

## HTML-Attribute

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover)
  - : Ein globales Attribut, das ein Element in ein Popover-Element verwandelt; es nimmt einen Popover-Zustand (`"auto"` oder `"manual"`) als seinen Wert an.
- [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)
  - : Verwandelt ein {{htmlelement("button")}}- oder {{htmlelement("input")}}-Element in eine Popover-Steuerschaltfläche; es nimmt die ID des zu steuernden Popover-Elements als Wert an.
- [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)
  - : Gibt die auszuführende Aktion (`"hide"`, `"show"` oder `"toggle"`) auf dem durch eine Steuerungs-{{htmlelement("button")}} oder {{htmlelement("input")}} gesteuerten Popover-Element an.

## CSS-Features

- {{cssxref("::backdrop")}}
  - : Das `::backdrop` Pseudo-Element ist ein Vollbild-Element, das direkt hinter Popover-Elementen platziert wird, sodass Effekte auf den Seiteninhalt hinter den Popover(s) hinzugefügt werden können, falls gewünscht (zum Beispiel dessen Unschärfe).
- {{cssxref(":popover-open")}}
  - : Die `:popover-open` Pseudo-Klasse entspricht einem Popover-Element nur, wenn es im angezeigten Zustand ist — sie kann verwendet werden, um Popover-Elemente zu gestalten, wenn sie angezeigt werden.

## Schnittstellen

- [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)
  - : Stellt ein Ereignis dar, das den Benutzer benachrichtigt, wenn der Zustand eines Popover-Elements zwischen angezeigt und versteckt umschaltet. Es ist das Ereignisobjekt für die [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignisse, die auf Popovers ausgelöst werden, wenn sich deren Zustand ändert.

## Erweiterungen anderer Schnittstellen

### Instanzeigenschaften

- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Ruft den Popover-Zustand eines Elements über JavaScript ab und setzt ihn (`"auto"` oder `"manual"`), und kann zur Funktionsdetektion verwendet werden. Entspricht dem Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Global_attributes/popover).
- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)
  - : Ruft das durch die Steuerungsschaltfläche kontrollierte Popover-Element ab und setzt es. Das JavaScript-Äquivalent des HTML-Attributs [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget).
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)
  - : Ruft die auszuführende Aktion ab und setzt sie (`"hide"`, `"show"` oder `"toggle"`) auf dem durch die Steuerungsschaltfläche kontrollierten Popover-Element. Entspricht dem Wert des HTML-Attributs [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction).

### Instanzmethoden

- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Verbirgt ein Popover-Element, indem es aus der obersten Ebene entfernt und mit `display: none` gestylt wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element an, indem es zur obersten Ebene hinzugefügt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Schaltet ein Popover-Element zwischen den Zuständen angezeigt und versteckt um.

### Ereignisse

- [`HTMLElement.beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) Ereignis
  - : Wird unmittelbar bevor sich der Zustand eines Popover-Elements zwischen angezeigt und versteckt, oder umgekehrt, ändert, ausgelöst. Kann verwendet werden, um zu verhindern, dass sich ein Popover öffnet, oder um andere Elemente zu aktualisieren, die durch den Popover-Zustand ausgelöst werden müssen.
- [`HTMLElement.toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignis
  - : Wird unmittelbar nachdem sich der Zustand eines Popover-Elements zwischen angezeigt und versteckt, oder umgekehrt, ändert, ausgelöst.

## Beispiele

Siehe unsere [Popover-API-Beispiele-Seite](https://mdn.github.io/dom-examples/popover-api/), um auf die vollständige Sammlung von MDN-Popover-Beispielen zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) globales HTML-Attribut
- [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) HTML-Attribut
- [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) HTML-Attribut
- [`::backdrop`](/de/docs/Web/CSS/::backdrop) CSS-Pseudo-Element
- [`:popover-open`](/de/docs/Web/CSS/:popover-open) CSS-Pseudo-Klasse
