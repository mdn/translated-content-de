---
title: EditContext API
slug: Web/API/EditContext_API
l10n:
  sourceCommit: 3e8a8e4b59d476b9a009c6a9c7f9aff0369af4b8
---

{{DefaultAPISidebar("EditContext API")}}{{SeeCompatTable}}

Die **EditContext API** kann verwendet werden, um Rich-Text-Editoren im Web zu erstellen, die erweiterte Texterfassungserfahrungen unterstützen, wie z.B. {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME)-Komposition, Emoji-Auswahl oder andere plattformabhängige, bearbeitungsbezogene UI-Elemente.

Mit der EditContext API haben Sie die Flexibilität, Ihren eigenen bearbeitbaren Textbereich mit jeder gewünschten Technologie zu rendern.

## Konzept

Mehrere Akteure sind beteiligt, wenn Text in einen bearbeitbaren Bereich einer Anwendung eingegeben wird:

- **Benutzer**
  - : Der Benutzer gibt den Text über eine Eingabemethode ein: eine Tastatur, Maus, Sprache oder andere Eingabemethode.
- **Eingabemethoden-Software**
  - : Die Eingabemethoden-Software wandelt die Eingaben des Benutzers in Text um. Zum Beispiel könnte es sich um einen {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME) handeln, der Tastenanschläge von einer Standardtastatur in japanische, chinesische oder koreanische Zeichen umwandelt.
- **Text-Eingabeservice des Betriebssystems**
  - : Der Text-Eingabeservice des Betriebssystems fungiert als Verbindung zwischen der Eingabemethoden-Software und der Anwendung.
- **Textbearbeitungskontext der Anwendung**
  - : Der Textbearbeitungskontext der Anwendung stellt einen Zustand des zu bearbeitenden Textes bereit. Der Zustand enthält Informationen wie den Text selbst, die aktuelle Auswahl, die Position des Textes in der Benutzeroberfläche der Anwendung.
- **Bearbeitbarer Bereich der Anwendung**
  - : Der bearbeitbare Bereich der Anwendung ist das UI-Element der Anwendung, das den Text anzeigt.

Während die ersten drei Akteure vom Betriebssystem bereitgestellt werden, ist die Anwendung dafür verantwortlich, den bearbeitbaren Bereich und den Textbearbeitungskontext bereitzustellen.

Im Web sind bearbeitbare Bereiche oft [`<textarea>`](/de/docs/Web/HTML/Element/textarea)-Elemente, [`<input>`](/de/docs/Web/HTML/Element/input)-Elemente oder Elemente mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable), das auf `true` gesetzt ist. Für diese Elemente stellt der Browser automatisch den Textbearbeitungskontext bereit, und Webautoren müssen keinen Code schreiben, um Texteingaben zu unterstützen.

### Erstellen benutzerdefinierter bearbeitbarer Bereiche

Webautoren können auch benutzerdefinierte bearbeitbare Bereiche mit der EditContext API erstellen. Beispielsweise könnte ein Webautor einen Rich-Text-Editor erstellen, der ein [`<canvas>`](/de/docs/Web/HTML/Element/canvas)-Element verwendet, um den Text zu rendern. In diesem Fall muss der Webautor Code schreiben, um Texteingaben zu unterstützen.

### Verantwortung des Autors

Wenn Sie sich entscheiden, Ihren eigenen bearbeitbaren Bereich zu implementieren, unabhängig davon, ob er Text in ein `<canvas>` zeichnet oder ihn in eine Reihe von DOM-Elementen rendert, sind Sie dafür verantwortlich, die Dinge bereitzustellen, die der Browser normalerweise für Sie bereitstellt, wenn Sie stattdessen ein `<textarea>` verwenden würden. Dazu gehören:

- Rendern des Textes.
- Rendern der Auswahl (wenn Sie Ihren bearbeitbaren Bereich mit DOM-Elementen statt mit einem `<canvas>` erstellen, rendert der Browser die Auswahl für Sie).
- Den Text-Eingabeservice des Betriebssystems über Änderungen der Auswahl informieren.
- Den Text-Eingabeservice des Betriebssystems über die Position des Textes in der Benutzeroberfläche informieren, damit die Eingabemethoden-Software das IME-Zusammenstellungsfenster an der richtigen Stelle anzeigen kann.
- Bestimmte Textformate anwenden, wenn der Benutzer Text im IME-Zusammenstellungsfenster komponiert.

Im Gegenzug macht die EditContext API das von Ihnen gewählte DOM-Element bearbeitbar und Teil der Fokusreihenfolge des Dokuments. Darüber hinaus liefert die EditContext API auch Informationen über den Zustand des bearbeiteten Textes, die es Ihnen ermöglichen, ihn auf eine benutzerdefinierte Weise zu rendern. Die Ihnen bereitgestellten Informationen umfassen:

- Den aktuellen Textinhalt.
- Die aktuelle Auswahl.
- Ob das IME-Zusammenstellen in Bearbeitung ist und ob Textformate angewendet werden müssen.

