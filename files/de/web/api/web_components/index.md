---
title: Web Components
slug: Web/API/Web_components
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Web Components")}}

Web Components ist eine Suite verschiedener Technologien, die es Ihnen ermöglicht, wiederverwendbare benutzerdefinierte Elemente zu erstellen, deren Funktionalität vom Rest Ihres Codes gekapselt ist, und sie in Ihren Webanwendungen zu verwenden.

## Konzepte und Verwendung

Als Entwickler wissen wir alle, dass es eine gute Idee ist, Code so oft wie möglich wiederzuverwenden. Dies war traditionell nicht so einfach für benutzerdefinierte Markup-Strukturen – denken Sie an das komplexe HTML (und die dazugehörigen Styles und Skripte), das Sie manchmal schreiben mussten, um benutzerdefinierte UI-Steuerelemente zu rendern, und daran, wie die mehrfache Verwendung dieser Elemente Ihre Seite in ein Chaos verwandeln kann, wenn Sie nicht vorsichtig sind.

Web Components zielt darauf ab, solche Probleme zu lösen – es besteht aus drei Haupttechnologien, die zusammen verwendet werden können, um vielseitige benutzerdefinierte Elemente mit gekapselter Funktionalität zu erstellen, die Sie überall verwenden können, ohne Angst vor Code-Kollisionen zu haben.

- **Benutzerdefinierte Elemente**
  - : Ein Satz von JavaScript-APIs, der es Ihnen ermöglicht, benutzerdefinierte Elemente und deren Verhalten zu definieren, die dann nach Belieben in Ihrer Benutzeroberfläche verwendet werden können.
- **Shadow DOM**
  - : Ein Satz von JavaScript-APIs, um einem Element einen gekapselten "Schatten"-DOM-Baum anzufügen – der separat vom Haupt-Dokument-DOM gerendert wird – und die zugehörige Funktionalität zu steuern. Auf diese Weise können Sie die Funktionen eines Elements privat halten, sodass sie geskriptet und gestylt werden können, ohne Kollisionen mit anderen Teilen des Dokuments zu fürchten.
- **HTML-Templates**
  - : Die {{HTMLElement("template")}} und {{HTMLElement("slot")}} Elemente ermöglichen es Ihnen, Markup-Templates zu schreiben, die nicht auf der gerenderten Seite angezeigt werden. Diese können dann mehrfach als Grundlage für die Struktur eines benutzerdefinierten Elements wiederverwendet werden.

Der grundlegende Ansatz zur Implementierung einer Webkomponente sieht im Allgemeinen folgendermaßen aus:

1. Erstellen Sie eine Klasse, in der Sie die Funktionalität Ihrer Webkomponente mit der [class](/de/docs/Web/JavaScript/Reference/Classes)-Syntax angeben.
2. Registrieren Sie Ihr neues benutzerdefiniertes Element mit der Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define), indem Sie den zu definierenden Elementnamen, die Klasse oder Funktion, in der seine Funktionalität angegeben ist, und optional das Element, von dem es erbt, übergeben.
3. Falls erforderlich, fügen Sie dem benutzerdefinierten Element ein Shadow-DOM mithilfe der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) hinzu. Fügen Sie dem Shadow-DOM untergeordnete Elemente, Event-Listener usw. mit regulären DOM-Methoden hinzu.
4. Falls erforderlich, definieren Sie ein HTML-Template mit {{htmlelement("template")}} und {{htmlelement("slot")}}. Verwenden Sie erneut reguläre DOM-Methoden, um das Template zu klonen und an Ihr Shadow-DOM anzuhängen.
5. Verwenden Sie Ihr benutzerdefiniertes Element überall auf Ihrer Seite, genau wie Sie es mit einem regulären HTML-Element tun würden.

## Leitfäden

