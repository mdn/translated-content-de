---
title: EditContext API
slug: Web/API/EditContext_API
l10n:
  sourceCommit: cf331ccff0dd88648dc9fe22a14f9aaa595ec4bf
---

{{DefaultAPISidebar("EditContext API")}}{{SeeCompatTable}}

Die **EditContext API** kann verwendet werden, um Rich-Text-Editoren im Web zu erstellen, die fortgeschrittene Texterfassungserfahrungen unterstützen, wie z.B. die {{glossary("Input Method Editor")}} (IME) Komposition, Emoji-Auswahl oder andere plattformabhängige, bearbeitungsbezogene Benutzeroberflächen.

Mit der EditContext API haben Sie die Flexibilität, Ihre eigene editierbare Textregion mit beliebigen Technologien zu erstellen.

## Konzept

Beim Eingeben von Text in einer editierbaren Region einer Anwendung sind mehrere Akteure beteiligt:

- **Benutzer**
  - : Der Benutzer gibt den Text mittels einer Eingabemethode ein: eine Tastatur, Maus, Stimme oder andere Eingabemethode.
- **Eingabemethoden-Software**
  - : Die Eingabemethoden-Software wandelt die Eingabe des Benutzers in Text um. Dies könnte beispielsweise ein {{glossary("Input Method Editor")}} (IME) sein, der Tastenanschläge von einer Standardtastatur in japanische, chinesische oder koreanische Zeichen umwandelt.
- **Textdienste des Betriebssystems**
  - : Der Textdienst des Betriebssystems fungiert als Verbindung zwischen der Eingabemethoden-Software und der Anwendung.
- **Bearbeitungskontext der Anwendung**
  - : Der Bearbeitungskontext der Anwendung stellt einen Status des bearbeiteten Textes zur Verfügung. Der Status enthält Informationen wie den Text selbst, die aktuelle Auswahl und die Position des Textes in der Benutzeroberfläche der App.
- **Anwendung editierbare Region**
  - : Die Anwendung editierbare Region ist das UI-Element der Anwendung, das den Text anzeigt.

Während die ersten drei Akteure vom Betriebssystem bereitgestellt werden, ist die Anwendung dafür verantwortlich, die editierbare Region und den Bearbeitungskontext bereitzustellen.

Im Web sind editierbare Regionen oft [`<textarea>`](/de/docs/Web/HTML/Element/textarea)-Elemente, [`<input>`](/de/docs/Web/HTML/Element/input)-Elemente oder Elemente mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut, das auf `true` gesetzt ist. Für diese Elemente stellt der Browser automatisch den Bearbeitungskontext bereit, und Webautoren müssen keinen Code schreiben, um die Texteingabe zu unterstützen.

### Erstellen von benutzerdefinierten editierbaren Regionen

Webautoren können auch benutzerdefinierte editierbare Regionen mithilfe der EditContext API erstellen. Beispielsweise könnte ein Webautor einen Rich-Text-Editor mit einem [`<canvas>`](/de/docs/Web/HTML/Element/canvas)-Element zum Rendern des Textes erstellen. In diesem Fall muss der Webautor Code schreiben, um die Texteingabe zu unterstützen.

### Verantwortlichkeiten des Autors

Wenn Sie sich entscheiden, Ihre eigene editierbare Region zu implementieren, sei es in einem `<canvas>` oder in einer Reihe von DOM-Elementen, sind Sie dafür verantwortlich, die Dinge bereitzustellen, die der Browser normalerweise bereitstellen würde, wenn Sie stattdessen ein `<textarea>` verwenden würden. Dazu gehört:

- Das Rendern des Textes.
- Das Rendern der Auswahl (wenn Sie Ihre editierbare Region mit DOM-Elementen anstelle eines `<canvas>` erstellen, rendert der Browser die Auswahl für Sie).
- Dem Textdienst des Betriebssystems mitzuteilen, wenn sich die Auswahl ändert.
- Dem Textdienst des Betriebssystems mitteilen, wo sich der Text in der Benutzeroberfläche befindet, sodass die Eingabemethoden-Software das IME-Kompositionsfenster an der richtigen Position anzeigen kann.
- Bestimmte Textformate anwenden, wenn der Benutzer Text innerhalb des IME-Kompositionsfensters eingibt.

