---
title: EditContext API
slug: Web/API/EditContext_API
l10n:
  sourceCommit: c65e3a342c26ebd9f2e198607a5b4840c1036a3a
---

{{DefaultAPISidebar("EditContext API")}}{{SeeCompatTable}}

Die **EditContext API** kann verwendet werden, um Rich-Text-Editoren im Web zu erstellen, die fortschrittliche Texteingabeerfahrungen unterstützen, wie zum Beispiel die Zusammensetzung von Zeichen mit dem {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME), Emoji-Auswahl oder andere plattformspezifische UI-Oberflächen, die mit der Bearbeitung zu tun haben.

Mit der EditContext API erhalten Sie die Flexibilität, Ihren eigenen bearbeitbaren Textbereich mit jeder gewünschten Technologie zu rendern.

## Konzept

Bei der Texteingabe in einen bearbeitbaren Bereich einer Anwendung sind mehrere Akteure beteiligt:

- **Nutzer**
  - : Der Nutzer gibt den Text über eine Eingabemethode ein: eine Tastatur, Maus, Sprache oder eine andere Eingabemethode.
- **Eingabemethoden-Software**
  - : Die Eingabemethoden-Software wandelt die Eingaben des Nutzers in Text um. Dies könnte beispielsweise ein {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME) sein, der Tastenanschläge einer Standardtastatur in japanische, chinesische oder koreanische Zeichen umwandelt.
- **Text-Eingabeservice des Betriebssystems**
  - : Der Text-Eingabeservice des Betriebssystems wirkt als Verbindung zwischen der Eingabemethoden-Software und der Anwendung.
- **Textbearbeitungskontext der Anwendung**
  - : Der Textbearbeitungskontext der Anwendung liefert den Zustand des zu bearbeitenden Textes. Der Zustand enthält Informationen wie den Text selbst, die aktuelle Auswahl, die Position des Textes in der Benutzeroberfläche der App.
- **Bearbeitbarer Bereich der Anwendung**
  - : Der bearbeitbare Bereich der Anwendung ist das UI-Element der Anwendung, das den Text anzeigt.

Während die ersten drei Akteure vom Betriebssystem bereitgestellt werden, ist die Anwendung dafür verantwortlich, den bearbeitbaren Bereich und den Textbearbeitungskontext bereitzustellen.

Im Web sind bearbeitbare Bereiche oft [`<textarea>`](/de/docs/Web/HTML/Element/textarea)-Elemente, [`<input>`](/de/docs/Web/HTML/Element/input)-Elemente oder Elemente mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut auf `true` gesetzt. Für diese Elemente stellt der Browser den Textbearbeitungskontext automatisch bereit, und Webautoren müssen keinen Code schreiben, um die Texteingabe zu unterstützen.

### Erstellen von benutzerdefinierten bearbeitbaren Bereichen

Webautoren können auch benutzerdefinierte bearbeitbare Bereiche mit der EditContext API erstellen. Ein Webautor könnte beispielsweise einen Rich-Text-Editor mit einem [`<canvas>`](/de/docs/Web/HTML/Element/canvas)-Element erstellen, um den Text zu rendern. In diesem Fall muss der Webautor Code schreiben, um die Texteingabe zu unterstützen.

### Verantwortung des Autors

Wenn Sie sich entscheiden, Ihren eigenen bearbeitbaren Bereich zu implementieren, egal ob er Text in ein `<canvas>` zeichnet oder in eine Reihe von DOM-Elementen rendert, sind Sie dafür verantwortlich, die Dinge bereitzustellen, die der Browser normalerweise für Sie bereitstellen würde, wenn Sie stattdessen ein `<textarea>` verwenden würden. Dies beinhaltet:

- Rendering des Textes.
- Rendering der Auswahl (wenn Sie Ihren bearbeitbaren Bereich mit DOM-Elementen statt mit einem `<canvas>` erstellen, rendert der Browser die Auswahl für Sie).
- Dem Text-Eingabeservice des Betriebssystems mitzuteilen, wenn sich die Auswahl ändert.
- Dem Text-Eingabeservice des Betriebssystems mitzuteilen, wo sich der Text in der Benutzeroberfläche befindet, damit die Eingabemethoden-Software das IME-Kompositionsfenster an der richtigen Position anzeigen kann.
- Bestimmte Textformate anzuwenden, wenn der Nutzer Text im IME-Kompositionsfenster eingibt.

Im Gegenzug macht die EditContext API das von Ihnen gewählte DOM-Element bearbeitbar und Teil der Fokus-Reihenfolge des Dokuments. Darüber hinaus liefert die EditContext API auch Informationen über den Zustand des bearbeiteten Textes, was es Ihnen ermöglicht, diesen auf eine individuelle Weise zu rendern. Die Ihnen bereitgestellten Informationen umfassen:

- Den aktuellen Textinhalt.
- Die aktuelle Auswahl.
- Ob eine IME-Komposition im Gange ist und ob Textformate angewendet werden müssen.

