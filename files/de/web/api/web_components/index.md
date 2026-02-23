---
title: Web Components
slug: Web/API/Web_components
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{DefaultAPISidebar("Web Components")}}

Web Components ist eine Suite verschiedener Technologien, die es Ihnen ermöglichen, wiederverwendbare benutzerdefinierte Elemente zu erstellen, deren Funktionalität vom Rest Ihres Codes gekapselt ist, und diese in Ihren Webanwendungen zu nutzen.

## Konzepte und Verwendung

Als Entwickler wissen wir alle, dass das Wiederverwenden von Code so gut wie möglich eine gute Idee ist. Dies war traditionell für benutzerdefinierte Markup-Strukturen nicht so einfach – denken Sie an das komplexe HTML (und die zugehörigen Stil- und Skriptdateien), die Sie manchmal schreiben mussten, um benutzerdefinierte UI-Kontrollen darzustellen, und wie deren mehrfache Nutzung Ihre Seite zu einem Chaos machen kann, wenn Sie nicht vorsichtig sind.

Web Components zielt darauf ab, solche Probleme zu lösen – es besteht aus drei Haupttechnologien, die zusammen verwendet werden können, um vielseitige benutzerdefinierte Elemente mit gekapselter Funktionalität zu erstellen, die überall wiederverwendet werden können, ohne Angst vor Code-Kollisionen.

- **Custom elements**
  - : Eine Reihe von JavaScript-APIs, die es Ihnen ermöglichen, benutzerdefinierte Elemente und deren Verhalten zu definieren, die dann nach Belieben in Ihrer Benutzeroberfläche verwendet werden können.
- **Shadow DOM**
  - : Eine Reihe von JavaScript-APIs zum Anhängen eines gekapselten „Shadow“-DOM-Baums an ein Element – welches separat vom Hauptdokument-DOM gerendert wird – und zum Steuern der damit verbundenen Funktionalität. Auf diese Weise können Sie die Funktionen eines Elements privat halten, sodass sie skriptiert und gestylt werden können, ohne die Gefahr von Kollisionen mit anderen Teilen des Dokuments.
- **HTML Templates**
  - : Die {{HTMLElement("template")}}- und {{HTMLElement("slot")}}-Elemente ermöglichen es Ihnen, Markup-Vorlagen zu schreiben, die nicht auf der gerenderten Seite angezeigt werden. Diese können dann mehrfach als Grundlage für die Struktur eines benutzerdefinierten Elements wiederverwendet werden.

Der grundlegende Ansatz zur Implementierung eines Web-Components sieht normalerweise folgendermaßen aus:

