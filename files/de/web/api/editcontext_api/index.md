---
title: EditContext API
slug: Web/API/EditContext_API
l10n:
  sourceCommit: cf331ccff0dd88648dc9fe22a14f9aaa595ec4bf
---

{{DefaultAPISidebar("EditContext API")}}{{SeeCompatTable}}

Die **EditContext API** kann verwendet werden, um Rich-Text-Editoren im Web zu erstellen, die erweiterte Texteingabeerlebnisse unterstützen, wie die Zusammensetzung mit einem [Input Method Editor](/de/docs/Glossary/Input_Method_Editor) (IME), Emoji-Auswahl oder andere plattformspezifische Bearbeitungs-UI-Oberflächen.

Mit der EditContext API haben Sie die Flexibilität, Ihre eigene bearbeitbare Textregion mit jeder beliebigen Technologie zu rendern.

## Konzept

Beim Texteingeben in einer bearbeitbaren Region einer Anwendung sind mehrere Akteure beteiligt:

- **Benutzer**
  - : Der Benutzer stellt den Text mittels einer Eingabemethode bereit: eine Tastatur, Maus, Sprache oder eine andere Eingabemethode.
- **Eingabemethodensoftware**
  - : Die Eingabemethodensoftware konvertiert die Eingabe des Benutzers in Text. Dies könnte zum Beispiel ein [Input Method Editor](/de/docs/Glossary/Input_Method_Editor) (IME) sein, der Tastenanschläge einer Standardtastatur in japanische, chinesische oder koreanische Zeichen umwandelt.
- **Textdienst des Betriebssystems**
  - : Der Textdienst des Betriebssystems wirkt als Verbindung zwischen der Eingabemethodensoftware und der Anwendung.
- **Textbearbeitungskontext der Anwendung**
  - : Der Textbearbeitungskontext der Anwendung stellt den Zustand des bearbeiteten Textes bereit. Der Zustand enthält Informationen wie den Text selbst, die aktuelle Auswahl, die Position des Textes in der Benutzeroberfläche der App.
- **Bearbeitbare Region der Anwendung**
  - : Die bearbeitbare Region der Anwendung ist das UI-Element der Anwendung, das den Text anzeigt.

Während die ersten drei Akteure vom Betriebssystem bereitgestellt werden, ist die Anwendung dafür verantwortlich, die bearbeitbare Region und den Textbearbeitungskontext bereitzustellen.

Im Web sind bearbeitbare Regionen oft [`<textarea>`](/de/docs/Web/HTML/Element/textarea)-Elemente, [`<input>`](/de/docs/Web/HTML/Element/input)-Elemente oder Elemente mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) auf `true` gesetzt. Für diese Elemente stellt der Browser automatisch den Textbearbeitungskontext bereit, und Webautoren müssen keinen Code schreiben, um Texteingaben zu unterstützen.

### Erstellen von benutzerdefinierten bearbeitbaren Regionen

Webautoren können auch benutzerdefinierte bearbeitbare Regionen mit der EditContext API erstellen. Ein Webautor könnte zum Beispiel einen Rich-Text-Editor mithilfe eines [`<canvas>`](/de/docs/Web/HTML/Element/canvas)-Elements erstellen, um den Text zu rendern. In diesem Fall muss der Webautor Code schreiben, um Texteingaben zu unterstützen.

### Verantwortlichkeiten des Autors

Wenn Sie sich entscheiden, Ihre eigene bearbeitbare Region zu implementieren, sei es, dass sie Text in ein `<canvas>` zeichnet oder in eine Reihe von DOM-Elementen rendert, sind Sie dafür verantwortlich, die Dinge bereitzustellen, die der Browser für Sie bereitstellen würde, wenn Sie stattdessen ein `<textarea>` verwenden würden. Dazu gehören:

- Das Rendern des Textes.
- Das Rendern der Auswahl (wenn Sie Ihre bearbeitbare Region mit DOM-Elementen statt einem `<canvas>` erstellen, rendert der Browser die Auswahl für Sie).
- Dem Textdienst des Betriebssystems mitzuteilen, wenn sich die Auswahl ändert.
- Dem Textdienst des Betriebssystems mitzuteilen, wo sich der Text in der Benutzeroberfläche befindet, damit die Eingabemethodensoftware das IME-Kompositionsfenster an der richtigen Stelle anzeigen kann.
- Bestimmte Textformate anzuwenden, wenn der Benutzer Text im IME-Kompositionsfenster verfasst.

Im Gegenzug macht die EditContext API das von Ihnen gewählte DOM-Element bearbeitbar und zum Bestandteil der Fokusreihenfolge des Dokuments. Darüber hinaus liefert die EditContext API auch Informationen über den Zustand des bearbeiteten Textes, sodass Sie ihn auf eine benutzerdefinierte Weise darstellen können. Die Ihnen bereitgestellten Informationen umfassen:

- Den aktuellen Textinhalt.
- Die aktuelle Auswahl.
- Ob eine IME-Komposition im Gange ist und ob Textformate angewendet werden müssen.

### Barrierefreiheit

Wenn Sie die EditContext API mit einem `<canvas>`-Element verwenden, stellen Sie sicher, dass der Text auch assistiven Technologien zugänglich ist. Bildschirmlesegeräte können den Text in einem `<canvas>`-Element nicht lesen. Sie könnten zum Beispiel eine separate Ansicht des Textes in einem außerhalb des Bildschirms befindlichen DOM-Element verwalten, die Bildschirmlesegeräten präsentiert wird.

### Grundlegende Verwendung

Um die EditContext API zu verwenden, müssen Sie eine Instanz der [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle erstellen und sie dann an das DOM-Element anhängen, das Sie bearbeitbar machen möchten, indem Sie die [`editContext`](/de/docs/Web/API/HTMLElement/editContext)-Eigenschaft nutzen. Das DOM-Element kann jedes Element sein, einschließlich eines `<div>`- oder `<canvas>`-Elements.

```html
<canvas id="editor-canvas"></canvas>
```

```js-nolint
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;
```

Eine `EditContext`-Instanz kann jeweils nur an ein DOM-Element angehängt werden.

Das Anhängen einer `EditContext`-Instanz an ein DOM-Element macht das Element fokussierbar, als Teil der Fokusreihenfolge des Dokuments. Der Benutzer kann Text in das Element eingeben, indem er die Eingabemethode seiner Wahl verwendet, und Sie können Ereignisse, die von der `EditContext`-Instanz ausgelöst werden, nutzen, um den Text und die Auswahl zu rendern.

### Model- und View-Architektur

Wenn Sie die EditContext API verwenden, ist es hilfreich, Ihr Bearbeitungserlebnis als Model- und View-Architektur aufzubauen.

Die `EditContext`-Instanz stellt das Modell Ihrer bearbeitbaren Region dar. Ihr interner Zustand wird aktualisiert, wenn Texteingaben empfangen werden und wenn sich die Auswahl ändert.

Sie können dann den Text und die Auswahl in der Ansicht rendern, indem Sie die von der `EditContext`-Instanz bereitgestellten Informationen verwenden, aber Ihre Ansicht muss nicht exakt dem Modell entsprechen. Sie sind frei, den Text in beliebiger Weise darzustellen.

## Schnittstellen

- [`EditContext`](/de/docs/Web/API/EditContext) {{experimental_inline}}
  - : Die **`EditContext`**-Schnittstelle ist eine JavaScript-Darstellung des Textbearbeitungskontexts, der normalerweise transparent vom Browser bereitgestellt wird, wenn Standard-Bearbeitungsregionen wie `textarea` verwendet werden. `EditContext` bietet den Zustand des bearbeiteten Textes mit Informationen wie den Text selbst, die aktuelle Auswahl oder den Standort des Textes in der Benutzeroberfläche der App.
- [`TextFormat`](/de/docs/Web/API/TextFormat)
  - : Die **`TextFormat`**-Schnittstelle wird verwendet, um bestimmte Formate darzustellen, die auf Textbereiche angewendet werden sollen, wenn der Benutzer Text innerhalb des IME-Kompositionsfensters verfasst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der EditContext API](/de/docs/Web/API/EditContext_API/Guide)
