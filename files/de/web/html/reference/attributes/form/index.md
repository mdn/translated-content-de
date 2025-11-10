---
title: "HTML-Attribut: form"
short-title: form
slug: Web/HTML/Reference/Attributes/form
l10n:
  sourceCommit: 6afda999d054c2ba12d13d129b13eb35952b4fbe
---

Das HTML-Attribut `form` verknüpft ein formularassoziiertes Element mit einem {{htmlelement("form")}}-Element innerhalb desselben Dokuments. Dieses Attribut gilt für die Elemente {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("object")}}, {{htmlelement("output")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}.

## Werte

Die `id` des `<form>`-Elements, mit dem das Element verknüpft werden soll.

## Nutzungshinweise

Standardmäßig sind Formularelemente mit ihrem nächsten Vorfahren-{{htmlelement("form")}}-Element verknüpft, während Formularelemente, die nicht innerhalb eines `<form>` verschachtelt sind, mit keinem Formular verknüpft sind. Das Attribut `form` ermöglicht das Überschreiben dieser Standardverhalten.

Das `form`-Attribut der Elemente {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("object")}}, {{htmlelement("output")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}} erlaubt es Ihnen, einen expliziten Formularinhaber anzugeben, was Ihnen ermöglicht, Formularelemente, die sich irgendwo in einem Dokument befinden, mit einem beliebigen `<form>`-Element im selben Dokument zu verknüpfen.

Wenn ein Formular gesendet wird, werden die Namen und Werte der mit dem `<form>`-Element verknüpften Steuerelemente gesendet, unabhängig davon, ob sie physisch innerhalb dieses `<form>` verschachtelt sind oder nicht, und sogar, wenn sie in einem anderen `<form>` verschachtelt sind.

Das `form`-Attribut eines Steuerelements nimmt als Wert die `id` des `<form>`-Elements, mit dem Sie das Steuerelement verknüpfen möchten, an. Alle anderen für das `form`-Attribut festgelegten Werte werden ignoriert.

Auch wenn es nicht notwendig ist, den Attributwert auf die `id` des nächsten Vorfahren-`<form>` zu setzen, stellt die explizite Definition der Beziehung zwischen einem Formularsteuerelement und seinem nächsten Vorfahrenformular sicher, dass das Formularsteuerelement nicht mehr von seinem Formular getrennt wird, falls Skripte oder fehlerhaftes HTML dazu führen, dass dieses spezielle `<form>` nicht mehr der nächste Formularvorfahre des Steuerelements ist.

### Verknüpfung mit einem nicht-Vorfahren-Formular

Das `form`-Attribut kann verwendet werden, um ein in einem `<form>` verschachteltes Formularsteuerelement mit einem anderen `<form>` zu verknüpfen.

In diesem Codebeispiel ist das `<input>` für den Benutzernamen innerhalb des `internalForm` verschachtelt, aber das `form`-Attribut trennt das Steuerelement von seinem Vorfahrenformular, in dem es verschachtelt ist, und verknüpft es stattdessen mit dem `externalForm`:

```html
<form id="externalForm"></form>
<form id="internalForm">
  <label for="username">Username:</label>
  <input form="externalForm" type="text" name="username" id="username" />
</form>
```

In diesem Fall wird der Benutzername gesendet, wenn das `externalForm` gesendet wird, während das `internalForm` keine verbundenen Formularsteuerelemente hat.

### Keine Vererbung des `form`-Attributs

Das `form`-Attribut verknüpft nur das Element, auf dem es festgelegt wird. Das Attributverhalten wird nicht vererbt. Beispielsweise, wenn das `form`-Attribut auf einem `<fieldset>`-Element gesetzt ist, verknüpft es nur das `<fieldset>`; es verknüpft **nicht** automatisch die innerhalb dieses `<fieldset>` verschachtelten Formularsteuerelemente.

