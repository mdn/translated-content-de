---
title: Web Components
slug: Web/API/Web_components
l10n:
  sourceCommit: ab1a08839a5bcb50d550ebda8df37d18ced04d50
---

{{DefaultAPISidebar("Web Components")}}

Web Components ist eine Suite von verschiedenen Technologien, die es Ihnen ermöglichen, wiederverwendbare benutzerdefinierte Elemente zu erstellen – mit ihrer Funktionalität von Ihrem restlichen Code gekapselt – und sie in Ihren Webanwendungen zu nutzen.

## Konzepte und Nutzung

Als Entwickler wissen wir alle, dass es eine gute Idee ist, Code so oft wie möglich wiederzuverwenden. Dies war traditionell nicht so einfach für benutzerdefinierte Markup-Strukturen – denken Sie an das komplexe HTML (und die dazugehörigen Styles und Skripte), die Sie manchmal schreiben mussten, um benutzerdefinierte UI-Steuerelemente zu rendern, und wie die mehrfache Nutzung dieser Elemente Ihre Seite in ein Chaos verwandeln kann, wenn Sie nicht vorsichtig sind.

Web Components zielt darauf ab, solche Probleme zu lösen – es besteht aus drei Haupttechnologien, die zusammen verwendet werden können, um vielseitige benutzerdefinierte Elemente mit gekapselter Funktionalität zu erstellen, die mit weniger Risiko von Namens- und Stilkonflikten wiederverwendet werden können:

- **Benutzerdefinierte Elemente**
  - : Ein Satz von JavaScript-APIs, die es Ihnen ermöglichen, benutzerdefinierte Elemente und deren Verhalten zu definieren, die dann nach Wunsch in Ihrer Benutzeroberfläche verwendet werden können.
- **Shadow DOM**
  - : Ein Mechanismus zum Anfügen eines gekapselten „Schatten“-DOM-Baums an ein Element, entweder durch imperative JavaScript-APIs oder deklarativ in HTML.
    Dies ermöglicht es Ihnen, die Eigenschaften eines Elements privat zu halten, sodass ihre Styles und IDs nicht mit anderen Teilen des Dokuments kollidieren.
- **HTML-Vorlagen**
  - : Die {{HTMLElement("template")}}- und {{HTMLElement("slot")}}-Elemente ermöglichen es Ihnen, Markup-Vorlagen zu schreiben, die nicht auf der gerenderten Seite angezeigt werden. Diese können dann mehrfach als Grundlage für die Struktur eines benutzerdefinierten Elements verwendet werden.

Der grundlegende Ansatz zur Implementierung eines Web Components sieht im Allgemeinen wie folgt aus:

