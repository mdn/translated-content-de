---
title: Accessibility in React
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility
l10n:
  sourceCommit: 707518ff85e56b410289555e56328d10abbe1a9c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In unserem letzten Tutorialartikel konzentrieren wir uns auf die Barrierefreiheit, einschließlich des Fokusmanagements in React, das die Benutzerfreundlichkeit verbessern und Verwirrung sowohl für reine Tastaturnutzer als auch für Bildschirmleser-Benutzer verringern kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
          sowie Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Befehlszeile</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Die Implementierung der Tastaturzugänglichkeit in React zu erlernen.</td>
    </tr>
  </tbody>
</table>

## Einbeziehen von Tastaturnutzern

An diesem Punkt haben wir alle Funktionen implementiert, die wir umsetzen wollten. Benutzer können eine neue Aufgabe hinzufügen, Aufgaben ab- und anhaken, Aufgaben löschen oder Aufgabennamen bearbeiten. Außerdem können sie ihre Aufgabenliste nach allen, aktiven oder erledigten Aufgaben filtern.

Zumindest können sie all diese Dinge mit einer Maus tun. Leider sind diese Funktionen für reine Tastaturnutzer nicht sehr zugänglich. Lassen Sie uns das jetzt untersuchen.

## Untersuchung des Problems der Tastaturfreundlichkeit

Beginnen Sie damit, auf das Eingabefeld oben in unserer App zu klicken, als ob Sie eine neue Aufgabe hinzufügen wollten. Sie werden einen dicken, gestrichelten Umriss um dieses Eingabefeld sehen. Dieser Umriss ist Ihr visueller Hinweis darauf, dass der Browser derzeit auf dieses Element fokussiert ist. Drücken Sie die <kbd>Tab</kbd>-Taste, und Sie werden sehen, dass der Umriss um die Schaltfläche "Hinzufügen" unter dem Eingabefeld erscheint. Dies zeigt, dass der Fokus des Browsers sich verlagert hat.

Drücken Sie die <kbd>Tab</kbd>-Taste noch ein paar Mal, und Sie werden sehen, dass sich dieser gestrichelte Fokusindikator zwischen den einzelnen Filterknöpfen bewegt. Gehen Sie weiter, bis der Fokusindikator um die erste Schaltfläche "Bearbeiten" erschienen ist. Drücken Sie <kbd>Eingabe</kbd>.

Die `<Todo />`-Komponente wechselt wie geplant die Templates, und Sie werden ein Formular sehen, das es uns ermöglicht, den Namen der Aufgabe zu bearbeiten.

Aber wo ist unser Fokusindikator geblieben?

Wenn wir zwischen Templates in unserer `<Todo />`-Komponente wechseln, entfernen wir die Elemente des alten Templates vollständig und ersetzen sie durch die Elemente des neuen Templates. Das bedeutet, dass das Element, auf dem wir fokussiert waren, nicht mehr existiert, sodass es keine visuelle Anzeige gibt, wo der Fokus des Browsers liegt. Dies könnte eine Vielzahl von Benutzern verwirren - insbesondere Benutzer, die auf die Tastatur angewiesen sind, oder Benutzer, die unterstützende Technologien verwenden.

Um die Erfahrung für Tastatur- und unterstützende Technologiebesucher zu verbessern, sollten wir den Fokus des Browsers selbst verwalten.

### Anmerkung: ein Hinweis zu unserem Fokusindikator

Wenn Sie mit der Maus auf die Schaltflächen "Alle", "Aktiv" oder "Erledigt" klicken, wird ein sichtbarer Fokusindikator _nicht_ angezeigt, aber Sie werden ihn sehen, wenn Sie mit der <kbd>Tab</kbd>-Taste auf Ihrer Tastatur zwischen ihnen wechseln. Keine Sorge – Ihr Code ist nicht kaputt!

Unsere CSS-Datei verwendet die [`:focus-visible`](/de/docs/Web/CSS/:focus-visible)-Pseudoklasse, um benutzerdefinierte Styling für den Fokusindikator bereitzustellen, und der Browser verwendet eine Reihe interner Regeln, um zu bestimmen, wann er diesen dem Benutzer anzeigt. Im Allgemeinen zeigt der Browser einen Fokusindikator in Reaktion auf Tastatureingaben und _kann_ ihn in Reaktion auf Mauseingaben anzeigen. `<button>`-Elemente zeigen keinen Fokusindikator in Reaktion auf Mauseingaben, während `<input>`-Elemente es tun.

