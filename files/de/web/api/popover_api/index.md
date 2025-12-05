---
title: Popover API
slug: Web/API/Popover_API
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{DefaultAPISidebar("Popover API")}}

Die **Popover-API** bietet Entwicklern einen standardisierten, konsistenten und flexiblen Mechanismus zur Anzeige von Popover-Inhalten über anderen Seiteninhalten. Popover-Inhalte können entweder über HTML-Attribute oder über JavaScript gesteuert werden.

## Konzepte und Verwendung

Ein sehr häufiges Muster im Web ist es, Inhalte über anderen Inhalten anzuzeigen, um die Aufmerksamkeit des Benutzers auf bestimmte wichtige Informationen oder Aktionen zu lenken, die ergriffen werden müssen. Diese Inhalte können verschiedene Namen annehmen - Overlays, Popups, Popovers, Dialoge usw. In der Dokumentation werden wir sie als Popovers bezeichnen. Allgemein gesprochen, können diese:

- **modal** sein, was bedeutet, dass während ein Popover angezeigt wird, der Rest der Seite nicht interaktiv ist, bis das Popover in irgendeiner Weise bearbeitet wird (zum Beispiel wird eine wichtige Entscheidung getroffen).
- **nicht-modal** sein, was bedeutet, dass der Rest der Seite interaktiv bleibt, während das Popover gezeigt wird.

Mit der Popover-API erstellte Popovers sind immer nicht-modal. Wenn Sie ein modales Popover erstellen möchten, ist ein {{htmlelement("dialog")}}-Element der richtige Weg. Es gibt erhebliche Überschneidungen zwischen den beiden — Sie können beispielsweise ein Popover erstellen, das bestehen bleibt, es jedoch mit HTML steuern. Sie können ein `<dialog>`-Element in ein Popover verwandeln (`<dialog popover>` ist völlig gültig), wenn Sie die Popover-Steuerung mit Dialog-Semantik kombinieren möchten.

Typische Anwendungsfälle für die Popover-API umfassen benutzerinteraktive Elemente wie Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Formularelementvorschläge, Inhaltswähler oder Lehr-UI.

Sie können Popovers auf verschiedene Weise erstellen:

- Über einen Satz neuer HTML-Attribute. Ein einfaches Popover mit einem Umschaltknopf kann mit dem folgenden Code erstellt werden:

  ```html
  <button popovertarget="mypopover">Toggle the popover</button>
  <div id="mypopover" popover>Popover content</div>
  ```

- Über eine JavaScript-API. Zum Beispiel kann [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) verwendet werden, um ein Popover zwischen angezeigt und versteckt umzuschalten.

Die Popover-API bietet auch Ereignisse, um auf das Umschalten eines Popovers zu reagieren, sowie CSS-Features zur Unterstützung bei der Gestaltung von Popovers. Siehe [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) für einen detaillierten Leitfaden zur API.

Eine verwandte Funktion — **Interest Invokers** — kann verwendet werden, um Popovers bei Hover/Fokus ohne JavaScript-Anforderungen anzuzeigen. Sehen Sie sich [Verwendung von Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers) an, um mehr zu erfahren.

## HTML-Attribute

- [`interestfor`](/de/docs/Web/HTML/Reference/Elements/button#interestfor) {{experimental_inline}}
  - : Definiert ein HTML {{htmlelement("a")}}, {{htmlelement("button")}} oder {{htmlelement("area")}}-Element oder ein SVG [`<a>`](/de/docs/Web/SVG/Reference/Element/a)-Element, als einen Interest Invoker. Sein Wert ist die `id` des Ziel-Elements, das in irgendeiner Weise beeinflusst wird (normalerweise angezeigt oder versteckt), wenn Interesse auf dem Invoker-Element gezeigt oder verloren wird.
- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)
  - : Ein globales Attribut, das ein Element in ein Popover-Element verwandelt; nimmt einen Popover-Status (`"auto"`, `"hint"` oder `"manual"`) als Wert an.
