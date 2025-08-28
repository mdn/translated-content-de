---
title: "HTML-Attribut: form"
short-title: form
slug: Web/HTML/Reference/Attributes/form
l10n:
  sourceCommit: f29e825161ee6776a395cd846f8570686f784341
---

Das `form` HTML-Attribut verknüpft ein formularassoziiertes Element mit einem {{htmlelement("form")}}-Element innerhalb desselben Dokuments. Dieses Attribut gilt für die Elemente {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("object")}}, {{htmlelement("output")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}.

## Werte

Die `id` des `<form>`-Elements, mit dem das Element verknüpft werden soll.

## Hinweise zur Nutzung

Standardmäßig sind Formularsteuerelemente mit ihrem nächstgelegenen Vorfahren-{{htmlelement("form")}}-Element verknüpft, während Formularsteuerelemente, die nicht in einem `<form>` verschachtelt sind, mit keinem Formular verknüpft sind. Das `form`-Attribut ermöglicht das Überschreiben dieser Standardverhalten.

Das `form`-Attribut der Elemente {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("object")}}, {{htmlelement("output")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}} erlaubt es Ihnen, einen expliziten Formular-Eigentümer festzulegen. Damit können Sie Formularsteuerelemente, die sich irgendwo im Dokument befinden, mit einem beliebigen `<form>`-Element desselben Dokuments verbinden.

Wenn ein Formular abgeschickt wird, werden die Namen und Werte der mit dem `<form>`-Element verknüpften Steuerelemente eingereicht, egal ob sie physisch innerhalb dieses `<form>` verschachtelt sind oder in einem anderen `<form>`.

Das `form`-Attribut eines Steuerelements nimmt als Wert die `id` des `<form>`-Elements, mit dem das Steuerelement verknüpft werden soll. Alle anderen Werte, die für das `form`-Attribut festgelegt sind, werden ignoriert.

Obwohl es nicht notwendig ist, den Attributwert auf die `id` des nächstgelegenen Vorfahrens-`<form>` zu setzen, stellt eine explizite Definition der Zuordnung zwischen einem Formularsteuerelement und seinem nächstgelegenen Vorfahren-Formular sicher, dass das Formularsteuerelement nicht von seinem Formular getrennt wird, wenn Skripte oder fehlerhaftes HTML dazu führen, dass dieses spezielle `<form>` nicht der nächste Formularvorfahre des Steuerelements ist.

### Zuordnung zu einem Nicht-Vorfahren-Formular

Das `form`-Attribut kann verwendet werden, um ein Formularsteuerelement, das in einem `<form>` verschachtelt ist, mit einem anderen `<form>` zu verknüpfen.

In diesem Codebeispiel ist das `<input>` für den Benutzernamen im `internalForm` verschachtelt, aber das `form`-Attribut löst die Verknüpfung mit seinem Vorfahrenformular, in dem es verschachtelt ist, und verknüpft es stattdessen mit dem `externalForm`:

```html
<form id="externalForm"></form>
<form id="internalForm">
  <label for="username">Username:</label>
  <input form="externalForm" type="text" name="username" id="username" />
</form>
```

In diesem Fall wird der Benutzername eingereicht, wenn das `externalForm` eingereicht wird, während das `internalForm` keine zugeordneten Formularsteuerelemente hat.

### Nicht-Vererbung des `form`-Attributs

Das `form`-Attribut verknüpft nur das Element, auf dem es gesetzt ist. Das Attributverhalten wird nicht vererbt. Zum Beispiel, wenn das `form`-Attribut auf einem `<fieldset>`-Element gesetzt ist, verknüpft es nur das `<fieldset>`; es verknüpft **nicht** automatisch die Formularsteuerelemente innerhalb dieses `<fieldset>`.

In diesem Beispiel sind das `<fieldset>` und das `username`-`<input>` mit dem `exampleForm` verknüpft und in die [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) der [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft aufgenommen, aber das `password` nicht. Nur der `username` wird eingeschlossen, wenn das `exampleForm` eingereicht wird:

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

Jedes verschachtelte Element benötigt sein eigenes `form`-Attribut oder muss innerhalb des Formulars verschachtelt sein. Sie können prüfen, welche Elemente mit einem Formular verknüpft sind, indem Sie JavaScript verwenden, um [HTMLFormElement.elements](/de/docs/Web/API/HTMLFormElement/elements) zu nutzen.

### Formularübermittlung

Das Hinzufügen des `form`-Attributs bedeutet nicht, dass das Element mit dem Formular eingereicht wird. Nur einreichbare Elemente, einschließlich `<button>`, `<input>`, `<select>` und `<textarea>`, haben ihre Namen und Werte eingereicht, wenn das zugehörige `<form>` eingereicht wird.

In diesem Fall wird, obwohl das `<output>` implizit und dann explizit mit dem `calcForm` verknüpft ist, das `result` nicht zusammen mit `a` und `b` eingereicht, wenn das `calcForm` eingereicht wird. Es ist jedoch Teil der `HTMLFormControlsCollection` des Formulars.

```html
<form id="calcForm">
  <label>First number: <input id="a" value="2" type="number" /></label>
  <label>Second number: <input id="b" value="3" type="number" /></label>
  <label>Sum: <output name="result" for="a b" form="calcForm">5</output></label>
</form>
```

## Beispiele

### Einfaches Beispiel

Dieses Beispiel zeigt, wie formularassoziierte Elemente mit einem `<form>`-Element unter Verwendung des `form`-Attributs verknüpft werden können, auch wenn sie nicht explizit darin verschachtelt sind. Alle in diesem Beispiel gezeigten formularassoziierten Elemente sind entweder implizit (durch direkte Verschachtelung im Formular) oder explizit über das `form`-Attribut mit dem `loginForm` verknüpft. Wenn das Anmeldeformular eingereicht wird, werden die Namen und Werte jedes einreichbaren Elements eingeschlossen.

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

### Element, das mit einem anderen Formular verknüpft ist

In diesem Beispiel haben wir zwei `<form>`-Elemente: `parentForm` und `targetForm`. Das `<button>` im `parentForm` hat sein `form`-Attribut auf `targetForm` gesetzt, entkoppelt es von seinem nächstgelegenen Vorfahren `parentForm` und verknüpft es stattdessen mit dem `targetForm`. Wenn die Schaltfläche zum Senden aktiviert wird, übermittelt sie das `targetForm`, nicht ihren `parentForm`-Vorfahren.

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

- [`Überschreiben standardmäßiger Formularverhalten`](/de/docs/Web/HTML/Reference/Elements/input/image#overriding_default_form_behaviors)