Das Verhalten von `:focus-visible` ist selektiver als die ältere [`:focus`](/de/docs/Web/CSS/:focus)-Pseudoklasse, mit der Sie möglicherweise vertrauter sind. `:focus` zeigt einen Fokusindikator in viel mehr Situationen, und Sie können es stattdessen oder in Kombination mit `:focus-visible` verwenden, wenn Sie es bevorzugen.

## Fokussieren zwischen Templates

Wenn ein Benutzer das `<Todo />`-Template von der Ansicht zum Bearbeiten wechselt, sollten wir auf das `<input>` fokussieren, das zur Umbenennung verwendet wird; wenn sie von der Bearbeitung zur Ansicht zurück wechseln, sollten wir den Fokus zurück zur "Bearbeiten"-Schaltfläche verschieben.

### Ziel unserer Elemente

Bis zu diesem Punkt haben wir JSX-Komponenten geschrieben und React den resultierenden DOM im Hintergrund erstellen lassen. Meistens müssen wir keine spezifischen Elemente im DOM anvisieren, weil wir Reacts Status und Props verwenden können, um zu steuern, was gerendert wird. Um den Fokus zu verwalten, müssen wir jedoch in der Lage sein, spezifische DOM-Elemente anzuvisieren.

Hier kommt der `useRef()`-Hook ins Spiel.

Zuerst ändern Sie die `import`-Anweisung oben in `Todo.jsx`, sodass sie `useRef` enthält:

```jsx
import { useRef, useState } from "react";
```

`useRef()` erstellt ein Objekt mit einer einzigen Eigenschaft: `current`. Refs können beliebige Werte speichern, die wir später nachschlagen können. Wir können sogar Referenzen auf DOM-Elemente speichern, was genau das ist, was wir hier tun werden.

Als Nächstes erstellen Sie zwei neue Konstanten unter den `useState()`-Hooks in Ihrer `Todo()`-Funktion. Jede sollte eine Ref sein - eine für die "Bearbeiten"-Schaltfläche im Ansichtstemplate und eine für das Bearbeitungsfeld im Bearbeitungstemplate.

```jsx
const editFieldRef = useRef(null);
const editButtonRef = useRef(null);
```

Diese Refs haben einen Standardwert von `null`, um klarzustellen, dass sie leer sind, bis sie an ihre DOM-Elemente angehängt werden. Um sie an ihre Elemente anzuhängen, fügen wir das spezielle `ref`-Attribut zu jedem Element in JSX hinzu und setzen die Werte dieser Attribute auf die entsprechend benannten `ref`-Objekte.

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

Aktualisieren Sie die "Bearbeiten"-Schaltfläche in Ihrem Ansichtstemplate, sodass sie so aussieht:

