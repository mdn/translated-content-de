---
title: EditContext API
slug: Web/API/EditContext_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("EditContext API")}}{{SeeCompatTable}}

Die **EditContext-API** kann verwendet werden, um auf dem Web Rich-Text-Editoren zu erstellen, die fortgeschrittene Texterfassungserfahrungen unterstützen, wie zum Beispiel {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME)-Komposition, Emoji-Auswahl oder andere plattformspezifische Bearbeitungs-bezogene UI-Oberflächen.

Mit der EditContext-API erhalten Sie die Flexibilität, Ihren eigenen editierbaren Textbereich mit beliebiger Technologie zu rendern.

## Konzept

Mehrere Akteure sind beteiligt, wenn Text in einem editierbaren Bereich einer Anwendung eingegeben wird:

- **Benutzer**
  - : Der Benutzer stellt den Text durch eine Eingabemethode bereit: eine Tastatur, Maus, Stimme oder andere Eingabemethode.
- **Eingabemethoden-Software**
  - : Die Eingabemethoden-Software wandelt die Benutzereingaben in Text um. Zum Beispiel könnte es sich dabei um einen {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME) handeln, der Tastenanschläge von einer Standardtastatur in japanische, chinesische oder koreanische Zeichen umwandelt.
- **Betriebssystem-Texteingabedienst**
  - : Der Texteingabedienst des Betriebssystems fungiert als Verbindung zwischen der Eingabemethoden-Software und der Anwendung.
- **Textbearbeitungskontext der Anwendung**
  - : Der Textbearbeitungskontext der Anwendung stellt einen Zustand des bearbeiteten Textes bereit. Der Zustand enthält Informationen wie den Text selbst, die aktuelle Auswahl und den Standort des Textes in der Benutzeroberfläche der App.
- **Editierbarer Bereich der Anwendung**
  - : Der editierbare Bereich der Anwendung ist das UI-Element der Anwendung, das den Text anzeigt.

Während die ersten drei Akteure vom Betriebssystem zur Verfügung gestellt werden, ist die Anwendung dafür verantwortlich, den editierbaren Bereich und den Textbearbeitungskontext bereitzustellen.