1. Erstellen Sie eine Klasse, in der Sie die Funktionalität Ihres Web-Components angeben, unter Verwendung der [class](/de/docs/Web/JavaScript/Reference/Classes)-Syntax.
2. Registrieren Sie Ihr neues benutzerdefiniertes Element mit der Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define), indem Sie den zu definierenden Elementnamen, die Klasse oder Funktion, in der dessen Funktionalität angegeben ist, und optional, von welchem Element es erbt, übergeben. Sie können im globalen Register über [`Window.customElements`](/de/docs/Web/API/Window/customElements) oder einem [skalierten Register](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) erstellen, um Namenskonflikte zwischen Komponenten zu vermeiden, indem Sie den [`CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry)-Konstruktor verwenden.
3. Falls erforderlich, anheften eines Shadow DOM an das benutzerdefinierte Element mit der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow). Fügen Sie Kindelemente, Ereignislistener usw. dem Shadow DOM hinzu, indem Sie reguläre DOM-Methoden verwenden.
4. Falls erforderlich, definieren Sie ein HTML-Template mit {{htmlelement("template")}} und {{htmlelement("slot")}}. Verwenden Sie erneut reguläre DOM-Methoden, um das Template zu klonen und es Ihrem Shadow DOM anzuheften.
5. Verwenden Sie Ihr benutzerdefiniertes Element, wo immer Sie möchten auf Ihrer Seite, genau wie Sie jedes reguläre HTML-Element verwenden würden.

## Leitfäden

- [Using custom elements](/de/docs/Web/API/Web_components/Using_custom_elements)
  - : Ein Leitfaden, der zeigt, wie Sie die Funktionen benutzerdefinierter Elemente nutzen können, um einfache Web-Components zu erstellen, sowie ein Blick auf Lebenszyklus-Callbacks und einige andere fortgeschrittene Funktionen.
- [Using shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
  - : Ein Leitfaden, der die Grundlagen von Shadow DOM behandelt und zeigt, wie man einem Element ein Shadow DOM anfügt, den Shadow DOM-Baum ergänzt, ihn gestaltet und mehr.
- [Using templates and slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
  - : Ein Leitfaden, der zeigt, wie man eine wiederverwendbare HTML-Struktur mit {{htmlelement("template")}}- und {{htmlelement("slot")}}-Elementen definiert und dann diese Struktur innerhalb Ihrer Web-Components verwendet.

## Referenz

### Custom elements

- [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)
  - : Enthält Funktionen, die mit benutzerdefinierten Elementen zu tun haben, besonders die Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define), die zur Registrierung neuer benutzerdefinierter Elemente verwendet wird, damit diese dann in Ihrem Dokument verwendet werden können. Der [`CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry)-Konstruktor kann verwendet werden, um skalierte Register zu erstellen, und die Methode [`CustomElementRegistry.initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize) verknüpft ein skaliertes Register mit einem DOM-Teilbaum.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements)
  - : Gibt eine Referenz auf das globale `CustomElementRegistry`-Objekt zurück.
- [`Document.customElementRegistry`](/de/docs/Web/API/Document/customElementRegistry)
  - : Das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry), das mit dem Dokument verknüpft ist.
- [`Element.customElementRegistry`](/de/docs/Web/API/Element/customElementRegistry)
  - : Das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry), das mit dem Element verknüpft ist.
- [Lebenszyklus-Callbacks](/de/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks)
  - : Spezielle Callback-Funktionen, die innerhalb der Klassen-Definition eines benutzerdefinierten Elements definiert sind und dessen Verhalten beeinflussen:
    - `connectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element das erste Mal mit dem DOM des Dokuments verbunden wird.
    - `disconnectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element vom DOM des Dokuments getrennt wird.
    - `adoptedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element in ein neues Dokument verschoben wird.
    - `attributeChangedCallback()`
      - : Wird aufgerufen, wenn eine der Attribute des benutzerdefinierten Elements hinzugefügt, entfernt oder geändert wird.

- Erweiterungen zum Erstellen benutzerdefinierter eingebauter Elemente
  - : Die folgenden Erweiterungen sind definiert:
    - Das globale HTML-Attribut [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)
      - : Ermöglicht es Ihnen anzugeben, dass ein standardmäßiges HTML-Element sich wie ein registriertes benutzerdefiniertes eingebautes Element verhalten soll.
    - Die Option „is“ der Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
      - : Ermöglicht es Ihnen, eine Instanz eines standardmäßigen HTML-Elements zu erstellen, das sich wie ein angegebenes registriertes benutzerdefiniertes eingebautes Element verhält.

- CSS Pseudo-Klassen
  - : Pseudo-Klassen, die sich speziell auf benutzerdefinierte Elemente beziehen:
    - {{cssxref(":defined")}}
      - : Passt zu jedem Element, das definiert ist, einschließlich eingebauter und mit `CustomElementRegistry.define()` definierter benutzerdefinierter Elemente.
    - {{cssxref(":host")}}
      - : Wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM), das das CSS enthält, in dem es verwendet wird.
    - {{cssxref(":host", ":host()")}}
      - : Wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM), das das CSS enthält, in dem es verwendet wird (damit Sie ein benutzerdefiniertes Element von innerhalb seines Shadow DOM auswählen können) – aber nur, wenn der als Parameter der Funktion angegebene Selektor mit dem Shadow-Host übereinstimmt.
    - {{cssxref(":host-context", ":host-context()")}}
      - : Wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM), das das CSS enthält, in dem es verwendet wird (damit Sie ein benutzerdefiniertes Element von innerhalb seines Shadow DOM auswählen können) – aber nur, wenn der als Parameter der Funktion angegebene Selektor mit dem Vorfahren des Shadow-Hosts übereinstimmt, wo er in der DOM-Hierarchie sitzt.
    - {{CSSxRef(":state",":state()")}}
      - : Passt zu benutzerdefinierten Elementen, die sich in einem angegebenen benutzerdefinierten Zustand befinden.
        Genauer gesagt passt es zu anonymen benutzerdefinierten Elementen, bei denen der angegebene Zustand im [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) des Elements vorhanden ist.

- CSS Pseudo-Elemente
  - : Pseudo-Elemente, die sich speziell auf benutzerdefinierte Elemente beziehen:
    - {{cssxref("::part")}}
      - : Repräsentiert jedes Element innerhalb eines [Shadow-Baums](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attribut hat.

### Shadow DOM

- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)
  - : Repräsentiert den Wurzelknoten eines Shadow DOM-Teilbaums.
