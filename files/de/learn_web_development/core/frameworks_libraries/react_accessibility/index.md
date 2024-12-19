---
title: Barrierefreiheit in React
slug: Learn_web_development/Core/Frameworks_libraries/React_accessibility
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/React_resources", "Learn_web_development/Core/Frameworks_libraries")}}

In unserem letzten Tutorial-Artikel werden wir uns auf die Barrierefreiheit konzentrieren, einschließlich der Fokussierung in React, die die Benutzerfreundlichkeit verbessern und Verwirrung sowohl für reine Tastaturnutzer als auch für Bildschirmleser-Nutzer verringern kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie der <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal-/Kommandozeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>Implementierung von Tastaturzugänglichkeit in React.</td>
    </tr>
  </tbody>
</table>

## Einbeziehung von Tastaturbenutzern

An diesem Punkt haben wir alle Funktionen implementiert, die wir umsetzen wollten. Benutzer können eine neue Aufgabe hinzufügen, Aufgaben abhaken und wieder aufheben, Aufgaben löschen oder Aufgabennamen bearbeiten. Außerdem können sie ihre Aufgabenliste nach allen, aktiven oder abgeschlossenen Aufgaben filtern.

Oder zumindest können sie all das mit einer Maus tun. Leider sind diese Funktionen für reine Tastaturnutzer nicht sehr zugänglich. Lassen Sie uns das jetzt erkunden.

## Erforschung des Tastaturbenutzbarkeitsproblems

Beginnen Sie, indem Sie auf das Eingabefeld oben in unserer App klicken, als ob Sie eine neue Aufgabe hinzufügen würden. Sie werden eine dicke, gestrichelte Umrandung um dieses Eingabefeld sehen. Diese Umrandung ist Ihr visueller Indikator dafür, dass der Browser derzeit auf dieses Element fokussiert ist. Drücken Sie die <kbd>Tab</kbd>-Taste, und Sie werden sehen, wie die Umrandung um den "Add"-Button unter dem Eingabefeld erscheint. Dies zeigt Ihnen, dass sich der Fokus des Browsers verschoben hat.

Drücken Sie ein paar Mal <kbd>Tab</kbd>, und Sie werden sehen, wie dieser gestrichelte Fokusindikator zwischen jedem der Filterbuttons wechselt. Gehen Sie weiter, bis der Fokusindikator um den ersten "Edit"-Button liegt. Drücken Sie <kbd>Enter</kbd>.

Die `<Todo />` Komponente wechselt das Template, wie wir es entworfen haben, und Sie sehen ein Formular, das uns ermöglicht, den Namen der Aufgabe zu bearbeiten.

Aber wo ist unser Fokusindikator hin?

Wenn wir zwischen den Templates in unserer `<Todo />` Komponente wechseln, entfernen wir die Elemente des alten Templates vollständig und ersetzen sie durch die Elemente des neuen Templates. Das bedeutet, dass das Element, auf das wir fokussiert waren, nicht mehr existiert, sodass es keinen visuellen Hinweis darauf gibt, wo der Fokus des Browsers ist. Dies könnte eine Vielzahl von Benutzern verwirren — insbesondere Benutzer, die auf die Tastatur angewiesen sind, oder Benutzer, die Hilfstechnologie verwenden.

Um das Erlebnis für Tastatur- und Hilfstechnologie-Nutzer zu verbessern, sollten wir den Fokus des Browsers selbst verwalten.

### Hinweis: eine Anmerkung zu unserem Fokusindikator

Wenn Sie mit Ihrer Maus die "All", "Active" oder "Completed" Filterbuttons anklicken, _sehen_ Sie keinen sichtbaren Fokusindikator, aber Sie werden ihn sehen, wenn Sie mit der <kbd>Tab</kbd>-Taste auf Ihrer Tastatur zwischen ihnen wechseln. Keine Sorge — Ihr Code ist nicht defekt!

Unsere CSS-Datei verwendet die [`:focus-visible`](/de/docs/Web/CSS/:focus-visible) Pseudo-Klasse, um dem Fokusindikator ein benutzerdefiniertes Styling zu geben, und der Browser verwendet eine Reihe interner Regeln, um zu bestimmen, wann er dem Benutzer angezeigt wird. Im Allgemeinen zeigt der Browser einen Fokusindikator als Reaktion auf Tastatureingaben und _könnte_ ihn als Reaktion auf Mauseingaben anzeigen. `<button>` Elemente _zeigen_ keinen Fokusindikator als Reaktion auf Mauseingaben, während `<input>` Elemente das tun.

