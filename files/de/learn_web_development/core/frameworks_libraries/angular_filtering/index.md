---
title: Filtern unserer To-Do-Elemente
slug: Learn_web_development/Core/Frameworks_libraries/Angular_filtering
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_item_component","Learn_web_development/Core/Frameworks_libraries/Angular_building", "Learn_web_development/Core/Frameworks_libraries")}}

Nun gehen wir dazu über, Funktionen hinzuzufügen, die es den Benutzern ermöglichen, ihre To-Do-Elemente zu filtern, sodass sie aktive, abgeschlossene oder alle Elemente anzeigen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
        Kenntnisse über die
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Hinzufügen von Filterfunktionen zu unserer App.</td>
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

Fügen Sie in `app.component.html` den folgenden HTML-Code unterhalb der **Hinzufügen**-Schaltfläche, aber oberhalb des Abschnitts, der die Elemente auflistet, hinzu.
Im folgenden Snippet sind die vorhandenen Abschnitte in Ihrem HTML in Kommentaren, damit Sie genau sehen können, wo Sie die Schaltflächen platzieren müssen.

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

Durch Klicken auf die Schaltflächen ändern sich die Werte von `filter`, was die anzuzeigenden `items` sowie die von Angular auf die aktive Schaltfläche angewandten Stile bestimmt.

- Wenn der Benutzer auf die **Alle**-Schaltfläche klickt, werden alle Elemente angezeigt.
- Wenn der Benutzer auf die **Zu erledigen**-Schaltfläche klickt, werden nur die Elemente mit einem `done`-Wert von `false` angezeigt.
- Wenn der Benutzer auf die **Erledigt**-Schaltfläche klickt, werden nur die Elemente mit einem `done`-Wert von `true` angezeigt.

Ein Klassenattribut-Binding, das eckige Klammern `[]` verwendet, steuert die Textfarbe der Schaltflächen. Das Klassen-Binding `[class.active]` wendet die Klasse `active` an, wenn der Wert von `filter` mit dem Ausdruck übereinstimmt.
Beispielsweise, wenn der Benutzer auf die **Erledigt**-Schaltfläche klickt, die den `filter`-Wert auf `done` setzt, wird der Klassen-Binding-Ausdruck `filter == 'done'` zu `true` ausgewertet.
Wenn der `filter`-Wert `done` ist, wendet Angular die Klasse `active` auf die **Erledigt**-Schaltfläche an, um die Textfarbe grün zu machen.
Sobald der Benutzer auf eine der anderen Schaltflächen klickt, ist der Wert von `filter` nicht mehr `done`, so dass die grüne Textfarbe nicht mehr angewendet wird.

## Zusammenfassung

Das ging schnell! Da Sie bereits den `filter`-Code in `app.component.ts` hatten, bestand alles, was Sie tun mussten, darin, die Vorlage zu bearbeiten, um Steuerungen zum Filtern der Elemente bereitzustellen. Unser nächster — und letzter — Artikel beschäftigt sich damit, wie Sie Ihre Angular-App für die Produktion vorbereiten und bietet weitere Ressourcen, um Ihre Lernreise fortzusetzen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_item_component","Learn_web_development/Core/Frameworks_libraries/Angular_building", "Learn_web_development/Core/Frameworks_libraries")}}
