---
title: Web Components
slug: Web/API/Web_components
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{DefaultAPISidebar("Web Components")}}

Web Components ist eine Suite verschiedener Technologien, die es Ihnen ermöglicht, wiederverwendbare benutzerdefinierte Elemente zu erstellen, deren Funktionalität vom Rest Ihres Codes gekapselt ist, und diese in Ihren Webanwendungen zu nutzen.

## Konzepte und Verwendung

Als Entwickler wissen wir alle, dass es eine gute Idee ist, Code so oft wie möglich wiederzuverwenden. Dies war traditionell nicht so einfach für benutzerdefinierte Markup-Strukturen — denken Sie an das komplexe HTML (und die dazugehörigen Styles und Skripte), das Sie manchmal schreiben mussten, um benutzerdefinierte UI-Steuerelemente darzustellen, und wie die mehrfache Verwendung dieser Elemente Ihre Seite in ein Chaos verwandeln kann, wenn Sie nicht vorsichtig sind.

Web Components zielt darauf ab, solche Probleme zu lösen — es besteht aus drei Haupttechnologien, die zusammen verwendet werden können, um vielseitige benutzerdefinierte Elemente mit gekapselter Funktionalität zu erstellen, die mit weniger Risiko von Namens- und Style-Kollisionen wiederverwendet werden können:

- **Benutzerdefinierte Elemente**
  - : Ein Satz von JavaScript-APIs, mit denen Sie benutzerdefinierte Elemente und deren Verhalten definieren können, die dann wie gewünscht in Ihrer Benutzeroberfläche verwendet werden können.
- **Shadow DOM**
  - : Ein Mechanismus zum Anhängen eines gekapselten "shadow" DOM-Baums an ein Element, entweder imperativ über JavaScript-APIs oder deklarativ in HTML.
    Dadurch können Sie die Funktionen eines Elements privat halten, sodass deren Styles und IDs nicht mit anderen Teilen des Dokuments kollidieren.
- **HTML-Vorlagen**
  - : Die {{HTMLElement("template")}}- und {{HTMLElement("slot")}}-Elemente ermöglichen es Ihnen, Markup-Vorlagen zu schreiben, die nicht auf der gerenderten Seite angezeigt werden. Diese können dann mehrfach als Grundlage für die Struktur eines benutzerdefinierten Elements wiederverwendet werden.

Der grundlegende Ansatz zur Implementierung eines Web-Komponenten sieht im Allgemeinen ungefähr so aus:

