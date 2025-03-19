---
title: Barrierefreiheit in React
short-title: React Barrierefreiheit
slug: Learn_web_development/Core/Frameworks_libraries/React_accessibility
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/React_resources", "Learn_web_development/Core/Frameworks_libraries")}}

In unserem letzten Tutorial-Artikel konzentrieren wir uns auf Barrierefreiheit, einschließlich Fokus-Management in React, das die Benutzerfreundlichkeit verbessern und Verwirrung sowohl für reine Tastaturnutzer als auch für Screenreader-Benutzer reduzieren kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie mit dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Kommandozeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>Implementierung von Tastaturzugänglichkeit in React.</td>
    </tr>
  </tbody>
</table>

## Einbeziehung von Tastaturnutzern

An diesem Punkt haben wir alle Funktionen implementiert, die wir umsetzen wollten. Benutzer können eine neue Aufgabe hinzufügen, Aufgaben ab- und anhaken, Aufgaben löschen oder Aufgabennamen bearbeiten. Außerdem können sie ihre Aufgabenliste nach allen, aktiven oder erledigten Aufgaben filtern.

Oder zumindest können sie all diese Dinge mit der Maus tun. Leider sind diese Funktionen für reine Tastaturnutzer nicht sehr zugänglich. Lassen Sie uns das jetzt erkunden.

## Das Problem der Tastaturbenutzbarkeit erkunden

Beginnen Sie, indem Sie auf das Eingabefeld oben in unserer App klicken, als ob Sie eine neue Aufgabe hinzufügen möchten. Sie sehen einen dicken, gestrichelten Umriss um dieses Eingabefeld. Dieser Umriss ist Ihr visueller Indikator dafür, dass der Browser momentan auf dieses Element fokussiert ist. Drücken Sie die <kbd>Tab</kbd>-Taste, und Sie werden den Umriss um den "Add"-Button unter dem Eingabefeld erscheinen sehen. Dies zeigt an, dass sich der Fokus des Browsers verschoben hat.

Drücken Sie noch ein paar Mal <kbd>Tab</kbd>, und Sie werden sehen, wie sich dieser gestrichelte Fokusindikator zwischen den einzelnen Filter-Buttons bewegt. Fahren Sie fort, bis der Fokusindikator um den ersten "Edit"-Button liegt. Drücken Sie <kbd>Enter</kbd>.

Die `<Todo />`-Komponente wird, wie wir gestaltet haben, das Template wechseln und Sie werden ein Formular sehen, das es uns ermöglicht, den Namen der Aufgabe zu bearbeiten.

Aber wohin ist unser Fokusindikator verschwunden?

Wenn wir zwischen Templates in unserer `<Todo />`-Komponente wechseln, entfernen wir die Elemente des alten Templates vollständig und ersetzen sie durch die Elemente des neuen Templates. Das bedeutet, dass das Element, auf das wir fokussiert waren, nicht mehr existiert, sodass es keinen visuellen Hinweis darauf gibt, wo der Fokus des Browsers ist. Dies könnte eine Vielzahl von Benutzern verwirren - insbesondere Benutzer, die auf die Tastatur angewiesen sind oder Benutzer, die Hilfstechnologien verwenden.

Um die Erfahrung für Tastatur- und Hilfstechnologie-Nutzer zu verbessern, sollten wir den Fokus des Browsers selbst verwalten.

### Hinweis: eine Notiz zu unserem Fokusindikator

Wenn Sie mit Ihrer Maus auf die "All", "Active" oder "Completed" Filter-Buttons klicken, werden Sie keinen sichtbaren Fokusindikator sehen, aber Sie werden einen sehen, wenn Sie zwischen ihnen mit der <kbd>Tab</kbd>-Taste auf Ihrer Tastatur wechseln. Keine Sorge — Ihr Code ist nicht kaputt!

Unsere CSS-Datei verwendet die [`:focus-visible`](/de/docs/Web/CSS/:focus-visible) Pseudoklasse, um benutzerdefinierte Styles für den Fokusindikator bereitzustellen, und der Browser verwendet eine Reihe interner Regeln, um zu bestimmen, wann er ihn dem Nutzer zeigen soll. Im Allgemeinen wird der Browser einen Fokusindikator als Reaktion auf Tastatureingaben anzeigen und könnte ihn als Reaktion auf Mauseingaben anzeigen. `<button>`-Elemente zeigen keinen Fokusindikator als Reaktion auf Mauseingaben, während `<input>`-Elemente dies tun.

