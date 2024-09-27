---
title: Barrierefreiheit in React
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility
l10n:
  sourceCommit: 707518ff85e56b410289555e56328d10abbe1a9c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In unserem letzten Tutorial-Artikel werden wir uns auf Barrierefreiheit konzentrieren, einschließlich der Fokussierungsverwaltung in React, die die Benutzerfreundlichkeit verbessern kann und Verwirrung sowohl für Benutzer, die nur die Tastatur verwenden, als auch für Benutzer von Bildschirmlesegeräten verringern kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
          sowie Kenntnisse der
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Konsole/Command Line</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Kennenlernen der Implementierung von Tastatur-Barrierefreiheit in React.</td>
    </tr>
  </tbody>
</table>

## Einbeziehung von Tastaturbenutzern

An diesem Punkt haben wir alle Funktionen implementiert, die wir uns vorgenommen haben. Benutzer können eine neue Aufgabe hinzufügen, Aufgaben markieren und demarkieren, Aufgaben löschen oder Aufgabennamen bearbeiten. Zudem können sie ihre Aufgabenliste nach alle, aktive oder abgeschlossene Aufgaben filtern.

Zumindest können sie all diese Dinge mit einer Maus tun. Leider sind diese Funktionen für Benutzer, die nur eine Tastatur verwenden, nicht sehr zugänglich. Lassen Sie uns dies nun näher betrachten.

## Das Problem der Tastaturbenutzbarkeit untersuchen

Beginnen Sie, indem Sie auf das Eingabefeld oben in unserer App klicken, als ob Sie eine neue Aufgabe hinzufügen möchten. Sie werden ein dickes, gestricheltes Umrandung um dieses Eingabefeld sehen. Diese Umrandung ist Ihr visueller Indikator dafür, dass der Browser derzeit auf dieses Element fokussiert ist. Drücken Sie die <kbd>Tab</kbd>-Taste, und Sie werden die Umrandung um die "Hinzufügen"-Taste unter dem Eingabefeld erscheinen sehen. Dies zeigt Ihnen, dass der Fokus des Browsers bewegt wurde.

Drücken Sie die <kbd>Tab</kbd>-Taste noch ein paar Mal, und Sie werden diesen gestrichelten Fokus-Indikator zwischen den Filter-Schaltflächen bewegen sehen. Gehen Sie weiter, bis der Fokus-Indikator um die erste "Bearbeiten"-Taste ist. Drücken Sie <kbd>Enter</kbd>.

Die `<Todo />`-Komponente wird die Vorlagen wie von uns entworfen wechseln, und Sie werden ein Formular sehen, das es uns ermöglicht, den Namen der Aufgabe zu bearbeiten.

Aber wohin ist unser Fokus-Indikator verschwunden?

Wenn wir zwischen Vorlagen in unserer `<Todo />`-Komponente wechseln, entfernen wir die Elemente der alten Vorlage vollständig und ersetzen sie durch die Elemente der neuen Vorlage. Das bedeutet, dass das Element, auf das wir fokussiert waren, nicht mehr existiert, sodass es keinen visuellen Hinweis darauf gibt, wo sich der Fokus des Browsers befindet. Dies könnte eine Vielzahl von Benutzern verwirren – insbesondere Benutzer, die auf die Tastatur angewiesen sind, oder Benutzer, die unterstützende Technologien verwenden.

Um die Erfahrung für Tastatur- und unterstützende Technologiebenutzer zu verbessern, sollten wir den Fokus des Browsers selbst verwalten.

### Aside: ein Hinweis zu unserem Fokus-Indikator

Wenn Sie mit Ihrer Maus auf die Schaltflächen "Alle", "Aktiv" oder "Abgeschlossen" klicken, sehen Sie _keinen_ sichtbaren Fokus-Indikator, aber Sie werden ihn sehen, wenn Sie mit der <kbd>Tab</kbd>-Taste auf Ihrer Tastatur zwischen ihnen wechseln. Keine Sorge – Ihr Code ist nicht kaputt!

