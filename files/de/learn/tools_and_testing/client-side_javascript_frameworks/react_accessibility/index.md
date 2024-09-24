---
title: Barrierefreiheit in React
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility
l10n:
  sourceCommit: 707518ff85e56b410289555e56328d10abbe1a9c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In unserem abschließenden Tutorial-Artikel werden wir uns auf die Barrierefreiheit konzentrieren, einschließlich der Fokusverwaltung in React, was die Benutzerfreundlichkeit verbessern und Verwirrung sowohl für Maus- als auch für Bildschirmleser-Benutzer verringern kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a>, und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
          Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen der Implementierung von Tastaturbarrierefreiheit in React.</td>
    </tr>
  </tbody>
</table>

## Einbeziehung von Tastaturbenutzern

An diesem Punkt haben wir alle Funktionen implementiert, die wir uns vorgenommen haben. Benutzer können eine neue Aufgabe hinzufügen, Aufgaben abhaken und abhaken, Aufgaben löschen oder Aufgabennamen bearbeiten. Außerdem können sie ihre Aufgabenliste nach allen, aktiven oder abgeschlossenen Aufgaben filtern.

Oder zumindest können sie all diese Dinge mit einer Maus tun. Leider sind diese Funktionen nicht sehr zugänglich für Benutzer, die nur die Tastatur verwenden. Lassen Sie uns dies nun erkunden.

## Untersuchung des Tastaturbenutzerproblems

Beginnen Sie, indem Sie auf das Eingabefeld oben in unserer App klicken, als würden Sie eine neue Aufgabe hinzufügen. Sie werden einen dicken, gestrichelten Umriss um dieses Eingabefeld sehen. Dieser Umriss ist Ihr visueller Indikator dafür, dass der Browser derzeit auf dieses Element fokussiert ist. Drücken Sie die <kbd>Tab</kbd>-Taste, und Sie werden den Umriss um die Schaltfläche „Hinzufügen“ unterhalb des Eingabefelds erscheinen sehen. Dies zeigt Ihnen, dass der Fokus des Browsers verschoben wurde.

Drücken Sie noch einige Male <kbd>Tab</kbd>, und Sie werden sehen, wie sich dieser gestrichelte Fokusindikator zwischen den einzelnen Filtertasten bewegt. Gehen Sie weiter, bis der Fokusindikator um die erste „Bearbeiten“-Schaltfläche ist. Drücken Sie <kbd>Enter</kbd>.

Die `<Todo />`-Komponente wird die Vorlagen wechseln, wie wir es entworfen haben, und Sie werden ein Formular sehen, das uns erlaubt, den Namen der Aufgabe zu bearbeiten.

Aber wohin ist unser Fokusindikator verschwunden?

Wenn wir in unserer `<Todo />`-Komponente zwischen den Vorlagen wechseln, entfernen wir die Elemente aus der alten Vorlage vollständig und ersetzen sie durch die Elemente aus der neuen Vorlage. Das bedeutet, dass das Element, auf das wir fokussiert hatten, nicht mehr existiert, so gibt es keinen visuellen Hinweis darauf, wo der Fokus des Browsers ist. Dies könnte eine Vielzahl von Benutzern verwirren — insbesondere Benutzer, die auf die Tastatur angewiesen sind, oder Benutzer, die unterstützende Technologien verwenden.

Um das Erlebnis für Tastatur- und unterstützende Technologiebesucher zu verbessern, sollten wir den Browserfokus selbst verwalten.

### Beiseite: eine Notiz zu unserem Fokusindikator

Wenn Sie die Filtertasten „Alle“, „Aktiv“ oder „Abgeschlossen“ mit Ihrer Maus anklicken, werden Sie _keinen_ sichtbaren Fokusindikator sehen, aber Sie werden einen sehen, wenn Sie mit der <kbd>Tab</kbd>-Taste auf Ihrer Tastatur zwischen ihnen wechseln. Keine Sorge — Ihr Code ist nicht kaputt!

Unsere CSS-Datei verwendet die [`:focus-visible`](/de/docs/Web/CSS/:focus-visible) Pseudoklasse, um benutzerdefinierte Stile für den Fokusindikator bereitzustellen, und der Browser verwendet eine Reihe interner Regeln, um zu bestimmen, wann er dem Benutzer angezeigt wird. Im Allgemeinen wird der Browser als Reaktion auf Tastatureingaben _einen_ Fokusindikator anzeigen und _kann_ ihn bei Mauseingaben anzeigen. `<button>`-Elemente _zeigen keinen_ Fokusindikator als Reaktion auf Mauseingaben, während `<input>`-Elemente dies _tun_.

