---
title: Web Components
slug: Web/API/Web_components
l10n:
  sourceCommit: 56f5609d323467cd08eeaddc57e4490a02be1889
---

{{DefaultAPISidebar("Web Components")}}

Web Components ist eine Suite verschiedener Technologien, die es Ihnen ermöglichen, wiederverwendbare benutzerdefinierte Elemente zu erstellen — mit Funktionalität, die vom Rest Ihres Codes gekapselt ist — und diese in Ihren Webanwendungen zu verwenden.

## Konzepte und Verwendung

Als Entwickler wissen wir alle, dass es eine gute Idee ist, Code so oft wie möglich wiederzuverwenden. Traditionell war dies bei benutzerdefinierten Markup-Strukturen nicht so einfach — denken Sie an das komplexe HTML (sowie die zugehörigen Stile und Skripte), das Sie manchmal schreiben mussten, um benutzerdefinierte UI-Elemente zu rendieren, und wie die mehrfache Verwendung dieser Elemente Ihre Seite in ein Chaos verwandeln kann, wenn Sie nicht vorsichtig sind.

Web Components zielt darauf ab, solche Probleme zu lösen — es besteht aus drei Haupttechnologien, die zusammen verwendet werden können, um vielseitige benutzerdefinierte Elemente mit gekapselter Funktionalität zu erstellen, die problemlos überall wiederverwendet werden können, ohne Angst vor Codekollisionen zu haben.

- **Benutzerdefinierte Elemente**
  - : Eine Reihe von JavaScript-APIs, die es Ihnen ermöglichen, benutzerdefinierte Elemente und deren Verhalten zu definieren, die dann wie gewünscht in Ihrer Benutzeroberfläche verwendet werden können.
- **Shadow DOM**
  - : Eine Reihe von JavaScript-APIs zum Anhängen eines gekapselten "Shadow"-DOM-Baums an ein Element — das getrennt vom Hauptdokument-DOM gerendert wird — und zur Steuerung der zugehörigen Funktionalität. Auf diese Weise können Sie die Funktionen eines Elements privat halten, sodass sie geskriptet und gestylt werden können, ohne die Angst vor Kollisionen mit anderen Teilen des Dokuments.
- **HTML-Vorlagen**
  - : Die {{HTMLElement("template")}}- und {{HTMLElement("slot")}}-Elemente ermöglichen es Ihnen, Markup-Vorlagen zu schreiben, die nicht auf der gerenderten Seite angezeigt werden. Diese können dann mehrfach als Grundlage für die Struktur eines benutzerdefinierten Elements wiederverwendet werden.

Der grundlegende Ansatz zur Implementierung eines Web-Components sieht im Allgemeinen etwa so aus:

1. Erstellen Sie eine Klasse, in der Sie die Funktionalität Ihres Web-Components mit der [class](/de/docs/Web/JavaScript/Reference/Classes)-Syntax angeben.
2. Registrieren Sie Ihr neues benutzerdefiniertes Element mithilfe der Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define), indem Sie den zu definierenden Elementnamen, die Klasse oder Funktion, in der die Funktionalität angegeben ist, und optional das zu ererbende Element übergeben.
3. Falls erforderlich, hängen Sie ein Shadow DOM an das benutzerdefinierte Element mithilfe der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow). Fügen Sie dem Shadow DOM mit regulären DOM-Methoden untergeordnete Elemente, Event-Listener usw. hinzu.
4. Falls erforderlich, definieren Sie eine HTML-Vorlage mit {{htmlelement("template")}} und {{htmlelement("slot")}}. Verwenden Sie erneut reguläre DOM-Methoden, um die Vorlage zu klonen und an Ihr Shadow DOM anzuhängen.
5. Verwenden Sie Ihr benutzerdefiniertes Element überall auf Ihrer Seite, genau wie Sie es mit einem regulären HTML-Element tun würden.

## Leitfäden

