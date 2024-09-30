---
title: Filtern unserer To-Do-Elemente
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Nun gehen wir dazu über, die Funktionalität hinzuzufügen, die es den Benutzern ermöglicht, ihre To-Do-Elemente zu filtern, sodass sie aktive, abgeschlossene oder alle Elemente anzeigen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
        Kenntnisse über die
        <a
          href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >Terminal/Befehlszeile</a
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
filter: 'all' | 'active' | 'done' = 'all';
```

Der Standardwert für filter ist `all`, kann aber auch `active` oder `done` sein.

## Filtersteuerungen hinzufügen

Fügen Sie in `app.component.html` den folgenden HTML-Code unter dem **Hinzufügen**-Button, aber oberhalb des Abschnitts, der die Elemente auflistet, hinzu.
Im folgenden Ausschnitt sind die bestehenden Abschnitte in Ihrem HTML in Kommentaren dargestellt, damit Sie genau sehen können, wo die Buttons platziert werden sollen.

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

Durch Klicken auf die Buttons ändern sich die `filter`-Werte, die festlegen, welche `items` angezeigt werden, sowie die Stile, die Angular auf den aktiven Button anwendet.

- Wenn der Benutzer auf den **Alle**-Button klickt, werden alle Elemente angezeigt.
- Wenn der Benutzer auf den **Zu erledigen**-Button klickt, werden nur die Elemente mit einem `done`-Wert von `false` angezeigt.
- Wenn der Benutzer auf den **Erledigt**-Button klickt, werden nur die Elemente mit einem `done`-Wert von `true` angezeigt.

Eine Klassenattributbindung, die eckige Klammern `[]` verwendet, steuert die Textfarbe der Buttons.
Die Klassenbindung `[class.active]` wendet die `active`-Klasse an, wenn der Wert von `filter` mit dem Ausdruck übereinstimmt.
Zum Beispiel, wenn der Benutzer den **Erledigt**-Button klickt, welcher den `filter`-Wert auf `done` setzt, wird der Ausdruck der Klassenbindung `filter == 'done'` zu `true` ausgewertet.
Wenn der `filter`-Wert `done` ist, wendet Angular die `active`-Klasse auf den **Erledigt**-Button an, um die Textfarbe grün zu machen.
Sobald der Benutzer auf einen der anderen Buttons klickt, ist der Wert von `filter` nicht mehr `done`, sodass die grüne Textfarbe nicht mehr angewendet wird.

## Zusammenfassung

Das ging schnell! Da Sie bereits den `filter`-Code in `app.component.ts` hatten, mussten Sie nur die Vorlage bearbeiten, um Steuerungen für das Filtern der Elemente bereitzustellen. Unser nächster — und letzter — Artikel befasst sich mit dem Erstellen Ihrer Angular-App für die Produktion und bietet weitere Ressourcen, um Ihre Lernreise fortzusetzen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
