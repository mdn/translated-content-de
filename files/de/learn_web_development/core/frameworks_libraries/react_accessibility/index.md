---
title: Barrierefreiheit in React
short-title: React Barrierefreiheit
slug: Learn_web_development/Core/Frameworks_libraries/React_accessibility
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/React_resources", "Learn_web_development/Core/Frameworks_libraries")}}

In unserem letzten Tutorialartikel konzentrieren wir uns auf Barrierefreiheit, einschließlich der Verwaltung des Fokus in React, die die Benutzerfreundlichkeit verbessern und Verwirrung sowohl für reine Tastaturnutzer als auch für Bildschirmleser-Nutzer reduzieren kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Kommandozeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>Implementierung von Tastatur-Barrierefreiheit in React.</td>
    </tr>
  </tbody>
</table>

## Einbeziehung von Tastaturnutzern

An diesem Punkt haben wir alle Funktionen implementiert, die wir umsetzen wollten. Benutzer können eine neue Aufgabe hinzufügen, Aufgaben ab- und anhaken, Aufgaben löschen oder Aufgabennamen bearbeiten. Außerdem können sie ihre Aufgabenliste nach allen, aktiven oder abgeschlossenen Aufgaben filtern.

Oder zumindest können sie all diese Dinge mit einer Maus tun. Leider sind diese Funktionen für reine Tastaturnutzer nicht sehr zugänglich. Lassen Sie uns das jetzt erkunden.

## Erkundung des Tastaturnutzbarkeitsproblems

Beginnen Sie damit, auf das Eingabefeld oben in unserer App zu klicken, als ob Sie eine neue Aufgabe hinzufügen möchten. Sie werden eine dicke, gestrichelte Umrandung um dieses Eingabefeld sehen. Diese Umrandung ist ein visueller Indikator dafür, dass der Browser derzeit auf dieses Element fokussiert ist. Drücken Sie die <kbd>Tab</kbd>-Taste, und Sie werden sehen, dass die Umrandung um die "Hinzufügen"-Schaltfläche unterhalb des Eingabefelds erscheint. Dies zeigt Ihnen, dass der Fokus des Browsers sich verschoben hat.

Drücken Sie ein paar Mal <kbd>Tab</kbd>, und Sie werden sehen, wie dieser gestrichelte Fokus-Indikator sich zwischen den Filter-Schaltflächen bewegt. Machen Sie weiter, bis der Fokus-Indikator um die erste "Bearbeiten"-Schaltfläche liegt. Drücken Sie <kbd>Enter</kbd>.

Die `<Todo />`-Komponente wechselt die Vorlagen, wie wir es entworfen haben, und Sie sehen ein Formular, das es uns ermöglicht, den Namen der Aufgabe zu bearbeiten.

Aber wo ist unser Fokus-Indikator hin?

Wenn wir zwischen Vorlagen in unserer `<Todo />`-Komponente wechseln, entfernen wir die Elemente der alten Vorlage vollständig und ersetzen sie mit den Elementen der neuen Vorlage. Das bedeutet, dass das Element, auf das wir fokussiert waren, nicht mehr existiert, sodass es keinen visuellen Hinweis darauf gibt, wo der Fokus des Browsers ist. Dies könnte eine Vielzahl von Nutzern verwirren – insbesondere Nutzer, die auf die Tastatur angewiesen sind oder Nutzer, die unterstützende Technologien verwenden.

Um die Erfahrung für Tastatur- und unterstützende Technologie-Nutzer zu verbessern, sollten wir den Fokus des Browsers selbst verwalten.

### Randbemerkung: eine Anmerkung zu unserem Fokus-Indikator

Wenn Sie die Filter-Schaltflächen "Alle", "Aktive" oder "Abgeschlossen" mit Ihrer Maus anklicken, werden Sie _keinen_ sichtbaren Fokus-Indikator sehen, aber Sie werden ihn sehen, wenn Sie mit der <kbd>Tab</kbd>-Taste auf Ihrer Tastatur zwischen ihnen wechseln. Keine Sorge – Ihr Code ist nicht kaputt!