Das Verhalten von `:focus-visible` ist selektiver als die ältere [`:focus`](/de/docs/Web/CSS/:focus) Pseudoklasse, mit der Sie vielleicht vertrauter sind. `:focus` zeigt in viel mehr Situationen einen Fokusindikator, und Sie können es anstelle von oder in Kombination mit `:focus-visible` verwenden, wenn Sie dies bevorzugen.

## Fokussierung zwischen Vorlagen

Wenn ein Benutzer die `<Todo />`-Vorlage vom Anzeigen zum Bearbeiten wechselt, sollten wir das `<input>` fokussieren, das zur Umbenennung verwendet wird; wenn er zurück vom Bearbeiten zum Anzeigen wechselt, sollten wir den Fokus zurück auf die „Bearbeiten“-Schaltfläche bewegen.

### Zielgerichtete Elemente

Bis zu diesem Punkt haben wir JSX-Komponenten geschrieben und React den resultierenden DOM im Hintergrund bauen lassen. Die meiste Zeit brauchen wir keine bestimmten Elemente im DOM anzusprechen, da wir den Zustand und die Eigenschaften von React verwenden können, um zu kontrollieren, was gerendert wird. Um den Fokus zu verwalten, müssen wir jedoch in der Lage sein, bestimmte DOM-Elemente gezielt anzusprechen.

Hier kommt der `useRef()` Hook ins Spiel.

Ändern Sie zuerst die `import`-Anweisung oben in `Todo.jsx`, sodass sie `useRef` umfasst:

```jsx
import { useRef, useState } from "react";
```

`useRef()` erstellt ein Objekt mit einer einzigen Eigenschaft: `current`. Refs können beliebige Werte speichern, die wir später abrufen können. Wir können sogar Referenzen zu DOM-Elementen speichern, was wir genau hier tun werden.

Erstellen Sie als nächstes zwei neue Konstanten unter den `useState()` Hooks in Ihrer `Todo()` Funktion. Jede sollte ein Ref sein – eine für die „Bearbeiten“-Schaltfläche im Ansichtsvorlage und eine für das Bearbeitungsfeld in der Bearbeitungsvorlage.

```jsx
const editFieldRef = useRef(null);
const editButtonRef = useRef(null);
```

Diese Refs haben einen Standardwert von `null`, um klarzumachen, dass sie leer sein werden, bis sie an ihre DOM-Elemente gebunden werden. Um sie an ihre Elemente zu binden, fügen wir das spezielle `ref`-Attribut zu jedem JSX-Element hinzu und setzen die Werte dieser Attribute auf die entsprechend benannten `ref`-Objekte.

Aktualisieren Sie das `<input>` in Ihrer Bearbeitungsvorlage, sodass es so aussieht:

```jsx
<input
  id={props.id}
  className="todo-text"
  type="text"
  value={newName}
  onChange={handleChange}
  ref={editFieldRef}
/>
```

Aktualisieren Sie die „Bearbeiten“-Schaltfläche in Ihrer Ansichtsvorlage, sodass es so aussieht:

```jsx
<button
  type="button"
  className="btn"
  onClick={() => setEditing(true)}
  ref={editButtonRef}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

Dadurch werden unsere `editFieldRef` und `editButtonRef` mit Referenzen zu den DOM-Elementen gefüllt, an die sie gebunden sind, aber _nur_, nachdem React die Komponente gerendert hat. Testen Sie das selbst: Fügen Sie die folgende Zeile irgendwo im Körper Ihrer `Todo()` Funktion hinzu, unterhalb von `editButtonRef`:

```jsx
console.log(editButtonRef.current);
```

Sie werden sehen, dass der Wert von `editButtonRef.current` beim ersten Render der Komponente `null` ist, aber wenn Sie auf eine „Bearbeiten“-Schaltfläche klicken, wird das `<button>`-Element in der Konsole protokolliert. Das liegt daran, dass das Ref erst nach dem Rendern der Komponente gefüllt wird und das Klicken auf die „Bearbeiten“-Schaltfläche dazu führt, dass die Komponente neu gerendert wird. Stellen Sie sicher, dass Sie dieses Log löschen, bevor Sie fortfahren.

> [!NOTE]
> Ihre Protokolle werden 6 Mal angezeigt, da wir 3 Instanzen von `<Todo />` in unserer App haben und React unsere Komponenten zweimal im Entwicklungsmodus rendert.

Wir kommen näher! Um unsere neu referenzierten Elemente zu nutzen, müssen wir einen weiteren React Hook verwenden: `useEffect()`.

### Implementierung von `useEffect()`

[`useEffect()`](https://react.dev/reference/react/useEffect) ist so benannt, weil es alle Nebenwirkungen ausführt, die wir dem Renderprozess hinzufügen möchten, die aber nicht im Hauptfunktionskörper ausgeführt werden können. `useEffect()` läuft direkt nach dem Rendern einer Komponente, was bedeutet, dass die DOM-Elemente, auf die wir uns im vorherigen Abschnitt bezogen haben, für uns verfügbar sind.

Ändern Sie die Importanweisung von `Todo.jsx` erneut, um `useEffect` hinzuzufügen:

```jsx
import { useEffect, useRef, useState } from "react";
```

`useEffect()` nimmt eine Funktion als Argument entgegen; diese Funktion wird _nach_ dem Rendern der Komponente ausgeführt. Um dies zu demonstrieren, setzten Sie den folgenden `useEffect()` Aufruf direkt über die `return`-Anweisung im Körper von `Todo()`, und übergeben Sie eine Funktion hinein, die die Wörter „Nebeneffekt“ in Ihre Konsole protokolliert:

```jsx
useEffect(() => {
  console.log("side effect");
});
```

Um den Unterschied zwischen dem Haupt-Renderprozess und dem Code, der innerhalb von `useEffect()` ausgeführt wird, zu veranschaulichen, fügen Sie ein weiteres Protokoll hinzu – setzen Sie dieses unter die vorherige Ergänzung:

```jsx
console.log("main render");
```

Öffnen Sie nun die App in Ihrem Browser. Sie sollten beide Nachrichten in Ihrer Konsole sehen, wobei jede mehrmals wiederholt wird. Beachten Sie, wie „main render“ zuerst protokolliert wurde und „side effect“ als zweites, obwohl das „side effect“-Protokoll im Code zuerst erscheint.

```plain
main render                                     Todo.jsx
side effect                                     Todo.jsx
```

Erneut sind die Protokolle so geordnet, weil der Code innerhalb von `useEffect()` _nach_ dem Rendern der Komponente ausgeführt wird. Daran muss man sich ein wenig gewöhnen, aber behalten Sie es im Hinterkopf, während Sie voranschreiten. Für jetzt löschen Sie `console.log("main render")` und gehen wir weiter zu unserer Implementierung der Fokusverwaltung.

### Fokus auf unser Bearbeitungsfeld

Nun da wir wissen, dass unser `useEffect()` Hook funktioniert, können wir den Fokus damit verwalten. Zur Erinnerung: Wir möchten den Fokus auf das Bearbeitungsfeld lenken, wenn wir zur Bearbeitungsvorlage wechseln.

Aktualisieren Sie Ihren vorhandenen `useEffect()` Hook, damit er so aussieht:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  }
}, [isEditing]);
```

Diese Änderungen bewirken, dass, wenn `isEditing` wahr ist, React den aktuellen Wert des `editFieldRef` liest und den Fokus des Browsers darauf verschiebt. Wir geben auch ein Array als zweites Argument in `useEffect()` ein. Dieses Array ist eine Liste von Werten, von denen `useEffect()` abhängig sein sollte. Mit diesen Werten wird `useEffect()` nur ausgeführt, wenn sich einer dieser Werte ändert. Wir möchten den Fokus nur dann ändern, wenn sich der Wert von `isEditing` ändert.

Versuchen Sie es jetzt: Verwenden Sie die <kbd>Tab</kbd>-Taste, um zu einer der „Bearbeiten“-Schaltflächen zu navigieren, und drücken Sie dann <kbd>Enter</kbd>. Sie sollten sehen, wie die `<Todo />`-Komponente zu ihrer Bearbeitungsvorlage wechselt, und der Fokusindikator des Browsers sollte um das `<input>`-Element erscheinen!

