---
title: Web Components
slug: Web/API/Web_components
l10n:
  sourceCommit: 839b5e82a117678948392e77b81d64a7f6d03811
---

{{DefaultAPISidebar("Web Components")}}

Web Components ist ein Bündel verschiedener Technologien, das es Ihnen ermöglicht, wiederverwendbare benutzerdefinierte Elemente zu erstellen — mit Funktionalitäten, die vom Rest Ihres Codes gekapselt sind — und sie in Ihren Webanwendungen zu nutzen.

## Konzepte und Verwendung

Als Entwickler wissen wir alle, dass es eine gute Idee ist, Code so oft wie möglich wiederzuverwenden. Dies war traditionell nicht so einfach für benutzerdefinierte Markup-Strukturen — denken Sie an das komplexe HTML (und die zugehörigen Styles und Skripte), die Sie manchmal schreiben mussten, um benutzerdefinierte UI-Steuerelemente zu rendern, und daran, wie die mehrfache Verwendung dieser Steuerelemente Ihre Seite in ein Chaos verwandeln kann, wenn Sie nicht vorsichtig sind.

Web Components zielt darauf ab, solche Probleme zu lösen — es besteht aus drei Haupttechnologien, die zusammen verwendet werden können, um vielseitige benutzerdefinierte Elemente mit gekapselter Funktionalität zu erstellen, die überall wiederverwendet werden können, ohne die Angst vor Code-Kollisionen.

- **Benutzerdefinierte Elemente**
  - : Eine Reihe von JavaScript-APIs, mit denen Sie benutzerdefinierte Elemente und deren Verhalten definieren können, die dann nach Belieben in Ihrer Benutzeroberfläche verwendet werden können.
- **Shadow DOM**
  - : Eine Reihe von JavaScript-APIs, um einen gekapselten "Schatten"-DOM-Baum an ein Element anzuhängen — der getrennt vom Hauptdokument-DOM gerendert wird — und die zugehörige Funktionalität zu steuern. Auf diese Weise können Sie die Funktionen eines Elements privat halten, sodass sie geskriptet und gestylt werden können, ohne die Angst vor Kollisionen mit anderen Teilen des Dokuments.
- **HTML-Vorlagen**
  - : Die {{HTMLElement("template")}} und {{HTMLElement("slot")}} Elemente ermöglichen es Ihnen, Markup-Vorlagen zu schreiben, die nicht auf der gerenderten Seite angezeigt werden. Diese können dann mehrfach als Grundlage der Struktur eines benutzerdefinierten Elements wiederverwendet werden.

Der grundlegende Ansatz zur Implementierung einer Webkomponente sieht im Allgemeinen folgendermaßen aus:

1. Erstellen Sie eine Klasse, in der Sie die Funktionalität Ihrer Webkomponente spezifizieren, unter Verwendung der [class](/de/docs/Web/JavaScript/Reference/Classes) Syntax.
2. Registrieren Sie Ihr neues benutzerdefiniertes Element mit der Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define), indem Sie den zu definierenden Elementnamen, die Klasse oder Funktion, in der die Funktionalität spezifiziert wird, und optional, von welchem Element es erbt, übergeben.
3. Falls erforderlich, hängen Sie ein Shadow-DOM an das benutzerdefinierte Element an, unter Verwendung der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow). Fügen Sie dem Shadow-DOM Kindelemente, Ereignis-Listener etc. hinzu, unter Verwendung regulärer DOM-Methoden.
4. Falls erforderlich, definieren Sie eine HTML-Vorlage mit {{htmlelement("template")}} und {{htmlelement("slot")}}. Verwenden Sie erneut reguläre DOM-Methoden, um die Vorlage zu klonen und an Ihr Shadow-DOM anzuhängen.
5. Verwenden Sie Ihr benutzerdefiniertes Element nach Belieben auf Ihrer Seite, genau wie Sie es mit regulären HTML-Elementen tun würden.

## Leitfäden

