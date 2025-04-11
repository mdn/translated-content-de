---
title: Barrierefreiheit in React
short-title: React Zugänglichkeit
slug: Learn_web_development/Core/Frameworks_libraries/React_accessibility
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/React_resources", "Learn_web_development/Core/Frameworks_libraries")}}

In unserem letzten Tutorial-Artikel konzentrieren wir uns (Wortspiel beabsichtigt) auf Barrierefreiheit, einschließlich des Fokus-Managements in React, was die Benutzerfreundlichkeit verbessern und Verwirrungen für sowohl reine Tastaturnutzer als auch Screenreader-Benutzer verringern kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, und der <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal-/Befehlszeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>Implementieren von Tastaturzugänglichkeit in React.</td>
    </tr>
  </tbody>
</table>

## Einbeziehung von Tastaturnutzern

Zu diesem Zeitpunkt haben wir alle Funktionen implementiert, die wir uns vorgenommen hatten. Benutzer können eine neue Aufgabe hinzufügen, Aufgaben aktivieren und deaktivieren, Aufgaben löschen oder Aufgabennamen bearbeiten. Außerdem können sie ihre Aufgabenliste nach allen, aktiven oder abgeschlossenen Aufgaben filtern.

Oder zumindest können sie all diese Dinge mit einer Maus erledigen. Leider sind diese Funktionen nicht sehr zugänglich für reine Tastaturnutzer. Lassen Sie uns dies jetzt erkunden.

## Erforschen des Tastaturbedienbarkeitsproblems

Beginnen Sie, indem Sie auf das Eingabefeld am oberen Rand unserer App klicken, als ob Sie eine neue Aufgabe hinzufügen möchten. Sie werden eine dicke, gestrichelte Umrandung um dieses Eingabefeld sehen. Diese Umrandung ist Ihr visueller Indikator dafür, dass der Browser derzeit auf dieses Element fokussiert ist. Drücken Sie die <kbd>Tab</kbd>-Taste, und Sie werden sehen, dass die Umrandung um die "Add"-Schaltfläche unter dem Eingabefeld erscheint. Dies zeigt Ihnen, dass sich der Fokus des Browsers verschoben hat.

Drücken Sie einige Male <kbd>Tab</kbd>, und Sie werden sehen, dass sich dieser gestrichelte Fokusindikator zwischen jeder der Filter-Schaltflächen bewegt. Machen Sie weiter, bis der Fokusindikator um die erste "Edit"-Schaltfläche ist. Drücken Sie <kbd>Enter</kbd>.

Die `<Todo />`-Komponente wechselt die Vorlagen, wie wir es entworfen haben, und Sie sehen ein Formular, das uns ermöglicht, den Namen der Aufgabe zu bearbeiten.

Aber wo ist unser Fokusindikator geblieben?

Wenn wir zwischen Vorlagen in unserer `<Todo />`-Komponente wechseln, entfernen wir die Elemente aus der alten Vorlage vollständig und ersetzen sie durch die Elemente aus der neuen Vorlage. Das bedeutet, dass das Element, auf das wir fokussiert waren, nicht mehr existiert, sodass es keinen visuellen Hinweis darauf gibt, wo der Fokus des Browsers ist. Dies könnte eine Vielzahl von Benutzern verwirren — insbesondere Benutzer, die auf die Tastatur angewiesen sind, oder Benutzer, die unterstützende Technologien verwenden.

Um die Erfahrung für Tastatur- und unterstützende Technologiebesucher zu verbessern, sollten wir den Fokus des Browsers selbst verwalten.

### Nebenbemerkung: eine Anmerkung zu unserem Fokusindikator

Wenn Sie mit der Maus auf die "All", "Active" oder "Completed" Filter-Schaltflächen klicken, werden Sie _keinen_ sichtbaren Fokusindikator sehen, aber Sie werden ihn sehen, wenn Sie mit der <kbd>Tab</kbd>-Taste auf Ihrer Tastatur zwischen ihnen wechseln. Keine Sorge — Ihr Code ist nicht kaputt!

Unsere CSS-Datei verwendet die [`:focus-visible`](/de/docs/Web/CSS/:focus-visible) Pseudoklasse, um benutzerdefiniertes Styling für den Fokusindikator bereitzustellen, und der Browser verwendet eine Reihe interner Regeln, um zu bestimmen, wann er ihn dem Benutzer anzeigt. Im Allgemeinen _wird_ der Browser bei Tastatureingaben einen Fokusindikator anzeigen und _könnte_ es bei Mauseingaben tun. `<button>`-Elemente zeigen _keinen_ Fokusindikator bei Mauseingaben, während `<input>`-Elemente dies _tun_.

