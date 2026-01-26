---
title: Barrierefreiheit in React
short-title: React accessibility
slug: Learn_web_development/Core/Frameworks_libraries/React_accessibility
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/React_resources", "Learn_web_development/Core/Frameworks_libraries")}}

In unserem letzten Tutorial-Artikel konzentrieren wir uns auf (Wortspiel beabsichtigt) Barrierefreiheit, einschließlich des Fokussmanagements in React, was die Benutzerfreundlichkeit verbessern und Verwirrung sowohl für reine Tastaturnutzer als auch für Benutzer von Bildschirmlesegeräten verringern kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/der Befehlszeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>Implementierung von Tastaturzugänglichkeit in React.</td>
    </tr>
  </tbody>
</table>

## Einbeziehung von Tastaturbenutzern

An diesem Punkt haben wir alle Funktionen implementiert, die wir umsetzen wollten. Benutzer können eine neue Aufgabe hinzufügen, Aufgaben abhaken und das Häkchen entfernen, Aufgaben löschen oder Aufgabennamen bearbeiten. Außerdem können sie ihre Aufgabenliste nach allen, aktiven oder erledigten Aufgaben filtern.

Oder zumindest können sie all diese Dinge mit einer Maus tun. Leider sind diese Funktionen für reine Tastaturnutzer nicht sehr zugänglich. Lassen Sie uns das jetzt erkunden.

## Untersuchung des Tastatur-Benutzerfreundlichkeitsproblems

Beginnen Sie, indem Sie auf das Eingabefeld oben in unserer App klicken, als ob Sie eine neue Aufgabe hinzufügen möchten. Sie sehen einen dicken, gestrichelten Umriss um dieses Eingabefeld. Dieser Umriss ist Ihr visueller Indikator dafür, dass der Browser derzeit auf dieses Element fokussiert ist. Drücken Sie die <kbd>Tab</kbd>-Taste, und Sie sehen den Umriss um die "Hinzufügen"-Schaltfläche unter dem Eingabefeld erscheinen. Dies zeigt Ihnen, dass sich der Fokus des Browsers verlagert hat.

Drücken Sie mehrmals <kbd>Tab</kbd> und Sie werden sehen, wie sich dieser gestrichelte Fokusindikator zwischen jeder der Filter-Schaltflächen bewegt. Gehen Sie weiter, bis der Fokusindikator um die erste "Bearbeiten"-Schaltfläche liegt. Drücken Sie <kbd>Enter</kbd>.

Die `<Todo />`-Komponente wird die Vorlagen wechseln, wie wir es entworfen haben, und Sie sehen ein Formular, das es uns ermöglicht, den Namen der Aufgabe zu bearbeiten.

Aber wo ist unser Fokusindikator hin?

Wenn wir zwischen Vorlagen in unserer `<Todo />`-Komponente wechseln, entfernen wir die Elemente der alten Vorlage vollständig und ersetzen sie durch die Elemente der neuen Vorlage. Das bedeutet, dass das Element, auf das wir fokussiert waren, nicht mehr existiert, sodass es keinen visuellen Hinweis darauf gibt, wo sich der Fokus des Browsers befindet. Dies könnte eine Vielzahl von Benutzern verwirren – insbesondere Benutzer, die sich auf die Tastatur verlassen, oder Benutzer, die unterstützende Technologien einsetzen.

Um das Erlebnis für Tastaturbenutzer und Nutzer von Hilfstechnologien zu verbessern, sollten wir den Fokus des Browsers selbst verwalten.

### Hinweis: eine Notiz zu unserem Fokusindikator

Wenn Sie die Schaltflächen "Alle", "Aktiv" oder "Erledigt" mit Ihrer Maus anklicken, werden Sie _keinen_ sichtbaren Fokusindikator sehen, aber Sie werden ihn sehen, wenn Sie mit der <kbd>Tab</kbd>-Taste auf Ihrer Tastatur zwischen ihnen wechseln. Keine Sorge — Ihr Code ist nicht kaputt!

