---
title: Barrierefreiheit in React
short-title: React accessibility
slug: Learn_web_development/Core/Frameworks_libraries/React_accessibility
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/React_resources", "Learn_web_development/Core/Frameworks_libraries")}}

In unserem letzten Tutorial-Artikel konzentrieren wir uns auf Barrierefreiheit, einschließlich Fokusmanagement in React, was die Benutzerfreundlichkeit verbessern und Verwirrung sowohl für Tastaturnutzer als auch für Nutzer von Screenreadern reduzieren kann.

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

An diesem Punkt haben wir alle Funktionen implementiert, die wir umsetzen wollten. Nutzer können eine neue Aufgabe hinzufügen, Aufgaben als erledigt oder unerledigt markieren, Aufgaben löschen oder Aufgabennamen bearbeiten. Außerdem können sie ihre Aufgabenliste nach allen, aktiven oder erledigten Aufgaben filtern.

Oder zumindest können sie all diese Dinge mit einer Maus tun. Leider sind diese Funktionen für reine Tastaturnutzer nicht sehr zugänglich. Lassen Sie uns das jetzt untersuchen.

## Untersuchung des Tastaturbenutzbarkeitsproblems

Beginnen Sie, indem Sie auf das Eingabefeld oben in unserer App klicken, als ob Sie eine neue Aufgabe hinzufügen würden. Sie sehen eine dicke, gestrichelte Umrandung um dieses Eingabefeld. Diese Umrandung ist Ihr visueller Indikator dafür, dass der Browser sich derzeit auf dieses Element konzentriert. Drücken Sie die <kbd>Tab</kbd>-Taste, und Sie werden sehen, dass die Umrandung um die Schaltfläche „Hinzufügen“ unterhalb des Eingabefelds erscheint. Dies zeigt, dass sich der Fokus des Browsers verschoben hat.

Drücken Sie ein paar Mal <kbd>Tab</kbd>, und Sie werden sehen, dass sich dieser gestrichelte Fokusindikator zwischen den Filterschaltflächen bewegt. Machen Sie weiter, bis der Fokusindikator um die erste „Bearbeiten“-Schaltfläche ist. Drücken Sie <kbd>Enter</kbd>.

Die `<Todo />`-Komponente wird, wie wir es entworfen haben, die Vorlagen wechseln, und Sie werden ein Formular sehen, das es uns ermöglicht, den Namen der Aufgabe zu bearbeiten.

Aber wo ist unser Fokusindikator geblieben?

Wenn wir in unserer `<Todo />`-Komponente zwischen Vorlagen wechseln, entfernen wir vollständig die Elemente der alten Vorlage und ersetzen sie durch die der neuen Vorlage. Das bedeutet, dass das Element, auf das wir fokussiert waren, nicht mehr existiert, sodass es keinen visuellen Hinweis darauf gibt, wo der Fokus des Browsers sich befindet. Dies könnte eine Vielzahl von Nutzern verwirren — insbesondere Nutzer, die auf die Tastatur angewiesen sind, oder Nutzer, die unterstützende Technologie verwenden.

Um die Erfahrung für Tastatur- und Assistenztechnologienutzer zu verbessern, sollten wir den Fokus des Browsers selbst verwalten.

### Hinweis: Ein Hinweis zu unserem Fokusindikator

Wenn Sie mit Ihrer Maus auf die Schaltflächen "Alle", "Aktiv" oder "Erledigt" klicken, sehen Sie _keinen_ sichtbaren Fokusindikator, aber Sie werden ihn sehen, wenn Sie mit der <kbd>Tab</kbd>-Taste auf Ihrer Tastatur zwischen ihnen wechseln. Keine Sorge — Ihr Code ist nicht defekt!

Unsere CSS-Datei verwendet die {{cssxref(":focus-visible")}}-Pseudoklasse, um dem Fokusindikator benutzerdefiniertes Styling zu verleihen, und der Browser verwendet eine Reihe interner Regeln, um zu bestimmen, wann er dem Nutzer angezeigt werden soll. Im Allgemeinen zeigt der Browser _einen_ Fokusindikator als Antwort auf Tastatureingaben an und _könnte_ ihn als Reaktion auf Mausaktivität anzeigen. `<button>`-Elemente zeigen _keinen_ Fokusindikator als Reaktion auf Mausaktivität an, während `<input>`-Elemente _einen_ anzeigen.