Das Verhalten von `:focus-visible` ist selektiver als die ältere [`:focus`](/de/docs/Web/CSS/:focus) Pseudoklasse, mit der Sie möglicherweise vertrauter sind. `:focus` zeigt einen Fokusindikator in viel mehr Situationen, und Sie können es stattdessen oder in Kombination mit `:focus-visible` verwenden, wenn Sie dies bevorzugen.

## Fokussieren zwischen Vorlagen

Wenn ein Benutzer die `<Todo />`-Vorlage vom Ansehen zum Bearbeiten ändert, sollten wir auf das `<input>` fokussieren, das für die Umbenennung verwendet wird; wenn er von der Bearbeitung zurück zum Ansehen wechselt, sollten wir den Fokus zurück auf die "Edit"-Schaltfläche bewegen.

### Unsere Elemente anvisieren

Bis zu diesem Punkt haben wir JSX-Komponenten geschrieben und React den resultierenden DOM im Hintergrund erstellen lassen. Meistens müssen wir keine spezifischen Elemente im DOM anvisieren, da wir Reacts Status und Props verwenden können, um zu steuern, was gerendert wird. Um den Fokus zu verwalten, müssen wir jedoch in der Lage sein, spezifische DOM-Elemente anzusteuern.

Hier kommt der `useRef()`-Hook ins Spiel.

Ändern Sie zunächst die `import`-Anweisung am Anfang von `Todo.jsx`, sodass sie `useRef` enthält:

```jsx
import { useRef, useState } from "react";
```

`useRef()` erstellt ein Objekt mit einer einzigen Eigenschaft: `current`. Refs können alle Werte speichern, die wir möchten, und wir können diese Werte später nachschlagen. Wir können sogar Verweise auf DOM-Elemente speichern, was genau das ist, was wir hier tun werden.

Erstellen Sie als nächstes zwei neue Konstanten unter den `useState()`-Hooks in Ihrer `Todo()`-Funktion. Jede sollte ein Ref sein – eines für die "Edit"-Schaltfläche in der Ansichtsvorlage und eines für das Bearbeitungsfeld in der Bearbeitungsvorlage.

```jsx
const editFieldRef = useRef(null);
const editButtonRef = useRef(null);
```

Diese Refs haben einen Standardwert von `null`, um klarzustellen, dass sie leer sein werden, bis sie an ihre DOM-Elemente angehängt werden. Um sie an ihre Elemente zu binden, fügen wir jedem Elementattribut in JSX das spezielle `ref`-Attribut hinzu und setzen die Werte dieser Attribute auf die entsprechend benannten `ref`-Objekte.

Aktualisieren Sie das `<input>` in Ihrer Bearbeitungsvorlage, damit es wie folgt aussieht:

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

Aktualisieren Sie die "Edit"-Schaltfläche in Ihrer Ansichtsvorlage, damit sie wie folgt aussieht:

```jsx
<button
  type="button"
  className="btn"
  onClick={() => setEditing(true)}
  ref={editButtonRef}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

Dies wird unser `editFieldRef` und `editButtonRef` mit Verweisen auf die DOM-Elemente, an die sie angehängt sind, füllen, jedoch _nur_ nachdem React die Komponente gerendert hat. Testen Sie dies selbst: fügen Sie die folgende Zeile irgendwo im Rumpf Ihrer `Todo()`-Funktion hinzu, unterhalb der Stelle, an der `editButtonRef` initialisiert wird:

```jsx
console.log(editButtonRef.current);
```

Sie werden sehen, dass der Wert von `editButtonRef.current` `null` ist, wenn die Komponente zum ersten Mal gerendert wird, aber wenn Sie auf eine "Edit"-Schaltfläche klicken, wird es das `<button>`-Element in der Konsole protokollieren. Dies liegt daran, dass das Ref erst nach dem Rendern der Komponente gefüllt wird und das Klicken auf die "Edit"-Schaltfläche dazu führt, dass die Komponente erneut gerendert wird. Entfernen Sie dieses Protokoll, bevor Sie weitermachen.

> [!NOTE]
> Ihre Protokolle erscheinen 6 Mal, da wir 3 Instanzen von `<Todo />` in unserer App haben und React unsere Komponenten zweimal in der Entwicklung rendert.

Wir kommen der Sache näher! Um von unseren neu referenzierten Elementen zu profitieren, müssen wir einen weiteren React-Hook verwenden: `useEffect()`.

### Implementierung von `useEffect()`

[`useEffect()`](https://react.dev/reference/react/useEffect) ist so benannt, weil es alle Nebeneffekte ausführt, die wir zum Renderprozess hinzufügen möchten, aber nicht im Hauptkörper der Funktion ausgeführt werden können. `useEffect()` wird direkt nach dem Rendern einer Komponente ausgeführt, was bedeutet, dass die DOM-Elemente, die wir im vorherigen Abschnitt referenziert haben, uns zur Verfügung stehen.

Ändern Sie die Importanweisung von `Todo.jsx` erneut, um `useEffect` hinzuzufügen:

```jsx
import { useEffect, useRef, useState } from "react";
```

`useEffect()` nimmt eine Funktion als Argument an; diese Funktion wird _nach_ dem Rendern der Komponente ausgeführt. Um dies zu demonstrieren, setzen Sie den folgenden `useEffect()`-Aufruf direkt über die `return`-Anweisung im Körper von `Todo()`, und übergeben Sie eine Funktion, die die Worte "Nebenwirkung" in Ihre Konsole protokolliert:

```jsx
useEffect(() => {
  console.log("side effect");
});
```

Um den Unterschied zwischen dem Haupt-Renderprozess und dem Code zu veranschaulichen, der innerhalb `useEffect()` ausgeführt wird, fügen Sie ein weiteres Protokoll hinzu – setzen Sie dieses unter die vorherige Ergänzung:

```jsx
console.log("main render");
```

Öffnen Sie nun die App in Ihrem Browser. Sie sollten beide Meldungen in Ihrer Konsole sehen, wobei jede mehrmals wiederholt wird. Beachten Sie, dass "main render" zuerst protokolliert wurde und "side effect" als Zweites, obwohl das "side effect" Protokoll in dem Code zuerst erscheint.

```plain
main render                                     Todo.jsx
side effect                                     Todo.jsx
```

Nochmals: Die Protokolle sind in dieser Reihenfolge, weil der Code innerhalb von `useEffect()` nach dem Rendern der Komponente ausgeführt wird. Daran muss man sich erst gewöhnen, behalten Sie es einfach im Hinterkopf, während Sie fortfahren. Löschen Sie für jetzt `console.log("main render")` und wir gehen weiter zur Implementierung unseres Fokus-Managements.

### Fokussieren auf unser Bearbeitungsfeld

Jetzt, da wir wissen, dass unser `useEffect()`-Hook funktioniert, können wir den Fokus damit verwalten. Zur Erinnerung: Wir möchten uns auf das Bearbeitungsfeld fokussieren, wenn wir zur Bearbeitungsvorlage wechseln.

Aktualisieren Sie Ihren bestehenden `useEffect()`-Hook so, dass er wie folgt aussieht:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  }
}, [isEditing]);
```

Diese Änderungen bewirken, dass, wenn `isEditing` wahr ist, React den aktuellen Wert des `editFieldRef` liest und den Fokus des Browsers darauf bewegt. Wir übergeben auch ein Array an `useEffect()` als zweites Argument. Dieses Array ist eine Liste von Werten, von denen `useEffect()` abhängen soll. Mit diesen enthaltenen Werten wird `useEffect()` nur ausgeführt, wenn sich einer dieser Werte ändert. Wir möchten den Fokus nur ändern, wenn sich der Wert von `isEditing` ändert.

Probieren Sie es jetzt aus: Verwenden Sie die <kbd>Tab</kbd>-Taste, um zu einer der "Edit"-Schaltflächen zu navigieren, und drücken Sie dann <kbd>Enter</kbd>. Sie sollten sehen, dass die `<Todo />`-Komponente zu ihrer Bearbeitungsvorlage wechselt und der Fokusindikator des Browsers um das `<input>`-Element erscheint!

### Den Fokus zurück zur Edit-Schaltfläche bewegen