Unsere CSS-Datei verwendet die [`:focus-visible`](/de/docs/Web/CSS/Reference/Selectors/:focus-visible) Pseudo-Klasse, um dem Fokus-Indikator ein individuelles Styling zu verleihen, und der Browser verwendet eine Reihe interner Regeln, um zu bestimmen, wann er dem Nutzer angezeigt wird. Im Allgemeinen zeigt der Browser einen Fokus-Indikator als Reaktion auf Tastatureingaben und _könnte_ ihn als Reaktion auf Mauseingaben anzeigen. `<button>`-Elemente zeigen _keinen_ Fokus-Indikator als Reaktion auf Mauseingaben an, während `<input>`-Elemente dies _tun_.

Das Verhalten von `:focus-visible` ist selektiver als die ältere [`:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus) Pseudo-Klasse, mit der Sie vielleicht vertrauter sind. `:focus` zeigt in vielen mehr Situationen einen Fokus-Indikator an, und Sie können es anstelle oder in Kombination mit `:focus-visible` verwenden, wenn Sie dies bevorzugen.

## Fokussierung zwischen Vorlagen

Wenn ein Benutzer die `<Todo />`-Vorlage von der Ansicht zur Bearbeitung ändert, sollten wir uns auf die `<input>` fokussieren, die zur Umbenennung verwendet wird; wenn sie von der Bearbeitung zurück zur Ansicht wechseln, sollten wir den Fokus zurück zur "Bearbeiten"-Schaltfläche verschieben.

### Zielgerichtete Ansprache unserer Elemente

Bis zu diesem Punkt haben wir JSX-Komponenten geschrieben und React den resultierenden DOM im Hintergrund aufbauen lassen. Meistens müssen wir keine spezifischen Elemente im DOM ansprechen, da wir Reacts State und Props verwenden können, um zu steuern, was gerendert wird. Um den Fokus zu verwalten, müssen wir jedoch in der Lage sein, spezifische DOM-Elemente anzusprechen.

Hier kommt der `useRef()`-Hook ins Spiel.

Ändern Sie zunächst die `import`-Anweisung oben in `Todo.jsx`, sodass sie `useRef` enthält:

```jsx
import { useRef, useState } from "react";
```

`useRef()` erstellt ein Objekt mit einer einzigen Eigenschaft: `current`. Refs können beliebige Werte speichern, die wir benötigen, und wir können diese Werte später nachschlagen. Wir können sogar Referenzen zu DOM-Elementen speichern, was genau das ist, was wir hier tun werden.

Erstellen Sie als nächstes zwei neue Konstanten unter den `useState()`-Hooks in Ihrer `Todo()`-Funktion. Jede sollte ein Ref sein – eine für die "Bearbeiten"-Schaltfläche in der Ansichts-Vorlage und eine für das Bearbeitungsfeld in der Bearbeitungsvorlage.

```jsx
const editFieldRef = useRef(null);
const editButtonRef = useRef(null);
```

Diese Refs haben einen Standardwert von `null`, um deutlich zu machen, dass sie leer sind, bis sie an ihre DOM-Elemente angehängt werden. Um sie an ihre Elemente anzuhängen, fügen wir das spezielle `ref`-Attribut zu jedem Element in JSX hinzu und setzen die Werte dieser Attribute auf die entsprechend benannten `ref`-Objekte.

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

Aktualisieren Sie die "Bearbeiten"-Schaltfläche in Ihrer Ansichtsvorlage, sodass sie so aussieht:

```jsx
<button
  type="button"
  className="btn"
  onClick={() => setEditing(true)}
  ref={editButtonRef}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

Damit füllen wir unsere `editFieldRef` und `editButtonRef` mit Referenzen zu den DOM-Elementen, an die sie angehängt sind, jedoch _nur_ nachdem React die Komponente gerendert hat. Testen Sie das selbst: Fügen Sie die folgende Zeile irgendwo im Body Ihrer `Todo()`-Funktion hinzu, unterhalb der Stelle, an der `editButtonRef` initialisiert wird:

```jsx
console.log(editButtonRef.current);
```

Sie werden sehen, dass der Wert von `editButtonRef.current` `null` ist, wenn die Komponente das erste Mal gerendert wird, aber wenn Sie auf eine "Bearbeiten"-Schaltfläche klicken, wird das `<button>`-Element in die Konsole geloggt. Dies liegt daran, dass das Ref nur populiert wird, nachdem die Komponente gerendert wird, und das Klicken auf die "Bearbeiten"-Schaltfläche bewirkt, dass die Komponente neu rendert. Stellen Sie sicher, dass Sie dieses Log löschen, bevor Sie fortfahren.

> [!NOTE]
> Ihre Logs werden 6 Mal erscheinen, weil wir 3 Instanzen von `<Todo />` in unserer App haben und React unsere Komponenten zweimal in der Entwicklung rendert.

Wir kommen der Sache näher! Um unsere neu referenzierten Elemente zu nutzen, müssen wir einen weiteren React-Hook verwenden: `useEffect()`.

### Implementierung von `useEffect()`

[`useEffect()`](https://react.dev/reference/react/useEffect) ist so benannt, weil es alle Nebeneffekte ausführt, die wir dem Renderprozess hinzufügen möchten, aber nicht im Hauptfunktionskörper ausgeführt werden können. `useEffect()` wird direkt nach dem Rendern einer Komponente ausgeführt, was bedeutet, dass die DOM-Elemente, auf die wir im vorherigen Abschnitt referenziert haben, für uns verfügbar sind.

Ändern Sie die Import-Anweisung von `Todo.jsx` erneut, um `useEffect` hinzuzufügen:

```jsx
import { useEffect, useRef, useState } from "react";
```

`useEffect()` nimmt eine Funktion als Argument an; diese Funktion wird _nachdem_ die Komponente gerendert wurde, ausgeführt. Um das zu demonstrieren, setzen Sie den folgenden `useEffect()`-Aufruf direkt über die `return`-Anweisung im Body von `Todo()` und übergeben eine Funktion, die die Worte "Nebeneffekt" in Ihre Konsole loggt:

```jsx
useEffect(() => {
  console.log("side effect");
});
```

Um den Unterschied zwischen dem Haupt-Renderprozess und dem Code, der innerhalb von `useEffect()` ausgeführt wird, zu veranschaulichen, fügen Sie ein weiteres Log hinzu – setzen Sie dieses unterhalb der vorherigen Addition:

```jsx
console.log("main render");
```

Öffnen Sie nun die App in Ihrem Browser. Sie sollten beide Nachrichten in Ihrer Konsole sehen, und jede wird mehrfach wiederholt. Beachten Sie, wie "Hauptrendr" zuerst geloggt wurde und "Nebeneffekt" als zweites, obwohl das "Nebeneffekt"-Log zuerst im Code erscheint.

```plain
main render                                     Todo.jsx
side effect                                     Todo.jsx
```

Auch hier sind die Logs in dieser Reihenfolge, weil Code innerhalb von `useEffect()` _nachdem_ die Komponente rendert, läuft. Das erfordert einige Eingewöhnung, beachten Sie es einfach, während Sie voranschreiten. Derzeit löschen Sie `console.log("Hauptrendr")` und wir machen weiter mit der Implementierung unseres Fokusmanagements.

### Fokussierung auf unser Bearbeitungsfeld

Jetzt, da wir wissen, dass unser `useEffect()`-Hook funktioniert, können wir den Fokus damit verwalten. Zur Erinnerung: Wir wollen das Bearbeitungsfeld fokussieren, wenn wir zur Bearbeitungsvorlage wechseln.

Aktualisieren Sie Ihren bestehenden `useEffect()`-Hook, sodass er wie folgt aussieht:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  }
}, [isEditing]);
```

Diese Änderungen sorgen dafür, dass, wenn `isEditing` wahr ist, React den aktuellen Wert des `editFieldRef` liest und den Fokus des Browsers darauf verschiebt. Wir übergeben auch ein Array an `useEffect()` als zweites Argument. Dieses Array ist eine Liste von Werten, auf die `useEffect()` angewiesen sein sollte. Mit diesen enthaltenen Werten wird `useEffect()` nur dann ausgeführt, wenn sich einer dieser Werte ändert. Wir möchten den Fokus nur dann ändern, wenn sich der Wert von `isEditing` ändert.

Probieren Sie es jetzt aus: Verwenden Sie die <kbd>Tab</kbd>-Taste, um zu einer der "Bearbeiten"-Schaltflächen zu navigieren, und drücken Sie dann <kbd>Enter</kbd>. Sie sollten sehen, wie die `<Todo />`-Komponente zur Bearbeitungsvorlage wechselt und der Fokus-Indikator des Browsers um das `<input>`-Element erscheint!

### Rückverschieben des Fokus zur Bearbeiten-Schaltfläche

Auf den ersten Blick scheint es täuschend einfach zu sein, React den Fokus zurück zu unserer "Bearbeiten"-Schaltfläche verschieben zu lassen, wenn die Bearbeitung gespeichert oder abgebrochen wird. Sicherlich könnten wir eine Bedingung zu unserem `useEffect` hinzufügen, um die Bearbeiten-Schaltfläche zu fokussieren, wenn `isEditing` falsch ist? Versuchen wir es jetzt — aktualisieren Sie Ihren `useEffect()`-Aufruf wie folgt:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  } else {
    editButtonRef.current.focus();
  }
}, [isEditing]);
```

