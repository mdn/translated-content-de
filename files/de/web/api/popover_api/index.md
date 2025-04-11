---
title: Popover API
slug: Web/API/Popover_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zur Anzeige von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder deklarativ mittels HTML-Attribute oder über JavaScript gesteuert werden.

## Konzepte und Verwendung

Ein sehr häufiges Muster im Web ist das Anzeigen von Inhalten über anderen Inhalten, um die Aufmerksamkeit des Nutzers auf spezifische wichtige Informationen oder auszuführende Aktionen zu lenken. Diese Inhalte können verschiedene Namen tragen – Overlays, Popups, Popovers, Dialoge usw. Im gesamten Dokument bezeichnen wir sie als Popovers. Im Allgemeinen können diese sein:

- **Modal**, was bedeutet, dass während ein Popover angezeigt wird, der Rest der Seite nicht interaktiv gerendert wird, bis das Popover in irgendeiner Weise aktiviert wird (z. B. durch eine wichtige Entscheidung).
- **Nicht-modal**, was bedeutet, dass der Rest der Seite interaktiv bleibt, während das Popover angezeigt wird.

Popovers, die mit der Popover-API erstellt werden, sind immer nicht-modal. Wenn Sie ein modales Popover erstellen möchten, ist das {{htmlelement("dialog")}}-Element der richtige Weg. Es gibt erhebliche Überschneidungen zwischen den beiden – Sie könnten beispielsweise ein Popover erstellen wollen, das bestehen bleibt, es aber mit deklarativem HTML steuern. Sie können ein `<dialog>`-Element in ein Popover verwandeln (`<dialog popover>` ist vollkommen gültig), wenn Sie Popover-Steuerung mit Dialog-Semantik kombinieren möchten.

Typische Anwendungsfälle für die Popover-API umfassen nutzerinteraktive Elemente wie Aktionsmenüs, benutzerdefinierte "toast" Benachrichtigungen, Formularelementvorschläge, Inhaltspicker oder lehrende Benutzeroberflächen.

Sie können Popovers auf zwei verschiedene Arten erstellen:

- Deklarativ, über eine Reihe neuer HTML-Attribute. Ein einfaches Popover mit einer Umschalttaste kann mit dem folgenden Code erstellt werden:

  ```html
  <button popovertarget="mypopover">Toggle the popover</button>
  <div id="mypopover" popover>Popover content</div>
  ```

- Über eine JavaScript-API. Beispielsweise kann [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) verwendet werden, um ein Popover zwischen sichtbar und verborgen umzuschalten.

Es gibt auch neue Ereignisse, um auf das Umschalten eines Popovers zu reagieren, und CSS-Funktionen, um das Styling von Popovers zu unterstützen. Alle neuen Funktionen sind unten aufgeführt.

Siehe [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) für einen detaillierten Leitfaden zur Verwendung dieser API.

## HTML-Attribute

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)
  - : Ein Globales Attribut, das ein Element in ein Popover-Element verwandelt; nimmt einen Popover-Zustand (`"auto"`, `"hint"` oder `"manual"`) als Wert an.
- [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - : Verwandelt ein {{htmlelement("button")}}- oder {{htmlelement("input")}}-Element in eine Popover-Steuertaste; nimmt die ID des zu steuernden Popover-Elements als Wert an.
- [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)
  - : Gibt die auszuführende Aktion (`"hide"`, `"show"` oder `"toggle"`) auf dem von einer Steuer-{{htmlelement("button")}} oder {{htmlelement("input")}}-Taste gesteuerten Popover-Element an.

## CSS-Funktionen

- {{cssxref("::backdrop")}}
  - : Das `::backdrop` Pseudoelement ist ein Element in voller Bildschirmgröße, das direkt hinter Popover-Elementen platziert wird und ermöglicht, Effekte auf den Seiteninhalt hinzuzufügen, der sich hinter dem Popover befindet (zum Beispiel es verschwommen darstellen).
- {{cssxref(":popover-open")}}
  - : Die `:popover-open` Pseudoklasse trifft auf ein Popover-Element nur dann zu, wenn es im angezeigten Zustand ist – es kann verwendet werden, um Popover-Elemente zu stylen, wenn sie angezeigt werden.

## Schnittstellen

- [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)
  - : Repräsentiert ein Ereignis, das den Nutzer benachrichtigt, wenn der Zustand eines Popover-Elements zwischen sichtbar und verborgen umschaltet. Es ist das Ereignisobjekt für die [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignisse, die auf Popovers ausgelöst werden, wenn sich ihr Zustand ändert.

## Erweiterungen zu anderen Schnittstellen

### Instanz-Eigenschaften

- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Ruft den Popover-Zustand eines Elements über JavaScript ab und setzt ihn (`"auto"`, `"hint"` oder `"manual"`) und kann zur Feature-Erkennung verwendet werden. Entspricht dem Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover).
- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)
  - : Ruft das von der Steuertaste gesteuerte Popover-Element ab und setzt es. Das JavaScript-Äquivalent des HTML-Attributs [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget).
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)
  - : Ruft die auf das gesteuerte Popover-Element auszuführende Aktion ab und setzt sie (`"hide"`, `"show"` oder `"toggle"`). Entspricht dem Wert des HTML-Attributs [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction).

### Instanz-Methoden

- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Verbirgt ein Popover-Element, indem es aus der obersten Ebene entfernt und es mit `display: none` gestaltet wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element an, indem es zur obersten Ebene hinzugefügt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Schaltet ein Popover-Element zwischen den Zuständen sichtbar und verborgen um.

### Ereignisse

- [`HTMLElement.beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) Ereignis
  - : Wird kurz bevor der Zustand eines Popover-Elements zwischen sichtbar und verborgen wechselt, oder umgekehrt, ausgelöst.
    Kann verwendet werden, um zu verhindern, dass ein Popover geöffnet wird, oder um andere Elemente zu aktualisieren, die durch den Popover-Zustand ausgelöst werden müssen.
- [`HTMLElement.toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignis
  - : Wird gerade nach einer Zustandsänderung eines Popover-Elements zwischen sichtbar und verborgen, oder umgekehrt, ausgelöst.

## Beispiele

Besuchen Sie unsere [Popover-API-Beispielseite](https://mdn.github.io/dom-examples/popover-api/), um auf die vollständige Sammlung von MDN-Popover-Beispielen zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) globales HTML-Attribut
- [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) HTML-Attribut
- [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) HTML-Attribut
- [`::backdrop`](/de/docs/Web/CSS/::backdrop) CSS-Pseudoelement
- [`:popover-open`](/de/docs/Web/CSS/:popover-open) CSS-Pseudoklasse
