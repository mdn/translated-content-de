---
title: Web Components
slug: Web/API/Web_components
l10n:
  sourceCommit: 839b5e82a117678948392e77b81d64a7f6d03811
---

{{DefaultAPISidebar("Web Components")}}

Web Components ist ein Suite aus verschiedenen Technologien, die es Ihnen ermöglicht, wiederverwendbare benutzerdefinierte Elemente zu erstellen, deren Funktionalität vom Rest Ihres Codes gekapselt ist, und sie in Ihren Web-Apps zu nutzen.

## Konzepte und Verwendung

Als Entwickler wissen wir alle, dass es eine gute Idee ist, Code so weit wie möglich wiederzuverwenden. Dies war traditionell nicht so einfach für benutzerdefinierte Markup-Strukturen – denken Sie an die komplexen HTML-Strukturen (und die zugehörigen Styles und Skripte), die Sie manchmal schreiben mussten, um benutzerdefinierte UI-Steuerelemente zu rendern. Wenn Sie diese mehrfach nutzen, kann Ihre Seite zu einem Durcheinander werden, wenn Sie nicht aufpassen.

Web Components zielt darauf ab, solche Probleme zu lösen. Es besteht aus drei Haupttechnologien, die zusammen verwendet werden können, um vielseitige benutzerdefinierte Elemente mit gekapselter Funktionalität zu erstellen, die Sie überall wiederverwenden können, ohne Angst vor Kollisionen im Code zu haben.

- **Custom elements** (Benutzerdefinierte Elemente)
  - : Eine Reihe von JavaScript-APIs, die es Ihnen ermöglichen, benutzerdefinierte Elemente und ihr Verhalten zu definieren, die dann nach Belieben in Ihrer Benutzeroberfläche verwendet werden können.
- **Shadow DOM**
  - : Eine Reihe von JavaScript-APIs zum Anhängen eines gekapselten "Shadow"-DOM-Baums an ein Element, der separat vom Hauptdokument-DOM gerendert wird, und zum Steuern der zugehörigen Funktionalität. Auf diese Weise können Sie die Eigenschaften eines Elements geheim halten, sodass sie geskriptet und gestylt werden können, ohne die Gefahr einer Kollision mit anderen Teilen des Dokuments.
- **HTML Templates**
  - : Die {{HTMLElement("template")}} und {{HTMLElement("slot")}} Elemente ermöglichen es Ihnen, Markup-Templates zu schreiben, die nicht auf der gerenderten Seite angezeigt werden. Diese können dann mehrfach als Basis für die Struktur eines benutzerdefinierten Elements wiederverwendet werden.

Der grundlegende Ansatz zur Implementierung eines Webkomponenten sieht im Allgemeinen wie folgt aus:

1. Erstellen Sie eine Klasse, in der Sie die Funktionalität Ihrer Webkomponente mit der [class](/de/docs/Web/JavaScript/Reference/Classes) Syntax angeben.
2. Registrieren Sie Ihr neues benutzerdefiniertes Element mit der Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define), indem Sie den Namen des zu definierenden Elements, die Klasse oder Funktion, in der die Funktionalität angegeben ist, und optional das Element, von dem es erbt, übergeben.
3. Falls erforderlich, fügen Sie dem benutzerdefinierten Element über die Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) ein Shadow-DOM hinzu. Fügen Sie dem Shadow DOM mit regulären DOM-Methoden Kind-Elemente, Ereignis-Listener usw. hinzu.
4. Falls erforderlich, definieren Sie ein HTML-Template mit {{htmlelement("template")}} und {{htmlelement("slot")}}. Verwenden Sie erneut reguläre DOM-Methoden, um das Template zu klonen und an Ihr Shadow-DOM anzuhängen.
5. Verwenden Sie Ihr benutzerdefiniertes Element, wo immer Sie möchten auf Ihrer Seite, genau wie Sie es mit jedem regulären HTML-Element tun würden.

## Leitfäden

