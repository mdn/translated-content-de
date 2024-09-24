---
title: Filtern unserer To-Do-Elemente
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Jetzt wollen wir die Funktionalität hinzufügen, die es Benutzern ermöglicht, ihre To-Do-Elemente zu filtern, sodass sie aktive, abgeschlossene oder alle Elemente anzeigen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen,
        Kenntnisse über das
        <a
          href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >Terminal/Kommandozeile</a
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

Das Filtern der Elemente basiert auf der `filter`-Eigenschaft, die Sie zuvor zu `app.component.ts` hinzugefügt haben:

```ts
filter: 'all' | 'active' | 'done' = 'all';
```

Der Standardwert für den Filter ist `all`, aber er kann auch `active` oder `done` sein.

## Hinzufügen von Filtersteuerungen

Fügen Sie in `app.component.html` den folgenden HTML-Code unterhalb der **Add**-Schaltfläche, aber oberhalb des Abschnitts, der die Elemente auflistet, hinzu.
Im folgenden Ausschnitt sind die vorhandenen Abschnitte in Ihrem HTML als Kommentare dargestellt, damit Sie genau sehen können, wo Sie die Schaltflächen platzieren müssen.

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

Das Klicken auf die Schaltflächen ändert die `filter`-Werte, die bestimmen, welche `items` angezeigt werden, sowie die Stile, die Angular auf die aktive Schaltfläche anwendet.

- Wenn der Benutzer auf die **All**-Schaltfläche klickt, werden alle Elemente angezeigt.
- Wenn der Benutzer auf die **To Do**-Schaltfläche klickt, werden nur die Elemente mit einem `done`-Wert von `false` angezeigt.
- Wenn der Benutzer auf die **Done**-Schaltfläche klickt, werden nur die Elemente mit einem `done`-Wert von `true` angezeigt.

Eine Klassenattributbindung, die eckige Klammern `[]` verwendet, steuert die Textfarbe der Schaltflächen.
Die Klassenbindung `[class.active]` wendet die `active`-Klasse an, wenn der Wert von `filter` mit dem Ausdruck übereinstimmt.
Zum Beispiel, wenn der Benutzer die **Done**-Schaltfläche, die den `filter`-Wert auf `done` setzt, klickt, wird der Ausdruck `filter == 'done'` true.
Wenn der `filter`-Wert `done` ist, wendet Angular die `active`-Klasse auf die **Done**-Schaltfläche an, um die Textfarbe grün zu machen.
Sobald der Benutzer auf eine der anderen Schaltflächen klickt, ist der Wert von `filter` nicht mehr `done`, sodass die grüne Textfarbe nicht mehr gilt.

## Zusammenfassung

Das ging schnell! Da Sie den `filter`-Code bereits in `app.component.ts` hatten, mussten Sie nur das Template bearbeiten, um Steuerungen für das Filtern der Elemente bereitzustellen. Unser nächster — und letzter — Artikel befasst sich damit, wie Sie Ihre Angular-App bereit für die Produktion machen, und bietet weitere Ressourcen, um Ihre Lernreise fortzusetzen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
