---
title: Filtern unserer To-Do-Elemente
slug: Learn_web_development/Core/Frameworks_libraries/Angular_filtering
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_item_component","Learn_web_development/Core/Frameworks_libraries/Angular_building", "Learn_web_development/Core/Frameworks_libraries")}}

Kommen wir nun dazu, Funktionalität hinzuzufügen, damit Benutzer ihre To-Do-Elemente filtern können, sodass sie aktive, abgeschlossene oder alle Elemente anzeigen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
        sowie Kenntnisse der
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal-/Befehlszeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Filterfunktionalität zu unserer App hinzufügen.</td>
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

Der Standardwert für den Filter ist `all`, er kann aber auch `active` oder `done` sein.

## Hinzufügen von Filtersteuerungen

Fügen Sie in `app.component.html` den folgenden HTML-Code unterhalb der **Add**-Schaltfläche, aber oberhalb des Abschnitts, der die Elemente auflistet, hinzu. Im folgenden Ausschnitt sind die vorhandenen Abschnitte in Ihrem HTML auskommentiert, damit Sie genau sehen können, wo Sie die Schaltflächen platzieren müssen.

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

Das Klicken auf die Schaltflächen ändert die `filter`-Werte, die bestimmen, welche `items` angezeigt werden und welche Stile Angular auf die aktive Schaltfläche anwendet.

- Wenn der Benutzer die **All**-Schaltfläche klickt, werden alle Elemente angezeigt.
- Wenn der Benutzer die **To do**-Schaltfläche klickt, werden nur die Elemente mit einem `done`-Wert von `false` angezeigt.
- Wenn der Benutzer die **Done**-Schaltfläche klickt, werden nur die Elemente mit einem `done`-Wert von `true` angezeigt.

Eine Klassenattributbindung mit Hilfe von eckigen Klammern, `[]`, steuert die Textfarbe der Schaltflächen. Die Klassenbindung `[class.active]` wendet die `active`-Klasse an, wenn der Wert von `filter` dem Ausdruck entspricht. Zum Beispiel, wenn der Benutzer auf die **Done**-Schaltfläche klickt, die den `filter`-Wert auf `done` setzt, bewertet der Ausdruck der Klassenbindung `filter === 'done'` zu `true`. Wenn der `filter`-Wert `done` ist, wendet Angular die `active`-Klasse auf die **Done**-Schaltfläche an, um die Textfarbe grün zu machen. Sobald der Benutzer auf eine der anderen Schaltflächen klickt, ist der `filter`-Wert nicht länger `done`, sodass die grüne Textfarbe nicht mehr gilt.

## Zusammenfassung

Das ging schnell! Da Sie den `filter`-Code bereits in `app.component.ts` hatten, mussten Sie nur die Vorlage bearbeiten, um Steuerungen zum Filtern der Elemente bereitzustellen. Unser nächster und letzter Artikel befasst sich damit, wie Sie Ihre Angular-App für die Produktion bereitstellen und bietet weitere Ressourcen, um Ihre Lernreise fortzusetzen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_item_component","Learn_web_development/Core/Frameworks_libraries/Angular_building", "Learn_web_development/Core/Frameworks_libraries")}}