Im Gegenzug macht die EditContext API das DOM-Element, das Sie wählen, editierbar und Teil der Fokusreihenfolge des Dokuments. Darüber hinaus bietet die EditContext API auch Informationen über den Zustand des bearbeiteten Textes, was es Ihnen ermöglicht, ihn auf eine benutzerdefinierte Weise darzustellen. Zu den bereitgestellten Informationen gehören:

- Der aktuelle Textinhalt.
- Die aktuelle Auswahl.
- Ob gerade IME-Komposition im Gange ist und ob Textformate angewendet werden müssen.

### Barrierefreiheit

Wenn Sie die EditContext API mit einem `<canvas>`-Element verwenden, stellen Sie sicher, dass der Text auch für unterstützende Technologien zugänglich ist. Screenreader können den Text in einem `<canvas>`-Element nicht lesen. Beispielsweise könnten Sie eine separate Ansicht des Textes in einem unsichtbaren DOM-Element beibehalten, das Screenreadern präsentiert wird.

### Grundlegende Verwendung

Um die EditContext API zu verwenden, müssen Sie eine Instanz der {{domxref("EditContext")}}-Schnittstelle erstellen und sie dann an das DOM-Element anhängen, das Sie editierbar machen möchten, indem Sie die {{domxref("HTMLElement/editContext", "editContext")}}-Eigenschaft verwenden. Das DOM-Element kann jedes Element sein, einschließlich eines `<div>`- oder eines `<canvas>`-Elements.

```html
<canvas id="editor-canvas"></canvas>
```

```js-nolint
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;
```

Eine `EditContext`-Instanz kann jeweils nur an ein DOM-Element angehängt werden.

Das Anhängen einer `EditContext`-Instanz an ein DOM-Element macht das Element fokussierbar, als Teil der Fokusreihenfolge des Dokuments. Der Benutzer kann Text in das Element eingeben, indem er die Eingabemethode seiner Wahl nutzt, und Sie können Ereignisse verwenden, die von der `EditContext`-Instanz ausgelöst werden, um den Text und die Auswahl darzustellen.

### Modell- und Ansicht-Architektur

Beim Verwenden der EditContext API kann es hilfreich sein, Ihre Bearbeitungserfahrung als Modell- und Ansicht-Architektur zu gestalten.

Die `EditContext`-Instanz stellt das Modell Ihrer editierbaren Region dar. Ihr interner Zustand wird aktualisiert, wenn eine Texteingabe erfolgt und wenn sich die Auswahl ändert.

Sie können dann den Text und die Auswahl in der Ansicht rendern, basierend auf den Informationen der `EditContext`-Instanz, müssen jedoch die Ansicht nicht exakt mit dem Modell übereinstimmen lassen. Sie sind frei, den Text auf jede gewünschte Weise darzustellen.

## Schnittstellen

- {{DOMxRef("EditContext")}} {{experimental_inline}}
  - : Die **`EditContext`**-Schnittstelle ist eine JavaScript-Reflexion des Bearbeitungskontextes, der normalerweise transparent vom Browser bereitgestellt wird, wenn Standardbearbeitungsregionen wie `textarea` verwendet werden. `EditContext` liefert den Zustand des bearbeiteten Textes, mit Informationen wie dem Text selbst, der aktuellen Auswahl oder der Position des Textes in der Benutzeroberfläche der App.
- {{DOMxRef("TextFormat")}}
  - : Die **`TextFormat`**-Schnittstelle wird verwendet, um bestimmte Formate zu repräsentieren, die auf Textranges angewendet werden sollen, wenn der Benutzer Text innerhalb des IME-Kompositionsfensters eingibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der EditContext API](/de/docs/Web/API/EditContext_API/Guide)
