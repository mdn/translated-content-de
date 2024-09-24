---
title: Web Components
slug: Web/API/Web_components
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{DefaultAPISidebar("Web Components")}}

Web Components sind eine Suite aus verschiedenen Technologien, die es Ihnen ermöglichen, wiederverwendbare benutzerdefinierte Elemente zu erstellen — mit Funktionen, die vom Rest Ihres Codes kapselt sind — und diese in Ihren Web-Apps zu nutzen.

## Konzepte und Verwendung

Als Entwickler wissen wir alle, dass es eine gute Idee ist, Code so oft wie möglich wiederzuverwenden. Dies war traditionell nicht so einfach für benutzerdefinierte Markup-Strukturen — denken Sie an die komplexen HTML-Strukturen (und die dazugehörigen Styles und Skripte), die Sie gelegentlich schreiben mussten, um benutzerdefinierte UI-Steuerelemente zu rendern, und wie Sie beim mehrfachen Verwenden die Seite in ein Chaos verwandeln können, wenn Sie nicht vorsichtig sind.

Web Components zielt darauf ab, solche Probleme zu lösen — es besteht aus drei Haupttechnologien, die zusammen verwendet werden können, um vielseitige benutzerdefinierte Elemente mit gekapselter Funktionalität zu erstellen, die Sie überall verwenden können, ohne Angst vor Code-Konflikten zu haben.

- **Benutzerdefinierte Elemente**
  - : Ein Satz von JavaScript-APIs, die es Ihnen ermöglichen, benutzerdefinierte Elemente und deren Verhalten zu definieren, die dann nach Bedarf in Ihrer Benutzeroberfläche verwendet werden können.
- **Shadow DOM**
  - : Ein Satz von JavaScript-APIs zum Anhängen eines gekapselten "Schatten"-DOM-Baums an ein Element — der separat vom Hauptdokument-DOM gerendert wird — und zur Kontrolle der zugehörigen Funktionalität. Auf diese Weise können Sie die Funktionen eines Elements privat halten, sodass sie gescriptet und gestylt werden können, ohne dass Kollisionen mit anderen Teilen des Dokuments befürchtet werden müssen.
- **HTML-Vorlagen**
  - : Die {{HTMLElement("template")}} und {{HTMLElement("slot")}} Elemente ermöglichen es Ihnen, Markup-Vorlagen zu schreiben, die nicht auf der gerenderten Seite angezeigt werden. Diese können dann mehrmals als Grundlage der Struktur eines benutzerdefinierten Elements wiederverwendet werden.

Der grundlegende Ansatz zur Implementierung einer Webkomponente sieht im Allgemeinen so aus:

1. Erstellen Sie eine Klasse, in der Sie die Funktionalität Ihrer Webkomponente mit der [class](/de/docs/Web/JavaScript/Reference/Classes) Syntax spezifizieren.
2. Registrieren Sie Ihr neues benutzerdefiniertes Element mit der [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define) Methode, indem Sie den festzulegenden Elementnamen, die Klasse oder Funktion, in der dessen Funktionalität festgelegt ist, und optional das Element, von dem es erbt, übergeben.
3. Wenn erforderlich, fügen Sie dem benutzerdefinierten Element ein Shadow DOM mittels der [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) Methode hinzu. Fügen Sie dem Shadow DOM Kindelemente, Event-Listener usw. mit den üblichen DOM-Methoden hinzu.
4. Wenn erforderlich, definieren Sie eine HTML-Vorlage mit {{htmlelement("template")}} und {{htmlelement("slot")}}. Verwenden Sie erneut die üblichen DOM-Methoden, um die Vorlage zu klonen und an Ihr Shadow DOM anzuhängen.
5. Verwenden Sie Ihr benutzerdefiniertes Element überall auf Ihrer Seite, so wie Sie jedes reguläre HTML-Element verwenden würden.

## Leitfäden