- [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - : Verwandelt ein {{htmlelement("button")}} oder {{htmlelement("input")}}-Element in einen Popover-Steuerknopf; nimmt die ID des zu steuernden Popover-Elements als Wert an.
- [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)
  - : Gibt die Aktion an, die auf das vom Steuerknopf gesteuerte Popover-Element ausgeführt werden soll (`"hide"`, `"show"` oder `"toggle"`).

## CSS-Features

- {{cssxref("::backdrop")}}
  - : Das `::backdrop` Pseudo-Element ist ein Vollbild-Element, das direkt hinter den Popover-Elementen platziert wird und ermöglicht, Effekte auf den Seiteninhalt hinter dem/den Popover(s) anzuwenden (zum Beispiel es verschwommen darzustellen).
- [`interest-delay`](/de/docs/Web/CSS/Reference/Properties/interest-delay), [`interest-delay-start`](/de/docs/Web/CSS/Reference/Properties/interest-delay-start), und [`interest-delay-end`](/de/docs/Web/CSS/Reference/Properties/interest-delay-end) {{experimental_inline}}
  - : Die Kurzform-Eigenschaft `interest-delay` und ihre zugehörigen Langformen `interest-delay-start` und `interest-delay-end` können verwendet werden, um eine Verzögerung zwischen dem Zeigen oder Verlieren des Interesses des Benutzers und dem Reagieren des Browsers auf diese Änderung hinzuzufügen.
- [`:interest-source`](/de/docs/Web/CSS/Reference/Selectors/:interest-source) und [`:interest-target`](/de/docs/Web/CSS/Reference/Selectors/:interest-target)
  - : Diese Selektoren können verwendet werden, um Stile nur dann auf den Interest Invoker und sein zugeordnetes Ziel-Element anzuwenden, wenn Interesse gezeigt wird.
- {{cssxref(":popover-open")}}
  - : Die `:popover-open` Pseudo-Klasse passt auf ein Popover-Element nur dann, wenn es im Anzeigestatus ist — sie kann verwendet werden, um Popover-Elemente zu gestalten, wenn sie angezeigt werden.

## Schnittstellen

- [`InterestEvent`](/de/docs/Web/API/InterestEvent) {{experimental_inline}}
  - : Das Ereignisobjekt für die [`interest`](/de/docs/Web/API/HTMLElement/interest_event) und [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event) Ereignisse. Dies enthält eine `source`-Eigenschaft, die eine Referenz auf das zugeordnete Interest Invoker-Element enthält.
- [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)
  - : Repräsentiert ein Ereignis, das ausgelöst wird, wenn ein Popover-Element zwischen angezeigt und versteckt umgeschaltet wird. Es ist das Ereignisobjekt für die [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignisse, die auf Popovers ausgelöst werden, wenn sich ihr Status ändert.

## Erweiterungen auf andere Schnittstellen

### Instanzeigenschaften

- [`interestForElement`](/de/docs/Web/API/HTMLButtonElement/interestForElement) {{experimental_inline}}
  - : Ruft eine Referenz auf das von einem Interest Invoker anvisierte Element ab oder legt sie fest. Wenn ein HTML- oder SVG-Interest Invoker auf ein Zielelement in seinem `interestfor` Attribut verweist, wird dieses Element in der entsprechenden DOM-Objekt `interestForElement`-Eigenschaft referenziert. Verfügbar in den Schnittstellen [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement), [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) und [`SVGAElement`](/de/docs/Web/API/SVGAElement).
- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Ruft den Popover-Status eines Elements über JavaScript ab oder legt ihn fest (`"auto"`, `"hint"` oder `"manual"`) und kann zur Feature-Erkennung verwendet werden. Spiegelt den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) wider.
- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`HTMLInputElement.popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)
  - : Ruft das vom Steuerknopf gesteuerte Popover-Element ab oder legt es fest. Das JavaScript-Äquivalent des HTML-Attributs [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget).
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction) und [`HTMLInputElement.popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)
  - : Ruft die Aktion ab oder legt sie fest (`"hide"`, `"show"` oder `"toggle"`), die auf das vom Steuerknopf gesteuerte Popover-Element ausgeführt werden soll. Spiegelt den Wert des HTML-Attributs [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) wider.

### Instanzmethoden

- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Versteckt ein Popover-Element, indem es aus der obersten Ebene entfernt und mit `display: none` gestaltet wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element an, indem es zur obersten Ebene hinzugefügt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Schaltet ein Popover-Element zwischen den Zuständen "angezeigt" und "versteckt" um.

### Ereignisse

- [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)-Ereignis
  - : Wird ausgelöst, kurz bevor sich der Status eines Popover-Elements von angezeigt zu versteckt ändert oder umgekehrt. Kann verwendet werden, um zu verhindern, dass sich ein Popover öffnet, oder um andere Elemente zu aktualisieren, die durch den Popover-Status ausgelöst werden müssen.
- [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis
  - : Wird ausgelöst, kurz nachdem sich der Status eines Popover-Elements von angezeigt zu versteckt oder umgekehrt ändert.
- [`interest`](/de/docs/Web/API/HTMLElement/interest_event) {{experimental_inline}}
  - : Wird am Ziel-Element eines Interest Invokers ausgelöst, wenn Interesse gezeigt wird, sodass Code als Reaktion ausgeführt werden kann.
- [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event) {{experimental_inline}}
  - : Wird am Ziel-Element eines Interest Invokers ausgelöst, wenn Interesse verloren geht, sodass Code als Reaktion ausgeführt werden kann.

## Beispiele

- Sehen Sie sich unsere Sammlung von [Popover-API-Beispielen](https://mdn.github.io/dom-examples/popover-api/) an.
- Sehen Sie sich unsere Sammlung von [Interest-Invoker-Beispielen](https://mdn.github.io/dom-examples/interest-invokers/) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) HTML globales Attribut
- [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) HTML-Attribut
- [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) HTML-Attribut
- [`::backdrop`](/de/docs/Web/CSS/Reference/Selectors/::backdrop) CSS-Pseudo-Element
- [`:popover-open`](/de/docs/Web/CSS/Reference/Selectors/:popover-open) CSS-Pseudo-Klasse