Dies funktioniert irgendwie. Wenn Sie Ihre Tastatur verwenden, um die "Bearbeiten"-Schaltfläche auszulösen (denken Sie daran: <kbd>Tab</kbd> darauf, und drücken Sie <kbd>Enter</kbd>), werden Sie sehen, dass sich Ihr Fokus zwischen dem Bearbeitungs-`<input>` und der "Bearbeiten"-Schaltfläche verschiebt, während Sie eine Bearbeitung beginnen und beenden. Vielleicht haben Sie jedoch ein neues Problem bemerkt — die "Bearbeiten"-Schaltfläche in der finalen `<Todo />`-Komponente ist direkt beim Laden der Seite fokussiert, bevor wir überhaupt mit der App interagieren!

Unser `useEffect()`-Hook verhält sich genau so, wie wir es entworfen haben: er wird sofort ausgeführt, wenn die Komponente sich rendert, sieht, dass `isEditing` falsch ist, und fokussiert sofort die "Bearbeiten"-Schaltfläche. Es gibt drei Instanzen von `<Todo />`, und der Fokus geht auf die "Bearbeiten"-Schaltfläche derjenigen, die zuletzt rendert.

Wir müssen unseren Ansatz überarbeiten, damit sich der Fokus nur dann ändert, wenn `isEditing` sich von einem Wert zu einem anderen ändert.

