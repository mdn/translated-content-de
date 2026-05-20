---
title: Styling unserer Angular-App
slug: Learn_web_development/Core/Frameworks_libraries/Angular_styling
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/Angular_item_component", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Angular-Artikel werden nicht mehr gepflegt und in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

Nun, da wir unsere grundlegende Anwendungsstruktur eingerichtet und begonnen haben, etwas Nützliches anzuzeigen, lassen Sie uns den Fokus wechseln und in einem Artikel anschauen, wie Angular mit der Gestaltung von Anwendungen umgeht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
        sowie Kenntnisse über den
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Zu lernen, wie man eine Angular-App gestaltet.</td>
    </tr>
  </tbody>
</table>

## Hinzufügen von Stil zu Angular

Der Angular CLI generiert zwei Arten von Stil-Dateien:

- Komponentenstile: Der Angular CLI gibt jeder Komponente ihre eigene Datei für Stile.
  Die Stile in dieser Datei gelten nur für die jeweilige Komponente.
- `styles.css`: Im `src`-Verzeichnis gelten die Stile in dieser Datei für Ihre gesamte Anwendung, es sei denn, Sie geben Stile auf der Komponentenebene an.

Abhängig davon, ob Sie einen CSS-Präprozessor verwenden, kann die Erweiterung Ihrer CSS-Dateien variieren.
Angular unterstützt Plain CSS, SCSS, Sass und Less.

In `src/styles.css`, fügen Sie die folgenden Stile ein:

```css
body {
  font-family: "Helvetica", "Arial", sans-serif;
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

Die CSS in `src/styles.css` gelten für die gesamte Anwendung, allerdings betreffen diese Stile nicht alles auf der Seite.
Der nächste Schritt besteht darin, Stile hinzuzufügen, die speziell für die `AppComponent` gelten.

In `app.component.css`, fügen Sie die folgenden Stile ein:

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

Der letzte Schritt besteht darin, Ihren Browser erneut zu besuchen und zu sehen, wie sich das Styling aktualisiert hat. Jetzt ergibt alles ein bisschen mehr Sinn.

## Zusammenfassung

Jetzt, da unsere kurze Tour durch das Styling in Angular abgeschlossen ist, lassen Sie uns zur Erstellung unserer App-Funktionalität zurückkehren. Im nächsten Artikel erstellen wir eine ordentliche Komponente für To-Do-Elemente und ermöglichen es Ihnen, To-Do-Elemente zu überprüfen, zu bearbeiten und zu löschen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/Angular_item_component", "Learn_web_development/Core/Frameworks_libraries")}}
