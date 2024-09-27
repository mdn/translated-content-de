---
title: Filtern unserer To-Do-Elemente
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Lassen Sie uns nun mit der Hinzufügung von Funktionalität fortfahren, damit Benutzer ihre To-Do-Elemente filtern können, sodass sie aktive, abgeschlossene oder alle Elemente anzeigen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>, Kenntnisse über das
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

Das Filtern von Elementen baut auf der `filter`-Eigenschaft auf, die Sie zuvor zu `app.component.ts` hinzugefügt haben:

```ts
filter: 'all' | 'active' | 'done' = 'all';
```

Der Standardwert für den Filter ist `all`, er kann jedoch auch `active` oder `done` sein.

## Hinzufügen von Filtersteuerungen

Fügen Sie in `app.component.html` das folgende HTML unterhalb des **Hinzufügen**-Buttons, aber oberhalb des Abschnitts, der die Elemente auflistet, hinzu.
Im folgenden Ausschnitt sind die bestehenden Abschnitte in Ihrem HTML in Kommentaren, sodass Sie genau sehen können, wo die Schaltflächen platziert werden.

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

Ein Klick auf die Schaltflächen ändert die `filter`-Werte, die bestimmen, welche `items` angezeigt werden, sowie die von Angular auf die aktive Schaltfläche angewendeten Stile.

- Wenn der Benutzer auf die **Alle**-Schaltfläche klickt, werden alle Elemente angezeigt.
- Wenn der Benutzer auf die **Zu erledigen**-Schaltfläche klickt, werden nur die Elemente mit einem `done`-Wert von `false` angezeigt.
- Wenn der Benutzer auf die **Erledigt**-Schaltfläche klickt, werden nur die Elemente mit einem `done`-Wert von `true` angezeigt.

Eine class-Attributbindung, die eckige Klammern `[]` verwendet, steuert die Textfarbe der Schaltflächen.
Die class-Bindung, `[class.active]`, wendet die `active`-Klasse an, wenn der Wert von `filter` dem Ausdruck entspricht.
Wenn der Benutzer beispielsweise auf die **Erledigt**-Schaltfläche klickt, wodurch der `filter`-Wert auf `done` gesetzt wird, ergibt der class-Bindungsausdruck `filter == 'done'` den Wert `true`.
Wenn der `filter`-Wert `done` ist, wendet Angular die `active`-Klasse auf die **Erledigt**-Schaltfläche an, um die Textfarbe grün zu machen.
Sobald der Benutzer auf eine der anderen Schaltflächen klickt, ist der Wert eines `filter` nicht mehr `done`, sodass die grüne Textfarbe nicht mehr angewendet wird.

## Zusammenfassung

Das ging schnell! Da Sie den `filter`-Code bereits in `app.component.ts` hatten, mussten Sie nur die Vorlage bearbeiten, um Steuerungen zum Filtern der Elemente bereitzustellen. Unser nächster – und letzter – Artikel befasst sich damit, wie Sie Ihre Angular-App für die Produktion vorbereiten, und bietet weitere Ressourcen, um Ihre Lernreise fortzusetzen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