### Barrierefreiheit

Wenn Sie die EditContext API mit einem `<canvas>`-Element verwenden, stellen Sie sicher, dass der Text auch für unterstützende Technologien zugänglich ist. Bildschirmlesegeräte können den Text in einem `<canvas>`-Element nicht lesen. Zum Beispiel könnten Sie eine separate Ansicht des Textes in einem außerhalb des Bildschirms befindlichen DOM-Element pflegen, das Bildschirmlesegeräten präsentiert wird.

### Grundlegende Verwendung

Um die EditContext API zu verwenden, müssen Sie eine Instanz der [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle erstellen und diese dann dem DOM-Element zuordnen, das Sie bearbeitbar machen möchten, indem Sie die [`editContext`](/de/docs/Web/API/HTMLElement/editContext)-Eigenschaft verwenden. Das DOM-Element kann jedes Element sein, einschließlich eines `<div>` oder eines `<canvas>`-Elements.

```html
<canvas id="editor-canvas"></canvas>
```

```js-nolint
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;
```

Eine `EditContext`-Instanz kann jeweils nur an ein DOM-Element angehängt werden.

Das Anhängen einer `EditContext`-Instanz an ein DOM-Element macht es fokussierbar als Teil der Fokus-Reihenfolge des Dokuments. Der Nutzer kann Text in das Element eingeben, indem er die von ihm bevorzugte Eingabemethode verwendet, und Sie können das durch die `EditContext`-Instanz ausgelöste Ereignis verwenden, um den Text und die Auswahl zu rendern.

### Modell- und Ansichtsarchitektur

Bei der Verwendung der EditContext API ist es hilfreich, Ihr Editor-Erlebnis als Modell- und Ansichtsarchitektur aufzubauen.

Die `EditContext`-Instanz repräsentiert das Modell Ihres bearbeitbaren Bereichs. Sein interner Zustand wird aktualisiert, wenn Texteingaben empfangen werden und wenn sich die Auswahl ändert.

Sie können dann den Text und die Auswahl in der Ansicht rendern, indem Sie die von der `EditContext`-Instanz bereitgestellten Informationen verwenden, jedoch muss Ihre Ansicht nicht genau dem Modell entsprechen. Sie können den Text in beliebiger Weise rendern.

## Schnittstellen

- [`EditContext`](/de/docs/Web/API/EditContext) {{experimental_inline}}
  - : Die `EditContext`-Schnittstelle ist eine JavaScript-Reflexion des Textbearbeitungskontexts, der normalerweise vom Browser bereitgestellt wird, wenn standardmäßig bearbeitbare Bereiche wie `textarea` verwendet werden. `EditContext` bietet den Zustand des bearbeiteten Textes mit Informationen wie dem Text selbst, der aktuellen Auswahl oder der Position des Textes in der Benutzeroberfläche der App.
- [`TextFormat`](/de/docs/Web/API/TextFormat) {{experimental_inline}}
  - : Die `TextFormat`-Schnittstelle wird verwendet, um bestimmte Formate darzustellen, die auf Textbereiche angewendet werden sollen, wenn der Benutzer Text innerhalb des IME-Kompositionsfensters eingibt.
- [`TextUpdateEvent`](/de/docs/Web/API/TextUpdateEvent) {{experimental_inline}}
  - : Die `TextUpdateEvent`-Schnittstelle ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das ein Text- oder Auswahldupdate in einem bearbeitbaren Textbereich darstellt, der an eine [`EditContext`](/de/docs/Web/API/EditContext)-Instanz angehängt ist.
- [`TextFormatUpdateEvent`](/de/docs/Web/API/TextFormatUpdateEvent) {{experimental_inline}}
  - : Die `TextFormatUpdateEvent`-Schnittstelle ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Liste von Textformaten darstellt, die ein {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME)-Fenster auf den zu bearbeitenden Text in einem bearbeitbaren Bereich anwenden möchte, der an eine [`EditContext`](/de/docs/Web/API/EditContext)-Instanz angehängt ist.
- [`CharacterBoundsUpdateEvent`](/de/docs/Web/API/CharacterBoundsUpdateEvent) {{experimental_inline}}
  - : Die `CharacterBoundsUpdateEvent`-Schnittstelle ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Anforderung des Betriebssystems darstellt, die Grenzen bestimmter Zeichen innerhalb eines bearbeitbaren Bereichs zu kennen, der an eine [`EditContext`](/de/docs/Web/API/EditContext)-Instanz angehängt ist.

## Erweiterungen zu anderen Schnittstellen

- [`HTMLInputElement.editContext`](/de/docs/Web/API/HTMLInputElement/editContext) {{experimental_inline}}
  - : Die `editContext`-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle erhält und setzt das mit einem Element verbundene [`EditContext`](/de/docs/Web/API/EditContext)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der EditContext API](/de/docs/Web/API/EditContext_API/Guide)
