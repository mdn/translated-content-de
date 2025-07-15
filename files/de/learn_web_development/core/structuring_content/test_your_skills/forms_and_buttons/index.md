---
title: "Testen Sie Ihre Fähigkeiten: Formulare und Schaltflächen"
short-title: Formulare und Schaltflächen
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons
l10n:
  sourceCommit: 5f677b960051016819ecb3b1f40bc3d36a43156d
---

Das Ziel dieses Tests ist es, zu beurteilen, ob Sie verstehen, wie [HTML-Formulare und Schaltflächen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_forms) funktionieren.

> [!NOTE]
> Klicken Sie auf **"Play"** in den untenstehenden Codeblöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Clipboard-Symbol) und ihn in einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen. 
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Formulare und Schaltflächen 1

Diese Aufgabe beginnt sanft, indem Sie aufgefordert werden, zwei `<input>`-Elemente für die Benutzer-ID und das Passwort sowie eine Senden-Schaltfläche zu erstellen.

Um die Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** in dem untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Erstellen Sie geeignete Eingaben für Benutzer-ID und Passwort.
3. Sie sollten diese auch semantisch mit ihren Textbeschriftungen verknüpfen.
4. Erstellen Sie eine Senden-Schaltfläche innerhalb der verbleibenden Listeneinträge, mit dem Schaltflächentext "Log in".

> [!CALLOUT]
>
> Sie können den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/basic-controls/basic-controls1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie sich die Lösung unter der Live-Ausgabe ansehen.

<!-- Code shared across examples -->

```css hidden live-sample___forms-buttons-1 live-sample___forms-buttons-2 live-sample___forms-buttons-3 live-sample___forms-buttons-4 live-sample___forms-buttons-5 live-sample___forms-buttons-6
body {
  background-color: #fff;
  color: #333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0;
}

* {
  box-sizing: border-box;
}
```

<!-- Example-specific code -->

```html live-sample___forms-buttons-1
<form>
  <ul>
    <li>User ID</li>
    <li>Password</li>
    <li></li>
  </ul>
</form>
```

