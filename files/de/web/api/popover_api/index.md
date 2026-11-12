---
title: Popover API
slug: Web/API/Popover_API
l10n:
  sourceCommit: f81527232ae480626f8cec10a7d2775a698be30a
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus, um Popover-Inhalte über anderen Seiteninhalten anzuzeigen. Popover-Inhalte lassen sich entweder über HTML-Attribute oder über JavaScript steuern.

## Konzepte und Verwendung

Ein häufiges Muster im Web besteht darin, Inhalte über anderen Inhalten anzuzeigen, um die Aufmerksamkeit auf wichtige Informationen oder erforderliche Aktionen zu lenken. Solche Inhalte werden unterschiedlich bezeichnet – etwa als Overlays, Popups, Popovers oder Dialoge. In dieser Dokumentation bezeichnen wir sie als Popovers. Grundsätzlich können sie sein:

- **modal**: Während ein Popover angezeigt wird, ist der Rest der Seite nicht interaktiv, bis eine Aktion am Popover erfolgt, beispielsweise eine wichtige Entscheidung getroffen wird.
- **nicht modal**: Der Rest der Seite bleibt interaktiv, während das Popover angezeigt wird.

Mit der Popover API erstellte Popovers sind immer nicht modal. Wenn Sie ein modales Popover erstellen möchten, verwenden Sie ein {{htmlelement("dialog")}}-Element. Die beiden Ansätze überschneiden sich erheblich: Sie können beispielsweise ein Popover erstellen, das geöffnet bleibt, aber über HTML gesteuert wird. Ein `<dialog>`-Element kann auch als Popover verwendet werden (`<dialog popover>` ist gültig), wenn Sie die Popover-Steuerung mit der Semantik eines Dialogs kombinieren möchten.

Typische Anwendungsfälle für die Popover API sind interaktive Elemente wie Aktionsmenüs, benutzerdefinierte „Toast“-Benachrichtigungen, Vorschläge für Formularelemente, Auswahloberflächen für Inhalte oder Hilfen zur Bedienung der Benutzeroberfläche.

Sie können Popovers auf verschiedene Arten erstellen:

- Über eine Reihe neuer HTML-Attribute. Ein einfaches Popover mit einer Schaltfläche zum Umschalten lässt sich mit folgendem Code erstellen:

  ```html
  <button popovertarget="mypopover">Toggle the popover</button>
  <div id="mypopover" popover>Popover content</div>
  ```

- Über eine JavaScript-API. Beispielsweise können Sie mit [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) ein Popover abwechselnd ein- und ausblenden.

Die Popover API bietet außerdem Events, mit denen Sie auf das Ein- und Ausblenden eines Popovers reagieren können, sowie CSS-Funktionen zur Gestaltung von Popovers. Eine ausführliche Anleitung zur API finden Sie unter [Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using).

Eine verwandte Funktion – **Interest Invokers** – ermöglicht es, Popovers bei Hover oder Fokus ohne JavaScript anzuzeigen. Weitere Informationen finden Sie unter [Verwendung von Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers).

## HTML-Attribute

- [`interestfor`](/de/docs/Web/HTML/Reference/Elements/button#interestfor) {{experimental_inline}}
  - : Definiert ein HTML-Element {{htmlelement("a")}}, {{htmlelement("button")}} oder {{htmlelement("area")}} oder ein SVG-Element [`<a>`](/de/docs/Web/SVG/Reference/Element/a) als Interest Invoker. Der Wert ist die `id` des Zielelements, auf das sich ein gezeigtes oder verlorenes Interesse am Invoker-Element auswirkt – normalerweise, indem es ein- oder ausgeblendet wird.
- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)
  - : Ein globales Attribut, das ein Element zu einem Popover-Element macht. Als Wert wird ein Popover-Zustand (`"auto"`, `"hint"` oder `"manual"`) angegeben.
