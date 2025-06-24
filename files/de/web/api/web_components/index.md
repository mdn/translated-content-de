---
title: Web Components
slug: Web/API/Web_components
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("Web Components")}}

Web Components ist eine Suite verschiedener Technologien, die es Ihnen ermöglicht, wiederverwendbare benutzerdefinierte Elemente zu erstellen – mit ihrer Funktionalität, die vom Rest Ihres Codes gekapselt ist – und sie in Ihren Webanwendungen zu verwenden.

## Konzepte und Nutzung

Als Entwickler wissen wir alle, dass es eine gute Idee ist, Code so oft wie möglich wiederzuverwenden. Dies war traditionell nicht so einfach für benutzerdefinierte Markup-Strukturen — denken Sie an die komplexen HTML-Strukturen (und die dazugehörigen Stile und Skripte), die Sie manchmal schreiben mussten, um benutzerdefinierte Benutzeroberflächen-Steuerelemente darzustellen, und wie die mehrfache Verwendung dieser Elemente zu einem Chaos auf Ihrer Seite führen kann, wenn Sie nicht vorsichtig sind.

Web Components zielt darauf ab, solche Probleme zu lösen – es besteht aus drei Haupttechnologien, die zusammen verwendet werden können, um vielseitige benutzerdefinierte Elemente mit gekapselter Funktionalität zu erstellen, die Sie überall verwenden können, ohne Angst vor Codekollisionen zu haben.

- **Benutzerdefinierte Elemente**
  - : Ein Satz von JavaScript-APIs, die es Ihnen ermöglichen, benutzerdefinierte Elemente und ihr Verhalten zu definieren, die dann nach Belieben in Ihrer Benutzeroberfläche verwendet werden können.
- **Shadow DOM**
  - : Ein Satz von JavaScript-APIs zum Anhängen eines gekapselten "Shadow"-DOM-Baums an ein Element – der separat vom Hauptdokument-DOM gerendert wird – und zur Steuerung der zugehörigen Funktionalität. Auf diese Weise können Sie die Eigenschaften eines Elements privat halten, so dass sie skriptiert und gestylt werden können, ohne die Gefahr von Kollisionen mit anderen Teilen des Dokuments.
- **HTML-Vorlagen**
  - : Die {{HTMLElement("template")}} und {{HTMLElement("slot")}} Elemente ermöglichen es Ihnen, Markup-Vorlagen zu schreiben, die nicht in der gerenderten Seite angezeigt werden. Diese können dann mehrfach als Grundlage für die Struktur eines benutzerdefinierten Elements verwendet werden.

Der grundlegende Ansatz zur Implementierung eines Web-Components sieht in der Regel folgendermaßen aus:

1. Erstellen Sie eine Klasse, in der Sie die Funktionalität Ihres Web-Components mithilfe der [class](/de/docs/Web/JavaScript/Reference/Classes) Syntax angeben.
2. Registrieren Sie Ihr neues benutzerdefiniertes Element mit der Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define), indem Sie den zu definierenden Elementnamen, die Klasse oder Funktion, in der die Funktionalität angegeben ist, und optional das Element, von dem es erbt, übergeben.
3. Falls erforderlich, fügen Sie dem benutzerdefinierten Element ein Shadow DOM mit der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) hinzu. Fügen Sie dem Shadow DOM Kind-Elemente, Ereignislistener usw. mit regulären DOM-Methoden hinzu.
4. Falls erforderlich, definieren Sie eine HTML-Vorlage mit {{htmlelement("template")}} und {{htmlelement("slot")}}. Verwenden Sie erneut reguläre DOM-Methoden, um die Vorlage zu klonen und an Ihr Shadow DOM anzuhängen.
5. Verwenden Sie Ihr benutzerdefiniertes Element überall auf Ihrer Seite, genau wie Sie es mit jedem normalen HTML-Element tun würden.

## Leitfäden