Das Verhalten von `:focus-visible` ist selektiver als die ältere [`:focus`](/de/docs/Web/CSS/:focus) Pseudo-Klasse, mit der Sie vielleicht vertrauter sind. `:focus` zeigt einen Fokusindikator in wesentlich mehr Situationen, und Sie können ihn anstelle von oder in Kombination mit `:focus-visible` verwenden, wenn Sie es vorziehen.

## Fokussierung zwischen Templates

Wenn ein Benutzer das `<Todo />` Template vom Ansehen zum Bearbeiten wechselt, sollten wir uns auf das `<input>` konzentrieren, das zum Umbenennen verwendet wird; wenn er vom Bearbeiten zurück zum Ansehen wechselt, sollten wir den Fokus zurück auf den "Edit"-Button verschieben.

### Zielgerichtetes Ansprechen unserer Elemente

Bis zu diesem Punkt haben wir JSX-Komponenten geschrieben und React das Rendern des resultierenden DOM im Hintergrund überlassen. Meistens müssen wir keine spezifischen Elemente im DOM ansprechen, da wir Reacts State und Props verwenden können, um zu steuern, was gerendert wird. Um den Fokus zu verwalten, müssen wir jedoch in der Lage sein, spezifische DOM-Elemente anzusprechen.

Hier kommt der `useRef()` Hook ins Spiel.

Ändern Sie zuerst die `import` Anweisung am Anfang von `Todo.jsx`, sodass sie `useRef` umfasst:

```jsx
import { useRef, useState } from "react";
```

`useRef()` erstellt ein Objekt mit einer einzigen Eigenschaft: `current`. Refs können alle Werte speichern, die wir wollen, und später können wir diese Werte abrufen. Wir können sogar Referenzen zu DOM-Elementen speichern, was genau das ist, was wir hier tun werden.

Erstellen Sie als Nächstes, unterhalb der `useState()` Hooks in Ihrer `Todo()` Funktion, zwei neue Konstanten. Jede sollte eine Ref sein — eine für den "Edit" Button im Ansichtstemplate und eine für das Bearbeitungsfeld im Bearbeitungstemplate.

```jsx
const editFieldRef = useRef(null);
const editButtonRef = useRef(null);
```

Diese Refs haben einen Standardwert von `null`, um klarzumachen, dass sie leer sind, bis sie ihren DOM-Elementen zugeordnet werden. Um sie an ihre Elemente zu hängen, fügen wir das spezielle `ref` Attribut zu jedem JSX-Element hinzu und setzen die Werte dieser Attribute auf die entsprechend benannten `ref` Objekte.

Aktualisieren Sie das `<input>` in Ihrem Bearbeitungstemplate, sodass es so aussieht:

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

Aktualisieren Sie den "Edit" Button in Ihrem Ansichtstemplate, sodass er so aussieht:

```jsx
<button
  type="button"
  className="btn"
  onClick={() => setEditing(true)}
  ref={editButtonRef}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

Dadurch werden unsere `editFieldRef` und `editButtonRef` mit Referenzen zu den DOM-Elementen gefüllt, an die sie angehängt sind, aber _nur_ nachdem React die Komponente gerendert hat. Testen Sie das selbst: Fügen Sie die folgende Zeile irgendwo im Körper Ihrer `Todo()` Funktion hinzu, unterhalb der Initialisierung von `editButtonRef`:

```jsx
console.log(editButtonRef.current);
```

Sie werden sehen, dass der Wert von `editButtonRef.current` `null` ist, wenn die Komponente zuerst gerendert wird, aber wenn Sie einen "Edit" Button anklicken, wird das `<button>` Element in die Konsole geloggt. Das liegt daran, dass die Ref nur nach dem Rendern der Komponente gefüllt wird, und das Klicken auf den "Edit" Button bewirkt, dass die Komponente neu gerendert wird. Löschen Sie dieses Log, bevor Sie fortfahren.

> [!NOTE]
> Ihre Logs werden 6 Mal angezeigt, da wir 3 Instanzen von `<Todo />` in unserer App haben und React unsere Komponenten zweimal im Entwicklungsmodus rendert.

Wir kommen der Lösung näher! Um von unseren neu referenzierten Elementen zu profitieren, müssen wir einen weiteren React Hook verwenden: `useEffect()`.

### Implementierung von `useEffect()`

[`useEffect()`](https://react.dev/reference/react/useEffect) ist so benannt, weil es alle Seiteneffekte ausführt, die wir dem Render-Prozess hinzufügen möchten, die aber nicht im Hauptfunktionskörper ausgeführt werden können. `useEffect()` läuft direkt nach dem Rendern einer Komponente, das bedeutet, die DOM-Elemente, die wir im vorherigen Abschnitt referenziert haben, werden uns zur Verfügung stehen.

Ändern Sie erneut die Import-Anweisung von `Todo.jsx`, um `useEffect` hinzuzufügen:

```jsx
import { useEffect, useRef, useState } from "react";
```

`useEffect()` nimmt eine Funktion als Argument; diese Funktion wird _nach_ dem Rendern der Komponente ausgeführt. Um dies zu demonstrieren, platzieren Sie den folgenden `useEffect()` Aufruf unmittelbar über der `return` Anweisung im Körper von `Todo()`, und übergeben Sie eine Funktion hinein, die die Worte "side effect" in Ihre Konsole schreibt:

```jsx
useEffect(() => {
  console.log("side effect");
});
```

Um den Unterschied zwischen dem Haupt-Render-Prozess und im `useEffect()` ausgeführtem Code zu veranschaulichen, fügen Sie ein weiteres Log hinzu — platzieren Sie dieses unterhalb der vorherigen Hinzufügung:

```jsx
console.log("main render");
```

Öffnen Sie nun die App in Ihrem Browser. Sie sollten beide Nachrichten in Ihrer Konsole sehen, wobei jede mehrmals wiederholt wird. Beachten Sie, wie "main render" zuerst und "side effect" als zweites geloggt wurde, obwohl das "side effect" Log in der Reihenfolge zuerst steht.

```plain
main render                                     Todo.jsx
side effect                                     Todo.jsx
```

Erneut sind die Logs in dieser Reihenfolge, weil der Code innerhalb des `useEffect()` _nach_ dem Rendern der Komponente ausgeführt wird. Das erfordert etwas Gewöhnung, behalten Sie es einfach im Hinterkopf, wenn Sie vorankommen. Löschen Sie für jetzt `console.log("main render")` und wir werden zur Implementierung unseres Fokus-Managements übergehen.

### Fokus auf unser Bearbeitungsfeld

Jetzt, da wir wissen, dass unser `useEffect()` Hook funktioniert, können wir den Fokus damit verwalten. Zur Erinnerung: Wir möchten den Fokus auf das Bearbeitungsfeld richten, wenn wir zum Bearbeitungstemplate wechseln.

Aktualisieren Sie Ihren bestehenden `useEffect()` Hook, sodass er wie folgt aussieht:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  }
}, [isEditing]);
```

Diese Änderungen machen es so, dass, wenn `isEditing` wahr ist, React den aktuellen Wert des `editFieldRef` liest und den Browser-Fokus darauf verschiebt. Wir übergeben auch ein Array als zweites Argument in `useEffect()`. Dieses Array ist eine Liste von Werten, von denen `useEffect()` abhängen sollte. Mit diesen enthaltenen Werten läuft `useEffect()` nur, wenn einer dieser Werte sich ändert. Wir möchten den Fokus nur ändern, wenn sich der Wert von `isEditing` ändert.

Probieren Sie es jetzt aus: Verwenden Sie die <kbd>Tab</kbd> Taste, um zu einem der "Edit" Buttons zu navigieren, dann drücken Sie <kbd>Enter</kbd>. Sie sollten sehen, dass die `<Todo />` Komponente zu ihrem Bearbeitungstemplate wechselt, und der Browser-Fokusindikator sollte um das `<input>` Element erscheinen!

### Fokus zurück zum Edit-Button verschieben