Unsere CSS-Datei verwendet die [`:focus-visible`](/de/docs/Web/CSS/:focus-visible) Pseudoklasse, um benutzerdefiniertes Styling für den Fokus-Indikator bereitzustellen, und der Browser verwendet eine Reihe interner Regeln, um zu bestimmen, wann er diesen dem Benutzer anzeigt. Im Allgemeinen wird der Browser einen Fokus-Indikator als Reaktion auf Tastatureingaben anzeigen und _könnte_ ihn als Reaktion auf Mauseingaben anzeigen. `<button>`-Elemente zeigen keinen Fokus-Indikator als Reaktion auf Mauseingaben an, während `<input>`-Elemente dies tun.

Das Verhalten von `:focus-visible` ist selektiver als die ältere [`:focus`](/de/docs/Web/CSS/:focus) Pseudoklasse, mit der Sie möglicherweise vertrauter sind. `:focus` zeigt einen Fokus-Indikator in viel mehr Situationen an, und Sie können es anstatt oder in Kombination mit `:focus-visible` verwenden, wenn Sie es bevorzugen.

## Fokussierung zwischen Vorlagen

Wenn ein Benutzer die `<Todo />`-Vorlage von Ansicht zu Bearbeitung ändert, sollten wir den Fokus auf das `<input>` setzen, das zur Umbenennung verwendet wird; wenn er von Bearbeitung zurück zu Ansicht wechselt, sollten wir den Fokus zurück auf die "Bearbeiten"-Taste lenken.

### Zielelemente bestimmen

Bis zu diesem Punkt haben wir JSX-Komponenten geschrieben und React die resultierende DOM im Hintergrund erstellen lassen. Die meiste Zeit benötigen wir keine spezifischen Elemente im DOM ins Visier, da wir Reacts State und Props verwenden können, um zu kontrollieren, was gerendert wird. Zur Fokussierungsverwaltung müssen wir jedoch in der Lage sein, bestimmte DOM-Elemente ins Visier zu nehmen.

Hier kommt der `useRef()`-Hook ins Spiel.

Ändern Sie zunächst die `import`-Anweisung oben in `Todo.jsx`, sodass sie `useRef` einschließt:

```jsx
import { useRef, useState } from "react";
```

`useRef()` erstellt ein Objekt mit einer einzigen Eigenschaft: `current`. Refs können beliebige Werte speichern, die wir wollen, und wir können diese Werte später nachschlagen. Wir können sogar Verweise auf DOM-Elemente speichern, was genau das ist, was wir hier tun werden.

Erstellen Sie als nächstes zwei neue Konstanten unter den `useState()`-Hooks in Ihrer `Todo()`-Funktion. Jeder sollte ein Ref sein - eines für die "Bearbeiten"-Taste in der Ansichtsvorlage und eines für das Bearbeitungsfeld in der Bearbeitungsvorlage.

```jsx
const editFieldRef = useRef(null);
const editButtonRef = useRef(null);
```

Diese Refs haben einen Standardwert von `null`, um deutlich zu machen, dass sie leer sind, bis sie ihren DOM-Elementen angehängt werden. Um sie an ihre Elemente anzuhängen, fügen wir jedem Element im JSX das spezielle `ref`-Attribut hinzu und setzen die Werte dieser Attribute auf die entsprechend benannten `ref`-Objekte.

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

Aktualisieren Sie die "Bearbeiten"-Taste in Ihrer Ansichtsvorlage, damit sie so aussieht:

```jsx
<button
  type="button"
  className="btn"
  onClick={() => setEditing(true)}
  ref={editButtonRef}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

Auf diese Weise werden unser `editFieldRef` und `editButtonRef` mit Referenzen zu den DOM-Elementen befüllt, denen sie zugeordnet sind, aber _nur_ nachdem React die Komponente gerendert hat. Testen Sie das selbst: Fügen Sie die folgende Zeile irgendwo im Körper Ihrer `Todo()`-Funktion hinzu, unterhalb der Stelle, an der `editButtonRef` initialisiert wird:

```jsx
console.log(editButtonRef.current);
```

Sie werden sehen, dass der Wert von `editButtonRef.current` `null` ist, wenn die Komponente das erste Mal gerendert wird, aber wenn Sie auf eine "Bearbeiten"-Taste klicken, wird das `<button>`-Element in der Konsole protokolliert. Dies liegt daran, dass das Ref nur nach dem Rendern der Komponente befüllt wird und das Klicken auf die "Bearbeiten"-Taste die Komponente neu rendert. Stellen Sie sicher, dass Sie dieses Protokoll löschen, bevor Sie fortfahren.

> [!NOTE]
> Ihre Protokolle erscheinen 6 Mal, da wir 3 Instanzen von `<Todo />` in unserer App haben und React unsere Komponenten doppelt in der Entwicklung rendert.

Wir nähern uns dem Ziel! Um unsere neu referenzierten Elemente zu nutzen, müssen wir einen weiteren React-Hook verwenden: `useEffect()`.

### Implementierung von `useEffect()`

[`useEffect()`](https://react.dev/reference/react/useEffect) wird so genannt, weil es Side-Effects ausführt, die wir dem Renderprozess hinzufügen möchten, die aber nicht im Hauptfunktionskörper ausgeführt werden können. `useEffect()` läuft direkt nach dem Rendern einer Komponente, was bedeutet, dass die DOM-Elemente, auf die wir im vorherigen Abschnitt verwiesen haben, für uns verfügbar sein werden.

Ändern Sie erneut die `import`-Anweisung von `Todo.jsx`, um `useEffect` hinzuzufügen:

```jsx
import { useEffect, useRef, useState } from "react";
```

`useEffect()` nimmt eine Funktion als Argument an; diese Funktion wird _nach_ dem Rendern der Komponente ausgeführt. Um dies zu demonstrieren, platzieren Sie den folgenden `useEffect()`-Aufruf direkt über der `return`-Anweisung im Body von `Todo()` und übergeben Sie eine Funktion, die die Worte "side effect" in Ihre Konsole protokolliert:

```jsx
useEffect(() => {
  console.log("side effect");
});
```

Um den Unterschied zwischen dem Haupt-Renderprozess und dem Code, der innerhalb von `useEffect()` ausgeführt wird, zu verdeutlichen, fügen Sie ein weiteres Protokoll hinzu – setzen Sie dieses unterhalb des vorherigen Hinzufügens:

```jsx
console.log("main render");
```

Öffnen Sie jetzt die App in Ihrem Browser. Sie sollten beide Nachrichten in Ihrer Konsole sehen, und jede wiederholt sich mehrmals. Beachten Sie, wie "main render" zuerst protokolliert wurde und "side effect" als zweites, obwohl das "side effect" Protokoll zuerst im Code erscheint.

```plain
main render                                     Todo.jsx
side effect                                     Todo.jsx
```

Wieder sind die Protokolle in dieser Reihenfolge, weil der Code innerhalb von `useEffect()` _nach_ dem Renderprozess der Komponente läuft. Dies erfordert etwas Gewöhnung, behalten Sie es einfach im Hinterkopf, während Sie fortfahren. Löschen Sie vorerst `console.log("main render")` und wir fahren fort mit der Implementierung unserer Fokusverwaltung.

### Fokussierung auf unser Bearbeitungsfeld

Jetzt, da wir wissen, dass unser `useEffect()`-Hook funktioniert, können wir den Fokus damit verwalten. Zur Erinnerung: Wir möchten das Bearbeitungsfeld fokussieren, wenn wir zur Bearbeitungsvorlage wechseln.

Aktualisieren Sie Ihren bestehenden `useEffect()`-Hook, damit er so aussieht:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  }
}, [isEditing]);
```

Diese Änderungen führen dazu, dass, wenn `isEditing` wahr ist, React den aktuellen Wert des `editFieldRef` liest und den Fokus des Browsers darauf verschiebt. Wir übergeben auch ein Array an `useEffect()` als zweites Argument. Dieses Array ist eine Liste von Werten, von denen `useEffect()` abhängen soll. Mit diesen Werten läuft `useEffect()` nur, wenn sich einer dieser Werte ändert. Wir wollen den Fokus nur ändern, wenn sich der Wert von `isEditing` ändert.

Probieren Sie es jetzt: Verwenden Sie die <kbd>Tab</kbd>-Taste, um zu einer der "Bearbeiten"-Tasten zu navigieren, und drücken Sie dann <kbd>Enter</kbd>. Sie sollten sehen, wie die `<Todo />`-Komponente zur Bearbeitungsvorlage wechselt und der Fokus-Indikator des Browsers um das `<input>`-Element erscheint!

### Zurückfokussieren auf die Bearbeiten-Taste