Das Verhalten von `:focus-visible` ist selektiver als die ältere [`:focus`](/de/docs/Web/CSS/:focus) Pseudoklasse, mit der Sie vielleicht vertrauter sind. `:focus` zeigt in vielen weiteren Situationen einen Fokusindikator an, und Sie können es anstelle von oder in Kombination mit `:focus-visible` nutzen, wenn Sie dies bevorzugen.

## Fokussieren zwischen Templates

Wenn ein Benutzer das `<Todo />`-Template vom Ansehen zum Bearbeiten wechselt, sollten wir den Fokus auf das `<input>` legen, das zum Umbenennen verwendet wird; wenn er vom Bearbeiten zurück zum Ansehen wechselt, sollten wir den Fokus zurück auf den "Edit"-Button bewegen.

### Elemente anvisieren

Bis zu diesem Punkt haben wir JSX-Komponenten geschrieben und React die resultierende DOM hinter den Kulissen erstellen lassen. Die meiste Zeit müssen wir keine spezifischen Elemente im DOM anvisieren, weil wir Reacts Zustand und Props verwenden können, um zu kontrollieren, was gerendert wird. Um den Fokus zu verwalten, müssen wir jedoch in der Lage sein, gezielt auf spezifische DOM-Elemente zuzugreifen.

Hier kommt der `useRef()` Hook ins Spiel.

Ändern Sie zunächst die `import`-Anweisung am Anfang von `Todo.jsx`, sodass sie `useRef` enthält:

```jsx
import { useRef, useState } from "react";
```

`useRef()` erstellt ein Objekt mit einer einzigen Eigenschaft: `current`. Refs können beliebige Werte speichern, die wir später abrufen können. Wir können sogar Referenzen auf DOM-Elemente speichern, was genau das ist, was wir hier tun werden.

Erstellen Sie als Nächstes zwei neue Konstanten unter den `useState()` Hooks in Ihrer `Todo()` Funktion. Jede sollte eine Ref sein – eine für den "Edit"-Button im Ansichtstemplate und eine für das Bearbeitungsfeld im Bearbeitungstemplate.

```jsx
const editFieldRef = useRef(null);
const editButtonRef = useRef(null);
```

Diese Refs haben einen Standardwert von `null`, um klarzustellen, dass sie leer sind, bis sie an ihre DOM-Elemente angefügt werden. Um sie an ihre Elemente zu binden, fügen wir jedem Element im JSX das spezielle `ref`-Attribut hinzu und setzen die Werte dieser Attribute auf die entsprechend benannten `ref`-Objekte.

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

Aktualisieren Sie den "Edit"-Button in Ihrem Ansichtstemplate, sodass er so aussieht:

```jsx
<button
  type="button"
  className="btn"
  onClick={() => setEditing(true)}
  ref={editButtonRef}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

Dadurch werden unsere `editFieldRef` und `editButtonRef` mit Referenzen auf die DOM-Elemente befüllt, an die sie gebunden sind, aber _nur_ nachdem React die Komponente gerendert hat. Testen Sie dies selbst: Fügen Sie die folgende Zeile irgendwo im Körper Ihrer `Todo()` Funktion hinzu, unterhalb der Initialisierung von `editButtonRef`:

```jsx
console.log(editButtonRef.current);
```

Sie werden feststellen, dass der Wert von `editButtonRef.current` `null` ist, wenn die Komponente erstmals gerendert wird, aber wenn Sie auf einen "Edit"-Button klicken, wird das `<button>`-Element in der Konsole protokolliert. Dies liegt daran, dass die Ref erst nach dem Rendern der Komponente befüllt wird und das Klicken auf den "Edit"-Button die Komponente neu darstellt. Achten Sie darauf, dieses Log zu löschen, bevor Sie fortfahren.

> [!NOTE]
> Ihre Logs werden 6 Mal erscheinen, da wir 3 Instanzen von `<Todo />` in unserer App haben und React unsere Komponenten zweimal in der Entwicklung rendert.

Wir kommen der Sache näher! Um von unseren neu referenzierten Elementen zu profitieren, müssen wir einen weiteren React Hook verwenden: `useEffect()`.

### Implementierung von `useEffect()`

[`useEffect()`](https://react.dev/reference/react/useEffect) ist so benannt, weil es alle Nebenwirkungen ausführt, die wir dem Renderprozess hinzufügen möchten, die aber nicht im Hauptkörper der Funktion ausgeführt werden können. `useEffect()` läuft direkt nach dem Rendern einer Komponente, was bedeutet, dass die DOM-Elemente, auf die wir im vorherigen Abschnitt referenziert haben, für uns verfügbar sind.

Ändern Sie die Importanweisung von `Todo.jsx` erneut, um `useEffect` hinzuzufügen:

```jsx
import { useEffect, useRef, useState } from "react";
```

`useEffect()` nimmt eine Funktion als Argument; diese Funktion wird _nach_ dem Rendern der Komponente ausgeführt. Um dies zu demonstrieren, fügen Sie den folgenden `useEffect()`-Aufruf direkt über der `return`-Anweisung im Körper von `Todo()` ein und übergeben eine Funktion, die den Ausdruck "side effect" in Ihre Konsole protokolliert:

```jsx
useEffect(() => {
  console.log("side effect");
});
```

Um den Unterschied zwischen dem Haupt-Renderprozess und dem in `useEffect()` ausgeführten Code zu veranschaulichen, fügen Sie ein weiteres Log hinzu – platzieren Sie dieses unter der vorherigen Hinzufügung:

```jsx
console.log("main render");
```

Öffnen Sie nun die App in Ihrem Browser. Sie sollten beide Nachrichten in Ihrer Konsole sehen, wobei sich jede mehrmals wiederholt. Beachten Sie, dass "main render" zuerst protokolliert wurde und "side effect" als zweites, obwohl das "side effect" Log zuerst im Code erscheint.

```plain
main render                                     Todo.jsx
side effect                                     Todo.jsx
```

Nochmals, die Logs sind auf diese Weise geordnet, weil der Code innerhalb von `useEffect()` _nach_ dem Rendern der Komponente ausgeführt wird. Dies erfordert ein wenig Gewöhnung, behalten Sie es einfach im Hinterkopf, während Sie fortfahren. Löschen Sie vorerst `console.log("main render")` und wir machen mit der Implementierung unseres Fokussierungsmanagements weiter.

### Fokussierung auf unser Bearbeitungsfeld

Jetzt, da wir wissen, dass unser `useEffect()` Hook funktioniert, können wir den Fokus damit verwalten. Zur Erinnerung: wir wollen den Fokus beim Wechsel zum Bearbeitungstemplate auf das Bearbeitungsfeld legen.

Aktualisieren Sie Ihren bestehenden `useEffect()` Hook, damit er so aussieht:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  }
}, [isEditing]);
```

Diese Änderungen sorgen dafür, dass React den aktuellen Wert von `editFieldRef` liest und den Browserfokus darauf setzt, wenn `isEditing` wahr ist. Wir geben auch ein Array als zweites Argument in `useEffect()` ein. Dieses Array ist eine Liste von Werten, auf die `useEffect()` angewiesen sein sollte. Mit diesen eingeschlossenen Werten läuft `useEffect()` nur, wenn sich einer dieser Werte ändert. Wir wollen den Fokus nur dann ändern, wenn sich der Wert von `isEditing` ändert.

Probieren Sie es jetzt aus: Verwenden Sie die <kbd>Tab</kbd>-Taste, um zu einem der "Edit"-Buttons zu navigieren und drücken Sie <kbd>Enter</kbd>. Sie sollten sehen, wie die `<Todo />`-Komponente zu ihrem Bearbeitungstemplate wechselt und der Fokusindikator des Browsers um das `<input>`-Element erscheint!

### Rückkehr des Fokus zum Edit-Button