- [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
  - : Ein Leitfaden, der zeigt, wie man die Funktionen benutzerdefinierter Elemente nutzt, um einfache Webkomponenten zu erstellen, sowie Lebenszyklus-Callbacks und einige andere fortgeschrittene Funktionen untersucht.
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
  - : Ein Leitfaden, der die Grundlagen von Shadow DOM behandelt und zeigt, wie man einem Element ein Shadow DOM anfügt, den Shadow-DOM-Baum erweitert, es stylt und mehr.
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
  - : Ein Leitfaden, der zeigt, wie man eine wiederverwendbare HTML-Struktur mit den Elementen {{htmlelement("template")}} und {{htmlelement("slot")}} definiert und diese Struktur dann in Ihren Webkomponenten verwendet.

## Referenz

### Benutzerdefinierte Elemente

- [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)
  - : Enthält Funktionalitäten im Zusammenhang mit benutzerdefinierten Elementen, insbesondere die Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define), die verwendet wird, um neue benutzerdefinierte Elemente zu registrieren, damit sie dann in Ihrem Dokument verwendet werden können.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements)
  - : Gibt eine Referenz auf das `CustomElementRegistry`-Objekt zurück.
- [Lebenszyklus-Callbacks](/de/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks)

  - : Spezielle Callback-Funktionen, die innerhalb der Klassendefinition des benutzerdefinierten Elements definiert sind und sein Verhalten beeinflussen:

    - `connectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element zum ersten Mal mit dem Dokument-DOM verbunden wird.
    - `disconnectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element vom Dokument-DOM getrennt wird.
    - `adoptedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element in ein neues Dokument verschoben wird.
    - `attributeChangedCallback()`
      - : Wird aufgerufen, wenn eines der Attribute des benutzerdefinierten Elements hinzugefügt, entfernt oder geändert wird.

- Erweiterungen zum Erstellen benutzerdefinierter eingetragener Elemente

  - : Folgende Erweiterungen sind definiert:

    - Das globale HTML-Attribut [`is`](/de/docs/Web/HTML/Global_attributes/is)
      - : Ermöglicht es Ihnen, zu spezifizieren, dass ein standardmäßiges HTML-Element wie ein registriertes benutzerdefiniertes Element funktionieren soll.
    - Die "is"-Option der Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
      - : Ermöglicht es Ihnen, eine Instanz eines standardmäßigen HTML-Elements zu erstellen, das sich wie ein gegebenes registriertes benutzerdefiniertes Element verhält.

- CSS-Pseudoklassen

  - : Pseudoklassen, die sich speziell auf benutzerdefinierte Elemente beziehen:

    - {{cssxref(":defined")}}
      - : Passt auf jedes Element, das definiert ist, einschließlich eingebauter Elemente und benutzerdefinierter Elemente, die mit `CustomElementRegistry.define()` definiert sind.
    - {{cssxref(":host")}}
      - : Wählt den Shadow-Host des Shadow DOMs, das das CSS enthält, in dem es verwendet wird.
    - {{cssxref(":host", ":host()")}}
      - : Wählt den Shadow-Host des Shadow DOMs, das das CSS enthält, in dem es verwendet wird (so dass Sie ein benutzerdefiniertes Element von innen aus seinem Shadow DOM auswählen können) – jedoch nur, wenn der als Parameter der Funktion angegebene Selektor zum Shadow-Host passt.
    - {{cssxref(":host-context", ":host-context()")}}
      - : Wählt den Shadow-Host des Shadow DOMs, das das CSS enthält, in dem es verwendet wird (so dass Sie ein benutzerdefiniertes Element von innen aus seinem Shadow DOM auswählen können) – jedoch nur, wenn der als Parameter der Funktion angegebene Selektor zu den Vorfahren des Shadow-Hosts dort passt, wo es innerhalb der DOM-Hierarchie sitzt.
    - {{CSSxRef(":state",":state()")}}
      - : Passt auf benutzerdefinierte Elemente, die sich in einem bestimmten benutzerdefinierten Zustand befinden.
        Genauer gesagt, es passt auf anonyme benutzerdefinierte Elemente, bei denen der angegebene Zustand im [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) des Elements vorhanden ist.

- CSS-Pseudoelemente

  - : Pseudoelemente, die sich speziell auf benutzerdefinierte Elemente beziehen:

    - {{cssxref("::part")}}
      - : Repräsentiert jedes Element innerhalb eines [Shadow-Baums](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Global_attributes/part)-Attribut hat.

### Shadow DOM

- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)
  - : Repräsentiert den Wurzelknoten eines Shadow-DOM-Teilbaums.
- Erweiterungen für [`Element`](/de/docs/Web/API/Element)

  - : Erweiterungen der `Element`-Schnittstelle im Zusammenhang mit Shadow DOM:

    - Die Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) fügt dem angegebenen Element einen Shadow-DOM-Baum hinzu.
    - Die Eigenschaft [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) gibt die am angegebenen Element angehängte Shadow-Root zurück oder `null`, wenn keine Shadow-Root angehängt ist.

- Relevante Ergänzungen zu [`Node`](/de/docs/Web/API/Node)

  - : Ergänzungen zur `Node`-Schnittstelle, die für Shadow DOM relevant sind:

    - Die Methode [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode) gibt den Wurzelknoten des Kontextobjekts zurück, einschließlich der Shadow-Root, falls vorhanden.
    - Die Eigenschaft [`Node.isConnected`](/de/docs/Web/API/Node/isConnected) gibt einen Boolean zurück, der angibt, ob der Node mit dem Kontextobjekt verbunden ist (direkt oder indirekt), z.B. das [`Document`](/de/docs/Web/API/Document)-Objekt im Fall des normalen DOM oder die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) im Fall eines Shadow DOM.

- Erweiterungen für [`Event`](/de/docs/Web/API/Event)

  - : Erweiterungen der `Event`-Schnittstelle im Zusammenhang mit Shadow DOM:

    - [`Event.composed`](/de/docs/Web/API/Event/composed)
      - : Gibt `true` zurück, wenn das Ereignis über die Shadow-DOM-Grenze hinweg in das Standard-DOM übertragen wird, ansonsten `false`.
    - [`Event.composedPath`](/de/docs/Web/API/Event/composedPath)
      - : Gibt den Pfad des Ereignisses zurück (Objekte, auf denen Listener aktiviert werden). Dies schließt keine Knoten in Shadow-Bäumen ein, wenn die Shadow-Root mit [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) geschlossen erstellt wurde.

### HTML-Templates

- {{htmlelement("template")}}
  - : Enthält ein HTML-Fragment, das nicht gerendert wird, wenn ein Dokument beim Start geladen wird, aber zur Laufzeit mit JavaScript angezeigt werden kann, hauptsächlich als Grundlage für benutzerdefinierte Elementstrukturen verwendet. Die zugehörige DOM-Schnittstelle ist [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
- {{htmlelement("slot")}}
  - : Ein Platzhalter innerhalb einer Webkomponente, den Sie mit Ihrem eigenen Markup füllen können, der Ihnen erlaubt, separate DOM-Bäume zu erstellen und sie gemeinsam darzustellen. Die zugehörige DOM-Schnittstelle ist [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement).
- Das globale HTML-Attribut [`slot`](/de/docs/Web/HTML/Global_attributes/slot)
  - : Weist einem Element einen Slot in einem Shadow-DOM-Shadow-Baum zu.
- [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot)
  - : Ein schreibgeschütztes Attribut, das eine Referenz auf den {{htmlelement("slot")}} zurückgibt, in den dieses Element eingefügt ist.
- [`Text.assignedSlot`](/de/docs/Web/API/Text/assignedSlot)
  - : Ein schreibgeschütztes Attribut, das eine Referenz auf den {{htmlelement("slot")}} zurückgibt, in den dieser Textknoten eingefügt ist.
- Erweiterungen für [`Element`](/de/docs/Web/API/Element)

  - : Erweiterungen der `Element`-Schnittstelle im Zusammenhang mit Slots:

    - [`Element.slot`](/de/docs/Web/API/Element/slot)
      - : Gibt den Namen des Shadow-DOM-Slots zurück, der dem Element zugewiesen ist.

- CSS-Pseudoelemente

  - : Pseudoelemente, die sich speziell auf Slots beziehen:

    - {{cssxref("::slotted")}}
      - : Passt auf jeden Inhalt, der in einen Slot eingefügt wird.

- Das [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)-Ereignis
  - : Wird auf einer [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)-Instanz ({{htmlelement("slot")}}-Element) ausgelöst, wenn sich der/die Knoten in diesem Slot ändern.

## Beispiele

Wir erstellen eine Anzahl von Beispielen in unserem [web-components-examples](https://github.com/mdn/web-components-examples) GitHub-Repository. Mit der Zeit werden mehr hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