- [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
  - : Ein Leitfaden, der zeigt, wie man die Funktionen von benutzerdefinierten Elementen nutzt, um einfache Web-Components zu erstellen, sowie einen Blick auf Lebenszyklusrückrufe und einige andere weiter fortgeschrittene Funktionen.
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
  - : Ein Leitfaden, der die Grundlagen des Shadow DOM behandelt und zeigt, wie man ein Shadow DOM an ein Element anhängt, es zum Shadow-DOM-Baum hinzufügt, es stylt und mehr.
- [Verwendung von Vorlagen und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
  - : Ein Leitfaden, der zeigt, wie man eine wiederverwendbare HTML-Struktur mit den {{htmlelement("template")}} und {{htmlelement("slot")}} Elementen definiert und diese Struktur dann in Ihren Web-Components verwendet.

## Referenz

### Benutzerdefinierte Elemente

- [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)
  - : Beinhaltet Funktionalität im Zusammenhang mit benutzerdefinierten Elementen, insbesondere die Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define), die zur Registrierung neuer benutzerdefinierter Elemente verwendet wird, sodass sie dann in Ihrem Dokument verwendet werden können.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements)
  - : Gibt eine Referenz auf das `CustomElementRegistry`-Objekt zurück.
- [Lebenszyklus-Rückrufe](/de/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks)

  - : Spezielle Rückruffunktionen, die innerhalb der Klassendefinition des benutzerdefinierten Elements definiert werden und sein Verhalten beeinflussen:
    - `connectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element erstmals mit dem DOM des Dokuments verbunden wird.
    - `disconnectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element aus dem DOM des Dokuments entfernt wird.
    - `adoptedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element in ein neues Dokument verschoben wird.
    - `attributeChangedCallback()`
      - : Wird aufgerufen, wenn eines der Attribute des benutzerdefinierten Elements hinzugefügt, entfernt oder geändert wird.

- Erweiterungen zur Erstellung benutzerdefinierter eingebaute Elemente

  - : Die folgenden Erweiterungen sind definiert:
    - Das [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is) globale HTML-Attribut
      - : Ermöglicht es Ihnen, anzugeben, dass ein Standard-HTML-Element wie ein registriertes benutzerdefiniertes eingebautes Element funktionieren soll.
    - Die "is"-Option der Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
      - : Ermöglicht es Ihnen, eine Instanz eines Standard-HTML-Elements zu erstellen, das wie ein gegebenes registriertes benutzerdefiniertes eingebautes Element funktioniert.

- CSS-Pseudoklassen

  - : Pseudoklassen, die sich speziell auf benutzerdefinierte Elemente beziehen:
    - {{cssxref(":defined")}}
      - : Passt zu jedem Element, das definiert ist, einschließlich eingebauter Elemente und benutzerdefinierter Elemente, die mit `CustomElementRegistry.define()` definiert sind.
    - {{cssxref(":host")}}
      - : Wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, der das CSS enthält, das darin verwendet wird.
    - {{cssxref(":host", ":host()")}}
      - : Wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, der das CSS enthält, das darin verwendet wird (sodass Sie ein benutzerdefiniertes Element von innerhalb seines Shadow DOM auswählen können) – aber nur, wenn der als Parameter der Funktion angegebene Selektor zum Shadow-Host passt.
    - {{cssxref(":host-context", ":host-context()")}}
      - : Wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, der das CSS enthält, das darin verwendet wird (sodass Sie ein benutzerdefiniertes Element von innerhalb seines Shadow DOM auswählen können) – aber nur, wenn der als Parameter der Funktion angegebene Selektor zu den Vorfahren des Shadow-Hosts in der DOM-Hierarchie passt.
    - {{CSSxRef(":state",":state()")}}
      - : Passt zu benutzerdefinierten Elementen, die sich in einem bestimmten benutzerdefinierten Zustand befinden. Genauer gesagt, passt es zu anonymen benutzerdefinierten Elementen, bei denen der angegebene Zustand im [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) des Elements vorhanden ist.

- CSS-Pseudoelemente
  - : Pseudoelemente, die sich speziell auf benutzerdefinierte Elemente beziehen:
    - {{cssxref("::part")}}
      - : Repräsentiert jedes Element innerhalb eines [Shadow Trees](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attribut hat.

### Shadow DOM

- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)
  - : Repräsentiert die Wurzelknoten eines Shadow-DOM-Unterbaums.
- [`Element`](/de/docs/Web/API/Element) Erweiterungen

  - : Erweiterungen der `Element`-Schnittstelle im Zusammenhang mit Shadow DOM:
    - Die Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) hängt einen Shadow-DOM-Baum an das angegebene Element an.
    - Die Eigenschaft [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) gibt die an das angegebene Element angehängte Shadow-Root zurück, oder `null`, wenn keine Shadow-Root angehängt ist.

- Relevante Ergänzungen von [`Node`](/de/docs/Web/API/Node)

  - : Ergänzungen der `Node`-Schnittstelle, die für Shadow DOM relevant sind:
    - Die Methode [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode) gibt die Wurzel des Kontextobjekts zurück, das optional die Shadow-Root enthält, falls verfügbar.
    - Die Eigenschaft [`Node.isConnected`](/de/docs/Web/API/Node/isConnected) gibt einen booleschen Wert zurück, der angibt, ob der Knoten (direkt oder indirekt) mit dem Kontextobjekt verbunden ist, z.B. dem [`Document`](/de/docs/Web/API/Document) im Fall des normalen DOMs oder der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) im Fall eines Shadow DOMs.

- Erweiterungen des [`Event`](/de/docs/Web/API/Event)
  - : Erweiterungen der `Event`-Schnittstelle im Zusammenhang mit Shadow DOM:
    - [`Event.composed`](/de/docs/Web/API/Event/composed)
      - : Gibt `true` zurück, wenn das Ereignis über die Shadow-DOM-Grenze hinweg in das Standard-DOM propagiert, andernfalls `false`.
    - [`Event.composedPath`](/de/docs/Web/API/Event/composedPath)
      - : Gibt den Pfad des Ereignisses zurück (Objekte, auf denen Listener aufgerufen werden). Dies schließt keine Knoten in Shadow Trees ein, wenn die Shadow-Root mit [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) geschlossen erstellt wurde.

### HTML-Vorlagen

- {{htmlelement("template")}}
  - : Enthält ein HTML-Fragment, das beim erstmaligen Laden eines enthaltenden Dokuments nicht gerendert wird, aber zur Laufzeit mit JavaScript angezeigt werden kann und hauptsächlich als Grundlage für benutzerdefinierte Elementstrukturen verwendet wird. Die zugehörige DOM-Schnittstelle ist [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
- {{htmlelement("slot")}}
  - : Ein Platzhalter innerhalb eines Webkomponenten, den Sie mit Ihrem eigenen Markup füllen können und der Ihnen ermöglicht, separate DOM-Bäume zu erstellen und sie zusammen zu präsentieren. Die zugehörige DOM-Schnittstelle ist [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement).
- Das [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot) globale HTML-Attribut
  - : Weist einem Element einen Slot in einem Shadow-DOM-Shadow-Tree zu.
- [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot)
  - : Ein schreibgeschütztes Attribut, das eine Referenz auf den {{htmlelement("slot")}} zurückgibt, in den dieses Element eingefügt wurde.
- [`Text.assignedSlot`](/de/docs/Web/API/Text/assignedSlot)
  - : Ein schreibgeschütztes Attribut, das eine Referenz auf den {{htmlelement("slot")}} zurückgibt, in den dieses Textknoten eingefügt wurde.
- Erweiterungen des [`Element`](/de/docs/Web/API/Element)

  - : Erweiterungen der `Element`-Schnittstelle im Zusammenhang mit Slots:
    - [`Element.slot`](/de/docs/Web/API/Element/slot)
      - : Gibt den Namen des Shadow-DOM-Slots zurück, der an das Element angehängt ist.

- CSS-Pseudoelemente

  - : Pseudoelemente, die sich speziell auf Slots beziehen:
    - {{cssxref("::slotted")}}
      - : Passt zu jedem Inhalt, der in einen Slot eingefügt wird.

- Das [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event) Ereignis
  - : Wird auf einer Instanz eines [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) ({{htmlelement("slot")}} Element) ausgelöst, wenn sich die im Slot enthaltenen Knoten ändern.

## Beispiele

Wir bauen in unserem [web-components-examples](https://github.com/mdn/web-components-examples) GitHub-Repository eine Reihe von Beispielen auf. Im Laufe der Zeit werden mehr hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
