---
title: Web Components
slug: Web/API/Web_components
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("Web Components")}}

Web Components ist eine Suite verschiedener Technologien, die es Ihnen ermöglicht, wiederverwendbare benutzerdefinierte Elemente zu erstellen, deren Funktionalität von Ihrem restlichen Code gekapselt ist, und sie in Ihren Webanwendungen zu nutzen.

## Konzepte und Nutzung

Als Entwickler wissen wir alle, dass es eine gute Idee ist, Code so oft wie möglich wiederzuverwenden. Dies war traditionell nicht so einfach für benutzerdefinierte Markup-Strukturen — denken Sie an die komplexe HTML (und die dazugehörigen Stile und Skripte), die Sie manchmal schreiben mussten, um benutzerdefinierte UI-Kontrollen darzustellen, und wie die mehrfache Verwendung dieser Strukturen Ihre Seite in ein Chaos verwandeln kann, wenn Sie nicht vorsichtig sind.

Web Components zielt darauf ab, solche Probleme zu lösen — es besteht aus drei Haupttechnologien, die zusammen verwendet werden können, um vielseitige benutzerdefinierte Elemente mit gekapselter Funktionalität zu erstellen, die Sie überall ohne Bedenken über Code-Kollisionen wiederverwenden können.

- **Benutzerdefinierte Elemente**
  - : Eine Reihe von JavaScript-APIs, die es Ihnen erlaubt, benutzerdefinierte Elemente und deren Verhalten zu definieren, die dann in Ihrer Benutzeroberfläche nach Belieben verwendet werden können.
- **Shadow DOM**
  - : Eine Reihe von JavaScript-APIs zum Anhängen eines gekapselten "Schatten"-DOM-Baums an ein Element — der getrennt vom Haupdokument-DOM gerendert wird — und zur Steuerung der damit verbundenen Funktionalität. Auf diese Weise können Sie die Funktionen eines Elements privat halten, sodass sie gescriptet und gestylt werden können, ohne dass es zu Kollisionen mit anderen Teilen des Dokuments kommt.
- **HTML-Templates**
  - : Die {{HTMLElement("template")}}- und {{HTMLElement("slot")}}-Elemente ermöglichen es Ihnen, Markup-Templates zu schreiben, die nicht auf der gerenderten Seite angezeigt werden. Diese können dann mehrfach als Grundlage der Struktur eines benutzerdefinierten Elements verwendet werden.

Der grundlegende Ansatz zur Implementierung eines Webkomponenten sieht in der Regel etwa wie folgt aus:

1. Erstellen Sie eine Klasse, in der Sie die Funktionalität Ihrer Webkomponente mit der [class](/de/docs/Web/JavaScript/Reference/Classes)-Syntax festlegen.
2. Registrieren Sie Ihr neues benutzerdefiniertes Element mit der Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define), indem Sie den zu definierenden Elementnamen übergeben, die Klasse oder Funktion, in der die Funktionalität festgelegt ist, und optional das Element, von dem es erbt.
3. Falls erforderlich, fügen Sie dem benutzerdefinierten Element ein Shadow DOM hinzu, indem Sie die Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) verwenden. Fügen Sie Kind-Elemente, Event-Listener usw. mithilfe regulärer DOM-Methoden dem Shadow DOM hinzu.
4. Falls erforderlich, definieren Sie ein HTML-Template mithilfe von {{htmlelement("template")}} und {{htmlelement("slot")}}. Verwenden Sie erneut reguläre DOM-Methoden, um das Template zu klonen und an Ihr Shadow DOM anzuhängen.
5. Verwenden Sie Ihr benutzerdefiniertes Element überall auf Ihrer Seite, so wie Sie es mit jedem regulären HTML-Element tun würden.

## Leitfäden

