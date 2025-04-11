---
title: Barrierefreiheit in React
short-title: React Barrierefreiheit
slug: Learn_web_development/Core/Frameworks_libraries/React_accessibility
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/React_resources", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Tutorial-Artikel werden wir uns auf Barrierefreiheit konzentrieren, einschließlich der Fokusverwaltung in React, die die Benutzerfreundlichkeit verbessern und Verwirrung sowohl für Nutzer, die nur die Tastatur verwenden, als auch für Nutzer von Bildschirmleseprogrammen verringern kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, sowie mit dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/der Befehlszeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>Tastaturzugänglichkeit in React implementieren.</td>
    </tr>
  </tbody>
</table>

## Einbeziehen von Tastaturnutzern

An diesem Punkt haben wir alle Funktionen implementiert, die wir uns vorgenommen hatten. Benutzer können eine neue Aufgabe hinzufügen, Aufgaben abhaken und abhaken, Aufgaben löschen oder Aufgabennamen bearbeiten. Außerdem können sie ihre Aufgabenliste nach allen, aktiven oder erledigten Aufgaben filtern.

Oder zumindest können sie all dies mit einer Maus tun. Leider sind diese Funktionen für Tastaturnutzer nicht sehr zugänglich. Lassen Sie uns das nun erkunden.

## Das Problem der Tastaturnutzbarkeit erkunden

Beginnen Sie, indem Sie auf das Eingabefeld oben in unserer App klicken, als ob Sie eine neue Aufgabe hinzufügen wollten. Sie sehen einen dicken, gestrichelten Umriss um dieses Eingabefeld. Dieser Umriss ist Ihr visueller Hinweis darauf, dass der Browser derzeit auf dieses Element fokussiert ist. Drücken Sie die <kbd>Tab</kbd>-Taste, und Sie sehen den Umriss um die Schaltfläche „Add“ unterhalb des Eingabefelds erscheinen. Dies zeigt Ihnen, dass der Fokus des Browsers sich verschoben hat.

Drücken Sie noch ein paar Mal <kbd>Tab</kbd>, und Sie werden sehen, wie sich dieser gestrichelte Fokusanzeiger zwischen den einzelnen Filtertasten bewegt. Fahren Sie fort, bis der Fokusanzeiger um den ersten „Edit“-Button erscheint. Drücken Sie <kbd>Enter</kbd>.

Die `<Todo />`-Komponente wechselt wie von uns gestaltet die Vorlagen, und Sie sehen ein Formular, das uns erlaubt, den Namen der Aufgabe zu bearbeiten.

Aber wohin ist unser Fokusanzeiger verschwunden?

Wenn wir zwischen Vorlagen in unserer `<Todo />`-Komponente wechseln, entfernen wir die Elemente der alten Vorlage vollständig und ersetzen sie durch die Elemente der neuen Vorlage. Das bedeutet, dass das Element, auf das wir fokussiert waren, nicht mehr existiert, sodass es keinen visuellen Hinweis darauf gibt, wo der Fokus des Browsers ist. Dies könnte eine Vielzahl von Benutzern verwirren - insbesondere Benutzer, die auf die Tastatur angewiesen sind, oder Benutzer, die unterstützende Technologien verwenden.

Um das Erlebnis für Tastaturnutzer und Nutzer von Hilfstechnologien zu verbessern, sollten wir den Fokus des Browsers selbst verwalten.

### Hinweis: ein Wort zu unserem Fokusanzeiger

Wenn Sie die "All", "Active" oder "Completed" Filtertasten mit Ihrer Maus anklicken, wird _kein_ sichtbarer Fokusanzeiger angezeigt, aber Sie werden ihn sehen, wenn Sie mit der <kbd>Tab</kbd>-Taste zwischen ihnen bewegen. Keine Sorge – Ihr Code ist nicht fehlerhaft!

Unsere CSS-Datei verwendet die Pseudo-Klasse [`:focus-visible`](/de/docs/Web/CSS/:focus-visible), um eine benutzerdefinierte Gestaltung des Fokusanzeigers bereitzustellen, und der Browser verwendet eine Reihe interner Regeln, um zu bestimmen, wann er dem Benutzer angezeigt werden soll. Im Allgemeinen wird der Browser einen Fokusanzeiger als Reaktion auf Tastatureingaben _anzeigen_, und er _könnte_ ihn als Reaktion auf Mauseingaben anzeigen. `<button>`-Elemente _zeigen_ keinen Fokusanzeiger als Reaktion auf Mauseingaben, während `<input>`-Elemente dies _tun_.

