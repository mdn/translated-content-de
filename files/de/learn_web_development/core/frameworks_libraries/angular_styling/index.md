---
title: Styling unserer Angular-App
slug: Learn_web_development/Core/Frameworks_libraries/Angular_styling
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/Angular_item_component", "Learn_web_development/Core/Frameworks_libraries")}}

Nachdem wir nun unsere grundlegende Anwendungsstruktur eingerichtet haben und etwas Nützliches anzeigen, wechseln wir das Thema und werfen einen Blick darauf, wie Angular die Stilgestaltung von Anwendungen handhabt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
        Wissen über die
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie man eine Angular-App stylt.</td>
    </tr>
  </tbody>
</table>

## Hinzufügen von Stil zu Angular

Die Angular CLI generiert zwei Arten von Stil-Dateien:

- Komponentenstile: Die Angular CLI gibt jeder Komponente ihre eigene Datei für Stile. Die Stile in dieser Datei gelten nur für ihre Komponente.
- `styles.css`: Im `src` Verzeichnis gelten die Stile in dieser Datei für die gesamte Anwendung, es sei denn, Sie geben Stile auf der Komponentenebene an.

Abhängig davon, ob Sie einen CSS-Präprozessor verwenden, kann die Erweiterung Ihrer CSS-Dateien variieren. Angular unterstützt Plain CSS, SCSS, Sass und Less.

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

Das CSS in `src/styles.css` gilt für die gesamte Anwendung. Diese Stile betreffen jedoch nicht alles auf der Seite. Der nächste Schritt besteht darin, Stile hinzuzufügen, die speziell für die `AppComponent` gelten.

Fügen Sie in `app.component.css` die folgenden Stile ein:

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

Der letzte Schritt besteht darin, Ihren Browser erneut zu besuchen und zu überprüfen, wie sich das Styling aktualisiert hat. Jetzt ergibt alles etwas mehr Sinn.

## Zusammenfassung

Nachdem unsere kurze Tour durch das Styling in Angular beendet ist, kehren wir zur Erstellung der App-Funktionalität zurück. Im nächsten Artikel werden wir eine geeignete Komponente für To-Do-Elemente erstellen und es so einrichten, dass man To-Do-Elemente abhaken, bearbeiten und löschen kann.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/Angular_item_component", "Learn_web_development/Core/Frameworks_libraries")}}
