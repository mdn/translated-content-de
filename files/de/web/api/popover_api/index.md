---
title: Popover API
slug: Web/API/Popover_API
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zum Anzeigen von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder über HTML-Attribute oder über JavaScript gesteuert werden.

## Konzepte und Verwendung

Ein sehr verbreitetes Muster im Web besteht darin, Inhalte über anderen Inhalten anzuzeigen, um die Aufmerksamkeit des Benutzers auf bestimmte wichtige Informationen oder Maßnahmen zu lenken, die ergriffen werden müssen. Diese Inhalte können mehrere unterschiedliche Namen haben — Overlays, Popups, Popovers, Dialoge usw. Wir werden sie in der Dokumentation als Popovers bezeichnen. Im Allgemeinen können diese sein:

- **modal**, was bedeutet, dass während ein Popover angezeigt wird, der Rest der Seite nicht interaktiv ist, bis das Popover in irgendeiner Weise verarbeitet wird (zum Beispiel, indem eine wichtige Entscheidung getroffen wird).
- **nicht-modal**, was bedeutet, dass der Rest der Seite interaktiv bleiben kann, während das Popover angezeigt wird.

Popovers, die mithilfe der Popover API erstellt werden, sind immer nicht-modal. Wenn Sie ein modales Popover erstellen möchten, ist ein {{htmlelement("dialog")}}-Element der richtige Weg. Es gibt erhebliche Überschneidungen zwischen den beiden — Sie könnten beispielsweise ein Popover erstellen wollen, das bestehen bleibt, es aber mithilfe von HTML steuern. Sie können ein `<dialog>`-Element in ein Popover umwandeln (`<dialog popover>` ist vollkommen gültig), wenn Sie die Popover-Steuerung mit den Dialogsemantiken kombinieren möchten.

Typische Anwendungsfälle für die Popover API sind benutzerinteraktive Elemente wie Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Formularvorschläge, Inhaltswähler oder Lehr-UI.

Sie können Popovers auf verschiedene Weise erstellen:

- Über eine Reihe neuer HTML-Attribute. Ein einfaches Popover mit einer Umschalttaste kann mit dem folgenden Code erstellt werden:

  ```html
  <button popovertarget="mypopover">Toggle the popover</button>
  <div id="mypopover" popover>Popover content</div>
  ```

- Über eine JavaScript-API. Zum Beispiel kann [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) verwendet werden, um ein Popover zwischen angezeigt und verborgen umzuschalten.

Die Popover API stellt auch Ereignisse zur Verfügung, um auf das Umschalten eines Popovers zu reagieren, und CSS-Funktionen zur Unterstützung beim Styling von Popovers. Siehe [Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using) für einen detaillierten Leitfaden zur API.

Ein verwandtes Feature — **Interest Invokers** — kann verwendet werden, um Popovers bei Hover/Fokus ohne Verwendung von JavaScript anzuzeigen. Lesen Sie [Verwendung von Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers), um mehr zu erfahren.

## HTML-Attribute

- [`interestfor`](/de/docs/Web/HTML/Reference/Elements/button#interestfor) {{experimental_inline}}
  - : Definiert ein HTML-{{htmlelement("a")}}, {{htmlelement("button")}} oder {{htmlelement("area")}}-Element oder ein SVG- [`<a>`](/de/docs/Web/SVG/Reference/Element/a)-Element als Interest Invoker. Sein Wert ist die `id` des Zielelements, das in irgendeiner Weise beeinflusst wird (normalerweise angezeigt oder verborgen), wenn Interesse am Invoker-Element gezeigt oder verloren geht.
- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)
  - : Ein globales Attribut, das ein Element in ein Popover-Element verwandelt und als Wert einen Popover-Zustand (`"auto"`, `"hint"` oder `"manual"`) annimmt.