Das Verhalten von `:focus-visible` ist selektiver als die ältere Pseudo-Klasse [`:focus`](/de/docs/Web/CSS/:focus), mit der Sie möglicherweise vertrauter sind. `:focus` zeigt einen Fokusanzeiger in viel mehr Situationen an, und Sie können es anstelle von oder in Kombination mit `:focus-visible` verwenden, wenn Sie dies bevorzugen.

## Fokussieren zwischen Vorlagen

Wenn ein Benutzer die `<Todo />`-Vorlage vom Anzeigen zum Bearbeiten ändert, sollten wir den Fokus auf das `<input>`-Feld setzen, das zur Umbenennung dient; wenn er von Bearbeiten zum Anzeigen zurückwechselt, sollten wir den Fokus zurück auf die "Edit"-Taste verschieben.

### Ausrichten unserer Elemente

Bis zu diesem Punkt haben wir JSX-Komponenten geschrieben und React das resultierende DOM im Hintergrund aufbauen lassen. Die meiste Zeit müssen wir keine spezifischen Elemente im DOM ansprechen, da wir den Zustand von React und seine Eigenschaften verwenden können, um zu steuern, was gerendert wird. Um den Fokus zu verwalten, müssen wir jedoch in der Lage sein, spezifische DOM-Elemente anzusprechen.

Hier kommt der `useRef()`-Hook ins Spiel.

Ändern Sie zuerst die `import`-Anweisung am Anfang von `Todo.jsx`, sodass `useRef` einbezogen wird:

```jsx
import { useRef, useState } from "react";
```

`useRef()` erstellt ein Objekt mit einer einzigen Eigenschaft: `current`. Refs können beliebige Werte speichern, die wir wollen, und wir können diese Werte später nachschlagen. Wir können sogar Referenzen zu DOM-Elementen speichern, was genau das ist, was wir hier tun werden.

Erstellen Sie als Nächstes zwei neue Konstanten unter den `useState()`-Hooks in Ihrer `Todo()`-Funktion. Jede davon sollte ein Ref sein – eine für die "Edit"-Taste in der Ansichts-Vorlage und eine für das Bearbeitungsfeld in der Bearbeitungsvorlage.

```jsx
const editFieldRef = useRef(null);
const editButtonRef = useRef(null);
```

Diese Refs haben einen Standardwert von `null`, um klarzustellen, dass sie leer sind, bis sie an ihre DOM-Elemente angehängt sind. Um sie an ihre Elemente anzuhängen, fügen wir jedem Element im JSX das spezielle `ref`-Attribut hinzu und setzen die Werte dieser Attribute auf die entsprechend benannten `ref`-Objekte.

Aktualisieren Sie das `<input>` in Ihrer Bearbeitungsvorlage, sodass es wie folgt aussieht:

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

Aktualisieren Sie die "Edit"-Taste in Ihrer Ansichtsvorlage, sodass sie wie folgt aussieht:

