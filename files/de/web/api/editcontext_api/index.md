---
title: EditContext API
slug: Web/API/EditContext_API
l10n:
  sourceCommit: f81527232ae480626f8cec10a7d2775a698be30a
---

{{DefaultAPISidebar("EditContext API")}}{{SeeCompatTable}}

Mit der **EditContext API** lassen sich Rich-Text-Editoren für das Web erstellen, die erweiterte Texteingabefunktionen unterstützen, etwa die Texteingabe über einen {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME), eine Emoji-Auswahl oder andere plattformspezifische Benutzeroberflächen für die Textbearbeitung.

Mit der EditContext API können Sie einen eigenen bearbeitbaren Textbereich mit einer Technologie Ihrer Wahl darstellen.

## Konzept

Bei der Eingabe von Text in einen bearbeitbaren Bereich einer Anwendung sind mehrere Beteiligte im Spiel:

- **Benutzer**
  - : Der Benutzer gibt Text über eine Eingabemethode ein, etwa per Tastatur, Maus oder Sprache.
- **Eingabemethodensoftware**
  - : Die Eingabemethodensoftware wandelt die Eingaben des Benutzers in Text um. Dies kann beispielsweise ein {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME) sein, der Tastenanschläge einer Standardtastatur in japanische, chinesische oder koreanische Schriftzeichen umwandelt.
- **Texteingabedienst des Betriebssystems**
  - : Der Texteingabedienst des Betriebssystems fungiert als Bindeglied zwischen der Eingabemethodensoftware und der Anwendung.
- **Textbearbeitungskontext der Anwendung**
  - : Der Textbearbeitungskontext der Anwendung stellt den Zustand des bearbeiteten Textes bereit. Dieser Zustand enthält Informationen wie den Text selbst, die aktuelle Auswahl und die Position des Textes in der Benutzeroberfläche der Anwendung.
- **Bearbeitbarer Bereich der Anwendung**
  - : Der bearbeitbare Bereich der Anwendung ist das UI-Element, das den Text anzeigt.

Während die ersten drei Beteiligten vom Betriebssystem bereitgestellt werden, ist die Anwendung für den bearbeitbaren Bereich und den Textbearbeitungskontext verantwortlich.