- [`ShadowRoot.customElementRegistry`](/de/docs/Web/API/ShadowRoot/customElementRegistry)
  - : Das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry), das mit dem Shadow-Root verknüpft ist. Kann über die `customElementRegistry`-Option von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) festgelegt werden, oder später mit [`CustomElementRegistry.initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize).
- Erweiterungen für [`Element`](/de/docs/Web/API/Element)
  - : Erweiterungen der `Element`-Schnittstelle, die sich auf das Shadow DOM beziehen:
    - Die Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) fügt dem angegebenen Element einen Shadow-DOM-Baum hinzu.
    - Die Eigenschaft [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) gibt die an das angegebene Element angehängte Shadow-Root zurück oder `null`, wenn kein Shadow-Root angehängt ist.

- Relevante Ergänzungen zu [`Node`](/de/docs/Web/API/Node)
  - : Ergänzungen der `Node`-Schnittstelle, die für das Shadow DOM relevant sind:
    - Die Methode [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode) gibt die Wurzel des Kontextobjekts zurück, einschließlich der Shadow-Root, wenn sie verfügbar ist.
    - Die Eigenschaft [`Node.isConnected`](/de/docs/Web/API/Node/isConnected) gibt ein Boolean zurück, das anzeigt, ob der Node mit dem Kontextobjekt verbunden ist oder nicht, z.B. dem [`Document`](/de/docs/Web/API/Document)-Objekt im Falle des normalen DOM oder dem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) im Falle eines Shadow DOM.

- Erweiterungen für [`Event`](/de/docs/Web/API/Event)
  - : Erweiterungen der `Event`-Schnittstelle, die sich auf das Shadow DOM beziehen:
    - [`Event.composed`](/de/docs/Web/API/Event/composed)
      - : Gibt `true` zurück, wenn das Ereignis die Shadow-DOM-Grenze in das Standard-DOM überqueren wird, andernfalls `false`.
    - [`Event.composedPath`](/de/docs/Web/API/Event/composedPath)
      - : Gibt den Pfad des Ereignisses zurück (Objekte, auf denen Listener aufgerufen werden). Dies schließt keine Knoten in Shadow-Bäumen ein, wenn die Shadow-Root mit [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) geschlossen erstellt wurde.

### HTML Templates

- {{htmlelement("template")}}
  - : Beinhaltet ein HTML-Fragment, das beim erstmaligen Laden eines enthaltenen Dokuments nicht gerendert wird, aber zur Laufzeit mit JavaScript angezeigt werden kann, hauptsächlich als Grundlage für benutzerdefinierte Elementstrukturen verwendet. Die zugehörige DOM-Schnittstelle ist [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
- {{htmlelement("slot")}}
  - : Ein Platzhalter in einem Web-Component, den Sie mit Ihrem eigenen Markup füllen können, was es Ihnen ermöglicht, separate DOM-Bäume zu erstellen und sie zusammen darzustellen. Die zugehörige DOM-Schnittstelle ist [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement).
- Das globale HTML-Attribut [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)
  - : Weist einem Element einen Slot in einem Shadow-DOM-Schattenbaum zu.
- [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot)
  - : Ein schreibgeschütztes Attribut, das eine Referenz auf den {{htmlelement("slot")}} zurückgibt, in den dieses Element eingefügt wurde.
- [`Text.assignedSlot`](/de/docs/Web/API/Text/assignedSlot)
  - : Ein schreibgeschütztes Attribut, das eine Referenz auf den {{htmlelement("slot")}} zurückgibt, in den dieser Textknoten eingefügt wurde.
- Erweiterungen für [`Element`](/de/docs/Web/API/Element)
  - : Erweiterungen der `Element`-Schnittstelle, die sich auf Slots beziehen:
    - [`Element.slot`](/de/docs/Web/API/Element/slot)
      - : Gibt den Namen des Shadow-DOM-Slots zurück, der dem Element angehängt ist.

- CSS Pseudo-Elemente
  - : Pseudo-Elemente, die sich speziell auf Slots beziehen:
    - {{cssxref("::slotted")}}
      - : Passt zu jedem Inhalt, der in einen Slot eingefügt wird.

- Das [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)-Ereignis
  - : Wird auf einer [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)-Instanz ({{htmlelement("slot")}}-Element) ausgelöst, wenn sich die darin enthaltenen Knoten ändern.

## Beispiele

Wir bauen eine Reihe von Beispielen in unserem [web-components-examples](https://github.com/mdn/web-components-examples) GitHub-Repository auf. Es werden im Laufe der Zeit mehr hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