Auf den ersten Blick scheint es täuschend einfach zu sein, React dazu zu bringen, den Fokus zurück auf unsere "Bearbeiten"-Taste zu verschieben, wenn die Bearbeitung gespeichert oder abgebrochen wird. Sicherlich könnten wir eine Bedingung zu unserem `useEffect()` hinzufügen, um die Bearbeiten-Taste zu fokussieren, wenn `isEditing` `false` ist? Versuchen wir es jetzt — aktualisieren Sie Ihren `useEffect()`-Aufruf wie folgt:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  } else {
    editButtonRef.current.focus();
  }
}, [isEditing]);
```

Dies funktioniert irgendwie. Wenn Sie Ihre Tastatur verwenden, um die "Bearbeiten"-Taste auszulösen (denken Sie daran: <kbd>Tab</kbd> darauf und drücken Sie <kbd>Enter</kbd>), werden Sie sehen, dass sich Ihr Fokus zwischen dem Bearbeitungseingabefeld und der "Bearbeiten"-Taste bewegt, während Sie eine Bearbeitung starten und beenden. Sie haben jedoch möglicherweise ein neues Problem bemerkt: Auf der finalen `<Todo />`-Komponente wird die "Bearbeiten"-Taste sofort beim Seitenladen fokussiert, bevor wir überhaupt mit der App interagieren!

Unser `useEffect()`-Hook verhält sich genau so, wie wir es entworfen haben: er wird ausgeführt, sobald die Komponente gerendert wird, sieht, dass `isEditing` `false` ist, und fokussiert die "Bearbeiten"-Taste. Es gibt drei Instanzen von `<Todo />`, und der Fokus wird der "Bearbeiten"-Taste derjenigen gegeben, die zuletzt gerendert wird.

Wir müssen unseren Ansatz umgestalten, sodass sich der Fokus nur dann ändert, wenn `isEditing` von einem Wert zu einem anderen wechselt.

## Robustere Fokusverwaltung

Um unsere verfeinerten Kriterien zu erfüllen, müssen wir nicht nur den Wert von `isEditing` kennen, sondern auch _wann sich dieser Wert geändert hat_. Dazu müssen wir den vorherigen Wert der `isEditing`-Konstante lesen können. Mit Pseudocode sollte unsere Logik etwa so aussehen:

```jsx
if (wasNotEditingBefore && isEditingNow) {
  focusOnEditField();
} else if (wasEditingBefore && isNotEditingNow) {
  focusOnEditButton();
}
```

Das React-Team hat [Möglichkeiten zur Ermittlung des vorherigen Zustands einer Komponente](https://legacy.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state) diskutiert und uns ein Beispiel-Hook bereitgestellt, das wir für diese Aufgabe verwenden können.

### Einführung `usePrevious()`

Fügen Sie den folgenden Code in der Nähe der Spitze von `Todo.jsx` ein, über Ihrer `Todo()`-Funktion.

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

1. Verwendet den `useRef()`-Hook, um ein leeres `ref` zu erstellen.
2. Gibt den `current`-Wert des `ref` an die Komponente zurück, die es aufgerufen hat.
3. Ruft `useEffect()` auf und aktualisiert den Wert, der in `ref.current` gespeichert ist, nach jedem Rendern der aufrufenden Komponente.

Das Verhalten von `useEffect()` ist der Schlüssel zu dieser Funktionalität. Da `ref.current` innerhalb eines `useEffect()`-Aufrufs aktualisiert wird, ist es immer einen Schritt hinter dem Wert, der sich im Haupt-Renderzyklus der Komponente befindet – daher der Name `usePrevious()`.

### Verwendung von `usePrevious()`

Jetzt können wir eine `wasEditing`-Konstante definieren, um den vorherigen Wert von `isEditing` zu verfolgen; dies wird erreicht, indem `usePrevious` mit `isEditing` als Argument aufgerufen wird. Fügen Sie das folgende innerhalb von `Todo()` hinzu, unterhalb der `useRef`-Zeilen:

```jsx
const wasEditing = usePrevious(isEditing);
```

Sie können sehen, wie sich `usePrevious()` verhält, indem Sie ein Konsolenprotokoll unter dieser Zeile hinzufügen:

```jsx
console.log(wasEditing);
```

In diesem Protokoll wird der `current`-Wert von `wasEditing` immer der vorherige Wert von `isEditing` sein. Klicken Sie mehrmals auf die Schaltflächen "Bearbeiten" und "Abbrechen", um zu sehen, wie es sich ändert, und löschen Sie dieses Protokoll, wenn Sie bereit sind, fortzufahren.

Mit dieser `wasEditing`-Konstante können wir unseren `useEffect()`-Hook aktualisieren, um das zuvor besprochene Pseudocode zu implementieren:

```jsx
useEffect(() => {
  if (!wasEditing && isEditing) {
    editFieldRef.current.focus();
  } else if (wasEditing && !isEditing) {
    editButtonRef.current.focus();
  }
}, [wasEditing, isEditing]);
```

Beachten Sie, dass die Logik von `useEffect()` jetzt von `wasEditing` abhängt, daher geben wir es in der Array der Abhängigkeiten an.

Versuchen Sie, Ihre Tastatur zu verwenden, um die Schaltflächen "Bearbeiten" und "Abbrechen" in der `<Todo />`-Komponente zu aktivieren; Sie werden sehen, dass der Fokus-Indikator des Browsers sich angemessen bewegt, ohne das Problem, das wir zu Beginn dieses Abschnitts besprochen haben.

## Fokussierung, wenn der Benutzer eine Aufgabe löscht

Es gibt eine letzte Lücke in der Tastaturerfahrung: Wenn ein Benutzer eine Aufgabe aus der Liste löscht, verschwindet der Fokus. Wir werden ein ähnliches Muster wie bei unseren vorherigen Änderungen verfolgen: Wir machen ein neues Ref und nutzen unseren `usePrevious()`-Hook, damit wir auf die Listenüberschrift fokussieren können, wann immer ein Benutzer eine Aufgabe löscht.

### Warum die Listenüberschrift?

Manchmal ist der Ort, an den wir unseren Fokus senden möchten, offensichtlich: Als wir unsere `<Todo />`-Vorlagen umschalteten, hatten wir einen Ausgangspunkt, zu dem wir "zurückkehren" konnten — die "Bearbeiten"-Taste. In diesem Fall jedoch, da wir Elemente vollständig aus dem DOM entfernen, gibt es keinen Ort, zu dem wir zurückkehren könnten. Die nächstbeste Lösung ist ein intuitiver Ort irgendwo in der Nähe. Die Listenüberschrift ist die beste Wahl, weil sie sich in der Nähe des Listenelements befindet, das der Benutzer löschen wird, und die Fokussierung darauf dem Benutzer mitteilt, wie viele Aufgaben noch übrig sind.

### Erstellen unseres Refs

Importieren Sie die `useRef()` und `useEffect()` Hooks in `App.jsx` — Sie benötigen sie beide, wie unten:

```jsx
import { useState, useRef, useEffect } from "react";
```

Erklären Sie als nächstes ein neues Ref innerhalb der `App()`-Funktion, direkt über der `return`-Anweisung:

```jsx
const listHeadingRef = useRef(null);
```

### Vorbereitung der Überschrift

Überschriftenelemente wie unser `<h2>` sind normalerweise nicht fokussierbar. Dies ist kein Problem — wir können jedes Element programmatisch fokussierbar machen, indem wir das Attribut [`tabindex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) hinzufügen. Das bedeutet _nur fokussierbar mit JavaScript_. Sie können nicht mit <kbd>Tab</kbd> ein Element mit einem tabindex von `-1` auf die gleiche Weise fokussieren, wie Sie es mit einem [`<button>`](/de/docs/Web/HTML/Element/button) oder [`<a>`](/de/docs/Web/HTML/Element/a) Element tun könnten (dies kann mit `tabindex="0"` erreicht werden, aber das ist in diesem Fall nicht geeignet).