1. Erstellen Sie eine Klasse, in der Sie die Funktionalität Ihres Web Components unter Verwendung der [class](/de/docs/Web/JavaScript/Reference/Classes) Syntax spezifizieren.
2. Registrieren Sie Ihr neues benutzerdefiniertes Element mit der Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define), indem Sie den zu definierenden Elementnamen, die Klasse oder Funktion, in der dessen Funktionalität spezifiziert ist, und optional das Element, von dem es erbt, übergeben. Sie können im globalen Registry über [`Window.customElements`](/de/docs/Web/API/Window/customElements) registrieren oder ein [scoped registry](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) mit dem [`CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry) Konstruktor erstellen, um Namenskonflikte zwischen Komponenten zu vermeiden.
3. Wenn erforderlich, fügen Sie dem benutzerdefinierten Element ein Shadow DOM mit der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) hinzu. Fügen Sie dem Shadow DOM Kinderelemente, Ereignislistener usw. hinzu, indem Sie reguläre DOM-Methoden verwenden.
4. Wenn erforderlich, definieren Sie eine HTML-Vorlage mit {{htmlelement("template")}} und {{htmlelement("slot")}}. Verwenden Sie erneut reguläre DOM-Methoden, um die Vorlage zu klonen und an Ihr Shadow DOM anzuhängen.
5. Verwenden Sie Ihr benutzerdefiniertes Element, wo immer Sie möchten, auf Ihrer Seite, genau wie Sie jedes reguläre HTML-Element verwenden würden.

## Leitfäden

- [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
  - : Ein Leitfaden, der zeigt, wie man die Funktionen von benutzerdefinierten Elementen nutzt, um einfache Web Components zu erstellen, und auch Lebenszyklus-Callbacks und einige andere fortgeschrittenere Funktionen untersucht.
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
  - : Ein Leitfaden, der grundsätzliche Konzepte von Shadow DOM zeigt, wie man es an ein Element anhängt, zum Shadow DOM-Baum hinzufügt, es stylt und mehr.
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
  - : Ein Leitfaden, der zeigt, wie man eine wiederverwendbare HTML-Struktur mit {{htmlelement("template")}}- und {{htmlelement("slot")}}-Elementen definiert und diese Struktur dann in Ihre Web Components integriert.

## Referenz

### Benutzerdefinierte Elemente

- [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)
  - : Beinhaltet die Funktionalität im Zusammenhang mit benutzerdefinierten Elementen, insbesondere die [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode, die verwendet wird, um neue benutzerdefinierte Elemente zu registrieren, sodass sie dann in Ihrem Dokument verwendet werden können. Der [`CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry)-Konstruktor kann verwendet werden, um eingeschränkte Registries zu erstellen, und die [`CustomElementRegistry.initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize)-Methode assoziiert eine eingeschränkte Registry mit einem DOM-Teilbaum.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements)
  - : Gibt eine Referenz auf das globale `CustomElementRegistry`-Objekt zurück.
- [`Document.customElementRegistry`](/de/docs/Web/API/Document/customElementRegistry)
  - : Das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry), das mit dem Dokument assoziiert ist.
- [`Element.customElementRegistry`](/de/docs/Web/API/Element/customElementRegistry)
  - : Das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry), das mit dem Element assoziiert ist.
- [Lebenszyklus-Callbacks](/de/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks)
  - : Spezielle Callback-Funktionen, die innerhalb der Klassendefinition des benutzerdefinierten Elements definiert sind und sein Verhalten beeinflussen:
    - `connectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element erstmals mit dem DOM des Dokuments verbunden wird.
    - `disconnectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element vom DOM des Dokuments getrennt wird.
    - `adoptedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element in ein neues Dokument verschoben wird.
    - `attributeChangedCallback()`
      - : Wird aufgerufen, wenn eines der Attribute des benutzerdefinierten Elements hinzugefügt, entfernt oder geändert wird.

- Erweiterungen zur Erstellung benutzerdefinierter eingebauter Elemente
  - : Die folgenden Erweiterungen sind definiert:
    - Das globale HTML-Attribut [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)
      - : Ermöglicht es Ihnen, anzugeben, dass ein standardmäßiges HTML-Element wie ein registriertes benutzerdefiniertes eingebautes Element funktionieren soll.
    - Die Option „is“ der [`Document.createElement()`](/de/docs/Web/API/Document/createElement)-Methode
      - : Ermöglicht es Ihnen, eine Instanz eines standardmäßigen HTML-Elements zu erstellen, die wie ein angegebenes registriertes benutzerdefiniertes eingebautes Element funktioniert.

- CSS-Pseudo-Klassen
  - : Pseudo-Klassen, die sich speziell auf benutzerdefinierte Elemente beziehen:
    - {{cssxref(":defined")}}
      - : Passt auf jedes Element, das definiert ist, einschließlich eingebauter Elemente und benutzerdefinierter Elemente, die mit `CustomElementRegistry.define()` definiert wurden.
    - {{cssxref(":host")}}
      - : Wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM), der das CSS enthält, das darin verwendet wird.
    - {{cssxref(":host", ":host()")}}
      - : Wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM), der das CSS enthält, das darin verwendet wird (sodass Sie ein benutzerdefiniertes Element von innen seinem Shadow DOM auswählen können) – aber nur, wenn der als Parameter der Funktion gegebene Selektor zum Shadow-Host passt.
    - {{cssxref(":host-context", ":host-context()")}}
      - : Wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM), der das CSS enthält, das darin verwendet wird (sodass Sie ein benutzerdefiniertes Element von innen seinem Shadow DOM auswählen können) – aber nur, wenn der als Parameter der Funktion gegebene Selektor zum Vorfahren des Shadow-Hosts an dem Ort passt, an dem es sich in der DOM-Hierarchie befindet.
    - {{CSSxRef(":state",":state()")}}
      - : Passt auf benutzerdefinierte Elemente zu, die sich in einem angegebenen benutzerdefinierten Zustand befinden.
        Genauer gesagt passt es auf anonyme benutzerdefinierte Elemente zu, bei denen der angegebene Zustand im [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) des Elements vorhanden ist.

- CSS-Pseudo-Elemente
  - : Pseudo-Elemente, die sich speziell auf benutzerdefinierte Elemente beziehen:
    - {{cssxref("::part")}}
      - : Repräsentiert jedes Element innerhalb eines [Shadow Trees](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attribut hat.

### Shadow DOM

- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)
  - : Repräsentiert den Wurzelknoten eines Shadow DOM Teilbaums.