- [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
  - : Ein Leitfaden, der zeigt, wie Sie die Funktionen benutzerdefinierter Elemente nutzen, um einfache Webkomponenten zu erstellen, sowie einen Blick auf Lebenszyklus-Callbacks und einige andere, fortgeschrittenere Funktionen wirft.
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
  - : Ein Leitfaden, der die Grundlagen von Shadow DOM behandelt und zeigt, wie man ein Shadow DOM an ein Element anhängt, dem Shadow DOM-Baum Elemente hinzufügt, ihn stylt und mehr.
- [Verwendung von Vorlagen und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
  - : Ein Leitfaden, der zeigt, wie man eine wiederverwendbare HTML-Struktur mithilfe der {{htmlelement("template")}} und {{htmlelement("slot")}} Elemente definiert und diese Struktur dann in Ihren Webkomponenten verwendet.

## Referenz

### Benutzerdefinierte Elemente

- [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)
  - : Beinhaltet Funktionen im Zusammenhang mit benutzerdefinierten Elementen, insbesondere die [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define) Methode, die verwendet wird, um neue benutzerdefinierte Elemente zu registrieren, damit sie dann in Ihrem Dokument verwendet werden können.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements)
  - : Gibt eine Referenz auf das `CustomElementRegistry`-Objekt zurück.
- [Lebenszyklus-Callbacks](/de/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks)

  - : Spezielle Callback-Funktionen, die innerhalb der Klassendefinition eines benutzerdefinierten Elements definiert sind und sein Verhalten beeinflussen:

    - `connectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element erstmals mit dem DOM des Dokuments verbunden wird.
    - `disconnectedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element vom DOM des Dokuments getrennt wird.
    - `adoptedCallback()`
      - : Wird aufgerufen, wenn das benutzerdefinierte Element in ein neues Dokument verschoben wird.
    - `attributeChangedCallback()`
      - : Wird aufgerufen, wenn eines der Attribute des benutzerdefinierten Elements hinzugefügt, entfernt oder geändert wird.

- Erweiterungen zur Erstellung benutzerdefinierter eingebauter Elemente

  - : Die folgenden Erweiterungen sind definiert:

    - Das [`is`](/de/docs/Web/HTML/Global_attributes/is) globale HTML-Attribut
      - : Erlaubt Ihnen, festzulegen, dass ein standardmäßiges HTML-Element wie ein registriertes benutzerdefiniertes eingebautes Element funktionieren soll.
    - Die "is"-Option der [`Document.createElement()`](/de/docs/Web/API/Document/createElement) Methode
      - : Erlaubt Ihnen, eine Instanz eines standardmäßigen HTML-Elements zu erstellen, das wie ein gegebenes registriertes benutzerdefiniertes eingebautes Element funktioniert.

- CSS-Pseudoklassen

  - : Pseudoklassen, die speziell für benutzerdefinierte Elemente relevant sind:

    - {{cssxref(":defined")}}
      - : Passt auf jedes Element, das definiert ist, einschließlich eingebauter Elemente und benutzerdefinierter Elemente, die mit `CustomElementRegistry.define()` definiert wurden.
    - {{cssxref(":host")}}
      - : Wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, der das CSS enthält, in dem es verwendet wird.
    - {{cssxref(":host", ":host()")}}
      - : Wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, der das CSS enthält, in dem es verwendet wird (sodass Sie ein benutzerdefiniertes Element von innerhalb seines Shadow DOM auswählen können) — aber nur, wenn der als Parameter der Funktion gegebene Selektor auf den Shadow-Host passt.
    - {{cssxref(":host-context", ":host-context()")}}
      - : Wählt den Shadow-Host des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) aus, der das CSS enthält, in dem es verwendet wird (sodass Sie ein benutzerdefiniertes Element von innerhalb seines Shadow DOM auswählen können) — aber nur, wenn der als Parameter der Funktion gegebene Selektor auf den Vorfahren des Shadow-Hosts an der Stelle passt, an der es sich in der DOM-Hierarchie befindet.
    - {{CSSxRef(":state",":state()")}}
      - : Passt auf benutzerdefinierte Elemente, die sich in einem bestimmten benutzerdefinierten Zustand befinden.
        Genauer gesagt passt es auf anonyme benutzerdefinierte Elemente, bei denen der angegebene Zustand im `CustomStateSet` des Elements vorhanden ist.

- CSS-Pseudoelemente

  - : Pseudoelemente, die speziell für benutzerdefinierte Elemente relevant sind:

    - {{cssxref("::part")}}
      - : Repräsentiert jedes Element innerhalb eines [Shadow-Baums](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Global_attributes/part) Attribut aufweist.

### Shadow DOM

- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)
  - : Repräsentiert die Wurzel eines Shadow DOM-Teilbaums.