```jsx
<button
  type="button"
  className="btn"
  onClick={() => setEditing(true)}
  ref={editButtonRef}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

Durch dieses Vorgehen werden unsere `editFieldRef` und `editButtonRef` mit Referenzen zu den DOM-Elementen, an die sie angehängt sind, gefüllt, aber _nur_, nachdem React die Komponente gerendert hat. Testen Sie dies selbst aus: Fügen Sie die folgende Zeile irgendwo im Körper Ihrer `Todo()`-Funktion hinzu, unterhalb der Initialisierung von `editButtonRef`:

```jsx
console.log(editButtonRef.current);
```

Sie werden sehen, dass der Wert von `editButtonRef.current` `null` ist, wenn die Komponente zum ersten Mal gerendert wird, aber wenn Sie auf eine "Bearbeiten"-Schaltfläche klicken, wird das `<button>`-Element in die Konsole geloggt. Dies liegt daran, dass die Ref erst nach dem Rendern der Komponente gefüllt wird, und das Klicken auf die "Bearbeiten"-Schaltfläche verursacht, dass die Komponente neu gerendert wird. Stellen Sie sicher, dass Sie dieses Log löschen, bevor Sie fortfahren.

> [!NOTE]
> Ihre Logs werden 6 Mal angezeigt, weil wir 3 Instanzen von `<Todo />` in unserer App haben und React unsere Komponenten zweimal in der Entwicklung rendert.

Wir kommen der Sache näher! Um unsere neu referenzierten Elemente zu nutzen, müssen wir einen weiteren React-Hook verwenden: `useEffect()`.

### Implementierung von `useEffect()`

[`useEffect()`](https://react.dev/reference/react/useEffect) ist so benannt, weil es alle Nebeneffekte ausführt, die wir dem Renderprozess hinzufügen möchten, die jedoch nicht im Hauptkörper der Funktion ausgeführt werden können. `useEffect()` läuft direkt nach dem Rendern einer Komponente, was bedeutet, dass die DOM-Elemente, auf die wir im vorherigen Abschnitt verwiesen haben, für uns verfügbar sind.

Ändern Sie die `import`-Anweisung von `Todo.jsx` erneut, um `useEffect` hinzuzufügen:

```jsx
import { useEffect, useRef, useState } from "react";
```

`useEffect()` nimmt eine Funktion als Argument; diese Funktion wird _nach_ dem Rendern der Komponente ausgeführt. Um dies zu demonstrieren, setzen Sie den folgenden `useEffect()`-Aufruf direkt über die `return`-Anweisung im Körper von `Todo()` und fügen Sie eine Funktion ein, die die Wörter "Nebeneffekt" in Ihre Konsole loggt:

```jsx
useEffect(() => {
  console.log("side effect");
});
```

Um den Unterschied zwischen dem Haupt-Renderprozess und Code, der in `useEffect()` ausgeführt wird, zu veranschaulichen, fügen Sie ein weiteres Log hinzu – setzen Sie dieses unterhalb der vorherigen Ergänzung:

```jsx
console.log("main render");
```

Öffnen Sie nun die App in Ihrem Browser. Sie sollten beide Nachrichten in Ihrer Konsole sehen, wobei jede mehrfach wiederholt wird. Beachten Sie, wie "Main render" zuerst geloggt wurde und "Side effect" als zweites, obwohl das "Side effect"-Log zuerst im Code erscheint.

```plain
main render                                     Todo.jsx
side effect                                     Todo.jsx
```

Wiederum sind die Logs in dieser Reihenfolge angeordnet, weil Code innerhalb von `useEffect()` _nach_ dem Rendern der Komponente ausgeführt wird. Das erfordert etwas Gewöhnung, merken Sie sich das einfach, während Sie Fortschritte machen. Löschen Sie `console.log("main render")` und wir gehen zur Implementierung unseres Fokusmanagements über.

### Fokussierung auf unser Bearbeitungsfeld

Da wir wissen, dass unser `useEffect()`-Hook funktioniert, können wir den Fokus damit verwalten. Zur Erinnerung: Wir wollen uns auf das Bearbeitungsfeld konzentrieren, wenn wir zum Bearbeitungstemplate wechseln.

Aktualisieren Sie Ihren bestehenden `useEffect()`-Hook so, dass er so aussieht:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  }
}, [isEditing]);
```

Diese Änderungen bewirken, dass React, wenn `isEditing` wahr ist, den aktuellen Wert des `editFieldRef` liest und den Fokus des Browsers darauf verschiebt. Wir übergeben auch ein Array an `useEffect()` als zweites Argument. Dieses Array ist eine Liste von Werten, von denen `useEffect()` abhängt. Mit diesen Werten wird `useEffect()` nur ausgeführt, wenn sich einer dieser Werte ändert. Wir möchten den Fokus nur ändern, wenn sich der Wert von `isEditing` ändert.

Versuchen Sie es jetzt: Verwenden Sie die <kbd>Tab</kbd>-Taste, um zu einer der "Bearbeiten"-Schaltflächen zu navigieren, und drücken Sie dann <kbd>Eingabe</kbd>. Sie sollten sehen, dass die `<Todo />`-Komponente zu ihrem Bearbeitungstemplate wechselt, und der Fokusindikator des Browsers sollte um das `<input>`-Element erscheinen!

### Zurück zum Bearbeiten-Button bewegen