```jsx
<button
  type="button"
  className="btn"
  onClick={() => setEditing(true)}
  ref={editButtonRef}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

Indem wir dies tun, füllen wir unser `editFieldRef` und `editButtonRef` mit Referenzen zu den DOM-Elementen, an die sie angehängt sind, jedoch _nur_ nachdem React die Komponente gerendert hat. Testen Sie das selbst: Fügen Sie die folgende Zeile irgendwo im Körper Ihrer `Todo()`-Funktion hinzu, unterhalb der Stelle, wo `editButtonRef` initialisiert wird:

```jsx
console.log(editButtonRef.current);
```

Sie werden sehen, dass der Wert von `editButtonRef.current` `null` ist, wenn die Komponente zum ersten Mal gerendert wird, aber wenn Sie auf eine „Edit“-Taste klicken, wird das `<button>`-Element in die Konsole geloggt. Das liegt daran, dass das Ref erst nach dem Rendern der Komponente befüllt wird und das Klicken auf die „Edit“-Taste die Komponente neu rendert. Stellen Sie sicher, dass Sie dieses Log löschen, bevor Sie fortfahren.

> [!NOTE]
> Ihre Logs werden 6 Mal angezeigt, da wir 3 Instanzen von `<Todo />` in unserer App haben und React unsere Komponenten im Entwicklermodus zweimal rendert.

Wir nähern uns der Sache! Um unsere neu referenzierten Elemente zu nutzen, müssen wir einen anderen React-Hook verwenden: `useEffect()`.

### Implementieren von `useEffect()`

[`useEffect()`](https://react.dev/reference/react/useEffect) ist so benannt, weil es alle Seiteneffekte ausführt, die wir dem Renderprozess hinzufügen möchten, aber die nicht innerhalb des Hauptfunktionskörpers ausgeführt werden können. `useEffect()` läuft direkt nachdem eine Komponente gerendert wurde, was bedeutet, dass die DOM-Elemente, auf die wir im vorherigen Abschnitt verwiesen haben, für uns verfügbar sind.

Ändern Sie die Importanweisung von `Todo.jsx` erneut, um `useEffect` hinzuzufügen:

```jsx
import { useEffect, useRef, useState } from "react";
```

`useEffect()` nimmt eine Funktion als Argument; diese Funktion wird _nachdem_ die Komponente gerendert wurde, ausgeführt. Um dies zu demonstrieren, setzen Sie den folgenden `useEffect()`-Aufruf direkt oberhalb der `return`-Anweisung im Körper von `Todo()`, und übergeben Sie eine Funktion, die die Wörter „side effect“ in Ihre Konsole loggt:

```jsx
useEffect(() => {
  console.log("side effect");
});
```

Um den Unterschied zwischen dem Haupt-Rendervorgang und dem Code, der innerhalb von `useEffect()` ausgeführt wird, zu veranschaulichen, fügen Sie ein weiteres Log hinzu – setzen Sie dies unter die vorherige Hinzufügung:

```jsx
console.log("main render");
```

Öffnen Sie die App jetzt in Ihrem Browser. Sie sollten beide Nachrichten in Ihrer Konsole sehen, wobei jede mehrfach wiederholt wird. Beachten Sie, wie „main render“ zuerst geloggt wird und „side effect“ als zweites, obwohl das „side effect“-Log zuerst im Code erscheint.

```plain
main render                                     Todo.jsx
side effect                                     Todo.jsx
```

Wieder werden die Logs in dieser Reihenfolge ausgeführt, weil der Code innerhalb von `useEffect()` _nach_ dem Rendern der Komponente ausgeführt wird. Das erfordert etwas Eingewöhnung, merken Sie es sich einfach für die Zukunft. Für jetzt, löschen Sie `console.log("main render")` und wir kommen zur Implementierung unserer Fokusverwaltung.

### Den Fokus auf unser Bearbeitungsfeld setzen

Jetzt, wo wir wissen, dass unser `useEffect()`-Hook funktioniert, können wir den Fokus damit verwalten. Zur Erinnerung: Wir möchten den Fokus auf das Bearbeitungsfeld setzen, wenn wir zur Bearbeitungsvorlage wechseln.

Aktualisieren Sie Ihren bestehenden `useEffect()`-Hook, sodass er folgendermaßen aussieht:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  }
}, [isEditing]);
```

Diese Änderungen sorgen dafür, dass, wenn `isEditing` wahr ist, React den aktuellen Wert von `editFieldRef` liest und den Browserfokus darauf verschiebt. Wir übergeben `useEffect()` auch ein Array als zweites Argument. Dieses Array ist eine Liste der Werte, auf die `useEffect()` angewiesen sein soll. Mit diesen Werten läuft `useEffect()` nur, wenn sich einer dieser Werte ändert. Wir wollen den Fokus nur ändern, wenn sich der Wert von `isEditing` ändert.

Probieren Sie es aus: Verwenden Sie die <kbd>Tab</kbd>-Taste, um zu einer der „Edit“-Schaltflächen zu navigieren, und drücken Sie dann <kbd>Enter</kbd>. Sie sollten sehen, wie sich die `<Todo />`-Komponente zu ihrer Bearbeitungsvorlage ändert, und der Fokusanzeiger des Browsers sollte um das `<input>`-Element erscheinen!

### Den Fokus zurück auf die „Edit“-Taste verschieben

