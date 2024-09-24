---
title: Popover-API
slug: Web/API/Popover_API
l10n:
  sourceCommit: f8730b451b37940432ea4203fa78a0454e3efee6
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus, um Popover-Inhalte über anderen Seiteninhalten anzuzeigen. Popover-Inhalte können entweder deklarativ mit HTML-Attributen oder über JavaScript gesteuert werden.

## Konzepte und Verwendung

Ein sehr gängiges Muster im Web ist es, Inhalte über anderen Inhalten anzuzeigen, um die Aufmerksamkeit der Benutzer auf spezifische wichtige Informationen oder Aktionen zu lenken, die ausgeführt werden müssen. Diese Inhalte können verschiedene Namen tragen — Overlays, Popups, Popovers, Dialoge, usw. Wir beziehen uns in der Dokumentation auf sie als Popovers. Allgemein gesagt, können diese sein:

- **Modal**, das bedeutet, während ein Popover angezeigt wird, wird der Rest der Seite nicht interaktiv gerendert, bis das Popover in irgendeiner Weise bearbeitet wird (zum Beispiel wird eine wichtige Wahl getroffen).
- **Nicht-Modal**, das bedeutet, dass der Rest der Seite interaktiv bleibt, während das Popover angezeigt wird.

Popovers, die mit der Popover-API erstellt werden, sind immer nicht-modal. Wenn Sie ein modales Popover erstellen möchten, ist ein {{htmlelement("dialog")}}-Element der richtige Weg. Es gibt erhebliche Überschneidungen zwischen den beiden — Sie könnten zum Beispiel ein Popover erstellen wollen, das bestehen bleibt, es aber mit deklarativem HTML steuern. Sie können ein `<dialog>`-Element in ein Popover umwandeln (`<dialog popover>` ist völlig gültig), wenn Sie die Popover-Kontrolle mit den Dialogsemanthiken kombinieren möchten.

Typische Anwendungsfälle für die Popover-API umfassen benutzerinteraktive Elemente wie Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Formularelementvorschläge, Inhaltsauswähler oder lehrende Benutzeroberflächen.

Sie können Popovers auf zwei verschiedene Arten erstellen:

- Deklarativ, über eine Reihe neuer HTML-Attribute. Ein einfaches Popover mit einem Umschaltknopf kann unter Verwendung des folgenden Codes erstellt werden:

  ```html
  <button popovertarget="mypopover">Das Popover umschalten</button>
  <div id="mypopover" popover>Popover-Inhalt</div>
  ```

- Über eine JavaScript-API. Die Methode {{domxref("HTMLElement.togglePopover()")}} kann zum Beispiel verwendet werden, um ein Popover zwischen angezeigt und versteckt umzuschalten.

Es gibt auch neue Ereignisse, um auf das Umschalten eines Popovers zu reagieren, und CSS-Funktionen, um bei der Gestaltung von Popovers zu helfen. Alle neuen Funktionen sind unten aufgeführt.

Siehe [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) für eine detaillierte Anleitung zur Verwendung dieser API.

## HTML-Attribute

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover)
  - : Ein globales Attribut, das ein Element in ein Popover-Element verwandelt; es nimmt einen Popover-Zustand (`"auto"` oder `"manual"`) als seinen Wert an.
- [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)
  - : Verwandelt ein {{htmlelement("button")}}- oder {{htmlelement("input")}}-Element in einen Popover-Kontrollknopf; nimmt die ID des Popover-Elements an, das gesteuert werden soll.
- [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)
  - : Gibt die auszuführende Aktion (`"hide"`, `"show"` oder `"toggle"`) auf dem von einem Kontroll-{{htmlelement("button")}} oder {{htmlelement("input")}} gesteuerten Popover-Element an.

## CSS-Funktionen

- {{cssxref("::backdrop")}}
  - : Das `::backdrop`-Pseudo-Element ist ein Vollbild-Element, das direkt hinter Popover-Elementen platziert wird, sodass Effekte auf den Seiteninhalt hinter dem/den Popover(n) hinzugefügt werden können, falls gewünscht (zum Beispiel es zu verwischen).
- {{cssxref(":popover-open")}}
  - : Die `:popover-open`-Pseudo-Klasse stimmt mit einem Popover-Element nur überein, wenn es sich im angezeigten Zustand befindet — es kann verwendet werden, um Popover-Elemente zu gestalten, wenn sie angezeigt werden.

## Schnittstellen

- {{domxref("ToggleEvent")}}
  - : Repräsentiert ein Ereignis, das den Benutzer benachrichtigt, wenn der Zustand eines Popover-Elements zwischen angezeigt und versteckt umschaltet. Es ist das Ereignisobjekt für die {{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} und {{domxref("HTMLElement.toggle_event", "toggle")}} Ereignisse, die auf Popovers ausgelöst werden, wenn sich ihr Zustand ändert.

## Erweiterungen an andere Schnittstellen

### Instanz-Eigenschaften

- {{domxref("HTMLElement.popover")}}
  - : Ruft den Popover-Zustand eines Elements über JavaScript ab und setzt ihn (`"auto"` oder `"manual"`), und kann für die Feature-Erkennung verwendet werden. Reflektiert den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Global_attributes/popover).
- {{domxref("HTMLButtonElement.popoverTargetElement")}} und {{domxref("HTMLInputElement.popoverTargetElement")}}
  - : Ruft das Popover-Element ab und setzt es, das durch den Steuerungsknopf kontrolliert wird. Das JavaScript-Äquivalent des HTML-Attributs [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget).
- {{domxref("HTMLButtonElement.popoverTargetAction")}} und {{domxref("HTMLInputElement.popoverTargetAction")}}
  - : Ruft die Aktion ab und setzt sie, die (`"hide"`, `"show"` oder `"toggle"`) auf dem durch den Steuerungsknopf kontrollierten Popover-Element ausgeführt wird. Reflektiert den Wert des HTML-Attributs [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction).

### Instanz-Methoden

- {{domxref("HTMLElement.hidePopover()")}}
  - : Verbirgt ein Popover-Element, indem es aus der obersten Ebene entfernt und mit `display: none` gestylt wird.
- {{domxref("HTMLElement.showPopover()")}}
  - : Zeigt ein Popover-Element, indem es zur obersten Ebene hinzugefügt wird.
- {{domxref("HTMLElement.togglePopover()")}}
  - : Schaltet ein Popover-Element zwischen angezeigt und versteckt um.

### Ereignisse

- `HTMLElement` {{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} Ereignis
  - : Wird unmittelbar bevor sich der Zustand eines Popover-Elements zwischen angezeigt und versteckt ändert, ausgelöst.
- `HTMLElement` {{domxref("HTMLElement.toggle_event", "toggle")}} Ereignis
  - : Wird unmittelbar nachdem sich der Zustand eines Popover-Elements zwischen angezeigt und versteckt ändert, ausgelöst. Dieses Ereignis existierte bereits, um Zustandsänderungen auf {{htmlelement("details")}}-Elementen zu signalisieren, und es schien logisch, es für Popover-Elemente zu erweitern.

## Beispiele

Besuchen Sie unsere [Beispielseite zur Popover-API](https://mdn.github.io/dom-examples/popover-api/), um auf die vollständige Sammlung von MDN Popover-Beispielen zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML globales Attribut
- [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) HTML Attribut
- [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) HTML Attribut
- [`::backdrop`](/de/docs/Web/CSS/::backdrop) CSS Pseudo-Element
- [`:popover-open`](/de/docs/Web/CSS/:popover-open) CSS Pseudo-Klasse