Auf den ersten Blick scheint es täuschend einfach, React dazu zu bringen, den Fokus auf unsere "Bearbeiten"-Schaltfläche zurückzubewegen, wenn die Bearbeitung gespeichert oder abgebrochen wird. Sicherlich könnten wir eine Bedingung zu unserem `useEffect` hinzufügen, um auf die Schaltfläche zu fokussieren, wenn `isEditing` `false` ist? Lassen Sie uns das jetzt versuchen — aktualisieren Sie Ihren `useEffect()`-Aufruf wie folgt:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  } else {
    editButtonRef.current.focus();
  }
}, [isEditing]);
```

Das funktioniert einigermaßen. Wenn Sie Ihre Tastatur verwenden, um die "Bearbeiten"-Schaltfläche auszulösen (denken Sie daran: <kbd>Tab</kbd>, um sie zu erreichen und <kbd>Eingabe</kbd> zu drücken), sehen Sie, dass sich Ihr Fokus zwischen dem Bearbeitungs-<`input`> und der "Bearbeiten"-Schaltfläche bewegt, während Sie eine Bearbeitung starten und beenden. Sie haben jedoch möglicherweise ein neues Problem bemerkt – die "Bearbeiten"-Schaltfläche in der letzten `<Todo />`-Komponente ist sofort bei Seitenladung fokussiert, bevor wir überhaupt mit der App interagieren!

Unser `useEffect()`-Hook verhält sich genau so, wie wir es entworfen haben: Er läuft, sobald die Komponente gerendert wird, sieht, dass `isEditing` `false` ist und fokussiert die "Bearbeiten"-Schaltfläche. Es gibt drei Instanzen von `<Todo />`, und der Fokus wird der "Bearbeiten"-Schaltfläche derjenigen gegeben, die zuletzt rendert.

Wir müssen unseren Ansatz so umgestalten, dass sich der Fokus nur ändert, wenn `isEditing` von einem Wert zu einem anderen wechselt.

## Robusteres Fokusmanagement

Um unseren verfeinerten Kriterien zu entsprechen, müssen wir nicht nur den Wert von `isEditing` kennen, sondern auch _wann sich dieser Wert geändert hat_. Dazu müssen wir in der Lage sein, den vorherigen Wert der Konstante `isEditing` zu lesen. In Pseudocode ausgedrückt, sollte unsere Logik etwa so aussehen:

```jsx
if (wasNotEditingBefore && isEditingNow) {
  focusOnEditField();
} else if (wasEditingBefore && isNotEditingNow) {
  focusOnEditButton();
}
```

Das React-Team hat Möglichkeiten diskutiert, [wie der vorherige Zustand einer Komponente abgerufen werden kann](https://legacy.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state) und ein Beispiel-Hook bereitgestellt, den wir für diese Aufgabe verwenden können.

### Einführung von `usePrevious()`

Fügen Sie den folgenden Code in die Nähe des oberen Bereichs von `Todo.jsx` ein, über Ihrer `Todo()`-Funktion.

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

`usePrevious()` ist ein _benutzerdefinierter Hook_, der einen Wert über Rendern hinweg verfolgt. Es:

1. Verwendet den `useRef()`-Hook, um eine leere `ref` zu erstellen.
2. Gibt den `current`-Wert der `ref` an die aufrufende Komponente zurück.
3. Ruft `useEffect()` auf und aktualisiert den in `ref.current` gespeicherten Wert nach jedem Rendern der aufrufenden Komponente.

Das Verhalten von `useEffect()` ist entscheidend für diese Funktionalität. Da `ref.current` innerhalb eines `useEffect()`-Aufrufs aktualisiert wird, ist es immer einen Schritt hinter jedem Wert im Haupt-Renderzyklus der Komponente zurück - daher der Name `usePrevious()`.

### Verwendung von `usePrevious()`

Jetzt können wir eine `wasEditing`-Konstante definieren, um den vorherigen Wert von `isEditing` zu verfolgen; dies wird erreicht, indem `usePrevious` mit `isEditing` als Argument aufgerufen wird. Fügen Sie das Folgende innerhalb von `Todo()`, unterhalb der `useRef`-Zeilen, hinzu:

```jsx
const wasEditing = usePrevious(isEditing);
```

Sie können sehen, wie sich `usePrevious()` verhält, indem Sie ein Konsolenprotokoll unterhalb dieser Zeile hinzufügen:

```jsx
console.log(wasEditing);
```

In diesem Log wird der `current`-Wert von `wasEditing` immer der vorherige Wert von `isEditing` sein. Klicken Sie ein paar Mal auf die Schaltflächen "Bearbeiten" und "Abbrechen", um sie zu beobachten, und löschen Sie dieses Log, wenn Sie bereit sind, weiterzumachen.

Mit dieser `wasEditing`-Konstante können wir unseren `useEffect()`-Hook aktualisieren, um die zuvor besprochene Pseudocode-Logik zu implementieren:

```jsx
useEffect(() => {
  if (!wasEditing && isEditing) {
    editFieldRef.current.focus();
  } else if (wasEditing && !isEditing) {
    editButtonRef.current.focus();
  }
}, [wasEditing, isEditing]);
```

Beachten Sie, dass die Logik von `useEffect()` jetzt von `wasEditing` abhängt, deshalb geben wir es im Array der Abhängigkeiten an.

Versuchen Sie, Ihre Tastatur zu verwenden, um die "Bearbeiten"- und "Abbrechen"-Schaltflächen in der `<Todo />`-Komponente zu aktivieren; Sie werden sehen, dass der Fokusindikator des Browsers sich wie erwartet bewegt, ohne das Problem, das wir zu Beginn dieses Abschnitts diskutiert haben.

## Fokussieren, wenn der Nutzer eine Aufgabe löscht

Es gibt noch eine letzte Lücke in der Tastaturnutzererfahrung: Wenn ein Benutzer eine Aufgabe aus der Liste löscht, verschwindet der Fokus. Wir werden einem Muster folgen, das unseren vorherigen Änderungen ähnlich ist: Wir werden eine neue Ref erstellen und unseren `usePrevious()`-Hook nutzen, sodass wir den Fokus auf die Listenüberschrift verschieben können, wenn ein Benutzer eine Aufgabe löscht.

### Warum die Listenüberschrift?

Manchmal ist der Ort, an den wir unseren Fokus senden möchten, offensichtlich: Als wir unsere `<Todo />`-Templates umgeschaltet haben, hatten wir einen Ursprungspunkt, zu dem wir "zurückkehren" konnten — die "Bearbeiten"-Schaltfläche. In diesem Fall jedoch, da wir Elemente vollständig aus dem DOM entfernen, haben wir keinen Ort, um zurückzukehren. Das nächstbeste ist ein intuitiver Standort in der Nähe. Die Listenüberschrift ist unsere beste Wahl, weil sie in der Nähe des Listenelements liegt, das der Benutzer löschen wird, und durch das Fokussieren auf sie wird dem Benutzer mitgeteilt, wie viele Aufgaben übrig sind.

### Erstellen unserer Ref

Importieren Sie die Hooks `useRef()` und `useEffect()` in `App.jsx` — Sie benötigen sie beide als Nächstes:

```jsx
import { useState, useRef, useEffect } from "react";
```

Erklären Sie anschließend eine neue Ref in der `App()`-Funktion, direkt über der `return`-Anweisung:

```jsx
const listHeadingRef = useRef(null);
```

### Vorbereiten der Überschrift

Heading-Elemente wie unser `<h2>` sind normalerweise nicht fokussierbar. Das ist kein Problem — wir können jedes Element programmatisch fokussierbar machen, indem wir das Attribut [`tabindex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) hinzufügen. Das bedeutet, dass es nur mit JavaScript fokussierbar ist. Sie können <kbd>Tab</kbd> nicht verwenden, um auf ein Element mit einem `tabindex` von `-1` zu fokussieren, so wie Sie es mit einem [`<button>`](/de/docs/Web/HTML/Element/button) oder einem [`<a>`](/de/docs/Web/HTML/Element/a)-Element tun könnten (das kann mit `tabindex="0"` gemacht werden, aber das ist in diesem Fall nicht angemessen).