Im Web sind bearbeitbare Bereiche häufig [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)-Elemente, [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Elemente oder Elemente, bei denen das Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt ist. Für diese Elemente stellt der Browser den Textbearbeitungskontext automatisch bereit. Webentwickler müssen keinen Code schreiben, um die Texteingabe zu unterstützen.

### Benutzerdefinierte bearbeitbare Bereiche erstellen

Webentwickler können mit der EditContext API auch benutzerdefinierte bearbeitbare Bereiche erstellen. Beispielsweise könnten sie einen Rich-Text-Editor erstellen, der den Text in einem [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas)-Element darstellt. In diesem Fall müssen sie Code schreiben, um die Texteingabe zu unterstützen.

### Verantwortlichkeiten der Entwickler

Wenn Sie einen eigenen bearbeitbaren Bereich implementieren – unabhängig davon, ob er Text in ein `<canvas>` zeichnet oder ihn mit einer Reihe von DOM-Elementen darstellt –, müssen Sie die Aufgaben übernehmen, die der Browser bei Verwendung eines `<textarea>` normalerweise für Sie erledigt. Dazu gehören:

- Den Text darstellen.
- Die Auswahl darstellen. Wenn Sie Ihren bearbeitbaren Bereich mit DOM-Elementen statt mit einem `<canvas>` erstellen, stellt der Browser die Auswahl für Sie dar.
- Den Texteingabedienst des Betriebssystems über Änderungen an der Auswahl informieren.
- Dem Texteingabedienst des Betriebssystems mitteilen, wo sich der Text in der Benutzeroberfläche befindet, damit die Eingabemethodensoftware das IME-Kompositionsfenster an der richtigen Stelle anzeigen kann.
- Bestimmte Textformatierungen anwenden, während der Benutzer im IME-Kompositionsfenster Text zusammenstellt.

Im Gegenzug macht die EditContext API das von Ihnen gewählte DOM-Element bearbeitbar und nimmt es in die Fokusreihenfolge des Dokuments auf. Außerdem liefert die EditContext API Informationen über den Zustand des bearbeiteten Textes, sodass Sie ihn auf benutzerdefinierte Weise darstellen können. Dazu gehören:

- Der aktuelle Textinhalt.
- Die aktuelle Auswahl.
- Ob gerade eine IME-Komposition stattfindet und ob Textformatierungen angewendet werden müssen.

### Barrierefreiheit

Wenn Sie die EditContext API mit einem `<canvas>`-Element verwenden, stellen Sie sicher, dass der Text auch für assistive Technologien zugänglich ist. Screenreader können den Text in einem `<canvas>`-Element nicht lesen. Sie könnten beispielsweise eine separate Ansicht des Textes in einem DOM-Element außerhalb des sichtbaren Bereichs vorhalten, die Screenreadern zur Verfügung steht.

### Modell-View-Architektur

Bei der Verwendung der EditContext API ist es hilfreich, die Bearbeitungsfunktion als Modell-View-Architektur aufzubauen.

Die `EditContext`-Instanz repräsentiert das Modell Ihres bearbeitbaren Bereichs. Ihr interner Zustand wird aktualisiert, wenn Text eingegeben wird oder sich die Auswahl ändert.

Anschließend können Sie den Text und die Auswahl in der Ansicht anhand der Informationen der `EditContext`-Instanz darstellen. Die Ansicht muss dabei nicht genau mit dem Modell übereinstimmen. Sie können den Text auf beliebige Weise darstellen.

## Schnittstellen

- [`EditContext`](/de/docs/Web/API/EditContext) {{experimental_inline}}
  - : Die `EditContext`-Schnittstelle ist eine JavaScript-Repräsentation des Textbearbeitungskontexts, den der Browser bei standardmäßigen bearbeitbaren Bereichen wie `textarea` normalerweise automatisch bereitstellt. `EditContext` liefert den Zustand des bearbeiteten Textes, einschließlich Informationen wie dem Text selbst, der aktuellen Auswahl und der Position des Textes in der Benutzeroberfläche der Anwendung.
- [`TextFormat`](/de/docs/Web/API/TextFormat) {{experimental_inline}}
  - : Die `TextFormat`-Schnittstelle repräsentiert bestimmte Formatierungen, die auf Textbereiche angewendet werden sollen, während der Benutzer im IME-Kompositionsfenster Text zusammenstellt.
- [`TextUpdateEvent`](/de/docs/Web/API/TextUpdateEvent) {{experimental_inline}}
  - : Die `TextUpdateEvent`-Schnittstelle ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Aktualisierung des Textes oder der Auswahl in einem bearbeitbaren Textbereich repräsentiert, der mit einer [`EditContext`](/de/docs/Web/API/EditContext)-Instanz verknüpft ist.
- [`TextFormatUpdateEvent`](/de/docs/Web/API/TextFormatUpdateEvent) {{experimental_inline}}
  - : Die `TextFormatUpdateEvent`-Schnittstelle ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Liste von Textformatierungen repräsentiert, die das Fenster eines {{Glossary("Input_Method_Editor", "Input Method Editors")}} (IME) auf den Text anwenden möchte, der in einem mit einer [`EditContext`](/de/docs/Web/API/EditContext)-Instanz verknüpften bearbeitbaren Bereich zusammengestellt wird.
- [`CharacterBoundsUpdateEvent`](/de/docs/Web/API/CharacterBoundsUpdateEvent) {{experimental_inline}}
  - : Die `CharacterBoundsUpdateEvent`-Schnittstelle ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Anfrage des Betriebssystems nach den Begrenzungen bestimmter Zeichen innerhalb eines bearbeitbaren Bereichs repräsentiert, der mit einer [`EditContext`](/de/docs/Web/API/EditContext)-Instanz verknüpft ist.

## Erweiterungen anderer Schnittstellen

- [`HTMLElement.editContext`](/de/docs/Web/API/HTMLElement/editContext) {{experimental_inline}}
  - : Die `editContext`-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle liest und setzt das einem Element zugeordnete [`EditContext`](/de/docs/Web/API/EditContext)-Objekt.

## Beispiele

### Grundlegende Verwendung

Um die EditContext API zu verwenden, erstellen Sie eine Instanz der [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle und verknüpfen sie über die [`editContext`](/de/docs/Web/API/HTMLElement/editContext)-Eigenschaft mit dem DOM-Element, das Sie bearbeitbar machen möchten. Das DOM-Element kann ein beliebiges Element sein, auch ein `<div>`- oder `<canvas>`-Element.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;
```

Eine `EditContext`-Instanz kann jeweils nur mit einem DOM-Element verknüpft sein.

Wenn Sie eine `EditContext`-Instanz mit einem DOM-Element verknüpfen, kann das Element im Rahmen der Fokusreihenfolge des Dokuments den Fokus erhalten. Benutzer können mit einer Eingabemethode ihrer Wahl Text in das Element eingeben. Mithilfe der von der `EditContext`-Instanz ausgelösten Ereignisse können Sie den Text und die Auswahl darstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der EditContext API](/de/docs/Web/API/EditContext_API/Guide)