{{ EmbedLiveSample("forms-buttons-1", "100%", 150) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so ähnlich aussehen:

```html
<form>
  <ul>
    <li>
      <label for="uid">User ID</label>
      <input type="text" id="uid" name="uid" />
    </li>
    <li>
      <label for="pwd">Password</label>
      <input type="password" id="pwd" name="pwd" />
    </li>
    <li>
      <button>Log in</button>
    </li>
  </ul>
</form>
```

</details>

## Formulare und Schaltflächen 2

Bei der nächsten Aufgabe müssen Sie funktionierende Gruppen von Kontrollkästchen und Optionsfeldern aus den bereitgestellten Textbeschriftungen erstellen.

Um die Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** in dem untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Wandeln Sie die Inhalte des ersten `<fieldset>` in eine Gruppe von Optionsfeldern um — es sollte möglich sein, nur ein Pony-Charakter auf einmal auszuwählen.
3. Stellen Sie sicher, dass das erste Optionsfeld beim Laden der Seite ausgewählt ist.
4. Wandeln Sie die Inhalte des zweiten `<fieldset>` in eine Gruppe von Kontrollkästchen um.
5. Fügen Sie ein paar weitere Hotdog-Optionen Ihrer Wahl hinzu.

> [!CALLOUT]
>
> Sie können den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/basic-controls/basic-controls2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie sich die Lösung unter der Live-Ausgabe ansehen.

```html live-sample___forms-buttons-2
<form>
  <fieldset>
    <legend>Who is your favorite pony?</legend>
    <ul>
      <li>
        <label for="pinkie">Pinkie Pie</label>
      </li>
      <li>
        <label for="rainbow">Rainbow Dash</label>
      </li>
      <li>
        <label for="twilight">Twilight Sparkle</label>
      </li>
    </ul>
  </fieldset>
  <fieldset>
    <legend>Hotdog preferences</legend>
    <ul>
      <li>
        <label for="vegan">Vegan</label>
      </li>
      <li>
        <label for="onions">Onions</label>
      </li>
    </ul>
  </fieldset>
  <button>Submit</button>
</form>
```

{{ EmbedLiveSample("forms-buttons-2", "100%", 350) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so ähnlich aussehen:

```html
<form>
  <fieldset>
    <legend>Who is your favorite pony?</legend>
    <ul>
      <li>
        <label for="pinkie">Pinkie Pie</label>
        <input type="radio" id="pinkie" name="pony" value="pinkie" checked />
      </li>
      <li>
        <label for="rainbow">Rainbow Dash</label>
        <input type="radio" id="rainbow" name="pony" value="rainbow" />
      </li>
      <li>
        <label for="twilight">Twilight Sparkle</label>
        <input type="radio" id="twilight" name="pony" value="twilight" />
      </li>
    </ul>
  </fieldset>
  <fieldset>
    <legend>Hotdog preferences</legend>
    <ul>
      <li>
        <label for="vegan">Vegan</label>
        <input type="checkbox" id="vegan" name="hotdog" value="vegan" />
      </li>
      <li>
        <label for="onions">Onions</label>
        <input type="checkbox" id="onions" name="hotdog" value="onions" />
      </li>
      <li>
        <label for="mustard">Mustard</label>
        <input type="checkbox" id="mustard" name="hotdog" value="mustard" />
      </li>

      <li>
        <label for="ketchup">Ketchup</label>
        <input type="checkbox" id="ketchup" name="hotdog" value="ketchup" />
      </li>
    </ul>
  </fieldset>
  <button>Submit</button>
</form>
```

</details>

## Formulare und Schaltflächen 3

In dieser Aufgabe werden Sie einige spezifischere Eingabetypen erkunden.

Um die Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** in dem untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Erstellen Sie geeignete Eingaben, damit ein Benutzer seine Daten aktualisieren kann für:
   1. E-Mail
   2. Website
   3. Telefonnummer
   4. Lieblingsfarbe

> [!CALLOUT]
>
> Sie können den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/html5-controls/html5-controls1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie sich die Lösung unter der Live-Ausgabe ansehen.

```html live-sample___forms-buttons-3
<form>
  <h2>Edit your preferences</h2>
  <ul>
    <li>
      <label for="email">Email</label>
    </li>
    <li>
      <label for="website">Website</label>
    </li>
    <li>
      <label for="phone">Phone number</label>
    </li>
    <li>
      <label for="fave-color">Favorite color</label>
    </li>
    <li>
      <button>Update preferences</button>
    </li>
  </ul>
</form>
```

{{ EmbedLiveSample("forms-buttons-3", "100%", 250) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so ähnlich aussehen:

```html
<form>
  <h2>Edit your preferences</h2>
  <ul>
    <li>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" />
    </li>
    <li>
      <label for="website">Website</label>
      <input type="url" id="website" name="website" />
    </li>
    <li>
      <label for="phone">Phone number</label>
      <input type="tel" id="phone" name="phone" />
    </li>
    <li>
      <label for="fave-color">Favorite color</label>
      <input type="color" id="fave-color" name="fave-color" />
    </li>
    <li>
      <button>Update preferences</button>
    </li>
  </ul>
</form>
```

</details>

## Formulare und Schaltflächen 4

Jetzt ist es an der Zeit, ein Dropdown-Auswahlmenü zu implementieren, das es einem Benutzer ermöglicht, sein Lieblingsessen aus den bereitgestellten Optionen auszuwählen.

Um die Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** in dem untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Erstellen Sie eine grundlegende Auswahlbox-Struktur.
3. Verknüpfen Sie es semantisch mit dem bereitgestellten "food"-Label.
4. Teilen Sie die Auswahlmöglichkeiten innerhalb der Liste in 2 Untergruppen auf — "Hauptgerichte" und "Snacks".

> [!CALLOUT]
>
> Sie können den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/other-controls/other-controls2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie sich die Lösung unter der Live-Ausgabe ansehen.

```html live-sample___forms-buttons-4
<form>
  <ul>
    <li>
      <label for="food">Pick your favorite food:</label>

      Salad Curry Pizza Fajitas Biscuits Crisps Fruit Breadsticks
    </li>
    <li>
      <button>Submit choice</button>
    </li>
  </ul>
</form>
```

{{ EmbedLiveSample("forms-buttons-4", "100%", 250) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so ähnlich aussehen:

```html
<form>
  <ul>
    <li>
      <label for="food">Pick your favorite food:</label>
      <select name="food" id="food">
        <optgroup label="mains">
          <option>Salad</option>
          <option>Curry</option>
          <option>Pizza</option>
          <option>Fajitas</option>
        </optgroup>
        <optgroup label="snacks">
          <option>Biscuits</option>
          <option>Crisps</option>
          <option>Fruit</option>
          <option>Breadsticks</option>
        </optgroup>
      </select>
    </li>
    <li>
      <button>Submit choice</button>
    </li>
  </ul>
</form>
```

</details>

## Formulare und Schaltflächen 5

Bei dieser Aufgabe möchten wir, dass Sie die bereitgestellten Formularfunktionen strukturieren.

Um die Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** in dem untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Trennen Sie die ersten zwei und die zweiten zwei Formularfelder in zwei unterschiedliche Container, jede mit einer beschreibenden Legende (verwenden Sie "Persönliche Informationen" für die ersten zwei und "Kommentarinformationen" für die zweiten zwei).
3. Markieren Sie jede Textbeschriftung mit einem geeigneten Element, sodass es semantisch mit ihrem jeweiligen Formularfeld verbunden ist.
4. Fügen Sie eine geeignete Gruppe von strukturellen Elementen um die Label/Feld-Paare hinzu, um sie voneinander zu trennen.

> [!CALLOUT]
>
> Sie können den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-structure/form-structure1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie sich die Lösung unter der Live-Ausgabe ansehen.

```html live-sample___forms-buttons-5
<form>
  Name:
  <input type="text" id="name" name="name" />

  Age:
  <input type="number" id="age" name="age" />

  Comment:
  <input type="text" id="comment" name="comment" />

  Email:
  <input type="email" id="email" name="email" />
</form>
```

{{ EmbedLiveSample("forms-buttons-5", "100%", 250) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so ähnlich aussehen:

```html
<form>
  <fieldset>
    <legend>Personal details</legend>
    <ul>
      <li>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" />
      </li>
      <li>
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" />
      </li>
    </ul>
  </fieldset>
  <fieldset>
    <legend>Comment information</legend>
    <ul>
      <li>
        <label for="comment">Comment:</label>
        <input type="text" id="comment" name="comment" />
      </li>
      <li>
        <label for="email">Email (include if you want a reply):</label>
        <input type="email" id="email" name="email" />
      </li>
    </ul>
  </fieldset>
</form>
```

</details>

## Formulare und Schaltflächen 6

Bei dieser Aufgabe stellen wir Ihnen ein einfaches Support-Anfrageformular zur Verfügung, und wir möchten, dass Sie einige Validierungsfunktionen hinzufügen. Diese Aufgabe erfordert Kenntnisse, die wir im Artikel "Formulare und Schaltflächen in HTML" nicht lehren, sodass Sie möglicherweise anderswo recherchieren müssen.

Um die Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** in dem untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Machen Sie alle Eingabefelder obligatorisch, bevor das Formular abgeschickt werden kann.
3. Ändern Sie den Typ der Felder "E-Mail-Adresse" und "Telefonnummer", um den Browser dazu zu bringen, spezifischere Validierungen anzuwenden, die zu den angeforderten Daten passen.
4. Geben Sie dem Feld "Benutzername" eine erforderliche Länge zwischen 5 und 20 Zeichen, dem Feld "Telefonnummer" eine maximale Länge von 15 Zeichen und dem Feld "Kommentar" eine maximale Länge von 200 Zeichen.

Versuchen Sie, Ihr Formular zu übermitteln — es sollte sich weigern, es zu senden, bis die oben genannten Einschränkungen eingehalten werden, und geeignete Fehlermeldungen anzeigen.

> [!CALLOUT]
>
> Sie können den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie sich die Lösung unter der Live-Ausgabe ansehen.

```html live-sample___forms-buttons-6
<form>
  <h2>Enter your support query</h2>
  <ul>
    <li>
      <label for="uname">User name:</label>
      <input type="text" name="uname" id="uname" />
    </li>
    <li>
      <label for="email">Email address:</label>
      <input type="text" name="email" id="email" />
    </li>
    <li>
      <label for="phone">Phone number:</label>
      <input type="text" name="phone" id="phone" />
    </li>
    <li>
      <label for="comment">Comment:</label>
      <textarea name="comment" id="comment"> </textarea>
    </li>
    <li>
      <button>Submit comment</button>
    </li>
  </ul>
</form>
```

{{ EmbedLiveSample("forms-buttons-6", "100%", 300) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so ähnlich aussehen:

```html
<form>
  <h2>Enter your support query</h2>
  <ul>
    <li>
      <label for="uname">User name:</label>
      <input
        type="text"
        name="uname"
        id="uname"
        required
        minlength="5"
        maxlength="20" />
    </li>
    <li>
      <label for="email">Email address:</label>
      <input type="email" name="email" id="email" required />
    </li>
    <li>
      <label for="phone">Phone number:</label>
      <input type="tel" name="phone" id="phone" required maxlength="15" />
    </li>
    <li>
      <label for="comment">Comment:</label>
      <textarea name="comment" id="comment" required maxlength="200"></textarea>
    </li>
    <li>
      <button>Submit comment</button>
    </li>
  </ul>
</form>
```

</details>
