---
title: HTMLFormElement
slug: Web/API/HTMLFormElement
l10n:
  sourceCommit: 741cd0c24cded872cca0a53dc2b74afd71d3800b
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement`**-Schnittstelle repräsentiert ein {{HTMLElement("form")}}-Element im DOM. Sie ermöglicht den Zugriff auf bestimmte Aspekte des Formulars und deren Änderung sowie den Zugriff auf die Komponenten des Formulars.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLFormElement.elements")}} {{ReadOnlyInline}}
  - : Eine {{domxref("HTMLFormControlsCollection")}}, die alle Formularsteuerungen umfasst, die zu diesem Formularelement gehören.
- {{domxref("HTMLFormElement.length")}} {{ReadOnlyInline}}
  - : Ein `long`, der die Anzahl der Steuerelemente im Formular widerspiegelt.
- {{domxref("HTMLFormElement.name")}}
  - : Ein String, der den Wert des [`name`](/de/docs/Web/HTML/Element/form#name)-HTML-Attributs des Formulars widerspiegelt, der den Namen des Formulars enthält.
- {{domxref("HTMLFormElement.method")}}
  - : Ein String, der den Wert des [`method`](/de/docs/Web/HTML/Element/form#method)-HTML-Attributs des Formulars widerspiegelt und die HTTP-Methode angibt, die zum Versenden des Formulars verwendet wird. Nur festgelegte Werte können gesetzt werden.
- {{domxref("HTMLFormElement.target")}}
  - : Ein String, der den Wert des [`target`](/de/docs/Web/HTML/Element/form#target)-HTML-Attributs des Formulars widerspiegelt und angibt, wo die Ergebnisse des abgesetzten Formulars angezeigt werden sollen.
- {{domxref("HTMLFormElement.action")}}
  - : Ein String, der den Wert des [`action`](/de/docs/Web/HTML/Element/form#action)-HTML-Attributs des Formulars widerspiegelt und die URI eines Programms enthält, das die vom Formular übermittelten Informationen verarbeitet.
- {{domxref("HTMLFormElement.encoding")}} oder {{domxref("HTMLFormElement.enctype")}}
  - : Ein String, der den Wert des [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-HTML-Attributs des Formulars widerspiegelt und die Art des Inhalts angibt, der verwendet wird, um das Formular an den Server zu übertragen. Nur festgelegte Werte können gesetzt werden. Die beiden Eigenschaften sind Synonyme.
- {{domxref("HTMLFormElement.acceptCharset")}}
  - : Ein String, der den Wert des [`accept-charset`](/de/docs/Web/HTML/Element/form#accept-charset)-HTML-Attributs des Formulars widerspiegelt und die vom Server akzeptierte Zeichenkodierung darstellt.
- {{domxref("HTMLFormElement.autocomplete")}}
  - : Ein String, der den Wert des [`autocomplete`](/de/docs/Web/HTML/Element/form#autocomplete)-HTML-Attributs des Formulars widerspiegelt und angibt, ob die Steuerelemente in diesem Formular automatisch vom Browser ausgefüllt werden können.
- {{domxref("HTMLFormElement.noValidate")}}
  - : Ein boolescher Wert, der den Wert des [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-HTML-Attributs des Formulars widerspiegelt und angibt, ob das Formular nicht validiert werden soll.

Benannte Eingaben werden ihrem Eigentümerformular als Eigenschaften hinzugefügt und können native Eigenschaften überschreiben, wenn sie denselben Namen teilen (z.B. ein Formular mit einer Eingabe namens `action` wird seine `action`-Eigenschaft zurückgeben, anstatt des [`action`](/de/docs/Web/HTML/Element/form#action)-HTML-Attributs des Formulars).

## Instanzmethoden

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLFormElement.checkValidity", "checkValidity()")}}
  - : Gibt `true` zurück, wenn die untergeordneten Steuerelemente des Elements einer [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) unterliegen und diese Einschränkungen erfüllen; gibt `false` zurück, wenn einige Steuerelemente ihre Einschränkungen nicht erfüllen. Es wird ein Ereignis namens {{domxref("HTMLInputElement/invalid_event", "invalid")}} bei jedem Steuerelement ausgelöst, das seine Einschränkungen nicht erfüllt; solche Steuerelemente werden als ungültig angesehen, wenn das Ereignis nicht abgebrochen wird. Es liegt am Programmierer zu entscheiden, wie auf `false` reagiert wird.
- {{domxref("HTMLFormElement.reportValidity", "reportValidity()")}}
  - : Gibt `true` zurück, wenn die untergeordneten Steuerelemente des Elements ihre [Validierungsbeschränkungen](/de/docs/Web/HTML/Constraint_validation) erfüllen. Wenn `false` zurückgegeben wird, werden stornierbare {{domxref("HTMLInputElement/invalid_event", "invalid")}}-Ereignisse für jedes ungültige Kind ausgelöst und Validierungsprobleme dem Benutzer gemeldet.
- {{domxref("HTMLFormElement.requestSubmit", "requestSubmit()")}}
  - : Fordert an, dass das Formular mithilfe des angegebenen Absende-Buttons und dessen entsprechender Konfiguration übermittelt wird.
- {{domxref("HTMLFormElement.reset", "reset()")}}
  - : Setzt das Formular auf seinen ursprünglichen Zustand zurück.
- {{domxref("HTMLFormElement.submit", "submit()")}}
  - : Sendet das Formular an den Server.

## Ereignisse

Diese Ereignisse können mit `addEventListener()` abgehört werden oder indem ein Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zugewiesen wird.

- {{domxref("HTMLFormElement/formdata_event", "formdata")}}
  - : Das `formdata`-Ereignis wird ausgelöst, nachdem die Eintragsliste, die die Daten des Formulars darstellt, erstellt wurde.
- {{domxref("HTMLFormElement/reset_event", "reset")}}
  - : Das `reset`-Ereignis wird ausgelöst, wenn ein Formular zurückgesetzt wird.
- {{domxref("HTMLFormElement/submit_event", "submit")}}
  - : Das `submit`-Ereignis wird ausgelöst, wenn ein Formular abgesendet wird.

## Nutzungshinweise

### Ein Formularelement-Objekt erhalten

Um ein `HTMLFormElement`-Objekt zu erhalten, können Sie einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) mit {{domxref("Document.querySelector", "querySelector()")}} verwenden oder Sie können eine Liste aller Formulare im Dokument mithilfe der {{domxref("Document.forms", "forms")}}-Eigenschaft abrufen.

{{domxref("Document.forms")}} gibt ein Array von `HTMLFormElement`-Objekten zurück, die jedes der Formulare auf der Seite auflisten. Sie können dann eine der folgenden Syntaxen verwenden, um ein einzelnes Formular zu erhalten:

- `document.forms[index]`
  - : Gibt das Formular am angegebenen `index` im Array der Formulare zurück.
- `document.forms[id]`
  - : Gibt das Formular zurück, dessen ID `id` ist.
- `document.forms[name]`
  - : Gibt das Formular zurück, dessen `name`-Attributswert `name` ist.

### Zugriff auf die Elemente des Formulars

Sie können auf die Liste der datenhaltigen Elemente des Formulars zugreifen, indem Sie die {{domxref("HTMLFormElement.elements", "elements")}}-Eigenschaft des Formulars untersuchen. Diese gibt eine {{domxref("HTMLFormControlsCollection")}} zurück, die alle Benutzerdaten-Eingabeelemente des Formulars auflistet, sowohl diejenigen, die Nachkommen des `<form>` sind, als auch diejenigen, die über ihre `form`-Attribute Mitglieder des Formulars sind.

Sie können auch auf das Formularelement zugreifen, indem Sie sein `name`-Attribut als Schlüssel des `form` verwenden, aber die Verwendung von `elements` ist ein besserer Ansatz – es enthält _nur_ die Elemente des Formulars und kann nicht mit anderen Attributen des `form` vermischt werden.

### Probleme mit der Benennung von Elementen

Einige Namen können den JavaScript-Zugriff auf die Eigenschaften und Elemente des Formulars stören.

Zum Beispiel:

- `<input name="id">` wird Vorrang vor `<form id="…">` haben. Das bedeutet, dass `form.id` nicht die ID des Formulars referenzieren wird, sondern das Element, dessen Name "`id`" ist. Dies wird der Fall bei allen anderen Formulareigenschaften sein, wie `<input name="action">` oder `<input name="post">`.
- `<input name="elements">` wird die `elements`-Sammlung des Formulars unzugänglich machen. Die Referenz `form.elements` wird jetzt auf das einzelne Element verweisen.

Um solche Probleme mit Elementnamen zu vermeiden:

- _Verwenden Sie immer_ die `elements`-Sammlung, um Mehrdeutigkeiten zwischen einem Elementnamen und einer Formulareigenschaft zu vermeiden.
- _Verwenden Sie niemals_ "`elements`" als Elementnamen.

Wenn Sie kein JavaScript verwenden, wird dies kein Problem verursachen.

### Elemente, die als Formularsteuerelemente betrachtet werden

Die von `HTMLFormElement.elements` und `HTMLFormElement.length` enthaltenen Elemente sind die folgenden:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (mit der Ausnahme, dass solche, deren [`type`](/de/docs/Web/HTML/Element/input#type) `"image"` ist, aus historischen Gründen weggelassen werden)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Keine anderen Elemente sind in der von `elements` zurückgegebenen Liste enthalten, was es zu einer ausgezeichneten Möglichkeit macht, die wichtigsten Elemente beim Verarbeiten von Formularen zu erfassen.

## Beispiele

Ein neues Formularelement erstellen, seine Attribute ändern und es dann absenden:

```js
const f = document.createElement("form"); // Ein Formular erstellen
document.body.appendChild(f); // Es dem Dokumenten-Body hinzufügen
f.action = "/cgi-bin/some.cgi"; // Action- und Method-Attribute hinzufügen
f.method = "POST";
f.submit(); // Die submit()-Methode des Formulars aufrufen
```

Informationen aus einem `<form>`-Element extrahieren und einige seiner Attribute festlegen:

```html
<form name="formA" action="/cgi-bin/test" method="post">
  <p>Drücken Sie "Info" für Formulardetails oder "Set", um diese Details zu ändern.</p>
  <p>
    <button type="button" onclick="getFormInfo();">Info</button>
    <button type="button" onclick="setFormInfo(this.form);">Set</button>
    <button type="reset">Zurücksetzen</button>
  </p>

  <textarea id="form-info" rows="15" cols="20"></textarea>