Auf den ersten Blick scheint es recht einfach zu sein, React dazu zu bringen, den Fokus zurück auf unseren "Edit"-Button zu legen, wenn die Bearbeitung gespeichert oder abgebrochen wird. Sicherlich könnten wir eine Bedingung zu unserem `useEffect` hinzufügen, um den Fokus auf den Edit-Button zu legen, wenn `isEditing` `false` ist? Probieren wir es aus — aktualisieren Sie Ihren `useEffect()`-Aufruf wie folgt:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  } else {
    editButtonRef.current.focus();
  }
}, [isEditing]);
```

Dies funktioniert irgendwie. Wenn Sie Ihre Tastatur verwenden, um den "Edit"-Button auszulösen (denken Sie daran: <kbd>Tab</kbd> darauf und <kbd>Enter</kbd> drücken), werden Sie sehen, dass sich der Fokus zwischen dem Edit `<input>` und dem "Edit"-Button bewegt, wenn Sie eine Bearbeitung starten und beenden. Sie haben jedoch vielleicht ein neues Problem bemerkt – der "Edit"-Button in der letzten `<Todo />`-Komponente wird sofort beim Laden der Seite fokussiert, bevor wir die App überhaupt genutzt haben!

Unser `useEffect()`-Hook verhält sich genau so, wie wir es entworfen haben: er läuft, sobald die Komponente gerendert wird, sieht, dass `isEditing` `false` ist, und fokussiert den "Edit"-Button. Er gibt den Fokus auf den "Edit"-Button der letzten gerenderten von drei `<Todo />`-Instanzen.

Wir müssen unseren Ansatz umstrukturieren, damit der Fokus nur dann geändert wird, wenn `isEditing` von einem Wert zum anderen wechselt.

## Robusteres Fokussierungsmanagement

Um unsere verfeinerten Kriterien zu erfüllen, müssen wir nicht nur den Wert von `isEditing` kennen, sondern auch _wann sich dieser Wert geändert hat_. Dazu müssen wir in der Lage sein, den vorherigen Wert der `isEditing`-Konstante zu lesen. Mithilfe von Pseudocode sollte unsere Logik in etwa so aussehen:

```jsx
if (wasNotEditingBefore && isEditingNow) {
  focusOnEditField();
} else if (wasEditingBefore && isNotEditingNow) {
  focusOnEditButton();
}
```

Das React-Team hat [Möglichkeiten besprochen, um den vorherigen Zustand einer Komponente zu erhalten](https://legacy.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state) und ein Beispiel-Hook bereitgestellt, das wir für diese Aufgabe verwenden können.

### Einführung von `usePrevious()`

Fügen Sie den folgenden Code in der Nähe des Anfangs von `Todo.jsx` ein, oberhalb Ihrer `Todo()`-Funktion.

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

`usePrevious()` ist ein _Custom Hook_, der einen Wert über Rendervorgänge hinweg verfolgt. Es:

1. Verwendet den `useRef()` Hook, um eine leere `ref` zu erstellen.
2. Gibt den `current`-Wert der `ref` an die aufrufende Komponente zurück.
3. Ruft `useEffect()` auf und aktualisiert den in `ref.current` gespeicherten Wert nach jedem Rendern der aufrufenden Komponente.

Das Verhalten von `useEffect()` ist der Schlüsselfaktor für diese Funktionalität. Da `ref.current` innerhalb eines `useEffect()`-Aufrufs aktualisiert wird, liegt es immer einen Schritt hinter dem Wert in der Hauptschleife der Komponente zurück – daher der Name `usePrevious()`.

### Verwendung von `usePrevious()`

Jetzt können wir eine `wasEditing`-Konstante definieren, um den vorherigen Wert von `isEditing` zu verfolgen; dies wird erreicht, indem `usePrevious` mit `isEditing` als Argument aufgerufen wird. Fügen Sie das folgende innerhalb von `Todo()`, unterhalb der `useRef`-Zeilen hinzu:

```jsx
const wasEditing = usePrevious(isEditing);
```

Sie können sehen, wie sich `usePrevious()` verhält, indem Sie ein Konsolenprotokoll unterhalb dieser Zeile hinzufügen:

```jsx
console.log(wasEditing);
```

In diesem Protokoll wird der `current`-Wert von `wasEditing` immer der vorherige Wert von `isEditing` sein. Klicken Sie ein paar Mal auf den "Edit"- und "Cancel"-Button, um zu sehen, wie er sich ändert, und löschen Sie dieses Log, wenn Sie bereit sind, weiterzumachen.

Mit dieser `wasEditing`-Konstanten können wir unseren `useEffect()`-Hook aktualisieren, um die zuvor besprochene Pseudocode-Logik zu implementieren:

```jsx
useEffect(() => {
  if (!wasEditing && isEditing) {
    editFieldRef.current.focus();
  } else if (wasEditing && !isEditing) {
    editButtonRef.current.focus();
  }
}, [wasEditing, isEditing]);
```

Beachten Sie, dass die Logik von `useEffect()` nun von `wasEditing` abhängt, sodass wir es in das Abhängigkeitsarray aufnehmen.

Versuchen Sie, Ihre Tastatur zu verwenden, um die "Edit"- und "Cancel"-Buttons in der `<Todo />`-Komponente zu aktivieren; Sie werden sehen, wie sich der Fokusindikator des Browsers entsprechend bewegt, ohne das Problem, das wir zu Beginn dieses Abschnitts besprochen haben.

## Fokussierung, wenn der Benutzer eine Aufgabe löscht

Es gibt noch eine letzte Lücke in der Tastaturerfahrung: Wenn ein Benutzer eine Aufgabe aus der Liste löscht, verschwindet der Fokus. Wir werden ein ähnliches Muster wie bei unseren vorherigen Änderungen befolgen: wir erstellen eine neue Ref und nutzen unseren `usePrevious()`-Hook, damit wir den Fokus auf die Listenüberschrift legen können, wann immer ein Benutzer eine Aufgabe löscht.

### Warum die Listenüberschrift?

Manchmal ist der Ort, an den wir unseren Fokus senden möchten, offensichtlich: Als wir die `<Todo />`-Templates umgeschaltet haben, hatten wir einen Ausgangspunkt, zu dem wir "zurückgehen" konnten – den "Edit"-Button. In diesem Fall jedoch, da wir Elemente vollständig aus der DOM entfernen, haben wir keinen Ort, zu dem wir zurückkehren können. Das nächstbeste ist ein intuitiver Standort in der Nähe. Die Listenüberschrift ist die beste Wahl, da sie sich in der Nähe des Listenelements befindet, das der Benutzer löscht, und der Fokus darauf wird den Benutzer darüber informieren, wie viele Aufgaben noch übrig sind.

### Erstellung unserer Ref

Importieren Sie die `useRef()`- und `useEffect()`-Hooks in `App.jsx` — Sie benötigen beide unten:

```jsx
import { useState, useRef, useEffect } from "react";
```

Deklarieren Sie als Nächstes eine neue Ref innerhalb der `App()`-Funktion, direkt über der `return`-Anweisung:

```jsx
const listHeadingRef = useRef(null);
```

### Vorbereitung der Überschrift

Überschriftselemente wie unser `<h2>` sind normalerweise nicht fokussierbar. Dies ist kein Problem – wir können jedes Element programmatisch fokussierbar machen, indem wir ihm das Attribut [`tabindex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) hinzufügen. Dies bedeutet nur mit JavaScript fokussierbar. Sie können nicht durch Drücken von <kbd>Tab</kbd> ein Element mit einem Tabindex von `-1` fokussieren, wie Sie es mit einem [`<button>`](/de/docs/Web/HTML/Element/button) oder [`<a>`](/de/docs/Web/HTML/Element/a) Element tun könnten (dies kann mit `tabindex="0"` getan werden, aber das ist in diesem Fall nicht angemessen).

