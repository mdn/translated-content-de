---
title: Popover API
slug: Web/API/Popover_API
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zum Anzeigen von Popover-Inhalten über anderem Seiteninhalt. Popover-Inhalte können entweder mithilfe von HTML-Attributen oder über JavaScript gesteuert werden.

## Konzepte und Nutzung

Ein sehr übliches Muster im Web ist es, Inhalte über den anderen Inhalten anzuzeigen, um die Aufmerksamkeit des Benutzers auf spezifische wichtige Informationen oder erforderliche Aktionen zu lenken. Diese Inhalte können verschiedene Namen haben — Overlays, Popups, Popovers, Dialoge usw. Wir werden sie in dieser Dokumentation als Popovers bezeichnen. Im Allgemeinen können diese sein:

- **modal**, was bedeutet, dass während ein Popover angezeigt wird, der Rest der Seite nicht interaktiv ist, bis das Popover in irgendeiner Weise bearbeitet wird (zum Beispiel durch eine wichtige Auswahl).
- **nicht-modal**, was bedeutet, dass der Rest der Seite interaktiv bleibt, während das Popover angezeigt wird.

Mit der Popover-API erstellte Popovers sind immer nicht-modal. Wenn Sie ein modales Popover erstellen möchten, ist ein {{htmlelement("dialog")}}-Element der richtige Weg. Es gibt erhebliche Überschneidungen zwischen den beiden — Sie möchten möglicherweise ein Popover erstellen, das bestehen bleibt, es aber mit HTML steuern. Sie können ein `<dialog>`-Element in ein Popover verwandeln (`<dialog popover>` ist vollkommen gültig), wenn Sie die Popover-Steuerung mit Dialog-Semantik kombinieren möchten.

Typische Anwendungsfälle für die Popover-API umfassen benutzerinteraktive Elemente wie Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Vorschläge für Formularelemente, Inhaltspicker oder Lehruserinterfaces.

Sie können Popovers auf zwei verschiedene Arten erstellen:

- Über eine Reihe neuer HTML-Attribute. Ein einfaches Popover mit einem Umschaltknopf kann mit folgendem Code erstellt werden:

  ```html
  <button popovertarget="mypopover">Toggle the popover</button>
  <div id="mypopover" popover>Popover content</div>
  ```

- Über eine JavaScript-API. Zum Beispiel kann [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) verwendet werden, um ein Popover zwischen angezeigt und verborgen umzuschalten.

Es gibt auch neue Ereignisse zum Reagieren auf das Umschalten eines Popovers und CSS-Funktionen zur Unterstützung beim Styling von Popovers. Alle neuen Funktionen sind unten aufgeführt.

Siehe [Using the popover API](/de/docs/Web/API/Popover_API/Using) für einen detaillierten Leitfaden zur Verwendung dieser API.

## HTML-Attribute

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)
  - : Ein globales Attribut, das ein Element in ein Popover-Element verwandelt; nimmt einen Popover-Zustand (`"auto"`, `"hint"` oder `"manual"`) als seinen Wert an.
- [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - : Verwandelt ein {{htmlelement("button")}}- oder {{htmlelement("input")}}-Element in einen Popover-Steuerknopf; nimmt die ID des zu steuernden Popover-Elements als seinen Wert an.
- [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)
  - : Gibt die auszuführende Aktion (`"hide"`, `"show"` oder `"toggle"`) auf dem durch einen Steuer-{{htmlelement("button")}} oder {{htmlelement("input")}} gesteuerten Popover-Element an.

## CSS-Funktionen

- {{cssxref("::backdrop")}}
  - : Das `::backdrop`-Pseudo-Element ist ein vollflächiges Element, das direkt hinter Popover-Elementen platziert wird und es erlaubt, Effekte auf den Seiteninhalt hinter den Popovers hinzuzufügen, falls gewünscht (zum Beispiel um ihn zu verwischen).
- {{cssxref(":popover-open")}}
  - : Die `:popover-open`-Pseudo-Klasse trifft nur auf ein Popover-Element zu, wenn es sich im angezeigten Zustand befindet — sie kann verwendet werden, um Popover-Elemente zu stylen, wenn sie angezeigt werden.

## Schnittstellen

- [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)
  - : Repräsentiert ein Ereignis, das ausgelöst wird, wenn ein Popover-Element zwischen angezeigt und verborgen umgeschaltet wird. Es ist das Ereignisobjekt für die [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)- und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignisse, die auf Popovers ausgelöst werden, wenn sich ihr Zustand ändert.

## Erweiterungen anderer Schnittstellen

### Instanz-Eigenschaften

- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Ruft den Popover-Zustand eines Elements über JavaScript ab oder setzt ihn (`"auto"`, `"hint"` oder `"manual"`) und kann für die Funktionserkennung verwendet werden. Spiegelt den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) wider.
- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)
  - : Ruft das durch den Steuerknopf gesteuerte Popover-Element ab oder setzt es. Das JavaScript-Äquivalent des HTML-Attributs [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget).
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)
  - : Ruft die auf dem durch den Steuerknopf gesteuerten Popover-Element auszuführende Aktion ab oder setzt sie (`"hide"`, `"show"` oder `"toggle"`). Spiegelt den Wert des HTML-Attributs [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) wider.

### Instanz-Methoden

- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Verbirgt ein Popover-Element, indem es aus der obersten Ebene entfernt und mit `display: none` gestylt wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element an, indem es zur obersten Ebene hinzugefügt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Schaltet ein Popover-Element zwischen dem angezeigten und verborgenen Zustand um.

### Ereignisse

- [`HTMLElement.beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) Ereignis
  - : Wird ausgelöst, direkt bevor sich der Zustand eines Popover-Elements zwischen angezeigt und verborgen ändert oder umgekehrt. Kann verwendet werden, um zu verhindern, dass ein Popover geöffnet wird, oder um andere Elemente zu aktualisieren, die durch den Popover-Zustand ausgelöst werden müssen.
- [`HTMLElement.toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignis
  - : Wird ausgelöst, direkt nachdem sich der Zustand eines Popover-Elements zwischen angezeigt und verborgen ändert oder umgekehrt.

## Beispiele

Besuchen Sie unsere [Popover-API-Beispiele-Seite](https://mdn.github.io/dom-examples/popover-api/), um auf die vollständige Sammlung der MDN-Popover-Beispiele zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) globales HTML-Attribut
- [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) HTML-Attribut
- [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) HTML-Attribut
- [`::backdrop`](/de/docs/Web/CSS/Reference/Selectors/::backdrop) CSS-Pseudo-Element
- [`:popover-open`](/de/docs/Web/CSS/Reference/Selectors/:popover-open) CSS-Pseudo-Klasse
