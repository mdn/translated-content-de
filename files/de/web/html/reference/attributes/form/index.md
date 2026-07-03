---
title: "`form` HTML-Attribut"
short-title: form
slug: Web/HTML/Reference/Attributes/form
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

Das `form` HTML-Attribut ordnet ein formularassoziiertes Element einem {{htmlelement("form")}}-Element innerhalb desselben Dokuments zu. Dieses Attribut gilt für die Elemente {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("object")}}, {{htmlelement("output")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}.

## Werte

Die `id` des `<form>`-Elements, dem das Element zugeordnet werden soll.

## Nutzungshinweise

Standardmäßig sind Formularelemente mit ihrem nächstgelegenen Vorfahren {{htmlelement("form")}}-Element verbunden, während Formularelemente, die nicht innerhalb eines `<form>` verschachtelt sind, mit keinem Formular verbunden sind. Das `form`-Attribut ermöglicht das Überschreiben dieser Standardverhalten.

Das `form`-Attribut der Elemente {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("object")}}, {{htmlelement("output")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}} ermöglicht es Ihnen, einen expliziten Formularbesitzer festzulegen, wodurch Sie Formularelemente, die sich an beliebiger Stelle in einem Dokument befinden, jedem `<form>`-Element im selben Dokument zuordnen können.

Wenn ein Formular gesendet wird, werden die Namen und Werte der dem `<form>`-Element zugeordneten Steuerungen gesendet, unabhängig davon, ob sie physisch innerhalb dieses `<form>` verschachtelt sind oder ob sie in einem anderen `<form>` verschachtelt sind.

Das `form`-Attribut einer Steuerung nimmt als Wert die `id` des `<form>`-Elements an, mit dem Sie die Steuerung verknüpfen möchten. Alle anderen für das `form`-Attribut festgelegten Werte werden ignoriert.

Es ist zwar nicht notwendig, den Attributwert auf die `id` des nächstgelegenen Vorfahren `<form>` zu setzen, aber die explizite Definition der Zuordnung zwischen einer Formularsteuerung und ihrem nächstgelegenen Vorfahren-Formular stellt sicher, dass die Formularsteuerung nicht von ihrem Formular getrennt wird, wenn Skripte oder fehlerhaftes HTML dazu führen, dass dieses spezielle `<form>` nicht der nächstgelegene Formularvorfahre der Steuerung ist.

### Zuordnung zu einem nicht-vorfahrenden Formular

Das `form`-Attribut kann verwendet werden, um eine in einem `<form>` verschachtelte Formularsteuerung mit einem anderen `<form>` zu verknüpfen.

In diesem Codebeispiel ist das Benutzername-`<input>` innerhalb des `internalForm` verschachtelt, aber das `form`-Attribut löst die Steuerung aus ihrem vorfahren-Formular, in dem sie verschachtelt ist, und verknüpft sie stattdessen mit dem `externalForm`:

```html
<form id="externalForm"></form>
<form id="internalForm">
  <label for="username">Username:</label>
  <input form="externalForm" type="text" name="username" id="username" />
</form>
```

In diesem Fall wird der Benutzername gesendet, wenn das `externalForm` gesendet wird, während das `internalForm` keine zugeordneten Formularelemente hat.

### Nicht-Vererbung des `form`-Attributs

Das `form`-Attribut verknüpft nur das Element, auf dem es gesetzt ist. Das Attributverhalten wird nicht vererbt. Beispielsweise, wenn das `form`-Attribut auf einem `<fieldset>`-Element gesetzt ist, verknüpft es nur das `<fieldset>`; es verknüpft **nicht** automatisch die innerhalb dieses `<fieldset>` verschachtelten Formularelemente.

In diesem Beispiel sind das `<fieldset>` und das Benutzername-`<input>` mit dem `exampleForm` verbunden und in der [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) der [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft enthalten, aber das Passwort ist es nicht. Nur der Benutzername wird enthalten sein, wenn das `exampleForm` gesendet wird:

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

Jedes verschachtelte Element benötigt sein eigenes `form`-Attribut oder muss innerhalb des Formulars verschachtelt sein. Sie können überprüfen, welche Elemente über JavaScript mit einem Formular verknüpft sind, indem Sie [HTMLFormElement.elements](/de/docs/Web/API/HTMLFormElement/elements) verwenden.

### Formularübermittlung

Das Einfügen des `form`-Attributs bedeutet nicht, dass das Element mit dem Formular übermittelt wird. Nur übermittelbare Elemente, einschließlich `<button>`, `<input>`, `<select>` und `<textarea>`, haben ihren Namen und ihre Werte übermittelt, wenn ihr zugehöriges `<form>` gesendet wird.

In diesem Fall, obwohl das `<output>` implizit und dann explizit mit dem `calcForm` verknüpft ist, wird das `result` nicht zusammen mit `a` und `b` gesendet, wenn `calcForm` gesendet wird. Es ist jedoch Teil der `HTMLFormControlsCollection` des Formulars.

```html
<form id="calcForm">
  <label>First number: <input id="a" value="2" type="number" /></label>
  <label>Second number: <input id="b" value="3" type="number" /></label>
  <label>Sum: <output name="result" for="a b" form="calcForm">5</output></label>
</form>
```

## Beispiele

### Grundlegendes Beispiel

Dieses Beispiel zeigt, wie formularassoziierte Elemente mit einem `<form>`-Element mittels des `form`-Attributes verknüpft werden können, selbst wenn sie nicht explizit darin verschachtelt sind. Alle in diesem Beispiel gezeigten formularassoziierten Elemente sind entweder implizit (indem sie direkt in das Formular verschachtelt sind) oder explizit über das `form`-Attribut mit dem `loginForm` verknüpft. Wenn das Anmeldeformular gesendet wird, werden die Namen und Werte jedes übermittelbaren Elements enthalten sein.

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
Hello, World!</textarea>
</label>
<button form="loginForm" type="submit" name="submitLogin" value="Login">
  Submit
</button>
```

### Element mit einem anderen Formular verknüpft

In diesem Beispiel haben wir zwei `<form>`-Elemente: `parentForm` und `targetForm`. Das `<button>` innerhalb des `parentForm` hat sein `form`-Attribut auf `targetForm` gesetzt, wodurch es von seinem nächstgelegenen Vorfahren `parentForm` getrennt wird, während es mit dem `targetForm` verbunden wird. Wenn die Schaltfläche zum Absenden aktiviert wird, sendet sie das `targetForm`, nicht ihren Vorfahren `parentForm`.

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

- [Überschreiben von Standardverhalten bei Formularen](/de/docs/Web/HTML/Reference/Elements/input/image#overriding_default_form_behaviors)
