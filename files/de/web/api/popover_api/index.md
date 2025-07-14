---
title: Popover API
slug: Web/API/Popover_API
l10n:
  sourceCommit: 5427267ae14e97d86621b8a5a1761df494906324
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus, um Popover-Inhalte über anderen Seiteninhalten anzuzeigen. Popover-Inhalte können entweder durch HTML-Attribute oder über JavaScript gesteuert werden.

## Konzepte und Nutzung

Ein sehr häufiges Muster im Web ist es, Inhalte über andere Inhalte zu zeigen, um die Aufmerksamkeit des Benutzers auf spezifische wichtige Informationen oder Aktionen zu lenken, die durchgeführt werden müssen. Diese Inhalte können verschiedene Namen haben — Overlays, Popups, Popovers, Dialoge usw. In der Dokumentation werden wir sie als Popovers bezeichnen. Im Allgemeinen können diese sein:

- **modal**, was bedeutet, dass während ein Popover angezeigt wird, der Rest der Seite nicht interaktiv ist, bis das Popover in irgendeiner Weise bearbeitet wird (z. B. wird eine wichtige Wahl getroffen).
- **nicht modal**, was bedeutet, dass der Rest der Seite interaktiv bleibt, während das Popover angezeigt wird.

Popovers, die mithilfe der Popover-API erstellt werden, sind immer nicht modal. Wenn Sie ein modales Popover erstellen möchten, ist ein {{htmlelement("dialog")}}-Element der richtige Weg. Es gibt erhebliche Überschneidungen zwischen den beiden — Sie könnten beispielsweise ein persistentes Popover erstellen möchten, es aber über HTML steuern. Sie können ein `<dialog>`-Element in ein Popover verwandeln (`<dialog popover>` ist vollkommen gültig), wenn Sie die Steuerung eines Popovers mit Dialog-Semantik kombinieren möchten.

Typische Anwendungsfälle für die Popover-API umfassen benutzerinteraktive Elemente wie Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Vorschläge für Formularelemente, Inhaltspicker oder lehrende Benutzeroberflächen.

Sie können Popovers auf zwei verschiedene Arten erstellen:

- Über eine Reihe neuer HTML-Attribute. Ein einfaches Popover mit einem Umschalt-Button kann mit dem folgenden Code erstellt werden:

  ```html
  <button popovertarget="mypopover">Toggle the popover</button>
  <div id="mypopover" popover>Popover content</div>
  ```

- Über eine JavaScript-API. Zum Beispiel kann [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) verwendet werden, um ein Popover zwischen sichtbar und verborgen umzuschalten.

Es gibt auch neue Ereignisse, um auf das Umschalten eines Popovers zu reagieren, und CSS-Features, um das Styling von Popovers zu erleichtern. Alle neuen Funktionen sind unten aufgeführt.

Siehe [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) für einen detaillierten Leitfaden zur Nutzung dieser API.

## HTML-Attribute

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)
  - : Ein globales Attribut, das ein Element in ein Popover-Element verwandelt; nimmt einen Popover-Zustand (`"auto"`, `"hint"` oder `"manual"`) als Wert an.
- [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - : Verwandelt ein {{htmlelement("button")}}- oder {{htmlelement("input")}}-Element in einen Popover-Steuerungsbutton; nimmt die ID des zu steuernden Popover-Elements als Wert an.
- [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)
  - : Gibt die Aktion an, die (`"hide"`, `"show"`, oder `"toggle"`) auf dem durch einen Steuerungs-{{htmlelement("button")}} oder {{htmlelement("input")}} gesteuerten Popover-Element ausgeführt werden soll.

## CSS-Funktionen

- {{cssxref("::backdrop")}}
  - : Das `::backdrop`-Pseudoelement ist ein vollbildiges Element, das direkt hinter Popover-Elementen platziert wird und es ermöglicht, Effekte auf die Seiteninhalte hinter den Popover(s) hinzuzufügen, wenn gewünscht (zum Beispiel, um sie auszufokussieren).
- {{cssxref(":popover-open")}}
  - : Die `:popover-open`-Pseudoklasse trifft auf ein Popover-Element nur zu, wenn es im Anzeigezustand ist — sie kann verwendet werden, um Popover-Elemente zu stylen, wenn sie angezeigt werden.

## Schnittstellen

- [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)
  - : Repräsentiert ein Ereignis, das den Benutzer darüber informiert, wenn sich der Zustand eines Popover-Elements zwischen sichtbar und verborgen umschaltet. Es ist das Ereignisobjekt für die Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event), die auf Popovers ausgelöst werden, wenn sich deren Zustand ändert.

## Erweiterungen zu anderen Schnittstellen

### Instanzeigenschaften

- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Ruft den Popover-Zustand eines Elements ab und setzt ihn über JavaScript (`"auto"`, `"hint"` oder `"manual"`), und kann für die Funktionsprüfung verwendet werden. Reflektiert den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover).
- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)
  - : Ruft das vom Steuerungsbutton gesteuerte Popover-Element ab und setzt es. Das JavaScript-Äquivalent des HTML-Attributs [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget).
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)
  - : Ruft die auszuführende Aktion (`"hide"`, `"show"` oder `"toggle"`) auf dem vom Steuerungsbutton gesteuerten Popover-Element ab und setzt sie. Reflektiert den Wert des HTML-Attributs [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction).

### Instanzmethoden

- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Verbirgt ein Popover-Element, indem es aus der obersten Ebene entfernt und mit `display: none` gestylt wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element, indem es zur obersten Ebene hinzugefügt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Schaltet ein Popover-Element zwischen sichtbarem und verborgenen Zustand um.

### Ereignisse

- [`HTMLElement.beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) Ereignis
  - : Wird kurz bevor der Zustand eines Popover-Elements zwischen sichtbar und verborgen wechselt oder umgekehrt ausgelöst.
    Kann verwendet werden, um zu verhindern, dass ein Popover geöffnet wird, oder um andere Elemente zu aktualisieren, die durch den Popover-Zustand ausgelöst werden müssen.
- [`HTMLElement.toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignis
  - : Wird unmittelbar nachdem sich der Zustand eines Popover-Elements zwischen sichtbar und verborgen wechselt oder umgekehrt ausgelöst.

## Beispiele

Besuchen Sie unsere [Popover-API-Beispiele-Seite](https://mdn.github.io/dom-examples/popover-api/), um auf die vollständige Sammlung von MDN-Popover-Beispielen zuzugreifen.

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