Unsere CSS-Datei verwendet die {{cssxref(":focus-visible")}} Pseudoklasse, um dem Fokusindikator ein benutzerdefiniertes Styling zu geben, und der Browser verwendet eine Reihe interner Regeln, um zu bestimmen, wann er ihn dem Benutzer zeigen soll. Im Allgemeinen zeigt der Browser _einen_ Fokusindikator als Reaktion auf Tastatureingaben und _kann_ ihn als Reaktion auf Mauseingaben anzeigen. `<button>`-Elemente zeigen _keinen_ Fokusindikator als Reaktion auf Mauseingaben, während `<input>`-Elemente dies _tun_.

Das Verhalten von `:focus-visible` ist selektiver als die ältere {{cssxref(":focus")}} Pseudoklasse, die Ihnen möglicherweise vertrauter ist. `:focus` zeigt einen Fokusindikator in viel mehr Situationen an, und Sie können es anstelle von oder in Kombination mit `:focus-visible` verwenden, wenn Sie dies bevorzugen.

## Fokussieren zwischen Vorlagen

Wenn ein Benutzer die `<Todo />`-Vorlage vom Betrachten auf Bearbeiten ändert, sollten wir uns auf das `<input>` fokussieren, das zum Umbenennen verwendet wird; wenn sie wieder vom Bearbeiten zum Betrachten wechseln, sollten wir den Fokus zurück auf die "Bearbeiten"-Schaltfläche legen.

### Anvisieren unserer Elemente

Bis zu diesem Punkt haben wir JSX-Komponenten geschrieben und React die resultierende DOM-Struktur im Hintergrund aufbauen lassen. Die meiste Zeit müssen wir keine spezifischen Elemente im DOM anvisieren, da wir Reacts State und Props nutzen können, um zu kontrollieren, was gerendert wird. Um den Fokus zu verwalten, müssen wir jedoch in der Lage sein, spezifische DOM-Elemente anzusteuern.

Hier kommt der `useRef()`-Hook ins Spiel.

Ändern Sie zunächst die `import`-Anweisung am Anfang von `Todo.jsx`, sodass sie `useRef` enthält:

```jsx
import { useRef, useState } from "react";
```

`useRef()` erzeugt ein Objekt mit einer einzigen Eigenschaft: `current`. Refs können Werte speichern, die wir wollen, und wir können diese Werte später nachschlagen. Wir können sogar Referenzen zu DOM-Elementen speichern, was genau das ist, was wir hier tun werden.

Erstellen Sie als Nächstes zwei neue Konstanten unter den `useState()`-Hooks in Ihrer `Todo()`-Funktion. Jede sollte eine Ref sein – eine für die "Bearbeiten"-Schaltfläche in der Ansichtsvorlage und eine für das Bearbeitungsfeld in der Bearbeitungsvorlage.

```jsx
const editFieldRef = useRef(null);
const editButtonRef = useRef(null);
```

Diese Refs haben einen Standardwert von `null`, um klarzustellen, dass sie leer sind, bis sie ihren DOM-Elementen zugewiesen werden. Um sie ihren Elementen zuzuweisen, fügen wir das spezielle `ref`-Attribut zu jedem Elementen-JSX hinzu und setzen die Werte dieser Attribute auf die entsprechend benannten `ref`-Objekte.

Aktualisieren Sie das `<input>` in Ihrer Bearbeitungsvorlage, damit es so aussieht:

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

Aktualisieren Sie die "Bearbeiten"-Schaltfläche in Ihrer Ansichtsvorlage, damit sie so aussieht:

```jsx
<button
  type="button"
  className="btn"
  onClick={() => setEditing(true)}
  ref={editButtonRef}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

Auf diesem Weg füllen wir unsere `editFieldRef` und `editButtonRef` mit Referenzen zu den DOM-Elementen, an die sie angehängt sind, aber _erst_ nachdem React die Komponente gerendert hat. Testen Sie dies selbst aus: Fügen Sie die folgende Zeile irgendwo im Körper Ihrer `Todo()`-Funktion hinzu, unterhalb der Initialisierung von `editButtonRef`:

```jsx
console.log(editButtonRef.current);
```

Sie werden sehen, dass der Wert von `editButtonRef.current` beim ersten Rendern der Komponente `null` ist, aber wenn Sie auf eine "Bearbeiten"-Schaltfläche klicken, wird das `<button>`-Element in die Konsole geloggt. Dies liegt daran, dass die Ref erst nach dem Rendern der Komponente gefüllt wird, und das Klicken auf die "Bearbeiten"-Schaltfläche die Komponente neu rendert. Entfernen Sie unbedingt dieses Log, bevor Sie fortfahren.

> [!NOTE]
> Ihre Logs erscheinen 6 Mal, weil wir 3 Instanzen von `<Todo />` in unserer App haben und React unsere Komponenten in der Entwicklung zweimal rendert.

Wir kommen dem Ziel näher! Um unsere neu referenzierten Elemente zu verwenden, benötigen wir einen weiteren React Hook: `useEffect()`.

### Implementierung von `useEffect()`

[`useEffect()`](https://react.dev/reference/react/useEffect) ist so benannt, weil es alle Seiteneffekte ausführt, die wir dem Renderprozess hinzufügen möchten, die aber nicht im Hauptfunktionskörper ausgeführt werden können. `useEffect()` läuft direkt nach dem Rendern einer Komponente, was bedeutet, dass die DOM-Elemente, die wir im vorherigen Abschnitt referenziert haben, verfügbar sind.

Ändern Sie die `import`-Anweisung von `Todo.jsx` erneut, um `useEffect` hinzuzufügen:

```jsx
import { useEffect, useRef, useState } from "react";
```

`useEffect()` nimmt eine Funktion als Argument; diese Funktion wird _nach_ dem Rendern der Komponente ausgeführt. Um dies zu demonstrieren, setzen Sie den folgenden `useEffect()`-Aufruf kurz vor der `return`-Anweisung im Körper von `Todo()`, und geben Sie eine Funktion an, die die Worte "side effect" in Ihre Konsole loggt:

```jsx
useEffect(() => {
  console.log("side effect");
});
```

Um den Unterschied zwischen dem Haupt-Render-Prozess und Code, der innerhalb von `useEffect()` ausgeführt wird, zu verdeutlichen, fügen Sie ein weiteres Log hinzu – setzen Sie dieses unter die vorherige Hinzufügung:

```jsx
console.log("main render");
```

Öffnen Sie jetzt die App in Ihrem Browser. Sie sollten beide Nachrichten in Ihrer Konsole sehen, wobei sich jede mehrfach wiederholt. Beachten Sie, wie "main render" zuerst geloggt wurde und "side effect" als zweites, obwohl das "side effect"-Log zuerst im Code erscheint.

```plain
main render                                     Todo.jsx
side effect                                     Todo.jsx
```

Noch einmal: Die Logs sind in dieser Reihenfolge, weil der Code innerhalb von `useEffect()` _nach_ dem Rendern der Komponente ausgeführt wird. Das braucht etwas Übung, behalten Sie dies einfach im Kopf, während Sie weitermachen. Löschen Sie vorerst `console.log("main render")` und wir fahren fort mit der Implementierung unseres Fokusmanagements.

### Fokussieren auf unser Bearbeitungsfeld

Da wir wissen, dass unser `useEffect()`-Hook funktioniert, können wir damit den Fokus verwalten. Zur Erinnerung: Wir möchten uns auf das Bearbeitungsfeld konzentrieren, wenn wir zur Bearbeitungsvorlage wechseln.

Aktualisieren Sie Ihren bestehenden `useEffect()`-Hook, damit er so aussieht:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  }
}, [isEditing]);
```

Diese Änderungen sorgen dafür, dass React, wenn `isEditing` wahr ist, den aktuellen Wert der `editFieldRef` liest und den Fokus des Browsers darauf verschiebt. Wir übergeben auch ein Array als zweites Argument an `useEffect()`. Dieses Array ist eine Liste von Werten, von denen `useEffect()` abhängen sollte. Mit diesen Werten läuft `useEffect()` nur, wenn sich einer dieser Werte ändert. Wir möchten den Fokus nur ändern, wenn sich der Wert von `isEditing` ändert.

Probieren Sie es jetzt aus: Verwenden Sie die <kbd>Tab</kbd>-Taste, um zu einer der "Bearbeiten"-Schaltflächen zu navigieren, und drücken Sie dann <kbd>Enter</kbd>. Sie sollten sehen, dass die `<Todo />`-Komponente zu ihrer Bearbeitungsvorlage wechselt, und der Fokusindikator des Browsers sollte um das `<input>`-Element erscheinen!

