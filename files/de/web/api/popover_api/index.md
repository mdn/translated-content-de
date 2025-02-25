---
title: Popover API
slug: Web/API/Popover_API
l10n:
  sourceCommit: 7b35cff797e29c66f364ece0fd64f4b2a3b2acf3
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus, um Popover-Inhalte über anderen Seiteninhalten anzuzeigen. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden.

## Konzepte und Verwendung

Ein sehr verbreitetes Muster im Web ist es, Inhalte über anderen Inhalten anzuzeigen, um die Aufmerksamkeit des Benutzers auf bestimmte wichtige Informationen oder Aktionen zu lenken, die ausgeführt werden müssen. Diese Inhalte können verschiedene Namen haben – Overlays, Popups, Popovers, Dialoge usw. Wir werden sie in der Dokumentation als Popovers bezeichnen. Im Allgemeinen können diese sein:

- **Modal**, was bedeutet, dass, während ein Popover angezeigt wird, der Rest der Seite nicht interaktiv ist, bis das Popover auf irgendeine Weise bearbeitet wird (zum Beispiel wird eine wichtige Entscheidung getroffen).
- **Nicht-modal**, was bedeutet, dass der Rest der Seite interaktiv bleibt, während das Popover angezeigt wird.

Mit der Popover-API erstellte Popovers sind immer nicht-modal. Wenn Sie ein modales Popover erstellen möchten, ist ein {{htmlelement("dialog")}}-Element der richtige Weg. Es gibt erhebliche Überschneidungen zwischen den beiden – Sie könnten zum Beispiel ein Popover erstellen wollen, das bestehen bleibt, es aber mit deklarativem HTML steuern. Sie können ein `<dialog>`-Element in ein Popover umwandeln (`<dialog popover>` ist vollkommen gültig), wenn Sie die Steuerung eines Popovers mit den Semantiken eines Dialogs kombinieren möchten.

Typische Anwendungsfälle für die Popover-API sind benutzerinteraktive Elemente wie Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Vorschläge für Formularelemente, Inhaltsauswähler oder lehrreiche Benutzeroberflächen.

Sie können Popovers auf zwei verschiedene Arten erstellen:

- Deklarativ, über eine Reihe neuer HTML-Attribute. Ein einfaches Popover mit einem Umschaltknopf kann mit dem folgenden Code erstellt werden:

  ```html
  <button popovertarget="mypopover">Toggle the popover</button>
  <div id="mypopover" popover>Popover content</div>
  ```

- Über eine JavaScript-API. Zum Beispiel kann [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) verwendet werden, um ein Popover zwischen sichtbar und verborgen umzuschalten.

Es gibt auch neue Ereignisse, um auf das Umschalten eines Popovers zu reagieren, und CSS-Features, die bei der Gestaltung von Popovers helfen. Alle neuen Features sind unten aufgeführt.

Siehe [Using the popover API](/de/docs/Web/API/Popover_API/Using) für einen detaillierten Leitfaden zur Verwendung dieser API.

## HTML-Attribute

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover)
  - : Ein globales Attribut, das ein Element in ein Popover-Element verwandelt; nimmt einen Popover-Zustand (`"auto"`, `"hint"` oder `"manual"`) als seinen Wert an.
- [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)
  - : Verwandelt ein {{htmlelement("button")}} oder {{htmlelement("input")}}-Element in einen Steuerungsknopf für ein Popover; nimmt die ID des zu steuernden Popover-Elements als Wert an.
- [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)
  - : Gibt die auszuführende Aktion (`"hide"`, `"show"` oder `"toggle"`) auf dem vom Steuerungsknopf gesteuerten Popover-Element an.

## CSS-Features

- {{cssxref("::backdrop")}}
  - : Das `::backdrop` Pseudo-Element ist ein vollflächiges Element, das direkt hinter Popover-Elementen platziert wird und es ermöglicht, Effekte auf die Seiteninhalte hinter dem/den Popover(s) anzuwenden, falls gewünscht (z.B. das Ausblenden).
- {{cssxref(":popover-open")}}
  - : Die `:popover-open` Pseudo-Klasse stimmt mit einem Popover-Element nur überein, wenn es sich im sichtbaren Zustand befindet – es kann verwendet werden, um Popover-Elemente zu stylen, wenn sie angezeigt werden.

## Schnittstellen

- [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)
  - : Stellt ein Ereignis dar, das den Benutzer benachrichtigt, wenn sich der Zustand eines Popover-Elements zwischen sichtbar und verborgen ändert. Es ist das Ereignisobjekt für die [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignisse, die auf Popovers ausgelöst werden, wenn sich deren Zustand ändert.

## Erweiterungen zu anderen Schnittstellen

### Instanz-Eigenschaften

- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Ruft den Popover-Zustand eines Elements über JavaScript ab und setzt ihn (`"auto"`, `"hint"` oder `"manual"`) und kann zur Feature-Erkennung verwendet werden. Reflektiert den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Global_attributes/popover).
- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)
  - : Ruft das Popover-Element ab und setzt es, das durch den Steuerungsknopf kontrolliert wird. Das JavaScript-Äquivalent des HTML-Attributs [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget).
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)
  - : Ruft die auszuführende Aktion ab und setzt sie (`"hide"`, `"show"` oder `"toggle"`) auf das vom Steuerungsknopf gesteuerte Popover-Element. Reflektiert den Wert des HTML-Attributs [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction).

### Instanz-Methoden

- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Versteckt ein Popover-Element, indem es aus der obersten Schicht entfernt und mit `display: none` gestylt wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element an, indem es zur obersten Schicht hinzugefügt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Schaltet ein Popover-Element zwischen den sichtbaren und verborgenen Zuständen um.

### Ereignisse

- [`HTMLElement.beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) Ereignis
  - : Wird ausgelöst, kurz bevor sich der Zustand eines Popover-Elements zwischen sichtbar und verborgen ändert oder umgekehrt.
    Kann verwendet werden, um zu verhindern, dass ein Popover sich öffnet, oder um andere Elemente zu aktualisieren, die durch den Popover-Zustand ausgelöst werden müssen.
- [`HTMLElement.toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignis
  - : Wird ausgelöst, kurz nachdem sich der Zustand eines Popover-Elements zwischen sichtbar und verborgen ändert oder umgekehrt.

## Beispiele

Besuchen Sie unsere [Popover-API-Beispiele-Seite](https://mdn.github.io/dom-examples/popover-api/), um auf die gesamte Sammlung von MDN Popover-Beispielen zuzugreifen.

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
