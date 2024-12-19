---
title: Filtern unserer Aufgabenliste
slug: Learn_web_development/Core/Frameworks_libraries/Angular_filtering
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_item_component","Learn_web_development/Core/Frameworks_libraries/Angular_building", "Learn_web_development/Core/Frameworks_libraries")}}

Nun gehen wir dazu über, Funktionalität hinzuzufügen, die es Nutzern erlaubt, ihre Aufgabenliste zu filtern, sodass sie aktive, abgeschlossene oder alle Elemente anzeigen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
        Kenntnisse über das
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Hinzufügen von Filterfunktionalität zu unserer App.</td>
    </tr>
  </tbody>
</table>

## Unser Filtercode

Das Filtern von Elementen basiert auf der `filter` Eigenschaft, die Sie zuvor zu `app.component.ts` hinzugefügt haben:

```ts
filter: 'all' | 'active' | 'done' = 'all';
```

Der Standardwert für den Filter ist `all`, aber er kann auch `active` oder `done` sein.

## Hinzufügen von Filtersteuerungen

Fügen Sie in `app.component.html` den folgenden HTML-Code unterhalb des **Hinzufügen**-Buttons, aber oberhalb des Abschnitts, der die Elemente auflistet, hinzu. Im folgenden Snippet sind die vorhandenen Abschnitte in Ihrem HTML in Kommentaren, sodass Sie genau sehen können, wo die Buttons platziert werden sollen.

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

Das Klicken auf die Buttons ändert die `filter` Werte, die bestimmen, welche `items` angezeigt werden und welche Stile Angular auf den aktiven Button anwendet.

- Wenn der Benutzer den **Alle**-Button anklickt, werden alle Elemente angezeigt.
- Wenn der Benutzer den **Zu erledigen**-Button anklickt, werden nur die Elemente mit einem `done`-Wert von `false` angezeigt.
- Wenn der Benutzer den **Erledigt**-Button anklickt, werden nur die Elemente mit einem `done`-Wert von `true` angezeigt.

Eine Klassenattributbindung, unter Verwendung von eckigen Klammern, `[]`, steuert die Textfarbe der Buttons. Die Klassenbindung, `[class.active]`, wendet die `active` Klasse an, wenn der Wert von `filter` mit dem Ausdruck übereinstimmt. Zum Beispiel, wenn der Benutzer den **Erledigt**-Button anklickt, welcher den `filter` Wert auf `done` setzt, evaluiert der Klassenbindungsausdruck `filter == 'done'` zu `true`. Wenn der `filter` Wert `done` ist, wendet Angular die `active` Klasse auf den **Erledigt**-Button an, um die Textfarbe grün zu machen. Sobald der Benutzer auf einen der anderen Buttons klickt, ist der Wert von `filter` nicht mehr `done`, und die grüne Textfarbe wird nicht mehr angewendet.

## Zusammenfassung

Das ging schnell! Da Sie bereits den `filter` Code in `app.component.ts` hatten, mussten Sie nur das Template bearbeiten, um Steuerungen zum Filtern der Elemente bereitzustellen. Unser nächster — und letzter — Artikel befasst sich damit, wie Sie Ihre Angular-App für die Produktion bereitmachen, und bietet weitere Ressourcen, um Ihre Lernreise fortzusetzen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_item_component","Learn_web_development/Core/Frameworks_libraries/Angular_building", "Learn_web_development/Core/Frameworks_libraries")}}