### Verschieben des Fokus zurück zur Bearbeiten-Schaltfläche

Auf den ersten Blick scheint es täuschend einfach zu sein, React dazu zu bringen, den Fokus zurück auf unsere "Bearbeiten"-Schaltfläche zu legen, wenn die Bearbeitung gespeichert oder abgebrochen wird. Sicherlich könnten wir eine Bedingung zu unserem `useEffect` hinzufügen, um die Bearbeiten-Schaltfläche zu fokussieren, wenn `isEditing` `false` ist? Lassen Sie uns das jetzt ausprobieren – aktualisieren Sie Ihren `useEffect()`-Aufruf folgendermaßen:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  } else {
    editButtonRef.current.focus();
  }
}, [isEditing]);
```

Das funktioniert irgendwie. Wenn Sie Ihre Tastatur verwenden, um die "Bearbeiten"-Schaltfläche zu aktivieren (denken Sie daran: <kbd>Tab</kbd> bis dahin und <kbd>Enter</kbd> drücken), werden Sie sehen, dass Ihr Fokus zwischen dem Bearbeiten-`<input>` und der "Bearbeiten"-Schaltfläche verschoben wird, wenn Sie mit der Bearbeitung beginnen und sie beenden. Möglicherweise haben Sie jedoch ein neues Problem bemerkt – die "Bearbeiten"-Schaltfläche in der letzten `<Todo />`-Komponente wurde sofort beim Laden der Seite fokussiert, bevor wir überhaupt mit der App interagierten!

Unser `useEffect()`-Hook verhält sich genau so, wie wir es konzipiert haben: Es läuft, sobald die Komponente gerendert wird, sieht, dass `isEditing` `false` ist, und fokussiert die "Bearbeiten"-Schaltfläche. Es gibt drei Instanzen von `<Todo />`, und der Fokus wird auf die "Bearbeiten"-Schaltfläche derjenigen gelegt, die zuletzt gerendert wird.

Wir müssen unser Vorgehen überdenken, damit sich der Fokus nur ändert, wenn `isEditing` von einem Wert auf einen anderen wechselt.

## Robusteres Fokusmanagement

Um unsere verfeinerten Kriterien zu erfüllen, müssen wir nicht nur den Wert von `isEditing` kennen, sondern auch _wann sich dieser Wert geändert hat_. Dazu müssen wir in der Lage sein, den vorherigen Wert der `isEditing`-Konstanten abzulesen. Mit Pseudocode sollte unsere Logik ungefähr so aussehen:

```jsx
if (wasNotEditingBefore && isEditingNow) {
  focusOnEditField();
} else if (wasEditingBefore && isNotEditingNow) {
  focusOnEditButton();
}
```

Das React-Team hat [Wege besprochen, um den vorherigen Zustand einer Komponente zu erhalten](https://legacy.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state), und ein Beispiel-Hook bereitgestellt, den wir dafür nutzen können.

### Einführung von `usePrevious()`

Fügen Sie den folgenden Code in die Nähe des oberen Bereichs von `Todo.jsx` ein, oberhalb Ihrer `Todo()`-Funktion.

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

`usePrevious()` ist ein _benutzerdefinierter Hook_, der einen Wert über Renders hinweg verfolgt. Er:

1. Verwendet den `useRef()`-Hook, um einen leeren `ref` zu erstellen.
2. Gibt den `current`-Wert des `ref` an die Komponente zurück, die ihn aufgerufen hat.
3. Ruft `useEffect()` auf und aktualisiert den im `ref.current` gespeicherten Wert nach jedem Rendern der aufrufenden Komponente.

Das Verhalten von `useEffect()` ist der Schlüssel zu dieser Funktionalität. Weil `ref.current` innerhalb eines `useEffect()`-Aufrufs aktualisiert wird, ist es immer einen Schritt hinter dem Wert, der im Haupt-Render-Zyklus der Komponente liegt – daher der Name `usePrevious()`.

### Verwenden von `usePrevious()`

Nun können wir eine `wasEditing`-Konstante definieren, um den vorherigen Wert von `isEditing` zu verfolgen; dies wird erreicht, indem `usePrevious` mit `isEditing` als Argument aufgerufen wird. Fügen Sie das Folgende innerhalb von `Todo()`, unter den `useRef`-Linien hinzu:

```jsx
const wasEditing = usePrevious(isEditing);
```

Sie können sehen, wie `usePrevious()` funktioniert, indem Sie unterhalb dieser Linie ein Konsolenprotokoll hinzufügen:

```jsx
console.log(wasEditing);
```

In diesem Log wird der `current`-Wert von `wasEditing` immer der vorherige Wert von `isEditing` sein. Klicken Sie ein paar Mal auf die "Bearbeiten"- und "Abbrechen"-Schaltfläche, um zu sehen, wie er sich ändert, und löschen Sie dieses Log, wenn Sie bereit sind, weiterzumachen.

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

Beachten Sie, dass die Logik von `useEffect()` jetzt von `wasEditing` abhängt, daher geben wir es in das Abhängigkeitsarray an.

Versuchen Sie, mit Ihrer Tastatur die "Bearbeiten"- und "Abbrechen"-Schaltflächen in der `<Todo />`-Komponente zu aktivieren; Sie werden sehen, dass sich der Fokusindikator des Browsers angemessen bewegt, ohne das zu Beginn dieses Abschnitts besprochene Problem.

## Fokussieren, wenn der Benutzer eine Aufgabe löscht

Es gibt noch eine letzte Lücke im Tastaturerlebnis: Wenn ein Benutzer eine Aufgabe aus der Liste löscht, verschwindet der Fokus. Wir werden ein ähnliches Muster wie bei unseren vorherigen Änderungen folgen: Wir erstellen eine neue Ref und verwenden unseren `usePrevious()`-Hook, damit wir uns auf die Listenüberschrift konzentrieren können, wann immer ein Benutzer eine Aufgabe löscht.

### Warum die Listenüberschrift?

Manchmal ist der Ort, an den wir unseren Fokus senden wollen, offensichtlich: Als wir unsere `<Todo />`-Vorlagen umgeschaltet haben, hatten wir einen Ursprungsort, zu dem wir "zurückgehen" konnten – die "Bearbeiten"-Schaltfläche. In diesem Fall, da wir Elemente vollständig aus dem DOM entfernen, gibt es keinen Ort, zu dem wir zurückkehren können. Das nächstbeste ist ein intuitiver Ort irgendwo in der Nähe. Die Listenüberschrift ist die beste Wahl, da sie nahe bei dem Listenelement liegt, das der Benutzer löschen wird, und das Fokussieren darauf dem Benutzer mitteilen wird, wie viele Aufgaben noch übrig sind.

### Erstellen unserer Ref

Importieren Sie die Hooks `useRef()` und `useEffect()` in `App.jsx` – Sie benötigen beide unten:

```jsx
import { useState, useRef, useEffect } from "react";
```

Deklarieren Sie nun eine neue Ref innerhalb der `App()`-Funktion, direkt über der `return`-Anweisung:

```jsx
const listHeadingRef = useRef(null);
```

### Vorbereitung der Überschrift

Überschriftselemente wie unser `<h2>` sind normalerweise nicht fokussierbar. Das ist kein Problem – wir können jedes Element programmatisch fokussierbar machen, indem wir das Attribut [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) hinzufügen. Dies bedeutet, dass es _nur mit JavaScript fokussierbar_ ist. Sie können nicht mit <kbd>Tab</kbd> ein Element mit einem Tabindex von `-1` fokussieren, so wie Sie es mit einem [`<button>`](/de/docs/Web/HTML/Reference/Elements/button) oder [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) Element tun könnten (dies ist mit `tabindex="0"` möglich, aber das ist in diesem Fall nicht angebracht).

Fügen wir das `tabindex`-Attribut – in JSX als `tabIndex` geschrieben – zur Überschrift über unserer Aufgabenliste hinzu, zusammen mit unserer `listHeadingRef`:

```jsx
<h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
  {headingText}
