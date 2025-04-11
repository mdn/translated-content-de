---
title: Filtern unserer To-Do-Elemente
slug: Learn_web_development/Core/Frameworks_libraries/Angular_filtering
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_item_component","Learn_web_development/Core/Frameworks_libraries/Angular_building", "Learn_web_development/Core/Frameworks_libraries")}}

Nun fahren wir fort, Funktionalität hinzuzufügen, die es den Benutzern ermöglicht, ihre To-Do-Elemente zu filtern, sodass sie aktive, erledigte oder alle Elemente anzeigen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
        sowie Kenntnisse über das
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Filtern von Funktionalitäten in unsere App integrieren.</td>
    </tr>
  </tbody>
</table>

## Unser Filtercode

Das Filtern von Elementen basiert auf der `filter`-Eigenschaft, die Sie zuvor zu `app.component.ts` hinzugefügt haben:

```ts
export class AppComponent {
  // …
  filter: "all" | "active" | "done" = "all";
  // …
}
```

Der Standardwert für den Filter ist `all`, aber er kann auch `active` oder `done` sein.

## Hinzufügen von Filtersteuerungen

Fügen Sie in `app.component.html` den folgenden HTML-Code unterhalb des **Hinzufügen**-Buttons, aber oberhalb des Abschnitts, der die Elemente auflistet, hinzu. Im folgenden Codeausschnitt sind die bestehenden Abschnitte in Ihrem HTML als Kommentare enthalten, damit Sie genau sehen, wo Sie die Schaltflächen platzieren.

```html
<!-- <button class="btn-primary" (click)="addItem(newItem.value)">Add</button>
 -->

<!-- Buttons that show all, still to do, or done items on click -->
<div class="btn-wrapper">
  <button
    class="btn btn-menu"
    [class.active]="filter == 'all'"
    (click)="filter = 'all'">
    All
  </button>

  <button
    class="btn btn-menu"
    [class.active]="filter == 'active'"
    (click)="filter = 'active'">
    To Do
  </button>

  <button
    class="btn btn-menu"
    [class.active]="filter == 'done'"
    (click)="filter = 'done'">
    Done
  </button>
</div>

<!-- <h2>\{{items.length}} item(s)</h2>
         <ul>... -->
```

Das Klicken auf die Schaltflächen ändert die `filter`-Werte, die die angezeigten `items` bestimmen sowie die von Angular auf die aktive Schaltfläche angewendeten Stile.

- Wenn der Benutzer auf die **Alle**-Schaltfläche klickt, werden alle Elemente angezeigt.
- Wenn der Benutzer auf die **Zu erledigen**-Schaltfläche klickt, werden nur die Elemente mit einem `done`-Wert von `false` angezeigt.
- Wenn der Benutzer auf die **Erledigt**-Schaltfläche klickt, werden nur die Elemente mit einem `done`-Wert von `true` angezeigt.

Eine Klassenattributbindung mit eckigen Klammern, `[]`, steuert die Textfarbe der Schaltflächen. Die Klassenbindung, `[class.active]`, wendet die `active`-Klasse an, wenn der Wert von `filter` mit dem Ausdruck übereinstimmt. Zum Beispiel, wenn der Benutzer auf die **Erledigt**-Schaltfläche klickt, wodurch der `filter`-Wert auf `done` gesetzt wird, wird der Ausdruck der Klassenbindung `filter == 'done'` zu `true` ausgewertet. Wenn der `filter`-Wert `done` ist, wendet Angular die `active`-Klasse auf die **Erledigt**-Schaltfläche an, um die Textfarbe grün zu machen. Sobald der Benutzer auf eine der anderen Schaltflächen klickt, ist der `filter`-Wert nicht mehr `done`, sodass die grüne Textfarbe nicht mehr gilt.

## Zusammenfassung

Das ging schnell! Da Sie den `filter`-Code bereits in `app.component.ts` hatten, mussten Sie nur die Vorlage bearbeiten, um Steuerungen zum Filtern der Elemente bereitzustellen. Unser nächster — und letzter — Artikel befasst sich damit, wie Sie Ihre Angular-App produktionsbereit machen, und bietet weitere Ressourcen, um Ihre Lernreise fortzusetzen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_item_component","Learn_web_development/Core/Frameworks_libraries/Angular_building", "Learn_web_development/Core/Frameworks_libraries")}}