Lassen Sie uns das `tabindex`-Attribut — in JSX als `tabIndex` geschrieben — zur Überschrift über unserer Aufgabenliste hinzufügen, zusammen mit unserer `listHeadingRef`:

```jsx
<h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
  {headingText}
</h2>
```

> [!NOTE]
> Das `tabindex`-Attribut ist hervorragend für einige Barrierefallstricke, aber Sie sollten **große Sorgfalt** darauf verwenden, es nicht zu übernutzen. Wenden Sie einen `tabindex` nur dann auf ein Element an, wenn Sie sicher sind, dass das Fokussieren des Elements Ihrem Nutzer in irgendeiner Weise zugutekommt. In den meisten Fällen sollten Sie Elemente verwenden, die auf natürliche Weise fokussierbar sind, wie Buttons, Anker und Eingaben. Eine unverantwortliche Nutzung des `tabindex` könnte massive negative Auswirkungen auf Tastatur- und Screenreader-Nutzer haben!

### Vorherigen Zustand abrufen

Wir wollen den Fokus auf das Element legen, das mit unserer Ref (über das `ref`-Attribut) verknüpft ist, nur wenn unser Nutzer eine Aufgabe aus seiner Liste löscht. Das wird die Nutzung des `usePrevious()`-Hooks erfordern, den wir zuvor genutzt haben. Fügen Sie es am Anfang Ihrer `App.jsx`-Datei, direkt unter den Imports, hinzu:

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

