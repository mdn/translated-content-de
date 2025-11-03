---
title: Popover API
slug: Web/API/Popover_API
l10n:
  sourceCommit: 2597731017bf54bd583bd533fce1a5fab064b597
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zur Anzeige von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder über HTML-Attribute oder mittels JavaScript gesteuert werden.

## Konzepte und Nutzung

Ein sehr häufiges Muster im Web ist das Anzeigen von Inhalt über anderen Inhalten, um die Aufmerksamkeit des Benutzers auf spezifische wichtige Informationen oder Aktionen zu lenken, die ergriffen werden müssen. Dieser Inhalt kann verschiedene Namen tragen — Overlays, Popups, Popovers, Dialoge usw. Wir werden sie in der gesamten Dokumentation als Popovers bezeichnen. Im Allgemeinen können diese sein:

- **modal**, was bedeutet, dass während ein Popover angezeigt wird, der Rest der Seite nicht interaktiv ist, bis das Popover auf irgendeine Weise bearbeitet wird (zum Beispiel, indem eine wichtige Entscheidung getroffen wird).
- **nicht-modal**, was bedeutet, dass der Rest der Seite interaktiv bleibt, während das Popover angezeigt wird.

Popovers, die mit der Popover-API erstellt wurden, sind immer nicht-modal. Wenn Sie ein modales Popover erstellen möchten, ist ein {{htmlelement("dialog")}}-Element der richtige Weg. Es gibt erhebliche Überschneidungen zwischen den beiden — Sie könnten zum Beispiel ein Popover erstellen wollen, das bleibt, es aber mithilfe von HTML steuern. Sie können ein `<dialog>`-Element in ein Popover verwandeln (`<dialog popover>` ist vollkommen gültig), wenn Sie Popover-Steuerung mit Dialog-Semantik kombinieren möchten.

Typische Anwendungsfälle für die Popover-API umfassen benutzerinteraktive Elemente wie Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Formularvorschläge, Inhaltsauswähler oder Lehr-UI.

Sie können Popovers auf zwei verschiedene Arten erstellen:

- Über eine Reihe neuer HTML-Attribute. Ein einfaches Popover mit einem Umschaltknopf kann mit dem folgenden Code erstellt werden:

  ```html
  <button popovertarget="mypopover">Toggle the popover</button>
  <div id="mypopover" popover>Popover content</div>
  ```

- Über eine JavaScript-API. Beispielsweise kann [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) verwendet werden, um ein Popover zwischen angezeigt und verborgen umzuschalten.

Es gibt auch neue Ereignisse, um auf das Umschalten eines Popovers zu reagieren, und CSS-Features, um das Styling von Popovers zu unterstützen. Alle neuen Features sind unten aufgeführt.

Siehe [Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using) für eine detaillierte Anleitung zur Nutzung dieser API.

## HTML-Attribute

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)
  - : Ein globales Attribut, das ein Element in ein Popover-Element verwandelt; nimmt einen Popover-Status (`"auto"`, `"hint"` oder `"manual"`) als Wert an.
- [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - : Verwandelt ein {{htmlelement("button")}}- oder {{htmlelement("input")}}-Element in einen Popover-Steuerknopf; nimmt die ID des zu kontrollierenden Popover-Elements als Wert an.
- [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)
  - : Gibt die auszuführende Aktion (`"hide"`, `"show"` oder `"toggle"`) an, die auf das durch einen Steuerknopf {{htmlelement("button")}} oder {{htmlelement("input")}} kontrollierte Popover-Element angewendet wird.

## CSS-Features

- {{cssxref("::backdrop")}}
  - : Das `::backdrop`-Pseudoelement ist ein Vollbild-Element, das direkt hinter Popover-Elementen platziert wird und es ermöglicht, Effekte auf den Seiteninhalt hinter dem/den Popover(s) hinzuzufügen (zum Beispiel um es unscharf zu machen).
- {{cssxref(":popover-open")}}
  - : Die `:popover-open`-Pseudoklasse passt auf ein Popover-Element nur dann, wenn es im angezeigten Zustand ist — es kann verwendet werden, um Popover-Elemente zu stylen, wenn sie angezeigt werden.

## Schnittstellen

- [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)
  - : Repräsentiert ein Ereignis, das ausgelöst wird, wenn ein Popover-Element zwischen angezeigt und verborgen umgeschaltet wird. Es ist das Ereignisobjekt für die [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)- und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignisse, die auf Popovers ausgelöst werden, wenn sich ihr Zustand ändert.

## Erweiterungen zu anderen Schnittstellen

### Instanz-Eigenschaften

- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Ruft den Popover-Zustand eines Elements ab und setzt ihn via JavaScript (`"auto"`, `"hint"` oder `"manual"`), und kann zur Feature-Erkennung verwendet werden. Reflektiert den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover).
- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)
  - : Ruft das Popover-Element ab, das durch den Steuerknopf kontrolliert wird, und setzt es. Das JavaScript-Äquivalent des HTML-Attributs [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget).
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)
  - : Ruft die auszuführende Aktion (`"hide"`, `"show"` oder `"toggle"`) auf dem durch den Steuerknopf kontrollierten Popover-Element ab und setzt sie. Reflektiert den Wert des HTML-Attributs [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction).

### Instanz-Methoden

- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Blendet ein Popover-Element aus, indem es aus der obersten Ebene entfernt und mit `display: none` gestylt wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element an, indem es zur obersten Ebene hinzugefügt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Schaltet ein Popover-Element zwischen den Zuständen angezeigt und verborgen um.

### Ereignisse

- [`HTMLElement.beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)-Ereignis
  - : Wird unmittelbar bevor der Zustand eines Popover-Elements zwischen angezeigt und verborgen geändert wird, oder umgekehrt, ausgelöst. Kann verwendet werden, um zu verhindern, dass ein Popover geöffnet wird, oder um andere Elemente zu aktualisieren, die durch den Popover-Zustand ausgelöst werden müssen.
- [`HTMLElement.toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis
  - : Wird direkt nach der Änderung des Zustands eines Popover-Elements zwischen angezeigt und verborgen, oder umgekehrt, ausgelöst.

## Beispiele

Siehe unsere [Popover API Beispiele Startseite](https://mdn.github.io/dom-examples/popover-api/), um auf die vollständige Sammlung von MDN-Popover-Beispielen zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) HTML globales Attribut
- [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) HTML-Attribut
- [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) HTML-Attribut
- [`::backdrop`](/de/docs/Web/CSS/Reference/Selectors/::backdrop) CSS-Pseudoelement
- [`:popover-open`](/de/docs/Web/CSS/Reference/Selectors/:popover-open) CSS-Pseudoklasse