- [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
  - : Ein Leitfaden, der zeigt, wie Sie die Funktionen von benutzerdefinierten Elementen nutzen, um einfache Webkomponenten zu erstellen, sowie Lebenszyklus-Callbacks und einige andere fortgeschrittenere Funktionen untersucht.
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
  - : Ein Leitfaden, der die Grundlagen des Shadow-DOM behandelt und zeigt, wie man ein Shadow-DOM an ein Element anhängt, es zum Shadow-DOM-Baum hinzufügt, es stylt und mehr.
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
  - : Ein Leitfaden, der zeigt, wie man eine wiederverwendbare HTML-Struktur mit {{htmlelement("template")}} und {{htmlelement("slot")}} Elementen definiert und diese Struktur dann innerhalb Ihrer Webkomponenten verwendet.

## Referenz

### Benutzerdefinierte Elemente

- [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)
  - : Enthält Funktionalitäten im Zusammenhang mit benutzerdefinierten Elementen, insbesondere die Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define), um neue benutzerdefinierte Elemente zu registrieren, damit sie dann in Ihrem Dokument verwendet werden können.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements)
  - : Gibt eine Referenz auf das `CustomElementRegistry`-Objekt zurück.
- [Lebenszyklus-Codierungen](/de/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks)
  - : Spezielle Callback-Funktionen, die in der Klassendefinition des benutzerdefinierten Elements definiert sind und sein Verhalten beeinflussen:

    - `connectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element erstmals mit dem DOM des Dokuments verbunden wird.
    - `disconnectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element vom DOM des Dokuments getrennt wird.
    - `adoptedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element in ein neues Dokument verschoben wird.
    - `attributeChangedCallback()`
      - : Wird aufgerufen, wenn eines der Attribute des benutzerdefinierten Elements hinzugefügt, entfernt oder geändert wird.

- Erweiterungen für die Erstellung benutzerdefinierter eingebauter Elemente

  - : Die folgenden Erweiterungen sind definiert:

    - Das globale HTML-Attribut [`is`](/de/docs/Web/HTML/Global_attributes/is)
      - : Erlaubt es Ihnen anzugeben, dass ein standardmäßiges HTML-Element sich wie ein registriertes benutzerdefiniertes eingebautes Element verhalten soll.
    - Die "is"-Option der Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
      - : Erlaubt es Ihnen, eine Instanz eines standardmäßigen HTML-Elements zu erstellen, die sich wie ein registriertes benutzerdefiniertes eingebautes Element verhält.

- CSS-Pseudoklassen

  - : Pseudoklassen, die sich speziell auf benutzerdefinierte Elemente beziehen:

    - {{cssxref(":defined")}}
      - : Passt auf jedes Element, das definiert ist, einschließlich eingebauter Elemente und benutzerdefinierter Elemente, die mit `CustomElementRegistry.define()` definiert wurden.
    - {{cssxref(":host")}}
      - : Selektiert den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM), der die CSS des verwendeten Bereichs enthält.
    - {{cssxref(":host", ":host()")}}
      - : Selektiert den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM), der die CSS des verwendeten Bereichs enthält (sodass Sie ein benutzerdefiniertes Element von innen seines Shadow-DOMs auswählen können) — aber nur, wenn der als Parameter der Funktion gegebene Selektor mit dem Shadow-Host übereinstimmt.
    - {{cssxref(":host-context", ":host-context()")}}
      - : Selektiert den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM), der die CSS des verwendeten Bereichs enthält (sodass Sie ein benutzerdefiniertes Element von innen seines Shadow-DOMs auswählen können) — aber nur, wenn der als Parameter der Funktion gegebene Selektor mit dem Vorfahren des Shadow-Hosts in der Stelle übereinstimmt, wo es sich in der DOM-Hierarchie befindet.
    - {{CSSxRef(":state",":state()")}}
      - : Passt auf benutzerdefinierte Elemente, die sich in einem spezifischen benutzerdefinierten Zustand befinden.
        Genauer passt es auf anonyme benutzerdefinierte Elemente, bei denen der angegebene Zustand im [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) des Elements vorhanden ist.

- CSS-Pseudoelemente

  - : Pseudoelemente, die sich speziell auf benutzerdefinierte Elemente beziehen:

    - {{cssxref("::part")}}
      - : Repräsentiert jedes Element innerhalb eines [Shadow-Baums](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Global_attributes#part) Attribut besitzt.

### Shadow DOM

- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)
  - : Repräsentiert den Wurzelknoten eines Shadow-DOM-Teilbaums.
- Erweiterungen der [`Element`](/de/docs/Web/API/Element)

  - : Erweiterungen der `Element`-Schnittstelle in Bezug auf Shadow-DOM:

    - Die Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) fügt dem angegebenen Element einen Shadow-DOM-Baum hinzu.
    - Die Eigenschaft [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) gibt die an das angegebene Element angehängte Shadow-Root zurück oder `null`, wenn keine Shadow-Root angehängt ist.

- Relevante Ergänzungen zu [`Node`](/de/docs/Web/API/Node)

  - : Ergänzungen zur `Node`-Schnittstelle in Bezug auf Shadow-DOM:

    - Die Methode [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode) gibt die Wurzel des Kontextobjekts zurück, das optional die Shadow-Root einschließt, wenn sie verfügbar ist.
    - Die Eigenschaft [`Node.isConnected`](/de/docs/Web/API/Node/isConnected) gibt einen booleschen Wert zurück, der angibt, ob der Knoten (direkt oder indirekt) mit dem Kontextobjekt verbunden ist, z.B. das [`Document`](/de/docs/Web/API/Document) -Objekt im Fall des normalen DOM oder der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) im Fall eines Shadow-DOM.

- Erweiterungen der [`Event`](/de/docs/Web/API/Event)

  - : Erweiterungen zur `Event`-Schnittstelle in Bezug auf Shadow-DOM:

    - [`Event.composed`](/de/docs/Web/API/Event/composed)
      - : Gibt `true` zurück, wenn das Ereignis über die Grenze des Shadow-DOMs in das Standard-DOM propagieren wird, andernfalls `false`.
    - [`Event.composedPath`](/de/docs/Web/API/Event/composedPath)
      - : Gibt den Ereignis-Pfad zurück (Objekte, auf denen Listener aufgerufen werden). Dies schließt keine Knoten in Shadow-Bäumen ein, wenn die Shadow-Root mit [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) geschlossen erstellt wurde.

### HTML Templates

- {{htmlelement("template")}}
  - : Enthält ein HTML-Fragment, das beim initialen Laden eines enthaltenen Dokuments nicht gerendert wird, aber zur Laufzeit mit JavaScript angezeigt werden kann und hauptsächlich als Basis für benutzerdefinierte Elementstrukturen verwendet wird. Die zugehörige DOM-Schnittstelle ist [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
- {{htmlelement("slot")}}
  - : Ein Platzhalter innerhalb einer Webkomponente, den Sie mit Ihrem eigenen Markup füllen können und der Ihnen ermöglicht, separate DOM-Bäume zu erstellen und zusammen darzustellen. Die zugehörige DOM-Schnittstelle ist [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement).
- Das globale HTML-Attribut [`slot`](/de/docs/Web/HTML/Global_attributes/slot)
  - : Weist einem Element einen Slot in einem Shadow-DOM-Shadow-Baum zu.
- [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot)
  - : Ein read-only Attribut, das eine Referenz auf den {{htmlelement("slot")}} zurückgibt, in dem dieses Element eingefügt ist.
- [`Text.assignedSlot`](/de/docs/Web/API/Text/assignedSlot)
  - : Ein read-only Attribut, das eine Referenz auf den {{htmlelement("slot")}} zurückgibt, in dem dieser Textknoten eingefügt ist.
- Erweiterungen der [`Element`](/de/docs/Web/API/Element)

  - : Erweiterungen zur `Element`-Schnittstelle in Bezug auf Slots:

    - [`Element.slot`](/de/docs/Web/API/Element/slot)
      - : Gibt den Namen des dem Element zugeordneten Shadow-DOM-Slots zurück.

- CSS-Pseudoelemente

  - : Pseudoelemente, die sich speziell auf Slots beziehen:

    - {{cssxref("::slotted")}}
      - : Passt auf jeden Inhalt, der in einen Slot eingefügt wird.

- Das [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event) Ereignis
  - : Wird auf einer Instanz von [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) ({{htmlelement("slot")}} Element) ausgelöst, wenn sich die Knoten, die in diesem Slot enthalten sind, ändern.

## Beispiele

Wir bauen eine Reihe von Beispielen in unserem [web-components-examples](https://github.com/mdn/web-components-examples) GitHub-Repo auf. Weitere werden im Laufe der Zeit hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