Fügen Sie nun das Folgende, über der `return`-Anweisung in der `App()`-Funktion, ein:

```jsx
const prevTaskLength = usePrevious(tasks.length);
```

Hier rufen wir `usePrevious()` auf, um die vorherige Länge des Aufgaben-Arrays zu verfolgen.

> [!NOTE]
> Da wir jetzt `usePrevious()` in zwei Dateien verwenden, könnte es effizienter sein, die Funktion `usePrevious()` in eine eigene Datei zu verschieben, sie aus dieser Datei zu exportieren und sie dort zu importieren, wo sie benötigt wird. Versuchen Sie dies als Übung, sobald Sie das Ende erreicht haben.

### Verwendung von `useEffect()`, um unseren Überschriftenfokus zu steuern

Jetzt, da wir gespeichert haben, wie viele Aufgaben wir zuvor hatten, können wir einen `useEffect()`-Hook einrichten, der ausgeführt wird, wenn sich unsere Anzahl an Aufgaben ändert und der die Überschrift fokussiert, wenn wir weniger Aufgaben haben als zuvor – das heißt, wir haben eine Aufgabe gelöscht!

Fügen Sie das folgende in den Körper Ihrer `App()`-Funktion ein, direkt unter Ihren vorherigen Ergänzungen:

```jsx
useEffect(() => {
  if (tasks.length < prevTaskLength) {
    listHeadingRef.current.focus();
  }
}, [tasks.length, prevTaskLength]);
```

Wir versuchen nur dann, auf unsere Listenüberschrift zu fokussieren, wenn wir weniger Aufgaben haben als zuvor. Die Abhängigkeiten, die an diesen Hook übergeben werden, stellen sicher, dass er nur dann versucht, erneut auszuführen, wenn sich einer dieser Werte (die Anzahl der aktuellen Aufgaben oder die Anzahl der vorherigen Aufgaben) ändert.

Wenn Sie nun mit Ihrer Tastatur versuchen, eine Aufgabe in Ihrem Browser zu löschen, sehen Sie unseren gestrichelten Fokusumriss um die Überschrift oberhalb der Liste erscheinen.

## Fertig!

Sie haben gerade eine React-App von Grund auf gebaut! Herzlichen Glückwunsch! Die hier erlernten Fähigkeiten bieten eine großartige Grundlage, auf der Sie aufbauen können, während Sie weiterhin mit React arbeiten.

Meistens können Sie ein effektiver Mitwirkender eines React-Projekts sein, auch wenn Sie nur sorgfältig über Komponenten und ihren Zustand sowie ihre Props nachdenken. Denken Sie daran, immer das beste HTML zu schreiben, das Sie können.

`useRef()` und `useEffect()` sind ziemlich fortgeschrittene Funktionen, und Sie sollten stolz darauf sein, sie zu verwenden! Halten Sie Ausschau nach Möglichkeiten, um sie mehr zu üben, denn so können Sie inklusivere Erfahrungen für Benutzer schaffen. Denken Sie daran: Unsere App wäre ohne sie für Tastaturnutzer unzugänglich gewesen!

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version überprüfen müssen, können Sie eine abgeschlossene Version des Beispielcodes der React-App in unserem [todo-react Repository](https://github.com/mdn/todo-react) finden. Für eine live laufende Version, siehe <https://mdn.github.io/todo-react/>.

Im allerletzten Artikel werden wir Ihnen eine Liste von React-Ressourcen präsentieren, die Ihnen helfen, Ihr Lernen weiter voranzutreiben.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/React_resources", "Learn_web_development/Core/Frameworks_libraries")}}
