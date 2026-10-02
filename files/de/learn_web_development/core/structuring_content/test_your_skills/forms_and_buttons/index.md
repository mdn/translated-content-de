---
title: "Testen Sie Ihre Fähigkeiten: Formulare und Schaltflächen"
short-title: "Test: Formulare und Schaltflächen"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons
l10n:
  sourceCommit: bfead5c281d92a213f0191746fd98a6bdc4dc457
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content/Forms_challenge", "Learn_web_development/Core/Structuring_content")}}

Mit diesem Fähigkeitstest können Sie überprüfen, ob Sie verstanden haben, wie [HTML-Formulare und Schaltflächen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_forms) funktionieren.

> [!NOTE]
> Wenn Sie Hilfe benötigen, lesen Sie unseren Leitfaden zur Nutzung von [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Formulare und Schaltflächen 1

Diese Aufgabe beginnt mit einem einfachen Einstieg: Erstellen Sie zwei `<input>`-Elemente für die Benutzer-ID und das Passwort sowie eine Schaltfläche zum Absenden.

So lösen Sie die Aufgabe:

1. Erstellen Sie passende Eingabefelder für die Benutzer-ID und das Passwort.
2. Verknüpfen Sie die Eingabefelder auch semantisch mit ihren Beschriftungen.
3. Erstellen Sie im verbleibenden Listenelement eine Schaltfläche zum Absenden mit dem Text „Log in“.

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

Der Ausgangspunkt der Aufgabe sieht so aus:

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

```js hidden live-sample___forms-buttons-1-finished live-sample___forms-buttons-6 live-sample___forms-buttons-6-finished
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
```

Das aktualisierte Formular sollte so aussehen:

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

In der nächsten Aufgabe erstellen Sie aus den vorgegebenen Beschriftungen funktionsfähige Gruppen von Kontrollkästchen und Optionsfeldern.

So lösen Sie die Aufgabe:

1. Wandeln Sie den Inhalt des ersten `<fieldset>` in eine Gruppe von Optionsfeldern um – es sollte jeweils nur eine Ponyfigur ausgewählt werden können.
2. Sorgen Sie dafür, dass beim Laden der Seite das erste Optionsfeld ausgewählt ist.
3. Wandeln Sie den Inhalt des zweiten `<fieldset>` in eine Gruppe von Kontrollkästchen um.
4. Fügen Sie selbst noch ein paar weitere Hotdog-Optionen hinzu.

Der Ausgangspunkt der Aufgabe sieht so aus:

{{ EmbedLiveSample("forms-buttons-2", "100%", 350) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___forms-buttons-2
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
```

Die aktualisierten Formularelemente sollten so aussehen:

{{ EmbedLiveSample("forms-buttons-2-finished", "100%", 360) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

```html live-sample___forms-buttons-2-finished
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
      <input type="checkbox" id="vegan" name="hotdog_vegan" />
    </li>
    <li>
      <label for="onions">Onions</label>
      <input type="checkbox" id="onions" name="hotdog_onions" />
    </li>
    <li>
      <label for="mustard">Mustard</label>
      <input type="checkbox" id="mustard" name="hotdog_mustard" />
    </li>

    <li>
      <label for="ketchup">Ketchup</label>
      <input type="checkbox" id="ketchup" name="hotdog_ketchup" />
    </li>
  </ul>
</fieldset>
```

</details>

## Formulare und Schaltflächen 3

In dieser Aufgabe beschäftigen Sie sich mit spezielleren Eingabetypen. Erstellen Sie passende Eingabefelder, mit denen Benutzer ihre folgenden Angaben aktualisieren können:

1. E-Mail-Adresse
2. Website
3. Telefonnummer
4. Lieblingsfarbe

Der Ausgangspunkt der Aufgabe sieht so aus:

{{ EmbedLiveSample("forms-buttons-3", "100%", 250) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___forms-buttons-3
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
</ul>
```

Die aktualisierten Formularelemente sollten so aussehen:

{{ EmbedLiveSample("forms-buttons-3-finished", "100%", 250) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

```html live-sample___forms-buttons-3-finished
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
</ul>
```

</details>

## Formulare und Schaltflächen 4

Jetzt implementieren Sie ein Dropdown-Auswahlmenü, über das Benutzer ihr Lieblingsessen aus den vorgegebenen Optionen auswählen können.

So lösen Sie die Aufgabe:

1. Erstellen Sie die Grundstruktur eines Auswahlmenüs.
2. Verknüpfen Sie es semantisch mit der vorgegebenen Beschriftung „food“.
3. Teilen Sie die Optionen innerhalb der Liste in zwei Untergruppen auf: „mains“ und „snacks“.

Der Ausgangspunkt der Aufgabe sieht so aus:

{{ EmbedLiveSample("forms-buttons-4", "100%", 120) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___forms-buttons-4
<ul>
  <li>
    <label for="food">Pick your favorite food:</label>

    Salad Curry Pizza Fajitas Biscuits Crisps Fruit Breadsticks
  </li>
</ul>
```

Die aktualisierten Formularelemente sollten so aussehen:

{{ EmbedLiveSample("forms-buttons-4-finished", "100%", 120) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

```html live-sample___forms-buttons-4-finished
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
</ul>
```

</details>

## Formulare und Schaltflächen 5

In dieser Aufgabe strukturieren Sie die vorgegebenen Formularelemente.

So lösen Sie die Aufgabe:

1. Fassen Sie die ersten beiden und die letzten beiden Formularfelder jeweils in einem eigenen Container zusammen. Versehen Sie jeden Container mit einer beschreibenden Legende: „Personal details“ für die ersten beiden und „Comment information“ für die letzten beiden.
2. Zeichnen Sie jede Beschriftung mit einem geeigneten Element aus, sodass sie semantisch mit dem jeweiligen Formularfeld verknüpft ist.
3. Ergänzen Sie geeignete Strukturelemente um die Paare aus Beschriftung und Formularfeld, um sie voneinander zu trennen.

Der Ausgangspunkt der Aufgabe sieht so aus:

{{ EmbedLiveSample("forms-buttons-5", "100%", 120) }}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___forms-buttons-5
Name:
<input type="text" id="name" name="name" />

Age:
<input type="number" id="age" name="age" />

Comment:
<input type="text" id="comment" name="comment" />

Email:
<input type="email" id="email" name="email" />
```

Die aktualisierten Formularelemente sollten so aussehen:

{{ EmbedLiveSample("forms-buttons-5-finished", "100%", 300) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

```html live-sample___forms-buttons-5-finished
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
```

</details>

## Formulare und Schaltflächen 6

In dieser Aufgabe erhalten Sie ein einfaches Formular für Supportanfragen und sollen es um Validierungsfunktionen ergänzen. Dafür benötigen Sie Kenntnisse, die wir im Artikel „Formulare und Schaltflächen in HTML“ nicht vermitteln. Möglicherweise müssen Sie daher an anderer Stelle recherchieren.

So lösen Sie die Aufgabe:

1. Sorgen Sie dafür, dass alle Eingabefelder ausgefüllt werden müssen, bevor das Formular abgesendet werden kann.
2. Ändern Sie den Typ der Felder „Email address“ und „Phone number“, damit der Browser eine spezifischere, zu den abgefragten Daten passende Validierung durchführt.
3. Legen Sie für das Feld „User name“ eine erforderliche Länge von 5 bis 20 Zeichen fest, für das Feld „Phone number“ eine maximale Länge von 15 Zeichen und für das Feld „Comment“ eine maximale Länge von 200 Zeichen.

Versuchen Sie, das Formular abzusenden: Das Absenden sollte verhindert werden, bis die oben genannten Bedingungen erfüllt sind. Außerdem sollten passende Fehlermeldungen angezeigt werden.

Der Ausgangspunkt der Aufgabe sieht so aus:

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

Für diese Aufgabe haben wir keine fertige Ansicht bereitgestellt, da sie genauso aussieht wie der Ausgangspunkt.

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