1. Erstellen Sie eine Klasse, in der Sie die Funktionalität Ihrer Web-Komponente spezifizieren, indem Sie die [class](/de/docs/Web/JavaScript/Reference/Classes)-Syntax verwenden.
2. Registrieren Sie Ihr neues benutzerdefiniertes Element mit der Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define), indem Sie den festzulegenden Elementnamen, die Klasse oder Funktion, in der seine Funktionalität spezifiziert ist, und optional das Element, von dem es erbt, übergeben. Sie können es im globalen Register mithilfe von [`Window.customElements`](/de/docs/Web/API/Window/customElements) registrieren oder ein [scoped registry](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) mit dem [`CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry)-Konstruktor erstellen, um Namenskonflikte zwischen Komponenten zu vermeiden.
3. Falls erforderlich, fügen Sie der benutzerdefinierten Komponente ein Shadow DOM hinzu, indem Sie die Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) verwenden. Fügen Sie dem Shadow DOM mit regulären DOM-Methoden Kindelemente, Event Listener usw. hinzu.
4. Definieren Sie falls erforderlich eine HTML-Vorlage mit {{htmlelement("template")}} und {{htmlelement("slot")}}. Verwenden Sie erneut reguläre DOM-Methoden, um die Vorlage zu klonen und an Ihr Shadow DOM anzuhängen.
5. Verwenden Sie Ihr benutzerdefiniertes Element überall auf der Seite, genau wie jedes andere HTML-Element.

## Leitfäden

- [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
  - : Ein Leitfaden, der zeigt, wie Sie die Funktionen benutzerdefinierter Elemente verwenden, um einfache Web-Komponenten zu erstellen, und einen Blick auf Lebenszyklus-Callback-Funktionen und einige andere erweiterte Funktionen wirft.
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
  - : Ein Leitfaden, der die Grundlagen von Shadow DOM erklärt und zeigt, wie man ein Shadow DOM an ein Element anhängt, zum Shadow DOM-Baum hinzufügt, es stylt und mehr.
- [Verwendung von Vorlagen und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
  - : Ein Leitfaden, der zeigt, wie Sie eine wiederverwendbare HTML-Struktur mit {{htmlelement("template")}}- und {{htmlelement("slot")}}-Elementen definieren und diese Struktur dann in Ihren Web-Komponenten verwenden.

## Referenz

### Benutzerdefinierte Elemente

- [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)
  - : Beinhaltet Funktionalitäten in Bezug auf benutzerdefinierte Elemente, insbesondere die [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode, die verwendet wird, um neue benutzerdefinierte Elemente zu registrieren, damit sie dann im Dokument verwendet werden können. Der [`CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry)-Konstruktor kann verwendet werden, um spezifische Registries zu erstellen, und die [`CustomElementRegistry.initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize)-Methode verbindet eine spezifische Registry mit einem DOM-Teilbaum.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements)
  - : Gibt einen Verweis auf das globale `CustomElementRegistry`-Objekt zurück.
- [`Document.customElementRegistry`](/de/docs/Web/API/Document/customElementRegistry)
  - : Das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry), das mit dem Dokument verbunden ist.
- [`Element.customElementRegistry`](/de/docs/Web/API/Element/customElementRegistry)
  - : Das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry), das mit dem Element verbunden ist.
- [Lebenszyklus-Callbacks](/de/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks)
  - : Spezielle Callback-Funktionen, die innerhalb der Klassen-Definition des benutzerdefinierten Elements definiert sind und sein Verhalten beeinflussen:
    - `connectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element erstmals mit dem DOM des Dokuments verbunden wird.
    - `disconnectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element vom DOM des Dokuments getrennt wird.
    - `adoptedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element in ein neues Dokument verschoben wird.
    - `attributeChangedCallback()`
      - : Wird aufgerufen, wenn ein Attribut des benutzerdefinierten Elements hinzugefügt, entfernt oder verändert wird.

- Erweiterungen zur Erstellung benutzerdefinierter interner Elemente
  - : Die folgenden Erweiterungen sind definiert:
    - Das [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is) globale HTML-Attribut
      - : Ermöglicht es Ihnen, anzugeben, dass ein standardmäßiges HTML-Element wie ein registriertes benutzerdefiniertes internes Element verhalten soll.
    - Die Option "is" der Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
      - : Ermöglicht es Ihnen, eine Instanz eines standardmäßigen HTML-Elements zu erstellen, das sich wie ein registriertes benutzerdefiniertes internes Element verhält.

- CSS-Pseudoklassen
  - : Pseudoklassen, die sich speziell auf benutzerdefinierte Elemente beziehen:
    - {{cssxref(":defined")}}
      - : Passt auf jedes Element, das definiert ist, einschließlich eingebauter Elemente und benutzerdefinierter Elemente, die mit `CustomElementRegistry.define()` definiert sind.
    - {{cssxref(":host")}}
      - : Selektiert den Shadow-Host des [Shadow DOMs](/de/docs/Web/API/Web_components/Using_shadow_DOM), das das CSS enthält, in dem es verwendet wird.
    - {{cssxref(":host", ":host()")}}
      - : Selektiert den Shadow-Host des [Shadow DOMs](/de/docs/Web/API/Web_components/Using_shadow_DOM), das das CSS enthält, in dem es verwendet wird (damit Sie ein benutzerdefiniertes Element von innerhalb seines Shadow DOMs selektieren können) – jedoch nur, wenn der als Parameter angegebene Selektor mit dem Shadow-Host übereinstimmt.
    - {{cssxref(":host-context", ":host-context()")}}
      - : Selektiert den Shadow-Host des [Shadow DOMs](/de/docs/Web/API/Web_components/Using_shadow_DOM), das das CSS enthält, in dem es verwendet wird (damit Sie ein benutzerdefiniertes Element von innerhalb seines Shadow DOMs selektieren können) – jedoch nur, wenn der als Parameter angegebene Selektor mit dem Vorfahren des Shadow-Hosts übereinstimmt, in dem es sich in der DOM-Hierarchie befindet.
    - {{CSSxRef(":state",":state()")}}
      - : Passt auf benutzerdefinierte Elemente, die sich in einem angegebenen benutzerdefinierten Status befinden.
        Genauer gesagt, es passt auf anonyme benutzerdefinierte Elemente, bei denen der angegebene Zustand in der [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) des Elements vorhanden ist.

- CSS Pseudoelemente
  - : Pseudoelemente, die sich speziell auf benutzerdefinierte Elemente beziehen:
    - {{cssxref("::part")}}
      - : Repräsentiert jedes Element innerhalb eines [Shadow Tree](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attribut hat.

### Shadow DOM

- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)
  - : Repräsentiert den Wurzelknoten eines Shadow DOM-Teilbaums.
- [`ShadowRoot.customElementRegistry`](/de/docs/Web/API/ShadowRoot/customElementRegistry)
  - : Das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry), das mit dem Shadow-Root verbunden ist. Kann über die `customElementRegistry`-Option von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) festgelegt werden oder später mithilfe von [`CustomElementRegistry.initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize).
- [`Element`](/de/docs/Web/API/Element) Erweiterungen
  - : Erweiterungen der `Element`-Schnittstelle in Bezug auf Shadow DOM:
    - Die Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) fügt einem spezifizierten Element einen Shadow DOM-Baum hinzu.
    - Die Eigenschaft [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) gibt die Shadow-Root zurück, die dem spezifizierten Element hinzugefügt wurde, oder `null`, wenn keine Shadow-Root hinzugefügt wurde.

- Relevante [`Node`](/de/docs/Web/API/Node) Ergänzungen
  - : Ergänzungen zur `Node`-Schnittstelle, die für Shadow DOM relevant sind:
    - Die Methode [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode) gibt den Wurzelknoten des Kontext-Objekts zurück, der optional die Shadow-Root umfasst, falls verfügbar.
    - Die Eigenschaft [`Node.isConnected`](/de/docs/Web/API/Node/isConnected) gibt einen booleschen Wert zurück, der angibt, ob der Knoten mit dem Kontext-Objekt verbunden ist (direkt oder indirekt), z.B. dem [`Document`](/de/docs/Web/API/Document)-Objekt im Fall des normalen DOMs oder dem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) im Fall eines Shadow DOMs.

- [`Event`](/de/docs/Web/API/Event) Erweiterungen
  - : Erweiterungen der `Event`-Schnittstelle in Bezug auf Shadow DOM:
    - [`Event.composed`](/de/docs/Web/API/Event/composed)
      - : Gibt `true` zurück, wenn sich das Ereignis über die Shadow DOM-Grenze in die Standard-DOM weiter verbreitet, ansonsten `false`.
    - [`Event.composedPath`](/de/docs/Web/API/Event/composedPath)
      - : Gibt den Ereignispfad zurück (Objekte, auf denen Listener aufgerufen werden). Dies umfasst keine Knoten in Shadow Trees, wenn die Shadow-Root mit [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) geschlossen erstellt wurde.

### HTML-Vorlagen

- {{htmlelement("template")}}
  - : Enthält ein HTML-Fragment, das beim ersten Laden eines Dokuments nicht gerendert wird, aber zur Laufzeit mit JavaScript angezeigt werden kann, hauptsächlich als Grundlage für benutzerdefinierte Elementstrukturen verwendet. Die zugehörige DOM-Schnittstelle ist [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
- {{htmlelement("slot")}}
  - : Ein Platzhalter in einer Webkomponente, den Sie mit Ihrem eigenen Markup füllen können, sodass Sie separate DOM-Bäume erstellen und zusammen präsentieren können. Die zugehörige DOM-Schnittstelle ist [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement).
- Das [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot) globale HTML-Attribut
  - : Weist einem Element einen Slot in einem Shadow DOM-Shadow-Baum zu.
- [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot)
  - : Ein schreibgeschütztes Attribut, das einen Verweis auf den {{htmlelement("slot")}} zurückgibt, in den dieses Element eingefügt ist.
- [`Text.assignedSlot`](/de/docs/Web/API/Text/assignedSlot)
  - : Ein schreibgeschütztes Attribut, das einen Verweis auf den {{htmlelement("slot")}} zurückgibt, in den dieser Textknoten eingefügt ist.
- [`Element`](/de/docs/Web/API/Element) Erweiterungen
  - : Erweiterungen der `Element`-Schnittstelle in Bezug auf Slots:
    - [`Element.slot`](/de/docs/Web/API/Element/slot)
      - : Gibt den Namen des an das Element angehängten Shadow DOM-Slots zurück.

- CSS Pseudoelemente
  - : Pseudoelemente, die sich speziell auf Slots beziehen:
    - {{cssxref("::slotted")}}
      - : Passt auf jeden Inhalt, der in einen Slot eingefügt wird.

- Das [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)-Ereignis
  - : Wird auf einer Instanz des [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) ({{htmlelement("slot")}}-Element) ausgelöst, wenn sich die in diesem Slot enthaltenen Knoten ändern.

## Beispiele

Wir bauen eine Reihe von Beispielen in unserem GitHub-Repo [web-components-examples](https://github.com/mdn/web-components-examples) auf. Weitere werden im Laufe der Zeit hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