In diesem Beispiel sind das `<fieldset>` und das `username` `<input>` mit dem `exampleForm` verknüpft und in der [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) der [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft enthalten, aber das Passwort nicht. Nur der `username` wird einbezogen, wenn das `exampleForm` gesendet wird:

```html
<form id="exampleForm"></form>

<fieldset form="exampleForm">
  <legend>Login information</legend>
  <label
    >Username: <input form="exampleForm" type="text" name="username"
  /></label>
  <label>Password: <input type="password" name="password" /></label>
</fieldset>
```

Jedes verschachtelte Element benötigt sein eigenes `form`-Attribut oder muss innerhalb des Formulars verschachtelt sein. Sie können überprüfen, welche Elemente mit einem Formular verknüpft sind, indem Sie JavaScript verwenden, mit [HTMLFormElement.elements](/de/docs/Web/API/HTMLFormElement/elements).

### Formularübermittlung

Die Aufnahme des `form`-Attributs bedeutet nicht, dass das Element mit dem Formular gesendet wird. Nur absendbare Elemente, einschließlich `<button>`, `<input>`, `<select>` und `<textarea>`, haben ihre Namen und Werte gesendet, wenn ihr zugeordnetes `<form>` gesendet wird.

In diesem Fall, obwohl das `<output>` implizit dann explizit mit dem `calcForm` verbunden ist, wird das `result` nicht zusammen mit `a` und `b` gesendet, wenn `calcForm` gesendet wird. Es ist jedoch Teil der `HTMLFormControlsCollection` des Formulars.

```html
<form id="calcForm">
  <label>First number: <input id="a" value="2" type="number" /></label>
  <label>Second number: <input id="b" value="3" type="number" /></label>
  <label>Sum: <output name="result" for="a b" form="calcForm">5</output></label>
</form>
```

## Beispiele

### Einfaches Beispiel

Dieses Beispiel zeigt, wie formularassoziierte Elemente mit einem `<form>`-Element unter Verwendung des `form`-Attributs verknüpft werden können, selbst wenn sie nicht explizit darin verschachtelt sind. Alle im Beispiel gezeigten formularassoziierten Elemente sind entweder implizit (durch direkte Verschachtelung innerhalb des Formulars) oder explizit über das `form`-Attribut mit dem `loginForm` verbunden. Wenn das Login-Formular gesendet wird, werden die Namen und Werte jedes absendbaren Elements eingeschlossen.

```html
<form id="loginForm">
  <label>Username: <input type="text" name="username" /></label>
</form>

<label
  >Password: <input form="loginForm" type="password" name="password"
/></label>
<label>
  Choose an option:
  <select form="loginForm" name="options">
    <option value="A">A</option>
    <option value="B">B</option>
  </select>
</label>
<label
  >Description:
  <textarea form="loginForm" rows="4" name="description">
Hello, World!</textarea
  >
</label>
<button form="loginForm" type="submit" name="submitLogin" value="Login">
  Submit
</button>
```

### Element mit einem anderen Formular verknüpft

In diesem Beispiel haben wir zwei `<form>`-Elemente: `parentForm` und `targetForm`. Das `<button>` innerhalb des `parentForm` hat sein `form`-Attribut auf `targetForm` gesetzt, wodurch es von seinem nächsten Vorfahren `parentForm` getrennt wird, während es mit dem `targetForm` verknüpft wird. Wenn der Absenden-Knopf aktiviert wird, wird das `targetForm` gesendet, nicht sein `parentForm`-Vorfahre.

```html
<form id="targetForm">
  <input type="text" name="targetInput" />
</form>
<form id="parentForm">
  <button form="targetForm" type="submit" name="submitTarget" value="Target">
    Submit target form
  </button>
</form>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{compat}}

## Siehe auch

- [Überschreiben von Standard-Formularverhalten](/de/docs/Web/HTML/Reference/Elements/input/image#overriding_default_form_behaviors)