Auf den ersten Blick erscheint es täuschend einfach, React dazu zu bringen, den Fokus zurück zu unserem "Edit"-Button zu verschieben, wenn die Bearbeitung gespeichert oder abgebrochen wird. Sicherlich könnten wir eine Bedingung in unser `useEffect` einfügen, um auf den Edit-Button zu fokussieren, wenn `isEditing` `false` ist? Lassen Sie es uns jetzt ausprobieren — aktualisieren Sie Ihren `useEffect()` Aufruf wie folgt:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  } else {
    editButtonRef.current.focus();
  }
}, [isEditing]);
```

Das funktioniert irgendwie. Wenn Sie Ihre Tastatur verwenden, um den "Edit"-Button auszulösen (denken Sie daran: <kbd>Tab</kbd> darauf und drücken Sie <kbd>Enter</kbd>), werden Sie sehen, dass Ihr Fokus zwischen dem Edit-`<input>` und dem "Edit"-Button wechselt, wenn Sie eine Bearbeitung beginnen und beenden. Jedoch haben Sie möglicherweise ein neues Problem bemerkt — der "Edit"-Button in der letzten `<Todo />` Komponente ist direkt beim Laden der Seite fokussiert, bevor wir sogar mit der App interagieren!

Unser `useEffect()` Hook verhält sich genau so, wie wir es entworfen haben: er läuft, sobald die Komponente rendert, sieht, dass `isEditing` `false` ist und fokussiert den "Edit"-Button. Es gibt drei Instanzen von `<Todo />`, und der Fokus wird auf den "Edit"-Button derjenigen gelegt, die zuletzt rendert.

Wir müssen unseren Ansatz überarbeiten, damit der Fokus nur dann geändert wird, wenn `isEditing` von einem Wert in einen anderen wechselt.

## Robusteres Fokusmanagement

Um unsere verfeinerten Kriterien zu erfüllen, müssen wir nicht nur den Wert von `isEditing` kennen, sondern auch _wann sich dieser Wert geändert hat_. Dazu müssen wir den vorherigen Wert der `isEditing` Konstante lesen können. Mit Pseudocode sollte unsere Logik in etwa so aussehen:

```jsx
if (wasNotEditingBefore && isEditingNow) {
  focusOnEditField();
} else if (wasEditingBefore && isNotEditingNow) {
  focusOnEditButton();
}
```

Das React-Team hat [Möglichkeiten diskutiert, den vorherigen Zustand einer Komponente zu erhalten](https://legacy.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state) und ein Beispiel-Hook bereitgestellt, den wir für diesen Zweck verwenden können.

### Einführung von `usePrevious()`

Fügen Sie den folgenden Code in der Nähe des Anfangs von `Todo.jsx` ein, oberhalb Ihrer `Todo()` Funktion.

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

`usePrevious()` ist ein _custom hook_, der einen Wert über Renderzyklen hinweg verfolgt. Er:

1. Verwendet den `useRef()` Hook, um eine leere `ref` zu erstellen.
2. Gibt den aktuellen Wert der `ref` an die Komponente zurück, die ihn aufgerufen hat.
3. Ruft `useEffect()` auf und aktualisiert den im `ref.current` gespeicherten Wert nach jedem Rendern der aufrufenden Komponente.

Das Verhalten von `useEffect()` ist der Schlüssel zu dieser Funktionalität. Da `ref.current` innerhalb eines `useEffect()` Aufrufs aktualisiert wird, ist es immer einen Schritt hinter dem Wert zurück, der sich im Haupt-Render-Zyklus der Komponente befindet – daher der Name `usePrevious()`.

### Verwendung von `usePrevious()`

Jetzt können wir eine `wasEditing` Konstante definieren, um den vorherigen Wert von `isEditing` zu verfolgen; dies wird erreicht, indem wir `usePrevious` mit `isEditing` als Argument aufrufen. Fügen Sie das Folgende innerhalb von `Todo()` hinzu, unterhalb der `useRef` Zeilen:

```jsx
const wasEditing = usePrevious(isEditing);
```

Sie können das Verhalten von `usePrevious()` sehen, indem Sie ein Konsolen-Log unter dieser Zeile hinzufügen:

```jsx
console.log(wasEditing);
```

In diesem Log wird der aktuelle Wert von `wasEditing` immer der vorherige Wert von `isEditing` sein. Klicken Sie ein paar Mal auf die "Edit" und "Cancel"-Buttons, um es sich ändern zu sehen, und löschen Sie dann dieses Log, wenn Sie bereit sind, weiterzumachen.

Mit dieser `wasEditing` Konstante können wir unseren `useEffect()` Hook aktualisieren, um den zuvor besprochenen Pseudocode zu implementieren:

```jsx
useEffect(() => {
  if (!wasEditing && isEditing) {
    editFieldRef.current.focus();
  } else if (wasEditing && !isEditing) {
    editButtonRef.current.focus();
  }
}, [wasEditing, isEditing]);
```

Beachten Sie, dass die Logik von `useEffect()` jetzt von `wasEditing` abhängt, weshalb wir es im Array der Abhängigkeiten bereitstellen.

Versuchen Sie, Ihre Tastatur zu verwenden, um die "Edit" und "Cancel" Buttons in der `<Todo />` Komponente zu aktivieren; Sie werden sehen, dass der Browser-Fokusindikator sich angemessen bewegt, ohne das Problem, das wir zu Beginn dieses Abschnitts besprochen haben.

## Fokussierung, wenn der Benutzer eine Aufgabe löscht

Es gibt eine letzte Lücke in der Tastaturerfahrung: Wenn ein Benutzer eine Aufgabe aus der Liste löscht, verschwindet der Fokus. Wir werden ein Muster ähnlich unseren vorherigen Änderungen folgen: Wir erstellen eine neue Ref und verwenden unseren `usePrevious()` Hook, sodass wir auf die Listenüberschrift fokussieren können, wann immer ein Benutzer eine Aufgabe löscht.

### Warum die Listenüberschrift?

Manchmal ist der Ort, zu dem wir den Fokus senden möchten, offensichtlich: Wenn wir zwischen unseren `<Todo />` Templates wechseln, hatten wir einen Ausgangspunkt, zu dem wir "zurückkehren" konnten — den "Edit"-Button. In diesem Fall jedoch, da wir Elemente vollständig aus dem DOM entfernen, haben wir keinen Ort, zu dem wir zurückkehren könnten. Der nächstbeste Punkt ist ein intuitiver Standort in der Nähe. Die Listenüberschrift ist unsere beste Wahl, da sie nahe am Listenelement liegt, das der Benutzer löschen wird, und das Fokussieren darauf wird dem Benutzer mitteilen, wie viele Aufgaben übrig sind.

### Erstellen unserer Ref

Importieren Sie die `useRef()` und `useEffect()` Hooks in `App.jsx` — Sie werden beide unten brauchen:

```jsx
import { useState, useRef, useEffect } from "react";
```

Deklarieren Sie als Nächstes eine neue Ref in der `App()` Funktion, unmittelbar oberhalb der `return` Anweisung:

```jsx
const listHeadingRef = useRef(null);
```

### Vorbereitung der Überschrift

Überschriftselemente wie unser `<h2>` sind normalerweise nicht fokussierbar. Das ist kein Problem — wir können jedes Element programmatisch fokussierbar machen, indem wir das Attribut [`tabindex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) hinzufügen. Das bedeutet _nur fokussierbar mit JavaScript_. Sie können nicht `Tab` drücken, um auf ein Element mit einem Tabindex von `-1` zu fokussieren, auf dieselbe Weise, wie Sie es mit einem [`<button>`](/de/docs/Web/HTML/Element/button) oder [`<a>`](/de/docs/Web/HTML/Element/a) Element tun könnten (das kann mit `tabindex="0"` geschehen, aber das ist hier nicht angemessen).