- [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
  - : Ein Leitfaden, der zeigt, wie Sie die Funktionen von benutzerdefinierten Elementen nutzen, um einfache Webkomponenten zu erstellen, sowie auf Lebenszyklus-Callbacks und einige weitere fortgeschrittene Funktionen eingeht.
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
  - : Ein Leitfaden, der die Grundlagen von Shadow DOM behandelt und zeigt, wie Sie ein Shadow DOM an ein Element anhängen, den Shadow DOM-Baum hinzufügen, stylen und mehr.
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
  - : Ein Leitfaden, der zeigt, wie Sie mit den Elementen {{htmlelement("template")}} und {{htmlelement("slot")}} eine wiederverwendbare HTML-Struktur definieren und diese dann in Ihren Webkomponenten verwenden.

## Referenz

### Benutzerdefinierte Elemente

- [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)
  - : Beinhaltet Funktionen im Zusammenhang mit benutzerdefinierten Elementen, insbesondere die Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define), die zur Registrierung neuer benutzerdefinierter Elemente verwendet wird, damit sie anschließend in Ihrem Dokument genutzt werden können.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements)
  - : Gibt eine Referenz auf das `CustomElementRegistry`-Objekt zurück.
- [Lebenszyklus-Callbacks](/de/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks)

  - : Spezielle Callback-Funktionen, die innerhalb der Klassendefinition eines benutzerdefinierten Elements definiert werden und dessen Verhalten beeinflussen:

    - `connectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element zum ersten Mal mit dem DOM des Dokuments verbunden wird.
    - `disconnectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element vom DOM des Dokuments getrennt wird.
    - `adoptedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element in ein neues Dokument verschoben wird.
    - `attributeChangedCallback()`
      - : Wird aufgerufen, wenn eines der Attribute des benutzerdefinierten Elements hinzugefügt, entfernt oder geändert wird.

- Erweiterungen zur Erstellung benutzerdefinierter eingebauter Elemente

  - : Die folgenden Erweiterungen sind definiert:

    - Das globale HTML-Attribut [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)
      - : Erlaubt Ihnen, zu spezifizieren, dass ein Standard-HTML-Element wie ein registriertes benutzerdefiniertes eingebautes Element verhalten soll.
    - Die "is"-Option der Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
      - : Ermöglicht Ihnen die Erstellung einer Instanz eines Standard-HTML-Elements, das sich wie ein gegebenes registriertes benutzerdefiniertes eingebautes Element verhält.

- CSS-Pseudoklassen

  - : Pseudoklassen, die speziell für benutzerdefinierte Elemente gelten:

    - {{cssxref(":defined")}}
      - : Passt auf jedes Element, das definiert ist, einschließlich eingebauter Elemente und benutzerdefinierter Elemente, die mit `CustomElementRegistry.define()` definiert wurden.
    - {{cssxref(":host")}}
      - : Wählt den Schatten-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, das das CSS enthält, in dem es verwendet wird.
    - {{cssxref(":host", ":host()")}}
      - : Wählt den Schatten-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, das das CSS enthält, in dem es verwendet wird (so dass Sie ein benutzerdefiniertes Element von innerhalb seines Shadow DOM auswählen können) — aber nur, wenn der als Parameter der Funktion angegebene Selektor mit dem Schatten-Host übereinstimmt.
    - {{cssxref(":host-context", ":host-context()")}}
      - : Wählt den Schatten-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, das das CSS enthält, in dem es verwendet wird (so dass Sie ein benutzerdefiniertes Element von innerhalb seines Shadow DOM auswählen können) — aber nur, wenn der als Parameter der Funktion angegebene Selektor mit den Vorfahren des Schatten-Hosts in der DOM-Hierarchie übereinstimmt, wo er sich befindet.
    - {{CSSxRef(":state",":state()")}}
      - : Passt auf benutzerdefinierte Elemente, die sich in einem bestimmten benutzerdefinierten Zustand befinden.
        Genauer gesagt, es passt auf anonyme benutzerdefinierte Elemente, bei denen der angegebene Zustand im [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) des Elements vorhanden ist.

- CSS-Pseudoelemente

  - : Pseudoelemente, die speziell für benutzerdefinierte Elemente gelten:

    - {{cssxref("::part")}}
      - : Repräsentiert ein Element innerhalb eines [Schattenbaums](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attribut hat.

### Shadow DOM

- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)
  - : Repräsentiert den Wurzelknoten eines Shadow DOM-Teilbaums.
- Erweiterungen des [`Element`](/de/docs/Web/API/Element)

  - : Erweiterungen der `Element`-Schnittstelle, die sich auf Shadow DOM beziehen:

    - Die Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) hängt einen Shadow DOM-Baum an das angegebene Element an.
    - Die Eigenschaft [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) gibt die an das angegebene Element angehängte Shadow-Root zurück oder `null`, wenn kein Shadow-Root angehängt ist.

- Relevante Ergänzungen des [`Node`](/de/docs/Web/API/Node)

  - : Ergänzungen der `Node`-Schnittstelle, die sich auf Shadow DOM beziehen:

    - Die Methode [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode) gibt die Wurzel des Kontextobjekts zurück, welche optional das Shadow Root einschließt, wenn es verfügbar ist.
    - Die Eigenschaft [`Node.isConnected`](/de/docs/Web/API/Node/isConnected) gibt einen Boolean-Wert zurück, der angibt, ob der Knoten direkt oder indirekt mit dem Kontextobjekt verbunden ist, z. B. das [`Document`](/de/docs/Web/API/Document)-Objekt im Fall des normalen DOM oder das [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) im Fall eines Shadow DOM.

- Erweiterungen des [`Event`](/de/docs/Web/API/Event)

  - : Erweiterungen der `Event`-Schnittstelle bezüglich Shadow DOM:

    - [`Event.composed`](/de/docs/Web/API/Event/composed)
      - : Gibt `true` zurück, wenn das Ereignis die Shadow-DOM-Grenze in das Standard-DOM überschreiten wird, ansonsten `false`.
    - [`Event.composedPath`](/de/docs/Web/API/Event/composedPath)
      - : Gibt den Pfad des Ereignisses zurück (Objekte, bei denen Listener aufgerufen werden). Dies schließt keine Knoten in Schattenbäumen ein, wenn der Schatten-Root mit [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) geschlossen erstellt wurde.

### HTML-Templates

- {{htmlelement("template")}}
  - : Enthält ein HTML-Fragment, das nicht gerendert wird, wenn ein enthaltendes Dokument initial geladen wird, aber zur Laufzeit mit JavaScript angezeigt werden kann, hauptsächlich als Grundlage von benutzerdefinierten Elementstrukturen verwendet. Die zugehörige DOM-Schnittstelle ist [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
- {{htmlelement("slot")}}
  - : Ein Platzhalter innerhalb einer Webkomponente, den Sie mit Ihrem eigenen Markup füllen können, wodurch Sie separate DOM-Bäume erstellen und zusammen präsentieren können. Die zugehörige DOM-Schnittstelle ist [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement).
- Das globale HTML-Attribut [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)
  - : Weist einem Element einen Slot in einem Schatten-DOM-Schattenbaum zu.
- [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot)
  - : Ein schreibgeschütztes Attribut, das eine Referenz auf den {{htmlelement("slot")}} zurückgibt, in den dieses Element eingefügt wird.
- [`Text.assignedSlot`](/de/docs/Web/API/Text/assignedSlot)
  - : Ein schreibgeschütztes Attribut, das eine Referenz auf den {{htmlelement("slot")}} zurückgibt, in den dieser Textknoten eingefügt wird.
- Erweiterungen des [`Element`](/de/docs/Web/API/Element)

  - : Erweiterungen der `Element`-Schnittstelle, die sich auf Slots beziehen:

    - [`Element.slot`](/de/docs/Web/API/Element/slot)
      - : Gibt den Namen des Shadow-DOM-Slots zurück, der an das Element angehängt ist.

- CSS-Pseudoelemente

  - : Pseudoelemente, die speziell für Slots gelten:

    - {{cssxref("::slotted")}}
      - : Passt auf jeden Inhalt, der in einen Slot eingefügt wird.

- Das [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)-Ereignis
  - : Wird auf einer Instanz von [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) ({{htmlelement("slot")}}-Element) ausgelöst, wenn das/Node(s), die in diesem Slot enthalten sind, sich ändern.

## Beispiele

Wir bauen derzeit eine Reihe von Beispielen in unserem [web-components-examples](https://github.com/mdn/web-components-examples) GitHub-Repository auf. Weitere werden im Laufe der Zeit hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
