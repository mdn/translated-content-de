---
title: Filtern unserer To-do-Elemente
slug: Learn_web_development/Core/Frameworks_libraries/Angular_filtering
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_item_component","Learn_web_development/Core/Frameworks_libraries/Angular_building", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Angular-Artikel werden nicht mehr gepflegt und werden in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

Nun gehen wir dazu über, Funktionalitäten hinzuzufügen, die es den Benutzern ermöglichen, ihre To-do-Elemente zu filtern, damit sie aktive, erledigte oder alle Elemente anzeigen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden Sprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
        Kenntnisse der
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal/Kommandokonsole</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Zur Hinzufügung der Filterfunktionalität zu unserer App.</td>
    </tr>
  </tbody>
</table>

## Unser Filtercode

Das Filtern von Elementen baut auf der `filter`-Eigenschaft auf, die Sie zuvor zu `app.component.ts` hinzugefügt haben:

```ts
export class AppComponent {
  // …
  filter: "all" | "active" | "done" = "all";
  // …
}
```

Der Standardwert für `filter` ist `all`, er kann aber auch `active` oder `done` sein.

## Hinzufügen von Filtersteuerungen

Fügen Sie in `app.component.html` den folgenden HTML-Code unterhalb des **Add**-Buttons, aber oberhalb des Abschnitts, der die Elemente auflistet, hinzu. Im folgenden Ausschnitt sind die bestehenden Abschnitte in Ihrem HTML in Kommentaren, damit Sie genau sehen können, wo die Schaltflächen platziert werden sollen.

```html
<!-- <button class="btn-primary" (click)="addItem(newItem.value)">Add</button>
 -->

<!-- Buttons that show all, still to do, or done items on click -->
<div class="btn-wrapper">
  <button
    class="btn btn-menu"
    [class.active]="filter === 'all'"
    (click)="filter = 'all'">
    All
  </button>

  <button
    class="btn btn-menu"
    [class.active]="filter === 'active'"
    (click)="filter = 'active'">
    To Do
  </button>

  <button
    class="btn btn-menu"
    [class.active]="filter === 'done'"
    (click)="filter = 'done'">
    Done
  </button>
</div>

<!-- <h2>\{{items.length}} item(s)</h2>
         <ul>... -->
```

Das Klicken der Schaltflächen ändert die `filter`-Werte, die bestimmen, welche `items` angezeigt werden und welche Stile Angular auf die aktive Schaltfläche anwendet.

- Wenn der Benutzer auf die **All**-Schaltfläche klickt, werden alle Elemente angezeigt.
- Wenn der Benutzer auf die **To do**-Schaltfläche klickt, werden nur die Elemente mit einem `done`-Wert von `false` angezeigt.
- Wenn der Benutzer auf die **Done**-Schaltfläche klickt, werden nur die Elemente mit einem `done`-Wert von `true` angezeigt.

Eine Klassenzuordnung über Attributbindung, die eckige Klammern `[]` verwendet, steuert die Textfarbe der Schaltflächen. Die Klassenbindung `[class.active]` wendet die `active`-Klasse an, wenn der Wert von `filter` mit dem Ausdruck übereinstimmt. Zum Beispiel, wenn der Benutzer auf die **Done**-Schaltfläche klickt, die den `filter`-Wert auf `done` setzt, wird der Ausdruck der Klassenbindung `filter === 'done'` als `true` ausgewertet. Wenn der `filter`-Wert `done` ist, wendet Angular die `active`-Klasse auf die **Done**-Schaltfläche an, um die Textfarbe grün zu machen. Sobald der Benutzer auf eine der anderen Schaltflächen klickt, ist der `filter`-Wert nicht mehr `done`, sodass die grüne Textfarbe nicht mehr gilt.

## Zusammenfassung

Das ging schnell! Da Sie bereits den `filter`-Code in `app.component.ts` hatten, mussten Sie nur die Vorlage bearbeiten, um Steuerungen zum Filtern der Elemente bereitzustellen. Unser nächster — und letzter — Artikel zeigt, wie Sie Ihre Angular-App für die Produktion bereitstellen und bietet weitere Ressourcen, um Ihre Lernreise fortzusetzen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_item_component","Learn_web_development/Core/Frameworks_libraries/Angular_building", "Learn_web_development/Core/Frameworks_libraries")}}