Fügen wir das `tabindex` Attribut hinzu — geschrieben als `tabIndex` in JSX — zur Überschrift oberhalb unserer Liste von Aufgaben, zusammen mit unserer `listHeadingRef`:

```jsx
<h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
  {headingText}
</h2>
```

> [!NOTE]
> Das `tabindex` Attribut ist exzellent für Barrierefreiheitseckfälle, aber Sie sollten **große Vorsicht** walten lassen, es nicht zu überbeanspruchen. Setzen Sie es nur ein, wenn Sie sicher sind, dass es dem Benutzer in irgendeiner Weise zugute kommt. In den meisten Fällen sollten Sie Elemente verwenden, die von Natur aus den Fokus annehmen können, wie Buttons, Links und Eingabefelder. Unverantwortlicher Einsatz von `tabindex` könnte einen tief negativen Einfluss auf Tastatur- und Bildschirmlesernutzer haben!

### Erfassen des vorherigen Zustands

Wir möchten uns nur auf das Element konzentrieren, das mit unserer Ref verbunden ist (über das `ref` Attribut), wenn unser Benutzer eine Aufgabe aus seiner Liste löscht. Dafür benötigen wir den `usePrevious()` Hook, den wir zuvor benutzt haben. Fügen Sie ihn in die Datei `App.jsx` ein, gleich unter den Imports:

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