Lassen Sie uns das `tabindex`-Attribut hinzufügen — im JSX als `tabIndex` geschrieben — zur Überschrift über unserer Aufgabenliste, zusammen mit unserem `listHeadingRef`:

```jsx
<h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
  {headingText}
</h2>
```

> [!NOTE]
> Das `tabindex`-Attribut ist hervorragend für Barrierefreiheitsrandfälle, aber Sie sollten **mit größter Sorgfalt** darauf achten, es nicht zu überbeanspruchen. Wenden Sie ein `tabindex` nur dann auf ein Element an, wenn Sie sicher sind, dass dessen Fokussierbarkeit Ihrem Benutzer irgendwie zu Gute kommen wird. In den meisten Fällen sollten Sie Elemente verwenden, die natürlich den Fokus übernehmen können, wie Schaltflächen, Links und Eingaben. Unverantwortliche Nutzung von `tabindex` könnte tiefgreifende negative Auswirkungen auf Tastatur- und Bildschirmlesebenutzer haben!

### Abrufen des vorherigen Zustands

Wir möchten uns auf das Element fokussieren, das mit unserem Ref verbunden ist (über das `ref`-Attribut), nur wenn unser Benutzer eine Aufgabe aus ihrer Liste löscht. Das wird den `usePrevious()`-Hook erfordern, den wir zuvor verwendet haben. Fügen Sie ihn an den Anfang Ihrer `App.jsx`-Datei hinzu, direkt unter den Importen:

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