Das Verhalten von `:focus-visible` ist selektiver als das der älteren {{cssxref(":focus")}}-Pseudoklasse, die Ihnen vielleicht vertrauter ist. `:focus` zeigt einen Fokusindikator in wesentlich mehr Situationen an, und Sie können ihn anstelle von oder in Kombination mit `:focus-visible` verwenden, wenn Sie es vorziehen.

## Fokussierung zwischen Vorlagen

Wenn ein Nutzer die `<Todo />`-Vorlage von der Ansicht zur Bearbeitung ändert, sollten wir auf das `<input>` fokussieren, das zum Umbenennen verwendet wird; wenn er wieder von Bearbeiten zur Ansicht wechselt, sollten wir den Fokus wieder auf die „Bearbeiten“-Schaltfläche setzen.

### Zielgerichtete Auswahl unserer Elemente

Bis jetzt haben wir JSX-Komponenten geschrieben und React das Resultierende DOM im Hintergrund erstellen lassen. Die meiste Zeit müssen wir keine spezifischen Elemente im DOM ansprechen, da wir mit Reacts Zustand und Eigenschaften steuern können, was gerendert wird. Um den Fokus zu verwalten, müssen wir jedoch in der Lage sein, spezifische DOM-Elemente anzusprechen.

Hier kommt der `useRef()`-Hook ins Spiel.

Zuerst ändern Sie die `import`-Anweisung am Anfang von `Todo.jsx`, sodass sie `useRef` umfasst:

```jsx
import { useRef, useState } from "react";
```

`useRef()` erstellt ein Objekt mit einer einzelnen Eigenschaft: `current`. Refs können alle Werte speichern, die wir wollen, und wir können diese Werte später nachschlagen. Wir können sogar Referenzen zu DOM-Elementen speichern, was genau das ist, was wir hier tun werden.

Als Nächstes erstellen Sie zwei neue Konstanten unter den `useState()`-Hooks in Ihrer `Todo()`-Funktion. Jede sollte ein Ref sein – eine für die „Bearbeiten“-Schaltfläche in der Ansichtsvorlage und eine für das Bearbeitungsfeld in der Bearbeitungsvorlage.

```jsx
const editFieldRef = useRef(null);
const editButtonRef = useRef(null);
```

Diese Refs haben einen Standardwert von `null`, um klarzumachen, dass sie leer sein werden, bis sie an ihre DOM-Elemente angehängt sind. Um sie an ihre Elemente anzuhängen, fügen wir jedes Element's JSX das spezielle `ref`-Attribut hinzu und setzen die Werte dieser Attribute auf die entsprechend benannten `ref`-Objekte.

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

Aktualisieren Sie die „Bearbeiten“-Schaltfläche in Ihrer Ansichtsvorlage, damit sie wie folgt aussieht:

```jsx
<button
  type="button"
  className="btn"
  onClick={() => setEditing(true)}
  ref={editButtonRef}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

Durch diese Maßnahmen werden unsere `editFieldRef` und `editButtonRef` mit Referenzen zu den DOM-Elementen, an die sie angehängt sind, bevölkert, aber _nur_ nachdem React die Komponente gerendert hat. Testen Sie das selbst aus: Fügen Sie die folgende Zeile irgendwo im Körper Ihrer `Todo()`-Funktion hinzu, unterhalb der Initialisierung von `editButtonRef`:

```jsx
console.log(editButtonRef.current);
```

Sie werden sehen, dass der Wert von `editButtonRef.current` `null` ist, wenn die Komponente erstmals gerendert wird, aber wenn Sie auf eine „Bearbeiten“-Schaltfläche klicken, wird das `<button>`-Element in die Konsole protokolliert. Dies liegt daran, dass das Ref nur nach dem Rendern der Komponente bevölkert wird, und das Klicken auf die „Bearbeiten“-Schaltfläche ein erneutes Rendern der Komponente verursacht. Stellen Sie sicher, dieses Log zu löschen, bevor Sie fortfahren.

> [!NOTE]
> Ihre Logs erscheinen 6 Mal, weil wir 3 Instanzen von `<Todo />` in unserer App haben und React unsere Komponenten in der Entwicklung zweimal rendert.

Wir nähern uns unserem Ziel! Um unsere neu referenzierten Elemente zu nutzen, müssen wir einen weiteren React-Hook verwenden: `useEffect()`.

### Implementierung von `useEffect()`

[`useEffect()`](https://react.dev/reference/react/useEffect) ist so benannt, weil es alle Seiteneffekte ausführt, die wir dem Rendervorgang hinzufügen möchten, die aber nicht im Hauptkörper der Funktion ausgeführt werden können. `useEffect()` wird direkt nach dem Rendern einer Komponente ausgeführt, was bedeutet, dass die DOM-Elemente, auf die wir uns im vorherigen Abschnitt bezogen haben, uns zur Verfügung stehen werden.

Ändern Sie die Import-Anweisung von `Todo.jsx` erneut, um `useEffect` hinzuzufügen:

```jsx
import { useEffect, useRef, useState } from "react";
```

`useEffect()` nimmt eine Funktion als Argument; diese Funktion wird _nach_ dem Rendern der Komponente ausgeführt. Um dies zu demonstrieren, setzen Sie den folgenden `useEffect()`-Aufruf direkt über die `return`-Anweisung im Körper von `Todo()`, und übergeben Sie eine Funktion darin, die die Worte „side effect“ an Ihre Konsole protokolliert:

```jsx
useEffect(() => {
  console.log("side effect");
});
```

Um den Unterschied zwischen dem Haupt-Rendervorgang und dem in `useEffect()` ausgeführten Code zu veranschaulichen, fügen Sie ein weiteres Log hinzu – setzen Sie es unter die vorherige Hinzufügung:

```jsx
console.log("main render");
```

Jetzt öffnen Sie die App in Ihrem Browser. Sie sollten beide Nachrichten in Ihrer Konsole sehen, wobei jede Nachricht mehrmals wiederholt wird. Beachten Sie, wie "main render" zuerst protokolliert wurde und "side effect" an zweiter Stelle, obwohl das "side effect"-Log zuerst im Code erscheint.

```plain
main render                                     Todo.jsx
side effect                                     Todo.jsx
```

Auch hier sind die Logs auf diese Weise geordnet, weil der Code innerhalb von `useEffect()` _nach_ dem Rendern der Komponente ausgeführt wird. Dies erfordert ein bisschen Gewöhnung, behalten Sie es einfach im Kopf, während Sie weitermachen. Jetzt löschen Sie `console.log("main render")` und wir gehen über zur Implementierung unseres Fokusmanagements.

### Fokussierung auf unser Bearbeitungsfeld

Jetzt, da wir wissen, dass unser `useEffect()`-Hook funktioniert, können wir den Fokus damit managen. Zur Erinnerung, wir wollen auf das Bearbeitungsfeld fokussieren, wenn wir zur Bearbeitungsvorlage wechseln.

Aktualisieren Sie Ihren bestehenden `useEffect()`-Hook so, dass er so aussieht:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  }
}, [isEditing]);
```

Diese Änderungen bewirken, dass, wenn `isEditing` wahr ist, React den aktuellen Wert von `editFieldRef` liest und den Browserfokus darauf verschiebt. Wir übergeben auch ein Array als zweites Argument an `useEffect()`. Dieses Array ist eine Liste von Werten, von denen `useEffect()` abhängen soll. Mit diesen Werten im Array wird `useEffect()` nur ausgeführt, wenn sich einer dieser Werte ändert. Wir wollen den Fokus nur ändern, wenn sich der Wert von `isEditing` ändert.

Probieren Sie es jetzt aus: Verwenden Sie die <kbd>Tab</kbd>-Taste, um zu einer der „Bearbeiten“-Schaltflächen zu navigieren, und drücken Sie dann <kbd>Enter</kbd>. Sie sollten sehen, dass die `<Todo />`-Komponente zu ihrer Bearbeitungsvorlage wechselt und der Browserfokusindikator um das `<input>`-Element erscheint!

### Rückfokussieren auf die Bearbeiten-Schaltfläche