Fügen wir das `tabindex`-Attribut hinzu — in JSX geschrieben als `tabIndex` — in die Überschrift über unserer Aufgabenliste, zusammen mit unserer `listHeadingRef`:

```jsx
<h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
  {headingText}
</h2>
```

> [!NOTE]
> Das `tabindex`-Attribut ist ausgezeichnet für Barrierefreiheitsrandfälle, aber Sie sollten **große Sorgfalt walten lassen**, es nicht zu überbeanspruchen. Wenden Sie einem Element nur dann einen `tabindex` an, wenn Sie sicher sind, dass das Fokussierbarmachen dem Benutzer irgendwie zugutekommt. In den meisten Fällen sollten Sie Elemente verwenden, die natürlich fokussiert werden können, wie Schaltflächen, Anker und Eingaben. Eine unverantwortliche Verwendung von `tabindex` könnte erhebliche negative Auswirkungen auf Tastatur- und Screenreader-Nutzer haben!

### Vorherigen Zustand holen

Wir möchten auf das Element fokussieren, das mit unserer Ref verknüpft ist (über das `ref`-Attribut), nur wenn unser Benutzer eine Aufgabe aus seiner Liste löscht. Das erfordert den `usePrevious()`-Hook, den wir zuvor verwendet haben. Fügen Sie ihn oben in Ihrer `App.jsx`-Datei hinzu, direkt unter den Imports:

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