- [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - : Verwandelt ein {{htmlelement("button")}}- oder {{htmlelement("input")}}-Element in eine Popover-Steuertaste und nimmt die ID des zu steuernden Popover-Elements als Wert an.
- [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)
  - : Gibt die Aktion an, die (`"hide"`, `"show"` oder `"toggle"`) am vom Steuer-{{htmlelement("button")}} oder {{htmlelement("input")}} beeinflussten Popover-Element ausgeführt werden soll.

## CSS-Funktionen

- {{cssxref("::backdrop")}}
  - : Das `::backdrop`-Pseudo-Element ist ein Vollbild-Element, das direkt hinter Popover-Elementen platziert wird und Effekte auf den Seiteninhalt hinter dem/den Popover(s) hinzugefügt, wenn gewünscht (zum Beispiel, um es zu verwischen).
- {{cssxref("interest-delay")}}, {{cssxref("interest-delay-start")}}, und {{cssxref("interest-delay-end")}} {{experimental_inline}}
  - : Die `interest-delay`-Kurzschreibweise und ihre zugehörigen `interest-delay-start` und `interest-delay-end` Langschreibweisen können verwendet werden, um eine Verzögerung zwischen der Anzeige oder dem Verlust von Interesse und der Reaktion des Browsers auf diese Änderung hinzugefügt werden.
- {{cssxref(":interest-source")}} und {{cssxref(":interest-target")}}
  - : Diese Selektoren können verwendet werden, um Stil nur auf den Interest Invoker und sein zugehöriges Zielelement anzuwenden, wenn Interesse angezeigt wird.
- {{cssxref(":popover-open")}}
  - : Die `:popover-open`-Pseudo-Klasse passt auf ein Popover-Element nur, wenn es sich im angezeigten Zustand befindet — es kann verwendet werden, um Popover-Elemente zu stylen, wenn sie angezeigt werden.

## Schnittstellen

- [`InterestEvent`](/de/docs/Web/API/InterestEvent) {{experimental_inline}}
  - : Das Ereignisobjekt für die [`interest`](/de/docs/Web/API/HTMLElement/interest_event)- und [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event)-Ereignisse. Dies umfasst eine `source`-Eigenschaft, die eine Referenz auf das zugehörige Interest Invoker-Element enthält.
- [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)
  - : Stellt ein Ereignis dar, das ausgelöst wird, wenn ein Popover-Element zwischen angezeigt und verborgen gewechselt wird. Es ist das Ereignisobjekt für die [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)- und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignisse, die auf Popovers ausgelöst werden, wenn sich ihr Zustand ändert.

## Erweiterungen zu anderen Schnittstellen

### Instanzeigenschaften

- [`interestForElement`](/de/docs/Web/API/HTMLButtonElement/interestForElement) {{experimental_inline}}
  - : Ruft eine Referenz auf das Element ab oder setzt es, das von einem Interest Invoker anvisiert wird. Wenn ein HTML- oder SVG-Interest Invoker ein Zielelement in seinem `interestfor`-Attribut referenziert, wird dieses Element in der äquivalenten `interestForElement`-Eigenschaft des DOM-Objekts referenziert. Verfügbar in den Schnittstellen [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement), [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) und [`SVGAElement`](/de/docs/Web/API/SVGAElement).
- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Ruft den Popover-Zustand eines Elements über JavaScript ab und setzt ihn (`"auto"`, `"hint"` oder `"manual"`), und kann zur Feature-Erkennung verwendet werden. Widerspiegelt den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover).
- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)
  - : Ruft das Popover-Element ab und setzt es, das von der Steuertaste kontrolliert wird. Das JavaScript-Äquivalent des HTML-Attributs [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget).
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)
  - : Ruft die Aktion ab, die (`"hide"`, `"show"` oder `"toggle"`) am vom Steuerknopf kontrollierten Popover-Element ausgeführt werden soll, und setzt sie. Widerspiegelt den Wert des HTML-Attributs [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction).

### Instanzmethoden

- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Verbirgt ein Popover-Element, indem es aus der obersten Ebene entfernt und mit `display: none` gestylt wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element, indem es zur obersten Ebene hinzugefügt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Schaltet ein Popover-Element zwischen den angezeigten und verborgenen Zuständen um.

### Ereignisse

- [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) Ereignis
  - : Wird unmittelbar bevor der Zustand eines Popover-Elements zwischen angezeigt und verborgen oder umgekehrt wechselt, ausgelöst.
    Kann verwendet werden, um zu verhindern, dass ein Popover sich öffnet, oder um andere Elemente zu aktualisieren, die durch den Popover-Zustand ausgelöst werden müssen.
- [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignis
  - : Wird unmittelbar nachdem der Zustand eines Popover-Elements zwischen angezeigt und verborgen oder umgekehrt gewechselt hat, ausgelöst.
- [`interest`](/de/docs/Web/API/HTMLElement/interest_event) {{experimental_inline}}
  - : Wird am Zielelement eines Interest Invokers ausgelöst, wenn Interesse angezeigt wird, wodurch Code als Antwort ausgeführt werden kann.
- [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event) {{experimental_inline}}
  - : Wird am Zielelement eines Interest Invokers ausgelöst, wenn Interesse verloren geht, wodurch Code als Antwort ausgeführt werden kann.

## Beispiele

- Sehen Sie sich unsere Sammlung von [Popover API-Beispielen](https://mdn.github.io/dom-examples/popover-api/) an.
- Sehen Sie sich unsere Sammlung von [Interest Invoker-Beispielen](https://mdn.github.io/dom-examples/interest-invokers/) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) globales HTML-Attribut
- [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) HTML-Attribut
- [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) HTML-Attribut
- {{cssxref("::backdrop")}} CSS-Pseudo-Element
- {{cssxref(":popover-open")}} CSS-Pseudo-Klasse