Auf den ersten Blick scheint es trügerisch einfach, React dazu zu bringen, den Fokus zurück auf unsere „Edit“-Taste zu verschieben, wenn die Bearbeitung gespeichert oder abgebrochen wird. Sicherlich könnten wir eine Bedingung zu unserem `useEffect` hinzufügen, um den Fokus auf die Edit-Schaltfläche zu setzen, wenn `isEditing` `false` ist? Probieren wir es jetzt aus – aktualisieren Sie Ihren `useEffect()`-Aufruf wie folgt:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  } else {
    editButtonRef.current.focus();
  }
}, [isEditing]);
```

Das funktioniert irgendwie. Wenn Sie Ihre Tastatur verwenden, um die "Edit"-Taste zu aktivieren (denken Sie daran: <kbd>Tab</kbd> darauf und drücken Sie <kbd>Enter</kbd>), werden Sie sehen, dass sich Ihr Fokus zwischen dem Bearbeiten-`<input>` und der "Edit"-Schaltfläche verschiebt, wenn Sie eine Bearbeitung starten und beenden. Möglicherweise haben Sie jedoch ein neues Problem bemerkt — die "Edit"-Schaltfläche in der letzten `<Todo />`-Komponente wird sofort beim Laden der Seite fokussiert, bevor wir überhaupt mit der App interagieren!

Unser `useEffect()`-Hook verhält sich genau so, wie wir es entworfen haben: Er läuft, sobald die Komponente gerendert wird, sieht, dass `isEditing` `false` ist, und fokussiert die "Edit"-Schaltfläche. Es gibt drei Instanzen von `<Todo />`, und der Fokus wird der „Edit“-Taste desjenigen gegeben, das zuletzt rendert.

Wir müssen unseren Ansatz so umgestalten, dass der Fokus nur dann wechselt, wenn `isEditing` sich von einem Wert auf einen anderen ändert.

## Robustere Fokusverwaltung

Um unseren verfeinerten Kriterien zu entsprechen, müssen wir nicht nur den Wert von `isEditing` kennen, sondern auch _wann_ sich dieser Wert geändert hat. Dazu müssen wir in der Lage sein, den vorherigen Wert der `isEditing`-Konstante zu lesen. Mittels Pseudocode sollte unsere Logik etwa so aussehen:

```jsx
if (wasNotEditingBefore && isEditingNow) {
  focusOnEditField();
} else if (wasEditingBefore && isNotEditingNow) {
  focusOnEditButton();
}
```

Das React-Team hat [Wege zur Erlangung des vorherigen Zustands einer Komponente](https://legacy.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state) diskutiert und ein Beispiel-Hook bereitgestellt, mit dem wir die Aufgabe erledigen können.

### Einführung von `usePrevious()`

Fügen Sie den folgenden Code in der Nähe der oberen Zeile von `Todo.jsx` ein, oberhalb Ihrer `Todo()`-Funktion.

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

`usePrevious()` ist ein _benutzerdefinierter Hook_, der einen Wert über Renderzyklen hinweg verfolgt. Es:

1. Verwendet den `useRef()`-Hook, um ein leeres `Ref` zu erstellen.
2. Gibt den `current`-Wert des `Ref`'s an die aufrufende Komponente zurück.
3. Ruft `useEffect()` auf und aktualisiert den im `ref.current` gespeicherten Wert nach jedem Rendern der aufrufenden Komponente.

Das Verhalten von `useEffect()` ist der Schlüssel zu dieser Funktionalität. Da `ref.current` innerhalb eines `useEffect()`-Aufrufs aktualisiert wird, ist es immer einen Schritt hinter dem Wert, der sich im Haupt-Rendervorgang der Komponente befindet – daher der Name `usePrevious()`.

### Verwendung von `usePrevious()`

Nun können wir eine `wasEditing`-Konstante definieren, um den vorherigen Wert von `isEditing` zu verfolgen; dies wird erreicht, indem `usePrevious` mit `isEditing` als Argument aufgerufen wird. Fügen Sie das folgende innerhalb von `Todo()` hinzu, unterhalb der `useRef`-Zeilen:

```jsx
const wasEditing = usePrevious(isEditing);
```

Sie können sehen, wie `usePrevious()` funktioniert, indem Sie ein Konsolen-Log unterhalb dieser Zeile hinzufügen:

```jsx
console.log(wasEditing);
```

In diesem Log wird der `current`-Wert von `wasEditing` immer der vorherige Wert von `isEditing` sein. Klicken Sie einige Male auf die „Edit“- und „Cancel“-Tasten, um zu sehen, wie es sich ändert, und löschen Sie dann dieses Log, wenn Sie bereit sind, weiterzumachen.

Mit dieser `wasEditing`-Konstante können wir unseren `useEffect()`-Hook aktualisieren, um den zuvor besprochenen Pseudocode zu implementieren:

```jsx
useEffect(() => {
  if (!wasEditing && isEditing) {
    editFieldRef.current.focus();
  } else if (wasEditing && !isEditing) {
    editButtonRef.current.focus();
  }
}, [wasEditing, isEditing]);
```

Beachten Sie, dass die Logik von `useEffect()` jetzt von `wasEditing` abhängt, also geben wir es in das Array der Abhängigkeiten ein.

Versuchen Sie, mit Ihrer Tastatur die "Edit"- und "Cancel"-Tasten in der `<Todo />`-Komponente zu aktivieren; Sie werden sehen, dass der Fokusanzeiger des Browsers sich angemessen bewegt, ohne das Problem, das wir zu Beginn dieses Abschnitts besprochen haben.

## Fokus setzen, wenn der Benutzer eine Aufgabe löscht

Es gibt eine letzte Lücke in der Tastaturerfahrung: Wenn ein Benutzer eine Aufgabe aus der Liste löscht, verschwindet der Fokus. Wir werden einem ähnlichen Muster wie bei unseren vorherigen Änderungen folgen: Wir werden einen neuen Ref erstellen und unseren `usePrevious()`-Hook nutzen, damit wir uns auf die Überschrift der Liste konzentrieren können, wann immer ein Benutzer eine Aufgabe löscht.

### Warum die Listenüberschrift?

Manchmal ist der Ort, auf den wir unseren Fokus setzen wollen, offensichtlich: Wenn wir unsere `<Todo />`-Vorlagen umschalten, hatten wir einen Ausgangspunkt, zu dem wir „zurückgehen“ können – die "Edit"-Taste. In diesem Fall jedoch, da wir Elemente vollständig aus dem DOM entfernen, haben wir keinen Rückkehrort. Das nächste Beste ist ein intuitiver Ort in der Nähe. Die Listenüberschrift ist unsere beste Wahl, weil sie nahe am Listenelement liegt, das der Benutzer löschen wird, und der Fokus darauf dem Benutzer mitteilt, wie viele Aufgaben übrig sind.

### Erstellen unseres Refs

Importieren Sie die `useRef()`- und `useEffect()`-Hooks in `App.jsx` – Sie benötigen sie beide unten:

```jsx
import { useState, useRef, useEffect } from "react";
```

Erklären Sie als nächstes einen neuen Ref innerhalb der `App()`-Funktion, direkt oberhalb der `return`-Anweisung:

```jsx
const listHeadingRef = useRef(null);
```

### Vorbereiten der Überschrift

Überschriftselemente wie unser `<h2>` sind normalerweise nicht fokussierbar. Das ist kein Problem – wir können jedes Element programmatisch fokussierbar machen, indem wir das Attribut [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) hinzufügen. Dies bedeutet _nur mit JavaScript fokussierbar_. Sie können nicht <kbd>Tab</kbd> drücken, um ein Element mit einem tabindex von `-1` zu fokussieren, auf die gleiche Weise, wie Sie dies mit einem [`<button>`](/de/docs/Web/HTML/Reference/Elements/button) oder [`<a>`](/de/docs/Web/HTML/Reference/Elements/a)-Element tun könnten (dies kann mit `tabindex="0"` gemacht werden, was in diesem Fall jedoch nicht angemessen ist).

Fügen wir das `tabindex`-Attribut hinzu — in JSX als `tabIndex` geschrieben — zur Überschrift über unserer Aufgabenliste, zusammen mit unserem `listHeadingRef`:

```jsx
<h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
  {headingText}