- [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
  - : Ein Leitfaden, der zeigt, wie man die Funktionen von benutzerdefinierten Elementen verwendet, um einfache Web-Components zu erstellen, sowie Lifecycle-Callbacks und einige andere fortgeschrittenere Funktionen betrachtet.
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
  - : Ein Leitfaden, der die Grundlagen des Shadow DOM betrachtet und zeigt, wie man ein Shadow DOM an ein Element anhängt, dem Shadow DOM-Baum hinzufügt, es stylt und mehr.
- [Verwendung von Vorlagen und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
  - : Ein Leitfaden, der zeigt, wie man eine wiederverwendbare HTML-Struktur mit den {{htmlelement("template")}} und {{htmlelement("slot")}}-Elementen definiert und diese Struktur dann in Ihren Web-Components verwendet.

## Referenz

### Benutzerdefinierte Elemente

- [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)
  - : Enthält Funktionalitäten im Zusammenhang mit benutzerdefinierten Elementen, insbesondere die Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define), die verwendet wird, um neue benutzerdefinierte Elemente zu registrieren, damit sie dann in Ihrem Dokument verwendet werden können.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements)
  - : Gibt eine Referenz auf das `CustomElementRegistry`-Objekt zurück.
- [Lifecycle-Callbacks](/de/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks)
  - : Spezielle Callback-Funktionen, die innerhalb der Klassendefinition des benutzerdefinierten Elements definiert sind und sein Verhalten beeinflussen:
    - `connectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element zum ersten Mal mit dem DOM des Dokuments verbunden wird.
    - `disconnectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element vom DOM des Dokuments getrennt wird.
    - `adoptedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element in ein neues Dokument verschoben wird.
    - `attributeChangedCallback()`
      - : Wird aufgerufen, wenn eines der Attribute des benutzerdefinierten Elements hinzugefügt, entfernt oder geändert wird.

- Erweiterungen zur Erstellung angepasster eingebauter Elemente
  - : Die folgenden Erweiterungen sind definiert:
    - Das [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is) globale HTML-Attribut
      - : Ermöglicht es Ihnen anzugeben, dass ein standardmäßiges HTML-Element wie ein registriertes angepasstes eingebautes Element funktionieren soll.
    - Die "is"-Option der Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
      - : Ermöglicht es Ihnen, eine Instanz eines standardmäßigen HTML-Elements zu erstellen, die wie ein gegebenes registriertes angepasstes eingebautes Element funktioniert.

- CSS-Pseudoklassen
  - : Pseudoklassen, die sich speziell auf benutzerdefinierte Elemente beziehen:
    - {{cssxref(":defined")}}
      - : Passt auf jedes definierte Element, einschließlich eingebauter Elemente und benutzerdefinierter Elemente, die mit `CustomElementRegistry.define()` definiert wurden.
    - {{cssxref(":host")}}
      - : Selektiert den Schatten-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM), das die CSS enthält, die darin verwendet wird.
    - {{cssxref(":host", ":host()")}}
      - : Selektiert den Schatten-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM), das die CSS enthält, die darin verwendet wird (damit Sie ein benutzerdefiniertes Element von seinem Shadow DOM aus auswählen können) — aber nur, wenn der als Parameter der Funktion angegebene Selektor mit dem Schatten-Host übereinstimmt.
    - {{cssxref(":host-context", ":host-context()")}}
      - : Selektiert den Schatten-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM), das die CSS enthält, die darin verwendet wird (damit Sie ein benutzerdefiniertes Element von seinem Shadow DOM aus auswählen können) — aber nur, wenn der als Parameter der Funktion angegebene Selektor mit dem Vorfahren des Schatten-Hosts im DOM-Hierarchieplatz übereinstimmt.
    - {{CSSxRef(":state",":state()")}}
      - : Passt auf benutzerdefinierte Elemente, die sich in einem angegebenen benutzerdefinierten Zustand befinden.
        Genauer gesagt passt es auf anonyme benutzerdefinierte Elemente, bei denen der angegebene Zustand im [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) des Elements vorhanden ist.

- CSS-Pseudoelemente
  - : Pseudoelemente, die sich speziell auf benutzerdefinierte Elemente beziehen:
    - {{cssxref("::part")}}
      - : Stellt jedes Element innerhalb eines [Shadow Tree](/de/docs/Web/API/Web_components/Using_shadow_DOM) dar, das ein übereinstimmendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attribut hat.

### Shadow DOM

- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)
  - : Stellt die Wurzelknoten eines Shadow DOM-Unterbaums dar.
- [`Element`](/de/docs/Web/API/Element)-Erweiterungen
  - : Erweiterungen der `Element`-Schnittstelle im Zusammenhang mit Shadow DOM:
    - Die Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) hängt einen Shadow DOM-Baum an das spezifizierte Element an.
    - Die Eigenschaft [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) gibt die am spezifizierten Element angehängte Schattenwurzel zurück oder `null`, wenn keine Schattenwurzel angehängt ist.

- Relevante Ergänzungen der [`Node`](/de/docs/Web/API/Node)-Schnittstelle
  - : Ergänzungen zur `Node`-Schnittstelle im Zusammenhang mit Shadow DOM:
    - Die Methode [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode) gibt die Wurzel des Kontextobjekts zurück, die optional die Schattenwurzel einschließt, wenn diese verfügbar ist.
    - Die Eigenschaft [`Node.isConnected`](/de/docs/Web/API/Node/isConnected) gibt einen booleschen Wert zurück, der angibt, ob der Knoten an das Kontextobjekt, z.B. das [`Document`](/de/docs/Web/API/Document)-Objekt im Fall des normalen DOM oder die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) im Fall eines Shadow DOM, direkt oder indirekt angeschlossen ist.

- Erweiterungen der [`Event`](/de/docs/Web/API/Event)-Schnittstelle
  - : Erweiterungen der `Event`-Schnittstelle im Zusammenhang mit Shadow DOM:
    - [`Event.composed`](/de/docs/Web/API/Event/composed)
      - : Gibt `true` zurück, wenn das Ereignis die Shadow DOM-Grenze in das Standard-DOM hinein überqueren wird, andernfalls `false`.
    - [`Event.composedPath`](/de/docs/Web/API/Event/composedPath)
      - : Gibt den Pfad des Ereignisses zurück (Objekte, auf denen Listener aufgerufen werden). Dies schließt keine Knoten in Shadow Trees ein, wenn die Schattenwurzel mit [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) geschlossen erstellt wurde.

### HTML-Vorlagen

- {{htmlelement("template")}}
  - : Enthält ein HTML-Fragment, das nicht gerendert wird, wenn ein enthaltendes Dokument zunächst geladen wird, aber zur Laufzeit mit JavaScript angezeigt werden kann, hauptsächlich als Grundlage für benutzerdefinierte Elementstrukturen verwendet. Die zugehörige DOM-Schnittstelle ist [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
- {{htmlelement("slot")}}
  - : Eine Platzhalter innerhalb eines Web-Components, die Sie mit Ihrem eigenen Markup füllen können und es Ihnen ermöglicht, separate DOM-Bäume zu erstellen und zusammen darzustellen. Die zugehörige DOM-Schnittstelle ist [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement).
- Das globale HTML-Attribut [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)
  - : Weist einem Element in einem Shadow DOM-Schattenbaum einen Slot zu.
- [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot)
  - : Ein schreibgeschütztes Attribut, das eine Referenz auf den {{htmlelement("slot")}} zurückgibt, in den dieses Element eingesetzt ist.
- [`Text.assignedSlot`](/de/docs/Web/API/Text/assignedSlot)
  - : Ein schreibgeschütztes Attribut, das eine Referenz auf den {{htmlelement("slot")}} zurückgibt, in den dieser Textknoten eingesetzt ist.
- Erweiterungen der [`Element`](/de/docs/Web/API/Element)-Schnittstelle
  - : Erweiterungen der `Element`-Schnittstelle im Zusammenhang mit Slots:
    - [`Element.slot`](/de/docs/Web/API/Element/slot)
      - : Gibt den Namen des Schatten-DOM-Slots zurück, der dem Element zugeordnet ist.

- CSS-Pseudoelemente
  - : Pseudoelemente, die sich speziell auf Slots beziehen:
    - {{cssxref("::slotted")}}
      - : Passt auf jeden Inhalt, der in einen Slot eingesetzt wird.

- Das [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)-Ereignis
  - : Wird auf einer Instanz eines [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) ({{htmlelement("slot")}}-Element) ausgelöst, wenn die in diesem Slot enthaltenen Knoten geändert werden.

## Beispiele

Wir bauen eine Reihe von Beispielen in unserem [web-components-examples](https://github.com/mdn/web-components-examples) GitHub-Repo auf. Weitere werden im Laufe der Zeit hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