Auf den ersten Blick scheint es täuschend einfach zu sein, React dazu zu bringen, den Fokus zurück auf unsere "Edit"-Schaltfläche zu bewegen, wenn die Bearbeitung gespeichert oder abgebrochen wird. Sicherlich könnten wir eine Bedingung zu unserem `useEffect` hinzufügen, um sich auf die Edit-Schaltfläche zu fokussieren, wenn `isEditing` `false` ist? Probieren wir es jetzt aus — aktualisieren Sie Ihren `useEffect()`-Aufruf so:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  } else {
    editButtonRef.current.focus();
  }
}, [isEditing]);
```

Dies funktioniert einigermaßen. Wenn Sie Ihre Tastatur verwenden, um die "Edit"-Schaltfläche auszulösen (denken Sie daran: <kbd>Tab</kbd> darauf und drücken Sie <kbd>Enter</kbd>), werden Sie sehen, dass Ihr Fokus zwischen dem Bearbeitung-`<input>` und der "Edit"-Schaltfläche wechselt, während Sie eine Bearbeitung starten und beenden. Allerdings haben Sie möglicherweise ein neues Problem bemerkt — die "Edit"-Schaltfläche in der letzten `<Todo />`-Komponente wird beim Laden der Seite sofort fokussiert, bevor wir überhaupt mit der App interagieren!

Unser `useEffect()`-Hook verhält sich genau so, wie wir ihn entworfen haben: er wird ausgeführt, sobald die Komponente gerendert wird, sieht, dass `isEditing` `false` ist, und fokussiert die "Edit"-Schaltfläche. Es gibt drei Instanzen von `<Todo />`, und der Fokus wird der "Edit"-Schaltfläche derjenigen zugewiesen, die zuletzt rendert.

Wir müssen unseren Ansatz umgestalten, sodass der Fokus nur dann geändert wird, wenn `isEditing` sich von einem Wert zum anderen ändert.

## Robusteres Fokus-Management

Um unsere verfeinerten Kriterien zu erfüllen, müssen wir nicht nur den Wert von `isEditing` kennen, sondern auch _wann sich dieser Wert geändert hat_. Dazu müssen wir in der Lage sein, den vorherigen Wert der `isEditing`-Konstanten zu lesen. Unter Verwendung von Pseudocode sollte unsere Logik in etwa so aussehen:

```jsx
if (wasNotEditingBefore && isEditingNow) {
  focusOnEditField();
} else if (wasEditingBefore && isNotEditingNow) {
  focusOnEditButton();
}
```

Das React-Team hat [Möglichkeiten diskutiert, um den vorherigen Zustand einer Komponente zu erhalten](https://legacy.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state) und einen Beispiel-Hook bereitgestellt, den wir für diese Aufgabe verwenden können.

### Einführung von `usePrevious()`

Fügen Sie den folgenden Code in der Nähe des oberen Bereichs von `Todo.jsx`, über Ihrer `Todo()`-Funktion ein:

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

`usePrevious()` ist ein _benutzerdefinierter Hook_, der einen Wert über mehrere Renderings hinweg verfolgt. Es:

1. Verwendet den `useRef()`-Hook, um einen leeren `ref` zu erstellen.
2. Gibt den `current`-Wert des `ref`s an die aufrufende Komponente zurück.
3. Ruft `useEffect()` auf und aktualisiert den im `ref.current` gespeicherten Wert nach jedem Rendering der aufrufenden Komponente.

Das Verhalten von `useEffect()` ist entscheidend für diese Funktionalität. Da `ref.current` innerhalb eines `useEffect()`-Aufrufs aktualisiert wird, ist es immer einen Schritt hinter dem Wert, der sich im Haupt-Renderzyklus der Komponente befindet — daher der Name `usePrevious()`.

### Verwendung von `usePrevious()`

Jetzt können wir eine `wasEditing`-Konstante definieren, die den vorherigen Wert von `isEditing` verfolgt; dies wird erreicht, indem `usePrevious` mit `isEditing` als Argument aufgerufen wird. Fügen Sie die folgende Zeile in `Todo()`, unter den `useRef`-Zeilen hinzu:

```jsx
const wasEditing = usePrevious(isEditing);
```

Sie können sehen, wie sich `usePrevious()` verhält, indem Sie ein Konsolenprotokoll unter dieser Zeile hinzufügen:

```jsx
console.log(wasEditing);
```

In diesem Protokoll wird der `current`-Wert von `wasEditing` immer der vorherige Wert von `isEditing` sein. Klicken Sie ein paar Mal auf die "Edit"- und "Cancel"-Schaltfläche, um zu sehen, wie es sich ändert, und löschen Sie dieses Protokoll, wenn Sie bereit sind, weiterzugehen.

Mit dieser `wasEditing`-Konstante können wir unseren `useEffect()`-Hook aktualisieren, um den Pseudocode umzusetzen, den wir zuvor besprochen haben:

```jsx
useEffect(() => {
  if (!wasEditing && isEditing) {
    editFieldRef.current.focus();
  } else if (wasEditing && !isEditing) {
    editButtonRef.current.focus();
  }
}, [wasEditing, isEditing]);
```

Beachten Sie, dass die Logik von `useEffect()` nun von `wasEditing` abhängt, daher geben wir es in das Abhängigkeits-Array ein.

Versuchen Sie, Ihre Tastatur zu verwenden, um die "Edit"- und "Cancel"-Schaltflächen in der `<Todo />`-Komponente zu aktivieren; Sie werden sehen, dass sich der Fokusindikator des Browsers entsprechend bewegt, ohne das Problem, das wir zu Beginn dieses Abschnitts besprochen haben.

## Fokussieren, wenn der Benutzer eine Aufgabe löscht

Es gibt noch eine letzte Lücke in der Benutzererfahrung mit der Tastatur: Wenn ein Benutzer eine Aufgabe aus der Liste löscht, verschwindet der Fokus. Wir werden ein ähnliches Muster wie bei unseren vorherigen Änderungen befolgen: Wir erstellen ein neues Ref und nutzen unseren `usePrevious()`-Hook, damit wir uns auf die Listenüberschrift fokussieren können, wann immer ein Benutzer eine Aufgabe löscht.

### Warum die Listenüberschrift?

Manchmal ist der Ort, an den wir unseren Fokus schicken möchten, offensichtlich: Als wir unsere `<Todo />`-Vorlagen umgeschaltet haben, hatten wir einen Ausgangspunkt, zu dem wir "zurückkehren" konnten — die "Edit"-Schaltfläche. In diesem Fall jedoch, da wir Elemente vollständig aus dem DOM entfernen, haben wir keinen Ort, zu dem wir zurückkehren können. Die nächste beste Option ist ein intuitiver Standort in der Nähe. Die Listenüberschrift ist unsere beste Wahl, weil sie sich in der Nähe des Listenelements befindet, das der Benutzer löschen wird, und der Fokus darauf wird dem Benutzer mitteilen, wie viele Aufgaben noch übrig sind.

### Erstellen unseres Refs

Importieren Sie die `useRef()` und `useEffect()` Hooks in `App.jsx` — Sie werden beide darunter benötigen:

```jsx
import { useState, useRef, useEffect } from "react";
```

Erklären Sie als Nächstes ein neues Ref innerhalb der `App()`-Funktion, direkt über der `return`-Anweisung:

```jsx
const listHeadingRef = useRef(null);
```

### Vorbereitung der Überschrift

Überschriftselemente wie unser `<h2>` sind normalerweise nicht fokussierbar. Das stellt kein Problem dar — wir können jedes Element programmgesteuert fokussierbar machen, indem wir das Attribut [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) hinzufügen. Das bedeutet _nur mit JavaScript fokussierbar_. Sie können nicht die <kbd>Tab</kbd>-Taste drücken, um ein Element mit einem `tabindex` von `-1` zu fokussieren, wie Sie es mit einem [`<button>`](/de/docs/Web/HTML/Reference/Elements/button) oder [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) Element tun könnten (dies kann mit `tabindex="0"` erfolgen, was aber in diesem Fall nicht angebracht ist).

Fügen wir das `tabindex`-Attribut — in JSX als `tabIndex` geschrieben — der Überschrift über unserer Aufgabenliste hinzu, zusammen mit unserem `listHeadingRef`:

```jsx
<h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
  {headingText}