</h2>
```

> [!NOTE]
> Das `tabindex`-Attribut ist hervorragend für Zugänglichkeitsrandfälle geeignet, aber Sie sollten sehr darauf achten, es nicht übermäßig zu nutzen. Setzen Sie ein `tabindex`-Attribut nur auf ein Element, wenn Sie sicher sind, dass es Ihren Benutzern irgendwie zugutekommt. In den meisten Fällen sollten Sie Elemente verwenden, die auf natürliche Weise fokussierbar sind, wie Schaltflächen, Anker und Eingaben. Eine unverantwortliche Verwendung von `tabindex` könnte tiefgreifende negative Auswirkungen auf Tastaturbenutzer und Benutzer von Bildschirmlesegeräten haben!

### Den vorherigen Zustand abrufen

Wir möchten uns nur auf das mit unserem Ref verknüpfte Element konzentrieren (über das `ref`-Attribut), wenn unser Benutzer eine Aufgabe aus seiner Liste löscht. Das erfordert den `usePrevious()`-Hook, den wir zuvor verwendet haben. Fügen Sie ihn oben in Ihrer `App.jsx`-Datei hinzu, direkt unter den Imports:

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

Fügen Sie jetzt Folgendes hinzu, oberhalb der `return`-Anweisung innerhalb der `App()`-Funktion:

```jsx
const prevTaskLength = usePrevious(tasks.length);
```

Hier rufen wir `usePrevious()` auf, um die vorherige Länge des Aufgabenarrays zu verfolgen.

> [!NOTE]
> Da wir `usePrevious()` jetzt in zwei Dateien verwenden, könnte es effizienter sein, die `usePrevious()`-Funktion in eine eigene Datei zu verschieben, sie aus dieser Datei zu exportieren und sie an den Stellen zu importieren, an denen Sie sie benötigen. Versuchen Sie, dies als Übung zu tun, wenn Sie am Ende angekommen sind.

### Verwendung von `useEffect()` zur Steuerung des Fokus auf die Überschrift

Jetzt, da wir gespeichert haben, wie viele Aufgaben wir zuvor hatten, können wir einen `useEffect()`-Hook einrichten, der läuft, wenn sich die Anzahl unserer Aufgaben ändert, und der die Überschrift fokussiert, wenn die Anzahl der aktuellen Aufgaben kleiner ist als zuvor – das heißt, wir haben eine Aufgabe gelöscht!

Fügen Sie das folgende in den Körper Ihrer `App()`-Funktion ein, direkt unter Ihren vorherigen Ergänzungen:

```jsx
useEffect(() => {
  if (tasks.length < prevTaskLength) {
    listHeadingRef.current.focus();
  }
}, [tasks.length, prevTaskLength]);
```

Wir versuchen nur, uns auf unsere Listenüberschrift zu fokussieren, wenn wir jetzt weniger Aufgaben haben als zuvor. Die übergebenen Abhängigkeiten zu diesem Hook sorgen dafür, dass er nur versucht, erneut zu laufen, wenn sich einer dieser Werte (die Anzahl der aktuellen Aufgaben oder die Anzahl der vorherigen Aufgaben) ändert.

Jetzt, wenn Sie Ihre Tastatur verwenden, um eine Aufgabe in Ihrem Browser zu löschen, sehen Sie unseren gestrichelten Fokusanzeiger um die Überschrift über der Liste erscheinen.

## Fertig!

Sie haben gerade eine React-App von Grund auf gebaut! Herzlichen Glückwunsch! Die Fähigkeiten, die Sie hier gelernt haben, werden eine großartige Grundlage für Ihre weitere Arbeit mit React sein.

Meist können Sie einen effektiven Beitrag zu einem React-Projekt leisten, selbst wenn Sie einfach nur sorgfältig über Komponenten und deren Zustände und Eigenschaften nachdenken. Denken Sie immer daran, das beste HTML zu schreiben, das Sie können.

`useRef()` und `useEffect()` sind relativ fortgeschrittene Funktionen, und Sie können stolz auf sich sein, dass Sie sie verwendet haben! Halten Sie Ausschau nach Möglichkeiten, sie weiter zu üben, da dies Ihnen ermöglichen wird, inklusive Erfahrungen für Benutzer zu schaffen. Denken Sie daran: Ohne sie wäre unsere App für Tastaturnutzer nicht zugänglich gewesen!

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, finden Sie eine fertige Version des Beispiel-React-App-Codes in unserem [todo-react Repository](https://github.com/mdn/todo-react). Für eine live laufende Version siehe <https://mdn.github.io/todo-react/>.

Im allerletzten Artikel präsentieren wir Ihnen eine Liste von React-Ressourcen, die Sie für Ihre weiteren Lernziele nutzen können.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/React_resources", "Learn_web_development/Core/Frameworks_libraries")}}