Fügen Sie nun das folgende über der `return`-Anweisung innerhalb der `App()`-Funktion hinzu:

```jsx
const prevTaskLength = usePrevious(tasks.length);
```

Hier rufen wir `usePrevious()` auf, um die vorherige Länge des Aufgabenarrays zu verfolgen.

> [!NOTE]
> Da wir `usePrevious()` jetzt in zwei Dateien nutzen, könnte es effizienter sein, die `usePrevious()`-Funktion in eine eigene Datei zu verschieben, sie aus dieser Datei zu exportieren und dort zu importieren, wo Sie sie benötigen. Versuchen Sie, dies als Übung zu machen, sobald Sie am Ende angekommen sind.

### Verwendung von `useEffect()` zur Steuerung unseres Überschriftenfokus

Jetzt, da wir gespeichert haben, wie viele Aufgaben wir zuvor hatten, können wir einen `useEffect()`-Hook einrichten, der läuft, wenn sich unsere Anzahl an Aufgaben ändert, und die Überschrift fokussiert, wenn wir jetzt weniger Aufgaben haben als vorher — also, wenn wir eine Aufgabe gelöscht haben!

Fügen Sie das folgende in den Körper der `App()`-Funktion ein, direkt unter Ihren vorherigen Ergänzungen:

```jsx
useEffect(() => {
  if (tasks.length < prevTaskLength) {
    listHeadingRef.current.focus();
  }
}, [tasks.length, prevTaskLength]);
```

Wir versuchen nur, unsere Listenüberschrift zu fokussieren, wenn wir jetzt weniger Aufgaben haben als zuvor. Die an diesen Hook übergebenen Abhängigkeiten stellen sicher, dass er nur versucht, erneut zu laufen, wenn sich einer dieser Werte (die Anzahl der aktuellen Aufgaben oder die Anzahl der vorherigen Aufgaben) ändert.

Jetzt, wenn Sie Ihre Tastatur verwenden, um eine Aufgabe in Ihrem Browser zu löschen, werden Sie sehen, dass unsere gestrichelte Fokuslinie um die Überschrift über der Liste erscheint.

## Fertig!

Sie haben gerade ein React-App von Grund auf aufgebaut! Herzlichen Glückwunsch! Die hier erlernten Fähigkeiten sind eine großartige Grundlage, auf der Sie aufbauen können, während Sie weiter mit React arbeiten.

Die meiste Zeit können Sie ein effektiver Mitwirkender in einem React-Projekt sein, auch wenn alles, was Sie tun, darin besteht, sorgfältig über Komponenten und deren State und Props nachzudenken. Denken Sie immer daran, das beste HTML zu schreiben, das Sie können.

`useRef()` und `useEffect()` sind einigermaßen fortgeschrittene Funktionen, und Sie können stolz darauf sein, dass Sie sie verwenden! Achten Sie darauf, Gelegenheiten zu suchen, sie weiter zu üben, denn dadurch werden Sie in der Lage sein, inklusive Erlebnisse für Benutzer zu schaffen. Denken Sie daran: Unsere App wäre ohne sie für Tastaturbenutzer nicht zugänglich gewesen!

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, können Sie eine fertige Version des Beispiel-React-App-Codes in unserem [todo-react Repository](https://github.com/mdn/todo-react) finden. Für eine laufende Live-Version siehe <https://mdn.github.io/todo-react/>.

Im allerletzten Artikel stellen wir Ihnen eine Liste von React-Ressourcen vor, die Sie verwenden können, um Ihr Lernen weiter zu vertiefen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
