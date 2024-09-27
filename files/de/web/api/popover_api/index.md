---
title: Popover API
slug: Web/API/Popover_API
l10n:
  sourceCommit: f8730b451b37940432ea4203fa78a0454e3efee6
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zum Anzeigen von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder deklarativ über HTML-Attribute oder über JavaScript gesteuert werden.

## Konzepte und Verwendung

Ein sehr häufiges Muster im Web ist es, Inhalte über anderen Inhalten anzuzeigen, um die Aufmerksamkeit des Benutzers auf bestimmte wichtige Informationen oder Aktionen zu lenken, die durchgeführt werden müssen. Diese Inhalte können verschiedene Namen haben — Overlays, Popups, Popovers, Dialoge usw. Wir werden sie in der Dokumentation als Popovers bezeichnen. Im Allgemeinen können diese sein:

- **modal**, was bedeutet, dass während ein Popover angezeigt wird, der Rest der Seite nicht interaktiv ist, bis das Popover in irgendeiner Weise verarbeitet wird (z. B. eine wichtige Auswahl getroffen wird).
- **nicht-modal**, was bedeutet, dass der Rest der Seite interaktiv bleibt, während das Popover angezeigt wird.

Popovers, die mit der Popover API erstellt werden, sind immer nicht-modal. Wenn Sie ein modales Popover erstellen möchten, ist ein {{htmlelement("dialog")}}-Element die richtige Wahl. Es gibt eine erhebliche Überschneidung zwischen den beiden — Sie könnten beispielsweise ein Popover erstellen wollen, das dauerhaft bleibt, aber es mithilfe deklarativen HTMLs steuern. Sie können ein `<dialog>`-Element in ein Popover umwandeln (`<dialog popover>` ist vollkommen gültig), wenn Sie die Popover-Steuerung mit Dialog-Semantik kombinieren möchten.

Typische Anwendungsfälle für die Popover API sind benutzerinteraktive Elemente wie Aktionsmenüs, benutzerdefinierte "Toast" Benachrichtigungen, Formularelementvorschläge, Inhaltsauswahlen oder lehrende Benutzeroberflächen.

Sie können Popovers auf zwei verschiedene Arten erstellen:

- Deklarativ über eine Reihe neuer HTML-Attribute. Ein einfaches Popover mit einem Umschaltknopf kann mit dem folgenden Code erstellt werden:

  ```html
  <button popovertarget="mypopover">Toggle the popover</button>
  <div id="mypopover" popover>Popover content</div>
  ```

- Über eine JavaScript-API. Zum Beispiel kann [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) verwendet werden, um ein Popover zwischen angezeigt und verborgen umzuschalten.

Es gibt auch neue Ereignisse, um auf das Umschalten eines Popovers zu reagieren, und CSS-Funktionen, die bei der Gestaltung von Popovers helfen. Alle neuen Funktionen sind unten aufgelistet.

Siehe [Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using) für eine detaillierte Anleitung zur Verwendung dieser API.

## HTML-Attribute

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover)
  - : Ein globales Attribut, das ein Element in ein Popover-Element verwandelt; nimmt einen Popover-Zustand (`"auto"` oder `"manual"`) als Wert an.
- [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)
  - : Verwandelt ein {{htmlelement("button")}}- oder {{htmlelement("input")}}-Element in einen Popover-Steuerungsknopf; nimmt die ID des zu steuernden Popover-Elements als Wert an.
- [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)
  - : Gibt die Aktion an, die auf das vom Steuerungs-{{htmlelement("button")}}- oder {{htmlelement("input")}}-Element gesteuerte Popover-Element ausgeführt werden soll (`"hide"`, `"show"` oder `"toggle"`).

## CSS-Funktionen

- {{cssxref("::backdrop")}}
  - : Das Pseudo-Element `::backdrop` ist ein Full-Screen-Element, das direkt hinter Popover-Elementen platziert wird, um Effekte auf den Seiteninhalt hinzuzufügen, der sich hinter dem/den Popover(s) befindet (zum Beispiel indem es ausgeblendet wird).
- {{cssxref(":popover-open")}}
  - : Die Pseudoklasse `:popover-open` passt nur dann auf ein Popover-Element, wenn es sich im angezeigten Zustand befindet — sie kann verwendet werden, um Popover-Elemente zu gestalten, wenn sie angezeigt werden.

## Schnittstellen

- [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)
  - : Stellt ein Ereignis dar, das den Benutzer benachrichtigt, wenn der Zustand eines Popover-Elements zwischen Anzeige und Verbergen wechselt. Es ist das Ereignisobjekt für die [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignisse, die auf Popovers feuern, wenn sich ihr Zustand ändert.

## Erweiterungen für andere Schnittstellen

### Instanzeigenschaften

- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Ruft den Popover-Zustand eines Elements über JavaScript ab und setzt ihn (`"auto"` oder `"manual"`), und kann für die Feature-Erkennung verwendet werden. Spiegelt den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Global_attributes/popover) wider.
- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)
  - : Ruft das vom Steuerungsknopf gesteuerte Popover-Element ab und setzt es. Das JavaScript-Äquivalent des HTML-Attributs [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget).
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)
  - : Ruft die auf das gesteuerte Popover-Element zu ausführende Aktion ab und setzt sie (`"hide"`, `"show"` oder `"toggle"`). Spiegelt den Wert des HTML-Attributs [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) wider.

### Instanzmethoden

- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Blendet ein Popover-Element aus, indem es aus der obersten Ebene entfernt und mit `display: none` gestaltet wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element an, indem es der obersten Ebene hinzugefügt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Schaltet ein Popover-Element zwischen den Zuständen "angezeigt" und "versteckt" um.

### Ereignisse

- `HTMLElement` [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) Ereignis
  - : Wird kurz bevor der Zustand eines Popover-Elements zwischen angezeigt und versteckt wechselt, ausgelöst.
- `HTMLElement` [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignis
  - : Wird kurz nachdem der Zustand eines Popover-Elements zwischen angezeigt und versteckt wechselt, ausgelöst. Dieses Ereignis existierte bereits, um Zustandsänderungen bei {{htmlelement("details")}}-Elementen zu signalisieren, und es schien logisch, es für Popover-Elemente zu erweitern.

## Beispiele

Besuchen Sie unsere [Popover API-Beispielseite](https://mdn.github.io/dom-examples/popover-api/), um auf die vollständige Sammlung von MDN-Popover-Beispielen zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML-Globalattribut
- [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) HTML-Attribut
- [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) HTML-Attribut
- [`::backdrop`](/de/docs/Web/CSS/::backdrop) CSS-Pseudo-Element
- [`:popover-open`](/de/docs/Web/CSS/:popover-open) CSS-Pseudoklasse