- [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - : Macht ein {{htmlelement("button")}}- oder {{htmlelement("input")}}-Element zu einer Schaltfläche zur Steuerung eines Popovers. Als Wert wird die ID des zu steuernden Popover-Elements angegeben.
- [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)
  - : Gibt die Aktion (`"hide"`, `"show"` oder `"toggle"`) an, die ein steuerndes {{htmlelement("button")}}- oder {{htmlelement("input")}}-Element am Popover-Element ausführen soll.

## CSS-Funktionen

- {{cssxref("::backdrop")}}
  - : Das Pseudoelement `::backdrop` erstreckt sich über den gesamten Bildschirm und liegt direkt hinter Popover-Elementen. Damit lassen sich bei Bedarf Effekte auf den Seiteninhalt hinter den Popovers anwenden, beispielsweise eine Unschärfe.
- {{cssxref("interest-delay")}}, {{cssxref("interest-delay-start")}} und {{cssxref("interest-delay-end")}} {{experimental_inline}}
  - : Mit der Kurzschreibweise `interest-delay` und den zugehörigen Einzel-Eigenschaften `interest-delay-start` und `interest-delay-end` lässt sich eine Verzögerung zwischen dem Anzeigen oder Verlieren von Interesse durch den Benutzer und der Reaktion des Browsers auf diese Änderung festlegen.
- {{cssxref(":interest-source")}} und {{cssxref(":interest-target")}}
  - : Mit diesen Selektoren können Sie den Interest Invoker beziehungsweise sein zugehöriges Zielelement nur dann gestalten, wenn Interesse angezeigt wird.
- {{cssxref(":popover-open")}}
  - : Die Pseudoklasse `:popover-open` trifft nur dann auf ein Popover-Element zu, wenn es angezeigt wird. Sie können damit angezeigte Popover-Elemente gestalten.

## Schnittstellen

- [`InterestEvent`](/de/docs/Web/API/InterestEvent) {{experimental_inline}}
  - : Das Event-Objekt für die Events [`interest`](/de/docs/Web/API/HTMLElement/interest_event) und [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event). Es enthält eine `source`-Eigenschaft mit einer Referenz auf das zugehörige Interest-Invoker-Element.
- [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)
  - : Repräsentiert ein Event, das ausgelöst wird, wenn ein Popover-Element zwischen dem angezeigten und dem ausgeblendeten Zustand wechselt. Es ist das Event-Objekt für die Events [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event), die bei einer Zustandsänderung von Popovers ausgelöst werden.

## Erweiterungen anderer Schnittstellen

### Instanzmethoden

- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Blendet ein Popover-Element aus, indem es aus der obersten Ebene entfernt und mit `display: none` gestaltet wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element an, indem es der obersten Ebene hinzugefügt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Wechselt den Zustand eines Popover-Elements zwischen angezeigt und ausgeblendet.

### Instanzeigenschaften

- [`interestForElement`](/de/docs/Web/API/HTMLButtonElement/interestForElement) {{experimental_inline}}
  - : Ruft eine Referenz auf das Zielelement eines Interest Invokers ab oder legt sie fest. Wenn ein HTML- oder SVG-Interest-Invoker über sein `interestfor`-Attribut auf ein Zielelement verweist, wird dieses Element über die `interestForElement`-Eigenschaft des entsprechenden DOM-Objekts referenziert. Verfügbar für die Schnittstellen [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement), [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) und [`SVGAElement`](/de/docs/Web/API/SVGAElement).
- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Ruft den Popover-Zustand eines Elements (`"auto"`, `"hint"` oder `"manual"`) über JavaScript ab oder legt ihn fest und kann zur Funktionserkennung verwendet werden. Spiegelt den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) wider.
- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)
  - : Ruft das von der Steuerschaltfläche gesteuerte Popover-Element ab oder legt es fest. Dies ist das JavaScript-Äquivalent des HTML-Attributs [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget).
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)
  - : Ruft die Aktion (`"hide"`, `"show"` oder `"toggle"`) ab, die die Steuerschaltfläche am Popover-Element ausführt, oder legt sie fest. Spiegelt den Wert des HTML-Attributs [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) wider.

### Events

- Event [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
  - : Wird unmittelbar vor dem Wechsel des Zustands eines Popover-Elements von angezeigt zu ausgeblendet oder umgekehrt ausgelöst.
    Kann verwendet werden, um das Öffnen eines Popovers zu verhindern oder andere Elemente zu aktualisieren, die auf den Popover-Zustand reagieren sollen.
- Event [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
  - : Wird unmittelbar nach dem Wechsel des Zustands eines Popover-Elements von angezeigt zu ausgeblendet oder umgekehrt ausgelöst.
- [`interest`](/de/docs/Web/API/HTMLElement/interest_event) {{experimental_inline}}
  - : Wird auf dem Zielelement eines Interest Invokers ausgelöst, wenn Interesse angezeigt wird. Dadurch kann als Reaktion darauf Code ausgeführt werden.
- [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event) {{experimental_inline}}
  - : Wird auf dem Zielelement eines Interest Invokers ausgelöst, wenn Interesse verloren geht. Dadurch kann als Reaktion darauf Code ausgeführt werden.

## Beispiele

- Sehen Sie sich unsere Sammlung von [Beispielen zur Popover API](https://mdn.github.io/dom-examples/popover-api/) an.
- Sehen Sie sich unsere Sammlung von [Beispielen für Interest Invokers](https://mdn.github.io/dom-examples/interest-invokers/) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Globales HTML-Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)
- HTML-Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)
- HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)
- CSS-Pseudoelement {{cssxref("::backdrop")}}
- CSS-Pseudoklasse {{cssxref(":popover-open")}}