Auf den ersten Blick scheint es täuschend einfach zu sein, React dazu zu bringen, den Fokus zurück auf unsere „Bearbeiten“-Schaltfläche zu verschieben, wenn die Bearbeitung gespeichert oder abgebrochen wird. Sicherlich könnten wir eine Bedingung zu unserem `useEffect` hinzufügen, um die Bearbeiten-Schaltfläche zu fokussieren, wenn `isEditing` `false` ist? Versuchen wir es jetzt — aktualisieren Sie Ihren `useEffect()`-Aufruf wie folgt:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  } else {
    editButtonRef.current.focus();
  }
}, [isEditing]);
```

Dies funktioniert irgendwie. Wenn Sie Ihre Tastatur benutzen, um die „Bearbeiten“-Schaltfläche auszulösen (denken Sie daran: <kbd>Tab</kbd>, um sie zu aktivieren, und drücken Sie <kbd>Enter</kbd>), sehen Sie, dass Ihr Fokus zwischen dem Edit `<input>` und der „Bearbeiten“-Schaltfläche wechselt, während Sie eine Bearbeitung starten und beenden. Allerdings haben Sie vielleicht ein neues Problem bemerkt — die „Bearbeiten“-Schaltfläche in der letzten `<Todo />`-Komponente wird direkt beim Laden der Seite fokussiert, bevor wir überhaupt mit der App interagieren!

Unser `useEffect()`-Hook verhält sich genau so, wie wir es entworfen haben: Er wird ausgeführt, sobald die Komponente gerendert wird, erkennt, dass `isEditing` `false` ist, und fokussiert die „Bearbeiten“-Schaltfläche. Es gibt drei Instanzen von `<Todo />`, und der Fokus wird der „Bearbeiten“-Schaltfläche der Komponente gegeben, die zuletzt rendert.

Wir müssen unseren Ansatz umstrukturieren, sodass der Fokus nur dann geändert wird, wenn sich `isEditing` von einem Wert auf einen anderen ändert.

## Robusteres Fokusmanagement

Um unsere verfeinerten Kriterien zu erfüllen, müssen wir nicht nur den Wert von `isEditing` kennen, sondern auch _wann dieser Wert sich geändert hat_. Dazu müssen wir den vorherigen Wert der Konstante `isEditing` lesen können. In Pseudocode sollte unsere Logik etwa so aussehen:

```jsx
if (wasNotEditingBefore && isEditingNow) {
  focusOnEditField();
} else if (wasEditingBefore && isNotEditingNow) {
  focusOnEditButton();
}
```

Das React-Team hat [Möglichkeiten zur Ermittlung des vorherigen Zustands einer Komponente](https://legacy.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state) besprochen und ein Beispiel-Hook bereitgestellt, den wir dafür verwenden können.

### Einführung von `usePrevious()`

Fügen Sie den folgenden Code oben in `Todo.jsx` ein, über Ihrer `Todo()`-Funktion:

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

`usePrevious()` ist ein _benutzerdefinierter Hook_, der einen Wert über Renderings hinweg verfolgt. Er:

1. Nutzt den `useRef()`-Hook, um ein leeres `ref` zu erstellen.
2. Gibt den `current`-Wert des `ref` an die aufrufende Komponente zurück.
3. Ruft `useEffect()` auf und aktualisiert den im `ref.current` gespeicherten Wert nach jedem Renden der aufrufenden Komponente.

Das Verhalten von `useEffect()` ist der Schlüssel zu dieser Funktionalität. Da `ref.current` innerhalb eines `useEffect()`-Aufrufs aktualisiert wird, liegt es immer einen Schritt hinter dem Wert, der sich im Haupt-Rendervorgang der Komponente befindet — daher der Name `usePrevious()`.

### Verwendung von `usePrevious()`

Jetzt können wir eine Konstante `wasEditing` definieren, um den vorherigen Wert von `isEditing` zu verfolgen; das wird erreicht, indem `usePrevious` mit `isEditing` als Argument aufgerufen wird. Fügen Sie das folgende innerhalb von `Todo()`, unterhalb der `useRef`-Zeilen, hinzu:

```jsx
const wasEditing = usePrevious(isEditing);
```

Sie können sehen, wie sich `usePrevious()` verhält, indem Sie unten diesen Zeilen ein Konsolenlog hinzufügen:

```jsx
console.log(wasEditing);
```

In diesem Log wird der `current`-Wert von `wasEditing` immer der vorherige Wert von `isEditing` sein. Klicken Sie mehrmals auf die „Bearbeiten“- und „Abbrechen“-Schaltflächen, um zu beobachten, wie er sich ändert, und löschen Sie dieses Log, wenn Sie bereit sind, weiterzumachen.

Mit dieser Konstante `wasEditing` können wir unseren `useEffect()`-Hook aktualisieren, um den zuvor besprochenen Pseudocode umzusetzen:

```jsx
useEffect(() => {
  if (!wasEditing && isEditing) {
    editFieldRef.current.focus();
  } else if (wasEditing && !isEditing) {
    editButtonRef.current.focus();
  }
}, [wasEditing, isEditing]);
```

Beachten Sie, dass die Logik von `useEffect()` jetzt von `wasEditing` abhängt, sodass wir es in das Array der Abhängigkeiten aufnehmen.

Versuchen Sie, Ihre Tastatur zu verwenden, um die „Bearbeiten“- und „Abbrechen“-Schaltflächen in der `<Todo />`-Komponente zu aktivieren; Sie sehen den Fokusindikator des Browsers sich korrekt bewegen, ohne das Problem, das wir am Anfang dieses Abschnitts besprochen haben.

## Fokussierung, wenn der Nutzer eine Aufgabe löscht

Ein letztes Tastaturerfahrungsproblem besteht darin, dass der Fokus verloren geht, wenn ein Nutzer eine Aufgabe aus der Liste löscht. Wir folgen einem ähnlichen Muster wie bei unseren vorherigen Änderungen: Wir erstellen ein neues Ref und nutzen unseren `usePrevious()`-Hook, damit wir auf die Listenüberschrift fokussieren können, wann immer ein Nutzer eine Aufgabe löscht.

### Warum die Listenüberschrift?

Manchmal ist der Ort, an den wir unseren Fokus senden möchten, offensichtlich: Als wir unsere `<Todo />`-Vorlagen umgeschaltet haben, hatten wir einen Ursprungspunkt, zu dem wir „zurückkehren“ konnten — die „Bearbeiten“-Schaltfläche. In diesem Fall, da wir Elemente vollständig aus dem DOM entfernen, haben wir keinen Ort, zu dem wir zurückkehren können. Der nächstbeste Platz ist eine intuitive Position in der Nähe. Die Listenüberschrift ist unsere beste Wahl, weil sie sich in der Nähe des Listenelements befindet, das der Nutzer löschen wird, und der Fokus darauf dem Nutzer zeigt, wie viele Aufgaben noch übrig sind.

### Erstellen unseres Ref

Importieren Sie die `useRef()`- und `useEffect()`-Hooks in `App.jsx` — Sie benötigen sie unten:

```jsx
import { useState, useRef, useEffect } from "react";
```

Als Nächstes deklarieren Sie ein neues Ref in der `App()`-Funktion, direkt über der `return`-Anweisung:

```jsx
const listHeadingRef = useRef(null);
```

### Vorbereiten der Überschrift

Überschrift-Elemente wie unser `<h2>` sind normalerweise nicht fokussierbar. Das ist kein Problem — wir können jedes Element programmatisch fokussierbar machen, indem wir das Attribut [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) hinzufügen. Das bedeutet, dass es _nur mit JavaScript_ fokussierbar ist. Sie können nicht mit <kbd>Tab</kbd> fokussieren, um ein Element mit einem Tabindex von `-1` zu fokussieren, wie es beimit einem [`<button>`](/de/docs/Web/HTML/Reference/Elements/button) oder [`<a>`](/de/docs/Web/HTML/Reference/Elements/a)-Element möglich wäre (das kann mit `tabindex="0"` getan werden, aber das ist in diesem Fall nicht angemessen).

Fügen wir das `tabindex`-Attribut — in JSX als `tabIndex` geschrieben — zur Überschrift über unserer Liste von Aufgaben hinzu, zusammen mit unserem `listHeadingRef`:

```jsx
<h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
  {headingText}