### Den Fokus zurück zur Bearbeiten-Schaltfläche bewegen

Auf den ersten Blick scheint es täuschend einfach zu sein, React zu veranlassen, den Fokus zurück auf unsere „Bearbeiten“-Schaltfläche zu verschieben, wenn die Bearbeitung gespeichert oder abgebrochen wird. Sicherlich könnten wir eine Bedingung zu unserem `useEffect` hinzufügen, um die Bearbeiten-Schaltfläche zu fokussieren, wenn `isEditing` `false` ist? Lassen Sie uns das jetzt versuchen – aktualisieren Sie Ihren `useEffect()` Aufruf wie folgt:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  } else {
    editButtonRef.current.focus();
  }
}, [isEditing]);
```

Das funktioniert teilweise. Wenn Sie Ihre Tastatur verwenden, um die „Bearbeiten“-Schaltfläche auszulösen (denken Sie daran: tabben Sie zu ihr und drücken Sie <kbd>Enter</kbd>), werden Sie sehen, dass Ihr Fokus zwischen dem Bearbeiten `<input>` und der „Bearbeiten“-Schaltfläche wechselt, während Sie eine Bearbeitung starten und beenden. Sie haben jedoch möglicherweise ein neues Problem bemerkt – die „Bearbeiten“-Schaltfläche in der letzten `<Todo />`-Komponente ist direkt nach dem Laden der Seite fokussiert, noch bevor wir mit der App interagieren!

Unser `useEffect()` Hook verhält sich genau so, wie wir es entworfen haben: er läuft, sobald die Komponente gerendert wird, stellt fest, dass `isEditing` `false` ist, und fokussiert die „Bearbeiten“-Schaltfläche. Es gibt drei Instanzen von `<Todo />`, und der Fokus fällt auf die „Bearbeiten“-Schaltfläche derjenigen, die zuletzt rendert.

Wir müssen unseren Ansatz umstrukturieren, damit sich der Fokus nur ändert, wenn sich `isEditing` von einem Wert zum anderen ändert.

## Robusteres Fokusmanagement

Um unsere verfeinerten Kriterien zu erfüllen, müssen wir nicht nur den Wert von `isEditing` kennen, sondern auch _wann sich dieser Wert geändert hat_. Dazu müssen wir den vorherigen Wert der `isEditing` Konstante lesen können. In Pseudocode sollte unsere Logik in etwa so aussehen:

```jsx
if (wasNotEditingBefore && isEditingNow) {
  focusOnEditField();
} else if (wasEditingBefore && isNotEditingNow) {
  focusOnEditButton();
}
```

Das React-Team hat diskutiert [wie man vorherigen Zustand einer Komponente erhält](https://legacy.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state), und ein Beispiel-Hook bereitgestellt, den wir für diesen Zweck verwenden können.

### Einführung in `usePrevious()`

Fügen Sie den folgenden Code oben in `Todo.jsx` hinzu, über Ihre `Todo()` Funktion.

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

`usePrevious()` ist ein _benutzerdefinierter Hook_, der einen Wert über Renders hinaus verfolgt. Er:

1. Verwendet den `useRef()` Hook, um ein leeres `ref` zu erstellen.
2. Gibt den aktuellen Wert des `ref` an die aufrufende Komponente zurück.
3. Ruft `useEffect()` auf und aktualisiert nach jedem Rendern der aufrufenden Komponente den in `ref.current` gespeicherten Wert.

Das Verhalten von `useEffect()` ist der Schlüssel zu dieser Funktionalität. Da `ref.current` innerhalb eines `useEffect()` Aufrufs aktualisiert wird, ist es immer einen Schritt hinter dem Wert, der im Hauptzyklus der Komponente ist – daher der Name `usePrevious()`.

### Verwendung von `usePrevious()`

Jetzt können wir eine `wasEditing` Konstante definieren, um den vorherigen Wert von `isEditing` zu verfolgen; dies wird erreicht, indem `usePrevious` mit `isEditing` als Argument aufgerufen wird. Fügen Sie das folgende innerhalb von `Todo()`, unterhalb der `useRef` Zeilen hinzu:

```jsx
const wasEditing = usePrevious(isEditing);
```

Sie können sehen, wie sich `usePrevious()` verhält, indem Sie unterhalb dieser Zeile ein Konsolenprotokoll hinzufügen:

```jsx
console.log(wasEditing);
```

In diesem Protokoll wird der aktuelle Wert von `wasEditing` immer der vorherige Wert von `isEditing` sein. Klicken Sie ein paar Mal auf die „Bearbeiten“- und „Abbrechen“-Schaltflächen, um zu beobachten, wie er sich ändert, und entfernen Sie dieses Protokoll, wenn Sie bereit sind, weiterzugehen.

Mit dieser `wasEditing` Konstante können wir unseren `useEffect()` Hook aktualisieren, um die zuvor besprochene Pseudocode-Logik zu implementieren:

```jsx
useEffect(() => {
  if (!wasEditing && isEditing) {
    editFieldRef.current.focus();
  } else if (wasEditing && !isEditing) {
    editButtonRef.current.focus();
  }
}, [wasEditing, isEditing]);
```

Beachten Sie, dass die Logik von `useEffect()` jetzt von `wasEditing` abhängt, daher geben wir es in das Abhängigkeitsarray ein.

Versuchen Sie, Ihre Tastatur zu verwenden, um die „Bearbeiten“- und „Abbrechen“-Schaltflächen in der `<Todo />`-Komponente zu aktivieren; Sie werden sehen, dass sich der Fokusindikator des Browsers wie vorgesehen bewegt, ohne das eingangs besprochene Problem.

## Fokussierung, wenn der Benutzer eine Aufgabe löscht

Es gibt noch eine letzte Lücke im Tastaturerlebnis: Wenn ein Benutzer eine Aufgabe aus der Liste löscht, verschwindet der Fokus. Wir werden ein ähnliches Muster wie bei unseren vorherigen Änderungen befolgen: Wir erstellen ein neues Ref und verwenden unseren `usePrevious()` Hook, um auf die Listenüberschrift zu fokussieren, wannimmer ein Benutzer eine Aufgabe löscht.

### Warum die Listenüberschrift?

Manchmal ist der Ort, auf den wir unseren Fokus lenken möchten, offensichtlich: als wir die `<Todo />`-Vorlagen umschalteten, hatten wir einen Ursprungspunkt, zu dem wir zurückkehren konnten — die „Bearbeiten“-Schaltfläche. In diesem Fall jedoch, da wir Elemente vollständig aus dem DOM entfernen, gibt es keinen Platz, zu dem zurückgekehrt werden kann. Die nächstbeste Wahl ist ein intuitiver Ort in der Nähe. Die Listenüberschrift ist die beste Wahl, weil sie in der Nähe des Listenelements ist, das der Benutzer löschen wird, und das Fokussieren darauf wird dem Benutzer mitteilen, wie viele Aufgaben verbleiben.

### Erstellung unseres Refs

Importieren Sie die `useRef()` und `useEffect()` Hooks in `App.jsx` — Sie benötigen beide unten:

```jsx
import { useState, useRef, useEffect } from "react";
```

Deklarieren Sie als nächstes ein neues Ref innerhalb der `App()` Funktion, direkt über der `return` Anweisung:

```jsx
const listHeadingRef = useRef(null);
```

### Vorbereitung der Überschrift

Heading-Elemente wie unser `<h2>` sind normalerweise nicht fokusierbar. Das ist kein Problem — wir können jedes Element programmatisch fokusierbar machen, indem wir das Attribut [`tabindex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) hinzufügen. Das bedeutet _nur mit JavaScript focusierbar_. Mit <kbd>Tab</kbd> können Sie ein Element mit einem Tabindex von `-1` nicht fokussieren, wie Sie es bei einem [`<button>`](/de/docs/Web/HTML/Element/button) oder [`<a>`](/de/docs/Web/HTML/Element/a) Element könnten (dies kann mit `tabindex="0"` getan werden, was in diesem Fall jedoch nicht angebracht ist).

