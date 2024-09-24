---
title: Web-Komponenten
slug: Web/API/Web_components
l10n:
  sourceCommit: 839b5e82a117678948392e77b81d64a7f6d03811
---

{{DefaultAPISidebar("Web Components")}}

Web-Komponenten sind eine Sammlung verschiedener Technologien, die es Ihnen ermöglichen, wiederverwendbare benutzerdefinierte Elemente zu erstellen, deren Funktionalität vom Rest Ihres Codes gekapselt ist, und diese in Ihren Webanwendungen zu nutzen.

## Konzepte und Verwendung

Als Entwickler wissen wir alle, dass es eine gute Idee ist, Code so oft wie möglich wiederzuverwenden. Dies war traditionell nicht so einfach für benutzerdefinierte Markup-Strukturen – denken Sie an das komplexe HTML (und den dazugehörigen Stil und das Skript), das Sie manchmal schreiben mussten, um benutzerdefinierte UI-Steuerelemente zu rendern, und daran, wie die mehrfache Verwendung dieser Elemente Ihre Seite in ein Chaos verwandeln kann, wenn Sie nicht vorsichtig sind.

Web-Komponenten zielen darauf ab, solche Probleme zu lösen – sie bestehen aus drei Haupttechnologien, die zusammen verwendet werden können, um vielseitige benutzerdefinierte Elemente mit gekapselter Funktionalität zu erstellen, die Sie überall dort wiederverwenden können, wo Sie möchten, ohne Angst vor Codekollisionen.

- **Benutzerdefinierte Elemente**
  - : Eine Reihe von JavaScript-APIs, die es Ihnen ermöglichen, benutzerdefinierte Elemente und deren Verhalten zu definieren, die dann wie gewünscht in Ihrer Benutzeroberfläche verwendet werden können.
- **Shadow DOM**
  - : Eine Reihe von JavaScript-APIs zum Anhängen eines gekapselten "Shadow"-DOM-Baums an ein Element – der getrennt vom Hauptdokument-DOM gerendert wird – und zum Steuern der zugehörigen Funktionalität. Auf diese Weise können Sie die Eigenschaften eines Elements privat halten, sodass sie geskriptet und gestylt werden können, ohne dass es zu Kollisionen mit anderen Teilen des Dokuments kommt.
- **HTML-Templates**
  - : Die {{HTMLElement("template")}}- und {{HTMLElement("slot")}}-Elemente ermöglichen es Ihnen, Markup-Templates zu schreiben, die nicht auf der gerenderten Seite angezeigt werden. Diese können dann mehrfach als Basis für die Struktur eines benutzerdefinierten Elements wiederverwendet werden.

Der grundlegende Ansatz zur Implementierung einer Webkomponente sieht im Allgemeinen etwa so aus:

1. Erstellen Sie eine Klasse, in der Sie die Funktionalität Ihrer Webkomponente festlegen, unter Verwendung der [class](/de/docs/Web/JavaScript/Reference/Classes)-Syntax.
2. Registrieren Sie Ihr neues benutzerdefiniertes Element mit der Methode {{domxref("CustomElementRegistry.define()")}}, indem Sie den zu definierenden Elementnamen, die Klasse oder Funktion, in der ihre Funktionalität festgelegt ist, und optional, von welchem Element es erbt, übergeben.
3. Falls erforderlich, hängen Sie ein Shadow DOM an das benutzerdefinierte Element mit der Methode {{domxref("Element.attachShadow()")}} an. Fügen Sie dem Shadow DOM Kind-Elemente, Ereignis-Listener usw. mit regulären DOM-Methoden hinzu.
4. Falls erforderlich, definieren Sie ein HTML-Template mit {{htmlelement("template")}} und {{htmlelement("slot")}}. Verwenden Sie erneut reguläre DOM-Methoden, um das Template zu klonen und an Ihr Shadow DOM anzuhängen.
5. Verwenden Sie Ihr benutzerdefiniertes Element überall dort auf Ihrer Seite, wo Sie möchten, genau wie Sie es mit jedem regulären HTML-Element tun würden.

## Anleitungen

