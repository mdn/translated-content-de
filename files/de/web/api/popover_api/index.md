---
title: Popover API
slug: Web/API/Popover_API
l10n:
  sourceCommit: f8730b451b37940432ea4203fa78a0454e3efee6
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover API** bietet Entwicklern einen standardisierten, konsistenten, flexiblen Mechanismus, um Popover-Inhalte über anderen Seiteninhalten anzuzeigen. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden.

## Konzepte und Verwendung

Ein sehr gängiges Muster im Web ist das Anzeigen von Inhalten über anderen Inhalten, um die Aufmerksamkeit des Nutzers auf spezifisch wichtige Informationen oder Aktionen zu lenken, die ergriffen werden müssen. Diese Inhalte können verschiedene Namen haben — Overlays, Popups, Popovers, Dialoge usw. In dieser Dokumentation werden wir sie als Popovers bezeichnen. Generell gesprochen können diese sein:

- **modal**, was bedeutet, dass während ein Popover angezeigt wird, der Rest der Seite nicht interaktiv ist, bis das Popover in irgendeiner Weise gehandhabt wird (zum Beispiel, wenn eine wichtige Entscheidung getroffen wird).
- **non-modal**, was bedeutet, dass der Rest der Seite interaktiv bleibt, während das Popover angezeigt wird.

Popover, die mit der Popover API erstellt wurden, sind immer non-modal. Wenn Sie ein modales Popover erstellen möchten, ist das {{htmlelement("dialog")}}-Element der richtige Weg. Es gibt erhebliche Überschneidungen zwischen beiden — Sie könnten beispielsweise ein Popover erstellen wollen, das bestehen bleibt, es aber mittels deklarativem HTML steuern. Sie können ein `<dialog>`-Element in ein Popover verwandeln (`<dialog popover>` ist völlig gültig), wenn Sie die Popover-Steuerung mit den Dialog-Semantiken kombinieren möchten.

Typische Anwendungsfälle für die Popover API umfassen benutzerinteraktive Elemente wie Aktionsmenüs, benutzerdefinierte "Toast" Benachrichtigungen, Vorschläge für Formularelemente, Inhaltspicker oder UI-Lernhilfen.

Sie können Popovers auf zwei verschiedene Arten erstellen:

- Deklarativ, über eine Reihe neuer HTML-Attribute. Ein einfaches Popover mit einem Umschaltbutton kann mit folgendem Code erstellt werden:

  ```html
  <button popovertarget="mypopover">Toggle the popover</button>
  <div id="mypopover" popover>Popover content</div>
  ```

- Über eine JavaScript-API. Zum Beispiel kann [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) verwendet werden, um ein Popover zwischen angezeigt und verborgen umzuschalten.

Es gibt auch neue Ereignisse, um auf die Umschaltung eines Popovers zu reagieren, und CSS-Features, die bei der Gestaltung von Popovers helfen. Alle neuen Funktionen sind unten aufgelistet.

Siehe [Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using) für einen ausführlichen Leitfaden zur Verwendung dieser API.

## HTML-Attribute

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover)
  - : Ein globales Attribut, das ein Element in ein Popover-Element verwandelt; nimmt einen Popover-Zustand (`"auto"` oder `"manual"`) als seinen Wert.
- [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)
  - : Verwandelt ein {{htmlelement("button")}}- oder {{htmlelement("input")}}-Element in einen Popover-Steuerbutton; nimmt die ID des Popover-Elements als seinen Wert.
- [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)
  - : Gibt die auszuführende Aktion (`"hide"`, `"show"` oder `"toggle"`) auf dem von einem Steuerbutton gesteuerten Popover-Element an.

## CSS-Features

- {{cssxref("::backdrop")}}
  - : Das `::backdrop` Pseudo-Element ist ein bildschirmfüllendes Element, das direkt hinter Popover-Elementen platziert wird, um Effekte auf den Seiteninhalt hinter dem/den Popover(n) hinzuzufügen (zum Beispiel um diesen zu verwischen).
- {{cssxref(":popover-open")}}
  - : Die `:popover-open` Pseudo-Klasse trifft auf ein Popover-Element nur dann zu, wenn es im Zustand "angezeigt" ist — es kann verwendet werden, um Popover-Elemente zu gestalten, wenn sie angezeigt werden.

## Schnittstellen

- [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)
  - : Repräsentiert ein Ereignis, das den Nutzer benachrichtigt, wenn der Zustand eines Popover-Elements zwischen "angezeigt" und "verborgen" umschaltet. Es ist das Ereignisobjekt für die [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)- und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignisse, die bei Popovers ausgelöst werden, wenn sich ihr Zustand ändert.

## Erweiterungen anderer Schnittstellen

### Instanzeigenschaften

- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Ruft den Popover-Zustand eines Elements über JavaScript ab oder setzt diesen (`"auto"` oder `"manual"`), und kann zur Feature-Erkennung verwendet werden. Reflektiert den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Global_attributes/popover).
- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)
  - : Ruft das von einem Steuerbutton kontrollierte Popover-Element ab oder setzt es. Dies ist das JavaScript-Äquivalent des HTML-Attributs [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget).
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)
  - : Ruft die durchzuführende Aktion (`"hide"`, `"show"`, `"toggle"`) auf dem von einem Steuerbutton gesteuerten Popover-Element ab oder setzt sie. Reflektiert den Wert des HTML-Attributs [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction).

### Instanzmethoden

- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Verbirgt ein Popover-Element, indem es aus der obersten Schicht entfernt und mit `display: none` gestylt wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element, indem es zur obersten Schicht hinzugefügt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Schaltet ein Popover-Element zwischen den Zuständen "angezeigt" und "verborgen" um.

### Ereignisse

- `HTMLElement` [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) Ereignis
  - : Wird unmittelbar bevor ein Zustand eines Popover-Elements zwischen "angezeigt" und "verborgen" wechselt oder umgekehrt ausgelöst.
- `HTMLElement` [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignis
  - : Wird unmittelbar nachdem ein Zustand eines Popover-Elements zwischen "angezeigt" und "verborgen" wechselt oder umgekehrt ausgelöst. Dieses Ereignis existierte bereits, um Zustandsänderungen bei {{htmlelement("details")}}-Elementen zu signalisieren, und es schien logisch, es für Popover-Elemente zu erweitern.

## Beispiele

Besuchen Sie unsere [Popover API Beispiele Übersichtsseite](https://mdn.github.io/dom-examples/popover-api/), um auf die vollständige Sammlung von MDN-Popover-Beispielen zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML globales Attribut
- [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) HTML-Attribut
- [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) HTML-Attribut
- [`::backdrop`](/de/docs/Web/CSS/::backdrop) CSS-Pseudoelement
- [`:popover-open`](/de/docs/Web/CSS/:popover-open) CSS-Pseudo-Klasse