- [`Element`](/de/docs/Web/API/Element) Erweiterungen

  - : Erweiterungen der `Element`-Schnittstelle in Bezug auf Shadow DOM:

    - Die [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) Methode hängt einen Shadow-DOM-Baum an das spezifizierte Element an.
    - Die [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) Eigenschaft gibt die Shadow-Root zurück, die an das spezifizierte Element angehängt ist, oder `null`, wenn keine Shadow-Root angehängt ist.

- Relevante [`Node`](/de/docs/Web/API/Node) Ergänzungen

  - : Ergänzungen der `Node`-Schnittstelle in Bezug auf Shadow DOM:

    - Die [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode) Methode gibt die Wurzel des Kontextobjekts zurück, die optional die Shadow-Root einschließt, wenn verfügbar.
    - Die [`Node.isConnected`](/de/docs/Web/API/Node/isConnected) Eigenschaft gibt einen Boolean zurück, der angibt, ob der Knoten (direkt oder indirekt) mit dem Kontextobjekt verbunden ist, z.B. das [`Document`](/de/docs/Web/API/Document) Objekt im Fall des normalen DOM oder die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) im Fall eines Shadow DOM.

- [`Event`](/de/docs/Web/API/Event) Erweiterungen

  - : Erweiterungen zur `Event`-Schnittstelle in Bezug auf Shadow DOM:

    - [`Event.composed`](/de/docs/Web/API/Event/composed)
      - : Gibt `true` zurück, wenn das Event über die Grenze des Shadow DOM in das Standard-DOM propagiert, ansonsten `false`.
    - [`Event.composedPath`](/de/docs/Web/API/Event/composedPath)
      - : Gibt den Pfad des Ereignisses zurück (Objekte, auf denen Listener aufgerufen werden). Dies schließt keine Knoten in Shadow-Bäumen ein, wenn die Shadow-Root mit [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) geschlossen erstellt wurde.

### HTML-Vorlagen

- {{htmlelement("template")}}
  - : Enthält ein HTML-Fragment, das nicht gerendert wird, wenn ein enthaltenes Dokument initial geladen wird, aber zur Laufzeit mithilfe von JavaScript angezeigt werden kann, hauptsächlich als Basis für Strukturen benutzerdefinierter Elemente verwendet. Die zugehörige DOM-Schnittstelle ist [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement).
- {{htmlelement("slot")}}
  - : Ein Platzhalter innerhalb einer Webkomponente, den Sie mit Ihrer eigenen Markup füllen können und der es Ihnen ermöglicht, separate DOM-Bäume zu erstellen und sie zusammen darzustellen. Die zugehörige DOM-Schnittstelle ist [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement).
- Das [`slot`](/de/docs/Web/HTML/Global_attributes/slot) globale HTML-Attribut
  - : Weist einem Element einen Slot in einem Shadow-DOM-Baum zu.
- [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot)
  - : Ein schreibgeschütztes Attribut, das eine Referenz auf den {{htmlelement("slot")}} gibt, in dem dieses Element eingefügt ist.
- [`Text.assignedSlot`](/de/docs/Web/API/Text/assignedSlot)
  - : Ein schreibgeschütztes Attribut, das eine Referenz auf den {{htmlelement("slot")}} gibt, in dem dieser Textknoten eingefügt ist.
- [`Element`](/de/docs/Web/API/Element) Erweiterungen

  - : Erweiterungen der `Element`-Schnittstelle in Bezug auf Slots:

    - [`Element.slot`](/de/docs/Web/API/Element/slot)
      - : Gibt den Namen des Shadow-DOM-Slots zurück, der an das Element angehängt ist.

- CSS-Pseudoelemente

  - : Pseudoelemente, die speziell auf Slots bezogen sind:

    - {{cssxref("::slotted")}}
      - : Passt auf jeden Inhalt, der in einen Slot eingefügt wird.

- Das [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event) Ereignis
  - : Wird bei einer [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) Instanz ({{htmlelement("slot")}} Element) ausgelöst, wenn die in diesem Slot enthaltenen Knoten sich ändern.

## Beispiele

Wir entwickeln eine Reihe von Beispielen in unserem [web-components-examples](https://github.com/mdn/web-components-examples) GitHub-Repository weiter. Weitere Beispiele werden mit der Zeit hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