</h2>
```

> [!NOTE]
> Das `tabindex`-Attribut ist hervorragend für Barrierefreiheit in Sonderfällen, aber Sie sollten **große Vorsicht** walten lassen, es nicht übermäßig zu verwenden. Wenden Sie `tabindex` nur auf ein Element an, wenn Sie sicher sind, dass das Fokussierbar-Machen dem Nutzer irgendwie nützen wird. In den meisten Fällen sollten Sie Elemente verwenden, die natürlich fokussierbar sind, wie z. B. Schaltflächen, Anker und Eingaben. Unverantwortlicher Gebrauch von `tabindex` könnte erhebliche negative Auswirkungen auf Tastatur- und Screenreader-Nutzer haben!

### Vorherigen Zustand abrufen

Wir möchten uns nur dann auf das Element konzentrieren, das mit unserem Ref verbunden ist (über das Attribut `ref`), wenn unser Nutzer eine Aufgabe aus seiner Liste löscht. Das erfordert den `usePrevious()`-Hook, den wir zuvor verwendet haben. Fügen Sie ihn oben in Ihrer `App.jsx`-Datei, direkt unter den Importen, hinzu:

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

Fügen Sie jetzt das folgende, oberhalb der `return`-Anweisung innerhalb der `App()`-Funktion, hinzu:

```jsx
const prevTaskLength = usePrevious(tasks.length);
```

Hier rufen wir `usePrevious()` auf, um die vorherige Länge des Aufgaben-Arrays zu verfolgen.

> [!NOTE]
> Da wir jetzt `usePrevious()` in zwei Dateien verwenden, könnte es effizienter sein, die `usePrevious()`-Funktion in eine eigene Datei zu verschieben, sie aus dieser Datei zu exportieren und dort zu importieren, wo Sie sie benötigen. Versuchen Sie dies als Übung, sobald Sie am Ende angelangt sind.

### Verwendung von `useEffect()`, um den Fokus auf unsere Überschrift zu steuern

Jetzt, da wir gespeichert haben, wie viele Aufgaben wir zuvor hatten, können wir einen `useEffect()`-Hook einrichten, der ausgeführt wird, wenn sich unsere Anzahl an Aufgaben ändert, was den Fokus auf die Überschrift verlegt, wenn die Anzahl der Aufgaben, die wir jetzt haben, kleiner ist als zuvor — das heißt, wir haben eine Aufgabe gelöscht!

Fügen Sie das Folgende in den Body Ihrer `App()`-Funktion ein, direkt unter Ihren vorherigen Hinzufügungen:

```jsx
useEffect(() => {
  if (tasks.length < prevTaskLength) {
    listHeadingRef.current.focus();
  }
}, [tasks.length, prevTaskLength]);
```

Wir versuchen nur dann, uns auf die Listenüberschrift zu fokussieren, wenn wir jetzt weniger Aufgaben haben als vorher. Die übergebenen Abhängigkeiten in diesem Hook sorgen dafür, dass er nur dann erneut versucht wird, ausgeführt zu werden, wenn sich einer dieser Werte (die Anzahl der aktuellen Aufgaben oder die Anzahl der vorherigen Aufgaben) ändert.

Wenn Sie nun Ihre Tastatur benutzen, um eine Aufgabe in Ihrem Browser zu löschen, werden Sie sehen, dass unser gestrichelter Fokusrahmen um die Überschrift über der Liste erscheint.

## Fertig!

Sie haben gerade eine React-App von Grund auf gebaut! Herzlichen Glückwunsch! Die hier erlernten Fähigkeiten werden eine großartige Grundlage sein, auf der Sie aufbauen können, während Sie weiter mit React arbeiten.

In den meisten Fällen können Sie ein effektiver Beitrag zu einem React-Projekt sein, selbst wenn Sie nur über Komponenten und deren Zustände und Eigenschaften sorgfältig nachdenken. Denken Sie immer daran, das beste HTML zu schreiben, das Sie können.

`useRef()` und `useEffect()` sind etwas fortgeschrittene Features und Sie können stolz auf sich sein, diese zu nutzen! Achten Sie auf Gelegenheiten, sie weiter zu üben, denn damit können Sie inklusive Erfahrungen für Nutzer schaffen. Denken Sie daran: Ohne sie wäre unsere App für Tastaturnutzer nicht zugänglich gewesen!

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version abgleichen müssen, finden Sie eine fertige Version des Beispiel-React-App-Codes in unserem [todo-react repository](https://github.com/mdn/todo-react). Eine live laufende Version finden Sie unter <https://mdn.github.io/todo-react/>.

Im allerletzten Artikel werden wir Ihnen eine Liste von React-Ressourcen präsentieren, die Sie zur weiteren Vertiefung Ihrer Lernreise verwenden können.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/React_resources", "Learn_web_development/Core/Frameworks_libraries")}}
