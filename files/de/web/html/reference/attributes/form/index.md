---
title: "`form` HTML-Attribut"
short-title: form
slug: Web/HTML/Reference/Attributes/form
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das `form` HTML-Attribut verknüpft ein formularassoziiertes Element mit einem {{htmlelement("form")}}-Element innerhalb desselben Dokuments. Dieses Attribut gilt für die Elemente {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("object")}}, {{htmlelement("output")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}.

## Werte

Die `id` des `<form>`-Elements, mit dem das Element verknüpft werden soll.

## Verwendungshinweise

Standardmäßig sind Formularkontrollen mit ihrem nächstgelegenen Vorfahren-{{htmlelement("form")}}-Element verknüpft, während Formularkontrollen, die nicht innerhalb eines `<form>` verschachtelt sind, mit keinem Formular verbunden sind. Das `form`-Attribut ermöglicht es, diese Standardverhalten zu überschreiben.

Das `form`-Attribut der Elemente {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("object")}}, {{htmlelement("output")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}} erlaubt es Ihnen, einen expliziten Formularbesitzer anzugeben, sodass Sie Formularkontrollen, die sich irgendwo im Dokument befinden, mit einem beliebigen im selben Dokument befindlichen `<form>`-Element verknüpfen können.

Wenn ein Formular übermittelt wird, werden die Namen und Werte der mit dem `<form>`-Element verbundenen Kontrollen übermittelt, unabhängig davon, ob sie physisch innerhalb dieses `<form>` verschachtelt sind oder nicht und auch wenn sie in einem anderen `<form>` verschachtelt sind.

Das `form`-Attribut einer Kontrolle nimmt den `id`-Wert des `<form>`-Elements an, mit dem Sie die Kontrolle verknüpfen möchten. Alle anderen für das `form`-Attribut festgelegten Werte werden ignoriert.

Auch wenn es nicht notwendig ist, den Attributwert auf die `id` des nächstgelegenen Vorfahren-`<form>` zu setzen, gewährleistet die explizite Definition der Verknüpfung zwischen einer Formularkontrolle und ihrem nächstgelegenen Vorfahren, dass die Formularkontrolle nicht von ihrem Formular getrennt wird, falls Skripte oder fehlerhaftes HTML dazu führen, dass dieses spezielle `<form>` nicht mehr der nächste Formularvorfahre der Kontrolle ist.

### Verknüpfung mit einem Formular, das kein Vorfahre ist

Das `form`-Attribut kann verwendet werden, um eine in einem `<form>` verschachtelte Formularkontrolle mit einem anderen `<form>` zu verknüpfen.

In diesem Code-Beispiel ist das Benutzername-`<input>` innerhalb des `internalForm` verschachtelt, aber das `form`-Attribut trennt die Kontrolle von ihrem Vorfahrenformular, in dem sie verschachtelt ist, und verknüpft sie stattdessen mit dem `externalForm`:

```html
<form id="externalForm"></form>
<form id="internalForm">
  <label for="username">Username:</label>
  <input form="externalForm" type="text" name="username" id="username" />
</form>
```

In diesem Fall wird der Benutzername übermittelt, wenn das `externalForm` übermittelt wird, während das `internalForm` keine zugeordneten Formularelemente hat.

### Nicht-Vererbung des `form`-Attributs

Das `form`-Attribut verknüpft nur das Element, auf dem es gesetzt ist. Das Attributverhalten wird nicht vererbt. Wenn z.B. das `form`-Attribut auf einem `<fieldset>`-Element gesetzt ist, verknüpft es nur das `<fieldset>`; es verknüpft nicht automatisch die darin verschachtelten Formularkontrollen.

In diesem Beispiel sind das `<fieldset>` und das Benutzername-`<input>` mit dem `exampleForm` verknüpft und in der [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) der [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft enthalten, aber das Passwort nicht. Nur der Benutzername wird geliefert, wenn das `exampleForm` übermittelt wird:

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

Jedes verschachtelte Element benötigt sein eigenes `form`-Attribut oder muss innerhalb des Formulars verschachtelt sein. Sie können über JavaScript prüfen, welche Elemente mit einem Formular verknüpft sind, indem Sie [HTMLFormElement.elements](/de/docs/Web/API/HTMLFormElement/elements) verwenden.

### Formularübermittlung

Das Hinzufügen des `form`-Attributs bedeutet nicht, dass das Element mit dem Formular übermittelt wird. Nur übermittlungsfähige Elemente, einschließlich `<button>`, `<input>`, `<select>` und `<textarea>`, haben ihre Namen und Werte bei der Übermittlung ihres zugeordneten `<form>` übermittelt.

In diesem Fall, auch wenn das `<output>` implizit und dann explizit mit dem `calcForm` verknüpft ist, wird das `result` nicht zusammen mit `a` und `b` übermittelt, wenn `calcForm` übermittelt wird. Es ist jedoch Teil der `HTMLFormControlsCollection` des Formulars.

```html
<form id="calcForm">
  <label>First number: <input id="a" value="2" type="number" /></label>
  <label>Second number: <input id="b" value="3" type="number" /></label>
  <label>Sum: <output name="result" for="a b" form="calcForm">5</output></label>
</form>
```

## Beispiele

### Einfaches Beispiel

Dieses Beispiel zeigt, wie formularassoziierte Elemente mit einem `<form>`-Element über das `form`-Attribut verknüpft werden können, selbst wenn sie nicht explizit darin verschachtelt sind. Alle in diesem Beispiel gezeigten formularassoziierten Elemente sind entweder implizit (durch direkte Verschachtelung im Formular) oder explizit über das `form`-Attribut mit dem `loginForm` verbunden. Wenn das Login-Formular übermittelt wird, werden die Namen und Werte jedes übermittlungsfähigen Elements mit eingeschlossen.

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

In diesem Beispiel haben wir zwei `<form>`-Elemente: `parentForm` und `targetForm`. Der `<button>` innerhalb des `parentForm` hat sein `form`-Attribut auf `targetForm` gesetzt, was es von seinem nächstgelegenen Vorfahren `parentForm` trennt, während es mit dem `targetForm` verbunden wird. Wenn der Sende-Button aktiviert wird, wird das `targetForm` gesendet, nicht sein `parentForm`-Vorfahre.

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

- [Überschreiben von Standardformularverhalten](/de/docs/Web/HTML/Reference/Elements/input/image#overriding_default_form_behaviors)