Fügen wir das `tabindex`-Attribut hinzu — in JSX als `tabIndex` geschrieben — zur Überschrift über unserer Aufgabenliste, zusammen mit unserem `listHeadingRef`:

```jsx
<h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
  {headingText}
</h2>
```

> [!NOTE]
> Das `tabindex`-Attribut ist exzellent für Barrierefreiheit in Grenzsituationen, aber Sie sollten höchst sorgfältig darauf achten, es nicht übermäßig zu verwenden. Wenden Sie `tabindex` nur dann auf ein Element an, wenn Sie sicher sind, dass es dem Benutzer irgendwie nützen wird. In den meisten Fällen sollten Sie Elemente verwenden, die auf natürliche Weise den Fokus erhalten können, wie z.B. Buttons, Verweise und Eingaben. Eine verantwortungslose Nutzung von `tabindex` könnte tiefgreifende negative Auswirkungen auf Tastatur- und Bildschirmlesebenutzer haben!

### Abrufen des vorherigen Zustands

Wir möchten uns nur auf das mit unserem Ref verknüpfte Element (über das `ref`-Attribut) fokussieren, wenn unser Benutzer eine Aufgabe aus seiner Liste löscht. Dazu benötigen wir den bereits verwendeten `usePrevious()` Hook. Fügen Sie ihn am oberen Rand Ihrer `App.jsx` Datei, direkt unter den Imports hinzu:

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