</h2>
```

> [!NOTE]
> Das `tabindex`-Attribut ist ausgezeichnet für spezielle Barrierefreiheitsszenarien, aber Sie sollten **mit größter Sorgfalt** darauf achten, es nicht übermäßig zu verwenden. Wenden Sie ein `tabindex`-Attribut nur dann auf ein Element an, wenn Sie sicher sind, dass es Ihrem Benutzer in irgendeiner Weise zugute kommt, es fokussierbar zu machen. In den meisten Fällen sollten Sie Elemente verwenden, die natürlicherweise den Fokus erhalten können, wie z. B. Buttons, Anker und Eingabefelder. Eine unverantwortliche Nutzung von `tabindex` könnte sich nachteilig auf Benutzer auswirken, die auf die Tastatur und Screenreader angewiesen sind!

### Erhalten des vorherigen Zustands

Wir möchten uns nur dann auf das mit unserem Ref assoziierte Element fokussieren (über das `ref`-Attribut), wenn unser Benutzer eine Aufgabe aus seiner Liste löscht. Dazu benötigen wir den `usePrevious()`-Hook, den wir zuvor verwendet haben. Fügen Sie ihn oben in Ihre `App.jsx`-Datei ein, direkt unter den Imports:

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

Fügen Sie nun die folgende Zeile oberhalb der `return`-Anweisung innerhalb der `App()`-Funktion hinzu:

```jsx
const prevTaskLength = usePrevious(tasks.length);
```

Hier rufen wir `usePrevious()` auf, um die vorherige Länge des Tasks-Arrays zu verfolgen.

> [!NOTE]
> Da wir `usePrevious()` jetzt in zwei Dateien verwenden, könnte es effizienter sein, die Funktion `usePrevious()` in eine eigene Datei zu verschieben, sie aus dieser Datei zu exportieren und dort zu importieren, wo Sie sie benötigen. Versuchen Sie dies als Übung, sobald Sie das Ende erreicht haben.

### Verwendung von `useEffect()`, um unsere Fokussteuerung durchzuführen

Jetzt, da wir wissen, wie viele Aufgaben wir zuvor hatten, können wir einen `useEffect()`-Hook einrichten, der ausgeführt wird, wenn sich die Anzahl unserer Aufgaben ändert, und die Überschrift fokussieren, wenn die Anzahl unserer Aufgaben jetzt geringer ist als zuvor — das heißt, wir haben eine Aufgabe gelöscht!

Fügen Sie das Folgende in den Rumpf Ihrer `App()`-Funktion ein, direkt unter Ihren vorherigen Ergänzungen:

```jsx
useEffect(() => {
  if (tasks.length < prevTaskLength) {
    listHeadingRef.current.focus();
  }
}, [tasks.length, prevTaskLength]);
```

Wir versuchen nur dann, uns auf unsere Listenüberschrift zu fokussieren, wenn wir jetzt weniger Aufgaben haben als zuvor. Die Abhängigkeiten, die in diesen Hook übergeben werden, stellen sicher, dass er nur noch einmal versucht wird, neu ausgeführt zu werden, wenn sich einer der beiden Werte (die Anzahl der aktuellen Aufgaben oder die Anzahl der vorherigen Aufgaben) ändert.

Jetzt, wenn Sie Ihre Tastatur verwenden, um eine Aufgabe in Ihrem Browser zu löschen, werden Sie sehen, dass unser gestrichelter Fokusumriss um die Überschrift über der Liste erscheint.

## Fertig!

Sie haben gerade eine React-App von Grund auf aufgebaut! Herzlichen Glückwunsch! Die hier erlernten Fähigkeiten werden eine großartige Grundlage sein, auf der Sie aufbauen können, während Sie weiter mit React arbeiten.

Die meiste Zeit können Sie ein effektiver Mitwirkender eines React-Projekts sein, selbst wenn Sie nur sorgfältig über Komponenten und deren Zustand und Props nachdenken. Denken Sie daran, immer das beste HTML zu schreiben, das Sie können.

`useRef()` und `useEffect()` sind etwas fortgeschrittene Funktionen, und Sie sollten stolz darauf sein, sie zu verwenden! Achten Sie auf Möglichkeiten, sie mehr zu üben, denn das wird Ihnen ermöglichen, inklusive Erlebnisse für Benutzer zu schaffen. Denken Sie daran: Ohne sie wäre unsere App für Tastaturnutzer unzugänglich gewesen!

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispiel-React-App-Codes in unserem [todo-react Repository](https://github.com/mdn/todo-react). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-react/>.

Im allerletzten Artikel werden wir Ihnen eine Liste von React-Ressourcen präsentieren, mit denen Sie Ihre Lernreise fortsetzen können.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/React_resources", "Learn_web_development/Core/Frameworks_libraries")}}