Fügen Sie nun das folgende, über der `return`-Anweisung in der `App()`-Funktion, hinzu:

```jsx
const prevTaskLength = usePrevious(tasks.length);
```

Hier rufen wir `usePrevious()` auf, um die vorherige Länge des Aufgabenarrays zu verfolgen.

> [!NOTE]
> Da wir jetzt `usePrevious()` in zwei Dateien nutzen, könnte es effizienter sein, die `usePrevious()`-Funktion in eine eigene Datei zu verschieben, sie von dort zu exportieren und an den Stellen zu importieren, wo Sie sie benötigen. Versuchen Sie dies als Übung, nachdem Sie das Ende erreicht haben.

### Verwendung von `useEffect()`, um unser Überschriftenfokus zu steuern

Da wir jetzt gespeichert haben, wie viele Aufgaben wir zuvor hatten, können wir einen `useEffect()`-Hook einrichten, der ausgeführt wird, wenn sich unsere Anzahl von Aufgaben ändert, wodurch die Überschrift fokussiert wird, falls die Anzahl der Aufgaben, die wir jetzt haben, geringer ist als zuvor — das heißt, wir haben eine Aufgabe gelöscht!

Fügen Sie das Folgende in den Körper Ihrer `App()`-Funktion, direkt unter Ihren vorherigen Ergänzungen, ein:

```jsx
useEffect(() => {
  if (tasks.length < prevTaskLength) {
    listHeadingRef.current.focus();
  }
}, [tasks.length, prevTaskLength]);
```

Wir versuchen nur, unsere Listenüberschrift zu fokussieren, wenn wir jetzt weniger Aufgaben haben als zuvor. Die an diesen Hook übergebenen Abhängigkeiten stellen sicher, dass er nur versucht, erneut ausgeführt zu werden, wenn sich einer dieser Werte (die Anzahl der aktuellen Aufgaben oder die Anzahl der vorherigen Aufgaben) ändert.

Jetzt, wenn Sie Ihre Tastatur verwenden, um eine Aufgabe in Ihrem Browser zu löschen, werden Sie sehen, wie unser gestrichelter Umriss um die Überschrift über der Liste erscheint.

## Fertig!

Sie haben soeben eine React-App von Grund auf erstellt! Herzlichen Glückwunsch! Die Fähigkeiten, die Sie hier erworben haben, werden eine großartige Grundlage sein, auf der Sie weiter aufbauen können, während Sie weiterhin mit React arbeiten.

Meistens können Sie effektiv zu einem React-Projekt beitragen, selbst wenn Sie hauptsächlich über Komponenten und deren Status und Props nachdenken. Denken Sie daran, immer das beste HTML zu schreiben, das Sie können.

`useRef()` und `useEffect()` sind ziemlich fortgeschrittene Funktionen, und Sie sollten stolz darauf sein, sie zu verwenden! Halten Sie Ausschau nach Gelegenheiten, diese mehr zu üben, da Ihnen dies ermöglichen wird, inklusive Erlebnisse für die Benutzer zu schaffen. Vergessen Sie nicht: Unsere App wäre ohne diese für Tastaturnutzer unzugänglich gewesen!

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, finden Sie eine fertige Version des Beispiel-React-App-Codes in unserem [todo-react-Repository](https://github.com/mdn/todo-react). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-react/>.

Im allerletzten Artikel präsentieren wir Ihnen eine Liste von React-Ressourcen, die Sie nutzen können, um Ihr Lernen weiter voranzutreiben.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