- [`ShadowRoot.customElementRegistry`](/de/docs/Web/API/ShadowRoot/customElementRegistry)
  - : Das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry), das mit dem Shadow-Root verbunden ist. Kann über die Option `customElementRegistry` von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) gesetzt werden oder später mit [`CustomElementRegistry.initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize).
- Erweiterungen von [`Element`](/de/docs/Web/API/Element)
  - : Erweiterungen der `Element`-Schnittstelle, die sich auf Shadow DOM beziehen:
    - Die Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) fügt dem angegebenen Element einen Shadow DOM-Baum hinzu.
    - Die Eigenschaft [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) gibt den an das angegebene Element angehängten Shadow-Root zurück oder `null`, wenn kein Shadow-Root angehängt ist.

- Relevante Ergänzungen zu [`Node`](/de/docs/Web/API/Node)
  - : Ergänzungen zur `Node`-Schnittstelle, die für Shadow DOM relevant sind:
    - Die Methode [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode) gibt den Wurzelknoten des Kontextobjekts zurück, einschließlich des Shadow-Roots, falls verfügbar.
    - Die Eigenschaft [`Node.isConnected`](/de/docs/Web/API/Node/isConnected) gibt einen booleschen Wert zurück, der angibt, ob der Knoten (direkt oder indirekt) mit dem Kontextobjekt verbunden ist, z.B. dem [`Document`](/de/docs/Web/API/Document)-Objekt im Fall des normalen DOM oder dem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) im Fall eines Shadow DOM.

- Erweiterungen des [`Event`](/de/docs/Web/API/Event)
  - : Erweiterungen der `Event`-Schnittstelle, die mit Shadow DOM zusammenhängen:
    - [`Event.composed`](/de/docs/Web/API/Event/composed)
      - : Gibt `true` zurück, wenn das Ereignis über die Grenze des Shadow DOM in das Standard-DOM propagiert wird, andernfalls `false`.
    - [`Event.composedPath`](/de/docs/Web/API/Event/composedPath)
      - : Gibt den Ereignispfad zurück (Objekte, auf denen Listener aufgerufen werden). Dies schließt keine Knoten in Shadow Trees ein, wenn der Shadow-Root mit [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) geschlossen erstellt wurde.

### HTML-Vorlagen

- {{htmlelement("template")}}
  - : Beinhaltet ein HTML-Fragment, das beim initialen Laden eines enthaltenen Dokuments nicht gerendert wird, aber zur Laufzeit mit JavaScript angezeigt werden kann, hauptsächlich als Grundlage für die Struktur von benutzerdefinierten Elementen verwendet. Die zugehörige DOM-Schnittstelle ist [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
- {{htmlelement("slot")}}
  - : Ein Platzhalter innerhalb eines Web Components, den Sie mit Ihrem eigenen Markup füllen können, sodass Sie separate DOM-Bäume erstellen und sie zusammen präsentieren können. Die zugehörige DOM-Schnittstelle ist [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement).
- Das globale HTML-Attribut [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)
  - : Weist einem Element einen Slot in einem Shadow DOM-Shadow Tree zu.
- [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot)
  - : Ein schreibgeschütztes Attribut, das eine Referenz auf den {{htmlelement("slot")}} zurückgibt, in den dieses Element eingefügt wird.
- [`Text.assignedSlot`](/de/docs/Web/API/Text/assignedSlot)
  - : Ein schreibgeschütztes Attribut, das eine Referenz auf den {{htmlelement("slot")}} zurückgibt, in den dieser Textknoten eingefügt wird.
- Erweiterungen von [`Element`](/de/docs/Web/API/Element)
  - : Erweiterungen der `Element`-Schnittstelle, die mit Slots zusammenhängen:
    - [`Element.slot`](/de/docs/Web/API/Element/slot)
      - : Gibt den Namen des Shadow DOM Slots zurück, der mit dem Element verbunden ist.

- CSS-Pseudo-Elemente
  - : Pseudo-Elemente, die sich speziell auf Slots beziehen:
    - {{cssxref("::slotted")}}
      - : Passt auf beliebige Inhalte, die in einen Slot eingefügt werden.

- Das [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event) Ereignis
  - : Wird auf einer Instanz eines [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) ({{htmlelement("slot")}}-Element) ausgelöst, wenn sich die darin enthaltenen Knoten ändern.

## Beispiele

Wir bauen eine Reihe von Beispielen in unserem [web-components-examples](https://github.com/mdn/web-components-examples) GitHub-Repo auf. Es werden im Laufe der Zeit mehr hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
