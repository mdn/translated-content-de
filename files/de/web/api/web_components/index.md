---
title: Web Components
slug: Web/API/Web_components
l10n:
  sourceCommit: f81527232ae480626f8cec10a7d2775a698be30a
---

{{DefaultAPISidebar("Web Components")}}

Web Components umfassen verschiedene Technologien, mit denen Sie wiederverwendbare benutzerdefinierte Elemente erstellen können. Deren Funktionalität ist vom übrigen Code gekapselt, und Sie können sie in Ihren Webanwendungen verwenden.

## Konzepte und Verwendung

Als Entwickler wissen wir, dass es sinnvoll ist, Code so oft wie möglich wiederzuverwenden. Bei benutzerdefinierten Markup-Strukturen war das traditionell nicht so einfach: Denken Sie an das komplexe HTML samt zugehörigen Styles und Skripten, das Sie möglicherweise schon schreiben mussten, um eigene UI-Steuerelemente darzustellen. Wenn Sie diese mehrfach verwenden, kann Ihre Seite schnell unübersichtlich werden.

Web Components sollen solche Probleme lösen. Sie bestehen aus drei zentralen Technologien, die sich kombinieren lassen, um vielseitige benutzerdefinierte Elemente mit gekapselter Funktionalität zu erstellen. Diese können mit geringerem Risiko von Namens- und Styling-Konflikten wiederverwendet werden:

- **Benutzerdefinierte Elemente (Custom Elements)**
  - : Eine Reihe von JavaScript-APIs, mit denen Sie benutzerdefinierte Elemente und deren Verhalten definieren können, um sie anschließend nach Bedarf in Ihrer Benutzeroberfläche zu verwenden.
- **Shadow DOM**
  - : Ein Mechanismus, mit dem Sie einem Element einen gekapselten „Shadow“-DOM-Baum zuordnen können – entweder imperativ über JavaScript-APIs oder deklarativ in HTML.
    Dadurch können Sie die Eigenschaften eines Elements kapseln, sodass seine Styles und IDs nicht mit anderen Teilen des Dokuments kollidieren.
- **HTML-Templates**
  - : Mit den Elementen {{HTMLElement("template")}} und {{HTMLElement("slot")}} können Sie Markup-Vorlagen schreiben, die auf der gerenderten Seite nicht angezeigt werden. Diese lassen sich dann mehrfach als Grundlage für die Struktur eines benutzerdefinierten Elements verwenden.

Die grundlegende Vorgehensweise bei der Implementierung einer Web Component sieht in der Regel ungefähr so aus:

1. Erstellen Sie mithilfe der [Klassensyntax](/de/docs/Web/JavaScript/Reference/Classes) eine Klasse, in der Sie die Funktionalität Ihrer Web Component festlegen.
2. Registrieren Sie Ihr neues benutzerdefiniertes Element mit der Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define). Übergeben Sie dabei den zu definierenden Elementnamen, die Klasse oder Funktion, in der seine Funktionalität festgelegt ist, und optional das Element, von dem es erbt. Sie können es über [`Window.customElements`](/de/docs/Web/API/Window/customElements) in der globalen Registry registrieren oder mit dem Konstruktor [`CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry) eine [Registry mit begrenztem Gültigkeitsbereich](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) erstellen, um Namenskonflikte zwischen Komponenten zu vermeiden.
3. Ordnen Sie dem benutzerdefinierten Element bei Bedarf mit der Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) ein Shadow DOM zu. Fügen Sie dem Shadow DOM mit den üblichen DOM-Methoden Kindelemente, Event-Listener und Ähnliches hinzu.
4. Definieren Sie bei Bedarf ein HTML-Template mit {{htmlelement("template")}} und {{htmlelement("slot")}}. Verwenden Sie wieder die üblichen DOM-Methoden, um das Template zu klonen und Ihrem Shadow DOM hinzuzufügen.
5. Verwenden Sie Ihr benutzerdefiniertes Element an beliebiger Stelle auf Ihrer Seite, genau wie jedes andere HTML-Element.

## Referenz

### Benutzerdefinierte Elemente

- [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)
  - : Enthält Funktionen für benutzerdefinierte Elemente, insbesondere die Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define). Mit ihr werden neue benutzerdefinierte Elemente registriert, damit sie anschließend im Dokument verwendet werden können. Mit dem Konstruktor [`CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry) können Sie Registries mit begrenztem Gültigkeitsbereich erstellen. Die Methode [`CustomElementRegistry.initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize) verknüpft eine solche Registry mit einem DOM-Teilbaum.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements)
  - : Gibt eine Referenz auf das globale `CustomElementRegistry`-Objekt zurück.
- [`Document.customElementRegistry`](/de/docs/Web/API/Document/customElementRegistry)
  - : Die dem Dokument zugeordnete [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry).
- [`Element.customElementRegistry`](/de/docs/Web/API/Element/customElementRegistry)
  - : Die dem Element zugeordnete [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry).
- [Lebenszyklus-Callbacks](/de/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks)
  - : Spezielle Callback-Funktionen, die innerhalb der Klassendefinition eines benutzerdefinierten Elements definiert werden und dessen Verhalten beeinflussen:
    - `connectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element erstmals mit dem DOM des Dokuments verbunden wird.
    - `disconnectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element vom DOM des Dokuments getrennt wird.
    - `adoptedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element in ein neues Dokument verschoben wird.
    - `attributeChangedCallback()`
      - : Wird aufgerufen, wenn eines der Attribute des benutzerdefinierten Elements hinzugefügt, entfernt oder geändert wird.

- Erweiterungen zum Erstellen angepasster integrierter Elemente
  - : Die folgenden Erweiterungen sind definiert:
    - Das globale HTML-Attribut [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)
      - : Damit können Sie festlegen, dass sich ein Standard-HTML-Element wie ein registriertes angepasstes integriertes Element verhalten soll.
    - Die Option „is“ der Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
      - : Damit können Sie eine Instanz eines Standard-HTML-Elements erstellen, die sich wie ein bestimmtes registriertes angepasstes integriertes Element verhält.

- CSS-Pseudoklassen
  - : Pseudoklassen, die sich speziell auf benutzerdefinierte Elemente beziehen:
    - {{cssxref(":defined")}}
      - : Trifft auf jedes definierte Element zu, einschließlich integrierter Elemente und mit `CustomElementRegistry.define()` definierter benutzerdefinierter Elemente.
    - {{cssxref(":host")}}
      - : Wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, in dem sich das verwendete CSS befindet.
    - {{cssxref(":host", ":host()")}}
      - : Wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, in dem sich das verwendete CSS befindet. So können Sie ein benutzerdefiniertes Element aus dessen Shadow DOM heraus auswählen – allerdings nur, wenn der als Funktionsparameter angegebene Selektor auf den Shadow-Host zutrifft.
    - {{cssxref(":host-context", ":host-context()")}}
      - : Wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, in dem sich das verwendete CSS befindet. So können Sie ein benutzerdefiniertes Element aus dessen Shadow DOM heraus auswählen – allerdings nur, wenn der als Funktionsparameter angegebene Selektor auf einen Vorfahren des Shadow-Hosts an dessen Position in der DOM-Hierarchie zutrifft.
    - {{CSSxRef(":state",":state()")}}
      - : Trifft auf benutzerdefinierte Elemente zu, die sich in einem angegebenen benutzerdefinierten Zustand befinden.
        Genauer gesagt trifft sie auf anonyme benutzerdefinierte Elemente zu, bei denen der angegebene Zustand im [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) des Elements vorhanden ist.

- CSS-Pseudoelemente
  - : Pseudoelemente, die sich speziell auf benutzerdefinierte Elemente beziehen:
    - {{cssxref("::part")}}
      - : Repräsentiert jedes Element innerhalb eines [Shadow-Baums](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attribut besitzt.

### Shadow DOM

- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)
  - : Repräsentiert den Wurzelknoten eines Shadow-DOM-Teilbaums.
- [`ShadowRoot.customElementRegistry`](/de/docs/Web/API/ShadowRoot/customElementRegistry)
  - : Die der Shadow-Root zugeordnete [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry). Sie kann über die Option `customElementRegistry` von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) oder später mit [`CustomElementRegistry.initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize) festgelegt werden.
- Erweiterungen von [`Element`](/de/docs/Web/API/Element)
  - : Erweiterungen des `Element`-Interfaces im Zusammenhang mit Shadow DOM:
    - Die Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) ordnet dem angegebenen Element einen Shadow-DOM-Baum zu.
    - Die Eigenschaft [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) gibt die dem angegebenen Element zugeordnete Shadow-Root zurück oder `null`, wenn keine Shadow-Root zugeordnet ist.

- Relevante Ergänzungen zu [`Node`](/de/docs/Web/API/Node)
  - : Ergänzungen des `Node`-Interfaces, die für Shadow DOM relevant sind:
    - Die Methode [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode) gibt die Wurzel des Kontextobjekts zurück und schließt dabei optional die Shadow-Root ein, falls eine vorhanden ist.
    - Die Eigenschaft [`Node.isConnected`](/de/docs/Web/API/Node/isConnected) gibt einen booleschen Wert zurück, der angibt, ob der Node direkt oder indirekt mit dem Kontextobjekt verbunden ist – beispielsweise mit dem [`Document`](/de/docs/Web/API/Document)-Objekt im normalen DOM oder mit der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) in einem Shadow DOM.

- Erweiterungen von [`Event`](/de/docs/Web/API/Event)
  - : Erweiterungen des `Event`-Interfaces im Zusammenhang mit Shadow DOM:
    - [`Event.composed`](/de/docs/Web/API/Event/composed)
      - : Gibt `true` zurück, wenn sich das Event über die Grenze des Shadow DOM hinweg in das normale DOM ausbreitet, andernfalls `false`.
    - [`Event.composedPath`](/de/docs/Web/API/Event/composedPath)
      - : Gibt den Pfad des Events zurück, also die Objekte, auf denen Listener aufgerufen werden. Knoten in Shadow-Bäumen sind nicht enthalten, wenn die Shadow-Root mit dem Modus [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) „closed“ erstellt wurde.

### HTML-Templates

- {{htmlelement("template")}}
  - : Enthält ein HTML-Fragment, das beim erstmaligen Laden des umgebenden Dokuments nicht gerendert wird, aber zur Laufzeit mit JavaScript angezeigt werden kann. Es wird hauptsächlich als Grundlage für die Struktur benutzerdefinierter Elemente verwendet. Das zugehörige DOM-Interface ist [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
- {{htmlelement("slot")}}
  - : Ein Platzhalter innerhalb einer Web Component, den Sie mit eigenem Markup füllen können. Dadurch lassen sich getrennte DOM-Bäume erstellen und gemeinsam darstellen. Das zugehörige DOM-Interface ist [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement).
- Das globale HTML-Attribut [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)
  - : Weist einem Element einen Slot in einem Shadow-DOM-Baum zu.
- [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot)
  - : Ein schreibgeschütztes Attribut, das eine Referenz auf das {{htmlelement("slot")}} zurückgibt, in das dieses Element eingefügt ist.
- [`Text.assignedSlot`](/de/docs/Web/API/Text/assignedSlot)
  - : Ein schreibgeschütztes Attribut, das eine Referenz auf das {{htmlelement("slot")}} zurückgibt, in das dieser Textknoten eingefügt ist.
- Erweiterungen von [`Element`](/de/docs/Web/API/Element)
  - : Erweiterungen des `Element`-Interfaces im Zusammenhang mit Slots:
    - [`Element.slot`](/de/docs/Web/API/Element/slot)
      - : Gibt den Namen des Shadow-DOM-Slots zurück, der dem Element zugewiesen ist.

- CSS-Pseudoelemente
  - : Pseudoelemente, die sich speziell auf Slots beziehen:
    - {{cssxref("::slotted")}}
      - : Trifft auf Inhalte zu, die in einen Slot eingefügt sind.

- Das Event [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)
  - : Wird auf einer [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)-Instanz (einem {{htmlelement("slot")}}-Element) ausgelöst, wenn sich die in diesem Slot enthaltenen Knoten ändern.

## Leitfäden

- [Benutzerdefinierte Elemente verwenden](/de/docs/Web/API/Web_components/Using_custom_elements)
  - : Ein Leitfaden, der zeigt, wie Sie mit den Funktionen benutzerdefinierter Elemente einfache Web Components erstellen. Er behandelt außerdem Lebenszyklus-Callbacks und einige weitere fortgeschrittene Funktionen.
- [Shadow DOM verwenden](/de/docs/Web/API/Web_components/Using_shadow_DOM)
  - : Ein Leitfaden zu den Grundlagen von Shadow DOM. Er zeigt unter anderem, wie Sie einem Element ein Shadow DOM zuordnen, dem Shadow-DOM-Baum Inhalte hinzufügen und ihn gestalten.
- [Templates und Slots verwenden](/de/docs/Web/API/Web_components/Using_templates_and_slots)
  - : Ein Leitfaden, der zeigt, wie Sie mit den Elementen {{htmlelement("template")}} und {{htmlelement("slot")}} eine wiederverwendbare HTML-Struktur definieren und diese anschließend in Ihren Web Components verwenden.

## Beispiele

In unserem GitHub-Repository [web-components-examples](https://github.com/mdn/web-components-examples) sammeln wir Beispiele. Im Laufe der Zeit werden weitere hinzukommen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
