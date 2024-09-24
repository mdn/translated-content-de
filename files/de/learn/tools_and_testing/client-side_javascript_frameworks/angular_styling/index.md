---
title: Styling unserer Angular-App
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling
l10n:
  sourceCommit: 4d26e2fc74e46fac289579c6df42cd27c44595e6
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Da wir nun die grundlegende Anwendungsstruktur eingerichtet und begonnen haben, etwas Nützliches anzuzeigen, wollen wir uns einem Artikel widmen, der sich damit beschäftigt, wie Angular die Gestaltung von Anwendungen handhabt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a>, und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
        Kenntnisse über die
        <a
          href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >Terminal-/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie man eine Angular-Anwendung stylt.</td>
    </tr>
  </tbody>
</table>

## Hinzufügen von Stil zu Angular

Das Angular CLI generiert zwei Arten von Stil-Dateien:

- Komponentenstile: Das Angular CLI gibt jedem Component seine eigene Datei für Stile. Die Stile in dieser Datei gelten nur für das jeweilige Component.
- `styles.css`: Im `src`-Verzeichnis gelten die Stile in dieser Datei für Ihre gesamte Anwendung, es sei denn, Sie definieren Stile auf Komponentenebene.

Je nachdem, ob Sie einen CSS-Präprozessor verwenden, kann die Erweiterung Ihrer CSS-Dateien variieren. Angular unterstützt plain CSS, SCSS, Sass und Less.

Fügen Sie in `src/styles.css` die folgenden Stile ein:

```css
body {
  font-family: Helvetica, Arial, sans-serif;
}

.btn-wrapper {
  /* flexbox */
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.btn {
  color: #000;
  background-color: #fff;
  border: 2px solid #cecece;
  padding: 0.35rem 1rem 0.25rem 1rem;
  font-size: 1rem;
}

.btn:hover {
  background-color: #ecf2fd;
}

.btn:active {
  background-color: #d1e0fe;
}

.btn:focus {
  outline: none;
  border: black solid 2px;
}

.btn-primary {
  color: #fff;
  background-color: #000;
  width: 100%;
  padding: 0.75rem;
  font-size: 1.3rem;
  border: black solid 2px;
  margin: 1rem 0;
}

.btn-primary:hover {
  background-color: #444242;
}

.btn-primary:focus {
  color: #000;
  outline: none;
  border: #000 solid 2px;
  background-color: #d7ecff;
}

.btn-primary:active {
  background-color: #212020;
}
```

Die CSS in `src/styles.css` gelten für die gesamte Anwendung, jedoch beeinflussen diese Stile nicht alles auf der Seite. Der nächste Schritt ist, Stile hinzuzufügen, die speziell für das `AppComponent` gelten.

Fügen Sie in `app.component.css` die folgenden Stile hinzu:

```css
.main {
  max-width: 500px;
  width: 85%;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
  box-shadow:
    0 2px 4px 0 rgb(0 0 0 / 20%),
    0 2.5rem 5rem 0 rgb(0 0 0 / 10%);
}

@media screen and (min-width: 600px) {
  .main {
    width: 70%;
  }
}

label {
  font-size: 1.5rem;
  font-weight: bold;
  display: block;
  padding-bottom: 1rem;
}

.lg-text-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #000;
  display: block;
  box-sizing: border-box;
  font-size: 1rem;
}

.btn-wrapper {
  margin-bottom: 2rem;
}

.btn-menu {
  flex-basis: 32%;
}

.active {
  color: green;
}

ul {
  padding-inline-start: 0;
}

ul li {
  list-style: none;
}
```

Der letzte Schritt besteht darin, den Browser erneut zu öffnen und zu betrachten, wie sich das Styling verbessert hat. Jetzt ergibt alles etwas mehr Sinn.

## Zusammenfassung

Da unsere kurze Einführung in das Styling in Angular abgeschlossen ist, kehren wir zur Erstellung der App-Funktionalität zurück. Im nächsten Artikel erstellen wir eine richtige Komponente für To-Do-Elemente und ermöglichen es Ihnen, To-Do-Elemente abzuhaken, zu bearbeiten und zu löschen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
