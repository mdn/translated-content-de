---
title: "Testen Sie Ihre Fähigkeiten: Formulare und Schaltflächen"
short-title: "Test: Formulare und Schaltflächen"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons
l10n:
  sourceCommit: 1cf3cb0fb22bf89c780fefe74c3db7f1b9e8ca09
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content/Forms_challenge", "Learn_web_development/Core/Structuring_content")}}

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, einzuschätzen, ob Sie verstehen, wie [HTML-Formulare und Schaltflächen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_forms) funktionieren.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie bitte unseren [Leitfaden zur Nutzung von Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Formulare und Schaltflächen 1

Diese Aufgabe beginnt vorsichtig und fordert Sie auf, zwei `<input>`-Elemente für die Benutzer-ID und das Passwort zu erstellen, zusammen mit einer Abschicken-Schaltfläche.

Um die Aufgabe zu erfüllen:

1. Erstellen Sie geeignete Eingabefelder für Benutzer-ID und Passwort.
2. Sie sollten diese auch semantisch mit ihren Textetiketten verknüpfen.
3. Erstellen Sie eine Abschicken-Schaltfläche im verbleibenden Listenelement, mit dem Schaltflächentext "Log in".

<!-- Code shared across examples -->

```css hidden live-sample___forms-buttons-1 live-sample___forms-buttons-2 live-sample___forms-buttons-3 live-sample___forms-buttons-4 live-sample___forms-buttons-5 live-sample___forms-buttons-6 live-sample___forms-buttons-1-finished live-sample___forms-buttons-2-finished live-sample___forms-buttons-3-finished live-sample___forms-buttons-4-finished live-sample___forms-buttons-5-finished live-sample___forms-buttons-6-finished
body {
  background-color: white;
  color: #333333;
  font:
    1em / 1.4 "Helvetica Neue",
    "Helvetica",
    "Arial",
    sans-serif;
  padding: 1em;
  margin: 0;
}

* {
  box-sizing: border-box;
}
```

<!-- Example-specific code -->

Der Ausgangspunkt der Aufgabe sieht wie folgt aus:

{{ EmbedLiveSample("forms-buttons-1", "100%", 150) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___forms-buttons-1
<form>
  <ul>
    <li>User ID</li>
    <li>Password</li>
    <li></li>
  </ul>
</form>
```

Das aktualisierte Formular sollte wie folgt aussehen:

{{ EmbedLiveSample("forms-buttons-1-finished", "100%", 150) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

```html live-sample___forms-buttons-1-finished
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

Die nächste Aufgabe erfordert, dass Sie funktionsfähige Sets von Kontrollkästchen und Optionsfeldern aus den bereitgestellten Textetiketten erstellen.

Um die Aufgabe zu erfüllen:

1. Wandeln Sie den Inhalt des ersten `<fieldset>` in eine Gruppe von Optionsfeldern um – Sie sollten nur einen Pony-Charakter gleichzeitig auswählen können.
2. Stellen Sie sicher, dass das erste Optionsfeld beim Laden der Seite ausgewählt ist.
3. Wandeln Sie den Inhalt des zweiten `<fieldset>` in eine Gruppe von Kontrollkästchen um.
4. Fügen Sie ein paar zusätzliche Hotdog-Optionen Ihrer Wahl hinzu.

Der Ausgangspunkt der Aufgabe sieht wie folgt aus:

{{ EmbedLiveSample("forms-buttons-2", "100%", 350) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Das aktualisierte Formular sollte wie folgt aussehen:

{{ EmbedLiveSample("forms-buttons-2-finished", "100%", 360) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

```html live-sample___forms-buttons-2-finished
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

In dieser Aufgabe erkunden Sie einige spezifische Eingabetypen. Wir möchten, dass Sie geeignete Eingabefelder für folgende Nutzerinformationen erstellen:

1. E-Mail
2. Website
3. Telefonnummer
4. Lieblingsfarbe

Der Ausgangspunkt der Aufgabe sieht wie folgt aus:

{{ EmbedLiveSample("forms-buttons-3", "100%", 250) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Das aktualisierte Formular sollte wie folgt aussehen:

{{ EmbedLiveSample("forms-buttons-3-finished", "100%", 250) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

```html live-sample___forms-buttons-3-finished
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

Um die Aufgabe zu erfüllen:

1. Erstellen Sie eine grundlegende Struktur für eine Auswahlliste.
2. Verknüpfen Sie diese semantisch mit dem bereitgestellten "Food"-Label.
3. Teilen Sie die Auswahlmöglichkeiten in der Liste in 2 Untergruppen auf — "Hauptgerichte" und "Snacks".

Der Ausgangspunkt der Aufgabe sieht wie folgt aus:

{{ EmbedLiveSample("forms-buttons-4", "100%", 120) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Das aktualisierte Formular sollte wie folgt aussehen:

{{ EmbedLiveSample("forms-buttons-4-finished", "100%", 120) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

```html live-sample___forms-buttons-4-finished
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

In dieser Aufgabe möchten wir, dass Sie die bereitgestellten Formularelemente strukturieren.

Um die Aufgabe zu erfüllen:

1. Trennen Sie die ersten beiden und die zweiten beiden Formularfelder in zwei getrennte Container, jeweils mit einer beschreibenden Legende (verwenden Sie "Persönliche Daten" für die ersten beiden und "Kommentarinformationen" für die zweiten beiden).
2. Markieren Sie jedes Textetikett mit einem geeigneten Element, damit es semantisch mit seinem jeweiligen Formularfeld verknüpft ist.
3. Fügen Sie eine geeignete Gruppe von Strukturelementen um die Label/Feld-Paare hinzu, um sie voneinander zu trennen.

Der Ausgangspunkt der Aufgabe sieht wie folgt aus:

{{ EmbedLiveSample("forms-buttons-5", "100%", 120) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Das aktualisierte Formular sollte wie folgt aussehen:

{{ EmbedLiveSample("forms-buttons-5-finished", "100%", 300) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

```html live-sample___forms-buttons-5-finished
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

In dieser Aufgabe stellen wir Ihnen ein einfaches Anfrageformular zur Verfügung und möchten, dass Sie einige Validierungsfunktionen hinzufügen. Diese Aufgabe erfordert Kenntnisse, die im Artikel "Formulare und Schaltflächen in HTML" nicht vermittelt werden, daher müssen Sie möglicherweise an anderer Stelle recherchieren.

Um die Aufgabe zu erfüllen:

1. Machen Sie alle Eingabefelder obligatorisch, damit das Formular erst abgeschickt werden kann, wenn alle ausgefüllt sind.
2. Ändern Sie den Typ der Felder "Email address" und "Phone number", sodass der Browser eine spezifische Validierung entsprechend der angefragten Daten durchführt.
3. Geben Sie dem Feld „User name“ eine erforderliche Länge von 5 bis 20 Zeichen, dem Feld „Phone number“ eine maximale Länge von 15 Zeichen und dem Feld „Comment“ eine maximale Länge von 200 Zeichen.

Versuchen Sie, Ihr Formular abzusenden — es sollte die Einreichung verweigern, bis die oben genannten Einschränkungen eingehalten werden, und geeignete Fehlermeldungen ausgeben.

Der Ausgangspunkt der Aufgabe sieht wie folgt aus:

{{ EmbedLiveSample("forms-buttons-6", "100%", 300) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Wir haben für diese Aufgabe keinen fertigen Inhalt bereitgestellt, da er genauso aussieht wie der Ausgangspunkt.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

```html live-sample___forms-buttons-6-finished
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