- [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
  - : Eine Anleitung, die zeigt, wie man die Funktionen benutzerdefinierter Elemente verwendet, um einfache Web-Komponenten zu erstellen, sowie einen Blick auf Lebenszyklus-Callbacks und einige andere fortgeschrittene Funktionen wirft.
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
  - : Eine Anleitung, die die Grundlagen des Shadow DOM behandelt und zeigt, wie man ein Shadow DOM an ein Element anhängt, den Shadow DOM-Baum ergänzt, ihn gestaltet und mehr.
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
  - : Eine Anleitung, die zeigt, wie man eine wiederverwendbare HTML-Struktur mit den {{htmlelement("template")}}- und {{htmlelement("slot")}}-Elementen definiert und diese Struktur dann innerhalb Ihrer Webkomponenten verwendet.

## Referenz

### Benutzerdefinierte Elemente

- {{domxref("CustomElementRegistry")}}
  - : Enthält Funktionalitäten im Zusammenhang mit benutzerdefinierten Elementen, insbesondere die {{domxref("CustomElementRegistry.define()")}}-Methode, die verwendet wird, um neue benutzerdefinierte Elemente zu registrieren, sodass sie dann in Ihrem Dokument verwendet werden können.
- {{domxref("Window.customElements")}}
  - : Gibt eine Referenz auf das `CustomElementRegistry`-Objekt zurück.
- [Lebenszyklus-Callbacks](/de/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks)

  - : Spezielle Callback-Funktionen, die innerhalb der Klassendefinition des benutzerdefinierten Elements definiert sind und dessen Verhalten beeinflussen:

    - `connectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element erstmals mit dem DOM des Dokuments verbunden wird.
    - `disconnectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element vom DOM des Dokuments getrennt wird.
    - `adoptedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element in ein neues Dokument verschoben wird.
    - `attributeChangedCallback()`
      - : Wird aufgerufen, wenn eines der Attribute des benutzerdefinierten Elements hinzugefügt, entfernt oder geändert wird.

- Erweiterungen zum Erstellen benutzerdefinierter integrierter Elemente

  - : Die folgenden Erweiterungen sind definiert:

    - Das globale HTML-Attribut [`is`](/de/docs/Web/HTML/Global_attributes/is)
      - : Ermöglicht es Ihnen zu spezifizieren, dass ein standardmäßiges HTML-Element wie ein registriertes benutzerdefiniertes integriertes Element verhalten soll.
    - Die "is"-Option der {{domxref("Document.createElement()")}}-Methode
      - : Erlaubt es Ihnen, eine Instanz eines standardmäßigen HTML-Elements zu erstellen, das sich wie ein gegebenes registriertes benutzerdefiniertes integriertes Element verhält.

- CSS-Pseudoklassen

  - : Pseudoklassen, die speziell auf benutzerdefinierte Elemente bezogen sind:

    - {{cssxref(":defined")}}
      - : Passt auf jedes Element, das definiert ist, einschließlich eingebauter Elemente und benutzerdefinierter Elemente, die mit `CustomElementRegistry.define()` definiert wurden.
    - {{cssxref(":host")}}
      - : Wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, in dem das CSS verwendet wird.
    - {{cssxref(":host", ":host()")}}
      - : Wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, in dem das CSS verwendet wird (damit Sie ein benutzerdefiniertes Element aus dessen Shadow DOM auswählen können) – aber nur, wenn der Selektor, der als Parameter der Funktion angegeben wurde, mit dem Shadow-Host übereinstimmt.
    - {{cssxref(":host-context", ":host-context()")}}
      - : Wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, in dem das CSS verwendet wird (damit Sie ein benutzerdefiniertes Element aus dessen Shadow DOM auswählen können) – aber nur, wenn der Selektor, der als Parameter der Funktion angegeben wurde, mit dem Vorfahren oder den Vorfahren des Shadow-Hosts übereinstimmt, an der Stelle, an der es in der DOM-Hierarchie sitzt.
    - {{CSSxRef(":state",":state()")}}
      - : Passt auf benutzerdefinierte Elemente, die sich in einem bestimmten benutzerdefinierten Zustand befinden.
        Genauer gesagt passt es auf anonyme benutzerdefinierte Elemente, bei denen der angegebene Zustand im {{domxref("CustomStateSet")}} des Elements vorhanden ist.

- CSS-Pseudoelemente

  - : Pseudoelemente, die sich speziell auf benutzerdefinierte Elemente beziehen:

    - {{cssxref("::part")}}
      - : Repräsentiert jedes Element innerhalb eines [Shadow Tree](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Global_attributes#part)-Attribut hat.

### Shadow DOM

- {{domxref("ShadowRoot")}}
  - : Repräsentiert den Wurzelknoten eines Shadow-DOM-Unterbaums.
- {{domxref("Element")}}-Erweiterungen

  - : Erweiterungen der `Element`-Schnittstelle im Zusammenhang mit Shadow DOM:

    - Die {{domxref("Element.attachShadow()")}}-Methode hängt einen Shadow DOM-Baum an das angegebene Element an.
    - Die {{domxref("Element.shadowRoot")}}-Eigenschaft gibt die an das angegebene Element angehängte Shadow Root zurück oder `null`, wenn keine Shadow Root angehängt ist.

- Relevante {{domxref("Node")}}-Ergänzungen

  - : Ergänzungen der `Node`-Schnittstelle, die für Shadow DOM relevant sind:

    - Die {{domxref("Node.getRootNode()")}}-Methode gibt das Wurzelobjekt des Kontextobjekts zurück, das optional die Shadow Root einschließt, wenn sie verfügbar ist.
    - Die {{domxref("Node.isConnected")}}-Eigenschaft gibt einen booleschen Wert zurück, der angibt, ob der Node direkt oder indirekt mit dem Kontextobjekt verbunden ist, z.B. dem {{domxref("Document")}}-Objekt im Fall des normalen DOM oder der {{domxref("ShadowRoot")}} im Fall eines Shadow DOM.

- {{domxref("Event")}}-Erweiterungen

  - : Erweiterungen der `Event`-Schnittstelle im Zusammenhang mit Shadow DOM:

    - {{domxref("Event.composed")}}
      - : Gibt `true` zurück, wenn das Ereignis über die Shadow-DOM-Grenze in das Standard-DOM propagiert werden wird, andernfalls `false`.
    - {{domxref("Event.composedPath")}}
      - : Gibt den Pfad des Ereignisses zurück (Objekte, auf denen Listener aufgerufen werden). Dies schließt keine Knoten in Shadow Trees ein, wenn die Shadow Root mit {{domxref("ShadowRoot.mode")}} geschlossen erstellt wurde.

### HTML-Templates

- {{htmlelement("template")}}
  - : Enthält ein HTML-Fragment, das nicht gerendert wird, wenn ein enthaltenes Dokument initial geladen wird, sondern zur Laufzeit mit JavaScript angezeigt werden kann, hauptsächlich als Grundlage für benutzerdefinierte Elementstrukturen verwendet. Die zugehörige DOM-Schnittstelle ist {{domxref("HTMLTemplateElement")}}.
- {{htmlelement("slot")}}
  - : Ein Platzhalter innerhalb einer Web-Komponente, den Sie mit Ihrem eigenen Markup füllen können, wodurch Sie separate DOM-Bäume erstellen und sie zusammen präsentieren können. Die zugehörige DOM-Schnittstelle ist {{domxref("HTMLSlotElement")}}.
- Das globale HTML-Attribut [`slot`](/de/docs/Web/HTML/Global_attributes/slot)
  - : Weist einem Element einen Slot in einem Shadow-DOM-Baum zu.
- {{domxref("Element.assignedSlot")}}
  - : Ein schreibgeschütztes Attribut, das eine Referenz auf den {{htmlelement("slot")}} zurückgibt, in dem dieses Element eingefügt ist.
- {{domxref("Text.assignedSlot")}}
  - : Ein schreibgeschütztes Attribut, das eine Referenz auf den {{htmlelement("slot")}} zurückgibt, in dem dieser Textknoten eingefügt ist.
- {{domxref("Element")}}-Erweiterungen

  - : Erweiterungen der `Element`-Schnittstelle im Zusammenhang mit Slots:

    - {{domxref("Element.slot")}}
      - : Gibt den Namen des Shadow-DOM-Slots zurück, der an das Element angehängt ist.

- CSS-Pseudoelemente

  - : Pseudoelemente, die sich speziell auf Slots beziehen:

    - {{cssxref("::slotted")}}
      - : Passt auf jeden Inhalt, der in einen Slot eingefügt wird.

- Das Ereignis {{domxref("HTMLSlotElement/slotchange_event", "slotchange")}}
  - : Wird auf einer Instanz eines {{domxref("HTMLSlotElement")}} ({{htmlelement("slot")}}-Element) ausgelöst, wenn sich die in diesem Slot enthaltenen Knoten ändern.

## Beispiele

Wir sammeln eine Reihe von Beispielen in unserem [web-components-examples](https://github.com/mdn/web-components-examples) GitHub-Repository. Im Laufe der Zeit werden weitere hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