## Robusteres Fokusmanagement

Um unsere verfeinerten Kriterien zu erfüllen, müssen wir nicht nur den Wert von `isEditing` kennen, sondern auch _wann_ sich dieser Wert geändert hat. Dafür müssen wir in der Lage sein, den vorherigen Wert der Konstanten `isEditing` zu lesen. Mit Pseudocode sollte unsere Logik ungefähr so aussehen:

```jsx
if (wasNotEditingBefore && isEditingNow) {
  focusOnEditField();
} else if (wasEditingBefore && isNotEditingNow) {
  focusOnEditButton();
}
```

Das React-Team hat [Wege zur Ermittlung des vorherigen Zustands einer Komponente](https://legacy.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state) diskutiert und ein Beispiel-Hook bereitgestellt, den wir für diese Aufgabe verwenden können.

### Einführung von `usePrevious()`

Fügen Sie den folgenden Code in der Nähe des oberen Bereichs von `Todo.jsx`, oberhalb Ihrer `Todo()`-Funktion, ein.

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

`usePrevious()` ist ein _benutzerdefinierter Hook_, der einen Wert über mehrere Durchläufe hinweg verfolgt. Er:

1. Verwendet den `useRef()`-Hook, um ein leeres `ref` zu erstellen.
2. Gibt den aktuellen Wert des `ref` an die Komponente zurück, die es aufgerufen hat.
3. Ruft `useEffect()` auf und aktualisiert den Wert, der in `ref.current` nach jeweils jedem Rendern der aufrufenden Komponente gespeichert ist.

Das Verhalten von `useEffect()` ist der Schlüssel zu dieser Funktionalität. Da `ref.current` innerhalb eines `useEffect()`-Aufrufs aktualisiert wird, ist es immer einen Schritt hinter dem Wert, der im Haupt-Renderzyklus der Komponente ist – daher der Name `usePrevious()`.

### Nutzung von `usePrevious()`

Jetzt können wir eine Konstante `wasEditing` definieren, um den vorherigen Wert von `isEditing` zu verfolgen; dies wird erreicht, indem `usePrevious` mit `isEditing` als Argument aufgerufen wird. Fügen Sie das Folgende innerhalb von `Todo()`, unterhalb der `useRef`-Zeilen hinzu:

```jsx
const wasEditing = usePrevious(isEditing);
```

Sie können sehen, wie `usePrevious()` funktioniert, indem Sie ein Konsolen-Log unter dieser Zeile hinzufügen:

```jsx
console.log(wasEditing);
```

In diesem Log wird der aktuelle Wert von `wasEditing` immer der vorherige Wert von `isEditing` sein. Klicken Sie ein paar Mal auf die "Bearbeiten"- und "Abbrechen"-Schaltfläche, um zu sehen, wie er sich ändert, und löschen Sie diesen Log, wenn Sie bereit sind, fortzufahren.

Mit dieser `wasEditing`-Konstante können wir unseren `useEffect()`-Hook aktualisieren, um den zuvor besprochenen Pseudocode umzusetzen:

```jsx
useEffect(() => {
  if (!wasEditing && isEditing) {
    editFieldRef.current.focus();
  } else if (wasEditing && !isEditing) {
    editButtonRef.current.focus();
  }
}, [wasEditing, isEditing]);
```

Beachten Sie, dass die Logik von `useEffect()` jetzt von `wasEditing` abhängt, also geben wir sie im Array der Abhängigkeiten an.

Probieren Sie aus, mit Ihrer Tastatur die "Bearbeiten"- und "Abbrechen"-Schaltflächen in der `<Todo />`-Komponente zu aktivieren; Sie werden den Fokus-Indikator des Browsers sehen, wie er sich angemessen bewegt, ohne das Problem, das wir zu Beginn dieses Abschnitts besprochen haben.

## Fokussierung, wenn der Benutzer eine Aufgabe löscht

Es gibt noch eine letzte Lücke bei der Tastaturerfahrung: Wenn ein Benutzer eine Aufgaben aus der Liste löscht, verschwindet der Fokus. Wir werden ein ähnliches Muster wie bei unseren vorherigen Änderungen folgen: Wir werden ein neues Ref erstellen und den `usePrevious()`-Hook nutzen, sodass wir den Fokus auf die Listenüberschrift richten können, wann immer ein Benutzer eine Aufgabe löscht.

### Warum die Listenüberschrift?

Manchmal ist der Ort, zu dem wir unseren Fokus schicken wollen, offensichtlich: als wir unsere `<Todo />`-Vorlagen umgeschaltet haben, hatten wir einen Ausgangspunkt, zu dem wir "zurück" gehen konnten – die "Bearbeiten"-Schaltfläche. In diesem Fall entfernen wir jedoch komplette Elemente aus dem DOM, und haben keinen Ort, um darauf zurückzuverweisen. Der nächstbeste Ort ist eine intuitive Position irgendwo in der Nähe. Die Listenüberschrift ist unsere beste Wahl, weil sie sich in der Nähe des Listenelements befindet, das der Benutzer löscht, und durch den Fokus darauf wird dem Benutzer angezeigt, wie viele Aufgaben noch übrig sind.

### Erstellen unseres Refs

Importieren Sie die `useRef()` und `useEffect()` Hooks in `App.jsx` — Sie benötigen sie beide unten:

```jsx
import { useState, useRef, useEffect } from "react";
```

Deklarieren Sie als nächstes ein neues Ref innerhalb der `App()`-Funktion, direkt über der `return`-Anweisung:

```jsx
const listHeadingRef = useRef(null);
```

### Vorbereitung der Überschrift

Überschriftselemente wie unser `<h2>` sind normalerweise nicht fokussierbar. Das ist kein Problem — wir können jedes Element programmatisch fokussierbar machen, indem wir das Attribut [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) hinzufügen. Das bedeutet, dass es _nur mit JavaScript_ fokussierbar ist. Sie können nicht durch Drücken der <kbd>Tab</kbd>-Taste ein Element mit einem tabindex von `-1` fokussieren, so wie Sie es mit einem [`<button>`](/de/docs/Web/HTML/Reference/Elements/button) oder [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) Element können (das mit `tabindex="0"` erreicht werden kann, was aber in diesem Fall nicht angemessen ist).

Fügen wir das `tabindex` Attribut — in JSX als `tabIndex` geschrieben — der Überschrift über unserer Aufgabenliste hinzu, zusammen mit unserem `listHeadingRef`:

```jsx
<h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
  {headingText}
</h2>
```

> [!NOTE]
> Das `tabindex`-Attribut ist ausgezeichnet für Barrierefreiheitsrandfälle, aber Sie sollten **sehr vorsichtig** sein, es nicht zu oft zu verwenden. Fügen Sie einem Element nur dann ein `tabindex` hinzu, wenn Sie sicher sind, dass es den Nutzern auf irgendeine Weise nützt, dieses Element fokussierbar zu machen. In den meisten Fällen sollten Sie Elemente verwenden, die natürlich den Fokus übernehmen können, wie Schaltflächen, Anker und Eingaben. Unverantwortlicher Umgang mit `tabindex` könnte sich stark negativ auf Tastatur- und Bildschirmleser-Nutzer auswirken!

### Vorherigen Zustand erhalten

Wir möchten das Element, das mit unserem Ref verbunden ist (über das `ref`-Attribut), nur dann fokussieren, wenn unsere Benutzer eine Aufgabe aus ihrer Liste löschen. Dafür benötigen wir den zuvor verwendeten `usePrevious()`-Hook. Fügen Sie ihn oben in der Datei `App.jsx`, direkt unter den Importen hinzu:

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

Fügen Sie nun Folgendes hinzu, oberhalb der `return`-Anweisung innerhalb der `App()`-Funktion:

```jsx
const prevTaskLength = usePrevious(tasks.length);
```

Hier rufen wir `usePrevious()` auf, um die vorherige Länge des Aufgaben-Arrays zu verfolgen.

> [!NOTE]
> Da wir jetzt `usePrevious()` in zwei Dateien verwenden, wäre es effizienter, die `usePrevious()`-Funktion in eine eigene Datei zu verschieben, sie aus dieser Datei zu exportieren und sie dort zu importieren, wo Sie sie benötigen. Versuchen Sie dies als Übung, sobald Sie das Ende erreicht haben.

### Verwendung von `useEffect()` zur Steuerung unseres Überschriftfokus

Nun, da wir gespeichert haben, wie viele Aufgaben wir zuvor hatten, können wir einen `useEffect()`-Hook einrichten, um auszuführen, wenn sich unsere Anzahl der Aufgaben ändert, der die Überschrift fokussieren wird, wenn die Anzahl der Aufgaben, die wir jetzt haben, kleiner ist als vorher — also wenn wir eine Aufgabe gelöscht haben!

Fügen Sie Folgendes in den Körper Ihrer `App()`-Funktion, direkt unterhalb Ihrer vorherigen Ergänzungen, hinzu:

```jsx
useEffect(() => {
  if (tasks.length < prevTaskLength) {
    listHeadingRef.current.focus();
  }
}, [tasks.length, prevTaskLength]);
```

Wir versuchen nur den Fokus auf unsere Listenüberschrift zu richten, wenn wir jetzt weniger Aufgaben haben als zuvor. Die Abhängigkeiten, die in diesen Hook übergeben werden, sorgen dafür, dass er nur versucht wird, neu zu laufen, wenn sich einer dieser Werte (die Anzahl aktueller Aufgaben oder die Anzahl vorheriger Aufgaben) ändert.

Nun, wenn Sie Ihre Tastatur nutzen, um eine Aufgabe in Ihrem Browser zu löschen, werden Sie unseren gestrichelten Fokus-Indikator um die Überschrift über der Liste herum erscheinen sehen.

## Fertig!

Sie haben gerade eine React-App von Grund auf neu erstellt! Herzlichen Glückwunsch! Die hier erworbenen Fähigkeiten bilden eine tolle Grundlage, um weiter mit React zu arbeiten.

Die meiste Zeit können Sie ein effektiver Mitwirkender an einem React-Projekt sein, auch wenn das nur bedeutet, sorgfältig über Komponenten und deren State und Props nachzudenken. Denken Sie immer daran, den besten HTML-Code zu schreiben, den Sie können.

`useRef()` und `useEffect()` sind einigermaßen fortgeschrittene Funktionen, und Sie können sich stolz darauf sein, sie verwendet zu haben! Achten Sie auf Gelegenheiten, um sie weiter zu üben, denn das wird Ihnen ermöglichen, inklusive Erlebnisse für die Benutzer zu schaffen. Denken Sie daran: Unsere App wäre ohne Sie für Tastaturbenutzer nicht barrierefrei!

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, können Sie eine fertige Version des Beispiel-React-App-Codes in unserem [todo-react-Repository](https://github.com/mdn/todo-react) finden. Für eine laufende Live-Version siehe <https://mdn.github.io/todo-react/>.

Im allerletzten Artikel präsentieren wir Ihnen eine Liste von React-Ressourcen, die Sie verwenden können, um Ihr Lernen weiter zu vertiefen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/React_resources", "Learn_web_development/Core/Frameworks_libraries")}}
