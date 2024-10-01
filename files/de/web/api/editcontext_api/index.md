---
title: EditContext API
slug: Web/API/EditContext_API
l10n:
  sourceCommit: cf331ccff0dd88648dc9fe22a14f9aaa595ec4bf
---

{{DefaultAPISidebar("EditContext API")}}{{SeeCompatTable}}

Die **EditContext API** kann verwendet werden, um Rich-Text-Editoren im Web zu erstellen, die erweiterte Texteingabeerlebnisse unterstützen, wie die Komposition mit einem {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME), Emoji-Auswahl oder andere plattformabhängige, bearbeitungsbezogene Benutzeroberflächen.

Mit der EditContext API erhalten Sie die Flexibilität, Ihren eigenen editierbaren Textbereich mit beliebigen Technologien zu rendern.

## Konzept

Beim Eingeben von Text in einen bearbeitbaren Bereich einer Anwendung sind mehrere Akteure beteiligt:

- **Benutzer**
  - : Der Benutzer gibt den Text mittels einer Eingabemethode ein: Tastatur, Maus, Stimme oder andere Eingabemethoden.
- **Eingabemethodensoftware**
  - : Die Eingabemethodensoftware wandelt die Eingaben des Benutzers in Text um. Dies könnte zum Beispiel ein {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME) sein, der Tastenanschläge einer Standardtastatur in japanische, chinesische oder koreanische Zeichen umwandelt.
- **Text-Eingabedienst des Betriebssystems**
  - : Der Text-Eingabedienst des Betriebssystems fungiert als Verbindung zwischen der Eingabemethodensoftware und der Anwendung.
- **Textbearbeitungskontext der Anwendung**
  - : Der Textbearbeitungskontext der Anwendung stellt einen Zustand des bearbeiteten Textes bereit. Dieser Zustand enthält Informationen wie den Text selbst, die aktuelle Auswahl und den Ort des Textes in der Benutzeroberfläche der App.
- **Bearbeitbarer Bereich der Anwendung**
  - : Der bearbeitbare Bereich der Anwendung ist das UI-Element der Anwendung, das den Text anzeigt.

Während die ersten drei Akteure vom Betriebssystem bereitgestellt werden, ist die Anwendung dafür verantwortlich, den bearbeitbaren Bereich und den Textbearbeitungskontext bereitzustellen.

Im Web sind bearbeitbare Bereiche oft [`<textarea>`](/de/docs/Web/HTML/Element/textarea) Elemente, [`<input>`](/de/docs/Web/HTML/Element/input) Elemente oder Elemente mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut auf `true` gesetzt. Für diese Elemente stellt der Browser automatisch den Textbearbeitungskontext bereit, und Web-Autoren müssen keinen Code schreiben, um die Texteingabe zu unterstützen.

### Erstellen benutzerdefinierter bearbeitbarer Bereiche

Web-Autoren können auch benutzerdefinierte bearbeitbare Bereiche mit der EditContext API erstellen. Beispielsweise könnte ein Web-Autor einen Rich-Text-Editor erstellen, indem er ein [`<canvas>`](/de/docs/Web/HTML/Element/canvas) Element zum Rendern des Textes verwendet. In diesem Fall muss der Web-Autor Code schreiben, um die Texteingabe zu unterstützen.

### Verantwortlichkeiten des Autors

Wenn Sie Ihren eigenen bearbeitbaren Bereich implementieren, unabhängig davon, ob er Text in ein `<canvas>` zeichnet oder in eine Reihe von DOM-Elementen rendert, sind Sie dafür verantwortlich, die Dinge bereitzustellen, die der Browser normalerweise für Sie bereitstellt, wenn Sie stattdessen ein `<textarea>` verwenden würden. Dazu gehört:

- Das Rendern des Textes.
- Das Rendern der Auswahl (wenn Sie Ihren bearbeitbaren Bereich mit DOM-Elementen anstelle eines `<canvas>` erstellen, rendert der Browser die Auswahl für Sie).
- Dem Text-Eingabedienst des Betriebssystems mitzuteilen, wann sich die Auswahl ändert.
- Dem Text-Eingabedienst des Betriebssystems mitzuteilen, wo sich der Text in der Benutzeroberfläche befindet, damit die Eingabemethodensoftware das IME-Kompositionsfenster an der richtigen Stelle anzeigen kann.
- Bestimmte Textformate anzuwenden, wenn der Benutzer Text innerhalb des IME-Kompositionsfensters eingibt.