Fügen Sie nun Folgendes, oberhalb der `return` Anweisung, in die `App()` Funktion ein:

```jsx
const prevTaskLength = usePrevious(tasks.length);
```

Hier rufen wir `usePrevious()` auf, um die vorherige Länge des Aufgabenarrays zu verfolgen.

> [!NOTE]
> Da wir `usePrevious()` nun in zwei Dateien nutzen, könnte es effizienter sein, die `usePrevious()` Funktion in eine eigene Datei zu verschieben, sie aus jener Datei zu exportieren und dort zu importieren, wo Sie sie benötigen. Versuchen Sie dies als Übung, sobald Sie am Ende angekommen sind.

### Nutzung von `useEffect()` zur Steuerung unseres Fokus auf die Überschrift

Jetzt, da wir gespeichert haben, wie viele Aufgaben wir zuvor hatten, können wir einen `useEffect()` Hook einrichten, der ausgeführt wird, wenn sich unsere Anzahl an Aufgaben ändert, die den Fokus auf die Überschrift lenken wird, wenn die Anzahl der Aufgaben, die wir jetzt haben, weniger ist als die zuvor — also, wenn eine Aufgabe gelöscht wurde!

Fügen Sie das Folgende in den Körper Ihrer `App()` Funktion ein, gleich unter den vorherigen Ergänzungen:

```jsx
useEffect(() => {
  if (tasks.length < prevTaskLength) {
    listHeadingRef.current.focus();
  }
}, [tasks.length, prevTaskLength]);
```

Wir versuchen nur dann, uns auf unsere Listenüberschrift zu konzentrieren, wenn wir jetzt weniger Aufgaben haben als zuvor. Die in diesen Hook übergebenen Abhängigkeiten stellen sicher, dass er nur versucht, neu zu laufen, wenn sich einer dieser Werte (die Anzahl der aktuellen oder vorherigen Aufgaben) ändert.

Nun, wenn Sie Ihre Tastatur nutzen, um eine Aufgabe in Ihrem Browser zu löschen, sehen Sie unseren gestrichelten Fokusrahmen um die Überschrift über der Liste erscheinen.

## Fertig!

Sie haben gerade angefangen, eine React-App von Grund auf zu entwickeln! Herzlichen Glückwunsch! Die Fähigkeiten, die Sie hier erlernt haben, werden eine großartige Grundlage sein, um darauf aufzubauen, während Sie weiter mit React arbeiten.

Die meiste Zeit können Sie ein effektiver Mitarbeiter in einem React-Projekt sein, auch wenn Sie nur sorgfältig über Komponenten sowie deren State und Props nachdenken. Denken Sie daran, immer das beste HTML zu schreiben, das Ihnen möglich ist.

`useRef()` und `useEffect()` sind recht fortgeschrittene Features, und Sie sollten stolz darauf sein, dass Sie sie benutzen! Achten Sie auf Gelegenheiten, um sie weiter zu üben, denn so können Sie inklusive Erlebnisse für Benutzer schaffen. Denken Sie daran: Unsere App wäre ohne sie für Tastaturnutzer unzugänglich gewesen!

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, können Sie eine fertige Version des Beispiel-React-App-Codes in unserem [todo-react Repository](https://github.com/mdn/todo-react) finden. Für eine live laufende Version, siehe <https://mdn.github.io/todo-react/>.

Im allerletzten Artikel werden wir Ihnen eine Liste von React-Ressourcen präsentieren, die Sie verwenden können, um Ihre Lernreise fortzusetzen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/React_resources", "Learn_web_development/Core/Frameworks_libraries")}}