</form>

<script>
  function getFormInfo() {
    // Eine Referenz zum Formular über seinen Namen abrufen
    const f = document.forms["formA"];
    // Die Formulareigenschaften, an denen wir interessiert sind
    const properties = [
      "elements",
      "length",
      "name",
      "charset",
      "action",
      "acceptCharset",
      "action",
      "enctype",
      "method",
      "target",
    ];
    // Über die Eigenschaften iterieren und sie in einen String umwandeln, den wir dem Benutzer anzeigen können
    const info = properties
      .map((property) => `${property}: ${f[property]}`)
      .join("\n");

    // Das <textarea> des Formulars auf die Anzeige der Formulareigenschaften setzen
    document.forms["formA"].elements["form-info"].value = info; // document.forms["formA"]['form-info'].value würde auch funktionieren
  }

  function setFormInfo(f) {
    // Das Argument sollte eine Formularelement-Referenz sein.
    f.action = "a-different-url.cgi";
    f.name = "a-different-name";
  }
</script>
```

Ein `<form>` in ein neues Fenster absenden:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Beispiel für die Formularübermittlung in einem neuen Fenster</title>
  </head>
  <body>
    <form action="test.php" target="_blank">
      <p>
        <label>Vorname: <input type="text" name="firstname" /></label>
      </p>
      <p>
        <label>Nachname: <input type="text" name="lastname" /></label>
      </p>
      <p>
        <label><input type="password" name="pwd" /></label>
      </p>

      <fieldset>
        <legend>Haustier-Präferenz</legend>

        <p>
          <label><input type="radio" name="pet" value="cat" /> Katze</label>
        </p>
        <p>
          <label><input type="radio" name="pet" value="dog" /> Hund</label>
        </p>
      </fieldset>

      <fieldset>
        <legend>Besitz von Fahrzeugen</legend>

        <p>
          <label
            ><input type="checkbox" name="vehicle" value="Bike" />Ich habe ein
            Fahrrad</label
          >
        </p>
        <p>
          <label
            ><input type="checkbox" name="vehicle" value="Car" />Ich habe ein
            Auto</label
          >
        </p>
      </fieldset>

      <p><button>Absenden</button></p>
    </form>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("form")}}.