### Barrierefreiheit

Wenn Sie die EditContext API mit einem `<canvas>`-Element verwenden, stellen Sie sicher, dass der Text auch für unterstützende Technologien zugänglich gemacht wird. Screenreader können den Text in einem `<canvas>`-Element nicht lesen. Zum Beispiel könnten Sie eine separate Ansicht des Textes in einem unsichtbaren DOM-Element pflegen, das Screenreadern präsentiert wird.

### Grundlegende Nutzung

Um die EditContext API zu nutzen, müssen Sie eine Instanz der [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle erstellen und diese dann an das DOM-Element anhängen, das Sie bearbeitbar machen möchten, indem Sie die [`editContext`](/de/docs/Web/API/HTMLElement/editContext)-Eigenschaft verwenden. Das DOM-Element kann jedes Element sein, einschließlich eines `<div>` oder eines `<canvas>`-Elements.

```html
<canvas id="editor-canvas"></canvas>
```

```js-nolint
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;
```

Eine `EditContext`-Instanz kann gleichzeitig nur an ein DOM-Element angehängt werden.

Das Anhängen einer `EditContext`-Instanz an ein DOM-Element macht das Element fokussierbar und Teil der Fokusreihenfolge des Dokuments. Der Benutzer kann Text in das Element eingeben, indem er die Eingabemethode seiner Wahl verwendet, und Sie können Ereignisse nutzen, die von der `EditContext`-Instanz ausgelöst werden, um den Text und die Auswahl zu rendern.

### Modell- und Ansichtsarchitektur

Beim Einsatz der EditContext API ist es hilfreich, Ihre Bearbeitungserfahrung als Modell- und Ansichtsarchitektur aufzubauen.

Die `EditContext`-Instanz stellt das Modell Ihres bearbeitbaren Bereichs dar. Ihr interner Zustand wird aktualisiert, wenn Texteingaben erfolgen und sich die Auswahl ändert.

Sie können dann den Text und die Auswahl in der Ansicht rendern, indem Sie die von der `EditContext`-Instanz bereitgestellten Informationen nutzen, wobei Ihre Ansicht nicht exakt mit dem Modell übereinstimmen muss. Sie können den Text auf jede gewünschte Weise rendern.

## Schnittstellen

- [`EditContext`](/de/docs/Web/API/EditContext) {{experimental_inline}}
  - : Die `EditContext`-Schnittstelle ist eine JavaScript-Reflexion des Textbearbeitungskontextes, der normalerweise transparent vom Browser bereitgestellt wird, wenn standardisierte bearbeitbare Bereiche wie `textarea` verwendet werden. `EditContext` bietet den Zustand des bearbeiteten Textes, einschließlich Informationen wie den Text selbst, die aktuelle Auswahl oder die Position des Textes in der Benutzeroberfläche der App.
- [`TextFormat`](/de/docs/Web/API/TextFormat) {{experimental_inline}}
  - : Die `TextFormat`-Schnittstelle wird verwendet, um bestimmte Formate darzustellen, die auf Textbereiche angewendet werden sollten, wenn der Benutzer Text im IME-Zusammenstellungsfenster komponiert.
- [`TextUpdateEvent`](/de/docs/Web/API/TextUpdateEvent) {{experimental_inline}}
  - : Die `TextUpdateEvent`-Schnittstelle ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Text- oder Auswahlinktualisierung in einem bearbeitbaren Textbereich darstellt, der an eine [`EditContext`](/de/docs/Web/API/EditContext)-Instanz angehängt ist.
- [`TextFormatUpdateEvent`](/de/docs/Web/API/TextFormatUpdateEvent) {{experimental_inline}}
  - : Die `TextFormatUpdateEvent`-Schnittstelle ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Liste von Textformaten darstellt, die ein {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME)-Fenster auf den Text anwenden möchte, der in einem bearbeitbaren Bereich komponiert wird, der an eine [`EditContext`](/de/docs/Web/API/EditContext)-Instanz angehängt ist.
- [`CharacterBoundsUpdateEvent`](/de/docs/Web/API/CharacterBoundsUpdateEvent) {{experimental_inline}}
  - : Die `CharacterBoundsUpdateEvent`-Schnittstelle ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Anfrage des Betriebssystems darstellt, um die Grenzen bestimmter Zeichen innerhalb eines bearbeitbaren Bereichs zu kennen, der an eine [`EditContext`](/de/docs/Web/API/EditContext)-Instanz angehängt ist.

## Erweiterungen zu anderen Schnittstellen

- [`HTMLElement.editContext`](/de/docs/Web/API/HTMLElement/editContext) {{experimental_inline}}
  - : Die `editContext`-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle holt und setzt das mit einem Element assoziierte [`EditContext`](/de/docs/Web/API/EditContext)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der EditContext API](/de/docs/Web/API/EditContext_API/Guide)