- [Verwenden von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
  - : Ein Leitfaden, der zeigt, wie man die Funktionen von benutzerdefinierten Elementen nutzt, um einfache Webkomponenten zu erstellen, sowie Lebenszyklus-Collbacks und einige andere fortgeschrittenere Funktionen untersucht.
- [Verwenden von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
  - : Ein Leitfaden, der die Grundlagen von Shadow DOM untersucht, zeigt, wie man ein Shadow DOM an ein Element anhängt, es zum Shadow DOM-Baum hinzufügt, es stylt und mehr.
- [Verwenden von Vorlagen und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
  - : Ein Leitfaden, der zeigt, wie man eine wiederverwendbare HTML-Struktur mit {{htmlelement("template")}} und {{htmlelement("slot")}} definiert und diese Struktur dann innerhalb Ihrer Webkomponenten verwendet.

## Referenz

### Benutzerdefinierte Elemente

- [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)
  - : Beinhaltet Funktionen, die sich auf benutzerdefinierte Elemente beziehen, insbesondere die Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define), die zur Registrierung neuer benutzerdefinierter Elemente verwendet wird, sodass sie dann in Ihrem Dokument verwendet werden können.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements)
  - : Gibt eine Referenz auf das `CustomElementRegistry`-Objekt zurück.
- [Lebenszyklus-Rückrufe](/de/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks)

  - : Spezielle Rückruffunktionen, die innerhalb der Klassen-Definition des benutzerdefinierten Elements definiert sind und sein Verhalten beeinflussen:

    - `connectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element erstmals mit dem DOM des Dokuments verbunden wird.
    - `disconnectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element vom DOM des Dokuments getrennt wird.
    - `adoptedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element in ein neues Dokument verschoben wird.
    - `attributeChangedCallback()`
      - : Wird aufgerufen, wenn eines der Attribute des benutzerdefinierten Elements hinzugefügt, entfernt oder geändert wird.

- Erweiterungen zum Erstellen benutzerdefinierter eingebauter Elemente

  - : Die folgenden Erweiterungen sind definiert:

    - Das globale HTML-Attribut [`is`](/de/docs/Web/HTML/Global_attributes/is)
      - : Ermöglicht es, anzugeben, dass ein standardmäßiges HTML-Element wie ein registriertes benutzerdefiniertes eingebautes Element funktionieren soll.
    - Die "is"-Option der Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
      - : Ermöglicht es, eine Instanz eines standardmäßigen HTML-Elements zu erstellen, die wie ein gegebenes registriertes benutzerdefiniertes eingebautes Element funktioniert.

- CSS Pseudo-Klassen

  - : Pseudo-Klassen, die sich speziell auf benutzerdefinierte Elemente beziehen:

    - {{cssxref(":defined")}}
      - : Passt auf jedes Element, das definiert ist, einschließlich eingebauter Elemente und benutzerdefinierter Elemente, die mit `CustomElementRegistry.define()` definiert sind.
    - {{cssxref(":host")}}
      - : Wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, der das CSS enthält, innerhalb dessen es verwendet wird.
    - {{cssxref(":host", ":host()")}}
      - : Wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, der das CSS enthält, innerhalb dessen es verwendet wird (damit Sie ein benutzerdefiniertes Element aus seinem Shadow DOM auswählen können) — aber nur, wenn der als Parameter der Funktion gegebene Selektor mit dem Shadow-Host übereinstimmt.
    - {{cssxref(":host-context", ":host-context()")}}
      - : Wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, der das CSS enthält, innerhalb dessen es verwendet wird (damit Sie ein benutzerdefiniertes Element aus seinem Shadow DOM auswählen können) — aber nur, wenn der als Parameter der Funktion gegebene Selektor mit dem/den Vorfahren des Shadow-Hosts übereinstimmt, an dem es in der DOM-Hierarchie sitzt.
    - {{CSSxRef(":state",":state()")}}
      - : Passt auf benutzerdefinierte Elemente, die sich in einem spezifizierten benutzerdefinierten Zustand befinden.
        Genauer gesagt passt es auf anonyme benutzerdefinierte Elemente, wo der spezifizierte Zustand im [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) des Elements vorhanden ist.

- CSS Pseudo-Elemente

  - : Pseudo-Elemente, die sich speziell auf benutzerdefinierte Elemente beziehen:

    - {{cssxref("::part")}}
      - : Repräsentiert jedes Element innerhalb eines [Shadow Tree](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein übereinstimmendes [`part`](/de/docs/Web/HTML/Global_attributes#part) Attribut hat.

### Shadow DOM

- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)
  - : Repräsentiert den Wurzelknoten eines Shadow-DOM-Teilbaums.
- [`Element`](/de/docs/Web/API/Element) Erweiterungen

  - : Erweiterungen der `Element`-Schnittstelle in Bezug auf Shadow-DOM:

    - Die Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) hängt einen Shadow-DOM-Baum an das spezifizierte Element an.
    - Die Eigenschaft [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) gibt die an das spezifizierte Element angehängte Shadow-Root zurück, oder `null`, wenn keine Shadow-Root angehängt ist.

- Relevante Ergänzungen zur [`Node`](/de/docs/Web/API/Node) Schnittstelle

  - : Ergänzungen zur `Node`-Schnittstelle, die sich auf Shadow-DOM beziehen:

    - Die Methode [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode) gibt die Wurzel des Kontextobjekts zurück, die optionale die Shadow-Root einschließt, wenn sie verfügbar ist.
    - Die Eigenschaft [`Node.isConnected`](/de/docs/Web/API/Node/isConnected) gibt einen Boolean zurück, der angibt, ob der Knoten (direkt oder indirekt) mit dem Kontextobjekt verbunden ist, z. B. dem [`Document`](/de/docs/Web/API/Document) Objekt im Fall des normalen DOM oder dem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) im Fall eines Shadow-DOM.

- Erweiterungen zur [`Event`](/de/docs/Web/API/Event) Schnittstelle

  - : Erweiterungen der `Event`-Schnittstelle in Bezug auf Shadow-DOM:

    - [`Event.composed`](/de/docs/Web/API/Event/composed)
      - : Gibt `true` zurück, wenn das Ereignis über die Shadow-DOM-Grenze in das Standard-DOM propagieren wird, andernfalls `false`.
    - [`Event.composedPath`](/de/docs/Web/API/Event/composedPath)
      - : Gibt den Pfad des Ereignisses zurück (Objekte, bei denen Listener aufgerufen werden). Dies schließt keine Knoten in Shadow Trees ein, wenn die Shadow-Root mit [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) geschlossen erstellt wurde.

### HTML-Vorlagen

- {{htmlelement("template")}}
  - : Enthält ein HTML-Fragment, das nicht gerendert wird, wenn ein beinhaltendes Dokument initial geladen wird, aber zur Laufzeit mit JavaScript angezeigt werden kann, hauptsächlich als Grundlage für benutzerdefinierte Elemente-Strukturen verwendet. Die zugehörige DOM-Schnittstelle ist [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
- {{htmlelement("slot")}}
  - : Ein Platzhalter innerhalb einer Webkomponente, den Sie mit Ihrem eigenen Markup füllen können, was es Ihnen ermöglicht, separate DOM-Bäume zu erstellen und sie zusammen darzustellen. Die zugehörige DOM-Schnittstelle ist [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement).
- Das globale HTML-Attribut [`slot`](/de/docs/Web/HTML/Global_attributes/slot)
  - : Weist einem Element einen Slot in einem Shadow-DOM-Shadow-Tree zu.
- [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot)
  - : Ein schreibgeschütztes Attribut, das eine Referenz auf den {{htmlelement("slot")}} zurückgibt, in dem dieses Element eingefügt ist.
- [`Text.assignedSlot`](/de/docs/Web/API/Text/assignedSlot)
  - : Ein schreibgeschütztes Attribut, das eine Referenz auf den {{htmlelement("slot")}} zurückgibt, in dem dieser Textknoten eingefügt ist.
- [`Element`](/de/docs/Web/API/Element) Erweiterungen

  - : Erweiterungen der `Element`-Schnittstelle, die sich auf Slots beziehen:

    - [`Element.slot`](/de/docs/Web/API/Element/slot)
      - : Gibt den Namen des Shadow-DOM-Slots zurück, der an das Element angehängt ist.

- CSS Pseudo-Elemente

  - : Pseudo-Elemente, die sich speziell auf Slots beziehen:

    - {{cssxref("::slotted")}}
      - : Passt auf jeglichen Inhalt, der in einen Slot eingefügt wird.

- Das [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event) Ereignis
  - : Wird auf einer Instanz von [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) ({{htmlelement("slot")}} Element) ausgelöst, wenn sich der/die in diesem Slot enthaltenen Knoten ändern.

## Beispiele

Wir bauen eine Anzahl von Beispielen in unserem [web-components-examples](https://github.com/mdn/web-components-examples) GitHub-Repo auf. Im Laufe der Zeit werden weitere hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