Im Web sind editierbare Bereiche oft [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)-Elemente, [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Elemente oder Elemente mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut, das auf `true` gesetzt ist. Für diese Elemente stellt der Browser automatisch den Textbearbeitungskontext bereit, und Web-Autoren müssen keinen Code schreiben, um die Texterfassung zu unterstützen.

### Erstellen benutzerdefinierter editierbarer Bereiche

Web-Autoren können auch benutzerdefinierte editierbare Bereiche mit der EditContext-API erstellen. Zum Beispiel könnte ein Web-Autor einen Rich-Text-Editor erstellen, der ein [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas)-Element verwendet, um den Text zu rendern. In diesem Fall muss der Web-Autor Code schreiben, um die Texterfassung zu unterstützen.

### Verantwortlichkeiten des Autors

Wenn Sie sich entscheiden, Ihren eigenen editierbaren Bereich zu implementieren, sei es, indem Sie Text in ein `<canvas>` zeichnen oder es in eine Reihe von DOM-Elementen rendern, sind Sie dafür verantwortlich, die Dinge bereitzustellen, die der Browser normalerweise für Sie bereitstellt, wenn Sie stattdessen ein `<textarea>` verwenden würden. Dies schließt ein:

- Das Rendern des Textes.
- Das Rendern der Auswahl (wenn Sie Ihren editierbaren Bereich mit DOM-Elementen anstelle eines `<canvas>` erstellen, rendert der Browser die Auswahl für Sie).
- Dem OS-Texteingabedienst mitzuteilen, wenn sich die Auswahl ändert.
- Dem OS-Texteingabedienst mitzuteilen, wo sich der Text in der Benutzeroberfläche befindet, damit die Eingabemethoden-Software das IME-Kompositionsfenster an der richtigen Stelle anzeigen kann.
- Bestimmte Textformatierungen anzuwenden, wenn der Benutzer Text innerhalb des IME-Kompositionsfensters eingibt.

Im Gegenzug macht die EditContext-API das von Ihnen gewählte DOM-Element editierbar und Teil der Fokusreihenfolge des Dokuments. Darüber hinaus liefert die EditContext-API auch Informationen über den Zustand des bearbeiteten Textes, die es Ihnen ermöglichen, ihn individuell zu rendern. Die Ihnen bereitgestellten Informationen umfassen:

- Den aktuellen Textinhalt.
- Die aktuelle Auswahl.
- Ob die IME-Komposition im Gange ist und ob Textformate angewendet werden müssen.

### Barrierefreiheit

Wenn Sie die EditContext-API mit einem `<canvas>`-Element verwenden, stellen Sie sicher, dass der Text auch für unterstützende Technologien zugänglich ist. Bildschirmleseprogramme können den Text in einem `<canvas>`-Element nicht lesen. Zum Beispiel könnten Sie eine separate Ansicht des Textes in einem außerhalb des Bildschirms befindlichen DOM-Element aufrechterhalten, das den Bildschirmleseprogrammen präsentiert wird.

### Grundlegende Verwendung

Um die EditContext-API zu verwenden, müssen Sie eine Instanz der [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle erstellen und sie dann über die [`editContext`](/de/docs/Web/API/HTMLElement/editContext)-Eigenschaft an das DOM-Element anhängen, das Sie editierbar machen möchten. Das DOM-Element kann jedes Element sein, einschließlich eines `<div>` oder eines `<canvas>`-Elements.

```html
<canvas id="editor-canvas"></canvas>
```

```js-nolint
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;
```

Eine `EditContext`-Instanz kann jeweils nur an ein DOM-Element angehängt werden.

Das Anfügen einer `EditContext`-Instanz an ein DOM-Element macht das Element fokussierbar als Teil der Fokusreihenfolge des Dokuments. Der Benutzer kann mit der Eingabemethode seiner Wahl Text in das Element eingeben, und Sie können Ereignisse verwenden, die von der `EditContext`-Instanz ausgelöst werden, um den Text und die Auswahl zu rendern.

### Modell- und Sichtarchitektur

Bei der Verwendung der EditContext-API hilft es, Ihr Bearbeitungserlebnis als Modell- und Sichtarchitektur zu gestalten.

Die `EditContext`-Instanz repräsentiert das Modell Ihres editierbaren Bereichs. Ihr interner Zustand wird aktualisiert, wenn Texteingaben empfangen werden und wenn sich die Auswahl ändert.

Dann können Sie den Text und die Auswahl in der Sicht rendern, indem Sie die von der `EditContext`-Instanz bereitgestellten Informationen verwenden. Dabei muss Ihre Sicht nicht exakt dem Modell entsprechen. Sie können den Text auf beliebige Weise rendern.

## Schnittstellen

- [`EditContext`](/de/docs/Web/API/EditContext) {{experimental_inline}}
  - : Die `EditContext`-Schnittstelle ist eine JavaScript-Reflexion des Textbearbeitungskontexts, der normalerweise transparent vom Browser bereitgestellt wird, wenn Standard-Editierbereiche wie `textarea` verwendet werden. `EditContext` liefert den Zustand des bearbeiteten Textes mit Informationen wie dem Text selbst, der aktuellen Auswahl oder der Position des Textes in der Benutzeroberfläche der App.
- [`TextFormat`](/de/docs/Web/API/TextFormat) {{experimental_inline}}
  - : Die `TextFormat`-Schnittstelle wird verwendet, um bestimmte Formate darzustellen, die auf Textbereiche angewendet werden sollen, wenn der Benutzer Text innerhalb des IME-Kompositionsfensters eingibt.
- [`TextUpdateEvent`](/de/docs/Web/API/TextUpdateEvent) {{experimental_inline}}
  - : Die `TextUpdateEvent`-Schnittstelle ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Text- oder Auswahlaktualisierung in einem editierbaren Textbereich darstellt, der an eine [`EditContext`](/de/docs/Web/API/EditContext)-Instanz angehängt ist.
- [`TextFormatUpdateEvent`](/de/docs/Web/API/TextFormatUpdateEvent) {{experimental_inline}}
  - : Die `TextFormatUpdateEvent`-Schnittstelle ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Liste von Textformaten darstellt, die ein {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME)-Fenster auf den in einem editierbaren Bereich komponierten Text anwenden möchte, der an eine [`EditContext`](/de/docs/Web/API/EditContext)-Instanz angehängt ist.
- [`CharacterBoundsUpdateEvent`](/de/docs/Web/API/CharacterBoundsUpdateEvent) {{experimental_inline}}
  - : Die `CharacterBoundsUpdateEvent`-Schnittstelle ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Anforderung des Betriebssystems darstellt, um die Grenzen bestimmter Zeichen innerhalb eines editierbaren Bereichs zu kennen, der an eine [`EditContext`](/de/docs/Web/API/EditContext)-Instanz angehängt ist.

## Erweiterungen für andere Schnittstellen

- [`HTMLElement.editContext`](/de/docs/Web/API/HTMLElement/editContext) {{experimental_inline}}
  - : Die `editContext`-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle ruft das mit einem Element verknüpfte [`EditContext`](/de/docs/Web/API/EditContext)-Objekt ab und legt es fest.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der EditContext-API](/de/docs/Web/API/EditContext_API/Guide)