Fügen Sie nun das Folgende, oberhalb der `return` Anweisung innerhalb der `App()` Funktion hinzu:

```jsx
const prevTaskLength = usePrevious(tasks.length);
```

Hier rufen wir `usePrevious()` auf, um die vorherige Länge des Aufgabenarrays zu verfolgen.

> [!NOTE]
> Da wir nun `usePrevious()` in zwei Dateien verwenden, könnte es effizienter sein, die `usePrevious()` Funktion in eine eigene Datei zu verschieben, sie aus dieser Datei zu exportieren und sie dort zu importieren, wo Sie sie benötigen. Versuchen Sie dies als Übung zu tun, sobald Sie mit dem Ende angekommen sind.

### Verwendung von `useEffect()` zur Steuerung unseres Headingfokus

Jetzt, da wir gespeichert haben, wie viele Aufgaben wir zuvor hatten, können wir einen `useEffect()` Hook einrichten, der ausgeführt wird, wenn sich unsere Anzahl an Aufgaben ändert, und der die Überschrift fokussiert, falls die Anzahl an Aufgaben jetzt kleiner ist als zuvor — also, wir eine Aufgabe gelöscht haben!

Fügen Sie das Folgende in den Körper Ihrer `App()` Funktion, direkt unter Ihre vorherigen Hinzufügungen, ein:

```jsx
useEffect(() => {
  if (tasks.length < prevTaskLength) {
    listHeadingRef.current.focus();
  }
}, [tasks.length, prevTaskLength]);
```

Wir werden nur versuchen, unsere Listenüberschrift zu fokussieren, wenn wir jetzt weniger Aufgaben haben als zuvor. Die in diesen Hook übergebenen Abhängigkeiten stellen sicher, dass es nur versucht wird, erneut zu laufen, wenn sich einer dieser Werte (die Anzahl der aktuellen Aufgaben oder die Anzahl der vorherigen Aufgaben) ändert.

Wenn Sie jetzt Ihre Tastatur verwenden, um eine Aufgabe in Ihrem Browser zu löschen, werden Sie sehen, dass unser gestrichelter Fokusumriss um die Überschrift über der Liste erscheint.

## Fertig!

Sie haben gerade eine React App von Grund auf neu erstellt! Herzlichen Glückwunsch! Die hier erlernten Fähigkeiten bieten eine großartige Grundlage, auf der Sie aufbauen können, wenn Sie weiter mit React arbeiten.

Die meiste Zeit können Sie effektiv zu einem React-Projekt beitragen, selbst wenn Sie nur sorgfältig über Komponenten und deren Zustand und Eigenschaften nachdenken. Denken Sie immer daran, den bestmöglichen HTML-Code zu schreiben.

`useRef()` und `useEffect()` sind ziemlich fortgeschrittene Funktionen, und Sie können stolz darauf sein, sie verwendet zu haben! Halten Sie Ausschau nach Gelegenheiten, sie weiter zu üben, denn dadurch können Sie integrative Erlebnisse für Benutzer schaffen. Denken Sie daran: Unsere App wäre ohne diese Funktionen für Tastaturbenutzer unzugänglich gewesen!

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, finden Sie eine fertige Version des Beispiel-React-App-Codes in unserem [todo-react Repository](https://github.com/mdn/todo-react). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-react/>.

Im allerletzten Artikel werden wir Ihnen eine Liste von React-Ressourcen vorstellen, die Sie nutzen können, um Ihr Lernen weiter zu vertiefen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