Im Gegenzug macht die EditContext API das DOM-Element, das Sie wählen, editierbar und Teil der Fokus-Reihenfolge des Dokuments. Zusätzlich stellt die EditContext API auch Informationen über den Zustand des bearbeiteten Textes bereit, die es Ihnen ermöglichen, diesen auf eine benutzerdefinierte Weise zu rendern. Die Ihnen zur Verfügung gestellten Informationen umfassen:

- Den aktuellen Textinhalt.
- Die aktuelle Auswahl.
- Ob eine IME-Komposition im Gang ist und ob Textformate angewendet werden müssen.

### Barrierefreiheit

Wenn Sie die EditContext API mit einem `<canvas>`-Element verwenden, stellen Sie sicher, dass der Text auch assistierenden Technologien zugänglich gemacht wird. Bildschirmleser können den Text in einem `<canvas>`-Element nicht lesen. Zum Beispiel könnten Sie eine separate Ansicht des Textes in einem unsichtbaren DOM-Element pflegen, das den Bildschirmlesern präsentiert wird.

### Grundlegende Verwendung

Um die EditContext API zu verwenden, müssen Sie eine Instanz der [`EditContext`](/de/docs/Web/API/EditContext) Schnittstelle erstellen und sie dann an das DOM-Element anhängen, das Sie mit der [`editContext`](/de/docs/Web/API/HTMLElement/editContext) Eigenschaft editierbar machen möchten. Das DOM-Element kann jedes Element sein, einschließlich eines `<div>` oder eines `<canvas>`-Elements.

```html
<canvas id="editor-canvas"></canvas>
```

```js-nolint
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;
```

Eine `EditContext` Instanz kann nur an ein DOM-Element gleichzeitig angehängt werden.

Das Anhängen einer `EditContext` Instanz an ein DOM-Element macht das Element fokussierbar, als Teil der Fokus-Reihenfolge des Dokuments. Der Benutzer kann Text in das Element eingeben, indem er die Eingabemethode seiner Wahl verwendet, und Sie können Ereignisse verwenden, die von der `EditContext` Instanz ausgelöst werden, um den Text und die Auswahl zu rendern.

### Modell- und View-Architektur

Bei der Verwendung der EditContext API ist es hilfreich, Ihr Bearbeitungserlebnis als Modell- und View-Architektur zu gestalten.

Die `EditContext` Instanz repräsentiert das Modell Ihres bearbeitbaren Bereichs. Ihr interner Zustand wird aktualisiert, wenn eine Texteingabe empfangen wird und wenn sich die Auswahl ändert.

Anschließend können Sie den Text und die Auswahl in der Ansicht rendern, wobei Sie die von der `EditContext` Instanz bereitgestellten Informationen verwenden, auch wenn Ihre Ansicht nicht genau mit dem Modell übereinstimmen muss. Sie können den Text auf jede gewünschte Weise rendern.

## Schnittstellen

- [`EditContext`](/de/docs/Web/API/EditContext) {{experimental_inline}}
  - : Die **`EditContext`** Schnittstelle ist eine JavaScript-Reflexion des Textbearbeitungskontexts, der normalerweise vom Browser transparent bereitgestellt wird, wenn standardmäßige bearbeitbare Bereiche wie `textarea` verwendet werden. `EditContext` bietet den Zustand des bearbeiteten Textes mit Informationen wie dem Text selbst, der aktuellen Auswahl oder der Position des Textes in der Benutzeroberfläche der App.
- [`TextFormat`](/de/docs/Web/API/TextFormat)
  - : Die **`TextFormat`** Schnittstelle wird verwendet, um bestimmte Formate darzustellen, die auf Textbereiche angewendet werden sollten, wenn der Benutzer Text innerhalb des IME-Kompositionsfensters eingibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der EditContext API](/de/docs/Web/API/EditContext_API/Guide)