</h2>
```

> [!NOTE]
> Das `tabindex`-Attribut ist hervorragend für barrierefreie Randfälle, aber Sie sollten **große Sorgfalt** darauf verwenden, es nicht übermäßig zu nutzen. Wenden Sie `tabindex` nur auf ein Element an, wenn Sie sicher sind, dass es dem Benutzer in irgendeiner Weise nützt, wenn es fokussierbar wird. In den meisten Fällen sollten Sie Elemente verwenden, die von Natur aus fokussierbar sind, wie Schaltflächen, Links und Eingaben. Eine unverantwortliche Nutzung von `tabindex` könnte sich äußerst negativ auf Tastatur- und Bildschirmleserbenutzer auswirken!

### Erfassen des vorherigen Zustands

Wir möchten uns nur auf das Element konzentrieren, das mit unserer Ref assoziiert ist (über das `ref`-Attribut), wenn unser Benutzer eine Aufgabe aus seiner Liste löscht. Dazu benötigen wir den `usePrevious()`-Hook, den wir zuvor verwendet haben. Fügen Sie ihn oben in Ihrer `App.jsx`-Datei hinzu, direkt unter den Importen:

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

Fügen Sie jetzt das Folgende über der `return`-Anweisung innerhalb der `App()`-Funktion hinzu:

```jsx
const prevTaskLength = usePrevious(tasks.length);
```

Hier rufen wir `usePrevious()` auf, um die vorherige Länge des Aufgabenarrays zu verfolgen.

> [!NOTE]
> Da wir `usePrevious()` jetzt in zwei Dateien verwenden, könnte es effizienter sein, die `usePrevious()`-Funktion in eine eigene Datei zu verschieben, sie aus dieser Datei zu exportieren und dort zu importieren, wo Sie sie benötigen. Versuchen Sie, dies als Übung zu tun, sobald Sie fertig sind.

### Verwenden von `useEffect()` zur Steuerung unseres Überschriftenfokus

Da wir nun gespeichert haben, wie viele Aufgaben wir vorher hatten, können wir einen `useEffect()`-Hook einrichten, der ausgeführt wird, wenn sich die Anzahl der Aufgaben ändert, die unser Listenüberschrift fokussieren, wenn wir weniger Aufgaben haben als zuvor – d.h. wir haben eine Aufgabe gelöscht!

Fügen Sie das folgende in den Körper Ihrer `App()`-Funktion ein, direkt unter Ihren vorherigen Ergänzungen:

```jsx
useEffect(() => {
  if (tasks.length < prevTaskLength) {
    listHeadingRef.current.focus();
  }
}, [tasks.length, prevTaskLength]);
```

Wir versuchen nur, uns auf unsere Listenüberschrift zu konzentrieren, wenn wir jetzt weniger Aufgaben haben als zuvor. Die Abhängigkeiten, die in diesen Hook übergeben werden, stellen sicher, dass er nur versucht wird, erneut auszuführen, wenn sich einer dieser Werte (die Anzahl der aktuellen Aufgaben oder die Anzahl der vorherigen Aufgaben) ändert.

Nun, wenn Sie Ihre Tastatur verwenden, um eine Aufgabe in Ihrem Browser zu löschen, sehen Sie unseren gestrichelten Fokus-Umriss um die Überschrift über der Liste erscheinen.

## Fertig!

Sie haben gerade eine React-App von Grund auf gebaut! Herzlichen Glückwunsch! Die Fähigkeiten, die Sie hier gelernt haben, werden eine großartige Grundlage sein, auf der Sie aufbauen können, während Sie weiterhin mit React arbeiten.

Die meiste Zeit können Sie ein effektiver Beitrag zu einem React-Projekt sein, auch wenn Sie sich nur sorgfältig über Komponenten und ihre Zustände und Props Gedanken machen. Denken Sie daran, immer das beste HTML zu schreiben, das Sie können.

`useRef()` und `useEffect()` sind etwas fortgeschrittenere Funktionen, und Sie können stolz darauf sein, sie verwendet zu haben! Halten Sie Ausschau nach Gelegenheiten, sie mehr zu üben, denn das ermöglicht es Ihnen, inklusive Erlebnisse für Benutzer zu schaffen. Denken Sie daran: Unsere App wäre für Tastaturnutzer ohne sie nicht zugänglich!

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version überprüfen müssen, finden Sie eine fertige Version des Beispiel-React-App-Codes in unserem [todo-react-Repository](https://github.com/mdn/todo-react). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-react/>.

Im allerletzten Artikel präsentieren wir Ihnen eine Liste mit React-Ressourcen, die Sie zum weiteren Lernen verwenden können.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/React_resources", "Learn_web_development/Core/Frameworks_libraries")}}
