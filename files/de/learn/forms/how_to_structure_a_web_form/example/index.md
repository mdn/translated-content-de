---
title: Beispiel
slug: Learn/Forms/How_to_structure_a_web_form/Example
l10n:
  sourceCommit: 200866e39b81948187e35865fe0a82a4545d1a1e
---

{{LearnSidebar}}

Dies ist das Beispiel für ein einfaches Zahlungsformular für den Artikel [Wie man ein HTML-Formular strukturiert](/de/docs/Learn/Forms/How_to_structure_a_web_form).

## Ein Zahlungsformular

### HTML

```html-nolint
<form method="post">
  <h1>Payment form</h1>
  <p>
    Pflichtfelder sind gekennzeichnet durch
    <strong><span aria-label="required">*</span></strong>.
  </p>
  <section>
    <h2>Kontaktinformationen</h2>
    <fieldset>
      <legend>Titel</legend>
      <ul>
        <li>
          <label for="title_1">
            <input type="radio" id="title_1" name="title" value="A" />
            Ace
          </label>
        </li>
        <li>
          <label for="title_2">
            <input type="radio" id="title_2" name="title" value="K" />
            King
          </label>
        </li>
        <li>
          <label for="title_3">
            <input type="radio" id="title_3" name="title" value="Q" />
            Queen
          </label>
        </li>
      </ul>
    </fieldset>
    <p>
      <label for="name">
        <span>Name: </span>
        <strong><span aria-label="required">*</span></strong>
      </label>
      <input type="text" id="name" name="username" required />
    </p>
    <p>
      <label for="mail">
        <span>Email: </span>
        <strong><span aria-label="required">*</span></strong>
      </label>
      <input type="email" id="mail" name="usermail" required />
    </p>
    <p>
      <label for="pwd">
        <span>Passwort: </span>
        <strong><span aria-label="required">*</span></strong>
      </label>
      <input type="password" id="pwd" name="password" required />
    </p>
  </section>
  <section>
    <h2>Zahlungsinformationen</h2>
    <p>
      <label for="card">
        <span>Kartentyp:</span>
      </label>
      <select id="card" name="usercard">
        <option value="visa">Visa</option>
        <option value="mc">Mastercard</option>
        <option value="amex">American Express</option>
      </select>
    </p>
    <p>
      <label for="number">
        <span>Kartennummer:</span>
        <strong><span aria-label="required">*</span></strong>
      </label>
      <input type="tel" id="number" name="cardnumber" />
    </p>
    <p>
      <label for="expiration">
        <span>Ablaufdatum:</span>
        <strong><span aria-label="required">*</span></strong>
      </label>
      <input
        type="text"
        id="expiration"
        required="true"
        placeholder="MM/YY"
        pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$" />
    </p>
  </section>
  <section>
    <p><button type="submit">Zahlung bestätigen</button></p>
  </section>
</form>
```

### CSS

```css
h1 {
  margin-top: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

form {
  margin: 0 auto;
  width: 400px;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

div + div {
  margin-top: 1em;
}

label span {
  display: inline-block;
  text-align: right;
}

input,
textarea {
  font: 1em sans-serif;
  width: 250px;
  box-sizing: border-box;
  border: 1px solid #999;
}

input[type="checkbox"],
input[type="radio"] {
  width: auto;
  border: none;
}

input:focus,
textarea:focus {
  border-color: #000;
}

textarea {
  vertical-align: top;
  height: 5em;
  resize: vertical;
}

fieldset {
  width: 250px;
  box-sizing: border-box;
  border: 1px solid #999;
}

button {
  margin: 20px 0 0 0;
}

label {
  display: inline-block;
}

p label {
  width: 100%;
}
```

### Ergebnis

{{ EmbedLiveSample('A_payment_form', '100%', 620) }}
