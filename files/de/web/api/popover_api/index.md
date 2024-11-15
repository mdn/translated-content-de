---
title: Popover API
slug: Web/API/Popover_API
l10n:
  sourceCommit: a62600788f390d326859cfbf6171013a3f351690
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zur Darstellung von Popover-Inhalten über anderem Seiteninhalt. Popover-Inhalte können entweder deklarativ mithilfe von HTML-Attributen oder über JavaScript gesteuert werden.

## Konzepte und Verwendung

Ein sehr häufiges Muster im Web ist es, Inhalte über andere Inhalte zu zeigen, um die Aufmerksamkeit des Benutzers auf spezifische wichtige Informationen oder Maßnahmen zu lenken, die ergreifen werden müssen. Diese Inhalte können verschiedene Namen haben — Overlays, Popups, Popovers, Dialoge usw. Wir werden sie in dieser Dokumentation als Popovers bezeichnen. Im Allgemeinen können diese folgendermaßen sein:

- **modal**, was bedeutet, dass während ein Popover angezeigt wird, der Rest der Seite nicht interaktiv ist, bis das Popover in irgendeiner Weise aktiviert wird (zum Beispiel, indem eine wichtige Entscheidung getroffen wird).
- **nicht-modal**, was bedeutet, dass der Rest der Seite interaktiv bleibt, während das Popover angezeigt wird.

Popover, die mit der Popover-API erstellt werden, sind immer nicht-modal. Wenn Sie ein modales Popover erstellen möchten, ist ein {{htmlelement("dialog")}}-Element der richtige Weg. Es gibt eine erhebliche Überschneidung zwischen den beiden — Sie könnten zum Beispiel ein Popover erstellen wollen, das bestehen bleibt, es aber mithilfe deklarativen HTMLs steuern möchten. Sie können ein `<dialog>`-Element in ein Popover verwandeln (`<dialog popover>` ist vollkommen gültig), wenn Sie Popover-Steuerung mit Dialog-Semantik kombinieren möchten.

Typische Anwendungsfälle für die Popover-API sind benutzerinteraktive Elemente wie Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Vorschläge für Formularelemente, Inhaltspicker oder für die Benutzeroberfläche lehrende Elemente.

Sie können Popovers auf zwei verschiedene Arten erstellen:

- Deklarativ, über eine Reihe neuer HTML-Attribute. Ein einfaches Popover mit einem Umschaltknopf kann mit folgendem Code erstellt werden:

  ```html
  <button popovertarget="mypopover">Toggle the popover</button>
  <div id="mypopover" popover>Popover content</div>
  ```

- Über eine JavaScript-API. Zum Beispiel kann [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) verwendet werden, um ein Popover zwischen angezeigt und verborgen umzuschalten.

Es gibt auch neue Ereignisse, um auf das Umschalten eines Popovers zu reagieren, und CSS-Features, um beim Styling von Popovers zu helfen. Alle neuen Funktionen sind unten aufgelistet.

Siehe [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) für einen detaillierten Leitfaden zur Verwendung dieser API.

## HTML-Attribute

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover)
  - : Ein globales Attribut, das ein Element in ein Popover-Element verwandelt; nimmt einen Popover-Zustand (`"auto"` oder `"manual"`) als Wert an.
- [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)
  - : Verwandelt ein {{htmlelement("button")}}- oder {{htmlelement("input")}}-Element in einen Popover-Steuerknopf; nimmt die ID des zu steuernden Popover-Elements als Wert an.
- [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)
  - : Gibt die Aktion an, die (`"hide"`, `"show"` oder `"toggle"`) auf das steuernde Popover-Element durch einen Steuer-{{htmlelement("button")}} oder -{{htmlelement("input")}} ausgeführt werden soll.

## CSS-Features

- {{cssxref("::backdrop")}}
  - : Das `::backdrop`-Pseudo-Element ist ein Vollbildelement, das direkt hinter Popover-Elementen platziert wird und es ermöglicht, Effekte auf die Seiteninhalte hinter dem/den Popover(s) hinzuzufügen, wenn gewünscht (zum Beispiel, um es zu verwischen).
- {{cssxref(":popover-open")}}
  - : Die `:popover-open`-Pseudo-Klasse passt ein Popover-Element nur dann an, wenn es sich im angezeigten Zustand befindet — sie kann verwendet werden, um Popover-Elemente zu stylen, wenn sie angezeigt werden.

## Schnittstellen

- [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)
  - : Repräsentiert ein Ereignis, das den Benutzer benachrichtigt, wenn der Zustand eines Popover-Elements zwischen angezeigt und verborgen wechselt. Es ist das Ereignisobjekt für die [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignisse, die bei Popovers ausgelöst werden, wenn sich deren Zustand ändert.

## Erweiterungen zu anderen Schnittstellen

### Instanz-Eigenschaften

- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Ruft den Popover-Zustand eines Elements über JavaScript ab und setzt ihn (`"auto"` oder `"manual"`) und kann für die Funktionsüberprüfung verwendet werden. Reflektiert den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Global_attributes/popover).
- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)
  - : Ruft das gesteuerte Popover-Element durch den Steuerknopf ab und setzt es. Das JavaScript-Äquivalent des HTML-Attributs [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget).
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)
  - : Ruft die auszuführende Aktion (`"hide"`, `"show"` oder `"toggle"`) auf dem durch den Steuerknopf gesteuerten Popover-Element ab und setzt sie. Reflektiert den Wert des HTML-Attributs [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction).

### Instanz-Methoden

- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Verbirgt ein Popover-Element, indem es aus der obersten Schicht entfernt und mit `display: none` gestylt wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element, indem es zur obersten Schicht hinzugefügt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Schaltet ein Popover-Element zwischen den Zuständen angezeigt und verborgen um.

### Ereignisse

- [`HTMLElement.beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) Ereignis
  - : Wird ausgelöst, kurz bevor sich der Zustand eines Popover-Elements zwischen angezeigt und verborgen ändert, oder umgekehrt.
    Kann verwendet werden, um zu verhindern, dass ein Popover geöffnet wird, oder um andere Elemente zu aktualisieren, die durch den Popover-Zustand ausgelöst werden müssen.
- [`HTMLElement.toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignis
  - : Wird ausgelöst, unmittelbar nachdem sich der Zustand eines Popover-Elements zwischen angezeigt und verborgen ändert, oder umgekehrt.

## Beispiele

Besuchen Sie unsere [Beispielseite der Popover-API](https://mdn.github.io/dom-examples/popover-api/), um auf die vollständige Sammlung von MDN Popover-Beispielen zuzugreifen.

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
