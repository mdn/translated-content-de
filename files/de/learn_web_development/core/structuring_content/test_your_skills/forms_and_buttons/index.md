---
title: "Testen Sie Ihr Können: Formulare und Schaltflächen"
short-title: "Test: Formulare und Schaltflächen"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons
l10n:
  sourceCommit: dbf1f82bfdfeb12ab5e2a5fc65db5805fca91c29
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content/Forms_challenge", "Learn_web_development/Core/Structuring_content")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie verstehen, wie [HTML-Formulare und Schaltflächen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_forms) funktionieren.

> [!NOTE]
> Um Hilfe zu bekommen, lesen Sie unseren [Testen Sie Ihr Können](/de/docs/Learn_web_development#test_your_skills) Nutzungsleitfaden. Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Formulare und Schaltflächen 1

Diese Aufgabe beginnt sanft, indem Sie gebeten werden, zwei `<input>`-Elemente zu erstellen, für die ID und das Passwort eines Benutzers, zusammen mit einer Absenden-Schaltfläche.

Um die Aufgabe abzuschließen:

1. Erstellen Sie geeignete Eingaben für Benutzer-ID und Passwort.
2. Sie sollten diese auch semantisch mit ihren Textbeschriftungen verbinden.
3. Erstellen Sie eine Absenden-Schaltfläche innerhalb des verbleibenden Listenelements mit dem Schaltflächentext "Log in".

<!-- Code shared across examples -->

```css hidden live-sample___forms-buttons-1 live-sample___forms-buttons-2 live-sample___forms-buttons-3 live-sample___forms-buttons-4 live-sample___forms-buttons-5 live-sample___forms-buttons-6
body {
  background-color: white;
  color: #333333;
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

Ihr fertiges HTML sollte in etwa so aussehen:

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

Die nächste Aufgabe erfordert, dass Sie funktionierende Sets von Kontrollkästchen und Optionsfeldern aus den bereitgestellten Textbeschriftungen erstellen.

Um die Aufgabe abzuschließen:

1. Verwandeln Sie den Inhalt des ersten `<fieldset>` in eine Gruppe von Optionsfeldern – es sollte nur möglich sein, einen Pony-Charakter auszuwählen.
2. Das erste Optionsfeld sollte beim Laden der Seite ausgewählt sein.
3. Verwandeln Sie den Inhalt des zweiten `<fieldset>` in eine Gruppe von Kontrollkästchen.
4. Fügen Sie ein paar weitere Hotdog-Optionen Ihrer Wahl hinzu.

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

Ihr fertiges HTML sollte in etwa so aussehen:

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

In dieser Aufgabe erkunden Sie einige spezifischere Eingabetypen. Wir möchten, dass Sie geeignete Eingaben für einen Benutzer erstellen, um ihre Details zu aktualisieren für:

1. E-Mail
2. Website
3. Telefonnummer
4. Lieblingsfarbe

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

Ihr fertiges HTML sollte in etwa so aussehen:

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

Jetzt ist es Zeit, ein Dropdown-Auswahlmenü zu implementieren, bei dem ein Benutzer sein Lieblingsessen aus den gegebenen Optionen auswählen kann.

Um die Aufgabe abzuschließen:

1. Erstellen Sie eine einfache Struktur für das Auswahlfeld.
2. Verbinden Sie es semantisch mit der bereitgestellten "food"-Beschriftung.
3. Teilen Sie die Auswahlmöglichkeiten innerhalb der Liste in 2 Untergruppen auf – "Hauptgerichte" und "Snacks".

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

Ihr fertiges HTML sollte in etwa so aussehen:

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

In dieser Aufgabe möchten wir, dass Sie die bereitgestellten Formularfunktionen strukturieren.

Um die Aufgabe abzuschließen:

1. Trennen Sie die ersten beiden und die zweiten beiden Formularfelder in zwei unterschiedliche Container, jeweils mit einer beschreibenden Legende (verwenden Sie "Persönliche Details" für die ersten beiden und "Kommentarinformation" für die zweiten beiden).
2. Markieren Sie jede Textbeschriftung mit einem geeigneten Element, sodass sie semantisch mit ihrem jeweiligen Formularfeld verbunden ist.
3. Fügen Sie geeignete strukturelle Elemente um die Beschriftung/Feld-Paare hinzu, um sie voneinander zu trennen.

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

Ihr fertiges HTML sollte in etwa so aussehen:

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

In dieser Aufgabe stellen wir Ihnen ein einfaches Support-Anfrageformular zur Verfügung, und wir möchten, dass Sie einige Validierungsfunktionen hinzufügen. Diese Aufgabe erfordert einige Kenntnisse, die wir im Artikel "Formulare und Schaltflächen in HTML" nicht lehren, daher müssen Sie möglicherweise anderweitig recherchieren.

Um die Aufgabe abzuschließen:

1. Machen Sie alle Eingabefelder obligatorisch, bevor das Formular abgeschickt werden kann.
2. Ändern Sie den Typ der Felder "Email address" und "Phone number", damit der Browser spezifischere Validierung anwendet, die für die abgefragten Daten geeignet ist.
3. Geben Sie für das Feld "User name" eine erforderliche Länge zwischen 5 und 20 Zeichen an, für das Feld "Phone number" eine maximale Länge von 15 Zeichen und für das Feld "Comment" eine maximale Länge von 200 Zeichen.

Versuchen Sie, Ihr Formular zu senden – es sollte die Übermittlung verweigern, bis die oben genannten Einschränkungen erfüllt sind, und passende Fehlermeldungen geben.

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

Ihr fertiges HTML sollte in etwa so aussehen:

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

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content/Forms_challenge", "Learn_web_development/Core/Structuring_content")}}
