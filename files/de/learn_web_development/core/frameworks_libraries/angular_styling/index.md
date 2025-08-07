---
title: Gestaltung unserer Angular-App
slug: Learn_web_development/Core/Frameworks_libraries/Angular_styling
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/Angular_item_component", "Learn_web_development/Core/Frameworks_libraries")}}

Jetzt, da wir die grundlegende Struktur unserer Anwendung eingerichtet und begonnen haben, etwas Nützliches anzuzeigen, wechseln wir das Thema und betrachten, wie Angular die Gestaltung von Anwendungen handhabt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
        Wissen über die
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal-/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie man eine Angular-App gestaltet.</td>
    </tr>
  </tbody>
</table>

## Hinzufügen von Stil zu Angular

Das Angular CLI erzeugt zwei Arten von Style-Dateien:

- Komponentenstile: Das Angular CLI gibt jeder Komponente ihre eigene Datei für Stile. Die Stile in dieser Datei gelten nur für ihre Komponente.
- `styles.css`: Im `src`-Verzeichnis gelten die Stile in dieser Datei für Ihre gesamte Anwendung, es sei denn, Sie spezifizieren Stile auf der Komponentenebene.

Abhängig davon, ob Sie einen CSS-Präprozessor verwenden, kann die Erweiterung Ihrer CSS-Dateien variieren. Angular unterstützt einfaches CSS, SCSS, Sass und Less.

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
  color: black;
  background-color: white;
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
  color: white;
  background-color: black;
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
  color: black;
  outline: none;
  border: black solid 2px;
  background-color: #d7ecff;
}

.btn-primary:active {
  background-color: #212020;
}
```

Das CSS in `src/styles.css` gilt für die gesamte Anwendung, jedoch beeinflussen diese Stile nicht alles auf der Seite. Der nächste Schritt besteht darin, Stile hinzuzufügen, die speziell für die `AppComponent` gelten.

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

@media screen and (width >= 600px) {
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
  border: 2px solid black;
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

Der letzte Schritt besteht darin, Ihren Browser erneut zu besuchen und zu beobachten, wie sich die Gestaltung aktualisiert hat. Jetzt ergibt alles etwas mehr Sinn.

## Zusammenfassung

Da unsere kurze Tour über die Gestaltung in Angular abgeschlossen ist, kehren wir nun zur Erstellung unserer App-Funktionalität zurück. Im nächsten Artikel werden wir eine richtige Komponente für To-do-Items erstellen und es möglich machen, To-do-Items zu markieren, zu bearbeiten und zu löschen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/Angular_item_component", "Learn_web_development/Core/Frameworks_libraries")}}
